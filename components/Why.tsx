import SectionHeading from "./SectionHeading";

const reasons = [
  {
    n: "01",
    title: "Transparence totale",
    desc: "Notre grille tarifaire complète 2026 est publique. Prix nets, sans frais cachés : ce qui est devisé est exactement ce que vous payez.",
  },
  {
    n: "02",
    title: "Expertise locale (Nador, Oriental)",
    desc: "Ancrés à Nador, nous allions la connaissance du marché local aux standards internationaux du web.",
  },
  {
    n: "03",
    title: "Livraison dans les délais",
    desc: "98% de nos projets livrés à temps. Chaque forfait affiche son délai estimé dès le devis.",
  },
  {
    n: "04",
    title: "Support réactif 7j/7",
    desc: "Réponse en 24h ouvrées (Basic), 4h (Pro), 1h (Entreprise) — par email, WhatsApp ou téléphone.",
  },
];

export default function Why() {
  return (
    <section id="pourquoi" className="py-24">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <SectionHeading
            center={false}
            eyebrow="Notre différence"
            title={
              <>
                Pourquoi choisir
                <br />
                <em className="not-italic text-violet-brand">Artgon MEDIA ?</em>
              </>
            }
          />

          <div className="mt-12 space-y-4">
            {reasons.map((r) => (
              <div
                key={r.n}
                className="reveal flex gap-5 rounded-2xl border border-line bg-white p-6 transition-all hover:border-teal-brand/40 hover:shadow-[0_16px_40px_rgba(69,196,187,0.12)]"
              >
                <span className="font-display text-2xl font-black text-violet-pale">
                  {r.n}
                </span>
                <div>
                  <h3 className="font-display text-[0.95rem] font-bold text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc orbital */}
        <div className="reveal relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <div
            aria-hidden
            className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-pale to-teal-pale blur-2xl"
          />
          <div
            aria-hidden
            className="absolute inset-0 rounded-full border border-violet-brand/20"
          />
          <div
            aria-hidden
            className="absolute inset-12 rounded-full border-2 border-dashed border-teal-brand/30"
          />
          <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_20px_60px_rgba(102,85,160,0.18)]">
            <span className="font-display text-4xl font-black text-violet-brand">
              50+
            </span>
            <p className="mt-1 px-8 text-xs font-semibold leading-snug text-mute">
              projets livrés avec succès
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
