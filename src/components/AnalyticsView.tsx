import { useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  BookX,
  CheckCircle2,
  Gamepad2,
  RotateCcw,
  TrendingUp,
} from 'lucide-react';
import { FLASHCARDS, TRAP_STATEMENTS } from '../data/gameDecks';
import { PRACTICE_QUESTIONS } from '../data/questions';
import { DISCIPLINES, TOPIC_MAP } from '../data/syllabus';
import {
  getSrsSummaryCounts,
  type QuestionAttempt,
  type QuestionProgressRecord,
} from '../utils/srs';
import type { ActivePage } from './NotionSidebar';

export type { QuestionAttempt };

interface AnalyticsViewProps {
  attempts: QuestionAttempt[];
  questionProgress: Record<string, QuestionProgressRecord>;
  onOpenDiscipline: (disciplineId: ActivePage) => void;
  onOpenTraining: () => void;
  onOpenErrorNotebook: (opts?: { disciplineId?: string; topicCode?: string }) => void;
  onOpenMasteredNotebook: () => void;
  onClearAttempts: () => void;
}

interface TopicStat {
  topicCode: string;
  title: string;
  disciplineId: string;
  disciplineName: string;
  total: number;
  hits: number;
  misses: number;
  accuracy: number;
}

export function AnalyticsView({
  attempts,
  questionProgress,
  onOpenDiscipline,
  onOpenTraining,
  onOpenErrorNotebook,
  onOpenMasteredNotebook,
  onClearAttempts,
}: AnalyticsViewProps) {
  const [confirmClear, setConfirmClear] = useState(false);

  const srsQuestionsSummary = useMemo(
    () => getSrsSummaryCounts(PRACTICE_QUESTIONS, questionProgress),
    [questionProgress]
  );

  const extraItemsSummary = useMemo(() => {
    const extras = [...FLASHCARDS, ...TRAP_STATEMENTS];
    return getSrsSummaryCounts(extras, questionProgress);
  }, [questionProgress]);

  const summary = useMemo(() => {
    const total = attempts.length;
    const hits = attempts.filter((a) => a.isCorrect).length;
    const misses = total - hits;
    const overallAccuracy = total > 0 ? Math.round((hits / total) * 100) : 0;

    // Group cumulative attempts by topicCode
    const topicMap = new Map<string, { disciplineId: string; hits: number; misses: number }>();
    for (const att of attempts) {
      const prev = topicMap.get(att.topicCode) ?? {
        disciplineId: att.disciplineId,
        hits: 0,
        misses: 0,
      };
      if (att.isCorrect) prev.hits += 1;
      else prev.misses += 1;
      topicMap.set(att.topicCode, prev);
    }

    const topicStats: TopicStat[] = Array.from(topicMap.entries()).map(([code, stat]) => {
      const meta = TOPIC_MAP[code];
      const disc = DISCIPLINES.find((d) => d.id === (meta?.disciplineId ?? stat.disciplineId));
      const tTotal = stat.hits + stat.misses;
      return {
        topicCode: code,
        title: meta?.title ?? `Tópico ${code}`,
        disciplineId: meta?.disciplineId ?? stat.disciplineId,
        disciplineName: meta?.disciplineName ?? disc?.name ?? 'Geral',
        total: tTotal,
        hits: stat.hits,
        misses: stat.misses,
        accuracy: tTotal > 0 ? Math.round((stat.hits / tTotal) * 100) : 0,
      };
    });

    const mostMissed = [...topicStats]
      .filter((t) => t.misses > 0)
      .sort((a, b) => b.misses - a.misses || a.accuracy - b.accuracy)
      .slice(0, 6);

    const mostHit = [...topicStats]
      .filter((t) => t.hits > 0)
      .sort((a, b) => b.hits - a.hits || b.accuracy - a.accuracy)
      .slice(0, 6);

    const needsStudy = [...topicStats]
      .filter((t) => t.accuracy < 70 || (t.misses > 0 && t.misses >= t.hits))
      .sort((a, b) => a.accuracy - b.accuracy || b.misses - a.misses);

    const doingWell = [...topicStats]
      .filter((t) => t.accuracy >= 70 && t.hits >= 1)
      .sort((a, b) => b.accuracy - a.accuracy || b.hits - a.hits);

    const disciplineStats = DISCIPLINES.map((disc) => {
      const discAttempts = attempts.filter((a) => a.disciplineId === disc.id);
      const dTotal = discAttempts.length;
      const dHits = discAttempts.filter((a) => a.isCorrect).length;
      const dMisses = dTotal - dHits;
      const dAcc = dTotal > 0 ? Math.round((dHits / dTotal) * 100) : null;
      const discQuestions = PRACTICE_QUESTIONS.filter((q) => q.disciplineId === disc.id);
      const discSrs = getSrsSummaryCounts(discQuestions, questionProgress);
      return {
        id: disc.id,
        code: disc.code,
        name: disc.name,
        total: dTotal,
        hits: dHits,
        misses: dMisses,
        accuracy: dAcc,
        dominadas: discSrs.dominadas,
        erros: discSrs.erros,
        qTotal: discSrs.total,
      };
    });

    return {
      total,
      hits,
      misses,
      overallAccuracy,
      mostMissed,
      mostHit,
      needsStudy,
      doingWell,
      disciplineStats,
    };
  }, [attempts, questionProgress]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-10 sm:py-14">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
            Memória Inteligente & Repetição Espaçada · Regra 3x Consecutivos
          </p>
          <h1 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#37352F] dark:text-[#EDEDED] sm:text-3xl [text-wrap:balance]">
            Análise de Desempenho em Questões
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
            Acompanhe o ciclo de domínio de cada questão (Inédita → 1-2 acertos → Dominada 3x), gerencie o Caderno de Erros e ataque os tópicos que precisam de reforço.
          </p>
        </div>

        {summary.total > 0 && (
          <div className="shrink-0">
            {!confirmClear ? (
              <button
                type="button"
                onClick={() => setConfirmClear(true)}
                className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#222222] px-3 py-2 text-xs font-medium text-[#5F5E5B] dark:text-[#D4D4D4] hover:text-[#37352F] dark:hover:text-[#EDEDED] transition-colors cursor-pointer min-h-[38px]"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Zerar análise</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    onClearAttempts();
                    setConfirmClear(false);
                  }}
                  className="rounded-md border border-rose-500/40 bg-rose-500/10 px-3 py-1.5 font-medium text-rose-600 dark:text-rose-400 cursor-pointer"
                >
                  Confirmar
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmClear(false)}
                  className="rounded-md border border-[#E9E9E7] dark:border-[#333333] px-3 py-1.5 text-[#37352F] dark:text-[#D4D4D4] cursor-pointer"
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      {/* SRS 4-Bucket Status Strip (Always visible) */}
      <section className="mt-7">
        <div className="grid grid-cols-2 divide-y divide-[#E9E9E7] dark:divide-[#2F2F2F] rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <div className="p-4 sm:p-5">
            <p className="text-xs text-[#787774] dark:text-[#9B9A97]">Questões Inéditas</p>
            <p className="mt-1.5 font-mono text-2xl font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
              {srsQuestionsSummary.ineditas}
              <span className="text-xs font-normal text-[#9B9A97] ml-1">
                /{srsQuestionsSummary.total}
              </span>
            </p>
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-xs text-[#787774] dark:text-[#9B9A97]">Em Progresso (1-2 acertos)</p>
            <p className="mt-1.5 font-mono text-2xl font-semibold text-sky-600 dark:text-sky-400 tabular-nums">
              {srsQuestionsSummary.emProgresso}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenErrorNotebook()}
            className="p-4 sm:p-5 text-left hover:bg-[#F7F7F5] dark:hover:bg-[#242424] transition-colors cursor-pointer"
          >
            <p className="text-xs text-[#787774] dark:text-[#9B9A97]">No Caderno de Erros</p>
            <p className="mt-1.5 font-mono text-2xl font-semibold text-rose-600 dark:text-rose-400 tabular-nums">
              {srsQuestionsSummary.erros}
            </p>
            {extraItemsSummary.erros > 0 && (
              <p className="mt-0.5 text-[11px] text-[#787774] dark:text-[#8E8E8E] tabular-nums">
                + {extraItemsSummary.erros} cards/pegadinhas
              </p>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenMasteredNotebook}
            className="p-4 sm:p-5 text-left hover:bg-[#F7F7F5] dark:hover:bg-[#242424] transition-colors cursor-pointer"
          >
            <p className="text-xs text-[#787774] dark:text-[#9B9A97]">
              Dominadas / Cad. Acertos (3x)
            </p>
            <p className="mt-1.5 font-mono text-2xl font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
              {srsQuestionsSummary.dominadas}
            </p>
            {extraItemsSummary.dominadas > 0 && (
              <p className="mt-0.5 text-[11px] text-[#787774] dark:text-[#8E8E8E] tabular-nums">
                + {extraItemsSummary.dominadas} cards/pegadinhas
              </p>
            )}
          </button>
        </div>
      </section>

      {/* Empty State for Attempts */}
      {summary.total === 0 ? (
        <div className="mt-7 rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] p-6 sm:p-10 text-center space-y-4">
          <TrendingUp
            className="mx-auto h-8 w-8 text-sky-600 dark:text-sky-400"
            aria-hidden="true"
          />
          <h2 className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
            Nenhuma resposta registrada ainda
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
            Responda questões no Simulado Geral, Foco por Matéria, Flashcards, Sprint 3 min, Caça-Pegadinhas ou dentro de qualquer disciplina para alimentar seu diagnóstico de erros e acertos por tópico.
          </p>
          <button
            type="button"
            onClick={onOpenTraining}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-colors cursor-pointer min-h-[48px]"
          >
            <Gamepad2 className="h-4 w-4" aria-hidden="true" />
            <span>Ir para Treino & Desafios</span>
          </button>
        </div>
      ) : (
        <div className="mt-7 space-y-9">
          {/* Cumulative Performance Strip */}
          <div className="grid grid-cols-2 divide-y divide-[#E9E9E7] dark:divide-[#2F2F2F] rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/40 dark:bg-[#1B1B1B] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <div className="p-4">
              <p className="text-xs text-[#787774] dark:text-[#9B9A97]">Respostas acumuladas</p>
              <p className="mt-1 font-mono text-xl font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
                {summary.total}
              </p>
            </div>

            <div className="p-4">
              <p className="text-xs text-[#787774] dark:text-[#9B9A97]">Aproveitamento geral</p>
              <p
                className={`mt-1 font-mono text-xl font-semibold tabular-nums ${
                  summary.overallAccuracy >= 75
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : summary.overallAccuracy >= 50
                    ? 'text-sky-600 dark:text-sky-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {summary.overallAccuracy}%
              </p>
            </div>

            <div className="p-4">
              <p className="text-xs text-[#787774] dark:text-[#9B9A97]">Tópicos que já domina</p>
              <p className="mt-1 font-mono text-xl font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
                {summary.doingWell.length}
              </p>
            </div>

            <div className="p-4">
              <p className="text-xs text-[#787774] dark:text-[#9B9A97]">Precisa estudar mais</p>
              <p className="mt-1 font-mono text-xl font-semibold text-rose-600 dark:text-rose-400 tabular-nums">
                {summary.needsStudy.length}
              </p>
            </div>
          </div>

          {/* 2-Column Diagnostic: Precisa Estudar Mais vs. Já Estou Bem */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left: Needs Study */}
            <section className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#222222] px-4 py-3">
                <div className="flex items-center gap-2">
                  <AlertCircle
                    className="h-4 w-4 text-rose-600 dark:text-rose-400 shrink-0"
                    aria-hidden="true"
                  />
                  <h2 className="font-display text-sm font-semibold text-[#37352F] dark:text-[#EDEDED]">
                    O que preciso estudar mais
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#787774] dark:text-[#9B9A97] tabular-nums">
                  {summary.needsStudy.length} tópicos
                </span>
              </div>

              {summary.needsStudy.length === 0 ? (
                <p className="p-5 text-xs leading-relaxed text-[#787774] dark:text-[#9B9A97]">
                  Excelente! Nenhum tópico avaliado está abaixo de 70% de acerto no momento.
                </p>
              ) : (
                <div className="divide-y divide-[#E9E9E7] dark:divide-[#2A2A2A]">
                  {summary.needsStudy.map((t) => (
                    <div key={t.topicCode} className="px-4 py-3.5 space-y-2.5">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                          <span className="font-mono font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
                            {t.topicCode}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{t.disciplineName}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono font-medium text-rose-600 dark:text-rose-400 tabular-nums">
                            {t.accuracy}% ({t.hits}/{t.total})
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5] line-clamp-2">
                          {t.title}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            onOpenErrorNotebook({
                              disciplineId: t.disciplineId,
                              topicCode: t.topicCode,
                            })
                          }
                          className="inline-flex items-center gap-1 rounded border border-rose-500/40 bg-rose-500/10 px-2.5 py-1.5 text-xs font-medium text-rose-700 dark:text-rose-300 hover:bg-rose-500/20 transition-colors cursor-pointer whitespace-nowrap min-h-[36px]"
                        >
                          <BookX className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Treinar Erros do Tópico</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onOpenDiscipline(t.disciplineId)}
                          className="inline-flex items-center gap-1 rounded border border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5] dark:bg-[#252525] px-2.5 py-1.5 text-xs font-medium text-sky-600 dark:text-sky-400 hover:border-sky-500/50 transition-colors cursor-pointer whitespace-nowrap min-h-[36px]"
                        >
                          <span>Revisar</span>
                          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Right: Doing Well */}
            <section className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#222222] px-4 py-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0"
                    aria-hidden="true"
                  />
                  <h2 className="font-display text-sm font-semibold text-[#37352F] dark:text-[#EDEDED]">
                    O que já estou bem
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#787774] dark:text-[#9B9A97] tabular-nums">
                  {summary.doingWell.length} tópicos
                </span>
              </div>

              {summary.doingWell.length === 0 ? (
                <p className="p-5 text-xs leading-relaxed text-[#787774] dark:text-[#9B9A97]">
                  Continue respondendo questões para destacar seus tópicos com aproveitamento igual ou superior a 70%.
                </p>
              ) : (
                <div className="divide-y divide-[#E9E9E7] dark:divide-[#2A2A2A]">
                  {summary.doingWell.map((t) => (
                    <div key={t.topicCode} className="px-4 py-3.5 space-y-2.5">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                          <span className="font-mono font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
                            {t.topicCode}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{t.disciplineName}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono font-medium text-emerald-600 dark:text-emerald-400 tabular-nums">
                            {t.accuracy}% ({t.hits}/{t.total})
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5] line-clamp-2">
                          {t.title}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {t.misses > 0 && (
                          <button
                            type="button"
                            onClick={() =>
                              onOpenErrorNotebook({
                                disciplineId: t.disciplineId,
                                topicCode: t.topicCode,
                              })
                            }
                            className="inline-flex items-center gap-1 rounded border border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5] dark:bg-[#252525] px-2.5 py-1.5 text-xs font-medium text-[#5F5E5B] dark:text-[#D4D4D4] hover:border-rose-500/40 cursor-pointer whitespace-nowrap min-h-[34px]"
                          >
                            <BookX className="h-3 w-3" aria-hidden="true" />
                            <span>Treinar Erros do Tópico</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => onOpenDiscipline(t.disciplineId)}
                          className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EDEDED] cursor-pointer whitespace-nowrap min-h-[34px]"
                        >
                          <span>Revisar</span>
                          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Most Missed vs Most Hit Ranking Bars */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Ranking: Mais Errei */}
            <section className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5">
              <h2 className="font-display text-sm font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Tópicos que mais errei
              </h2>
              <p className="mt-0.5 text-xs text-[#787774] dark:text-[#9B9A97]">
                Volume acumulado de erros (incluindo tentativas repetidas)
              </p>

              {summary.mostMissed.length === 0 ? (
                <p className="mt-4 text-xs text-[#787774] dark:text-[#9B9A97]">
                  Nenhum erro registrado até o momento.
                </p>
              ) : (
                <div className="mt-4 space-y-3.5">
                  {summary.mostMissed.map((t) => {
                    const maxMisses = summary.mostMissed[0].misses || 1;
                    const barWidth = Math.round((t.misses / maxMisses) * 100);
                    return (
                      <div key={t.topicCode}>
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="font-medium text-[#37352F] dark:text-[#EDEDED] truncate">
                            <span className="font-mono mr-1.5 tabular-nums">{t.topicCode}</span>
                            <span>{t.disciplineName}</span>
                          </span>
                          <span className="font-mono text-rose-600 dark:text-rose-400 tabular-nums shrink-0">
                            {t.misses} {t.misses === 1 ? 'erro' : 'erros'} ({t.accuracy}% acerto)
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#EFEFED] dark:bg-[#2C2C2C]">
                          <div
                            className="h-full rounded-full bg-rose-500"
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Ranking: Mais Acertei */}
            <section className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5">
              <h2 className="font-display text-sm font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Tópicos que mais acertei
              </h2>
              <p className="mt-0.5 text-xs text-[#787774] dark:text-[#9B9A97]">
                Volume acumulado de acertos até atingir o domínio 3x
              </p>

              {summary.mostHit.length === 0 ? (
                <p className="mt-4 text-xs text-[#787774] dark:text-[#9B9A97]">
                  Nenhum acerto registrado ainda.
                </p>
              ) : (
                <div className="mt-4 space-y-3.5">
                  {summary.mostHit.map((t) => {
                    const maxHits = summary.mostHit[0].hits || 1;
                    const barWidth = Math.round((t.hits / maxHits) * 100);
                    return (
                      <div key={t.topicCode}>
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="font-medium text-[#37352F] dark:text-[#EDEDED] truncate">
                            <span className="font-mono mr-1.5 tabular-nums">{t.topicCode}</span>
                            <span>{t.disciplineName}</span>
                          </span>
                          <span className="font-mono text-emerald-600 dark:text-emerald-400 tabular-nums shrink-0">
                            {t.hits} {t.hits === 1 ? 'acerto' : 'acertos'} ({t.accuracy}%)
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#EFEFED] dark:bg-[#2C2C2C]">
                          <div
                            className="h-full rounded-full bg-emerald-500"
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </div>

          {/* Performance Table by Discipline */}
          <section>
            <div className="border-b border-[#E9E9E7] dark:border-[#2F2F2F] pb-3">
              <h2 className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Desempenho por Disciplina
              </h2>
              <p className="text-xs text-[#787774] dark:text-[#9B9A97]">
                Acertos/erros acumulados e questões dominadas (3x) nas 9 matérias do edital
              </p>
            </div>

            <div className="mt-3 overflow-x-auto rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F]">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#202020] text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
                    <th className="px-4 py-2.5">Disciplina</th>
                    <th className="px-3 py-2.5 text-right">Acertos</th>
                    <th className="px-3 py-2.5 text-right">Erros</th>
                    <th className="px-3 py-2.5 text-right">Dominadas</th>
                    <th className="px-4 py-2.5 text-right">Taxa</th>
                    <th className="hidden sm:table-cell px-4 py-2.5">Situação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9E9E7] dark:divide-[#2A2A2A]">
                  {summary.disciplineStats.map((d) => {
                    const statusLabel =
                      d.accuracy === null
                        ? 'Sem dados'
                        : d.accuracy >= 75
                        ? 'Você está bem'
                        : d.accuracy >= 50
                        ? 'Em evolução'
                        : 'Estudar mais';

                    return (
                      <tr
                        key={d.id}
                        onClick={() => onOpenDiscipline(d.id)}
                        className="cursor-pointer hover:bg-[#F7F7F5] dark:hover:bg-[#232323] transition-colors"
                      >
                        <td className="px-4 py-3 font-medium text-[#37352F] dark:text-[#EDEDED]">
                          <span className="font-mono text-xs text-[#787774] dark:text-[#8E8E8E] mr-2 tabular-nums">
                            {d.code}
                          </span>
                          <span>{d.name}</span>
                        </td>
                        <td className="px-3 py-3 text-right font-mono text-xs text-emerald-600 dark:text-emerald-400 tabular-nums">
                          {d.hits}
                        </td>
                        <td className="px-3 py-3 text-right font-mono text-xs text-rose-600 dark:text-rose-400 tabular-nums">
                          {d.misses}
                        </td>
                        <td className="px-3 py-3 text-right font-mono text-xs text-[#5F5E5B] dark:text-[#B5B5B5] tabular-nums">
                          {d.dominadas}/{d.qTotal}
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-xs font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
                          {d.accuracy !== null ? `${d.accuracy}%` : '—'}
                        </td>
                        <td className="hidden sm:table-cell px-4 py-3 text-xs whitespace-nowrap">
                          <span
                            className={
                              d.accuracy === null
                                ? 'text-[#9B9A97]'
                                : d.accuracy >= 75
                                ? 'font-medium text-emerald-600 dark:text-emerald-400'
                                : d.accuracy >= 50
                                ? 'font-medium text-sky-600 dark:text-sky-400'
                                : 'font-medium text-rose-600 dark:text-rose-400'
                            }
                          >
                            {statusLabel}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
