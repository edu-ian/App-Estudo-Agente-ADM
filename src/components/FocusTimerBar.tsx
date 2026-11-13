import { Pause, Play, RotateCcw, SkipForward, Volume2, VolumeX, X } from 'lucide-react';

export type PomodoroPhase = 'focus' | 'shortBreak' | 'longBreak';

interface FocusTimerBarProps {
  isOpen: boolean;
  onClose: () => void;
  phase: PomodoroPhase;
  sessionInCycle: 1 | 2 | 3;
  secondsLeft: number;
  isRunning: boolean;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onToggleRunning: () => void;
  onResetCycle: () => void;
  onAdvancePhase: () => void;
}

export function formatSeconds(totalSeconds: number): string {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function FocusTimerBar({
  isOpen,
  onClose,
  phase,
  sessionInCycle,
  secondsLeft,
  isRunning,
  soundEnabled,
  onToggleSound,
  onToggleRunning,
  onResetCycle,
  onAdvancePhase,
}: FocusTimerBarProps) {
  if (!isOpen) return null;

  const phaseLabel =
    phase === 'focus'
      ? 'Foco (30 min)'
      : phase === 'shortBreak'
      ? 'Pausa Curta (5 min)'
      : 'Pausa Longa (15 min)';

  const phaseColor =
    phase === 'focus'
      ? 'text-sky-600 dark:text-sky-400'
      : 'text-emerald-600 dark:text-emerald-400';

  return (
    <div className="border-b border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#202020]">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        {/* Left: Timer Readout + Phase + Cycle 1/3..3/3 */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex items-baseline gap-2.5">
            <span className="font-mono text-2xl font-semibold text-[#37352F] dark:text-[#EDEDED] tabular-nums">
              {formatSeconds(secondsLeft)}
            </span>
            <span className={`text-xs font-semibold ${phaseColor}`}>
              {phaseLabel}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#787774] dark:text-[#9B9A97]">
            <span className="font-mono font-medium text-[#37352F] dark:text-[#D4D4D4] tabular-nums">
              Sessão {sessionInCycle}/3
            </span>
            <div className="flex items-center gap-1" aria-hidden="true">
              {[1, 2, 3].map((step) => (
                <span
                  key={step}
                  className={`h-1.5 w-4 rounded-full transition-colors ${
                    step < sessionInCycle
                      ? 'bg-emerald-500'
                      : step === sessionInCycle && phase === 'focus'
                      ? 'bg-sky-500'
                      : step === sessionInCycle && phase !== 'focus'
                      ? 'bg-emerald-500'
                      : 'bg-[#DFDFDC] dark:bg-[#353535]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Touch-Friendly Controls */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={onToggleRunning}
            className="inline-flex items-center gap-1.5 rounded-md bg-sky-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[40px]"
          >
            {isRunning ? (
              <>
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Iniciar</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onAdvancePhase}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-3 py-2 text-xs font-medium text-[#37352F] dark:text-[#D4D4D4] hover:bg-[#EFEFED] dark:hover:bg-[#272727] transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[40px]"
          >
            <SkipForward className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{phase === 'focus' ? 'Concluir sessão' : 'Pular pausa'}</span>
          </button>

          <button
            type="button"
            onClick={onToggleSound}
            aria-label={soundEnabled ? 'Silenciar alertas sonoros' : 'Ativar alertas sonoros'}
            title={soundEnabled ? 'Som ativado' : 'Som desativado'}
            className="inline-flex items-center justify-center rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] p-2 text-[#5F5E5B] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EDEDED] transition-colors cursor-pointer min-h-[40px] min-w-[40px]"
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={onResetCycle}
            aria-label="Reiniciar ciclo Pomodoro"
            title="Reiniciar ciclo (Sessão 1/3)"
            className="inline-flex items-center justify-center rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] p-2 text-[#5F5E5B] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EDEDED] transition-colors cursor-pointer min-h-[40px] min-w-[40px]"
          >
            <RotateCcw className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Ocultar painel do cronômetro"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#787774] hover:bg-[#EFEFED] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:bg-[#272727] dark:hover:text-[#EDEDED] transition-colors cursor-pointer min-h-[40px] min-w-[40px]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
