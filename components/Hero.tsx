import Link from "next/link";

const stats = [
  { num: "50+", txt: "Projets livrés" },
  { num: "98%", txt: "Délais respectés" },
  { num: "7j/7", txt: "Support dédié" },
  { num: "3 500", txt: "MAD dès le 1er site" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-20">
      {/* Grille de fond */}
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(rgba(102,85,160,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(102,85,160,.055)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_45%,black_20%,transparent_100%)]"
      />
      {/* Halos flottants */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-violet-pale blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-teal-pale blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="absolute top-[18%] left-[6%] hidden h-56 w-56 rounded-full border-2 border-teal-brand/25 animate-float-slow lg:block"
      />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-violet-brand/20 bg-violet-pale px-3.5 py-2 font-display text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-violet-brand">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-brand animate-pulse-dot" />
            <span className="truncate">Agence digitale & web — Nador, Oriental</span>
          </span>

          <h1 className="mt-6 sm:mt-8 font-display text-[clamp(1.85rem,6.5vw,5rem)] font-black leading-[1.05] tracking-[-0.03em]">
            <span className="text-violet-brand">Création site web</span>
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_var(--color-teal-brand)] sm:[-webkit-text-stroke:2px_var(--color-teal-brand)]">
              sur-mesure
            </span>{" "}
            <span className="text-ink">&</span>
            <br />
            <span className="text-ink">SEO Nador</span>
          </h1>

          <p className="mx-auto mt-5 sm:mt-7 max-w-xl text-sm sm:text-[1.05rem] leading-[1.7] sm:leading-[1.75] text-mute">
            Développement web, applications mobiles Flutter, référencement SEO,
            publicité en ligne et automatisation IA. Une grille tarifaire 2026
            publique, nette et sans frais cachés.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto rounded-full bg-violet-brand px-7 py-3.5 text-center text-xs sm:text-sm font-bold tracking-wide text-white shadow-[0_20px_50px_rgba(102,85,160,0.28)] transition-all hover:-translate-y-1 hover:bg-violet-light"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/tarifs"
              className="w-full sm:w-auto rounded-full border-2 border-teal-brand/50 px-7 py-3.5 text-center text-xs sm:text-sm font-bold tracking-wide text-teal-dark transition-all hover:-translate-y-1 hover:border-teal-brand hover:bg-teal-pale"
            >
              Voir la grille tarifaire 2026 →
            </Link>
          </div>

          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3">
            {stats.map((s) => (
              <div
                key={s.txt}
                className="flex items-center justify-center sm:justify-start gap-2.5 rounded-full border border-line bg-white px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-[0_4px_20px_rgba(102,85,160,0.08)]"
              >
                <span className="font-display text-xs sm:text-base font-black text-violet-brand">
                  {s.num}
                </span>
                <span className="text-[0.68rem] sm:text-xs font-semibold text-mute">{s.txt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
