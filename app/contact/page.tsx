import type { Metadata } from "next";
// Styles de Leaflet (carte « Nous trouver à Nador »), chargés sur cette page seulement
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { ContactForm } from "@/components/Contact";
import MapEmbed from "@/components/MapEmbed";
import Particles from "@/components/Particles";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Icon } from "@/components/icons";
import { company, whatsappLink } from "@/lib/pricing";
import { breadcrumbLd, geo } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact agence web Nador (WhatsApp)",
  description:
    "Contactez Artgon MEDIA à Nador pour votre projet web ou digital. WhatsApp : +212 681 169 346. Adresse : 580 Bd Al Massira, Nador. Réponse sous 2h.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact agence web Nador (WhatsApp) | Artgon MEDIA",
    description:
      "WhatsApp : +212 681 169 346. Adresse : 580 Bd Al Massira, Nador. Réponse sous 2h.",
    url: "/contact",
    type: "website",
  },
};

const breadcrumb = breadcrumbLd([
  { name: "Accueil", url: "/" },
  { name: "Contact", url: "/contact" },
]);

const hours = [
  { days: "Lundi – Vendredi", time: "9h – 18h" },
  { days: "Samedi", time: "9h – 13h" },
  { days: "Dimanche", time: "Fermé" },
];

const mapQuery = "580 Boulevard Al Massira Nador Maroc";

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* En-tête : coordonnées à gauche, formulaire à droite */}
      <section className="bg-night-gradient relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16 text-white sm:pt-32">
        <Particles />
        <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
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
                  Contact
                </li>
              </ol>
            </nav>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-light">
              <span className="h-px w-6 bg-current" aria-hidden />
              Contact
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.3rem,5.5vw,4.25rem)] font-bold leading-[1.05] tracking-tight">
              Parlons de votre <em className="accent text-teal-brand">projet</em>
            </h1>
            <p className="mt-6 max-w-md text-[0.8rem] leading-relaxed text-white/70 sm:text-sm">
              Notre équipe à Nador est disponible du lundi au vendredi de 9h à
              18h et le samedi de 9h à 13h.{" "}
              <strong className="font-semibold text-white">
                Réponse garantie sous 2h
              </strong>{" "}
              en heures ouvrables.
            </p>

            {/* Contacts rapides */}
            <div className="mt-9 space-y-3">
              <a
                href={whatsappLink(
                  "Bonjour Artgon MEDIA, je souhaite obtenir un devis pour votre agence web à Nador.",
                )}
                target="_blank"
                rel="noopener"
                className="group flex max-w-md items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:border-[#25d366]/60 hover:bg-[#25d366]/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25d366] text-white">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs text-white/55">WhatsApp</span>
                  <span className="block font-semibold">{company.phone}</span>
                </span>
                <Icon
                  name="arrow-up-right"
                  className="h-5 w-5 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#25d366]"
                />
              </a>
              <div className="grid max-w-md grid-cols-[auto_1fr] gap-3">
                <a
                  href={`tel:+${company.phoneRaw}`}
                  aria-label={`Appeler le ${company.phone}`}
                  title="Appeler"
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:border-teal-brand/50 w-14"
                >
                  <Icon name="phone" className="h-5 w-5 shrink-0 text-teal-light" />
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:border-teal-brand/50"
                >
                  <Icon name="mail" className="h-5 w-5 shrink-0 text-teal-light" />
                  <span className="truncate text-sm font-semibold">{company.email}</span>
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Nous trouver */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-dark">
              <span className="h-px w-6 bg-current" aria-hidden />
              Adresse
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-ink">
              Nous trouver à <em className="accent text-violet-brand">Nador</em>
            </h2>
            <p className="mt-5 flex items-start gap-2 text-[0.8rem] text-ink-soft">
              <Icon name="pin" className="h-3.5 w-3.5 shrink-0 text-violet-brand" />
              {company.address}
            </p>

            <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-mute">
              Horaires
            </h3>
            <dl className="mt-3 divide-y divide-line rounded-2xl border border-line bg-white">
              {hours.map((h) => (
                <div key={h.days} className="flex items-center justify-between px-5 py-3.5 text-sm">
                  <dt className="text-ink-soft">{h.days}</dt>
                  <dd
                    className={`font-semibold ${h.time === "Fermé" ? "text-mute" : "text-violet-brand"}`}
                  >
                    {h.time}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`}
              target="_blank"
              rel="noopener"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-violet-brand hover:text-teal-dark"
            >
              Ouvrir dans Google Maps
              <Icon
                name="arrow-up-right"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="reveal">
            <MapEmbed
              lat={geo.latitude}
              lng={geo.longitude}
              name={company.name}
              address={`${company.address}, Maroc`}
              query={mapQuery}
            />
          </div>
        </div>
      </section>
    </>
  );
}
