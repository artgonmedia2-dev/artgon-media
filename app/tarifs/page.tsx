import type { Metadata } from "next";
import Link from "next/link";
import PricingExplorer from "@/components/PricingExplorer";
import Packs from "@/components/Packs";
import Options from "@/components/Options";
import Cgv from "@/components/Cgv";
import Faq from "@/components/Faq";
import { company } from "@/lib/pricing";
import { breadcrumbLd, faqLd, priceListLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tarifs 2026 — Prix création site web, SEO, apps & réseaux sociaux",
  description:
    "Grille tarifaire 2026 d'Artgon MEDIA à Nador : site vitrine dès 3 500 MAD, e-commerce dès 12 000 MAD, application mobile dès 8 000 MAD, community management dès 1 500 MAD/mois, SEO dès 2 500 MAD. Prix nets en MAD, hors TVA, sans frais cachés.",
  keywords: [
    "prix création site web Maroc",
    "tarif site vitrine Nador",
    "prix référencement SEO Maroc",
    "tarif community management Maroc",
    "prix application mobile Maroc",
    "combien coûte un site e-commerce au Maroc",
  ],
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Grille tarifaire 2026 — Artgon MEDIA, agence digitale à Nador",
    description:
      "9 familles de prestations, prix publics en MAD nets : sites web, apps mobiles, SEO, Ads, IA, maintenance et packs clé en main.",
    url: "/tarifs",
    type: "article",
  },
};

const breadcrumb = breadcrumbLd([
  { name: "Accueil", url: "/" },
  { name: "Tarifs 2026", url: "/tarifs" },
]);

const highlights = [
  { label: "Site web", value: "dès 3 500 MAD" },
  { label: "App mobile", value: "dès 8 000 MAD" },
  { label: "Réseaux sociaux", value: "dès 1 500 MAD/mois" },
  { label: "SEO", value: "dès 2 500 MAD" },
];

export default function TarifsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, priceListLd, faqLd]),
        }}
      />

      {/* En-tête */}
      <section className="relative overflow-hidden border-b border-line bg-cloud pt-36 pb-16">
        <div
          aria-hidden
          className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-violet-pale blur-3xl animate-float"
        />
        <div className="container-x relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-violet-brand">
            Rapport global des tarifs — Année 2026
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-ink">
            Toute notre grille tarifaire,{" "}
            <span className="text-violet-brand">publique et nette</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute">
            9 familles de prestations, du site vitrine à l&apos;intégration IA.
            Tous les tarifs sont exprimés en dirhams marocains (MAD), nets, hors
            TVA. Aucun frais caché : ce qui est affiché est ce qui est facturé.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-line bg-white px-5 py-4"
              >
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-mute">
                  {h.label}
                </p>
                <p className="mt-1.5 font-display text-base font-black text-violet-brand">
                  {h.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-violet-brand px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_16px_40px_rgba(102,85,160,0.28)] transition-all hover:-translate-y-1 hover:bg-violet-light"
            >
              Obtenir un devis personnalisé
            </Link>
            <a
              href={`https://wa.me/${company.phoneRaw}`}
              target="_blank"
              rel="noopener"
              className="rounded-full border-2 border-teal-brand/50 px-7 py-3.5 text-sm font-bold tracking-wide text-teal-dark transition-all hover:-translate-y-1 hover:bg-teal-pale"
            >
              WhatsApp {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Sections 1 à 7 */}
      <div className="container-x py-4">
        <PricingExplorer />

        <div className="mt-24 space-y-24 pb-24">
          <Packs />
          <Options />
          <Faq />
          <Cgv />

          {/* Rappel légal */}
          <div className="rounded-3xl bg-ink p-10 text-center text-white">
            <h2 className="font-display text-xl font-black">
              Une question sur un tarif ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60">
              Chaque projet est différent. Nous ajustons le périmètre et le
              devis à votre réalité — parlons-en, la consultation est gratuite.
            </p>
            <Link
              href="/#contact"
              className="mt-7 inline-block rounded-full bg-teal-brand px-8 py-4 text-sm font-bold tracking-wide text-ink transition-all hover:-translate-y-1 hover:bg-teal-light"
            >
              Demander un devis gratuit
            </Link>
            <p className="mt-8 text-xs text-white/35">
              {company.name} • {company.address}
              <br />
              RC : {company.rc} • ICE : {company.ice} • {company.site}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
