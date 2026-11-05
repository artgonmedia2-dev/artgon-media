import type { ReactNode } from "react";

/**
 * Titre de section : sur-titre turquoise, titre en Poppins,
 * mot d'accent en serif italique (`<em className="accent">`).
 */
export default function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`reveal ${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <span
        className={`inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-teal-light" : "text-teal-dark"}`}
      >
        <span className="h-px w-6 bg-current" aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.15] tracking-tight ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {desc ? (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-[0.95rem] ${dark ? "text-white/65" : "text-mute"}`}
        >
          {desc}
        </p>
      ) : null}
    </div>
  );
}
