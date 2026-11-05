"use client";

import Link from "next/link";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";
import { services } from "@/lib/content";
import { whatsappLink } from "@/lib/pricing";

/**
 * Liste en accordéon à gauche, fiche visuelle de la prestation
 * ouverte à droite (collante sur grand écran).
 */
export default function Services() {
  const [active, setActive] = useState(0);
  const cur = services[active];

  return (
    <section id="services" className="scroll-mt-20 bg-cloud py-16 sm:py-24 lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            center={false}
            eyebrow="Nos services"
            title={
              <>
                Services web & digitaux à Nador
              </>
            }
            desc="Artgon MEDIA propose une gamme complète de services digitaux pour propulser votre entreprise en ligne, de la création de site web à l'automatisation par l'IA."
          />

          <ul className="reveal mt-10 divide-y divide-line border-y border-line">
            {services.map((s, i) => {
              const open = i === active;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`service-${i}`}
                    onClick={() => setActive(i)}
                    className="group flex w-full cursor-pointer items-center gap-4 py-5 text-left"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        open
                          ? "bg-violet-brand text-white"
                          : "bg-white text-violet-brand ring-1 ring-line"
                      }`}
                    >
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <h3
                      className={`flex-1 font-display text-base font-semibold transition-colors sm:text-lg ${open ? "text-violet-brand" : "text-ink group-hover:text-violet-brand"}`}
                    >
                      {s.title}
                    </h3>
                    <span
                      className={`text-xl leading-none font-light transition-transform ${open ? "rotate-45 text-violet-brand" : "text-mute"}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`service-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-6 pl-14">
                        <p className="leading-relaxed text-mute">{s.desc}</p>
                        <p className="mt-3 text-[13px] font-semibold uppercase tracking-wider text-teal-dark">
                          {s.tags.join(" · ")}
                        </p>
                        <Link
                          href={s.href}
                          className="mt-1 -mb-3 inline-flex min-h-11 items-center gap-2 py-3 text-sm font-bold text-violet-brand hover:text-teal-dark"
                        >
                          À partir de {s.from}
                          <Icon name="arrow" className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="reveal mt-10 rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-ink">
              Vous ne trouvez pas ce que vous cherchez ?
            </h3>
            <p className="mt-2 leading-relaxed text-mute">
              Nous développons des solutions sur mesure adaptées à chaque
              besoin. Décrivez-nous votre projet.
            </p>
            <a
              href={whatsappLink("Bonjour Artgon MEDIA, je souhaite décrire mon projet.")}
              target="_blank"
              rel="noopener"
              className="btn-sweep mt-5 inline-block rounded-lg bg-violet-brand px-6 py-3.5 text-sm font-bold text-white hover:text-night"
            >
              Devis gratuit sur WhatsApp
            </a>
          </div>
        </div>

        {/* Fiche visuelle de la prestation ouverte */}
        <div className="reveal hidden lg:block">
          <div className="sticky top-28">
            <div className="bg-night-gradient relative overflow-hidden rounded-3xl p-10 text-white shadow-[0_30px_80px_rgba(13,12,34,0.35)]">
              <span
                aria-hidden
                className="absolute -top-16 -right-16 h-64 w-64 rounded-full border border-white/10"
              />
              <span
                aria-hidden
                className="absolute -top-4 -right-4 h-40 w-40 rounded-full border border-teal-brand/30"
              />
              <div className="relative flex items-start justify-between gap-4">
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-teal-light ring-1 ring-white/15">
                  <Icon name={cur.icon} className="h-10 w-10" strokeWidth={1.5} />
                </span>
                <Link
                  href={cur.href}
                  className="btn-sweep rounded-lg bg-teal-brand px-6 py-3 text-sm font-bold text-night shadow-[0_8px_24px_rgba(69,196,187,0.35)]"
                >
                  Voir les tarifs →
                </Link>
              </div>
              <h3 className="relative mt-8 font-display text-3xl font-bold leading-tight">
                {cur.title}
              </h3>

              <div className="relative mt-10 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Délai indicatif
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-teal-brand">
                  {cur.delay}
                </p>
              </div>

              <ul className="relative mt-8 flex flex-wrap gap-2">
                {cur.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
