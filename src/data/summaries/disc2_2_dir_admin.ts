import type { TopicStudyContent } from '../summaryTypes';

export const DISC_2_2_DIR_ADMIN: Record<string, TopicStudyContent> = {
  '2.2.1': {
    realityParagraphs: [
      '**Atos Administrativos** é provavelmente o assunto mais cobrado de todo o Direito Administrativo. Traduzindo sem enrolação: um ato administrativo é qualquer **declaração de vontade da Prefeitura** (emitir um alvará, aplicar uma multa, nomear um servidor, homologar uma licitação) usando o poder do Estado para produzir efeitos jurídicos imediatos.',
      'Você tem que dominar **três caixinhas** aqui: os **5 Requisitos/Elementos (CO-FI-FO-MO-OB)**, os **4 Atributos (PATI)** e a diferença brutal entre **Anulação** (ato ilegal!) e **Revogação** (ato legal que não interessa mais!).',
    ],
    keyPoints: [
      {
        label: '5 Requisitos (CO-FI-FO-MO-OB)',
        text: '**CO**mpetência, **FI**nalidade e **FO**rma = **SEMPRE VINCULADOS** (a lei manda como é). **MO**tivo e **OB**jeto = formam o **mérito** e podem ser **discricionários** (margem de escolha)!',
        badge: { text: '3 VINCULADOS · 2 LIVRES', tone: 'sky' },
      },
      {
        label: '4 Atributos (PATI)',
        text: '**P**resunção de legitimidade (verdadeiro até provarem o contrário — relativa!), **A**utoexecutoriedade (executa direto sem pedir ao juiz, ex.: rebocar carro em fila dupla), **T**ipicidade (previsto em lei) e **I**mperatividade (impõe mesmo se você não concordar).',
        badge: { text: 'PATI', tone: 'emerald' },
      },
      {
        label: 'Anulação vs. Revogação (Súmula 473 STF)',
        text: '**Anulação**: por **ILEGALIDADE** → efeito **retroativo (*ex tunc*)** → feita pela Administração **OU** pelo Judiciário! **Revogação**: por **CONVENIÊNCIA/OPORTUNIDADE** (ato era legal!) → efeito **daqui pra frente (*ex nunc*)** → **SÓ a Administração** faz!',
        badge: { text: 'CAI TODO ANO', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Anular Alvará Falso vs. Revogar Permissão de Banca de Jornal',
        scenario:
          'Se descobriram que o dono apresentou um documento falsificado para tirar alvará, o ato nasceu **ilegal** → **ANULAÇÃO** (apaga tudo desde o dia zero, *ex tunc*!). Agora, uma banca de jornal tinha permissão precária legal na praça, mas a Prefeitura vai reformar a praça e não é mais conveniente manter ali → **REVOGAÇÃO** (*ex nunc*, daqui pra frente!).',
      },
      {
        title: 'Convalidação (Consertar Cagada Leve)',
        scenario:
          'Um ato saiu com um vício leve e **sanável** de **Competência** (não exclusiva) ou de **Forma** (não essencial), e não causou lesão ao interesse público nem a terceiros? Em vez de jogar tudo fora, a autoridade superior pode **CONVALIDAR** (consertar com efeito retroativo — "FOCO" = Forma e Competência)!',
      },
    ],
    table: {
      title: 'Duelo Mortal: Anulação vs. Revogação vs. Convalidação',
      headers: ['Instituto', 'Motivo', 'Quem Pode Fazer?', 'Efeito no Tempo'],
      rows: [
        ['**Anulação**', '**Vício de ilegalidade** (ato nasceu podre)', 'Administração (autotutela) **OU** Poder Judiciário', '**Ex Tunc** (retroage — **T**esta pro passado!)'],
        ['**Revogação**', '**Mérito** (conveniência e oportunidade — ato era legal!)', '[[ROSE:SOMENTE a Administração!]] (Judiciário nunca revoga mérito alheio!)', '**Ex Nunc** (**N**unca retroage — daqui pra frente!)'],
        ['**Convalidação**', 'Vício **sanável** de **FO**rma ou **CO**mpetência (FOCO!)', 'A Administração Pública', '**Ex Tunc** (corrige retroativamente!)'],
      ],
    },
    examTrap:
      'TRÊS coisas que **NUNCA podem ser revogadas** (só anuladas se ilegais!): 1) **Atos vinculados** (não têm mérito!), 2) **Atos já consumados/exauridos** (ex.: férias já gozadas!) e 3) **Atos que já geraram direito adquirido**! E lembre: **NUNCA** o Judiciário pode revogar ato administrativo do Prefeito — o Judiciário só **anula** por ilegalidade!',
    deepDive: {
      headline: 'Vinculado vs. Discricionário & Cassação / Caducidade',
      points: [
        '**Ato Vinculado**: a lei não dá escolha (ex.: aposentadoria compulsória ou licença para construir quando cumpre todos os requisitos).',
        '**Ato Discricionário**: a lei dá liberdade dentro dos limites da razoabilidade (ex.: autorização de uso de praça para evento, demissão vs. suspensão se prevista gradação).',
        '**Cassação**: o ato era legal, mas o particular **descumpriu as condições** (ex.: cassar alvará de hotel que virou cassino ilegal). **Caducidade**: surgiu uma **lei nova** incompatível com o ato anterior!',
      ],
      extraExample:
        'Autoexecutoriedade **NÃO existe em TODOS os atos**: a Prefeitura pode demolir obra em risco iminente ou guinchar carro sem juiz, mas **NÃO pode cobrar multa em dinheiro invadindo a conta bancária** do cidadão sem ação judicial de execução!',
      mnemonic: 'CO-FI-FO (vinculados) / MO-OB (mérito) | ex Tunc = Testa (passado) | ex Nunc = Nunca retroage | FOCO = Convalidação!',
    },
  },

  '2.2.2': {
    realityParagraphs: [
      'Bens Públicos são tudo o que pertence às pessoas jurídicas de **Direito Público** (União, Estados, DF, Municípios, Autarquias e Fundações Públicas de direito público). A banca cobra basicamente **as 3 categorias de bens** (Uso Comum, Uso Especial e Dominicais) e os **superpoderes protetivos** que esses bens têm.',
      'A regra mais cobrada é o jogo de palavras **Afetação** vs. **Desafetação** e saber qual bem pode ser vendido e qual **NUNCA pode sofrer usucapião** (spoiler: **NENHUM bem público** pode ser tomado por usucapião, nem se alguém morar lá por 50 anos!).',
    ],
    keyPoints: [
      {
        label: '1. Uso Comum do Povo',
        text: 'Abertos a todo mundo: **ruas, praças, parques, praias, mares**. Em regra são gratuitos, mas podem cobrar taxa/tarifa (como pedágio ou entrada em parque específico)!',
        badge: { text: 'AFETADO', tone: 'sky' },
      },
      {
        label: '2. Uso Especial',
        text: 'Destinados a um serviço ou repartição pública: **prédio da Prefeitura, escola municipal, posto de saúde, viatura oficial, computador da mesa**.',
        badge: { text: 'AFETADO', tone: 'emerald' },
      },
      {
        label: '3. Dominicais (Patrimônio Disponível)',
        text: 'Não têm destinação pública (**desafetados**): **terrenos baldios da Prefeitura, prédios públicos desativados**. Só estes podem ser vendidos (alienados), cumprindo lei + avaliação + licitação!',
        badge: { text: 'DESAFETADO', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Vendendo Antigo Prédio de Escola Municipal Desativada',
        scenario:
          'Enquanto funcionava como escola, era bem de **Uso Especial** (**inalienável**, não podia vender!). O Município aprova **desafetação** (tira a destinação pública) → ele vira **Bem Dominical** → agora pode ser alienado mediante autorização legislativa, avaliação prévia e licitação (Leilão)!',
      },
      {
        title: 'Invasão de Terreno Baldio da Prefeitura por 30 Anos',
        scenario:
          'Um cidadão cercou um terreno **dominical** sem uso da Prefeitura de Curitiba e mora lá há 30 anos. Ele consegue usucapião? [[ROSE:NUNCA!]] Todos os bens públicos (inclusive dominicais!) são **IMPRESCRITÍVEIS** (art. 183, § 3º e art. 191 CF/88)!',
      },
    ],
    table: {
      title: 'Classificação e Regime Jurídico dos Bens Públicos',
      headers: ['Tipo de Bem', 'Tem Afetação Pública?', 'Pode Ser Vendido?', 'Sofre Usucapião ou Penhora?'],
      rows: [
        ['**Uso Comum do Povo** (praças, ruas)', '[[EMERALD:Sim]]', '[[ROSE:Não]] (enquanto afetado)', '[[ROSE:JAMAIS!]]'],
        ['**Uso Especial** (escolas, prédios adm.)', '[[EMERALD:Sim]]', '[[ROSE:Não]] (enquanto afetado)', '[[ROSE:JAMAIS!]]'],
        ['**Dominicais** (terrenos sem uso)', '[[AMBER:Não (desafetado)]]', '[[EMERALD:Sim]] (com lei + avaliação + licitação)', '[[ROSE:JAMAIS!]] (Imprescritíveis e Impenhoráveis!)'],
      ],
    },
    examTrap:
      'Pegadinha clássica: dizer que **"os bens dominicais, por não terem destinação pública, podem ser adquiridos por usucapião"** ou que **"os bens de empresas privadas prestadoras de serviço público são dominicais"**. [[TUDO MENTIRA!]] NENHUM bem público sofre usucapião — nem os dominicais! E bens usados na prestação de serviço público pelas concessionárias ficam protegidos enquanto vinculados ao serviço (reversíveis!).',
    deepDive: {
      headline: 'As 4 Garantias dos Bens Públicos & Uso Privativo',
      points: [
        '**Inalienabilidade relativa**: Uso Comum e Especial não se vendem; só **Dominicais** podem ser vendidos na forma da lei.',
        '**Imprescritibilidade**: **ZERO usucapião** sobre qualquer bem público!',
        '**Impenhorabilidade**: juiz não pode penhorar prédio ou conta pública para pagar dívida — paga-se por **precatório** (art. 100 CF)!',
        '**Uso por particulares**: **Autorização de uso** (ato unilateral precário no interesse do particular, ex.: festa na rua), **Permissão de uso** (precário, interesse misto/coletivo, ex.: banca), **Concessão de uso** (contrato estável por prazo determinado, ex.: restaurante em parque).',
      ],
      extraExample:
        'Bens de Empresas Públicas e Sociedades de Economia Mista (como a URBS) têm natureza de **bens privados** (salvo os diretamente afetados à prestação de serviço público essencial, que não podem ser penhorados para não parar o serviço!).',
      mnemonic: 'Uso Comum (povo) + Especial (órgão) = Afetados | Dominical = Desafetado | Usucapião = ZERO em todos!',
    },
  },

  '2.2.3': {
    realityParagraphs: [
      '**Serviços Públicos** são atividades essenciais que o Estado assume para atender necessidades da população (transporte coletivo, iluminação, água/esgoto, saúde, limpeza urbana). O Município pode prestar **diretamente** (com seus órgãos/autarquias) ou **delegar** para empresas privadas via **Concessão** ou **Permissão** (sempre com licitação!).',
      'O que despenca aqui são os **Princípios dos Serviços Públicos** (especialmente a **Continuidade**, que limita corte de serviço e greve!) e a diferença jurídica entre **Concessão** e **Permissão** na Lei 8.987/1995.',
    ],
    keyPoints: [
      {
        label: 'Princípios do Serviço Adequado',
        text: '**Continuidade** (não pode parar!), **Regularidade**, **Eficiência**, **Segurança**, **Atualidade** (modernidade técnica), **Generalidade** (atender todos sem discriminação), **Cortesia** e **Modicidade das Tarifas** (preço acessível!).',
        badge: { text: '8 PRINCÍPIOS', tone: 'emerald' },
      },
      {
        label: 'Quando Pode Cortar Serviço por Calote?',
        text: 'Não viola a continuidade interromper serviço em **emergência técnica** (risco imediato) OU após **prévio aviso** quando o usuário não paga a tarifa (e STF/STJ limitam corte de serviço essencial à própria Administração quando afeta hospitais/escolas/segurança!).',
        badge: { text: 'CORTE / AVISO PRÉVIO', tone: 'amber' },
      },
      {
        label: 'Concessão vs. Permissão vs. Autorização',
        text: '**Concessão**: contrato bilateral, **só Pessoa Jurídica ou Consórcio**, licitação por **Concorrência ou Diálogo Competitivo**, prazo longo/estável. **Permissão**: contrato de **adesão**, **precário**, **Pessoa Física ou Jurídica**, mediante **licitação**. **Autorização**: ato unilateral precário (não exige licitação clássica da 8.987!).',
        badge: { text: 'CAI MUITO', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Transporte Coletivo de Curitiba (Concessão)',
        scenario:
          'A operação dos ônibus urbanos em Curitiba é delegada a empresas/consórcios por **Concessão** mediante licitação prévia, sendo fiscalizada pelo poder concedente municipal para garantir **modicidade tarifária**, **atualidade** da frota e **continuidade**!',
      },
      {
        title: 'Corte de Água/Luz Sem Aviso Prévio',
        scenario:
          'Se um cidadão atrasa a conta de energia e a empresa corta sem enviar **aviso prévio**, o corte é **ILEGAL** por violar a continuidade e a Lei 8.987/95 (e nunca pode cortar na sexta-feira/véspera de feriado para impedir o pagamento)!',
      },
    ],
    table: {
      title: 'Formas de Delegação de Serviço Público (Lei 8.987/95)',
      headers: ['Modalidade', 'Natureza Jurídica', 'Quem Pode Receber?', 'Exige Licitação?'],
      rows: [
        ['**Concessão**', '**Contrato administrativo** bilateral estável', '[[ROSE:SÓ Pessoa Jurídica ou Consórcio]]', '**Sim** (Concorrência ou Diálogo Competitivo)'],
        ['**Permissão**', 'Contrato de **adesão** (título **precário**!)', '**Pessoa Física OU Jurídica**', '**Sim** (licitação prévia obrigatória)'],
        ['**Autorização**', '**Ato administrativo** unilateral e precário', 'Pessoa Física ou Jurídica', 'Em regra **não** (serviço simples/emergencial, art. 21, XI/XII CF)'],
      ],
    },
    examTrap:
      'Pegadinha clássica: dizer que **Permissão de serviço público é um ATO administrativo unilateral e sem licitação**, ou que **Pessoa Física pode ganhar Concessão**! Pela Lei 8.987/95, a **Permissão é CONTRATO de adesão e EXIGE licitação**, podendo ser dada a Pessoa Física ou Jurídica; já a **Concessão é EXCLUSIVA de Pessoa Jurídica ou Consórcio**!',
    deepDive: {
      headline: 'Formas de Extinção da Concessão (Não Confunda!)',
      points: [
        '**Encampação**: Prefeitura retoma o serviço **antes do prazo** por **interesse público** (precisa de **lei autorizativa** + **indenização PRÉVIA**!).',
        '**Caducidade**: Prefeitura retoma porque a empresa concessionária fez **merda / descumpriu o contrato** (não precisa de indenização prévia!).',
        '**Advento do termo contratual**: acabou o prazo do contrato naturalmente (ex.: 20 anos) e os bens essenciais voltam pro poder público (**reversão**).',
      ],
      extraExample:
        'Empresa de ônibus abandona metade das linhas por má gestão → Prefeitura aplica **Caducidade** (culpa da empresa!). Prefeitura quer estatizar uma linha funcionando perfeitamente para mudar o plano viário → **Encampação** (interesse público + lei + paga antes!).',
      mnemonic: 'Concessão = SÓ PJ/Consórcio | Permissão = PF ou PJ + Precária + Contrato Adesão | Caducidade = Culpa da empresa | Encampação = Interesse público!',
    },
  },

  '2.2.4': {
    realityParagraphs: [
      'A **Nova Lei de Licitações e Contratos (Lei Federal nº 14.133/2021)** substituiu de vez a velha Lei 8.666/93! Para o Agente Administrativo de Curitiba, isso aqui é ouro puro porque compras, pregões e gestão de contratos são o dia a dia do cargo.',
      'A mudança número um que você tem que saber antes de qualquer coisa: **TOMADA DE PREÇOS E CONVITE MORRERAM!** Foram extintas! Hoje só existem **5 modalidades** (`Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo`), e a escolha entre Pregão e Concorrência **não depende mais do valor em reais**, e sim da **NATUREZA do objeto** (comum vs. especial)!',
    ],
    keyPoints: [
      {
        label: 'As 5 Modalidades Atuais (Art. 28)',
        text: '1) **Pregão** (bens e serviços **comuns** — obrigatório!). 2) **Concorrência** (obras, bens e serviços **especiais**). 3) **Concurso** (trabalho técnico, científico ou **artístico**). 4) **Leilão** (venda/alienação de bens móveis/imóveis). 5) **Diálogo Competitivo** (inovação complexa que o mercado precisa ajudar a desenhar!).',
        badge: { text: 'EXTINTAS: CONVITE/TP', tone: 'rose' },
      },
      {
        label: 'Rito Comum (Fases Invertidas como Regra!)',
        text: 'Hoje a regra é: **Julga as propostas ANTES e habilita SÓ O VENCEDOR depois** (igual era no Pregão)! Só se inverte por exceção justificada.',
        badge: { text: 'JULGA → HABILITA', tone: 'emerald' },
      },
      {
        label: 'Dispensa (Art. 75) vs. Inexigibilidade (Art. 74)',
        text: '**Dispensa**: competição **É possível**, mas a lei autoriza não licitar (**ROL TAXATIVO**, ex.: pequeno valor, emergência de até 1 ano). **Inexigibilidade**: competição é **INVIÁVEL** (**ROL EXEMPLIFICATIVO**, ex.: fornecedor exclusivo, artista consagrado, notória especialização)!',
        badge: { text: 'DESPENCA', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Compra de Papel A4, Toners e Cadeiras para Curitiba',
        scenario:
          'São bens com padrões de desempenho e qualidade objetivamente definidos no mercado (**bens comuns**). Não importa se custa R$ 80 mil ou R$ 5 milhões: a modalidade obrigatória é o **PREGÃO** (preferencialmente eletrônico, pelo menor preço ou maior desconto)!',
      },
      {
        title: 'Contratando Show Famoso vs. Reforma de Obra Simples',
        scenario:
          'Contratar uma banda consagrada pela crítica para evento da Fundação Cultural de Curitiba = competição inviável (**Inexigibilidade**, art. 74, II). Construir um viaduto complexo = **Concorrência**. Vender viaturas velhas da frota = **Leilão** (maior lance!).',
      },
    ],
    table: {
      title: 'Nova Lei 14.133/2021: Modalidades e Critérios de Julgamento',
      headers: ['Modalidade', 'Para Que Serve', 'Critérios de Julgamento Permitidos'],
      rows: [
        ['**Pregão**', 'Bens e serviços **COMUNS** (nunca obras comuns/especiais, salvo serviço comum de engenharia!).', 'Menor preço **OU** Maior desconto.'],
        ['**Concorrência**', 'Obras, bens e serviços **ESPECIAIS**.', 'Menor preço, melhor técnica/conteúdo artístico, técnica e preço, maior retorno econômico, maior desconto.'],
        ['**Concurso**', 'Trabalho técnico, científico ou artístico (dá **prêmio** ou remuneração).', 'Melhor técnica ou conteúdo artístico.'],
        ['**Leilão**', 'Alienação (venda) de bens móveis ou imóveis.', '[[EMERALD:Maior lance!]] (Não precisa leiloeiro oficial se servidor designado fizer!).'],
        ['**Diálogo Competitivo**', 'Soluções inovadoras/complexas sem solução pronta no mercado.', 'Regras do edital após fase de diálogo.'],
      ],
    },
    examTrap:
      'QUATRO pegadinhas campeãs na Lei 14.133/21: 1) Citar **Convite** ou **Tomada de Preços** como vigentes → [[ROSE:EXTINTAS!]] 2) Dizer que **Pregão** pode usar critério "técnica e preço" → [[ROSE:NÃO PODE!]] Pregão é só **menor preço** ou **maior desconto**! 3) Trocar rol taxativo (Dispensa) por exemplificativo (Inexigibilidade). 4) Esquecer que a regra hoje é **licitação eletrônica** (presencial só excepcionalmente, com gravação em áudio e vídeo)!',
    deepDive: {
      headline: 'Inovação na 14.133: Agente de Contratação, Portal Nacional & Prazos',
      points: [
        '**Agente de Contratação**: servidor **efetivo ou empregado público dos quadros permanentes** (concursado!) que conduz a licitação (no Pregão pode ser chamado de **Pregoeiro**!).',
        '**PNCP** (Portal Nacional de Contratações Públicas): divulgação lá é **condição indispensável de eficácia** dos contratos!',
        '**Emergência (dispensa art. 75, VIII)**: contrato emergencial pode durar no máximo **1 ANO** (antes na 8.666 eram 180 dias!), **vedada a prorrogação** e vedada recontratação da mesma empresa!',
      ],
      extraExample:
        'Nos modos de disputa na 14.133, pode ser **aberto** (lances públicos sucessivos), **fechado** (envelopes/sigilo até abertura) ou **combinado** (aberto-fechado / fechado-aberto).',
      mnemonic: '5 Modalidades = P-C-C-L-D (Pregão, Concorrência, Concurso, Leilão, Diálogo) | Pregão = Menor Preço ou Maior Desconto | Emergência = 1 ano improrrogável!',
    },
    isFullModule: true,
  },

  '2.2.5': {
    realityParagraphs: [
      'A **Lei Municipal nº 16.466/2024** é novíssima (2024!) e regula o **Processo Administrativo no âmbito da Administração Pública Municipal de Curitiba** — basicamente o equivalente municipal à famosa Lei Federal 9.784/99, só que adaptada para a rotina eletrônica e presencial da Prefeitura de Curitiba!',
      'Se você trabalhar no protocolo ou instruindo processos em Curitiba, é essa lei que dita os **direitos do cidadão/administrado**, os **impedimentos e suspeições** de quem analisa, os **prazos**, a **motivação** e a **autotutela** (anular/revogar atos).',
    ],
    keyPoints: [
      {
        label: 'Direitos do Administrado (Cidadão)',
        text: 'Ser tratado com **respeito**, ter **ciência** da tramitação e **vista/cópias** dos autos, formular **alegações e juntar documentos antes da decisão**, e **fazer-se assistir facultativamente por advogado** (não é obrigatório!).',
        badge: { text: 'DIREITOS', tone: 'emerald' },
      },
      {
        label: 'Deveres do Administrado',
        text: 'Expor os fatos **conforme a verdade**, proceder com **lealdade, urbanidade e boa-fé**, **não agir de modo temerário** e prestar informações solicitadas.',
        badge: { text: 'DEVERES', tone: 'sky' },
      },
      {
        label: 'Impedimento vs. Suspeição do Servidor',
        text: '**Impedimento (critério OBJETIVO — grave!)**: servidor tem interesse direto/indireto no processo, atuou como perito/testemunha, ou envolve cônjuge/parente até 3º grau (**TEM** dever de comunicar à chefia!). **Suspeição (SUBJETIVO)**: **amizade íntima** ou **inimizade notória** com o interessado.',
        badge: { text: 'DESPENCA', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Analisando Processo do Seu Irmão ou Inimigo Mortal',
        scenario:
          'Cai na sua mesa um pedido de alvará da empresa do **seu irmão** → você está **IMPEDIDO** (parentesco objetivo até 3º grau) e DEVE se declarar impedido imediatamente (omitir isso é falta grave!). Se cair processo de um **vizinho que é seu inimigo declarado** → caso de **SUSPEIÇÃO**!',
      },
      {
        title: 'Decisão Sem Explicação (Nulidade por Falta de Motivação)',
        scenario:
          'Um cidadão pede isenção cumprindo os papéis e recebe de volta só uma palavra: *"Indeferido"*. Isso viola a **motivação explícita, clara e congruente** exigida pela Lei 16.466/2024 (aceitando-se apenas motivação *aliunde* remetendo a parecer técnico anexo!).',
      },
    ],
    table: {
      title: 'Impedimento vs. Suspeição & Autotutela no Processo de Curitiba',
      headers: ['Conceito', 'Hipóteses Típicas', 'Regra Prática'],
      rows: [
        ['**Impedimento** (Objetivo)', 'Interesse próprio, atuou como perito/testemunha/advogado, litígio judicial/adm. com parte (ou cônjuge/parente).', 'Presunção absoluta de parcialidade; comunicação **obrigatória** pelo servidor!'],
        ['**Suspeição** (Subjetivo)', '**Amizade íntima** ou **inimizade notória** com interessado/parente até 3º grau.', 'Se o servidor não se afastar, a parte pode arguir; se indeferido, cabe recurso sem efeito suspensivo em regra.'],
        ['**Desistência do Interessado**', 'Cidadão desiste do pedido por escrito.', 'Não impede a Prefeitura de continuar o processo se houver **interesse público**!'],
      ],
    },
    examTrap:
      'Duas pegadinhas de processo administrativo: 1) Se vários cidadãos entrarem com pedido igual, mas um deles **desistir**, a desistência **SÓ atinge quem desistiu** — e se o tema envolver interesse público relevante, a Administração **continua o processo de ofício**! 2) A omissão em comunicar **impedimento** constitui **falta grave** para fins disciplinares!',
    deepDive: {
      headline: 'Decadência Administrativa & Recursos',
      points: [
        '**Autotutela e Prazo Decadencial**: o direito da Administração de anular atos favoráveis ao administrado de boa-fé decai em **5 anos** (regra geral consolidada no rito administrativo brasileiro, salvo comprovada má-fé!).',
        '**Recurso administrativo**: em regra **NÃO tem efeito suspensivo** (o ato já vai valendo enquanto o recurso é julgado, salvo risco de dano grave de difícil reparação!).',
        '**Prioridade de tramitação**: idosos (60+), pessoas com deficiência, doença grave ou vítimas de violência têm prioridade na fila de processos.',
      ],
      extraExample:
        'Nos processos eletrônicos em Curitiba, intimações podem ocorrer por meio eletrônico oficial cadastrado pelo cidadão, garantindo agilidade e registro de ciência.',
      mnemonic: 'Impedimento = Fato objetivo (parente/interesse) | Suspeição = Amizade íntima / Inimizade notória | Desistiu ≠ Para se houver interesse público!',
    },
  },

  '2.2.6': {
    realityParagraphs: [
      'O **PAD (Processo Administrativo Disciplinar)** dentro do Estatuto de Curitiba (**Lei Municipal nº 1.656/1958**) é o procedimento usado para investigar e punir um servidor municipal que fez merda (faltou demais sem justificativa, desviou material, agrediu cidadão, fraudou sistema).',
      'Não confunda **Sindicância** (investigação preliminar rápida, parecida com inquérito policial, para descobrir o que rolou ou aplicar pena bem leve) com **PAD** (processo formal completo com comissão, citação, provas, defesa e julgamento obrigatório para penas pesadas como **suspensão longa, demissão ou cassação de aposentadoria**!).',
    ],
    keyPoints: [
      {
        label: 'Dever de Apurar (Não Pode Fazer Vista Grossa!)',
        text: 'A autoridade/chefia que souber de irregularidade no serviço público é **OBRIGADA a promover a apuração imediata** — se acobertar o colega, comete crime/infração também!',
        badge: { text: 'OBRIGATÓRIO', tone: 'rose' },
      },
      {
        label: 'Contraditório e Ampla Defesa (Obrigatórios!)',
        text: 'Nenhuma pena grave cai do céu sem **citação, oportunidade de defesa escrita, produção de provas e acompanhamento de testemunhas**. (Mas pela Súmula Vinculante 5 STF, **advogado é facultativo**!).',
        badge: { text: 'GARANTIA CF/88', tone: 'emerald' },
      },
      {
        label: 'Independência das Instâncias (Civil, Penal e Adm.)',
        text: 'O servidor pode ser **demitido no PAD mesmo antes de acabar o processo criminal**! A decisão penal SÓ trava/absolve no administrativo em **2 casos** se houver **absolvição criminal por INEXISTÊNCIA DO FATO** ou **NEGATIVA DE AUTORIA**!',
        badge: { text: 'CAI DEMAIS', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Absolvido no Criminal Por "Falta de Provas"',
        scenario:
          'Um servidor foi acusado de desviar impressoras, foi demitido no PAD, e no processo criminal o juiz absolveu ele **"por falta de provas suficientes para condenação criminal"**. Ele volta pro cargo? [[ROSE:NÃO!]] Porque a instância administrativa é independente e exige prova menos rígida que a penal — só voltaria se o juiz criminal dissesse **"o fato não existiu"** ou **"não foi ele"**!',
      },
      {
        title: 'Afastamento Preventivo Durante o PAD',
        scenario:
          'Para evitar que o servidor investigado atrapalhe a colheita de provas ou apague arquivos do computador da Prefeitura, a autoridade pode determinar o **afastamento preventivo** dele temporariamente — **SEM prejuízo da remuneração** (não é punição ainda!).',
      },
    ],
    table: {
      title: 'Reflexo da Sentença Penal no PAD Administrativo',
      headers: ['Resultado no Processo Criminal (Penal)', 'O Que Acontece no PAD Administrativo?'],
      rows: [
        ['**Condenação criminal definitiva**', 'Vincula! Reconhece fato e autoria (pode gerar perda do cargo!).'],
        ['**Absolvição por INEXISTÊNCIA DO FATO**', '[[EMERALD:Absolve no PAD também!]] (O fato nem aconteceu!).'],
        ['**Absolvição por NEGATIVA DE AUTORIA**', '[[EMERALD:Absolve no PAD também!]] (Provou-se que não foi ele!).'],
        ['**Absolvição por FALTA DE PROVAS**', '[[ROSE:NÃO absolve no PAD!]] (Pode ser punido normalmente na esfera administrativa!).'],
        ['**Absolvição por não constituir CRIME**', '[[ROSE:NÃO absolve no PAD!]] (Pode não ser crime penal, mas ser falta administrativa grave!).'],
      ],
    },
    examTrap:
      'Pegadinha mortal das instâncias: dizer que "absolvido por insuficiência de provas na esfera penal, o servidor deve ser imediatamente reintegrado no PAD". [[MENTIRA!]] Só **Inexistência do Fato** e **Negativa de Autoria** comunicam e derrubam o PAD! Além disso, o **afastamento preventivo** durante o PAD é **com remuneração**!',
    deepDive: {
      headline: 'Diferença Entre Responsabilidade Civil, Penal e Administrativa',
      points: [
        '**Administrativa**: violou dever funcional do Estatuto (penas: repreensão/advertência, suspensão, demissão, cassação de aposentadoria).',
        '**Civil**: causou prejuízo financeiro (dano ao erário) → dever de indenizar/ressarcir.',
        '**Penal**: cometeu crime contra a Administração (peculato, corrupção passiva, concussão, prevaricação). As 3 podem **cumular** pelo mesmo fato!',
      ],
      extraExample:
        'Se um agente pede propina (vantagem indevida) no balcão: responde no **Penal** (corrupção passiva), no **Administrativo** (demissão via PAD) e por **Improbidade**!',
      mnemonic: 'PAD só cai na absolvição penal por: INEXISTÊNCIA do fato ou NEGATIVA de autoria (I-N)!',
    },
  },

  '2.2.7': {
    realityParagraphs: [
      'A **Responsabilidade Civil do Estado (art. 37, § 6º da CF/88)** responde a uma pergunta simples: **"Se um agente da Prefeitura fizer cagada e machucar alguém ou bater no carro de um cidadão, quem paga a conta?"**',
      'A resposta tem **DUAS ETAPAS** que a banca ama misturar: na 1ª etapa (**Estado → Cidadão**), a responsabilidade é **OBJETIVA** pelo **Risco Administrativo** (o cidadão NÃO precisa provar que o servidor teve culpa — só prova a conduta, o dano e o nexo!). Na 2ª etapa (**Estado → Servidor**, chamada **Ação Regressiva**), é **SUBJETIVA** (a Prefeitura só cobra do bolso do servidor se provar que ele agiu com **DOLO ou CULPA**)!',
    ],
    keyPoints: [
      {
        label: '1ª Etapa: Município → Vítima (OBJETIVA)',
        text: '**Teoria do Risco Administrativo**: basta provar **Conduta do agente (nessa qualidade) + Dano + Nexo causal**. **NÃO precisa provar dolo ou culpa do servidor!**',
        badge: { text: 'OBJETIVA', tone: 'sky' },
      },
      {
        label: '2ª Etapa: Município → Servidor (SUBJETIVA)',
        text: '**Direito de Regresso**: depois de indenizar o cidadão, a Prefeitura só pode cobrar do servidor se provar que o agente teve **DOLO ou CULPA**!',
        badge: { text: 'SUBJETIVA', tone: 'amber' },
      },
      {
        label: 'Excludentes do Risco Administrativo',
        text: 'Como NÃO é Risco Integral, o Estado **se livra** (não indeniza!) se provar **Culpa EXCLUSIVA da vítima**, **Força maior** ou **Fato exclusivo de terceiro**! (Se for culpa **concorrente**, indeniza pela metade!).',
        badge: { text: 'EXCLUDENTES', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Viatura da Prefeitura Bate no Carro do Cidadão',
        scenario:
          'Um motorista da Prefeitura fura o sinal e bate no carro de um morador. O morador processa **o Município de Curitiba** ([[ROSE:NUNCA diretamente o motorista!]] — tese de Repercussão Geral do STF!), e ganha sem precisar provar culpa subjetiva (**objetiva**). Depois, a Prefeitura abre ação regressiva e cobra do motorista se provar **imprudência/culpa** dele (**subjetiva**)!',
      },
      {
        title: 'Suicida Se Joga na Frente do Ônibus / Enchente Histórica',
        scenario:
          'Se alguém se joga de propósito na frente do veículo oficial em velocidade normal (**culpa exclusiva da vítima**), o Município **NÃO indeniza** (rompeu o nexo causal!). Já se o Município deixou um bueiro aberto sem sinalização (**omissão específica/culpa do serviço**), responde!',
      },
    ],
    table: {
      title: 'Responsabilidade Civil do Estado vs. Ação Regressiva vs. Improbidade',
      headers: ['Relação', 'Tipo de Responsabilidade', 'Exige Provar Dolo ou Culpa?'],
      rows: [
        ['**Município / Concessionária → Cidadão** (Ação)', '**Objetiva** (Risco Administrativo)', '[[EMERALD:NÃO!]] (Basta Conduta + Dano + Nexo)'],
        ['**Município → Servidor** (Ação Regressiva)', '**Subjetiva**', '[[AMBER:SIM!]] (Dolo **OU** Culpa do servidor)'],
        ['**Improbidade Administrativa** (Lei 8.429 + 14.230/21)', 'Sancionatória pessoal', '[[ROSE:SÓ DOLO!]] (Culpa foi extinta em 2021!)'],
        ['**Omissão GENÉRICA do Estado** (ex.: assalto na rua)', '**Subjetiva** (Culpa do serviço / *Faute du service*)', '[[AMBER:SIM!]] (Provar que serviço faltou, atrasou ou foi falho)'],
      ],
    },
    examTrap:
      'DUAS pegadinhas campeãs do STF: 1) O cidadão lesado pode escolher processar diretamente o servidor público na Justiça para receber mais rápido? [[ROSE:NÃO!]] (Tese STF Tema 940: a vítima deve acionar a **pessoa jurídica estatal** — o servidor só responde depois na regressiva!). 2) Em caso de **força maior** ou **culpa exclusiva da vítima**, o Estado responde mesmo assim? [[ROSE:NÃO!]] Porque o Brasil adota o **Risco Administrativo** (que admite excludentes), e não o Risco Integral (que só vale em casos raríssimos como dano nuclear)!',
    deepDive: {
      headline: 'Quando Vale Para Empresas Privadas (Concessionárias)?',
      points: [
        'Pelo próprio **art. 37, § 6º da CF/88**, as pessoas jurídicas de **direito privado prestadoras de serviços públicos** (ex.: empresas de ônibus de Curitiba, concessionária de água/luz) também respondem **OBJETIVAMENTE** pelos danos causados na prestação do serviço — **tanto a usuários quanto a não-usuários (terceiros)**, segundo o STF!',
        'Já empresas estatais que exploram **atividade econômica pura** (ex.: banco público concorrendo no mercado) respondem pelas regras privadas comuns, não pelo § 6º!',
      ],
      extraExample:
        'Um ônibus concessionário de Curitiba atropela um pedestre (que nem era passageiro): a empresa de ônibus responde **objetivamente** segundo o STF!',
      mnemonic: 'Estado → Cidadão = OBJETIVA (sem culpa) | Estado → Servidor = SUBJETIVA (dolo ou culpa) | Improbidade = SÓ DOLO!',
    },
  },
};
