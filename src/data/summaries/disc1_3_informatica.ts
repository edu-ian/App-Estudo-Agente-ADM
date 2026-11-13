import type { TopicStudyContent } from '../summaryTypes';

export const DISC_1_3_INFORMATICA: Record<string, TopicStudyContent> = {
  '1.3.1': {
    realityParagraphs: [
      'Conceitos básicos de informática parecem fáceis, mas a banca cobra **pequenas trocas técnicas** que derrubam quem só usa computador no automático. Primeiro: **bit** (0 ou 1) é a menor unidade; **8 bits = 1 Byte** (que guarda 1 letra/caractere).',
      'Segundo: não confunda as memórias! **RAM** é sua mesa de trabalho temporária (desligou o PC ou faltou luz sem salvar = **apaga tudo**). **ROM** vem gravada de fábrica (BIOS/UEFI, não apaga). **HD e SSD** são o seu armário permanente (salva para sempre, mas SSD usa chip Flash sem disco girando e dá um banho de velocidade no HD).',
    ],
    keyPoints: [
      {
        label: 'Bit vs. Byte (Regra do 8 e 1024)',
        text: '**1 Byte = 8 bits** (`b` minúsculo = bit, usado em velocidade de internet `Mbps`; `B` maiúsculo = Byte, usado em tamanho de arquivo `MB`). E cada degrau sobe **1.024** (`KB → MB → GB → TB`).',
        badge: { text: '1B = 8b', tone: 'sky' },
      },
      {
        label: 'RAM vs. Cache vs. ROM',
        text: '**RAM** = Principal, **volátil** (apaga sem energia), leitura/escrita. **Cache** = Memória ultrarrápida colada na CPU (**SRAM**). **ROM** = **Não volátil**, guarda o boot inicial.',
        badge: { text: 'VOLÁTIL vs. FIXA', tone: 'rose' },
      },
      {
        label: 'HD vs. SSD',
        text: '**HD** = disco magnético giratório (frágil e mais lento). **SSD** = memória flash eletrônica (sem partes móveis, silencioso e muito mais rápido).',
        badge: { text: 'SSD = FLASH', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Faltou Luz na Repartição Antes de Salvar o Ofício',
        scenario:
          'Você digitou 3 páginas no Word sem clicar em Salvar e a energia caiu. O texto sumiu porque estava apenas na **memória RAM (volátil)**. Só o que já tinha sido salvo antes fica seguro no **SSD/HD (não volátil)**.',
      },
      {
        title: 'Calculando Tempo de Download (Pegadinha b vs. B!)',
        scenario:
          'A internet da Prefeitura é de `80 Mbps` (megabits!). Para baixar um PDF de `10 MB` (megabytes!), converta: `10 MB × 8 = 80 Megabits`. Logo, baixa em **1 segundo** (e não em 0,125s!).',
      },
    ],
    table: {
      title: 'Hierarquia das Memórias (Da Mais Rápida para a Maior)',
      headers: ['Memória', 'Volátil? (Apaga sem luz?)', 'Velocidade / Custo', 'Para Que Serve'],
      rows: [
        ['**Registradores & Cache**', '[[ROSE:SIM (Volátil)]]', 'Mais rápida e cara de todas (dentro da CPU)', 'Dados imediatos que o processador usa agora.'],
        ['**Memória RAM**', '[[ROSE:SIM (Volátil)]]', 'Muito rápida (DDR4/DDR5)', 'Segurar os programas abertos no momento.'],
        ['**Memória ROM (BIOS/UEFI)**', '[[EMERALD:NÃO (Não volátil)]]', 'Somente leitura básica', 'Instruções iniciais para ligar o computador.'],
        ['**SSD / HD**', '[[EMERALD:NÃO (Não volátil)]]', 'Mais lenta que RAM, gigante (GB/TB)', 'Guardar arquivos e o Windows/Linux instalados.'],
      ],
    },
    examTrap:
      'Pegadinha clássica: dizer que a **Memória Cache** fica no HD ou é maior que a RAM. MENTIRA! Ordem de velocidade: **Registradores > Cache (L1/L2/L3) > RAM > SSD > HD**. Quanto mais perto da CPU, mais rápida e MENOR ela é!',
    deepDive: {
      headline: 'Ordem das Unidades & Componentes da CPU',
      points: [
        'Ordem crescente: **Bit → Byte (8b) → Kilobyte (KB) → Megabyte (MB) → Gigabyte (GB) → Terabyte (TB) → Petabyte (PB)**.',
        'Dentro da **CPU (Processador)** há 3 partes clássicas: **ULA** (faz contas e lógica), **UC** (Unidade de Controle — o chefe que coordena tudo) e **Registradores** (memória interna minúscula).',
      ],
      extraExample:
        'Um pendrive de `16 GB` tem aproximadamente `16 × 1024 = 16.384 MB`.',
      mnemonic: 'RAM = Rascunho (apaga) | ROM = Rígida (não apaga) | B = 8b | K-M-G-T (Cada Mega Giga Tera).',
    },
  },

  '1.3.2': {
    realityParagraphs: [
      'Hardware de entrada e saída é daquelas questões que dá até raiva se você errar por distração. A lógica é olhar **o caminho da informação em relação ao computador**: a informação está **ENTRANDO no PC** (você mandando comandos/dados pra dentro)? **Entrada**. O computador está **CUSPINDO resultado pra fora** para você ver/ouvir/pegar? **Saída**.',
      'E existem os **Híbridos (Entrada E Saída ao mesmo tempo)** — e é justamente neles que a banca enfia a pegadinha!',
    ],
    keyPoints: [
      {
        label: 'Só Entrada (Manda pra CPU)',
        text: '**Teclado, mouse, scanner puro, microfone, webcam, leitor de código de barras, leitor biométrico**.',
        badge: { text: 'ENTRA NO PC', tone: 'sky' },
      },
      {
        label: 'Só Saída (Tira da CPU)',
        text: '**Monitor comum, impressora comum (só imprime!), caixa de som, fone simples, projetor (datashow)**.',
        badge: { text: 'SAI DO PC', tone: 'amber' },
      },
      {
        label: 'Híbridos (Entrada E Saída)',
        text: '**Tela Touchscreen**, **Impressora Multifuncional** (imprime + escaneia!), **Pendrive / HD externo**, **Placa de Rede / Modem**, **Headset** (fone + mic).',
        badge: { text: 'OS DOIS (E/S)', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Balcão de Protocolo da Prefeitura',
        scenario:
          'Você passa a guia no **leitor de código de barras** ([[SKY:ENTRADA]]) → vê na tela do **monitor comum** ([[AMBER:SAÍDA]]) → imprime e depois escaneia o documento assinado na **impressora multifuncional** ([[EMERALD:ENTRADA E SAÍDA]]).',
      },
      {
        title: 'Totem de Autoatendimento na Rua da Cidadania',
        scenario:
          'A **tela sensível ao toque (touchscreen)** exibe o menu para o cidadão (saída) e capta o dedo clicando na opção (entrada) → é **Entrada e Saída**!',
      },
    ],
    table: {
      title: 'Classificação Antipega dos Periféricos',
      headers: ['Periférico', 'Classificação', 'Por Quê?'],
      rows: [
        ['**Impressora comum** (laser/jato)', '[[AMBER:Só Saída]]', 'Só joga texto/imagem no papel.'],
        ['**Impressora Multifuncional**', '[[EMERALD:Entrada e Saída]]', 'Imprime (saída) **E** tem **scanner** embutido (entrada).'],
        ['**Monitor comum** vs. **Touchscreen**', 'Comum = Saída / Touch = **E/S**', 'Touch capta o toque do dedo além de exibir a imagem.'],
        ['**Scanner / Webcam / Microfone**', '[[SKY:Só Entrada]]', 'Digitaliza papel, vídeo ou áudio para dentro do PC.'],
        ['**Pendrive / SSD externo / Placa de Rede**', '[[EMERALD:Entrada e Saída]]', 'Você lê arquivos dele (entrada) e grava arquivos nele (saída).'],
      ],
    },
    examTrap:
      'Pegadinha clássica: **Scanner** é SÓ ENTRADA (ele puxa a imagem do papel pro PC). Já **Impressora Multifuncional** é ENTRADA E SAÍDA porque junta impressora + scanner na mesma carcaça!',
    deepDive: {
      headline: 'Outros Dispositivos que Costumam Aparecer',
      points: [
        '**Plotter**: impressora gigante usada em engenharia/arquitetura para mapas e plantas → **Saída**.',
        '**Mesa Digitalizadora** (caneta para assinar/desenhar, sem tela): **Entrada**. Se tiver display desenhável (tipo tablet), é **E/S**.',
        '**Headset** (tem fone + microfone): **Entrada e Saída**. **Headphone** (só fone, sem microfone): **Só Saída**.',
      ],
      extraExample:
        'Placa de som é Entrada e Saída (manda áudio pro fone e recebe áudio do microfone).',
      mnemonic: 'Vai pro PC = Entrada | Vem pro Humano = Saída | Multifuncional/Touch/Pendrive = Os Dois!',
    },
  },

  '1.3.3': {
    realityParagraphs: [
      'Software é a parte lógica (os programas). A banca cobra duas coisas aqui: **divisão por categoria** (Sistema Operacional vs. Aplicativo vs. Utilitário) e **tipos de licença** — principalmente a diferença entre **Software Livre**, **Open Source** e **Freeware**.',
      'Grave esta verdade absoluta: **Software Livre NÃO significa "de graça"!** Significa liberdade de código-fonte (poder mexer, copiar e distribuir). Um software livre pode até ser cobrado (por suporte/instalação), e um software gratuito (**Freeware**) pode ter código totalmente fechado!',
    ],
    keyPoints: [
      {
        label: 'Software Básico (Sistema Operacional)',
        text: 'Gerencia o hardware e faz a máquina funcionar: **Windows, Linux Ubuntu, macOS, Android**.',
        badge: { text: 'BASE', tone: 'sky' },
      },
      {
        label: 'Utilitários vs. Aplicativos',
        text: '**Utilitários** mantêm/protegem o PC (antivírus, WinRAR/7-Zip, desfragmentador). **Aplicativos** servem pro trabalho do usuário (Word, Excel, Chrome, sistema de protocolo).',
        badge: { text: 'FUNÇÃO', tone: 'amber' },
      },
      {
        label: 'Software Livre (4 Liberdades)',
        text: '0: Executar para qualquer fim. 1: Estudar e modificar (código aberto!). 2: Redistribuir cópias. 3: Melhorar e publicar as melhorias.',
        badge: { text: 'CÓDIGO ABERTO', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Troca de Pacote Office por LibreOffice na Prefeitura',
        scenario:
          'Se um órgão público instala **Linux Ubuntu** e **LibreOffice**, está usando **Software Livre / Código Aberto** (economiza licenças milionárias e a equipe de TI pode auditar o código).',
      },
      {
        title: 'Baixando Leitor de PDF Gratuito',
        scenario:
          'Você baixa o Adobe Acrobat Reader gratuitamente, mas não pode ver nem alterar o código-fonte dele. Isso é **Freeware** (gratuito + código fechado), e **NÃO** Software Livre!',
      },
    ],
    table: {
      title: 'Licenças de Software: Não Confunda Mais!',
      headers: ['Tipo de Licença', 'É Gratuito?', 'Código-Fonte Aberto?', 'Exemplos Reais'],
      rows: [
        ['**Proprietário / Comercial**', 'Pago', '[[ROSE:Fechado]]', 'Windows 11, Microsoft Office, Photoshop.'],
        ['**Freeware**', 'Gratuito', '[[ROSE:Fechado]]', 'Adobe Reader, Skype, Google Chrome (binário).'],
        ['**Shareware / Trial**', 'Grátis só por X dias ou limitado', '[[ROSE:Fechado]]', 'WinRAR (aviso após 40 dias), antivírus teste 30 dias.'],
        ['**Software Livre / Open Source**', 'Geralmente grátis (pode cobrar suporte)', '[[EMERALD:Aberto]] (pode editar!)', 'Linux Ubuntu, LibreOffice, GIMP, Firefox.'],
      ],
    },
    examTrap:
      'Pegadinha eterna de prova: "Software Livre é sinônimo de software gratuito (freeware)." [[ROSE:MENTIRA!]] Freeware é gratuito mas fechado; Software Livre exige **código-fonte aberto** com as 4 liberdades (livre como "liberdade de expressão", não "cerveja grátis")!',
    deepDive: {
      headline: 'Firmware e Drivers (Onde Eles Entram?)',
      points: [
        '**Driver**: pequeno software que ensina o Windows/Linux a conversar com uma peça específica (ex.: driver da impressora).',
        '**Firmware**: software gravado direto num chip de hardware (ex.: a BIOS da placa-mãe ou o sistema interno de um roteador/impressora).',
      ],
      extraExample:
        'O LibreOffice Writer é **Aplicativo** e **Software Livre**. Já o Windows Defender é **Utilitário** e **Proprietário**.',
      mnemonic: 'Freeware = Grátis Fechado | Shareware = Testar por tempo | Livre = Código Aberto (4 liberdades).',
    },
  },

  '1.3.4': {
    realityParagraphs: [
      'Atalho de teclado é questão que você acerta em 5 segundos ou chora porque misturou o atalho do **Word em Português** com o atalho do **Navegador**. A banca ama cobrar justamente os atalhos em que a letra em português **NÃO bate com a do inglês**!',
      'Exemplo clássico: no Chrome, **`Ctrl + S`** salva a página (`Save`). Já no Word em português, **`Ctrl + S`** é **Sublinhado**, e para salvar é **`Ctrl + B`** (de "Botão salvar" ou "Backup")!',
    ],
    keyPoints: [
      {
        label: 'Windows 10/11 Campeões',
        text: '**Win + L** (Bloquear tela — saia da mesa e aperte!), **Win + D** (Área de Trabalho), **Win + E** (Explorador), **Alt + Tab** (Alternar janelas), **Ctrl + Shift + Esc** (Gerenciador de Tarefas direto!).',
        badge: { text: 'WINDOWS', tone: 'sky' },
      },
      {
        label: 'Word 2016 PT-BR (Os Trocados!)',
        text: '**Ctrl + B** = Salvar! | **Ctrl + N** = Negrito! | **Ctrl + I** = Itálico! | **Ctrl + S** = Sublinhado! | **Ctrl + T** = Selecionar Tudo! | **Ctrl + Z / Y** = Desfazer / Refazer.',
        badge: { text: 'PEGADINHA PT-BR', tone: 'rose' },
      },
      {
        label: 'Navegadores (Chrome / Edge / Firefox)',
        text: '**Ctrl + T** = Nova aba! | **Ctrl + Shift + T** = Reabrir aba fechada! | **Ctrl + H** = Histórico | **Ctrl + J** = Downloads | **F5 / Ctrl + R** = Atualizar.',
        badge: { text: 'NAVEGADOR', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Saindo Rápido do Balcão para Ir ao Banheiro',
        scenario:
          'Você está com dados sigilosos de munícipes abertos (LGPD!). Antes de levantar, aperta **`Win + L`** (*Lock*): trava a sessão na hora exigindo senha para voltar!',
      },
      {
        title: 'Fechou a Aba do Sistema sem Querer!',
        scenario:
          'Você estava preenchendo um protocolo no navegador e clicou no `X` da aba por acidente. Aperta **`Ctrl + Shift + T`** que ela ressuscita na hora!',
      },
    ],
    table: {
      title: 'Tabela de Conflito: Mesma Tecla, Ações Diferentes!',
      headers: ['Atalho', 'No Word 2016 (PT-BR)', 'No Navegador (Chrome/Edge)', 'No Windows Explorer'],
      rows: [
        ['**Ctrl + B**', '[[ROSE:Salvar arquivo!]]', 'Exibe/oculta barra de favoritos (Ctrl+Shift+B)', '—'],
        ['**Ctrl + T**', 'Selecionar **Tudo**', '**Nova aba (Tab)**', '— (no Explorer é **Ctrl + A**!)'],
        ['**Ctrl + S**', '**Sublinhado**', 'Salvar página como...', '—'],
        ['**Ctrl + N**', '**Negrito**', '**Nova janela** (e `Ctrl+Shift+N` = Anônima!)', 'Nova janela do Explorer'],
        ['**Ctrl + P**', 'Imprimir', 'Imprimir', '—'],
      ],
    },
    examTrap:
      'PEGADINHA MORTAL: No Word em português, **`Ctrl + T`** seleciona TUDO; mas no **Windows Explorer** e no navegador, **`Ctrl + T`** abre uma NOVA ABA (no Windows quem seleciona tudo é **`Ctrl + A`** de *All*)!',
    deepDive: {
      headline: 'Mais 4 Atalhos que Salvam Questões Difíceis',
      points: [
        '**`Ctrl + Shift + N`** = Aba Anônima no Chrome/Edge (mas no **Firefox** é **`Ctrl + Shift + P`** de *Private*!).',
        '**`Alt + F4`** fecha o programa inteiro; **`Ctrl + W`** (ou `Ctrl + F4`) fecha só a aba/documento atual.',
        '**`Win + .` (ponto)** abre teclado de emojis no Windows; **`Win + V`** abre histórico da área de transferência!',
        '**`F2`** no Windows Explorer **renomeia** o arquivo selecionado; **`F11`** coloca tela cheia no navegador.',
      ],
      extraExample:
        'Para abrir o Gerenciador de Tarefas direto sem passar por aquela tela azul do `Ctrl+Alt+Del`, usa-se **`Ctrl + Shift + Esc`**.',
      mnemonic: 'Word PT: B=Salvar, N=Negrito, S=Sublinhado, T=Tudo | Chrome: T=Tab, J=Downloads, H=Histórico.',
    },
  },

  '1.3.5': {
    realityParagraphs: [
      'Gerenciamento de arquivos cai perguntando três coisas: **extensões de arquivos**, **regras de nomes proibidos no Windows** e o **comportamento de mover/copiar/excluir** pastas.',
      'No Windows, o ponto final seguido de 3 ou 4 letras (`.docx`, `.xlsx`, `.pdf`) diz ao sistema qual programa abre aquele arquivo. E se você tentar salvar um processo com barra `/` na data (tipo `Oficio 12/11/2026.pdf`), o Windows dá erro na cara — porque **existem 9 caracteres proibidos**!',
    ],
    keyPoints: [
      {
        label: '9 Caracteres Proibidos no Nome (Windows)',
        text: '`\\ / : * ? " < > |` (Barra invertida, barra, dois-pontos, asterisco, interrogação, aspas, menor, maior e barra vertical). **Hífen `-` e underline `_` PODEM!**',
        badge: { text: 'PROIBIDOS NO NOME', tone: 'rose' },
      },
      {
        label: 'Delete vs. Shift + Delete',
        text: '**`Delete`** manda pra **Lixeira** (dá pra restaurar!). **`Shift + Delete`** apaga **direto e permanente** sem passar pela Lixeira (atenção: em pendrive, `Delete` normal também já apaga direto sem Lixeira!).',
        badge: { text: 'LIXEIRA vs. DIRETO', tone: 'amber' },
      },
      {
        label: 'Arrastar com o Mouse',
        text: 'Arrastar pasta **no MESMO disco (C: → C:)** = **MOVE**. Arrastar para **DISCO DIFERENTE (C: → Pendrive D:)** = **COPIA**! (Segurar `Ctrl` força cópia; segurar `Shift` força mover).',
        badge: { text: 'CLÁSSICA', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Salvando Arquivo com Data no Nome',
        scenario:
          'Você tenta salvar `Relatorio_13/12/2026.xlsx`. O Windows barra na hora porque `/` é proibido! Solução correta: `Relatorio_13-12-2026.xlsx` ou `2026-12-13_Relatorio.xlsx`.',
      },
      {
        title: 'Exportando Dados do Sistema da Prefeitura',
        scenario:
          'O sistema exporta relatórios em **`.csv`** (*Comma-Separated Values* — texto puro separado por vírgula ou `;`, super leve que abre no Excel!) ou em **`.pdf`** (documento portátil para leitura sem desconfigurar layout).',
      },
    ],
    table: {
      title: 'Extensões de Arquivo Mais Cobradas',
      headers: ['Extensão', 'Programa / Formato', 'Característica Principal'],
      rows: [
        ['**.docx / .odt**', 'Word 2016+ / LibreOffice Writer', 'Documentos editáveis de texto (`.doc` era até Word 2003).'],
        ['**.xlsx / .ods**', 'Excel 2016+ / LibreOffice Calc', 'Planilhas de cálculo e fórmulas.'],
        ['**.pptx / .odp**', 'PowerPoint / Impress', 'Apresentações de slides.'],
        ['**.pdf**', 'Portable Document Format', 'Preserva formatação igual em qualquer tela/impressão.'],
        ['**.csv / .txt**', 'Dados tabulares / Texto puro', '`.txt` não guarda negrito/fonte; `.csv` importa tabelas.'],
        ['**.zip / .rar / .7z**', 'Arquivos compactados', 'Reduz tamanho e junta vários arquivos num só pacote.'],
        ['**.exe / .bat / .msi**', 'Executáveis do Windows', '[[ROSE:ALTO RISCO]] Nunca abra de e-mail estranho (pode ser malware!).'],
      ],
    },
    examTrap:
      'Pegadinha clássica: **"Apagar um arquivo em um Pendrive com a tecla Delete envia o arquivo para a Lixeira."** [[ROSE:MENTIRA!]] Em unidades removíveis (pendrive/cartão SD) e pastas de rede, o `Delete` normal exclui **permanentemente** sem ir pra Lixeira!',
    deepDive: {
      headline: 'Curingas de Busca (* e ?) no Windows',
      points: [
        '**Asterisco (`*`)**: substitui **qualquer quantidade** de caracteres (`*.pdf` acha todos os PDFs; `ata*` acha tudo que começa com "ata").',
        '**Interrogação (`?`)**: substitui **apenas 1 caractere** (`doc?.pdf` acha `doc1.pdf` e `docA.pdf`, mas NÃO acha `doc12.pdf`).',
      ],
      extraExample:
        'Arrastar um arquivo de `C:\\Documentos` para `C:\\Desktop` **MOVE** o arquivo. Arrastar de `C:\\Documentos` para `D:\\Backup` **COPIA** o arquivo.',
      mnemonic: 'Mesmo disco arrastado = MOVE | Outro disco arrastado = COPIA | Proibidos: \\ / : * ? " < > |',
    },
  },

  '1.3.6': {
    realityParagraphs: [
      'Segurança da informação cai demais porque servidor público que clica em link falso entrega a rede da Prefeitura inteira pros hackers! Você precisa dominar **3 pilares**: os **tipos de malware** (pragas), os **golpes humanos** (Phishing/Engenharia Social) e as **defesas** (Backup, Firewall, Antivírus).',
      'Não confunda os malwares! O **Vírus** precisa que alguém execute o arquivo contaminado (tipo um parasita). O **Worm** anda sozinho pela rede infectando todo mundo sem ninguém clicar em nada. O **Trojan** finge ser um programa legal (tipo "boleto_urgente.exe") pra abrir a porta dos fundos. E o **Ransomware** sequestra seus arquivos com criptografia e cobra resgate!',
    ],
    keyPoints: [
      {
        label: 'Os 5 Malwares Mais Cobrados',
        text: '**Vírus** (precisa de hospedeiro/clique), **Worm** (propaga-se sozinho na rede), **Trojan** (Cavalo de Troia — disfarce), **Spyware/Keylogger** (espiona tela/teclas), **Ransomware** (criptografa e pede resgate).',
        badge: { text: 'MEMORIZAR', tone: 'rose' },
      },
      {
        label: 'Phishing (Engenharia Social)',
        text: 'E-mail/SMS/site falso se passando pelo banco, Receita ou TI da Prefeitura para **pescar** sua senha ou dados.',
        badge: { text: 'GOLPE', tone: 'amber' },
      },
      {
        label: 'Os 3 Tipos de Backup',
        text: '**Completo (Full)**: copia tudo e limpa a marca (archive bit). **Incremental**: copia só o que mudou desde o **último backup (qualquer um)**. **Diferencial**: copia tudo o que mudou desde o **último COMPLETO**.',
        badge: { text: 'CAI SEMPRE', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'E-mail Falso de "Atualização do RH"',
        scenario:
          'Chega um e-mail no setor dizendo "Seu contracheque foi bloqueado, clique aqui para validar" com link estranho (`prefeitura-suporte.xyz`). Isso é **Phishing** (Engenharia Social). Nunca clique; confira o domínio oficial (`@curitiba.pr.gov.br`)!',
      },
      {
        title: 'Restaurando Backup Depois de Ataque Ransomware',
        scenario:
          'Se a rede usa **Backup Completo no domingo** e **Incremental de segunda a quinta**: para restaurar na quinta, você precisa do **Domingo + Segunda + Terça + Quarta + Quinta** (todos!). Já no **Diferencial**, você só precisa do **Domingo + Quinta** (mais rápido pra restaurar, mas gasta mais espaço!).',
      },
    ],
    table: {
      title: 'Comparativo de Segurança: Malwares & Backups',
      headers: ['Conceito', 'Como Age / Funciona', 'Característica Chave de Prova'],
      rows: [
        ['**Vírus**', 'Infecta um arquivo e precisa ser executado pelo usuário.', 'Deixa de agir sem hospedeiro/execução.'],
        ['**Worm (Verme)**', 'Usa falhas de rede para se multiplicar automaticamente.', 'Consome banda/rede; **não precisa de hospedeiro**.'],
        ['**Ransomware**', 'Criptografa todo o disco/rede e exige pagamento.', 'Única garantia de recuperação sem pagar: **Backup offline**!'],
        ['**Firewall**', 'Barreira que filtra **tráfego de entrada e saída na rede** (portas).', '[[ROSE:NÃO É ANTIVÍRUS!]] Não limpa vírus já dentro do arquivo.'],
        ['**Backup Incremental**', 'Copia só desde o último backup e **limpa** o bit de arquivo.', 'Backup **mais rápido**; restauração **mais lenta** (precisa de toda a cadeia).'],
        ['**Backup Diferencial**', 'Copia desde o último completo e **NÃO limpa** o bit.', 'Restauração **rápida** (só Completo + último Diferencial).'],
      ],
    },
    examTrap:
      'Pegadinha clássica: dizer que o **Firewall** remove vírus dos arquivos do pendrive. MENTIRA! **Firewall** é um porteiro de rede (bloqueia conexões e portas indevidas); quem caça e remove código malicioso no disco é o **Antivírus / Antimalware**!',
    deepDive: {
      headline: 'Pilares da Segurança da Informação (CID)',
      points: [
        '**Confidencialidade**: só quem tem autorização lê (protegido por **criptografia** e senha).',
        '**Integridade**: o arquivo não foi alterado no caminho sem permissão (verificado por **Hash / Assinatura Digital**).',
        '**Disponibilidade**: o sistema está no ar quando o cidadão ou servidor precisa (ataque **DDoS** derruba a disponibilidade!).',
        '**Autenticidade / Irretratabilidade (Não Repúdio)**: garante quem assinou (Certificado Digital ICP-Brasil impede dizer "não fui eu").',
      ],
      extraExample:
        'Ataque **DDoS** (Negação de Serviço Distribuída) usa milhares de computadores zumbis (**botnet**) acessando o portal da Prefeitura ao mesmo tempo até derrubar o servidor → ataca a **Disponibilidade**!',
      mnemonic: 'CID-A: Confidencialidade (segredo) | Integridade (intacto) | Disponibilidade (no ar) | Autenticidade.',
    },
  },

  '1.3.7': {
    realityParagraphs: [
      'A banca coloca **Windows 10/11** e **Linux Ubuntu** lado a lado para cobrar diferenças estruturais. No Windows, as pastas se dividem por letras de unidade (`C:\\`, `D:\\`), a barra é invertida (`\\`) e o sistema **NÃO diferencia maiúsculas de minúsculas** nos nomes (`Ata.pdf` e `ata.pdf` são o mesmo arquivo).',
      'No **Linux Ubuntu**, não existem letras `C:` ou `D:` — tudo começa de uma única raiz chamada **`/`** (barra normal!), as pastas dos usuários ficam em **`/home/nome`**, e o sistema É **case-sensitive** (diferencia sim! `Ata.pdf` e `ata.pdf` coexistem na mesma pasta!).',
    ],
    keyPoints: [
      {
        label: 'Windows 10 e 11',
        text: 'Sistema **proprietário**, sistema de arquivos padrão **NTFS**, barra invertida **`\\`**, discos por letra (`C:`), **não** diferencia maiúscula/minúscula em nomes.',
        badge: { text: 'WINDOWS', tone: 'sky' },
      },
      {
        label: 'Linux Ubuntu',
        text: '**Software Livre** (kernel Linux + ambiente GNOME padrão no Ubuntu), sistema de arquivos **EXT4**, barra normal **`/`**, **CASE-SENSITIVE** (diferencia `A` de `a`!).',
        badge: { text: 'LINUX UBUNTU', tone: 'amber' },
      },
      {
        label: 'Comandos Básicos de Terminal Linux',
        text: '`ls` (lista arquivos), `cd` (entra em pasta), `pwd` (mostra onde estou), `mkdir` (cria pasta), `cp` (copia), `mv` (move/renomeia), `rm` (apaga), `sudo` (executa como administrador `root`).',
        badge: { text: 'TERMINAL', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Duplicidade de Nomes Entre Windows e Linux',
        scenario:
          'Um colega manda dois arquivos do Ubuntu (`Edital.pdf` e `edital.pdf`) na mesma pasta. No Linux funciona de boa; quando você extrai no Windows 11, o Windows pergunta se você quer **substituir**, porque pra ele os dois têm o mesmo nome!',
      },
      {
        title: 'Caminho de Pasta do Usuário',
        scenario:
          'No Windows 11 os arquivos do usuário João ficam em `C:\\Users\\Joao`. No Ubuntu ficam em `/home/joao` (e a pasta do administrador supremo `root` fica em `/root`, enquanto configurações do sistema ficam em `/etc`).',
      },
    ],
    table: {
      title: 'Duelo Direto: Windows 10/11 vs. Linux Ubuntu',
      headers: ['Critério', 'Windows 10 / 11', 'Linux Ubuntu'],
      rows: [
        ['**Código / Licença**', 'Proprietário (pago)', 'Livre / Open Source (GPL)'],
        ['**Raiz dos Diretórios**', 'Letras de unidade (`C:\\`, `D:\\`)', 'Barra única raiz **`/`**'],
        ['**Diferencia Maiúscula/Minúscula?**', '[[AMBER:NÃO]] (`Doc.txt` = `doc.txt`)', '[[EMERALD:SIM (Case-sensitive!)]] (`Doc.txt` ≠ `doc.txt`)'],
        ['**Sistema de Arquivos Padrão**', 'NTFS', 'EXT4'],
        ['**Superusuário (Admin)**', 'Administrador', '**root** (via comando `sudo`)'],
      ],
    },
    examTrap:
      'Pegadinha clássica de comandos Linux: **`mv`** não serve só para MOVER arquivo — se você usar `mv antigo.txt novo.txt` na mesma pasta, o comando **`mv` RENOMEIA** o arquivo! (Não existe comando `rename` padrão, usa-se `mv`).',
    deepDive: {
      headline: 'Pastas Vitais do Linux & Novidades do Windows 11',
      points: [
        'Diretórios do Linux: **`/`** (raiz), **`/home`** (arquivos dos usuários comuns), **`/etc`** (arquivos de configuração), **`/bin`** (programas/comandos básicos), **`/tmp`** (temporários).',
        'No **Windows 10/11**: **BitLocker** criptografa o disco inteiro; **Windows Defender / Segurança do Windows** é o antivírus nativo; **Snap Layouts** (Windows 11) organiza janelas na tela.',
      ],
      extraExample:
        'Para criar uma pasta chamada `protocolos` no terminal do Ubuntu e entrar nela: `mkdir protocolos` e depois `cd protocolos`.',
      mnemonic: 'Linux: `/` é raiz, `ls` lista, `cd` entra, `mkdir` cria pasta, `rm` apaga, `sudo` dá poder de root!',
    },
  },

  '1.3.8': {
    realityParagraphs: [
      'Word 2016 é carne de vaca em prova administrativa, e as bancas cobram **em qual guia (aba) fica cada botão** e como funcionam ferramentas clássicas como **Pincel de Formatação**, **Mala Direta** e **Controlar Alterações**.',
      'Não tente decorar todos os 200 botões do Word: aprenda a lógica das guias (**Página Inicial** = mexer em letra/parágrafo; **Inserir** = botar coisa de fora como tabela/cabeçalho/quebra; **Layout** = tamanho/margem/orientação do papel; **Revisão** = ortografia e Controlar Alterações).',
    ],
    keyPoints: [
      {
        label: 'Pincel de Formatação',
        text: 'Copia **APENAS a formatação** (fonte, cor, tamanho, negrito) de um texto para outro — **não copia palavras**! (1 clique aplica uma vez; **2 cliques** trava o pincel para aplicar em vários lugares até apertar `Esc`).',
        badge: { text: 'CAI DEMAIS', tone: 'emerald' },
      },
      {
        label: 'Mala Direta (Guia Correspondências)',
        text: 'Cruza um documento-modelo (carta/certificado no Word) com uma lista de dados (nomes/endereços no Excel) para gerar dezenas de documentos personalizados de uma vez.',
        badge: { text: 'CORRESPONDÊNCIAS', tone: 'sky' },
      },
      {
        label: 'Seleção com o Mouse no Word',
        text: '**1 clique** = posiciona cursor. **2 cliques** = seleciona a **palavra**. **3 cliques** = seleciona o **parágrafo inteiro**!',
        badge: { text: 'CLIQUES', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Emitindo 300 Declarações Personalizadas',
        scenario:
          'Você tem uma planilha do Excel com 300 servidores e precisa gerar um certificado individual para cada um no Word. Em vez de copiar e colar 300 vezes, usa **Mala Direta** na guia **Correspondências**!',
      },
      {
        title: 'Revisando Minuta de Ofício com a Chefia',
        scenario:
          'Ativando **Controlar Alterações** (guia **Revisão**), cada palavra que você apagar ou adicionar fica marcada colorida para a chefia **Aceitar ou Rejeitar** depois!',
      },
    ],
    table: {
      title: 'Mapa das Guias do Word 2016 (Onde Fica o Quê)',
      headers: ['Guia do Word 2016', 'O Que Tem Lá Dentro (Principais)', 'Pegadinha de Prova'],
      rows: [
        ['**Página Inicial**', 'Fonte, Negrito, Alinhamento, **Pincel de Formatação**, Localizar/Substituir.', 'Localizar (`Ctrl+L`) e Substituir (`Ctrl+U`) ficam aqui na direita!'],
        ['**Inserir**', 'Tabela, Imagem, **Quebra de Página (`Ctrl+Enter`)**, **Cabeçalho e Rodapé**, Nº de Página.', 'Cabeçalho e Rodapé ficam em **Inserir**, e não em Layout!'],
        ['**Layout**', '**Margens**, **Orientação (Retrato/Paisagem)**, **Colunas**, Quebra de Seção, Recuo.', 'Permite misturar página em Retrato e Paisagem usando **Quebra de Seção**!'],
        ['**Referências**', 'Sumário automático, **Notas de Rodapé**, Citações/Bibliografia.', 'Nota de Rodapé ≠ Rodapé! Nota de rodapé fica em **Referências**.'],
        ['**Revisão**', 'Ortografia e Gramática (`F7`), **Controlar Alterações**, Comentários.', 'Corretor ortográfico é **`F7`**!'],
      ],
    },
    examTrap:
      'Pegadinha clássica: **Cabeçalho e Rodapé** ficam na guia **INSERIR**, mas **Nota de Rodapé** fica na guia **REFERÊNCIAS**! E para virar apenas UMA página do documento para Paisagem sem girar o arquivo todo, usa-se **Quebra de Seção** (não basta Quebra de Página!).',
    deepDive: {
      headline: 'Diferença Entre Quebra de Página e Quebra de Seção',
      points: [
        '**Quebra de Página (`Ctrl + Enter`)**: só empurra o cursor pro início da próxima folha mantendo as mesmas margens e orientação.',
        '**Quebra de Seção**: divide o documento em blocos independentes — permite ter uma página em **Paisagem** para caber uma tabela larga, ou começar numeração de página só a partir da página 3!',
      ],
      extraExample:
        'Se o corretor do Word sublinhou de **vermelho** = erro de ortografia; **azul** = erro de gramática/concordância/contexto.',
      mnemonic: '2 cliques = palavra | 3 cliques = parágrafo | Cabeçalho = Inserir | Nota de rodapé = Referências.',
    },
  },

  '1.3.9': {
    realityParagraphs: [
      'Excel 2016 é a matéria que mais dá medo, mas só tem **3 regras que resolvem 90% das questões**: como travar células com **`$`**, a diferença brutal entre **dois-pontos (`:`)** e **ponto e vírgula (`;`)**, e saber o que as 7 funções principais devolvem.',
      'Toda fórmula no Excel começa com **`=`** (ou `+` / `-`, mas padrão é `=`). Se você esquecer o `=` na célula, o Excel acha que você escreveu um texto qualquer e não calcula porra nenhuma!',
    ],
    keyPoints: [
      {
        label: 'Dois-pontos (:) vs. Ponto e vírgula (;)',
        text: '**`A1:A4`** = **ATÉ** (pega `A1, A2, A3, A4` = 4 células!). **`A1;A4`** = **E** (pega SÓ `A1` e `A4` = 2 células!).',
        badge: { text: 'ERRO CLÁSSICO', tone: 'rose' },
      },
      {
        label: 'Referência Absoluta ($ — Tecla F4)',
        text: '**`A1`** (Relativa: muda ao arrastar). **`$A$1`** (Absoluta: trava coluna A e linha 1!). **`$A1`** (Mista: trava só coluna A). Aperte **`F4`** para alternar o `$`!',
        badge: { text: 'TRAVA COM $', tone: 'sky' },
      },
      {
        label: 'Funções Campeãs',
        text: '`SOMA`, `MÉDIA` (ignora texto/vazio!), `MÁXIMO`, `MÍNIMO`, `MAIOR(intervalo; k)`, `MENOR(intervalo; k)`, `SE(teste; verdadeiro; falso)`, `CONT.SE` e `SOMASE`.',
        badge: { text: 'AS MAIS COBRADAS', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Calculando Planilha com Referência Travada ($)',
        scenario:
          'A célula `B1` tem o valor do desconto (`10%`) e na `B4` está `=A4*$B$1`. Quando você arrastar essa fórmula para baixo até `B5`, ela vira `=A5*$B$1` (`A4` andou para `A5`, mas `$B$1` ficou travada firme!).',
      },
      {
        title: 'Função SE e SOMASE no Controle de Verbas',
        scenario:
          '`=SE(A1>=7;"Aprovado";"Reprovado")` → se `A1` for 8, escreve Aprovado! E `=SOMASE(A1:A10;"Saúde";B1:B10)` soma os valores da coluna B **apenas** nas linhas em que a coluna A tiver "Saúde".',
      },
    ],
    table: {
      title: 'Funções do Excel 2016 que Você TEM que Saber Ler',
      headers: ['Fórmula Exemplo', 'O Que Ela Faz', 'Pegadinha / Detalhe Fatal'],
      rows: [
        ['`=SOMA(A1:A3)` vs `=SOMA(A1;A3)`', 'Soma de A1 até A3 vs. Só A1 e A3', '`:` = **ATÉ** | `;` = **E**!'],
        ['`=MÉDIA(A1:A4)`', 'Soma os números e divide pela qtd de células **com número**', '[[AMBER:IGNORA VAZIAS E TEXTOS]], mas **CONTA O ZERO (0)**!'],
        ['`=CONT.NÚM(A1:A5)` vs `=CONT.VALORES(A1:A5)`', 'Conta só células com **números** vs. Conta **qualquer coisa não vazia**', 'Textos entram em `CONT.VALORES`, mas NÃO em `CONT.NÚM`!'],
        ['`=MAIOR(A1:A5; 2)`', 'Devolve o **2º maior** valor do intervalo', 'Exige o `; k` (posição)! `MÁXIMO` não usa `; k`.'],
        ['`=SE(A1>10; A1*2; A1+5)`', 'Se condição for Verdadeira faz 1º bloco; se Falsa faz o 2º', 'Sempre 3 argumentos: `(Condição ; Se_Sim ; Se_Não)`.'],
      ],
    },
    examTrap:
      'Ordem de cálculo no Excel (igual matemática): se cair `=2+3*4`, dá **14** (nunca 20!). E se aparecer **`#VALOR!`** é erro de tipo (somar número com texto); **`#DIV/0!`** é divisão por zero; **`####`** significa apenas que a coluna está estreita demais para mostrar o número!',
    deepDive: {
      headline: 'Como Arrastar Fórmula Sem Errar Linha e Coluna',
      points: [
        'Arrastou para **BAIXO** (ou pra cima): só o **NÚMERO da linha** que NÃO tem `$` na frente muda!',
        'Arrastou para a **DIREITA** (ou esquerda): só a **LETRA da coluna** que NÃO tem `$` na frente muda!',
        'Ex.: Se copiar `=A$1 + $B2` da célula `C1` para `D3` (+1 coluna pra direita, +2 linhas pra baixo): `A$1` vira `B$1` (A mudou pra B, `$1` travou); `$B2` vira `$B4` (`$B` travou, 2 somou +2 pra 4)!',
      ],
      extraExample:
        'Fórmula `=MOD(10;3)` devolve o **resto** da divisão de 10 por 3, que é **1**! E `=ARRED(3,456; 1)` devolve **3,5**.',
      mnemonic: '`:` = ATÉ | `;` = E | `$` = Cadeado (F4) | `####` = Coluna apertada (não é erro!).',
    },
  },

  '1.3.10': {
    realityParagraphs: [
      'Navegadores (Chrome, Edge, Firefox) são a porta de entrada para os sistemas web da Prefeitura. A banca cobra basicamente **segurança na URL** (`HTTP` vs. `HTTPS`), o que são **Cookies e Cache**, e o que a **Guia Anônima realmente esconde (e o que ela NÃO esconde!)**.',
      'Desfazendo o mito principal: **Navegação Anônima NÃO te deixa invisível na internet!** Ela só impede o navegador de gravar histórico, cookies e senhas **no seu computador**. O chefe da TI da Prefeitura, seu provedor de internet e o site acessado continuam sabendo exatamente o que você abriu!',
    ],
    keyPoints: [
      {
        label: 'HTTP vs. HTTPS (Cadeado)',
        text: '**HTTPS** usa criptografia **TLS/SSL** (porta 443) entre seu navegador e o servidor — impede interceptação no caminho. **HTTP** manda tudo em texto aberto!',
        badge: { text: 'CRIPTOGRAFIA', tone: 'emerald' },
      },
      {
        label: 'Cookies vs. Cache',
        text: '**Cookies** = pequenos arquivos de texto que guardam preferências e sua sessão logada. **Cache** = cópias locais de imagens/páginas para o site abrir mais rápido na próxima visita.',
        badge: { text: 'NÃO CONFUNDA', tone: 'amber' },
      },
      {
        label: 'Modo Anônimo (InPrivate)',
        text: 'Ao fechar a janela anônima, apaga **histórico local, cookies e formulários**. **MANTÉM** arquivos que você **baixou (Downloads)** e **Favoritos** salvos!',
        badge: { text: 'PEGADINHA CLÁSSICA', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Formulário da Prefeitura Mostrando Versão Antiga',
        scenario:
          'A TI atualizou o portal do cidadão, mas no seu PC continua abrindo o formulário antigo todo bugado. Você limpa o **Cache** do navegador (ou aperta `Ctrl + F5`) para forçar o navegador a baixar a versão nova do servidor!',
      },
      {
        title: 'Usando Computador Compartilhado',
        scenario:
          'Você precisa checar seu e-mail num PC compartilhado de atendimento. Abrindo em **Janela Anônima** (`Ctrl + Shift + N`), quando fechar a janela o próximo colega não entra na sua conta porque os **cookies de sessão** são destruídos!',
      },
    ],
    table: {
      title: 'Navegadores: Cookies vs. Cache vs. Anônimo',
      headers: ['Recurso', 'O Que Faz', 'O Que Acontece ao Limpar / Fechar'],
      rows: [
        ['**Cookies**', 'Guarda login, carrinho de compras, preferências do site.', 'Desloga você dos sites ao apagar.'],
        ['**Cache**', 'Guarda imagens, scripts e HTML para acelerar carregamento.', 'O site continua logado (se mantiver cookies), mas recarrega tudo do zero.'],
        ['**Janela Anônima**', 'Isola a sessão para não gravar histórico local nem cookies após fechar.', '[[ROSE:NÃO ESCONDE]] IP do provedor/rede da empresa; **salva Downloads e Favoritos**!'],
      ],
    },
    examTrap:
      'Pegadinha eterna: "Na navegação anônima, os arquivos baixados (downloads) são excluídos automaticamente quando fechamos a janela e o provedor de internet não consegue rastrear o acesso." [[ROSE:TUDO MENTIRA!]] Downloads e Favoritos FICAM salvos, e a rede/provedor enxerga tudo!',
    deepDive: {
      headline: 'Anatomia de uma URL & Extensões',
      points: [
        'Em `https://www.curitiba.pr.gov.br:443/servicos?busca=iptu`: **`https`** = protocolo; **`curitiba.pr.gov.br`** = domínio; **`.gov.br`** = órgão governamental brasileiro; **`/servicos`** = caminho; **`?busca=iptu`** = parâmetro.',
        '**Pop-up** é uma janela que abre sozinha (bloqueadores evitam propagandas e golpes); **Extensões/Plugins** adicionam funções ao navegador.',
      ],
      extraExample:
        'Para ir direto à barra de endereços (URL) sem usar o mouse: **`Ctrl + L`** ou **`Alt + D`** ou **`F6`**.',
      mnemonic: 'Cookies = Login/Preferências | Cache = Velocidade/Imagens | Anônimo = Só limpa o PC local (Downloads ficam!).',
    },
  },

  '1.3.11': {
    realityParagraphs: [
      'Armazenamento em nuvem (Cloud Storage) como o **Google Drive** (ou OneDrive) resolve a vida de quem precisa trabalhar num documento no PC do trabalho e revisar no celular depois. Os arquivos moram em servidores remotos acessados pela internet (conceito de **SaaS — Software como Serviço**).',
      'O que a banca cobra sobre Google Drive é quase sempre **permissões de compartilhamento** (Leitor, Comentador, Editor), **espaço da lixeira** (fica lá por 30 dias ocupando espaço até esvaziar!) e o que acontece quando alguém **exclui um arquivo compartilhado**.',
    ],
    keyPoints: [
      {
        label: 'Os 3 Níveis de Permissão',
        text: '**Leitor** (só vê e baixa, se permitido). **Comentador** (vê + deixa comentários/sugestões, mas não altera o texto direto). **Editor** (altera, organiza e pode até compartilhar).',
        badge: { text: 'PERMISSÕES', tone: 'emerald' },
      },
      {
        label: 'Armazenamento Externo vs. Nuvem',
        text: 'Externo físico (**Pendrive, HD externo, Cartão SD**) depende de levar o aparelho no bolso e pode queimar/perder. **Nuvem** sincroniza automático e permite edição simultânea.',
        badge: { text: 'COLABORAÇÃO', tone: 'sky' },
      },
      {
        label: 'Dono vs. Convidado na Exclusão',
        text: 'Se você é **Editor** mas **NÃO é o proprietário** do arquivo e clica em "Remover", o arquivo só some da SUA vista — para o proprietário e os outros ele continua intacto!',
        badge: { text: 'PEGADINHA', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Planilha de Escala Compartilhada com 20 Setores',
        scenario:
          'Você quer que todos os chefes vejam a escala no Google Drive, mas tem medo de alguém apagar uma fórmula sem querer. Compartilhe o link com permissão de **Leitor** (ou **Comentador** se quiser que peçam ajustes via balão)!',
      },
      {
        title: 'Google Drive Lotado Mesmo Apagando Arquivos',
        scenario:
          'Você jogou 5 GB de vídeos pra Lixeira do Drive e o espaço não liberou! No Google Drive, arquivos na **Lixeira continuam contando na cota** por **30 dias** até serem excluídos definitivamente (ou você clicar em "Esvaziar lixeira").',
      },
    ],
    table: {
      title: 'Comparativo de Permissões no Google Drive',
      headers: ['Papel', 'Pode Ver e Baixar?', 'Pode Comentar / Sugerir?', 'Pode Editar / Apagar Conteúdo?'],
      rows: [
        ['**Leitor**', '[[EMERALD:Sim]]', '[[ROSE:Não]]', '[[ROSE:Não]]'],
        ['**Comentador**', '[[EMERALD:Sim]]', '[[EMERALD:Sim]]', '[[ROSE:Não]] (só sugere!)'],
        ['**Editor**', '[[EMERALD:Sim]]', '[[EMERALD:Sim]]', '[[EMERALD:Sim]] (mas não apaga o arquivo do dono!)'],
        ['**Proprietário**', '[[EMERALD:Sim]]', '[[EMERALD:Sim]]', '[[EMERALD:Sim]] + **único que exclui definitivo!**'],
      ],
    },
    examTrap:
      'Pegadinha clássica: "Se um usuário com permissão de **Editor** excluir uma pasta compartilhada, ela é apagada para o proprietário também." [[ROSE:ERRADO!]] Só o **Proprietário** apaga definitivamente um arquivo do Drive (ou se o arquivo estiver num Drive Compartilhado corporativo com permissão de Administrador)!',
    deepDive: {
      headline: 'Modelos de Nuvem (IaaS, PaaS, SaaS) Caso Caia',
      points: [
        '**SaaS** (*Software as a Service*): você já usa o programa pronto na nuvem (ex.: **Google Drive, Gmail, Google Docs**).',
        '**PaaS** (*Platform as a Service*): ambiente para programadores subirem aplicativos.',
        '**IaaS** (*Infrastructure as a Service*): aluguel de servidor cru, disco e rede virtual.',
        'Arquivo na lixeira do Google Drive é apagado automaticamente após **30 dias**.',
      ],
      extraExample:
        'Para trabalhar no Google Docs **no ônibus sem internet**, basta ativar a opção "Disponível off-line" antes — ele salva no cache e sincroniza assim que voltar o 4G.',
      mnemonic: 'Leitor vê | Comentador opina | Editor altera | Só o Dono destrói de vez!',
    },
  },

  '1.3.12': {
    realityParagraphs: [
      'Em e-mail (Outlook, Gmail e o Webmail **Zimbra**, que várias prefeituras e órgãos públicos usam!), a banca foca em duas paradas certas: **Para / CC / CCO** e os **Protocolos de Envio e Recebimento (`SMTP`, `POP3`, `IMAP`)**.',
      'A regra de privacidade no envio é sagrada: quem você coloca em **CCO (Cópia Oculta)** fica **invisível** para todo mundo que está em "Para" e "CC" — e também para os outros que estão no próprio CCO! Já quem está em **CC** tem o e-mail escancarado para todo mundo ver.',
    ],
    keyPoints: [
      {
        label: 'Para vs. CC vs. CCO',
        text: '**Para** = destinatário principal. **CC** (Com Cópia) = todo mundo vê o endereço de todo mundo. **CCO** (Cópia Oculta) = **ninguém vê quem está no CCO**!',
        badge: { text: 'PRIVACIDADE', tone: 'emerald' },
      },
      {
        label: 'Responder vs. Responder a Todos vs. Encaminhar',
        text: '**Responder**: vai só pro remetente. **Responder a Todos**: vai pro remetente + todos em Para/CC (**NÃO vai para quem estava em CCO!**). **Encaminhar**: manda pra novo destinatário **levando os anexos juntos**.',
        badge: { text: 'CLÁSSICA', tone: 'amber' },
      },
      {
        label: 'Protocolos (SMTP, IMAP, POP3)',
        text: '**SMTP** (**S**ua **M**ensagem **T**á **P**artindo = **ENVIA**). **IMAP** (lê e **mantém sincronizado** no servidor para ver no celular e PC). **POP3** (**P**uxa tudo pro PC e geralmente apaga do servidor).',
        badge: { text: 'DECORAR!', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Comunicado Coletivo Sem Vazar E-mails (LGPD)',
        scenario:
          'Você precisa enviar um aviso de convocação para 80 cidadãos pelo **Zimbra** ou **Outlook**. Coloque o seu próprio e-mail em "Para" e os 80 cidadãos em **CCO** — assim ninguém vê o e-mail pessoal dos outros (protege dados pela LGPD)!',
      },
      {
        title: 'Por Que Usar IMAP em Vez de POP3 Hoje?',
        scenario:
          'Se você configura seu e-mail no PC com **POP3** (padrão clássico), ele baixa as mensagens e tira do servidor: quando você abrir no celular no ônibus, não tem nada lá! Com **IMAP**, tudo o que você lê ou apaga sincroniza nos dois aparelhos.',
      },
    ],
    table: {
      title: 'Protocolos & Clientes de E-mail (SMTP vs. IMAP vs. POP3)',
      headers: ['Sigla / Ferramenta', 'Função / O Que É', 'Macete para Nunca Trocar'],
      rows: [
        ['**SMTP**', 'Protocolo de **ENVIO** (saída) de e-mails (e entre servidores).', '**S**ua **M**ensagem **T**á **P**artindo!'],
        ['**IMAP**', 'Recebimento **sincronizado** (mantém pastas e lidas no servidor).', '**I**guais em vários aparelhos (PC + celular)!'],
        ['**POP3**', 'Recebimento por **download local** (baixa pro dispositivo).', '**P**uxa pro PC e limpa o servidor!'],
        ['**Outlook vs. Zimbra/Gmail**', 'Outlook Desktop é **cliente instalado**; Gmail e Zimbra são **Webmails** (rodam no navegador).', 'Webmail não precisa instalar programa, acessa via HTTP/HTTPS.'],
      ],
    },
    examTrap:
      'Pegadinha clássica: se você recebeu um e-mail onde `Ana` estava em **Para**, `Beto` em **CC** e `Carlos` em **CCO**, e você clicar em **Responder a Todos**, **Carlos (que estava no CCO) NÃO recebe a sua resposta** (porque ninguém nem sabia que ele recebeu o e-mail original)!',
    deepDive: {
      headline: 'Diferença Entre Responder e Encaminhar com Anexos',
      points: [
        '**Responder / Responder a Todos**: **NÃO** reenvia os anexos originais de volta (para não gastar banda à toa mandando o mesmo PDF pra quem já tem).',
        '**Encaminhar (Forward)**: **INCLUI** os anexos originais por padrão para que o novo destinatário receba os arquivos.',
      ],
      extraExample:
        'Se um endereço de e-mail tem `joao@curitiba.pr.gov.br`, o que vem antes do `@` é o usuário e depois é o domínio. Nunca pode ter espaços nem dois `@`!',
      mnemonic: 'SMTP = Envia | IMAP = Sincroniza | POP3 = Puxa | Responder a Todos ignora o CCO!',
    },
  },

  '1.3.13': {
    realityParagraphs: [
      'Pesquisar no Google todo mundo pesquisa, mas 90% das pessoas só digita a palavra e torce pelo melhor. Em prova, a banca cobra os **operadores booleanos e filtros avançados** que transformam a busca num bisturi cirúrgico.',
      'Os 4 operadores que você precisa ter na ponta da língua: **aspas (`"..."`)** para frase exata, **hífen (`-`)** colado na palavra para excluir lixo, **`site:`** para travar dentro de um site oficial e **`filetype:`** para achar só PDFs ou planilhas.',
    ],
    keyPoints: [
      {
        label: 'Aspas ("...")',
        text: 'Obriga o buscador a retornar a **expressão exata**, com as palavras nessa ordem exata (`"agente administrativo curitiba"`).',
        badge: { text: 'FRASE EXATA', tone: 'sky' },
      },
      {
        label: 'Sinal de Menos (-)',
        text: 'Exclui resultados com aquela palavra. **TEM QUE SER COLADO na palavra**, sem espaço (`concurso curitiba -guarda`)!',
        badge: { text: 'SEM ESPAÇO', tone: 'rose' },
      },
      {
        label: 'site: e filetype:',
        text: '**`site:curitiba.pr.gov.br`** busca só dentro do domínio oficial. **`filetype:pdf`** (ou `ext:pdf`) traz apenas arquivos PDF.',
        badge: { text: 'FILTRO DE OURO', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Achando a Lei Atualizada Direto no Site Oficial',
        scenario:
          'Em vez de cair em blog desatualizado, você digita no Google: `site:curitiba.pr.gov.br "lei 1656" filetype:pdf`. Só volta PDF oficial hospedado na Prefeitura!',
      },
      {
        title: 'Eliminando Notícias Velhas com o Menos (-)',
        scenario:
          'Quer pesquisar concurso de Curitiba sem aparecer vagas de professor? Digite: `concurso curitiba -professor -pedagogo` (sempre sem espaço depois do `-`!).',
      },
    ],
    table: {
      title: 'Operadores de Busca na Web',
      headers: ['Operador', 'O Que Faz', 'Exemplo Correto'],
      rows: [
        ['**"expressão"**', 'Busca exatamente aquelas palavras na ordem.', '`"lei orgânica de curitiba"`'],
        ['**-palavra**', 'Exclui páginas que contenham o termo.', '`edital curitiba -2022`'],
        ['**site:dominio**', 'Restringe a busca a um site ou extensão (`.gov.br`).', '`improbidade site:planalto.gov.br`'],
        ['**filetype:ext**', 'Filtra pela extensão do arquivo (pdf, xlsx, docx).', '`estatuto servidor filetype:pdf`'],
        ['**OR** (em MAIÚSCULAS!)', 'Retorna páginas com um termo OU outro.', '`curitiba (decreto OR portaria)`'],
      ],
    },
    examTrap:
      'Pegadinha de detalhe: no operador **`OR`**, ele **TEM que ser escrito em letras MAIÚSCULAS** (`decreto OR portaria`), senão o Google acha que "or" é uma palavra comum em inglês! E em **`site:`** ou **`-`**, **NUNCA coloque espaço depois dos dois-pontos ou do hífen**!',
    deepDive: {
      headline: 'Mais 2 Operadores Menos Comuns que Podem Pintar',
      points: [
        '**`intitle:palavra`**: só retorna páginas que tenham aquela palavra no **título** da página.',
        '**`inurl:palavra`**: só retorna páginas cuja **URL** contenha aquela palavra.',
        '**`..` (dois pontos entre números)**: busca intervalo numérico (`decreto 2023..2026`).',
      ],
      extraExample:
        'Para buscar apenas arquivos de Excel sobre orçamento no portal do governo: `orcamento site:gov.br filetype:xlsx`.',
      mnemonic: '`""` = Exato | `-` = Sem isso | `site:` = Só ali | `filetype:` = Só esse formato | `OR` = Maiúsculo!',
    },
  },

  '1.3.14': {
    realityParagraphs: [
      'Sim, **IA generativa (ChatGPT, Copilot, Gemini)** agora cai em concurso público! E não cai perguntando código de programação pesado — cai perguntando **o que são essas ferramentas (LLMs)**, o conceito de **Prompt**, o fenômeno da **Alucinação** e os **riscos de segurança e LGPD no serviço público**.',
      'Regra de ouro para a prova e para a vida de servidor: **IAs generativas prevêem palavras estatisticamente, elas NÃO consultam a verdade absoluta**. Por isso elas inventam artigos de lei, prazos e números de decretos com a maior cara de pau do mundo (**alucinação**). E se você colar CPF/processo sigiloso num chat público gratuito, você pode estar cometendo **vazamento de dados pela LGPD**!',
    ],
    keyPoints: [
      {
        label: 'LLMs (Modelos de Linguagem)',
        text: '**ChatGPT** (OpenAI), **Copilot** (Microsoft, integrado ao Windows/Edge/Office) e **Gemini** (Google) são IAs generativas baseadas em texto/multimodalidade guiadas por **prompts** (comandos).',
        badge: { text: 'FERRAMENTAS', tone: 'sky' },
      },
      {
        label: 'Alucinação de IA',
        text: 'Quando a IA **inventa um dado, artigo de lei ou citação falsa** mas escreve com tanta confiança que parece verdade. **Revisão humana é obrigatória!**',
        badge: { text: 'ALUCINAÇÃO', tone: 'amber' },
      },
      {
        label: 'Sigilo e LGPD (Risco Crítico!)',
        text: '**JAMAIS** cole dados pessoais de cidadãos (CPF, saúde, endereço) ou processos sigilosos em IAs públicas abertas — o texto pode ser usado para treinar modelos ou vazar!',
        badge: { text: 'NUNCA FAÇA', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Uso Inteligente vs. Uso Burro na Repartição',
        scenario:
          '**Certo**: pedir ao Gemini/Copilot para melhorar a clareza de um texto genérico sobre atendimento ao público (sem nenhum nome/CPF) e revisar tudo antes de publicar. **Errado (proibido)**: colar a ficha médica ou CPF de um contribuinte para a IA resumir!',
      },
      {
        title: 'Pegando a IA Mentindo sobre Lei Municipal',
        scenario:
          'Você pergunta ao ChatGPT o prazo de um recurso na Lei Municipal 16.466/2024 de Curitiba e ele inventa um número de artigo que nem existe. Isso se chama **alucinação** — sempre confira no texto oficial da lei!',
      },
    ],
    table: {
      title: 'IA Generativa no Serviço Público: Pode vs. Não Pode',
      headers: ['Situação', 'Status', 'Justificativa de Prova'],
      rows: [
        ['Resumir norma pública já publicada ou melhorar clareza de texto genérico', '[[EMERALD:PODE (com revisão)]]', 'Aumenta eficiência sem expor dados privados, mas exige validação humana.'],
        ['Copiar e colar resposta jurídica da IA no processo sem checar artigos', '[[ROSE:PROIBIDO / ERRO GRAVE]]', 'Risco alto de **alucinação** (inventar jurisprudência/lei inexistente).'],
        ['Inserir CPF, processos sigilosos ou dados de saúde em IA pública gratuita', '[[ROSE:VIOLAÇÃO DA LGPD]]', 'Risco de exposição e uso de dados pessoais por terceiros sem base legal.'],
        ['Usar **Copilot** corporativo com proteção de dados da instituição', '[[SKY:PERMITIDO COM REGRAS]]', 'Ambientes corporativos licenciados mantêm isolamento de dados (zero treino externo).'],
      ],
    },
    examTrap:
      'Pegadinha clássica: afirmar que "ferramentas como ChatGPT, Copilot e Gemini garantem 100% de precisão factual por consultarem bancos jurídicos oficiais em tempo real". [[ROSE:MENTIRA!]] Elas sofrem de **alucinações**, **vieses** dos dados de treino e exigem **supervisão humana**!',
    deepDive: {
      headline: 'Conceitos Quentes: Prompt, Deepfake e Viés Algorítmico',
      points: [
        '**Prompt**: é a instrução/comando que você dá para a IA (quanto mais claro o contexto e formato, melhor a resposta — *Engenharia de Prompt*).',
        '**Viés (Bias)**: se a IA foi treinada com textos humanos preconceituosos ou desatualizados, ela pode reproduzir discriminação.',
        '**Responsabilidade**: a assinatura do ato administrativo é do **agente público**, nunca da IA — não dá pra culpar o ChatGPT se o despacho sair ilegal!',
      ],
      extraExample:
        'Prompt ruim: "Faz um ofício." Prompt bom: "Crie um modelo genérico de ofício formal solicitando manutenção predial, usando linguagem impessoal da Redação Oficial, com espaço em branco para dados."',
      mnemonic: 'LLM = Previsão estatística | Alucinação = Inventa bonito | LGPD = Nunca cole CPF/dados reais!',
    },
  },
};
