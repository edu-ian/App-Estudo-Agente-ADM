import { useState } from 'react';
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { AlertTriangle, Check, Cloud, LogIn, Moon, Sun, UserPlus } from 'lucide-react';
import { auth, firebaseConfig, isFirebaseConfigured } from '../firebaseConfig';
import {
  AVATAR_OPTIONS,
  ensureUserDocuments,
  setPendingRegistrationProfile,
} from '../utils/firebaseStudyService';

interface AuthViewProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onAuthComplete?: () => void;
}

type AuthMode = 'login' | 'register';

function mapAuthErrorToPtBr(code: string | undefined): {
  message: string;
  showProviderGuide?: boolean;
} {
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return { message: 'E-mail ou senha incorretos. Confira os dados e tente novamente.' };
    case 'auth/email-already-in-use':
      return {
        message: 'Este e-mail já está cadastrado. Alterne para a aba "Entrar" para acessar sua conta.',
      };
    case 'auth/weak-password':
      return { message: 'A senha precisa ter pelo menos 6 caracteres.' };
    case 'auth/invalid-email':
      return { message: 'Digite um endereço de e-mail válido.' };
    case 'auth/too-many-requests':
      return { message: 'Muitas tentativas em sequência. Aguarde um minuto e tente novamente.' };
    case 'auth/network-request-failed':
      return { message: 'Sem conexão com a internet no momento. Verifique sua rede.' };
    case 'auth/popup-closed-by-user':
      return { message: 'A janela de login com Google foi fechada antes de concluir.' };
    case 'auth/popup-blocked':
      return {
        message:
          'O navegador bloqueou o pop-up do Google. Permita pop-ups para este site ou entre com e-mail e senha.',
      };
    case 'auth/operation-not-allowed':
      return {
        message:
          'O método E-mail/Senha ainda não foi ativado no Console do Firebase deste projeto. Ative-o no painel de Autenticação ou use "Entrar com Google" abaixo.',
        showProviderGuide: true,
      };
    default:
      return { message: 'Não foi possível concluir a autenticação. Tente novamente.' };
  }
}

