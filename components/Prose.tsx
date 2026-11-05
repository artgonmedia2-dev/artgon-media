import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Rendu d'un Markdown simple (articles du blog) sans dépendance :
 * ## / ###, paragraphes, listes à puces et numérotées, tableaux,
 * **gras**, `code` et [liens](/url).
 */
function inline(text: string, key = 0): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = key;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const t = m[0];
    if (t.startsWith("**")) {
      out.push(<strong key={k++} className="font-semibold text-ink">{t.slice(2, -2)}</strong>);
    } else if (t.startsWith("`")) {
      out.push(<code key={k++} className="rounded bg-violet-pale px-1.5 py-0.5 text-[0.9em] text-violet-dark">{t.slice(1, -1)}</code>);
    } else {
      const [, label, href] = t.match(/\[([^\]]+)\]\(([^)]+)\)/)!;
      out.push(
        href.startsWith("/") ? (
          <Link key={k++} href={href} className="font-semibold text-violet-brand underline underline-offset-2 hover:text-teal-dark">{label}</Link>
        ) : (
          <a key={k++} href={href} target="_blank" rel="noopener" className="font-semibold text-violet-brand underline underline-offset-2 hover:text-teal-dark">{label}</a>
        ),
      );
    }
    last = m.index + t.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function Prose({ source }: { source: string }) {
  const lines = source.trim().split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (line.startsWith("### ")) {
      blocks.push(<h3 key={key++} className="mt-8 font-display text-lg font-semibold text-ink sm:text-xl">{inline(line.slice(4))}</h3>);
      i++;
    } else if (line.startsWith("## ")) {
      blocks.push(<h2 key={key++} className="mt-12 font-display text-2xl font-bold leading-tight text-ink sm:text-[1.7rem]">{inline(line.slice(3))}</h2>);
      i++;
    } else if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = lines[i].trim().slice(1, -1).split("|").map((c) => c.trim());
        if (!cells.every((c) => /^-+$/.test(c))) rows.push(cells);
        i++;
      }
      const [head, ...body] = rows;
      blocks.push(
        <div key={key++} className="mt-6 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-violet-pale text-ink">
              <tr>{head.map((c, j) => <th key={j} className="px-4 py-3 font-semibold">{inline(c)}</th>)}</tr>
            </thead>
            <tbody>
              {body.map((r, ri) => (
                <tr key={ri} className="border-t border-line">
                  {r.map((c, j) => <td key={j} className="px-4 py-3 text-ink-soft">{inline(c)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
    } else if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items: string[] = [];
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^(- |\d+\. )/, ""));
        i++;
      }
      const cls = "mt-5 space-y-2.5 pl-6 text-base leading-relaxed text-ink-soft";
      blocks.push(
        ordered ? (
          <ol key={key++} className={`${cls} list-decimal`}>{items.map((it, j) => <li key={j}>{inline(it)}</li>)}</ol>
        ) : (
          <ul key={key++} className={`${cls} list-disc marker:text-teal-brand`}>{items.map((it, j) => <li key={j}>{inline(it)}</li>)}</ul>
        ),
      );
    } else {
      const para: string[] = [];
      while (i < lines.length && lines[i].trim() && !/^(#{2,3} |\||- |\d+\. )/.test(lines[i].trim())) {
        para.push(lines[i].trim());
        i++;
      }
      blocks.push(<p key={key++} className="mt-5 text-base leading-relaxed text-ink-soft">{inline(para.join(" "))}</p>);
    }
  }
  return <>{blocks}</>;
}
