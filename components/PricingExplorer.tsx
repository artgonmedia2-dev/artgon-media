"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/lib/pricing";
import { Icon } from "./icons";

/**
 * Toutes les catégories sont rendues (bon pour le SEO et l'impression).
 * La barre collante sert d'ancrage et met en évidence la section visible.
 */
export default function PricingExplorer() {
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      {/* Barre d'ancrage collante */}
      <div className="sticky top-18 z-30 -mx-4 sm:-mx-6 border-y border-line bg-white/85 px-4 sm:px-6 py-3 backdrop-blur-xl">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-3.5 sm:px-4 py-2 sm:py-2.5 text-[0.72rem] sm:text-[0.78rem] font-bold transition-all ${
                active === c.id
                  ? "border-violet-brand bg-violet-brand text-white shadow-[0_8px_24px_rgba(102,85,160,0.3)]"
                  : "border-line bg-white text-mute hover:border-violet-brand/40 hover:text-violet-brand"
              }`}
            >
              <Icon name={c.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="whitespace-nowrap">{c.title}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-24 pt-16">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-40">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
                  Section {cat.num}
                </span>
                <h2 className="mt-2 font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-black leading-tight text-ink">
                  {cat.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-mute">
                  {cat.subtitle}
                </p>
              </div>
              <Link
                href="/#contact"
                className="rounded-full border-2 border-violet-brand/30 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-violet-brand transition-all hover:border-violet-brand hover:bg-violet-pale"
              >
                Demander un devis
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {cat.rows.map((r) => (
                <article
                  key={r.name}
                  className={`reveal relative flex flex-col rounded-3xl border p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                    r.featured
                      ? "border-violet-brand bg-gradient-to-b from-violet-pale/70 to-white shadow-[0_20px_50px_rgba(102,85,160,0.16)]"
                      : "border-line bg-white hover:shadow-[0_20px_50px_rgba(102,85,160,0.1)]"
                  }`}
                >
                  {r.featured ? (
                    <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-violet-brand px-3 py-1 font-display text-[0.6rem] font-bold uppercase tracking-wider text-white">
                      <Icon name="star" className="h-3 w-3" strokeWidth={2} />
                      Le plus demandé
                    </span>
                  ) : null}

                  <h3 className="font-display text-lg font-black text-ink">
                    {r.name}
                  </h3>

                  {r.meta && r.meta !== "—" ? (
                    <span className="mt-3 inline-flex w-fit items-center rounded-full bg-teal-pale px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-teal-dark">
                      {r.meta}
                    </span>
                  ) : null}

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-mute">
                    {r.desc}
                  </p>

                  <div className="mt-6 border-t border-line pt-5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-[2rem] font-black leading-none text-violet-brand">
                        {r.price}
                      </span>
                      {r.price !== "Sur devis" ? (
                        <span className="font-display text-xs font-bold text-mute">
                          MAD
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 text-xs font-semibold text-mute">
                      {r.priceNote ?? "prix net, hors TVA"}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 flex gap-3 rounded-2xl border border-teal-brand/25 bg-teal-pale/60 p-5 text-sm leading-relaxed text-ink-soft">
              <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0 text-teal-dark" />
              <span>{cat.note}</span>
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
