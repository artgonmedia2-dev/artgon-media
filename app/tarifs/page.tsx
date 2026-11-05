import type { Metadata } from "next";
import Faq from "@/components/Faq";
import ForfaitCard from "@/components/ForfaitCard";
import ForfaitsCarousel from "@/components/ForfaitsCarousel";
import Particles from "@/components/Particles";
import PricingTeaser from "@/components/PricingTeaser";
import SectionHeading from "@/components/SectionHeading";
import { Icon } from "@/components/icons";
import { HrPreview, WhatsappPreview } from "@/components/SoftwarePreviews";
import {
  customQuoteWhatsapp,
  forfaitWhatsapp,
  forfaits,
  plans,
} from "@/lib/pricing";
import Link from "next/link";
import { solutions } from "@/lib/solutions";
import { breadcrumbLd, faqLd, priceListLd, pricingFaq } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tarifs — Prix création site web, SEO, apps & marketing à Nador",
  description:
    "Tarifs transparents d'Artgon MEDIA à Nador : site vitrine dès 1 500 MAD, site Pro 4 500 MAD, e-commerce 9 000 MAD, application mobile dès 5 000 MAD, SEO et marketing dès 1 500 MAD/mois. Prix en MAD, TVA incluse.",
  keywords: [
    "prix création site web Nador",
    "tarif site vitrine Maroc",
    "prix site e-commerce Maroc",
    "prix application mobile Maroc",
    "tarif référencement SEO Nador",
    "tarif marketing digital Maroc",
  ],
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs transparents à Nador — Artgon MEDIA",
    description:
      "Sites web dès 1 500 MAD, applications mobiles dès 5 000 MAD, SEO et marketing dès 1 500 MAD/mois. Prix en MAD, TVA incluse.",
    url: "/tarifs",
    type: "article",
  },
};

const breadcrumb = breadcrumbLd([
  { name: "Accueil", url: "/" },
  { name: "Tarifs", url: "/tarifs" },
]);

const previews = { hr: HrPreview, whatsapp: WhatsappPreview };

/** Position et inclinaison des trois formules flottantes. */
const planPos = [
  "top-6 left-0 -rotate-6",
  "top-1/2 right-0 z-10 -translate-y-1/2 rotate-3",
  "bottom-4 left-[12%] -rotate-2",
];

