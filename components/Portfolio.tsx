import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";
import { projects } from "@/lib/content";

/**
 * Cartes projet : capture dans une fenêtre de navigateur blanche qui déborde
 * au-dessus d'une carte nuit, titre centré en couleur d'accent, lien ↗ à droite des technologies.
 */
export default function Portfolio() {
  return (
    <section id="realisations" className="scroll-mt-20 py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Réalisations"
          title={
            <>
              Nos derniers <em className="accent text-violet-brand">projets</em>
            </>
          }
          desc="Des projets concrets qui ont transformé la présence digitale de nos clients à Nador et en Europe."
        />

        <div className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group mt-20 flex flex-col rounded-[20px] border border-violet-brand/30 bg-night px-5 pb-10 shadow-[0_0_20px_1px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5 sm:px-12"
            >
              {/* Fenêtre de navigateur qui déborde au-dessus de la carte */}
              <div className="-mt-20 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(13,12,34,0.18)]">
                <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="flex-1 truncate px-3 text-center text-[0.7rem] text-mute">
                    {p.cat}
                  </span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`Aperçu du projet ${p.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <h3 className="mt-7 text-center font-display text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold leading-tight text-teal-brand">
                {p.title}
              </h3>
              <p className="mt-2 text-center text-sm text-white/50">{p.context}</p>

              <p className="mt-6 flex-1 text-[1.05rem] leading-relaxed text-white/90">
                {p.desc}
              </p>

              <div className="mt-6 flex items-center justify-between gap-4">
                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="text-sm font-semibold text-white">
                      #{t.replace(/\s+/g, "")}
                    </li>
                  ))}
                </ul>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Voir le site ${p.title}`}
                    title="Voir le site"
                    className="shrink-0 text-teal-brand transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1"
                  >
                    <Icon name="arrow-up-right" className="h-7 w-7" strokeWidth={1.5} />
                  </a>
                ) : null}
              </div>

            </article>
          ))}
        </div>

        <div className="reveal mt-14 text-center">
          <Link
            href="/realisations"
            className="group inline-flex items-center gap-2.5 rounded-lg bg-violet-brand px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(102,85,160,0.3)] transition-colors duration-300 hover:bg-violet-dark"
          >
            Voir toutes les réalisations
            <Icon
              name="arrow"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
