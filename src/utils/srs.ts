export type QuestionSrsStatus =
  | 'inedita'
  | 'erro'
  | 'revisar'
  | 'em_progresso'
  | 'dominada';

export type SrsItemType = 'question' | 'flashcard' | 'trap';

export type SrsOutcome = 'hit' | 'miss' | 'review_later';

export interface QuestionProgressRecord {
  id: string;
  itemType: SrsItemType;
  disciplineId: string;
  topicCode: string;
  status: QuestionSrsStatus;
  acertosConsecutivos: 0 | 1 | 2 | 3;
  totalAcertos: number;
  totalErros: number;
  lastUpdatedAt: number;
}

export interface QuestionAttempt {
  id: string;
  disciplineId: string;
  topicCode: string;
  isCorrect: boolean;
  source: 'questao' | 'simulado' | 'sprint' | 'pegadinha' | 'flashcard' | 'erros' | 'acertos';
  timestamp: number;
}

export interface SrsItemMeta {
  id: string;
  itemType: SrsItemType;
  disciplineId: string;
  topicCode: string;
}

export function applySrsOutcome(
  prev: QuestionProgressRecord | undefined,
  meta: SrsItemMeta,
  outcome: SrsOutcome
): QuestionProgressRecord {
  const baseAcertos = prev?.totalAcertos ?? 0;
  const baseErros = prev?.totalErros ?? 0;
  const baseStreak = prev?.acertosConsecutivos ?? 0;

  if (outcome === 'miss') {
    return {
      ...meta,
      status: 'erro',
      acertosConsecutivos: 0,
      totalAcertos: baseAcertos,
      totalErros: baseErros + 1,
      lastUpdatedAt: Date.now(),
    };
  }

  if (outcome === 'review_later') {
    return {
      ...meta,
      status: 'revisar',
      acertosConsecutivos: 0,
      totalAcertos: baseAcertos,
      totalErros: baseErros,
      lastUpdatedAt: Date.now(),
    };
  }

  const nextStreak = Math.min(3, baseStreak + 1) as 0 | 1 | 2 | 3;
  return {
    ...meta,
    status: nextStreak >= 3 ? 'dominada' : 'em_progresso',
    acertosConsecutivos: nextStreak,
    totalAcertos: baseAcertos + 1,
    totalErros: baseErros,
    lastUpdatedAt: Date.now(),
  };
}

export function getItemStatus(
  progressMap: Record<string, QuestionProgressRecord>,
  id: string
): QuestionSrsStatus {
  return progressMap[id]?.status ?? 'inedita';
}

export function isErrorNotebookStatus(status: QuestionSrsStatus): boolean {
  return status === 'erro' || status === 'revisar';
}

export function getStatusLabel(record?: QuestionProgressRecord): string {
  if (!record || record.status === 'inedita') return 'Inédita';
  if (record.status === 'erro') return 'Caderno de Erros (0/3)';
  if (record.status === 'revisar') return 'Revisar Depois (0/3)';
  if (record.status === 'em_progresso') {
    return `Em progresso (${record.acertosConsecutivos}/3)`;
  }
  return 'Dominada (3/3)';
}

function shuffleLocal<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Excludes already mastered (`dominada`) items and prioritizes:
 * 1) `inedita` (never answered / reset)
 * 2) `em_progresso` (1-2 consecutive hits)
 * 3) `erro` / `revisar` (active in error notebook, if still in pool)
 */
export function selectSmartItems<T extends { id: string }>(
  items: T[],
  progressMap: Record<string, QuestionProgressRecord>,
  options?: { shuffleWithinBuckets?: boolean }
): T[] {
  const shuffleBuckets = options?.shuffleWithinBuckets ?? true;
  const inedita: T[] = [];
  const emProgresso: T[] = [];
  const erroOuRevisar: T[] = [];

  for (const item of items) {
    const status = getItemStatus(progressMap, item.id);
    if (status === 'dominada') continue;
    if (status === 'inedita') inedita.push(item);
    else if (status === 'em_progresso') emProgresso.push(item);
    else erroOuRevisar.push(item);
  }

  if (shuffleBuckets) {
    return [
      ...shuffleLocal(inedita),
      ...shuffleLocal(emProgresso),
      ...shuffleLocal(erroOuRevisar),
    ];
  }

  return [...inedita, ...emProgresso, ...erroOuRevisar];
}

export interface SrsSummaryCounts {
  total: number;
  ineditas: number;
  emProgresso: number;
  erros: number;
  dominadas: number;
}

export function getSrsSummaryCounts<T extends { id: string }>(
  items: T[],
  progressMap: Record<string, QuestionProgressRecord>
): SrsSummaryCounts {
  let ineditas = 0;
  let emProgresso = 0;
  let erros = 0;
  let dominadas = 0;

  for (const item of items) {
    const status = getItemStatus(progressMap, item.id);
    if (status === 'inedita') ineditas += 1;
    else if (status === 'em_progresso') emProgresso += 1;
    else if (status === 'erro' || status === 'revisar') erros += 1;
    else if (status === 'dominada') dominadas += 1;
  }

  return {
    total: items.length,
    ineditas,
    emProgresso,
    erros,
    dominadas,
  };
}
