import { Cloud, Menu, Moon, PanelLeftOpen, Sun, Timer } from 'lucide-react';
import type { PomodoroPhase } from './FocusTimerBar';

interface TopWorkspaceBarProps {
  breadcrumbLabel: string;
  desktopSidebarOpen: boolean;
  onOpenDesktopSidebar: () => void;
  onOpenMobileSidebar: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  timerOpen: boolean;
  onToggleTimer: () => void;
  timerRunning: boolean;
  formattedTime: string;
  pomodoroPhase: PomodoroPhase;
  sessionInCycle: 1 | 2 | 3;
  activeUserName: string;
  activeUserAvatar: string;
  syncStatus: 'idle' | 'saving' | 'synced' | 'error';
  isProfileActive: boolean;
  onOpenProfile: () => void;
}

export function TopWorkspaceBar({
  breadcrumbLabel,
  desktopSidebarOpen,
  onOpenDesktopSidebar,
  onOpenMobileSidebar,
  theme,
  onToggleTheme,
  timerOpen,
  onToggleTimer,
  timerRunning,
  formattedTime,
  pomodoroPhase,
  sessionInCycle,
  activeUserName,
  activeUserAvatar,
  syncStatus,
  isProfileActive,
  onOpenProfile,
}: TopWorkspaceBarProps) {
  const shortPhase =
    pomodoroPhase === 'focus' ? 'Foco' : pomodoroPhase === 'shortBreak' ? 'Pausa' : 'Longa';

  return (
    <header className="sticky top-0 z-30 flex h-12 items-center justify-between gap-2 border-b border-[#E9E9E7] dark:border-[#2F2F2F] bg-white/95 dark:bg-[#191919]/95 backdrop-blur-sm px-3 sm:px-6 print:hidden">
      {/* Left: Drawer Trigger + Breadcrumb */}
      <div className="flex items-center gap-2 min-w-0">
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          aria-label="Abrir menu lateral"
          className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-[#5F5E5B] hover:bg-[#EFEFED] dark:text-[#A3A3A3] dark:hover:bg-[#272727] cursor-pointer min-h-[40px] min-w-[40px] shrink-0"
        >
          <Menu className="h-4 w-4" />
        </button>

        {!desktopSidebarOpen && (
          <button
            type="button"
            onClick={onOpenDesktopSidebar}
            aria-label="Expandir barra lateral"
            className="hidden lg:inline-flex items-center justify-center rounded-md p-1.5 text-[#5F5E5B] hover:bg-[#EFEFED] dark:text-[#A3A3A3] dark:hover:bg-[#272727] cursor-pointer min-h-[36px] min-w-[36px] shrink-0"
          >
            <PanelLeftOpen className="h-4 w-4" />
          </button>
        )}

        <div className="flex items-center gap-1.5 text-[13px] min-w-0">
          <span className="hidden sm:inline text-[#787774] dark:text-[#8E8E8E] whitespace-nowrap">
            Agente Adm. Curitiba
          </span>
          <span className="hidden sm:inline text-[#B4B4B0] dark:text-[#555555]" aria-hidden="true">
            /
          </span>
          <span className="font-medium text-[#37352F] dark:text-[#EDEDED] truncate">
            {breadcrumbLabel}
          </span>
        </div>
      </div>

      {/* Right: Pomodoro Trigger + Profile + Light/Dark Toggle */}
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          onClick={onToggleTimer}
          aria-expanded={timerOpen}
          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer min-h-[36px] ${
            timerOpen || timerRunning
              ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950'
              : 'text-[#5F5E5B] hover:bg-[#EFEFED] dark:text-[#B5B5B5] dark:hover:bg-[#272727]'
          }`}
        >
          <Timer className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="tabular-nums">
            {timerRunning
              ? `${shortPhase} ${formattedTime} · ${sessionInCycle}/3`
              : `Pomodoro ${sessionInCycle}/3`}
          </span>
        </button>

        <button
          type="button"
          onClick={onOpenProfile}
          aria-label="Conta e sincronização na nuvem"
          className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer min-h-[36px] ${
            isProfileActive
              ? 'border-sky-500/60 bg-sky-500/10 text-sky-700 dark:text-sky-300'
              : 'border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#222222] text-[#37352F] dark:text-[#D4D4D4] hover:bg-[#EFEFED] dark:hover:bg-[#2B2B2B]'
          }`}
        >
          <span className="text-sm leading-none shrink-0" aria-hidden="true">
            {activeUserAvatar}
          </span>
          <span className="hidden md:inline max-w-[110px] truncate">{activeUserName}</span>
          <Cloud
            className={`h-3 w-3 shrink-0 ${
              syncStatus === 'saving'
                ? 'text-sky-500 animate-pulse'
                : syncStatus === 'error'
                ? 'text-rose-500'
                : 'text-emerald-600 dark:text-emerald-400'
            }`}
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#222222] px-2.5 py-1.5 text-xs font-medium text-[#37352F] dark:text-[#D4D4D4] hover:bg-[#EFEFED] dark:hover:bg-[#2B2B2B] transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[36px]"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Claro</span>
            </>
          ) : (
            <>
              <Moon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Escuro</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
