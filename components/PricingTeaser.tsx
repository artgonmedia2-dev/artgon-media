import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";
import { customQuoteWhatsapp, planWhatsapp, plans } from "@/lib/pricing";

/** Les 3 plans « site web » — affichés sur l'accueil et sur /tarifs. */
export default function PricingTeaser({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section id="tarifs" className="scroll-mt-20 bg-cloud py-16 sm:py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nos tarifs"
          title={
            <>
              Des prix transparents à Nador
            </>
          }
          desc="Tous les prix sont en dirhams marocains (MAD), TVA incluse. Devis personnalisé gratuit sur demande."
        />

        <div className="mx-auto mt-10 grid max-w-6xl items-start gap-6 sm:mt-16 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`reveal relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                p.featured
                  ? "bg-night-gradient text-white shadow-[0_30px_70px_rgba(13,12,34,0.35)] lg:-mt-4"
                  : "border border-line bg-white hover:shadow-[0_24px_60px_rgba(102,85,160,0.12)]"
              }`}
            >
              {p.featured ? (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-teal-brand px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-night">
                  <Icon name="star" className="h-3 w-3" strokeWidth={2} />
                  Le plus populaire
                </span>
              ) : null}

              <h3
                className={`font-display text-sm font-semibold uppercase tracking-[0.14em] ${p.featured ? "text-teal-light" : "text-mute"}`}
              >
                {p.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1.5">
                <span
                  className={`font-display text-[2.8rem] font-bold leading-none ${p.featured ? "text-white" : "text-ink"}`}
                >
                  {p.price}
                </span>
                <span
                  className={`font-display text-sm font-semibold ${p.featured ? "text-white/60" : "text-mute"}`}
                >
                  MAD /unique
                </span>
              </div>

              <p
                className={`mt-4 text-sm leading-relaxed ${p.featured ? "text-white/70" : "text-mute"}`}
              >
                {p.desc}
              </p>

              <ul
                className={`mt-6 flex-1 space-y-2.5 border-t pt-6 ${p.featured ? "border-white/15" : "border-line"}`}
              >
                {p.features.map((it, k) => (
                  <li
                    key={it}
                    className={`${k >= 5 ? "hidden lg:flex" : "flex"} items-start gap-2.5 text-sm ${p.featured ? "text-white/85" : "text-ink-soft"}`}
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal-brand"
                      strokeWidth={2.25}
                    />
                    {it}
                  </li>
                ))}
              </ul>
              {p.features.length > 5 ? (
                <details className="group mt-3 lg:hidden">
                  <summary
                    className={`flex min-h-11 cursor-pointer list-none items-center text-sm font-bold ${p.featured ? "text-teal-light" : "text-violet-brand"}`}
                  >
                    <span className="group-open:hidden">Voir tout (+{p.features.length - 5})</span>
                    <span className="hidden group-open:inline">Réduire</span>
                  </summary>
                  <ul className="space-y-2.5">
                    {p.features.slice(5).map((it) => (
                      <li
                        key={it}
                        className={`flex items-start gap-2.5 text-sm ${p.featured ? "text-white/85" : "text-ink-soft"}`}
                      >
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-brand" strokeWidth={2.25} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </details>
              ) : null}

              <a
                href={planWhatsapp(p)}
                target="_blank"
                rel="noopener"
                className={`mt-8 block rounded-lg py-3.5 text-center text-sm font-bold transition-all ${
                  p.featured
                    ? "bg-teal-brand text-night hover:bg-teal-light"
                    : "border border-violet-brand/30 text-violet-brand hover:border-violet-brand hover:bg-violet-pale"
                }`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="bg-night-gradient reveal relative mt-14 overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-12">
          <span
            aria-hidden
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-white/10"
          />
          <h3 className="relative mx-auto max-w-2xl font-display text-[clamp(1.4rem,3vw,2rem)] font-bold leading-tight">
            Besoin d&apos;un devis sur mesure{" "}
            pour un projet plus complexe ?
          </h3>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={customQuoteWhatsapp}
              target="_blank"
              rel="noopener"
              className="btn-sweep rounded-lg bg-teal-brand px-8 py-4 text-sm font-bold text-night"
            >
              Devis gratuit sur WhatsApp
            </a>
            {showAllLink ? (
              <Link
                href="/tarifs"
                className="rounded-lg border border-white/30 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-white hover:bg-white/5"
              >
                Voir tous nos forfaits →
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
