import Link from "next/link";
import Logo from "./Logo";
import { company } from "@/lib/pricing";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Artgon MEDIA — retour à l'accueil">
            <Logo variant="plate" className="h-12 w-auto" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            Agence digitale & web à Nador, région de l&apos;Oriental. Sites web,
            applications mobiles, SEO, publicité en ligne et automatisation IA.
          </p>
          <p className="mt-6 text-xs leading-relaxed text-white/40">
            {company.name}
            <br />
            {company.address}
            <br />
            RC : {company.rc} • ICE : {company.ice}
          </p>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-teal-brand">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <Link href="/#services" className="hover:text-teal-brand">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#realisations" className="hover:text-teal-brand">
                Réalisations
              </Link>
            </li>
            <li>
              <Link href="/#zones" className="hover:text-teal-brand">
                Zones desservies
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:text-teal-brand">
                Tarifs 2026
              </Link>
            </li>
            <li>
              <Link href="/tarifs#faq" className="hover:text-teal-brand">
                Questions fréquentes
              </Link>
            </li>
            <li>
              <Link href="/tarifs#cgv" className="hover:text-teal-brand">
                Conditions générales
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-teal-brand">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-teal-brand">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={`https://wa.me/${company.phoneRaw}`}
                className="hover:text-teal-brand"
              >
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="hover:text-teal-brand"
              >
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={`https://${company.site}`}
                className="hover:text-teal-brand"
              >
                {company.site}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name} — Tous droits réservés.
          </p>
          <p>Prix nets en MAD, hors TVA — grille tarifaire 2026.</p>
        </div>
      </div>
    </footer>
  );
}
