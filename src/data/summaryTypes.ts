export type BadgeTone = 'rose' | 'amber' | 'emerald' | 'sky';

export interface TopicTable {
  title?: string;
  headers: string[];
  rows: string[][];
}

export interface TopicExample {
  title: string;
  scenario: string;
}

export interface TopicKeyPoint {
  label: string;
  text: string;
  badge?: {
    text: string;
    tone: BadgeTone;
  };
}

export interface TopicDeepDive {
  headline: string;
  points: string[];
  extraExample: string;
  mnemonic: string;
}

export interface TopicStudyContent {
  /** 1. A Realidade Nua e Crua (explicação detalhada, sem filtro e com negrito estratégico) */
  realityTitle?: string;
  realityParagraphs: string[];
  keyPoints: TopicKeyPoint[];
  /** 2. Na Prática (pelo menos 2 exemplos concretos e situacionais) */
  practicalExamples: TopicExample[];
  /** 3. Tabela Comparativa Visual (obrigatória em todos os tópicos) */
  table: TopicTable;
  /** 4. Callout de Pegadinha de Banca */
  examTrap: string;
  /** 5. Botão discreto "Destrinchar mais esse assunto" */
  deepDive: TopicDeepDive;
  isFullModule?: boolean;
}
