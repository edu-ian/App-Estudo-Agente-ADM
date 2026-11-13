import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { onAuthStateChanged, signOut, updateProfile, type User } from 'firebase/auth';
import { Bell, Cloud, Loader2, X } from 'lucide-react';
import { AnalyticsView } from './components/AnalyticsView';
import { ApostilaExportView } from './components/ApostilaExportView';
import { AuthView } from './components/AuthView';
import { DashboardView, type DisciplineStatusOverride } from './components/DashboardView';
import { DisciplineView } from './components/DisciplineView';
import {
  FocusTimerBar,
  formatSeconds,
  type PomodoroPhase,
} from './components/FocusTimerBar';
import { MobileBottomBar } from './components/MobileBottomBar';
import { NotionSidebar, type ActivePage } from './components/NotionSidebar';
import { ProfileSyncView } from './components/ProfileSyncView';
import { ScheduleView } from './components/ScheduleView';
import { TopWorkspaceBar } from './components/TopWorkspaceBar';
import {
  TrainingArenaView,
  type TrainingMode,
  type TrainingNavigationRequest,
} from './components/TrainingArenaView';
import { PRACTICE_QUESTIONS } from './data/questions';
import { ALL_TOPICS, DISCIPLINES, EXAM_INFO } from './data/syllabus';
import { auth, isFirebaseConfigured } from './firebaseConfig';
import {
  createInitialStudyState,
  ensureUserDocuments,
  saveUserStateToCloud,
  subscribeToLeaderboard,
  subscribeToUserDocument,
  type AppStudyState,
  type LeaderboardEntry,
} from './utils/firebaseStudyService';
import { playCycleChime } from './utils/sound';
import {
  applySrsOutcome,
  type QuestionAttempt,
  type SrsItemMeta,
  type SrsOutcome,
} from './utils/srs';

const FOCUS_SECONDS = 30 * 60;
const SHORT_BREAK_SECONDS = 5 * 60;
const LONG_BREAK_SECONDS = 15 * 60;

