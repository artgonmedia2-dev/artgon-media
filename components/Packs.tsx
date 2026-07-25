import Link from "next/link";
import { packs, packsNote } from "@/lib/pricing";
import { Icon } from "./icons";

export default function Packs() {
  return (
    <section id="packs" className="scroll-mt-40">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
            Section 08
          </span>
          <h2 className="mt-2 font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-black leading-tight text-ink">
            Forfaits packagés « clé en main »
          </h2>
          <p className="mt-2 text-sm font-semibold text-mute">
            Combinés pour maximiser votre ROI — économies jusqu&apos;à 25%
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {packs.map((p) => (
          <article
            key={p.name}
            className={`reveal relative flex flex-col rounded-3xl border p-5 sm:p-7 transition-all duration-300 hover:-translate-y-2 ${
              p.featured
                ? "border-transparent bg-ink text-white shadow-[0_30px_70px_rgba(20,20,43,0.3)]"
                : "border-line bg-white hover:shadow-[0_24px_60px_rgba(102,85,160,0.14)]"
            }`}
          >
            {p.saving ? (
              <span
                className={`absolute -top-3 left-7 rounded-full px-3 py-1 font-display text-[0.6rem] font-bold uppercase tracking-wider ${
                  p.featured
                    ? "bg-teal-brand text-ink"
                    : "bg-teal-pale text-teal-dark"
                }`}
              >
                {p.saving}
              </span>
            ) : null}

            <h3
              className={`font-display text-base font-black ${p.featured ? "text-white" : "text-ink"}`}
            >
              {p.name}
            </h3>
            <p
              className={`mt-1 text-xs font-semibold ${p.featured ? "text-white/60" : "text-mute"}`}
            >
              {p.tagline}
            </p>

            <ul className="mt-6 flex-1 space-y-2.5">
              {p.items.map((it) => (
                <li
                  key={it}
                  className={`flex items-start gap-2 text-sm ${p.featured ? "text-white/85" : "text-ink-soft"}`}
                >
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-brand" strokeWidth={2.25} />
                  {it}
                </li>
              ))}
            </ul>

            <div
              className={`mt-6 border-t pt-5 ${p.featured ? "border-white/15" : "border-line"}`}
            >
              <p
                className={`text-[0.7rem] font-semibold line-through ${p.featured ? "text-white/40" : "text-mute/70"}`}
              >
                {p.unitTotal}
              </p>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span
                  className={`font-display text-[2rem] font-black leading-none ${p.featured ? "text-teal-brand" : "text-violet-brand"}`}
                >
                  {p.price}
                </span>
                {p.price !== "Sur devis" ? (
                  <span
                    className={`font-display text-xs font-bold ${p.featured ? "text-white/60" : "text-mute"}`}
                  >
                    MAD/mois
                  </span>
                ) : null}
              </div>
              <Link
                href="/#contact"
                className={`mt-5 block rounded-full py-3 text-center text-xs font-bold uppercase tracking-wide transition-all ${
                  p.featured
                    ? "bg-teal-brand text-ink hover:bg-teal-light"
                    : "bg-violet-brand text-white hover:bg-violet-light"
                }`}
              >
                Choisir ce pack
              </Link>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 flex gap-3 rounded-2xl border border-teal-brand/25 bg-teal-pale/60 p-5 text-sm leading-relaxed text-ink-soft">
        <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0 text-teal-dark" />
        <span>{packsNote}</span>
      </p>
    </section>
  );
}
