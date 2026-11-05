import { Icon } from "./icons";
import { reasons } from "@/lib/content";

// Les 3 arguments retenus pour le bandeau (les 6 restent dans lib/content).
const KEPT = ["Basés à Nador", "Livraison rapide", "Support WhatsApp"];

/** « Pourquoi nous » condensé en bandeau : 3 arguments, sans carrousel. */
export default function Why() {
  const items = reasons.filter((r) => KEPT.includes(r.title));
  return (
    <section id="pourquoi" className="scroll-mt-20 py-12 sm:py-16">
      <div className="container-x">
        <div className="reveal rounded-3xl border border-line bg-white px-6 py-8 sm:px-10 sm:py-10">
          <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
            Pourquoi choisir Artgon MEDIA
          </h2>
          <ul className="mt-6 grid gap-5 md:grid-cols-3 md:gap-8">
            {items.map((r) => (
              <li key={r.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-violet-brand ring-1 ring-line">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
