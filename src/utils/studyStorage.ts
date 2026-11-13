import type { DisciplineStatusOverride } from '../components/DashboardView';
import type { QuestionAttempt, QuestionProgressRecord } from './srs';

export interface UserProfile {
  id: string;
  name: string;
  createdAt: number;
}

export interface StudyUserData {
  completedTopics: string[];
  completedDays: number[];
  dayNotes: Record<number, string>;
  studiedMinutes: number;
  quizAnswers: Record<string, number>;
  questionProgress: Record<string, QuestionProgressRecord>;
  questionAttempts: QuestionAttempt[];
  statusOverrides: Record<string, DisciplineStatusOverride>;
  masteredFlashcards: string[];
  sprintBestScore: number;
  theme: 'light' | 'dark';
}

export const USER_DATA_KEY_PREFIX = 'study_app_data_';
const USERS_REGISTRY_KEY = 'study_app_users_v1';
const ACTIVE_USER_KEY = 'study_app_active_user_v1';

const LEGACY_KEYS = {
  completedTopics: 'curitiba_study_completed_topics_v1',
  completedDays: 'curitiba_study_completed_days_v1',
  dayNotes: 'curitiba_study_day_notes_v1',
  studiedMinutes: 'curitiba_study_minutes_v1',
  quizAnswers: 'curitiba_study_quiz_answers_v1',
  questionAttempts: 'curitiba_study_question_attempts_v1',
  statusOverrides: 'curitiba_study_status_overrides_v1',
  masteredFlashcards: 'curitiba_study_mastered_flashcards_v1',
  sprintBest: 'curitiba_study_sprint_best_v1',
  theme: 'curitiba_study_theme_v1',
};

export function createEmptyUserData(theme: 'light' | 'dark' = 'dark'): StudyUserData {
  return {
    completedTopics: [],
    completedDays: [],
    dayNotes: {},
    studiedMinutes: 0,
    quizAnswers: {},
    questionProgress: {},
    questionAttempts: [],
    statusOverrides: {},
    masteredFlashcards: [],
    sprintBestScore: 0,
    theme,
  };
}

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function getUserStorageKey(userId: string): string {
  return `${USER_DATA_KEY_PREFIX}${userId}`;
}

export function sanitizeUserId(raw: string): string {
  const cleaned = raw
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9_-]+/g, '_')
    .replace(/^_+|_+$/g, '');
  return cleaned || `perfil_${Date.now()}`;
}

export function loadUserProfiles(): { profiles: UserProfile[]; activeUserId: string } {
  try {
    const storedProfiles = safeJsonParse<UserProfile[]>(
      localStorage.getItem(USERS_REGISTRY_KEY),
      []
    );
    const storedActiveId = localStorage.getItem(ACTIVE_USER_KEY);

    if (storedProfiles.length > 0) {
      const validActive = storedProfiles.some((p) => p.id === storedActiveId)
        ? (storedActiveId as string)
        : storedProfiles[0].id;
      return { profiles: storedProfiles, activeUserId: validActive };
    }

    const defaultProfile: UserProfile = {
      id: 'principal',
      name: 'Perfil Principal',
      createdAt: Date.now(),
    };
    localStorage.setItem(USERS_REGISTRY_KEY, JSON.stringify([defaultProfile]));
    localStorage.setItem(ACTIVE_USER_KEY, defaultProfile.id);
    return { profiles: [defaultProfile], activeUserId: defaultProfile.id };
  } catch {
    return {
      profiles: [{ id: 'principal', name: 'Perfil Principal', createdAt: Date.now() }],
      activeUserId: 'principal',
    };
  }
}

export function saveUserProfiles(profiles: UserProfile[], activeUserId: string): void {
  try {
    localStorage.setItem(USERS_REGISTRY_KEY, JSON.stringify(profiles));
    localStorage.setItem(ACTIVE_USER_KEY, activeUserId);
  } catch {
    // Ignore storage quota errors
  }
}

function readLegacyDataIfPresent(): StudyUserData | null {
  try {
    const hasLegacy = Object.values(LEGACY_KEYS).some(
      (key) => localStorage.getItem(key) !== null
    );
    if (!hasLegacy) return null;

    return {
      completedTopics: safeJsonParse<string[]>(
        localStorage.getItem(LEGACY_KEYS.completedTopics),
        []
      ),
      completedDays: safeJsonParse<number[]>(
        localStorage.getItem(LEGACY_KEYS.completedDays),
        []
      ),
      dayNotes: safeJsonParse<Record<number, string>>(
        localStorage.getItem(LEGACY_KEYS.dayNotes),
        {}
      ),
      studiedMinutes: safeJsonParse<number>(
        localStorage.getItem(LEGACY_KEYS.studiedMinutes),
        0
      ),
      quizAnswers: safeJsonParse<Record<string, number>>(
        localStorage.getItem(LEGACY_KEYS.quizAnswers),
        {}
      ),
      questionProgress: {},
      questionAttempts: safeJsonParse<QuestionAttempt[]>(
        localStorage.getItem(LEGACY_KEYS.questionAttempts),
        []
      ),
      statusOverrides: safeJsonParse<Record<string, DisciplineStatusOverride>>(
        localStorage.getItem(LEGACY_KEYS.statusOverrides),
        {}
      ),
      masteredFlashcards: safeJsonParse<string[]>(
        localStorage.getItem(LEGACY_KEYS.masteredFlashcards),
        []
      ),
      sprintBestScore: safeJsonParse<number>(
        localStorage.getItem(LEGACY_KEYS.sprintBest),
        0
      ),
      theme: safeJsonParse<'light' | 'dark'>(
        localStorage.getItem(LEGACY_KEYS.theme),
        'dark'
      ),
    };
  } catch {
    return null;
  }
}

