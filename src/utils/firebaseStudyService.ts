import { type User } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  Timestamp,
  where,
  writeBatch,
} from 'firebase/firestore';
import type { DisciplineStatusOverride } from '../components/DashboardView';
import { db, handleFirestoreError, OperationType } from '../firebaseConfig';
import type { QuestionAttempt, QuestionProgressRecord, QuestionSrsStatus, SrsItemType } from './srs';
import type { StudyUserData } from './studyStorage';

export const AVATAR_OPTIONS = ['📚', '🎯', '🦉', '⚡', '🏛️', '🚀', '🌿', '✨'] as const;

export interface CloudUserProfile {
  name: string;
  email: string;
  avatar: string;
  themePreference: 'light' | 'dark';
  pomodoroSessions: number;
  studiedMinutes: number;
}

export interface CloudSyllabusProgress {
  completedTopics: string[];
  completedDays: number[];
  dayNotes: Record<string, string>;
  statusOverrides: Record<string, DisciplineStatusOverride>;
}

export interface CloudQuestionHistoryEntry {
  status: QuestionSrsStatus;
  acertosConsecutivos: 0 | 1 | 2 | 3;
  totalAcertos: number;
  totalErros: number;
  itemType: SrsItemType;
  topicId: string;
  disciplineId: string;
  updatedAt: Timestamp | number;
}

export interface CloudGameRecords {
  sprintBestScore: number;
}

export interface CloudUserDocument {
  uid: string;
  profile: CloudUserProfile;
  syllabusProgress: CloudSyllabusProgress;
  questionsHistory: Record<string, CloudQuestionHistoryEntry>;
  questionAttempts: QuestionAttempt[];
  gameRecords: CloudGameRecords;
  createdAt?: Timestamp | unknown;
  updatedAt?: Timestamp | unknown;
}

export interface LeaderboardEntry {
  uid: string;
  name: string;
  avatar: string;
  totalAnswered: number;
  accuracyRate: number;
  masteredCount: number;
  pomodoroCount: number;
  updatedAt?: Timestamp | unknown;
}

export interface AppStudyState {
  profile: CloudUserProfile;
  completedTopics: string[];
  completedDays: number[];
  dayNotes: Record<number, string>;
  statusOverrides: Record<string, DisciplineStatusOverride>;
  questionProgress: Record<string, QuestionProgressRecord>;
  questionAttempts: QuestionAttempt[];
  sprintBestScore: number;
}

export function createInitialStudyState(params: {
  name: string;
  email: string;
  avatar?: string;
  themePreference?: 'light' | 'dark';
}): AppStudyState {
  return {
    profile: {
      name: params.name.trim().slice(0, 80) || 'Candidato',
      email: params.email.trim().slice(0, 160),
      avatar: params.avatar || AVATAR_OPTIONS[0],
      themePreference: params.themePreference ?? 'dark',
      pomodoroSessions: 0,
      studiedMinutes: 0,
    },
    completedTopics: [],
    completedDays: [],
    dayNotes: {},
    statusOverrides: {},
    questionProgress: {},
    questionAttempts: [],
    sprintBestScore: 0,
  };
}

function toTimestampMillis(val: unknown): number {
  if (typeof val === 'number') return val;
  if (val && typeof val === 'object' && 'toMillis' in val && typeof (val as Timestamp).toMillis === 'function') {
    return (val as Timestamp).toMillis();
  }
  return Date.now();
}

