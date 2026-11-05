"use client";

import { useEffect, useRef } from "react";
import ForfaitCard from "./ForfaitCard";
import CarouselCards, { type RailItem } from "./kokonutui/carousel-cards";
import { forfaits } from "@/lib/pricing";

const byId = new Map(forfaits.map((f) => [f.id, f]));

/** Les forfaits au format attendu par le carrousel. */
const items: RailItem[] = forfaits.map((f) => ({
  id: f.id,
  title: f.title,
  location: f.from,
  price: 0,
}));

/**
 * « Un forfait pour chaque besoin » en carrousel (Kokonut UI « Carousel Cards »)
 * pour le mobile, avec les mêmes cartes que la grille du desktop.
 */
export default function ForfaitsCarousel() {
  const wrap = useRef<HTMLDivElement>(null);

  // Lien profond (/tarifs#referencement-seo…) : les ancres de la grille sont
  // masquées sur mobile, on amène donc le carrousel sur le bon forfait.
  useEffect(() => {
    const index = forfaits.findIndex((f) => `#${f.id}` === window.location.hash);
    const root = wrap.current;
    if (index < 0 || !root || root.offsetParent === null) return;
    // Attendre la mise en page finale (polices, défilement vers l'ancre par Next).
    const timer = window.setTimeout(() => {
      const scroller = root.querySelector<HTMLElement>("section[tabindex]");
      const card = scroller?.querySelector("ul")?.children[index] as HTMLElement | undefined;
      if (!card || !scroller) return;
      root.scrollIntoView({ block: "center" });
      scroller.scrollTo({
        left: card.offsetLeft + card.offsetWidth / 2 - scroller.clientWidth / 2,
        behavior: "instant",
      });
    }, 350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div ref={wrap}>
      <CarouselCards
        items={items}
        title="Tous nos forfaits"
        hideTitle
        className="py-0 [--rail-card:18rem]"
        renderCard={(item) => {
          const f = byId.get(item.id);
          return f ? <ForfaitCard f={f} className="h-full" /> : null;
        }}
      />
    </div>
  );
}