export function normalizeUserData(raw: Partial<StudyUserData> | null | undefined): StudyUserData {
  const base = createEmptyUserData();
  if (!raw || typeof raw !== 'object') return base;

  return {
    completedTopics: Array.isArray(raw.completedTopics) ? raw.completedTopics : [],
    completedDays: Array.isArray(raw.completedDays) ? raw.completedDays : [],
    dayNotes: raw.dayNotes && typeof raw.dayNotes === 'object' ? raw.dayNotes : {},
    studiedMinutes: typeof raw.studiedMinutes === 'number' ? raw.studiedMinutes : 0,
    quizAnswers: raw.quizAnswers && typeof raw.quizAnswers === 'object' ? raw.quizAnswers : {},
    questionProgress:
      raw.questionProgress && typeof raw.questionProgress === 'object'
        ? raw.questionProgress
        : {},
    questionAttempts: Array.isArray(raw.questionAttempts) ? raw.questionAttempts : [],
    statusOverrides:
      raw.statusOverrides && typeof raw.statusOverrides === 'object'
        ? raw.statusOverrides
        : {},
    masteredFlashcards: Array.isArray(raw.masteredFlashcards) ? raw.masteredFlashcards : [],
    sprintBestScore: typeof raw.sprintBestScore === 'number' ? raw.sprintBestScore : 0,
    theme: raw.theme === 'light' || raw.theme === 'dark' ? raw.theme : 'dark',
  };
}

export function loadUserData(userId: string): StudyUserData {
  try {
    const key = getUserStorageKey(userId);
    const raw = localStorage.getItem(key);
    if (raw) {
      return normalizeUserData(JSON.parse(raw) as Partial<StudyUserData>);
    }

    if (userId === 'principal') {
      const legacy = readLegacyDataIfPresent();
      if (legacy) {
        saveUserData(userId, legacy);
        return legacy;
      }
    }
    return createEmptyUserData();
  } catch {
    return createEmptyUserData();
  }
}

export function saveUserData(userId: string, data: StudyUserData): void {
  try {
    localStorage.setItem(getUserStorageKey(userId), JSON.stringify(data));
  } catch {
    // Ignore
  }
}

export interface ExportedProgressBundle {
  version: 1;
  app: 'curitiba-agente-administrativo-2026';
  userId: string;
  profileName: string;
  exportedAt: string;
  storageKey: string;
  data: StudyUserData;
}

export function buildExportBundle(
  profile: UserProfile,
  data: StudyUserData
): ExportedProgressBundle {
  return {
    version: 1,
    app: 'curitiba-agente-administrativo-2026',
    userId: profile.id,
    profileName: profile.name,
    exportedAt: new Date().toISOString(),
    storageKey: getUserStorageKey(profile.id),
    data,
  };
}

export function parseImportJson(
  jsonText: string
): { ok: true; data: StudyUserData; sourceUserId?: string } | { ok: false; error: string } {
  try {
    const parsed = JSON.parse(jsonText) as Record<string, unknown>;
    if (!parsed || typeof parsed !== 'object') {
      return { ok: false, error: 'O JSON informado não é um objeto válido.' };
    }

    // Support both wrapped ExportedProgressBundle and direct StudyUserData
    if ('data' in parsed && parsed.data && typeof parsed.data === 'object') {
      const normalized = normalizeUserData(parsed.data as Partial<StudyUserData>);
      return {
        ok: true,
        data: normalized,
        sourceUserId: typeof parsed.userId === 'string' ? parsed.userId : undefined,
      };
    }

    const hasKnownField =
      'completedTopics' in parsed ||
      'questionProgress' in parsed ||
      'questionAttempts' in parsed ||
      'studiedMinutes' in parsed;
    if (!hasKnownField) {
      return {
        ok: false,
        error: 'Arquivo JSON não corresponde ao formato de progresso deste aplicativo.',
      };
    }

    return {
      ok: true,
      data: normalizeUserData(parsed as Partial<StudyUserData>),
    };
  } catch {
    return { ok: false, error: 'Erro ao ler o JSON. Verifique se o conteúdo está completo.' };
  }
}
