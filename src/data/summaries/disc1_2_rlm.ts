import type { TopicStudyContent } from '../summaryTypes';

export const DISC_1_2_RLM: Record<string, TopicStudyContent> = {
  '1.2.1': {
    realityParagraphs: [
      'Parece besteira estudar as 4 operações para concurso, né? Pois é aqui que muita gente inteligente **perde questão ganha por conta de vírgula errada ou ordem invertida**. Se você fizer soma antes da multiplicação numa expressão, já era — a alternativa errada com certeza vai estar lá esperando seu clique.',
      'Lembre sempre do **PEMDAS**: primeiro resolve o que está preso em **Parênteses**, depois **Potências/Raízes**, depois **Multiplicação e Divisão (na ordem que aparecer da esquerda pra direita!)** e por último **Soma e Subtração**.',
    ],
    keyPoints: [
      {
        label: 'Ordem Sagrada (PEMDAS)',
        text: '1º Parênteses → 2º Expoentes → 3º Multiplicação/Divisão (**esquerda para direita**) → 4º Soma/Subtração.',
        badge: { text: 'ORDEM EXATA', tone: 'rose' },
      },
      {
        label: 'Contas com Vírgula (Decimais)',
        text: 'Na **soma/subtração**: alinha vírgula embaixo de vírgula. Na **multiplicação**: multiplica normal e no fim soma quantas casas tinha depois da vírgula.',
        badge: { text: 'REGRA BASE', tone: 'sky' },
      },
      {
        label: 'Atalhos Mentais de Divisão',
        text: 'Dividir por **0,5 = multiplicar por 2**. Dividir por **0,25 = multiplicar por 4**. Dividir por **0,1 = multiplicar por 10**!',
        badge: { text: 'ATALHO', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Conferência de Nota Fiscal com Centavos',
        scenario:
          'Chegaram 25 caixas de papel a R$ 34,80 cada. Multiplique 25 × 348 = 8.700; como 34,80 tem 2 casas (ou 34,8 tem 1), volte 1 casa → R$ 870,00. Ou faça: 25 × R$ 35 - 25 × R$ 0,20 = 875 - 5 = **R$ 870,00** em 3 segundos!',
      },
      {
        title: 'Expressão Clássica de Pegadinha',
        scenario:
          'Quanto dá **20 ÷ 2 × 5**? Se fizer 2 × 5 = 10 primeiro e depois 20 ÷ 10 = 2, **ERROU FEIO**! Multiplicação e divisão têm o **mesmo nível**, então faz da esquerda pra direita: 20 ÷ 2 = 10 → 10 × 5 = **50**!',
      },
    ],
    table: {
      title: 'Operações com Decimais & Sinais Sem Erro',
      headers: ['Operação', 'O Que Fazer na Prática', 'Exemplo Rápido'],
      rows: [
        ['**Soma / Subtração**', 'Vírgula debaixo de vírgula; complete vazios com **zero**.', '12,50 − 3,25 = **9,25**'],
        ['**Multiplicação**', 'Esqueça a vírgula, multiplique e devolva o total de casas.', '0,3 × 0,2 → 3×2=6 (2 casas) → **0,06**'],
        ['**Divisão por decimal**', 'Iguale as casas decimais nos dois lados e **corte a vírgula**.', '6 ÷ 0,15 → 600 ÷ 15 = **40**'],
        ['**Regra de Sinais (× e ÷)**', 'Sinais iguais = **(+)** | Sinais diferentes = **(−)**.', '(−4) × (−3) = **+12**'],
      ],
    },
    examTrap:
      '0,3 × 0,2 NÃO dá 0,6! Tem duas casas decimais no total (uma em 0,3 e uma em 0,2), então o resultado é **0,06**. A banca sempre bota 0,6 na letra A para pegar quem está com pressa!',
    deepDive: {
      headline: 'Truques de Cálculo Mental para Ganhar Tempo na Prova',
      points: [
        '**Multiplicar por 5**: divida por 2 e multiplique por 10 (ex.: 48 × 5 = 24 × 10 = 240).',
        '**Multiplicar por 15**: pegue o número e some a metade dele, depois × 10 (ex.: 14 × 15 → 14 + 7 = 21 → 210).',
        '**Resto da divisão**: Dividendo = Divisor × Quociente + Resto (o resto é sempre menor que o divisor!).',
      ],
      extraExample:
        'Numa repartição, 157 processos precisam ser divididos em caixas de 12. 157 ÷ 12 = 13 caixas cheias (156) e **sobra 1** processo — se precisar guardar todos, serão necessárias **14 caixas**!',
      mnemonic: 'Parênteses → Expoentes → Mult/Div (Esq→Dir) → Soma/Sub.',
    },
  },

  '1.2.2': {
    realityParagraphs: [
      'Aproximação e estimativa são a arma secreta do concurseiro esperto. Às vezes a banca mete uma multiplicação nojenta tipo `49,8 × 19,9` e pergunta qual é o valor mais próximo — quem faz a conta exata gasta 2 minutos; quem estima `50 × 20 = 1.000` marca a resposta certa em **4 segundos**.',
      'Já no **arredondamento oficial** (norma ABNT/escolar usada em prova), você olha para o dígito imediatamente à direita de onde quer cortar: se for **5 ou maior**, sobe 1; se for **menor que 5**, mantém igual.',
    ],
    keyPoints: [
      {
        label: 'Regra do Arredondamento',
        text: 'Dígito vizinho **< 5** (0, 1, 2, 3, 4) → corta e mantém. Dígito vizinho **≥ 5** (5, 6, 7, 8, 9) → **sobe +1** no último dígito mantido.',
        badge: { text: 'REGRA PADRÃO', tone: 'sky' },
      },
      {
        label: 'Ordem de Grandeza / Estimativa',
        text: 'Antes de marcar qualquer resposta numérica, estime por cima para ver se faz sentido (evita errar um zero a mais ou a menos!).',
        badge: { text: 'ANTI-CHUTE', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Orçamento de Compra de Mesas na Prefeitura',
        scenario:
          'Você precisa comprar 29 mesas a R$ 498,00 cada. Estimativa rápida: 30 × 500 = **R$ 15.000,00** (como arredondou os dois um tiquinho pra cima, o real é um pouco abaixo de R$ 15 mil: exatamente R$ 14.442). Se a opção tiver R$ 1.442 ou R$ 144.200, já elimina na hora!',
      },
      {
        title: 'Arredondando Taxas de Atendimento',
        scenario:
          'A média de atendimentos deu **43,468**. Para 1 casa decimal → o vizinho é 6 (≥ 5), então vira **43,5**. Para número inteiro → olhando o original 43,468, o primeiro dígito após a vírgula é 4 (< 5), então arredonda para **43**!',
      },
    ],
    table: {
      title: 'Comparando Arredondamento por Casas Decimais',
      headers: ['Número Original', 'Arredondar para Inteiro', 'Arredondar para 2 Casas'],
      rows: [
        ['**18,49**', '**18** (olhou o 4, menor que 5!)', '**18,49**'],
        ['**18,51**', '**19** (olhou o 5, sobe!)', '**18,51**'],
        ['**7,346**', '**7** (olhou o 3)', '**7,35** (olhou o 6, subiu o 4 pra 5)'],
        ['**9,996**', '**10** (olhou o 9)', '**10,00** (o 6 empurra o 99 pra cima!)'],
      ],
    },
    examTrap:
      'Nunca arredonde em etapas! Para arredondar **18,49** para inteiro, NÃO arredonde primeiro para 18,5 e depois para 19. Olhe direto para o dígito logo após a vírgula (**4**): como 4 < 5, o inteiro é **18**!',
    deepDive: {
      headline: 'Comparação de Frações e Decimais Sem Sofrimento',
      points: [
        'Para comparar duas frações (qual é maior: **3/7** ou **4/9**?), faça a **multiplicação cruzada de baixo para cima**: 9×3 = **27** (lado do 3/7) vs. 7×4 = **28** (lado do 4/9) → **4/9 é maior**!',
        'Para comparar decimais (`0,4` vs `0,395`), iguale as casas com zeros: `0,400` vs `0,395` → `0,400` é maior!',
      ],
      extraExample:
        'Qual é maior: 0,8 ou 0,799? Igualando com zeros: **0,800 > 0,799**!',
      mnemonic: 'Vizinho < 5 mantém | Vizinho ≥ 5 sobe +1 | Nunca arredonde em cascata!',
    },
  },

  '1.2.3': {
    realityParagraphs: [
      'O Teorema de Tales tem um nome pomposo, mas é ridículo de fácil: imagina **três ruas paralelas cortadas por duas avenidas tortas**. Os pedaços que ficam entre as ruas mantêm **exatamente a mesma proporção** de um lado e do outro.',
      'Na prova, ele sempre aparece com três retas paralelas (`r // s // t`) e duas retas transversais cheias de números e um `X`. Montou a fração de cima sobre a de baixo dos dois lados e multiplicou cruzado: acabou a questão.',
    ],
    keyPoints: [
      {
        label: 'A Fórmula Única',
        text: 'Se as retas são paralelas: **a / b = c / d** (ou parte total / parte de cima = parte total / parte de cima).',
        badge: { text: 'PROPORÇÃO DIRETA', tone: 'sky' },
      },
      {
        label: 'Regra de Montagem',
        text: 'Mantenha a **mesma ordem** nas duas frações (se na esquerda pôs cima/baixo, na direita TEM que pôr cima/baixo também!).',
        badge: { text: 'NÃO INVERTA', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Divisão de Lotes na Secretaria de Urbanismo',
        scenario:
          'Um quarteirão entre ruas paralelas tem dois lotes com frentes de 12 m e 18 m na Rua A. Na Rua B (dos fundos), o primeiro lote mede 16 m. Quanto mede o segundo? `12 / 18 = 16 / x` → simplifica 12/18 pra 2/3 → `2x = 48` → **x = 24 metros**!',
      },
      {
        title: 'Triângulo Cortado por Reta Paralela à Base',
        scenario:
          'Se um triângulo tem uma reta paralela à base dividindo os lados em pedaços de 4 e 6 de um lado, e 6 e `x` do outro: `4 / 6 = 6 / x` → `4x = 36` → **x = 9**!',
      },
    ],
    table: {
      title: 'Formas Válidas de Montar Tales (Sem Errar a Ordem)',
      headers: ['Montagem', 'Equação', 'Quando Usar'],
      rows: [
        ['**Pedaço 1 / Pedaço 2**', '`a / b = c / d`', 'Quando a questão dá os dois segmentos pequenos de cada lado.'],
        ['**Total / Pedaço 1**', '`(a + b) / a = (c + d) / c`', 'Quando a questão dá o comprimento **TOTAL** de uma das transversais!'],
        ['**Mesma Faixa Paralela**', '`a / c = b / d`', 'Também funciona! Compara esquerda/direita dentro da mesma faixa.'],
      ],
    },
    examTrap:
      'Pegadinha clássica: a banca dá o **comprimento TOTAL** de um dos lados (ex.: 30 cm do topo até embaixo) e os dois pedacinhos do outro lado (4 e 6). Se você montar `4 / 6 = 30 / x`, [[ROSE:ERROU]]! O 30 representa o TODO (`4 + 6 = 10`), então fica `4 / 10 = x / 30`!',
    deepDive: {
      headline: 'Simplifique Antes de Multiplicar Cruzado',
      points: [
        'Se tiver `12 / 18 = 16 / x`, não saia multiplicando `18 × 16`! Simplifique `12/18` dividindo por 6 → vira `2/3`. Aí `2/3 = 16/x` sai até de cabeça (`2` virou `16` × 8, então `3 × 8 = 24`)!',
        'O Teorema de Tales também vale quando as duas retas transversais se cruzam em formato de **X** entre duas paralelas.',
      ],
      extraExample:
        'Se as transversais se cruzam em X formando um pedaço 3 acima e 9 abaixo, e do outro lado 5 acima e `x` abaixo: siga a MESMA reta transversal! `3 / 9 = 5 / x` → `x = 15`.',
      mnemonic: 'Cima/Baixo = Cima/Baixo | Se der o TOTAL, some os dois pedaços do outro lado!',
    },
  },

  '1.2.4': {
    realityParagraphs: [
      'Comprimento da circunferência é literalmente **quanto mede a borda (o perímetro) de um círculo** — tipo esticar uma fita ao redor de uma rotatória ou contar quantos metros anda a roda de uma bicicleta em 1 volta completa.',
      'Só tem uma fórmula para decorar na vida toda: **`C = 2 · π · r`**. Como o diâmetro (`d`) é duas vezes o raio (`2r`), ela também vira **`C = π · d`**. E na prova, quando a banca não diz quanto vale o `π`, geralmente deixa em função de `π` (tipo `12π`) ou manda usar `π = 3,14` (ou `3` em estimativas).',
    ],
    keyPoints: [
      {
        label: 'Fórmula Principal',
        text: '**C = 2 · π · r** (onde **r** é o raio — do centro até a borda).',
        badge: { text: 'FÓRMULA', tone: 'sky' },
      },
      {
        label: 'Raio vs. Diâmetro',
        text: '**Diâmetro (d)** atravessa o círculo inteiro de ponta a ponta → **d = 2 · r**. Se der o diâmetro, **divida por 2** para achar o raio!',
        badge: { text: 'PEGADINHA', tone: 'rose' },
      },
      {
        label: 'Voltas da Roda',
        text: '**Distância total = Número de voltas × C**. Uma volta completa anda exatamente 1 comprimento `C`.',
        badge: { text: 'CAI MUITO', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Isolamento de Praça Circular em Curitiba',
        scenario:
          'A Prefeitura precisa cercar uma fonte circular com **diâmetro de 20 metros** usando fita zebrada (`π = 3,14`). CUIDADO: 20 m é o diâmetro, então **r = 10 m**! `C = 2 × 3,14 × 10 = 62,8 metros` de fita.',
      },
      {
        title: 'Quantas Voltas Dá o Pneu da Viatura?',
        scenario:
          'Um pneu tem raio de `0,5 m` (`π = 3`). Em 1 volta, anda `C = 2 × 3 × 0,5 = 3 metros`. Para percorrer `300 metros`, o pneu dá `300 ÷ 3 = 100 voltas`!',
      },
    ],
    table: {
      title: 'Não Confunda Comprimento (1D) com Área (2D) do Círculo',
      headers: ['O Que Pede', 'Fórmula', 'Unidade', 'Macete para Gravar'],
      rows: [
        ['**Comprimento (Borda/Cerca)**', '`C = 2 · π · r`', 'm, cm, km', 'O **2** fica na **frente** (como "2 vezes").'],
        ['**Área (Piso/Dentro)**', '`A = π · r²`', 'm², cm², km²', 'Área é ao **quadrado** (o 2 sobe pro expoente do `r`!).'],
        ['**Semicírculo (Meia-lua)**', 'Curva = `π · r` (+ diâmetro se fechar)', 'm, cm', 'Metade da circunferência = corta o 2 fora (`π · r`).'],
      ],
    },
    examTrap:
      'A banca te dá o **DIÂMETRO** ("uma praça de 12 metros de diâmetro") e você joga o 12 direto no lugar do `r` na fórmula `2·π·r`! Vai dar o DOBRO da resposta certa (e óbvio que esse dobro estará na alternativa A!).',
    deepDive: {
      headline: 'Conversão de Unidades em Voltas de Roda',
      points: [
        'Se o raio do pneu vier em **centímetros** (ex.: `40 cm`) e a distância da rua vier em **metros** ou **quilômetros**, **converta tudo para metros ou centímetros ANTES de dividir** (`40 cm = 0,40 m`).',
        'Se a questão pedir **arco de 90°** (1/4 de volta), basta calcular `C` e dividir por 4!',
      ],
      extraExample:
        'Um relógio tem ponteiro de minutos com `10 cm` (`π = 3`). Em 15 minutos (1/4 de hora), a ponta anda `1/4` de `2 × 3 × 10 = 60 cm`, ou seja, **15 cm**!',
      mnemonic: 'Comprimento = 2·π·R (o 2 cai pra frente) | Área = π·R² (o 2 sobe pro R).',
    },
  },

  '1.2.5': {
    realityParagraphs: [
      'Cálculo de área é saber **quanto piso, tinta ou grama cabe dentro de um espaço**. O edital citou três figuras específicas: **retângulo, triângulo e círculo** (e às vezes o quadrado, que é só um retângulo com todos os lados iguais!).',
      'Se você souber a área do retângulo (`base × altura`), você já sabe a do triângulo (porque todo triângulo é **metade de um retângulo**: `(base × altura) ÷ 2`). Só não esqueça que no círculo o raio vai ao **quadrado**!',
    ],
    keyPoints: [
      {
        label: 'Retângulo e Quadrado',
        text: 'Retângulo: **A = b · h** (base × altura). Quadrado: **A = L²** (lado × lado).',
        badge: { text: 'BASE × ALTURA', tone: 'sky' },
      },
      {
        label: 'Triângulo',
        text: '**A = (b · h) / 2**. Não esqueça de dividir por 2 no final, senão você calcula um retângulo!',
        badge: { text: 'DIVIDE POR 2', tone: 'amber' },
      },
      {
        label: 'Círculo',
        text: '**A = π · r²**. Eleva o raio ao quadrado **ANTES** de multiplicar pelo π!',
        badge: { text: 'r × r', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Troca de Piso em Sala da Prefeitura',
        scenario:
          'Uma sala de atendimento mede `8 m` de comprimento por `5 m` de largura (`8 × 5 = 40 m²`). Se cada caixa de piso cobre `2 m²`, você precisa pedir `40 ÷ 2 = 20 caixas`.',
      },
      {
        title: 'Área Sombreada (Figura Recortada)',
        scenario:
          'Muito clássico: um jardim retangular de `10 m × 6 m` (`60 m²`) tem um canteiro triangular no meio de base `4 m` e altura `3 m` (`4×3÷2 = 6 m²`). A área gramada ao redor é **Área Grande − Área Pequena** = `60 − 6 = 54 m²`!',
      },
    ],
    table: {
      title: 'Fórmulas de Área & Perímetro Lado a Lado',
      headers: ['Figura', 'Área (Superfície Interna)', 'Perímetro (Contorno/Cerca)', 'Erro Mais Comum'],
      rows: [
        ['**Retângulo**', '`b · h`', '`2b + 2h` (soma dos 4 lados)', 'Confundir área com perímetro na hora da pergunta.'],
        ['**Quadrado**', '`L²`', '`4 · L`', 'Achar que se o lado dobra, a área dobra (**ela quadruplica**!).'],
        ['**Triângulo**', '`(b · h) / 2`', 'Soma dos 3 lados', 'Esquecer de **dividir por 2**!'],
        ['**Círculo**', '`π · r²`', '`2 · π · r`', 'Usar diâmetro no lugar de `r`, ou fazer `2 × r` em vez de `r²`.'],
      ],
    },
    examTrap:
      'Pegadinha geométrica clássica: "Se dobrarmos o lado de um quadrado (ou o raio de um círculo), a área dobra?" [[ROSE:NÃO!]] Como a fórmula é ao quadrado, se você multiplica o lado por **2**, a área multiplica por **2² = 4 vezes**!',
    deepDive: {
      headline: 'Triângulo Equilátero e Trapézio (Caso Apareçam)',
      points: [
        '**Triângulo Retângulo**: os dois catetos (lados que formam o ângulo de 90°) já são a base e a altura! Não precisa da hipotenusa.',
        '**Trapézio** (às vezes aparece como retângulo + triângulo): `A = [(Base maior + Base menor) × altura] ÷ 2`.',
        'Se precisar da **diagonal do quadrado/retângulo**, use Pitágoras: `a² + b² = c²` (triângulo 3, 4, 5 cai sempre!).',
      ],
      extraExample:
        'Um triângulo retângulo tem lados 6, 8 e 10. Qual a área? Os menores são os catetos (6 e 8): `(6 × 8) ÷ 2 = 24`! O 10 é a hipotenusa (só atrapalha!).',
      mnemonic: 'Dobrou o lado? Área ×4 | Triplicou o lado? Área ×9 | Triângulo sempre ÷ 2.',
    },
  },

  '1.2.6': {
    realityParagraphs: [
      'A banca adora misturar **metros** com **centímetros** ou **quilômetros quadrados** com **metros quadrados** numa mesma questão. Em medidas normais (comprimento), cada degrau da escada multiplica ou divide por **10**. Mas em medidas de **superfície (ao quadrado: m², cm²)**, como tem dois lados multiplicados, cada degrau pula **100** (duas casas decimais)!',
      'E tem mais um queridinho de prefeitura/área rural: o **hectare (ha)**. Um hectare é exatamente um quadrado de `100 m × 100 m`, ou seja, **`10.000 m²`**.',
    ],
    keyPoints: [
      {
        label: 'Escada do Quadrado (×100 / ÷100)',
        text: '`km² → hm² → dam² → m² → dm² → cm² → mm²`. Cada passo para a direita anda **2 casas decimais** (×100); para a esquerda volta **2 casas** (÷100).',
        badge: { text: '2 CASAS POR DEGRAU', tone: 'rose' },
      },
      {
        label: '1 m² em cm²',
        text: '`1 m = 100 cm`, logo `1 m² = 100 × 100 = 10.000 cm²` (**4 zeros**, não 2!).',
        badge: { text: 'DESPENCA', tone: 'amber' },
      },
      {
        label: 'Hectare (ha)',
        text: '`1 ha = 1 hm² = 10.000 m²`. E `1 km² = 100 hectares` (1.000.000 m²).',
        badge: { text: '10.000 m²', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Quantos Azulejos Cabem na Parede do Banheiro?',
        scenario:
          'A parede tem `6 m²` e cada azulejo mede `20 cm × 20 cm = 400 cm²`. Passe tudo para `cm²` antes de dividir: `6 m² = 6 × 10.000 = 60.000 cm²`. Agora divida: `60.000 ÷ 400 = 150 azulejos`!',
      },
      {
        title: 'Terreno de Parque Municipal em Hectares',
        scenario:
          'Um novo parque em Curitiba tem `3,5 hectares`. Em `m²`: `3,5 × 10.000 = 35.000 m²` (o equivalente a cerca de 3,5 campos de futebol!).',
      },
    ],
    table: {
      title: 'Conversão Direta: Linear vs. Superfície (Área)',
      headers: ['Conversão', 'Medida Normal (1D)', 'Medida de Área (2D — Dobro de Zeros!)'],
      rows: [
        ['**m → cm** (2 degraus)', '1 m = **100 cm** (×100)', '1 m² = **10.000 cm²** (×10.000)'],
        ['**km → m** (3 degraus)', '1 km = **1.000 m** (×1.000)', '1 km² = **1.000.000 m²** (×1.000.000)'],
        ['**cm → mm** (1 degrau)', '1 cm = **10 mm** (×10)', '1 cm² = **100 mm²** (×100)'],
        ['**ha → m²**', 'Não existe linear', '1 ha = **10.000 m²** (um quadrado de 100m×100m)'],
      ],
    },
    examTrap:
      'Se a questão falar que a sala tem `12 m²` e cada lajota tem `50 cm × 50 cm` (`2.500 cm²`), quem esquecer os 4 zeros vai fazer `1.200 ÷ 2.500` e dar tudo errado! Lembre: `m² → cm²` multiplica por **10.000** (`120.000 ÷ 2.500 = 48 lajotas`)!',
    deepDive: {
      headline: 'O Macete da Escadinha no Rascunho da Prova',
      points: [
        'Escreva no canto da folha: **`K H D M D C M`** ("Kagando Hoje De Manhã Deu Câimbra Muito").',
        'Se tiver expoente `²`, **cada pulinho na letra conta 2 casas decimais**. Se tiver expoente `³` (volume), conta 3 casas!',
        'Para não errar com `m²` em `cm²`, transforme as dimensões ANTES de multiplicar (`2 m = 200 cm`, `3 m = 300 cm` → `200 × 300 = 60.000 cm²`).',
      ],
      extraExample:
        'Converter `0,05 km²` para `m²`: de `km²` pra `m²` são 3 degraus × 2 casas = **6 casas pra direita** → `0,05 × 1.000.000 = 50.000 m²`.',
      mnemonic: 'Sem expoente = 1 casa por degrau | Ao quadrado (²) = 2 casas por degrau | 1 ha = 10 mil m².',
    },
  },

  '1.2.7': {
    realityParagraphs: [
      'Questão de direção e orientação espacial é **ponto dado na prova**, desde que você NÃO tente fazer de cabeça! Pegue a caneta e **desenhe as setas no rascunho** passo a passo.',
      'A única pegadinha aqui é a diferença entre **direção absoluta** (Norte, Sul, Leste, Oeste — nunca mudam no mapa) e **direção relativa** ("vire à sua direita" — depende para qual lado o bonequinho está olhando naquele segundo!).',
    ],
    keyPoints: [
      {
        label: 'Rosa dos Ventos (Mapa)',
        text: '**Norte** = cima | **Sul** = baixo | **Leste** = direita | **Oeste** = esquerda.',
        badge: { text: 'FIXO NO MAPA', tone: 'sky' },
      },
      {
        label: 'Giro Relativo (Esquerda / Direita)',
        text: 'Se você está indo para o **SUL (para baixo)**, a SUA direita é o **OESTE (esquerda do papel)**! Vire o caderno na hora da prova se precisar!',
        badge: { text: 'CUIDADO AO DESCER', tone: 'rose' },
      },
      {
        label: 'Deslocamento Resultante (Pitágoras)',
        text: 'Andou 30 m pro Norte e 40 m pro Leste? A distância em linha reta do início ao fim forma um triângulo retângulo: `√(30² + 40²) = 50 m`!',
        badge: { text: 'LINHA RETA', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Trajeto do Mensageiro Entre Secretarias',
        scenario:
          'Um agente sai da Prefeitura indo 3 quadras ao **Norte** (↑), vira à **direita** e anda 4 quadras (→ Leste), depois vira à **direita** de novo e anda 3 quadras (↓ Sul). Como andou 3 pra cima e 3 pra baixo, está exatamente a **4 quadras a Leste** do ponto inicial.',
      },
      {
        title: 'Giro de 90° e 180°',
        scenario:
          'Olhando para o Leste (→), girar **90° no sentido horário** te faz olhar para o **Sul (↓)**. Girar **180°** te vira completamente de costas → **Oeste (←)**.',
      },
    ],
    table: {
      title: 'Tabela de Giro Relativo (Para Onde Olho Agora?)',
      headers: ['Estou Olhando Para...', 'Se Virar 90° à DIREITA (Horário)', 'Se Virar 90° à ESQUERDA (Anti-horário)'],
      rows: [
        ['**Norte (↑)**', 'Leste (→)', 'Oeste (←)'],
        ['**Leste (→)**', 'Sul (↓)', 'Norte (↑)'],
        ['**Sul (↓)**', '**Oeste (←)** [[AMBER:INVERTE NO PAPEL]]', '**Leste (→)**'],
        ['**Oeste (←)**', 'Norte (↑)', 'Sul (↓)'],
      ],
    },
    examTrap:
      'Quando o personagem está caminhando para o **SUL** (para baixo na folha) e o texto diz **"ele virou à sua direita"**, o cérebro no automático puxa pra direita do papel (Leste) e ERRA! Gire a folha de prova de cabeça pra baixo — ninguém vai te julgar e você não perde o ponto!',
    deepDive: {
      headline: 'Subconjuntos (Nordeste, Sudeste, Noroeste, Sudoeste) & Sombra',
      points: [
        '**Entre Norte e Leste** = Nordeste (NE). **Entre Sul e Leste** = Sudeste (SE). **Entre Sul e Oeste** = Sudoeste (SO). **Entre Norte e Oeste** = Noroeste (NO).',
        'Em problemas com **sentido horário vs. anti-horário**: imagine os ponteiros de um relógio analógico (12 → 3 → 6 → 9 é sentido horário = virar à direita!).',
      ],
      extraExample:
        'Se o sol nasce no Leste (manhã), sua sombra aponta para o Oeste. Se você ficar de frente para o Norte de manhã, a sua direita está para o Leste (sol) e sua sombra vai para a esquerda (Oeste).',
      mnemonic: 'NO-L-E-S-O (Norte cima, Leste direita, Sul baixo, Oeste esquerda). Olhando pro SUL, direita e esquerda invertem no papel!',
    },
  },

  '1.2.8': {
    realityParagraphs: [
      'Estatística básica cai em TODA prova administrativa porque o agente público lida com relatórios de atendimento, filas e notas. São só **3 medidas de tendência central** (Média, Moda e Mediana) — fáceis de calcular, mas com uma armadilha gigante na Mediana.',
      'A regra que você tem que tatuar na testa: **NUNCA calcule Mediana antes de colocar os números em ordem crescente (ou decrescente)**! A banca SEMPRE te entrega os números bagunçados de propósito.',
    ],
    keyPoints: [
      {
        label: 'Média Aritmética',
        text: '**Soma tudo e divide pela quantidade** de elementos. (Na média ponderada, multiplica cada valor pelo seu peso antes de somar, e divide pela **soma dos pesos**!).',
        badge: { text: 'SOMA ÷ QTD', tone: 'sky' },
      },
      {
        label: 'Moda (Mo)',
        text: 'É o valor que está **"na moda"**, ou seja, o que **mais se repete**. Pode não existir moda (amodal) ou ter duas modas (bimodal).',
        badge: { text: 'MAIS FREQUENTE', tone: 'emerald' },
      },
      {
        label: 'Mediana (Md)',
        text: '**1º: ORDENE!** 2º: Pegue o **elemento do meio**. Se a quantidade for **PAR**, faça a **média dos 2 do meio**.',
        badge: { text: 'ORDENE ANTES!', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Senhas Atendidas na Semana',
        scenario:
          'De segunda a sexta foram atendidas: `40, 25, 40, 35, 60` senhas. **Moda** = `40` (apareceu 2x). **Média** = `(40+25+40+35+60)/5 = 200/5 = 40`. **Mediana** → ordenando: `25, 35, **40**, 40, 60` → o do meio é **`40`**!',
      },
      {
        title: 'Mediana com Quantidade Par de Dados',
        scenario:
          'Idades de 4 requerentes ordenadas: `20, **24, 30**, 50`. Como há 4 números (par), não tem um único no meio — pega os dois centrais (`24` e `30`) e tira a média: `(24 + 30) ÷ 2 = **27**`!',
      },
    ],
    table: {
      title: 'Resumo Visual: Média vs. Moda vs. Mediana',
      headers: ['Medida', 'Como Calcular', 'Sofre com Valor Muito Alto/Baixo (Outlier)?', 'Exemplo: [2, 2, 5, 9, 82]'],
      rows: [
        ['**Média**', 'Soma tudo ÷ quantidade', '[[ROSE:SIM, PUXA MUITO]]', '`(2+2+5+9+82) ÷ 5 = **20**`'],
        ['**Moda**', 'O que aparece mais vezes', 'Não sofre', '**2** (aparece 2 vezes)'],
        ['**Mediana**', 'Ordena e pega o centro', 'Não sofre (é robusta!)', '**5** (3º termo da lista ordenada)'],
      ],
    },
    examTrap:
      'Se a questão pedir a mediana de `[10, 50, 20, 40, 30]` e você pegar direto o `20` porque está no meio da lista bagunçada, caiu feito pato! Ordenando: `[10, 20, **30**, 40, 50]` → a mediana é **30**!',
    deepDive: {
      headline: 'Truque da Média em Problemas Inversos (Soma Total)',
      points: [
        '**Sempre converta Média em Soma Total**: se a média de 5 servidores é 30 anos, a **soma das idades** deles é `5 × 30 = 150 anos`! Chegou mais um servidor e a média foi pra 32? Nova soma = `6 × 32 = 192`. Logo, o novo servidor tem `192 - 150 = 42 anos`!',
        'Em **tabela de frequência** (ex.: 10 pessoas tiraram nota 8; 5 tiraram nota 6), isso é Média Ponderada: `(10×8 + 5×6) ÷ (10 + 5) = 110 ÷ 15`.',
      ],
      extraExample:
        'A média salarial de 4 agentes é R$ 3.000 (soma = R$ 12.000). Entra um supervisor ganhando R$ 5.000 → nova soma = R$ 17.000 ÷ 5 = **R$ 3.400**.',
      mnemonic: 'Média = soma e divide | Moda = mais repetido | Mediana = ORDENA + meio!',
    },
  },

  '1.2.9': {
    realityParagraphs: [
      'Gráficos e tabelas são basicamente interpretação de texto disfarçada de número. Antes de fazer qualquer conta, olhe **três lugares obrigatórios**: o **título**, a **legenda** e a **unidade do eixo** (ex.: está em "milhares de reais", "porcentagem" ou "unidades"?).',
      'Um erro clássico de quem corre é confundir **aumento absoluto** (subiu 10 unidades) com **variação percentual** (subiu 50% em relação ao que era antes).',
    ],
    keyPoints: [
      {
        label: 'Fórmula da Variação Percentual',
        text: '**[(Valor Final − Valor Inicial) ÷ Valor Inicial] × 100%**. Sempre divida pelo valor **INICIAL** (o ponto de partida!), nunca pelo final!',
        badge: { text: 'DIVIDE PELO INICIAL', tone: 'rose' },
      },
      {
        label: 'Gráfico de Setores (Pizza)',
        text: 'A pizza inteira vale **100%** e **360°**. Cada **10% = 36°**; **25% = 90°** (1/4); **50% = 180°** (metade).',
        badge: { text: '360° = 100%', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Gráfico de Protocolos Mensais',
        scenario:
          'Em janeiro foram `200` protocolos; em fevereiro subiu para `250`. Aumento absoluto = `+50`. Variação percentual = `50 ÷ 200 = 0,25 = **+25%**`. Se depois em março cair de `250` de volta para `200`, a queda NÃO é 25%: `50 ÷ 250 = **-20%**`!',
      },
      {
        title: 'Ângulo na Pizza de Orçamento',
        scenario:
          'Num gráfico de pizza, Educação levou **108°** do círculo. Qual a porcentagem? Regra de 3 com 360°: `108 ÷ 360 = 0,30 = **30%**`!',
      },
    ],
    table: {
      title: 'Tipos de Gráfico e o Que Cada Um Mostra Melhor',
      headers: ['Tipo de Gráfico', 'Para Que Serve', 'Cuidado na Prova'],
      rows: [
        ['**Barras / Colunas**', 'Comparar quantidades entre categorias ou meses.', 'Olhe se o eixo Y começa no zero (às vezes começa no 50 para exagerar visualmente!).'],
        ['**Linhas**', 'Mostrar **evolução/tendência ao longo do tempo**.', 'Subida íngreme = crescimento rápido; linha horizontal = estagnação (zero variação!).'],
        ['**Setores (Pizza)**', 'Mostrar **proporção/fatia do todo (100%)**.', 'Se der em graus (°), divida por 360° para achar a porcentagem.'],
      ],
    },
    examTrap:
      'Subir de 100 para 150 é aumento de **50%**, mas cair de 150 para 100 é queda de **33,3%** (`50 ÷ 150`)! O divisor é SEMPRE de onde você saiu (**Valor Inicial**).',
    deepDive: {
      headline: 'Lendo Tabelas Cruzadas Rapidamente',
      points: [
        'Em tabelas de dupla entrada (linhas = secretarias, colunas = meses), risque com a caneta a linha e a coluna pedidas para não somar a linha errada.',
        'Quando a legenda diz **"valores em milhares"**, `12,4` significa `12.400`!',
      ],
      extraExample:
        'Se um gráfico de pizza mostra Saúde = 90°, isso equivale a `90 / 360 = 1/4 = 25%` do orçamento.',
      mnemonic: 'Variação % = Diferença ÷ ONDE COMEÇOU | Pizza inteira = 360° = 100%.',
    },
  },

  '1.2.10': {
    realityParagraphs: [
      'Sequências de números, letras e figuras não têm fórmula mágica única — é **jogo de detetive**. Você bate o olho e testa os suspeitos mais comuns em ordem de probabilidade: primeiro vê quanto está somando/diminuindo de um termo pro outro; se não bater, vê se está multiplicando ou alternando!',
      'Dica salva-vidas: quando a sequência parece maluca porque **sobe e desce** (`3, 20, 6, 18, 9, 16...`), quase sempre são **duas sequências misturadas** (os termos ímpares formam uma, os pares formam outra).',
    ],
    keyPoints: [
      {
        label: 'PA e PA de 2ª Ordem',
        text: 'Calcule a **diferença** entre vizinhos (`+3, +3, +3...` ou crescente `+2, +4, +6, +8...`). Isso resolve 60% das sequências numéricas!',
        badge: { text: 'TESTE Nº 1', tone: 'emerald' },
      },
      {
        label: 'Sequências Intercaladas',
        text: 'Números sobem e descem sem lógica direta? Pule de **2 em 2** (1º → 3º → 5º e 2º → 4º → 6º).',
        badge: { text: 'PULA 1', tone: 'sky' },
      },
      {
        label: 'Letras do Alfabeto (26 Letras)',
        text: 'Escreva o alfabeto inteiro numerado (`A=1` até `Z=26`) no cantinho da prova! Note que hoje K, W e Y entram no alfabeto oficial de **26 letras** (salvo se a banca avisar "23 letras").',
        badge: { text: '26 LETRAS', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Sequência Numérica Crescente Acelerada',
        scenario:
          '`2, 5, 10, 17, 26, ?` Veja as diferenças: `+3`, `+5`, `+7`, `+9`... O próximo salto é `+11`! Logo, `26 + 11 = **37**` (ou perceba que é `n² + 1`: `1²+1, 2²+1, 3²+1, 4²+1, 5²+1, 6²+1 = 37`).',
      },
      {
        title: 'Sequência de Figuras Girando',
        scenario:
          'Um quadradinho com uma bolinha preta no canto superior esquerdo gira **90° no sentido horário** a cada quadro: sup. esq. → sup. dir. → inf. dir. → inf. esq. → volta pro início a cada 4 passos!',
      },
    ],
    table: {
      title: 'Os 5 Padrões Mais Repetidos pelas Bancas',
      headers: ['Padrão', 'Exemplo', 'Como Matar'],
      rows: [
        ['**Diferença Fixa (PA)**', '`4, 9, 14, 19, ...`', 'Sempre soma `+5` → próximo é **24**.'],
        ['**Salto Crescente**', '`1, 2, 4, 7, 11, ...`', 'Soma `+1, +2, +3, +4` → próximo `+5 = **16**`.'],
        ['**Fibonacci (Soma dos 2 anteriores)**', '`1, 1, 2, 3, 5, 8, ...`', '`5 + 8 = **13**`.'],
        ['**Alternada (2 filas misturadas)**', '`10, 100, 12, 95, 14, ...`', 'Ímpares `+2` (10,12,14); Pares `-5` (100,95,**90**).'],
        ['**Quadrados / Cubos**', '`1, 4, 9, 16, 25, ...`', '`1², 2², 3², 4², 5²` → próximo `6² = **36**`.'],
      ],
    },
    examTrap:
      'Em sequências de letras com nomes ou palavras (`J, F, M, A, M, J...` ou `D, S, T, Q, Q...`), não tente achar distância no alfabeto — às vezes são as iniciais dos **meses** (Jan, Fev, Mar, Abr, Mai, Jun → **J**ulho) ou **dias da semana** (Dom, Seg, Ter, Qua, Qui → **S**exta)!',
    deepDive: {
      headline: 'Checklist Quando Travar Numa Sequência',
      points: [
        '1º: Tire a diferença entre os termos vizinhos.',
        '2º: Veja se um termo é o dobro/triplo do anterior (`×2 + 1`, `×2 − 1`).',
        '3º: Verifique se é alternada (pulando 1 termo).',
        '4º: Cheque quadrados perfeitos (`1, 4, 9, 16, 25, 36, 49, 64, 81, 100`) ou iniciais de palavras conhecidas.',
      ],
      extraExample:
        '`3, 7, 15, 31, ?` → cada termo é `(anterior × 2) + 1`: `31 × 2 + 1 = 63` (ou diferenças `+4, +8, +16, +32`!).',
      mnemonic: 'Diferença → Multiplicação → Pular 1 → Fibonacci → Iniciais.',
    },
  },

  '1.2.11': {
    realityParagraphs: [
      'Sequência lógica de **ciclos repetitivos** cai em quase todo concurso porque é impossível resolver contando no dedo quando a banca pede o termo de posição **2.026**! Ex.: "Uma sequência `C-U-R-I-T-I-B-A` se repete infinitamente. Qual é a 500ª letra?"',
      'O segredo é ridículo de simples: **DIVIDE pelo tamanho do ciclo e olha SÓ PARA O RESTO da divisão**! Se sobrou resto 1, é o 1º item. Se sobrou resto 2, é o 2º item. E se a divisão deu **EXATA (RESTO ZERO)**, é o **ÚLTIMO** item do ciclo!',
    ],
    keyPoints: [
      {
        label: 'Fórmula do Ciclo (Resto da Divisão)',
        text: 'Posição pedida ÷ Tamanho do bloco. O **RESTO** dá o item exato! **Resto 0 = último elemento do ciclo**.',
        badge: { text: 'RESTO MANDA', tone: 'emerald' },
      },
      {
        label: 'Calendário (Dias da Semana)',
        text: 'A semana tem ciclo de **7 dias**. Para saber que dia será daqui a `N` dias, divida `N ÷ 7` e ande apenas o resto!',
        badge: { text: 'CICLO = 7', tone: 'sky' },
      },
      {
        label: 'Ano Bissexto (366 dias)',
        text: 'Ano normal avança **+1 dia** da semana na mesma data do ano seguinte (`365 ÷ 7` dá resto **1**). Se passar por **29 de fevereiro**, avança **+2 dias**!',
        badge: { text: 'CUIDADO', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Escala de Plantão na Guarda/Atendimento',
        scenario:
          'A palavra `CURITIBA` tem **8 letras**. Qual é a **2026ª letra**? Divida `2026 ÷ 8 = 253` e **resto = 2**. A 2ª letra de C-U-R-I-T-I-B-A é **`U`**! E se o resto fosse 0 (como na 2024ª)? Seria a última letra: **`A`**!',
      },
      {
        title: 'Prazo de 100 Dias em Processo Administrativo',
        scenario:
          'Hoje é **quarta-feira**. Daqui a **100 dias**, qual dia da semana será? `100 ÷ 7 = 14` semanas e **resto = 2**. Ande 2 dias após quarta: quinta (1), **sexta-feira (2)**!',
      },
    ],
    table: {
      title: 'Tabela do Resto na Divisão de Ciclos',
      headers: ['Resultado da Divisão (Posição ÷ Tamanho)', 'Qual Elemento Escolher?', 'Exemplo (Ciclo de 4: A, B, C, D)'],
      rows: [
        ['**Resto 1**', '1º elemento', 'Posição 13 (`13÷4=3, resto 1`) → **A**'],
        ['**Resto 2**', '2º elemento', 'Posição 14 (`14÷4=3, resto 2`) → **B**'],
        ['**Resto 3**', '3º elemento', 'Posição 15 (`15÷4=3, resto 3`) → **C**'],
        ['**Resto 0 (Divisão Exata!)**', '**ÚLTIMO elemento do ciclo!** [[ROSE:NÃO É O 1º!]]', 'Posição 16 (`16÷4=4, resto 0`) → **D**'],
      ],
    },
    examTrap:
      'O erro clássico mundial é achar que **Resto 0** volta pro 1º elemento! Não! Se o ciclo é `[A, B, C, D]` e você quer o 4º termo (`4 ÷ 4` dá resto **0**), o 4º termo é **D (o último)**, não A!',
    deepDive: {
      headline: 'Meses de 30, 31 e Fevereiro em Questões de Data',
      points: [
        'Regra dos ossinhos da mão: meses com **31 dias** = Jan, Mar, Mai, Jul, Ago, Out, Dez. Meses com **30 dias** = Abr, Jun, Set, Nov. Fev = 28 (ou 29 em bissexto — ano divisível por 4).',
        'Em ciclos que começam com um **termo introdutório que NÃO se repete**, subtraia esse termo antes de dividir!',
      ],
      extraExample:
        '2024 foi bissexto (`2024 ÷ 4 = 506` exato). 2026 NÃO é bissexto (`2026 ÷ 4` sobra 2). Então de 13/12/2025 até 13/12/2026 passam 365 dias (+1 dia na semana).',
      mnemonic: 'Divida pelo tamanho do ciclo → Resto 1 = 1º | Resto 0 = ÚLTIMO!',
    },
  },

  '1.2.12': {
    realityParagraphs: [
      'Probabilidade parece difícil só pelo nome, mas na essência é uma fração infantil: **o que eu quero que aconteça ÷ tudo que pode acontecer**. A parte de cima chama **Evento** (casos favoráveis) e a parte de baixo chama **Espaço Amostral (Ω)** (todos os resultados possíveis).',
      'Toda probabilidade fica SEMPRE presa entre **0 (0% = evento impossível)** e **1 (100% = evento certo)**. Se sua conta der `1,4` ou `120%`, pare na hora porque você errou alguma coisa!',
    ],
    keyPoints: [
      {
        label: 'Fórmula Mãe',
        text: '**P(A) = Casos Favoráveis / Total de Casos Possíveis**. Simplifique a fração ou multiplique por 100 para achar em `%`.',
        badge: { text: 'QUERO ÷ TUDO', tone: 'emerald' },
      },
      {
        label: 'Evento Certo vs. Impossível',
        text: 'Certo = **1 (100%)** (tirar número ≤ 6 num dado comum). Impossível = **0 (0%)** (tirar 7 num dado comum de 6 lados).',
        badge: { text: '0 ≤ P ≤ 1', tone: 'sky' },
      },
      {
        label: 'Probabilidade Complementar',
        text: '**P(não acontecer) = 1 − P(acontecer)**. Às vezes calcular o oposto é 10 vezes mais rápido!',
        badge: { text: 'ATALHO NINJA', tone: 'amber' },
      },
    ],
    practicalExamples: [
      {
        title: 'Sorteio de Processos para Auditoria',
        scenario:
          'Numa caixa há **20 processos**: 6 com pendência e 14 completos. Sorteando 1 processo ao acaso, qual a probabilidade de ter pendência? `6 / 20 = 3 / 10 = 0,30 = **30%**`.',
      },
      {
        title: 'Dois Dados Lançados Juntos',
        scenario:
          'Em 2 dados comuns, o espaço amostral tem `6 × 6 = **36**` pares possíveis! Qual a chance de dar soma 7? `(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)` = 6 casos. Logo: `6 / 36 = **1/6**`!',
      },
    ],
    table: {
      title: 'Espaços Amostrais Mais Cobrados em Prova',
      headers: ['Experimento Aleatório', 'Total de Casos (Ω)', 'Dica Rápida'],
      rows: [
        ['**1 Moeda**', '**2** (Cara, Coroa)', '50% cada.'],
        ['**2 Moedas**', '**4** (`CC, CK, KC, KK`)', 'Não é 3! `(C,K)` e `(K,C)` são casos distintos!'],
        ['**1 Dado (6 faces)**', '**6** (`1, 2, 3, 4, 5, 6`)', 'Pares = 3/6 (50%); Primos (`2,3,5`) = 3/6 (**1 não é primo!**).'],
        ['**Baralho comum**', '**52 cartas** (4 naipes × 13)', '13 de cada naipe; 26 vermelhas, 26 pretas; 4 Ases.'],
      ],
    },
    examTrap:
      'Pegadinha mortal do dado: o número **1 NÃO É PRIMO**! Os números primos num dado de 6 faces são apenas **2, 3 e 5** (3 em 6 = 50%), e NÃO 4 em 6!',
    deepDive: {
      headline: 'Quando Usar a Probabilidade Complementar (1 − P)',
      points: [
        'Sempre que o enunciado disser **"pelo menos um..."** (ex.: "jogando 3 moedas, qual a chance de sair **pelo menos uma** cara?"), calcule a chance de **NENHUMA** sair (`KKK = 1/2 × 1/2 × 1/2 = 1/8`) e subtraia de 1: `1 - 1/8 = **7/8**`!',
        'Em 2 dados, atenção para NÃO contar `(3,4)` e `(4,3)` como a mesma coisa: são dois dados distintos, então contam 2 vezes (só pares iguais como `(3,3)` contam 1 vez).',
      ],
      extraExample:
        'Chance de chover amanhã é 35%. Chance de NÃO chover = `100% − 35% = 65%`.',
      mnemonic: 'P = O que eu quero ÷ Tudo que pode dar | "Pelo menos 1" = 1 − "Nenhum"!',
    },
  },

  '1.2.13': {
    realityParagraphs: [
      'Quando você faz **duas ou mais retiradas seguidas** (pegar duas bolas, sortear dois servidores), a pergunta mais importante que você tem que fazer antes de montar a conta é: **"Eu devolvi o primeiro antes de pegar o segundo?"**',
      'Se devolveu (**COM reposição**), os eventos são **INDEPENDENTES**: o total continua igual na segunda vez. Se NÃO devolveu (**SEM reposição**), os eventos são **DEPENDENTES**: o denominador (total) diminuiu em 1 na segunda retirada!',
    ],
    keyPoints: [
      {
        label: 'Independentes (Com Reposição)',
        text: 'Um evento **não afeta** a chance do próximo (lançar 2 dados, girar roleta 2x, sortear devolvendo o papel). **Multiplica normalmente** mantendo o mesmo denominador.',
        badge: { text: 'MESMO TOTAL', tone: 'sky' },
      },
      {
        label: 'Dependentes (Sem Reposição)',
        text: 'Tirou e **não devolveu**: na 2ª retirada o total cai `-1` (e se for do mesmo tipo, o numerador também cai `-1`!).',
        badge: { text: 'TOTAL CAI -1', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Sorteio de 2 Agentes para Comissão (Sem Reposição)',
        scenario:
          'Num setor há **4 mulheres e 6 homens** (10 pessoas). Sorteando 2 pessoas sem repetir: qual a chance de ambas serem mulheres? 1ª escolha: `4 / 10`. Como uma já foi escolhida, sobraram 3 mulheres em 9 pessoas → 2ª escolha: `3 / 9`. Multiplica: `(4/10) × (3/9) = 12/90 = **2/15**`!',
      },
      {
        title: 'Dois Lançamentos de Dado (Independentes)',
        scenario:
          'Jogar 1 dado duas vezes e sair `6` nas duas: o dado não tem memória! `1/6 × 1/6 = **1/36**`.',
      },
    ],
    table: {
      title: 'Com Reposição vs. Sem Reposição (Urna: 3 Azuis e 7 Pretas = 10)',
      headers: ['Situação', '1ª Retirada (Azul)', '2ª Retirada (Azul)', 'Resultado Final'],
      rows: [
        ['**COM reposição** (Independentes)', '`3 / 10`', '`3 / 10` (devolveu!)', '`9 / 100` (**9%**)'],
        ['**SEM reposição** (Dependentes)', '`3 / 10`', '`2 / 9` (saiu 1 azul do total!)', '`6 / 90 = 1 / 15` (**6,67%**)'],
        ['**SEM reposição** (1ª Azul, 2ª Preta)', '`3 / 10`', '`7 / 9` (total caiu pra 9, mas pretas ainda são 7!)', '`21 / 90 = 7 / 30`'],
      ],
    },
    examTrap:
      'Se a questão disser "escolhem-se **simultaneamente** dois processos da pilha", pegar 2 juntos ao mesmo tempo é matematicamente IDÊNTICO a pegar 1 e depois outro **SEM reposição**! Nunca mantenha o denominador igual quando escolher 2 itens diferentes!',
    deepDive: {
      headline: 'E Quando Pedir "Um de Cada" em Ordem Qualquer?',
      points: [
        'Se pedir "sortear 2 servidores sendo **um homem e uma mulher** (sem dizer quem vem primeiro)", existem **2 ordens**: `(H depois M)` OU `(M depois H)`! Calcule um caso e **multiplique por 2** (pois a chance das duas ordens é igual!).',
        'No exemplo de 4M e 6H: `(4/10 × 6/9) × 2 = 48/90 = 8/15`.',
      ],
      extraExample:
        'Numa caixa com 5 boletos pagos e 3 atrasados, pegar 2 atrasados seguidos sem repor: `(3/8) × (2/7) = 6/56 = 3/28`.',
      mnemonic: 'Devolveu = Independente (total igual) | Ficou na mão = Dependente (total − 1).',
    },
  },

  '1.2.14': {
    realityParagraphs: [
      'A banca coloca duas palavrinhas mágicas no enunciado para testar se você sabe o que fazer com as probabilidades: **"OU"** e **"E"**. Regra de ouro para gravar em 2 segundos: **"OU" você SOMA; "E" você MULTIPLICA**.',
      'Só tem um detalhe malandro na **União (OU)**: se dois eventos puderem acontecer **juntos ao mesmo tempo** (ex.: carta ser "Dama" **OU** ser "de Copas" — existe a Dama de Copas!), você tem que **subtrair a interseção** uma vez para não contar o mesmo elemento dobrado!',
    ],
    keyPoints: [
      {
        label: 'União: A OU B (Soma!)',
        text: '**P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**. Se for impossível acontecerem juntos (mutuamente exclusivos), a interseção é **zero**!',
        badge: { text: 'OU = SOMA', tone: 'emerald' },
      },
      {
        label: 'Interseção: A E B (Multiplica!)',
        text: '**P(A ∩ B) = P(A) × P(B | A)**. Acontecem os dois juntos ou em sequência.',
        badge: { text: 'E = MULTIPLICA', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Sorteio de Pasta por Tipo de Erro (União com Interseção)',
        scenario:
          'De 100 processos: 30 têm erro de data (`A`), 20 têm falta de assinatura (`B`), e **5 têm os dois erros** (`A ∩ B`). Qual a chance de pegar um processo com erro de data **OU** falta de assinatura? `30/100 + 20/100 − 5/100 = **45/100 (45%)**`!',
      },
      {
        title: 'Eventos Mutuamente Exclusivos (Interseção Zero)',
        scenario:
          'Num dado comum, qual a chance de sair `2` **OU** número `ímpar` (`1, 3, 5`)? Não existe número que seja `2` e `ímpar` ao mesmo tempo! Só soma direto: `1/6 + 3/6 = 4/6 = **2/3**`.',
      },
    ],
    table: {
      title: 'Conectivos na Probabilidade: OU vs. E',
      headers: ['Conectivo no Texto', 'Operação Matemática', 'Cuidado Obrigatório'],
      rows: [
        ['**"A OU B"** (União)', '**SOMA** `P(A) + P(B)`', '[[AMBER:SUBTRAIR INTERSEÇÃO]] se A e B puderem ocorrer juntos!'],
        ['**"A E B"** (Interseção)', '**MULTIPLICA** `P(A) × P(B)`', 'Checar se o 2º depende do 1º (sem reposição reduz o total!).'],
      ],
    },
    examTrap:
      'Em um baralho de 52 cartas, qual a chance de tirar um **Rei OU uma carta de Ouros**? Tem 4 Reis + 13 de Ouros = 17? [[ROSE:ERRADO!]] O **Rei de Ouros** foi contado duas vezes! Subtraia 1: `4 + 13 − 1 = **16/52**`!',
    deepDive: {
      headline: 'Diagrama de Venn + Probabilidade',
      points: [
        'Sempre que a questão falar "30% fazem A, 40% fazem B e 10% fazem os dois", **desenhe duas bolinhas cruzadas** começando pelo meio (`10%`), depois subtraia (`A só = 20%`, `B só = 30%`). Total em A ou B = `20 + 10 + 30 = 60%` (que bate com `30 + 40 - 10 = 60%`!).',
      ],
      extraExample:
        'Num setor, 60% falam inglês, 30% espanhol e 10% ambos. Chance de sortear quem fale pelo menos uma das duas: `60% + 30% - 10% = 80%`. (Logo, 20% não falam nenhuma!).',
      mnemonic: 'OU → Soma e tira a repetição | E → Multiplica!',
    },
  },

  '1.2.15': {
    realityParagraphs: [
      'Saber se duas coisas são **diretamente** ou **inversamente proporcionais** é o que decide se você acerta ou zera toda questão de regra de três. Não use matemática robótica aqui — **use o bom senso da vida real**!',
      'Pergunte para você mesmo em voz mental: *"Se eu AUMENTAR essa parada aqui, a outra coisa AUMENTA junto ou DIMINUI?"* Se sobem juntas = **Direta**. Se uma sobe e a outra cai = **Inversa**.',
    ],
    keyPoints: [
      {
        label: 'Diretamente Proporcionais (Mesmo Sentido ↑↑)',
        text: 'Se uma **dobra**, a outra **dobra**. Ex.: número de impressoras trabalhando e total de páginas impressas.',
        badge: { text: 'SOBEM JUNTAS', tone: 'emerald' },
      },
      {
        label: 'Inversamente Proporcionais (Sentidos Opostos ↑↓)',
        text: 'Se uma **dobra**, a outra **cai pela metade**. Ex.: **velocidade vs. tempo**, **trabalhadores vs. prazo**.',
        badge: { text: 'INVERTE A FRAÇÃO', tone: 'rose' },
      },
    ],
    practicalExamples: [
      {
        title: 'Mutirão de Atendimento na Prefeitura',
        scenario:
          'Se **2 agentes** levam **6 horas** para digitalizar um lote de caixas, **4 agentes** (o dobro de gente!) vão levar **3 horas** (metade do tempo!), e NÃO 12 horas! Trabalhadores e Tempo são **inversamente proporcionais**.',
      },
      {
        title: 'Consumo de Papel por Processo',
        scenario:
          'Se cada pasta usa 15 folhas, **dobrar** o número de pastas **dobra** a quantidade de folhas necessárias → **diretamente proporcionais**.',
      },
    ],
    table: {
      title: 'Pares Clássicos de Prova (Decore o Comportamento)',
      headers: ['Par de Grandezas', 'Relação', 'Por Que Funciona Assim'],
      rows: [
        ['**Trabalhadores ↔ Tempo**', '[[ROSE:INVERSA]] (↑ ↓)', 'Mais gente trabalhando termina o mesmo serviço em **menos** dias.'],
        ['**Velocidade ↔ Tempo**', '[[ROSE:INVERSA]] (↑ ↓)', 'Indo mais rápido no ônibus, você chega em **menos** minutos.'],
        ['**Torneiras abertas ↔ Tempo p/ encher**', '[[ROSE:INVERSA]] (↑ ↓)', 'Mais torneiras enchem a caixa em **menos** tempo.'],
        ['**Trabalhadores ↔ Produção (itens)**', '[[EMERALD:DIRETA]] (↑ ↑)', 'Mais gente no mesmo tempo produz **mais** processos.'],
        ['**Horas/dia ↔ Dias necessários**', '[[ROSE:INVERSA]] (↑ ↓)', 'Estudando **mais** horas por dia, termina o edital em **menos** dias.'],
      ],
    },
    examTrap:
      'A banca adora misturar **idade e altura**, ou **número de carros e multa** — cuidado: para ser proporcional de verdade, quando uma multiplica por `k`, a outra tem que multiplicar por `k` (ou dividir por `k`). "Se um pai tem 30 anos e o filho tem 10, daqui 10 anos o pai terá 40 e o filho 20" → isso NÃO é proporcional (`30/10 = 3`, mas `40/20 = 2`)!',
    deepDive: {
      headline: 'O Macete da Multiplicação em Linha vs. Cruzada',
      points: [
        'Grandezas **Diretamente** proporcionais têm **razão constante** (`A / B = k`).',
        'Grandezas **Inversamente** proporcionais têm **produto constante** (`A × B = k`). Ex.: `2 agentes × 6 horas = 12`; logo `4 agentes × 3 horas = 12`!',
      ],
      extraExample:
        'A 60 km/h você leva 4h (`60 × 4 = 240 km`). A 80 km/h você leva `240 ÷ 80 = 3h`!',
      mnemonic: 'Direta = divide constante (A/B) | Inversa = multiplica constante (A×B).',
    },
  },

  '1.2.16': {
    realityParagraphs: [
      '**Razão** é só um nome chique para **divisão** (`a / b` — quantas vezes um número cabe no outro). **Proporção** é quando **duas razões são iguais** (`a / b = c / d`).',
      'O que despenca aqui em concurso municipal são dois bichos: **Escala de Mapa** (`Escala = Desenho / Real`) e **Divisão Proporcional** (dividir uma verba ou bônus proporcionalmente ao tempo de serviço ou produção). Para divisão proporcional, a **técnica do `K`** resolve em 15 segundos.',
    ],
    keyPoints: [
      {
        label: 'Técnica do "K" (Divisão Direta)',
        text: 'Vai dividir R$ 1.000 em partes proporcionais a 2 e 3? Chame de **`2k` e `3k`**: `2k + 3k = 1000` → `5k = 1000` → **`k = 200`**. Logo: `400` e `600`!',
        badge: { text: 'MÉTODO DO K', tone: 'emerald' },
      },
      {
        label: 'Divisão Inversamente Proporcional',
        text: 'Use frações **`k/2` e `k/3`** (ou tire o MMC!). Quanto menor o número, MAIOR a fatia que ele ganha!',
        badge: { text: 'K SOBRE N', tone: 'rose' },
      },
      {
        label: 'Escala Cartográfica',
        text: '**E = Desenho ÷ Realidade** (mesma unidade!). Ex.: `1:50.000` significa que `1 cm` no mapa = `50.000 cm` (`500 m`) na rua.',
        badge: { text: 'D / R', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Rateio de Verba Entre 3 Regionais de Curitiba',
        scenario:
          'R$ 90.000 serão divididos proporcionalmente a `2, 3 e 4` pontos de demanda: `2k + 3k + 4k = 90.000` → `9k = 90.000` → **`k = 10.000`**. As regionais recebem R$ 20 mil, R$ 30 mil e R$ 40 mil!',
      },
      {
        title: 'Bônus Inverso ao Número de Faltas',
        scenario:
          'R$ 1.000 divididos **inversamente** às faltas de Ana (2 faltas) e Beto (3 faltas): `k/2 + k/3 = 1000` → `(3k + 2k)/6 = 1000` → `5k = 6000` → `k = 1200`. Ana ganha `1200/2 = **R$ 600**` e Beto `1200/3 = **R$ 400**`!',
      },
    ],
    table: {
      title: 'Razão vs. Proporção vs. Escala',
      headers: ['Conceito', 'Fórmula', 'Cuidado Mortal'],
      rows: [
        ['**Razão entre A e B**', '`A / B` (na ordem que o texto falou!)', 'Se pediu razão de homens p/ mulheres, homens vai em cima!'],
        ['**Proporção**', '`a / b = c / d` → `a·d = b·c`', 'Produto dos meios = produto dos extremos.'],
        ['**Escala (1 : N)**', '`1 / N = Medida Papel / Medida Real`', '[[ROSE:UNIDADE IGUAL!]] Transforme km/m do mundo real para **cm**!'],
      ],
    },
    examTrap:
      'Na **razão entre duas coisas**, a ordem do texto é lei! Se numa sala há 12 homens e 18 mulheres e a banca pergunta "a razão entre o número de **mulheres e o total da sala**", é `18 / 30 = 3/5` (e NÃO `18/12` nem `12/18`!).',
    deepDive: {
      headline: 'Conversão Rápida na Escala 1 : X',
      points: [
        'Para passar de **cm para metros**, corte **2 zeros**. Para passar de **cm para km**, corte **5 zeros**!',
        'Logo, uma escala de **`1 : 200.000`** significa cortar 5 zeros → `1 cm` no mapa vale **`2 km`** na vida real!',
      ],
      extraExample:
        'Numa planta de escala `1:500`, uma parede de `4 cm` no papel mede na vida real `4 × 500 = 2.000 cm = 20 metros`!',
      mnemonic: 'Divisão Direta = soma os números e acha 1 cota (k) | Escala = corta 2 zeros (m) ou 5 zeros (km).',
    },
  },

  '1.2.17': {
    realityParagraphs: [
      'Regra de três é o canivete suíço da prova. Na **Simples** (2 colunas), você decide se é direta (multiplica em X) ou inversa (inverte uma coluna ou multiplica reto em linha!).',
      'Já na **Regra de Três Composta** (3 ou mais colunas), o povo faz uma salada danada com flechinha errada. Use o método **CAUSA × EFEITO (Processo × Produto)**: separe quem **TRABALHA/CAUSA** (pessoas, máquinas, dias, horas) do **RESULTADO/PRODUTO** (itens produzidos, área pintada, processos protocolados). Fica impossível errar!',
    ],
    keyPoints: [
      {
        label: 'Regra de Três Simples',
        text: '**Direta**: multiplica cruzado (`X`). **Inversa**: multiplica reto (`=`, linha de cima com linha de cima = linha de baixo com linha de baixo).',
        badge: { text: 'SIMPLES', tone: 'sky' },
      },
      {
        label: 'Método Processo × Produto (Composta)',
        text: 'Multiplique toda a parte **Causa/Esforço** em linha, só **CRUZANDO na linha do Produto/Obra feita**! (Ou compare cada coluna isolada diretamente com a coluna do `X`).',
        badge: { text: 'NUNCA ERRA', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Composta sem Sofrimento (Protocolos)',
        scenario:
          '**4 agentes** trabalhando **6 horas/dia** protocolam **240 guias**. Quantas guias **6 agentes** trabalhando **8 horas/dia** protocolam? Causa = `agentes × horas` | Produto = `guias`. Cruzando no Produto: `4 × 6 × X = 6 × 8 × 240` → `24X = 11520` → **`X = 480 guias`**!',
      },
      {
        title: 'Quando o X Está na Causa (Dias/Agentes)',
        scenario:
          '**3 impressoras** em **4 dias** imprimem **6.000 folhas**. Quantos dias **6 impressoras** levam para imprimir **9.000 folhas**? Causa = `impressoras × dias` | Produto = `folhas`. Monte: `3 × 4 × 9.000 = 6 × X × 6.000` → corta `000` → `12 × 9 = 36X` → `108 = 36X` → **`X = 3 dias`**!',
      },
    ],
    table: {
      title: 'Método Clássico vs. Método Processo × Produto',
      headers: ['Situação', 'O Que Vai na Linha da Causa', 'O Que Cruza (Produto/Efeito)'],
      rows: [
        ['**Obra / Produção**', 'Operários, máquinas, horas/dia, dias, eficiência', '**Muros construídos, peças, páginas, metros**'],
        ['**Atendimento / Tarefa**', 'Agentes, guichês, dias, turno', '**Senhas atendidas, processos julgados**'],
        ['**Cuidado com Velocidade/Rendimento**', 'Fica na Causa (junto com tempo)', '**Distância percorrida** fica no Produto'],
      ],
    },
    examTrap:
      'Na regra de três composta tradicional (com setinhas), o erro fatal é comparar a coluna de **dias** com a coluna de **horas**, em vez de comparar **TODAS as colunas isoladamente com a coluna do X**!',
    deepDive: {
      headline: 'Regra Prática da Setinha Isolada (Para Conferência)',
      points: [
        'Coloque a coluna do `X` isolada: `valor_X_cima / X = ...`',
        'Para cada outra coluna, tampe as demais e pergunte: *"Se aumentar isso aqui, o `X` aumenta ou diminui?"*',
        'Se aumenta junto (Direta), copia a fração como está. Se diminui (Inversa), **inverte a fração** (quem estava embaixo vai pra cima)!',
      ],
      extraExample:
        'Se 5 máquinas com **eficiência 100%** produzem X, e 5 máquinas com **eficiência 80%** vão levar mais tempo → eficiência fica na Causa multiplicando (`5 × 1,0` vs `5 × 0,8`).',
      mnemonic: 'Causa × Produto: tudo que trabalha/tempo multiplica reto; só cruza na coluna da OBRA FEITA!',
    },
  },

  '1.2.18': {
    realityParagraphs: [
      '**Porcentagem e Juros Simples** caem absolutamente sempre. A primeira coisa para virar um ninja em porcentagem é abandonar a regra de três lenta e usar **Fator Multiplicativo**: aumentar `20%` é multiplicar por **`1,20`**; dar desconto de `20%` é multiplicar por **`0,80`**.',
      'Em **Juros Simples** (`J = C · i · t`), os juros são sempre calculados sobre o capital inicial (não existe juro sobre juro aqui). O segredo é único: **taxa (`i`) e tempo (`t`) TÊM que falar a mesma língua** (ambos em meses, ou ambos em anos)!',
    ],
    keyPoints: [
      {
        label: 'Fator de Aumento e Desconto',
        text: 'Aumento de `p%`: multiplica por **(1 + p/100)**. Desconto de `p%`: multiplica por **(1 − p/100)**.',
        badge: { text: 'VELOCIDADE', tone: 'emerald' },
      },
      {
        label: 'Aumentos / Descontos Sucessivos',
        text: '**NUNCA some ou subtraia direto!** Aumento de 10% depois 10% NÃO dá 20% (`1,1 × 1,1 = 1,21 = **+21%**`). Desconto de 20% e depois 20% = `0,8 × 0,8 = 0,64 = **-36%**`!',
        badge: { text: 'PEGADINHA Nº 1', tone: 'rose' },
      },
      {
        label: 'Juros Simples (J = C · i · t)',
        text: '**J = C · i · t** (use `i` em decimal, ex: `2% = 0,02`) e **Montante M = C + J**. Converta `i` e `t` para a mesma unidade de tempo!',
        badge: { text: 'MESMA UNIDADE', tone: 'sky' },
      },
    ],
    practicalExamples: [
      {
        title: 'Multa e Juros Simples no IPTU em Atraso',
        scenario:
          'Um boleto de **R$ 1.000,00** atrasou **6 meses** com juros simples de **2% ao mês**. `J = 1000 × 0,02 × 6 = **R$ 120,00**`. Valor final (Montante) = `1000 + 120 = **R$ 1.120,00**`.',
      },
      {
        title: 'Subiu 25%, Quanto Tem Que Cair Pra Voltar?',
        scenario:
          'Um insumo custava R$ 100 e **subiu 25%**, indo para R$ 125. Para voltar a R$ 100, não cai 25%! Você precisa tirar R$ 25 em cima de R$ 125: `25 ÷ 125 = 0,20 = **20% de desconto**`!',
      },
    ],
    table: {
      title: 'Cola de Porcentagem & Juros Simples',
      headers: ['Situação', 'Conta Direta', 'Resultado Real'],
      rows: [
        ['**10% / 1% de qualquer valor**', 'Volta 1 casa (`÷10`) / Volta 2 casas (`÷100`)', '10% de 450 = **45** | 1% de 450 = **4,5**'],
        ['**Subiu 10% e subiu 20%**', '`1,10 × 1,20 = 1,32`', '**+32%** (e NÃO 30%!)'],
        ['**Subiu 20% e caiu 20%**', '`1,20 × 0,80 = 0,96`', '**−4%** (NUNCA volta pro zero a zero!)'],
        ['**Juros Simples: 18% ao ano em 4 meses**', 'Passe a taxa pra mês: `18% ÷ 12 = 1,5% a.m.`', '`J = C × 0,015 × 4`'],
      ],
    },
    examTrap:
      'Se um produto custava R$ 100, aumentou 20% (foi pra R$ 120) e depois caiu 20%, ele **NÃO volta pra R$ 100**! Cai para `120 × 0,80 = **R$ 96,00**` (prejuízo de 4%). Toda banca ama essa pegadinha!',
    deepDive: {
      headline: 'Conversões de Tempo em Juros Simples & Sistema Monetário',
      points: [
        'Em juros simples, a conversão é proporcional linear (pode dividir/multiplicar direto!): `2% ao mês = 24% ao ano` (`2 × 12`). `18% ao ano = 1,5% ao mês` (`18 ÷ 12`).',
        '**1 mês comercial = 30 dias** | **1 ano comercial = 360 dias** (se a questão der prazo em dias, ex: 45 dias = `1,5 mês`).',
        'Se der **Montante** e pedir o Capital inicial: `M = C · (1 + i · t)` → divida `M` por `(1 + i · t)`.',
      ],
      extraExample:
        'Que capital aplicado por 5 meses a 4% a.m. gera Montante de R$ 2.400? `2400 = C × (1 + 0,04 × 5)` → `2400 = 1,2C` → `C = 2400 ÷ 1,2 = **R$ 2.000,00**`!',
      mnemonic: 'Sobe 20% e desce 20% = perde 4% | J = C·i·t (i e t sempre na mesma unidade!).',
    },
  },

  '1.2.19': {
    realityParagraphs: [
      '"Resolução de problemas" no edital é o nome genérico para aquelas historinhas de matemática em português que você precisa traduzir para uma **equação do 1º grau** ou um **sisteminha com X e Y**.',
      'O segredo não é ser gênio da álgebra — é **ler frase por frase traduzindo para símbolo** e, no final de tudo, **RELEIA A PERGUNTA** antes de marcar! A banca adora te fazer achar `X = 12` quando a pergunta era "qual é o dobro do que sobrou para Maria?" (`Y`)!',
    ],
    keyPoints: [
      {
        label: 'Dicionário Português → Álgebra',
        text: '"o dobro" = `2x` | "a metade" = `x/2` | "excede em 5" = `x + 5` | "de / do / dos" = **multiplicação (×)** | "é igual a / resulta" = **`=`**.',
        badge: { text: 'TRADUTOR', tone: 'sky' },
      },
      {
        label: 'Sistema de Soma e Diferença (Atalho!)',
        text: 'Sabe a **SOMA (`S`)** e a **DIFERENÇA (`D`)** entre dois números? O **Maior = `(S + D) ÷ 2`** e o **Menor = `(S − D) ÷ 2`**! Resolve em 5 segundos sem nem montar sistema!',
        badge: { text: 'MACETE OURO', tone: 'emerald' },
      },
    ],
    practicalExamples: [
      {
        title: 'Caixas de Arquivo em Dois Depósitos',
        scenario:
          'Dois depósitos têm juntos **140 caixas**, e o depósito A tem **24 caixas a mais** que o B (`Soma = 140`, `Diferença = 24`). Pelo atalho: A (maior) = `(140 + 24) ÷ 2 = **82 caixas**`; B (menor) = `(140 − 24) ÷ 2 = **58 caixas**`. Confira: `82 + 58 = 140` e `82 - 58 = 24`!',
      },
      {
        title: 'Problema de Fração do Restante',
        scenario:
          'Um servidor analisou **1/3** dos processos de manhã e **1/2 do que RESTOU** à tarde, sobrando **20** processos. Se gastou `1/3`, sobrou `2/3`. Metade de `2/3` é `1/3`! Sobrou outro `1/3`, que vale `20` → Total = `20 × 3 = **60 processos**`!',
      },
    ],
    table: {
      title: 'Tradutor Rápido de Enunciados de Prova',
      headers: ['O Que Está Escrito no Texto', 'Como Escrever na Conta', 'Pegadinha Comum'],
      rows: [
        ['"3/5 **do** orçamento"', '`(3 / 5) × Total`', '"Do/de" sempre significa **multiplicar**!'],
        ['"Gastou 2/5 e **do restante** gastou metade"', 'Sobrou `3/5` → metade disso é `(1/2) × (3/5) = 3/10`', '[[ROSE:NÃO SOME]] `2/5 + 1/2` sobre o total inicial!'],
        ['"Três números consecutivos"', '`x`, `(x + 1)`, `(x + 2)`', 'Se pedir 3 **pares** consecutivos, é `x`, `x+2`, `x+4`!'],
        ['"Testar as alternativas (Backsolving)"', 'Pegar a opção C do meio e testar na historinha', 'Quando travar na equação, testar as opções salva a questão!'],
      ],
    },
    examTrap:
      'Achou `X = 15` na equação? **PARE E OLHE A ÚLTIMA FRASE DA QUESTÃO!** Se ela perguntou "a diferença entre o mais velho e o mais novo" ou "quantos faltam para completar 50", `15` vai estar na alternativa A para te derrubar!',
    deepDive: {
      headline: 'Método da Engrenagem Reversa (De Trás Para Frente)',
      points: [
        'Em problemas de "sobrou tanto no final", às vezes ir **de trás para frente** (invertendo as operações) é muito mais fácil que montar fração com `X`.',
        'Ex.: "Gastei metade do que tinha, depois paguei R$ 10 e fiquei com R$ 30." Voltando: `30 + 10 = 40`; o dobro de 40 = **R$ 80** no início!',
      ],
      extraExample:
        'Uma sala tem mesas de 3 e de 4 pés, somando 20 mesas e 68 pés. Macete dos pés/rodas: se todas as 20 tivessem 3 pés = 60 pés. Faltam `68 − 60 = 8` pés → `8 ÷ (4 - 3) = **8 mesas de 4 pés**` (e 12 de 3 pés)!',
      mnemonic: 'Soma e Diferença: Maior = (S+D)÷2 | "Do restante" = calcula quanto sobrou primeiro!',
    },
  },
};
