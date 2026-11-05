import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import Particles from "@/components/Particles";
import SectionHeading from "@/components/SectionHeading";
import { HrPreview, WhatsappPreview } from "@/components/SoftwarePreviews";
import { Icon } from "@/components/icons";
import { getSolution, solutions } from "@/lib/solutions";
import { SITE_URL, breadcrumbLd, faqLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getSolution((await params).slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: {
      title: `${s.metaTitle} | Artgon MEDIA`,
      description: s.metaDescription,
      url: `/solutions/${s.slug}`,
      type: "website",
    },
  };
}

const previews = { hr: HrPreview, whatsapp: WhatsappPreview };

export default async function SolutionPage({ params }: Props) {
  const s = getSolution((await params).slug);
  if (!s) notFound();

  const Preview = previews[s.preview];
  const others = solutions.filter((o) => o.slug !== s.slug);
  const url = `${SITE_URL}/solutions/${s.slug}`;

  const softwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name: s.name,
    description: s.intro,
    url,
    applicationCategory: s.category,
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: { "@type": "Offer", priceCurrency: "MAD", description: "Sur devis" },
  };
  const breadcrumb = breadcrumbLd([
    { name: "Accueil", url: "/" },
    { name: "Solutions", url: "/#solutions" },
    { name: s.name, url: `/solutions/${s.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareLd, breadcrumb, faqLd(s.faq)]),
        }}
      />

      {/* En-tête */}
      <section className="bg-night-gradient relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16 text-white sm:pt-32">
        <Particles />
        <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <nav aria-label="Fil d'Ariane" className="text-sm text-white/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="-my-2 inline-block py-2 transition-colors hover:text-teal-light">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/#solutions" className="-my-2 inline-block py-2 transition-colors hover:text-teal-light">
                    Solutions
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white/80">
                  {s.name}
                </li>
              </ol>
            </nav>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-light">
              <span className="h-px w-6 bg-current" aria-hidden />
              Solution éditée par Artgon MEDIA
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-tight">
              {s.name}
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
              {s.tagline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={s.ctaHref}
                target="_blank"
                rel="noopener"
                className="btn-sweep rounded-lg bg-teal-brand px-7 py-4 text-center text-sm font-bold text-night shadow-[0_16px_40px_rgba(69,196,187,0.35)]"
              >
                {s.cta}
              </a>
              <a
                href="#fonctionnalites"
                className="rounded-lg border border-white/30 px-7 py-4 text-center text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-white hover:bg-white/5"
              >
                Voir les fonctionnalités
              </a>
            </div>
          </div>

          {/* Aperçu de l'interface */}
          <div
            aria-hidden
            className="relative mx-auto h-80 w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-violet-dark/60 to-night ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          >
            <span className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-teal-brand/20 blur-3xl" />
            <div className="relative h-full">
              <Preview />
            </div>
          </div>
        </div>
      </section>

      {/* Présentation + fiche */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="reveal">
            <p className="text-lg leading-relaxed text-ink-soft">{s.intro}</p>
            <p className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-white p-5 text-sm leading-relaxed text-ink-soft">
              <Icon name="users" className="mt-0.5 h-5 w-5 shrink-0 text-violet-brand" />
              <span>
                <strong className="font-semibold text-ink">Pour qui ?</strong> {s.audience}
              </span>
            </p>
          </div>

          <dl className="reveal grid content-start gap-4 sm:grid-cols-2">
            {s.facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-line bg-white p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-mute">
                  {f.label}
                </dt>
                <dd className="mt-2 font-display text-base font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section id="fonctionnalites" className="scroll-mt-20 pb-16 sm:pb-24 lg:pb-28">
        <div className="container-x">
          <SectionHeading
            eyebrow={s.name}
            title={
              <>
                <em className="accent text-violet-brand">Fonctionnalités</em>
              </>
            }
          />
          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {s.features.map((f) => (
              <article
                key={f.title}
                className="reveal rounded-2xl border border-line bg-white p-5 transition-colors duration-300 hover:border-violet-brand/30 hover:bg-violet-pale/60 sm:p-7"
              >
                {/* Mobile : icône et titre sur une ligne ; empilés dès 640px */}
                <div className="flex items-center gap-4 sm:block">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-violet-brand ring-1 ring-line sm:h-12 sm:w-12">
                    <Icon name={f.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink sm:mt-6 sm:text-lg">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mute sm:mt-2.5 sm:text-[0.95rem]">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comment démarrer */}
      <section className="bg-night-gradient slant-top relative overflow-hidden pt-24 pb-16 sm:pt-36 sm:pb-24 text-white lg:pt-44 lg:pb-28">
        <Particles />
        <div className="container-x relative z-10">
          <SectionHeading
            dark
            eyebrow="En 4 étapes"
            title={
              <>
                Comment <em className="accent text-teal-brand">démarrer</em>
              </>
            }
          />
          <ol className="relative mt-10 grid gap-7 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-6">
            {/* Ligne qui relie les étapes (grand écran) */}
            <span
              aria-hidden
              className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-teal-brand via-violet-light to-teal-brand opacity-50 lg:block"
            />
            {s.steps.map((st, i) => (
              <li
                key={st.title}
                className="reveal relative flex items-start gap-4 text-left sm:block sm:text-center"
              >
                {/* Mobile : numéro à gauche, texte à droite ; centré dès 640px */}
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-brand font-display text-sm font-bold text-night ring-8 ring-night/60 sm:mx-auto sm:h-12 sm:w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mt-1.5 font-display text-base font-semibold sm:mt-6 sm:text-lg">
                    {st.title}
                  </h3>
                  <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-white/65 sm:mx-auto sm:mt-2.5">
                    {st.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq
        items={s.faq}
        id="faq"
        eyebrow="FAQ"
        title={
          <>
            FAQ — <em className="accent text-violet-brand">{s.name}</em>
          </>
        }
      />

      {/* Appel à l'action + autres solutions */}
      <section className="pb-16 sm:pb-24 lg:pb-28">
        <div className="container-x">
          <div className="bg-night-gradient reveal relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-12">
            <span
              aria-hidden
              className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full border border-white/10"
            />
            <h2 className="relative font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold">
              Voyez-le en <em className="accent text-teal-brand">action</em>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
              Démonstration gratuite, sur vos propres cas. Réponse sous 2 h en
              heures ouvrables.
            </p>
            <a
              href={s.ctaHref}
              target="_blank"
              rel="noopener"
              className="btn-sweep relative mt-8 inline-block rounded-lg bg-teal-brand px-8 py-4 text-sm font-bold text-night"
            >
              {s.cta}
            </a>
          </div>

          <h2 className="reveal mt-20 text-center font-display text-2xl font-bold text-ink">
            Nos autres solutions
          </h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/solutions/${o.slug}`}
                className="reveal group flex items-center gap-5 rounded-2xl border border-line bg-white p-6 transition-colors duration-300 hover:border-violet-brand/30 hover:bg-violet-pale/60"
              >
                {/* Icône masquée sur mobile pour laisser la place au texte */}
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg text-violet-brand ring-1 ring-line sm:flex">
                  <Icon name={o.icon} className="h-6 w-6" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-semibold text-ink">{o.name}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-mute sm:text-[0.8rem]">{o.tagline}</span>
                </span>
                <Icon
                  name="arrow-up-right"
                  className="h-6 w-6 shrink-0 text-violet-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
