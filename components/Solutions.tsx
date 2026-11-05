import Particles from "./Particles";
import { Icon } from "./icons";
import Link from "next/link";
import { HrPreview, WhatsappPreview } from "./SoftwarePreviews";
import { solutions } from "@/lib/solutions";

const previews = { hr: HrPreview, whatsapp: WhatsappPreview };

/** Logiciels édités par l'agence — section sombre à bord biseauté. */
export default function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-night-gradient slant-top relative scroll-mt-20 overflow-hidden pt-24 pb-16 sm:pt-36 sm:pb-24 text-white lg:pt-44 lg:pb-28"
    >
      <Particles />
      <div className="container-x relative z-10">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-light">
            <span className="h-px w-6 bg-current" aria-hidden />
            Nos solutions
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.15] tracking-tight">
            Des logiciels conçus à <em className="accent text-teal-brand">Nador</em>,
            pour le Maroc
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
            En plus des projets sur mesure, nous éditons nos propres outils,
            adaptés à la réglementation et aux usages marocains.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-2">
          {solutions.map((s) => {
            const Preview = previews[s.preview];
            return (
              <article
                key={s.name}
                className="reveal group overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:ring-teal-brand/40"
              >
                {/* Aperçu de l'interface */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-violet-dark/60 to-night">
                  <span
                    aria-hidden
                    className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-teal-brand/20 blur-3xl transition-opacity group-hover:opacity-80"
                  />
                  <div
                    aria-hidden
                    className="relative mx-auto h-full max-w-md transition-transform duration-500 group-hover:scale-[1.03]"
                  >
                    <Preview />
                  </div>
                </div>

                <div className="p-7 sm:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold">{s.name}</h3>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                      Sur devis
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-white/70">{s.tagline}</p>

                  <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-center gap-1.5 text-xs font-medium text-teal-light">
                      <Icon name="check" className="h-3.5 w-3.5 shrink-0" strokeWidth={2.25} />
                      {s.offer}
                    </p>
                    <Link
                      href={`/solutions/${s.slug}`}
                      className="btn-sweep shrink-0 rounded-lg bg-teal-brand px-5 py-3 text-center text-sm font-bold text-night"
                    >
                      Découvrir {s.name}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