export function cloudDocToAppState(docData: Partial<CloudUserDocument>, fallbackUser: User): AppStudyState {
  const p = docData.profile;
  const sp = docData.syllabusProgress;
  const qh = docData.questionsHistory ?? {};
  const attempts = Array.isArray(docData.questionAttempts) ? docData.questionAttempts : [];
  const gr = docData.gameRecords;

  const dayNotes: Record<number, string> = {};
  if (sp?.dayNotes && typeof sp.dayNotes === 'object') {
    for (const [k, v] of Object.entries(sp.dayNotes)) {
      const num = Number(k);
      if (!Number.isNaN(num) && typeof v === 'string') {
        dayNotes[num] = v;
      }
    }
  }

  const questionProgress: Record<string, QuestionProgressRecord> = {};
  for (const [id, entry] of Object.entries(qh)) {
    if (!entry || typeof entry !== 'object') continue;
    questionProgress[id] = {
      id,
      itemType: entry.itemType ?? (id.startsWith('fc-') ? 'flashcard' : id.startsWith('tr-') ? 'trap' : 'question'),
      disciplineId: String(entry.disciplineId ?? ''),
      topicCode: String(entry.topicId ?? ''),
      status: entry.status ?? 'inedita',
      acertosConsecutivos: (entry.acertosConsecutivos ?? 0) as 0 | 1 | 2 | 3,
      totalAcertos: Number(entry.totalAcertos ?? 0),
      totalErros: Number(entry.totalErros ?? 0),
      lastUpdatedAt: toTimestampMillis(entry.updatedAt),
    };
  }

  return {
    profile: {
      name: p?.name || fallbackUser.displayName || 'Candidato',
      email: p?.email || fallbackUser.email || '',
      avatar: p?.avatar || AVATAR_OPTIONS[0],
      themePreference: p?.themePreference === 'light' ? 'light' : 'dark',
      pomodoroSessions: typeof p?.pomodoroSessions === 'number' ? p.pomodoroSessions : 0,
      studiedMinutes: typeof p?.studiedMinutes === 'number' ? p.studiedMinutes : 0,
    },
    completedTopics: Array.isArray(sp?.completedTopics) ? sp.completedTopics : [],
    completedDays: Array.isArray(sp?.completedDays) ? sp.completedDays : [],
    dayNotes,
    statusOverrides: sp?.statusOverrides && typeof sp.statusOverrides === 'object' ? sp.statusOverrides : {},
    questionProgress,
    questionAttempts: attempts,
    sprintBestScore: typeof gr?.sprintBestScore === 'number' ? gr.sprintBestScore : 0,
  };
}

function sanitizeDayNotes(notes: Record<number, string>): Record<string, string> {
  const out: Record<string, string> = {};
  const entries = Object.entries(notes).slice(0, 60);
  for (const [k, v] of entries) {
    if (typeof v === 'string' && v.trim().length > 0) {
      out[String(k)] = v.slice(0, 4000);
    }
  }
  return out;
}

function buildFirestorePayloads(uid: string, state: AppStudyState) {
  const questionsHistory: Record<string, CloudQuestionHistoryEntry> = {};
  for (const [id, rec] of Object.entries(state.questionProgress).slice(0, 400)) {
    questionsHistory[id] = {
      status: rec.status,
      acertosConsecutivos: rec.acertosConsecutivos,
      totalAcertos: rec.totalAcertos,
      totalErros: rec.totalErros,
      itemType: rec.itemType,
      topicId: rec.topicCode,
      disciplineId: rec.disciplineId,
      updatedAt: Timestamp.fromMillis(rec.lastUpdatedAt || Date.now()),
    };
  }

  const cappedAttempts = state.questionAttempts.slice(-1000);
  const totalAnswered = cappedAttempts.length;
  const totalHits = cappedAttempts.filter((a) => a.isCorrect).length;
  const accuracyRate = totalAnswered > 0 ? Math.round((totalHits / totalAnswered) * 100) : 0;
  const masteredCount = Object.values(state.questionProgress).filter(
    (r) => r.status === 'dominada'
  ).length;

  const profilePayload: CloudUserProfile = {
    name: (state.profile.name || 'Candidato').trim().slice(0, 80) || 'Candidato',
    email: (state.profile.email || '').trim().slice(0, 160),
    avatar: (state.profile.avatar || AVATAR_OPTIONS[0]).slice(0, 16),
    themePreference: state.profile.themePreference === 'light' ? 'light' : 'dark',
    pomodoroSessions: Math.max(0, Math.min(100000, Math.round(state.profile.pomodoroSessions))),
    studiedMinutes: Math.max(0, Math.min(1000000, Math.round(state.profile.studiedMinutes))),
  };

  const userUpdate = {
    uid,
    profile: profilePayload,
    syllabusProgress: {
      completedTopics: state.completedTopics.slice(0, 200),
      completedDays: state.completedDays.slice(0, 60),
      dayNotes: sanitizeDayNotes(state.dayNotes),
      statusOverrides: state.statusOverrides,
    },
    questionsHistory,
    questionAttempts: cappedAttempts,
    gameRecords: {
      sprintBestScore: Math.max(0, Math.min(1000000, Math.round(state.sprintBestScore))),
    },
  };

  const leaderboardPayload = {
    uid,
    name: profilePayload.name,
    avatar: profilePayload.avatar,
    totalAnswered,
    accuracyRate,
    masteredCount,
    pomodoroCount: profilePayload.pomodoroSessions,
    updatedAt: serverTimestamp(),
  };

  return { userUpdate, leaderboardPayload };
}

