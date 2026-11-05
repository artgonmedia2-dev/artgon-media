"use client";

import CarouselCards, { type RailItem } from "./kokonutui/carousel-cards";
import { Icon } from "./icons";
import { reasons } from "@/lib/content";

const byId = new Map(reasons.map((r) => [r.title, r]));

/** Les atouts de l'agence au format attendu par le carrousel. */
const items: RailItem[] = reasons.map((r) => ({
  id: r.title,
  title: r.title,
  location: r.desc,
  price: 0,
}));

/**
 * « Pourquoi nous choisir » en carrousel (Kokonut UI « Carousel Cards ») pour
 * le mobile : on fait défiler les cartes du doigt, la carte centrale ressort.
 * Les cartes gardent le même style que la grille du desktop.
 */
export default function ReasonsCarousel() {
  return (
    <CarouselCards
      items={items}
      title="Pourquoi nous choisir"
      hideTitle
      className="py-0 [--rail-card:17rem]"
      renderCard={(item) => {
        const r = byId.get(item.id);
        if (!r) return null;
        return (
          <article className="h-full rounded-2xl border border-line bg-white p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-violet-brand ring-1 ring-line">
                <Icon name={r.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-semibold text-ink">{r.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-mute">{r.desc}</p>
          </article>
        );
      }}
    />
  );
}