export default function TarifsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, priceListLd, faqLd(pricingFaq)]),
        }}
      />

      {/* En-tête : texte et repères de prix à gauche, formules flottantes à droite */}
      <section className="bg-night-gradient relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16 text-white sm:pt-32">
        <Particles />
        <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <nav aria-label="Fil d'Ariane" className="text-sm text-white/50">
              <ol className="flex gap-2">
                <li>
                  <Link href="/" className="-my-2 inline-block py-2 transition-colors hover:text-teal-light">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white/80">
                  Tarifs
                </li>
              </ol>
            </nav>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-light">
              <span className="h-px w-6 bg-current" aria-hidden />
              Tarifs
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.3rem,5.5vw,4.25rem)] font-bold leading-[1.05] tracking-tight">
              Tarifs <em className="accent text-teal-brand">transparents</em> à Nador
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
              Des prix clairs, sans surprise : sites web, applications,
              référencement, réseaux sociaux, automatisation, maintenance et
              logiciels. Chaque dépassement est soumis à votre accord avant
              facturation.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#tous-les-forfaits"
                className="btn-sweep rounded-lg bg-teal-brand px-7 py-4 text-center text-sm font-bold text-night shadow-[0_16px_40px_rgba(69,196,187,0.35)]"
              >
                Voir les forfaits
              </a>
              <a
                href={customQuoteWhatsapp}
                target="_blank"
                rel="noopener"
                className="rounded-lg border border-white/30 px-7 py-4 text-center text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-white hover:bg-white/5"
              >
                Devis sur WhatsApp
              </a>
            </div>
          </div>

          {/* Formules flottantes */}
          <div aria-hidden className="relative mx-auto hidden h-[30rem] w-full max-w-lg sm:block">
            <span className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-brand/20 blur-3xl" />
            {plans.map((p, i) => (
              <div key={p.name} className={`absolute ${planPos[i]}`}>
                <div
                  className={`w-60 rounded-2xl p-6 shadow-[0_30px_70px_rgba(0,0,0,0.45)] animate-float ${
                    p.featured
                      ? "bg-white text-ink ring-2 ring-teal-brand"
                      : "border border-white/15 bg-night-soft/90 text-white backdrop-blur"
                  }`}
                  style={{ animationDelay: `${i * -3}s`, animationDuration: `${9 + i * 2}s` }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.14em] ${p.featured ? "text-violet-brand" : "text-teal-light"}`}
                    >
                      {p.name}
                    </span>
                    {p.featured ? (
                      <span className="rounded-full bg-teal-brand px-2 py-0.5 text-[0.6rem] font-bold uppercase text-night">
                        Populaire
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 font-display text-3xl font-bold">
                    {p.price}{" "}
                    <span className={`text-xs font-semibold ${p.featured ? "text-mute" : "text-white/60"}`}>
                      MAD
                    </span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    {p.features.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className={`flex items-center gap-2 text-xs ${p.featured ? "text-ink-soft" : "text-white/75"}`}
                      >
                        <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-teal-brand" strokeWidth={2.5} />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingTeaser showAllLink={false} />

      {/* Tous les forfaits */}
      <section id="tous-les-forfaits" className="scroll-mt-20 py-16 sm:py-24 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Tous nos forfaits"
            title={
              <>
                Un forfait pour chaque besoin
              </>
            }
            desc="Prix de départ en dirhams (MAD). Chaque projet reçoit un devis détaillé et gratuit sous 24 h."
          />

          {/* Mobile : carrousel (Kokonut UI) ; dès 640px : grille */}
          <div className="-mx-4 mt-8 sm:hidden">
            <ForfaitsCarousel />
          </div>

          <div className="mt-10 hidden gap-6 sm:mt-16 sm:grid md:grid-cols-2 lg:grid-cols-3">
            {forfaits.map((f) => (
              <ForfaitCard key={f.id} f={f} anchor className="reveal" />
            ))}
          </div>

          <div className="mt-24">
            <SectionHeading
              eyebrow="Sur devis"
              title={
                <>
                  Nos logiciels
                </>
              }
            />
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8">
            {solutions.map((s, i) => {
              const Preview = previews[s.preview];
              return (
                <article
                  key={s.name}
                  className="reveal group grid overflow-hidden rounded-3xl border border-line bg-white shadow-[0_24px_60px_rgba(102,85,160,0.1)] md:grid-cols-[1fr_1.1fr]"
                >
                  {/* Aperçu de l'interface, en alternance gauche / droite */}
                  <div
                    aria-hidden
                    className={`relative h-64 overflow-hidden bg-gradient-to-br from-violet-dark to-night md:h-auto md:min-h-72 ${i % 2 ? "md:order-2" : ""}`}
                  >
                    <span className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-teal-brand/25 blur-3xl" />
                    <div className="relative mx-auto h-full max-w-md transition-transform duration-500 group-hover:scale-[1.03]">
                      <Preview />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-bold text-ink">{s.name}</h3>
                      <span className="rounded-full bg-violet-pale px-3 py-1 text-xs font-semibold text-violet-brand">
                        Sur devis
                      </span>
                    </div>
                    <p className="mt-4 leading-relaxed text-mute">{s.tagline}</p>
                    <p className="mt-5 flex items-center gap-2 text-sm font-medium text-teal-dark">
                      <Icon name="check" className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                      {s.offer}
                    </p>
                    <Link
                      href={`/solutions/${s.slug}`}
                      className="btn-sweep mt-7 w-fit rounded-lg bg-violet-brand px-6 py-3.5 text-sm font-bold text-white hover:text-night"
                    >
                      Découvrir {s.name}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Faq
        items={pricingFaq}
        eyebrow="FAQ"
        title={
          <>
            Questions sur nos tarifs
          </>
        }
      />
    </>
  );
}