export function AuthView({ theme, onToggleTheme, onAuthComplete }: AuthViewProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [displayName, setDisplayName] = useState('');
  const [avatar, setAvatar] = useState<string>(AVATAR_OPTIONS[0]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberSession, setRememberSession] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  const [errorState, setErrorState] = useState<{
    message: string;
    showProviderGuide?: boolean;
  } | null>(null);

  const projectConsoleUrl = `https://console.firebase.google.com/project/${
    firebaseConfig.projectId || 'seu-projeto'
  }/authentication/providers`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorState(null);

    if (!isFirebaseConfigured || !auth) {
      setErrorState({
        message:
          'As credenciais do Firebase ainda não foram configuradas. Veja as instruções acima.',
      });
      return;
    }

    const trimmedEmail = email.trim();
    const trimmedName = displayName.trim();

    if (mode === 'register' && trimmedName.length < 2) {
      setErrorState({ message: 'Informe seu nome de exibição (mínimo de 2 caracteres).' });
      return;
    }

    if (!trimmedEmail) {
      setErrorState({ message: 'Informe seu e-mail.' });
      return;
    }

    if (password.length < 6) {
      setErrorState({ message: 'A senha deve ter no mínimo 6 caracteres.' });
      return;
    }

    setSubmitting(true);
    try {
      await setPersistence(
        auth,
        rememberSession ? browserLocalPersistence : browserSessionPersistence
      );

      if (mode === 'register') {
        setPendingRegistrationProfile({ displayName: trimmedName, avatar });
        const cred = await createUserWithEmailAndPassword(auth, trimmedEmail, password);
        await updateProfile(cred.user, { displayName: trimmedName });
        await ensureUserDocuments(cred.user, { displayName: trimmedName, avatar });
      } else {
        await signInWithEmailAndPassword(auth, trimmedEmail, password);
      }
      onAuthComplete?.();
    } catch (err: unknown) {
      setPendingRegistrationProfile(null);
      const code =
        typeof err === 'object' && err !== null && 'code' in err
          ? String((err as { code?: unknown }).code)
          : undefined;
      setErrorState(mapAuthErrorToPtBr(code));
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorState(null);
    if (!isFirebaseConfigured || !auth) return;

    setGoogleSubmitting(true);
    try {
      await setPersistence(
        auth,
        rememberSession ? browserLocalPersistence : browserSessionPersistence
      );
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onAuthComplete?.();
    } catch (err: unknown) {
      const code =
        typeof err === 'object' && err !== null && 'code' in err
          ? String((err as { code?: unknown }).code)
          : undefined;
      setErrorState(mapAuthErrorToPtBr(code));
    } finally {
      setGoogleSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#37352F] dark:bg-[#191919] dark:text-[#EDEDED] flex flex-col">
      {/* Subtle Top Bar */}
      <header className="flex h-12 items-center justify-between border-b border-[#E9E9E7] dark:border-[#2F2F2F] bg-white/80 dark:bg-[#191919]/80 px-4 sm:px-8">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-[#37352F] text-[11px] font-bold text-white dark:bg-[#EDEDED] dark:text-[#191919]">
            C
          </span>
          <span>Agente Adm. Curitiba · 2026</span>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#222222] px-2.5 py-1.5 text-xs font-medium text-[#37352F] dark:text-[#D4D4D4] hover:bg-[#EFEFED] dark:hover:bg-[#2B2B2B] transition-colors cursor-pointer min-h-[36px]"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Claro</span>
            </>
          ) : (
            <>
              <Moon className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Escuro</span>
            </>
          )}
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-md space-y-5">
          {/* Header */}
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-600 dark:text-sky-400">
              <Cloud className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Sincronização em Nuvem (Celular & Computador)</span>
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-[#37352F] dark:text-[#EDEDED] sm:text-3xl [text-wrap:balance]">
              Acesse seu plano de estudos
            </h1>
            <p className="text-sm leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
              Entre com sua conta para sincronizar tópicos, Pomodoro, Caderno de Erros/Acertos e acompanhar o placar de estudos em tempo real.
            </p>
          </div>

          {/* Missing Firebase Config Friendly Warning */}
          {!isFirebaseConfigured && (
            <div
              role="alert"
              className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-900 dark:text-amber-200 space-y-2"
            >
              <div className="flex items-center gap-2 font-semibold">
                <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Configuração do Firebase pendente</span>
              </div>
              <p>
                As chaves do projeto ainda não estão preenchidas. Cole o objeto{' '}
                <code className="font-mono bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded">
                  firebaseConfig
                </code>{' '}
                (<code className="font-mono">apiKey</code>, <code className="font-mono">authDomain</code>,{' '}
                <code className="font-mono">projectId</code>, <code className="font-mono">storageBucket</code>,{' '}
                <code className="font-mono">messagingSenderId</code>, <code className="font-mono">appId</code>) no arquivo{' '}
                <code className="font-mono">firebase-applet-config.json</code> ou em{' '}
                <code className="font-mono">src/firebaseConfig.ts</code>.
              </p>
            </div>
          )}

          {/* Main Card */}
          <div className="rounded-lg border border-[#E9E9E7] dark:border-[#2F2F2F] bg-white dark:bg-[#202020] p-5 sm:p-6 shadow-sm space-y-5">
            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 gap-1 rounded-md border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5] dark:bg-[#191919] p-1">
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setErrorState(null);
                }}
                className={`flex items-center justify-center gap-1.5 rounded px-3 py-2 text-xs font-semibold transition-colors cursor-pointer min-h-[40px] ${
                  mode === 'login'
                    ? 'bg-white dark:bg-[#2A2A2A] text-[#37352F] dark:text-[#EDEDED] shadow-xs'
                    : 'text-[#787774] dark:text-[#9B9A97] hover:text-[#37352F] dark:hover:text-[#EDEDED]'
                }`}
              >
                <LogIn className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Entrar</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode('register');
                  setErrorState(null);
                }}
                className={`flex items-center justify-center gap-1.5 rounded px-3 py-2 text-xs font-semibold transition-colors cursor-pointer min-h-[40px] ${
                  mode === 'register'
                    ? 'bg-white dark:bg-[#2A2A2A] text-[#37352F] dark:text-[#EDEDED] shadow-xs'
                    : 'text-[#787774] dark:text-[#9B9A97] hover:text-[#37352F] dark:hover:text-[#EDEDED]'
                }`}
              >
                <UserPlus className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Criar conta</span>
              </button>
            </div>

            {errorState && (
              <div
                role="alert"
                className="rounded-lg border border-rose-500/40 bg-rose-500/10 p-3.5 text-xs leading-relaxed text-rose-800 dark:text-rose-200 space-y-2"
              >
                <p className="font-medium">{errorState.message}</p>
                {errorState.showProviderGuide && (
                  <div className="pt-1 border-t border-rose-500/20 text-[11px] space-y-1">
                    <p>
                      Para ativar: acesse o Console do Firebase → <strong>Authentication</strong> →{' '}
                      <strong>Sign-in method</strong> → habilite <strong>E-mail/senha</strong>.
                    </p>
                    <p className="font-mono break-all opacity-80">{projectConsoleUrl}</p>
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="auth-display-name"
                      className="block text-xs font-medium text-[#37352F] dark:text-[#D4D4D4]"
                    >
                      Nome de exibição
                    </label>
                    <input
                      id="auth-display-name"
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Como seu nome aparecerá no Ranking"
                      maxLength={80}
                      required
                      className="w-full rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5]/60 dark:bg-[#191919] px-3 py-2.5 text-sm text-[#37352F] dark:text-[#EDEDED] placeholder:text-[#9B9A97] focus:border-sky-500 focus:outline-none min-h-[44px]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="block text-xs font-medium text-[#37352F] dark:text-[#D4D4D4]">
                      Escolha um avatar
                    </span>
                    <div className="grid grid-cols-8 gap-1.5">
                      {AVATAR_OPTIONS.map((emoji) => {
                        const selected = avatar === emoji;
                        return (
                          <button
                            key={emoji}
                            type="button"
                            onClick={() => setAvatar(emoji)}
                            aria-label={`Selecionar avatar ${emoji}`}
                            aria-pressed={selected}
                            className={`flex h-10 items-center justify-center rounded-md border text-lg transition-colors cursor-pointer ${
                              selected
                                ? 'border-sky-600 bg-sky-500/15 dark:border-sky-400'
                                : 'border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5]/60 dark:bg-[#191919] hover:border-[#C7C6C2] dark:hover:border-[#4A4A4A]'
                            }`}
                          >
                            {emoji}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-1.5">
                <label
                  htmlFor="auth-email"
                  className="block text-xs font-medium text-[#37352F] dark:text-[#D4D4D4]"
                >
                  E-mail
                </label>
                <input
                  id="auth-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@exemplo.com"
                  required
                  className="w-full rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5]/60 dark:bg-[#191919] px-3 py-2.5 text-sm text-[#37352F] dark:text-[#EDEDED] placeholder:text-[#9B9A97] focus:border-sky-500 focus:outline-none min-h-[44px]"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="auth-password"
                  className="block text-xs font-medium text-[#37352F] dark:text-[#D4D4D4]"
                >
                  Senha
                </label>
                <input
                  id="auth-password"
                  type="password"
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'register' ? 'Mínimo de 6 caracteres' : 'Sua senha'}
                  minLength={6}
                  required
                  className="w-full rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5]/60 dark:bg-[#191919] px-3 py-2.5 text-sm text-[#37352F] dark:text-[#EDEDED] placeholder:text-[#9B9A97] focus:border-sky-500 focus:outline-none min-h-[44px]"
                />
              </div>

              <label className="flex items-center gap-2.5 text-xs text-[#5F5E5B] dark:text-[#B5B5B5] cursor-pointer select-none py-1">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={rememberSession}
                  onClick={() => setRememberSession((prev) => !prev)}
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    rememberSession
                      ? 'border-sky-600 bg-sky-600 text-white dark:border-sky-500 dark:bg-sky-500 dark:text-slate-950'
                      : 'border-[#C7C6C2] dark:border-[#4A4A4A] bg-transparent'
                  }`}
                >
                  {rememberSession && <Check className="h-3 w-3 stroke-[2.5]" />}
                </button>
                <span>Lembrar sessão neste aparelho (ideal para o celular)</span>
              </label>

              <button
                type="submit"
                disabled={submitting || googleSubmitting || !isFirebaseConfigured}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-[46px]"
              >
                {submitting
                  ? mode === 'login'
                    ? 'Entrando...'
                    : 'Criando conta...'
                  : mode === 'login'
                  ? 'Entrar com E-mail'
                  : 'Criar conta e iniciar estudos'}
              </button>
            </form>

            {/* Divider + Google Sign-In */}
            <div className="relative flex items-center py-1">
              <div className="flex-grow border-t border-[#E9E9E7] dark:border-[#2F2F2F]" />
              <span className="mx-3 text-[11px] text-[#787774] dark:text-[#8E8E8E]">ou</span>
              <div className="flex-grow border-t border-[#E9E9E7] dark:border-[#2F2F2F]" />
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={submitting || googleSubmitting || !isFirebaseConfigured}
              className="w-full flex items-center justify-center gap-2 rounded-md border border-[#E9E9E7] dark:border-[#333333] bg-[#F7F7F5] dark:bg-[#252525] px-4 py-2.5 text-sm font-medium text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500/50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
                />
              </svg>
              <span>{googleSubmitting ? 'Conectando...' : 'Entrar com Google'}</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
