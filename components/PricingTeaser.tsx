import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { categories } from "@/lib/pricing";
import { Icon } from "./icons";

const cm = categories.find((c) => c.id === "community-management")!;

const features: Record<string, { yes: string[]; no: string[] }> = {
  Essentiel: {
    yes: [
      "Facebook & Instagram",
      "8 publications / mois",
      "Visuels + textes inclus",
      "Community management",
      "1 rapport mensuel",
    ],
    no: ["LinkedIn", "Reels / vidéos", "SEO"],
  },
  Starter: {
    yes: [
      "Facebook, Instagram + LinkedIn",
      "12 publications / mois",
      "Visuels + textes + stories",
      "2 Reels / mois",
      "Rapport mensuel analytique",
    ],
    no: ["SEO", "Articles de blog"],
  },
  Growth: {
    yes: [
      "Facebook, Instagram + LinkedIn",
      "16 publications / mois",
      "4 Reels / mois",
      "SEO — 3 pages optimisées",
      "1 article de blog SEO / mois",
      "Rapport mensuel complet",
    ],
    no: [],
  },
  Premium: {
    yes: [
      "Tous réseaux + TikTok",
      "24 publications / mois",
      "6 Reels / vidéos par mois",
      "Stories quotidiennes",
      "Campagne Ads 500 MAD/mois incluse",
    ],
    no: [],
  },
};

export default function PricingTeaser() {
  const plans = cm.rows.filter((r) => r.name !== "Sur Mesure");

  return (
    <section id="tarifs" className="py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Offres mensuelles"
          title={
            <>
              Des tarifs <em className="not-italic text-violet-brand">clairs</em>
              <br />& <span className="text-teal-brand">accessibles</span>
            </>
          }
          desc="Nos forfaits community management les plus demandés. Prix nets, sans TVA, sans engagement longue durée."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => {
            const f = features[p.name] ?? { yes: [], no: [] };
            return (
              <article
                key={p.name}
                className={`reveal relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  p.featured
                    ? "border-violet-brand bg-gradient-to-b from-violet-pale/70 to-white shadow-[0_28px_70px_rgba(102,85,160,0.18)]"
                    : "border-line bg-white hover:shadow-[0_24px_60px_rgba(102,85,160,0.12)]"
                }`}
              >
                {p.featured ? (
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-violet-brand px-3 py-1 font-display text-[0.6rem] font-bold uppercase tracking-wider text-white">
                    <Icon name="star" className="h-3 w-3" strokeWidth={2} />
                    Recommandé
                  </span>
                ) : null}

                <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-mute">
                  {p.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-[0.7rem] font-bold text-mute">
                    MAD
                  </span>
                  <span className="font-display text-[2.4rem] font-black leading-none text-ink">
                    {p.price}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold text-mute">
                  /mois · prix net tout inclus
                </p>

                <p className="mt-4 rounded-lg bg-teal-pale px-3 py-2 text-[0.7rem] font-bold uppercase tracking-wide text-teal-dark">
                  {p.meta}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-6">
                  {f.yes.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-sm text-ink-soft"
                    >
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-brand" strokeWidth={2.25} />
                      {it}
                    </li>
                  ))}
                  {f.no.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-sm text-mute/50 line-through"
                    >
                      <Icon name="dash" className="mt-0.5 h-4 w-4 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className={`mt-7 block rounded-full py-3.5 text-center text-xs font-bold uppercase tracking-wide transition-all ${
                    p.featured
                      ? "bg-violet-brand text-white hover:bg-violet-light"
                      : "border-2 border-violet-brand/30 text-violet-brand hover:border-violet-brand hover:bg-violet-pale"
                  }`}
                >
                  Démarrer
                </Link>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-12 flex flex-col items-center gap-5 rounded-3xl border border-line bg-cloud p-10 text-center">
          <p className="max-w-2xl text-sm leading-relaxed text-mute">
            Sites web, applications mobiles, SEO, publicité en ligne, IA,
            maintenance et packs clé en main :{" "}
            <strong className="text-ink">
              l&apos;intégralité de notre grille tarifaire 2026
            </strong>{" "}
            est publique, détaillée prestation par prestation.
          </p>
          <Link
            href="/tarifs"
            className="rounded-full bg-ink px-8 py-4 text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-1 hover:bg-ink-soft"
          >
            Consulter la grille tarifaire complète →
          </Link>
        </div>
      </div>
    </section>
  );
}
