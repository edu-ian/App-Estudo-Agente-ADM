import type { TopicStudyContent } from '../summaryTypes';

export const DISC_2_4_ETICA: Record<string, TopicStudyContent> = {
  '2.4.1': {
    realityParagraphs: [
      'No serviço público, **Ética, Integridade e Conflito de Interesses** não é discurso bonitinho de RH — é regra de sobrevivência que decide se você é um **agente público íntegro** ou se vai responder a **PAD e improbidade**. A banca adora cobrar a diferença clássica entre **Ética** e **Moral**, além de situações concretas de **conflito de interesses** e recebimento de **brindes/presentes**.',
      'Regra de ouro pra vida e pra prova: o servidor **NÃO pode escolher entre o honesto e o desonesto — ele tem que escolher o BEM COMUM** e **nunca misturar o interesse privado dele (ou da família/amigos) com a cadeira que ocupa na Prefeitura**!',
    ],
    keyPoints: [
      {
        label: 'Ética vs. Moral (Não Confunda!)',
        text: '**Moral** = **regras práticas, costumes e hábitos** de uma sociedade/época (varia no tempo e lugar — é o "o que se faz"). **Ética** = **reflexão filosófica, crítica e universal** sobre a moral (é o "por que devemos agir assim?").',
        badge: { text: 'ÉTICA = REFLEXÃO', tone: 'sky' },
      },
      {
        label: 'Integridade & Decoro no Cargo',
        text: 'Agir com **probidade, honestidade, urbanidade, lealdade às instituições** e **impessoalidade**. O servidor representa a Prefeitura **mesmo fora do expediente** em situações que afetem a dignidade da função pública!',
        badge: { text: 'DECORO', tone: 'emerald' },
      },
      {
        label: 'Conflito de Interesses (Lei 12.813/2013 como referência)',
        text: 'Ocorre quando o interesse particular do agente público (ou de parente/sócio) **confronta ou influencia** suas decisões oficiais — **mesmo que NÃO haja prejuízo financeiro aos cofres públicos** e mesmo sem recebimento de propina!',
        badge: { text: 'INDEPENDE DE DANO', tone: 'rose' },
      },
      {
        label: 'Brindes, Presentes & Informação Privilegiada',
        text: '**Proibido** aceitar presentes, viagens, ingressos ou vantagens de quem tem interesse em decisão da repartição (só se toleram **brindes institucionais sem valor comercial relevante** e distribuídos de forma generalizada). Usar ou repassar **informação privilegiada** antes da divulgação oficial = falta grave / crime / improbidade!',
        badge: { text: 'ZERO PRESENTINHO', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'O "Presentinho de Natal" do Fornecedor',
        scenario:
          'Uma empresa que fornece material de escritório para a Prefeitura manda uma **cesta de vinhos importados de R$ 900,00** na mesa do Agente Administrativo que atesta as notas fiscais, dizendo *"é só carinho de Natal!"*. [[ROSE:RECUSA E DEVOLVE NA HORA!]] Não é brinde institucional sem valor — gera **conflito de interesses** e viola o decoro/probidade!',
      },
      {
        title: 'Agente Administrativo Comprando Imóvel com Informação Interna',
        scenario:
          'Você fica sabendo, num processo interno ainda sigiloso da Prefeitura de Curitiba, que determinado terreno vai ser valorizado por uma grande obra viária daqui a 3 meses, e corre comprar os lotes vizinhos para lucrar. Mesmo fora do horário de expediente, isso é **uso ilícito de informação privilegiada** (conflito de interesses + improbidade)!',
      },
    ],
    table: {
      title: 'Ética vs. Moral vs. Legalidade vs. Conflito de Interesses',
      headers: ['Conceito', 'Natureza / Foco', 'Exemplo Prático na Repartição'],
      rows: [
        ['**Moral**', 'Costume social, mutável, conjunto de normas de conduta aceitas', 'Cumprimentar colegas com cordialidade e vestir-se adequadamente no setor'],
        ['**Ética**', 'Reflexão crítica racional e universal sobre valores (o bem comum)', 'Questionar uma rotina injusta mesmo quando "todo mundo sempre fez assim"'],
        ['**Legalidade**', 'Cumprir estritamente o que está escrito na lei (heterônoma e coercitiva)', 'Exigir apenas os documentos previstos em decreto/edital, nem mais nem menos'],
        ['**Conflito de Interesses**', 'Choque entre interesse público e privado (real ou potencial)', 'Participar de comissão de licitação onde a empresa do **primo/cunhado** concorre (deve declarar **impedimento/suspeição**!)'],
      ],
    },
    examTrap:
      'Pegadinha clássica: a banca afirma que *"só existe conflito de interesses quando o agente público **recebe dinheiro** ou quando a Prefeitura sofre **prejuízo financeiro comprovado**."* [[ROSE:MENTIRA!]] O conflito de interesses se configura **pelo potencial de comprometimento da imparcialidade/interesse coletivo**, independentemente de lesão ao patrimônio público ou de vantagem financeira recebida! Outro erro comum: dizer que **cortesia e sigilo são opcionais** — tratar o cidadão com descaso ou vazar dados pessoais do protocolo é infração ética e disciplinar!',
    deepDive: {
      headline: 'Transparência, Accountability & Impedimento vs. Suspeição',
      points: [
        '**Transparência Ativa vs. Passiva**: **Ativa** = Prefeitura publica dados no Portal da Transparência por iniciativa própria. **Passiva** = cidadão pede via protocolo/e-SIC e o órgão responde.',
        '**Accountability**: dever de **prestar contas** com transparência e assumir responsabilidade pelos atos praticados (dimensão vertical = cidadão/eleição; horizontal = TCE, Câmara, MP).',
        '**Impedimento (critério objetivo)** vs. **Suspeição (critério subjetivo)**: Se é processo de **parente seu**, há **impedimento** (objetivo — dever absoluto de se afastar!). Se é de **amigo íntimo ou inimigo capital**, há **suspeição**!',
      ],
      extraExample:
        'Mesmo um **brinde barato** (caneta, calendário com logo) só é aceitável se for **distribuído genericamente** como cortesia promocional sem vínculo com favorecimento em processo específico!',
      mnemonic: 'Moral = Costumes (C) | Ética = Reflexão (R) | Conflito de interesses = Independe de prejuízo ou propina | Impedimento = Parente (Objetivo) / Suspeição = Amigo ou Inimigo (Subjetivo)!',
    },
  },

  '2.4.2': {
    realityParagraphs: [
      'Em **Relações Interpessoais**, a banca quer saber se você tem cabeça fria para lidar com **cidadão estressado no balcão** e com **colega difícil na equipe**, sem perder a linha nem baixar a cabeça. O segredo aqui gira em torno de três posturas de comunicação: **Passiva**, **Agressiva** e **Assertiva** (que é SEMPRE o gabarito!).',
      'Também caem muito: a diferença entre **Empatia** e **Simpatia**, **Escuta Ativa**, **Inteligência Emocional** e como dar **Feedback** sem humilhar ninguém.',
    ],
    keyPoints: [
      {
        label: 'Assertividade (O Equilíbrio Ouro)',
        text: 'Defender seu ponto de vista ou negar um pedido ilegal de forma **firme, clara, direta e respeitosa**, sem agredir o outro (**agressividade**) nem se anular engolindo sapo (**passividade**)!',
        badge: { text: 'POSTURA IDEAL', tone: 'emerald' },
      },
      {
        label: 'Empatia vs. Simpatia',
        text: '**Simpatia** = ser agradável, sorridente, sentir pena ou afinidade ("que pena, senhor!"). **Empatia** = **colocar-se no lugar do outro** para compreender sua perspectiva e necessidade real sem perder a objetividade técnica!',
        badge: { text: 'EMPATIA != SIMPATIA', tone: 'sky' },
      },
      {
        label: 'Escuta Ativa (Ouvir de Verdade)',
        text: 'Não é só ficar quieto esperando sua vez de falar! É prestar atenção **100%**, fazer contato visual, **não interromper**, parafrasear/confirmar o que o cidadão disse (*"Então o que o senhor precisa é da 2ª via do carnê de IPTU de 2025, certo?"*) e só depois orientar!',
        badge: { text: 'CONFIRMAÇÃO', tone: 'amber' },
      },
      {
        label: 'Atendimento ao Cidadão Exaltado',
        text: 'Mantenha o **tom de voz baixo e calmo** (nunca grite de volta!), **não leve para o lado pessoal**, demonstre compreensão pelo problema, foque na **solução objetiva** dentro da lei e, se necessário, chame a chefia ou leve para atendimento reservado.',
        badge: { text: 'DESESCALAR CONFLITO', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Negando Pedido Sem Documento Usando Assertividade',
        scenario:
          'Um munícipe chega bravo pedindo um alvará sem trazer a planta exigida por lei. **Agressivo**: *"O senhor não sabe ler o edital? Sem papel não atendo!"* **Passivo**: *"Ai, desculpa, vou tentar dar um jeitinho..."* [[EMERALD:Assertivo]]: *"Senhor João, eu entendo a sua urgência. A norma municipal exige a planta assinada para eu protocolar com segurança; assim que o senhor trouxer, já dou andamento imediato aqui!"*',
      },
      {
        title: 'Feedback Construtivo na Equipe (Foco no Comportamento)',
        scenario:
          'Um colega novo está preenchendo errado as guias de protocolo. Em vez de dizer em público *"Você é desatento demais!"* (ataque à pessoa), você chama em **privado** e foca no **fato/comportamento**: *"Percebi que três guias de hoje saíram sem o CPF do requerente; vamos revisar juntos o checklist para evitar devolução?"*',
      },
    ],
    table: {
      title: 'Estilos de Relacionamento e Comunicação no Trabalho',
      headers: ['Estilo / Habilidade', 'Comportamento Típico', 'Impacto no Atendimento & Equipe'],
      rows: [
        ['**Assertivo**', 'Firmeza + respeito + clareza nos limites legais', '[[EMERALD:Excelente:]] resolve conflitos, passa segurança e mantém o respeito mútuo'],
        ['**Agressivo**', 'Tom ríspido, interrupções, imposição, ataques pessoais', '[[ROSE:Destrutivo:]] escala briga no balcão e gera ouvidoria/PAD'],
        ['**Passivo**', 'Evita conflito a todo custo, não diz "não" mesmo quando é ilegal', '[[AMBER:Ruim:]] gera promessas impossíveis, retrabalho e sobrecarga'],
        ['**Passivo-Agressivo**', 'Finge que concorda na frente, mas sabota ou faz ironia por trás', '[[ROSE:Tóxico:]] destrói a confiança da equipe e trava processos'],
      ],
    },
    examTrap:
      'Pegadinha manjada: dizer que *"ser empático no serviço público significa **atender a todos os desejos** do cidadão ou abrir exceção à regra para ajudá-lo."* [[ROSE:ERRADO!]] Empatia é **compreender a dor/necessidade do cidadão**, mas a decisão do Agente Administrativo continua presa ao **Princípio da Legalidade** — você acolhe com humanidade e diz "não" com educação quando a lei proíbe! Outra pegadinha: feedback corretivo deve ser dado **em público**? **NUNCA!** Elogia-se em público; corrige-se em **privado**, focado no **comportamento**, nunca na personalidade!',
    deepDive: {
      headline: 'Inteligência Emocional (Goleman) & Gestão de Conflitos (Thomas-Kilmann)',
      points: [
        '**5 Pilares de Goleman**: **Autoconsciência** (perceber suas emoções), **Autorregulação** (não explodir no balcão), **Automotivação**, **Empatia** e **Habilidades Sociais**.',
        '**Grupo vs. Equipe**: **Grupo** = pessoas no mesmo setor cumprindo metas individuais. **Equipe** = objetivo comum, sinergia, responsabilidade compartilhada e interdependência!',
        '**5 Formas de Lidar com Conflitos**: **Colaboração** (ganha-ganha, resolve na raiz — melhor a longo prazo!), **Compromisso** (cada lado cede um pouco), **Acomodação** (um cede tudo), **Evitação** (foge do problema) e **Competição** (ganha-perde, útil só em emergência/risco).',
      ],
      extraExample:
        'Na técnica de **Comunicação Não Violenta (CNV)** ao lidar com conflito entre colegas, você segue **OFNP**: **O**bservação (sem julgar), **S**entimento, **N**ecessidade e **P**edido claro!',
      mnemonic: 'Assertivo = Firme + Respeitoso | Feedback = Elogia em Público, Corrige no Privado, Foco no Fato | Empatia ≠ Fazer Vontade Ilegal!',
    },
  },

  '2.4.3': {
    realityParagraphs: [
      'A **Lei Federal nº 13.460/2017** é o **"Código de Defesa do Usuário do Serviço Público"** e vale para a União, Estados, DF e **Municípios (inclusive Curitiba!)**. Se você trabalha atendendo o povo na Prefeitura, essa lei dita seus direitos, seus deveres, os prazos da Ouvidoria e o fim da burocracia idiota de ficar exigindo firma reconhecida sem necessidade.',
      'Grave de cara **3 pilares dessa lei**: **1) Presunção de boa-fé do cidadão**, **2) Carta de Serviços ao Usuário** (manual claro do que o órgão faz) e **3) Ouvidoria com prazo de 30 + 30 dias**!',
    ],
    keyPoints: [
      {
        label: 'Princípios & Direitos Básicos (Arts. 4º e 5º)',
        text: 'Urbanidade, respeito, acessibilidade, **presunção de boa-fé do usuário**, atendimento por **ordem de chegada** (ressalvadas prioridades legais e urgências!), **vedação de exigir reconhecimento de firma e autenticação** de cópia quando o servidor puder conferir com o original (ou documento eletrônico verificável)!',
        badge: { text: 'PRESUNÇÃO DE BOA-FÉ', tone: 'emerald' },
      },
      {
        label: 'Carta de Serviços ao Usuário (Art. 7º)',
        text: 'Documento **obrigatório** de cada órgão/entidade informando em linguagem simples: quais serviços oferece, como acessar, documentos exigidos, locais/horários, **prazos máximos de atendimento** e custos/gratuidade. Deve ser atualizada **periodicamente** e divulgada na internet e no local!',
        badge: { text: 'OBRIGATÓRIA', tone: 'sky' },
      },
      {
        label: 'Ouvidorias & Prazos de Resposta (Arts. 13–17)',
        text: 'A Ouvidoria recebe manifestações (elogio, sugestão, reclamação, denúncia, solicitação). **Prazo para decisão administrativa final**: **30 dias**, prorrogável de forma justificada **uma única vez por igual período (+30 dias)**! Se precisar complementar dados do usuário, dá prazo de resposta e o relógio **suspende** até vir a informação!',
        badge: { text: '30 + 30 DIAS', tone: 'rose' },
      },
      {
        label: 'Conselho de Usuários (Art. 18–22) & Avaliação Anual',
        text: 'Órgão **consultivo** (com participação de usuários + representantes do órgão) para acompanhar serviços, opinar sobre a Ouvidoria e propor melhorias — função considerada **serviço público relevante, SEM remuneração**! Os serviços são avaliados continuamente e há divulgação **anual** de ranking/relatório!',
        badge: { text: 'SEM REMUNERAÇÃO', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Exigindo Autenticação em Cartório à Toa (Ilegal!)',
        scenario:
          'Um cidadão traz o RG original e uma cópia simples ao balcão da Prefeitura de Curitiba. O atendente manda ele ir ao cartório gastar dinheiro autenticando a cópia. [[ROSE:VIOLOU A LEI 13.460/2017 (art. 5º, IX)!]] Se o usuário apresenta o documento original, o próprio servidor público tem o dever de conferir e autenticar na hora!',
      },
      {
        title: 'Manifestação na Ouvidoria 156 de Curitiba',
        scenario:
          'Um cidadão registra reclamação na Ouvidoria municipal sobre demora em alvará. A lei determina decisão conclusiva em até **30 dias** (prorrogável por mais **30 dias** com justificativa expressa). E **não pode** o órgão recusar receber a manifestação só por falta de formulário bonito — deve orientar o usuário!',
      },
    ],
    table: {
      title: 'Instrumentos e Prazos da Lei nº 13.460/2017',
      headers: ['Instrumento / Regra', 'O Que É / Prazo', 'Detalhe que Despenca'],
      rows: [
        ['**Carta de Serviços ao Usuário**', 'Guia claro dos serviços, documentos, locais e **prazos**', 'Obrigatória em todos os poderes/entes; revisão periódica e linguagem acessível'],
        ['**Ouvidoria — Resposta Final**', '**30 dias**, prorrogável **1x por +30 dias** (justificado)', 'Manifestação pode ser anônima em casos de denúncia (se tiver elementos mínimos), mas **pedido de acesso/acompanhamento** identifica o solicitante'],
        ['**Complementação pelo Usuário**', 'Ouvidoria pede dados extras; se usuário não responder no prazo → arquiva', 'Enquanto aguarda o usuário responder, o prazo de 30 dias fica **SUSPENSO** (não corre contra o órgão)'],
        ['**Conselho de Usuários**', 'Órgão **consultivo** (acompanha qualidade e avalia Ouvidoria)', '**NÃO remunerado** (serviço público relevante); membros escolhidos por chamamento público aberto'],
        ['**Autenticação / Firma**', 'Dispensada se houver **original** ou documento digital verificável', 'Presunção de **boa-fé** do usuário + vedação de exigências desproporcionais'],
      ],
    },
    examTrap:
      'Cuidado para **NÃO confundir os prazos da LAI (12.527/2011) com os da Lei 13.460/2017**: na **LAI** (pedido de informação), o prazo é **20 + 10 dias**! Na **Lei 13.460/2017** (manifestação em Ouvidoria), o prazo é **30 + 30 dias**! Outra pegadinha clássica: dizer que o **Conselho de Usuários** tem poder **deliberativo vinculante** (que manda no Prefeito) ou recebe jeton/salário — [[ROSE:FALSO!]] Ele é meramente **consultivo** e **não remunerado**!',
    deepDive: {
      headline: '5 Tipos de Manifestação & Proibição de Exigir Prova Negativa',
      points: [
        '**5 Manifestações típicas na Ouvidoria**: **Reclamação** (insatisfação), **Denúncia** (ato ilícito/irregularidade), **Elogio** (satisfação), **Sugestão** (ideia de melhoria) e **Solicitação** (pedido de adoção de providência).',
        '**Ordem de Atendimento (art. 5º, III)**: **ordem de chegada**, **SALVO** situações de **urgência** e **prioridades legais** (idosos, gestantes, lactantes, PcD, pessoas com criança de colo, obesos, doadores de sangue, TEA — Lei 10.048/00!).',
        '**Vedação de exigir documentos que o próprio órgão já tem**: se a informação já consta na base oficial daquele mesmo órgão/entidade, não pode obrigar o cidadão a ficar buscando certidão de papel para provar o óbvio!',
      ],
      extraExample:
        'A Lei **13.460/2017** também se aplica às **concessionárias e permissionárias** de serviços públicos (ex.: empresa de ônibus urbano, água, energia elétrica), que são obrigadas a ter Carta de Serviços e Ouvidoria!',
      mnemonic: 'LAI = 20 + 10 dias | Ouvidoria (13.460) = 30 + 30 dias | Conselho de Usuários = Consultivo + Gratuito | Cópia c/ original = Servidor confere sem cartório!',
    },
  },

  '2.4.4': {
    realityParagraphs: [
      'Em **Comunicação Organizacional**, a banca parece falar bobagem óbvia, mas reprova um monte de candidato porque cobra os **nomes técnicos** dos elementos da comunicação, dos **4 fluxos** (quem fala com quem na hierarquia) e das **barreiras** que distorcem a mensagem.',
      'Lembre de uma regra simples: **comunicação só acontece quando o receptor ENTENDEU a mensagem**! Se você falou bonito em juridiquês e o cidadão saiu sem entender nada, houve **emissão**, houve **ruído/barreira semântica**, mas **NÃO houve comunicação eficaz**!',
    ],
    keyPoints: [
      {
        label: 'Os 6 Elementos (+ Feedback e Ruído)',
        text: '**Emissor/Codificador** (quem envia) → **Mensagem** (conteúdo) → **Canal/Meio** (voz, SEI, e-mail) → **Código** (língua portuguesa, Libras) → **Receptor/Decodificador** (quem recebe) → **Contexto/Referente**. O retorno do receptor é o **Feedback** (fecha o ciclo!), e tudo que atrapalha é **Ruído**.',
        badge: { text: 'FEEDBACK FECHA O CICLO', tone: 'sky' },
      },
      {
        label: 'Os 4 Fluxos da Comunicação Interna',
        text: '**Descendente** (chefe → subordinado: ordens, portarias). **Ascendente** (subordinado → chefe: relatórios, sugestões, queixas). **Horizontal / Lateral** (mesmo nível hierárquico: protocolo ↔ RH — coordenação!). **Diagonal / Transversal** (níveis e setores diferentes sem linha de comando direta: analista de TI → Diretor Financeiro).',
        badge: { text: '4 DIREÇÕES', tone: 'emerald' },
      },
      {
        label: 'Rede Formal vs. Rede Informal ("Rádio Corredor")',
        text: '**Formal**: canais oficiais (SEI, ofícios, circulares, reuniões). **Informal** (*grapevine* / rádio corredor): conversas de café, grupos espontâneos — é **muito mais rápida** que a formal, não dá para extinguir e costuma gerar boatos se a gestão não for transparente!',
        badge: { text: 'RÁDIO CORREDOR', tone: 'amber' },
      },
      {
        label: 'Barreiras à Comunicação (Decorou, Acertou!)',
        text: '**Físicas** (barulho de obra, microfone ruim, distância). **Semânticas** (jargões técnicos, juridiquês, duplo sentido de palavras). **Psicológicas** (preconceito, raiva, desconfiança, falta de atenção). **Fisiológicas** (surdez, rouquidão, dor de cabeça forte) e **Administrativas/Burocráticas** (excesso de filtros e níveis hierárquicos).',
        badge: { text: '4+ BARREIRAS', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Identificando o Tipo de Barreira na Prefeitura',
        scenario:
          '1) O cidadão não entendeu a resposta porque o atendente escreveu *"indeferido por intempestividade preclusiva"* → **Barreira SEMÂNTICA**! 2) A impressora matricial barulhenta e a sirene na rua impediram ouvir o número da senha → **Barreira FÍSICA**! 3) O chefe já tem birra pessoal do servidor e interpreta qualquer sugestão dele como provocação → **Barreira PSICOLÓGICA**!',
      },
      {
        title: 'Fluxo Horizontal vs. Fluxo Diagonal',
        scenario:
          'Dois Agentes Administrativos — um da Secretaria de Educação e outro da Secretaria de Saúde — trocam orientações sobre o novo sistema de protocolo → **Comunicação HORIZONTAL (lateral)**. Agora, o estagiário de suporte de TI envia instrução técnica diretamente à Secretária Municipal de Finanças → **Comunicação DIAGONAL (transversal)**!',
      },
    ],
    table: {
      title: 'Mapa Rápido: Fluxos e Barreiras de Comunicação',
      headers: ['Categoria', 'Tipo', 'Definição Direta + Exemplo'],
      rows: [
        ['**Fluxo**', '**Descendente**', 'De **cima para baixo** (chefia → equipe): metas, ordens de serviço, normas'],
        ['**Fluxo**', '**Ascendente**', 'De **baixo para cima** (equipe → chefia): relatórios, feedbacks, pedidos de material'],
        ['**Fluxo**', '**Horizontal (Lateral)**', '**Mesmo nível**, mesmo setor ou setores distintos: integração e trabalho em equipe'],
        ['**Fluxo**', '**Diagonal (Transversal)**', '**Setores E níveis diferentes**, rompendo a cadeia vertical para ganhar agilidade'],
        ['**Barreira**', '**Semântica**', 'Problema no **significado das palavras**, jargão técnico, sigla desconhecida, ambiguidade'],
        ['**Barreira**', '**Psicológica vs. Física**', '**Psicológica** = crenças, emoções, antipatia, percepção seletiva. **Física** = ruído externo, parede, internet caindo'],
      ],
    },
    examTrap:
      'Pegadinha clássica: a banca diz que *"a comunicação **informal** é exclusivamente prejudicial e deve ser proibida dentro do órgão público."* [[ROSE:FALSO!]] A rede informal é inevitável nas organizações, circula muito rápido e pode até ajudar a medir o clima organizacional — o antídoto contra boatos da rede informal é fortalecer a **comunicação formal transparente e ascendente**! Outro erro clássico: confundir **Comunicação** (mão dupla, exige **compreensão e feedback**) com **Informação** (mão única, apenas transmissão de dados sem verificar se o outro entendeu)!',
    deepDive: {
      headline: 'Filtragem, Percepção Seletiva & Redundância na Mensagem',
      points: [
        '**Filtragem**: manipulação intencional da informação pelo emissor para que pareça mais favorável ao receptor (ex.: servidor só conta ao chefe as metas batidas e esconde o atraso no protocolo!).',
        '**Percepção Seletiva**: o receptor só escuta/enxerga aquilo que confirma suas crenças ou interesses prévios, bloqueando o resto.',
        '**Sobrecarga de Informação**: excesso de e-mails, avisos e PDFs ao mesmo tempo faz o cérebro descartar informações importantes!',
        '**Redundância**: repetir a ideia principal em canais/formas diferentes (ex.: explicar verbalmente no balcão + entregar protocolo impresso com prazo destacado) — **reduz erros** contra ruídos!',
      ],
      extraExample:
        'Na **comunicação oficial e atendimento presencial**, usar **canais complementares** (orientação oral + protocolo escrito / SMS / e-mail de acompanhamento) aplica **redundância positiva** e reduz drasticamente a chance de o cidadão perder prazos!',
      mnemonic: 'Informação = 1 via | Comunicação = 2 vias (exige Feedback!) | Semântica = Palavra/Jargão | Filtragem = Emissor maquia a notícia!',
    },
  },
};
