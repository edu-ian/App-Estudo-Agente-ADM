import type { TopicStudyContent } from '../summaryTypes';

export const DISC_1_4_LEGISLACAO: Record<string, TopicStudyContent> = {
  '1.4.1': {
    realityParagraphs: [
      'A **Lei Orgânica do Município de Curitiba (LOM, de 10/04/1990)** é literalmente a **"Constituição" da cidade**. Como Município tem autonomia **política, administrativa e financeira**, ele se vira com suas próprias regras — mas sempre respeitando a Constituição Federal e a do Paraná.',
      'A primeira coisa que você precisa cravar: **Município SÓ TEM DOIS PODERES: Executivo (Prefeito) e Legislativo (Câmara Municipal)**. NÃO EXISTE Poder Judiciário Municipal! Se aparecer "Tribunal Municipal de Curitiba" na prova, ri na cara da banca e marca errado.',
    ],
    keyPoints: [
      {
        label: 'Apenas 2 Poderes',
        text: '**Executivo** (Prefeito + Vice + Secretários) e **Legislativo** (Vereadores da Câmara Municipal). **Judiciário Municipal NÃO EXISTE!**',
        badge: { text: 'SEM JUDICIÁRIO', tone: 'rose' },
      },
      {
        label: 'Iniciativa PRIVATIVA do Prefeito',
        text: 'Só o **Prefeito** pode propor lei que crie/extinga **cargos públicos**, aumente **salário de servidor**, mude o **regime jurídico** ou crie/altere **Secretarias**.',
        badge: { text: 'EXCLUSIVO PREFEITO', tone: 'amber' },
      },
      {
        label: 'Emenda à Lei Orgânica (Rito Pesado)',
        text: 'Aprovada em **2 turnos** na Câmara, com intervalo mínimo (**interstício**) de **10 dias** entre eles, e precisa de **2/3 dos votos** dos vereadores! (Quem promulga é a **Mesa da Câmara**, não o Prefeito!).',
        badge: { text: '2 TURNOS · 10d · 2/3', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Vereador Querendo Dar Aumento ou Criar Cargo na Prefeitura',
        scenario:
          'Um vereador apresenta projeto de lei criando 50 vagas de Agente Administrativo ou aumentando o vale-alimentação dos servidores. **Inconstitucional / Ilegal por vício de iniciativa!** Mexer com cargos, estrutura do Executivo e remuneração de servidores é iniciativa **PRIVATIVA do Prefeito**.',
      },
      {
        title: 'Competência Privativa vs. Comum de Curitiba',
        scenario:
          'Regular o **transporte coletivo municipal**, organizar o **IPTU/ISS/ITBI** e o **plano diretor/zoneamento** é competência **privativa** do Município (interesse local). Já cuidar da **saúde, educação, assistência social e meio ambiente** é competência **comum** (junto com União e Estado).',
      },
    ],
    table: {
      title: 'Mapa Rápido da Lei Orgânica de Curitiba',
      headers: ['Tema na LOM Curitiba', 'Regra Exata', 'Pegadinha Clássica'],
      rows: [
        ['**Poderes do Município**', 'Executivo e Legislativo (independentes e harmônicos)', '[[ROSE:NÃO EXISTE]] Poder Judiciário Municipal!'],
        ['**Alterar a Lei Orgânica**', '**2 turnos**, intervalo mínimo de **10 dias**, aprovação por **2/3**', 'O Prefeito **NÃO sanciona nem veta** emenda à LOM — a Mesa da Câmara promulga!'],
        ['**Leis sobre Servidores/Cargos**', 'Iniciativa **privativa do Prefeito**', 'Vereador não pode apresentar projeto gerando despesa com pessoal!'],
        ['**Tribunal de Contas**', 'Município **NÃO cria** Tribunal de Contas próprio (salvo RJ e SP antigos)', 'Quem fiscaliza as contas de Curitiba é o **TCE-PR** com auxílio da Câmara!'],
      ],
    },
    examTrap:
      'Duas pegadinhas fatais juntas: 1) Dizer que o Prefeito **sanciona** emenda à Lei Orgânica (MENTIRA — quem promulga é a **Mesa da Câmara**!). 2) Dizer que a Câmara pode **criar cargos** na Prefeitura ou criar um Tribunal de Contas Municipal novo (PROIBIDO pela CF/88 e LOM!).',
    deepDive: {
      headline: 'Símbolos de Curitiba, Sessões e Fiscalização',
      points: [
        'Símbolos oficiais do Município: **Bandeira, Hino e Brasão** de Curitiba.',
        'Os impostos de competência municipal (art. 156 CF + LOM): **IPTU** (propriedade predial/territorial urbana), **ITBI** (transmissão de imóvel entre vivos) e **ISS** (serviços de qualquer natureza).',
        'Prefeito e Vice-Prefeito tomam posse em **1º de janeiro** do ano seguinte à eleição.',
      ],
      extraExample:
        'Se o Prefeito vetar uma lei ordinária comum, a Câmara pode derrubar o veto pelo voto da **maioria absoluta** dos vereadores.',
      mnemonic: 'LOM Curitiba = 2 Poderes (sem Judiciário) | Emenda = 2 turnos + 10 dias + 2/3 (Mesa promulga!).',
    },
    isFullModule: true,
  },

  '1.4.2': {
    realityParagraphs: [
      'A **Lei Municipal nº 1.656/1958** é o **Estatuto dos Funcionários Públicos de Curitiba** — ou seja, é a regra do SEU futuro emprego! Não confunda isso com CLT (Carteira Assinada) nem com a Lei Federal 8.112/90: Curitiba tem seu estatuto próprio e a banca cobra os conceitos de **provimento, vacância, direitos e deveres**.',
      'Basicamente, o Estatuto define como você entra no cargo (**nomeação** → **posse** → **exercício**), como você sai ou muda de lugar (reintegração, reversão, readaptação, aproveitamento) e o que acontece se você fizer cagada na repartição.',
    ],
    keyPoints: [
      {
        label: 'A Escadinha de Entrada no Cargo',
        text: '1º **Nomeação** (saiu seu nome no Diário Oficial) → 2º **Posse** (você assina o termo e aceita o cargo — aqui você VIRA servidor!) → 3º **Exercício** (você bota a mão na massa no setor!).',
        badge: { text: 'ORDEM EXATA', tone: 'emerald' },
      },
      {
        label: 'Formas de Provimento (Volta e Troca)',
        text: '**Reintegração** (demissão foi anulada — volta com tudo pago!). **Reversão** (aposentado volta à ativa). **Readaptação** (sofreu limitação física/mental e vai para função compatível). **Aproveitamento** (estava em disponibilidade e volta pro cargo).',
        badge: { text: 'DESPENCA', tone: 'rose' },
      },
      {
        label: 'Deveres Sagrados do Agente',
        text: '**Assiduidade** (não faltar), **Pontualidade** (chegar no horário), **Urbanidade** (tratar cidadão e colega com educação), **Sigilo** e **Obediência às ordens legais** (exceto se forem **manifestamente ilegais**!).',
        badge: { text: 'DEVERES', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Servidor Demitido Injustamente Ganha na Justiça',
        scenario:
          'Um agente de Curitiba foi demitido num PAD ilegal e a Justiça anulou a demissão. Ele volta ao cargo com ressarcimento de tudo que deixou de receber: o nome disso é **REINTEGRAÇÃO** (e se alguém estava na vaga dele, é **reconduzido** ao cargo anterior sem indenização!).',
      },
      {
        title: 'Ordem Absurda da Chefia',
        scenario:
          'O chefe manda você rasgar um processo protocolado ou fraudar uma data. O Estatuto obriga obediência às ordens superiores, **SALVO quando manifestamente ilegais** — nesse caso você TEM o dever de não cumprir e representar!',
      },
    ],
    table: {
      title: 'Não Troque os "R" do Provimento na Hora da Prova!',
      headers: ['Instituto', 'Quem É o Personagem?', 'Macete Infalível'],
      rows: [
        ['**Reintegração**', 'Servidor **estável demitido ilegalmente** que volta.', '**REIN**tegração = **IN**justiça anulada (volta pro cargo com atrasados!).'],
        ['**Reversão**', 'Servidor **aposentado** que volta à ativa (ex.: por invalidez curada).', '**REVER**são = **V**elho aposentado voltando pro batente!'],
        ['**Readaptação**', 'Servidor que ficou com **limitação física/mental**.', 'Adapta para cargo compatível com a nova condição de saúde.'],
        ['**Recondução**', 'Servidor estável **reprovado em estágio probatório de outro cargo** (ou desalojado pelo reintegrado).', '**CON**duzido de volta para o cargo antigo que já era estável!'],
        ['**Aproveitamento**', 'Servidor que estava **em disponibilidade** (cargo extinto) e volta.', 'Estava parado em casa recebendo proporcional → foi **aproveitado**!'],
      ],
    },
    examTrap:
      'Pegadinha clássica: trocar **Reintegração** por **Reversão**! **Reintegrar** é trazer de volta quem foi **demitido** ilegalmente. **Reverter** é trazer de volta quem estava **aposentado**!',
    deepDive: {
      headline: 'Vacância, Estágio Probatório e Proibições',
      points: [
        '**Exoneração ≠ Demissão**: **Exoneração** NÃO é punição (ocorre a pedido ou por reprovação no estágio probatório/cargo em comissão). **Demissão** É **PENALIDADE disciplinar** por infração grave!',
        '**Vacância** (quando a vaga fica livre): exoneração, demissão, promoção, aposentadoria, posse em outro cargo inacumulável e falecimento.',
        '**Estabilidade constitucional**: só após **3 anos** de efetivo exercício + avaliação especial de desempenho (CF/88 prevalece sobre prazos antigos do estatuto de 1958!).',
      ],
      extraExample:
        'Se o servidor pedir para sair do cargo efetivo porque passou em outro concurso melhor, isso é **exoneração a pedido** (ou vacância por posse em outro cargo inacumulável), **nunca** demissão!',
      mnemonic: 'Demissão = Castigo | Exoneração = Saída sem castigo | Reintegra demitido | Reverte aposentado.',
    },
    isFullModule: true,
  },

  '1.4.3': {
    realityParagraphs: [
      'A **Lei Municipal nº 7.671/1991** desenha o organograma do **Poder Executivo de Curitiba**: quem manda em quem, o que é órgão da Prefeitura direto e o que é entidade separada (autarquia, fundação, empresa pública).',
      'Você precisa entender dois conceitos jurídicos traduzidos pra vida real: **Desconcentração** (dividir uma mesma pessoa em vários setores/secretarias — **Administração Direta**) e **Descentralização** (criar uma **nova pessoa jurídica** com CNPJ próprio para cuidar de um serviço — **Administração Indireta**).',
    ],
    keyPoints: [
      {
        label: 'Administração Direta (Desconcentração)',
        text: 'Gabinete do Prefeito, Procuradoria-Geral e **Secretarias Municipais**. **NÃO têm personalidade jurídica própria** — usam o próprio CNPJ/personalidade do Município de Curitiba!',
        badge: { text: 'SEM CNPJ PRÓPRIO', tone: 'sky' },
      },
      {
        label: 'Administração Indireta (Descentralização)',
        text: '**Autarquias**, **Fundações Públicas**, **Empresas Públicas** e **Sociedades de Economia Mista**. Todas **TÊM personalidade jurídica própria** (respondem pelos próprios atos!).',
        badge: { text: 'COM PERSONALIDADE', tone: 'emerald' },
      },
      {
        label: 'Hierarquia vs. Vinculação (Tutela)',
        text: 'Na Direta há **subordinação / hierarquia** (Prefeito manda direto nas Secretarias). Na Indireta **NÃO há hierarquia** — há apenas **vinculação / controle finalístico** (supervisão da secretaria da área)!',
        badge: { text: 'PEGADINHA', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Secretaria Municipal vs. URBS / IPPUC / FAS em Curitiba',
        scenario:
          'A **Secretaria Municipal de Administração** ou de **Saúde** é **Administração Direta** (órgão despersonalizado, criado por desconcentração). Já entidades autônomas como **IPPUC** (autarquia), **FCC** (Fundação Cultural de Curitiba), **FAS** (Fundação de Ação Social) ou **URBS** (sociedade de economia mista) são **Administração Indireta** (descentralização)!',
      },
      {
        title: 'Processo Judicial Por Batida de Veículo',
        scenario:
          'Se um carro de uma **Secretaria Municipal** bate, você processa o **Município de Curitiba** (pois a secretaria é só um órgão sem personalidade). Se um carro de uma **Autarquia** com personalidade própria causa dano, ela mesma responde primeiro com patrimônio próprio!',
      },
    ],
    table: {
      title: 'Direta (Órgãos) vs. Indireta (Entidades) na Estrutura de Curitiba',
      headers: ['Critério', 'Administração Direta', 'Administração Indireta (FASE)'],
      rows: [
        ['**Fenômeno**', '**DesCONcentração** (**C**ria órgãos internos)', '**DesCENtralização** (**C**ria **E**ntidades novas)'],
        ['**Quem São?**', 'Prefeito, Vice, **Secretarias Municipais**, Procuradoria', '**F**undações, **A**utarquias, **S**oc. Economia Mista, **E**mpresas Públicas'],
        ['**Personalidade Jurídica?**', '[[ROSE:NÃO TEM]] (é o próprio Município)', '[[EMERALD:SIM, TEM]] (patrimônio e autonomia próprios)'],
        ['**Relação com o Prefeito**', '**Hierarquia / Subordinação** direta', '**Vinculação / Tutela** (sem subordinação hierárquica!)'],
      ],
    },
    examTrap:
      'Pegadinha eterna: a banca escreve que "as Autarquias e Fundações Municipais são **hierarquicamente subordinadas** às Secretarias Municipais". [[ROSE:MENTIRA!]] Entre Direta e Indireta existe **VINCULAÇÃO** (controle finalístico), e **NUNCA subordinação hierárquica**! Hierarquia só existe dentro da mesma pessoa jurídica!',
    deepDive: {
      headline: 'Diferenciando as 4 Entidades da Administração Indireta (FASE)',
      points: [
        '**Autarquia**: pessoa jurídica de **Direito Público**, criada **DIRETAMENTE por lei** para atividades típicas do Estado (ex.: IPPUC, IPMC).',
        '**Fundação Pública**: patrimônio personalizado sem fins lucrativos (cultura, ação social, pesquisa — ex.: FCC, FAS).',
        '**Empresa Pública**: **Direito Privado**, capital **100% público**, criada sob qualquer forma societária (ex.: Cohab/equivalentes, Caixa Federal).',
        '**Sociedade de Economia Mista**: **Direito Privado**, capital **misto** (maioria de ações com direito a voto do Poder Público), **sempre S.A.** (ex.: URBS, Sanepar, Petrobras).',
      ],
      extraExample:
        'Na Lei 7.671/1991, os órgãos da Prefeitura dividem-se em núcleos de assessoramento (Gabinete, Procuradoria), órgãos de administração geral/meio (Administração, Finanças) e órgãos de atuação finalística (Saúde, Educação, Urbanismo etc.).',
      mnemonic: 'DesCONcentração = COisas internas (Órgãos) | DesCENtralização = Entidades novas (FASE) | Indireta = Vinculação (sem hierarquia)!',
    },
    isFullModule: true,
  },

  '1.4.4': {
    realityParagraphs: [
      'O edital listou artigo por artigo da **Constituição Federal de 1988** que você tem que saber aqui em Legislação: **Título I (arts. 1º-4º)**, **Título II (arts. 5º-17)**, **Título III (arts. 18, 19, 29, 30, 37-41)** e **Título IV (arts. 44-75)**.',
      'Tradução do que realmente cai desses blocos gigantes: os **arts. 1º a 5º** (fundamentos, objetivos e liberdades), os **arts. 29 e 30** (regras específicas dos **Municípios**, como subsídio de vereador, LOM e competência local!), os **arts. 37 a 41** (LIMPE, concurso e estabilidade) e os **arts. 70 a 75** (fiscalização do dinheiro pelo Congresso + **Tribunal de Contas**)!',
    ],
    keyPoints: [
      {
        label: 'Arts. 1º ao 17 (Princípios, Direitos, Nacionalidade)',
        text: 'Brasileiro **nato vs. naturalizado** (art. 12: cargo privativo de nato = MP3.COM!), direitos sociais (art. 6º), voto **obrigatório (18 a 70)** e **facultativo (16-17, >70, analfabeto)**.',
        badge: { text: 'TÍTULOS I e II', tone: 'sky' },
      },
      {
        label: 'Arts. 29 e 30 (Municípios — Ouro para Curitiba!)',
        text: 'Município é ente federativo autônomo! **Art. 30**: legislar sobre **interesse local**, suplementar legislação federal/estadual, manter transporte coletivo e educação infantil/fundamental.',
        badge: { text: 'MUNICÍPIOS', tone: 'emerald' },
      },
      {
        label: 'Arts. 44 a 75 (Poder Legislativo & TCU)',
        text: 'Congresso = Câmara (povo, proporcional, 4 anos) + Senado (Estados/DF, majoritário, **8 anos**, 3 senadores cada). **Art. 70-75**: controle externo contábil/financeiro pelo Legislativo com auxílio do **Tribunal de Contas**.',
        badge: { text: 'TÍTULO IV', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Município Legislando sobre Horário de Farmácia vs. Direito Trabalhista',
        scenario:
          'Pelo **art. 30, I da CF/88** (e Súmula Vinculante 38 do STF), o Município **PODE** fixar horário de funcionamento do comércio local (é interesse local!). Mas o Município **NÃO PODE** criar lei trabalhista ou penal (competência privativa da União!).',
      },
      {
        title: 'Quem Pode Ser Prefeito de Curitiba pela CF (Art. 14, § 3º)?',
        scenario:
          'Idade mínima: **35 anos** (Presidente/Senador), **30 anos** (Governador), **21 anos** (**Prefeito**, Vice-Prefeito, Deputado, Juiz de paz), **18 anos** (**Vereador**). Um brasileiro naturalizado **PODE** ser Prefeito ou Vereador (só não pode cargos do MP3.COM!).',
      },
    ],
    table: {
      title: 'Raio-X dos Artigos da CF/88 Cobrados no Tópico 1.4.4',
      headers: ['Artigos da CF/88', 'Assunto Central', 'Regra Que Despenca'],
      rows: [
        ['**Arts. 1º a 4º**', 'Fundamentos, Poderes e Objetivos', 'Todo poder emana do povo; 3 Poderes independentes e harmônicos.'],
        ['**Art. 12 (§ 3º)**', 'Cargos privativos de Brasileiro **NATO**', '**MP3.COM**: Min. STF, Pres/Vice, Pres. Câmara, Pres. Senado, Carreira Diplomática, Oficial Forças Armadas, Min. Defesa.'],
        ['**Art. 18 e 19**', 'Organização do Estado & Vedações', 'União, Estados, DF e Municípios são **autônomos** (não há hierarquia!). Vedado criar cultos religiosos ou recusar fé a docs públicos.'],
        ['**Arts. 29 e 30**', 'Municípios', 'Eleição de Prefeito em **2 turnos** só se município tiver **> 200 mil eleitores** (Curitiba tem!).'],
        ['**Arts. 70 e 71**', 'Fiscalização e Tribunal de Contas', 'Prestará contas qualquer pessoa física ou jurídica (pública ou privada) que use dinheiro público!'],
      ],
    },
    examTrap:
      'Pegadinha sobre eleições municipais (Art. 29, II CF): só existe **2º turno para Prefeito** em municípios com **mais de 200.000 ELEITORES** (e NÃO 200.000 habitantes!). Atenção à palavra **ELEITORES**!',
    deepDive: {
      headline: 'Processo Legislativo (Arts. 59-69) & Imunidades',
      points: [
        'Quórum de **Lei Complementar** = **Maioria Absoluta** (> metade do total de membros da Casa). **Lei Ordinária** = **Maioria Simples/Relativa** (maioria dos presentes na sessão, estando presente a maioria absoluta).',
        '**Medida Provisória** (art. 62): vale por **60 dias**, prorrogável **uma vez** por mais 60 dias. Proibida sobre direito penal, eleitoral, nacionalidade ou matéria de Lei Complementar.',
        'Municípios **NÃO** possuem Poder Judiciário nem Senadores.',
      ],
      extraExample:
        'Na Câmara de 38 vereadores: Maioria Absoluta = **20 votos** (metade de 38 é 19 → primeiro inteiro acima = 20), esteja quantos estiverem na sala. Maioria Simples com 24 presentes = **13 votos**.',
      mnemonic: 'MP3.COM = Natos | 35/30/21/18 (Telefone das idades) | >200 mil ELEITORES = 2º turno!',
    },
  },

  '1.4.5': {
    realityParagraphs: [
      'A **Lei de Improbidade Administrativa (Lei nº 8.429/1992)** sofreu uma reforma gigante em **2021 pela Lei nº 14.230/2021** — e as bancas amam cobrar exatamente o que mudou! Resumo sem filtro: **ACABOU a improbidade culposa (por vacilo/sem querer)!**',
      'Hoje, para um servidor ou prefeito ser condenado por improbidade administrativa, o Ministério Público (que agora tem **legitimidade** — e lembre das decisões do STF também — sendo essencial provar o **DOLO ESPECÍFICO**) precisa provar a **vontade livre e consciente de alcançar o resultado ilícito**. Se você errou por burrice, inexperiência ou perdeu um prazo sem má-fé, **NÃO é improbidade administrativa**!',
    ],
    keyPoints: [
      {
        label: 'Dolo Específico Obrigatório (ZERO Culpa!)',
        text: 'Antes de 2021 existia improbidade culposa no dano ao erário (art. 10). **HOJE NÃO EXISTE MAIS!** Todas as 3 modalidades exigem **DOLO** (intenção + fim ilícito).',
        badge: { text: 'MUDANÇA 14.230/21', tone: 'rose' },
      },
      {
        label: 'As 3 Modalidades Restantes',
        text: '1) **Art. 9º: Enriquecimento Ilícito** (embolsou propina/vantagem). 2) **Art. 10: Prejuízo ao Erário** (causou perda de grana pública). 3) **Art. 11: Atentado aos Princípios** (agora é **ROL TAXATIVO** — só os incisos escritos na lei!).',
        badge: { text: '3 MODALIDADES', tone: 'sky' },
      },
      {
        label: 'Prescrição Única de 8 Anos',
        text: 'O prazo para processar por improbidade passou a ser de **8 anos** contados da **ocorrência do fato** (ou do dia em que cessou a infração continuada).',
        badge: { text: 'PRAZO 8 ANOS', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Agente que Errou Conta de Planilha vs. Agente que Desviou Verba',
        scenario:
          'Se um agente administrativo novato soma errado uma guia por distração (**culpa/imperícia**), ele pode até responder administrativamente ou corrigir, mas **NÃO cometeu improbidade**! Agora, se combinou com fornecedor para fraudar nota fiscal e rachar o dinheiro (**dolo**), é **improbidade (art. 9º e 10)**!',
      },
      {
        title: 'Nepotismo no Art. 11 (Princípios)',
        scenario:
          'Nomear cônjuge, companheiro ou parente até o **3º grau** em cargo em comissão ou função de confiança para troca de favores é expressamente previsto no art. 11, XI como improbidade contra os princípios.',
      },
    ],
    table: {
      title: 'As 3 Modalidades de Improbidade Pós-Lei 14.230/2021',
      headers: ['Artigo / Tipo', 'Exige Dolo?', 'Suspensão Direitos Políticos', 'Multa Civil'],
      rows: [
        ['**Art. 9º — Enriquecimento Ilícito**', '[[ROSE:Sim (Dolo)]]', 'Até **14 anos**', 'Equivalente ao **acréscimo patrimonial**'],
        ['**Art. 10 — Dano / Prejuízo ao Erário**', '[[ROSE:Sim (Dolo)]]', 'Até **12 anos**', 'Equivalente ao **valor do dano**'],
        ['**Art. 11 — Violação aos Princípios** (Rol Taxativo!)', '[[ROSE:Sim (Dolo)]]', '[[EMERALD:NÃO TEM MAIS!]]', 'Até **24 vezes** a remuneração do agente'],
      ],
    },
    examTrap:
      'TRÊS pegadinhas da reforma de 2021 que despencam: 1) Dizer que lesão ao erário (art. 10) admite **culpa** → [[ROSE:MENTIRA!]] 2) Dizer que violação a princípios (art. 11) gera suspensão de direitos políticos → [[ROSE:ACABOU!]] Hoje só dá multa/proibição de contratar até 4 anos! 3) Dizer que o rol do art. 11 é exemplificativo → [[ROSE:HOJE É TAXATIVO!]]',
    deepDive: {
      headline: 'Mais Detalhes da Reforma de 2021 (Art. 1º ao 23)',
      points: [
        '**Mera divergência interpretativa** da lei (baseada em jurisprudência, mesmo que não pacificada) **NÃO configura improbidade**!',
        '**Particulares** (empresários, cidadãos) também respondem se induzirem ou concorrerem dolosamente para o ato de improbidade junto ao agente público.',
        '**Natureza das sanções**: a ação de improbidade é de natureza **cível/administrativa** (não é crime penal — o agente pode responder na improbidade E no processo penal sem ser *bis in idem* se os bens tutelados forem distintos).',
      ],
      extraExample:
        'Um secretário municipal que promove propaganda institucional usando seu próprio nome e foto ("Obra do Prefeito Fulano") viola a impessoalidade e comete improbidade do art. 11, XII.',
      mnemonic: '14-12-0 (Suspensão: 14 Enriq, 12 Dano, ZERO Princípios!) | DOLO em todas | Prescrição = 8 anos!',
    },
  },

  '1.4.6': {
    realityParagraphs: [
      'A **Lei de Acesso à Informação — LAI (Lei nº 12.527/2011)** parte de uma regra simples e brutal: **NO SERVIÇO PÚBLICO, A PUBLICIDADE É A REGRA E O SIGILO É A EXCEÇÃO!** O dinheiro é do povo, então o povo tem direito de saber onde está sendo gasto.',
      'Você, como Agente Administrativo no balcão ou no e-SIC/Fala Curitiba, precisa saber os **prazos de resposta** e uma proibição absurda de importante: **você NUNCA pode exigir que o cidadão explique POR QUE ele quer aquela informação pública!**',
    ],
    keyPoints: [
      {
        label: 'Sem Justificativa (Art. 10, § 3º)',
        text: 'É **PROIBIDO exigir os motivos determinantes** da solicitação de informações de interesse público. O cidadão pede porque quer e pronto!',
        badge: { text: 'PROIBIDO EXIGIR MOTIVO', tone: 'rose' },
      },
      {
        label: 'Prazo de Resposta: 20 + 10 dias',
        text: 'Se o acesso não puder ser **imediato**, o órgão tem até **20 DIAS** para responder, prorrogáveis por mais **10 DIAS** (com justificativa expressa e ciência ao requerente).',
        badge: { text: '20 + 10 DIAS', tone: 'emerald' },
      },
      {
        label: 'Gratuidade vs. Cópia',
        text: 'A busca e o fornecimento da informação são **GRATUITOS**! Só pode cobrar o valor do **custo dos serviços/materiais de reprodução** (papel/mídia) — e isenta quem declarar pobreza!',
        badge: { text: 'GRATUITO', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Cidadão Pedindo Cópia de Contratos via Protocolo',
        scenario:
          'Um morador pede a lista de gastos com combustível da frota municipal em 2026. O agente NÃO pode perguntar "pra que o senhor quer isso?" nem recusar. Se já estiver no computador, entrega na hora; se precisar compilar, tem **20 dias** (prorrogável +10).',
      },
      {
        title: 'Transparência Ativa vs. Passiva',
        scenario:
          '**Ativa**: a Prefeitura já publica no Portal da Transparência **sem ninguém pedir** (salários, licitações, contratos). **Passiva**: o cidadão vai lá e protocola um pedido específico para receber a informação.',
      },
    ],
    table: {
      title: 'Prazos Máximos de Sigilo na LAI (Classificação & Dados Pessoais)',
      headers: ['Grau de Sigilo / Categoria', 'Prazo Máximo de Restrição', 'Observação Vital'],
      rows: [
        ['**Ultrassecreta**', '**25 anos**', 'Renovável **UMA única vez** por igual período (máx. 50 anos se risco à soberania).'],
        ['**Secreta**', '**15 anos**', 'Não renovável acima do prazo original.'],
        ['**Reservada**', '**5 anos**', 'Mais curto; uso restrito temporário.'],
        ['**Informações Pessoais** (intimidade, vida privada, honra)', '**100 anos** (a contar da produção)', '[[AMBER:NÃO É SIGILO DE ESTADO]] — só acessa o próprio titular ou com consentimento/lei!'],
      ],
    },
    examTrap:
      'Pegadinha clássica: 1) Dizer que o prazo de resposta da LAI é de 15 dias ou 30 dias diretos → É **20 dias + 10 dias**! 2) Confundir **Informação Pessoal (100 anos)** com **Ultrassecreta (25 anos)**! E se o pedido for negado, cabe **recurso em 10 dias** à autoridade hierarquicamente superior (que responde em **5 dias**)!',
    deepDive: {
      headline: 'Negativa de Acesso e Recurso na LAI',
      points: [
        'Não se pode negar informação sob desculpa de "trabalho adicional" genérico; se o órgão não tiver a informação, deve indicar quem tem (ou dar negativa formal justificada).',
        '**Recurso** contra negativa: prazo de **10 dias** a contar da ciência; a autoridade superior decide em **5 dias**.',
        'Recusar-se a fornecer informação ou agir com má-fé constitui **conduta ilícita** sujeita no mínimo a **suspensão** do servidor (art. 32)!',
      ],
      extraExample:
        'Se um processo tem **uma folha sigilosa** e 99 folhas públicas, você NÃO esconde o processo inteiro — aplica a **tarja/ocultação só na parte sigilosa** e libera o resto por certidão ou cópia parcial (art. 7º, § 2º)!',
      mnemonic: 'Resposta = 20 (+10) dias | Sigilo = U-S-R (25 - 15 - 5) | Pessoal = 100 anos | Recurso = 10 dias!',
    },
  },

  '1.4.7': {
    realityParagraphs: [
      'A **Lei Federal nº 10.048/2000** é bem curta, direta e obrigatória para quem vai atender público no balcão da Prefeitura de Curitiba. Ela lista quem tem direito a **atendimento prioritário** em repartições públicas, empresas concessionárias (como ônibus!), bancos e estabelecimentos privados.',
      'Atenção máxima às atualizações recentes dessa lei! Não basta lembrar de idoso, gestante e PcD — hoje a lei inclui expressamente **doadores de sangue**, **pessoas com transtorno do espectro autista (TEA)** e **pessoas com mobilidade reduzida** (além de superprioridade para 80+ no Estatuto do Idoso!).',
    ],
    keyPoints: [
      {
        label: 'Quem Tem Direito à Prioridade (Art. 1º)',
        text: '**Pessoa com deficiência (PcD)**, **TEA (autismo)**, **idosos com 60 anos ou mais**, **gestantes**, **lactantes**, **pessoas com criança de colo**, **obesos**, **pessoas com mobilidade reduzida** e **doadores de sangue** (com comprovante de doação nos últimos 120 dias, conforme regra legal).',
        badge: { text: 'LISTA ATUALIZADA', tone: 'emerald' },
      },
      {
        label: 'Idade do Idoso: 60 Anos!',
        text: 'Já tem atendimento prioritário quem completou **60 anos**! (Cuidado: 65 anos é só para gratuidade obrigatória constitucional no transporte coletivo — para fila prioritária é **60 anos**!).',
        badge: { text: '60+ ANOS', tone: 'rose' },
      },
      {
        label: 'Prioridade Especial (80+ Anos)',
        text: 'Pelo Estatuto da Pessoa Idosa, os **maiores de 80 anos** têm preferência **especial** até sobre os demais idosos de 60 a 79 anos!',
        badge: { text: '80+ SUPERPRIORIDADE', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Fila na Rua da Cidadania de Curitiba',
        scenario:
          'Chegam ao balcão um senhor de 62 anos, uma mãe com bebê de colo e um senhor de 83 anos. Todos têm acesso à fila prioritária — e o de **83 anos** passa à frente dentro do próprio atendimento preferencial (salvo emergência médica!).',
      },
      {
        title: 'Acompanhante do Beneficiário',
        scenario:
          'A prioridade estende-se também ao **acompanhante** ou atendente pessoal da pessoa com deficiência ou do idoso quando o atendimento for conjunto para auxiliá-la.',
      },
    ],
    table: {
      title: 'Beneficiários & Marcas de Idade na Legislação',
      headers: ['Regra', 'Faixa / Condição', 'Pegadinha Comum'],
      rows: [
        ['**Atendimento Prioritário (Lei 10.048)**', '**60 anos ou mais**, PcD, TEA, gestante, lactante, criança de colo, obeso, mob. reduzida, doador de sangue.', 'Dizer que idoso só tem prioridade aos **65 anos** [[ROSE:(ERRADO! É 60!)]].'],
        ['**Superprioridade (Estatuto Idoso)**', '**Maiores de 80 anos**', 'Preferência especial inclusive sobre outros idosos!'],
        ['**Assentos Reservados em Ônibus/Transporte**', 'Pelo menos **10%** (ou norma específica local/federal) devidamente identificados.', 'Aplica-se às empresas públicas e concessionárias de transporte coletivo.'],
      ],
    },
    examTrap:
      'Pegadinha clássica: confundir **60 anos** (idade oficial da pessoa idosa e da prioridade na fila pela Lei 10.048/00) com **65 anos** (idade da gratuidade constitucional obrigatória no transporte coletivo)! E não esqueça das **lactantes** (mulheres amamentando) e **doadores de sangue** incluídos na lei!',
    deepDive: {
      headline: 'Sanções e Obrigações nos Prédios Públicos',
      points: [
        'Órgãos públicos e empresas prestadoras de serviços públicos são **obrigados a dispensar atendimento prioritário**, por meio de serviços individualizados que assegurem tratamento diferenciado e imediato.',
        'Nos veículos de transporte coletivo (Curitiba/URBS), há reserva de assentos devidamente identificados para esses grupos.',
        'Multas e sanções administrativas podem ser aplicadas a bancos e estabelecimentos privados que descumprirem a prioridade.',
      ],
      extraExample:
        'Uma mulher que NÃO está grávida, mas está **amamentando (lactante)** com seu filho no atendimento, tem pleno direito à fila preferencial mesmo sem estar com o bebê no colo naquele segundo se comprovar a condição (ou com criança de colo!).',
      mnemonic: '60+ fila | 80+ superfila | PcD + TEA + Gestante + Lactante + Colo + Obeso + Mob. Reduzida + Doador!',
    },
  },

  '1.4.8': {
    realityParagraphs: [
      'O **ECA (Estatuto da Criança e do Adolescente — Lei nº 8.069/1990)** cobrado no edital foca nas **Disposições Preliminares e Direitos Fundamentais** (os primeiros artigos!). A base filosófica dele é a **Doutrina da Proteção Integral**: criança e adolescente não são "mini-adultos" nem propriedade dos pais — são **sujeitos de direitos** com **prioridade absoluta**.',
      'A questão mais batida (e que ainda pega gente desatenta) é a **faixa etária exata** de Criança e Adolescente. Atenção às palavras **"incompletos"** e **"completos"**!',
    ],
    keyPoints: [
      {
        label: 'Faixa Etária Exata (Art. 2º)',
        text: '**Criança**: pessoa **ATÉ 12 anos INCOMPLETOS** (0 a 11 anos, 11 meses e 29 dias). **Adolescente**: entre **12 e 18 anos** de idade!',
        badge: { text: '12 INCOMPLETOS', tone: 'rose' },
      },
      {
        label: 'Exceção Até 21 Anos',
        text: 'Nos casos expressos em lei, aplica-se excepcionalmente o ECA às pessoas entre **18 e 21 anos** de idade (ex.: cumprimento de medida socioeducativa de internação por ato cometido antes dos 18).',
        badge: { text: 'EXCEÇÃO 18-21', tone: 'amber' },
      },
      {
        label: 'Garantia de Prioridade Absoluta (Art. 4º)',
        text: '1) Primazia em **proteção e socorro**; 2) **Precedência de atendimento** nos serviços públicos; 3) Preferência na formulação de **políticas sociais**; 4) Destinação **privilegiada de recursos públicos**!',
        badge: { text: 'PRIORIDADE', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Classificação de Idade no Dia do Aniversário de 12 Anos',
        scenario:
          'Um garoto fez **12 anos ontem**. Para o ECA, ele ainda é criança? [[ROSE:NÃO!]] A lei diz "até 12 anos **incompletos**". No dia em que completa 12 anos, ele já virou **ADOLESCENTE**!',
      },
      {
        title: 'Serviço Público Municipal e Direito ao Nome/Saúde',
        scenario:
          'Pelo princípio da **precedência de atendimento** (art. 4º, b), creches, postos de saúde e CRAS de Curitiba devem dar atenção prioritária a crianças e adolescentes, além de garantir proteção desde o nascimento (registro gratuito!).',
      },
    ],
    table: {
      title: 'Faixas Etárias & Direitos Fundamentais no ECA',
      headers: ['Categoria / Regra', 'Definição Legal Exata', 'Pegadinha da Banca'],
      rows: [
        ['**Criança**', 'Até **12 anos INCOMPLETOS**', 'Dizer "até 12 anos **completos**" [[ROSE:(ERRADO!)]].'],
        ['**Adolescente**', 'Entre **12** (completos) e **18 anos**', 'Aos **18 completos** sai da faixa comum de adolescente.'],
        ['**Aplicação Excepcional**', 'Entre **18 e 21 anos** (nos casos expressos em lei)', 'Não é regra geral, só exceção legal!'],
        ['**Proteção Integral**', 'Dever da **Família, Comunidade, Sociedade em geral e Poder Público**', 'Não é responsabilidade *exclusiva* da família ou *só* do Estado!'],
      ],
    },
    examTrap:
      'Trocar **"12 anos incompletos"** por **"12 anos completos"** é a pegadinha nº 1 do ECA! Fez 12 anos? Já é **adolescente**! E lembra também que criança **NÃO** pode receber medida de internação por ato infracional (só medidas de proteção) — medida socioeducativa é só para **adolescente**!',
    deepDive: {
      headline: 'Direitos Fundamentais no ECA (Arts. 7º ao 69)',
      points: [
        'Direito à **vida e saúde**: atendimento pré e perinatal pelo SUS, alojamento conjunto mãe/recém-nascido e identificação neonatal.',
        'Direito à **liberdade, respeito e dignidade**: ir e vir, opinião, crença, brincar e proteção contra castigo físico ou tratamento cruel/degradante (**Lei da Palmada**).',
        'Direito à **profissionalização**: **PROIBIDO qualquer trabalho a menores de 16 anos**, **SALVO na condição de aprendiz a partir dos 14 anos** (art. 7º, XXXIII CF + art. 60 ECA)!',
      ],
      extraExample:
        'Um jovem de **14 anos** pode trabalhar? SIM, **exclusivamente como aprendiz**! Trabalho noturno, perigoso ou insalubre é proibido para menores de **18 anos**.',
      mnemonic: 'Criança < 12 | Adolescente 12..18 | Aprendiz = 14+ | Trabalho comum = 16+ | Noturno/Perigoso = 18+.',
    },
  },

  '1.4.9': {
    realityParagraphs: [
      'Os **artigos 20 ao 30 da LINDB (Decreto-Lei nº 4.657/1942)** foram colocados lá em 2018 para acabar com aquela mania de juiz e auditor condenar servidor público olhando só pro "mundo ideal dos livros" sem pensar nas consequências reais do caos que uma canetada gera na cidade!',
      'Para você, Agente Administrativo, o artigo mais reconfortante de todo o edital está aqui: o **art. 28 da LINDB**! Ele diz que o agente público **só responde pessoalmente** pelas suas decisões ou opiniões técnicas em caso de **DOLO ou ERRO GROSSEIRO**. Ou seja: se você trabalhou direito e deu sua opinião técnica honesta, você não vai pagar do bolso por mera diferença de interpretação!',
    ],
    keyPoints: [
      {
        label: 'Consequencialismo (Art. 20)',
        text: 'Nas esferas administrativa, controladora e judicial, **não se decidirá com base em valores jurídicos abstratos sem considerar as consequências práticas** da decisão!',
        badge: { text: 'PÉ NO CHÃO', tone: 'sky' },
      },
      {
        label: 'Regime de Transição / Modulação (Arts. 21 e 23)',
        text: 'Se anular um contrato/ato ou mudar uma regra antiga de interpretação, a autoridade deve indicar as consequências e prever **regime de transição** para não parar o serviço público do nada!',
        badge: { text: 'SEGURANÇA JURÍDICA', tone: 'emerald' },
      },
      {
        label: 'Responsabilidade Pessoal (Art. 28)',
        text: 'O agente público responde pessoalmente **APENAS** se agir com **DOLO** (má-fé/intenção) ou **ERRO GROSSEIRO** (culpa grave absurda, negligência chocante)!',
        badge: { text: 'DOLO ou ERRO GROSSEIRO', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Anulando Contrato de Limpeza de Escolas (Arts. 20 e 21)',
        scenario:
          'Um auditor descobre um vício burocrático num contrato de merenda ou limpeza de escolas em Curitiba. Pela LINDB, ele não pode só cancelar amanhã e deixar 100 escolas no lixo dizendo "princípio da moralidade abstrato" — tem que avaliar a consequência prática e dar prazo de **transição** até contratar outro!',
      },
      {
        title: 'Parecer Técnico com Divergência de Interpretação (Art. 28)',
        scenario:
          'Dois juristas discordam sobre uma regra nova da Lei de Licitações. Você seguiu uma das correntes de forma fundamentada, sem má-fé. Depois o Tribunal decide pela outra corrente: você **NÃO responde pessoalmente**, pois não houve **dolo** nem **erro grosseiro**!',
      },
    ],
    table: {
      title: 'Artigos de Ouro da LINDB (Arts. 20 a 30)',
      headers: ['Artigo', 'O Que Manda na Prática', 'Palavra-Chave de Prova'],
      rows: [
        ['**Art. 20**', 'Proíbe decidir só com princípios abstratos sem analisar efeitos reais.', '**Consequências práticas**'],
        ['**Art. 22**', 'Ao julgar gestor, considere os **obstáculos e dificuldades reais** que ele enfrentava.', '**Realidade do gestor**'],
        ['**Art. 24**', 'Se mudou a interpretação depois, **não pode anular ato antigo** válido na época.', '**Irretroatividade de nova interpretação**'],
        ['**Art. 28**', 'Agente público só responde pessoalmente por **dolo** ou **erro grosseiro**.', '[[ROSE:NÃO É CULPA LEVE!]] É erro grosseiro!'],
        ['**Art. 30**', 'Autoridades devem aumentar segurança jurídica por regulamentos, súmulas e respostas a consultas (vinculantes!).', '**Caráter vinculante**'],
      ],
    },
    examTrap:
      'Pegadinha clássica no art. 28 da LINDB: a banca troca **"erro grosseiro"** por **"culpa simples / culpa leve"** (dizendo que "o agente responde por dolo ou qualquer culpa"). [[ROSE:ERRADO!]] Na LINDB, erro comum/leve NÃO responsabiliza o agente pessoalmente — só **DOLO** ou **ERRO GROSSEIRO**!',
    deepDive: {
      headline: 'Compromisso de Ajustamento & Consulta Pública (Arts. 26 e 29)',
      points: [
        '**Art. 26**: a Administração pode celebrar **compromisso (acordo)** com interessados para eliminar irregularidade ou incerteza jurídica, ouvindo antes o órgão jurídico (Procuradoria).',
        '**Art. 29**: a edição de atos normativos pode ser precedida de **consulta pública** para ouvir a sociedade.',
        '**Art. 24**: veda que mudança posterior de orientação geral invalide situações jurídicas já plenamente constituídas à luz da orientação anterior.',
      ],
      extraExample:
        'Em 2023 a Prefeitura aceitava o protocolo X conforme orientação vigente; em 2026 o TCE muda o entendimento. Pelo art. 24, os atos de 2023 continuam válidos!',
      mnemonic: 'LINDB 20-30 = Consequências reais (20) + Dificuldades do gestor (22) + Dolo/Erro Grosseiro (28)!',
    },
  },

  '1.4.10': {
    realityParagraphs: [
      'A **LGPD (Lei nº 13.709/2018)** protege dados pessoais (nome, CPF, e-mail, endereço) e dados **sensíveis** (saúde, biometria, religião, opinião política). Mas atenção: o edital pediu especificamente o **CAPÍTULO IV da LGPD**, que trata do **Tratamento de Dados Pessoais pelo PODER PÚBLICO** (arts. 23 a 32)!',
      'A diferença gigante entre empresa privada e Prefeitura na LGPD é esta: uma loja precisa do seu consentimento para mandar propaganda. A **Prefeitura NÃO precisa pedir consentimento ("aceito os termos")** para tratar seu CPF na cobrança do IPTU ou no prontuário do posto de saúde — porque ela está **executando competências legais e políticas públicas**! Mas isso NÃO dá carta branca para sair divulgando dados por aí!',
    ],
    keyPoints: [
      {
        label: 'Regra do Poder Público (Art. 23)',
        text: 'Trata dados para atender sua **finalidade pública**, na persecução do **interesse público**, com o objetivo de executar competências ou atribuições legais — e tem que **informar as hipóteses** de forma clara e atualizada (no site!).',
        badge: { text: 'FINALIDADE PÚBLICA', tone: 'sky' },
      },
      {
        label: 'Indicação Obrigatória de Encarregado (DPO)',
        text: 'Todo órgão público **DEVE indicar um Encarregado** pelo tratamento de dados pessoais (art. 23, III) para atender cidadãos e a ANPD!',
        badge: { text: 'OBRIGATÓRIO', tone: 'emerald' },
      },
      {
        label: 'Formato Interoperável & Compartilhamento (Arts. 25 e 26)',
        text: 'Os dados devem ficar em formato **interoperável e estruturado** para uso compartilhado. Regra: **vedado** transferir dados do Poder Público para **entidades privadas**, **SALVO** exceções legais (ex.: execução descentralizada de atividade pública, dados acessíveis publicamente, prevenção a fraudes).',
        badge: { text: 'EXCEÇÕES', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Planilha de Beneficiários Publicada no Portal',
        scenario:
          'Um setor publica no Diário Oficial uma lista com Nome, CPF completo, telefone e diagnóstico médico de cidadãos que pediram benefício social. **Violação grave da LGPD!** Transparência não autoriza escancarar **dados pessoais sensíveis (saúde)** nem CPF integral sem necessidade — tem que anonimizar ou mascarar!',
      },
      {
        title: 'Cidadão Exigindo Que a Prefeitura Apague Seu Cadastro de IPTU',
        scenario:
          'Um munícipe chega bravo dizendo: "Pela LGPD eu não autorizo a Prefeitura a guardar meu nome e CPF!" O agente explica com educação: o Poder Público trata esses dados por **cumprimento de obrigação legal e execução de política pública (art. 7º e 23)** — logo, **não depende de consentimento** nem pode ser apagado enquanto houver vínculo legal/tributário!',
      },
    ],
    table: {
      title: 'LGPD no Poder Público (Capítulo IV — Arts. 23 a 32)',
      headers: ['Regra / Artigo', 'O Que Diz a Lei', 'Pegadinha de Banca'],
      rows: [
        ['**Base do Tratamento (Art. 23)**', 'Finalidade pública + interesse público + execução de lei.', '[[ROSE:NÃO PRECISA DE CONSENTIMENTO]] para cumprir lei ou política pública!'],
        ['**Encarregado / DPO (Art. 23, III)**', 'Indicação **obrigatória** pelo órgão público.', 'Dizer que órgão público é dispensado de ter Encarregado [[ROSE:(MENTIRA!)]].'],
        ['**Formato dos Dados (Art. 25)**', '**Interoperável e estruturado** para uso compartilhado.', 'Permite integração entre sistemas públicos (ex.: Saúde + Educação).'],
        ['**Transferência p/ Privado (Art. 26)**', 'Em regra **VEDADA**, com exceções expressas na lei.', 'Empresas privadas contratadas (ex.: terceirizada de sistema) seguem finalidade pública estrita!'],
        ['**Sanções ao Poder Público (Art. 52)**', 'Advertência, publicização, bloqueio/eliminação de dados...', '[[AMBER:NÃO CABE MULTA PECUNIÁRIA (R$)]] ao Poder Público — só aos entes privados!'],
      ],
    },
    examTrap:
      'DUAS pegadinhas mortais da LGPD para órgãos públicos: 1) Achar que a ANPD aplica **multa em dinheiro** contra a Prefeitura — **NÃO APLICA!** (Art. 52, § 3º exclui multas simples/diárias ao Poder Público, aplicando-se advertência, bloqueio, publicização e responsabilização dos servidores). 2) Achar que a Prefeitura precisa de **consentimento** do cidadão para cobrar imposto ou atender no SUS!',
    deepDive: {
      headline: 'LGPD x LAI (Transparência vs. Privacidade)',
      points: [
        'LGPD e LAI **não se anulam — elas convivem**! Dados de salários de servidores e contratos são públicos (LAI). Dados de saúde, CPF pessoal, endereço residencial e intimidade são protegidos (LGPD).',
        '**Art. 29**: os órgãos públicos podem solicitar, a qualquer momento, às entidades privadas que realizam operações de tratamento, informe específico sobre o âmbito e a natureza dos dados.',
        '**Art. 31**: quando houver infração à LGPD por órgãos públicos, a ANPD pode enviar informe com medidas cabíveis para fazer cessar a violação.',
      ],
      extraExample:
        'Ao enviar e-mail para 50 cidadãos inscritos num curso da Prefeitura, usar campo **CC** vazando os e-mails de todo mundo é falha de segurança pela LGPD — use sempre **CCO**!',
      mnemonic: 'Cap. IV LGPD: Sem consentimento p/ lei | Tem Encarregado (DPO) | Interoperável | Sem multa em R$ pro ente público!',
    },
  },
};
