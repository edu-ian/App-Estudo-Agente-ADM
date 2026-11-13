export interface FlashcardItem {
  id: string;
  disciplineId: string;
  disciplineName: string;
  topicCode: string;
  front: string;
  back: string;
  tip: string;
}

export interface TrapStatement {
  id: string;
  disciplineId: string;
  disciplineName: string;
  topicCode: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export const FLASHCARDS: FlashcardItem[] = [
  // 2.5 Arquivologia e Redação Oficial
  {
    id: 'fc-1',
    disciplineId: '2.5',
    disciplineName: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    front: 'Quais são as 3 idades documentais e o valor predominante em cada uma?',
    back: '1ª Corrente (uso frequente, valor primário) · 2ª Intermediária (uso baixo, aguarda destinação, valor primário) · 3ª Permanente (guarda definitiva, valor secundário/histórico).',
    tip: 'Documentos permanentes são inalienáveis, imprescritíveis e NUNCA podem ser eliminados.',
  },
  {
    id: 'fc-2',
    disciplineId: '2.5',
    disciplineName: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    front: 'O que determina o Princípio da Proveniência (Respeito aos Fundos)?',
    back: 'Os arquivos de uma instituição ou pessoa não devem ser misturados aos de outras entidades produtoras; mantém-se o vínculo com quem criou o documento.',
    tip: 'É o princípio mais cobrado em provas de Arquivologia.',
  },
  {
    id: 'fc-3',
    disciplineId: '2.5',
    disciplineName: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    front: 'O que exige o Art. 9º da Lei nº 8.159/1991 para eliminar documentos públicos?',
    back: 'Autorização expressa da instituição arquivística pública competente na sua esfera (Arquivo Nacional, estadual ou municipal), seguindo a Tabela de Temporalidade.',
    tip: 'Chefia imediata nunca pode destruir documentos por conta própria.',
  },
  {
    id: 'fc-4',
    disciplineId: '2.5',
    disciplineName: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.4',
    front: 'Quais são os dois únicos fechos oficiais admitidos no Padrão Ofício atual?',
    back: '"Respeitosamente," (para autoridades superiores) e "Atenciosamente," (para mesma hierarquia ou inferior).',
    tip: '"Cordialmente" e "Saudações" não pertencem ao Padrão Ofício.',
  },

  // 1.1 Língua Portuguesa
  {
    id: 'fc-5',
    disciplineId: '1.1',
    disciplineName: 'Língua Portuguesa',
    topicCode: '1.1.11',
    front: 'Qual a diferença entre "por que", "por quê", "porque" e "porquê"?',
    back: 'por que = pergunta / "pelo qual" · por quê = fim de frase · porque = explicação ("pois") · porquê = substantivo ("o motivo").',
    tip: 'Se vier precedido de artigo ("o", "um"), é sempre "porquê" junto e com acento.',
  },
  {
    id: 'fc-6',
    disciplineId: '1.1',
    disciplineName: 'Língua Portuguesa',
    topicCode: '1.1.9',
    front: 'Como concordam os verbos "haver" (existir) e "fazer" (tempo decorrido)?',
    back: 'São impessoais: permanecem sempre na 3ª pessoa do singular ("Há processos", "Faz três meses"). O verbo auxiliar acompanha ("Deve haver erros").',
    tip: 'O verbo "existir" NÃO é impessoal e concorda normalmente ("Existem vagas").',
  },
  {
    id: 'fc-7',
    disciplineId: '1.1',
    disciplineName: 'Língua Portuguesa',
    topicCode: '1.1.7',
    front: 'Qual a diferença entre Retificar e Ratificar?',
    back: 'Retificar = corrigir, emendar um erro ("retificar o edital"). Ratificar = confirmar, validar ("ratificar os termos").',
    tip: 'REtificar = REparar; RAtificar = reAfirmar.',
  },
  {
    id: 'fc-8',
    disciplineId: '1.1',
    disciplineName: 'Língua Portuguesa',
    topicCode: '1.1.10',
    front: 'Quando a vírgula é estritamente proibida na oração direta?',
    back: 'Nunca se separa com vírgula única o Sujeito do Verbo, nem o Verbo de seu Complemento (Objeto Direto/Indireto).',
    tip: 'Atenção a sujeitos longos em editais: mesmo extensos, não levam vírgula antes do verbo.',
  },

  // 1.2 Raciocínio Lógico
  {
    id: 'fc-9',
    disciplineId: '1.2',
    disciplineName: 'Raciocínio Lógico',
    topicCode: '1.2.8',
    front: 'Como calcular Média, Moda e Mediana?',
    back: 'Média = soma ÷ quantidade · Moda = valor que mais se repete · Mediana = termo central após ordenar os dados (se par, média dos 2 centrais).',
    tip: 'Na Mediana, sempre ordene os valores antes de escolher o termo do meio.',
  },
  {
    id: 'fc-10',
    disciplineId: '1.2',
    disciplineName: 'Raciocínio Lógico',
    topicCode: '1.2.18',
    front: 'Qual a fórmula dos Juros Simples e do Montante?',
    back: 'J = C · i · t e M = C + J. A taxa (i) e o tempo (t) devem estar obrigatoriamente na mesma unidade temporal.',
    tip: '1 ano com taxa mensal exige converter o tempo para 12 meses.',
  },
  {
    id: 'fc-11',
    disciplineId: '1.2',
    disciplineName: 'Raciocínio Lógico',
    topicCode: '1.2.6',
    front: 'Quantos cm² equivalem a 1 m² e quantos m² tem 1 hectare?',
    back: '1 m² = 10.000 cm² (100 cm × 100 cm) · 1 hectare (ha) = 10.000 m².',
    tip: 'Em medidas de área (²), cada degrau na escala multiplica ou divide por 100.',
  },
  {
    id: 'fc-12',
    disciplineId: '1.2',
    disciplineName: 'Raciocínio Lógico',
    topicCode: '1.2.18',
    front: 'Aumento de 20% seguido de desconto de 20% volta ao preço original?',
    back: 'Não! 1,20 × 0,80 = 0,96, resultando em uma redução líquida de 4% sobre o valor inicial.',
    tip: 'Aumentos e descontos sucessivos incidem sobre bases diferentes.',
  },

  // 1.3 Noções de Informática
  {
    id: 'fc-13',
    disciplineId: '1.3',
    disciplineName: 'Noções de Informática',
    topicCode: '1.3.4',
    front: 'No Word 2016 (PT-BR), o que fazem os atalhos Ctrl+B, Ctrl+N e Ctrl+T?',
    back: 'Ctrl+B = Salvar · Ctrl+N = Negrito · Ctrl+T = Selecionar Tudo.',
    tip: 'Pegadinha clássica: Ctrl+B no Word em português SALVA o arquivo (não coloca em negrito).',
  },
  {
    id: 'fc-14',
    disciplineId: '1.3',
    disciplineName: 'Noções de Informática',
    topicCode: '1.3.9',
    front: 'No Excel, qual a diferença entre =SOMA(A1:A4) e =SOMA(A1;A4)?',
    back: 'Dois-pontos (:) indica intervalo contínuo (A1, A2, A3 e A4). Ponto e vírgula (;) indica união pontual (apenas A1 e A4).',
    tip: 'Verifique sempre o separador antes de fazer a conta na prova.',
  },
  {
    id: 'fc-15',
    disciplineId: '1.3',
    disciplineName: 'Noções de Informática',
    topicCode: '1.3.12',
    front: 'Qual a diferença entre os campos CC e CCO no e-mail?',
    back: 'CC (Cópia) mostra os endereços para todos. CCO (Cópia Oculta) oculta os endereços listados ali dos demais destinatários.',
    tip: '"Responder a Todos" não envia resposta para quem estava em CCO.',
  },
  {
    id: 'fc-16',
    disciplineId: '1.3',
    disciplineName: 'Noções de Informática',
    topicCode: '1.3.6',
    front: 'O que diferencia Phishing de Ransomware?',
    back: 'Phishing é golpe de engenharia social (site/e-mail falso) para roubar senhas/dados. Ransomware é malware que criptografa arquivos e cobra resgate.',
    tip: 'Firewall filtra tráfego de rede; Backup offline protege contra ransomware.',
  },

  // 1.4 Legislação
  {
    id: 'fc-17',
    disciplineId: '1.4',
    disciplineName: 'Legislação',
    topicCode: '1.4.6',
    front: 'Quais são os prazos de resposta da Lei de Acesso à Informação (LAI)?',
    back: 'Acesso imediato ou resposta em até 20 dias, prorrogáveis por mais 10 dias mediante justificativa expressa e ciência do requerente.',
    tip: 'O cidadão nunca precisa justificar os motivos do pedido de informação pública.',
  },
  {
    id: 'fc-18',
    disciplineId: '1.4',
    disciplineName: 'Legislação',
    topicCode: '1.4.5',
    front: 'Qual é o elemento subjetivo exigido hoje na Lei de Improbidade (Lei 14.230/21)?',
    back: 'Dolo específico (vontade livre e consciente de alcançar o resultado ilícito). Não existe mais improbidade culposa.',
    tip: 'O prazo prescricional único da ação de improbidade passou a ser de 8 anos.',
  },
  {
    id: 'fc-19',
    disciplineId: '1.4',
    disciplineName: 'Legislação',
    topicCode: '1.4.8',
    front: 'Qual a faixa etária de Criança e Adolescente segundo o ECA?',
    back: 'Criança: até 12 anos incompletos. Adolescente: entre 12 e 18 anos de idade.',
    tip: 'Ao completar exatamente 12 anos, a pessoa já é adolescente para o ECA.',
  },
  {
    id: 'fc-20',
    disciplineId: '1.4',
    disciplineName: 'Legislação',
    topicCode: '1.4.7',
    front: 'Na Lei nº 10.048/2000, a partir de quantos anos o idoso tem prioridade de atendimento?',
    back: 'Idade igual ou superior a 60 anos (além de PcD, gestantes, lactantes, pessoas com crianças de colo, obesos e mobilidade reduzida).',
    tip: 'Maiores de 80 anos possuem preferência especial entre os próprios idosos.',
  },

  // 2.1 Administração Pública
  {
    id: 'fc-21',
    disciplineId: '2.1',
    disciplineName: 'Fundamentos da Administração Pública',
    topicCode: '2.1.2',
    front: 'O que significa a sigla PODC na Administração?',
    back: 'Planejamento (definir metas), Organização (estruturar recursos), Direção (liderar/motivar) e Controle (medir e corrigir desvios).',
    tip: 'Organograma pertence à Organização; Auditoria/Feedback pertence ao Controle.',
  },
  {
    id: 'fc-22',
    disciplineId: '2.1',
    disciplineName: 'Fundamentos da Administração Pública',
    topicCode: '2.1.6',
    front: 'Diferencie PPA, LDO e LOA no Orçamento Público.',
    back: 'PPA = plano de 4 anos (diretrizes, objetivos, metas) · LDO = metas anuais que orientam a LOA · LOA = orçamento anual que prevê receitas e fixa despesas.',
    tip: 'A LOA PREVÊ receitas e FIXA despesas.',
  },
  {
    id: 'fc-23',
    disciplineId: '2.1',
    disciplineName: 'Fundamentos da Administração Pública',
    topicCode: '2.1.1',
    front: 'Qual a diferença entre Desconcentração e Descentralização?',
    back: 'Desconcentração = distribuição interna dentro da mesma pessoa jurídica (cria órgãos/secretarias). Descentralização = cria nova entidade com CNPJ próprio (autarquias etc.).',
    tip: 'DesCONcentração = CONtinua na mesma pessoa jurídica; DesCENtralização = Cria Entidade Nova.',
  },

  // 2.2 Direito Administrativo
  {
    id: 'fc-24',
    disciplineId: '2.2',
    disciplineName: 'Direito Administrativo',
    topicCode: '2.2.1',
    front: 'Quais os 5 requisitos do ato administrativo (CO-FI-FO-MO-OB) e quais são vinculados?',
    back: 'Competência, Finalidade, Forma, Motivo e Objeto. Competência, Finalidade e Forma são SEMPRE vinculados; Motivo e Objeto podem ser discricionários.',
    tip: 'O mérito administrativo existe apenas nos atos discricionários (Motivo + Objeto).',
  },
  {
    id: 'fc-25',
    disciplineId: '2.2',
    disciplineName: 'Direito Administrativo',
    topicCode: '2.2.1',
    front: 'Qual a diferença entre Anulação e Revogação do ato administrativo?',
    back: 'Anulação: por ilegalidade (efeito retroativo ex tunc; feita pela Adm. ou Judiciário). Revogação: por conveniência/oportunidade (efeito ex nunc; só pela Adm.).',
    tip: 'O Poder Judiciário não revoga ato administrativo discricionário — apenas anula ilegalidades.',
  },
  {
    id: 'fc-26',
    disciplineId: '2.2',
    disciplineName: 'Direito Administrativo',
    topicCode: '2.2.4',
    front: 'Quais são as 5 modalidades da Nova Lei de Licitações (Lei 14.133/2021)?',
    back: 'Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo.',
    tip: 'Convite e Tomada de Preços foram extintos pela Lei 14.133/2021.',
  },

  // 2.3 Direito Constitucional
  {
    id: 'fc-27',
    disciplineId: '2.3',
    disciplineName: 'Direito Constitucional',
    topicCode: '2.3.6',
    front: 'Qual o prazo de validade do concurso público e o requisito para estabilidade?',
    back: 'Validade: até 2 anos, prorrogável 1 vez por igual período. Estabilidade: 3 anos de efetivo exercício em cargo efetivo + avaliação especial de desempenho.',
    tip: 'Cargo em comissão é de livre nomeação e exoneração (nunca adquire estabilidade).',
  },
  {
    id: 'fc-28',
    disciplineId: '2.3',
    disciplineName: 'Direito Constitucional',
    topicCode: '2.3.6',
    front: 'Quais cargos públicos podem ser acumulados constitucionalmente (havendo compatibilidade de horários)?',
    back: '2 cargos de professor · 1 de professor + 1 técnico ou científico · 2 cargos/empregos privativos de profissionais de saúde com profissões regulamentadas.',
    tip: 'Dois cargos meramente administrativos (ex.: dois de Agente Administrativo) NÃO podem ser acumulados.',
  },
  {
    id: 'fc-29',
    disciplineId: '2.3',
    disciplineName: 'Direito Constitucional',
    topicCode: '2.3.2',
    front: 'Qual a diferença entre Habeas Data e Mandado de Segurança no acesso à informação?',
    back: 'Habeas Data protege dados PERSONALÍSSIMOS do próprio impetrante. Mandado de Segurança protege direito líquido e certo a informação pública geral negada.',
    tip: 'Habeas Data exige negativa prévia na via administrativa para ter interesse de agir.',
  },

  // 2.4 Ética e Atendimento
  {
    id: 'fc-30',
    disciplineId: '2.4',
    disciplineName: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.3',
    front: 'Para que serve a Carta de Serviços ao Usuário (Lei 13.460/2017)?',
    back: 'Informar ao cidadão quais serviços o órgão presta, requisitos, documentos exigidos, etapas, canais de acesso e prazos máximos de atendimento.',
    tip: 'Sua atualização deve ser periódica e disponibilizada em local visível e no portal eletrônico.',
  },
  {
    id: 'fc-31',
    disciplineId: '2.4',
    disciplineName: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.3',
    front: 'Na Lei 13.460/2017, o órgão pode exigir reconhecimento de firma sem dúvida fundada?',
    back: 'Não! É vedada a exigência de reconhecimento de firma ou autenticação cartorária quando dispensada por lei ou quando o servidor puder conferir com o original.',
    tip: 'A relação entre Administração e cidadão presume a boa-fé do usuário.',
  },
];

export const TRAP_STATEMENTS: TrapStatement[] = [
  {
    id: 'tr-1',
    disciplineId: '2.5',
    disciplineName: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    statement:
      'Documentos classificados no Arquivo Permanente podem ser eliminados após 20 anos de guarda caso já tenham sido digitalizados em alta resolução.',
    isTrue: false,
    explanation:
      'PEGADINHA: Documentos do Arquivo Permanente têm valor histórico/secundário, são inalienáveis e imprescritíveis e JAMAIS podem ser eliminados, mesmo após digitalização.',
  },
  {
    id: 'tr-2',
    disciplineId: '2.5',
    disciplineName: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.2',
    statement:
      'Tanto os documentos do arquivo corrente quanto os do arquivo intermediário conservam valor primário (administrativo, fiscal ou legal).',
    isTrue: true,
    explanation:
      'CORRETO: A 1ª e a 2ª idades mantêm valor primário; a diferença entre elas está na frequência de uso (alta no corrente, baixa no intermediário).',
  },
  {
    id: 'tr-3',
    disciplineId: '2.5',
    disciplineName: 'Arquivologia e Redação Oficial',
    topicCode: '2.5.4',
    statement:
      'Ao redigir um ofício diretamente ao Prefeito de Curitiba, o servidor deve utilizar o pronome "Sua Excelência" no corpo do texto.',
    isTrue: false,
    explanation:
      'PEGADINHA: Usa-se "Vossa Excelência" ao se dirigir DIRETAMENTE à autoridade. "Sua Excelência" serve apenas para falar SOBRE ela em terceira pessoa.',
  },
  {
    id: 'tr-4',
    disciplineId: '1.4',
    disciplineName: 'Legislação',
    topicCode: '1.4.6',
    statement:
      'Pela Lei de Acesso à Informação (Lei 12.527/2011), o requerente deve justificar o motivo do pedido para que o órgão público avalie se libera os dados.',
    isTrue: false,
    explanation:
      'PEGADINHA: O art. 10, § 3º da LAI proíbe expressamente quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.',
  },
  {
    id: 'tr-5',
    disciplineId: '1.4',
    disciplineName: 'Legislação',
    topicCode: '1.4.6',
    statement:
      'Na LAI, quando não for possível conceder acesso imediato à informação, o órgão tem até 20 dias para responder, prorrogáveis por mais 10 dias mediante justificativa.',
    isTrue: true,
    explanation:
      'CORRETO: Regra exata do art. 11, §§ 1º e 2º da Lei nº 12.527/2011.',
  },
  {
    id: 'tr-6',
    disciplineId: '1.4',
    disciplineName: 'Legislação',
    topicCode: '1.4.5',
    statement:
      'Após a Lei 14.230/2021, atos culposos que causem prejuízo ao erário continuam sendo punidos como improbidade administrativa caso haja culpa grave.',
    isTrue: false,
    explanation:
      'PEGADINHA: A reforma da Lei 14.230/2021 extinguiu a improbidade culposa. Hoje TODAS as modalidades exigem comprovação de dolo específico.',
  },
  {
    id: 'tr-7',
    disciplineId: '1.4',
    disciplineName: 'Legislação',
    topicCode: '1.4.7',
    statement:
      'A Lei Federal nº 10.048/2000 garante atendimento prioritário aos idosos com idade igual ou superior a 60 anos, gestantes, lactantes, pessoas com deficiência e obesos.',
    isTrue: true,
    explanation:
      'CORRETO: A idade mínima para prioridade legal é 60 anos (e maiores de 80 têm preferência especial entre os idosos).',
  },
  {
    id: 'tr-8',
    disciplineId: '1.4',
    disciplineName: 'Legislação',
    topicCode: '1.4.8',
    statement:
      'Para o Estatuto da Criança e do Adolescente (ECA), considera-se criança a pessoa com até 12 anos completos de idade.',
    isTrue: false,
    explanation:
      'PEGADINHA CLÁSSICA: Criança é até 12 anos INCOMPLETOS. Com 12 anos completos já se enquadra como adolescente (12 a 18 anos).',
  },
  {
    id: 'tr-9',
    disciplineId: '1.4',
    disciplineName: 'Legislação',
    topicCode: '1.4.1',
    statement:
      'A organização político-administrativa de Curitiba compreende os Poderes Executivo, Legislativo e Judiciário Municipal.',
    isTrue: false,
    explanation:
      'PEGADINHA: Municípios NÃO têm Poder Judiciário próprio. Os Poderes municipais são apenas Executivo (Prefeito) e Legislativo (Câmara Municipal).',
  },
  {
    id: 'tr-10',
    disciplineId: '2.2',
    disciplineName: 'Direito Administrativo',
    topicCode: '2.2.4',
    statement:
      'A Lei Federal nº 14.133/2021 manteve as modalidades de Convite e Tomada de Preços para contratações municipais de menor valor.',
    isTrue: false,
    explanation:
      'PEGADINHA: Convite e Tomada de Preços foram EXTINTOS pela Nova Lei de Licitações (14.133/2021). Hoje há Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo.',
  },
  {
    id: 'tr-11',
    disciplineId: '2.2',
    disciplineName: 'Direito Administrativo',
    topicCode: '2.2.1',
    statement:
      'A revogação de um ato administrativo válido por razões de conveniência e oportunidade produz efeitos prospectivos (ex nunc) e só pode ser feita pela própria Administração.',
    isTrue: true,
    explanation:
      'CORRETO: O Judiciário não revoga atos discricionários por mérito; apenas os anula se houver ilegalidade.',
  },
  {
    id: 'tr-12',
    disciplineId: '2.2',
    disciplineName: 'Direito Administrativo',
    topicCode: '2.2.2',
    statement:
      'Bens públicos dominicais, por não possuírem destinação pública específica, podem ser adquiridos por usucapião por particulares que os ocupem por mais de 15 anos.',
    isTrue: false,
    explanation:
      'PEGADINHA: NENHUM bem público (seja de uso comum, especial ou dominical) pode sofrer usucapião (regra da imprescritibilidade constitucional).',
  },
  {
    id: 'tr-13',
    disciplineId: '2.3',
    disciplineName: 'Direito Constitucional',
    topicCode: '2.3.6',
    statement:
      'Um servidor nomeado para cargo em comissão adquire estabilidade após três anos de efetivo exercício na Prefeitura.',
    isTrue: false,
    explanation:
      'PEGADINHA: A estabilidade após 3 anos aplica-se apenas a servidores nomeados para cargo de provimento EFETIVO em virtude de concurso público.',
  },
  {
    id: 'tr-14',
    disciplineId: '2.3',
    disciplineName: 'Direito Constitucional',
    topicCode: '2.3.4',
    statement:
      'No sistema constitucional brasileiro, a Lei Complementar possui hierarquia superior à Lei Ordinária.',
    isTrue: false,
    explanation:
      'PEGADINHA DO STF: Não existe hierarquia entre Lei Complementar e Lei Ordinária; a diferença é o campo material reservado pela Constituição e o quórum de aprovação.',
  },
  {
    id: 'tr-15',
    disciplineId: '2.3',
    disciplineName: 'Direito Constitucional',
    topicCode: '2.3.2',
    statement:
      'Durante o dia, é permitida a entrada forçada em casa sem consentimento do morador mediante determinação judicial.',
    isTrue: true,
    explanation:
      'CORRETO: Art. 5º, XI da CF/88 admite entrada por ordem judicial exclusivamente durante o dia (à noite apenas flagrante, desastre ou socorro).',
  },
  {
    id: 'tr-16',
    disciplineId: '1.1',
    disciplineName: 'Língua Portuguesa',
    topicCode: '1.1.9',
    statement:
      'Na frase "Devem haver documentos pendentes no protocolo", o verbo auxiliar concorda corretamente no plural com "documentos".',
    isTrue: false,
    explanation:
      'PEGADINHA: O verbo "haver" no sentido de existir é impessoal e contamina o verbo auxiliar. O correto é "Deve haver documentos pendentes".',
  },
  {
    id: 'tr-17',
    disciplineId: '1.1',
    disciplineName: 'Língua Portuguesa',
    topicCode: '1.1.7',
    statement:
      'O verbo "retificar" significa corrigir ou emendar um erro, enquanto "ratificar" significa confirmar ou validar o que foi dito.',
    isTrue: true,
    explanation:
      'CORRETO: Parônimos clássicos muito cobrados em atos administrativos e editais.',
  },
  {
    id: 'tr-18',
    disciplineId: '1.3',
    disciplineName: 'Noções de Informática',
    topicCode: '1.3.4',
    statement:
      'No Microsoft Word 2016 em português, o atalho Ctrl + B aplica formatação em negrito ao texto selecionado.',
    isTrue: false,
    explanation:
      'PEGADINHA: No Word em português, Ctrl + B SALVA o documento! O atalho para Negrito é Ctrl + N.',
  },
  {
    id: 'tr-19',
    disciplineId: '1.3',
    disciplineName: 'Noções de Informática',
    topicCode: '1.3.10',
    statement:
      'A navegação em janela anônima impede que o provedor de internet e os sites acessados identifiquem o endereço IP e o tráfego do usuário.',
    isTrue: false,
    explanation:
      'PEGADINHA: O modo anônimo apenas não grava histórico, cookies e formulários no computador local — provedor, rede corporativa e sites continuam enxergando a conexão.',
  },
  {
    id: 'tr-20',
    disciplineId: '1.2',
    disciplineName: 'Raciocínio Lógico',
    topicCode: '1.2.6',
    statement:
      'Uma sala retangular com 1 metro quadrado de área equivale exatamente a 10.000 centímetros quadrados.',
    isTrue: true,
    explanation:
      'CORRETO: 1 m = 100 cm, logo 1 m² = 100 cm × 100 cm = 10.000 cm².',
  },
  {
    id: 'tr-21',
    disciplineId: '1.2',
    disciplineName: 'Raciocínio Lógico',
    topicCode: '1.2.15',
    statement:
      'O número de servidores trabalhando no mesmo ritmo e o tempo necessário para concluir uma tarefa fixa são grandezas diretamente proporcionais.',
    isTrue: false,
    explanation:
      'PEGADINHA: Quanto MAIS servidores trabalham, MENOS tempo levam — são grandezas INVERSAMENTE proporcionais.',
  },
  {
    id: 'tr-22',
    disciplineId: '2.1',
    disciplineName: 'Fundamentos da Administração Pública',
    topicCode: '2.1.6',
    statement:
      'A Lei Orçamentária Anual (LOA) prevê as receitas e fixa as despesas para o exercício financeiro seguinte.',
    isTrue: true,
    explanation:
      'CORRETO: Receitas são previstas (estimadas) e despesas são fixadas (limitadas) na LOA.',
  },
  {
    id: 'tr-23',
    disciplineId: '2.1',
    disciplineName: 'Fundamentos da Administração Pública',
    topicCode: '2.1.1',
    statement:
      'A criação de Secretarias Municipais dentro da estrutura da Prefeitura de Curitiba configura descentralização administrativa.',
    isTrue: false,
    explanation:
      'PEGADINHA: Criar órgãos internos (sem personalidade jurídica própria) dentro da mesma pessoa jurídica é DESCONCENTRAÇÃO.',
  },
  {
    id: 'tr-24',
    disciplineId: '2.4',
    disciplineName: 'Ética, Relacionamento e Atendimento',
    topicCode: '2.4.3',
    statement:
      'Segundo a Lei nº 13.460/2017, é proibido ao órgão público recusar atendimento alegando que o usuário não apresentou reconhecimento de firma em documento dispensado por lei.',
    isTrue: true,
    explanation:
      'CORRETO: O art. 5º da Lei 13.460/2017 veda exigências burocráticas excessivas e presume a boa-fé do cidadão.',
  },
];
