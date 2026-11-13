export type KnowledgeBlock = 'Conhecimentos Gerais' | 'Conhecimentos Específicos';
export type TopicPriority = 'Alta' | 'Média' | 'Essencial';

export interface SyllabusTopic {
  id: string;
  title: string;
  disciplineId: string;
  priority: TopicPriority;
  hasStudyGuide?: boolean;
}

export interface Discipline {
  id: string;
  code: string;
  name: string;
  block: KnowledgeBlock;
  weightNote: string;
  topics: SyllabusTopic[];
}

export const EXAM_INFO = {
  role: 'Agente Administrativo',
  institution: 'Prefeitura Municipal de Curitiba',
  examDateISO: '2026-12-13',
  examDateFormatted: '13/12/2026',
  cycleDays: 30,
  methodology: 'Ciclo 80/20 · Teoria Direta + Questões Comentadas',
};

export const DISCIPLINES: Discipline[] = [
  {
    id: '1.1',
    code: '1.1',
    name: 'Língua Portuguesa',
    block: 'Conhecimentos Gerais',
    weightNote: 'Interpretação, coesão e gramática aplicada são presença garantida em prova.',
    topics: [
      { id: '1.1.1', disciplineId: '1.1', priority: 'Alta', hasStudyGuide: true, title: 'Análise e interpretação de texto: compreensão global; ponto de vista do autor; ideias centrais por parágrafo; inferências.' },
      { id: '1.1.2', disciplineId: '1.1', priority: 'Média', title: 'Comunicação, linguagem e variações linguísticas.' },
      { id: '1.1.3', disciplineId: '1.1', priority: 'Alta', title: 'Gêneros e tipologias textuais.' },
      { id: '1.1.4', disciplineId: '1.1', priority: 'Alta', hasStudyGuide: true, title: 'Elementos de coesão e coerência textual.' },
      { id: '1.1.5', disciplineId: '1.1', priority: 'Média', title: 'Ortografia oficial: acentuação gráfica, letra e fonema, sílaba, encontros vocálicos e consonantais, dígrafos.' },
      { id: '1.1.6', disciplineId: '1.1', priority: 'Alta', title: 'Emprego das classes de palavras.' },
      { id: '1.1.7', disciplineId: '1.1', priority: 'Média', title: 'Semântica: sinônimos e antônimos, significação das palavras, sentido conotativo e denotativo.' },
      { id: '1.1.8', disciplineId: '1.1', priority: 'Média', title: 'Funções sintáticas.' },
      { id: '1.1.9', disciplineId: '1.1', priority: 'Alta', title: 'Concordâncias nominal e verbal.' },
      { id: '1.1.10', disciplineId: '1.1', priority: 'Alta', title: 'Pontuação.' },
      { id: '1.1.11', disciplineId: '1.1', priority: 'Essencial', title: 'Uso dos porquês.' },
      { id: '1.1.12', disciplineId: '1.1', priority: 'Média', title: 'Literatura Brasileira: prosa e poesia, autores e obras, figuras de linguagem.' },
    ],
  },
  {
    id: '1.2',
    code: '1.2',
    name: 'Raciocínio Lógico',
    block: 'Conhecimentos Gerais',
    weightNote: 'Proporção, porcentagem, estatística básica e resolução de problemas concentram os pontos.',
    topics: [
      { id: '1.2.1', disciplineId: '1.2', priority: 'Essencial', title: 'As quatro operações fundamentais.' },
      { id: '1.2.2', disciplineId: '1.2', priority: 'Média', title: 'Comparações, arredondamentos, aproximações e estimativas.' },
      { id: '1.2.3', disciplineId: '1.2', priority: 'Média', title: 'Teoremas de Tales.' },
      { id: '1.2.4', disciplineId: '1.2', priority: 'Média', title: 'Comprimento da circunferência.' },
      { id: '1.2.5', disciplineId: '1.2', priority: 'Alta', title: 'Cálculo de área: triângulos, retângulos e círculos.' },
      { id: '1.2.6', disciplineId: '1.2', priority: 'Média', title: 'Medidas de superfícies.' },
      { id: '1.2.7', disciplineId: '1.2', priority: 'Média', title: 'Noções de direção: norte, sul, leste e oeste, esquerda e direita, para cima e para baixo.' },
      { id: '1.2.8', disciplineId: '1.2', priority: 'Alta', title: 'Estatística: média, moda e mediana.' },
      { id: '1.2.9', disciplineId: '1.2', priority: 'Alta', title: 'Dados, tabelas, gráficos e suas interpretações.' },
      { id: '1.2.10', disciplineId: '1.2', priority: 'Alta', title: 'Sequência de números, figuras e letras.' },
      { id: '1.2.11', disciplineId: '1.2', priority: 'Alta', title: 'Sequências lógicas.' },
      { id: '1.2.12', disciplineId: '1.2', priority: 'Média', title: 'Probabilidade: certeza e impossibilidade, fenômenos aleatórios, espaço amostral e evento.' },
      { id: '1.2.13', disciplineId: '1.2', priority: 'Média', title: 'Eventos dependentes e independentes.' },
      { id: '1.2.14', disciplineId: '1.2', priority: 'Média', title: 'Probabilidades da união e interseção.' },
      { id: '1.2.15', disciplineId: '1.2', priority: 'Alta', hasStudyGuide: true, title: 'Grandezas direta e inversamente proporcionais.' },
      { id: '1.2.16', disciplineId: '1.2', priority: 'Alta', hasStudyGuide: true, title: 'Razão e proporção.' },
      { id: '1.2.17', disciplineId: '1.2', priority: 'Alta', hasStudyGuide: true, title: 'Regra de três simples e composta.' },
      { id: '1.2.18', disciplineId: '1.2', priority: 'Alta', hasStudyGuide: true, title: 'Matemática financeira: sistema monetário brasileiro, porcentagem, juros simples.' },
      { id: '1.2.19', disciplineId: '1.2', priority: 'Alta', title: 'Resolução de problemas.' },
    ],
  },
  {
    id: '1.3',
    code: '1.3',
    name: 'Noções de Informática',
    block: 'Conhecimentos Gerais',
    weightNote: 'Atalhos, Excel 2016, Word 2016, segurança e nuvem aparecem na rotina administrativa.',
    topics: [
      { id: '1.3.1', disciplineId: '1.3', priority: 'Essencial', title: 'Conceitos de informática.' },
      { id: '1.3.2', disciplineId: '1.3', priority: 'Essencial', title: 'Hardware de entrada e saída.' },
      { id: '1.3.3', disciplineId: '1.3', priority: 'Essencial', title: 'Software.' },
      { id: '1.3.4', disciplineId: '1.3', priority: 'Alta', title: 'Atalhos de teclado.' },
      { id: '1.3.5', disciplineId: '1.3', priority: 'Alta', title: 'Gerenciamento de arquivos.' },
      { id: '1.3.6', disciplineId: '1.3', priority: 'Alta', title: 'Segurança de dados.' },
      { id: '1.3.7', disciplineId: '1.3', priority: 'Média', title: 'Ambientes operacionais: Windows 10 e 11 e Linux Ubuntu.' },
      { id: '1.3.8', disciplineId: '1.3', priority: 'Alta', title: 'Processador de texto: Word 2016.' },
      { id: '1.3.9', disciplineId: '1.3', priority: 'Alta', title: 'Planilhas eletrônicas: Excel 2016.' },
      { id: '1.3.10', disciplineId: '1.3', priority: 'Média', title: 'Navegadores de Internet.' },
      { id: '1.3.11', disciplineId: '1.3', priority: 'Média', title: 'Armazenamento externo e ferramentas de gerenciamento e compartilhamento em nuvem: Google Drive.' },
      { id: '1.3.12', disciplineId: '1.3', priority: 'Média', title: 'E-mails: Outlook, Gmail, Webmail (Zimbra).' },
      { id: '1.3.13', disciplineId: '1.3', priority: 'Média', title: 'Busca e pesquisa na Web.' },
      { id: '1.3.14', disciplineId: '1.3', priority: 'Média', title: 'Inteligência artificial e ferramentas generativas de texto: ChatGPT, Copilot, Gemini.' },
    ],
  },
  {
    id: '1.4',
    code: '1.4',
    name: 'Legislação',
    block: 'Conhecimentos Gerais',
    weightNote: 'Normas municipais de Curitiba e leis federais de transparência e improbidade são diferenciais decisivos.',
    topics: [
      { id: '1.4.1', disciplineId: '1.4', priority: 'Alta', hasStudyGuide: true, title: 'Lei Orgânica do Município de Curitiba (10/04/1990) e alterações: organização político-administrativa.' },
      { id: '1.4.2', disciplineId: '1.4', priority: 'Alta', hasStudyGuide: true, title: 'Lei Municipal nº 1.656/1958 e alterações: Estatuto dos Funcionários Públicos Municipais.' },
      { id: '1.4.3', disciplineId: '1.4', priority: 'Alta', hasStudyGuide: true, title: 'Lei Municipal nº 7.671/1991 e alterações: Organização Administrativa do Poder Executivo de Curitiba.' },
      { id: '1.4.4', disciplineId: '1.4', priority: 'Alta', title: 'Constituição Federal de 1988: Título I (arts. 1º ao 4º); Título II (arts. 5º ao 17); Título III (arts. 18, 19, 29, 30, 37 ao 41); Título IV (arts. 44 ao 75).' },
      { id: '1.4.5', disciplineId: '1.4', priority: 'Alta', title: 'Lei Federal nº 8.429/1992 e Lei Federal nº 14.230/2021: improbidade administrativa.' },
      { id: '1.4.6', disciplineId: '1.4', priority: 'Alta', title: 'Lei Federal nº 12.527/2011: acesso à informação (LAI).' },
      { id: '1.4.7', disciplineId: '1.4', priority: 'Média', title: 'Lei Federal nº 10.048/2000 e alterações: prioridade de atendimento às pessoas.' },
      { id: '1.4.8', disciplineId: '1.4', priority: 'Média', title: 'Lei Federal nº 8.069/1990: Estatuto da Criança e do Adolescente (ECA) – Disposições Preliminares e Direitos Fundamentais.' },
      { id: '1.4.9', disciplineId: '1.4', priority: 'Média', title: 'Decreto-Lei Federal nº 4.657/1942: LINDB (artigos 20 ao 30).' },
      { id: '1.4.10', disciplineId: '1.4', priority: 'Alta', title: 'Lei Federal nº 13.709/2018: Lei Geral de Proteção de Dados Pessoais (LGPD), Capítulo IV.' },
    ],
  },
  {
    id: '2.1',
    code: '2.1',
    name: 'Fundamentos da Administração Pública',
    block: 'Conhecimentos Específicos',
    weightNote: 'Base conceitual do cargo: funções administrativas (PODC), processos e gestão pública.',
    topics: [
      { id: '2.1.1', disciplineId: '2.1', priority: 'Alta', title: 'Fundamentos da Administração Pública: conceitos, princípios e organização.' },
      { id: '2.1.2', disciplineId: '2.1', priority: 'Alta', title: 'Planejamento, organização, direção e controle.' },
      { id: '2.1.3', disciplineId: '2.1', priority: 'Alta', title: 'Processos administrativos: conceitos, princípios, fases e modalidades.' },
      { id: '2.1.4', disciplineId: '2.1', priority: 'Média', title: 'Organização do ambiente de trabalho.' },
      { id: '2.1.5', disciplineId: '2.1', priority: 'Média', title: 'Gestão de pessoas.' },
      { id: '2.1.6', disciplineId: '2.1', priority: 'Média', title: 'Orçamento público.' },
    ],
  },
  {
    id: '2.2',
    code: '2.2',
    name: 'Direito Administrativo',
    block: 'Conhecimentos Específicos',
    weightNote: 'Atos administrativos, Nova Lei de Licitações (14.133/21) e Processo Municipal de Curitiba (16.466/24).',
    topics: [
      { id: '2.2.1', disciplineId: '2.2', priority: 'Alta', title: 'Atos administrativos.' },
      { id: '2.2.2', disciplineId: '2.2', priority: 'Média', title: 'Bens públicos.' },
      { id: '2.2.3', disciplineId: '2.2', priority: 'Alta', title: 'Serviços públicos.' },
      { id: '2.2.4', disciplineId: '2.2', priority: 'Alta', hasStudyGuide: true, title: 'Lei Federal nº 14.133/2021 e alterações: licitações e contratos administrativos.' },
      { id: '2.2.5', disciplineId: '2.2', priority: 'Alta', title: 'Lei Municipal nº 16.466/2024 e alterações: processo administrativo na Administração Pública Municipal de Curitiba.' },
      { id: '2.2.6', disciplineId: '2.2', priority: 'Alta', title: 'Lei Municipal nº 1.656/1958 e alterações: processo administrativo disciplinar (PAD) em Curitiba.' },
      { id: '2.2.7', disciplineId: '2.2', priority: 'Alta', title: 'CF/88 e Lei Federal nº 8.429/1992: responsabilidade dos agentes públicos e improbidade administrativa.' },
    ],
  },
  {
    id: '2.3',
    code: '2.3',
    name: 'Direito Constitucional',
    block: 'Conhecimentos Específicos',
    weightNote: 'Art. 5º e Art. 37 ao 41 da CF/88 formam o núcleo duro de Direito Constitucional para servidores.',
    topics: [
      { id: '2.3.1', disciplineId: '2.3', priority: 'Essencial', title: 'Princípios fundamentais.' },
      { id: '2.3.2', disciplineId: '2.3', priority: 'Alta', title: 'Direitos e garantias fundamentais.' },
      { id: '2.3.3', disciplineId: '2.3', priority: 'Média', title: 'Poder constituinte.' },
      { id: '2.3.4', disciplineId: '2.3', priority: 'Média', title: 'Normas constitucionais e hierarquia das normas.' },
      { id: '2.3.5', disciplineId: '2.3', priority: 'Média', title: 'Interpretação constitucional.' },
      { id: '2.3.6', disciplineId: '2.3', priority: 'Alta', title: 'Administração Pública na Constituição Federal.' },
    ],
  },
  {
    id: '2.4',
    code: '2.4',
    name: 'Ética, Relacionamento e Atendimento',
    block: 'Conhecimentos Específicos',
    weightNote: 'Lei 13.460/2017 e ética no atendimento ao cidadão têm alto retorno com estudo rápido.',
    topics: [
      { id: '2.4.1', disciplineId: '2.4', priority: 'Alta', title: 'Ética, integridade, transparência e conflitos de interesses.' },
      { id: '2.4.2', disciplineId: '2.4', priority: 'Média', title: 'Relações interpessoais.' },
      { id: '2.4.3', disciplineId: '2.4', priority: 'Alta', title: 'Lei Federal nº 13.460/2017 e alterações: defesa dos direitos do usuário dos serviços públicos.' },
      { id: '2.4.4', disciplineId: '2.4', priority: 'Média', title: 'Comunicação.' },
    ],
  },
  {
    id: '2.5',
    code: '2.5',
    name: 'Gestão da Informação e Arquivologia',
    block: 'Conhecimentos Específicos',
    weightNote: 'Três idades documentais, Lei 8.159/1991 e Redação Oficial são temas certos para Agente Administrativo.',
    topics: [
      { id: '2.5.1', disciplineId: '2.5', priority: 'Média', title: 'Sistemas de informação organizacional.' },
      { id: '2.5.2', disciplineId: '2.5', priority: 'Alta', hasStudyGuide: true, title: 'Arquivologia: conceitos, princípios e gestão documental. Lei Federal nº 8.159/1991 (Política nacional de arquivos).' },
      { id: '2.5.3', disciplineId: '2.5', priority: 'Média', title: 'Correspondência comercial.' },
      { id: '2.5.4', disciplineId: '2.5', priority: 'Alta', hasStudyGuide: true, title: 'Redação oficial.' },
    ],
  },
];

export const ALL_TOPICS: SyllabusTopic[] = DISCIPLINES.flatMap((d) => d.topics);

export const TOPIC_MAP: Record<string, SyllabusTopic & { disciplineName: string; block: KnowledgeBlock }> =
  DISCIPLINES.reduce((acc, d) => {
    for (const topic of d.topics) {
      acc[topic.id] = {
        ...topic,
        disciplineName: d.name,
        block: d.block,
      };
    }
    return acc;
  }, {} as Record<string, SyllabusTopic & { disciplineName: string; block: KnowledgeBlock }>);
