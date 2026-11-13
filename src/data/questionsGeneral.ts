import type { PracticeQuestion } from './questions';

export const GENERAL_QUESTIONS: PracticeQuestion[] = [
  // ==========================================
  // 1.1 LÍNGUA PORTUGUESA (15 questões)
  // ==========================================
  {
    id: 'q-por-1',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.11',
    statement:
      'Assinale a alternativa em que o emprego do termo destacado está rigorosamente de acordo com a norma-padrão da Língua Portuguesa:',
    options: [
      'O protocolo foi arquivado sem que soubéssemos o por quê.',
      'Explique-me por que o processo retornou ao setor de origem.',
      'Não compareceu à reunião, por quê estava em atendimento externo.',
      'Porquê você não encaminhou o memorando eletrônico ontem?',
    ],
    correctIndex: 1,
    explanation:
      'Em "Explique-me por que" (equivalente a "por qual razão"), usa-se "por que" separado e sem acento. Antes de ponto final seria "por quê"; com artigo ("o porquê") escreve-se junto e com acento; em explicações usa-se "porque".',
  },
  {
    id: 'q-por-2',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.9',
    statement:
      'Considerando as regras de concordância verbal na redação oficial, assinale a frase correta:',
    options: [
      'Fazem três meses que o sistema de protocolo foi atualizado.',
      'Houveram muitas solicitações de revisão cadastral nesta semana.',
      'Deve haver documentos pendentes de assinatura na pasta corrente.',
      'Precisam-se de novos servidores para o atendimento ao público.',
    ],
    correctIndex: 2,
    explanation:
      'O verbo "haver" no sentido de existir é impessoal e transmite sua impessoalidade ao verbo auxiliar ("Deve haver"). "Fazer" indicando tempo decorrido também fica no singular ("Faz três meses"), e "Precisa-se de" (VTI + se) permanece no singular.',
  },
  {
    id: 'q-por-3',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.4',
    statement:
      'No trecho "Embora o prazo tenha sido curto, a equipe concluiu o levantamento cadastral antes do recesso", a conjunção "Embora" estabelece relação semântica de:',
    options: ['Causa.', 'Concessão.', 'Condição.', 'Consequência.'],
    correctIndex: 1,
    explanation:
      '"Embora" é uma conjunção subordinativa concessiva: indica um fato contrário (prazo curto) que não impediu a realização da ação principal (conclusão do levantamento).',
  },
  {
    id: 'q-por-4',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.10',
    statement:
      'Assinale a alternativa em que a pontuação está integralmente correta quanto ao emprego da vírgula:',
    options: [
      'Os servidores da secretaria, protocolaram todos os pedidos no prazo.',
      'Na manhã de segunda-feira, o setor de atendimento recebeu novos equipamentos.',
      'O parecer jurídico, recomendou o arquivamento imediato do processo.',
      'Solicitamos aos chefes de divisão que, encaminhem os relatórios até sexta.',
    ],
    correctIndex: 1,
    explanation:
      'Na alternativa B, a vírgula separa corretamente o adjunto adverbial deslocado no início da frase ("Na manhã de segunda-feira"). Nas demais, há erro ao separar sujeito de verbo ou conjunção integrante de verbo.',
  },
  {
    id: 'q-por-5',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.7',
    statement:
      'Em um comunicado público sobre alteração de datas de atendimento, a repartição publicou uma errata para corrigir o cronograma anterior e confirmar os demais itens. Os verbos que correspondem exatamente a "corrigir" e "confirmar" são, respectivamente:',
    options: [
      'Ratificar e retificar.',
      'Retificar e ratificar.',
      'Deferir e diferir.',
      'Delatar e dilatar.',
    ],
    correctIndex: 1,
    explanation:
      'Retificar = corrigir, emendar. Ratificar = confirmar, validar. Deferir = conceder; Diferir = adiar ou distinguir.',
  },
  {
    id: 'q-por-6',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.5',
    statement:
      'Assinale a alternativa em que TODAS as palavras estão acentuadas corretamente conforme o Acordo Ortográfico vigente:',
    options: [
      'Heroi, ideia, rúbrica.',
      'Público, raízes, órgãos.',
      'Vôo, enjôo, Assembléia.',
      'Beneficente, grátis, hífens.',
    ],
    correctIndex: 1,
    explanation:
      '"Público" (proparoxítona), "raízes" (hiato com "i" tônico seguido de z) e "órgãos" (paroxítona terminada em ditongo nasal) estão corretas. "Rubrica" não tem acento; "ideia" e "Assembleia" perderam o acento nos ditongos abertos paroxítonos; "voo" e "enjoo" perderam o circunflexo; "hifens" não tem acento no plural.',
  },
  {
    id: 'q-por-7',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.1',
    statement:
      'Leia o trecho: "A digitalização de processos reduziu em 40% o tempo de espera no balcão, ainda que parte do público idoso prefira o atendimento presencial assistido." Infere-se corretamente do texto que:',
    options: [
      'O atendimento presencial foi totalmente extinto após a digitalização.',
      'A digitalização trouxe ganho de agilidade, mas não eliminou a demanda por atendimento presencial.',
      'Todos os idosos rejeitam qualquer tipo de atendimento assistido.',
      'O tempo de espera aumentou em 40% para o público jovem.',
    ],
    correctIndex: 1,
    explanation:
      'O texto afirma redução de 40% na espera e ressalva ("ainda que") a preferência de parte dos idosos pelo presencial assistido, permitindo inferir que ambos os canais coexistem.',
  },
  {
    id: 'q-por-8',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.2',
    statement:
      'Quando um servidor adapta sua fala para explicar um procedimento complexo de forma simples a um cidadão leigo, mas redige o despacho oficial seguindo rigorosamente a norma-padrão, ele demonstra domínio da variação linguística:',
    options: [
      'Diacrônica (histórica).',
      'Diafásica (adequação situacional de registro).',
      'Diatópica (regional).',
      'Etimológica.',
    ],
    correctIndex: 1,
    explanation:
      'Variação diafásica diz respeito ao grau de formalidade ou informalidade adotado pelo falante conforme a situação comunicativa.',
  },
  {
    id: 'q-por-9',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.3',
    statement:
      'Um manual interno da Prefeitura intitulado "Passo a passo para abertura de processo eletrônico: 1. Acesse o sistema; 2. Preencha o formulário; 3. Anexe o PDF" apresenta predominância da tipologia textual:',
    options: ['Narrativa.', 'Injutiva (instrucional).', 'Lírica.', 'Descritiva pura.'],
    correctIndex: 1,
    explanation:
      'Textos que orientam ações passo a passo com verbos no imperativo têm predominância tipológica injuntiva.',
  },
  {
    id: 'q-por-10',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.6',
    statement:
      'Assinale a alternativa em que a palavra destacada funciona como ADVÉRBIO (permanecendo, portanto, invariável):',
    options: [
      'Recebemos bastantes solicitações nesta semana.',
      'Os servidores estavam bastante atarefados durante o mutirão.',
      'Faltam meias folhas para completar o bloco.',
      'Compramos várias pastas novas para o arquivo.',
    ],
    correctIndex: 1,
    explanation:
      'Em "bastante atarefados", "bastante" modifica o adjetivo "atarefados", funcionando como advérbio de intensidade (invariável). Em "bastantes solicitações", modifica substantivo e flexiona como pronome indefinido.',
  },
  {
    id: 'q-por-11',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.8',
    statement:
      'Na frase "Faltaram documentos essenciais na instrução do requerimento", a função sintática do termo "documentos essenciais" é:',
    options: ['Objeto direto.', 'Sujeito simples posposto.', 'Objeto indireto.', 'Adjunto adverbial.'],
    correctIndex: 1,
    explanation:
      '"Documentos essenciais" é aquilo que faltou — sujeito da oração posicionado após o verbo ("Faltaram"), razão pela qual o verbo concorda no plural.',
  },
  {
    id: 'q-por-12',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.9',
    statement:
      'Assinale a alternativa em que a concordância nominal e verbal está inteiramente correta:',
    options: [
      'Segue anexo ao ofício as duas certidões solicitadas.',
      'É proibida a entrada de pessoas sem identificação.',
      'Aluga-se salas comerciais próximas à Praça Tiradentes.',
      'Bastante motivos levaram à revisão da norma interna.',
    ],
    correctIndex: 1,
    explanation:
      'Com determinante ("a entrada"), o predicativo concorda no feminino ("É proibida a entrada"). Na A deveria ser "Seguem anexas"; na C "Alugam-se salas"; na D "Bastantes motivos".',
  },
  {
    id: 'q-por-13',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.5',
    statement:
      'Assinale a alternativa em que a palavra apresenta um DÍGRAFO consonantal (duas letras representando um único fonema):',
    options: ['Prato.', 'Chave.', 'Bloco.', 'Texto.'],
    correctIndex: 1,
    explanation:
      'Em "Chave", as letras "ch" representam um único som (/ʃ/), configurando dígrafo. "Pr" e "Bl" são encontros consonantais (dois sons distintos); "x" em "texto" tem som de /ks/ (dífono).',
  },
  {
    id: 'q-por-14',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.12',
    statement:
      'Na frase "A Prefeitura divulgou ontem que o Município de Curitiba alcançou a marca histórica de atendimentos digitais", há uma figura de linguagem ao atribuir uma ação humana ("divulgou") à instituição ("a Prefeitura"), conhecida como:',
    options: ['Metonímia.', 'Antítese.', 'Hipérbole.', 'Eufemismo.'],
    correctIndex: 0,
    explanation:
      'Metonímia ocorre quando se emprega o nome da instituição/órgão em lugar de seus representantes ou servidores que efetivamente divulgaram a informação.',
  },
  {
    id: 'q-por-15',
    disciplineId: '1.1',
    discipline: 'Língua Portuguesa',
    topicCode: '1.1.4',
    statement:
      'Assinale a frase em que o conectivo destacado introduz corretamente ideia de CONCLUSÃO:',
    options: [
      'O requerente não apresentou o comprovante, contudo o pedido foi arquivado.',
      'Todos os requisitos legais foram cumpridos; portanto, o alvará será expedido.',
      'O atendimento foi suspenso, embora a energia tenha retornado.',
      'A equipe revisou os autos para que não houvesse falhas.',
    ],
    correctIndex: 1,
    explanation:
      '"Portanto" é conjunção coordenativa conclusiva. "Contudo" é adversativa, "embora" é concessiva e "para que" indica finalidade.',
  },

  // ==========================================
  // 1.2 RACIOCÍNIO LÓGICO (15 questões)
  // ==========================================
  {
    id: 'q-rlm-1',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.17',
    statement:
      'Em um setor administrativo, 4 servidores digitalizam um lote de processos em 6 horas trabalhando no mesmo ritmo. Caso 6 servidores com a mesma produtividade realizem esse trabalho, o lote será concluído em:',
    options: ['9 horas.', '5 horas.', '4 horas.', '3 horas.'],
    correctIndex: 2,
    explanation:
      'Grandezas inversamente proporcionais (mais servidores, menos tempo): 4 × 6 = 6 × T → 24 = 6T → T = 4 horas.',
  },
  {
    id: 'q-rlm-2',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.18',
    statement:
      'Um contrato de prestação de serviços no valor de R$ 2.000,00 sofreu um reajuste de 10% e, no mês seguinte, um desconto de 10% sobre o valor reajustado. O valor final passou a ser:',
    options: ['R$ 2.000,00.', 'R$ 1.980,00.', 'R$ 1.990,00.', 'R$ 2.020,00.'],
    correctIndex: 1,
    explanation:
      'Aumento de 10%: 2.000 × 1,10 = R$ 2.200,00. Desconto de 10% sobre 2.200: 2.200 × 0,90 = R$ 1.980,00.',
  },
  {
    id: 'q-rlm-3',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.8',
    statement:
      'O número de atendimentos presenciais registrados em uma Regional de Curitiba durante cinco dias úteis foi: 18, 24, 20, 24 e 34. A média aritmética e a mediana dessa série são, respectivamente:',
    options: ['24 e 20.', '24 e 24.', '22 e 24.', '24 e 22.'],
    correctIndex: 1,
    explanation:
      'Média: (18 + 24 + 20 + 24 + 34) / 5 = 120 / 5 = 24. Ordenando para a mediana: {18, 20, 24, 24, 34} — o termo central é 24.',
  },
  {
    id: 'q-rlm-4',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.12',
    statement:
      'Em uma caixa há 12 pastas de arquivo corrente: 5 são verdes, 4 são azuis e 3 são amarelas. Retirando-se uma pasta ao acaso, a probabilidade de ela NÃO ser amarela é:',
    options: ['25%.', '50%.', '75%.', '66%.'],
    correctIndex: 2,
    explanation:
      'Pastas não amarelas = 5 verdes + 4 azuis = 9 pastas. Probabilidade = 9 / 12 = 3 / 4 = 75%.',
  },
  {
    id: 'q-rlm-5',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.18',
    statement:
      'Uma guia municipal vencida no valor principal de R$ 500,00 foi quitada com atraso sob regime de juros simples de 2% ao mês durante 4 meses. O montante total pago foi de:',
    options: ['R$ 520,00.', 'R$ 540,00.', 'R$ 580,00.', 'R$ 541,20.'],
    correctIndex: 1,
    explanation:
      'J = C · i · t = 500 × 0,02 × 4 = R$ 40,00. Montante M = 500 + 40 = R$ 540,00.',
  },
  {
    id: 'q-rlm-6',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.5',
    statement:
      'Um depósito retangular de arquivo intermediário mede 8 metros de comprimento por 4,5 metros de largura. A área total do piso desse depósito, em metros quadrados, é:',
    options: ['25 m².', '32 m².', '36 m².', '40 m².'],
    correctIndex: 2,
    explanation: 'Área do retângulo = base × altura = 8 × 4,5 = 36 m².',
  },
  {
    id: 'q-rlm-7',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.17',
    statement:
      'Em uma repartição, 3 impressoras iguais imprimem 1.200 páginas em 20 minutos. Quantos minutos levarão 5 dessas impressoras para imprimir 3.000 páginas?',
    options: ['20 minutos.', '25 minutos.', '30 minutos.', '35 minutos.'],
    correctIndex: 2,
    explanation:
      'Cada impressora faz 1.200 / (3 × 20) = 20 páginas/minuto. Com 5 impressoras, fazem 100 páginas/minuto. Para 3.000 páginas: 3.000 / 100 = 30 minutos.',
  },
  {
    id: 'q-rlm-8',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.16',
    statement:
      'Uma verba de R$ 45.000,00 será dividida entre duas secretarias na razão direta de 2 para 3. A secretaria que receber a maior cota ficará com:',
    options: ['R$ 18.000,00.', 'R$ 22.500,00.', 'R$ 27.000,00.', 'R$ 30.000,00.'],
    correctIndex: 2,
    explanation:
      'Total de partes = 2 + 3 = 5. Cada cota vale 45.000 / 5 = R$ 9.000,00. Maior parte = 3 × 9.000 = R$ 27.000,00.',
  },
  {
    id: 'q-rlm-9',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.10',
    statement:
      'Observe a sequência numérica: 3, 7, 15, 31, 63, (...). O próximo número dessa sequência é:',
    options: ['95.', '125.', '127.', '129.'],
    correctIndex: 2,
    explanation:
      'Cada termo é obtido multiplicando o anterior por 2 e somando 1 (ou somando potências de 2: +4, +8, +16, +32, +64). Logo: 63 × 2 + 1 = 127.',
  },
  {
    id: 'q-rlm-10',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.11',
    statement:
      'Quatro servidores (Ana, Bruno, Carla e Diego) fazem escala de plantão nessa ordem exata e contínua (1 servidor por dia). Se no Dia 1 o plantão foi de Ana, quem estará de plantão no 35º dia?',
    options: ['Ana.', 'Bruno.', 'Carla.', 'Diego.'],
    correctIndex: 2,
    explanation:
      'O ciclo tem tamanho 4. Dividindo 35 por 4: 35 = 4 × 8 + 3 (resto 3). O 3º elemento da ordem é Carla.',
  },
  {
    id: 'q-rlm-11',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.4',
    statement:
      'Uma praça circular possui diâmetro de 20 metros. Adotando π = 3,14, o comprimento aproximado da pista ao redor dessa praça é:',
    options: ['31,4 metros.', '62,8 metros.', '125,6 metros.', '314 metros.'],
    correctIndex: 1,
    explanation:
      'Diâmetro d = 20 m → Raio r = 10 m. Comprimento C = 2 · π · r = 2 × 3,14 × 10 = 62,8 metros.',
  },
  {
    id: 'q-rlm-12',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.6',
    statement:
      'Um terreno municipal destinado à construção de uma unidade de saúde mede 2 hectares. Essa medida equivale exatamente a:',
    options: ['2.000 m².', '20.000 m².', '200.000 m².', '200 m².'],
    correctIndex: 1,
    explanation: '1 hectare (ha) equivale a 10.000 m². Portanto, 2 hectares = 20.000 m².',
  },
  {
    id: 'q-rlm-13',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.7',
    statement:
      'Um servidor sai da sede da Prefeitura caminhando para o Norte, vira 90° à direita e caminha dois quarteirões, depois vira novamente 90° à direita. A direção final para a qual ele está caminhando agora é:',
    options: ['Norte.', 'Sul.', 'Leste.', 'Oeste.'],
    correctIndex: 1,
    explanation:
      'Olhando para o Norte e virando 90° à direita, passa a caminhar para o Leste; virando mais 90° à direita, passa a caminhar para o Sul.',
  },
  {
    id: 'q-rlm-14',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.13',
    statement:
      'Uma gaveta contém 5 processos urgentes e 5 processos comuns. Retirando-se 2 processos sucessivamente, SEM reposição, a probabilidade de ambos serem urgentes é:',
    options: ['25%.', '2/9 (aprox. 22,2%).', '1/2 (50%).', '1/5 (20%).'],
    correctIndex: 1,
    explanation:
      'Na 1ª retirada: 5/10. Sem reposição, restam 4 urgentes em 9 no total: 4/9. Multiplicando: (5/10) × (4/9) = (1/2) × (4/9) = 2/9.',
  },
  {
    id: 'q-rlm-15',
    disciplineId: '1.2',
    discipline: 'Raciocínio Lógico',
    topicCode: '1.2.19',
    statement:
      'Dois setores arquivaram juntos 140 caixas. O Setor A arquivou 24 caixas a mais que o Setor B. Quantas caixas foram arquivadas pelo Setor A?',
    options: ['58 caixas.', '70 caixas.', '82 caixas.', '94 caixas.'],
    correctIndex: 2,
    explanation:
      'A + B = 140 e A = B + 24 → (B + 24) + B = 140 → 2B = 116 → B = 58. Logo, A = 58 + 24 = 82 caixas.',
  },

  // ==========================================
  // 1.3 NOÇÕES DE INFORMÁTICA (15 questões)
  // ==========================================
  {
    id: 'q-inf-1',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.9',
    statement:
      'No Microsoft Excel 2016 (em português), um Agente Administrativo precisa verificar se a célula B2 contém valor maior ou igual a 1000 para exibir "Acima" ou, caso contrário, "Normal". A fórmula correta é:',
    options: [
      '=SE(B2>=1000;"Acima";"Normal")',
      '=SOMA(B2>=1000;"Acima";"Normal")',
      '=CONT.SE(B2>=1000;"Acima";"Normal")',
      '=PROCV(B2;1000;"Acima";"Normal")',
    ],
    correctIndex: 0,
    explanation:
      'A função lógica =SE(teste_lógico; valor_se_verdadeiro; valor_se_falso) avalia a condição B2>=1000 e retorna o texto correspondente.',
  },
  {
    id: 'q-inf-2',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.4',
    statement:
      'No Windows 10/11, para bloquear imediatamente a estação de trabalho antes de se ausentar do balcão de atendimento, mantendo os programas abertos protegidos por senha, o atalho padrão é:',
    options: [
      'Ctrl + Alt + L',
      'Tecla Windows + L',
      'Alt + F4',
      'Ctrl + Shift + Esc',
    ],
    correctIndex: 1,
    explanation:
      'Win + L bloqueia a tela do Windows imediatamente. Ctrl + Shift + Esc abre o Gerenciador de Tarefas e Alt + F4 fecha a janela ativa.',
  },
  {
    id: 'q-inf-3',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.6',
    statement:
      'Um servidor recebe um e-mail aparentemente enviado pelo setor de RH solicitando que clique em um link e confirme sua senha funcional em uma página idêntica à intranet da Prefeitura. Esse tipo de golpe denomina-se:',
    options: ['Ransomware.', 'Phishing.', 'Firewall.', 'Backup incremental.'],
    correctIndex: 1,
    explanation:
      'Phishing utiliza engenharia social e páginas/mensagens falsas que imitam instituições confiáveis para capturar senhas e dados sensíveis.',
  },
  {
    id: 'q-inf-4',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.8',
    statement:
      'No Microsoft Word 2016 (em português), qual atalho de teclado aplica formatação de negrito ao texto selecionado e qual aciona a janela de impressão, respectivamente?',
    options: [
      'Ctrl + B e Ctrl + I',
      'Ctrl + N e Ctrl + P',
      'Ctrl + S e Ctrl + O',
      'Ctrl + K e Ctrl + P',
    ],
    correctIndex: 1,
    explanation:
      'No Word em português: Ctrl + N aplica Negrito (atenção: Ctrl + B salva o documento!). Ctrl + P abre a tela de Impressão.',
  },
  {
    id: 'q-inf-5',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.12',
    statement:
      'Ao enviar um informativo por e-mail para 80 cidadãos utilizando o campo CCO (Cópia Oculta) no Gmail ou Outlook, ocorre que:',
    options: [
      'Os endereços inseridos em CCO ficam visíveis para quem estiver no campo Para.',
      'Os destinatários listados em CCO não ficam visíveis para os demais destinatários da mensagem.',
      'O protocolo HTTP envia a mensagem sem criptografia.',
      'Ao clicar em "Responder a Todos", a resposta é enviada também para os endereços em CCO.',
    ],
    correctIndex: 1,
    explanation:
      'CCO (Cópia Oculta) preserva a privacidade dos endereços listados ali e não recebe respostas de "Responder a Todos".',
  },
  {
    id: 'q-inf-6',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.9',
    statement:
      'Considere uma planilha no Excel onde A1=10, A2=20, A3=30 e A4=40. O resultado das fórmulas =SOMA(A1:A4) e =SOMA(A1;A4) são, respectivamente:',
    options: ['100 e 100.', '50 e 100.', '100 e 50.', '40 e 50.'],
    correctIndex: 2,
    explanation:
      'Dois-pontos (A1:A4) soma o intervalo completo: 10+20+30+40 = 100. Ponto e vírgula (A1;A4) soma apenas A1 e A4: 10+40 = 50.',
  },
  {
    id: 'q-inf-7',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.2',
    statement:
      'Em uma estação de atendimento ao público, qual dos equipamentos abaixo é classificado exclusivamente como periférico de SAÍDA de dados?',
    options: [
      'Leitor de código de barras.',
      'Scanner de mesa.',
      'Monitor comum (não sensível ao toque).',
      'Impressora multifuncional com digitalizador.',
    ],
    correctIndex: 2,
    explanation:
      'Monitor comum apenas exibe informações (Saída). Leitor de código de barras e scanner são de Entrada; multifuncional e touchscreen são híbridos (Entrada e Saída).',
  },
  {
    id: 'q-inf-8',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.1',
    statement:
      'Sobre memórias de computador, a memória volátil de acesso rápido que armazena temporariamente programas e documentos abertos e cujo conteúdo é perdido ao desligar o computador chama-se:',
    options: ['ROM.', 'RAM.', 'SSD.', 'Pen drive.'],
    correctIndex: 1,
    explanation:
      'A memória RAM (Random Access Memory) é volátil (apaga sem energia). ROM, SSD e pen drive são não voláteis.',
  },
  {
    id: 'q-inf-9',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.5',
    statement:
      'No sistema operacional Windows 10/11, qual combinação de teclas exclui um arquivo selecionado permanentemente, sem enviá-lo para a Lixeira?',
    options: ['Ctrl + Delete', 'Shift + Delete', 'Alt + Delete', 'Win + Delete'],
    correctIndex: 1,
    explanation:
      'Pressionar Shift + Delete remove o item permanentemente sem passar pela Lixeira.',
  },
  {
    id: 'q-inf-10',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.7',
    statement:
      'Comparando os sistemas operacionais Windows 11 e Linux Ubuntu quanto à organização e nomenclatura de arquivos, é correto afirmar que:',
    options: [
      'No Linux Ubuntu, os nomes de arquivos diferenciam letras maiúsculas de minúsculas (case-sensitive), permitindo "Ata.pdf" e "ata.pdf" na mesma pasta.',
      'No Windows 11, a raiz do sistema de arquivos é representada exclusivamente por "/home".',
      'Ambos impedem a criação de pastas com espaços no nome.',
      'No Ubuntu, é obrigatório utilizar letras de unidade como C:\\ e D:\\.',
    ],
    correctIndex: 0,
    explanation:
      'O Linux é case-sensitive (diferencia maiúsculas/minúsculas) e organiza tudo a partir da raiz "/". O Windows é case-insensitive para nomes na mesma pasta.',
  },
  {
    id: 'q-inf-11',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.11',
    statement:
      'Ao compartilhar uma pasta no Google Drive com colegas de outra secretaria permitindo que apenas visualizem e façam comentários sem poder apagar ou alterar o texto original dos arquivos, deve-se atribuir o nível de acesso:',
    options: ['Proprietário.', 'Editor.', 'Comentador.', 'Administrador de domínio.'],
    correctIndex: 2,
    explanation:
      'No Google Drive: Leitor (apenas visualiza), Comentador (visualiza e insere comentários/sugestões sem alterar o arquivo) e Editor (modifica e exclui conteúdo).',
  },
  {
    id: 'q-inf-12',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.10',
    statement:
      'Nos navegadores Chrome, Edge e Firefox, qual atalho reabre imediatamente a última guia fechada acidentalmente?',
    options: ['Ctrl + T', 'Ctrl + W', 'Ctrl + Shift + T', 'Ctrl + H'],
    correctIndex: 2,
    explanation:
      'Ctrl + Shift + T reabre a aba fechada mais recentemente. Ctrl + T abre nova aba em branco; Ctrl + W fecha a aba atual; Ctrl + H abre o Histórico.',
  },
  {
    id: 'q-inf-13',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.13',
    statement:
      'Para localizar exclusivamente arquivos em formato PDF publicados no portal oficial da Prefeitura de Curitiba contendo a expressão exata "estatuto dos funcionários", a busca mais precisa no Google é:',
    options: [
      'estatuto dos funcionários .pdf curitiba',
      'site:curitiba.pr.gov.br "estatuto dos funcionários" filetype:pdf',
      'url:curitiba +estatuto -pdf',
      'allintitle:estatuto OR pdf',
    ],
    correctIndex: 1,
    explanation:
      'O operador site: restringe ao domínio; as aspas ("...") buscam a frase exata; filetype:pdf filtra apenas documentos PDF.',
  },
  {
    id: 'q-inf-14',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.6',
    statement:
      'No contexto de segurança da informação, o código malicioso que sequestra os arquivos da rede criptografando-os e exigindo pagamento de resgate para liberar a chave de decifragem chama-se:',
    options: ['Spyware.', 'Adware.', 'Ransomware.', 'Keylogger.'],
    correctIndex: 2,
    explanation:
      'Ransomware ("ransom" = resgate) criptografa dados da vítima e exige pagamento para devolução do acesso. Backup offline atualizado é a principal proteção.',
  },
  {
    id: 'q-inf-15',
    disciplineId: '1.3',
    discipline: 'Noções de Informática',
    topicCode: '1.3.14',
    statement:
      'Ao utilizar ferramentas de Inteligência Artificial generativa de texto (como ChatGPT, Copilot ou Gemini) no apoio à redação administrativa, constitui boa prática obrigatória de segurança:',
    options: [
      'Colar dados pessoais sensíveis de contribuintes no prompt público para acelerar planilhas.',
      'Confiar integralmente em números de leis e artigos citados pela IA sem conferir a fonte oficial.',
      'Evitar inserir dados sigilosos ou pessoais identificáveis em plataformas públicas e revisar todas as citações legais em fontes oficiais.',
      'Substituir a assinatura digital do servidor pela resposta automática do modelo.',
    ],
    correctIndex: 2,
    explanation:
      'Modelos generativos podem produzir alucinações (citar normas inexistentes) e plataformas públicas não devem receber dados pessoais ou sigilosos protegidos pela LGPD.',
  },

  // ==========================================
  // 1.4 LEGISLAÇÃO (15 questões)
  // ==========================================
  {
    id: 'q-leg-1',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.6',
    statement:
      'De acordo com a Lei de Acesso à Informação (Lei nº 12.527/2011), não sendo possível conceder o acesso imediato à informação solicitada pelo cidadão, o órgão público deverá responder no prazo máximo de:',
    options: [
      '10 dias, prorrogáveis por mais 5 dias.',
      '15 dias, improrrogáveis.',
      '20 dias, prorrogáveis por mais 10 dias mediante justificativa expressa.',
      '30 dias, prorrogáveis por mais 30 dias.',
    ],
    correctIndex: 2,
    explanation:
      'O art. 11, §§ 1º e 2º da LAI fixa o prazo de 20 dias para resposta quando não há acesso imediato, podendo ser prorrogado por mais 10 dias mediante justificativa expressa e ciência do requerente.',
  },
  {
    id: 'q-leg-2',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.5',
    statement:
      'Após as alterações promovidas pela Lei nº 14.230/2021 na Lei de Improbidade Administrativa (Lei nº 8.429/1992), a configuração de ato de improbidade administrativa exige:',
    options: [
      'Comprovação de dolo específico ou culpa grave em qualquer modalidade.',
      'Comprovação de dolo, não sendo mais punível a modalidade culposa.',
      'Apenas irregularidade formal constatada pelo tribunal de contas.',
      'Prejuízo financeiro efetivo em todos os tipos de improbidade, inclusive contra princípios.',
    ],
    correctIndex: 1,
    explanation:
      'A reforma da Lei nº 14.230/2021 exigiu a comprovação de dolo para todos os atos de improbidade, eliminando a modalidade culposa.',
  },
  {
    id: 'q-leg-3',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.1',
    statement:
      'Segundo a Lei Orgânica do Município de Curitiba e a Constituição Federal, são Poderes do Município, independentes e harmônicos entre si:',
    options: [
      'O Executivo, o Legislativo e o Judiciário Municipal.',
      'O Executivo (Prefeito) e o Legislativo (Câmara Municipal).',
      'O Executivo, a Câmara Municipal e o Tribunal de Contas Municipal.',
      'Apenas o Poder Executivo, cabendo a legislação à Assembleia Estadual.',
    ],
    correctIndex: 1,
    explanation:
      'Municípios não possuem Poder Judiciário próprio. Os Poderes municipais são exclusivamente o Legislativo (Câmara de Vereadores) e o Executivo (Prefeito).',
  },
  {
    id: 'q-leg-4',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.10',
    statement:
      'Conforme o Capítulo IV da LGPD (Lei nº 13.709/2018), o tratamento de dados pessoais pelas pessoas jurídicas de direito público deve ser realizado para:',
    options: [
      'Comercialização de bases cadastrais a empresas parceiras sem necessidade de finalidade pública.',
      'Atendimento de sua finalidade pública, na persecução do interesse público, com o objetivo de executar competências legais ou atribuições do serviço público.',
      'Exclusivamente mediante consentimento individual escrito de cada contribuinte, mesmo para cobrança de tributos.',
      'Divulgação irrestrita de dados sensíveis de servidores no portal de transparência.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 23 da LGPD determina que o tratamento de dados pelo Poder Público atende à finalidade pública e ao interesse público.',
  },
  {
    id: 'q-leg-5',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.8',
    statement:
      'De acordo com as Disposições Preliminares do Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), considera-se criança a pessoa:',
    options: [
      'Até 10 anos completos.',
      'Até 12 anos de idade incompletos.',
      'Até 14 anos incompletos.',
      'Entre 0 e 12 anos completos.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 2º do ECA define criança como a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade.',
  },
  {
    id: 'q-leg-6',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.9',
    statement:
      'Nos termos do art. 28 da LINDB (Decreto-Lei nº 4.657/1942), o agente público responderá pessoalmente por suas decisões ou opiniões técnicas em caso de:',
    options: [
      'Qualquer divergência interpretativa posterior do tribunal de contas.',
      'Culpa leve por excesso de demandas na repartição.',
      'Dolo ou erro grosseiro.',
      'Insatisfação de qualquer usuário do serviço público.',
    ],
    correctIndex: 2,
    explanation:
      'O art. 28 da LINDB protege o agente público contra responsabilização por mera divergência interpretativa, limitando a responsabilidade pessoal aos casos de dolo ou erro grosseiro.',
  },
  {
    id: 'q-leg-7',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.7',
    statement:
      'Nos termos da Lei Federal nº 10.048/2000 (com alterações do Estatuto do Idoso), possuem direito ao atendimento prioritário os idosos com idade igual ou superior a:',
    options: ['55 anos.', '60 anos.', '65 anos.', '70 anos.'],
    correctIndex: 1,
    explanation:
      'A prioridade legal aplica-se a pessoas com idade igual ou superior a 60 anos (sendo que os maiores de 80 anos possuem preferência especial sobre os demais idosos).',
  },
  {
    id: 'q-leg-8',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.1',
    statement:
      'Conforme a Lei Orgânica do Município de Curitiba e o art. 29 da CF/88, as leis municipais que disponham sobre criação de cargos públicos, remuneração e regime jurídico dos servidores do Executivo são de iniciativa:',
    options: [
      'Privativa do Prefeito Municipal.',
      'Exclusiva de qualquer Vereador.',
      'Do Governador do Estado do Paraná.',
      'Concorrente com o Ministério Público.',
    ],
    correctIndex: 0,
    explanation:
      'A criação de cargos, funções ou empregos públicos na administração direta e autárquica e seu regime jurídico são matérias de iniciativa privativa do Chefe do Poder Executivo (Prefeito).',
  },
  {
    id: 'q-leg-9',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.2',
    statement:
      'De acordo com o Estatuto dos Funcionários Públicos Municipais de Curitiba (Lei nº 1.656/1958), quando um servidor demitido tem sua demissão invalidada por decisão administrativa ou judicial e retorna ao cargo anterior, ocorre o provimento denominado:',
    options: ['Reversão.', 'Reintegração.', 'Aproveitamento.', 'Readaptação.'],
    correctIndex: 1,
    explanation:
      'Reintegração é a reinvestidura do servidor estável no cargo anteriormente ocupado quando invalidada a sua demissão. Reversão é o retorno do aposentado.',
  },
  {
    id: 'q-leg-10',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.3',
    statement:
      'Segundo a organização administrativa do Poder Executivo de Curitiba (Lei Municipal nº 7.671/1991), as Secretarias Municipais, a Procuradoria-Geral e a Controladoria-Geral compõem a:',
    options: [
      'Administração Indireta (com personalidade jurídica própria).',
      'Administração Direta do Poder Executivo.',
      'Esfera legislativa municipal.',
      'Iniciativa privada delegatária.',
    ],
    correctIndex: 1,
    explanation:
      'Secretarias e órgãos centrais ligados diretamente ao Prefeito integram a Administração Direta (sem personalidade jurídica própria), enquanto autarquias, fundações e empresas estatais integram a Indireta.',
  },
  {
    id: 'q-leg-11',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.6',
    statement:
      'Na Lei de Acesso à Informação (Lei nº 12.527/2011), os prazos máximos de restrição de acesso à informação classificada nos graus ultrassecreta, secreta e reservada são, respectivamente:',
    options: [
      '50 anos, 25 anos e 10 anos.',
      '25 anos, 15 anos e 5 anos.',
      '30 anos, 20 anos e 10 anos.',
      '15 anos, 10 anos e 5 anos.',
    ],
    correctIndex: 1,
    explanation:
      'Conforme o art. 24, § 1º da LAI: Ultrassecreta = 25 anos; Secreta = 15 anos; Reservada = 5 anos.',
  },
  {
    id: 'q-leg-12',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.5',
    statement:
      'Com a atualização da Lei de Improbidade Administrativa (Lei nº 14.230/2021), a ação para aplicação das sanções prescreve em:',
    options: [
      '5 anos contados do término do mandato.',
      '8 anos contados a partir da ocorrência do fato ou, no caso de infrações permanentes, do dia em que cessou a permanência.',
      '10 anos contados da ciência pelo Ministério Público.',
      'É imprescritível em todas as modalidades.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 23 da Lei nº 8.429/1992 (com redação da Lei nº 14.230/2021) unificou o prazo prescricional para 8 anos contados do fato (ou da cessação da permanência).',
  },
  {
    id: 'q-leg-13',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.4',
    statement:
      'Segundo o art. 30 da Constituição Federal, compete aos Municípios:',
    options: [
      'Legislar sobre direito penal e eleitoral.',
      'Legislar sobre assuntos de interesse local e suplementar a legislação federal e a estadual no que couber.',
      'Emitir moeda e declarar guerra.',
      'Organizar e manter o Poder Judiciário local.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 30, I e II da CF/88 atribui aos Municípios competência para legislar sobre interesse local e suplementar normas federais/estaduais.',
  },
  {
    id: 'q-leg-14',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.9',
    statement:
      'De acordo com o art. 20 da LINDB (Decreto-Lei nº 4.657/1942), nas esferas administrativa, controladora e judicial, não se decidirá com base em valores jurídicos abstratos sem que sejam consideradas as:',
    options: [
      'Opiniões publicadas em redes sociais.',
      'Consequências práticas da decisão.',
      'Preferências partidárias do gestor anterior.',
      'Vantagens econômicas privadas das partes.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 20 da LINDB consagra o dever de análise das consequências práticas da decisão administrativa, controladora ou judicial.',
  },
  {
    id: 'q-leg-15',
    disciplineId: '1.4',
    discipline: 'Legislação',
    topicCode: '1.4.10',
    statement:
      'Conforme o Capítulo IV da LGPD, os dados pessoais tratados pelo Poder Público devem ser mantidos em formato:',
    options: [
      'Criptografado exclusivamente em papel.',
      'Interoperável e estruturado para o uso compartilhado, com vistas à execução de políticas públicas e prestação de serviços públicos.',
      'Privado e incompatível com sistemas de transparência.',
      'Aberto para venda comercial a terceiros.',
    ],
    correctIndex: 1,
    explanation:
      'O art. 25 da LGPD determina que os dados sejam mantidos em formato interoperável e estruturado para uso compartilhado visando à execução de políticas públicas e desburocratização.',
  },
];