let pendingRegistrationProfile: { displayName?: string; avatar?: string } | null = null;
const inFlightEnsure = new Map<string, Promise<void>>();

export function setPendingRegistrationProfile(
  meta: { displayName?: string; avatar?: string } | null
): void {
  pendingRegistrationProfile = meta;
}

export async function ensureUserDocuments(
  user: User,
  opts?: { displayName?: string; avatar?: string }
): Promise<void> {
  if (!db) return;

  const existingPromise = inFlightEnsure.get(user.uid);
  if (existingPromise) {
    return existingPromise;
  }

  const firestore = db;
  const task = (async () => {
    const userPath = `users/${user.uid}`;
    const leaderPath = `leaderboard/${user.uid}`;
    const userRef = doc(firestore, 'users', user.uid);
    const leaderRef = doc(firestore, 'leaderboard', user.uid);

    const effectiveOpts = opts ?? pendingRegistrationProfile ?? undefined;
    if (pendingRegistrationProfile) {
      pendingRegistrationProfile = null;
    }

    let snap;
    try {
      snap = await getDoc(userRef);
    } catch (err) {
      handleFirestoreError(err, OperationType.GET, userPath);
    }

    if (snap.exists()) {
      try {
        const leaderSnap = await getDoc(leaderRef);
        if (!leaderSnap.exists()) {
          const state = cloudDocToAppState(snap.data() as CloudUserDocument, user);
          const { leaderboardPayload } = buildFirestorePayloads(user.uid, state);
          const batch = writeBatch(firestore);
          batch.set(leaderRef, leaderboardPayload);
          await batch.commit();
        }
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, leaderPath);
      }
      return;
    }

    const initialState = createInitialStudyState({
      name:
        effectiveOpts?.displayName ||
        user.displayName ||
        user.email?.split('@')[0] ||
        'Candidato',
      email: user.email || '',
      avatar: effectiveOpts?.avatar || AVATAR_OPTIONS[0],
    });

    const { userUpdate, leaderboardPayload } = buildFirestorePayloads(user.uid, initialState);

    try {
      const batch = writeBatch(firestore);
      batch.set(userRef, {
        ...userUpdate,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      batch.set(leaderRef, leaderboardPayload);
      await batch.commit();
    } catch (err) {
      // If another tab/listener created the document simultaneously, verify before throwing
      try {
        const recheck = await getDoc(userRef);
        if (recheck.exists()) return;
      } catch {
        // Fall through to handleFirestoreError
      }
      handleFirestoreError(err, OperationType.CREATE, userPath);
    }
  })();

  inFlightEnsure.set(user.uid, task);
  try {
    await task;
  } finally {
    inFlightEnsure.delete(user.uid);
  }
}

export async function saveUserStateToCloud(uid: string, state: AppStudyState): Promise<void> {
  if (!db) return;
  const userPath = `users/${uid}`;
  const userRef = doc(db, 'users', uid);
  const leaderRef = doc(db, 'leaderboard', uid);

  const { userUpdate, leaderboardPayload } = buildFirestorePayloads(uid, state);

  try {
    const batch = writeBatch(db);
    batch.update(userRef, {
      profile: userUpdate.profile,
      syllabusProgress: userUpdate.syllabusProgress,
      questionsHistory: userUpdate.questionsHistory,
      questionAttempts: userUpdate.questionAttempts,
      gameRecords: userUpdate.gameRecords,
      updatedAt: serverTimestamp(),
    });
    batch.set(leaderRef, leaderboardPayload);
    await batch.commit();
  } catch (err) {
    handleFirestoreError(err, OperationType.UPDATE, userPath);
  }
}

export function subscribeToUserDocument(
  user: User,
  onData: (state: AppStudyState) => void,
  onError: (err: Error) => void
): () => void {
  if (!db) return () => {};
  const path = `users/${user.uid}`;
  return onSnapshot(
    doc(db, 'users', user.uid),
    (snapshot) => {
      if (!snapshot.exists()) return;
      const converted = cloudDocToAppState(snapshot.data() as CloudUserDocument, user);
      onData(converted);
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.GET, path);
      } catch (wrapped) {
        onError(wrapped instanceof Error ? wrapped : new Error(String(wrapped)));
      }
    }
  );
}

