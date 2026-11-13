import type { TopicStudyContent } from '../summaryTypes';

export const DISC_2_1_ADM_PUBLICA: Record<string, TopicStudyContent> = {
  '2.1.1': {
    realityParagraphs: [
      'Antes de sair decorando lei, entenda o básico: **o que é Administração Pública?** A doutrina divide essa expressão em dois sentidos bem fáceis de visualizar — o sentido de **"QUEM faz"** (**Subjetivo / Formal / Orgânico**) e o sentido de **"O QUE é feito"** (**Objetivo / Material / Funcional**).',
      'Além disso, toda a máquina pública anda sobre **5 trilhos sagrados da Constituição (art. 37): o famoso L-I-M-P-E** (Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência). Só que cuidado: na **Legalidade**, para nós cidadãos vale "pode fazer tudo que a lei não proíbe"; já para o **servidor público**, só pode fazer o que a lei **AUTORIZA ou MANDA**!',
    ],
    keyPoints: [
      {
        label: 'Sentido Subjetivo (Formal / Orgânico)',
        text: 'Escrito com iniciais maiúsculas (**A**dministração **P**ública): são os **ÓRGÃOS, ENTIDADES e AGENTES** — ou seja, **QUEM** presta o serviço (Prefeitura, Secretarias, Autarquias, servidores).',
        badge: { text: 'QUEM FAZ', tone: 'sky' },
      },
      {
        label: 'Sentido Objetivo (Material / Funcional)',
        text: 'Escrito com minúsculas (**a**dministração **p**ública): é a **ATIVIDADE** em si — **O QUE** ela faz (serviço público, poder de polícia, fomento, intervenção).',
        badge: { text: 'O QUE FAZ', tone: 'emerald' },
      },
      {
        label: 'Os 5 Princípios Expressos (LIMPE)',
        text: '**L**egalidade (só o que a lei manda), **I**mpessoalidade (sem favorecimento nem autopromoção!), **M**oralidade (honestidade/boa-fé), **P**ublicidade (transparência) e **E**ficiência (fazer bem feito sem desperdiçar — entrou pela EC 19/1998!).',
        badge: { text: 'LIMPE · ART. 37', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Legalidade no Balcão vs. Vida Privada',
        scenario:
          'Na sua casa você pode pintar o muro de roxo com bolinhas amarelas porque nenhuma lei proíbe (**autonomia da vontade**). No trabalho da Prefeitura, mesmo que pareça uma ideia genial dar um "desconto camarada" fora da lei no IPTU do vizinho, **NÃO PODE** — falta autorização legal (**legalidade estrita**)!',
      },
      {
        title: 'Impessoalidade Contra Autopromoção',
        scenario:
          'O Prefeito manda colocar placas "Obra da Gestão do Amigo Fulano" com sua foto nas escolas municipais. Isso viola a **Impessoalidade** (art. 37, § 1º CF): a obra é do Município de Curitiba, nunca promoção pessoal de político!',
      },
    ],
    table: {
      title: 'Sentido Subjetivo vs. Objetivo & Os 5 Princípios do LIMPE',
      headers: ['Conceito', 'Palavra-Chave de Prova', 'Pegadinha Clássica'],
      rows: [
        ['**Sentido Subjetivo / Formal / Orgânico**', '**S**ujeitos (**quem** trabalha: órgãos, entidades, agentes)', 'Trocar por "atividade administrativa" [[ROSE:(que é Objetivo!)]].'],
        ['**Sentido Objetivo / Material / Funcional**', '**O**bjeto (**o que** é feito: serviço público, polícia, fomento)', 'Incluir órgãos/prédios aqui (órgãos são Subjetivo!).'],
        ['**Impessoalidade**', 'Finalidade pública + isonomia + sem autopromoção', 'Também explica por que ato de agente de fato pode valer (**teoria da aparência**)!'],
        ['**Eficiência**', 'Produtividade, economicidade, qualidade com menor custo', 'Não estava na CF original de 1988 — entrou só em **1998 (EC 19)**!'],
      ],
    },
    examTrap:
      'Pegadinha clássica: dizer que o princípio da **Publicidade** é requisito de **VALIDADE** do ato administrativo. [[ROSE:NÃO É!]] Salvo exceções, a publicidade é requisito de **EFICÁCIA** (o ato já existe e é válido, mas só começa a produzir efeitos externos quando é publicado!).',
    deepDive: {
      headline: 'Os Modelos Históricos da Administração (Patrimonialista → Burocrática → Gerencial)',
      points: [
        '**Patrimonialista**: misturava o bolso do rei com o cofre público (corrupção, nepotismo, cargos dados aos amigos).',
        '**Burocrática (Getúlio Vargas / DASP 1936)**: criou concurso público, normas escritas e controle rígido de processos para combater a corrupção — mas ficou lenta e apegada demais a carimbos (**disfunções da burocracia**).',
        '**Gerencial (Reforma 1995 / EC 19/1998 — Bresser-Pereira)**: foco em **resultados**, **eficiência** e **cidadão como cliente/usuário**!',
      ],
      extraExample:
        'Criar o sistema eletrônico de protocolo em Curitiba reduzindo filas e papel aplica diretamente a administração **Gerencial** e o princípio da **Eficiência**.',
      mnemonic: 'Subjetivo = Sujeitos (órgãos) | Objetivo = O que faz | LIMPE (Eficiência entrou em 1998!).',
    },
  },

  '2.1.2': {
    realityParagraphs: [
      'As **4 funções administrativas** formam o famoso ciclo **PODC**: **Planejamento, Organização, Direção e Controle**. Isso cai em praticamente TODA prova de Administração Pública — e o segredo é saber exatamente qual verbo pertence a qual letra!',
      'Pensa numa viagem ou num mutirão da Prefeitura: primeiro você decide onde quer chegar e traça metas (**Planejamento**); depois junta a equipe, divide as tarefas e desenha quem manda em quem (**Organização**); aí você motiva, lidera e coloca o povo pra trabalhar (**Direção**); por fim mede se deu certo e corrige as cagadas no caminho (**Controle**).',
    ],
    keyPoints: [
      {
        label: 'P — Planejamento (Antes da Ação)',
        text: 'Define **objetivos, metas, estratégias e recursos futuros**. Divide-se em **Estratégico** (longo prazo, cúpula), **Tático** (médio prazo, secretarias/gerência) e **Operacional** (curto prazo, rotina diária).',
        badge: { text: 'METAS / FUTURO', tone: 'sky' },
      },
      {
        label: 'O — Organização (Estrutura)',
        text: 'Aloca recursos, **divide o trabalho**, cria departamentos (**organograma**) e define **autoridade e responsabilidade**.',
        badge: { text: 'ORGANOGRAMA', tone: 'emerald' },
      },
      {
        label: 'D — Direção (Pessoas em Movimento)',
        text: '**Liderança, motivação, comunicação e coordenação** das pessoas no dia a dia para executar o que foi planejado.',
        badge: { text: 'LIDERAR / MOTIVAR', tone: 'amber' },
      },
      {
        label: 'C — Controle (Medir e Corrigir)',
        text: 'Estabelece padrões, **monitora desempenho**, compara o real com o planejado e **corrige desvios** (feedback!). Pode ser prévio, concomitante ou posterior.',
        badge: { text: 'AUDITORIA / FEEDBACK', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Mutirão de Atendimento de IPTU em Curitiba',
        scenario:
          '1) **Planejar**: definir meta de atender 500 guias/dia. 2) **Organizar**: montar 10 guichês e escalar quem fica na triagem vs. caixa. 3) **Dirigir**: orientar os agentes no início do turno e motivar a equipe. 4) **Controlar**: puxar o relatório às 17h para ver o tempo médio de espera e corrigir gargalos.',
      },
      {
        title: 'Identificando Níveis de Planejamento',
        scenario:
          'O **Plano Plurianual (PPA — 4 anos)** da cidade é **Estratégico** (Prefeito/Secretários). O plano semestral da Secretaria de Finanças é **Tático**. O cronograma semanal do seu setor de protocolo é **Operacional**.',
      },
    ],
    table: {
      title: 'Ciclo PODC + Níveis Organizacionais',
      headers: ['Função (PODC)', 'Verbos-Chave na Prova', 'Ferramenta / Exemplo Clássico'],
      rows: [
        ['**Planejamento**', 'Definir objetivos, prever, traçar metas, formular planos.', 'Análise **SWOT** (Forças/Fraquezas internas vs. Oportunidades/Ameaças externas).'],
        ['**Organização**', 'Dividir tarefas, estruturar, alocar recursos, delegar autoridade.', '**Organograma**, departamentalização, manuais de cargo.'],
        ['**Direção**', 'Liderar, motivar, comunicar, orientar pessoas.', 'Reuniões de equipe, feedback motivacional, liderança.'],
        ['**Controle**', 'Monitorar, medir, comparar padrões, corrigir erros.', 'Auditorias, **indicadores (KPIs)**, ponto eletrônico, relatórios de desempenho.'],
      ],
    },
    examTrap:
      'Pegadinha clássica: colocar **"comunicação e liderança"** dentro de Organização, ou dizer que **"controle acontece somente ao final do processo"**. [[TUDO ERRADO!]] Comunicação/Liderança = **Direção**. Organograma/Divisão de tarefas = **Organização**. E o **Controle** pode ser **prévio (preventivo), simultâneo (concomitante) ou posterior (feedback)**!',
    deepDive: {
      headline: 'Matriz SWOT (FOFA) & Ciclo PDCA (Para Fechar o Assunto)',
      points: [
        '**SWOT / FOFA**: **F**orças e **F**raquezas são do **ambiente INTERNO** (o órgão controla: equipe treinada, PC velho). **O**portunidades e **A**meaças são do **ambiente EXTERNO** (fora do controle direto: nova lei federal, crise econômica).',
        '**Ciclo PDCA** (Melhoria Contínua): **P**lan (Planejar) → **D**o (Executar) → **C**heck (Checar/Verificar) → **A**ct (Agir corretivamente).',
      ],
      extraExample:
        'Sistema lento na repartição = **Fraqueza (interna)**. Corte de repasse federal = **Ameaça (externa)**.',
      mnemonic: 'PODC = Planeja (metas) · Organiza (estrutura) · Dirige (pessoas) · Controla (mede/corrige)!',
    },
  },

  '2.1.3': {
    realityParagraphs: [
      'Um **processo administrativo** é a esteira formal por onde andam as decisões da Prefeitura (desde um pedido simples de certidão até uma licitação ou punição de servidor). Diferente do processo judicial (que é cheio de formalidade rígida na mão de juízes), o processo administrativo segue o **informalismo moderado em favor do cidadão**!',
      'Isso significa que se um cidadão protocolar um pedido com um errinho bobo de formatação (mas dá para entender o que ele quer), você não joga no lixo — o processo anda por **impulso oficial** (a própria Administração tem o dever de tocar o processo para frente!).',
    ],
    keyPoints: [
      {
        label: 'As 5 Fases Básicas do Processo',
        text: '1) **Instauração** (abre por pedido do cidadão ou de ofício) → 2) **Instrução** (juntada de provas, laudos, pareceres) → 3) **Relatório** (resumo técnico) → 4) **Decisão/Julgamento** (com motivação!) → 5) **Recurso** (revisão se alguém discordar).',
        badge: { text: 'PASSO A PASSO', tone: 'sky' },
      },
      {
        label: 'Princípios Específicos que Caem',
        text: '**Oficialidade** (impulso de ofício sem precisar o cidadão implorar toda semana), **Verdade Material** (busca o que realmente aconteceu, não só o que está no papel), **Informalismo Moderado**, **Motivação** e **Contraditório + Ampla Defesa**.',
        badge: { text: 'PRINCÍPIOS', tone: 'emerald' },
      },
      {
        label: 'Modalidades / Tipos Comuns',
        text: 'Processos de **gestão/expediente** (compras, protocolo comum), **ampliativos/outorga** (alvarás, licenças, isenções), **restritivos/sancionadores** (multas, **PAD**) e **recursais**.',
        badge: { text: 'MODALIDADES', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Informalismo Moderado no Balcão',
        scenario:
          'Um senhor protocola um pedido de revisão de IPTU escrito à mão numa folha de caderno, sem capa jurídica bonita, mas com seus dados e o motivo claros. Pelo **informalismo moderado**, o protocolo **DEVE aceitar e instruir** o pedido (não precisa de advogado nem formulário rebuscado, salvo se a lei exigir documento específico)!',
      },
      {
        title: 'Fases na Prática: Pedido de Licença de Funcionamento',
        scenario:
          '**Instauração**: comerciante abre protocolo. **Instrução**: bombeiros e vigilância juntam vistorias. **Relatório/Decisão**: chefia defere motivadamente o alvará. Se negado, entra na fase de **Recurso**.',
      },
    ],
    table: {
      title: 'Processo Administrativo vs. Processo Judicial',
      headers: ['Critério', 'Processo Administrativo', 'Processo Judicial'],
      rows: [
        ['**Quem Julga?**', 'A própria Administração (atua como parte interessada e julgadora!)', 'Poder Judiciário (juiz imparcial, terceiro estranho).'],
        ['**Forma**', '**Informalismo moderado** (formas simples para o cidadão)', 'Rigidez formal (prazos e ritos estritos do CPC/CPP).'],
        ['**Advogado é Obrigatório?**', '[[EMERALD:NÃO!]] (Súmula Vinculante 5 STF: nem no PAD é obrigatório!)', 'Em regra **SIM** (salvo exceções como Juizado Especial até 20 SM).'],
        ['**Busca da Verdade**', '**Verdade Material / Real** (pode produzir provas de ofício)', 'Mais presa ao que as partes trouxeram aos autos.'],
      ],
    },
    examTrap:
      'PEGADINHA DO STF (Súmula Vinculante 5): **"A falta de defesa técnica por advogado no processo administrativo disciplinar (PAD) torna o processo nulo."** [[ROSE:MENTIRA!]] A Súmula Vinculante 5 diz exatamente o oposto: a falta de advogado no PAD **NÃO ofende a Constituição** (desde que seja garantida a ampla defesa ao acusado)!',
    deepDive: {
      headline: 'Motivação Aliunde & Direito de Vista/Cópias',
      points: [
        '**Motivação obrigatória**: toda decisão que nega direito, impõe dever/sanção ou decide recurso **TEM** que explicar os motivos de fato e de direito.',
        '**Motivação *aliunde* (per relationem)**: é válida! O secretário pode decidir dizendo *"Indefiro o pedido nos termos do Parecer Jurídico de fls. 24-28, que adoto como razão de decidir"*.',
        'O interessado tem direito a **vista dos autos**, tirar **cópias** (às suas expensas) e se manifestar antes da decisão final.',
      ],
      extraExample:
        'Pelo princípio da **gratuidade**, não se cobra taxa só para abrir um processo administrativo comum ou recurso, salvo previsão legal expressa de taxas específicas ou custo de cópias.',
      mnemonic: 'Fases: In-In-Re-De-Re (Instauração, Instrução, Relatório, Decisão, Recurso) | Súmula 5 = Sem advogado no PAD pode!',
    },
  },

  '2.1.4': {
    realityParagraphs: [
      'Organização do ambiente de trabalho parece papo de RH, mas em prova de Agente Administrativo vira questão direta sobre **Programa 5S**, **Ergonomia (NR-17)** e **Layout de escritório** para eliminar perda de papel e fila travada.',
      'A estrela absoluta aqui é o **Programa 5S** (cinco palavras japonesas que começam com **S**). A banca adora trocar a definição de **Seiri (Utilização)** com **Seiton (Organização)** e perguntar qual "S" manda jogar entulho fora!',
    ],
    keyPoints: [
      {
        label: 'Os 5 Sensos (5S) — Ordem Exata!',
        text: '1) **Seiri (Utilização/Descarte)**: separar útil do inútil e **jogar fora o que não presta**! 2) **Seiton (Ordenação/Organização)**: cada coisa em seu lugar definido. 3) **Seiso (Limpeza)**: limpar e **não sujar**. 4) **Seiketsu (Padronização/Saúde)**: normas visuais e higiene. 5) **Shitsuke (Disciplina)**: manter o hábito sem ninguém vigiando.',
        badge: { text: 'CAI SEMPRE', tone: 'emerald' },
      },
      {
        label: 'Ergonomia (NR-17)',
        text: 'Adaptar o **trabalho ao ser humano** (e NÃO o ser humano ao posto torto!): altura da mesa/cadeira, monitor na altura dos olhos, apoio de pés, pausas para evitar LER/DORT.',
        badge: { text: 'TRABALHO → HUMANO', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Aplicando 5S no Arquivo do Setor de Protocolo',
        scenario:
          '**1º Seiri**: tirar carimbos quebrados e papéis de rascunho velhos da mesa. **2º Seiton**: etiquetar pastas por cor e deixar os formulários mais usados ao alcance da mão. **3º Seiso**: limpar poeira e manter bancada limpa. **4º Seiketsu**: todo o setor usar o mesmo padrão de etiqueta. **5º Shitsuke**: equipe manter isso toda semana sem chefe cobrar.',
      },
      {
        title: 'Layout por Fluxo de Trabalho (Arranjo Físico)',
        scenario:
          'Se a impressora central fica no fundo do corredor oposto ao balcão de atendimento, os agentes perdem horas caminhando todo dia. Posicionar impressora, scanner e guichês em sequência linear reduz **deslocamento inútil** e tempo de espera!',
      },
    ],
    table: {
      title: 'Tabela Ninja do Programa 5S (Japonês ↔ Português)',
      headers: ['Termo Japonês', 'Senso em Português', 'Pergunta Prática do Dia a Dia'],
      rows: [
        ['**1. Seiri**', '**Utilização** (Descarte)', '"Eu realmente uso essa porcaria ou é entulho?" → **Joga fora / doa!**'],
        ['**2. Seiton**', '**Organização / Ordenação**', '"Onde guardo para achar em 5 segundos?" → **Um lugar para cada coisa!**'],
        ['**3. Seiso**', '**Limpeza**', '"Está limpo e sem vazamentos/sujeira?" → **Mais importante que limpar é não sujar!**'],
        ['**4. Seiketsu**', '**Padronização / Saúde / Asseio**', '"Todo mundo segue o mesmo padrão visual e cuida da saúde?"'],
        ['**5. Shitsuke**', '**Autodisciplina**', '"A equipe mantém os 4 primeiros por hábito próprio?"'],
      ],
    },
    examTrap:
      'Pegadinha clássica de Ergonomia: afirmar que "ergonomia busca adaptar e treinar o **trabalhador** para que suporte o ritmo da máquina e o mobiliário padrão". [[ROSE:INVERTIDO!]] Ergonomia adapta as **CONDIÇÕES DE TRABALHO (mesa, cadeira, sistema, ritmo) AO SER HUMANO**, nunca o contrário!',
    deepDive: {
      headline: 'Os 3 primeiros "S" vs. Os 2 últimos "S"',
      points: [
        '**Seiri, Seiton, Seiso** (os 3 primeiros) cuidam diretamente do **ambiente físico e objetos**.',
        '**Seiketsu e Shitsuke** (os 2 últimos) cuidam da **padronização, saúde e mudança de comportamento (cultura)**.',
        '**LER / DORT**: Lesões por Esforços Repetitivos / Distúrbios Osteomusculares Relacionados ao Trabalho — prevenidos por mobiliário ajustável, pausas e postura neutra (cotovelos a 90°).',
      ],
      extraExample:
        'Colocar um quadro de avisos padronizado com cores diferentes por urgência é **Seiketsu (Padronização)**; já guardar o grampeador sempre na gaveta certa é **Seiton (Ordenação)**.',
      mnemonic: 'U-O-L-P-D: Utilização (tira lixo) → Organização (arruma) → Limpeza → Padronização → Disciplina!',
    },
  },

  '2.1.5': {
    realityParagraphs: [
      'Gestão de Pessoas no setor público gira em torno de três temas quentes em prova: **Competências (o famoso CHA)**, **Teorias da Motivação (Maslow e Herzberg)** e **Estilos de Liderança / Avaliação de Desempenho**.',
      'Na **Teoria dos Dois Fatores de Herzberg**, tem uma pegadinha que derruba 70% da concorrência: **SALÁRIO NÃO É FATOR MOTIVACIONAL!** Para Herzberg, salário, ar-condicionado e chefe educado são apenas **fatores higiênicos** — se faltarem, o servidor fica puto/insatisfeito; mas se estiverem ok, não motivam ninguém a dar o sangue a mais. O que motiva mesmo é **reconhecimento, responsabilidade e crescimento**!',
    ],
    keyPoints: [
      {
        label: 'Gestão por Competências (CHA)',
        text: '**C**onhecimento (**Saber** — teoria/lei), **H**abilidade (**Saber fazer** — prática no Excel/atendimento) e **A**titude (**Querer fazer** — postura, iniciativa, empatia!).',
        badge: { text: 'CHA', tone: 'sky' },
      },
      {
        label: 'Pirâmide de Maslow (5 Níveis)',
        text: 'Da base pro topo: 1) **Fisiológicas** (comida/descanso) → 2) **Segurança** (estabilidade do cargo!) → 3) **Sociais** (amizade/equipe) → 4) **Estima** (reconhecimento/status) → 5) **Autorrealização** (topo).',
        badge: { text: 'PIRÂMIDE', tone: 'emerald' },
      },
      {
        label: 'Herzberg: Higiênicos vs. Motivacionais',
        text: '**Higiênicos (Extrínsecos)**: salário, benefícios, condições físicas, normas → evitam insatisfação, mas **não motivam**. **Motivacionais (Intrínsecos)**: conteúdo do trabalho, desafio, reconhecimento, promoção → geram satisfação!',
        badge: { text: 'PEGADINHA CLÁSSICA', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Identificando o CHA no Balcão da Prefeitura',
        scenario:
          'Você **sabe** o que diz a Lei 10.048/2000 (**Conhecimento**); você **sabe operar** o sistema de senhas sem errar (**Habilidade**); você **age com proatividade e respeito** acolhendo o idoso na fila (**Atitude**)!',
      },
      {
        title: 'Estabilidade no Concurso dentro de Maslow',
        scenario:
          'Por que tanta gente estuda pro concurso de Curitiba? A busca por estabilidade no emprego e renda garantida satisfaz diretamente a necessidade de **Segurança** (2º degrau da pirâmide de Maslow)!',
      },
    ],
    table: {
      title: 'Comparativo: Teorias de Motivação & Liderança',
      headers: ['Teoria / Modelo', 'Divisão Principal', 'Ponto Crítico de Prova'],
      rows: [
        ['**Maslow** (Hierarquia)', 'Fisiológica → Segurança → Social → Estima → Autorrealização', 'A necessidade satisfeita deixa de motivar; surge a do degrau de cima!'],
        ['**Herzberg** (2 Fatores)', '**Higiênicos** (ambiente/salário) vs. **Motivacionais** (cargo/crescimento)', '[[ROSE:SALÁRIO = HIGIÊNICO!]] O oposto de satisfação é *nenhuma* satisfação (não é insatisfação!).'],
        ['**Liderança Autocrática**', 'Chefe centraliza tudo, dá ordem e não ouve ninguém.', 'Rápida na crise, mas gera dependência e clima pesado.'],
        ['**Liderança Democrática**', 'Equipe participa das decisões; líder orienta e apoia.', 'Gera qualidade e compromisso, mesmo quando chefe sai da sala.'],
        ['**Liderança Liberal (*Laissez-faire*)**', 'Liberdade total à equipe, participação mínima do líder.', 'Só funciona com equipe super madura; senão vira bagunça!'],
      ],
    },
    examTrap:
      'Duas pegadinhas garantidas: 1) Na Avaliação de Desempenho, **Avaliação 360°** envolve feedback do chefe, colegas, subordinados, usuários E **autoavaliação** (todos ao redor!). 2) Em Herzberg, aumentar o **salário** resolve **insatisfação** (fator higiênico), mas **NÃO é fator motivacional**!',
    deepDive: {
      headline: 'Vieses da Avaliação de Desempenho (Cuidado na Prova!)',
      points: [
        '**Efeito Halo / Horn**: deixar **UMA única qualidade** (ou um defeito!) contaminar toda a nota da pessoa ("chega sempre cedo, então deve ser ótimo em tudo" → errado!).',
        '**Tendência Central**: avaliador medroso dá nota média ("7" ou "Regular") para todo mundo para não arrumar briga.',
        '**Recência**: avaliar o servidor o ano inteiro lembrando só da última cagada ou acerto que ele fez semana passada.',
      ],
      extraExample:
        'No **Feedback construtivo**, elogia-se em público e corrige-se em particular, focando no **comportamento/fato** e nunca atacando a pessoa.',
      mnemonic: 'CHA = Saber / Saber Fazer / Querer Fazer | Herzberg: Salário = Higiênico (evita raiva, não motiva)!',
    },
  },

  '2.1.6': {
    realityParagraphs: [
      'Orçamento Público assusta pelo nome, mas para Agente Administrativo você só precisa dominar a **Tríade Orçamentária da Constituição (PPA, LDO, LOA)** e os **Princípios Orçamentários**.',
      'Pense no orçamento como planejar suas finanças nos próximos anos: o **PPA** é o sonho estratégico de **4 anos**; a **LDO** escolhe as metas do **ano que vem** e diz como montar a conta; e a **LOA** é a planilha anual que **PREVÊ quanto vai entrar** (receitas) e **FIXA quanto pode gastar** (despesas)!',
    ],
    keyPoints: [
      {
        label: 'A Tríade: PPA → LDO → LOA',
        text: '**PPA** (Plano Plurianual): **4 anos** (começa no 2º ano do mandato do Prefeito até o 1º ano do próximo!). **LDO** (Diretrizes): anual, **orienta a elaboração da LOA**. **LOA** (Orçamento Anual): executa o dinheiro do ano!',
        badge: { text: 'PPA = 4 ANOS', tone: 'sky' },
      },
      {
        label: 'LOA: PREVÊ Receitas e FIXA Despesas!',
        text: 'A LOA **NÃO fixa receita** (porque não dá pra obrigar o povo a pagar imposto exato — você **estima/prevê**!) e **FIXA despesa** (teto máximo que o Prefeito pode gastar!).',
        badge: { text: 'PEGADINHA Nº 1', tone: 'rose' },
      },
      {
        label: 'Princípios Clássicos',
        text: '**Anualidade** (1º/jan a 31/dez), **Unidade** (um orçamento só), **Universalidade** (TODAS as receitas e despesas dentro da LOA), **Exclusividade** (LOA não pode ter "jabuti" — só receita/despesa, salvo créditos suplementares e operação de crédito por ARO!).',
        badge: { text: 'PRINCÍPIOS', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Vigência do PPA do Prefeito de Curitiba',
        scenario:
          'O Prefeito assume em **01/01/2025** para o mandato 2025–2028. No 1º ano (2025) ele ainda executa o último ano do PPA do prefeito anterior e aprova o SEU PPA, que vai valer de **2026 até 2029**! Assim evita que a cidade pare no começo de cada governo.',
      },
      {
        title: 'As 3 Etapas da Despesa Pública (ELP)',
        scenario:
          'Antes de pagar o fornecedor de papel em Curitiba, você passa por 3 passos obrigatórios: 1) **Empenho** (reserva o dinheiro no orçamento), 2) **Liquidação** (confere se o papel chegou certinho + nota fiscal) e 3) **Pagamento** (transfere o dinheiro)!',
      },
    ],
    table: {
      title: 'PPA vs. LDO vs. LOA Lado a Lado',
      headers: ['Instrumento', 'Duração', 'Função Principal (Art. 165 CF)', 'Macete'],
      rows: [
        ['**PPA** (Plano Plurianual)', '**4 anos** (2º ano mandato → 1º do seguinte)', 'Diretrizes, objetivos e metas de médio prazo (**DOM**).', 'Visão estratégica de 4 anos (**DOM**).'],
        ['**LDO** (Diretrizes Orçamentárias)', '**Anual** (feita no 1º semestre)', 'Metas/prioridades anuais, **orienta a LOA**, regras de alterações tributárias.', 'É a **ponte** entre o PPA e a LOA!'],
        ['**LOA** (Orçamento Anual)', '**Anual** (exercício = ano civil)', '**PREVÊ** receitas e **FIXA** despesas (Orçamento Fiscal, Seguridade e Investimento Estatais).', 'A **planilha real de caixa** do ano!'],
      ],
    },
    examTrap:
      'Pegadinha eterna: a banca inverte dizendo que "a LOA **fixa** as receitas e **estima/prevê** as despesas". [[MENTIRA!]] Receita pública é **ESTIMADA / PREVISTA**; Despesa pública é **FIXADA** (limite)! E cuidado: pagar fornecedor ANTES da **Liquidação** (sem conferir se entregou o produto) é ilegal!',
    deepDive: {
      headline: 'Créditos Adicionais (Suplementar, Especial, Extraordinário)',
      points: [
        '**Suplementar**: reforça dotação que **já existia** na LOA, mas acabou (precisa de lei + indicar fonte).',
        '**Especial**: cria dotação para despesa **NOVA** que não tinha na LOA (precisa de lei + indicar fonte).',
        '**Extraordinário**: só para despesas **urgentes e imprevisíveis** (guerra, calamidade pública, enchente grave) — aberto por **Medida Provisória / Decreto** (executivo abre na hora e avisa o Legislativo)!',
      ],
      extraExample:
        'Princípio da **Não Afetação da Receita de Impostos**: em regra, imposto (como IPTU/ISS) cai num cofre geral e **não pode ser carimbado previamente** para despesa específica — **SALVO** exceções da CF (Saúde, Educação, repartição com Estados/Municípios e administração tributária)!',
      mnemonic: 'LOA = PREVÊ Receita e FIXA Despesa | Despesa = Empenho → Liquidação → Pagamento (ELP)!',
    },
  },
};
