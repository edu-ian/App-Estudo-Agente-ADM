import { BarChart3, BookOpen, CalendarDays, Gamepad2, LayoutDashboard } from 'lucide-react';
import type { ActivePage } from './NotionSidebar';

interface MobileBottomBarProps {
  activePage: ActivePage;
  onSelectPage: (page: ActivePage) => void;
  onOpenDrawer: () => void;
}

export function MobileBottomBar({
  activePage,
  onSelectPage,
  onOpenDrawer,
}: MobileBottomBarProps) {
  const isDiscipline =
    activePage !== 'dashboard' &&
    activePage !== 'schedule' &&
    activePage !== 'quiz' &&
    activePage !== 'analytics' &&
    activePage !== 'export' &&
    activePage !== 'profile';

  return (
    <nav
      aria-label="Navegação rápida mobile"
      className="fixed bottom-0 left-0 right-0 z-40 grid h-14 grid-cols-5 border-t border-[#E9E9E7] dark:border-[#2F2F2F] bg-white/95 dark:bg-[#1E1E1E]/95 backdrop-blur-md lg:hidden print:hidden"
    >
      <button
        type="button"
        onClick={() => onSelectPage('dashboard')}
        className={`flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium cursor-pointer transition-colors ${
          activePage === 'dashboard'
            ? 'text-sky-600 dark:text-sky-400'
            : 'text-[#787774] dark:text-[#9B9A97]'
        }`}
      >
        <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
        <span>Início</span>
      </button>

      <button
        type="button"
        onClick={() => onSelectPage('schedule')}
        className={`flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium cursor-pointer transition-colors ${
          activePage === 'schedule'
            ? 'text-sky-600 dark:text-sky-400'
            : 'text-[#787774] dark:text-[#9B9A97]'
        }`}
      >
        <CalendarDays className="h-4 w-4" aria-hidden="true" />
        <span>Agenda</span>
      </button>

      <button
        type="button"
        onClick={() => onSelectPage('quiz')}
        className={`flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium cursor-pointer transition-colors ${
          activePage === 'quiz'
            ? 'text-sky-600 dark:text-sky-400'
            : 'text-[#787774] dark:text-[#9B9A97]'
        }`}
      >
        <Gamepad2 className="h-4 w-4" aria-hidden="true" />
        <span>Treino</span>
      </button>

      <button
        type="button"
        onClick={() => onSelectPage('analytics')}
        className={`flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium cursor-pointer transition-colors ${
          activePage === 'analytics'
            ? 'text-sky-600 dark:text-sky-400'
            : 'text-[#787774] dark:text-[#9B9A97]'
        }`}
      >
        <BarChart3 className="h-4 w-4" aria-hidden="true" />
        <span>Análise</span>
      </button>

      <button
        type="button"
        onClick={onOpenDrawer}
        className={`flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium cursor-pointer transition-colors ${
          isDiscipline
            ? 'text-sky-600 dark:text-sky-400'
            : 'text-[#787774] dark:text-[#9B9A97]'
        }`}
      >
        <BookOpen className="h-4 w-4" aria-hidden="true" />
        <span>Matérias</span>
      </button>
    </nav>
  );
}