export function subscribeToLeaderboard(
  onData: (entries: LeaderboardEntry[]) => void,
  onError?: (err: Error) => void
): () => void {
  if (!db) return () => {};
  const path = 'leaderboard';
  const q = query(collection(db, 'leaderboard'), where('totalAnswered', '>=', 0));
  return onSnapshot(
    q,
    (snapshot) => {
      const list: LeaderboardEntry[] = [];
      snapshot.forEach((docSnap) => {
        const d = docSnap.data() as LeaderboardEntry;
        list.push({
          uid: d.uid || docSnap.id,
          name: d.name || 'Candidato',
          avatar: d.avatar || '📚',
          totalAnswered: Number(d.totalAnswered ?? 0),
          accuracyRate: Number(d.accuracyRate ?? 0),
          masteredCount: Number(d.masteredCount ?? 0),
          pomodoroCount: Number(d.pomodoroCount ?? 0),
          updatedAt: d.updatedAt,
        });
      });
      list.sort(
        (a, b) =>
          b.masteredCount - a.masteredCount ||
          b.accuracyRate - a.accuracyRate ||
          b.totalAnswered - a.totalAnswered
      );
      onData(list);
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.LIST, path);
      } catch (wrapped) {
        onError?.(wrapped instanceof Error ? wrapped : new Error(String(wrapped)));
      }
    }
  );
}

export function legacyDataToAppState(
  legacy: StudyUserData,
  currentProfile: CloudUserProfile
): AppStudyState {
  return {
    profile: {
      ...currentProfile,
      studiedMinutes: Math.max(currentProfile.studiedMinutes, legacy.studiedMinutes || 0),
      pomodoroSessions: Math.max(
        currentProfile.pomodoroSessions,
        Math.floor((legacy.studiedMinutes || 0) / 30)
      ),
      themePreference: legacy.theme ?? currentProfile.themePreference,
    },
    completedTopics: legacy.completedTopics ?? [],
    completedDays: legacy.completedDays ?? [],
    dayNotes: legacy.dayNotes ?? {},
    statusOverrides: legacy.statusOverrides ?? {},
    questionProgress: legacy.questionProgress ?? {},
    questionAttempts: legacy.questionAttempts ?? [],
    sprintBestScore: legacy.sprintBestScore ?? 0,
  };
}

export function appStateToExportBundle(uid: string, state: AppStudyState): string {
  const legacyLike: StudyUserData = {
    completedTopics: state.completedTopics,
    completedDays: state.completedDays,
    dayNotes: state.dayNotes,
    studiedMinutes: state.profile.studiedMinutes,
    quizAnswers: {},
    questionProgress: state.questionProgress,
    questionAttempts: state.questionAttempts,
    statusOverrides: state.statusOverrides,
    masteredFlashcards: Object.values(state.questionProgress)
      .filter((r) => r.itemType === 'flashcard' && r.status === 'dominada')
      .map((r) => r.id),
    sprintBestScore: state.sprintBestScore,
    theme: state.profile.themePreference,
  };

  return JSON.stringify(
    {
      version: 1,
      app: 'curitiba-agente-administrativo-2026',
      userId: uid,
      profileName: state.profile.name,
      exportedAt: new Date().toISOString(),
      data: legacyLike,
    },
    null,
    2
  );
}
