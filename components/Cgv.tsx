import { cgv } from "@/lib/pricing";

export default function Cgv() {
  return (
    <section id="cgv" className="scroll-mt-40">
      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
        Annexe
      </span>
      <h2 className="mt-2 font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-black leading-tight text-ink">
        Conditions générales de vente
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {cgv.map((c, i) => (
          <div
            key={c.title}
            className="reveal rounded-2xl border border-line bg-white p-6"
          >
            <h3 className="flex items-center gap-3 font-display text-sm font-bold text-ink">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-pale text-[0.7rem] font-black text-violet-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              {c.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mute">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
