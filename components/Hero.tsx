import Link from "next/link";
import CountUp from "./CountUp";
import Particles from "./Particles";
import { company } from "@/lib/pricing";

const stats = [
  { num: "50+", txt: "Projets livrés" },
  { num: "98%", txt: "Clients satisfaits" },
  { num: "5 ans", txt: "D'expérience" },
  { num: "24h", txt: "Support réactif" },
];

const perks = ["Sites dès 1 500 MAD", "Réponse sous 2h", "Maroc & Europe"];

const whatsapp = `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(
  "Bonjour, je souhaite un devis gratuit pour mon projet digital.",
)}`;

export default function Hero() {
  return (
    <section className="bg-night-gradient relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16 sm:pt-32">
      <Particles />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-teal-light sm:text-base">
            Agence web & digitale — Nador, Oriental, Maroc
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.1rem,6vw,4.25rem)] font-bold leading-[1.08] tracking-tight text-white">
            Votre présence digitale{" "}
            <em className="accent text-teal-brand">propulsée</em>
            <br />à Nador
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            <strong className="font-semibold text-white">Artgon MEDIA</strong>{" "}
            crée des sites web performants, des applications mobiles Flutter et
            des stratégies digitales pour les entreprises de Nador, du Maroc et
            de la diaspora en Europe.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener"
              className="btn-sweep rounded-lg bg-teal-brand px-8 py-4 text-center text-sm font-bold text-night shadow-[0_16px_40px_rgba(69,196,187,0.35)]"
            >
              Devis gratuit sur WhatsApp
            </a>
            <Link
              href="/#services"
              className="rounded-lg border border-white/30 px-8 py-4 text-center text-sm font-bold text-white transition-all hover:-translate-y-1 hover:border-white hover:bg-white/5"
            >
              Voir nos services
            </Link>
          </div>

          <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-brand" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-y-10 border-t border-night-line pt-12 sm:mt-16 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.txt} className="flex flex-col-reverse items-center text-center">
              <dt className="mt-2 text-sm text-white/60">{s.txt}</dt>
              <dd className="font-display text-4xl font-bold text-white sm:text-5xl">
                <CountUp value={s.num} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
