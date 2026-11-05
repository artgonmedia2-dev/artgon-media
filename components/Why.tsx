import Link from "next/link";
import ReasonsCarousel from "./ReasonsCarousel";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";
import { reasons } from "@/lib/content";

/**
 * Titre collant à gauche, grille de 6 atouts à droite.
 * Cartes claires avec icône au trait ; survol en fond violet pâle.
 */
export default function Why() {
  return (
    <section id="pourquoi" className="scroll-mt-20 py-16 sm:py-24 lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
        <div>
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              center={false}
              eyebrow="Pourquoi nous choisir"
              title={
                <>
                  L&apos;agence digitale de{" "}
                  <em className="accent text-violet-brand">référence</em> à Nador
                </>
              }
              desc="Expertise technique, connaissance du marché local et accompagnement humain : voilà ce qui nous distingue."
            />
            <div className="reveal mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-violet-brand px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(102,85,160,0.3)] transition-colors duration-300 hover:bg-violet-dark"
              >
                Parlons de votre projet
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.25}
                />
              </Link>
              <span className="flex items-center gap-3 text-sm text-mute">
                <span className="font-display text-3xl font-bold text-ink">50+</span>
                projets livrés
              </span>
            </div>
          </div>
        </div>

        {/* Mobile : carrousel (Kokonut UI) ; dès 640px : grille */}
        <div className="-mx-4 sm:hidden">
          <ReasonsCarousel />
        </div>

        <div className="hidden gap-5 sm:grid sm:grid-cols-2">
          {reasons.map((r) => (
            <article
              key={r.title}
              className="reveal rounded-2xl border border-line bg-white p-5 transition-colors duration-300 hover:border-violet-brand/30 hover:bg-violet-pale/60 sm:p-7"
            >
              {/* Mobile : icône et titre sur une ligne ; empilés dès 640px */}
              <div className="flex items-center gap-4 sm:block">
                {/* Même style d'icône que l'accordéon des services */}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-violet-brand ring-1 ring-line sm:h-12 sm:w-12">
                  <Icon name={r.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="font-display text-base font-semibold text-ink sm:mt-5 sm:text-lg">
                  {r.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mute sm:mt-2.5 sm:text-[0.95rem]">{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
