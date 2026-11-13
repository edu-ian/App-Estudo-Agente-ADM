import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';
import { ALL_TOPICS, DISCIPLINES, EXAM_INFO } from '../src/data/syllabus';
import { TOPIC_SUMMARIES } from '../src/data/topicSummaries';

const FONT_REGULAR = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf';
const FONT_BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf';
const FONT_MONO = '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf';

const OUT_PATH = path.resolve(
  process.cwd(),
  'public/apostila-resumos-curitiba-2026.pdf'
);

type SegmentStyle = 'regular' | 'bold' | 'italic' | 'mono' | 'tag' | 'strike';

interface TextSegment {
  text: string;
  style: SegmentStyle;
}

interface InlineRun {
  text: string;
  font: string;
  fontSize: number;
  color: string;
  strike: boolean;
  width: number;
  isSpace: boolean;
}

const INLINE_RE =
  /(\[\[(?:ROSE|AMBER|EMERALD|SKY):[^\]]+\]\]|\*\*(?:[^*]|\*(?!\*))+\*\*|~~[^~]+~~|`[^`]+`|(?<!\*)\*(?!\s|\*)(?:[^*]|\*\*[^*]+\*\*)+?(?<!\s|\*)\*(?!\*))/g;

function parseSegments(
  raw: string,
  inherited: SegmentStyle = 'regular'
): TextSegment[] {
  const parts = raw.split(INLINE_RE);
  const out: TextSegment[] = [];

  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith('[[') && part.endsWith(']]')) {
      const inner = part.slice(2, -2);
      const colonIdx = inner.indexOf(':');
      const label = colonIdx !== -1 ? inner.slice(colonIdx + 1) : inner;
      out.push({ text: `[${label}]`, style: 'tag' });
    } else if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      out.push(...parseSegments(part.slice(2, -2), 'bold'));
    } else if (part.startsWith('~~') && part.endsWith('~~') && part.length > 4) {
      out.push({ text: part.slice(2, -2), style: 'strike' });
    } else if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      out.push({ text: part.slice(1, -1), style: 'mono' });
    } else if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      out.push(
        ...parseSegments(
          part.slice(1, -1),
          inherited === 'bold' ? 'bold' : 'italic'
        )
      );
    } else {
      out.push({ text: part, style: inherited });
    }
  }
  return out;
}

function getStyleProps(
  style: SegmentStyle,
  baseFontSize: number,
  baseColor: string
): { font: string; fontSize: number; color: string; strike: boolean } {
  switch (style) {
    case 'bold':
      return {
        font: 'SansBold',
        fontSize: baseFontSize,
        color: '#111827',
        strike: false,
      };
    case 'italic':
      return {
        font: 'Sans',
        fontSize: baseFontSize,
        color: '#334155',
        strike: false,
      };
    case 'mono':
      return {
        font: 'Mono',
        fontSize: Math.max(7.5, baseFontSize - 0.5),
        color: '#0369A1',
        strike: false,
      };
    case 'tag':
      return {
        font: 'SansBold',
        fontSize: Math.max(7.5, baseFontSize - 0.5),
        color: '#B45309',
        strike: false,
      };
    case 'strike':
      return {
        font: 'Sans',
        fontSize: baseFontSize,
        color: '#6B7280',
        strike: true,
      };
    default:
      return {
        font: 'Sans',
        fontSize: baseFontSize,
        color: baseColor,
        strike: false,
      };
  }
}

function breakLongWord(
  doc: PDFKit.PDFDocument,
  word: string,
  font: string,
  fontSize: number,
  maxWidth: number
): string[] {
  doc.font(font).fontSize(fontSize);
  if (doc.widthOfString(word) <= maxWidth) return [word];

  const chunks: string[] = [];
  let current = '';
  for (const ch of word) {
    const candidate = current + ch;
    if (current.length > 0 && doc.widthOfString(candidate) > maxWidth) {
      chunks.push(current);
      current = ch;
    } else {
      current = candidate;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

function layoutRichLines(
  doc: PDFKit.PDFDocument,
  raw: string,
  maxWidth: number,
  options?: { fontSize?: number; baseColor?: string }
): InlineRun[][] {
  const baseFontSize = options?.fontSize ?? 9.5;
  const baseColor = options?.baseColor ?? '#1F2937';
  const segments = parseSegments(raw);

  // Convert segments into indivisible word/space runs (sticking leading punctuation like "," "." to previous line if possible? No, normal word split + keep punctuation attached!)
  const tokens: InlineRun[] = [];
  for (const seg of segments) {
    const props = getStyleProps(seg.style, baseFontSize, baseColor);
    const parts = seg.text.split(/(\s+)/);
    for (const part of parts) {
      if (!part) continue;
      const isSpace = /^\s+$/.test(part);
      if (isSpace) {
        doc.font(props.font).fontSize(props.fontSize);
        tokens.push({
          text: ' ',
          ...props,
          width: doc.widthOfString(' '),
          isSpace: true,
        });
      } else {
        const subWords = breakLongWord(
          doc,
          part,
          props.font,
          props.fontSize,
          maxWidth
        );
        for (const sw of subWords) {
          doc.font(props.font).fontSize(props.fontSize);
          tokens.push({
            text: sw,
            ...props,
            width: doc.widthOfString(sw),
            isSpace: false,
          });
        }
      }
    }
  }

  const lines: InlineRun[][] = [];
  let currentLine: InlineRun[] = [];
  let currentW = 0;

  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];

    // Skip leading space on a fresh line
    if (tok.isSpace && currentLine.length === 0) continue;

    // Never orphan punctuation like "," "." ";" ":" ")" after a bold/tag token if it fits? Wait: if tok starts with punctuation and currentW + tok.width > maxWidth, move last word + punctuation if possible, or simply wrap normally.
    if (!tok.isSpace && currentW + tok.width > maxWidth && currentLine.length > 0) {
      // Trim trailing space on line
      while (currentLine.length > 0 && currentLine[currentLine.length - 1].isSpace) {
        currentLine.pop();
      }
      if (currentLine.length > 0) {
        lines.push(currentLine);
      }
      currentLine = [tok];
      currentW = tok.width;
    } else {
      currentLine.push(tok);
      currentW += tok.width;
    }
  }

  while (currentLine.length > 0 && currentLine[currentLine.length - 1].isSpace) {
    currentLine.pop();
  }
  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return lines.length > 0 ? lines : [[]];
}

function measureRichLayout(
  doc: PDFKit.PDFDocument,
  raw: string,
  maxWidth: number,
  options?: { fontSize?: number; lineHeight?: number; baseColor?: string }
): { lines: InlineRun[][]; height: number; lineHeight: number } {
  const fontSize = options?.fontSize ?? 9.5;
  const lineHeight = options?.lineHeight ?? Math.round((fontSize * 1.42) * 10) / 10;
  const lines = layoutRichLines(doc, raw, maxWidth, {
    fontSize,
    baseColor: options?.baseColor,
  });
  return {
    lines,
    height: lines.length * lineHeight,
    lineHeight,
  };
}

function drawRichLayout(
  doc: PDFKit.PDFDocument,
  layout: { lines: InlineRun[][]; height: number; lineHeight: number },
  x: number,
  y: number
): number {
  let curY = y;
  for (const line of layout.lines) {
    let curX = x;
    for (const run of line) {
      if (!run.isSpace) {
        doc
          .font(run.font)
          .fontSize(run.fontSize)
          .fillColor(run.color)
          .text(run.text, curX, curY, {
            lineBreak: false,
            strike: run.strike,
          });
      }
      curX += run.width;
    }
    curY += layout.lineHeight;
  }
  return curY;
}

function ensureSpace(
  doc: PDFKit.PDFDocument,
  neededHeight: number,
  pageBottom: number
) {
  if (doc.y + neededHeight > pageBottom) {
    doc.addPage();
    doc.y = 46;
  }
}

async function main() {
  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });

  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 46, bottom: 52, left: 46, right: 46 },
    bufferPages: true,
    info: {
      Title: 'Apostila Completa de Resumos · Agente Administrativo Curitiba 2026',
      Author: 'Plano de Estudos · Prefeitura Municipal de Curitiba',
      Subject: 'Resumos completos das 9 disciplinas e 82 tópicos do edital',
    },
  });

  doc.registerFont('Sans', FONT_REGULAR);
  doc.registerFont('SansBold', FONT_BOLD);
  doc.registerFont('Mono', FONT_MONO);

  const stream = fs.createWriteStream(OUT_PATH);
  doc.pipe(stream);

  const pageWidth = doc.page.width;
  const pageHeight = doc.page.height;
  const marginX = 46;
  const contentWidth = pageWidth - marginX * 2;
  const pageBottom = pageHeight - 54;

  // =========================================================================
  // COVER PAGE
  // =========================================================================
  doc.rect(0, 0, pageWidth, 188).fill('#0F172A');
  doc.rect(marginX, 44, 155, 22).fill('#0284C7');
  doc
    .font('SansBold')
    .fontSize(8.5)
    .fillColor('#FFFFFF')
    .text('EDITAL CURITIBA · 2026', marginX + 10, 50, { lineBreak: false });

  doc
    .font('SansBold')
    .fontSize(22)
    .fillColor('#F8FAFC')
    .text('Apostila Completa de Resumos', marginX, 82, {
      width: contentWidth,
    });

  doc
    .font('Sans')
    .fontSize(12)
    .fillColor('#CBD5E1')
    .text(`${EXAM_INFO.role} · ${EXAM_INFO.institution}`, marginX, 118, {
      width: contentWidth,
    });

  doc
    .font('Mono')
    .fontSize(9.5)
    .fillColor('#7DD3FC')
    .text(
      `Prova: ${EXAM_INFO.examDateFormatted} · 9 Disciplinas · ${ALL_TOPICS.length} Tópicos do Edital`,
      marginX,
      146,
      { width: contentWidth }
    );

  // Intro note
  doc.y = 212;
  doc
    .font('SansBold')
    .fontSize(11)
    .fillColor('#111827')
    .text('Estrutura didática aplicada em todos os 82 tópicos:', marginX, doc.y);

  doc.y += 6;
  const features = [
    '1. A Realidade Nua e Crua: explicação direta, sem juridiquês e com pontos-chave destacados.',
    '2. Na Prática (Exemplos do Dia a Dia): situações reais da Prefeitura de Curitiba.',
    '3. Tabela Comparativa Visual: resumos lado a lado para revisão rápida.',
    '4. Pegadinha de Banca: alertas sobre trocas de prazos, exceções e armadilhas clássicas.',
    '5. Destrinchar Mais + Macete de Memória: aprofundamento extra e fórmulas de fixação.',
  ];
  for (const feat of features) {
    const featLayout = measureRichLayout(doc, `•  ${feat}`, contentWidth - 10, {
      fontSize: 9.5,
      lineHeight: 13.5,
      baseColor: '#374151',
    });
    doc.y = drawRichLayout(doc, featLayout, marginX + 6, doc.y) + 4;
  }

  doc.y += 14;
  doc
    .font('SansBold')
    .fontSize(11.5)
    .fillColor('#0F172A')
    .text('Índice Geral das Disciplinas', marginX, doc.y);
  doc.y += 8;

  for (const disc of DISCIPLINES) {
    const rowY = doc.y;
    doc.rect(marginX, rowY, contentWidth, 24).fillAndStroke('#F8FAFC', '#E2E8F0');
    doc
      .font('Mono')
      .fontSize(9)
      .fillColor('#0284C7')
      .text(disc.code, marginX + 10, rowY + 7, { lineBreak: false });
    doc
      .font('SansBold')
      .fontSize(9.5)
      .fillColor('#1E293B')
      .text(disc.name, marginX + 46, rowY + 7, {
        width: 320,
        lineBreak: false,
      });
    doc
      .font('Sans')
      .fontSize(8.5)
      .fillColor('#64748B')
      .text(
        `${disc.topics.length} tópicos`,
        marginX + contentWidth - 78,
        rowY + 7.5,
        {
          width: 68,
          align: 'right',
          lineBreak: false,
        }
      );
    doc.y = rowY + 28;
  }

  // =========================================================================
  // DISCIPLINES & 82 TOPICS
  // =========================================================================
  for (const disc of DISCIPLINES) {
    doc.addPage();
    doc.y = 46;

    const noteLayout = measureRichLayout(doc, disc.weightNote, contentWidth - 24, {
      fontSize: 9,
      lineHeight: 13,
      baseColor: '#CBD5E1',
    });
    const bannerTop = doc.y;
    const bannerHeight = 50 + noteLayout.height + 6;

    doc.rect(marginX, bannerTop, contentWidth, bannerHeight).fill('#0F172A');
    doc
      .font('Mono')
      .fontSize(8.5)
      .fillColor('#38BDF8')
      .text(
        `DISCIPLINA ${disc.code}  ·  ${disc.block.toUpperCase()}  ·  ${disc.topics.length} TÓPICOS`,
        marginX + 12,
        bannerTop + 12,
        { lineBreak: false }
      );
    doc
      .font('SansBold')
      .fontSize(15)
      .fillColor('#FFFFFF')
      .text(disc.name, marginX + 12, bannerTop + 26, {
        width: contentWidth - 24,
        lineBreak: false,
      });
    drawRichLayout(doc, noteLayout, marginX + 12, bannerTop + 48);

    doc.y = bannerTop + bannerHeight + 16;

    for (const topic of disc.topics) {
      const content = TOPIC_SUMMARIES[topic.id];
      if (!content) continue;

      const titleLayout = measureRichLayout(
        doc,
        `**${topic.title}**`,
        contentWidth - 20,
        { fontSize: 10.5, lineHeight: 14.5, baseColor: '#0F172A' }
      );
      const headerBarH = titleLayout.height + 24;
      ensureSpace(doc, headerBarH + 70, pageBottom);

      // Topic Header Bar
      const topicTop = doc.y;
      doc
        .rect(marginX, topicTop, contentWidth, headerBarH)
        .fillAndStroke('#F1F5F9', '#CBD5E1');
      doc
        .font('Mono')
        .fontSize(8)
        .fillColor('#0369A1')
        .text(
          `TÓPICO ${topic.id}  ·  PRIORIDADE ${topic.priority.toUpperCase()}${
            content.isFullModule ? '  ·  MATERIAL BASE COMPLETO' : ''
          }`,
          marginX + 10,
          topicTop + 6,
          { lineBreak: false }
        );
      drawRichLayout(doc, titleLayout, marginX + 10, topicTop + 19);

      doc.y = topicTop + headerBarH + 10;

      // ---------------------------------------------------------------------
      // 1. A Realidade Nua e Crua
      // ---------------------------------------------------------------------
      ensureSpace(doc, 36, pageBottom);
      doc
        .font('SansBold')
        .fontSize(9)
        .fillColor('#0369A1')
        .text('1. A REALIDADE NUA E CRUA', marginX, doc.y);
      doc.y += 5;

      for (const p of content.realityParagraphs) {
        const pLayout = measureRichLayout(doc, p, contentWidth, {
          fontSize: 9.5,
          lineHeight: 13.8,
          baseColor: '#1F2937',
        });
        ensureSpace(doc, pLayout.height + 6, pageBottom);
        doc.y = drawRichLayout(doc, pLayout, marginX, doc.y) + 6;
      }

      // KeyPoints
      for (const kp of content.keyPoints) {
        const badgePrefix = kp.badge ? `[[AMBER:${kp.badge.text}]] ` : '';
        const kpLine = `• **${kp.label}** ${badgePrefix}— ${kp.text}`;
        const kpLayout = measureRichLayout(doc, kpLine, contentWidth - 20, {
          fontSize: 9,
          lineHeight: 13,
          baseColor: '#374151',
        });
        const boxH = kpLayout.height + 10;
        ensureSpace(doc, boxH + 5, pageBottom);

        const boxTop = doc.y;
        doc
          .rect(marginX + 4, boxTop, contentWidth - 4, boxH)
          .fillAndStroke('#FAFAFA', '#E5E7EB');
        drawRichLayout(doc, kpLayout, marginX + 12, boxTop + 5);
        doc.y = boxTop + boxH + 5;
      }

      doc.y += 4;

      // ---------------------------------------------------------------------
      // 2. Na Prática (Exemplos do Dia a Dia)
      // ---------------------------------------------------------------------
      ensureSpace(doc, 46, pageBottom);
      doc
        .font('SansBold')
        .fontSize(9)
        .fillColor('#047857')
        .text('2. NA PRÁTICA · EXEMPLOS DO DIA A DIA', marginX, doc.y);
      doc.y += 5;

      for (const ex of content.practicalExamples) {
        const titleExLayout = measureRichLayout(
          doc,
          `**${ex.title}**`,
          contentWidth - 20,
          { fontSize: 9, lineHeight: 12.5, baseColor: '#065F46' }
        );
        const bodyExLayout = measureRichLayout(
          doc,
          ex.scenario,
          contentWidth - 20,
          { fontSize: 9, lineHeight: 13, baseColor: '#1F2937' }
        );
        const boxH = titleExLayout.height + bodyExLayout.height + 14;
        ensureSpace(doc, boxH + 6, pageBottom);

        const boxY = doc.y;
        doc
          .rect(marginX, boxY, contentWidth, boxH)
          .fillAndStroke('#ECFDF5', '#A7F3D0');
        const nextY = drawRichLayout(doc, titleExLayout, marginX + 10, boxY + 6);
        drawRichLayout(doc, bodyExLayout, marginX + 10, nextY + 2);
        doc.y = boxY + boxH + 6;
      }

      doc.y += 3;

      // ---------------------------------------------------------------------
      // 3. Tabela Comparativa Visual
      // ---------------------------------------------------------------------
      const tbl = content.table;
      const colCount = tbl.headers.length;
      const colWidths: number[] =
        colCount === 2
          ? [contentWidth * 0.34, contentWidth * 0.66]
          : colCount === 3
          ? [contentWidth * 0.26, contentWidth * 0.37, contentWidth * 0.37]
          : colCount === 4
          ? [
              contentWidth * 0.22,
              contentWidth * 0.26,
              contentWidth * 0.26,
              contentWidth * 0.26,
            ]
          : Array(colCount).fill(contentWidth / colCount);

      const drawTableHeader = () => {
        const headerLayouts = tbl.headers.map((h, i) =>
          measureRichLayout(doc, `**${h.replace(/\*\*/g, '')}**`, colWidths[i] - 12, {
            fontSize: 8.5,
            lineHeight: 12,
            baseColor: '#0C4A6E',
          })
        );
        const headerH = Math.max(...headerLayouts.map((l) => l.height), 12) + 10;
        const hY = doc.y;
        let cx = marginX;
        for (let i = 0; i < colCount; i++) {
          doc
            .rect(cx, hY, colWidths[i], headerH)
            .fillAndStroke('#E0F2FE', '#BAE6FD');
          drawRichLayout(doc, headerLayouts[i], cx + 6, hY + 5);
          cx += colWidths[i];
        }
        doc.y = hY + headerH;
      };

      ensureSpace(doc, 70, pageBottom);
      doc
        .font('SansBold')
        .fontSize(9)
        .fillColor('#334155')
        .text(
          `3. ${(tbl.title ?? 'TABELA COMPARATIVA VISUAL').toUpperCase()}`,
          marginX,
          doc.y
        );
      doc.y += 5;
      drawTableHeader();

      for (let rIdx = 0; rIdx < tbl.rows.length; rIdx++) {
        const row = tbl.rows[rIdx];
        const cellLayouts = row.map((cell, cIdx) =>
          measureRichLayout(doc, cell, (colWidths[cIdx] ?? 100) - 12, {
            fontSize: 8.5,
            lineHeight: 12.2,
            baseColor: '#1F2937',
          })
        );
        const rowH = Math.max(...cellLayouts.map((l) => l.height), 12) + 10;

        if (doc.y + rowH > pageBottom) {
          doc.addPage();
          doc.y = 46;
          drawTableHeader();
        }

        const rY = doc.y;
        const rowBg = rIdx % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
        let cx = marginX;
        for (let cIdx = 0; cIdx < colCount; cIdx++) {
          const cw = colWidths[cIdx] ?? 100;
          doc.rect(cx, rY, cw, rowH).fillAndStroke(rowBg, '#CBD5E1');
          if (cellLayouts[cIdx]) {
            drawRichLayout(doc, cellLayouts[cIdx], cx + 6, rY + 5);
          }
          cx += cw;
        }
        doc.y = rY + rowH;
      }

      doc.y += 8;

      // ---------------------------------------------------------------------
      // 4. Callout de Pegadinha de Banca
      // ---------------------------------------------------------------------
      const trapLayout = measureRichLayout(
        doc,
        content.examTrap,
        contentWidth - 20,
        { fontSize: 9, lineHeight: 13, baseColor: '#451A03' }
      );
      const trapBoxH = trapLayout.height + 26;
      ensureSpace(doc, trapBoxH + 8, pageBottom);

      const trapY = doc.y;
      doc
        .rect(marginX, trapY, contentWidth, trapBoxH)
        .fillAndStroke('#FEF3C7', '#F59E0B');
      doc
        .font('SansBold')
        .fontSize(8.5)
        .fillColor('#92400E')
        .text('4. PEGADINHA DE BANCA · NÃO CAIA NESSA!', marginX + 10, trapY + 6, {
          lineBreak: false,
        });
      drawRichLayout(doc, trapLayout, marginX + 10, trapY + 20);
      doc.y = trapY + trapBoxH + 8;

      // ---------------------------------------------------------------------
      // 5. Aprofundamento + Macete de Memória
      // ---------------------------------------------------------------------
      const headLayout = measureRichLayout(
        doc,
        `5. APROFUNDAMENTO · ${content.deepDive.headline.toUpperCase()}`,
        contentWidth,
        { fontSize: 9, lineHeight: 12.5, baseColor: '#0369A1' }
      );
      ensureSpace(doc, headLayout.height + 24, pageBottom);
      doc
        .font('SansBold')
        .fontSize(9)
        .fillColor('#0369A1')
        .text(
          `5. APROFUNDAMENTO · ${content.deepDive.headline.toUpperCase()}`,
          marginX,
          doc.y,
          { width: contentWidth }
        );
      doc.y += 5;

      for (const pt of content.deepDive.points) {
        const ptLayout = measureRichLayout(doc, `•  ${pt}`, contentWidth - 8, {
          fontSize: 8.8,
          lineHeight: 12.6,
          baseColor: '#374151',
        });
        ensureSpace(doc, ptLayout.height + 4, pageBottom);
        doc.y = drawRichLayout(doc, ptLayout, marginX + 4, doc.y) + 3;
      }

      const extraLine = `**Caso Extra de Prova:** ${content.deepDive.extraExample}`;
      const extraLayout = measureRichLayout(doc, extraLine, contentWidth - 16, {
        fontSize: 8.8,
        lineHeight: 12.6,
        baseColor: '#334155',
      });
      const extraBoxH = extraLayout.height + 10;
      ensureSpace(doc, extraBoxH + 6, pageBottom);
      const extraY = doc.y + 2;
      doc
        .rect(marginX, extraY, contentWidth, extraBoxH)
        .fillAndStroke('#F8FAFC', '#CBD5E1');
      drawRichLayout(doc, extraLayout, marginX + 8, extraY + 5);
      doc.y = extraY + extraBoxH + 6;

      const mnemLine = `**MACETE DE MEMÓRIA:** ${content.deepDive.mnemonic}`;
      const mnemLayout = measureRichLayout(doc, mnemLine, contentWidth - 16, {
        fontSize: 8.8,
        lineHeight: 12.6,
        baseColor: '#064E3B',
      });
      const mnemBoxH = mnemLayout.height + 10;
      ensureSpace(doc, mnemBoxH + 10, pageBottom);
      const mnemY = doc.y;
      doc
        .rect(marginX, mnemY, contentWidth, mnemBoxH)
        .fillAndStroke('#ECFDF5', '#10B981');
      drawRichLayout(doc, mnemLayout, marginX + 8, mnemY + 5);
      doc.y = mnemY + mnemBoxH + 18;
    }
  }

  // =========================================================================
  // FOOTERS ON ALL PAGES (EXCEPT COVER)
  // =========================================================================
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    if (i === 0) continue;
    const footerY = pageHeight - 32;
    doc
      .moveTo(marginX, footerY - 6)
      .lineTo(pageWidth - marginX, footerY - 6)
      .strokeColor('#E2E8F0')
      .lineWidth(0.5)
      .stroke();
    doc
      .font('Sans')
      .fontSize(7.5)
      .fillColor('#64748B')
      .text(
        'Concurso Agente Administrativo · Prefeitura de Curitiba (13/12/2026) · Apostila de Resumos',
        marginX,
        footerY,
        { lineBreak: false }
      );
    const pageLabel = `Pág. ${i + 1} / ${range.count}`;
    doc.font('Mono').fontSize(7.5).fillColor('#475569');
    const pageLabelW = doc.widthOfString(pageLabel);
    doc.text(pageLabel, marginX + contentWidth - pageLabelW, footerY, {
      lineBreak: false,
    });
  }

  doc.end();

  await new Promise<void>((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });

  const stat = fs.statSync(OUT_PATH);
  console.log(
    `PDF gerado com sucesso: ${OUT_PATH} (${range.count} páginas, ${(
      stat.size / 1024
    ).toFixed(1)} KB)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
