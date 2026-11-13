import { useMemo, useState } from 'react';
import { ArrowRight, BarChart3, Calendar, Check, RotateCcw, Trophy } from 'lucide-react';
import { PRACTICE_QUESTIONS } from '../data/questions';
import { SCHEDULE_DAYS } from '../data/schedule';
import { DISCIPLINES, EXAM_INFO } from '../data/syllabus';
import type { LeaderboardEntry } from '../utils/firebaseStudyService';
import { getSrsSummaryCounts, type QuestionProgressRecord } from '../utils/srs';
import type { ActivePage } from './NotionSidebar';
import type { TrainingMode } from './TrainingArenaView';

export type DisciplineStatusOverride = 'Revisado' | null;

interface DashboardViewProps {
  daysRemaining: number;
  completedTopicIds: Set<string>;
  totalTopicsCount: number;
  completedDays: Set<number>;
  studiedMinutes: number;
  disciplineStatusOverrides: Record<string, DisciplineStatusOverride>;
  questionProgress: Record<string, QuestionProgressRecord>;
  attemptsCount: number;
  overallAccuracy: number | null;
  leaderboard: LeaderboardEntry[];
  currentUid: string;
  onSelectPage: (page: ActivePage) => void;
  onOpenTrainingMode: (mode: TrainingMode, opts?: { disciplineId?: string; topicCode?: string }) => void;
  onSelectScheduleDay: (day: number) => void;
  onToggleDayComplete: (day: number, topicIds: string[]) => void;
  onResetAllProgress: () => void;
}

