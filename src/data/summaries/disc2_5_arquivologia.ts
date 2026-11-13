import type { TopicStudyContent } from '../summaryTypes';

export const DISC_2_5_ARQUIVOLOGIA: Record<string, TopicStudyContent> = {
  '2.5.1': {
    realityParagraphs: [
      'Muita gente vê **"Sistemas de Informação Organizacional"** no edital e acha que vai cair programação pesada — relaxa! Para Agente Administrativo, isso aqui é **gestão administrativa da informação**: saber a diferença entre **Dado, Informação e Conhecimento** e conhecer a **pirâmide clássica dos sistemas** (Operacional → Gerencial → Estratégico).',
      'Pense no sistema de protocolo da Prefeitura de Curitiba (tipo e-Cidadão / SEI / Sistema Único de Protocolo): cada clique registra um dado bruto que vira relatório pro chefe e decisão pro Prefeito!',
    ],
    keyPoints: [
      {
        label: 'Hierarquia: Dado → Informação → Conhecimento',
        text: '**Dado**: elemento bruto, isolado, sem contexto (ex.: `"42"`, `"13/12/2026"`). **Informação**: dado **processado, organizado e com contexto** (ex.: *"42 processos de alvará venceram em 13/12/2026"*). **Conhecimento**: informação combinada com **experiência e análise humana** para agir/decidir (ex.: *"Sempre em dezembro falta pessoal no balcão — precisamos remanejar 2 servidores"*).',
        badge: { text: 'DADO → INFO → CONHEC.', tone: 'sky' },
      },
      {
        label: 'SPT / TPS — Nível Operacional (A Base)',
        text: '**Sistema de Processamento de Transações**: cuida da **rotina diária repetitiva** lá no balcão (registrar protocolo, bater ponto, emitir guia de IPTU, lançar nota fiscal). Alimenta todos os outros sistemas!',
        badge: { text: 'OPERACIONAL (BALCÃO)', tone: 'emerald' },
      },
      {
        label: 'SIG / MIS — Nível Gerencial / Tático (O Meio)',
        text: '**Sistema de Informação Gerencial**: pega os milhares de registros do SPT e gera **relatórios periódicos e consolidados** para chefes de departamento/gerentes monitorarem metas (ex.: relatório mensal de tempo médio de resposta dos protocolos).',
        badge: { text: 'TÁTICO / GERENCIAL', tone: 'amber' },
      },
      {
        label: 'SAD / DSS & SAE / EIS — Nível Estratégico (O Topo)',
        text: '**SAD (Apoio à Decisão)**: simula cenários (*"E se construirmos mais 3 postos de saúde?"*) para decisões **semiestruturadas**. **SAE / EIS (Informação Executiva)**: painéis/dashboards super resumidos com indicadores externos e internos para **alta cúpula** (Prefeito e Secretários)!',
        badge: { text: 'ESTRATÉGICO (CÚPULA)', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Do Balcão da Regional até o Gabinete do Prefeito',
        scenario:
          'Quando você digita o CPF e abre um processo de poda de árvore no sistema, você usou um **SPT** (**Operacional**). No fim do mês, o sistema gera um relatório mostrando que a Regional Boqueirão teve 400 pedidos e demorou 18 dias → **SIG** (**Gerencial**). O Secretário cruza esses dados com previsão de chuvas e orçamento para decidir onde contratar terceirizada → **SAD / SAE** (**Estratégico**)!',
      },
      {
        title: 'Dado Bruto vs. Informação Útil',
        scenario:
          'Numa planilha de controle, a célula vazia com apenas `"156"` é um **dado bruto** (pode ser senha, código do 156, valor em reais...). Quando a coluna diz *"Média de atendimentos diários na Regional Matriz = 156"*, virou **informação**!',
      },
    ],
    table: {
      title: 'Pirâmide dos Sistemas de Informação nas Organizações',
      headers: ['Nível Organizacional', 'Sistema (Sigla)', 'O Que Faz na Prática?', 'Tipo de Decisão'],
      rows: [
        ['**Estratégico (Alta Cúpula)**', '**SAE / EIS** e **SAD / DSS**', 'Painéis executivos (BI), gráficos macro e simulações de cenários (*"what-if"*)', '**Não estruturada / Semiestruturada** (longo prazo)'],
        ['**Gerencial / Tático (Chefias)**', '**SIG / MIS**', 'Relatórios resumidos periódicos comparando meta vs. realizado', '**Semiestruturada / Estruturada** (médio prazo)'],
        ['**Operacional (Execução/Balcão)**', '**SPT / TPS**', 'Cadastro, protocolo, pagamento de folha, baixa de estoque, emissão de guias', '**Estruturada / Rotineira** (curto prazo / dia a dia)'],
      ],
    },
    examTrap:
      'Pegadinha clássica: inverter **SPT** com **SIG**, ou dizer que **Sistemas de Informação Executiva (SAE/EIS)** são usados pelo atendente de balcão para digitar dados diários! [[ROSE:NÃO!]] Quem alimenta o banco com registros diários é o **SPT** (operacional); o **SIG** resume em relatórios para o gerente, e o **SAE/SAD** apoia decisões estratégicas da cúpula. E cuidado: **ERP** (*Enterprise Resource Planning*) integra **todos os setores** num único banco de dados (RH, finanças, compras, protocolo), evitando retrabalho e dados duplicados!',
    deepDive: {
      headline: 'ERP, BI, GED & Processo Eletrônico (SEI!)',
      points: [
        '**ERP (Sistema Integrado de Gestão)**: integra todos os módulos da instituição num banco central (ex.: quando o RH cadastra férias, a folha de pagamento já lê automaticamente!).',
        '**GED (Gerenciamento Eletrônico de Documentos) / SEI**: digitalização, tramitação eletrônica, assinatura digital com certificado (ICP-Brasil ou gov.br) e controle de acesso de processos sem papel.',
        '**BI (Business Intelligence)**: ferramentas de análise de dados históricos e painéis visuais (*dashboards*) para apoiar gestores na tomada de decisão.',
      ],
      extraExample:
        'A implantação do **processo eletrônico** (como SEI / e-Protocolo) reduz extravio de folhas, permite **tramitação simultânea** em mais de um setor se necessário e registra **trilha de auditoria** (quem leu, assinou e movimentou cada peça com data e hora)!',
      mnemonic: 'SPT = Transação diária (balcão) | SIG = Relatório Gerencial | SAD = Decisão/Simulação | SAE = Executivo/Topo | Dado + Contexto = Informação + Experiência = Conhecimento!',
    },
  },

  '2.5.2': {
    isFullModule: true,
    realityParagraphs: [
      'Chegamos a um dos temas que **MAIS CAEM** na parte específica para Agente Administrativo: **Arquivologia + Lei Federal nº 8.159/1991**! Se você decorar as **3 Idades Documentais (Teoria das Três Idades)**, a diferença entre **Transferência** e **Recolhimento** e os **Princípios Arquivísticos**, você já garante praticamente todas as questões desse tópico.',
      'Tradução direta: arquivo **NÃO é depósito de lixo velho**! Todo documento público tem um ciclo de vida — nasce jovem no seu setor (**Corrente**), vai para o arquivo geral esperar o prazo legal (**Intermediário**) e depois ou é **eliminado com autorização** ou vira documento histórico eterno (**Permanente**)!',
    ],
    keyPoints: [
      {
        label: 'Teoria das 3 Idades (Ciclo Vital dos Documentos)',
        text: '**1ª Idade (Corrente)**: documentos em uso frequente, perto de quem produziu (**Valor Primário**). **2ª Idade (Intermediária)**: uso pouco frequente, aguardam prescrição/prazo legal (**Valor Primário** ainda!). **3ª Idade (Permanente)**: perderam valor administrativo, mas têm **Valor Secundário (histórico, probatório ou informativo)** — [[ROSE:JAMAIS podem ser eliminados!]]',
        badge: { text: '3 IDADES', tone: 'rose' },
      },
      {
        label: 'Transferência vs. Recolhimento vs. Eliminação (Art. 9º)',
        text: '**Transferência**: passagem do Arquivo **Corrente → Intermediário**. **Recolhimento**: passagem para o Arquivo **Permanente** (vindo do corrente ou intermediário!). **Eliminação (Lei 8.159, art. 9º)**: destruição de documentos sem valor permanente **SÓ pode ocorrer mediante AUTORIZAÇÃO da instituição arquivística pública competente** (após seguir a **TTD** — Tabela de Temporalidade Documental)!',
        badge: { text: 'TRANSF. vs. RECOLH.', tone: 'sky' },
      },
      {
        label: 'Princípios Arquivísticos (Cuidado com os Nomes!)',
        text: '**Proveniência (Respeito aos Fundos)**: **NÃO misturar** documentos de órgãos/produtores diferentes! **Organicidade**: documentos refletem a estrutura/funções do órgão que os criou. **Unicidade**: documento de arquivo é único no conjunto (mesmo tendo cópia, muda o contexto). **Indivisibilidade/Integridade**: o fundo não pode ser disperso/mutilado. **Cumulatividade**: o arquivo cresce naturalmente dia após dia.',
        badge: { text: 'PROVENIÊNCIA = FUNDO', tone: 'emerald' },
      },
      {
        label: 'Arquivos Públicos x Privados (Lei 8.159/91)',
        text: 'A gestão de documentos envolve **Produção, Utilização e Destinação** (art. 3º)! Arquivos **privados** podem ser declarados de **interesse público e social** por decreto quando relevantes para história/cultura nacional (não passam a pertencer ao Estado, mas têm restrição para sair do país ou ser destruídos!).',
        badge: { text: 'LEI 8.159/91', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Diferenciando Valor Primário de Valor Secundário no Protocolo',
        scenario:
          'Um processo de licitação de 2026 está sendo pago agora → **Arquivo Corrente (Valor Primário administrativo/fiscal)**. Em 2029, acabou o contrato, mas o Tribunal de Contas ainda pode auditar por mais 5 anos → **Transferido para o Arquivo Intermediário (ainda Valor Primário!)**. Em 2040, era a ata de fundação da primeira linha de ônibus biarticulado de Curitiba → **Recolhido ao Arquivo Permanente (Valor Secundário histórico — inalienável e imprescritível!)**.',
      },
      {
        title: 'Estagiário Querendo Triturar Pasta Velha Sem TTD',
        scenario:
          'O chefe manda o Agente Administrativo picotar caixas de processos antigos de 1998 só para liberar espaço na sala. [[ROSE:CRIME / ILEGALIDADE GRAVE (Art. 9º e Art. 25 Lei 8.159/91)!]] Documento público só pode ser eliminado se estiver previsto na **Tabela de Temporalidade (TTD)** E tiver **autorização formal da instituição arquivística competente** (além da publicação do Edital de Ciência de Eliminação)!',
      },
    ],
    table: {
      title: 'Tabela Completa das Três Idades Documentais (Decorar 100%)',
      headers: ['Idade', 'Frequência de Uso', 'Onde Fica?', 'Valor & Destino'],
      rows: [
        ['**1ª Idade · Corrente (Setorial)**', '**Alta / Frequente** (assunto ainda em andamento ou recém-encerrado)', 'No próprio setor produtor (perto da mesa/repartição)', '**Valor Primário** (adm/fiscal/legal) → Cumprido o uso imediato, vai p/ Intermediário (**Transferência**) ou Permanente (**Recolhimento**)'],
        ['**2ª Idade · Intermediária (Limbo)**', '**Pouca / Eventual** (aguarda prescrição ou auditoria)', 'Arquivo Geral / Central (ou terceirizado sob controle)', '**Ainda Valor Primário!** → Ao fim do prazo da TTD: **Eliminação** (se sem valor histórico) OU **Recolhimento** ao Permanente'],
        ['**3ª Idade · Permanente (Histórica)**', 'Uso **científico, histórico ou cultural** (pesquisadores/cidadãos)', 'Arquivo Público Permanente (ex.: Arquivo Público do Município)', '**Valor Secundário!** [[ROSE:NUNCA é eliminado!]] É inalienável e imprescritível'],
      ],
    },
    examTrap:
      'CINCO armadilhas que reprovam metade da sala: 1) Trocar **Transferência** (Corrente → Intermediário) por **Recolhimento** (→ Permanente)! 2) Dizer que o Arquivo Intermediário já tem **valor secundário** — [[ROSE:ERRADO!]] Tanto o Corrente quanto o Intermediário possuem **VALOR PRIMÁRIO**; o **Valor Secundário** só nasce no **Permanente**! 3) Confundir **Arquivística** com **Biblioteconomia/Museologia** — na Arquivologia, o método principal de classificação **NÃO é por assunto**, e sim pela **PROVENIÊNCIA (fundo/origem)**! 4) Achar que **cópia/segunda via** nunca vai para o permanente — se compor o fundo sem original existente, pode ir! 5) **Instrumentos de Gestão**: **Plano de Classificação** organiza os documentos pelo assunto/função no nascimento; **TTD (Tabela de Temporalidade)** define os **prazos de guarda e a destinação final** (eliminação ou guarda permanente)!',
    deepDive: {
      headline: 'Métodos de Arquivamento, Avaliação & Microfilmagem / Digitalização',
      points: [
        '**Métodos Básicos de Arquivamento**: **Alfabético** (pelo nome — segue regras de alfabetação: sobrenomes compostos, títulos não entram, artigos/preposições não contam!), **Geográfico** (Estado/Cidade/Correspondente), **Numérico** (Simples, Cronológico ou **Dígito-Terminal** — lê os dois últimos dígitos primeiro!) e **Ideográfico/Por Assunto** (Alfabético enciclopédico/dicionário ou Numérico decimal/duplex).',
        '**Ordem de operações de arquivamento**: **Inspeção** (ver se tem despacho de "arquive-se") → **Leitura** → **Classificação** → **Codificação** → **Ordenação** → **Arquivamento** (+ **Empréstimo/Controle** depois)!',
        '**Microfilmagem (Lei 5.433/68)** tem valor legal equivalente ao original (permite destruir o papel comum, **exceto documentos de valor permanente!**). Já documentos públicos **digitais/digitalizados** seguem normas do CONARQ e Decreto 10.278/2020 (exige assinatura digital + metadados para equiparação legal!).',
      ],
      extraExample:
        'Na regra de **alfabetação** para arquivar nomes brasileiros: **"João da Silva"** arquiva-se por **SILVA, João da** (último sobrenome primeiro!). Já **"Dr. Carlos Monte Verde"** (sobrenome composto inseparável!) arquiva-se por **MONTE VERDE, Carlos (Dr.)** — título profissional ("Dr.", "Prof.") vai para o final entre parênteses e não conta na ordem alfabética!',
      mnemonic: 'C → I = Transferência | → P = Recolhimento | Corrente/Intermediário = Valor Primário | Permanente = Valor Secundário (Ineliminável!) | Proveniência = Não misture fundos! | TTD = Prazos e Destinação!',
    },
  },

  '2.5.3': {
    realityParagraphs: [
      'A **Correspondência Comercial** (e o controle de **Protocolo / Expedição** nas organizações) aparece no edital para testar se você sabe diferenciar os documentos usados por **empresas privadas** dos usados por **órgãos públicos** (Redação Oficial) e se conhece o **passo a passo do setor de protocolo**!',
      'Pense no setor de protocolo como o **"aeroporto" dos documentos da organização**: tudo o que entra e sai passa pela pista de pouso (recebimento, conferência, carimbo/registro, classificação, distribuição) para nada sumir sem dono!',
    ],
    keyPoints: [
      {
        label: 'Carta Comercial, Circular & Memorando Interno',
        text: '**Carta Comercial**: comunicação formal **externa** entre empresa e cliente/fornecedor (com timbre, local/data, destinatário, vocativo, corpo claro, despedida cordial, assinatura). **Circular**: mesmo texto enviado simultaneamente a **vários destinatários**. **Memorando comercial**: bilhete/aviso ágil de **circulação interna** entre setores da empresa!',
        badge: { text: 'EXTERNA vs. INTERNA', tone: 'sky' },
      },
      {
        label: 'Rotina de Protocolo — Recebimento e Registro',
        text: 'Chegou documento? 1) **Receber** e conferir anexos; 2) **Separar** correspondência **ostensiva** (abre e lê para encaminhar!) da **particular/sigilosa/confidencial** ([[ROSE:NUNCA abra envelope lacrado marcado "Confidencial", "Reservado" ou "Pessoal"!]] Encaminha fechado!); 3) **Registrar** no sistema com **número de protocolo, data, hora, assunto e origem**; 4) **Classificar e Distribuir** com recibo de entrega!',
        badge: { text: 'SIGILOSO NÃO SE ABRE', tone: 'rose' },
      },
      {
        label: 'Expedição (Saída de Documentos)',
        text: 'Antes de despachar: conferir se está **assinado**, se tem **todos os anexos**, se o endereço/destinatário bate, registrar a saída no livro/sistema e guardar a **cópia/comprovante de envio (AR ou protocolo digital)** no arquivo!',
        badge: { text: 'CONFERÊNCIA DE SAÍDA', tone: 'emerald' },
      },
      {
        label: 'Comercial vs. Oficial (Cuidado Máximo!)',
        text: 'Na **Correspondência Comercial** existe liberdade estética, foco em **lucro/relacionamento/vendas** e uso aceito de expressões cordiais (*"Prezado cliente"*, *"Agradecemos a preferência"*). Na **Redação Oficial**, vale a **impessoalidade, padronização rígida do Estado e interesse público**!',
        badge: { text: 'EMPRESA vs. ESTADO', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Envelope Marcado "Confidencial — Ao Secretário Municipal"',
        scenario:
          'Chega um malote no Protocolo com dois envelopes: um comum endereçado à *"Prefeitura de Curitiba — Setor de Compras"* (ostensivo → você **abre**, carimba, lê o assunto e protocola no sistema!) e outro fechado com tarja **"CONFIDENCIAL — Uso Exclusivo do Secretário"** → [[ROSE:VOCÊ NÃO ABRE!]] Apenas registra o recebimento externo pelo envelope e entrega **lacrado** ao gabinete!',
      },
      {
        title: 'Carta de Cobrança Amigável (Comercial) vs. Notificação Oficial',
        scenario:
          'Uma empresa manda uma **Carta Comercial** elegante lembrando o cliente do boleto vencido com foco em manter a relação comercial. Já na Prefeitura, a comunicação equivalente não é "carta comercial", e sim um **Ofício / Notificação Administrativa** impessoal citando o processo e o prazo legal!',
      },
    ],
    table: {
      title: 'Fluxo Completo do Protocolo + Tipos de Correspondência',
      headers: ['Etapa / Documento', 'Função na Rotina', 'Regra de Ouro da Prova'],
      rows: [
        ['**1. Recebimento & Triagem**', 'Separar particular/sigiloso de ostensivo', '**Ostensiva**: abre para ler o teor. **Sigilosa/Particular**: **NÃO abre**, encaminha lacrada!'],
        ['**2. Registro & Autuação**', 'Gerar número único (protocolo) + capa de processo', '**Autuação** = transformar documento avulso em **processo** com capa, numeração sequencial e cadastro'],
        ['**3. Distribuição & Tramitação**', 'Enviar aos setores competentes registrando movimentação', 'Sempre registrar **quem recebeu, data e hora** (rastreabilidade!)'],
        ['**4. Expedição**', 'Conferir assinatura/anexos e despachar ao destino externo', 'Nunca expedir documento sem assinatura ou com anexo faltando!'],
        ['**Carta Comercial / Circular / Aviso**', 'Comunicação empresarial (externa, múltipla ou aviso breve)', 'Usa linguagem polida, clara e objetiva, com foco em negócios e relacionamento com cliente'],
      ],
    },
    examTrap:
      'Pegadinha clássica de Protocolo: dizer que *"o setor de protocolo deve abrir **TODAS** as correspondências recebidas para cadastrar o assunto no sistema."* [[ROSE:ERRADO!]] Correspondências marcadas como **particulares, pessoais, confidenciais ou sigilosas** **NÃO podem ser abertas** pelo protocolo — registra-se apenas o recebimento externo (remetente, se houver, data e destinatário) e encaminha-se **lacrado** ao destinatário! Outra: confundir **Memorando comercial** (ainda muito usado em empresas privadas!) com o **Padrão Ofício da Redação Oficial** (onde a 3ª edição do Manual da Presidência extinguiu Memorando e Aviso e unificou tudo em **Ofício**)!',
    deepDive: {
      headline: 'Conceitos Irmãos: Autuação, Juntada, Apensação e Desentranhamento',
      points: [
        '**Autuação**: ato de dar entrada formal criando o **processo administrativo** (capa + numeração das folhas).',
        '**Juntada por Anexação**: unir **definitivamente** um processo a outro (viram um só porque tratam do mesmo pedido/objeto). **Juntada por Apensação**: prender **temporariamente** um processo ao outro apenas para consulta/análise conjunta — depois podem ser separados!',
        '**Desentranhamento**: retirar uma folha/peça de dentro do processo mediante despacho motivado (deixando termo de desentranhamento no lugar para não quebrar a sequência!). **Desapensação**: separar processos que estavam apensados.',
      ],
      extraExample:
        'Num processo físico ou eletrônico, **Juntada por Anexação = casamento definitivo**; **Juntada por Apensação = namoro temporário** (andam juntos por um tempo para ajudar na decisão, depois separam!).',
      mnemonic: 'Protocolo: Ostensiva = ABRE · Sigilosa/Pessoal = NÃO ABRE! | Anexação = Definitiva · Apensação = Temporária | Desentranhar = Retirar folha com termo!',
    },
  },

  '2.5.4': {
    isFullModule: true,
    realityParagraphs: [
      '**Redação Oficial** é a matéria mais traiçoeira de Português/Arquivologia porque TODO MUNDO escreve e-mail errado no trabalho achando que está certo — e na prova a banca cobra o texto seco da **3ª edição do Manual de Redação da Presidência da República (MRPR, 2018)**!',
      'Já aviso logo a bomba nº 1 que derruba quem estudou por apostila velha de 2010: **na 3ª edição do MRPR, acabaram as diferenças entre OFÍCIO, AVISO e MEMORANDO!** Agora existe um **ÚNICO documento chamado PADRÃO OFÍCIO**! E mais: **aboliram "Digníssimo" e "Ilustríssimo"**!',
    ],
    keyPoints: [
      {
        label: 'Atributos da Redação Oficial (Sem Floreio!)',
        text: '**Impessoalidade** (quem fala é o cargo/órgão, NUNCA você pessoalmente!), **Clareza e Precisão**, **Objetividade**, **Concisão** (máximo de informação com o mínimo de palavras!), **Coesão e Coerência**, **Formalidade e Padronização**, e **Uso da Norma-Padrão** da língua portuguesa!',
        badge: { text: 'IMPESSOALIDADE É LEI', tone: 'sky' },
      },
      {
        label: 'A Revolução do MRPR 3ª Edição: PADRÃO OFÍCIO ÚNICO!',
        text: 'Antes, Ministro mandava *Aviso*, setor interno mandava *Memorando* e órgão externo mandava *Ofício*. **ACABOU!** Desde a 3ª ed. (2018), **Memorando e Aviso foram substituídos pelo OFÍCIO** (com a mesma diagramação: cabeçalho, identificador `Ofício nº ...`, local/data, assunto, destinatário, texto, fecho, assinatura)!',
        badge: { text: 'SÓ EXISTE OFÍCIO!', tone: 'rose' },
      },
      {
        label: 'Pronomes de Tratamento & Vocativos (Sem Bajulação!)',
        text: '**Vossa Excelência** = altas autoridades (Presidente, Prefeitos, Vereadores, Desembargadores, Juízes, Secretários de Estado, Governadores, Deputados, Senadores...). **Vossa Senhoria** = demais autoridades e particulares! **VOCATIVOS**: para Chefes de Poder = *"Excelentíssimo Senhor..."*; para demais autoridades com V.Exa. = *"Senhor + cargo"* (ex.: *"Senhor Prefeito,"*); para V.S.ª = *"Prezado Senhor,"* / *"Senhor..."*. [[ROSE:ABOLIDOS: "Digníssimo (DD.)", "Ilustríssimo (Ilmo.)" e "Mui Digno"!]]',
        badge: { text: 'VERBO NA 3ª PESSOA!', tone: 'amber' },
      },
      {
        label: 'Os 2 Únicos Fechos Oficiais (Decorar!)',
        text: '1) **`Respeitosamente,`**: quando enviado para **autoridade SUPERIOR** (inclusive o Presidente da República!). 2) **`Atenciosamente,`**: quando enviado para **autoridade de MESMA hierarquia ou INFERIOR** (ou para particulares!). **Sempre com vírgula no final!**',
        badge: { text: 'RESPEIT. vs. ATENCIOS.', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Concordância com "Vossa Excelência" (Erro Fatal de 80% das Pessoas)',
        scenario:
          'Você está escrevendo um Ofício **diretamente para o Prefeito** de Curitiba. Como conjugar o verbo e usar o pronome possessivo? [[ROSE:NUNCA escreva *"Vossa Excelência vós dirigis"* ou *"vossa assinatura"*!]] Embora se dirija à **2ª pessoa** (com quem falamos), os pronomes de tratamento **exigem verbo e possessivo na 3ª PESSOA**: [[EMERALD:*"Vossa Excelência **encaminhou** o processo com **sua** assinatura."*]] E se estiver falando **SOBRE** o Prefeito (não com ele)? Usa **SUA Excelência**!',
      },
      {
        title: 'Escolhendo o Fecho Certo num Ofício em Curitiba',
        scenario:
          'Você (Agente Administrativo) ou um Diretor de Departamento envia ofício para um **Secretário Municipal** ou para o **Prefeito** (hierarquia superior) → **`Respeitosamente,`**. Agora, o Secretário Municipal envia ofício para **outro Secretário Municipal** (mesma hierarquia) ou para um **cidadão/fornecedor** → **`Atenciosamente,`**. E se o texto tiver apenas 1 parágrafo ou mais? **Parágrafos do corpo são numerados (`1.`, `2.`, `3.`...)**, **EXCETO o parágrafo do fecho/encerramento ou quando houver parágrafo único**!',
      },
    ],
    table: {
      title: 'Manual de Bolso da Redação Oficial (MRPR 3ª Edição)',
      headers: ['Elemento do Ofício', 'Regra Correta (MRPR 3ª Ed.)', 'O Que Foi ABOLIDO / É Erro Fatal'],
      rows: [
        ['**Espécie Documental**', '**Padrão Ofício único** (interno ou externo)', '~~Memorando e Aviso~~ como modelos separados (unificados no **Ofício**!)'],
        ['**Vossa x Sua**', '**Vossa** Excelência/Senhoria = falando **COM** a autoridade. **Sua** = falando **SOBRE** ela', 'Usar *vossa/vosso* no verbo/possessivo: o certo é **3ª pessoa** (*"sua resposta"*, *"recebeu"*)!'],
        ['**Vocativo (Abertura)**', 'Chefes de Poder (Pres., Senado, Câmara, STF) = *Excelentíssimo Senhor...* · Demais V.Exa. = *Senhor [Cargo],* · V.S.ª = *Prezado(a) Senhor(a),*', '~~Ilustríssimo (Ilmo.)~~, ~~Digníssimo (DD.)~~, ~~Prezadíssimo~~ e ~~Doutor~~ (se não for título acadêmico ou cargo específico)!'],
        ['**Numeração de Parágrafos**', 'Corpo **numerado** (`1.`, `2.`...) — inclusive parágrafos iniciais!', '**Não se numera** o fecho, nem texto com **parágrafo único**!'],
        ['**Fecho + Fonte/Margem**', '**`Respeitosamente,`** (p/ superior) ou **`Atenciosamente,`** (p/ igual/inferior). Fonte **Calibri ou Carlito 12pt**, margem esq. **3,0 cm**, dir. **1,5 cm**', '~~"Sem mais para o momento"~~, ~~"Cordialmente"~~, ~~"Subscrevo-me"~~, ~~"Saudações"~~ → tudo proibido!'],
      ],
    },
    examTrap:
      'CINCO pegadinhas clássicas de Redação Oficial: 1) **Concordância de gênero com "Vossa Excelência"**: é concordância **siléptica (ideológica)** — se for uma **Prefeita**, escreve-se *"Vossa Excelência está **convidada**"* (feminino!), se for um **Prefeito**, *"está **convidado**"* (masculino)! 2) **Para o Papa**: único que usa **`Vossa Santidade`** (e não Excelência!). Para Reitores de Universidade: **`Vossa Magnificência`**. 3) **Para Prefeito, Vereador e Juiz**: **`Vossa Excelência`**, mas no **vocativo** NÃO escreva *"Excelentíssimo Senhor Prefeito"* — só se usa **"Excelentíssimo"** para os **3 Chefes de Poder da República** (Presidente da República, Presidente do Congresso/Senado, Presidente da Câmara e Presidente do STF — nos Estados/Municípios, embora alguns usem por costume local para Governador/Prefeito, o MRPR restringe "Excelentíssimo" aos Chefes de Poder!). 4) **Emprego do "Eu"**: proibido dizer *"Eu informo"* ou *"Acho que"* — usa-se **3ª pessoa / impessoal** (*"Informa-se que..."*, *"Esta Secretaria comunica..."*)! 5) **E-mail oficial**: exige assunto claro, texto formal sem emojis/gírias e o **Ofício assinado segue em ANEXO (PDF)** quando tiver valor documental formal!',
    deepDive: {
      headline: 'Exposição de Motivos, Mensagem & Diagramação Detalhada do Ofício',
      points: [
        '**3 tipos de documentos que ainda existem no MRPR**: 1) **Padrão Ofício** (regra geral interna/externa); 2) **Exposição de Motivos** (Ministro dirige ao Presidente propondo ato normativo/projeto de lei); 3) **Mensagem** (Chefe do Executivo dirige ao Poder Legislativo, ex.: encaminhar projeto de lei ou veto!).',
        '**Ordem do Padrão Ofício**: Brasão/Timbre → Identificação do expediente (`Ofício nº 123/2026/SMA`) → Local e data alinhados à **DIREITA** (`Curitiba, 13 de dezembro de 2026.`) → Endereçamento (`A Sua Excelência o Senhor...` + cargo + endereço) → **Assunto** (em negrito, resumido) → Texto → Fecho → Assinatura (com nome em negrito e cargo abaixo, centralizados!).',
        '**Endereçamento com "Vossa Excelência"**: no envelope / cabeçalho de endereço **NUNCA** se escreve *"À Vossa Excelência"* — escreve-se **`A Sua Excelência o Senhor`** (sem crase antes de *Sua*!)!',
      ],
      extraExample:
        'Atenção à crase no endereçamento: **`A Sua Excelência o Senhor...`** → **SEM CRASE** no `"A"` (porque não se usa artigo antes de pronome de tratamento)! Já em **`À Senhora Maria Silva`** → **TEM CRASE** (porque "Senhora" admite artigo feminino)!',
      mnemonic: '3ª ed. MRPR = Só existe OFÍCIO (tchau Memorando/Aviso!) | Digníssimo/Ilustríssimo = LIXO! | Respeitosamente = Superior · Atenciosamente = Igual/Inferior | Vossa = Verbo na 3ª pessoa | "A Sua Excelência" = SEM crase!',
    },
  },
};
