"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/#pourquoi", label: "Agence" },
  { href: "/contact", label: "Contact" },
];

/**
 * Navigation transparente posée sur les héros sombres,
 * qui se fond en bandeau nuit dès que l'on défile.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [section, setSection] = useState("");

  // Section de l'accueil actuellement à l'écran (scroll spy)
  useEffect(() => {
    if (pathname !== "/") {
      setSection("");
      return;
    }
    // « tarifs » : aperçu des prix sur l'accueil ; « faq » : aucune entrée active
    const ids = [
      ...links.map((l) => l.href.split("#")[1]).filter(Boolean),
      "tarifs",
      "contact",
      "faq",
    ];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setSection(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const onTop = () => window.scrollY < 200 && setSection("");
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    const [path, hash] = href.split("#");
    if (hash) return (pathname === "/" && section === hash) || pathname === `/${hash}` || pathname.startsWith(`/${hash}/`);
    return pathname === path || (pathname === "/" && section === path.slice(1));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-night-line bg-night/90 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className={`container-x flex items-center justify-between transition-all duration-300 ${solid ? "h-18" : "h-22"}`}
      >
        <Link
          href="/"
          aria-label="Artgon MEDIA — retour à l'accueil"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Logo variant="light" className="h-11 w-auto sm:h-12" priority />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`group relative rounded text-[0.95rem] font-semibold outline-none transition-colors focus-visible:text-teal-light ${
                  isActive(l.href) ? "text-teal-light" : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded bg-teal-brand transition-all duration-300 group-hover:w-full group-focus-visible:w-full ${
                    isActive(l.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="btn-sweep hidden rounded-lg bg-teal-brand px-5 py-3 text-sm font-bold text-night shadow-[0_8px_24px_rgba(69,196,187,0.35)] sm:block"
          >
            Devis gratuit
          </Link>

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-lg border border-white/20 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 rounded bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-white transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[28rem] border-t border-night-line" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`block rounded-lg px-3 py-3 text-base font-semibold transition-colors hover:bg-white/5 hover:text-teal-light focus-visible:text-teal-light ${
                  isActive(l.href) ? "bg-white/5 text-teal-light" : "text-white/85"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-teal-brand px-5 py-3.5 text-center text-sm font-bold text-night"
            >
              Devis gratuit
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
