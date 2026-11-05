"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";

/**
 * Carte OpenStreetMap aux couleurs d'origine, avec marqueur turquoise,
 * carte d'adresse et zoom aux couleurs du site. Leaflet n'est chargé
 * qu'à l'approche de la carte (aucune clé d'API, aucun cookie).
 */
export default function MapEmbed({
  lat,
  lng,
  name,
  address,
  query,
}: {
  lat: number;
  lng: number;
  name: string;
  address: string;
  query: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const q = encodeURIComponent(query);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    const init = async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !box.current) return;

      map = L.map(box.current, {
        center: [lat, lng],
        zoom: 16,
        scrollWheelZoom: false,
        zoomControl: false,
        // Crédit obligatoire (licence ODbL) affiché sous la carte, pas dessus
        attributionControl: false,
      });
      L.control.zoom({ position: "bottomright" }).addTo(map);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);

      // Marqueur : goutte turquoise cerclée de violet, avec onde pulsée
      const pin = L.divIcon({
        className: "",
        iconSize: [44, 56],
        iconAnchor: [22, 54],
        html: `
          <span class="map-pin-pulse"></span>
          <svg viewBox="0 0 44 56" width="44" height="56" style="position:relative;filter:drop-shadow(0 8px 14px rgba(0,0,0,.45))">
            <path d="M22 2C11 2 3 10.4 3 21c0 13.6 16.2 29.6 17.6 31a2 2 0 0 0 2.8 0C24.8 50.6 41 34.6 41 21 41 10.4 33 2 22 2Z" fill="#45c4bb" stroke="#6655a0" stroke-width="3"/>
            <circle cx="22" cy="21" r="7.5" fill="#0d0c22"/>
          </svg>`,
      });
      L.marker([lat, lng], { icon: pin, keyboard: false }).addTo(map);
      // Centre le marqueur dans l'espace libre sous la carte d'adresse
      const h = box.current.clientHeight;
      const cardBottom = card.current ? card.current.offsetTop + card.current.offsetHeight : 0;
      const target = cardBottom + (h - cardBottom) / 2 + 28; // +28 : la pointe du marqueur est en bas
      map.panBy([0, -Math.round(target - h / 2)], { animate: false });
      setReady(true);
    };

    // Ne charge Leaflet et les tuiles qu'à l'approche de la carte
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          init();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      map?.remove();
    };
  }, [lat, lng]);

  return (
    <div>
    {/* « isolate » : les z-index de Leaflet et de la carte d'adresse restent
        confinés ici et ne passent jamais au-dessus de la navigation. */}
    <div className="relative isolate aspect-square overflow-hidden rounded-3xl border border-line bg-cloud shadow-[0_24px_60px_rgba(102,85,160,0.18)] sm:aspect-[16/9]">
      {/* Le fondu est porté par le parent : Leaflet ajoute ses propres classes
          au conteneur de la carte, que React ne doit pas réécrire. */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
      >
        <div
          ref={box}
          role="region"
          aria-label={`Carte : ${address}`}
          className="h-full w-full"
        />
      </div>

      {/* Carte d'adresse */}
      <div
        ref={card}
        className="absolute top-4 left-4 z-[500] max-w-[calc(100%-2rem)] rounded-2xl bg-white p-4 shadow-[0_16px_40px_rgba(13,12,34,0.3)] sm:p-5"
      >
        <p className="font-display text-sm font-bold text-ink sm:text-base">{name}</p>
        <p className="mt-0.5 text-xs text-mute">{address}</p>
        <div className="mt-3.5 flex items-center gap-2">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noopener"
            className="btn-sweep inline-flex items-center gap-1.5 rounded-lg bg-violet-brand px-3.5 py-2 text-xs font-bold text-white hover:text-night"
          >
            <Icon name="arrow-up-right" className="h-3.5 w-3.5" strokeWidth={2.25} />
            Ouvrir dans Maps
          </a>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
            target="_blank"
            rel="noopener"
            aria-label="Itinéraire vers l'agence"
            title="Itinéraire"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-pale text-violet-brand transition-colors hover:bg-teal-brand hover:text-night"
          >
            <Icon name="pin" className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
    <p className="mt-2 text-right text-[0.7rem] text-mute/70">
      Carte ©{" "}
      <a
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener"
        className="underline-offset-2 hover:text-violet-brand hover:underline"
      >
        OpenStreetMap
      </a>
    </p>
    </div>
  );
}