export function DashboardView({
  daysRemaining,
  completedTopicIds,
  totalTopicsCount,
  completedDays,
  studiedMinutes,
  disciplineStatusOverrides,
  questionProgress,
  attemptsCount,
  overallAccuracy,
  leaderboard,
  currentUid,
  onSelectPage,
  onOpenTrainingMode,
  onSelectScheduleDay,
  onToggleDayComplete,
  onResetAllProgress,
}: DashboardViewProps) {
  const [confirmReset, setConfirmReset] = useState(false);

  const srsSummary = useMemo(
    () => getSrsSummaryCounts(PRACTICE_QUESTIONS, questionProgress),
    [questionProgress]
  );

  const progressPercent =
    totalTopicsCount > 0 ? Math.round((completedTopicIds.size / totalTopicsCount) * 100) : 0;

  const hours = Math.floor(studiedMinutes / 60);
  const mins = studiedMinutes % 60;
  const formattedTime = hours > 0 ? `${hours}h ${String(mins).padStart(2, '0')}m` : `${mins} min`;

  const nextDays = SCHEDULE_DAYS.filter((d) => !completedDays.has(d.day)).slice(0, 4);
  const summaryDays = nextDays.length > 0 ? nextDays : SCHEDULE_DAYS.slice(-4);
  const activeDay = nextDays[0] ?? SCHEDULE_DAYS[0];

  const getDisciplineStatus = (disciplineId: string, done: number, total: number) => {
    if (disciplineStatusOverrides[disciplineId] === 'Revisado') return 'Revisado';
    if (done === 0) return 'Não iniciado';
    if (done === total) return 'Concluído';
    return 'Em andamento';
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-10 sm:py-14">
      {/* Page Header */}
      <header>
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
          <span>{EXAM_INFO.institution}</span>
          <span aria-hidden="true">·</span>
          <span>Prova em {EXAM_INFO.examDateFormatted}</span>
          <span aria-hidden="true">·</span>
          <span>{EXAM_INFO.methodology}</span>
        </div>

        <h1 className="mt-2.5 font-display text-3xl font-bold tracking-tight text-[#37352F] dark:text-[#EDEDED] sm:text-4xl [text-wrap:balance]">
          Agente Administrativo — Plano de Estudos
        </h1>

        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
          Painel central de acompanhamento do ciclo intensivo de 30 dias. Selecione uma disciplina na barra lateral para estudar por tópicos expansíveis, tabelas comparativas e questões comentadas.
        </p>
      </header>

      {/* Notion Callout: Próxima Missão */}
      <div className="mt-7 flex flex-col gap-4 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#222222] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3.5 min-w-0">
          <Calendar
            className="mt-0.5 h-5 w-5 shrink-0 text-sky-600 dark:text-sky-400"
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-[#37352F] dark:text-[#EDEDED]">
              Próxima meta · Dia {String(activeDay.day).padStart(2, '0')} ({activeDay.dateLabel})
            </p>
            <p className="mt-0.5 text-sm font-medium text-[#37352F] dark:text-[#E5E5E5]">
              {activeDay.title}
            </p>
            <p className="mt-1 text-xs text-[#787774] dark:text-[#9B9A97]">
              {activeDay.objective}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            onSelectScheduleDay(activeDay.day);
            onSelectPage('schedule');
          }}
          className="inline-flex items-center gap-1.5 rounded-md bg-sky-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[38px] self-start sm:self-center"
        >
          <span>Abrir no cronograma</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>

      {/* Metrics Strip + Overall Progress */}
      <div className="mt-8 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E]">
        <div className="grid grid-cols-2 divide-y divide-[#E9E9E7] dark:divide-[#2F2F2F] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <div className="p-4 sm:p-5">
            <p className="text-xs text-[#787774] dark:text-[#9B9A97]">Dias até a prova</p>
            <p className="mt-1.5 font-mono text-2xl font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
              {daysRemaining}
              <span className="ml-1 font-sans text-xs font-normal text-[#787774] dark:text-[#8E8E8E]">
                dias
              </span>
            </p>
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-xs text-[#787774] dark:text-[#9B9A97]">Tópicos estudados</p>
            <p className="mt-1.5 font-mono text-2xl font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
              {completedTopicIds.size}
              <span className="text-sm font-normal text-[#9B9A97] dark:text-[#6E6E6E]">
                /{totalTopicsCount}
              </span>
            </p>
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-xs text-[#787774] dark:text-[#9B9A97]">Dias concluídos</p>
            <p className="mt-1.5 font-mono text-2xl font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
              {completedDays.size}
              <span className="text-sm font-normal text-[#9B9A97] dark:text-[#6E6E6E]">
                /{SCHEDULE_DAYS.length}
              </span>
            </p>
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-xs text-[#787774] dark:text-[#9B9A97]">Tempo focado</p>
            <p className="mt-1.5 font-mono text-2xl font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
              {formattedTime}
            </p>
          </div>
        </div>

        <div className="border-t border-[#E9E9E7] dark:border-[#2F2F2F] px-4 py-3 sm:px-5">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-[#787774] dark:text-[#9B9A97]">Progresso geral do edital</span>
            <span className="font-mono font-medium text-[#37352F] dark:text-[#EDEDED] tabular-nums">
              {progressPercent}%
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#EFEFED] dark:bg-[#2C2C2C]">
            <div
              className="h-full rounded-full bg-sky-600 dark:bg-sky-400 transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* SRS Memory Mini-Indicators & Quick Link to Question Analytics */}
      <div className="mt-5 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] overflow-hidden">
        <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3 min-w-0">
            <BarChart3
              className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400"
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Memória Inteligente (Meta 3x) & Análise de Desempenho
              </p>
              <p className="mt-0.5 text-xs text-[#5F5E5B] dark:text-[#B5B5B5] tabular-nums">
                {attemptsCount > 0 && overallAccuracy !== null
                  ? `${attemptsCount} respostas registradas · ${overallAccuracy}% de aproveitamento acumulado`
                  : 'Responda questões até atingir 3 acertos consecutivos para dominar cada item.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectPage('analytics')}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-3 py-2 text-xs font-medium text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500/50 transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[38px] self-start sm:self-center"
          >
            <span>Abrir análise</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-2 divide-y divide-[#E9E9E7] dark:divide-[#2F2F2F] border-t border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <div className="px-4 py-3">
            <p className="text-[11px] text-[#787774] dark:text-[#9B9A97]">Inéditas</p>
            <p className="mt-0.5 font-mono text-base font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
              {srsSummary.ineditas}
            </p>
          </div>
          <div className="px-4 py-3">
            <p className="text-[11px] text-[#787774] dark:text-[#9B9A97]">Em progresso (1-2x)</p>
            <p className="mt-0.5 font-mono text-base font-semibold text-sky-600 dark:text-sky-400 tabular-nums">
              {srsSummary.emProgresso}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenTrainingMode('erros')}
            className="px-4 py-3 text-left hover:bg-[#F7F7F5] dark:hover:bg-[#252525] transition-colors cursor-pointer"
          >
            <p className="text-[11px] text-[#787774] dark:text-[#9B9A97]">Caderno de Erros</p>
            <p className="mt-0.5 font-mono text-base font-semibold text-rose-600 dark:text-rose-400 tabular-nums">
              {srsSummary.erros}
            </p>
          </button>
          <button
            type="button"
            onClick={() => onOpenTrainingMode('acertos')}
            className="px-4 py-3 text-left hover:bg-[#F7F7F5] dark:hover:bg-[#252525] transition-colors cursor-pointer"
          >
            <p className="text-[11px] text-[#787774] dark:text-[#9B9A97]">Dominadas (3x)</p>
            <p className="mt-0.5 font-mono text-base font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
              {srsSummary.dominadas}
            </p>
          </button>
        </div>
      </div>

      {/* Ranking de Estudos (Real-time Multi-User Leaderboard) */}
      <section className="mt-11">
        <div className="flex items-center justify-between gap-4 border-b border-[#E9E9E7] dark:border-[#2F2F2F] pb-3">
          <div className="flex items-center gap-2.5">
            <Trophy className="h-4 w-4 text-amber-500 shrink-0" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Ranking de Estudos
              </h2>
              <p className="text-xs text-[#787774] dark:text-[#9B9A97]">
                Placar comparativo atualizado em tempo real entre contas conectadas
              </p>
            </div>
          </div>
          <span className="font-mono text-xs text-[#787774] dark:text-[#8E8E8E] tabular-nums shrink-0">
            {leaderboard.length} {leaderboard.length === 1 ? 'participante' : 'participantes'}
          </span>
        </div>

        <div className="mt-3 overflow-x-auto rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E]">
          {leaderboard.length === 0 ? (
            <div className="px-4 py-6 text-center text-xs text-[#787774] dark:text-[#9B9A97]">
              Carregando placar em tempo real...
            </div>
          ) : (
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#202020] text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
                  <th className="px-4 py-2.5 w-12">#</th>
                  <th className="px-4 py-2.5">Candidato</th>
                  <th className="px-4 py-2.5 text-right">Dominadas (3x)</th>
                  <th className="px-4 py-2.5 text-right">Aproveitamento</th>
                  <th className="hidden sm:table-cell px-4 py-2.5 text-right">Respondidas</th>
                  <th className="hidden sm:table-cell px-4 py-2.5 text-right">Pomodoros</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E9E7] dark:divide-[#2A2A2A]">
                {leaderboard.map((entry, idx) => {
                  const isMe = entry.uid === currentUid;
                  return (
                    <tr
                      key={entry.uid}
                      className={
                        isMe
                          ? 'bg-sky-500/[0.06] dark:bg-sky-500/[0.09]'
                          : 'hover:bg-[#F7F7F5]/60 dark:hover:bg-[#232323]'
                      }
                    >
                      <td className="px-4 py-3 font-mono text-xs font-semibold text-[#787774] dark:text-[#8E8E8E] tabular-nums">
                        {idx === 0 ? '1º' : idx === 1 ? '2º' : idx === 2 ? '3º' : `${idx + 1}º`}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-base leading-none shrink-0" aria-hidden="true">
                            {entry.avatar || '📚'}
                          </span>
                          <span className="font-medium text-[#37352F] dark:text-[#EDEDED] truncate">
                            {entry.name}
                          </span>
                          {isMe && (
                            <span className="rounded border border-sky-500/30 bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-sky-700 dark:text-sky-300 shrink-0">
                              Você
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
                        {entry.masteredCount}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-xs text-[#37352F] dark:text-[#EDEDED] tabular-nums">
                        {entry.accuracyRate}%
                      </td>
                      <td className="hidden sm:table-cell px-4 py-3 text-right font-mono text-xs text-[#5F5E5B] dark:text-[#B5B5B5] tabular-nums">
                        {entry.totalAnswered}
                      </td>
                      <td className="hidden sm:table-cell px-4 py-3 text-right font-mono text-xs text-[#5F5E5B] dark:text-[#B5B5B5] tabular-nums">
                        {entry.pomodoroCount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* Summarized Schedule Section */}
      <section className="mt-11">
        <div className="flex items-center justify-between gap-4 border-b border-[#E9E9E7] dark:border-[#2F2F2F] pb-3">
          <div>
            <h2 className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
              Cronograma Resumido
            </h2>
            <p className="text-xs text-[#787774] dark:text-[#9B9A97]">
              Próximos dias de estudo na sua fila atual
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectPage('schedule')}
            className="text-xs font-medium text-sky-600 hover:underline dark:text-sky-400 cursor-pointer whitespace-nowrap shrink-0"
          >
            Ver 30 dias completos
          </button>
        </div>

        <div className="divide-y divide-[#E9E9E7] dark:divide-[#2A2A2A]">
          {summaryDays.map((day) => {
            const done = completedDays.has(day.day);
            const doneTopics = day.topicIds.filter((id) => completedTopicIds.has(id)).length;

            return (
              <div
                key={day.day}
                className="flex items-center justify-between gap-4 py-3.5 hover:bg-[#F7F7F5]/70 dark:hover:bg-[#222222]/60 px-2 -mx-2 rounded-md transition-colors"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <button
                    type="button"
                    onClick={() => onToggleDayComplete(day.day, day.topicIds)}
                    aria-label={`Marcar Dia ${day.day} como concluído`}
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors cursor-pointer ${
                      done
                        ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-500 dark:bg-sky-500 dark:text-slate-950'
                        : 'border-[#C7C6C2] dark:border-[#4A4A4A] hover:border-sky-500'
                    }`}
                  >
                    {done && <Check className="h-3 w-3 stroke-[2.5]" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectScheduleDay(day.day);
                      onSelectPage('schedule');
                    }}
                    className="text-left min-w-0 cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                      <span className="font-mono font-medium text-[#37352F] dark:text-[#D4D4D4] tabular-nums">
                        Dia {String(day.day).padStart(2, '0')}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{day.dateLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{day.focusArea}</span>
                    </div>
                    <p
                      className={`mt-0.5 text-sm font-medium ${
                        done
                          ? 'line-through text-[#9B9A97] dark:text-[#6E6E6E]'
                          : 'text-[#37352F] dark:text-[#EDEDED]'
                      }`}
                    >
                      {day.title}
                    </p>
                  </button>
                </div>

                <span className="font-mono text-xs text-[#787774] dark:text-[#8E8E8E] tabular-nums whitespace-nowrap shrink-0">
                  {done ? 'Concluído' : `${doneTopics}/${day.topicIds.length} tópicos`}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Disciplines Table (Notion Database style) */}
      <section className="mt-11">
        <div className="border-b border-[#E9E9E7] dark:border-[#2F2F2F] pb-3">
          <h2 className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
            Disciplinas do Edital
          </h2>
          <p className="text-xs text-[#787774] dark:text-[#9B9A97]">
            Clique em qualquer matéria para abrir sua página dedicada com tópicos expansíveis e questões
          </p>
        </div>

        <div className="mt-3 overflow-x-auto rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F]">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#202020] text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
                <th className="px-4 py-2.5">Disciplina</th>
                <th className="hidden sm:table-cell px-4 py-2.5">Bloco</th>
                <th className="px-4 py-2.5">Status</th>
                <th className="px-4 py-2.5 text-right">Progresso</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E9E9E7] dark:divide-[#2A2A2A]">
              {DISCIPLINES.map((disc) => {
                const done = disc.topics.filter((t) => completedTopicIds.has(t.id)).length;
                const total = disc.topics.length;
                const pct = Math.round((done / total) * 100);
                const status = getDisciplineStatus(disc.id, done, total);

                return (
                  <tr
                    key={disc.id}
                    onClick={() => onSelectPage(disc.id)}
                    className="cursor-pointer hover:bg-[#F7F7F5] dark:hover:bg-[#232323] transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-[#37352F] dark:text-[#EDEDED]">
                      <span className="font-mono text-xs text-[#787774] dark:text-[#8E8E8E] mr-2 tabular-nums">
                        {disc.code}
                      </span>
                      <span>{disc.name}</span>
                    </td>
                    <td className="hidden sm:table-cell px-4 py-3 text-xs text-[#787774] dark:text-[#9B9A97]">
                      {disc.block}
                    </td>
                    <td className="px-4 py-3 text-xs whitespace-nowrap">
                      <span
                        className={
                          status === 'Revisado' || status === 'Concluído'
                            ? 'font-medium text-emerald-700 dark:text-emerald-400'
                            : status === 'Em andamento'
                            ? 'font-medium text-sky-700 dark:text-sky-400'
                            : 'text-[#787774] dark:text-[#8E8E8E]'
                        }
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-xs text-[#5F5E5B] dark:text-[#B5B5B5] tabular-nums whitespace-nowrap">
                      {done}/{total} ({pct}%)
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quiet Reset Action */}
      <div className="mt-12 flex items-center justify-between border-t border-[#E9E9E7] dark:border-[#2F2F2F] pt-6 text-xs text-[#787774] dark:text-[#8E8E8E]">
        <span>Progresso sincronizado em tempo real na nuvem</span>

        {!confirmReset ? (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="inline-flex items-center gap-1.5 hover:text-[#37352F] dark:hover:text-[#EDEDED] transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Resetar progresso</span>
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span>Apagar marcações e notas?</span>
            <button
              type="button"
              onClick={() => {
                onResetAllProgress();
                setConfirmReset(false);
              }}
              className="rounded border border-rose-500/40 bg-rose-500/10 px-2.5 py-1 font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 cursor-pointer"
            >
              Confirmar
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="rounded border border-[#E9E9E7] dark:border-[#333333] px-2.5 py-1 text-[#37352F] dark:text-[#D4D4D4] cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
