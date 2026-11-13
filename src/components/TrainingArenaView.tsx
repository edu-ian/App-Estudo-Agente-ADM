import { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  BarChart3,
  BookCheck,
  BookX,
  Check,
  Flame,
  Layers,
  Play,
  RotateCcw,
  Shuffle,
  SlidersHorizontal,
  Timer,
  Trophy,
  X,
} from 'lucide-react';
import { FLASHCARDS, TRAP_STATEMENTS, type FlashcardItem, type TrapStatement } from '../data/gameDecks';
import { PRACTICE_QUESTIONS, type PracticeQuestion } from '../data/questions';
import { DISCIPLINES } from '../data/syllabus';
import {
  getItemStatus,
  getStatusLabel,
  isErrorNotebookStatus,
  selectSmartItems,
  type QuestionAttempt,
  type QuestionProgressRecord,
  type SrsItemMeta,
  type SrsOutcome,
} from '../utils/srs';

export type TrainingMode =
  | 'simulado'
  | 'foco'
  | 'flashcards'
  | 'sprint'
  | 'pegadinhas'
  | 'erros'
  | 'acertos';

export interface TrainingNavigationRequest {
  mode: TrainingMode;
  disciplineId?: string;
  topicCode?: string;
  nonce: number;
}

interface TrainingArenaViewProps {
  questionProgress: Record<string, QuestionProgressRecord>;
  onRecordAttempt: (
    meta: SrsItemMeta,
    outcome: SrsOutcome,
    source: QuestionAttempt['source']
  ) => void;
  onResetItemsSrs: (itemIds: string[]) => void;
  sprintBestScore: number;
  onUpdateSprintBestScore: (score: number) => void;
  onOpenAnalytics: () => void;
  navigationRequest: TrainingNavigationRequest | null;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function TrainingArenaView({
  questionProgress,
  onRecordAttempt,
  onResetItemsSrs,
  sprintBestScore,
  onUpdateSprintBestScore,
  onOpenAnalytics,
  navigationRequest,
}: TrainingArenaViewProps) {
  const [mode, setMode] = useState<TrainingMode>(navigationRequest?.mode ?? 'simulado');
  const [lastNavNonce, setLastNavNonce] = useState<number>(navigationRequest?.nonce ?? 0);

  // Filters for Error Notebook & Mastered Notebook
  const [errorDisciplineFilter, setErrorDisciplineFilter] = useState<string>(
    navigationRequest?.mode === 'erros' && navigationRequest.disciplineId
      ? navigationRequest.disciplineId
      : 'Todas'
  );
  const [errorTopicFilter, setErrorTopicFilter] = useState<string | null>(
    navigationRequest?.mode === 'erros' && navigationRequest.topicCode
      ? navigationRequest.topicCode
      : null
  );
  const [masteredDisciplineFilter, setMasteredDisciplineFilter] = useState<string>(
    navigationRequest?.mode === 'acertos' && navigationRequest.disciplineId
      ? navigationRequest.disciplineId
      : 'Todas'
  );

  // Snapshot refresh keys so answered cards stay visible with feedback until user refreshes/starts new round
  const [simuladoRefreshKey, setSimuladoRefreshKey] = useState(0);
  const [focusRefreshKey, setFocusRefreshKey] = useState(0);
  const [trapRefreshKey, setTrapRefreshKey] = useState(0);
  const [errorRefreshKey, setErrorRefreshKey] = useState(0);
  const [masteredRefreshKey, setMasteredRefreshKey] = useState(0);

  if (navigationRequest && navigationRequest.nonce !== lastNavNonce) {
    setLastNavNonce(navigationRequest.nonce);
    setMode(navigationRequest.mode);
    if (navigationRequest.mode === 'erros') {
      setErrorDisciplineFilter(navigationRequest.disciplineId ?? 'Todas');
      setErrorTopicFilter(navigationRequest.topicCode ?? null);
      setErrorRefreshKey((k) => k + 1);
    } else if (navigationRequest.mode === 'acertos') {
      setMasteredDisciplineFilter(navigationRequest.disciplineId ?? 'Todas');
      setMasteredRefreshKey((k) => k + 1);
    }
  }

  // Counts for Error & Mastered notebooks across all item types
  const allErrorItemIds = useMemo(() => {
    const allItems = [...PRACTICE_QUESTIONS, ...FLASHCARDS, ...TRAP_STATEMENTS];
    return allItems.filter((it) => isErrorNotebookStatus(getItemStatus(questionProgress, it.id))).length;
  }, [questionProgress]);

  const allMasteredItemIds = useMemo(() => {
    const allItems = [...PRACTICE_QUESTIONS, ...FLASHCARDS, ...TRAP_STATEMENTS];
    return allItems.filter((it) => getItemStatus(questionProgress, it.id) === 'dominada').length;
  }, [questionProgress]);

  // ---------------------------------------------------------------------------
  // 1. MODO SIMULADO GERAL (Exclui dominadas, prioriza inéditas -> em progresso)
  // ---------------------------------------------------------------------------
  const [simuladoCount, setSimuladoCount] = useState<15 | 30 | 'all'>(15);
  const [simuladoAnswers, setSimuladoAnswers] = useState<Record<string, number>>({});

  const simuladoPool = useMemo(() => {
    const prioritized = selectSmartItems(PRACTICE_QUESTIONS, questionProgress, {
      shuffleWithinBuckets: true,
    });
    const limit = simuladoCount === 'all' ? prioritized.length : simuladoCount;
    return prioritized.slice(0, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [simuladoCount, simuladoRefreshKey]);

  const startNewSimulado = (count: 15 | 30 | 'all' = simuladoCount) => {
    setSimuladoCount(count);
    setSimuladoAnswers({});
    setSimuladoRefreshKey((k) => k + 1);
  };

  // ---------------------------------------------------------------------------
  // 2. MODO FOCO POR MATÉRIA (Exclui dominadas, prioriza inéditas -> em progresso)
  // ---------------------------------------------------------------------------
  const [focusedDisciplineIds, setFocusedDisciplineIds] = useState<string[]>(['1.4', '2.5']);
  const [focusAnswers, setFocusAnswers] = useState<Record<string, number>>({});

  const toggleFocusDiscipline = (id: string) => {
    setFocusedDisciplineIds((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
    setFocusAnswers({});
    setFocusRefreshKey((k) => k + 1);
  };

  const focusAllDisciplineQuestions = useMemo(
    () => PRACTICE_QUESTIONS.filter((q) => focusedDisciplineIds.includes(q.disciplineId)),
    [focusedDisciplineIds]
  );

  const focusQuestions = useMemo(
    () =>
      selectSmartItems(focusAllDisciplineQuestions, questionProgress, {
        shuffleWithinBuckets: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focusAllDisciplineQuestions, focusRefreshKey]
  );

  // ---------------------------------------------------------------------------
  // 3. MODO CARD GAME (Flashcards SRS: Acertei +1 até 3/3; Revisar depois -> Erros)
  // ---------------------------------------------------------------------------
  const [flashcardDisciplineFilter, setFlashcardDisciplineFilter] = useState<string>('Todas');
  const [flashcardRefreshKey, setFlashcardRefreshKey] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);

  const filteredAllFlashcards = useMemo(() => {
    return flashcardDisciplineFilter === 'Todas'
      ? FLASHCARDS
      : FLASHCARDS.filter((c) => c.disciplineId === flashcardDisciplineFilter);
  }, [flashcardDisciplineFilter]);

  const [flashcardQueue, setFlashcardQueue] = useState<FlashcardItem[]>(() =>
    selectSmartItems(FLASHCARDS, questionProgress, { shuffleWithinBuckets: true })
  );

  const rebuildFlashcardQueue = (discId: string) => {
    setFlashcardDisciplineFilter(discId);
    const pool =
      discId === 'Todas'
        ? FLASHCARDS
        : FLASHCARDS.filter((c) => c.disciplineId === discId);
    setFlashcardQueue(selectSmartItems(pool, questionProgress, { shuffleWithinBuckets: true }));
    setCardFlipped(false);
    setFlashcardRefreshKey((k) => k + 1);
  };

  const currentCard = flashcardQueue[0] ?? null;

  const handleFlashcardHit = () => {
    if (!currentCard) return;
    const prevRec = questionProgress[currentCard.id];
    const nextStreak = Math.min(3, (prevRec?.acertosConsecutivos ?? 0) + 1);

    onRecordAttempt(
      {
        id: currentCard.id,
        itemType: 'flashcard',
        disciplineId: currentCard.disciplineId,
        topicCode: currentCard.topicCode,
      },
      'hit',
      'flashcard'
    );

    setFlashcardQueue((prev) => {
      const rest = prev.slice(1);
      // If not yet dominated (< 3 consecutive hits), move to end of queue only if user wants another pass later;
      // keeping queue moving forward avoids looping the exact same card immediately when others remain.
      if (nextStreak < 3 && rest.length === 0) {
        return [prev[0]];
      }
      return rest;
    });
    setCardFlipped(false);
  };

  const handleFlashcardReviewLater = () => {
    if (!currentCard) return;
    onRecordAttempt(
      {
        id: currentCard.id,
        itemType: 'flashcard',
        disciplineId: currentCard.disciplineId,
        topicCode: currentCard.topicCode,
      },
      'review_later',
      'flashcard'
    );
    setFlashcardQueue((prev) => prev.slice(1));
    setCardFlipped(false);
  };

  // Keep flashcard count indicator reactive
  const flashcardMasteredCount = useMemo(
    () =>
      filteredAllFlashcards.filter(
        (c) => getItemStatus(questionProgress, c.id) === 'dominada'
      ).length,
    [filteredAllFlashcards, questionProgress, flashcardRefreshKey]
  );

  // ---------------------------------------------------------------------------
  // 4. MODO CONTRA O RELÓGIO (Sprint 3 min — exclui dominadas, prioriza inéditas)
  // ---------------------------------------------------------------------------
  const [sprintState, setSprintState] = useState<'idle' | 'running' | 'finished'>('idle');
  const [sprintSecondsLeft, setSprintSecondsLeft] = useState(180);
  const [sprintDeck, setSprintDeck] = useState<TrapStatement[]>(() =>
    selectSmartItems(TRAP_STATEMENTS, questionProgress, { shuffleWithinBuckets: true })
  );
  const [sprintIndex, setSprintIndex] = useState(0);
  const [sprintScore, setSprintScore] = useState(0);
  const [sprintHits, setSprintHits] = useState(0);
  const [sprintTotal, setSprintTotal] = useState(0);
  const [sprintStreak, setSprintStreak] = useState(0);
  const [sprintLastFeedback, setSprintLastFeedback] = useState<{
    correct: boolean;
    text: string;
  } | null>(null);

  useEffect(() => {
    if (sprintState !== 'running') return;
    const id = window.setInterval(() => {
      setSprintSecondsLeft((prev) => {
        if (prev <= 1) {
          setSprintState('finished');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [sprintState]);

  useEffect(() => {
    if (sprintState === 'finished' && sprintScore > sprintBestScore) {
      onUpdateSprintBestScore(sprintScore);
    }
  }, [sprintState, sprintScore, sprintBestScore, onUpdateSprintBestScore]);

  const smartSprintEligible = useMemo(
    () => selectSmartItems(TRAP_STATEMENTS, questionProgress, { shuffleWithinBuckets: true }),
    [questionProgress]
  );

  const startSprint = () => {
    const eligible = selectSmartItems(TRAP_STATEMENTS, questionProgress, {
      shuffleWithinBuckets: true,
    });
    setSprintDeck(eligible);
    setSprintIndex(0);
    setSprintScore(0);
    setSprintHits(0);
    setSprintTotal(0);
    setSprintStreak(0);
    setSprintLastFeedback(null);
    setSprintSecondsLeft(180);
    setSprintState('running');
  };

  const answerSprint = (userSaysTrue: boolean) => {
    if (sprintState !== 'running' || sprintDeck.length === 0) return;
    const item = sprintDeck[sprintIndex % sprintDeck.length];
    const isHit = item.isTrue === userSaysTrue;
    const nextTotal = sprintTotal + 1;
    const nextHits = isHit ? sprintHits + 1 : sprintHits;
    const nextStreak = isHit ? sprintStreak + 1 : 0;
    const nextScore = isHit
      ? sprintScore + 10 + (nextStreak >= 3 ? 5 : 0)
      : Math.max(0, sprintScore - 2);

    setSprintTotal(nextTotal);
    setSprintHits(nextHits);
    setSprintStreak(nextStreak);
    setSprintScore(nextScore);
    setSprintLastFeedback({
      correct: isHit,
      text: isHit ? 'Correto!' : `Errado — ${item.explanation}`,
    });

    onRecordAttempt(
      {
        id: item.id,
        itemType: 'trap',
        disciplineId: item.disciplineId,
        topicCode: item.topicCode,
      },
      isHit ? 'hit' : 'miss',
      'sprint'
    );

    if (nextScore > sprintBestScore) {
      onUpdateSprintBestScore(nextScore);
    }

    setSprintIndex((prev) => {
      const next = prev + 1;
      if (next >= sprintDeck.length) {
        setSprintDeck(shuffleArray(sprintDeck));
        return 0;
      }
      return next;
    });
  };

  // ---------------------------------------------------------------------------
  // 5. MODO CAÇA-PEGADINHAS (Exclui dominadas, prioriza inéditas -> em progresso)
  // ---------------------------------------------------------------------------
  const [trapFilter, setTrapFilter] = useState<string>('Todas');
  const [trapAnswers, setTrapAnswers] = useState<Record<string, boolean>>({});

  const trapBasePool = useMemo(() => {
    if (trapFilter === 'Todas') return TRAP_STATEMENTS;
    return TRAP_STATEMENTS.filter((t) => t.disciplineId === trapFilter);
  }, [trapFilter]);

  const visibleTraps = useMemo(
    () =>
      selectSmartItems(trapBasePool, questionProgress, {
        shuffleWithinBuckets: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [trapBasePool, trapRefreshKey]
  );

  // ---------------------------------------------------------------------------
  // 6. NOVO MODO: CADERNO DE ERROS (Exclusivamente status 'erro' ou 'revisar')
  // ---------------------------------------------------------------------------
  const [errorQuestionAnswers, setErrorQuestionAnswers] = useState<Record<string, number>>({});
  const [errorTrapAnswers, setErrorTrapAnswers] = useState<Record<string, boolean>>({});
  const [errorCardFlipped, setErrorCardFlipped] = useState<Record<string, boolean>>({});
  const [errorCardSolved, setErrorCardSolved] = useState<Record<string, 'hit' | 'review_later'>>({});

  const errorSnapshot = useMemo(() => {
    const matchFilter = (dId: string, tCode: string) => {
      if (errorDisciplineFilter !== 'Todas' && dId !== errorDisciplineFilter) return false;
      if (errorTopicFilter && tCode !== errorTopicFilter) return false;
      return true;
    };

    const questions = PRACTICE_QUESTIONS.filter(
      (q) =>
        isErrorNotebookStatus(getItemStatus(questionProgress, q.id)) &&
        matchFilter(q.disciplineId, q.topicCode)
    );
    const flashcards = FLASHCARDS.filter(
      (c) =>
        isErrorNotebookStatus(getItemStatus(questionProgress, c.id)) &&
        matchFilter(c.disciplineId, c.topicCode)
    );
    const traps = TRAP_STATEMENTS.filter(
      (t) =>
        isErrorNotebookStatus(getItemStatus(questionProgress, t.id)) &&
        matchFilter(t.disciplineId, t.topicCode)
    );
    return { questions, flashcards, traps };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorDisciplineFilter, errorTopicFilter, errorRefreshKey]);

  const refreshErrorNotebook = () => {
    setErrorQuestionAnswers({});
    setErrorTrapAnswers({});
    setErrorCardFlipped({});
    setErrorCardSolved({});
    setErrorRefreshKey((k) => k + 1);
  };

  // ---------------------------------------------------------------------------
  // 7. NOVO MODO: CADERNO DE ACERTOS (Dominadas — 3 acertos consecutivos)
  // ---------------------------------------------------------------------------
  const [masteredSubMode, setMasteredSubMode] = useState<'consulta' | 'simulado'>('consulta');
  const [masteredQuestionAnswers, setMasteredQuestionAnswers] = useState<Record<string, number>>({});
  const [masteredTrapAnswers, setMasteredTrapAnswers] = useState<Record<string, boolean>>({});

  const masteredSnapshot = useMemo(() => {
    const matchDisc = (dId: string) =>
      masteredDisciplineFilter === 'Todas' || dId === masteredDisciplineFilter;

    const questions = PRACTICE_QUESTIONS.filter(
      (q) => getItemStatus(questionProgress, q.id) === 'dominada' && matchDisc(q.disciplineId)
    );
    const flashcards = FLASHCARDS.filter(
      (c) => getItemStatus(questionProgress, c.id) === 'dominada' && matchDisc(c.disciplineId)
    );
    const traps = TRAP_STATEMENTS.filter(
      (t) => getItemStatus(questionProgress, t.id) === 'dominada' && matchDisc(t.disciplineId)
    );
    return { questions, flashcards, traps };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [masteredDisciplineFilter, masteredRefreshKey]);

  const refreshMasteredNotebook = () => {
    setMasteredQuestionAnswers({});
    setMasteredTrapAnswers({});
    setMasteredRefreshKey((k) => k + 1);
  };

  // ---------------------------------------------------------------------------
  // SHARED RENDERERS
  // ---------------------------------------------------------------------------
  const modes: { id: TrainingMode; label: string; badge?: number; icon: typeof Shuffle }[] = [
    { id: 'simulado', label: 'Simulado Geral', icon: Shuffle },
    { id: 'foco', label: 'Foco por Matéria', icon: SlidersHorizontal },
    { id: 'flashcards', label: 'Flashcards', icon: Layers },
    { id: 'sprint', label: 'Sprint 3 min', icon: Timer },
    { id: 'pegadinhas', label: 'Caça-Pegadinhas', icon: AlertTriangle },
    { id: 'erros', label: 'Caderno de Erros', badge: allErrorItemIds, icon: BookX },
    { id: 'acertos', label: 'Caderno de Acertos', badge: allMasteredItemIds, icon: BookCheck },
  ];

  const renderMasteredEmptyBanner = (
    title: string,
    subtitle: string,
    targetDisciplineId: string | undefined,
    itemIdsToReset: string[],
    onResetComplete: () => void
  ) => (
    <div className="rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] p-6 sm:p-8 text-center space-y-4">
      <Trophy className="mx-auto h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
      <h2 className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
        {title}
      </h2>
      <p className="mx-auto max-w-md text-xs leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
        <button
          type="button"
          onClick={() => {
            setMasteredDisciplineFilter(targetDisciplineId ?? 'Todas');
            setMode('acertos');
            refreshMasteredNotebook();
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 cursor-pointer min-h-[44px]"
        >
          <BookCheck className="h-4 w-4" aria-hidden="true" />
          <span>Revisar Caderno de Acertos</span>
        </button>
        <button
          type="button"
          onClick={() => {
            onResetItemsSrs(itemIdsToReset);
            onResetComplete();
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-4 py-2.5 text-xs font-semibold text-[#37352F] dark:text-[#EDEDED] hover:border-rose-500/50 cursor-pointer min-h-[44px]"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Resetar histórico desta matéria</span>
        </button>
      </div>
    </div>
  );

  const renderQuestionCard = (
    q: PracticeQuestion,
    idx: number,
    answerMap: Record<string, number>,
    onPick: (q: PracticeQuestion, optIdx: number) => void,
    options?: { feedbackHintHit?: string; feedbackHintMiss?: string }
  ) => {
    const chosen = answerMap[q.id];
    const isAnswered = chosen !== undefined;
    const isCorrect = chosen === q.correctIndex;
    const srsRec = questionProgress[q.id];

    return (
      <div
        key={q.id}
        className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-4 sm:p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
              Questão {String(idx + 1).padStart(2, '0')}
            </span>
            <span aria-hidden="true">·</span>
            <span>{q.discipline}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">Tópico {q.topicCode}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[11px] tabular-nums text-[#5F5E5B] dark:text-[#A3A3A3]">
              {getStatusLabel(srsRec)}
            </span>
          </div>

          {isAnswered && (
            <span
              className={`inline-flex items-center gap-1 font-medium ${
                isCorrect
                  ? 'text-emerald-700 dark:text-emerald-400'
                  : 'text-rose-600 dark:text-rose-400'
              }`}
            >
              {isCorrect ? (
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>
                {isCorrect
                  ? options?.feedbackHintHit ?? 'Correta'
                  : options?.feedbackHintMiss ?? 'Caderno de Erros'}
              </span>
            </span>
          )}
        </div>

        <p className="mt-3 text-[15px] leading-relaxed text-[#37352F] dark:text-[#EDEDED]">
          {q.statement}
        </p>

        {/* Big Mobile-First Touch Targets (>= 48px) */}
        <div className="mt-4 space-y-2.5">
          {q.options.map((opt, optIdx) => {
            const isSelected = chosen === optIdx;
            const isRight = optIdx === q.correctIndex;

            let cls =
              'border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/70 dark:bg-[#242424] text-[#37352F] dark:text-[#D4D4D4] hover:border-sky-500/60 active:scale-[0.99]';

            if (isAnswered) {
              if (isRight) {
                cls =
                  'border-emerald-500/50 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100';
              } else if (isSelected) {
                cls = 'border-rose-500/50 bg-rose-500/10 text-rose-900 dark:text-rose-200';
              } else {
                cls =
                  'border-[#E9E9E7] dark:border-[#2A2A2A] opacity-55 text-[#787774] dark:text-[#8E8E8E]';
              }
            }

            return (
              <button
                key={optIdx}
                type="button"
                disabled={isAnswered}
                onClick={() => {
                  if (!isAnswered) onPick(q, optIdx);
                }}
                className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3.5 text-left text-sm transition-all cursor-pointer disabled:cursor-default min-h-[48px] ${cls}`}
              >
                <span className="font-mono text-xs font-semibold mt-0.5 shrink-0 tabular-nums">
                  {OPTION_LETTERS[optIdx]})
                </span>
                <span className="leading-relaxed">{opt}</span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-4 border-t border-[#E9E9E7] dark:border-[#2F2F2F] pt-3.5 text-sm">
            <p className="text-xs font-semibold text-[#37352F] dark:text-[#EDEDED]">
              Gabarito Comentado · Alternativa {OPTION_LETTERS[q.correctIndex]}
            </p>
            <p className="mt-1 text-[#5F5E5B] dark:text-[#B5B5B5] leading-relaxed">
              {q.explanation}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-10 sm:py-14">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
            Repetição Espaçada (3 Acertos Consecutivos = Dominada) · {PRACTICE_QUESTIONS.length} Questões +{' '}
            {FLASHCARDS.length} Flashcards + {TRAP_STATEMENTS.length} Pegadinhas
          </p>
          <h1 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#37352F] dark:text-[#EDEDED] sm:text-3xl [text-wrap:balance]">
            Treino & Desafios
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
            Questões dominadas (3x) saem dos treinos automáticos para focar apenas no que ainda precisa de revisão. Erros vão direto para o Caderno de Erros.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenAnalytics}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#222222] px-3.5 py-2 text-xs font-medium text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500/50 transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[40px] self-start sm:self-end"
        >
          <BarChart3 className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
          <span>Análise de Desempenho</span>
        </button>
      </header>

      {/* 7-Mode Selector (Responsive grid / touch-friendly) */}
      <div
        role="tablist"
        aria-label="Modos de treino"
        className="mt-6 grid grid-cols-2 gap-1.5 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#202020] p-1.5 sm:flex sm:flex-wrap"
      >
        {modes.map((m) => {
          const Icon = m.icon;
          const active = mode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setMode(m.id);
                if (m.id === 'erros') refreshErrorNotebook();
                if (m.id === 'acertos') refreshMasteredNotebook();
                if (m.id === 'flashcards') rebuildFlashcardQueue(flashcardDisciplineFilter);
              }}
              className={`inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-2.5 text-xs font-medium whitespace-nowrap transition-colors cursor-pointer min-h-[44px] sm:flex-1 ${
                active
                  ? 'bg-white text-[#37352F] shadow-xs dark:bg-[#2E2E2E] dark:text-[#EDEDED] font-semibold'
                  : 'text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EDEDED]'
              }`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{m.label}</span>
              {typeof m.badge === 'number' && m.badge > 0 && (
                <span className="font-mono text-[11px] opacity-80 tabular-nums">
                  ({m.badge})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* MODE 1: SIMULADO GERAL */}
      {mode === 'simulado' && (
        <div className="mt-6 space-y-5">
          <div className="flex flex-col gap-3 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
                Tamanho:
              </span>
              {([15, 30, 'all'] as const).map((qty) => (
                <button
                  key={qty}
                  type="button"
                  onClick={() => startNewSimulado(qty)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer min-h-[38px] transition-colors ${
                    simuladoCount === qty
                      ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold'
                      : 'border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] text-[#37352F] dark:text-[#D4D4D4]'
                  }`}
                >
                  {qty === 'all' ? 'Todas pendentes' : `${qty} questões`}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <span className="font-mono text-xs font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
                {simuladoPool.filter((q) => simuladoAnswers[q.id] === q.correctIndex).length}/
                {Object.keys(simuladoAnswers).length} acertos
              </span>

              <button
                type="button"
                onClick={() => startNewSimulado(simuladoCount)}
                className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-3 py-2 text-xs font-medium text-[#37352F] dark:text-[#D4D4D4] hover:bg-[#EFEFED] dark:hover:bg-[#272727] cursor-pointer min-h-[38px]"
              >
                <Shuffle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Sortear novo</span>
              </button>
            </div>
          </div>

          {simuladoPool.length === 0 ? (
            renderMasteredEmptyBanner(
              'Você dominou todas as questões do edital!',
              'Todas as 135 questões atingiram 3 acertos consecutivos e estão no seu Caderno de Acertos.',
              undefined,
              PRACTICE_QUESTIONS.map((q) => q.id),
              () => startNewSimulado(simuladoCount)
            )
          ) : (
            <div className="space-y-4">
              {simuladoPool.map((q, idx) =>
                renderQuestionCard(q, idx, simuladoAnswers, (question, optIdx) => {
                  setSimuladoAnswers((prev) => ({ ...prev, [question.id]: optIdx }));
                  onRecordAttempt(
                    {
                      id: question.id,
                      itemType: 'question',
                      disciplineId: question.disciplineId,
                      topicCode: question.topicCode,
                    },
                    optIdx === question.correctIndex ? 'hit' : 'miss',
                    'simulado'
                  );
                })
              )}
            </div>
          )}
        </div>
      )}

      {/* MODE 2: FOCO POR MATÉRIA */}
      {mode === 'foco' && (
        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <p className="text-xs font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Marque uma ou mais disciplinas (exclui questões dominadas 3x):
              </p>
              <div className="flex items-center gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setFocusedDisciplineIds(DISCIPLINES.map((d) => d.id));
                    setFocusAnswers({});
                    setFocusRefreshKey((k) => k + 1);
                  }}
                  className="text-sky-600 dark:text-sky-400 hover:underline cursor-pointer"
                >
                  Todas
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFocusedDisciplineIds([]);
                    setFocusAnswers({});
                  }}
                  className="text-[#787774] hover:underline cursor-pointer"
                >
                  Limpar seleção
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {DISCIPLINES.map((disc) => {
                const selected = focusedDisciplineIds.includes(disc.id);
                const pendingCount = PRACTICE_QUESTIONS.filter(
                  (q) =>
                    q.disciplineId === disc.id &&
                    getItemStatus(questionProgress, q.id) !== 'dominada'
                ).length;

                return (
                  <button
                    key={disc.id}
                    type="button"
                    onClick={() => toggleFocusDiscipline(disc.id)}
                    className={`flex items-center justify-between gap-2 rounded-md border px-3 py-2.5 text-left text-xs transition-colors cursor-pointer min-h-[44px] ${
                      selected
                        ? 'border-sky-500/60 bg-sky-500/10 text-[#37352F] dark:text-[#EDEDED] font-medium'
                        : 'border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#191919] text-[#5F5E5B] dark:text-[#A3A3A3]'
                    }`}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                          selected
                            ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-500 dark:bg-sky-500 dark:text-slate-950'
                            : 'border-[#C7C6C2] dark:border-[#4A4A4A]'
                        }`}
                      >
                        {selected && <Check className="h-3 w-3 stroke-[2.5]" />}
                      </span>
                      <span className="font-mono opacity-75 tabular-nums">{disc.code}</span>
                      <span className="truncate">{disc.name}</span>
                    </span>
                    <span className="font-mono text-[11px] opacity-75 tabular-nums shrink-0">
                      {pendingCount}/15
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#E9E9E7] dark:border-[#2F2F2F] pt-3 text-xs">
              <span className="text-[#787774] dark:text-[#9B9A97] tabular-nums">
                {focusQuestions.length} pendentes na seleção ·{' '}
                <strong className="text-[#37352F] dark:text-[#EDEDED]">
                  {focusQuestions.filter((q) => focusAnswers[q.id] === q.correctIndex).length}/
                  {focusQuestions.filter((q) => focusAnswers[q.id] !== undefined).length} acertos nesta rodada
                </strong>
              </span>

              {Object.keys(focusAnswers).length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setFocusAnswers({});
                    setFocusRefreshKey((k) => k + 1);
                  }}
                  className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:underline cursor-pointer font-medium"
                >
                  <RotateCcw className="h-3 w-3" aria-hidden="true" />
                  <span>Nova rodada (pendentes)</span>
                </button>
              )}
            </div>
          </div>

          {focusedDisciplineIds.length === 0 ? (
            <div className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] p-8 text-center text-sm text-[#787774] dark:text-[#9B9A97]">
              Selecione pelo menos uma disciplina acima para exibir as questões.
            </div>
          ) : focusQuestions.length === 0 ? (
            renderMasteredEmptyBanner(
              'Você dominou todas as questões desta matéria!',
              'Todas as questões das disciplinas selecionadas atingiram 3 acertos consecutivos.',
              focusedDisciplineIds.length === 1 ? focusedDisciplineIds[0] : 'Todas',
              focusAllDisciplineQuestions.map((q) => q.id),
              () => {
                setFocusAnswers({});
                setFocusRefreshKey((k) => k + 1);
              }
            )
          ) : (
            <div className="space-y-4">
              {focusQuestions.map((q, idx) =>
                renderQuestionCard(q, idx, focusAnswers, (question, optIdx) => {
                  setFocusAnswers((prev) => ({ ...prev, [question.id]: optIdx }));
                  onRecordAttempt(
                    {
                      id: question.id,
                      itemType: 'question',
                      disciplineId: question.disciplineId,
                      topicCode: question.topicCode,
                    },
                    optIdx === question.correctIndex ? 'hit' : 'miss',
                    'questao'
                  );
                })
              )}
            </div>
          )}
        </div>
      )}

      {/* MODE 3: CARD GAME (FLASHCARDS RÁPIDOS COM SRS) */}
      {mode === 'flashcards' && (
        <div className="mt-6 space-y-5">
          <div className="flex flex-col gap-3 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <label htmlFor="fc-filter" className="text-xs font-medium text-[#787774] shrink-0">
                Matéria:
              </label>
              <select
                id="fc-filter"
                value={flashcardDisciplineFilter}
                onChange={(e) => rebuildFlashcardQueue(e.target.value)}
                className="w-full sm:w-auto rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-2.5 py-2 text-xs text-[#37352F] dark:text-[#EDEDED] min-h-[40px]"
              >
                <option value="Todas">Todas ({FLASHCARDS.length} cartas)</option>
                {DISCIPLINES.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.code} {d.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-mono text-[#37352F] dark:text-[#EDEDED] tabular-nums">
                Dominadas (3x): {flashcardMasteredCount}/{filteredAllFlashcards.length} · Na fila:{' '}
                {flashcardQueue.length}
              </span>
              <button
                type="button"
                onClick={() => rebuildFlashcardQueue(flashcardDisciplineFilter)}
                className="inline-flex items-center gap-1 rounded border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-2.5 py-1.5 text-xs text-[#5F5E5B] dark:text-[#D4D4D4] cursor-pointer min-h-[36px]"
              >
                <RotateCcw className="h-3 w-3" aria-hidden="true" />
                <span>Atualizar fila</span>
              </button>
            </div>
          </div>

          {currentCard ? (
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setCardFlipped((prev) => !prev)}
                className="w-full rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-6 sm:p-8 text-left transition-colors hover:border-sky-500/50 cursor-pointer min-h-[240px] flex flex-col justify-between"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                  <span>
                    {currentCard.disciplineName} ·{' '}
                    <span className="font-mono tabular-nums">
                      {getStatusLabel(questionProgress[currentCard.id])}
                    </span>
                  </span>
                  <span className="font-medium text-sky-600 dark:text-sky-400">
                    {cardFlipped ? 'Verso · Resposta' : 'Frente · Toque para virar'}
                  </span>
                </div>

                <div className="my-6">
                  {!cardFlipped ? (
                    <p className="font-display text-lg sm:text-xl font-semibold leading-snug text-[#37352F] dark:text-[#EDEDED]">
                      {currentCard.front}
                    </p>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-base sm:text-lg font-medium leading-relaxed text-[#37352F] dark:text-[#EDEDED]">
                        {currentCard.back}
                      </p>
                      <p className="rounded-md border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#252525] p-3 text-xs leading-relaxed text-[#5F5E5B] dark:text-[#CCCCCC]">
                        <strong className="text-[#37352F] dark:text-[#EDEDED]">Dica: </strong>
                        {currentCard.tip}
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-[11px] text-[#9B9A97]">
                  {cardFlipped
                    ? 'Acertei (+1 até 3x) ou Revisar depois (envia para o Caderno de Erros)'
                    : 'Tente responder mentalmente antes de virar'}
                </p>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleFlashcardReviewLater}
                  className="flex items-center justify-center gap-2 rounded-lg border border-rose-500/35 bg-rose-500/10 px-4 py-3.5 text-sm font-semibold text-rose-700 dark:text-rose-300 hover:bg-rose-500/20 active:scale-[0.99] transition-all cursor-pointer min-h-[52px]"
                >
                  <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Revisar depois</span>
                </button>

                <button
                  type="button"
                  onClick={handleFlashcardHit}
                  className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3.5 text-sm font-semibold text-white hover:bg-emerald-500 active:scale-[0.99] transition-all cursor-pointer min-h-[52px]"
                >
                  <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Acertei</span>
                </button>
              </div>
            </div>
          ) : flashcardMasteredCount === filteredAllFlashcards.length &&
            filteredAllFlashcards.length > 0 ? (
            renderMasteredEmptyBanner(
              'Você dominou todos os flashcards desta matéria!',
              'Todas as cartas selecionadas atingiram 3 acertos consecutivos e estão no Caderno de Acertos.',
              flashcardDisciplineFilter,
              filteredAllFlashcards.map((c) => c.id),
              () => rebuildFlashcardQueue(flashcardDisciplineFilter)
            )
          ) : (
            <div className="rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-8 text-center space-y-4">
              <p className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Sessão de cartas concluída!
              </p>
              <p className="text-sm text-[#5F5E5B] dark:text-[#B5B5B5]">
                Recarregue a fila para continuar acumulando até 3 acertos consecutivos nas cartas pendentes.
              </p>
              <button
                type="button"
                onClick={() => rebuildFlashcardQueue(flashcardDisciplineFilter)}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-500 cursor-pointer min-h-[48px]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                <span>Carregar cartas pendentes</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODE 4: SPRINT 3 MIN */}
      {mode === 'sprint' && (
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-3 divide-x divide-[#E9E9E7] dark:divide-[#2F2F2F] rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E]">
            <div className="p-3.5 sm:p-4">
              <p className="text-[11px] text-[#787774] dark:text-[#9B9A97]">Tempo</p>
              <p
                className={`mt-1 font-mono text-xl font-semibold tabular-nums ${
                  sprintState === 'running' && sprintSecondsLeft <= 30
                    ? 'text-rose-600 dark:text-rose-400'
                    : 'text-[#37352F] dark:text-[#EDEDED]'
                }`}
              >
                {String(Math.floor(sprintSecondsLeft / 60)).padStart(2, '0')}:
                {String(sprintSecondsLeft % 60).padStart(2, '0')}
              </p>
            </div>

            <div className="p-3.5 sm:p-4">
              <p className="text-[11px] text-[#787774] dark:text-[#9B9A97]">Pontuação</p>
              <p className="mt-1 font-mono text-xl font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
                {sprintScore}
                {sprintStreak >= 3 && (
                  <span className="ml-1.5 inline-flex items-center text-xs text-amber-600 dark:text-amber-400">
                    <Flame className="h-3.5 w-3.5" aria-hidden="true" />
                    {sprintStreak}
                  </span>
                )}
              </p>
            </div>

            <div className="p-3.5 sm:p-4">
              <p className="text-[11px] text-[#787774] dark:text-[#9B9A97]">Recorde</p>
              <p className="mt-1 font-mono text-xl font-semibold text-sky-600 dark:text-sky-400 tabular-nums inline-flex items-center gap-1">
                <Trophy className="h-4 w-4" aria-hidden="true" />
                {sprintBestScore}
              </p>
            </div>
          </div>

          {sprintState === 'idle' &&
            (smartSprintEligible.length === 0 ? (
              renderMasteredEmptyBanner(
                'Você dominou todas as afirmações do Sprint!',
                'Todas as afirmações rápidas de Certo/Errado já atingiram 3 acertos consecutivos.',
                'Todas',
                TRAP_STATEMENTS.map((t) => t.id),
                () => setSprintState('idle')
              )
            ) : (
              <div className="rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-6 sm:p-8 text-center space-y-4">
                <h2 className="font-display text-xl font-semibold text-[#37352F] dark:text-[#EDEDED]">
                  Sprint 3 Minutos · Certo ou Errado
                </h2>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
                  Exibe apenas afirmações ainda não dominadas ({smartSprintEligible.length} pendentes). Cada acerto soma +1 no domínio; erros enviam o item ao Caderno de Erros.
                </p>
                <button
                  type="button"
                  onClick={startSprint}
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 cursor-pointer min-h-[48px]"
                >
                  <Play className="h-4 w-4" aria-hidden="true" />
                  <span>Começar Sprint (3:00)</span>
                </button>
              </div>
            ))}

          {sprintState === 'running' && sprintDeck.length > 0 && (
            <div className="space-y-4">
              <div className="rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5 sm:p-7">
                <div className="flex items-center justify-between text-xs text-[#787774] dark:text-[#9B9A97]">
                  <span>{sprintDeck[sprintIndex % sprintDeck.length].disciplineName}</span>
                  <span className="font-mono tabular-nums">
                    Acertos: {sprintHits}/{sprintTotal}
                  </span>
                </div>

                <p className="mt-4 font-display text-lg font-medium leading-relaxed text-[#37352F] dark:text-[#EDEDED]">
                  {sprintDeck[sprintIndex % sprintDeck.length].statement}
                </p>

                {sprintLastFeedback && (
                  <div
                    className={`mt-4 rounded-md border px-3.5 py-2.5 text-xs leading-relaxed ${
                      sprintLastFeedback.correct
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200'
                        : 'border-rose-500/40 bg-rose-500/10 text-rose-800 dark:text-rose-200'
                    }`}
                  >
                    {sprintLastFeedback.text}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => answerSprint(false)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-4 text-base font-semibold text-rose-700 dark:text-rose-300 hover:bg-rose-500/20 active:scale-[0.98] transition-all cursor-pointer min-h-[56px]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                  <span>Errado</span>
                </button>

                <button
                  type="button"
                  onClick={() => answerSprint(true)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-4 text-base font-semibold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 active:scale-[0.98] transition-all cursor-pointer min-h-[56px]"
                >
                  <Check className="h-5 w-5" aria-hidden="true" />
                  <span>Certo</span>
                </button>
              </div>
            </div>
          )}

          {sprintState === 'finished' && (
            <div className="rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-6 sm:p-8 text-center space-y-4">
              <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                Tempo esgotado!
              </p>
              <h2 className="font-display text-2xl font-bold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
                {sprintScore} pontos
              </h2>
              <p className="text-sm text-[#5F5E5B] dark:text-[#B5B5B5] tabular-nums">
                Você acertou {sprintHits} de {sprintTotal} afirmações (
                {sprintTotal > 0 ? Math.round((sprintHits / sprintTotal) * 100) : 0}% de precisão).
              </p>
              <button
                type="button"
                onClick={startSprint}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-500 cursor-pointer min-h-[48px]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                <span>Jogar novamente</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODE 5: CAÇA-PEGADINHAS */}
      {mode === 'pegadinhas' && (
        <div className="mt-6 space-y-5">
          <div className="flex flex-col gap-3 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <label htmlFor="trap-filter" className="text-xs font-medium text-[#787774] shrink-0">
                Disciplina:
              </label>
              <select
                id="trap-filter"
                value={trapFilter}
                onChange={(e) => {
                  setTrapFilter(e.target.value);
                  setTrapAnswers({});
                  setTrapRefreshKey((k) => k + 1);
                }}
                className="w-full sm:w-auto rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-2.5 py-2 text-xs text-[#37352F] dark:text-[#EDEDED] min-h-[40px]"
              >
                <option value="Todas">Todas ({TRAP_STATEMENTS.length})</option>
                {DISCIPLINES.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.code} {d.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-mono text-[#37352F] dark:text-[#EDEDED] tabular-nums">
                {visibleTraps.filter((t) => trapAnswers[t.id] === t.isTrue).length}/
                {visibleTraps.filter((t) => trapAnswers[t.id] !== undefined).length} acertos
              </span>
              {Object.keys(trapAnswers).length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setTrapAnswers({});
                    setTrapRefreshKey((k) => k + 1);
                  }}
                  className="text-sky-600 dark:text-sky-400 hover:underline cursor-pointer font-medium"
                >
                  Nova rodada
                </button>
              )}
            </div>
          </div>

          {visibleTraps.length === 0 ? (
            renderMasteredEmptyBanner(
              'Você dominou todas as pegadinhas deste filtro!',
              'Todas as afirmações selecionadas já atingiram 3 acertos consecutivos.',
              trapFilter,
              trapBasePool.map((t) => t.id),
              () => {
                setTrapAnswers({});
                setTrapRefreshKey((k) => k + 1);
              }
            )
          ) : (
            <div className="space-y-4">
              {visibleTraps.map((trap, idx) => {
                const userChoice = trapAnswers[trap.id];
                const isAnswered = userChoice !== undefined;
                const isRight = userChoice === trap.isTrue;
                const srsRec = questionProgress[trap.id];

                return (
                  <div
                    key={trap.id}
                    className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-4 sm:p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                      <span className="font-mono tabular-nums">
                        #{String(idx + 1).padStart(2, '0')} · {trap.disciplineName} · Tópico{' '}
                        {trap.topicCode} · {getStatusLabel(srsRec)}
                      </span>
                      {isAnswered && (
                        <span
                          className={`font-semibold ${
                            isRight
                              ? 'text-emerald-700 dark:text-emerald-400'
                              : 'text-rose-600 dark:text-rose-400'
                          }`}
                        >
                          {isRight ? 'Pegadinha dominada' : 'Caderno de Erros'}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-[15px] leading-relaxed text-[#37352F] dark:text-[#EDEDED]">
                      {trap.statement}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        disabled={isAnswered}
                        onClick={() => {
                          if (isAnswered) return;
                          setTrapAnswers((prev) => ({ ...prev, [trap.id]: true }));
                          onRecordAttempt(
                            {
                              id: trap.id,
                              itemType: 'trap',
                              disciplineId: trap.disciplineId,
                              topicCode: trap.topicCode,
                            },
                            trap.isTrue === true ? 'hit' : 'miss',
                            'pegadinha'
                          );
                        }}
                        className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition-colors cursor-pointer disabled:cursor-default min-h-[48px] ${
                          isAnswered && trap.isTrue
                            ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-800 dark:text-emerald-200'
                            : isAnswered && userChoice === true && !trap.isTrue
                            ? 'border-rose-500/60 bg-rose-500/15 text-rose-800 dark:text-rose-200'
                            : 'border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#242424] text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500/60'
                        }`}
                      >
                        <Check className="h-4 w-4" aria-hidden="true" />
                        <span>Certo</span>
                      </button>

                      <button
                        type="button"
                        disabled={isAnswered}
                        onClick={() => {
                          if (isAnswered) return;
                          setTrapAnswers((prev) => ({ ...prev, [trap.id]: false }));
                          onRecordAttempt(
                            {
                              id: trap.id,
                              itemType: 'trap',
                              disciplineId: trap.disciplineId,
                              topicCode: trap.topicCode,
                            },
                            trap.isTrue === false ? 'hit' : 'miss',
                            'pegadinha'
                          );
                        }}
                        className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition-colors cursor-pointer disabled:cursor-default min-h-[48px] ${
                          isAnswered && !trap.isTrue
                            ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-800 dark:text-emerald-200'
                            : isAnswered && userChoice === false && trap.isTrue
                            ? 'border-rose-500/60 bg-rose-500/15 text-rose-800 dark:text-rose-200'
                            : 'border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#242424] text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500/60'
                        }`}
                      >
                        <X className="h-4 w-4" aria-hidden="true" />
                        <span>Errado</span>
                      </button>
                    </div>

                    {isAnswered && (
                      <div className="mt-4 border-t border-[#E9E9E7] dark:border-[#2F2F2F] pt-3 text-sm text-[#5F5E5B] dark:text-[#CCCCCC] leading-relaxed">
                        {trap.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* MODE 6: CADERNO DE ERROS (Exclusivo 'erro' ou 'revisar') */}
      {mode === 'erros' && (
        <div className="mt-6 space-y-5">
          <div className="flex flex-col gap-3 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <label htmlFor="err-filter" className="text-xs font-medium text-[#787774] shrink-0">
                Matéria:
              </label>
              <select
                id="err-filter"
                value={errorDisciplineFilter}
                onChange={(e) => {
                  setErrorDisciplineFilter(e.target.value);
                  setErrorTopicFilter(null);
                  setErrorQuestionAnswers({});
                  setErrorTrapAnswers({});
                  setErrorCardSolved({});
                  setErrorRefreshKey((k) => k + 1);
                }}
                className="w-full sm:w-auto rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-2.5 py-2 text-xs text-[#37352F] dark:text-[#EDEDED] min-h-[40px]"
              >
                <option value="Todas">Todas ({allErrorItemIds} itens)</option>
                {DISCIPLINES.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.code} {d.name}
                  </option>
                ))}
              </select>

              {errorTopicFilter && (
                <button
                  type="button"
                  onClick={() => {
                    setErrorTopicFilter(null);
                    refreshErrorNotebook();
                  }}
                  className="inline-flex items-center gap-1 rounded border border-sky-500/40 bg-sky-500/10 px-2.5 py-1.5 text-xs font-medium text-sky-700 dark:text-sky-300 cursor-pointer"
                >
                  <span>Tópico {errorTopicFilter}</span>
                  <X className="h-3 w-3" aria-hidden="true" />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={refreshErrorNotebook}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-3 py-2 text-xs font-medium text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500/50 cursor-pointer min-h-[38px] self-start sm:self-center"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Atualizar Caderno ({allErrorItemIds})</span>
            </button>
          </div>

          {errorSnapshot.questions.length === 0 &&
          errorSnapshot.flashcards.length === 0 &&
          errorSnapshot.traps.length === 0 ? (
            <div className="rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-8 text-center space-y-3">
              <Check className="mx-auto h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <h2 className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Caderno de Erros limpo{errorTopicFilter ? ` no tópico ${errorTopicFilter}` : ''}!
              </h2>
              <p className="mx-auto max-w-md text-xs leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
                Nenhuma questão, flashcard ou pegadinha pendente de erro neste filtro. Ao acertar um item aqui, ele passa para Em Progresso (1/3) e precisa de mais 2 acertos para ser dominado.
              </p>
              {errorTopicFilter && (
                <button
                  type="button"
                  onClick={() => {
                    if (errorDisciplineFilter !== 'Todas') {
                      setFocusedDisciplineIds([errorDisciplineFilter]);
                    }
                    setMode('foco');
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-sky-500 cursor-pointer min-h-[42px]"
                >
                  <span>Praticar matéria no Foco por Matéria</span>
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {errorSnapshot.questions.map((q, idx) =>
                renderQuestionCard(
                  q,
                  idx,
                  errorQuestionAnswers,
                  (question, optIdx) => {
                    setErrorQuestionAnswers((prev) => ({ ...prev, [question.id]: optIdx }));
                    onRecordAttempt(
                      {
                        id: question.id,
                        itemType: 'question',
                        disciplineId: question.disciplineId,
                        topicCode: question.topicCode,
                      },
                      optIdx === question.correctIndex ? 'hit' : 'miss',
                      'erros'
                    );
                  },
                  {
                    feedbackHintHit: 'Saiu do Caderno de Erros (1/3)',
                    feedbackHintMiss: 'Continua no Caderno de Erros (0/3)',
                  }
                )
              )}

              {errorSnapshot.flashcards.map((card) => {
                const flipped = !!errorCardFlipped[card.id];
                const outcome = errorCardSolved[card.id];
                return (
                  <div
                    key={card.id}
                    className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5 space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                      <span>
                        Flashcard · {card.disciplineName} · Tópico {card.topicCode}
                      </span>
                      <span className="font-mono">
                        {outcome === 'hit'
                          ? 'Promovido (1/3 · Em progresso)'
                          : getStatusLabel(questionProgress[card.id])}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setErrorCardFlipped((prev) => ({ ...prev, [card.id]: !prev[card.id] }))
                      }
                      className="w-full text-left cursor-pointer space-y-2"
                    >
                      <p className="font-display text-base font-semibold text-[#37352F] dark:text-[#EDEDED]">
                        {card.front}
                      </p>
                      {flipped ? (
                        <p className="rounded-md border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#252525] p-3 text-sm leading-relaxed text-[#37352F] dark:text-[#D4D4D4]">
                          {card.back}
                        </p>
                      ) : (
                        <p className="text-xs text-sky-600 dark:text-sky-400">
                          Toque para ver a resposta
                        </p>
                      )}
                    </button>

                    {!outcome && (
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setErrorCardSolved((prev) => ({ ...prev, [card.id]: 'review_later' }));
                            onRecordAttempt(
                              {
                                id: card.id,
                                itemType: 'flashcard',
                                disciplineId: card.disciplineId,
                                topicCode: card.topicCode,
                              },
                              'review_later',
                              'erros'
                            );
                          }}
                          className="rounded-lg border border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5] dark:bg-[#242424] px-4 py-3 text-xs font-semibold text-[#37352F] dark:text-[#EDEDED] cursor-pointer min-h-[48px]"
                        >
                          Revisar depois
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setErrorCardSolved((prev) => ({ ...prev, [card.id]: 'hit' }));
                            onRecordAttempt(
                              {
                                id: card.id,
                                itemType: 'flashcard',
                                disciplineId: card.disciplineId,
                                topicCode: card.topicCode,
                              },
                              'hit',
                              'erros'
                            );
                          }}
                          className="rounded-lg bg-emerald-600 px-4 py-3 text-xs font-semibold text-white hover:bg-emerald-500 cursor-pointer min-h-[48px]"
                        >
                          Acertei (Sair dos Erros)
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

              {errorSnapshot.traps.map((trap, idx) => {
                const userChoice = errorTrapAnswers[trap.id];
                const isAnswered = userChoice !== undefined;
                const isRight = userChoice === trap.isTrue;
                return (
                  <div
                    key={trap.id}
                    className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                      <span>
                        Pegadinha #{idx + 1} · {trap.disciplineName} · Tópico {trap.topicCode}
                      </span>
                      {isAnswered && (
                        <span
                          className={`font-semibold ${
                            isRight
                              ? 'text-emerald-700 dark:text-emerald-400'
                              : 'text-rose-600 dark:text-rose-400'
                          }`}
                        >
                          {isRight
                            ? 'Saiu do Caderno de Erros (1/3)'
                            : 'Continua no Caderno de Erros (0/3)'}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#37352F] dark:text-[#EDEDED]">
                      {trap.statement}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        disabled={isAnswered}
                        onClick={() => {
                          if (isAnswered) return;
                          setErrorTrapAnswers((prev) => ({ ...prev, [trap.id]: true }));
                          onRecordAttempt(
                            {
                              id: trap.id,
                              itemType: 'trap',
                              disciplineId: trap.disciplineId,
                              topicCode: trap.topicCode,
                            },
                            trap.isTrue === true ? 'hit' : 'miss',
                            'erros'
                          );
                        }}
                        className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#242424] px-4 py-3 text-sm font-semibold text-[#37352F] dark:text-[#EDEDED] cursor-pointer disabled:opacity-70 min-h-[48px]"
                      >
                        Certo
                      </button>
                      <button
                        type="button"
                        disabled={isAnswered}
                        onClick={() => {
                          if (isAnswered) return;
                          setErrorTrapAnswers((prev) => ({ ...prev, [trap.id]: false }));
                          onRecordAttempt(
                            {
                              id: trap.id,
                              itemType: 'trap',
                              disciplineId: trap.disciplineId,
                              topicCode: trap.topicCode,
                            },
                            trap.isTrue === false ? 'hit' : 'miss',
                            'erros'
                          );
                        }}
                        className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#242424] px-4 py-3 text-sm font-semibold text-[#37352F] dark:text-[#EDEDED] cursor-pointer disabled:opacity-70 min-h-[48px]"
                      >
                        Errado
                      </button>
                    </div>
                    {isAnswered && (
                      <p className="mt-3 border-t border-[#E9E9E7] dark:border-[#2F2F2F] pt-3 text-xs leading-relaxed text-[#5F5E5B] dark:text-[#CCCCCC]">
                        {trap.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* MODE 7: CADERNO DE ACERTOS (Dominadas — 3 acertos consecutivos) */}
      {mode === 'acertos' && (
        <div className="mt-6 space-y-5">
          <div className="flex flex-col gap-3 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 min-w-0">
              <label htmlFor="mast-filter" className="text-xs font-medium text-[#787774] shrink-0">
                Matéria:
              </label>
              <select
                id="mast-filter"
                value={masteredDisciplineFilter}
                onChange={(e) => {
                  setMasteredDisciplineFilter(e.target.value);
                  setMasteredQuestionAnswers({});
                  setMasteredTrapAnswers({});
                  setMasteredRefreshKey((k) => k + 1);
                }}
                className="w-full sm:w-auto rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-2.5 py-2 text-xs text-[#37352F] dark:text-[#EDEDED] min-h-[40px]"
              >
                <option value="Todas">Todas ({allMasteredItemIds} dominadas)</option>
                {DISCIPLINES.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.code} {d.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] p-1 self-start sm:self-center">
              <button
                type="button"
                onClick={() => setMasteredSubMode('consulta')}
                className={`rounded px-3 py-1.5 text-xs font-medium cursor-pointer ${
                  masteredSubMode === 'consulta'
                    ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold'
                    : 'text-[#5F5E5B] dark:text-[#A3A3A3]'
                }`}
              >
                Consulta Rápida
              </button>
              <button
                type="button"
                onClick={() => {
                  setMasteredSubMode('simulado');
                  refreshMasteredNotebook();
                }}
                className={`rounded px-3 py-1.5 text-xs font-medium cursor-pointer ${
                  masteredSubMode === 'simulado'
                    ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold'
                    : 'text-[#5F5E5B] dark:text-[#A3A3A3]'
                }`}
              >
                Manutenção de Memória
              </button>
            </div>
          </div>

          {masteredSnapshot.questions.length === 0 &&
          masteredSnapshot.flashcards.length === 0 &&
          masteredSnapshot.traps.length === 0 ? (
            <div className="rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-8 text-center space-y-3">
              <Trophy className="mx-auto h-8 w-8 text-[#9B9A97]" aria-hidden="true" />
              <h2 className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Nenhuma questão dominada (3x) ainda
              </h2>
              <p className="mx-auto max-w-md text-xs leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
                Acerte a mesma questão, flashcard ou pegadinha 3 vezes consecutivas para movê-la automaticamente para o Caderno de Acertos.
              </p>
            </div>
          ) : masteredSubMode === 'consulta' ? (
            <div className="space-y-4">
              {masteredSnapshot.questions.map((q, idx) => {
                const rec = questionProgress[q.id];
                return (
                  <div
                    key={q.id}
                    className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                      <span className="font-mono tabular-nums">
                        Dominada #{idx + 1} · {q.discipline} · Tópico {q.topicCode}
                      </span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                        3/3 · {rec?.totalAcertos ?? 3} acertos totais
                      </span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-[#37352F] dark:text-[#EDEDED]">
                      {q.statement}
                    </p>
                    <div className="rounded-md border border-emerald-500/35 bg-emerald-500/10 p-3 text-xs leading-relaxed text-emerald-900 dark:text-emerald-100">
                      <p className="font-semibold">
                        Resposta: {OPTION_LETTERS[q.correctIndex]}) {q.options[q.correctIndex]}
                      </p>
                      <p className="mt-1 opacity-90">{q.explanation}</p>
                    </div>
                  </div>
                );
              })}

              {masteredSnapshot.flashcards.map((c) => (
                <div
                  key={c.id}
                  className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5 space-y-2"
                >
                  <p className="text-xs text-[#787774] dark:text-[#9B9A97]">
                    Flashcard Dominado (3/3) · {c.disciplineName} · Tópico {c.topicCode}
                  </p>
                  <p className="text-sm font-semibold text-[#37352F] dark:text-[#EDEDED]">
                    {c.front}
                  </p>
                  <p className="rounded-md border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs leading-relaxed text-emerald-900 dark:text-emerald-100">
                    {c.back}
                  </p>
                </div>
              ))}

              {masteredSnapshot.traps.map((t) => (
                <div
                  key={t.id}
                  className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5 space-y-2"
                >
                  <p className="text-xs text-[#787774] dark:text-[#9B9A97]">
                    Pegadinha Dominada (3/3) · {t.disciplineName} · Tópico {t.topicCode}
                  </p>
                  <p className="text-sm font-medium text-[#37352F] dark:text-[#EDEDED]">
                    {t.statement}
                  </p>
                  <p className="rounded-md border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs leading-relaxed text-emerald-900 dark:text-emerald-100">
                    <strong>Gabarito: {t.isTrue ? 'CERTO' : 'ERRADO'}</strong> — {t.explanation}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {masteredSnapshot.questions.map((q, idx) =>
                renderQuestionCard(
                  q,
                  idx,
                  masteredQuestionAnswers,
                  (question, optIdx) => {
                    setMasteredQuestionAnswers((prev) => ({ ...prev, [question.id]: optIdx }));
                    onRecordAttempt(
                      {
                        id: question.id,
                        itemType: 'question',
                        disciplineId: question.disciplineId,
                        topicCode: question.topicCode,
                      },
                      optIdx === question.correctIndex ? 'hit' : 'miss',
                      'acertos'
                    );
                  },
                  {
                    feedbackHintHit: 'Memória mantida (3/3)',
                    feedbackHintMiss: 'Voltou ao Caderno de Erros (0/3)',
                  }
                )
              )}

              {masteredSnapshot.traps.map((trap, idx) => {
                const userChoice = masteredTrapAnswers[trap.id];
                const isAnswered = userChoice !== undefined;
                const isRight = userChoice === trap.isTrue;
                return (
                  <div
                    key={trap.id}
                    className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                      <span>
                        Manutenção Pegadinha #{idx + 1} · {trap.disciplineName} · Tópico {trap.topicCode}
                      </span>
                      {isAnswered && (
                        <span
                          className={`font-semibold ${
                            isRight
                              ? 'text-emerald-700 dark:text-emerald-400'
                              : 'text-rose-600 dark:text-rose-400'
                          }`}
                        >
                          {isRight ? 'Memória mantida (3/3)' : 'Voltou ao Caderno de Erros (0/3)'}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#37352F] dark:text-[#EDEDED]">
                      {trap.statement}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        disabled={isAnswered}
                        onClick={() => {
                          if (isAnswered) return;
                          setMasteredTrapAnswers((prev) => ({ ...prev, [trap.id]: true }));
                          onRecordAttempt(
                            {
                              id: trap.id,
                              itemType: 'trap',
                              disciplineId: trap.disciplineId,
                              topicCode: trap.topicCode,
                            },
                            trap.isTrue === true ? 'hit' : 'miss',
                            'acertos'
                          );
                        }}
                        className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#242424] px-4 py-3 text-sm font-semibold text-[#37352F] dark:text-[#EDEDED] cursor-pointer disabled:opacity-70 min-h-[48px]"
                      >
                        Certo
                      </button>
                      <button
                        type="button"
                        disabled={isAnswered}
                        onClick={() => {
                          if (isAnswered) return;
                          setMasteredTrapAnswers((prev) => ({ ...prev, [trap.id]: false }));
                          onRecordAttempt(
                            {
                              id: trap.id,
                              itemType: 'trap',
                              disciplineId: trap.disciplineId,
                              topicCode: trap.topicCode,
                            },
                            trap.isTrue === false ? 'hit' : 'miss',
                            'acertos'
                          );
                        }}
                        className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#242424] px-4 py-3 text-sm font-semibold text-[#37352F] dark:text-[#EDEDED] cursor-pointer disabled:opacity-70 min-h-[48px]"
                      >
                        Errado
                      </button>
                    </div>
                    {isAnswered && (
                      <p className="mt-3 border-t border-[#E9E9E7] dark:border-[#2F2F2F] pt-3 text-xs leading-relaxed text-[#5F5E5B] dark:text-[#CCCCCC]">
                        {trap.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
