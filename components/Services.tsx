import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { Icon, type IconName } from "./icons";

const services: {
  icon: IconName;
  title: string;
  desc: string;
  tag: string;
  from: string;
  href: string;
}[] = [
  {
    icon: "globe",
    title: "Création de sites web",
    desc: "Sites vitrines et boutiques e-commerce sur mesure, du site 3 pages à la plateforme métier complète.",
    tag: "PHP · MySQL · Laravel · WordPress",
    from: "dès 3 500 MAD",
    href: "/tarifs#sites-web",
  },
  {
    icon: "mobile",
    title: "Applications mobiles",
    desc: "Apps iOS & Android performantes, backend temps réel, publication sur les stores incluse.",
    tag: "Flutter · Dart · Firebase · API REST",
    from: "dès 8 000 MAD",
    href: "/tarifs#applications-mobiles",
  },
  {
    icon: "megaphone",
    title: "Community management",
    desc: "Gestion complète de vos réseaux : contenus, visuels, Reels, stories et reporting mensuel.",
    tag: "Facebook · Instagram · LinkedIn · TikTok",
    from: "dès 1 500 MAD/mois",
    href: "/tarifs#community-management",
  },
  {
    icon: "search",
    title: "Référencement SEO",
    desc: "Audit, SEO local, netlinking et contenu pour dominer Google à Nador comme à l'échelle nationale.",
    tag: "Technique · On-Page · Off-Page · Local",
    from: "dès 2 500 MAD",
    href: "/tarifs#seo",
  },
  {
    icon: "target",
    title: "Publicité en ligne",
    desc: "Campagnes Meta, Google et LinkedIn : structuration, A/B testing, optimisation et attribution.",
    tag: "Meta Ads · Google Ads · LinkedIn Ads",
    from: "dès 2 500 MAD/mois",
    href: "/tarifs#publicite",
  },
  {
    icon: "ai",
    title: "Automatisation & IA",
    desc: "Chatbots IA, workflows marketing automatisés et intégrations d'API d'intelligence artificielle.",
    tag: "Chatbots · Automations · IA générative",
    from: "dès 2 500 MAD",
    href: "/tarifs#ia-automatisation",
  },
  {
    icon: "gear",
    title: "Maintenance & support",
    desc: "Hébergement, sauvegardes, mises à jour de sécurité et monitoring avec SLA garanti 99,9%.",
    tag: "Hébergement · SSL · Sauvegardes · SLA",
    from: "dès 350 MAD/mois",
    href: "/tarifs#maintenance",
  },
  {
    icon: "package",
    title: "Packs clé en main",
    desc: "Site + SEO + réseaux sociaux + Ads combinés dans un forfait unique, jusqu'à 25% d'économie.",
    tag: "Start · Pro · Growth · Entreprise",
    from: "dès 8 900 MAD/mois",
    href: "/tarifs#packs",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cloud py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nos expertises"
          title={
            <>
              Des solutions <em className="not-italic text-violet-brand">sur mesure</em>
              <br />
              pour votre{" "}
              <span className="text-teal-brand">croissance</span>
            </>
          }
          desc="De la conception au déploiement, nous couvrons l'ensemble de vos besoins digitaux — avec un tarif annoncé à l'avance pour chaque prestation."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="reveal group flex flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-brand/30 hover:shadow-[0_24px_60px_rgba(102,85,160,0.14)]"
            >
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-pale to-teal-pale text-violet-brand ring-1 ring-violet-brand/10 transition-all duration-300 group-hover:from-violet-brand group-hover:to-violet-dark group-hover:text-white group-hover:ring-violet-brand/30">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold leading-snug text-ink">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                {s.desc}
              </p>
              <span className="mt-5 inline-block rounded-full bg-teal-pale px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-teal-dark">
                {s.tag}
              </span>
              <span className="mt-4 flex items-center justify-between border-t border-line pt-4 text-sm font-bold text-violet-brand">
                {s.from}
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
