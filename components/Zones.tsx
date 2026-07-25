import { areasServed, geo } from "@/lib/seo";
import { company } from "@/lib/pricing";
import { Icon } from "./icons";

const groups = [
  {
    icon: "pin" as const,
    title: "Province de Nador",
    desc: "Interventions sur site possibles",
    items: areasServed.province,
  },
  {
    icon: "globe" as const,
    title: "Région de l'Oriental",
    desc: "Accompagnement à distance et sur rendez-vous",
    items: areasServed.oriental,
  },
  {
    icon: "building" as const,
    title: "Reste du Maroc",
    desc: "Projets pilotés intégralement à distance",
    items: areasServed.national,
  },
  {
    icon: "mobile" as const,
    title: "Diaspora marocaine",
    desc: "Entrepreneurs marocains établis en Europe",
    items: areasServed.diaspora,
  },
];

/** Section « zones desservies » : contenu géolocalisé réel, utile aux visiteurs
 *  comme aux moteurs de recherche pour le référencement local. */
export default function Zones() {
  return (
    <section id="zones" className="scroll-mt-24 bg-cloud py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-violet-brand">
              Zones desservies
            </span>
            <h2 className="mt-6 font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-black leading-[1.1] text-ink">
              Une agence web ancrée à{" "}
              <span className="text-violet-brand">Nador</span>, active dans tout
              l&apos;Oriental
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-mute">
              Nos bureaux se trouvent {company.address.toLowerCase()}. Nous
              accompagnons les commerces, PME et porteurs de projets de la
              province de Nador et de la région de l&apos;Oriental, ainsi que la
              diaspora marocaine qui investit au pays.
            </p>

            <dl className="mt-8 space-y-4 rounded-2xl border border-line bg-white p-6">
              <div className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 text-violet-brand" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-mute">
                    Adresse
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink-soft">
                    {company.address}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="globe" className="mt-0.5 h-4 w-4 text-violet-brand" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-mute">
                    Coordonnées GPS
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink-soft">
                    {geo.latitude}° N, {Math.abs(geo.longitude)}° O — Nador,
                    Oriental, Maroc
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon
                  name="phone"
                  className="mt-0.5 h-4 w-4 text-violet-brand"
                />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-mute">
                    Langues de travail
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink-soft">
                    Français · Arabe · Tamazight · Espagnol · Anglais
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {groups.map((g) => (
              <div
                key={g.title}
                className="reveal rounded-2xl border border-line bg-white p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-pale text-violet-brand">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-sm font-bold text-ink">
                  {g.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-mute">{g.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((city) => (
                    <li
                      key={city}
                      className="rounded-full bg-cloud px-2.5 py-1 text-[0.7rem] font-semibold text-ink-soft"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
