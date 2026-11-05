import Link from "next/link";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { company, whatsappLink } from "@/lib/pricing";
import { services } from "@/lib/content";
import { areasServed } from "@/lib/seo";

const agence = [
  { href: "/#pourquoi", label: "Notre agence" },
  { href: "/#solutions", label: "Nos solutions" },
  { href: "/solutions/infinityhr", label: "InfinityHR" },
  { href: "/solutions/assistant-whatsapp-cabinet-medical", label: "Assistant RDV WhatsApp" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs" },
];

const heading = "font-display text-base font-semibold text-white";
const list = "mt-5 space-y-3 text-sm text-white/60";
const link = "transition-colors hover:text-teal-light";
const social =
  "flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-colors";

export default function Footer() {
  return (
    <footer className="relative bg-night text-white">
      <div aria-hidden className="h-1 bg-gradient-to-r from-violet-brand via-teal-brand to-violet-brand" />
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
        {/* Bloc marque centré dans sa colonne */}
        <div className="flex flex-col items-center text-center">
          <Link
            href="/"
            aria-label="Artgon MEDIA — retour à l'accueil"
            className="inline-block transition-opacity hover:opacity-80"
          >
            <Logo className="h-14 w-auto" />
          </Link>
          <p className="mt-6 max-w-[17rem] text-sm leading-relaxed text-white/60">
            Agence web & digitale à Nador, Maroc. Création de sites web,
            applications mobiles, SEO et marketing digital.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="Artgon MEDIA sur LinkedIn"
              className={`${social} hover:bg-[#0a66c2] hover:text-white`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.64-1.61-2.64-1.61 0-1.86 1.26-1.86 2.56v4.92h-4v-11Z" />
              </svg>
            </a>
            <a
              href={company.youtube}
              target="_blank"
              rel="noopener"
              aria-label="Artgon MEDIA sur YouTube"
              className={`${social} hover:bg-[#ff0000] hover:text-white`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8ZM9.8 15.1V8.9l5.4 3.1-5.4 3.1Z" />
              </svg>
            </a>
            <a
              href={whatsappLink(
                "Bonjour Artgon MEDIA, je souhaite obtenir un devis pour votre agence web à Nador.",
              )}
              target="_blank"
              rel="noopener"
              aria-label="Écrire à Artgon MEDIA sur WhatsApp"
              className={`${social} hover:bg-[#25d366] hover:text-white`}
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className={heading}>Services</h3>
          <ul className={list}>
            {services.map((s) => (
              <li key={s.title}>
                <Link href={s.href} className={link}>
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={heading}>Agence</h3>
          <ul className={list}>
            {agence.map((a) => (
              <li key={a.label}>
                <Link href={a.href} className={link}>
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={heading}>Zones desservies</h3>
          <ul className={list}>
            {areasServed.map((z) => (
              <li key={z}>{z}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={heading}>Contact</h3>
          <ul className={list}>
            <li className="leading-relaxed">
              {company.street}
              <br />
              {company.city}, Oriental, Maroc
            </li>
            <li>
              <a href={`tel:+${company.phoneRaw}`} className={link}>
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className={link}>
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-center text-xs text-white/40 sm:text-left">
          © {new Date().getFullYear()} {company.name} — RC {company.rc} · ICE{" "}
          {company.ice}
        </div>
      </div>
    </footer>
  );
}
