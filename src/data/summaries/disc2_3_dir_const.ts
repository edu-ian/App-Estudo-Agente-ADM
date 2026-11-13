import type { TopicStudyContent } from '../summaryTypes';

export const DISC_2_3_DIR_CONST: Record<string, TopicStudyContent> = {
  '2.3.1': {
    realityParagraphs: [
      'Os **Princípios Fundamentais** estão nos **arts. 1º ao 4º da Constituição Federal de 1988** e formam o "cartão de visitas" do Brasil. A banca ama misturar as quatro listinhas desses artigos porque são parecidas no nome, mas completamente diferentes na função jurídica.',
      'Macete de sobrevivência na prova: **Fundamentos (art. 1º)** são o que o Brasil JÁ É na base (**substantivos** — `SO-CI-DI-VA-PLU`). **Objetivos (art. 3º)** são as metas que o Brasil quer alcançar (**VERBOS no infinitivo!** — `CON-GA-ER-PRO`). **Relações Internacionais (art. 4º)** ditam como o Brasil conversa com outros países.',
    ],
    keyPoints: [
      {
        label: 'Art. 1º — Fundamentos (SO-CI-DI-VA-PLU)',
        text: '**SO**berania, **CI**dadania, **DI**gnidade da pessoa humana, **VA**lores sociais do trabalho e da livre iniciativa, **PLU**ralismo político (**não é só partido, é pluralismo de ideias!**).',
        badge: { text: 'ART. 1º CF/88', tone: 'sky' },
      },
      {
        label: 'Art. 1º, Parágrafo Único & Art. 2º',
        text: 'Todo poder emana do povo, que o exerce por representantes eleitos (**democracia indireta**) ou diretamente (**plebiscito, referendo e iniciativa popular** — **democracia semidireta/participativa!**). Art. 2º: Poderes **Legislativo, Executivo e Judiciário** são **independentes e harmônicos entre si** (Município só tem Legislativo e Executivo!).',
        badge: { text: 'SEMIDIRETA', tone: 'emerald' },
      },
      {
        label: 'Art. 3º — Objetivos (VERBOS!)',
        text: '**CON**struir sociedade livre, justa e solidária; **GA**rantir o desenvolvimento nacional; **ER**radicar a pobreza/marginalização e reduzir desigualdades sociais/regionais; **PRO**mover o bem de todos, sem preconceitos.',
        badge: { text: 'CON-GA-ER-PRO', tone: 'amber' },
      },
      {
        label: 'Art. 4º — Relações Internacionais + Parágrafo Único',
        text: 'Independência nacional, prevalência dos **direitos humanos**, autodeterminação dos povos, não-intervenção, igualdade entre Estados, defesa da paz, solução pacífica dos conflitos, repúdio ao terrorismo e racismo, cooperação entre povos e **concessão de asilo político**. **Parágrafo único**: o Brasil buscará a **integração econômica, política, social e cultural dos povos da AMÉRICA LATINA**!',
        badge: { text: 'ASILO & AM. LATINA', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Questão Clássica de Troca de Artigo',
        scenario:
          'O enunciado diz: *"Constitui fundamento da República Federativa do Brasil erradicar a pobreza e a marginalização."* [[ROSE:ERRADO NA HORA!]] "Erradicar" é **verbo** → é **OBJETIVO** fundamental (**art. 3º**), e não fundamento (**art. 1º**)!',
      },
      {
        title: 'Município de Curitiba e a Tripartição de Poderes',
        scenario:
          'A União e o Paraná têm 3 Poderes (Legislativo, Executivo e Judiciário). Já o **Município de Curitiba** possui apenas **dois Poderes** independentes e harmônicos: **Executivo** (Prefeito) e **Legislativo** (Câmara Municipal). Não existe "Poder Judiciário Municipal" no Brasil!',
      },
    ],
    table: {
      title: 'Mapa dos Arts. 1º ao 4º da CF/88 (Nunca Mais Misture)',
      headers: ['Artigo', 'Categoria', 'Como Identificar na Hora', 'Exemplos-Chave'],
      rows: [
        ['**Art. 1º**', '**Fundamentos**', 'Sempre **SUBSTANTIVOS** (`SO-CI-DI-VA-PLU`)', 'Soberania, cidadania, dignidade, valores do trabalho/livre iniciativa, pluralismo político'],
        ['**Art. 2º**', '**Poderes da União**', '**Independentes e harmônicos**', 'Legislativo, Executivo e Judiciário (sem subordinação entre si)'],
        ['**Art. 3º**', '**Objetivos Fundamentais**', 'Sempre **VERBOS no infinitivo** (`CON-GA-ER-PRO`)', '**Con**struir, **Ga**rantir, **Er**radicar/reduzir, **Pro**mover o bem de todos'],
        ['**Art. 4º**', '**Relações Internacionais**', 'Olhar para **fora do país**', 'Autodeterminação, não-intervenção, repúdio ao terrorismo/racismo, **asilo político**'],
      ],
    },
    examTrap:
      'Pegadinha clássica: a banca troca **"erradicar a pobreza"** (Objetivo — art. 3º) por **"dignidade da pessoa humana"** (Fundamento — art. 1º), ou escreve que o Brasil busca integração apenas econômica com os países do **Mercosul** ou da **América do Sul**. [[ROSE:MENTIRA!]] O parágrafo único do art. 4º fala expressamente em **AMÉRICA LATINA** (inclui México, América Central, Caribe...)!',
    deepDive: {
      headline: 'Forma de Estado, Forma de Governo, Sistema e Regime',
      points: [
        '**Forma de Estado**: **Federação** (Estado Federal — descentralização política entre União, Estados, DF e Municípios autônomos; **cláusula pétrea**!).',
        '**Forma de Governo**: **República** (eletividade, temporariedade dos mandatos e dever de prestar contas — oposto de Monarquia).',
        '**Sistema de Governo**: **Presidencialismo** (Presidente acumula Chefia de Estado e Chefia de Governo — oposto de Parlamentarismo).',
        '**Regime Político**: **Estado Democrático de Direito** (leis valem para governantes e governados + soberania popular).',
      ],
      extraExample:
        'Atenção à diferença: **Soberania** só pertence à **República Federativa do Brasil** (no plano internacional). Os entes internos (União, Estado do PR, Município de Curitiba) possuem **AUTONOMIA** (capacidade de autogoverno, auto-organização, autolegislação e autoadministração dentro da Constituição), nunca soberania!',
      mnemonic: 'Forma de Estado = Fe-deração | Forma de Governo = Re-pública | Sistema = Presidencialismo ("Fe-Re-Pre") | Fundamentos = Substantivos (SOCIDIVAPLU) | Objetivos = Verbos!',
    },
  },

  '2.3.2': {
    realityParagraphs: [
      'Os **Direitos e Garantias Fundamentais** estão no **Título II da CF/88 (arts. 5º ao 17)** — e o **art. 5º** sozinho tem 79 incisos que despencam em qualquer prova de nível médio e superior. A pegada aqui não é decorar poesia constitucional, é decorar **as EXCEÇÕES**: quando a polícia pode entrar na sua casa, quando cabe prisão civil por dívida, o que cada Remédio Constitucional protege e quem é brasileiro nato!',
      'Se a questão falar de direitos individuais, lembre que **nenhum direito fundamental é absoluto** (nem o direito à vida — há pena de morte em caso de guerra declarada!). Tudo tem ponderação e limite legal.',
    ],
    keyPoints: [
      {
        label: 'Inviolabilidade de Casa (Art. 5º, XI)',
        text: 'Ninguém entra na casa sem consentimento do morador, **SALVO** em 4 situações: 1) **Flagrante delito**, 2) **Desastre**, 3) **Prestar socorro** (esses 3 = **qualquer hora, dia ou noite!**), ou 4) **Por determinação JUDICIAL** — **APENAS DURANTE O DIA**!',
        badge: { text: 'DIA vs. QUALQUER HORA', tone: 'rose' },
      },
      {
        label: 'Expressão, Reunião e Associação (Art. 5º, IV, XVI-XXI)',
        text: 'Livre manifestação do pensamento, **vedado o anonimato**! Reunião pacífica sem armas independe de autorização, exigindo apenas **prévio aviso** à autoridade (e não frustrar outra reunião já convocada). Associação lícita: ninguém é obrigado a associar-se ou permanecer associado; suspensão por **decisão judicial**, mas **dissolução compulsória só com TRÂNSITO EM JULGADO**!',
        badge: { text: 'VEDADO ANONIMATO', tone: 'sky' },
      },
      {
        label: 'Os 5 Remédios Constitucionais (Art. 5º, LXVIII-LXXIII)',
        text: '**HC** = liberdade de locomoção (gratuito, qualquer pessoa impetra!); **HD** = conhecer/retificar dados pessoais em banco público/governamental (gratuito; exige recusa prévia administrativa!); **MS** = direito líquido e certo não amparado por HC/HD (prazo decadencial de **120 dias**); **MI** = falta de norma regulamentadora; **Ação Popular** = **SOMENTE CIDADÃO** (eleitor!) anula ato lesivo ao patrimônio público/moralidade/meio ambiente.',
        badge: { text: 'REMÉDIOS', tone: 'emerald' },
      },
      {
        label: 'Direitos Sociais (Art. 6º-8º) & Nacionalidade (Art. 12)',
        text: 'Art. 6º inclui **alimentação, moradia e transporte** (além de educação, saúde, trabalho, lazer, segurança, previdência, proteção à maternidade/infância e assistência aos desamparados). Trabalho noturno/perigoso/insalubre: **proibido a menores de 18**; qualquer trabalho: **proibido a menores de 16, salvo aprendiz a partir dos 14**! Brasileiros natos (*jus soli* + critérios *jus sanguinis*) e cargos privativos (`MP3.COM`).',
        badge: { text: '14 / 16 / 18 ANOS', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Mandado Judicial às 23h vs. Flagrante às 3h da Manhã',
        scenario:
          'Um oficial de justiça aparece com ordem do juiz às **23h** para cumprir busca e apreensão numa casa sem consentimento do morador → [[ROSE:ILEGAL!]] Ordem judicial **só durante o dia**! Agora, se está saindo fumaça de incêndio (**desastre**) ou alguém grita por socorro às **3h da madrugada**, a polícia/bombeiro pode arrombar sem ordem judicial!',
      },
      {
        title: 'Escolha o Remédio Certo na Repartição',
        scenario:
          '1) Servidor da Prefeitura teve um **dado pessoal errado** no cadastro funcional e a repartição **recusou corrigir** → **Habeas Data**! 2) Candidato aprovado dentro das vagas teve sua nomeação negada ilegalmente (prova documental pronta, direito líquido e certo) → **Mandado de Segurança**! 3) Eleitor quer anular contrato superfaturado da Prefeitura → **Ação Popular**!',
      },
    ],
    table: {
      title: 'Tabela Definitiva dos Remédios Constitucionais',
      headers: ['Remédio', 'Protege O Quê?', 'Quem Pode Propor?', 'Tem Custas / Particularidade?'],
      rows: [
        ['**Habeas Corpus (HC)**', 'Liberdade de **locomoção** (ir e vir)', 'Qualquer pessoa (inclusive estrangeiro/PJ a favor de PF), sem advogado!', '[[EMERALD:Gratuito!]] (Preventivo ou Repressivo)'],
        ['**Habeas Data (HD)**', 'Acesso ou retificação de **dados pessoais** em registro público', 'O próprio interessado (pessoa física ou jurídica)', '[[EMERALD:Gratuito!]] Exige prova de **recusa administrativa prévia** (Súmula 2 STJ)'],
        ['**Mandado de Segurança (MS)**', 'Direito **líquido e certo** (não amparado por HC/HD)', 'Titular do direito (com advogado)', '**Paga custas** · Prazo de **120 dias** da ciência do ato'],
        ['**Mandado de Injunção (MI)**', 'Falta de **norma regulamentadora** que inviabiliza direito constitucional', 'Prejudicado pela omissão legislativa', 'Supre omissão concreta (ex.: direito de greve do servidor)'],
        ['**Ação Popular**', 'Anular ato lesivo ao **patrimônio público, moralidade, meio ambiente, patrimônio histórico**', '[[ROSE:SOMENTE CIDADÃO]] (brasileiro com título de eleitor regular!)', '**Isento de custas**, salvo comprovada **má-fé**'],
      ],
    },
    examTrap:
      'Quatro armadilhas de ouro no art. 5º: 1) **Prisão civil por dívida** só existe hoje para o **devedor de pensão alimentícia** (o STF proibiu prender o depositário infiel — Súmula Vinculante 25!). 2) **Extradição**: **brasileiro NATO NUNCA é extraditado**! Brasileiro **naturalizado** só por crime comum **antes** da naturalização ou tráfico de drogas a qualquer tempo! 3) **Gratuidades**: **HC, HD e Ação Popular** (salvo má-fé no último); **MS e MI NÃO são gratuitos**! 4) **Direito líquido e certo** no MS não é "direito óbvio", é direito **comprovado de plano por documentos** (não cabe perícia/oitiva de testemunha no MS)!',
    deepDive: {
      headline: 'Cargos Privativos de Brasileiro Nato (Art. 12, § 3º) — MP3.COM',
      points: [
        '**M**inistro do STF (todos os 11!).',
        '**P**residente e Vice-Presidente da República.',
        '**P**residente da Câmara dos Deputados.',
        '**P**residente do Senado Federal (Senador/Deputado comum pode ser naturalizado, mas o PRESIDENTE da Casa não!).',
        '**C**arreira diplomática.',
        '**O**ficial das Forças Armadas.',
        '**M**inistro de Estado da Defesa (outros Ministérios podem ser ocupados por naturalizados!).',
      ],
      extraExample:
        'Atenção à **Súmula Vinculante 11**: o uso de **algemas** só é lícito em casos de resistência, fundado receio de fuga ou perigo à integridade física, justificado por escrito — se violado, anula a prisão/ato e responsabiliza o agente!',
      mnemonic: 'MP3.COM = cargos privativos de NATO | Gratuitos = HC, HD e Ação Popular (salvo má-fé) | Casa à noite = Só Flagrante, Desastre ou Socorro!',
    },
  },

  '2.3.3': {
    realityParagraphs: [
      'Muita gente trava em **Poder Constituinte** porque parece filosofia alemã, mas para a prova é simples pra caramba: é só perguntar **"Quem fez a Constituição do zero?"** vs. **"Quem pode mexer nela depois sem rasgar tudo?"**.',
      'Temos o **Poder Constituinte Originário** (o chefão que derruba a ordem antiga e escreve uma Constituição nova do zero) e os **Poderes Constituintes Derivados** (que recebem autorização da própria Constituição para atualizá-la via **Emenda** ou escrever as Constituições dos Estados).',
    ],
    keyPoints: [
      {
        label: 'Poder Constituinte Originário (PCO)',
        text: 'Cria uma **nova Constituição** do zero (como a de 1988). É **Inicial** (não se apoia em nada anterior), **Ilimitado/Autônomo** (juridicamente não obedece à Constituição velha!), **Incondicionado** (não segue rito pré-definido) e **Permanente** (fica adormecido no povo).',
        badge: { text: 'ILIMITADO · INCONDICIONADO', tone: 'rose' },
      },
      {
        label: 'Poder Constituinte Derivado Reformador (PCDR)',
        text: 'Altera a Constituição via **Emendas Constitucionais (EC)** seguindo o **art. 60 da CF/88**. É **Subordinado**, **Limitado** (tem cláusulas pétreas!) e **Condicionado** (rito rígido: **3/5** dos votos em **2 turnos** em **ambas as Casas** do Congresso!).',
        badge: { text: '3/5 · 2 TURNOS · 2 CASAS', tone: 'sky' },
      },
      {
        label: 'Poder Constituinte Derivado Decorrente (PCDD)',
        text: 'É o poder dos **Estados-membros** elaborarem suas **Constituições Estaduais** (e do **DF** elaborar sua **Lei Orgânica**). **ATENÇÃO**: segundo a doutrina majoritária e STF, **Municípios NÃO têm Poder Constituinte Derivado Decorrente** — a Lei Orgânica Municipal vem de poder de auto-organização de 2º grau!',
        badge: { text: 'ESTADOS & DF', tone: 'amber' },
      },
      {
        label: 'Cláusulas Pétreas (Art. 60, § 4º) — FO-VO-SE-DI',
        text: 'Nem por Emenda Constitucional pode haver proposta **tendente a ABOLIR**: 1) **FO**rma federativa de Estado; 2) **VO**to direto, secreto, universal e periódico; 3) **SE**paração dos Poderes; 4) **DI**reitos e garantias individuais.',
        badge: { text: 'NÃO PODE ABOLIR', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Emenda Constitucional Querendo Acabar com a Eleição Secreta',
        scenario:
          'Um deputado apresenta PEC para tornar o voto nas eleições aberto (não secreto). Mesmo se conseguir 3/5 na Câmara e no Senado, ela é **inconstitucional** por violar **cláusula pétrea** (`FO-VO-SE-DI`: voto direto, **secreto**, universal e periódico)!',
      },
      {
        title: 'Curitiba Tentando Mudar a Constituição Estadual',
        scenario:
          'O Estado do Paraná exerceu seu **Poder Constituinte Derivado Decorrente** ao promulgar a Constituição do Paraná em 1989. Já a **Lei Orgânica de Curitiba (1990)** deve obedecer tanto à **CF/88** quanto à **Constituição do Estado do Paraná** (dupla subordinação — art. 29 CF)!',
      },
    ],
    table: {
      title: 'Originário vs. Derivado Reformador vs. Derivado Decorrente',
      headers: ['Tipo de Poder', 'O Que Faz?', 'Características', 'Limites'],
      rows: [
        ['**Originário (Histórico / Revolucionário)**', 'Cria uma **nova Constituição** do zero', '**Inicial, Ilimitado, Autônomo, Incondicionado, Permanente**', 'Não tem limites jurídicos anteriores (direito positivo)'],
        ['**Derivado Reformador**', 'Modifica a CF via **Emenda Constitucional (PEC)**', '**Subordinado, Limitado, Condicionado**', 'Limites formais (3/5, 2 turnos, 2 Casas), circunstanciais e **Cláusulas Pétreas**'],
        ['**Derivado Decorrente**', 'Elabora as **Constituições Estaduais** (e LO do DF)', 'Subordinado à CF/88 (princípio da simetria)', 'Deve respeitar princípios sensíveis e estabelecidos da CF/88'],
      ],
    },
    examTrap:
      'Pegadinha clássica em dois detalhes do art. 60: 1) **Quem propõe PEC?** **1/3** da Câmara ou do Senado, **Presidente da República**, ou **mais da metade das Assembleias Legislativas** (manifestando-se cada uma por maioria relativa) — [[ROSE:cidadão NÃO pode propor PEC por iniciativa popular!]] 2) **PEC NÃO vai para sanção ou veto do Presidente!** Aprovada nos dois turnos por 3/5 em cada Casa, ela é **promulgada pelas Mesas da Câmara e do Senado**! E lembre: **voto obrigatório NÃO é cláusula pétrea** — o que é pétreo é o voto **direto, secreto, universal e periódico**!',
    deepDive: {
      headline: 'Limitações Circunstanciais + Poder Constituinte Difuso (Mutação)',
      points: [
        '**Limitações Circunstanciais (art. 60, § 1º)**: a Constituição **NÃO pode ser emendada** na vigência de **Intervenção Federal**, **Estado de Defesa** ou **Estado de Sítio**! ("Na crise, ninguém mexe na Constituição!")',
        '**PEC Rejeitada ou Prejudicada (art. 60, § 5º)**: matéria de PEC rejeitada ou tida por prejudicada **não pode ser objeto de nova proposta na mesma sessão legislativa** (o ano parlamentar!).',
        '**Poder Constituinte Difuso (Mutação Constitucional)**: mudança **informal** do sentido da Constituição pela interpretação (ex.: STF reinterpretando texto sem mudar uma vírgula da letra constitucional).',
      ],
      extraExample:
        'Se o Brasil estiver em **Estado de Defesa** por grave calamidade pública em uma região e o Congresso votar uma PEC no meio disso, a emenda inteira nasce **nula** por violar limitação circunstancial do art. 60, § 1º!',
      mnemonic: 'Cláusula Pétrea = FO-VO-SE-DI (Voto obrigatório NÃO está!) | Proibição de PEC = Intervenção, Defesa e Sítio ("IDS") | Promulgação de EC = Mesas da Câmara e Senado (SEM Presidente)!',
    },
  },

  '2.3.4': {
    realityParagraphs: [
      'A **Hierarquia das Normas** (famosa **Pirâmide de Kelsen**) responde à pergunta: *"Se duas regras batem de frente, quem manda em quem?"*. No topo absoluto está a **Constituição Federal** (e as Emendas Constitucionais). Se qualquer lei contrariar a Constituição, essa lei é **inconstitucional** e cai.',
      'Mas o grande pulo do gato que as bancas usam para derrubar candidato desatento está em dois pontos: **1) Não existe hierarquia entre Lei Complementar e Lei Ordinária!** e **2) Onde entram os Tratados Internacionais de Direitos Humanos!**',
    ],
    keyPoints: [
      {
        label: 'Topo: Bloco de Constitucionalidade',
        text: '**Constituição Federal (CF/88)** + **Emendas Constitucionais (EC)** + **Tratados Internacionais de Direitos Humanos** aprovados pelo rito especial de **3/5 em 2 turnos nas 2 Casas** (art. 5º, § 3º — equivalem a **Emendas Constitucionais**, ex.: Convenção dos Direitos das Pessoas com Deficiência!).',
        badge: { text: 'STATUS CONSTITUCIONAL', tone: 'rose' },
      },
      {
        label: 'Degrau Supralegal (STF)',
        text: '**Tratados de Direitos Humanos** que **NÃO** passaram pelo rito de 3/5 em 2 turnos (ex.: Pacto de San José da Costa Rica): ficam **ABAIXO da Constituição** e **ACIMA de todas as leis comuns** (**Supralegais**)!',
        badge: { text: 'SUPRALEGAL', tone: 'amber' },
      },
      {
        label: 'Degrau Legal (Normas Primárias — SEM hierarquia entre si!)',
        text: '**Leis Complementares (LC)**, **Leis Ordinárias (LO)**, **Leis Delegadas**, **Medidas Provisórias (MP)**, **Decretos Legislativos** e **Resoluções**. **LC e LO têm o MESMO nível hierárquico** — o que muda é só o **quórum** (LC = maioria absoluta; LO = maioria simples) e a **matéria reservada pela CF**!',
        badge: { text: 'LC = LO EM HIERARQUIA', tone: 'sky' },
      },
      {
        label: 'Base: Normas Infralegais (Secundárias)',
        text: '**Decretos regulamentares do Prefeito/Presidente**, portarias, instruções normativas, resoluções administrativas. Servem apenas para **regulamentar/detalhar** a lei — **jamais** podem criar obrigação nova contra a lei!',
        badge: { text: 'INFRALEGAL', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Decreto do Prefeito Tentando Criar Multa Não Prevista em Lei',
        scenario:
          'O Prefeito baixa um **Decreto** (norma infralegal) inventando uma multa administrativa nova que não existe em nenhuma Lei Municipal. Esse decreto é **ilegal**! Por força do **Princípio da Legalidade**, decreto só regulamenta lei preexistente (salvo exceção raríssima de decreto autônomo de organização administrativa sem aumento de despesa!).',
      },
      {
        title: 'Lei Ordinária Invadindo Matéria de Lei Complementar',
        scenario:
          'Se a Constituição diz *"Lei Complementar disporá sobre X"* e o Legislativo aprova uma **Lei Ordinária** tratando de X, essa Lei Ordinária é **inconstitucional** (vício formal). Não porque LC é "superior", mas porque invadiu a **competência material** reservada à LC!',
      },
    ],
    table: {
      title: 'Pirâmide Normativa Brasileira (Visão STF Atualizada)',
      headers: ['Degrau na Pirâmide', 'Quais Normas Estão Aqui?', 'Quórum / Regra-Chave'],
      rows: [
        ['**1. Constitucional (Topo)**', 'CF/88 + Emendas Constitucionais + **Tratados de DH aprovados por 3/5 em 2 turnos**', 'Poder originário ou EC (3/5 em 2 turnos nas 2 Casas)'],
        ['**2. Supralegal**', '**Tratados de Direitos Humanos** aprovados por **rito comum** (ex.: Pacto de San José)', 'Paralisam a eficácia de qualquer lei comum contrária!'],
        ['**3. Legal (Primário)**', '**Lei Complementar, Lei Ordinária, Medida Provisória, Lei Delegada, Tratados comuns**', '[[SKY:NÃO há hierarquia entre LC e LO!]] LC exige maioria absoluta; LO exige maioria simples'],
        ['**4. Infralegal (Base)**', 'Decretos regulamentares, Portarias, Instruções Normativas, Ordens de Serviço', 'Subordinados à Lei — **não podem inovar** criando direitos/obrigações autônomas'],
      ],
    },
    examTrap:
      'DUAS pegadinhas mortais: 1) Se a banca afirmar que **"a Lei Complementar é hierarquicamente superior à Lei Ordinária"**, [[ROSE:MARQUE ERRADO!]] O STF já pacificou que não existe hierarquia entre elas — a diferença é de **matéria** (a CF reserva certos temas à LC) e de **quórum** (LC = maioria absoluta; LO = maioria simples/relativa). 2) **Tratado internacional comum** (ex.: acordo comercial/tributário que não é de Direitos Humanos) entra com força de **LEI ORDINÁRIA**, e não supralegal!',
    deepDive: {
      headline: 'Leis Orgânicas Municipais & Eficácia Temporária de MPs',
      points: [
        '**Medida Provisória (art. 62 CF)**: editada pelo Presidente em caso de **relevância e urgência**, tem força imediata de lei por **60 dias**, prorrogáveis por mais **60 dias** (total máximo de 120 dias!). Vedada em Direito Penal, Processual Penal/Civil, Nacionalidade, Cidadania, Orçamento (salvo crédito extraordinário) e matéria reservada à LC!',
        '**Lei Orgânica Municipal (LOM)**: aprovada pela Câmara Municipal em **2 turnos**, com intervalo mínimo de **10 dias**, por **2/3 dos vereadores** (art. 29 CF). Não vai à sanção do Prefeito — é promulgada pela própria Câmara!',
        '**Antinomia (Conflito de Leis de mesmo nível)**: usa 3 critérios clássicos — **Hierárquico** (*lex superior*), **Cronológico** (*lex posterior*) e da **Especialidade** (*lex specialis*). Especialidade prevalece sobre cronologia!',
      ],
      extraExample:
        'Se o Estatuto dos Servidores de Curitiba (lei específica) traz uma regra de prazo para o servidor e surge depois uma lei estadual geral (comum) que trata de prazos em geral, continua valendo a regra específica municipal para os servidores municipais (*lex specialis*)!',
      mnemonic: 'Tratado DH 3/5 = Emenda | Tratado DH comum = Supralegal | Tratado comum = Lei Ordinária | LC vs LO = Sem hierarquia, só matéria e quórum!',
    },
  },

  '2.3.5': {
    realityParagraphs: [
      'Quando dois direitos da Constituição parecem brigar entre si (ex.: **liberdade de imprensa** vs. **privacidade/honra**, ou **direito de greve do servidor** vs. **continuidade da saúde pública**), o intérprete não pode simplesmente jogar um dos dois no lixo! É para isso que servem os **Princípios de Interpretação Constitucional**.',
      'Além dos princípios interpretativos, as bancas adoram cobrar neste tópico a **Classificação das Normas Constitucionais quanto à Eficácia** (de José Afonso da Silva): **Plena, Contida e Limitada** — que aparece direto em prova de Direito Constitucional!',
    ],
    keyPoints: [
      {
        label: 'Princípio da Unidade da Constituição',
        text: 'A Constituição deve ser interpretada como um **todo harmônico**. **Não existem normas constitucionais originárias inconstitucionais** nem hierarquia entre normas originárias da CF/88!',
        badge: { text: 'SEM HIERARQUIA INTERNA', tone: 'sky' },
      },
      {
        label: 'Concordância Prática (Harmonização) & Máxima Efetividade',
        text: '**Concordância Prática**: quando dois princípios colidem, busca-se **equilíbrio** sem sacrificar totalmente nenhum deles (redução proporcional). **Máxima Efetividade**: dar à norma constitucional (especialmente direitos fundamentais) o **sentido que extraia mais eficiência social possível**!',
        badge: { text: 'EQUILÍBRIO + EFICIÊNCIA', tone: 'emerald' },
      },
      {
        label: 'Força Normativa & Efeito Integrador',
        text: '**Força Normativa (Konrad Hesse)**: a Constituição não é um "pedaço de papel" (como dizia Lassalle), ela tem força jurídica obrigatória real! **Efeito Integrador**: preferir interpretações que reforcem a **unidade política e social** do país.',
        badge: { text: 'HESSE vs. LASSALLE', tone: 'amber' },
      },
      {
        label: 'Eficácia das Normas (José Afonso da Silva): Plena, Contida e Limitada',
        text: '**Plena**: aplicação **imediata, direta e integral** (não precisa de lei nenhuma — ex.: "Brasília é a Capital Federal"). **Contida**: aplicação imediata, mas **lei futura pode RESTRINGIR** (ex.: livre exercício de qualquer trabalho, *"atendidas as qualificações profissionais que a lei estabelecer"*!). **Limitada**: **NÃO produz efeitos plenos sozinha** — depende de lei regulamentadora (ex.: direito de greve do servidor público — art. 37, VII)!',
        badge: { text: 'DESPENCA EM PROVA', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Identificando Norma de Eficácia CONTIDA vs. LIMITADA pelo Texto',
        scenario:
          'Olhe a diferença nas frases da CF/88: 1) *"É livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer."* → Você JÁ pode trabalhar hoje, mas a lei pode **restringir** (ex.: exigir OAB para advogado) = **Eficácia CONTIDA**! 2) *"O direito de greve será exercido nos termos e nos limites definidos em lei específica."* → O texto trava o exercício até vir a lei = **Eficácia LIMITADA**!',
      },
      {
        title: 'Concordância Prática num Caso Real',
        scenario:
          'Um jornal quer publicar dados de uma investigação contra agente público. De um lado, **liberdade de informação**; do outro, **intimidade/sigilo fiscal**. Aplicando a **concordância prática** e a **proporcionalidade**, o juiz autoriza divulgar os fatos de interesse público, mas **veda expor dados bancários/íntimos irrelevantes**!',
      },
    ],
    table: {
      title: 'Eficácia das Normas Constitucionais + Princípios Interpretativos',
      headers: ['Conceito / Classificação', 'Aplicabilidade / Regra Central', 'Exemplo Clássico da CF/88'],
      rows: [
        ['**Eficácia Plena**', '**Direta, imediata e integral** (não precisa de lei nem admite restrição infraconstitucional)', '*"Brasília é a Capital Federal"*; Remédios Constitucionais; Laicidade do Estado'],
        ['**Eficácia Contida (ou Redutível)**', '**Direta e imediata**, mas **restringível por lei posterior**', 'Liberdade profissional (*"atendidas as qualificações que a lei estabelecer"* — art. 5º, XIII)'],
        ['**Eficácia Limitada**', '**Indireta, mediata e reduzida** — depende de **lei regulamentadora** para produzir todos os efeitos', 'Direito de greve do servidor público (art. 37, VII); Participação nos lucros; Normas programáticas'],
        ['**Unidade & Harmonização**', 'Nenhum princípio é absoluto; não há conflito insuperável dentro da CF originária', 'Conciliar liberdade de expressão com proteção à honra/imagem'],
      ],
    },
    examTrap:
      'Pegadinha clássica: a banca diz que *"a norma constitucional de eficácia **limitada** não possui efeito jurídico nenhum antes da lei regulamentadora."* [[ROSE:FALSO!]] Mesmo a norma de eficácia limitada já produz **eficácia mínima** (efeito negativo/vinculante): ela **revoga leis anteriores contrárias** e **impede que o legislador crie leis contra ela**! Outra pegadinha: confundir **Eficácia Contida** (nasce ampla e a lei pode **reduzir**) com **Eficácia Limitada** (nasce travada e precisa de lei para **ampliar/viabilizar**)!',
    deepDive: {
      headline: 'Subespécies de Eficácia Limitada & Proporcionalidade (3 Subprincípios)',
      points: [
        '**Normas Limitadas de Princípio Institutivo**: criam órgãos/entidades na lei futura (ex.: criação de Territórios, Defensoria). **Normas Limitadas de Princípio Programático**: traçam programas/metas sociais para o Estado cumprir ao longo do tempo (ex.: art. 3º, saúde, educação).',
        '**Proporcionalidade tem 3 degraus**: 1) **Adequação** (o meio serve para atingir o fim?); 2) **Necessidade** (não existe meio menos gravoso?); 3) **Proporcionalidade em sentido estrito** (o benefício supera o prejuízo?).',
        '**Recepção vs. Repristinação**: quando nasce uma nova Constituição, leis antigas compatíveis são **recepcionadas** (mesmo se mudarem de status, ex.: CTN era LO e virou LC!); já **repristinação automática NÃO existe** no Brasil (lei revogada não volta a viger se a lei revogadora for revogada, salvo previsão expressa!).',
      ],
      extraExample:
        'O **Código Tributário Nacional (CTN)** foi feito como **Lei Ordinária** em 1966. Quando veio a CF/88 exigindo Lei Complementar para normas gerais tributárias, o CTN foi **recepcionado materialmente com status de Lei Complementar**!',
      mnemonic: 'Plena = 100% pronta | Contida = Pronta, mas lei pode CORTAR | Limitada = Travada, precisa de lei para LIBERAR (mas já proíbe lei contrária)!',
    },
  },

  '2.3.6': {
    realityParagraphs: [
      'Os **arts. 37 ao 41 da Constituição Federal** são o **coração absoluto** da prova de **Agente Administrativo de Curitiba** — porque regulam literalmente a SUA futura vida dentro da Prefeitura! Aqui você encontra o **LIMPE**, concurso público, reserva de vagas, cargo em comissão vs. função de confiança, **quando pode acumular dois cargos**, teto remuneratório, **estabilidade aos 3 anos** e aposentadoria.',
      'Não leia esses artigos por cima: 90% das pegadinhas de Direito Constitucional em concursos municipais saem da troca de prazos (validade do concurso vs. estágio probatório) e das exceções de acumulação de cargos!',
    ],
    keyPoints: [
      {
        label: 'LIMPE & Acesso ao Serviço Público (Art. 37, I–IV)',
        text: 'Princípios obrigatórios nos 3 Poderes de todos os entes: **L**egalidade, **I**mpessoalidade, **M**oralidade, **P**ublicidade e **E**ficiência. Cargos acessíveis a brasileiros e **estrangeiros na forma da lei**. **Validade do concurso**: **até 2 anos**, prorrogável **uma única vez por igual período** (ex.: se o edital deu 1 ano, só prorroga por +1 ano!).',
        badge: { text: 'ATÉ 2 + 2 ANOS', tone: 'sky' },
      },
      {
        label: 'Cargo em Comissão vs. Função de Confiança (Art. 37, V)',
        text: '**Função de Confiança**: exercida **EXCLUSIVAMENTE por servidores de cargo efetivo** (concursados)! **Cargo em Comissão**: livre nomeação e exoneração (pode ser de fora), mas com **percentual mínimo reservado a servidores de carreira**! **AMBOS** destinam-se **apenas às atribuições de DIREÇÃO, CHEFIA e ASSESSORAMENTO**!',
        badge: { text: 'DI-CHE-AS', tone: 'emerald' },
      },
      {
        label: 'Acumulação Remunerada de Cargos (Art. 37, XVI)',
        text: 'Regra: **PROIBIDO acumular**! **EXCEÇÕES (havendo compatibilidade de horários)**: 1) **2 cargos de professor**; 2) **1 de professor + 1 técnico ou científico**; 3) **2 cargos/empregos privativos de profissionais de saúde**, com profissões regulamentadas! Vale inclusive para autarquias, fundações, EP e SEM!',
        badge: { text: '2 PROF · 1+1 · 2 SAÚDE', tone: 'amber' },
      },
      {
        label: 'Estabilidade e Perda do Cargo (Art. 41) & Teto (Art. 37, XI)',
        text: 'Adquire **estabilidade** após **3 ANOS de efetivo exercício** o servidor nomeado para cargo de provimento efetivo por concurso + **avaliação especial de desempenho** obrigatória por comissão! **Teto no Município**: subsídio do **Prefeito**! Aposentadoria compulsória: **75 anos** (Lei Complementar 152/2015).',
        badge: { text: '3 ANOS = ESTABILIDADE', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Agente Administrativo Pode Acumular Outro Cargo?',
        scenario:
          'Você passou para **Agente Administrativo** na Prefeitura de Curitiba (nível médio/burocrático comum, não exige graduação técnica específica nem é saúde ou magistério). Pode acumular com outro cargo público de Auxiliar Administrativo no Estado? [[ROSE:NÃO!]] A jurisprudência entende que cargo burocrático de nível médio **NÃO se enquadra como "técnico ou científico"**! Já se você fosse **Professor** + **Agente Administrativo**, não pode (porque Agente Adm não é técnico/científico!); só se fosse **1 Professor + 1 Técnico em Contabilidade/Enfermagem/Engenheiro**!',
      },
      {
        title: 'Prorrogação de Concurso com Prazo de 1 Ano',
        scenario:
          'O edital da Prefeitura fixou prazo de validade de **1 ano**. Acabando esse 1 ano, o Prefeito pode prorrogar por mais 2 anos? [[ROSE:NÃO!]] A CF diz *"por igual período"* — se nasceu de 1 ano, prorroga por no máximo **+1 ano** (total 2 anos). Só chega a 4 anos quando o prazo inicial for de **2 anos**!',
      },
    ],
    table: {
      title: 'Raio-X dos Arts. 37 a 41 da CF/88 para a Prova',
      headers: ['Tema Constitucional', 'Regra Seca da CF/88', 'Pegadinha Clássica'],
      rows: [
        ['**Validade do Concurso**', '**Até 2 anos**, prorrogável **1x por igual período**', 'Não é "sempre 2 anos" — é **ATÉ** 2 anos!'],
        ['**Função de Confiança vs. Comissão**', 'Função = **SÓ efetivo** · Comissão = **Livre** (c/ % p/ carreira). Ambos = **Direção, Chefia, Assessoramento**', 'Trocar quem é exclusivo de efetivo (Função!) ou colocar cargo operacional em comissão!'],
        ['**Teto Municipal (Art. 37, XI)**', 'Subsídio do **Prefeito** (para Executivo e Legislativo municipais!)', 'Procuradores municipais: Súmula/Tema 510 STF aplica **90,25% do STF** (Desembargador TJ), mas regra geral municipal é o **Prefeito**!'],
        ['**Estabilidade (Art. 41)**', '**3 anos** de efetivo exercício + **avaliação especial de desempenho**', 'Estável só perde cargo por: **Sentença judicial transitada em julgado**, **PAD c/ ampla defesa**, **Avaliação periódica (LC)** ou **Excesso de despesa c/ pessoal (art. 169, § 4º)**'],
        ['**Mandato Eletivo (Art. 38)**', '**Prefeito**: afasta e **opta** pela remuneração. **Vereador**: acumula se houver compatibilidade de horários!', 'Deputado/Senador/Governador: afasta do cargo sem opção (recebe só o mandato)!'],
      ],
    },
    examTrap:
      'Atenção ao **art. 37, § 10**: é vedada a percepção simultânea de **proventos de aposentadoria** com remuneração de cargo público, **RESSALVADOS** os cargos acumuláveis na forma da Constituição, os cargos eletivos e os cargos em comissão! E outro erro fatal: **o servidor público civil TEM direito à greve** (nos termos de lei específica — STF aplica por analogia a Lei Geral de Greve com corte de ponto pelos dias parados!) e **TEM direito à livre associação sindical** — quem é **PROIBIDO de sindicalizar-se e fazer greve** são os **MILITARES** (art. 142, § 3º, IV)!',
    deepDive: {
      headline: 'Reserva PcD, Nepotismo (SV 13) & Direito de Greve / Sindicalização',
      points: [
        '**Súmula Vinculante 13 (Nepotismo)**: proíbe nomear cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade **até o 3º grau** (inclusive!) para **cargo em comissão, função de confiança ou gratificada**! Exceção do STF: **cargos políticos** (Secretário Municipal, Ministro), salvo fraude ou inaptidão técnica flagrante!',
        '**Reserva de Vagas PcD (art. 37, VIII)**: lei definirá percentual dos cargos e empregos para pessoas com deficiência (âmbito federal: mínimo 5% até 20% — Lei 8.112/90).',
        '**Perda do Cargo do Servidor Estável (4 hipóteses taxativas)**: 1) Sentença judicial transitada em julgado; 2) Processo Administrativo Disciplinar (PAD) assegurada ampla defesa; 3) Insuficiência de desempenho em avaliação periódica (na forma de LC); 4) Corte de gastos com pessoal (art. 169, § 4º — só depois de reduzir 20% de comissionados e exonerar não estáveis!).',
      ],
      extraExample:
        'Um servidor estável em Curitiba **NÃO pode ser demitido "por falta de verba" antes** de a Prefeitura cortar pelo menos **20% das despesas com cargos em comissão/funções de confiança** e exonerar todos os **servidores não estáveis**! Se fizerem antes, o ato é nulo e ele é **reintegrado**!',
      mnemonic: 'DI-CHE-AS (Direção, Chefia e Assessoramento) | Função = SÓ Efetivo | 4 perdas do estável: "Sentença, PAD, Avaliação, Corte 169" | Nepotismo = até 3º grau (SV 13)!',
    },
  },
};
