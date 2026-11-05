import { Icon } from "./icons";

/** Aperçu illustratif de l'interface InfinityHR (tableau de bord paie & congés). */
export function HrPreview() {
  const rows = [
    { w: "w-24", tag: "Validée", tone: "bg-teal-brand/20 text-teal-light" },
    { w: "w-20", tag: "En attente", tone: "bg-white/10 text-white/70" },
    { w: "w-28", tag: "Validée", tone: "bg-teal-brand/20 text-teal-light" },
  ];
  return (
    <div className="flex h-full gap-3 p-5">
      {/* barre latérale */}
      <div className="hidden w-14 shrink-0 flex-col items-center gap-3 rounded-xl bg-white/5 py-4 sm:flex">
        <span className="h-7 w-7 rounded-lg bg-violet-brand" />
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`h-2 w-7 rounded-full ${i === 0 ? "bg-teal-brand" : "bg-white/15"}`} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="grid grid-cols-3 gap-3">
          {["Paie", "Congés", "Équipe"].map((k, i) => (
            <div key={k} className="rounded-xl bg-white/5 p-3">
              <p className="text-[0.65rem] text-white/50">{k}</p>
              <span
                className={`mt-2 block h-2.5 rounded-full ${["w-3/4 bg-teal-brand", "w-1/2 bg-violet-light", "w-2/3 bg-white/40"][i]}`}
              />
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-2 rounded-xl bg-white/5 p-3">
          <p className="text-[0.65rem] text-white/50">Demandes de congés</p>
          {rows.map((r, i) => (
            <div key={i} className="flex items-center gap-2.5 rounded-lg bg-white/5 px-2.5 py-2">
              <span className="h-5 w-5 shrink-0 rounded-full bg-white/20" />
              <span className={`h-2 rounded-full bg-white/30 ${r.w}`} />
              <span className={`ml-auto rounded-full px-2 py-0.5 text-[0.6rem] font-semibold ${r.tone}`}>
                {r.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Aperçu illustratif d'une conversation de prise de rendez-vous sur WhatsApp. */
export function WhatsappPreview() {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex items-center gap-2.5 rounded-t-xl bg-[#075e54] px-3 py-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white">
          <Icon name="phone" className="h-3.5 w-3.5" />
        </span>
        <div>
          <p className="text-xs font-semibold text-white">Cabinet médical</p>
          <p className="text-[0.6rem] text-white/70">Assistant RDV · en ligne</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 rounded-b-xl bg-[#0b141a] p-3 text-[0.7rem] leading-snug">
        <p className="max-w-[75%] self-end rounded-lg rounded-tr-none bg-[#005c4b] px-3 py-2 text-white">
          Bonjour, je voudrais un rendez-vous.
        </p>
        <p className="max-w-[80%] rounded-lg rounded-tl-none bg-[#202c33] px-3 py-2 text-white/90">
          Bien sûr ! Voici les prochains créneaux disponibles&nbsp;:
        </p>
        <div className="flex gap-1.5">
          {["Créneau 1", "Créneau 2", "Créneau 3"].map((c) => (
            <span key={c} className="rounded-full border border-teal-brand/50 px-2.5 py-1 text-[0.62rem] text-teal-light">
              {c}
            </span>
          ))}
        </div>
        <p className="mt-auto max-w-[75%] self-end rounded-lg rounded-tr-none bg-[#005c4b] px-3 py-2 text-white">
          Le premier, merci ✓
        </p>
      </div>
    </div>
  );
}

