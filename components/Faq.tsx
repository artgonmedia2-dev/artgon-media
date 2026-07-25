import { faq } from "@/lib/seo";
import { Icon } from "./icons";

/**
 * FAQ visible + balisage FAQPage : le format le plus repris
 * par Google (extraits enrichis) et par les moteurs génératifs.
 */
export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-40">
      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
        Questions fréquentes
      </span>
      <h2 className="mt-2 font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-black leading-tight text-ink">
        Tout ce qu&apos;il faut savoir avant de commander
      </h2>
      <p className="mt-2 max-w-2xl text-sm font-semibold text-mute">
        Prix, délais, paiement, garantie : les réponses issues de notre grille
        tarifaire et de nos conditions générales 2026.
      </p>

      <div className="mt-10 grid gap-3 lg:grid-cols-2">
        {faq.map((f) => (
          <details
            key={f.q}
            className="reveal group rounded-2xl border border-line bg-white p-6 transition-colors open:border-violet-brand/30 open:bg-violet-pale/30"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="font-display text-sm font-bold leading-snug text-ink">
                {f.q}
              </h3>
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-violet-pale text-violet-brand transition-transform group-open:rotate-90">
                <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.25} />
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-mute">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