export default function App() {
  const [unauthTheme, setUnauthTheme] = useState<'light' | 'dark'>('dark');

  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(isFirebaseConfigured);
  const [cloudLoading, setCloudLoading] = useState<boolean>(false);
  const [cloudError, setCloudError] = useState<string | null>(null);

  const [studyState, setStudyState] = useState<AppStudyState | null>(null);
  const studyStateRef = useRef<AppStudyState | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'saving' | 'synced' | 'error'>('idle');
  const saveTimerRef = useRef<number | null>(null);

  const [activePage, setActivePage] = useState<ActivePage>('dashboard');
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [selectedScheduleDay, setSelectedScheduleDay] = useState<number>(1);
  const [exportScope, setExportScope] = useState<string>('all');
  const [trainingNavRequest, setTrainingNavRequest] = useState<TrainingNavigationRequest | null>(
    null
  );

  // Custom Pomodoro Cycle: 30m Foco -> 5m Pausa Curta -> 15m Pausa Longa a cada 3 sessões
  const [timerOpen, setTimerOpen] = useState(false);
  const [pomodoroPhase, setPomodoroPhase] = useState<PomodoroPhase>('focus');
  const [sessionInCycle, setSessionInCycle] = useState<1 | 2 | 3>(1);
  const [secondsLeft, setSecondsLeft] = useState<number>(FOCUS_SECONDS);
  const [timerRunning, setTimerRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [cycleToast, setCycleToast] = useState<string | null>(null);

  // Listen to Firebase Auth state
  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setAuthLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      setAuthLoading(false);
      if (!user) {
        if (saveTimerRef.current) {
          window.clearTimeout(saveTimerRef.current);
          saveTimerRef.current = null;
        }
        studyStateRef.current = null;
        setStudyState(null);
        setLeaderboard([]);
        setCloudLoading(false);
        setCloudError(null);
        setSyncStatus('idle');
        setTimerRunning(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to Firestore user document + leaderboard when signed in
  useEffect(() => {
    if (!firebaseUser) return;

    let isMounted = true;
    let unsubUser: (() => void) | null = null;
    let unsubLeaderboard: (() => void) | null = null;

    setCloudLoading(true);
    setCloudError(null);

    const bootCloud = async () => {
      try {
        await ensureUserDocuments(firebaseUser);
        if (!isMounted) return;

        unsubUser = subscribeToUserDocument(
          firebaseUser,
          (incomingState) => {
            if (!isMounted) return;
            studyStateRef.current = incomingState;
            setStudyState(incomingState);
            setCloudLoading(false);
            setSyncStatus((prev) => (prev === 'saving' ? prev : 'synced'));
          },
          () => {
            if (!isMounted) return;
            setCloudLoading(false);
            setSyncStatus('error');
            setCloudError('Não foi possível sincronizar seus dados com a nuvem.');
          }
        );

        unsubLeaderboard = subscribeToLeaderboard(
          (entries) => {
            if (!isMounted) return;
            setLeaderboard(entries);
          },
          () => {
            // Keep UI working even if leaderboard listener errors transiently
          }
        );
      } catch {
        if (!isMounted) return;
        setCloudLoading(false);
        setSyncStatus('error');
        setCloudError(
          'Erro ao inicializar sua conta na nuvem. Verifique sua conexão e as regras do Firestore.'
        );
      }
    };

    void bootCloud();

    return () => {
      isMounted = false;
      unsubUser?.();
      unsubLeaderboard?.();
    };
  }, [firebaseUser]);

  const activeTheme =
    firebaseUser && studyState ? studyState.profile.themePreference : unauthTheme;

  // Sync theme class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (activeTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [activeTheme]);

  const persistStateNow = useCallback(async (uid: string, nextState: AppStudyState) => {
    setSyncStatus('saving');
    try {
      await saveUserStateToCloud(uid, nextState);
      setSyncStatus('synced');
      setCloudError(null);
    } catch {
      setSyncStatus('error');
      setCloudError('Falha temporária ao salvar na nuvem. Tente novamente.');
    }
  }, []);

  const mutateCloudState = useCallback(
    (updater: (prev: AppStudyState) => AppStudyState, opts?: { debounceMs?: number }) => {
      if (!firebaseUser || !studyStateRef.current) return;
      const nextState = updater(studyStateRef.current);
      studyStateRef.current = nextState;
      setStudyState(nextState);

      if (saveTimerRef.current) {
        window.clearTimeout(saveTimerRef.current);
        saveTimerRef.current = null;
      }

      const delay = opts?.debounceMs ?? 0;
      if (delay > 0) {
        setSyncStatus('saving');
        const uid = firebaseUser.uid;
        saveTimerRef.current = window.setTimeout(() => {
          saveTimerRef.current = null;
          if (studyStateRef.current) {
            void persistStateNow(uid, studyStateRef.current);
          }
        }, delay);
      } else {
        void persistStateNow(firebaseUser.uid, nextState);
      }
    },
    [firebaseUser, persistStateNow]
  );

  // Auto-dismiss discrete cycle notification
  useEffect(() => {
    if (!cycleToast) return;
    const t = window.setTimeout(() => setCycleToast(null), 6500);
    return () => window.clearTimeout(t);
  }, [cycleToast]);

  const advancePomodoroPhase = useCallback(
    (logCompletedFocusSession: boolean) => {
      if (pomodoroPhase === 'focus') {
        if (logCompletedFocusSession) {
          mutateCloudState((prev) => ({
            ...prev,
            profile: {
              ...prev.profile,
              studiedMinutes: prev.profile.studiedMinutes + 30,
              pomodoroSessions: prev.profile.pomodoroSessions + 1,
            },
          }));
        }
        if (soundEnabled) playCycleChime('focus-done');

        if (sessionInCycle === 3) {
          setPomodoroPhase('longBreak');
          setSecondsLeft(LONG_BREAK_SECONDS);
          setCycleToast('Sessão 3/3 concluída! Pausa longa de 15 minutos iniciada.');
        } else {
          setPomodoroPhase('shortBreak');
          setSecondsLeft(SHORT_BREAK_SECONDS);
          setCycleToast(`Sessão ${sessionInCycle}/3 concluída! Pausa curta de 5 minutos iniciada.`);
        }
      } else {
        if (soundEnabled) playCycleChime('break-done');
        const nextSession: 1 | 2 | 3 =
          pomodoroPhase === 'longBreak' ? 1 : ((sessionInCycle + 1) as 1 | 2 | 3);
        setSessionInCycle(nextSession);
        setPomodoroPhase('focus');
        setSecondsLeft(FOCUS_SECONDS);
        setCycleToast(`Pausa finalizada. Foco de 30 minutos (Sessão ${nextSession}/3).`);
      }
    },
    [mutateCloudState, pomodoroPhase, sessionInCycle, soundEnabled]
  );

  useEffect(() => {
    if (!timerRunning) return;
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [timerRunning]);

  useEffect(() => {
    if (timerRunning && secondsLeft === 0) {
      advancePomodoroPhase(true);
    }
  }, [timerRunning, secondsLeft, advancePomodoroPhase]);

  const handleResetPomodoroCycle = () => {
    setTimerRunning(false);
    setPomodoroPhase('focus');
    setSessionInCycle(1);
    setSecondsLeft(FOCUS_SECONDS);
    setCycleToast(null);
  };

  const handleManualAdvancePhase = () => {
    const elapsedFocusMins =
      pomodoroPhase === 'focus' ? Math.max(1, Math.round((FOCUS_SECONDS - secondsLeft) / 60)) : 0;
    if (pomodoroPhase === 'focus' && elapsedFocusMins > 0) {
      mutateCloudState((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          studiedMinutes: prev.profile.studiedMinutes + elapsedFocusMins,
          pomodoroSessions: prev.profile.pomodoroSessions + (elapsedFocusMins >= 15 ? 1 : 0),
        },
      }));
    }
    advancePomodoroPhase(false);
  };

  const handleSelectPage = (page: ActivePage) => {
    if (page === 'export') {
      setExportScope('all');
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenExportForDiscipline = (disciplineId: string) => {
    setExportScope(disciplineId);
    setActivePage('export');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTrainingMode = (
    mode: TrainingMode,
    opts?: { disciplineId?: string; topicCode?: string }
  ) => {
    setTrainingNavRequest({
      mode,
      disciplineId: opts?.disciplineId,
      topicCode: opts?.topicCode,
      nonce: Date.now() + Math.random(),
    });
    handleSelectPage('quiz');
  };

  const completedTopicIds = useMemo(
    () => new Set(studyState?.completedTopics ?? []),
    [studyState?.completedTopics]
  );
  const completedDays = useMemo(
    () => new Set(studyState?.completedDays ?? []),
    [studyState?.completedDays]
  );

  const daysRemaining = useMemo(() => {
    const today = new Date();
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const [year, month, day] = EXAM_INFO.examDateISO.split('-').map(Number);
    const examMidnight = new Date(year, month - 1, day);
    const diffMs = examMidnight.getTime() - todayMidnight.getTime();
    return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  }, []);

  const handleToggleTopic = (topicId: string) => {
    mutateCloudState((prev) => ({
      ...prev,
      completedTopics: prev.completedTopics.includes(topicId)
        ? prev.completedTopics.filter((id) => id !== topicId)
        : [...prev.completedTopics, topicId],
    }));
  };

  const handleToggleDayComplete = (dayNumber: number, topicIds: string[]) => {
    mutateCloudState((prev) => {
      const currentlyDone = prev.completedDays.includes(dayNumber);
      if (currentlyDone) {
        return {
          ...prev,
          completedDays: prev.completedDays.filter((d) => d !== dayNumber),
        };
      }
      return {
        ...prev,
        completedDays: [...prev.completedDays, dayNumber],
        completedTopics: Array.from(new Set([...prev.completedTopics, ...topicIds])),
      };
    });
  };

  const handleRecordAttempt = (
    meta: SrsItemMeta,
    outcome: SrsOutcome,
    source: QuestionAttempt['source']
  ) => {
    mutateCloudState((prev) => {
      const nextRecord = applySrsOutcome(prev.questionProgress[meta.id], meta, outcome);
      const nextProgress = {
        ...prev.questionProgress,
        [meta.id]: nextRecord,
      };

      const nextAttempts =
        outcome === 'review_later'
          ? prev.questionAttempts
          : [
              ...prev.questionAttempts,
              {
                id: meta.id,
                disciplineId: meta.disciplineId,
                topicCode: meta.topicCode,
                isCorrect: outcome === 'hit',
                source,
                timestamp: Date.now(),
              },
            ].slice(-1000);

      return {
        ...prev,
        questionProgress: nextProgress,
        questionAttempts: nextAttempts,
      };
    });
  };

  const handleResetItemsSrs = (itemIds: string[]) => {
    mutateCloudState((prev) => {
      const nextProgress = { ...prev.questionProgress };
      for (const id of itemIds) {
        delete nextProgress[id];
      }
      return {
        ...prev,
        questionProgress: nextProgress,
      };
    });
  };

  const handleResetDisciplineSrs = (disciplineId: string) => {
    const ids = PRACTICE_QUESTIONS.filter((q) => q.disciplineId === disciplineId).map(
      (q) => q.id
    );
    handleResetItemsSrs(ids);
  };

  const overallAccuracy = useMemo(() => {
    const attempts = studyState?.questionAttempts ?? [];
    if (attempts.length === 0) return null;
    const hits = attempts.filter((a) => a.isCorrect).length;
    return Math.round((hits / attempts.length) * 100);
  }, [studyState?.questionAttempts]);

  const handleResetAllProgress = () => {
    setSelectedScheduleDay(1);
    mutateCloudState((prev) =>
      createInitialStudyState({
        name: prev.profile.name,
        email: prev.profile.email,
        avatar: prev.profile.avatar,
        themePreference: prev.profile.themePreference,
      })
    );
  };

  const handleUpdateCloudProfile = async (updates: { name: string; avatar: string }) => {
    if (!firebaseUser || !studyStateRef.current) return;
    if (firebaseUser.displayName !== updates.name) {
      await updateProfile(firebaseUser, { displayName: updates.name });
    }
    const nextState: AppStudyState = {
      ...studyStateRef.current,
      profile: {
        ...studyStateRef.current.profile,
        name: updates.name,
        avatar: updates.avatar,
      },
    };
    studyStateRef.current = nextState;
    setStudyState(nextState);
    await persistStateNow(firebaseUser.uid, nextState);
  };

  const handleImportCloudState = async (nextState: AppStudyState) => {
    if (!firebaseUser) return;
    studyStateRef.current = nextState;
    setStudyState(nextState);
    await persistStateNow(firebaseUser.uid, nextState);
  };

  const handleSignOut = async () => {
    if (!auth) return;
    if (saveTimerRef.current) {
      window.clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
    setTimerRunning(false);
    setActivePage('dashboard');
    await signOut(auth);
  };

  const breadcrumbLabel = useMemo(() => {
    if (activePage === 'dashboard') return 'Visão Geral';
    if (activePage === 'schedule') return 'Cronograma (30 dias)';
    if (activePage === 'quiz') return 'Treino & Desafios';
    if (activePage === 'analytics') return 'Análise de Desempenho';
    if (activePage === 'export') return 'Apostila PDF / Docs';
    if (activePage === 'profile') return 'Conta & Nuvem';
    const disc = DISCIPLINES.find((d) => d.id === activePage);
    return disc ? `${disc.code} ${disc.name}` : 'Visão Geral';
  }, [activePage]);

  // 1. Checking Firebase session
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-[#37352F] dark:bg-[#191919] dark:text-[#EDEDED] px-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <Loader2 className="h-6 w-6 animate-spin text-sky-600 dark:text-sky-400" />
          <p className="text-sm font-medium">Verificando sessão na nuvem...</p>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated or unconfigured Firebase -> AuthView
  if (!isFirebaseConfigured || !firebaseUser) {
    return (
      <AuthView
        theme={unauthTheme}
        onToggleTheme={() => setUnauthTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      />
    );
  }

  // 3. Authenticated, waiting for initial Cloud Firestore snapshot
  if (cloudLoading || !studyState) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-[#37352F] dark:bg-[#191919] dark:text-[#EDEDED] px-4">
        <div className="flex flex-col items-center gap-3 text-center max-w-sm">
          <Cloud className="h-6 w-6 text-sky-600 dark:text-sky-400 animate-pulse" />
          <p className="text-sm font-medium">Sincronizando seus estudos da nuvem...</p>
          {cloudError && (
            <div className="mt-2 rounded-lg border border-rose-500/40 bg-rose-500/10 p-3 text-xs text-rose-700 dark:text-rose-200 space-y-2">
              <p>{cloudError}</p>
              <button
                type="button"
                onClick={() => void handleSignOut()}
                className="rounded border border-rose-500/40 px-3 py-1.5 font-medium cursor-pointer"
              >
                Voltar ao login
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-white text-[#37352F] dark:bg-[#191919] dark:text-[#EDEDED]">
      <NotionSidebar
        activePage={activePage}
        onSelectPage={handleSelectPage}
        desktopOpen={desktopSidebarOpen}
        onCloseDesktop={() => setDesktopSidebarOpen(false)}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
        completedTopicIds={completedTopicIds}
        daysRemaining={daysRemaining}
        totalQuestionsCount={PRACTICE_QUESTIONS.length}
        attemptsCount={studyState.questionAttempts.length}
        userDisplayName={studyState.profile.name}
        userAvatar={studyState.profile.avatar}
        syncStatus={syncStatus}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopWorkspaceBar
          breadcrumbLabel={breadcrumbLabel}
          desktopSidebarOpen={desktopSidebarOpen}
          onOpenDesktopSidebar={() => setDesktopSidebarOpen(true)}
          onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
          theme={studyState.profile.themePreference}
          onToggleTheme={() =>
            mutateCloudState((prev) => ({
              ...prev,
              profile: {
                ...prev.profile,
                themePreference: prev.profile.themePreference === 'dark' ? 'light' : 'dark',
              },
            }))
          }
          timerOpen={timerOpen}
          onToggleTimer={() => setTimerOpen((prev) => !prev)}
          timerRunning={timerRunning}
          formattedTime={formatSeconds(secondsLeft)}
          pomodoroPhase={pomodoroPhase}
          sessionInCycle={sessionInCycle}
          activeUserName={studyState.profile.name}
          activeUserAvatar={studyState.profile.avatar}
          syncStatus={syncStatus}
          isProfileActive={activePage === 'profile'}
          onOpenProfile={() => handleSelectPage('profile')}
        />

        <FocusTimerBar
          isOpen={timerOpen}
          onClose={() => setTimerOpen(false)}
          phase={pomodoroPhase}
          sessionInCycle={sessionInCycle}
          secondsLeft={secondsLeft}
          isRunning={timerRunning}
          soundEnabled={soundEnabled}
          onToggleSound={() => setSoundEnabled((prev) => !prev)}
          onToggleRunning={() => setTimerRunning((prev) => !prev)}
          onResetCycle={handleResetPomodoroCycle}
          onAdvancePhase={handleManualAdvancePhase}
        />

        {/* Discrete Cloud Error Banner */}
        {cloudError && (
          <div
            role="alert"
            className="mx-4 mt-3 flex items-center justify-between gap-3 rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-2.5 text-xs text-rose-800 dark:text-rose-200 sm:mx-8"
          >
            <span>{cloudError}</span>
            <button
              type="button"
              onClick={() => setCloudError(null)}
              aria-label="Fechar aviso"
              className="text-rose-600 dark:text-rose-300 cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Discrete Pomodoro Transition Notification */}
        {cycleToast && (
          <div
            role="status"
            aria-live="polite"
            className="fixed right-4 top-14 z-50 flex max-w-xs items-start gap-2.5 rounded-lg border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#222222] p-3.5 shadow-lg"
          >
            <Bell className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-[#37352F] dark:text-[#EDEDED] flex-1">
              {cycleToast}
            </p>
            <button
              type="button"
              onClick={() => setCycleToast(null)}
              aria-label="Fechar notificação"
              className="text-[#9B9A97] hover:text-[#37352F] dark:hover:text-[#EDEDED] cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        <main className="flex-1 pb-20 lg:pb-0">
          {activePage === 'dashboard' && (
            <DashboardView
              daysRemaining={daysRemaining}
              completedTopicIds={completedTopicIds}
              totalTopicsCount={ALL_TOPICS.length}
              completedDays={completedDays}
              studiedMinutes={studyState.profile.studiedMinutes}
              disciplineStatusOverrides={studyState.statusOverrides}
              questionProgress={studyState.questionProgress}
              attemptsCount={studyState.questionAttempts.length}
              overallAccuracy={overallAccuracy}
              leaderboard={leaderboard}
              currentUid={firebaseUser.uid}
              onSelectPage={handleSelectPage}
              onOpenTrainingMode={openTrainingMode}
              onSelectScheduleDay={setSelectedScheduleDay}
              onToggleDayComplete={handleToggleDayComplete}
              onResetAllProgress={handleResetAllProgress}
            />
          )}

          {activePage === 'schedule' && (
            <ScheduleView
              selectedDayNumber={selectedScheduleDay}
              onSelectDay={setSelectedScheduleDay}
              completedTopicIds={completedTopicIds}
              completedDays={completedDays}
              onToggleTopic={handleToggleTopic}
              onToggleDayComplete={handleToggleDayComplete}
              dayNotes={studyState.dayNotes}
              onUpdateDayNote={(day, note) =>
                mutateCloudState(
                  (prev) => ({
                    ...prev,
                    dayNotes: { ...prev.dayNotes, [day]: note },
                  }),
                  { debounceMs: 450 }
                )
              }
              onOpenDiscipline={handleSelectPage}
            />
          )}

          {activePage === 'quiz' && (
            <TrainingArenaView
              questionProgress={studyState.questionProgress}
              onRecordAttempt={handleRecordAttempt}
              onResetItemsSrs={handleResetItemsSrs}
              sprintBestScore={studyState.sprintBestScore}
              onUpdateSprintBestScore={(score) =>
                mutateCloudState((prev) => ({ ...prev, sprintBestScore: score }))
              }
              onOpenAnalytics={() => handleSelectPage('analytics')}
              navigationRequest={trainingNavRequest}
            />
          )}

          {activePage === 'analytics' && (
            <AnalyticsView
              attempts={studyState.questionAttempts}
              questionProgress={studyState.questionProgress}
              onOpenDiscipline={handleSelectPage}
              onOpenTraining={() => openTrainingMode('simulado')}
              onOpenErrorNotebook={(opts) => openTrainingMode('erros', opts)}
              onOpenMasteredNotebook={() => openTrainingMode('acertos')}
              onClearAttempts={() =>
                mutateCloudState((prev) => ({ ...prev, questionAttempts: [] }))
              }
            />
          )}

          {activePage === 'export' && (
            <ApostilaExportView key={exportScope} initialScope={exportScope} />
          )}

          {activePage === 'profile' && (
            <ProfileSyncView
              uid={firebaseUser.uid}
              studyState={studyState}
              syncStatus={syncStatus}
              onUpdateProfile={handleUpdateCloudProfile}
              onImportCloudState={handleImportCloudState}
              onSignOut={handleSignOut}
            />
          )}

          {activePage !== 'dashboard' &&
            activePage !== 'schedule' &&
            activePage !== 'quiz' &&
            activePage !== 'analytics' &&
            activePage !== 'export' &&
            activePage !== 'profile' && (
              <DisciplineView
                disciplineId={activePage}
                completedTopicIds={completedTopicIds}
                onToggleTopic={handleToggleTopic}
                statusOverride={studyState.statusOverrides[activePage] ?? null}
                onChangeStatusOverride={(discId: string, val: DisciplineStatusOverride) =>
                  mutateCloudState((prev) => ({
                    ...prev,
                    statusOverrides: { ...prev.statusOverrides, [discId]: val },
                  }))
                }
                questionProgress={studyState.questionProgress}
                onRecordAttempt={handleRecordAttempt}
                onOpenErrorNotebook={(discId) =>
                  openTrainingMode('erros', { disciplineId: discId })
                }
                onOpenMasteredNotebook={(discId) =>
                  openTrainingMode('acertos', { disciplineId: discId })
                }
                onResetDisciplineSrs={handleResetDisciplineSrs}
                onOpenExport={handleOpenExportForDiscipline}
              />
            )}
        </main>
      </div>

      <MobileBottomBar
        activePage={activePage}
        onSelectPage={handleSelectPage}
        onOpenDrawer={() => setMobileSidebarOpen(true)}
      />
    </div>
  );
}
