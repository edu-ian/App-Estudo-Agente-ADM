import { useMemo, useRef, useState } from 'react';
import {
  Check,
  Cloud,
  Copy,
  Download,
  HardDriveUpload,
  LogOut,
  Upload,
} from 'lucide-react';
import {
  appStateToExportBundle,
  AVATAR_OPTIONS,
  legacyDataToAppState,
  type AppStudyState,
} from '../utils/firebaseStudyService';
import {
  loadUserData,
  loadUserProfiles,
  parseImportJson,
  USER_DATA_KEY_PREFIX,
} from '../utils/studyStorage';

interface ProfileSyncViewProps {
  uid: string;
  studyState: AppStudyState;
  syncStatus: 'idle' | 'saving' | 'synced' | 'error';
  onUpdateProfile: (updates: { name: string; avatar: string }) => Promise<void>;
  onImportCloudState: (nextState: AppStudyState) => Promise<void>;
  onSignOut: () => Promise<void>;
}

function detectLegacyLocalData(): { label: string; userId: string } | null {
  try {
    const hasAnyKey =
      localStorage.getItem('study_app_users_v1') !== null ||
      localStorage.getItem(`${USER_DATA_KEY_PREFIX}principal`) !== null ||
      localStorage.getItem('curitiba_study_completed_topics_v1') !== null;

    if (!hasAnyKey) return null;

    const { profiles, activeUserId } = loadUserProfiles();
    const active = profiles.find((p) => p.id === activeUserId) ?? profiles[0];
    const data = loadUserData(active.id);
    const hasContent =
      data.completedTopics.length > 0 ||
      data.completedDays.length > 0 ||
      data.questionAttempts.length > 0 ||
      Object.keys(data.questionProgress).length > 0 ||
      data.studiedMinutes > 0;

    if (!hasContent) return null;
    return {
      label: `${active.name} (${data.completedTopics.length} tópicos, ${data.questionAttempts.length} respostas)`,
      userId: active.id,
    };
  } catch {
    return null;
  }
}

