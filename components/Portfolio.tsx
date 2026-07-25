import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { Icon, type IconName } from "./icons";

const projects: {
  icon: IconName;
  gradient: string;
  url: string;
  href: string;
  cat: string;
  title: string;
  desc: string;
  cta: string;
}[] = [
  {
    icon: "factory",
    gradient: "from-[#1A3A2A] to-[#52B788]",
    url: "nadorwestwood.com",
    href: "https://nadorwestwood.com",
    cat: "Web PHP · Marketing B2B · SEO",
    title: "Nador West Wood",
    desc: "Plateforme B2B multilingue pour le leader marocain du bois d'ingénierie — catalogue, devis en ligne et stratégie digitale.",
    cta: "Voir le projet →",
  },
  {
    icon: "building",
    gradient: "from-[#0B1F3A] to-[#2E7DD1]",
    url: "diasporaimmobilierconseil.com",
    href: "https://diasporaimmobilierconseil.com",
    cat: "Plateforme Web · SEO · Community",
    title: "Diaspora Immobilier Conseil",
    desc: "Plateforme de conseil immobilier pour la diaspora marocaine — site, contenu et gestion des réseaux sociaux.",
    cta: "Voir le projet →",
  },
  {
    icon: "sparkles",
    gradient: "from-[#4A3D7A] to-[#45C4BB]",
    url: "artgonmedia.online",
    href: "/#contact",
    cat: "Votre secteur · Votre vision",
    title: "Votre prochain projet",
    desc: "Vous avez une idée ? Nous avons l'expertise pour la concrétiser. Parlons-en dès aujourd'hui.",
    cta: "Démarrer maintenant →",
  },
];

export default function Portfolio() {
  return (
    <section id="realisations" className="bg-cloud py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Nos <em className="not-italic text-violet-brand">réalisations</em>
            </>
          }
          desc="Des projets concrets qui témoignent de notre expertise et de notre engagement qualité."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(102,85,160,0.16)]"
            >
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${p.gradient}`}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:26px_26px]"
                />
                <Icon name={p.icon} className="relative h-14 w-14 text-white/95" strokeWidth={1.25} />
                <span className="absolute bottom-3 left-4 rounded-full bg-black/25 px-3 py-1 font-display text-[0.6rem] font-bold uppercase tracking-wider text-white backdrop-blur">
                  {p.url}
                </span>
              </div>
              <div className="p-7">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-teal-dark">
                  {p.cat}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {p.desc}
                </p>
                <Link
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noopener" : undefined}
                  className="mt-5 inline-block text-sm font-bold text-violet-brand transition-colors group-hover:text-teal-brand"
                >
                  {p.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
