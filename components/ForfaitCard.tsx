import { Icon } from "./icons";
import { type Forfait, forfaitWhatsapp } from "@/lib/pricing";

/**
 * Carte « forfait » de la page /tarifs : partagée par la grille (desktop)
 * et le carrousel (mobile). `anchor` porte l'ancre #id (une seule fois par page).
 */
export default function ForfaitCard({
  f,
  anchor = false,
  className = "",
}: {
  f: Forfait;
  anchor?: boolean;
  className?: string;
}) {
  return (
    <article
      id={anchor ? f.id : undefined}
      className={`${className} flex scroll-mt-28 flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(102,85,160,0.12)]`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-pale text-violet-brand">
        <Icon name={f.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink">
        {f.title}
      </h3>
      <p className="mt-2 text-sm text-mute">À partir de</p>
      <p className="font-display text-2xl font-bold text-violet-brand">
        {f.from}
      </p>
      <p className="mt-3 flex items-start gap-2 text-sm text-mute">
        <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-teal-dark" />
        {f.delay}
      </p>
      <ul className="mt-5 flex-1 space-y-2 border-t border-line pt-5">
        {f.points.map((pt) => (
          <li key={pt} className="flex items-center gap-2.5 text-sm text-ink-soft">
            <Icon
              name="check"
              className="h-4 w-4 shrink-0 text-teal-brand"
              strokeWidth={2.25}
            />
            {pt}
          </li>
        ))}
      </ul>
      <div className="mt-7 flex items-center gap-4">
        <a
          href={forfaitWhatsapp(f)}
          target="_blank"
          rel="noopener"
          className="flex-1 rounded-lg bg-violet-brand py-3 text-center text-sm font-bold text-white transition-colors hover:bg-violet-light"
        >
          Devis gratuit
        </a>
        <a
          href="/#services"
          className="-my-2 py-2 text-sm font-bold text-violet-brand hover:text-teal-dark"
        >
          Détails
        </a>
      </div>
    </article>
  );
}
