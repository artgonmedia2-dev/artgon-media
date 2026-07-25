import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`reveal ${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-violet-pale px-4 py-1.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-violet-brand">
        {eyebrow}
      </span>
      <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-black leading-[1.08] tracking-tight text-ink">
        {title}
      </h2>
      {desc ? (
        <p className="mt-5 text-base leading-relaxed text-mute">{desc}</p>
      ) : null}
    </div>
  );
}
