"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#pourquoi", label: "Pourquoi nous" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs 2026" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_4px_30px_rgba(102,85,160,0.12)] backdrop-blur-xl"
          : ""
      } border-b border-line bg-white/80 backdrop-blur-xl`}
    >
      <nav className="container-x flex h-18 items-center justify-between py-4">
        <Link
          href="/"
          aria-label="Artgon MEDIA — retour à l'accueil"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Logo className="h-11 w-auto sm:h-12" priority />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-mute transition-colors hover:text-violet-brand"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded bg-teal-brand transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-violet-brand px-5 py-2.5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-white shadow-[0_6px_22px_rgba(102,85,160,0.35)] transition-all hover:-translate-y-0.5 hover:bg-violet-light hover:shadow-[0_10px_30px_rgba(102,85,160,0.45)] sm:block"
          >
            Devis gratuit
          </Link>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-line lg:hidden"
          >
            <span
              className={`h-0.5 w-5 rounded bg-violet-brand transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-violet-brand transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-violet-brand transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-ink-soft transition-colors hover:bg-violet-pale hover:text-violet-brand"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-violet-brand px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.06em] text-white"
            >
              Devis gratuit
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
