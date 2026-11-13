import type { TopicStudyContent } from '../summaryTypes';

export const DISC_1_1_PORTUGUES: Record<string, TopicStudyContent> = {
  '1.1.1': {
    realityParagraphs: [
      'Vamos ser diretos: **quase metade da prova de Português é interpretação de texto**, e a maioria da galera erra porque inventa moda. A regra número um é simples: **você não está ali para dar sua opinião**, você está ali para descobrir o que o autor disse (compreensão) ou o que dá para concluir com 100% de certeza usando as pistas dele (interpretação).',
      'Cada parágrafo tem uma **ideia central (tópico frasal)**, geralmente logo na primeira ou segunda frase, e o resto do parágrafo é só exemplo, dado ou explicação para defender essa ideia. Se você achar a ideia central de cada parágrafo, você já matou o texto inteiro sem ficar relendo cinco vezes.',
    ],
    keyPoints: [
      {
        label: 'Compreensão (No Texto)',
        text: 'Está **escrito com todas as letras** ali na frente. Enunciados clássicos: "Segundo o texto", "O autor afirma que".',
        badge: { text: 'LITERAL', tone: 'sky' },
      },
      {
        label: 'Interpretação (Inferência)',
        text: 'Não está escancarado, mas é **conclusão lógica obrigatória** a partir das pistas do texto. Enunciados: "Infere-se que", "Depreende-se que".',
        badge: { text: 'DEDUÇÃO SEGURA', tone: 'emerald' },
      },
      {
        label: 'Ponto de Vista do Autor',
        text: 'Olhe os **adjetivos e advérbios** ("infelizmente", "absurdo", "avanço") — é aí que o autor mostra se é a favor, contra ou neutro.',
        badge: { text: 'ATENÇÃO', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Despacho de Processo na Prefeitura',
        scenario:
          'Um parecer diz: "O contribuinte protocolou o pedido fora do prazo legal, razão pela qual o benefício não pode ser concedido." Compreensão: o pedido foi protocolado atrasado. Inferência segura: o pedido será indeferido. Extrapolação proibida: achar que o contribuinte agiu de má-fé.',
      },
      {
        title: 'Notícia sobre Transporte em Curitiba',
        scenario:
          'Se o texto diz que "a nova linha reduziu em 18% a lotação nos horários de pico", você NÃO pode marcar uma alternativa dizendo que "o transporte público foi totalmente resolvido". Reduzir lotação não é zerar o problema!',
      },
    ],
    table: {
      title: 'Os 3 Erros Clássicos que Fazem Você Cair na Prova',
      headers: ['Armadilha da Banca', 'O Que Significa na Prática', 'Como Identificar na Hora'],
      rows: [
        [
          '**Extrapolação** [[ROSE:PROIBIDO]]',
          'A alternativa viaja na maionese e afirma algo que vai **além** do que o texto disse (mesmo que seja verdade na vida real!).',
          'Palavras radicais como **"sempre", "nunca", "todos", "exclusivamente", "totalmente"**.',
        ],
        [
          '**Redução** [[AMBER:PEGADINHA]]',
          'Pega apenas **uma parte** do problema e finge que é o todo, ou corta uma condição importante.',
          'O texto diz "A e B causam X"; a opção diz "apenas A causa X".',
        ],
        [
          '**Contradição** [[ROSE:ERRO FATAL]]',
          'Diz exatamente o **oposto** do texto usando palavras parecidas para confundir quem leu correndo.',
          'Troca **"aumentou"** por **"diminuiu"**, ou enfia um **"não"** escondido.',
        ],
      ],
    },
    examTrap:
      'Não cai nessa merda de pegadinha: a banca adora colocar uma alternativa que é 100% VERDADEIRA no mundo real (tipo "a corrupção atrapalha o país"), mas que NÃO FOI DITA NO TEXTO. Se não tem lastro no texto, está ERRADA!',
    deepDive: {
      headline: 'Raio-X de Prova: Como Ler Sem Travar no Meio do Texto',
      points: [
        '**Leia o comando da questão antes do texto** quando o enunciado citar um parágrafo ou linha específica ("No 3º parágrafo..."). Você já vai caçando a resposta.',
        '**Circule conectivos de oposição** ("mas", "porém", "contudo", "entretanto", "embora"): 80% das vezes, a tese real do autor vem DEPOIS do "mas".',
        '**Inferência válida ≠ chute**: para ser inferência correta, você precisa conseguir apontar com o dedo qual frase do texto prova aquela dedução.',
      ],
      extraExample:
        'Texto: "Embora a digitalização dos protocolos em Curitiba tenha acelerado a análise, idosos sem acesso à internet ainda enfrentam barreiras." -> A tese principal está depois da vírgula (a exclusão digital), não só nos elogios à tecnologia.',
      mnemonic: 'Regra C.E.R.T.A.: Cuidado com Extrapolação, Redução e Troca de Argumento.',
    },
  },

  '1.1.2': {
    realityParagraphs: [
      'Esqueça aquela frescura de "fulano fala errado". Para a linguística moderna (e para TODA banca de concurso), **não existe língua errada — existe linguagem adequada ou inadequada ao contexto**. Você não fala no churrasco como escreve um ofício para o Secretário Municipal de Curitiba, e também não manda um "outrossim, venho por meio desta" num áudio de WhatsApp.',
      'Na comunicação, tem **6 elementos básicos** que ligam quem fala a quem ouve. Se qualquer um desses 6 falhar (ex.: ruído na linha, código que o cidadão não entende), a comunicação vai pro espaço.',
    ],
    keyPoints: [
      {
        label: 'Diatópica (Lugar / Região)',
        text: 'Sotaques e gírias regionais. Ex.: **"piá"** e **"vina"** em Curitiba vs. **"moleque"** e **"salsicha"** em SP.',
        badge: { text: 'GEOGRAFIA', tone: 'sky' },
      },
      {
        label: 'Diafásica (Situação / Grau de Formalidade)',
        text: 'Muda conforme o **ambiente**: conversa informal de corredor vs. atendimento no balcão vs. ofício oficial.',
        badge: { text: 'CAI MUITO', tone: 'emerald' },
      },
      {
        label: 'Diastrática (Grupo Social / Profissão)',
        text: 'Jargão técnico de médicos, advogados (**juridiquês**), skatistas, TI ("deploy", "bug").',
        badge: { text: 'GRUPO', tone: 'amber' },
      },
      {
        label: 'Diacrônica (Tempo / Época)',
        text: 'Palavras que mudaram ou caíram em desuso com o tempo: **"Vossa Mercê" → "vosmecê" → "você" → "vc"**; "pharmacia" → "farmácia".',
        badge: { text: 'HISTÓRIA', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Atendimento na Rua da Cidadania',
        scenario:
          'Um idoso chega perguntando sobre o IPTU. Se você soltar "O senhor precisa sanar a pendência ex officio no sistema tributário", você usou variação diastrática (jargão) inadequada ao receptor. Adequado: linguagem clara, simples e respeitosa.',
      },
      {
        title: 'Ofício Interno entre Secretarias',
        scenario:
          'Mesmo sendo super amigo do outro agente administrativo, no documento oficial protocolado você TEM que usar a norma-padrão (variação diafásica formal), sem gírias nem abreviações de internet.',
      },
    ],
    table: {
      title: 'Os 6 Elementos da Comunicação vs. Funções da Linguagem',
      headers: ['Elemento', 'O Que É na Vida Real', 'Função da Linguagem Ligada a Ele'],
      rows: [
        ['**Emissor (Remetente)**', 'Quem manda a mensagem (você no guichê).', 'Emotiva / Expressiva (foca no "eu", sentimentos).'],
        ['**Receptor (Destinatário)**', 'Quem recebe (cidadão ou chefia).', 'Conativa / Apelativa (ordens, pedidos, "Faça isso").'],
        ['**Referente (Contexto)**', 'O assunto tratado na mensagem.', 'Referencial / Denotativa (informativa — **padrão em editais**).'],
        ['**Canal**', 'O meio físico/digital (voz, papel, e-mail).', 'Fática (testar se o canal funciona: "Alô?", "Oi, tudo bem?").'],
        ['**Código**', 'A língua portuguesa, Libras, sinais.', 'Metalinguística (código explicando o código — **dicionário**).'],
        ['**Mensagem**', 'O texto/conteúdo montado.', 'Poética (foca na estética/forma das palavras).'],
      ],
    },
    examTrap:
      'Pegadinha clássica: a banca diz que "a variação coloquial é um erro gramatical que deve ser combatido". MENTIRA! Variação coloquial NÃO é erro; ela só é INADEQUADA em situações que exigem norma-padrão (como redação oficial ou prova).',
    deepDive: {
      headline: 'Como Não Confundir os Nomes Gregos das Variações',
      points: [
        '**DiaTÓPICA** → lembra **TOPOnímia / TOPOgrafia** → **LUGAR / REGIÃO** (Curitiba vs. Recife).',
        '**DiaCRÔNICA** → lembra **CRONômetro / CRONologia** → **TEMPO / ÉPOCA** (antigo vs. atual).',
        '**DiaSTRÁTICA** → lembra **eSTRATO social** → **GRUPO / CLASSE / PROFISSÃO** (gíria de jovem, jargão jurídico).',
        '**DiaFÁSICA** → lembra **FASE / SITUAÇÃO** → **FORMAL vs. INFORMAL** (adaptação ao momento).',
      ],
      extraExample:
        'Se um texto usa "a gente vai fazer" num diálogo entre amigos, a banca costuma perguntar qual variação aparece ali: é variação diafásica informal (adequada à fala cotidiana).',
      mnemonic: 'TÓPICO = Lugar | CRÔNICO = Tempo | STRÁTICO = Grupo | FÁSICO = Formalidade.',
    },
  },

  '1.1.3': {
    realityParagraphs: [
      'Aqui a banca ama confundir quem não sabe a diferença entre **Tipologia Textual** (o esqueleto do texto) e **Gênero Textual** (a roupa que ele veste no dia a dia). Pensa comigo: **Tipos são só 5** (fixos na gramática), enquanto **Gêneros são infinitos** (receita de bolo, meme, ofício, boleto, edital, WhatsApp).',
      'Um mesmo texto quase sempre mistura tipos diferentes! Um manual de atendimento na Prefeitura pode ter um pedaço explicando o sistema (**expositivo**) e outro mandando você apertar tal botão (**injuntivo**). Na prova, você marca o tipo **predominante**.',
    ],
    keyPoints: [
      {
        label: 'Narrativo',
        text: 'Tem **história andando no tempo**, personagem, lugar, começo-meio-fim. Verbos no passado.',
        badge: { text: 'ACONTECIMENTO', tone: 'sky' },
      },
      {
        label: 'Descritivo',
        text: 'É uma **fotografia em palavras**: adjetivos, características de um objeto, pessoa ou lugar, sem ação avançando.',
        badge: { text: 'RETRATO', tone: 'amber' },
      },
      {
        label: 'Dissertativo (Expositivo vs. Argumentativo)',
        text: '**Expositivo** apenas informa/explica sem defender lado (notícia, resumo). **Argumentativo** defende uma **tese** com argumentos para convencer.',
        badge: { text: 'DESPENCA', tone: 'emerald' },
      },
      {
        label: 'Injuntivo (Instrucional)',
        text: '**Manda, orienta ou ensina a fazer algo**. Verbos no imperativo ("Protocolize", "Não clique", "Preencha").',
        badge: { text: 'EDITAL / MANUAL', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Edital do Concurso de Curitiba',
        scenario:
          'O edital do concurso diz: "O candidato deverá comparecer com 60 minutos de antecedência." Isso é um Gênero Textual (Edital) com predominância do Tipo **Injuntivo** (impõe regras e procedimentos).',
      },
      {
        title: 'Ata de Reunião vs. Parecer Técnico',
        scenario:
          'A **Ata** relata o que aconteceu na reunião ontem em ordem cronológica (forte carga **narrativa/descritiva**). Já o **Parecer** analisa a lei e defende por que um pedido deve ser aprovado ou negado (**dissertativo-argumentativo**).',
      },
    ],
    table: {
      title: 'Tipologia (Estrutura) vs. Gênero (Uso Social)',
      headers: ['Tipo Textual', 'Marca Registrada (Verbos/Sinais)', 'Exemplos de Gêneros do Dia a Dia'],
      rows: [
        ['**Narrativo**', 'Verbos de ação no pretérito ("fez", "chegou"), tempo e espaço.', 'Crônica, conto, notícia de fato ocorrido, boletim de ocorrência.'],
        ['**Descritivo**', 'Verbos de estado ("é", "parece"), muitos **adjetivos**.', 'Cardápio, laudo de vistoria de imóvel, perfil de produto.'],
        ['**Dissertativo-Expositivo**', '3ª pessoa, linguagem neutra, apresenta fatos sem opinar.', 'Reportagem informativa, verbete de enciclopédia, relatório de dados.'],
        ['**Dissertativo-Argumentativo**', 'Defende opinião (**tese**) + conectivos de causa/conclusão.', 'Editorial de jornal, artigo de opinião, redação do ENEM, parecer jurídico.'],
        ['**Injuntivo**', 'Verbos no **imperativo** ("faça", "evite", "apresente") ou "deve".', 'Receita de bolo, bula de remédio, manual do usuário, edital, lei.'],
      ],
    },
    examTrap:
      'Pegadinha clássica: chamar "carta", "e-mail" ou "ofício" de TIPOLOGIA textual. Carta, e-mail e ofício são **GÊNEROS TEXTUAIS**! As tipologias são apenas narração, descrição, dissertação (expositiva/argumentativa) e injunção.',
    deepDive: {
      headline: 'Como Bater o Olho e Acertar em 10 Segundos',
      points: [
        'Olhou o texto e viu **"Faça", "Clique", "É proibido", "O servidor deve"**? Pode cravar **Injuntivo**.',
        'Olhou o texto e tem **tese + defesa de opinião** querendo mudar sua cabeça? **Dissertativo-Argumentativo**.',
        'Só deu informações técnicas ou estatísticas de forma fria, sem puxar sardinha para nenhum lado? **Dissertativo-Expositivo**.',
      ],
      extraExample:
        'Bula de remédio: tem parte descritiva ("comprimido branco de 500mg") e parte injuntiva ("tome 1 a cada 8 horas"). Em prova, a função principal da bula/manual é injuntiva.',
      mnemonic: '5 Tipos = Na-De-Di-Ex-In (Narrar, Descrever, Dissertar-Arg, Expor, Injungir).',
    },
  },

  '1.1.4': {
    realityParagraphs: [
      'Coesão e coerência não são a mesma porcaria, e a banca cobra isso o tempo todo. **Coerência** é o texto fazer **sentido lógico** (não se contradizer — tipo dizer "o servidor sempre chega atrasado porque é pontualíssimo"). **Coesão** são os **parafusos e dobradiças** (pronomes, conjunções, sinônimos) que amarram uma frase na outra para não virar um amontoado de frases soltas.',
      'Dá para um texto ser coeso (cheio de conectivo bonitinho) e totalmente incoerente (sem pé nem cabeça). E na hora de reescrever frases, **trocar uma conjunção sem ajustar o verbo** é a armadilha número 1 das bancas.',
    ],
    keyPoints: [
      {
        label: 'Anáfora vs. Catáfora (Referência)',
        text: '**Anáfora** olha para **TRÁS** (retoma o que já foi dito: "O processo sumiu. **Ele** estava na mesa"). **Catáfora** aponta para a **FRENTE** ("Só digo **isto**: estude!").',
        badge: { text: 'CAI DEMAIS', tone: 'rose' },
      },
      {
        label: 'Este vs. Esse (No Texto)',
        text: '**ESTE** = o que vai ser dito agora (frente) OU o último termo citado. **ESSE** = o que já foi falado antes.',
        badge: { text: 'PEGADINHA', tone: 'amber' },
      },
      {
        label: 'Conjunções Campeãs',
        text: '**Adversativas** (oposição forte: mas, porém, contudo, todavia, entretanto) vs. **Concessivas** (oposição com "embora", "ainda que", "conquanto", "apesar de").',
        badge: { text: 'MEMORIZAR', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Reescrita de Despacho sem Quebrar o Sentido',
        scenario:
          'Frase original: "O prazo venceu, **mas** o protocolo aceitou o recurso." Se a banca mandar trocar **"mas"** por **"embora"**, você TEM que mudar a frase para: "**Embora** o prazo tenha vencido, o protocolo aceitou o recurso." Se manter "venceu" no indicativo, fica errado!',
      },
      {
        title: 'Retomada com "Este" e "Aquele"',
        scenario:
          '"Chegaram **João** e **Maria**. **Esta** (Maria, a mais próxima) assumiu o protocolo; **aquele** (João, o mais distante) foi para o arquivo." Inverter isso muda totalmente quem fez o quê no processo!',
      },
    ],
    table: {
      title: 'Tabela de Conjunções que Despencam na Prova',
      headers: ['Relação Lógica', 'Conectivos Mais Cobrados', 'Regra de Ouro / Troca Segura'],
      rows: [
        [
          '**Oposição (Adversativa)** [[ROSE:INDICATIVO]]',
          'mas, porém, contudo, todavia, entretanto, **no entanto**',
          'Podem ser trocados entre si, mas **"mas"** só vai no início da oração; os outros podem ir no meio entre vírgulas.',
        ],
        [
          '**Oposição (Concessiva)** [[AMBER:SUBJUNTIVO]]',
          '**embora**, ainda que, **conquanto**, posto que, mesmo que',
          'Exige verbo no subjuntivo ("embora **esteja**"). Nunca troque direto por "mas" sem ajustar o verbo!',
        ],
        [
          '**Causa / Explicação**',
          'porque, pois (antes do verbo), **visto que**, já que, uma vez que',
          'Indica o motivo. Cuidado: **"porquanto"** = porque! (Não confunda com **"conquanto"** = embora!).',
        ],
        [
          '**Conclusão**',
          'portanto, logo, **destarte**, assim, por conseguinte, pois (após o verbo)',
          '**"Pois"** depois do verbo e entre vírgulas ("O prazo venceu; devemos, **pois**, arquivar") vale **PORTANTO**!',
        ],
      ],
    },
    examTrap:
      'PEGADINHA MORTAL: **"CONQUANTO"** significa **EMBORA** (concessão), e **"PORQUANTO"** significa **PORQUE** (causa). E **"POSTO QUE"** na norma culta tradicional também significa **EMBORA** (concessão), e não "já que"!',
    deepDive: {
      headline: 'Diferença Entre "Pois" Explicativo e "Pois" Conclusivo',
      points: [
        '**POIS antes do verbo** = explicação/causa (= porque). Ex.: "Estude, **pois** a prova é em dezembro."',
        '**POIS depois do verbo (entre vírgulas)** = conclusão (= portanto). Ex.: "A prova é em dezembro; estude, **pois**."',
        '**Coesão Lexical**: trocar "a Prefeitura de Curitiba" por "a administração municipal" evita repetição chata sem perder o referente.',
      ],
      extraExample:
        'Se a questão der: "Não havia verba; o projeto, **todavia**, foi entregue" — "todavia" está deslocado e significa oposição (= porém), nunca tempo!',
      mnemonic: 'CONquanto = CONtrário (embora) | PORquanto = PORque | POIS pós-verbo = PORTANTO.',
    },
  },

  '1.1.5': {
    realityParagraphs: [
      'Acentuação e fonologia parecem decoreba chata, mas na real são **matemática pura da língua portuguesa**. Se você aprender a separar as sílabas e achar a sílaba tônica (a mais forte), você resolve 90% das questões sem chutar nada.',
      'A regra central de acentuação é olhar de trás para frente: **Proparoxítona** (ante-penúltima forte) leva acento SEMPRE, sem choro. **Oxítona** (última forte) e **Paroxítona** (penúltima forte) são opostas uma da outra: o que acentua uma, NÃO acentua a outra!',
    ],
    keyPoints: [
      {
        label: 'Proparoxítonas',
        text: '**TODAS são acentuadas** (100% delas, zero exceção): público, médico, página, trânsito, próximo.',
        badge: { text: '100% ACENTO', tone: 'emerald' },
      },
      {
        label: 'Oxítonas vs. Paroxítonas',
        text: 'Oxítonas levam acento se terminarem em **A, E, O, EM (ens)**. Paroxítonas levam acento quando **NÃO** terminam nisso (terminadas em R, L, N, X, PS, I/IS, U/US, Ã/ÃS, ÃO/ÃOS, UM/UNS e ditongo!).',
        badge: { text: 'ESPELHO INVERSO', tone: 'sky' },
      },
      {
        label: 'Dígrafo vs. Encontro Consonantal',
        text: '**Dígrafo** = 2 letras que fazem **1 único som** (CH, LH, NH, RR, SS, QU/GU antes de E/I, e vogal + M/N na mesma sílaba como "ca**mp**o"). **Encontro Consonantal** = 2 consoantes com **2 sons** (PRato, BLoco).',
        badge: { text: 'CONTA LETRA ≠ SOM', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Palavras que Todo Servidor Fala Errado',
        scenario:
          'Muita gente fala "rúbrica", mas a pronúncia correta é **ru-BRI-ca** (paroxítona terminada em A → **NÃO TEM ACENTO!**). Mesma coisa para **in-te-RIM** (oxítona? Não! É **ÍN-te-rim**, proparoxítona → tem acento!). E **gra-TUI-to** (não "gratuíto"!) não tem acento porque "ui" é ditongo, não hiato.',
      },
      {
        title: 'Contando Letras e Fonemas em "TÁXI" e "CHAVE"',
        scenario:
          '"CHAVE" tem **5 letras**, mas CH tem 1 som só → **4 fonemas**. Já "TÁXI" tem **4 letras**, mas o X faz som de /ks/ (2 sons!) → **5 fonemas**! A banca ama perguntar qual palavra tem mais fonemas que letras.',
      },
    ],
    table: {
      title: 'Resumo Cirúrgico da Acentuação & Reforma Ortográfica',
      headers: ['Regra', 'Quando Acentua', 'Pegadinha Pós-Reforma (Não Acentua Mais!)'],
      rows: [
        ['**Proparoxítona**', 'SEMPRE (ex.: **orgânico, déficit**).', 'Nenhuma — todas continuam acentuadas.'],
        ['**Oxítona**', 'Terminadas em **A, E, O, EM (+S)** (ex.: **também, alvará**).', 'Monossílabos em A, E, O seguem a mesma lógica (pá, pé, pó).'],
        ['**Paroxítona**', 'Terminadas em **L, N, R, X, PS, I, U, Ã, ÃO, Ditongo** (ex.: **fácil, bônus, secretária**).', '[[ROSE:CAIU]] Ditongos abertos **EI, OI** em paroxítonas perderam acento (**ideia, jiboia, assembleia**)!'],
        ['**Hiato (I / U tônicos)**', 'Quando sozinhos na sílaba ou com S (**sa-ú-de, pa-ís**).', '[[ROSE:CAIU]] Não acentua depois de ditongo em paroxítona (**feiura**) nem antes de NH (**rainha**)!'],
        ['**Acentos Diferenciais**', 'Mantidos: **pôde** (passado) vs. pode; **pôr** (verbo) vs. por; **têm/vêm** (plural).', '[[ROSE:CAIU]] **Pára** (verbo), **pêlo**, **pêra** e **pólo** perderam o acento!'],
      ],
    },
    examTrap:
      'Pegadinha clássica: **"Ideia" e "Assembleia" NÃO têm acento** (paroxítonas com ditongo aberto EI), mas **"Papéis", "Herói" e "Anéis" CONTINUAM com acento** porque o ditongo aberto está na última sílaba (oxítonas)!',
    deepDive: {
      headline: 'O Segredo de "Secretária" vs. "Secretaria" e o Dígrafo Nasal',
      points: [
        '**Se-cre-TÁ-ria** é paroxítona terminada em ditongo crescente (-ia) → **leva acento** (a pessoa/cargo). **Se-cre-ta-RI-a** faz hiato no final (-ri-a) → **sem acento** (o órgão público!).',
        '**Dígrafo vocálico**: em "ta**mb**ém" ou "co**nc**urso", o M/N no fim da sílaba **não soa como consoante**, ele só deixa a vogal fanha (nasal). Logo, **AM, AN, EM, EN, IM, IN, OM, ON, UM, UN** são dígrafos (2 letras = 1 som)!',
        '**X com som de /ks/**: tóxico, táxi, fixo, anexo, oxítono têm **+1 fonema** em relação ao número de letras.',
      ],
      extraExample:
        'Quantos fonemas tem "CHUVA"? C-H (1) + U (1) + V (1) + A (1) = 4 fonemas e 5 letras. E "FIXO"? F (1) + I (1) + K-S (2) + O (1) = 5 fonemas e 4 letras.',
      mnemonic: 'Oxítona = A-E-O-EM | Paroxítona = L-I-N-U-R-X-Ã-ÃO-PS-Ditongo (Lembrar: "LINURXÃ...").',
    },
  },

  '1.1.6': {
    realityParagraphs: [
      'Em português existem **10 classes de palavras**: 6 mudam de forma (variam em gênero, número ou pessoa) e **4 são duronas e não mudam NUNCA** (invariáveis). Saber quais são as 4 invariáveis já te salva de errar questão de concordância boba.',
      'Mas a grande sacada da prova é que **a mesma palavra muda de classe dependendo de onde ela está na frase**. Um adjetivo vira substantivo se você meter um "o" na frente ("o **azul** do céu"). Um adjetivo vira advérbio se estiver modificando um verbo ou outro adjetivo ("eles estão **meio** cansados").',
    ],
    keyPoints: [
      {
        label: '6 Variáveis (Flexionam)',
        text: 'Substantivo, Artigo, Adjetivo, Numeral, Pronome e Verbo.',
        badge: { text: 'FLEXIONAM', tone: 'sky' },
      },
      {
        label: '4 Invariáveis (Não vão pro plural!)',
        text: '**Advérbio, Preposição, Conjunção e Interjeição**. Nunca coloque S no final de advérbio!',
        badge: { text: 'INVARIÁVEIS', tone: 'rose' },
      },
      {
        label: 'Substantivação (Derivação Imprópria)',
        text: 'Botou artigo ("o", "um") ou pronome ("meu", "esse") antes de qualquer palavra? **Virou substantivo!** Ex.: "O **não** já temos".',
        badge: { text: 'TRUQUE CLÁSSICO', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: '"Bastante" vs. "Bastantes" nos Processos',
        scenario:
          '"Os servidores estão **bastante** ocupados" → modifica o adjetivo "ocupados", então é **advérbio (invariável!)**. Agora: "Recebemos **bastantes** processos hoje" → modifica o substantivo "processos" (= muitos processos), então é **pronome/adjetivo (vai pro plural!)**.',
      },
      {
        title: '"Meio" vs. "Meia" no Atendimento',
        scenario:
          '"A cidadã ficou **meio** nervosa" → um pouco nervosa → **advérbio (sempre MEIO!)**. Não existe "meia nervosa", a não ser que metade dela esteja nervosa e a outra metade calma! Só usa "meia" para metade de substantivo feminino ("**meia** folha", "**meia**-hora").',
      },
    ],
    table: {
      title: 'Palavras Camaleão que Mudam de Classe e Derrubam Geral',
      headers: ['Palavra', 'Quando É Variável (Vai pro Plural/Feminino)', 'Quando É Invariável (Advérbio / Preposição)'],
      rows: [
        ['**Bastante**', 'Troca por **"muitos/muitas"**: *Há **bastantes** vagas.*', 'Troca por **"muito"** junto a verbo/adjetivo: *Eles são **bastante** rápidos.*'],
        ['**Meio**', 'Significa **"metade"**: *Tomou **meia** xícara de café.*', 'Significa **"um pouco"**: *A porta estava **meio** aberta.*'],
        ['**Caro / Barato**', 'Acompanha substantivo: *As taxas estão **caras**.*', 'Acompanha verbo (custar/pagar): *As taxas custaram **caro**.*'],
        ['**Anexo / Incluso**', 'É adjetivo (concorda!): *Seguem **anexas** as guias.*', 'Só fica invariável com **"em"**: *Seguem **em anexo** as guias.*'],
        ['**Só**', 'Equivale a **"sozinho(s)"**: *Eles ficaram **sós** na sala.*', 'Equivale a **"somente"**: *Eles **só** queriam a certidão.*'],
      ],
    },
    examTrap:
      'Pegadinha campeã em ofício e prova: escrever "Seguem **anexo** as certidões" está **ERRADO**! Sem a preposição "em", "anexo" é adjetivo e tem que concordar: "Seguem **anexas** as certidões" (ou use "**em anexo**", que aí fica invariável).',
    deepDive: {
      headline: 'Adjetivo vs. Advérbio — O Teste Infalível',
      points: [
        '**Pergunte ao termo de referência**: está ligado a um **SUBSTANTIVO**? Então é Adjetivo/Pronome/Artigo/Numeral → **concorda em gênero e número**.',
        'Está ligado a um **VERBO, ADJETIVO ou outro ADVÉRBIO**? Então é Advérbio → **nunca muda de forma**.',
        '**Pronome Relativo "QUE"**: sempre retoma um termo anterior e pode ser trocado por **"o qual / a qual / os quais / as quais"**.',
      ],
      extraExample:
        '"As funcionárias mesmas fizeram o protocolo" → "mesmas" reforça o substantivo "funcionárias" (= próprias), por isso concorda no feminino plural!',
      mnemonic: 'Ligado a SUBSTANTIVO = Flexiona | Ligado a VERBO/ADJETIVO = Congela.',
    },
  },

  '1.1.7': {
    realityParagraphs: [
      'Semântica é o estudo do **significado das palavras**. Na prova de nível médio, isso cai de duas formas bem práticas: a banca sublinha uma palavra difícil no texto e manda trocar por um sinônimo sem perder o sentido, ou coloca duas palavras quase iguais na grafia e totalmente diferentes no sentido (os famosos **parônimos**).',
      'Também despenca a diferença entre **Denotação** (sentido literal, do dicionário) e **Conotação** (sentido figurado, poético ou de gíria). É fácil de gravar com um macete de letra inicial e você nunca mais erra.',
    ],
    keyPoints: [
      {
        label: 'Denotação vs. Conotação',
        text: '**D**enotação = **D**icionário (sentido real, literal). **C**onotação = **C**ontexto / **C**riatividade (sentido figurado).',
        badge: { text: 'MACETE D / C', tone: 'emerald' },
      },
      {
        label: 'Sinônimos vs. Antônimos',
        text: 'Sinônimos = sentidos próximos (nunca 100% idênticos fora do contexto). Antônimos = sentidos opostos.',
        badge: { text: 'CONTEXTO MANDA', tone: 'sky' },
      },
      {
        label: 'Parônimos e Homônimos de Repartição',
        text: '**Ratificar** (confirmar) vs. **Retificar** (corrigir). **Deferir** (conceder/aprovar) vs. **Diferir** (adiar ou ser diferente). **Mandado** (ordem judicial) vs. **Mandato** (tempo de cargo político).',
        badge: { text: 'CAI NA CERTA', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Errata de Edital em Curitiba',
        scenario:
          'A Prefeitura publicou a data errada da prova no Diário Oficial. Ela publica um aviso para **RETIFICAR** (= corrigir, lembra de **reto**) a data e **RATIFICAR** (= confirmar) todas as demais regras do edital.',
      },
      {
        title: 'Despacho de Deferimento vs. Diferimento',
        scenario:
          'O cidadão pediu isenção de IPTU. Se o agente escreve que o pedido foi **DEFERIDO**, o cidadão ganhou a isenção! Se escrever que o pagamento foi **DIFERIDO** para o mês seguinte, significa que foi **adiado** (não confundir com indeferido = negado!).',
      },
    ],
    table: {
      title: 'Pares Traiçoeiros Mais Cobrados em Concursos',
      headers: ['Palavra A (Significado)', 'Palavra B (Significado)', 'Frase de Fixação Rápida'],
      rows: [
        ['**Ratificar** (Confirmar)', '**Retificar** (Corrigir)', 'Errata **retifica** o erro e **ratifica** o resto.'],
        ['**Deferir** (Aprovar/Conceder)', '**Diferir** (Adiar / Ser diferente)', 'O chefe **deferiu** as férias; a posse foi **diferida**.'],
        ['**Mandado** (Ordem judicial)', '**Mandato** (Período de cargo)', 'Vereador tem **mandato** de 4 anos; juiz expede **mandado**.'],
        ['**Eminente** (Ilustre/Elevado)', '**Iminente** (Prestes a ocorrer)', 'O **eminente** secretário evitou crise **iminente**.'],
        ['**Sessão** (Reunião/Tempo)', '**Seção** (Setor) / **Cessão** (Ceder)', 'Na **seção** de protocolo, houve **sessão** sobre **cessão** de bens.'],
        ['**Descriação / Descrição** (Descrever)', '**Discrição** (Ser discreto)', 'O agente atendeu com **discrição** e fez a **descrição** do caso.'],
      ],
    },
    examTrap:
      'Pegadinha clássica de prova: "O secretário **retificou** a decisão anterior, mantendo-a exatamente como estava." ERRADO pra caramba! Se manteve igual, ele **RATIFICOU** (confirmou). **RE**tificar = **RE**mover erro (corrigir)!',
    deepDive: {
      headline: 'Polissemia, Homônimos e Mais Pares Quentes',
      points: [
        '**Polissemia**: mesma palavra com vários sentidos ligados entre si (ex.: "**cabo**" da vassoura, "**cabo**" do exército, "**cabo**" de rede).',
        '**Cumprimento** (saudação ou ato de cumprir a lei) vs. **Comprimento** (tamanho/extensão em metros).',
        '**Tráfego** (trânsito de carros/dados) vs. **Tráfico** (comércio ilegal). **Flagrante** (no ato) vs. **Fragrante** (perfumado).',
      ],
      extraExample:
        'Denotação: "O servidor **quebrou o braço** no acidente." (osso quebrado mesmo). Conotação: "O servidor **quebrou um galho** para o colega." (ajudou num favor).',
      mnemonic: 'D = Dicionário (Denotação) | C = Criativo (Conotação) | REtificar = REformar | RAtificar = RAtificar/Confirmar.',
    },
  },

  '1.1.8': {
    realityParagraphs: [
      'Muita gente trava em análise sintática porque tenta decorar 40 nomes sem entender a lógica. Pensa na oração como uma **cena de ação**: primeiro você acha o **VERBO** (a ação), depois pergunta **"Quem praticou ou sofreu isso?"** para achar o **SUJEITO**, e por fim vê o que completa o verbo (**OBJETOS**).',
      'Regra sagrada que resolve metade das questões: **SUJEITO NUNCA COMEÇA COM PREPOSIÇÃO** (ninguém diz "De o prefeito assinou"). E se o sujeito estiver lá no final da frase ("Faltam documentos"), o verbo TEM que concordar com ele mesmo assim!',
    ],
    keyPoints: [
      {
        label: 'Sujeito (O Chefe da Frase)',
        text: 'Termo com o qual o verbo **concorda**. Pode estar escondido (oculto/desinencial) ou lá no fim da frase (**sujeito posposto**)!',
        badge: { text: 'SEM PREPOSIÇÃO', tone: 'rose' },
      },
      {
        label: 'Objeto Direto (OD) vs. Indireto (OI)',
        text: '**OD** liga direto no verbo sem preposição obrigatória ("Protocolou **o pedido**"). **OI** exige preposição ("Necessita **de carimbo**", "Obedece **ao edital**").',
        badge: { text: 'COMPLEMENTOS', tone: 'sky' },
      },
      {
        label: 'Adjunto Adverbial vs. Adjunto Adnominal',
        text: '**Adjunto Adverbial** indica circunstância (tempo, lugar, modo) ligado ao **verbo**. **Adjunto Adnominal** caracteriza um **substantivo**.',
        badge: { text: 'DIFERENÇA CHAVE', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Sujeito Escondido no Fim da Frase',
        scenario:
          '"Chegaram ontem à tarde **os novos editais**." Muita gente erra achando que "os novos editais" é Objeto Direto porque veio depois do verbo! Pergunte ao verbo: *O que chegou?* Resposta: **os novos editais** = **Sujeito** (por isso "chegaram" está no plural!).',
      },
      {
        title: 'Diferenciando "LHE" de "O / A"',
        scenario:
          'Em textos formais: **"Entreguei-lhe o processo"** → "lhe" substitui "a ele" = **Objeto Indireto**. Já **"Assinei-o agora"** → "o" substitui "o documento" = **Objeto Direto**. Nunca escreva "Assinei-lhe" ou "Vi-lhe"!',
      },
    ],
    table: {
      title: 'Mapa Rápido das Funções Sintáticas na Prova',
      headers: ['Termo da Oração', 'Pergunta Mágica para Achar', 'Exemplo Prático'],
      rows: [
        ['**Sujeito**', 'Quem + verbo? / O que + verbo?', '**Os agentes** organizaram a fila.'],
        ['**Objeto Direto (OD)**', 'Verbo + o quê? / quem? (sem preposição)', 'O agente protocolou **a guia**.'],
        ['**Objeto Indireto (OI)**', 'Verbo + de quê / a quem / em quê? (com preposição)', 'O servidor assistiu **ao treinamento**.'],
        ['**Predicativo do Sujeito**', 'Qualidade do sujeito após verbo de ligação', 'O processo estava **incompleto**.'],
        ['**Complemento Nominal**', 'Completa **substantivo abstrato, adjetivo ou advérbio** (com preposição)', 'Ele tem medo **de erros** / obediente **à lei**.'],
        ['**Agente da Passiva**', 'Quem pratica a ação na voz passiva ("por / pelo")', 'O decreto foi assinado **pelo prefeito**.'],
      ],
    },
    examTrap:
      'Pegadinha clássica: confundir **Objeto Indireto** com **Complemento Nominal**! Olhe para o que vem ANTES da preposição: se for um **VERBO** ("gostar de", "obedecer a"), é **OI**. Se for um **NOME** (substantivo abstrato, adjetivo ou advérbio: "medo de", "favorável a"), é **Complemento Nominal**!',
    deepDive: {
      headline: 'Complemento Nominal vs. Adjunto Adnominal (O Terror dos Candidatos)',
      points: [
        'Com **adjetivo ou advérbio** antes da preposição ("útil **ao povo**", "longe **de casa**"): é **100% Complemento Nominal**.',
        'Com **substantivo abstrato** ("a entrega **do relatório**" vs. "a entrega **do carteiro**"): se o termo **RECEBE** a ação (alvo/paciente), é **Complemento Nominal** (o relatório foi entregue). Se ele **PRATICA** a ação (agente/posse), é **Adjunto Adnominal** (o carteiro entregou).',
        '**Vocativo** não pertence nem ao sujeito nem ao predicado — é apenas um chamamento separado por vírgula ("**Cidadão**, aguarde sua senha").',
      ],
      extraExample:
        '"A construção **da escola** durou 6 meses" (a escola foi construída → alvo → Complemento Nominal) vs. "A construção **da prefeitura** venceu o prêmio" (a prefeitura construiu → agente → Adjunto Adnominal).',
      mnemonic: 'CN = Completa Nome (e é Alvo/Paciente) | AA = Acompanha Substantivo (Agente/Posse).',
    },
  },

  '1.1.9': {
    realityParagraphs: [
      'Concordância é o feijão com arroz de quem vai trabalhar escrevendo parecer e ofício. **Concordância Verbal** é fazer o verbo combinar com o sujeito; **Concordância Nominal** é fazer artigo, adjetivo, pronome e numeral combinarem com o substantivo.',
      'A banca não cobra frase fácil ("os meninos correm"). Ela cobra os **casos traiçoeiros**: verbos sem sujeito (**haver** e **fazer**), a maldita **partícula SE**, porcentagem com sujeito e sujeito composto antes ou depois do verbo.',
    ],
    keyPoints: [
      {
        label: 'Verbos Impessoais (Haver / Fazer)',
        text: '**HAVER** no sentido de **existir/ocorrer** e **FAZER** indicando **tempo decorrido** NÃO TÊM SUJEITO → ficam **SEMPRE NO SINGULAR** ("Há vagas", "Faz três anos").',
        badge: { text: 'SEMPRE SINGULAR', tone: 'rose' },
      },
      {
        label: 'Verbo EXISTIR (Cuidado!)',
        text: '**EXISTIR** tem sujeito! Então vai para o **PLURAL normalmente**: "**Existem** dez processos", "**Devem existir** soluções".',
        badge: { text: 'VAI PRO PLURAL', tone: 'emerald' },
      },
      {
        label: 'Partícula SE (VTD vs. VTI/VI)',
        text: '**VTD + SE** (sem preposição): o SE é apassivador e o **verbo concorda** ("Protocolam-**se** guias"). **VTI/VI + SE** (com preposição ou sem objeto): índice de indeterminação → **sempre no singular** ("Precisa-**se** de agentes").',
        badge: { text: 'CAMPEÃ DE PROVA', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Locução Verbal com "Haver"',
        scenario:
          'Se tiver um verbo auxiliar antes do "haver" ("Deve haver muitas dúvidas"), o "haver" **contamina o auxiliar**: fica "**Deve haver** muitas dúvidas" (e NUNCA "Devem haver"!). Agora com "existir": "**Devem existir** muitas dúvidas"!',
      },
      {
        title: 'Cartaz no Mural da Prefeitura',
        scenario:
          '"**Alugam-se** salas" está CERTO (quem aluga, aluga algo — sem preposição → salas são alugadas → plural!). Já "**Trata-se** de documentos sigilosos" fica no SINGULAR porque tem a preposição **DE**!',
      },
    ],
    table: {
      title: 'Tabela Antipega: Concordância Verbal & Nominal',
      headers: ['Estrutura', 'Certo (Padrão)', 'Errado (Pegadinha da Banca)'],
      rows: [
        ['**Haver (existir)**', '**Há** dois pedidos pendentes. / **Deve haver** vagas.', '~~Hão~~ dois pedidos. / ~~Devem haver~~ vagas.'],
        ['**Fazer (tempo)**', '**Faz** cinco meses que protocolou.', '~~Fazem~~ cinco meses que protocolou.'],
        ['**VTD + SE**', '**Analisaram-se** todos os contratos.', '~~Analisou-se~~ todos os contratos.'],
        ['**VTI + SE (preposição)**', '**Necessita-se** de novos servidores.', '~~Necessitam-se~~ de novos servidores.'],
        ['**É proibido / É bom**', 'Sem artigo: Entrada **é proibido**. / Com artigo: **A** entrada **é proibida**.', '~~A entrada é proibido~~ (se pôs artigo, tem que concordar!).'],
        ['**Porcentagem**', '**1%** dos agentes **faltou** (ou faltaram). **25%** da verba **foi usada**.', 'Ignorar a regra de atração do especificador.'],
      ],
    },
    examTrap:
      'Nunca caia nessa: **"Fazem dois anos que estudei" e "Devem haver problemas" estão 100% ERRADOS!** Verbo "fazer" de tempo e "haver" de existir são invariáveis no singular, inclusive com verbo auxiliar colado neles!',
    deepDive: {
      headline: 'Mais 3 Casos que Salvam Pontos na Reta Final',
      points: [
        '**Sujeito composto DEPOIS do verbo**: pode concordar com os dois (plural) ou só com o **mais próximo** ("Chegou o diretor e os chefes" ou "Chegaram o diretor e os chefes").',
        '**Menos e Alerta**: "**Menos**" é sempre invariável (não existe "menas", pelamor!). "**Alerta**" como advérbio também fica no singular ("Os agentes estão **alerta**").',
        '**Um e outro / Mais de um**: "**Mais de um** servidor faltou" (fica no singular, salvo se houver reciprocidade: "Mais de um servidor se **abraçaram**").',
      ],
      extraExample:
        '"É necessário paciência" (sem artigo → invariável) vs. "É necessária **a** paciência" (apareceu o artigo "a" → concorda no feminino!).',
      mnemonic: 'Tem preposição depois do SE? Fica no SINGULAR (de-em-com-para = trava no singular)!',
    },
  },

  '1.1.10': {
    realityParagraphs: [
      'Esqueça aquela história da escola de que "vírgula é onde a gente respira". Se você usar vírgula para respirar na prova, vai se asfixiar na reprovação! **Vírgula é sintaxe pura, não fôlego.**',
      'A primeira regra para nunca passar vergonha é a proibição absoluta: **NUNCA separe o sujeito do seu verbo nem o verbo do seu complemento com UMA vírgula**. Se você precisar meter uma explicação ou data no meio, tem que usar **DUAS vírgulas** (uma para abrir, outra para fechar, como parênteses).',
    ],
    keyPoints: [
      {
        label: 'Proibição Absoluta (1 Vírgula Só)',
        text: 'Jamais coloque **1 vírgula** entre **Sujeito ↔ Verbo** ou **Verbo ↔ Objeto**. ("O prefeito de Curitiba, assinou o decreto" → [[ROSE:ERRADO!]]).',
        badge: { text: 'PROIBIDO', tone: 'rose' },
      },
      {
        label: 'Termo Deslocado / Intercalado',
        text: 'Se tirou um adjunto adverbial do fim e jogou pro começo ou meio: se for **longo** (3+ palavras), vírgula obrigatória. No meio, **vírgulas duplas**.',
        badge: { text: 'VÍRGULAS DUPLAS', tone: 'sky' },
      },
      {
        label: 'Vírgula Antes do "E"',
        text: 'Só usa quando os **sujeitos são diferentes** ("O chefe saiu**, e** o agente fechou o guichê") ou quando "e" equivale a **"mas"**.',
        badge: { text: 'EXCEÇÃO', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Explicativa vs. Restritiva (Muda Tudo na Lei!)',
        scenario:
          '"Os servidores**, que cumpriram a meta,** receberão bônus" (COM vírgulas = **EXPLICATIVA** → **TODOS** os servidores cumpriram e todos ganham!). Sem vírgulas: "Os servidores **que cumpriram a meta** receberão bônus" (**RESTRITIVA** → **APENAS** quem cumpriu ganha!).',
      },
      {
        title: 'Vírgula para Evitar Ambiguidade em Parecer',
        scenario:
          '"O processo, **após análise técnica da comissão**, foi arquivado." Se você esquecer a segunda vírgula depois de "comissão", você separa o sujeito ("O processo") do verbo ("foi")!',
      },
    ],
    table: {
      title: 'Guia Direto de Pontuação para Prova',
      headers: ['Sinal', 'Quando É Obrigatório Usar', 'Exemplo Real'],
      rows: [
        ['**Vírgula (Aposto / Vocativo)**', 'Isolar explicação ou chamamento.', '**Curitiba, capital do Paraná,** digitalizou o sistema.'],
        ['**Vírgula (Aposto/Termo no meio)**', 'Abrir e fechar termo intercalado (2 vírgulas!).', 'O edital**, segundo a banca,** sai amanhã.'],
        ['**Vírgula (Zeugma — verbo oculto)**', 'Indicar que um verbo já citado foi omitido.', 'João foi ao arquivo; Maria**,** ao protocolo.'],
        ['**Ponto e Vírgula (;)**', 'Separar itens de enumeração ou frases longas que já têm vírgulas.', 'Art. 1º: I - nomear**;** II - empossar.'],
        ['**Dois-Pontos (:)**', 'Anunciar enumeração, citação ou explicação.', 'Apresente três documentos**:** RG, CPF e guia.'],
      ],
    },
    examTrap:
      'A banca tira as vírgulas de uma oração adjetiva (**que...**) e pergunta se "mantém o sentido original". NÃO MANTÉM! Tirar ou colocar vírgulas antes de oração com "que" muda o sentido de **TODOS** (explicativa) para **ALGUNS** (restritiva)!',
    deepDive: {
      headline: 'Onde a Galera Sempre Tropeça na Vírgula',
      points: [
        '**Conjunções adversativas/conclusivas deslocadas** ("porém", "contudo", "portanto", "no entanto"): quando saem do início da oração e vão pro meio, ficam **sempre entre vírgulas**.',
        '**Ordem Direta (SVO)**: Sujeito + Verbo + Objeto + Adjunto Adverbial no final **NÃO precisa de vírgula**.',
        '**Travessão duplo (— ... —)** ou parênteses podem substituir as duas vírgulas em termos intercalados explicativos.',
      ],
      extraExample:
        '"O protocolo, portanto, encerrou às 17h." (Certo — conjunção deslocada isolada por duas vírgulas!).',
      mnemonic: 'S ↔ V ↔ O nunca se separam por 1 vírgula; se meteu algo no meio, usa 2 vírgulas!',
    },
  },

  '1.1.11': {
    realityParagraphs: [
      'Se tem uma questão que você NÃO tem o direito de errar na prova de nível médio, é o uso dos porquês. São **4 formas** e cada uma tem um teste de substituição idiota de tão fácil que resolve 100% das dúvidas em 5 segundos.',
      'Esqueça decorar frase bonita: use a **técnica da troca mental** por **"por qual razão"**, **"pelo qual"**, **"pois"** ou **"o motivo"**.',
    ],
    keyPoints: [
      {
        label: 'por que (Separado, sem acento)',
        text: 'Pergunta direta/indireta (= **por qual razão**) OU pronome relativo (= **pelo qual / pela qual**).',
        badge: { text: 'PERGUNTA / PELO QUAL', tone: 'sky' },
      },
      {
        label: 'por quê (Separado, com acento)',
        text: 'Mesmo sentido de "por qual razão", mas **colado em ponto final, interrogação ou exclamação** (fim de frase / isolado).',
        badge: { text: 'FIM DE FRASE', tone: 'amber' },
      },
      {
        label: 'porque (Junto, sem acento)',
        text: 'Conjunção explicativa ou causal — troque por **"pois / já que / uma vez que"**.',
        badge: { text: 'EXPLICAÇÃO / POIS', tone: 'emerald' },
      },
      {
        label: 'porquê (Junto, com acento)',
        text: 'É um **substantivo** (= **o motivo / a razão**). Sempre aparece com artigo, pronome ou numeral na frente ("**o** porquê", "**um** porquê", "**dois** porquês").',
        badge: { text: 'SUBSTANTIVO', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Atendimento de Recurso Indeferido',
        scenario:
          '"Gostaria de saber **por que** (= por qual razão) meu alvará foi negado." Aqui é uma pergunta indireta sem ponto de interrogação, mas continua sendo **por que** separado sem acento!',
      },
      {
        title: 'Despacho e Resposta ao Cidadão',
        scenario:
          '"O pedido foi negado **porque** (= pois) faltou a assinatura. Não entendi **o porquê** (= o motivo) da pressa. Você sabe **por quê?** (fim de frase)."',
      },
    ],
    table: {
      title: 'Cola Definitiva dos 4 Porquês',
      headers: ['Forma', 'Troque Mentalmente Por...', 'Exemplo de Prova'],
      rows: [
        ['**por que**', '"por qual razão" OU "pelo(a) qual"', '**Por que** o prazo mudou? / O motivo **por que** (= pelo qual) vim.'],
        ['**por quê**', '"por qual razão" antes de **.** **?** **!**', 'O sistema caiu, mas não sabemos **por quê**.'],
        ['**porque**', '"pois" / "já que" / "para que"', 'Arquivamos **porque** (= pois) o prazo terminou.'],
        ['**porquê**', '"o motivo" / "a razão" (aceita plural!)', 'Ele não explicou **o porquê** (= o motivo) do atraso.'],
      ],
    },
    examTrap:
      'Pegadinha clássica: achar que "por que" separado só aparece quando tem ponto de interrogação `?`. MENTIRA! Em "Explique **por que** você faltou" (pergunta indireta) e "A lei **por que** luto" (= pela qual luto), NÃO tem `?` e mesmo assim é **por que** separado!',
    deepDive: {
      headline: 'O "Por que" Disfarçado de Pronome Relativo',
      points: [
        'Sempre que der para trocar por **"pelo qual, pela qual, pelos quais, pelas quais"**, é **por que** separado sem acento — mesmo no meio de uma frase afirmativa!',
        'Exemplo: "Os caminhos **por que** (= pelos quais) passei" → separado e sem acento.',
        'Só vai para o plural a forma **substantivada**: "Não sei os **porquês** dessa regra."',
      ],
      extraExample:
        '"Não fui trabalhar, e você sabe **por quê**." (mesmo com ponto final simples, estando no fim da frase o "que" vira tônico e ganha circunflexo!).',
      mnemonic: 'Pergunta/Pelo qual = por que | Fim = por quê | Pois = porque | O motivo = o porquê.',
    },
  },

  '1.1.12': {
    realityParagraphs: [
      'Literatura Brasileira e Figuras de Linguagem costumam ter 1 ou 2 questões, mas são pontos dados se você souber bater o olho. **Prosa** é texto corrido em parágrafos (romance, conto, crônica); **Poesia** é texto em versos e estrofes (com ritmo/métrica).',
      'Nas figuras de linguagem, não precisa decorar 50 nomes gregos: as bancas repetem sempre as mesmas 6 (**Metáfora, Comparação, Metonímia, Antítese, Hipérbole e Ironia**). E nas escolas literárias, foque no trio de ouro: **Romantismo, Realismo e Modernismo**.',
    ],
    keyPoints: [
      {
        label: 'Metáfora vs. Comparação',
        text: '**Comparação** tem palavra comparativa explícita (**"como", "tal qual", "feito"**). **Metáfora** faz a comparação direta **sem conectivo**.',
        badge: { text: 'SEMPRE CAI', tone: 'emerald' },
      },
      {
        label: 'Metonímia',
        text: 'Troca um nome por outro ligado a ele: autor pela obra (**"Li Machado de Assis"**), marca pelo produto (**"Passei Cotonete"**), parte pelo todo.',
        badge: { text: 'SUBSTITUIÇÃO', tone: 'sky' },
      },
      {
        label: 'Antítese vs. Paradoxo',
        text: '**Antítese** aproxima ideias opostas que fazem sentido ("entre a **luz** e a **sombra**"). **Paradoxo** cria contradição absurda/ilógica ("amor é ferida que dói e **não se sente**").',
        badge: { text: 'PEGADINHA', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Figuras de Linguagem no Cotidiano',
        scenario:
          '"Já te falei **mil vezes** para conferir o protocolo!" = **Hipérbole** (exagero). "Que sistema maravilhoso, travou só quatro vezes hoje!" = **Ironia** (diz o oposto do que pensa).',
      },
      {
        title: 'Identificando Autores Brasileiros',
        scenario:
          'Curitiba tem forte tradição literária (Dalton Trevisan, Paulo Leminski no contemporâneo/pós-moderno). No plano nacional: **José de Alencar** (Romantismo/Iracema), **Machado de Assis** (Realismo/Dom Casmurro, crítica social e ironia), **Drummond e Clarice Lispector** (Modernismo).',
      },
    ],
    table: {
      title: 'Escolas Literárias & Figuras que Mais Caem',
      headers: ['Movimento / Figura', 'Característica Principal', 'Nomes / Exemplos Chave'],
      rows: [
        ['**Romantismo** (séc. XIX)', 'Emoção acima da razão, idealização do herói, nacionalismo, índio.', 'José de Alencar (*Iracema*), Gonçalves Dias, Álvares de Azevedo.'],
        ['**Realismo** (final séc. XIX)', 'Crítica à hipocrisia burguesa, psicologia, ironia, fim da idealização.', '**Machado de Assis** (*Memórias Póstumas*, *Dom Casmurro*).'],
        ['**Modernismo** (1922+)', 'Ruptura com formalismo, linguagem coloquial brasileira, temas urbanos.', 'Mário de Andrade, Oswald de Andrade, **Drummond**, **Clarice Lispector**.'],
        ['**Metáfora vs. Metonímia**', 'Metáfora = semelhança implícita; Metonímia = substituição lógica.', '"Tempo é dinheiro" (Metáfora) vs. "Tomei um copo d\'água" (Metonímia).'],
      ],
    },
    examTrap:
      'Pegadinha clássica: confundir **Eufemismo** (suavizar algo pesado: "ele descansou em paz" / "faltou com a verdade" no lugar de mentiu) com **Ironia** (deboche/zombaria dizendo o oposto).',
    deepDive: {
      headline: 'Checklist de Ouro dos Principais Autores Brasileiros',
      points: [
        '**Barroco**: conflito fé vs. pecado, dualismo, Gregório de Matos ("Boca do Inferno") e Padre Antônio Vieira.',
        '**Arcadismo**: volta à natureza, vida simples no campo ("carpe diem", "fugere urbem"), Cláudio Manuel da Costa e Tomás Antônio Gonzaga.',
        '**Personificação (Prosopopeia)**: dar ação humana a coisas sem vida ("O computador **dormiu** no meio do expediente").',
      ],
      extraExample:
        'Em "Machado de Assis ironizava a elite do Rio de Janeiro", a banca pode perguntar que escola ele representa: **Realismo** (e jamais Romantismo, embora sua fase bem inicial tenha traços românticos — a fama é realista!).',
      mnemonic: 'Romantismo = Coração | Realismo = Razão/Crítica | Modernismo = Liberdade/Coloquial.',
    },
  },
};
