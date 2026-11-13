import type { PracticeQuestion } from './questions';

export const SPECIFIC_QUESTIONS: PracticeQuestion[] = [
  // ==========================================
  // 2.1 FUNDAMENTOS DA ADMINISTRAÇÃO PÚBLICA (15 questões)
  // ==========================================
  {
    id: 'q-adm-1',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.2',
    statement:
      'No ciclo das funções administrativas (PODC), a função responsável por definir objetivos futuros, traçar metas e escolher os meios antecipados para atingi-los é o(a):',
    options: ['Organização.', 'Direção.', 'Planejamento.', 'Controle.'],
    correctIndex: 2,
    explanation:
      'Planejamento define objetivos e estratégias antecipadamente; Organização estrutura recursos; Direção lidera/motiva; Controle mede e corrige desvios.',
  },
  {
    id: 'q-adm-2',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.6',
    statement:
      'No orçamento público brasileiro, a lei que estabelece de forma regionalizada as diretrizes, objetivos e metas da Administração Pública para as despesas de capital e programas de duração continuada (com vigência de 4 anos) é a:',
    options: [
      'Lei Orçamentária Anual (LOA).',
      'Lei de Diretrizes Orçamentárias (LDO).',
      'Lei do Plano Plurianual (PPA).',
      'Lei de Responsabilidade Fiscal (LRF).',
    ],
    correctIndex: 2,
    explanation:
      'PPA = planejamento estratégico de 4 anos (DOM: Diretrizes, Objetivos e Metas). LDO = metas anuais que orientam a LOA. LOA = orçamento anual executivo.',
  },
  {
    id: 'q-adm-3',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.1',
    statement:
      'Quando a Prefeitura de Curitiba cria uma nova Secretaria Municipal dentro da própria pessoa jurídica do Município, ocorre o fenômeno administrativo da:',
    options: [
      'Descentralização por outorga.',
      'Desconcentração administrativa.',
      'Concessão de serviço público.',
      'Privatização funcional.',
    ],
    correctIndex: 1,
    explanation:
      'Desconcentração é a distribuição interna de competências dentro da mesma pessoa jurídica (criação de órgãos/secretarias, sem personalidade jurídica própria).',
  },
  {
    id: 'q-adm-4',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.4',
    statement:
      'Na metodologia 5S aplicada à organização do ambiente de trabalho em repartições públicas, o senso que consiste em separar o que é útil do que é desnecessário e descartar excessos é o:',
    options: [
      'Seiton (Organização).',
      'Seiri (Utilização).',
      'Seiso (Limpeza).',
      'Shitsuke (Disciplina).',
    ],
    correctIndex: 1,
    explanation:
      'Seiri (Senso de Utilização) elimina itens desnecessários do ambiente de trabalho; Seiton ordena o que ficou útil.',
  },
  {
    id: 'q-adm-5',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.5',
    statement:
      'Segundo a Teoria dos Dois Fatores de Herzberg na gestão de pessoas, fatores como salário, segurança no trabalho e condições físicas da sala são classificados como:',
    options: [
      'Fatores motivacionais intrínsecos.',
      'Fatores higiênicos (evitam insatisfação, mas por si sós não geram motivação duradoura).',
      'Necessidades de autorrealização.',
      'Indicadores de controle estratégico.',
    ],
    correctIndex: 1,
    explanation:
      'Em Herzberg, condições externas (salário, ambiente físico, política da organização) são fatores higiênicos; reconhecimento, responsabilidade e crescimento são motivacionais.',
  },
  {
    id: 'q-adm-6',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.3',
    statement:
      'Entre os princípios típicos do processo administrativo está o da oficialidade, que significa que:',
    options: [
      'Somente um advogado pode protocolar requerimento na Prefeitura.',
      'A Administração tem o poder-dever de impulsionar o processo até a decisão final, independentemente de provocação constante do interessado.',
      'O processo administrativo deve correr obrigatoriamente em sigilo absoluto.',
      'As provas documentais são dispensadas em qualquer hipótese.',
    ],
    correctIndex: 1,
    explanation:
      'Pelo princípio da oficialidade (impulso oficial), instaurado o processo, cabe à Administração movimentá-lo até sua conclusão.',
  },
  {
    id: 'q-adm-7',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.1',
    statement:
      'Na Administração Pública, a diferença fundamental entre o princípio da legalidade aplicado ao particular e o aplicado ao servidor público reside no fato de que o agente público:',
    options: [
      'Pode fazer tudo o que a lei não proíbe.',
      'Só pode fazer o que a lei autoriza ou determina.',
      'Fica dispensado de observar decretos regulamentares.',
      'Decide conforme sua convicção moral pessoal, acima da lei.',
    ],
    correctIndex: 1,
    explanation:
      'Pela legalidade estrita administrativa, o agente público só atua mediante previsão ou autorização legal (diferente do particular, regido pela autonomia da vontade).',
  },
  {
    id: 'q-adm-8',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.2',
    statement:
      'A elaboração de um organograma definindo chefias, subordinação e divisão de departamentos em uma repartição pública materializa diretamente qual função do processo administrativo?',
    options: ['Planejamento.', 'Organização.', 'Direção.', 'Controle.'],
    correctIndex: 1,
    explanation:
      'Organização estrutura formalmente os cargos, órgãos, autoridade e recursos da instituição (representada graficamente pelo organograma).',
  },
  {
    id: 'q-adm-9',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.2',
    statement:
      'Comparar o número real de processos analisados no mês com a meta previamente estabelecida e adotar medidas corretivas nos gargalos refere-se à função administrativa de:',
    options: ['Direção.', 'Organização.', 'Controle.', 'Desconcentração.'],
    correctIndex: 2,
    explanation:
      'Controle consiste em estabelecer padrões, medir o desempenho real, comparar com o planejado e corrigir desvios.',
  },
  {
    id: 'q-adm-10',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.5',
    statement:
      'Na gestão por competências no setor público, a sigla CHA representa os três componentes essenciais do desempenho funcional, que são:',
    options: [
      'Cargos, Hierarquia e Autoridade.',
      'Conhecimentos, Habilidades e Atitudes.',
      'Controle, Harmonia e Avaliação.',
      'Comunicação, Honestidade e Agilidade.',
    ],
    correctIndex: 1,
    explanation:
      'CHA = Conhecimentos (saber), Habilidades (saber fazer) e Atitudes (querer fazer / postura ética).',
  },
  {
    id: 'q-adm-11',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.6',
    statement:
      'Qual princípio orçamentário determina que a Lei Orçamentária Anual (LOA) deve conter TODAS as receitas e TODAS as despesas do ente público em um único orçamento?',
    options: [
      'Princípio da Exclusividade.',
      'Princípio da Universalidade.',
      'Princípio da Anualidade.',
      'Princípio da Especialização.',
    ],
    correctIndex: 1,
    explanation:
      'Universalidade = todas as receitas e despesas devem constar no orçamento. Unidade = um orçamento único por ente. Exclusividade = a LOA só trata de previsão de receita e fixação de despesa.',
  },
  {
    id: 'q-adm-12',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.3',
    statement:
      'Em um processo administrativo, a fase em que se colhem provas, juntam-se documentos, ouvem-se testemunhas e emitem-se pareceres técnicos denomina-se:',
    options: ['Instauração.', 'Instrução.', 'Julgamento.', 'Execução.'],
    correctIndex: 1,
    explanation:
      'Na fase de Instrução produzem-se os elementos probatórios e técnicos que subsidiarão a decisão final da autoridade.',
  },
  {
    id: 'q-adm-13',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.4',
    statement:
      'No Programa 5S, o senso que padroniza procedimentos, normas visuais e etiquetas para manter os três sensos anteriores funcionando de forma contínua é o:',
    options: [
      'Seiri (Utilização).',
      'Seiso (Limpeza).',
      'Seiketsu (Padronização / Saúde).',
      'Seiton (Ordenação).',
    ],
    correctIndex: 2,
    explanation:
      'Seiketsu (4º S) padroniza rotinas visuais e normas de conservação para sustentar Utilização, Ordenação e Limpeza.',
  },
  {
    id: 'q-adm-14',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.6',
    statement:
      'Sobre a Lei de Diretrizes Orçamentárias (LDO), é correto afirmar que ela:',
    options: [
      'Tem vigência de 4 anos e substitui o PPA.',
      'Compreende as metas e prioridades da Administração e orienta a elaboração da Lei Orçamentária Anual (LOA).',
      'Não precisa ser aprovada pelo Poder Legislativo.',
      'Fixa as despesas mensais detalhadas de cada repartição sem previsão na LOA.',
    ],
    correctIndex: 1,
    explanation:
      'A LDO funciona como elo anual entre o planejamento de 4 anos (PPA) e a execução orçamentária anual (LOA).',
  },
  {
    id: 'q-adm-15',
    disciplineId: '2.1',
    discipline: 'Fundamentos da Administração Pública',
    topicCode: '2.1.5',
    statement:
      'Na hierarquia das necessidades de Abraham Maslow, a necessidade ligada ao reconhecimento profissional, prestígio e status dentro da organização pertence ao nível de:',
    options: ['Fisiologia.', 'Segurança.', 'Estima.', 'Autorrealização.'],
    correctIndex: 2,
    explanation:
      'Ordem da pirâmide de Maslow (base ao topo): Fisiológicas → Segurança → Sociais → Estima (reconhecimento) → Autorrealização.',
  },

  // ==========================================
  // 2.2 DIREITO ADMINISTRATIVO (15 questões)
  // ==========================================
  {
    id: 'q-dir-1',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.1',
    statement:
      'Um Agente Administrativo analisa os cinco elementos clássicos de validade do ato administrativo. Assinale a alternativa que apresenta apenas requisitos vinculados em qualquer ato administrativo, mesmo nos atos discricionários:',
    options: [
      'Motivo e Objeto.',
      'Competência, Finalidade e Forma.',
      'Competência, Motivo e Objeto.',
      'Autoexecutoriedade e Tipicidade.',
    ],
    correctIndex: 1,
    explanation:
      'No mnemônico CO-FI-FO-MO-OB, Competência, Finalidade e Forma são sempre elementos vinculados; a discricionariedade reside no Motivo e no Objeto.',
  },
  {
    id: 'q-dir-2',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.4',
    statement:
      'Na Nova Lei de Licitações (Lei nº 14.133/2021), para a aquisição de mobiliário padrão e materiais de escritório comuns pela Prefeitura, a modalidade licitatória adequada é:',
    options: ['Convite.', 'Tomada de Preços.', 'Pregão.', 'Concurso.'],
    correctIndex: 2,
    explanation:
      'Convite e Tomada de Preços foram extintos pela Lei nº 14.133/2021. Para aquisição de bens e serviços comuns, utiliza-se obrigatoriamente o Pregão.',
  },
  {
    id: 'q-dir-3',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.2',
    statement:
      'O prédio onde funciona a sede da Prefeitura Municipal de Curitiba e os veículos oficiais utilizados pelas secretarias classificam-se, segundo o Código Civil e o Direito Administrativo, como bens públicos:',
    options: [
      'De uso comum do povo.',
      'Dominicais.',
      'De uso especial.',
      'Particulares afetados.',
    ],
    correctIndex: 2,
    explanation:
      'Bens de uso especial são aqueles destinados à execução dos serviços administrativos e públicos em geral (repartições, escolas, hospitais, viaturas).',
  },
  {
    id: 'q-dir-4',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.5',
    statement:
      'Nos processos administrativos municipais (como prevê a Lei Municipal nº 16.466/2024 de Curitiba), a Administração deve observar os princípios da legalidade, motivação e ampla defesa. A motivação de decisões administrativas significa que:',
    options: [
      'A autoridade deve indicar os pressupostos de fato e de direito que determinaram a decisão.',
      'Apenas decisões que beneficiam o cidadão precisam ser fundamentadas.',
      'O processo só pode ser iniciado mediante advogado constituído.',
      'Os prazos correm somente após publicação em jornal nacional.',
    ],
    correctIndex: 0,
    explanation:
      'Motivar é expor por escrito os fatos ocorridos e a norma jurídica aplicada para justificar a decisão.',
  },
  {
    id: 'q-dir-5',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.4',
    statement:
      'Na Lei nº 14.133/2021, quando a Prefeitura precisa contratar um serviço técnico singular de profissional com notória especialização ou adquirir produto de fornecedor exclusivo (onde a competição é inviável), ocorre hipótese de:',
    options: [
      'Licitação deserta.',
      'Inexigibilidade de licitação.',
      'Dispensa de licitação por baixo valor.',
      'Leilão administrativo.',
    ],
    correctIndex: 1,
    explanation:
      'Quando a competição é inviável (fornecedor exclusivo, notória especialização, artista consagrado), trata-se de Inexigibilidade de licitação (art. 74).',
  },
  {
    id: 'q-dir-6',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.7',
    statement:
      'Um veículo oficial da Prefeitura, conduzido por servidor em serviço, colide com carro particular causando danos materiais. Conforme a responsabilidade civil do Estado (art. 37, § 6º da CF/88):',
    options: [
      'O Município responde objetivamente perante o particular e poderá acionar regressivamente o servidor se comprovar dolo ou culpa.',
      'O particular deve provar dolo do motorista para receber indenização do Município.',
      'O servidor responde objetivamente mesmo sem culpa.',
      'O Município não responde pelos atos de seus agentes em trânsito.',
    ],
    correctIndex: 0,
    explanation:
      'A responsabilidade do Estado é objetiva (risco administrativo); já a ação regressiva contra o servidor é subjetiva (exige prova de dolo ou culpa).',
  },
  {
    id: 'q-dir-7',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.1',
    statement:
      'O atributo do ato administrativo pelo qual a Administração pode executar materialmente suas próprias decisões usando meios diretos de coerção, sem precisar de autorização judicial prévia (nos casos previstos em lei ou urgência), denomina-se:',
    options: [
      'Tipicidade.',
      'Autoexecutoriedade.',
      'Presunção de veracidade.',
      'Irrevogabilidade.',
    ],
    correctIndex: 1,
    explanation:
      'Autoexecutoriedade permite à Administração executar diretamente suas decisões sem recorrer previamente ao Poder Judiciário (ex.: interdição de estabelecimento em risco sanitário).',
  },
  {
    id: 'q-dir-8',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.1',
    statement:
      'Quando a Administração Pública constata que um alvará foi expedido com vício insanável de ilegalidade, ela deve:',
    options: [
      'Revogar o ato com efeitos futuros (ex nunc).',
      'Anular o ato com efeitos retroativos (ex tunc), em exercício da autotutela.',
      'Convalidar o vício de finalidade ilícita.',
      'Aguardar o Judiciário declarar a revogação.',
    ],
    correctIndex: 1,
    explanation:
      'Atos ilegais devem ser ANULADOS (pela própria Administração via autotutela ou pelo Judiciário), gerando efeitos retroativos (ex tunc).',
  },
  {
    id: 'q-dir-9',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.4',
    statement:
      'Na Nova Lei de Licitações (Lei nº 14.133/2021), a modalidade destinada à alienação de bens imóveis ou de bens móveis inservíveis ou legalmente apreendidos a quem oferecer o maior lance é o:',
    options: ['Concurso.', 'Diálogo Competitivo.', 'Leilão.', 'Pregão.'],
    correctIndex: 2,
    explanation:
      'O Leilão (art. 6º, XL) é a modalidade própria para alienação de bens móveis inservíveis/apreendidos ou imóveis, pelo critério de maior lance.',
  },
  {
    id: 'q-dir-10',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.3',
    statement:
      'O princípio do serviço público que impede sua paralisação injustificada, exigindo atendimento regular e permanente à população, é o princípio da:',
    options: ['Modicidade tarifária.', 'Continuidade.', 'Mutabilidade.', 'Cortesia.'],
    correctIndex: 1,
    explanation:
      'Pelo princípio da continuidade, os serviços públicos essenciais não devem sofrer interrupção injustificada.',
  },
  {
    id: 'q-dir-11',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.2',
    statement:
      'Um terreno pertencente ao Município de Curitiba que não está afetado a nenhum serviço público específico (sem prédio público nem uso coletivo) classifica-se como bem:',
    options: ['De uso comum do povo.', 'De uso especial.', 'Dominical.', 'Particular privado.'],
    correctIndex: 2,
    explanation:
      'Bens dominicais constituem o patrimônio disponível do ente público, sem destinação pública atual (desafetados), podendo ser alienados cumpridos os requisitos legais.',
  },
  {
    id: 'q-dir-12',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.6',
    statement:
      'No Processo Administrativo Disciplinar (PAD) previsto na Lei Municipal nº 1.656/1958 de Curitiba, é garantia constitucional obrigatória antes da imposição de penalidade grave ao servidor:',
    options: [
      'A confissão prévia obrigatória.',
      'O contraditório e a ampla defesa.',
      'A dispensa de notificação do acusado.',
      'O sigilo contra o próprio servidor processado.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 5º, LV da CF/88 e o estatuto municipal asseguram ao servidor processado amplo direito de defesa e contraditório.',
  },
  {
    id: 'q-dir-13',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.4',
    statement:
      'Na Lei nº 14.133/2021, a contratação direta realizada em situações em que a competição até seria possível, mas a lei autoriza expressamente não licitar (como em compras de pequeno valor ou emergência), denomina-se:',
    options: [
      'Inexigibilidade de licitação.',
      'Dispensa de licitação.',
      'Licitação fracassada.',
      'Concorrência simplificada.',
    ],
    correctIndex: 1,
    explanation:
      'Na Dispensa (art. 75), a competição é viável, mas o legislador listou taxativamente hipóteses em que o gestor pode dispensar o certame.',
  },
  {
    id: 'q-dir-14',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.3',
    statement:
      'Quanto às formas de delegação de serviços públicos, a concessão difere da permissão porque a concessão:',
    options: [
      'É ato unilateral e precário, sem contrato.',
      'Formaliza-se por contrato bilateral, com prazo determinado, apenas a pessoa jurídica ou consórcio de empresas.',
      'Dispensa qualquer licitação prévia.',
      'Pode ser outorgada verbalmente a pessoa física.',
    ],
    correctIndex: 1,
    explanation:
      'Concessão é contrato administrativo bilateral e estável firmado com PJ/consórcio após licitação; Permissão (Lei 8.987/95) é contrato de adesão a título precário (PF ou PJ).',
  },
  {
    id: 'q-dir-15',
    disciplineId: '2.2',
    discipline: 'Direito Administrativo',
    topicCode: '2.2.5',
    statement:
      'Nos processos administrativos municipais (Lei nº 16.466/2024), quando a autoridade superior decide um processo declarando expressamente concordar com os fundamentos de parecer técnico ou jurídico anterior constante nos autos, tem-se a chamada:',
    options: [
      'Decisão imotivada nula.',
      'Motivação aliunde (ou per relationem), plenamente admitida.',
      'Revogação tácita.',
      'Preclusão absoluta.',
    ],
    correctIndex: 1,
    explanation:
      'A motivação aliunde (referenciada a pareceres ou decisões anteriores presentes nos autos) é válida e amplamente utilizada na rotina administrativa.',
  },

  // ==========================================
  // 2.3 DIREITO CONSTITUCIONAL (15 questões)
  // ==========================================
  {
    id: 'q-con-1',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.6',
    statement:
      'De acordo com o art. 37 da Constituição Federal, a investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para:',
    options: [
      'Cargos efetivos de nível médio.',
      'Cargos em comissão declarados em lei de livre nomeação e exoneração.',
      'Contratações permanentes por indicação de vereadores.',
      'Empregos públicos em sociedades de economia mista sem seleção.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 37, II da CF/88 excepciona da regra do concurso público exclusivamente os cargos em comissão (direção, chefia e assessoramento).',
  },
  {
    id: 'q-con-2',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.2',
    statement:
      'Um cidadão tem negado o acesso a informações públicas de interesse coletivo por uma repartição municipal, mesmo sem qualquer sigilo legal. Caso queira buscar proteção judicial urgente contra esse ato ilegal de autoridade, o remédio constitucional adequado é o:',
    options: [
      'Habeas Data.',
      'Mandado de Segurança.',
      'Habeas Corpus.',
      'Mandado de Injunção.',
    ],
    correctIndex: 1,
    explanation:
      'Habeas Data protege informações pessoais do próprio impetrante. Quando o direito líquido e certo envolve acesso a informação pública geral, o remédio cabível é o Mandado de Segurança.',
  },
  {
    id: 'q-con-3',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.1',
    statement:
      'São fundamentos da República Federativa do Brasil, previstos no art. 1º da Constituição Federal (mnemônico SO-CI-DI-VA-PLU):',
    options: [
      'Independência nacional, prevalência dos direitos humanos e autodeterminação dos povos.',
      'Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, e pluralismo político.',
      'Erradicar a pobreza, garantir o desenvolvimento nacional e construir uma sociedade livre.',
      'Legalidade, impessoalidade, moralidade, publicidade e eficiência.',
    ],
    correctIndex: 1,
    explanation:
      'Art. 1º = Fundamentos (SO-CI-DI-VA-PLU). Art. 3º = Objetivos fundamentais (verbos no infinitivo). Art. 4º = Relações internacionais.',
  },
  {
    id: 'q-con-4',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.6',
    statement:
      'Havendo compatibilidade de horários, a Constituição Federal permite a acumulação remunerada de cargos públicos na seguinte situação:',
    options: [
      'Dois cargos de Agente Administrativo em prefeituras vizinhas.',
      'Um cargo de professor com outro cargo técnico ou científico.',
      'Um cargo de técnico administrativo com um cargo de motorista oficial.',
      'Três cargos privativos de profissionais da saúde.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 37, XVI permite acumular (com compatibilidade de horários): 2 de professor; 1 de professor + 1 técnico/científico; ou 2 de profissionais da saúde.',
  },
  {
    id: 'q-con-5',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.3',
    statement:
      'Conforme o art. 60 da CF/88, NÃO poderá ser objeto de deliberação a proposta de emenda constitucional tendente a abolir (Cláusula Pétrea):',
    options: [
      'O número atual de secretarias municipais.',
      'Os direitos e garantias individuais.',
      'Alíquotas de impostos municipais.',
      'A duração do estágio probatório em estatutos locais.',
    ],
    correctIndex: 1,
    explanation:
      'São cláusulas pétreas (art. 60, § 4º): forma federativa de Estado; voto direto, secreto, universal e periódico; separação dos Poderes; e direitos e garantias individuais.',
  },
  {
    id: 'q-con-6',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.5',
    statement:
      'Quanto à aplicabilidade das normas constitucionais, o direito de greve do servidor público (que depende de lei específica para ser exercido plenamente) é exemplo clássico de norma de eficácia:',
    options: ['Plena.', 'Contida.', 'Limitada.', 'Exaurida.'],
    correctIndex: 2,
    explanation:
      'Normas de eficácia limitada dependem de regulamentação infraconstitucional futura para produzir todos os seus efeitos.',
  },
  {
    id: 'q-con-7',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.6',
    statement:
      'O prazo de validade do concurso público previsto no art. 37, III da Constituição Federal é de:',
    options: [
      'Até 1 ano, improrrogável.',
      'Até 2 anos, prorrogável uma vez, por igual período.',
      'Exatamente 4 anos desde o edital, sem prorrogação.',
      'Até 3 anos, prorrogável indefinidamente.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 37, III da CF/88 estabelece validade de até 2 anos, prorrogável uma única vez por igual período.',
  },
  {
    id: 'q-con-8',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.6',
    statement:
      'Segundo o art. 41 da Constituição Federal, são estáveis após quantos anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público?',
    options: ['1 ano.', '2 anos.', '3 anos (mediante avaliação especial de desempenho).', '5 anos.'],
    correctIndex: 2,
    explanation:
      'A estabilidade constitucional exige 3 anos de efetivo exercício em cargo efetivo + aprovação em avaliação especial de desempenho por comissão instituída para essa finalidade.',
  },
  {
    id: 'q-con-9',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.2',
    statement:
      'Qual remédio constitucional pode ser impetrado gratuitamente por qualquer cidadão (eleitor no gozo dos direitos políticos) visando anular ato lesivo ao patrimônio público ou à moralidade administrativa?',
    options: [
      'Habeas Corpus.',
      'Ação Popular.',
      'Mandado de Injunção.',
      'Habeas Data.',
    ],
    correctIndex: 1,
    explanation:
      'Conforme o art. 5º, LXXIII da CF/88, qualquer cidadão é parte legítima para propor Ação Popular contra ato lesivo ao patrimônio público, moralidade, meio ambiente e patrimônio histórico.',
  },
  {
    id: 'q-con-10',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.4',
    statement:
      'No ordenamento jurídico brasileiro, os tratados e convenções internacionais sobre direitos humanos aprovados em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos, equivalem a:',
    options: [
      'Leis ordinárias federais.',
      'Decretos regulamentares.',
      'Emendas Constitucionais.',
      'Resoluções administrativas.',
    ],
    correctIndex: 2,
    explanation:
      'Art. 5º, § 3º da CF/88: tratados de direitos humanos aprovados com quórum de 3/5 em 2 turnos em cada Casa têm status de Emenda Constitucional.',
  },
  {
    id: 'q-con-11',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.3',
    statement:
      'O Poder Constituinte responsável pela elaboração da primeira Constituição de um novo Estado ou de uma nova ordem constitucional, caracterizado por ser inicial, ilimitado juridicamente e incondicionado, é o Poder Constituinte:',
    options: [
      'Derivado Reformador.',
      'Originário.',
      'Derivado Decorrente.',
      'Revisional Municipal.',
    ],
    correctIndex: 1,
    explanation:
      'O Poder Constituinte Originário inaugura a ordem jurídica sem se subordinar a limites formais da Constituição anterior.',
  },
  {
    id: 'q-con-12',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.2',
    statement:
      'Conforme o art. 5º da CF/88, a associação para fins lícitos:',
    options: [
      'Depende sempre de autorização prévia do Prefeito ou Governador.',
      'É plena, vedada a de caráter paramilitar, e ninguém poderá ser compelido a associar-se ou a permanecer associado.',
      'Pode ser dissolvida compulsoriamente por decreto municipal.',
      'É proibida para servidores públicos civis.',
    ],
    correctIndex: 1,
    explanation:
      'Arts. 5º, XVII a XX: liberdade plena para fins lícitos, vedado caráter paramilitar, sem interferência estatal e sem filiação compulsória.',
  },
  {
    id: 'q-con-13',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.1',
    statement:
      'Nos termos do art. 3º da Constituição Federal, constitui um OBJETIVO fundamental da República Federativa do Brasil:',
    options: [
      'A dignidade da pessoa humana.',
      'O pluralismo político.',
      'Erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais.',
      'A não-intervenção nas relações internacionais.',
    ],
    correctIndex: 2,
    explanation:
      'Objetivos fundamentais (art. 3º) sempre iniciam com verbos no infinitivo: construir, garantir, erradicar e promover. Dignidade e pluralismo estão no art. 1º; não-intervenção está no art. 4º.',
  },
  {
    id: 'q-con-14',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.5',
    statement:
      'Pelo princípio interpretativo da Unidade da Constituição:',
    options: [
      'As normas originárias têm hierarquia entre si, prevalecendo os direitos sociais sobre os individuais.',
      'As normas constitucionais devem ser interpretadas em conjunto, de modo harmônico, evitando contradições entre dispositivos da mesma Carta.',
      'Emendas constitucionais prevalecem hierarquicamente sobre o texto originário.',
      'Cada município pode interpretar a Constituição de forma a afastar direitos fundamentais.',
    ],
    correctIndex: 1,
    explanation:
      'A Constituição deve ser interpretada como sistema único e harmônico, sem hierarquia entre normas originárias.',
  },
  {
    id: 'q-con-15',
    disciplineId: '2.3',
    discipline: 'Direito Constitucional',
    topicCode: '2.3.6',
    statement:
      'Sobre a publicidade dos atos dos órgãos públicos prevista no art. 37, § 1º da CF/88, ela deverá ter caráter educativo, informativo ou de orientação social, dela NÃO podendo constar:',
    options: [
      'Dados sobre serviços oferecidos à população.',
      'Nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos.',
      'Datas e horários de atendimento presencial.',
      'Canais oficiais de ouvidoria municipal.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 37, § 1º concretiza o princípio da impessoalidade ao proibir promoção pessoal de autoridades ou servidores na publicidade oficial.',
  },

  // ==========================================
  // 2.4 ÉTICA, RELACIONAMENTO E ATENDIMENTO (15 questões)
  // ==========================================
  {
    id: 'q-eti-1',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.3',
    statement:
      'Conforme a Lei Federal nº 13.460/2017 (Direitos dos Usuários dos Serviços Públicos), o documento elaborado pelo órgão público para informar os usuários sobre os serviços prestados, formas de acesso e prazos máximos de atendimento é a:',
    options: [
      'Tabela de Temporalidade Documental.',
      'Carta de Serviços ao Usuário.',
      'Portaria Disciplinar Interna.',
      'Ata de Registro de Preços.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 7º da Lei nº 13.460/2017 determina que os órgãos e entidades públicos divulguem a Carta de Serviços ao Usuário.',
  },
  {
    id: 'q-eti-2',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.1',
    statement:
      'Ao atender um conhecido pessoal no balcão de protocolo, o Agente Administrativo decide passar o pedido dele à frente de 15 cidadãos que aguardavam na fila. Essa conduta viola diretamente os princípios éticos e administrativos da:',
    options: [
      'Eficiência e da economicidade.',
      'Impessoalidade e da moralidade.',
      'Hierarquia e da autotutela.',
      'Supremacia do interesse privado.',
    ],
    correctIndex: 1,
    explanation:
      'Favorecer conhecidos quebra a impessoalidade (tratamento isonômico a todos os cidadãos) e a moralidade administrativa.',
  },
  {
    id: 'q-eti-3',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.4',
    statement:
      'Quando um atendente responde ao cidadão utilizando expressões excessivamente técnicas e jargões jurídicos que impedem a compreensão da mensagem, ocorre uma barreira de comunicação do tipo:',
    options: ['Física.', 'Semântica.', 'Mecânica.', 'Temporal.'],
    correctIndex: 1,
    explanation:
      'Barreiras semânticas decorrem do uso inadequado de vocabulário, jargões ou termos ambíguos entre emissor e receptor.',
  },
  {
    id: 'q-eti-4',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.3',
    statement:
      'Um munícipe comparece ao atendimento levando cópia simples e o documento original de seu RG para juntada em processo administrativo. Pela Lei nº 13.460/2017, o Agente Administrativo deve:',
    options: [
      'Recusar a cópia e exigir autenticação prévia em cartório.',
      'Conferir a cópia à vista do documento original e autenticá-la administrativamente, vedada a recusa arbitrária.',
      'Reter o documento original do cidadão por 30 dias.',
      'Cobrar taxa cartorária no balcão da Prefeitura.',
    ],
    correctIndex: 1,
    explanation:
      'A Lei nº 13.460/2017 dispensa autenticação em cartório quando o agente público pode comparar a cópia com o original apresentado.',
  },
  {
    id: 'q-eti-5',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.2',
    statement:
      'Durante um atendimento tenso no guichê, a postura recomendada para comunicação assertiva e resolução do conflito é:',
    options: [
      'Interromper o cidadão imediatamente e elevar o tom de voz para impor autoridade.',
      'Praticar escuta ativa, manter tom cordial e firme, e explicar objetivamente os procedimentos e prazos.',
      'Prometer solução fora das regras legais apenas para encerrar a conversa.',
      'Ignorar a reclamação e chamar o próximo da fila.',
    ],
    correctIndex: 1,
    explanation:
      'A assertividade combina respeito, escuta ativa e clareza na apresentação das normas e alternativas possíveis.',
  },
  {
    id: 'q-eti-6',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.1',
    statement:
      'A situação em que um agente público atua em processo administrativo cujo beneficiário direto é seu cônjuge ou sócio comercial configura:',
    options: [
      'Exercício regular de eficiência.',
      'Conflito de interesses e impedimento ético/legal, devendo o servidor declarar-se impedido.',
      'Promoção funcional por mérito.',
      'Desconcentração administrativa.',
    ],
    correctIndex: 1,
    explanation:
      'Interesses privados ou familiares que possam comprometer a imparcialidade caracterizam conflito de interesses, exigindo abstenção e comunicação à chefia.',
  },
  {
    id: 'q-eti-7',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.3',
    statement:
      'Na Lei nº 13.460/2017, o canal oficial destinado a receber manifestações dos usuários (reclamações, denúncias, elogios, sugestões e solicitações) e acompanhar a qualidade do atendimento público é a:',
    options: [
      'Junta Comercial.',
      'Ouvidoria.',
      'Comissão de Licitação.',
      'Controladoria Privada.',
    ],
    correctIndex: 1,
    explanation:
      'A Ouvidoria (arts. 13 e 14 da Lei 13.460/2017) recebe manifestações dos usuários, promove mediação e propõe melhorias nos serviços públicos.',
  },
  {
    id: 'q-eti-8',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.3',
    statement:
      'Segundo a Lei nº 13.460/2017, caso uma manifestação apresentada à Ouvidoria não possa ser respondida de imediato, o órgão deverá encaminhar a decisão administrativa final ao usuário no prazo de:',
    options: [
      '10 dias, improrrogáveis.',
      '30 dias, prorrogável de forma justificada uma única vez, por igual período.',
      '60 dias, sem possibilidade de prorrogação.',
      '5 dias úteis.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 16 da Lei nº 13.460/2017 fixa prazo de 30 dias para resposta conclusiva da Ouvidoria, prorrogável por mais 30 dias mediante justificativa.',
  },
  {
    id: 'q-eti-9',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.4',
    statement:
      'Quando um chefe de divisão envia orientações e metas de trabalho para os Agentes Administrativos subordinados, ocorre na organização o fluxo de comunicação:',
    options: [
      'Ascendente.',
      'Descendente (vertical de cima para baixo).',
      'Horizontal ou lateral.',
      'Informal ou boato.',
    ],
    correctIndex: 1,
    explanation:
      'Fluxo descendente parte dos níveis superiores para os subordinados (instruções, metas, normas); ascendente vai dos subordinados às chefias (relatórios, sugestões).',
  },
  {
    id: 'q-eti-10',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.1',
    statement:
      'No serviço público, a "transparência ativa" diferencia-se da "transparência passiva" porque na transparência ativa o órgão público:',
    options: [
      'Só entrega dados após o cidadão protocolar pedido formal.',
      'Divulga proativamente informações de interesse coletivo (como gastos, contratos e horários) em seus portais, independentemente de solicitação.',
      'Mantém sigilo permanente sobre contratos municipais.',
      'Exige pagamento de taxa prévia para acesso a portais públicos.',
    ],
    correctIndex: 1,
    explanation:
      'Transparência ativa = divulgação espontânea pela Administração (Portais da Transparência); Transparência passiva = atendimento a pedidos específicos formulados pelo cidadão.',
  },
  {
    id: 'q-eti-11',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.2',
    statement:
      'No trabalho em equipe em uma repartição municipal, a prática de feedback construtivo eficaz caracteriza-se por:',
    options: [
      'Criticar traços pessoais do colega diante dos usuários no balcão.',
      'Focar em comportamentos e fatos observáveis, em conversa reservada, apontando caminhos de melhoria.',
      'Acumular falhas por meses para expô-las apenas na avaliação final.',
      'Transferir responsabilidades próprias para outros setores.',
    ],
    correctIndex: 1,
    explanation:
      'Feedback construtivo deve ser oportuno, respeitoso, reservado e centrado em fatos e comportamentos específicos, nunca em ataques pessoais.',
  },
  {
    id: 'q-eti-12',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.3',
    statement:
      'De acordo com as diretrizes da Lei nº 13.460/2017, na relação entre os órgãos públicos e os usuários dos serviços públicos, presume-se:',
    options: [
      'A má-fé do requerente até prova documental em contrário.',
      'A boa-fé do usuário.',
      'A obrigatoriedade de advogado em todo atendimento.',
      'A dispensa de número de protocolo.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 5º, II da Lei nº 13.460/2017 estabelece expressamente a presunção de boa-fé do usuário como diretriz do atendimento público.',
  },
  {
    id: 'q-eti-13',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.4',
    statement:
      'Durante o atendimento telefônico institucional em uma Secretaria Municipal, é considerada boa prática de comunicação e etiqueta profissional:',
    options: [
      'Atender dizendo apenas "Alô?" sem identificar o setor.',
      'Identificar o órgão/setor e o nome do atendente logo no início, falar com clareza e confirmar o entendimento antes de transferir ou encerrar.',
      'Deixar o cidadão esperando na linha por tempo indeterminado sem aviso.',
      'Transferir a ligação aleatoriamente para outro ramal quando não souber a resposta.',
    ],
    correctIndex: 1,
    explanation:
      'Atendimento telefônico profissional exige saudação padronizada, identificação do setor/servidor, objetividade e encaminhamento correto com aviso prévio.',
  },
  {
    id: 'q-eti-14',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.1',
    statement:
      'Um servidor utiliza impressoras, papel timbrado e o veículo oficial da repartição durante o fim de semana para resolver assuntos particulares de sua empresa familiar. Essa conduta viola diretamente a ética pública por configurar:',
    options: [
      'Uso regular de bens dominicais.',
      'Desvio de finalidade e uso indevido de recursos públicos para interesse privado.',
      'Exercício de discricionariedade funcional.',
      'Desconcentração de equipamentos.',
    ],
    correctIndex: 1,
    explanation:
      'Bens e recursos públicos destinam-se exclusivamente ao interesse público; utilizá-los em proveito particular fere a moralidade, a ética e pode configurar improbidade.',
  },
  {
    id: 'q-eti-15',
    disciplineId: '2.4',
    discipline: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.2',
    statement:
      'Na escuta ativa aplicada ao atendimento ao cidadão, o servidor demonstra atenção genuína quando:',
    options: [
      'Digita mensagens pessoais no celular enquanto o cidadão fala.',
      'Mantém contato visual respeitoso, não interrompe a exposição inicial e parafraseia os pontos principais para confirmar a demanda.',
      'Antecipa a resposta antes mesmo de ouvir o problema.',
      'Repassa o atendimento sem anotar o histórico relatado.',
    ],
    correctIndex: 1,
    explanation:
      'Escuta ativa envolve atenção plena, ausência de interrupções precipitadas e confirmação verbal do que foi compreendido.',
  },

  // ==========================================
  // 2.5 GESTÃO DA INFORMAÇÃO E ARQUIVOLOGIA (15 questões)
  // ==========================================
  {
    id: 'q-arq-1',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    statement:
      'Em uma Secretaria Municipal de Curitiba, processos de concessão de alvará já encerrados são consultados com baixíssima frequência, permanecendo guardados apenas para cumprir prazos legais de fiscalização antes de sua destinação final. De acordo com a Teoria das Três Idades, esses documentos encontram-se no:',
    options: [
      'Arquivo Corrente, por ainda possuírem valor secundário.',
      'Arquivo Intermediário, conservando valor primário.',
      'Arquivo Permanente, pois são inalienáveis e imprescritíveis.',
      'Arquivo Setorial, aguardando recolhimento imediato ao setor de origem.',
    ],
    correctIndex: 1,
    explanation:
      'Documentos de uso pouco frequente que aguardam prazos prescricionais ou precaucionais para eliminação ou recolhimento pertencem ao Arquivo Intermediário (2ª idade) e ainda mantêm valor primário.',
  },
  {
    id: 'q-arq-2',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    statement:
      'Segundo a Lei Federal nº 8.159/1991, a eliminação de documentos produzidos por instituições públicas e de caráter público:',
    options: [
      'Pode ser decidida livremente pelo chefe imediato da repartição quando faltar espaço físico.',
      'Depende exclusivamente do decurso de cinco anos após a abertura do processo.',
      'Será realizada mediante autorização da instituição arquivística pública, na sua específica esfera de competência.',
      'Aplica-se inclusive a documentos de arquivo permanente que já tenham sido digitalizados.',
    ],
    correctIndex: 2,
    explanation:
      'Conforme o art. 9º da Lei nº 8.159/1991, nenhum documento público pode ser eliminado sem autorização da instituição arquivística pública competente. Documentos permanentes jamais podem ser eliminados.',
  },
  {
    id: 'q-arq-3',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    statement:
      'O princípio arquivístico segundo o qual os arquivos originários de uma instituição ou pessoa não devem ser misturados aos de outras entidades produtoras denomina-se Princípio da:',
    options: [
      'Organicidade.',
      'Unicidade.',
      'Proveniência (ou Respeito aos Fundos).',
      'Cumulatividade.',
    ],
    correctIndex: 2,
    explanation:
      'O Princípio da Proveniência (Respeito aos Fundos) garante que o conjunto documental mantenha o vínculo com o órgão ou pessoa produtora, sem se misturar ao acervo de outras entidades.',
  },
  {
    id: 'q-arq-4',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.4',
    statement:
      'Ao redigir um ofício encaminhado por um Agente Administrativo e assinado pelo Diretor de Departamento para o Prefeito Municipal de Curitiba, o pronome de tratamento e o fecho adequados segundo o Padrão Ofício são:',
    options: [
      'Vossa Senhoria e "Atenciosamente,".',
      'Sua Excelência e "Respeitosamente,".',
      'Vossa Excelência e "Respeitosamente,".',
      'Ilustríssimo Senhor e "Cordialmente,".',
    ],
    correctIndex: 2,
    explanation:
      'Ao se dirigir diretamente ao Prefeito usa-se "Vossa Excelência" (Sua Excelência é para falar sobre ele em 3ª pessoa). Para autoridades hierarquicamente superiores, o fecho oficial é "Respeitosamente,".',
  },
  {
    id: 'q-arq-5',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    statement:
      'O instrumento arquivístico resultante da avaliação documental que determina os prazos de guarda nas fases corrente e intermediária, bem como a destinação final (eliminação ou guarda permanente), é a:',
    options: [
      'Guia de Tramitação Interna.',
      'Tabela de Temporalidade Documental (TTD).',
      'Ata de Recolhimento Histórico.',
      'Carta de Serviços ao Usuário.',
    ],
    correctIndex: 1,
    explanation:
      'A Tabela de Temporalidade Documental (TTD) define quanto tempo cada série documental permanece nos arquivos corrente e intermediário e qual será sua destinação final.',
  },
  {
    id: 'q-arq-6',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.1',
    statement:
      'Em um sistema de informação organizacional de uma Prefeitura, o módulo que registra diariamente a abertura de protocolos, emissão de guias e atendimentos no balcão pertence ao nível:',
    options: [
      'Estratégico (EIS).',
      'Operacional (SPT - Sistema de Processamento de Transações).',
      'Deliberativo Legislativo.',
      'Secundário Permanente.',
    ],
    correctIndex: 1,
    explanation:
      'O Sistema de Processamento de Transações (SPT) opera na base operacional registrando as transações rotineiras e diárias da organização.',
  },
  {
    id: 'q-arq-7',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    statement:
      'A passagem de documentos do Arquivo Corrente (1ª idade) para o Arquivo Intermediário (2ª idade) denomina-se tecnicamente:',
    options: ['Recolhimento.', 'Transferência.', 'Expurgo.', 'Indexação.'],
    correctIndex: 1,
    explanation:
      'Transferência = passagem do Corrente para o Intermediário. Recolhimento = passagem do Corrente ou Intermediário para o Arquivo Permanente.',
  },
  {
    id: 'q-arq-8',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    statement:
      'O princípio arquivístico segundo o qual as relações administrativas orgânicas se refletem nos conjuntos documentais — fazendo com que um documento isolado perca parte de seu sentido fora do contexto do órgão produtor — é o Princípio da:',
    options: ['Organicidade.', 'Reversibilidade.', 'Territorialidade.', 'Pertinência temática.'],
    correctIndex: 0,
    explanation:
      'A Organicidade expressa o vínculo natural que os documentos mantêm entre si e com a estrutura e atividades do órgão que os produziu.',
  },
  {
    id: 'q-arq-9',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    statement:
      'De acordo com a Lei Federal nº 8.159/1991, os documentos públicos de guarda permanente (3ª idade) são caracterizados por serem:',
    options: [
      'Alienáveis e prescritíveis.',
      'Inalienáveis e imprescritíveis.',
      'Elimináveis após 30 anos mediante decisão do chefe do setor.',
      'De valor exclusivamente primário fiscal.',
    ],
    correctIndex: 1,
    explanation:
      'Art. 10 da Lei nº 8.159/1991: os documentos de valor permanente são inalienáveis e imprescritíveis (e jamais podem ser eliminados).',
  },
  {
    id: 'q-arq-10',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.4',
    statement:
      'Assinale a alternativa em que a concordância com o pronome de tratamento está correta conforme o Manual de Redação Oficial:',
    options: [
      'Vossa Excelência encaminhastes vosso parecer ontem.',
      'Vossa Excelência encaminhou seu parecer ontem.',
      'Vossa Excelência encaminhou vosso parecer ontem.',
      'Sua Excelência, receba nossas congratulações ao abrir este ofício.',
    ],
    correctIndex: 1,
    explanation:
      'Com pronomes de tratamento (Vossa Excelência, Vossa Senhoria), o verbo e os pronomes possessivos concordam sempre na 3ª pessoa ("encaminhou", "seu").',
  },
  {
    id: 'q-arq-11',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.4',
    statement:
      'Conforme as atualizações do Manual de Redação da Presidência da República (Padrão Ofício), qual trio de expedientes passou a seguir uma diagramação única (Padrão Ofício)?',
    options: [
      'Carta comercial, bilhete e circular privada.',
      'Aviso, Ofício e Memorando.',
      'Edital, sentença judicial e alvará.',
      'Certidão, ata notarial e telegrama.',
    ],
    correctIndex: 1,
    explanation:
      'A 3ª edição do Manual unificou Aviso, Ofício e Memorando sob a denominação e estrutura única do Padrão Ofício.',
  },
  {
    id: 'q-arq-12',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.4',
    statement:
      'Quando um Diretor de Departamento envia um ofício para outro Diretor de mesmo nível hierárquico em outra Secretaria de Curitiba, o fecho oficial correto é:',
    options: ['Respeitosamente,', 'Atenciosamente,', 'Cordialmente,', 'Sem mais para o momento,'],
    correctIndex: 1,
    explanation:
      'Usa-se "Atenciosamente," para autoridades de mesma hierarquia ou hierarquia inferior, e "Respeitosamente," apenas para autoridades superiores.',
  },
  {
    id: 'q-arq-13',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.3',
    statement:
      'Na comparação entre Correspondência Comercial e Redação Oficial, uma diferença marcante está no fato de que a correspondência comercial:',
    options: [
      'Proíbe qualquer forma de cortesia ou persuasão.',
      'Admite linguagem persuasiva voltada ao relacionamento com clientes e fornecedores, enquanto a redação oficial exige impessoalidade estrita.',
      'Deve ser sempre assinada pelo Prefeito Municipal.',
      'Não utiliza vocativo nem local e data.',
    ],
    correctIndex: 1,
    explanation:
      'A correspondência comercial busca objetivos negociais e de relacionamento (podendo persuadir com cordialidade), ao passo que a redação oficial comunica em nome do Poder Público com estrita impessoalidade.',
  },
  {
    id: 'q-arq-14',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.1',
    statement:
      'Em Sistemas de Informação Organizacional, o sistema que consolida os dados operacionais do mês em relatórios sintéticos e indicadores para apoiar chefias intermediárias (nível tático) é o:',
    options: [
      'SIG (Sistema de Informações Gerenciais).',
      'SPT (Sistema de Processamento de Transações).',
      'Sistema Operacional Linux.',
      'Protocolo SMTP.',
    ],
    correctIndex: 0,
    explanation:
      'SPT atende o nível operacional; SIG atende o nível tático/gerencial com relatórios periódicos; EIS/SAE atende o nível estratégico.',
  },
  {
    id: 'q-arq-15',
    disciplineId: '2.5',
    discipline: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    statement:
      'Segundo o Princípio da Unicidade na Arquivologia:',
    options: [
      'Todo órgão deve possuir apenas um arquivo físico centralizado.',
      'Não obstante forma, gênero, tipo ou suporte, os documentos de arquivo conservam seu caráter único em função do contexto em que foram produzidos.',
      'Cópias autenticadas substituem definitivamente documentos originais históricos.',
      'Apenas documentos digitais possuem caráter único.',
    ],
    correctIndex: 1,
    explanation:
      'Pelo Princípio da Unicidade, mesmo havendo cópias ou suportes diferentes, o documento arquivístico é único por seu contexto específico de produção e tramitação.',
  },
];
