import { Fragment, useMemo, useState, type ReactNode } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  FileDown,
  Flame,
  RotateCcw,
  Table2,
  Trophy,
  X,
} from 'lucide-react';
import { PRACTICE_QUESTIONS } from '../data/questions';
import { DISCIPLINES } from '../data/syllabus';
import {
  TOPIC_SUMMARIES,
  type BadgeTone,
} from '../data/topicSummaries';
import {
  getSrsSummaryCounts,
  getStatusLabel,
  selectSmartItems,
  type QuestionAttempt,
  type QuestionProgressRecord,
  type SrsItemMeta,
  type SrsOutcome,
} from '../utils/srs';
import type { DisciplineStatusOverride } from './DashboardView';

interface DisciplineViewProps {
  disciplineId: string;
  completedTopicIds: Set<string>;
  onToggleTopic: (topicId: string) => void;
  statusOverride: DisciplineStatusOverride;
  onChangeStatusOverride: (disciplineId: string, value: DisciplineStatusOverride) => void;
  questionProgress: Record<string, QuestionProgressRecord>;
  onRecordAttempt: (
    meta: SrsItemMeta,
    outcome: SrsOutcome,
    source: QuestionAttempt['source']
  ) => void;
  onOpenErrorNotebook: (disciplineId: string) => void;
  onOpenMasteredNotebook: (disciplineId: string) => void;
  onResetDisciplineSrs: (disciplineId: string) => void;
  onOpenExport?: (disciplineId: string) => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

const BADGE_TONE_CLASSES: Record<BadgeTone, string> = {
  rose: 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:border-rose-400/30 dark:bg-rose-500/15 dark:text-rose-300',
  amber:
    'border-amber-500/35 bg-amber-500/12 text-amber-800 dark:border-amber-400/35 dark:bg-amber-500/15 dark:text-amber-300',
  emerald:
    'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-300',
  sky: 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/15 dark:text-sky-300',
};

const TOKEN_REGEX =
  /(\[\[(?:ROSE|AMBER|EMERALD|SKY):[^\]]+\]\]|\*\*(?:[^*]|\*(?!\*))+\*\*|~~[^~]+~~|`[^`]+`|(?<!\*)\*(?!\s|\*)(?:[^*]|\*\*[^*]+\*\*)+?(?<!\s|\*)\*(?!\*))/g;

function renderRichText(text: string): ReactNode {
  const parts = text.split(TOKEN_REGEX);
  return parts.map((part, idx) => {
    if (!part) return null;

    if (part.startsWith('[[') && part.endsWith(']]')) {
      const inner = part.slice(2, -2);
      const colonIdx = inner.indexOf(':');
      if (colonIdx !== -1) {
        const rawTone = inner.slice(0, colonIdx).toLowerCase() as BadgeTone;
        const label = inner.slice(colonIdx + 1);
        const cls = BADGE_TONE_CLASSES[rawTone] ?? BADGE_TONE_CLASSES.sky;
        return (
          <span
            key={idx}
            className={`inline-block rounded border px-1.5 py-0.5 text-[11px] font-semibold tracking-tight align-baseline mx-0.5 ${cls}`}
          >
            {label}
          </span>
        );
      }
    }

    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong
          key={idx}
          className="font-semibold text-[#2B2924] dark:text-[#F5F5F4]"
        >
          {renderRichText(part.slice(2, -2))}
        </strong>
      );
    }

    if (part.startsWith('~~') && part.endsWith('~~') && part.length > 4) {
      return (
        <span
          key={idx}
          className="line-through text-[#9B9A97] dark:text-[#787878]"
        >
          {part.slice(2, -2)}
        </span>
      );
    }

    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={idx}
          className="rounded border border-[#E2E1DD] dark:border-[#343434] bg-[#F4F3EF] dark:bg-[#262626] px-1.5 py-0.5 font-mono text-[12px] text-[#37352F] dark:text-[#E5E5E5]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={idx} className="italic">
          {renderRichText(part.slice(1, -1))}
        </em>
      );
    }

    return <Fragment key={idx}>{part}</Fragment>;
  });
}

export function DisciplineView({
  disciplineId,
  completedTopicIds,
  onToggleTopic,
  statusOverride,
  onChangeStatusOverride,
  questionProgress,
  onRecordAttempt,
  onOpenErrorNotebook,
  onOpenMasteredNotebook,
  onResetDisciplineSrs,
  onOpenExport,
}: DisciplineViewProps) {
  const discipline = useMemo(
    () => DISCIPLINES.find((d) => d.id === disciplineId) ?? DISCIPLINES[0],
    [disciplineId]
  );

  // Expand topic 2.5.2 by default when opening 2.5, or first topic of discipline
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (discipline.id === '2.5') {
      initial.add('2.5.2');
    } else if (discipline.topics[0]) {
      initial.add(discipline.topics[0].id);
    }
    return initial;
  });

  // Per-topic state for optional "Destrinchar mais esse assunto" layer
  const [expandedDeepDives, setExpandedDeepDives] = useState<Set<string>>(
    () => new Set()
  );

  // Round-local answers so users can re-practice pending (1-2x) questions in a new round
  const [roundAnswers, setRoundAnswers] = useState<Record<string, number>>({});
  const [roundKey, setRoundKey] = useState(0);

  // Reset open toggle, deep dives & round answers cleanly when switching discipline
  const [lastDisciplineId, setLastDisciplineId] = useState(discipline.id);
  if (lastDisciplineId !== discipline.id) {
    setLastDisciplineId(discipline.id);
    const next = new Set<string>();
    if (discipline.id === '2.5') next.add('2.5.2');
    else if (discipline.topics[0]) next.add(discipline.topics[0].id);
    setExpandedTopics(next);
    setExpandedDeepDives(new Set());
    setRoundAnswers({});
  }

  const toggleTopicOpen = (topicId: string) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) next.delete(topicId);
      else next.add(topicId);
      return next;
    });
  };

  const toggleDeepDive = (topicId: string) => {
    setExpandedDeepDives((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) next.delete(topicId);
      else next.add(topicId);
      return next;
    });
  };

  const expandAll = () =>
    setExpandedTopics(new Set(discipline.topics.map((t) => t.id)));
  const collapseAll = () => {
    setExpandedTopics(new Set());
    setExpandedDeepDives(new Set());
  };

  const doneCount = discipline.topics.filter((t) =>
    completedTopicIds.has(t.id)
  ).length;
  const totalCount = discipline.topics.length;
  const progressPct = Math.round((doneCount / totalCount) * 100);

  const computedStatus =
    statusOverride === 'Revisado'
      ? 'Revisado'
      : doneCount === 0
      ? 'Não iniciado'
      : doneCount === totalCount
      ? 'Concluído'
      : 'Em andamento';

  const disciplineQuestions = useMemo(
    () => PRACTICE_QUESTIONS.filter((q) => q.disciplineId === discipline.id),
    [discipline.id]
  );

  const srsCounts = useMemo(
    () => getSrsSummaryCounts(disciplineQuestions, questionProgress),
    [disciplineQuestions, questionProgress]
  );

  // Freeze smart queue per round so answering a question to 3/3 doesn't yank the card before reading explanation
  const smartQuestions = useMemo(
    () =>
      selectSmartItems(disciplineQuestions, questionProgress, {
        shuffleWithinBuckets: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [discipline.id, roundKey]
  );

  const handleStartNewRound = () => {
    setRoundAnswers({});
    setRoundKey((k) => k + 1);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-10 sm:py-14">
      {/* Page Header */}
      <header>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
            <span className="font-mono font-medium text-sky-600 dark:text-sky-400 tabular-nums">
              Disciplina {discipline.code}
            </span>
            <span aria-hidden="true">·</span>
            <span>{discipline.block}</span>
          </div>

          {onOpenExport && (
            <button
              type="button"
              onClick={() => onOpenExport(discipline.id)}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#E0DFDC] dark:border-[#343434] bg-[#F7F7F5] dark:bg-[#222222] px-2.5 py-1.5 text-xs font-medium text-[#37352F] dark:text-[#D4D4D4] hover:border-sky-500/60 hover:text-sky-700 dark:hover:text-sky-300 transition-colors cursor-pointer whitespace-nowrap"
            >
              <FileDown className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
              <span>Exportar PDF / Docs</span>
            </button>
          )}
        </div>

        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#37352F] dark:text-[#EDEDED] sm:text-[2.1rem] [text-wrap:balance]">
          {discipline.name}
        </h1>

        <p className="mt-2.5 text-[15px] leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
          {discipline.weightNote}
        </p>
      </header>

      {/* Notion Page Properties Panel */}
      <div className="mt-7 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] divide-y divide-[#E9E9E7] dark:divide-[#2F2F2F] text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E9E9E7] dark:divide-[#2F2F2F]">
          {/* Property 1: Status */}
          <div className="px-4 py-3 flex items-center justify-between gap-3">
            <span className="text-xs text-[#787774] dark:text-[#9B9A97]">Status</span>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-medium ${
                  computedStatus === 'Revisado' || computedStatus === 'Concluído'
                    ? 'text-emerald-700 dark:text-emerald-400'
                    : computedStatus === 'Em andamento'
                    ? 'text-sky-700 dark:text-sky-400'
                    : 'text-[#5F5E5B] dark:text-[#A3A3A3]'
                }`}
              >
                {computedStatus}
              </span>
              <button
                type="button"
                onClick={() =>
                  onChangeStatusOverride(
                    discipline.id,
                    statusOverride === 'Revisado' ? null : 'Revisado'
                  )
                }
                className="rounded border border-[#E0DFDC] dark:border-[#363636] bg-white dark:bg-[#2A2A2A] px-2 py-0.5 text-[11px] font-medium text-[#5F5E5B] dark:text-[#D4D4D4] hover:border-sky-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                {statusOverride === 'Revisado' ? 'Desmarcar revisão' : 'Marcar revisado'}
              </button>
            </div>
          </div>

          {/* Property 2: Progress */}
          <div className="px-4 py-3 flex items-center justify-between gap-3">
            <span className="text-xs text-[#787774] dark:text-[#9B9A97]">Progresso</span>
            <div className="flex items-center gap-2.5">
              <div className="w-16 h-1.5 rounded-sm bg-[#E5E5E2] dark:bg-[#333333] overflow-hidden">
                <div
                  className="h-full bg-sky-600 dark:bg-sky-400 transition-all duration-200"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <span className="font-mono text-xs font-medium text-[#37352F] dark:text-[#EDEDED] tabular-nums whitespace-nowrap">
                {doneCount}/{totalCount} ({progressPct}%)
              </span>
            </div>
          </div>

          {/* Property 3: Questions */}
          <div className="px-4 py-3 flex items-center justify-between gap-3">
            <span className="text-xs text-[#787774] dark:text-[#9B9A97]">Questões</span>
            <a
              href="#questoes-disciplina"
              className="font-mono text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline tabular-nums"
            >
              {srsCounts.dominadas}/{srsCounts.total} dominadas
            </a>
          </div>
        </div>

        {/* SRS Memory Mini-Indicators Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E9E9E7] dark:divide-[#2F2F2F] bg-white/70 dark:bg-[#1A1A1A] text-xs">
          <div className="px-4 py-2.5 flex items-center justify-between">
            <span className="text-[#787774] dark:text-[#9B9A97]">Inéditas</span>
            <span className="font-mono font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
              {srsCounts.ineditas}
            </span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <span className="text-[#787774] dark:text-[#9B9A97]">Em progresso</span>
            <span className="font-mono font-semibold text-sky-600 dark:text-sky-400 tabular-nums">
              {srsCounts.emProgresso}
            </span>
          </div>
          <button
            type="button"
            onClick={() => onOpenErrorNotebook(discipline.id)}
            className="px-4 py-2.5 flex items-center justify-between hover:bg-[#F7F7F5] dark:hover:bg-[#232323] transition-colors cursor-pointer"
          >
            <span className="text-[#787774] dark:text-[#9B9A97]">Erros</span>
            <span className="font-mono font-semibold text-rose-600 dark:text-rose-400 tabular-nums">
              {srsCounts.erros}
            </span>
          </button>
          <button
            type="button"
            onClick={() => onOpenMasteredNotebook(discipline.id)}
            className="px-4 py-2.5 flex items-center justify-between hover:bg-[#F7F7F5] dark:hover:bg-[#232323] transition-colors cursor-pointer"
          >
            <span className="text-[#787774] dark:text-[#9B9A97]">Dominadas (3x)</span>
            <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
              {srsCounts.dominadas}
            </span>
          </button>
        </div>
      </div>

      {/* Subtopics Toggle List */}
      <section className="mt-9">
        <div className="flex items-center justify-between gap-4 border-b border-[#E9E9E7] dark:border-[#2F2F2F] pb-3">
          <h2 className="font-display text-base font-semibold text-[#37352F] dark:text-[#EDEDED]">
            Tópicos do Edital (Clique para expandir o resumo)
          </h2>

          <div className="flex items-center gap-2.5 text-xs">
            <button
              type="button"
              onClick={expandAll}
              className="text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EDEDED] transition-colors cursor-pointer whitespace-nowrap"
            >
              Expandir todos
            </button>
            <span className="text-[#D4D4D0] dark:text-[#444444]" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              onClick={collapseAll}
              className="text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EDEDED] transition-colors cursor-pointer whitespace-nowrap"
            >
              Recolher
            </button>
          </div>
        </div>

        <div className="divide-y divide-[#E9E9E7] dark:divide-[#2A2A2A]">
          {discipline.topics.map((topic) => {
            const isChecked = completedTopicIds.has(topic.id);
            const isOpen = expandedTopics.has(topic.id);
            const isDeepDiveOpen = expandedDeepDives.has(topic.id);
            const content = TOPIC_SUMMARIES[topic.id];

            return (
              <div key={topic.id} className="py-1">
                {/* Toggle Header Row */}
                <div className="flex items-start gap-2.5 rounded-md px-2 py-2.5 hover:bg-[#F7F7F5] dark:hover:bg-[#222222] transition-colors">
                  <button
                    type="button"
                    onClick={() => onToggleTopic(topic.id)}
                    aria-label={`Marcar tópico ${topic.id} como estudado`}
                    className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors cursor-pointer ${
                      isChecked
                        ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-500 dark:bg-sky-500 dark:text-slate-950'
                        : 'border-[#C7C6C2] dark:border-[#4A4A4A] hover:border-sky-500'
                    }`}
                  >
                    {isChecked && <Check className="h-3 w-3 stroke-[2.5]" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleTopicOpen(topic.id)}
                    aria-expanded={isOpen}
                    className="flex flex-1 items-start gap-2 text-left cursor-pointer min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm"
                  >
                    <span className="mt-0.5 text-[#787774] dark:text-[#8E8E8E] shrink-0">
                      {isOpen ? (
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#787774] dark:text-[#8E8E8E]">
                        <span className="font-mono font-medium text-[#37352F] dark:text-[#D4D4D4] tabular-nums">
                          {topic.id}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>Prioridade {topic.priority}</span>
                        {content?.isFullModule && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="rounded border border-sky-500/30 bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/15 dark:text-sky-300">
                              Material Base Completo
                            </span>
                          </>
                        )}
                      </div>

                      <p
                        className={`mt-0.5 text-[15px] leading-snug font-medium ${
                          isChecked
                            ? 'line-through text-[#9B9A97] dark:text-[#6E6E6E]'
                            : 'text-[#37352F] dark:text-[#EDEDED]'
                        }`}
                      >
                        {topic.title}
                      </p>
                    </div>
                  </button>
                </div>

                {/* Expanded Notion 4-Block ADHD Content */}
                {isOpen && content && (
                  <div className="ml-1 sm:ml-7 mr-1 mb-6 mt-2 space-y-5 pl-2 sm:pl-3">
                    {/* BLOCO 1: A Realidade Nua e Crua */}
                    <section className="rounded-lg border border-[#E9E9E7] dark:border-[#2E2E2E] bg-white dark:bg-[#1B1B1B] p-4 sm:p-5 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                        <Flame className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>1. {content.realityTitle ?? 'A Realidade Nua e Crua'}</span>
                      </div>

                      <div className="space-y-3 text-sm leading-relaxed text-[#43413C] dark:text-[#D0D0CE]">
                        {content.realityParagraphs.map((paragraph, pIdx) => (
                          <p key={pIdx}>{renderRichText(paragraph)}</p>
                        ))}
                      </div>

                      <ul className="space-y-2.5 border-t border-[#EFEFEA] dark:border-[#292929] pt-3.5">
                        {content.keyPoints.map((kp) => (
                          <li
                            key={kp.label}
                            className="rounded-md border border-[#EFEFEA] dark:border-[#2A2A2A] bg-[#F7F7F5]/70 dark:bg-[#222222]/80 px-3.5 py-2.5 text-sm leading-relaxed text-[#37352F] dark:text-[#D6D6D4]"
                          >
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <strong className="font-semibold text-[#23221E] dark:text-[#F3F3F2]">
                                {kp.label}
                              </strong>
                              {kp.badge && (
                                <span
                                  className={`rounded border px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                                    BADGE_TONE_CLASSES[kp.badge.tone]
                                  }`}
                                >
                                  {kp.badge.text}
                                </span>
                              )}
                            </div>
                            <p className="text-[13.5px] text-[#55534E] dark:text-[#C5C5C3]">
                              {renderRichText(kp.text)}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* BLOCO 2: Na Prática (Exemplos do Dia a Dia) */}
                    <section className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 px-0.5">
                        <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>2. Na Prática · Exemplos do Dia a Dia</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {content.practicalExamples.map((ex, exIdx) => (
                          <div
                            key={exIdx}
                            className="rounded-lg border border-emerald-500/25 dark:border-emerald-400/25 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06] p-4 space-y-1.5"
                          >
                            <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-200">
                              {ex.title}
                            </p>
                            <p className="text-[13.5px] leading-relaxed text-[#464540] dark:text-[#CBCBC9]">
                              {renderRichText(ex.scenario)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* BLOCO 3: Tabela Comparativa Visual */}
                    <section className="space-y-2">
                      <div className="flex items-center justify-between gap-2 px-0.5">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5F5E5B] dark:text-[#A8A8A6]">
                          <Table2 className="h-3.5 w-3.5 shrink-0 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                          <span>
                            3. {content.table.title ?? 'Tabela Comparativa Visual'}
                          </span>
                        </div>
                      </div>

                      <div className="overflow-x-auto rounded-lg border border-[#E2E1DD] dark:border-[#303030] shadow-xs">
                        <table className="w-full border-collapse text-left text-xs sm:text-[13px]">
                          <thead>
                            <tr className="border-b border-[#E2E1DD] dark:border-[#303030] bg-sky-500/[0.08] dark:bg-sky-500/[0.12]">
                              {content.table.headers.map((h, hIdx) => (
                                <th
                                  key={hIdx}
                                  className="px-3.5 py-3 text-[11px] font-bold uppercase tracking-wider text-[#2C2A25] dark:text-[#F0F0EE]"
                                >
                                  {renderRichText(h)}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAEAE6] dark:divide-[#2B2B2B]">
                            {content.table.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="odd:bg-white even:bg-[#F7F7F5]/75 dark:odd:bg-[#1B1B1B] dark:even:bg-[#232323]"
                              >
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`px-3.5 py-2.5 leading-relaxed align-top ${
                                      cIdx === 0
                                        ? 'font-medium text-[#2F2D28] dark:text-[#EFEFED] min-w-[130px]'
                                        : 'text-[#54524D] dark:text-[#C5C5C3]'
                                    }`}
                                  >
                                    {renderRichText(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* BLOCO 4: Callout de Pegadinha de Banca */}
                    <section className="flex items-start gap-3 rounded-lg border border-amber-500/40 dark:border-amber-400/35 bg-amber-500/[0.08] dark:bg-amber-500/[0.10] p-4">
                      <AlertTriangle
                        className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400"
                        aria-hidden="true"
                      />
                      <div className="text-sm leading-relaxed min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                          4. Pegadinha de Banca · Não Caia Nessa!
                        </p>
                        <p className="mt-1.5 text-[13.5px] text-[#3F3728] dark:text-[#E5DEC9]">
                          {renderRichText(content.examTrap)}
                        </p>
                      </div>
                    </section>

                    {/* BLOCO 5: Botão discreto "Destrinchar mais esse assunto" */}
                    <div className="pt-0.5">
                      <button
                        type="button"
                        onClick={() => toggleDeepDive(topic.id)}
                        aria-expanded={isDeepDiveOpen}
                        className="inline-flex items-center gap-2 rounded-md border border-[#DFDED9] dark:border-[#343434] bg-[#F7F7F5] dark:bg-[#222222] px-3.5 py-2 text-xs font-semibold text-[#4B4944] dark:text-[#D4D4D2] hover:border-sky-500/60 hover:text-sky-700 dark:hover:text-sky-300 transition-colors cursor-pointer min-h-[40px]"
                      >
                        <BookOpen className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                        <span>
                          {isDeepDiveOpen
                            ? 'Recolher aprofundamento'
                            : 'Destrinchar mais esse assunto'}
                        </span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform ${
                            isDeepDiveOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isDeepDiveOpen && (
                        <div className="mt-3 rounded-lg border border-sky-500/30 dark:border-sky-400/25 bg-sky-500/[0.04] dark:bg-sky-500/[0.07] p-4 sm:p-5 space-y-3.5">
                          <h4 className="font-display text-sm font-bold text-[#2E2C27] dark:text-[#F0F0EE]">
                            {content.deepDive.headline}
                          </h4>

                          <ul className="space-y-2">
                            {content.deepDive.points.map((pt, ptIdx) => (
                              <li
                                key={ptIdx}
                                className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#474540] dark:text-[#CACAC8]"
                              >
                                <span
                                  className="mt-2 h-1.5 w-1.5 rounded-sm bg-sky-600 dark:bg-sky-400 shrink-0"
                                  aria-hidden="true"
                                />
                                <span>{renderRichText(pt)}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="rounded-md border border-[#E5E4DF] dark:border-[#2F2F2F] bg-white/80 dark:bg-[#191919] p-3 text-[13px] leading-relaxed text-[#4D4B46] dark:text-[#C8C8C6]">
                            <span className="font-semibold text-[#2E2C27] dark:text-[#EDEDEB]">
                              Caso Extra de Prova:{' '}
                            </span>
                            {renderRichText(content.deepDive.extraExample)}
                          </div>

                          <div className="rounded-md border border-emerald-500/30 dark:border-emerald-400/25 bg-emerald-500/[0.07] dark:bg-emerald-500/[0.10] px-3.5 py-2.5 text-xs leading-relaxed text-emerald-950 dark:text-emerald-200">
                            <span className="font-bold uppercase tracking-wider mr-1.5">
                              Macete de Memória:
                            </span>
                            <span className="font-medium">
                              {renderRichText(content.deepDive.mnemonic)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Embedded Discipline Practice Questions (Smart SRS Filtered) */}
      {disciplineQuestions.length > 0 && (
        <section
          id="questoes-disciplina"
          className="mt-12 border-t border-[#E9E9E7] dark:border-[#2F2F2F] pt-9"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Questões de Fixação · {discipline.name}
              </h2>
              <p className="mt-0.5 text-xs text-[#787774] dark:text-[#9B9A97]">
                Exclui automaticamente questões dominadas (3x) e prioriza inéditas e em progresso.
              </p>
            </div>

            {Object.keys(roundAnswers).length > 0 && (
              <button
                type="button"
                onClick={handleStartNewRound}
                className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5] dark:bg-[#222222] px-3 py-2 text-xs font-medium text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500/50 cursor-pointer min-h-[38px]"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Nova rodada (pendentes)</span>
              </button>
            )}
          </div>

          {smartQuestions.length === 0 ? (
            <div className="mt-5 rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] p-6 sm:p-8 text-center space-y-4">
              <Trophy className="mx-auto h-8 w-8 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Você dominou todas as questões desta matéria!
              </h3>
              <p className="mx-auto max-w-md text-xs leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
                Todas as {disciplineQuestions.length} questões de {discipline.name} atingiram 3 acertos consecutivos e foram movidas para o Caderno de Acertos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenMasteredNotebook(discipline.id)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 cursor-pointer min-h-[44px]"
                >
                  <span>Revisar Caderno de Acertos</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onResetDisciplineSrs(discipline.id);
                    setRoundAnswers({});
                    setRoundKey((k) => k + 1);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-4 py-2.5 text-xs font-semibold text-[#37352F] dark:text-[#EDEDED] hover:border-rose-500/50 cursor-pointer min-h-[44px]"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Resetar histórico desta matéria</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-5 space-y-5">
              {smartQuestions.map((q, idx) => {
                const chosen = roundAnswers[q.id];
                const isAnswered = chosen !== undefined;
                const isCorrect = chosen === q.correctIndex;
                const srsRec = questionProgress[q.id];

                return (
                  <div
                    key={q.id}
                    className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono tabular-nums">
                          Questão {String(idx + 1).padStart(2, '0')} · Tópico {q.topicCode}
                        </span>
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
                          <span>{isCorrect ? 'Correta' : 'Caderno de Erros'}</span>
                        </span>
                      )}
                    </div>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#37352F] dark:text-[#EDEDED]">
                      {q.statement}
                    </p>

                    <div className="mt-4 space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = chosen === optIdx;
                        const isRight = optIdx === q.correctIndex;

                        let cls =
                          'border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#242424] text-[#37352F] dark:text-[#D4D4D4] hover:border-sky-500/60';
                        if (isAnswered) {
                          if (isRight) {
                            cls =
                              'border-emerald-500/50 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100';
                          } else if (isSelected) {
                            cls =
                              'border-rose-500/50 bg-rose-500/10 text-rose-900 dark:text-rose-200';
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
                              if (isAnswered) return;
                              setRoundAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                              onRecordAttempt(
                                {
                                  id: q.id,
                                  itemType: 'question',
                                  disciplineId: q.disciplineId,
                                  topicCode: q.topicCode,
                                },
                                optIdx === q.correctIndex ? 'hit' : 'miss',
                                'questao'
                              );
                            }}
                            className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors cursor-pointer disabled:cursor-default min-h-[48px] ${cls}`}
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
                      <div className="mt-4 border-t border-[#E9E9E7] dark:border-[#2F2F2F] pt-3 text-sm">
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
              })}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
