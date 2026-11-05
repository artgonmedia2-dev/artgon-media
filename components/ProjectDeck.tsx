"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CardStack, { type DeckCard } from "./kokonutui/card-stack";
import { Icon } from "./icons";
import { type Project, projects } from "@/lib/content";

/** Libellé court pour les cases du détail : « React Native (Expo) » → « React Native ». */
const short = (tag?: string) => (tag ?? "—").replace(/\s*\(.*\)$/, "");

const byId = new Map(projects.map((p) => [p.title, p]));

/**
 * Projets en pile de cartes (Kokonut UI « Card Stack ») pour le mobile :
 * on glisse la carte du dessus pour passer au projet suivant,
 * on la touche pour ouvrir le détail.
 */
const cards: DeckCard[] = projects.map((p) => ({
  id: p.title,
  title: p.title,
  subtitle: p.cat,
  art: (
    <Image
      src={p.image}
      alt=""
      fill
      sizes="(max-width: 640px) 90vw, 400px"
      className="object-cover object-top"
      draggable={false}
    />
  ),
  description: p.desc,
  specs: [
    { label: "Stack", value: short(p.tags[0]) },
    { label: "Outils", value: short(p.tags[1]) },
    { label: "Année", value: "2026" },
  ],
}));

/** Face de carte identique aux cartes projet du desktop. */
function ProjectFace({ p }: { p: Project }) {
  return (
    <span className="flex h-full flex-col rounded-[20px] border border-violet-brand/30 bg-night px-4 pt-4 pb-5 text-white">
      <span className="block overflow-hidden rounded-xl bg-white">
        <span className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="flex-1 truncate px-2 text-center text-[0.65rem] text-mute">
            {p.cat}
          </span>
        </span>
        <span className="relative block aspect-[16/10]">
          <Image
            src={p.image}
            alt=""
            fill
            sizes="90vw"
            className="object-cover object-top"
            draggable={false}
          />
        </span>
      </span>

      <span className="mt-4 block text-center font-display text-[1.45rem] font-semibold leading-tight text-teal-brand">
        {p.title}
      </span>
      <span className="mt-1 block text-center text-xs text-white/50">{p.context}</span>
      <span className="mt-3 line-clamp-5 block text-sm leading-relaxed text-white/90">
        {p.desc}
      </span>

      <span className="mt-auto flex items-center justify-between gap-3 pt-3">
        <span className="flex flex-wrap gap-x-2 gap-y-0.5">
          {p.tags.map((t) => (
            <span key={t} className="text-xs font-semibold text-white">
              #{t.replace(/\s+/g, "")}
            </span>
          ))}
        </span>
        <Icon name="arrow-up-right" className="h-6 w-6 shrink-0 text-teal-brand" strokeWidth={1.5} />
      </span>
    </span>
  );
}

export default function ProjectDeck() {
  const router = useRouter();

  const open = (card: DeckCard) => {
    const url = byId.get(card.id)?.url;
    if (url) window.open(url, "_blank", "noopener");
    else router.push("/realisations");
  };

  return (
    <CardStack
      cards={cards}
      accent="#6655a0"
      actionLabel="Découvrir le projet"
      onAction={open}
      renderCard={(card) => {
        const p = byId.get(card.id);
        return p ? <ProjectFace p={p} /> : null;
      }}
      disableDetails
      deckClassName="aspect-auto h-[33rem] w-[calc(100%-1.5rem)] max-w-sm"
      className="min-h-0 max-w-none py-4"
    />
  );
}
