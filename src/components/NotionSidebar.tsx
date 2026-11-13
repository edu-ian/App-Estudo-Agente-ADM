import {
  BarChart3,
  BookDown,
  CalendarDays,
  ChevronsLeft,
  FileText,
  Gamepad2,
  LayoutDashboard,
  X,
} from 'lucide-react';
import { DISCIPLINES, EXAM_INFO } from '../data/syllabus';

export type ActivePage =
  | 'dashboard'
  | 'schedule'
  | 'quiz'
  | 'analytics'
  | 'export'
  | 'profile'
  | string;

interface NotionSidebarProps {
  activePage: ActivePage;
  onSelectPage: (page: ActivePage) => void;
  desktopOpen: boolean;
  onCloseDesktop: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  completedTopicIds: Set<string>;
  daysRemaining: number;
  totalQuestionsCount: number;
  attemptsCount: number;
  userDisplayName: string;
  userAvatar: string;
  syncStatus: 'idle' | 'saving' | 'synced' | 'error';
}

export function NotionSidebar({
  activePage,
  onSelectPage,
  desktopOpen,
  onCloseDesktop,
  mobileOpen,
  onCloseMobile,
  completedTopicIds,
  daysRemaining,
  totalQuestionsCount,
  attemptsCount,
  userDisplayName,
  userAvatar,
  syncStatus,
}: NotionSidebarProps) {
  const handlePick = (page: ActivePage) => {
    onSelectPage(page);
    onCloseMobile();
  };

  const sidebarContent = (
    <div className="flex h-full flex-col bg-[#F7F7F5] dark:bg-[#202020] border-r border-[#E9E9E7] dark:border-[#2F2F2F] text-[#37352F] dark:text-[#D4D4D4] select-none">
      {/* Workspace Header */}
      <div className="flex h-12 items-center justify-between px-3.5 border-b border-[#E9E9E7] dark:border-[#2F2F2F]">
        <button
          type="button"
          onClick={() => handlePick('dashboard')}
          className="flex items-center gap-2 text-left text-sm font-semibold text-[#37352F] dark:text-[#EDEDED] truncate cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm min-h-[40px]"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-[#37352F] text-[11px] font-bold text-white dark:bg-[#EDEDED] dark:text-[#191919] shrink-0">
            C
          </span>
          <span className="truncate">Curitiba · Edital 2026</span>
        </button>

        <button
          type="button"
          onClick={onCloseDesktop}
          aria-label="Recolher barra lateral"
          className="hidden lg:inline-flex items-center justify-center rounded p-1.5 text-[#787774] hover:bg-[#EAEAE6] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:bg-[#2C2C2C] dark:hover:text-[#EDEDED] transition-colors cursor-pointer min-h-[36px] min-w-[36px]"
        >
          <ChevronsLeft className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={onCloseMobile}
          aria-label="Fechar menu lateral"
          className="inline-flex lg:hidden items-center justify-center rounded p-2 text-[#787774] hover:bg-[#EAEAE6] dark:text-[#9B9A97] dark:hover:bg-[#2C2C2C] cursor-pointer min-h-[44px] min-w-[44px]"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Navigation Tree */}
      <nav aria-label="Páginas do workspace" className="flex-1 overflow-y-auto px-2.5 py-3 space-y-5">
        {/* Section 1: Planning & Training */}
        <div>
          <p className="px-2.5 pb-1.5 text-[11px] font-semibold tracking-wide text-[#787774] dark:text-[#8E8E8E]">
            Planejamento e Prática
          </p>
          <div className="space-y-0.5">
            <button
              type="button"
              onClick={() => handlePick('dashboard')}
              className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] transition-colors cursor-pointer min-h-[44px] lg:min-h-[36px] ${
                activePage === 'dashboard'
                  ? 'bg-[#EAEAE6] font-medium text-[#37352F] dark:bg-[#2C2C2C] dark:text-[#EDEDED]'
                  : 'text-[#5F5E5B] hover:bg-[#EFEFED] dark:text-[#A3A3A3] dark:hover:bg-[#272727]'
              }`}
            >
              <LayoutDashboard className="h-4 w-4 shrink-0 opacity-75" aria-hidden="true" />
              <span className="truncate">Visão Geral</span>
            </button>

            <button
              type="button"
              onClick={() => handlePick('schedule')}
              className={`flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-[13px] transition-colors cursor-pointer min-h-[44px] lg:min-h-[36px] ${
                activePage === 'schedule'
                  ? 'bg-[#EAEAE6] font-medium text-[#37352F] dark:bg-[#2C2C2C] dark:text-[#EDEDED]'
                  : 'text-[#5F5E5B] hover:bg-[#EFEFED] dark:text-[#A3A3A3] dark:hover:bg-[#272727]'
              }`}
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <CalendarDays className="h-4 w-4 shrink-0 opacity-75" aria-hidden="true" />
                <span className="truncate">Cronograma (30 dias)</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => handlePick('quiz')}
              className={`flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-[13px] transition-colors cursor-pointer min-h-[44px] lg:min-h-[36px] ${
                activePage === 'quiz'
                  ? 'bg-[#EAEAE6] font-medium text-[#37352F] dark:bg-[#2C2C2C] dark:text-[#EDEDED]'
                  : 'text-[#5F5E5B] hover:bg-[#EFEFED] dark:text-[#A3A3A3] dark:hover:bg-[#272727]'
              }`}
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <Gamepad2 className="h-4 w-4 shrink-0 opacity-75" aria-hidden="true" />
                <span className="truncate">Treino & Desafios</span>
              </span>
              <span className="font-mono text-[11px] text-[#787774] dark:text-[#8E8E8E] tabular-nums shrink-0">
                {totalQuestionsCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handlePick('analytics')}
              className={`flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-[13px] transition-colors cursor-pointer min-h-[44px] lg:min-h-[36px] ${
                activePage === 'analytics'
                  ? 'bg-[#EAEAE6] font-medium text-[#37352F] dark:bg-[#2C2C2C] dark:text-[#EDEDED]'
                  : 'text-[#5F5E5B] hover:bg-[#EFEFED] dark:text-[#A3A3A3] dark:hover:bg-[#272727]'
              }`}
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <BarChart3 className="h-4 w-4 shrink-0 opacity-75" aria-hidden="true" />
                <span className="truncate">Análise de Desempenho</span>
              </span>
              {attemptsCount > 0 && (
                <span className="font-mono text-[11px] text-[#787774] dark:text-[#8E8E8E] tabular-nums shrink-0">
                  {attemptsCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => handlePick('export')}
              className={`flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-[13px] transition-colors cursor-pointer min-h-[44px] lg:min-h-[36px] ${
                activePage === 'export'
                  ? 'bg-[#EAEAE6] font-medium text-[#37352F] dark:bg-[#2C2C2C] dark:text-[#EDEDED]'
                  : 'text-[#5F5E5B] hover:bg-[#EFEFED] dark:text-[#A3A3A3] dark:hover:bg-[#272727]'
              }`}
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <BookDown className="h-4 w-4 shrink-0 opacity-75" aria-hidden="true" />
                <span className="truncate">Apostila PDF / Docs</span>
              </span>
              <span className="font-mono text-[10px] text-sky-600 dark:text-sky-400 shrink-0">
                PDF
              </span>
            </button>
          </div>
        </div>

        {/* Section 2: Disciplines */}
        <div>
          <p className="px-2.5 pb-1.5 text-[11px] font-semibold tracking-wide text-[#787774] dark:text-[#8E8E8E]">
            Disciplinas do Edital
          </p>
          <div className="space-y-0.5">
            {DISCIPLINES.map((disc) => {
              const isActive = activePage === disc.id;
              const done = disc.topics.filter((t) => completedTopicIds.has(t.id)).length;
              const total = disc.topics.length;
              const allDone = done === total;

              return (
                <button
                  key={disc.id}
                  type="button"
                  onClick={() => handlePick(disc.id)}
                  className={`flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-[13px] transition-colors cursor-pointer min-h-[44px] lg:min-h-[36px] ${
                    isActive
                      ? 'bg-[#EAEAE6] font-medium text-[#37352F] dark:bg-[#2C2C2C] dark:text-[#EDEDED]'
                      : 'text-[#5F5E5B] hover:bg-[#EFEFED] dark:text-[#A3A3A3] dark:hover:bg-[#272727]'
                  }`}
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <FileText className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden="true" />
                    <span className="font-mono text-[11px] opacity-70 tabular-nums shrink-0">
                      {disc.code}
                    </span>
                    <span className="truncate">{disc.name}</span>
                  </span>

                  <span
                    className={`font-mono text-[11px] tabular-nums shrink-0 ${
                      allDone
                        ? 'text-emerald-600 dark:text-emerald-400 font-medium'
                        : 'text-[#787774] dark:text-[#8E8E8E]'
                    }`}
                  >
                    {done}/{total}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Quiet Profile & Exam Date Footer */}
      <div className="border-t border-[#E9E9E7] dark:border-[#2F2F2F] px-2.5 py-2.5 space-y-2 text-xs text-[#787774] dark:text-[#9B9A97]">
        <button
          type="button"
          onClick={() => handlePick('profile')}
          className={`flex w-full items-center justify-between gap-2 rounded-md px-2 py-2 text-left transition-colors cursor-pointer min-h-[40px] ${
            activePage === 'profile'
              ? 'bg-[#EAEAE6] font-medium text-[#37352F] dark:bg-[#2C2C2C] dark:text-[#EDEDED]'
              : 'hover:bg-[#EFEFED] dark:hover:bg-[#272727]'
          }`}
        >
          <span className="flex items-center gap-2 min-w-0">
            <span className="text-sm leading-none shrink-0" aria-hidden="true">
              {userAvatar}
            </span>
            <span className="truncate text-[#37352F] dark:text-[#D4D4D4]">
              {userDisplayName}
            </span>
          </span>
          <span
            className={`text-[11px] shrink-0 ${
              syncStatus === 'error'
                ? 'text-rose-600 dark:text-rose-400'
                : 'text-sky-600 dark:text-sky-400'
            }`}
          >
            {syncStatus === 'saving' ? 'Salvando...' : syncStatus === 'error' ? 'Erro' : 'Nuvem'}
          </span>
        </button>

        <div className="flex items-center justify-between px-2 pt-0.5">
          <span>Prova {EXAM_INFO.examDateFormatted}</span>
          <span className="font-mono font-medium text-[#37352F] dark:text-[#D4D4D4] tabular-nums">
            {daysRemaining}d
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {desktopOpen && (
        <aside className="hidden lg:block w-[268px] shrink-0 h-screen sticky top-0 print:hidden">
          {sidebarContent}
        </aside>
      )}

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden print:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-[1px]"
            onClick={onCloseMobile}
            aria-hidden="true"
          />
          <aside className="relative z-10 w-[290px] max-w-[85vw] h-full shadow-2xl">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
