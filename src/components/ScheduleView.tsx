import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Check, Clock, Search } from 'lucide-react';
import { SCHEDULE_DAYS, WEEKS, type StudyDay } from '../data/schedule';
import { TOPIC_MAP } from '../data/syllabus';
import type { ActivePage } from './NotionSidebar';

interface ScheduleViewProps {
  selectedDayNumber: number;
  onSelectDay: (day: number) => void;
  completedTopicIds: Set<string>;
  completedDays: Set<number>;
  onToggleTopic: (topicId: string) => void;
  onToggleDayComplete: (day: number, topicIds: string[]) => void;
  dayNotes: Record<number, string>;
  onUpdateDayNote: (day: number, note: string) => void;
  onOpenDiscipline: (disciplineId: ActivePage) => void;
}

type DayStatusFilter = 'todos' | 'pendentes' | 'concluidos';

export function ScheduleView({
  selectedDayNumber,
  onSelectDay,
  completedTopicIds,
  completedDays,
  onToggleTopic,
  onToggleDayComplete,
  dayNotes,
  onUpdateDayNote,
  onOpenDiscipline,
}: ScheduleViewProps) {
  const [activeWeek, setActiveWeek] = useState<1 | 2 | 3 | 4>(() => {
    const found = SCHEDULE_DAYS.find((d) => d.day === selectedDayNumber);
    return found ? found.week : 1;
  });
  const [statusFilter, setStatusFilter] = useState<DayStatusFilter>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const found = SCHEDULE_DAYS.find((d) => d.day === selectedDayNumber);
    if (found) setActiveWeek(found.week);
  }, [selectedDayNumber]);

  const handleWeekChange = (week: 1 | 2 | 3 | 4) => {
    setActiveWeek(week);
    const first = SCHEDULE_DAYS.find((d) => d.week === week);
    if (first) onSelectDay(first.day);
  };

  const isDayDone = (day: StudyDay) => completedDays.has(day.day);

  const filteredDays = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return SCHEDULE_DAYS.filter((day) => {
      if (!q && day.week !== activeWeek) return false;
      if (statusFilter === 'concluidos' && !isDayDone(day)) return false;
      if (statusFilter === 'pendentes' && isDayDone(day)) return false;
      if (q) {
        return (
          day.title.toLowerCase().includes(q) ||
          day.focusArea.toLowerCase().includes(q) ||
          day.objective.toLowerCase().includes(q) ||
          `dia ${day.day}`.includes(q) ||
          day.topicIds.some((id) => {
            const t = TOPIC_MAP[id];
            return (
              id.toLowerCase().includes(q) ||
              t?.title.toLowerCase().includes(q) ||
              t?.disciplineName.toLowerCase().includes(q)
            );
          })
        );
      }
      return true;
    });
  }, [activeWeek, statusFilter, searchQuery, completedDays]);

  const activeDay = useMemo(
    () => SCHEDULE_DAYS.find((d) => d.day === selectedDayNumber) ?? SCHEDULE_DAYS[0],
    [selectedDayNumber]
  );

  const activeWeekMeta = WEEKS.find((w) => w.week === activeDay.week) ?? WEEKS[0];
  const activeDayDone = isDayDone(activeDay);
  const completedInActiveDay = activeDay.topicIds.filter((id) =>
    completedTopicIds.has(id)
  ).length;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-10 sm:py-14">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
            Ciclo Intensivo · 14/11 a 13/12/2026
          </p>
          <h1 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-[#37352F] dark:text-[#EDEDED] [text-wrap:balance]">
            Cronograma de 30 Dias
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
            {activeWeekMeta.subtitle}
          </p>
        </div>

        <div className="relative w-full sm:w-60 shrink-0">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#9B9A97]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar dia ou tópico..."
            aria-label="Buscar dia ou tópico"
            className="w-full rounded-md border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#202020] py-2 pl-8 pr-3 text-xs text-[#37352F] dark:text-[#EDEDED] placeholder:text-[#9B9A97] focus:border-sky-500 focus:outline-none min-h-[36px]"
          />
        </div>
      </header>

      {/* Week & Status Controls */}
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="tablist"
          aria-label="Semanas do cronograma"
          className="flex flex-wrap items-center gap-1 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#202020] p-1"
        >
          {WEEKS.map((w) => {
            const active = !searchQuery.trim() && activeWeek === w.week;
            return (
              <button
                key={w.week}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSearchQuery('');
                  handleWeekChange(w.week);
                }}
                className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  active
                    ? 'bg-white text-[#37352F] shadow-xs dark:bg-[#2E2E2E] dark:text-[#EDEDED]'
                    : 'text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EDEDED]'
                }`}
              >
                Semana {w.week}
              </button>
            );
          })}
        </div>

        <div
          role="group"
          aria-label="Filtrar dias por status"
          className="flex items-center gap-1 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#202020] p-1 self-start sm:self-auto"
        >
          {(
            [
              { key: 'todos', label: 'Todos' },
              { key: 'pendentes', label: 'Pendentes' },
              { key: 'concluidos', label: 'Concluídos' },
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setStatusFilter(item.key)}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                statusFilter === item.key
                  ? 'bg-white text-[#37352F] shadow-xs dark:bg-[#2E2E2E] dark:text-[#EDEDED]'
                  : 'text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EDEDED]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Two-Column Notion Workspace */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
        {/* Left List */}
        <div className="lg:col-span-5 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#202020] px-4 py-2.5 text-xs text-[#787774] dark:text-[#9B9A97]">
            <span>
              {searchQuery.trim()
                ? `Resultados (${filteredDays.length})`
                : activeWeekMeta.daysRange}
            </span>
            <span className="font-mono tabular-nums">{filteredDays.length}d</span>
          </div>

          {filteredDays.length === 0 ? (
            <div className="px-4 py-8 text-center text-xs text-[#787774] dark:text-[#9B9A97]">
              Nenhum dia encontrado neste filtro.
            </div>
          ) : (
            <div className="divide-y divide-[#E9E9E7] dark:divide-[#2A2A2A]">
              {filteredDays.map((day) => {
                const isSelected = day.day === activeDay.day;
                const done = isDayDone(day);
                const doneCount = day.topicIds.filter((id) =>
                  completedTopicIds.has(id)
                ).length;

                return (
                  <button
                    key={day.day}
                    type="button"
                    onClick={() => onSelectDay(day.day)}
                    className={`w-full px-4 py-3.5 text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#F1F1EE] dark:bg-[#282828]'
                        : 'hover:bg-[#F7F7F5] dark:hover:bg-[#232323]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                      <span className="font-mono font-medium text-[#37352F] dark:text-[#D4D4D4] tabular-nums">
                        Dia {String(day.day).padStart(2, '0')} · {day.dateLabel}
                      </span>
                      <span
                        className={`font-mono tabular-nums ${
                          done ? 'text-emerald-700 dark:text-emerald-400 font-medium' : ''
                        }`}
                      >
                        {done ? 'Concluído' : `${doneCount}/${day.topicIds.length}`}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[#37352F] dark:text-[#EDEDED] leading-snug">
                      {day.title}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Detail Panel */}
        <div className="lg:col-span-7 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5 sm:p-6">
          <div className="flex flex-col gap-4 border-b border-[#E9E9E7] dark:border-[#2F2F2F] pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
                <span className="font-mono font-medium text-sky-600 dark:text-sky-400 tabular-nums">
                  Dia {String(activeDay.day).padStart(2, '0')} de 30
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{activeDay.dateLabel}/2026</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 tabular-nums">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {activeDay.estimatedMinutes} min
                </span>
              </div>

              <h2 className="mt-1.5 font-display text-xl font-semibold text-[#37352F] dark:text-[#EDEDED]">
                {activeDay.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
                {activeDay.objective}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onToggleDayComplete(activeDay.day, activeDay.topicIds)}
              className={`inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer min-h-[38px] ${
                activeDayDone
                  ? 'border border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                  : 'bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400'
              }`}
            >
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{activeDayDone ? 'Dia Concluído' : 'Concluir Dia'}</span>
            </button>
          </div>

          {/* Topics */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs text-[#787774] dark:text-[#9B9A97]">
              <span className="font-semibold text-[#37352F] dark:text-[#D4D4D4]">
                Tópicos do dia
              </span>
              <span className="font-mono tabular-nums">
                {completedInActiveDay}/{activeDay.topicIds.length} concluídos
              </span>
            </div>

            <div className="divide-y divide-[#E9E9E7] dark:divide-[#2A2A2A] border-y border-[#E9E9E7] dark:border-[#2A2A2A]">
              {activeDay.topicIds.map((topicId) => {
                const topic = TOPIC_MAP[topicId];
                if (!topic) return null;
                const checked = completedTopicIds.has(topicId);

                return (
                  <div
                    key={topicId}
                    className="flex items-start justify-between gap-3 py-3"
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <button
                        type="button"
                        onClick={() => onToggleTopic(topicId)}
                        aria-label={`Marcar tópico ${topicId}`}
                        className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors cursor-pointer ${
                          checked
                            ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-500 dark:bg-sky-500 dark:text-slate-950'
                            : 'border-[#C7C6C2] dark:border-[#4A4A4A] hover:border-sky-500'
                        }`}
                      >
                        {checked && <Check className="h-3 w-3 stroke-[2.5]" />}
                      </button>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#787774] dark:text-[#8E8E8E]">
                          <span className="font-mono font-medium text-[#37352F] dark:text-[#D4D4D4] tabular-nums">
                            {topic.id}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{topic.disciplineName}</span>
                        </div>
                        <p
                          className={`mt-0.5 text-sm leading-relaxed ${
                            checked
                              ? 'line-through text-[#9B9A97] dark:text-[#6E6E6E]'
                              : 'text-[#37352F] dark:text-[#EDEDED]'
                          }`}
                        >
                          {topic.title}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenDiscipline(topic.disciplineId)}
                      className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium text-sky-600 hover:bg-[#F7F7F5] dark:text-sky-400 dark:hover:bg-[#272727] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Abrir</span>
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div className="mt-5">
            <label
              htmlFor={`notion-note-${activeDay.day}`}
              className="block text-xs font-semibold text-[#37352F] dark:text-[#D4D4D4] mb-1.5"
            >
              Anotações do Dia {String(activeDay.day).padStart(2, '0')}
            </label>
            <textarea
              id={`notion-note-${activeDay.day}`}
              rows={3}
              value={dayNotes[activeDay.day] ?? ''}
              onChange={(e) => onUpdateDayNote(activeDay.day, e.target.value)}
              placeholder="Escreva lembretes, artigos de lei ou pontos para revisar..."
              className="w-full rounded-md border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#191919] px-3 py-2 text-sm text-[#37352F] dark:text-[#EDEDED] placeholder:text-[#9B9A97] focus:border-sky-500 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
