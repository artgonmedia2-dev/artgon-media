"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { categories, company, packs } from "@/lib/pricing";
import { Icon, type IconName } from "./icons";

const infos: { icon: IconName; title: string; value: string; href?: string }[] = [
  { icon: "pin", title: "Adresse", value: company.address },
  {
    icon: "phone",
    title: "Téléphone / WhatsApp",
    value: company.phone,
    href: `https://wa.me/${company.phoneRaw}`,
  },
  {
    icon: "mail",
    title: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: "document",
    title: "Informations légales",
    value: `RC : ${company.rc} · ICE : ${company.ice}`,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
    service: "",
    message: "",
  });

  /**
   * Envoi via WhatsApp : aucun backend requis pour l'instant.
   * Pour un envoi par email, remplacer par un appel à une route API (/api/contact).
   */
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "*Demande de devis — artgonmedia.online*",
      `Nom : ${form.name}`,
      `Téléphone : ${form.tel}`,
      `Email : ${form.email}`,
      `Prestation : ${form.service}`,
      "",
      form.message,
    ].join("\n");
    window.open(
      `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  };

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const field =
    "w-full rounded-xl border border-line bg-cloud px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-mute/60 focus:border-violet-brand focus:bg-white focus:ring-4 focus:ring-violet-brand/10";

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Parlons de votre projet"
          title={
            <>
              Contactez-nous —
              <br />
              <em className="not-italic text-violet-brand">réponse en 24h</em>
            </>
          }
          desc="Décrivez votre besoin : nous revenons vers vous avec un devis chiffré, un délai et un périmètre clair."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {infos.map((i) => (
              <div
                key={i.title}
                className="reveal flex gap-4 rounded-2xl border border-line bg-white p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-pale text-violet-brand">
                  <Icon name={i.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-mute">
                    {i.title}
                  </h4>
                  {i.href ? (
                    <a
                      href={i.href}
                      className="mt-1 block text-sm font-bold text-violet-brand hover:text-teal-brand"
                    >
                      {i.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold leading-relaxed text-ink-soft">
                      {i.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={send}
            className="reveal rounded-3xl border border-line bg-white p-5 sm:p-8 shadow-[0_24px_60px_rgba(102,85,160,0.1)]"
          >
            <h3 className="font-display text-base font-black text-ink">
              // Demande de devis gratuit
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-mute">
                  Nom complet
                </span>
                <input
                  required
                  className={field}
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={set("name")}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-mute">
                  Téléphone
                </span>
                <input
                  required
                  type="tel"
                  className={field}
                  placeholder="+212 6XX XXX XXX"
                  value={form.tel}
                  onChange={set("tel")}
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-mute">
                Email
              </span>
              <input
                type="email"
                className={field}
                placeholder="votre@email.com"
                value={form.email}
                onChange={set("email")}
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-mute">
                Prestation souhaitée
              </span>
              <select
                className={field}
                value={form.service}
                onChange={set("service")}
              >
                <option value="">— Sélectionnez —</option>
                {categories.map((c) => (
                  <optgroup key={c.id} label={c.title}>
                    {c.rows.map((r) => (
                      <option key={`${c.id}-${r.name}`} value={`${c.title} — ${r.name} (${r.price} MAD)`}>
                        {r.name} — {r.price} MAD
                      </option>
                    ))}
                  </optgroup>
                ))}
                <optgroup label="Packs clé en main">
                  {packs.map((p) => (
                    <option key={p.name} value={`${p.name} (${p.price} MAD/mois)`}>
                      {p.name} — {p.price} MAD/mois
                    </option>
                  ))}
                </optgroup>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-mute">
                Votre projet
              </span>
              <textarea
                rows={5}
                className={`${field} resize-y`}
                placeholder="Décrivez votre projet ou votre besoin..."
                value={form.message}
                onChange={set("message")}
              />
            </label>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-violet-brand py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_16px_40px_rgba(102,85,160,0.3)] transition-all hover:-translate-y-0.5 hover:bg-violet-light"
            >
              Envoyer ma demande via WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-mute">
              Réponse sous 24h ouvrées · Devis gratuit et sans engagement
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
