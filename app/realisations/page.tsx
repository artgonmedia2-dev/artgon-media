import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Particles from "@/components/Particles";
import { Icon } from "@/components/icons";
import { caseStudies } from "@/lib/content";
import { SITE_URL, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Nos réalisations web & digitales à Nador",
  description:
    "Découvrez les projets réalisés par Artgon MEDIA : sites web, applications mobiles Flutter et campagnes digitales pour des clients à Nador et en Europe.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Nos réalisations web & digitales à Nador | Artgon MEDIA",
    description:
      "Sites web, applications mobiles Flutter et campagnes digitales pour des clients à Nador et en Europe.",
    url: "/realisations",
    type: "website",
  },
};

const breadcrumb = breadcrumbLd([
  { name: "Accueil", url: "/" },
  { name: "Réalisations", url: "/realisations" },
]);

const listLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Réalisations Artgon MEDIA",
  itemListElement: caseStudies.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: c.title,
      description: c.desc,
      ...(c.url ? { url: c.url } : {}),
      creator: { "@id": `${SITE_URL}/#organization` },
    },
  })),
};

/** Collage du héros : trois captures inclinées qui se chevauchent. */
const heroShots = [
  {
    src: "/realisations/nador-west-wood.webp",
    label: "nadorwestwood.com",
    pos: "top-4 left-0 w-[70%] -rotate-6",
    size: "aspect-[16/10]",
  },
  {
    src: "/realisations/ritt.webp",
    label: "RITT",
    pos: "top-28 right-0 w-[64%] rotate-3",
    size: "aspect-[16/10]",
  },
  {
    src: "/realisations/ligna.webp",
    label: "ligna-collection.com",
    pos: "bottom-2 left-[14%] w-[62%] -rotate-2",
    size: "aspect-[16/10]",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, listLd]) }}
      />

      {/* En-tête : texte à gauche, collage de captures à droite */}
      <section className="bg-night-gradient relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16 text-white sm:pt-32">
        <Particles />
        <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <div>
            <nav aria-label="Fil d'Ariane" className="text-sm text-white/50">
              <ol className="flex gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-teal-light">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white/80">
                  Réalisations
                </li>
              </ol>
            </nav>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-light">
              <span className="h-px w-6 bg-current" aria-hidden />
              Portfolio
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
              Nos <em className="accent text-teal-brand">réalisations</em>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
              Des projets réels, livrés pour des entreprises de Nador, du Maroc
              et de la diaspora. Voici ce que nous avons construit pour chacune.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#projets"
                className="btn-sweep rounded-lg bg-teal-brand px-7 py-4 text-center text-sm font-bold text-night shadow-[0_16px_40px_rgba(69,196,187,0.35)]"
              >
                Voir projets
              </a>
              <Link
                href="/#contact"
                className="rounded-lg border border-white/30 px-7 py-4 text-center text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-white hover:bg-white/5"
              >
                Parlons de votre projet
              </Link>
            </div>
          </div>

          {/* Collage de captures */}
          <div aria-hidden className="relative mx-auto hidden h-[30rem] w-full max-w-xl sm:block">
            <span className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-brand/20 blur-3xl" />
            {heroShots.map((shot, i) => (
              <div key={shot.src} className={`absolute ${shot.pos}`}>
                <div
                  className="overflow-hidden rounded-xl bg-white shadow-[0_30px_70px_rgba(0,0,0,0.45)] ring-1 ring-white/20 animate-float"
                  style={{ animationDelay: `${i * -3}s`, animationDuration: `${9 + i * 2}s` }}
                >
                  <div className="flex items-center gap-1 border-b border-line px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    <span className="flex-1 truncate px-2 text-center text-[0.6rem] text-mute">
                      {shot.label}
                    </span>
                  </div>
                  <div className={`relative ${shot.size}`}>
                    <Image
                      src={shot.src}
                      alt=""
                      fill
                      priority={i === 0}
                      sizes="380px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets en alternance image / texte */}
      <section id="projets" className="scroll-mt-20 py-24 lg:py-28">
        <div className="container-x space-y-20 lg:space-y-28">
          {caseStudies.map((c, i) => (
            <article
              key={c.title}
              className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Aperçu façon navigateur */}
              <div className={i % 2 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_rgba(13,12,34,0.18)] ring-1 ring-line">
                  <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="flex-1 truncate px-3 text-center text-[0.7rem] text-mute">
                      {c.url ? c.url.replace(/^https?:\/\//, "") : c.cat}
                    </span>
                  </div>
                  {c.image ? (
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={c.image}
                        alt={`Aperçu du projet ${c.title}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="bg-night-gradient flex aspect-[16/10] flex-col items-center justify-center text-center text-white">
                      <span className="text-sm text-white/50">2026</span>
                      <span className="mt-2 font-display text-3xl font-bold">{c.title}</span>
                      <span className="accent mt-1 text-xl text-teal-brand">{c.cat}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-semibold text-teal-dark">{c.cat}</span>
                  {c.status ? (
                    <span className="rounded-full bg-violet-pale px-3 py-1 text-xs font-semibold text-violet-brand">
                      {c.status}
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.25rem)] font-bold leading-tight text-ink">
                  {c.title}
                </h2>
                <p className="mt-2 text-sm text-mute">{c.context}</p>
                <p className="mt-5 leading-relaxed text-ink-soft">{c.desc}</p>

                <h3 className="mt-7 text-xs font-semibold uppercase tracking-wider text-mute">
                  Points clés
                </h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-brand"
                        strokeWidth={2.25}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                  <ul className="flex flex-wrap gap-x-3 gap-y-1">
                    {c.tags.map((t) => (
                      <li key={t} className="text-sm font-semibold text-violet-brand">
                        #{t.replace(/\s+/g, "")}
                      </li>
                    ))}
                  </ul>
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener"
                      className="group inline-flex items-center gap-1.5 text-sm font-bold text-ink transition-colors hover:text-violet-brand"
                    >
                      Voir le site
                      <Icon
                        name="arrow-up-right"
                        className="h-5 w-5 text-teal-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.75}
                      />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="pb-24 lg:pb-28">
        <div className="container-x">
          <div className="bg-night-gradient reveal relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-12">
            <span
              aria-hidden
              className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full border border-white/10"
            />
            <h2 className="relative font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold">
              Et votre <em className="accent text-teal-brand">projet</em> ?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
              Décrivez-nous votre projet et nous vous recontactons sous 2h pour
              un premier échange gratuit et sans engagement.
            </p>
            <Link
              href="/#contact"
              className="btn-sweep relative mt-8 inline-block rounded-lg bg-teal-brand px-8 py-4 text-sm font-bold text-night"
            >
              Parlons de votre projet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