export function ProfileSyncView({
  uid,
  studyState,
  syncStatus,
  onUpdateProfile,
  onImportCloudState,
  onSignOut,
}: ProfileSyncViewProps) {
  const [editingName, setEditingName] = useState(studyState.profile.name);
  const [editingAvatar, setEditingAvatar] = useState(studyState.profile.avatar);
  const [lastSyncedName, setLastSyncedName] = useState(studyState.profile.name);
  const [lastSyncedAvatar, setLastSyncedAvatar] = useState(studyState.profile.avatar);
  const [savingProfile, setSavingProfile] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  const [pasteJson, setPasteJson] = useState('');
  const [copiedJson, setCopiedJson] = useState(false);
  const [importing, setImporting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'ok' | 'err'; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (lastSyncedName !== studyState.profile.name) {
    setLastSyncedName(studyState.profile.name);
    setEditingName(studyState.profile.name);
  }
  if (lastSyncedAvatar !== studyState.profile.avatar) {
    setLastSyncedAvatar(studyState.profile.avatar);
    setEditingAvatar(studyState.profile.avatar);
  }

  const legacyLocal = useMemo(() => detectLegacyLocalData(), []);

  const srsValues = Object.values(studyState.questionProgress);
  const masteredCount = srsValues.filter((r) => r.status === 'dominada').length;
  const errorCount = srsValues.filter(
    (r) => r.status === 'erro' || r.status === 'revisar'
  ).length;

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = editingName.trim();
    if (trimmed.length < 2) {
      setFeedback({ type: 'err', message: 'Informe um nome com pelo menos 2 caracteres.' });
      return;
    }

    setSavingProfile(true);
    setFeedback(null);
    try {
      await onUpdateProfile({ name: trimmed, avatar: editingAvatar });
      setFeedback({
        type: 'ok',
        message: 'Perfil atualizado e sincronizado na nuvem.',
      });
    } catch {
      setFeedback({
        type: 'err',
        message: 'Não foi possível salvar as alterações na nuvem. Tente novamente.',
      });
    } finally {
      setSavingProfile(false);
    }
  };

  const handleDownloadJson = () => {
    const jsonString = appStateToExportBundle(uid, studyState);
    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStamp = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `progresso-curitiba-nuvem-${dateStamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setFeedback({
      type: 'ok',
      message: `Backup JSON exportado da nuvem para "${studyState.profile.name}".`,
    });
  };

  const handleCopyJson = async () => {
    try {
      const jsonString = appStateToExportBundle(uid, studyState);
      await navigator.clipboard.writeText(jsonString);
      setCopiedJson(true);
      window.setTimeout(() => setCopiedJson(false), 2500);
      setFeedback({
        type: 'ok',
        message: 'JSON copiado para a área de transferência.',
      });
    } catch {
      setFeedback({
        type: 'err',
        message: 'Não foi possível copiar automaticamente. Use "Exportar Progresso (.json)".',
      });
    }
  };

  const handleImportText = async (raw: string) => {
    const parsed = parseImportJson(raw);
    if (!parsed.ok) {
      setFeedback({ type: 'err', message: parsed.error });
      return;
    }

    setImporting(true);
    setFeedback(null);
    try {
      const merged = legacyDataToAppState(parsed.data, studyState.profile);
      await onImportCloudState(merged);
      setPasteJson('');
      setFeedback({
        type: 'ok',
        message: 'Backup JSON importado e sincronizado na nuvem com sucesso!',
      });
    } catch {
      setFeedback({
        type: 'err',
        message: 'Falha ao enviar os dados importados para a nuvem.',
      });
    } finally {
      setImporting(false);
    }
  };

  const handleMigrateLegacyLocal = async () => {
    if (!legacyLocal) return;
    setImporting(true);
    setFeedback(null);
    try {
      const legacy = loadUserData(legacyLocal.userId);
      const merged = legacyDataToAppState(legacy, studyState.profile);
      await onImportCloudState(merged);
      setFeedback({
        type: 'ok',
        message: 'Dados locais deste navegador enviados para sua conta na nuvem!',
      });
    } catch {
      setFeedback({
        type: 'err',
        message: 'Não foi possível migrar os dados locais para a nuvem.',
      });
    } finally {
      setImporting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        void handleImportText(reader.result);
      }
    };
    reader.onerror = () => {
      setFeedback({ type: 'err', message: 'Falha ao ler o arquivo selecionado.' });
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleSignOutClick = async () => {
    setSigningOut(true);
    try {
      await onSignOut();
    } finally {
      setSigningOut(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-10 sm:py-14">
      <header>
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
          <Cloud className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
          <span>Conta na Nuvem · Sincronização Automática em Tempo Real</span>
        </div>
        <h1 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#37352F] dark:text-[#EDEDED] sm:text-3xl [text-wrap:balance]">
          Conta, Nuvem & Backup
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
          Seu progresso é salvo automaticamente na sua conta do Cloud Firestore e sincronizado entre celular e computador.
        </p>
      </header>

      {feedback && (
        <div
          role="status"
          className={`mt-6 rounded-lg border px-4 py-3 text-xs font-medium leading-relaxed ${
            feedback.type === 'ok'
              ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200'
              : 'border-rose-500/40 bg-rose-500/10 text-rose-800 dark:text-rose-200'
          }`}
        >
          {feedback.message}
        </div>
      )}

      {/* Active Cloud Account Card */}
      <section className="mt-7 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#202020] p-5 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] text-2xl shrink-0">
              {studyState.profile.avatar}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#37352F] dark:text-[#EDEDED] truncate">
                {studyState.profile.name}
              </p>
              <p className="text-xs text-[#787774] dark:text-[#9B9A97] truncate">
                {studyState.profile.email || 'Conta autenticada'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#787774] dark:text-[#9B9A97]">
              {syncStatus === 'saving'
                ? 'Salvando...'
                : syncStatus === 'error'
                ? 'Erro ao sincronizar'
                : 'Sincronizado'}
            </span>
            <button
              type="button"
              onClick={handleSignOutClick}
              disabled={signingOut}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#252525] px-3 py-2 text-xs font-medium text-rose-600 dark:text-rose-400 hover:border-rose-500/50 transition-colors cursor-pointer min-h-[38px]"
            >
              <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{signingOut ? 'Saindo...' : 'Sair da conta'}</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#5F5E5B] dark:text-[#B5B5B5] tabular-nums pt-1 border-t border-[#E9E9E7] dark:border-[#2F2F2F]">
          <span>{studyState.completedTopics.length} tópicos</span>
          <span aria-hidden="true">·</span>
          <span>{studyState.questionAttempts.length} tentativas</span>
          <span aria-hidden="true">·</span>
          <span className="text-rose-600 dark:text-rose-400">{errorCount} erros</span>
          <span aria-hidden="true">·</span>
          <span className="text-emerald-600 dark:text-emerald-400">{masteredCount} dominadas</span>
          <span aria-hidden="true">·</span>
          <span>{studyState.profile.pomodoroSessions} pomodoros</span>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-4 pt-3 border-t border-[#E9E9E7] dark:border-[#2F2F2F]">
          <div className="space-y-1.5">
            <span className="block text-xs font-medium text-[#787774] dark:text-[#9B9A97]">
              Avatar no Ranking:
            </span>
            <div className="grid grid-cols-8 gap-1.5 max-w-xs">
              {AVATAR_OPTIONS.map((emoji) => {
                const selected = editingAvatar === emoji;
                return (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setEditingAvatar(emoji)}
                    aria-label={`Selecionar avatar ${emoji}`}
                    aria-pressed={selected}
                    className={`flex h-9 items-center justify-center rounded-md border text-base transition-colors cursor-pointer ${
                      selected
                        ? 'border-sky-600 bg-sky-500/15 dark:border-sky-400'
                        : 'border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] hover:border-[#C7C6C2]'
                    }`}
                  >
                    {emoji}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label
              htmlFor="rename-cloud-profile"
              className="text-xs font-medium text-[#787774] dark:text-[#9B9A97] shrink-0"
            >
              Nome de exibição:
            </label>
            <input
              id="rename-cloud-profile"
              type="text"
              value={editingName}
              onChange={(e) => setEditingName(e.target.value)}
              maxLength={80}
              className="flex-1 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#191919] px-3 py-2 text-xs text-[#37352F] dark:text-[#EDEDED] min-h-[42px]"
            />
            <button
              type="submit"
              disabled={savingProfile}
              className="rounded-md bg-[#37352F] px-4 py-2 text-xs font-semibold text-white hover:opacity-90 dark:bg-[#EDEDED] dark:text-[#191919] transition-colors cursor-pointer disabled:opacity-50 min-h-[42px]"
            >
              {savingProfile ? 'Salvando...' : 'Atualizar perfil'}
            </button>
          </div>
        </form>
      </section>

      {/* Optional 1-click LocalStorage Migration */}
      {legacyLocal && (
        <section className="mt-7 rounded-lg border border-sky-500/30 bg-sky-500/[0.06] p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 min-w-0">
            <p className="text-xs font-semibold text-[#37352F] dark:text-[#EDEDED]">
              Histórico antigo encontrado neste navegador
            </p>
            <p className="text-xs text-[#5F5E5B] dark:text-[#B5B5B5]">
              Detectamos dados locais de <span className="font-medium">{legacyLocal.label}</span>. Você pode enviá-los agora para sua conta na nuvem.
            </p>
          </div>
          <button
            type="button"
            disabled={importing}
            onClick={handleMigrateLegacyLocal}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-sky-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 transition-colors cursor-pointer shrink-0 min-h-[40px]"
          >
            <HardDriveUpload className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{importing ? 'Enviando...' : 'Migrar para a nuvem'}</span>
          </button>
        </section>
      )}

      {/* Export & Legacy JSON Import to Cloud */}
      <section className="mt-8 rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#1E1E1E] p-5 space-y-5">
        <div>
          <h2 className="font-display text-base font-semibold text-[#37352F] dark:text-[#EDEDED]">
            Exportação & Importação de Backup JSON
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-[#787774] dark:text-[#9B9A97]">
            Exporte uma cópia de segurança em JSON ou importe um backup JSON antigo diretamente para a sua conta na nuvem.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleDownloadJson}
            className="flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-colors cursor-pointer min-h-[48px]"
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Exportar Progresso (.json)</span>
          </button>

          <button
            type="button"
            onClick={handleCopyJson}
            className="flex items-center justify-center gap-2 rounded-lg border border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5] dark:bg-[#252525] px-4 py-3 text-sm font-semibold text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500/50 transition-colors cursor-pointer min-h-[48px]"
          >
            {copiedJson ? (
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
            )}
            <span>{copiedJson ? 'JSON copiado!' : 'Copiar JSON'}</span>
          </button>
        </div>

        <div className="border-t border-[#E9E9E7] dark:border-[#2F2F2F] pt-5 space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Importar backup JSON antigo para a nuvem
              </p>
              <p className="text-[11px] text-[#787774] dark:text-[#9B9A97]">
                Carrega seus tópicos, Caderno de Erros/Acertos e histórico 3x para o Cloud Firestore.
              </p>
            </div>

            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                disabled={importing}
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5] dark:bg-[#252525] px-3.5 py-2 text-xs font-medium text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500/50 cursor-pointer min-h-[40px]"
              >
                <Upload className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Selecionar arquivo .json</span>
              </button>
            </div>
          </div>

          <textarea
            value={pasteJson}
            onChange={(e) => setPasteJson(e.target.value)}
            rows={4}
            placeholder="Ou cole aqui o conteúdo do backup JSON antigo..."
            className="w-full rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/60 dark:bg-[#191919] p-3 font-mono text-xs text-[#37352F] dark:text-[#D4D4D4] placeholder:font-sans placeholder:text-[#9B9A97]"
          />

          <div className="flex justify-end">
            <button
              type="button"
              disabled={!pasteJson.trim() || importing}
              onClick={() => void handleImportText(pasteJson)}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-white dark:bg-[#252525] px-4 py-2 text-xs font-semibold text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500/50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed min-h-[40px]"
            >
              <Upload className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{importing ? 'Importando...' : 'Importar backup para a nuvem'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
