import { options } from "@/lib/pricing";

export default function Options() {
  return (
    <section id="options" className="scroll-mt-40">
      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
        Section 09
      </span>
      <h2 className="mt-2 font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-black leading-tight text-ink">
        Options & suppléments
      </h2>
      <p className="mt-2 text-sm font-semibold text-mute">
        À la carte, en complément de n&apos;importe quel forfait
      </p>

      <div className="reveal mt-10 overflow-hidden rounded-3xl border border-line bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="bg-violet-brand text-white">
                <th className="px-6 py-4 font-display text-xs font-bold uppercase tracking-wider">
                  Option
                </th>
                <th className="px-6 py-4 font-display text-xs font-bold uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 text-right font-display text-xs font-bold uppercase tracking-wider">
                  Tarif (MAD)
                </th>
              </tr>
            </thead>
            <tbody>
              {options.map((o, i) => (
                <tr
                  key={o.name}
                  className={`border-t border-line transition-colors hover:bg-violet-pale/50 ${
                    i % 2 ? "bg-cloud/60" : ""
                  }`}
                >
                  <td className="px-6 py-4 text-sm font-bold text-ink">
                    {o.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-mute">{o.desc}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-right font-display text-sm font-black text-violet-brand">
                    {o.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
