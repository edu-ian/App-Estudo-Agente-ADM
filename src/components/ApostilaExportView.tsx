import { Fragment, useMemo, useState, type ReactNode } from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Printer,
} from 'lucide-react';
import { ALL_TOPICS, DISCIPLINES, EXAM_INFO } from '../data/syllabus';
import { TOPIC_SUMMARIES, type BadgeTone } from '../data/topicSummaries';

interface ApostilaExportViewProps {
  initialScope?: string;
}

const TOKEN_REGEX =
  /(\[\[(?:ROSE|AMBER|EMERALD|SKY):[^\]]+\]\]|\*\*(?:[^*]|\*(?!\*))+\*\*|~~[^~]+~~|`[^`]+`|(?<!\*)\*(?!\s|\*)(?:[^*]|\*\*[^*]+\*\*)+?(?<!\s|\*)\*(?!\*))/g;

const BADGE_TONE_CLASSES: Record<BadgeTone, string> = {
  rose: 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:border-rose-400/30 dark:bg-rose-500/15 dark:text-rose-300',
  amber:
    'border-amber-500/35 bg-amber-500/12 text-amber-800 dark:border-amber-400/35 dark:bg-amber-500/15 dark:text-amber-300',
  emerald:
    'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-300',
  sky: 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/15 dark:text-sky-300',
};

function escapeHtml(input: string): string {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function richTextToHtml(raw: string): string {
  const parts = raw.split(TOKEN_REGEX);
  return parts
    .map((part) => {
      if (!part) return '';
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const inner = part.slice(2, -2);
        const colonIdx = inner.indexOf(':');
        const label = colonIdx !== -1 ? inner.slice(colonIdx + 1) : inner;
        return `<strong>[${escapeHtml(label)}]</strong>`;
      }
      if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
        return `<strong>${richTextToHtml(part.slice(2, -2))}</strong>`;
      }
      if (part.startsWith('~~') && part.endsWith('~~') && part.length > 4) {
        return `<s>${escapeHtml(part.slice(2, -2))}</s>`;
      }
      if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
        return `<code>${escapeHtml(part.slice(1, -1))}</code>`;
      }
      if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
        return `<em>${richTextToHtml(part.slice(1, -1))}</em>`;
      }
      return escapeHtml(part);
    })
    .join('');
}

function richTextToPlain(raw: string): string {
  return raw
    .replace(/\[\[(?:ROSE|AMBER|EMERALD|SKY):([^\]]+)\]\]/g, '[$1]')
    .replace(/\*\*((?:[^*]|\*(?!\*))+)\*\*/g, '$1')
    .replace(/~~([^~]+)~~/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/(?<!\*)\*(?!\s|\*)([^*]+?)(?<!\s|\*)\*(?!\*)/g, '$1');
}

function renderRichInline(text: string): ReactNode {
  const parts = text.split(TOKEN_REGEX);
  return parts.map((part, idx) => {
    if (!part) return null;
    if (part.startsWith('[[') && part.endsWith(']]')) {
      const inner = part.slice(2, -2);
      const colonIdx = inner.indexOf(':');
      if (colonIdx !== -1) {
        const tone = inner.slice(0, colonIdx).toLowerCase() as BadgeTone;
        const label = inner.slice(colonIdx + 1);
        return (
          <span
            key={idx}
            className={`inline-block rounded border px-1.5 py-0.5 text-[11px] font-semibold mx-0.5 ${
              BADGE_TONE_CLASSES[tone] ?? BADGE_TONE_CLASSES.sky
            }`}
          >
            {label}
          </span>
        );
      }
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={idx}>{renderRichInline(part.slice(2, -2))}</strong>;
    }
    if (part.startsWith('~~') && part.endsWith('~~') && part.length > 4) {
      return (
        <span key={idx} className="line-through opacity-65">
          {part.slice(2, -2)}
        </span>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={idx}
          className="rounded border border-[#E2E1DD] bg-[#F4F3EF] px-1 py-0.5 font-mono text-[11px] dark:border-[#343434] dark:bg-[#262626]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={idx}>{renderRichInline(part.slice(1, -1))}</em>;
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}

export function ApostilaExportView({ initialScope = 'all' }: ApostilaExportViewProps) {
  const [scope, setScope] = useState<string>(initialScope);
  const [includeDeepDive, setIncludeDeepDive] = useState<boolean>(true);
  const [copiedDocs, setCopiedDocs] = useState<boolean>(false);

  const selectedDisciplines = useMemo(
    () =>
      scope === 'all'
        ? DISCIPLINES
        : DISCIPLINES.filter((d) => d.id === scope),
    [scope]
  );

  const selectedTopicsCount = useMemo(
    () => selectedDisciplines.reduce((sum, d) => sum + d.topics.length, 0),
    [selectedDisciplines]
  );

  const handleCopyForGoogleDocs = async () => {
    const htmlChunks: string[] = [
      `<h1>Apostila Completa de Resumos — ${escapeHtml(EXAM_INFO.role)}</h1>`,
      `<p><strong>${escapeHtml(EXAM_INFO.institution)}</strong> · Prova: ${escapeHtml(
        EXAM_INFO.examDateFormatted
      )}</p>`,
      '<hr />',
    ];

    const plainChunks: string[] = [
      `APOSTILA COMPLETA DE RESUMOS — ${EXAM_INFO.role}`,
      `${EXAM_INFO.institution} · Prova: ${EXAM_INFO.examDateFormatted}`,
      '============================================================',
    ];

    for (const disc of selectedDisciplines) {
      htmlChunks.push(
        `<h2>${escapeHtml(disc.code)} · ${escapeHtml(disc.name)} (${escapeHtml(
          disc.block
        )})</h2>`,
        `<p><em>${escapeHtml(disc.weightNote)}</em></p>`
      );
      plainChunks.push(
        '',
        `## ${disc.code} · ${disc.name} (${disc.block})`,
        disc.weightNote
      );

      for (const topic of disc.topics) {
        const s = TOPIC_SUMMARIES[topic.id];
        if (!s) continue;

        htmlChunks.push(
          `<h3>[${escapeHtml(topic.id)}] ${escapeHtml(topic.title)}</h3>`,
          '<p><strong>1. A Realidade Nua e Crua</strong></p>'
        );
        plainChunks.push(
          '',
          `--- [${topic.id}] ${topic.title} ---`,
          '1. A Realidade Nua e Crua'
        );

        for (const p of s.realityParagraphs) {
          htmlChunks.push(`<p>${richTextToHtml(p)}</p>`);
          plainChunks.push(richTextToPlain(p));
        }

        htmlChunks.push('<ul>');
        for (const kp of s.keyPoints) {
          const badge = kp.badge ? `[${kp.badge.text}] ` : '';
          htmlChunks.push(
            `<li><strong>${escapeHtml(kp.label)}</strong> ${escapeHtml(
              badge
            )}— ${richTextToHtml(kp.text)}</li>`
          );
          plainChunks.push(
            `• ${kp.label} ${badge}— ${richTextToPlain(kp.text)}`
          );
        }
        htmlChunks.push('</ul>');

        htmlChunks.push('<p><strong>2. Na Prática · Exemplos do Dia a Dia</strong></p><ul>');
        plainChunks.push('2. Na Prática · Exemplos do Dia a Dia');
        for (const ex of s.practicalExamples) {
          htmlChunks.push(
            `<li><strong>${escapeHtml(ex.title)}:</strong> ${richTextToHtml(
              ex.scenario
            )}</li>`
          );
          plainChunks.push(`• ${ex.title}: ${richTextToPlain(ex.scenario)}`);
        }
        htmlChunks.push('</ul>');

        htmlChunks.push(
          `<p><strong>3. ${escapeHtml(
            s.table.title ?? 'Tabela Comparativa Visual'
          )}</strong></p>`,
          '<table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;width:100%;margin:8px 0;"><thead><tr>'
        );
        plainChunks.push(`3. ${s.table.title ?? 'Tabela Comparativa Visual'}`);

        for (const h of s.table.headers) {
          htmlChunks.push(
            `<th style="background-color:#e0f2fe;text-align:left;">${richTextToHtml(
              h
            )}</th>`
          );
        }
        htmlChunks.push('</tr></thead><tbody>');
        plainChunks.push(s.table.headers.map(richTextToPlain).join(' | '));

        for (const row of s.table.rows) {
          htmlChunks.push('<tr>');
          for (const cell of row) {
            htmlChunks.push(`<td>${richTextToHtml(cell)}</td>`);
          }
          htmlChunks.push('</tr>');
          plainChunks.push(row.map(richTextToPlain).join(' | '));
        }
        htmlChunks.push('</tbody></table>');

        htmlChunks.push(
          `<p style="background-color:#fef3c7;padding:8px;border:1px solid #f59e0b;"><strong>4. Pegadinha de Banca · Não Caia Nessa!</strong><br/>${richTextToHtml(
            s.examTrap
          )}</p>`
        );
        plainChunks.push(
          `4. Pegadinha de Banca: ${richTextToPlain(s.examTrap)}`
        );

        if (includeDeepDive) {
          htmlChunks.push(
            `<p><strong>5. Destrinchar mais: ${escapeHtml(
              s.deepDive.headline
            )}</strong></p><ul>`
          );
          plainChunks.push(`5. Destrinchar mais: ${s.deepDive.headline}`);
          for (const pt of s.deepDive.points) {
            htmlChunks.push(`<li>${richTextToHtml(pt)}</li>`);
            plainChunks.push(`• ${richTextToPlain(pt)}`);
          }
          htmlChunks.push(
            '</ul>',
            `<p><strong>Caso Extra de Prova:</strong> ${richTextToHtml(
              s.deepDive.extraExample
            )}</p>`,
            `<p><strong>Macete de Memória:</strong> ${richTextToHtml(
              s.deepDive.mnemonic
            )}</p>`
          );
          plainChunks.push(
            `Caso Extra de Prova: ${richTextToPlain(s.deepDive.extraExample)}`,
            `Macete de Memória: ${richTextToPlain(s.deepDive.mnemonic)}`
          );
        }
      }
    }

    const htmlString = htmlChunks.join('\n');
    const plainString = plainChunks.join('\n');

    try {
      if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
        const item = new ClipboardItem({
          'text/html': new Blob([htmlString], { type: 'text/html' }),
          'text/plain': new Blob([plainString], { type: 'text/plain' }),
        });
        await navigator.clipboard.write([item]);
      } else {
        await navigator.clipboard.writeText(plainString);
      }
      setCopiedDocs(true);
      window.setTimeout(() => setCopiedDocs(false), 4000);
    } catch {
      await navigator.clipboard.writeText(plainString);
      setCopiedDocs(true);
      window.setTimeout(() => setCopiedDocs(false), 4000);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-10 sm:py-12 print:max-w-none print:p-0">
      {/* Controls & Export Actions (Hidden when printing) */}
      <div className="print:hidden space-y-6">
        <header>
          <p className="font-mono text-xs font-medium text-sky-600 dark:text-sky-400">
            Apostila & Exportação · {ALL_TOPICS.length} Tópicos
          </p>
          <h1 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#37352F] dark:text-[#EDEDED]">
            Baixar PDF ou Colar no Google Docs
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
            Confira todos os resumos fora da tela: baixe a apostila completa em PDF (118 páginas
            formatadas) ou copie o material estruturado com tabelas e negritos para colar direto
            em um Google Docs.
          </p>
        </header>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Direct PDF Download */}
          <div className="rounded-xl border border-sky-500/35 bg-sky-500/[0.06] dark:bg-sky-500/[0.08] p-5 flex flex-col justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>PDF Pronto · Todas as 9 Matérias</span>
              </div>
              <p className="text-sm font-semibold text-[#37352F] dark:text-[#EDEDED]">
                Apostila Completa de Resumos (82 tópicos)
              </p>
              <p className="text-xs leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
                Arquivo PDF gerado com tabelas comparativas, quadros de exemplos práticos, alertas
                de pegadinha de banca e macetes de memória.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="/apostila-resumos-curitiba-2026.pdf"
                download="Apostila-Resumos-Curitiba-2026.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-sky-500 dark:bg-sky-500 dark:text-slate-950 transition-colors min-h-[42px]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Baixar PDF Completo</span>
              </a>

              <a
                href="/apostila-resumos-curitiba-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#E0DFDC] dark:border-[#363636] bg-white dark:bg-[#242424] px-3.5 py-2.5 text-xs font-medium text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500 transition-colors min-h-[42px]"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Abrir no navegador</span>
              </a>
            </div>
          </div>

          {/* Card 2: Copy Rich HTML for Google Docs + Custom Print */}
          <div className="rounded-xl border border-[#E9E9E7] dark:border-[#2F2F2F] bg-[#F7F7F5]/80 dark:bg-[#202020] p-5 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Google Docs ou PDF por Matéria
                </p>
                <p className="text-xs leading-relaxed text-[#5F5E5B] dark:text-[#B5B5B5]">
                  Escolha o escopo abaixo para copiar com títulos, negritos e tabelas prontas para
                  colar (Ctrl+V) no Google Docs, ou imprimir apenas uma matéria.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <select
                  aria-label="Selecionar disciplina para exportar"
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="flex-1 rounded-lg border border-[#DCDCD8] dark:border-[#383838] bg-white dark:bg-[#191919] px-3 py-2 text-xs font-medium text-[#37352F] dark:text-[#EDEDED] min-h-[40px]"
                >
                  <option value="all">
                    Todas as 9 Disciplinas ({ALL_TOPICS.length} tópicos)
                  </option>
                  {DISCIPLINES.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.code} · {d.name} ({d.topics.length} tópicos)
                    </option>
                  ))}
                </select>

                <label className="inline-flex items-center gap-2 rounded-lg border border-[#DCDCD8] dark:border-[#383838] bg-white dark:bg-[#191919] px-3 py-2 text-xs text-[#37352F] dark:text-[#D4D4D4] cursor-pointer min-h-[40px] whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={includeDeepDive}
                    onChange={(e) => setIncludeDeepDive(e.target.checked)}
                    className="accent-sky-600"
                  />
                  <span>Incluir &ldquo;Destrinchar mais&rdquo;</span>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => void handleCopyForGoogleDocs()}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:text-slate-950 transition-colors cursor-pointer min-h-[42px]"
              >
                {copiedDocs ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    <span>Copiado! Cole no Google Docs</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    <span>Copiar para Google Docs</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#E0DFDC] dark:border-[#363636] bg-white dark:bg-[#242424] px-3.5 py-2.5 text-xs font-medium text-[#37352F] dark:text-[#EDEDED] hover:border-sky-500 transition-colors cursor-pointer min-h-[42px]"
              >
                <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Imprimir / Salvar PDF ({selectedTopicsCount})</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E9E9E7] dark:border-[#2F2F2F] pt-5 flex items-center justify-between text-xs text-[#787774] dark:text-[#9B9A97]">
          <span>
            Pré-visualização da Apostila ({selectedDisciplines.length}{' '}
            {selectedDisciplines.length === 1 ? 'disciplina' : 'disciplinas'} ·{' '}
            {selectedTopicsCount} tópicos)
          </span>
          <span className="font-mono tabular-nums">Curitiba · {EXAM_INFO.examDateFormatted}</span>
        </div>
      </div>

      {/* Printable / Preview Apostila Content */}
      <div className="mt-6 space-y-10 print:mt-0 print:text-black">
        {/* Print-only Cover Header */}
        <div className="hidden print:block border-b-2 border-slate-800 pb-4 mb-6">
          <p className="font-mono text-[10px] uppercase tracking-wider text-sky-700 font-bold">
            Apostila Completa de Resumos · Edital Curitiba
          </p>
          <h1 className="mt-1 font-display text-2xl font-bold text-slate-900">
            {EXAM_INFO.role} — {EXAM_INFO.institution}
          </h1>
          <p className="mt-1 text-xs text-slate-600">
            Prova prevista: {EXAM_INFO.examDateFormatted} · {selectedTopicsCount} tópicos selecionados
          </p>
        </div>

        {selectedDisciplines.map((disc) => (
          <section key={disc.id} className="space-y-6">
            <div className="rounded-lg border border-[#E2E1DD] dark:border-[#303030] bg-[#F7F7F5] dark:bg-[#222222] px-5 py-4 print:bg-slate-100 print:border-slate-300">
              <p className="font-mono text-xs font-semibold text-sky-700 dark:text-sky-400 print:text-sky-800">
                Disciplina {disc.code} · {disc.block} · {disc.topics.length} tópicos
              </p>
              <h2 className="mt-1 font-display text-xl font-bold text-[#37352F] dark:text-[#EDEDED] print:text-slate-900">
                {disc.name}
              </h2>
              <p className="mt-1 text-xs text-[#5F5E5B] dark:text-[#B5B5B5] print:text-slate-700">
                {disc.weightNote}
              </p>
            </div>

            <div className="space-y-8">
              {disc.topics.map((topic) => {
                const s = TOPIC_SUMMARIES[topic.id];
                if (!s) return null;

                return (
                  <article
                    key={topic.id}
                    className="rounded-lg border border-[#E9E9E7] dark:border-[#2E2E2E] bg-white dark:bg-[#1B1B1B] p-5 space-y-4 print:border-slate-300 print:bg-white print:break-inside-avoid-page"
                  >
                    <header className="border-b border-[#EFEFEA] dark:border-[#2C2C2C] pb-3 print:border-slate-200">
                      <span className="font-mono text-xs font-semibold text-sky-700 dark:text-sky-400 print:text-sky-800">
                        {topic.id} · Prioridade {topic.priority}
                      </span>
                      <h3 className="mt-0.5 font-display text-base font-bold text-[#2E2C27] dark:text-[#F0F0EE] print:text-slate-900">
                        {topic.title}
                      </h3>
                    </header>

                    {/* 1. Realidade */}
                    <div className="space-y-2.5 text-[13.5px] leading-relaxed text-[#43413C] dark:text-[#D0D0CE] print:text-slate-800">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 print:text-sky-800">
                        1. A Realidade Nua e Crua
                      </p>
                      {s.realityParagraphs.map((p, idx) => (
                        <p key={idx}>{renderRichInline(p)}</p>
                      ))}
                      <ul className="space-y-1.5 pt-1">
                        {s.keyPoints.map((kp) => (
                          <li key={kp.label} className="text-[13px]">
                            <strong>• {kp.label}</strong>
                            {kp.badge ? ` [${kp.badge.text}]` : ''}:{' '}
                            {renderRichInline(kp.text)}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 2. Na Prática */}
                    <div className="space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 print:text-emerald-800">
                        2. Na Prática · Exemplos do Dia a Dia
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {s.practicalExamples.map((ex, idx) => (
                          <div
                            key={idx}
                            className="rounded border border-emerald-500/25 bg-emerald-500/[0.04] p-3 text-[12.5px] leading-relaxed print:border-emerald-300 print:bg-emerald-50 print:text-slate-800"
                          >
                            <p className="font-semibold text-emerald-900 dark:text-emerald-200 print:text-emerald-900">
                              {ex.title}
                            </p>
                            <p className="mt-1">{renderRichInline(ex.scenario)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. Tabela */}
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#5F5E5B] dark:text-[#A8A8A6] print:text-slate-700">
                        3. {s.table.title ?? 'Tabela Comparativa Visual'}
                      </p>
                      <div className="overflow-x-auto rounded border border-[#E2E1DD] dark:border-[#303030] print:border-slate-300">
                        <table className="w-full border-collapse text-left text-xs">
                          <thead>
                            <tr className="bg-sky-500/[0.08] dark:bg-sky-500/[0.12] print:bg-sky-50 border-b border-[#E2E1DD] print:border-slate-300">
                              {s.table.headers.map((h, i) => (
                                <th key={i} className="px-3 py-2 font-bold print:text-slate-900">
                                  {renderRichInline(h)}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAEAE6] dark:divide-[#2B2B2B] print:divide-slate-200">
                            {s.table.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="odd:bg-white even:bg-[#F7F7F5]/75 dark:odd:bg-[#1B1B1B] dark:even:bg-[#232323] print:odd:bg-white print:even:bg-slate-50"
                              >
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className="px-3 py-2 align-top print:text-slate-800"
                                  >
                                    {renderRichInline(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* 4. Pegadinha */}
                    <div className="rounded border border-amber-500/40 bg-amber-500/[0.08] p-3 text-[12.5px] leading-relaxed print:border-amber-400 print:bg-amber-50 print:text-slate-900">
                      <p className="font-bold uppercase tracking-wider text-[11px] text-amber-900 dark:text-amber-300 print:text-amber-900">
                        4. Pegadinha de Banca · Não Caia Nessa!
                      </p>
                      <p className="mt-1">{renderRichInline(s.examTrap)}</p>
                    </div>

                    {/* 5. Deep Dive */}
                    {includeDeepDive && (
                      <div className="rounded border border-sky-500/30 bg-sky-500/[0.04] p-3.5 space-y-1.5 text-[12.5px] leading-relaxed print:border-sky-300 print:bg-slate-50 print:text-slate-800">
                        <p className="font-bold text-sky-800 dark:text-sky-300 print:text-sky-900">
                          5. Destrinchar mais: {s.deepDive.headline}
                        </p>
                        <ul className="space-y-1">
                          {s.deepDive.points.map((pt, idx) => (
                            <li key={idx}>• {renderRichInline(pt)}</li>
                          ))}
                        </ul>
                        <p>
                          <strong>Caso Extra de Prova: </strong>
                          {renderRichInline(s.deepDive.extraExample)}
                        </p>
                        <p className="font-medium text-emerald-800 dark:text-emerald-300 print:text-emerald-900">
                          <strong>Macete de Memória: </strong>
                          {renderRichInline(s.deepDive.mnemonic)}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
