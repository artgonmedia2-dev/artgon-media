"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import Particles from "./Particles";
import { Icon, type IconName } from "./icons";
import { company } from "@/lib/pricing";

const infos: { icon: IconName; title: string; value: string; href?: string }[] = [
  { icon: "pin", title: "Adresse", value: `${company.street}, ${company.city}` },
  {
    icon: "phone",
    title: "Téléphone & WhatsApp",
    value: company.phone,
    href: `tel:+${company.phoneRaw}`,
  },
  {
    icon: "mail",
    title: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
];

const perks = ["Échange gratuit", "Réponse sous 2h", "Sans engagement"];

const serviceOptions = [
  "Création site web",
  "Application mobile Flutter",
  "Référencement SEO",
  "Marketing digital & Ads",
  "Automatisation IA",
  "Maintenance & support",
  "Autre",
];

const steps = ["Informations", "Service souhaité", "Détails"];

/** Indicatifs proposés : Maroc, diaspora en Europe, puis autres pays fréquents. */
const dialCodes = [
  { code: "212", label: "Maroc", flag: "🇲🇦" },
  { code: "33", label: "France", flag: "🇫🇷" },
  { code: "32", label: "Belgique", flag: "🇧🇪" },
  { code: "31", label: "Pays-Bas", flag: "🇳🇱" },
  { code: "41", label: "Suisse", flag: "🇨🇭" },
  { code: "34", label: "Espagne", flag: "🇪🇸" },
  { code: "49", label: "Allemagne", flag: "🇩🇪" },
  { code: "39", label: "Italie", flag: "🇮🇹" },
  { code: "44", label: "Royaume-Uni", flag: "🇬🇧" },
  { code: "213", label: "Algérie", flag: "🇩🇿" },
  { code: "216", label: "Tunisie", flag: "🇹🇳" },
  { code: "971", label: "Émirats arabes unis", flag: "🇦🇪" },
  { code: "966", label: "Arabie saoudite", flag: "🇸🇦" },
  { code: "974", label: "Qatar", flag: "🇶🇦" },
  { code: "1", label: "États-Unis / Canada", flag: "🇺🇸" },
];

/** Sélecteur d'indicatif aux couleurs du site (liste accessible au clavier). */
function DialSelect({ value, onChange }: { value: string; onChange: (code: string) => void }) {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const current = dialCodes.find((d) => d.code === value) ?? dialCodes[0];

  // Fermeture au clic extérieur
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Garde l'option surlignée visible pendant la navigation au clavier
  useEffect(() => {
    if (open) list.current?.children[hi]?.scrollIntoView({ block: "nearest" });
  }, [open, hi]);

  const openList = () => {
    setHi(Math.max(0, dialCodes.findIndex((d) => d.code === value)));
    setOpen(true);
  };

  const pick = (i: number) => {
    onChange(dialCodes[i].code);
    setOpen(false);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    if (e.key === "ArrowDown") setHi((h) => Math.min(h + 1, dialCodes.length - 1));
    else if (e.key === "ArrowUp") setHi((h) => Math.max(h - 1, 0));
    else if (e.key === "Enter" || e.key === " ") pick(hi);
    else if (e.key === "Escape" || e.key === "Tab") return setOpen(false);
    else return;
    e.preventDefault();
  };

  return (
    <div ref={root} className="relative shrink-0">
      <button
        type="button"
        aria-label={`Indicatif du pays : ${current.label} (+${current.code})`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKey}
        className="flex h-full items-center gap-1.5 rounded-l-lg border-r border-line bg-cloud pr-2.5 pl-3.5 text-sm font-medium text-ink-soft outline-none transition-colors hover:bg-violet-pale focus-visible:bg-violet-pale"
      >
        <span aria-hidden>{current.flag}</span>
        +{current.code}
        <svg
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 text-mute transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M5.5 7.5 10 12l4.5-4.5z" />
        </svg>
      </button>

      <ul
        ref={list}
        role="listbox"
        aria-label="Indicatif du pays"
        className={`absolute top-[calc(100%+0.5rem)] left-0 z-30 max-h-72 w-64 origin-top overflow-y-auto rounded-xl border border-line bg-white p-1.5 shadow-[0_20px_50px_rgba(13,12,34,0.18)] transition-all duration-200 ${
          open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        }`}
      >
        {dialCodes.map((d, i) => {
          const selected = d.code === value;
          return (
            <li
              key={d.code}
              role="option"
              aria-selected={selected}
              onMouseEnter={() => setHi(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => pick(i)}
              className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                i === hi ? "bg-violet-pale" : ""
              } ${selected ? "font-semibold text-violet-brand" : "text-ink-soft"}`}
            >
              <span aria-hidden className="text-base leading-none">
                {d.flag}
              </span>
              <span className="flex-1 truncate">{d.label}</span>
              <span className={selected ? "text-violet-brand" : "text-mute"}>+{d.code}</span>
              {selected ? (
                <Icon name="check" className="h-4 w-4 text-violet-brand" strokeWidth={2.5} />
              ) : (
                <span className="w-4" aria-hidden />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Numéro complet : saisi au format international (+33…, 0033…) il est gardé
 * tel quel, sinon on préfixe l'indicatif choisi (sans le 0 national).
 */
const fullPhone = (dial: string, tel: string) => {
  const t = tel.trim();
  if (t.startsWith("+")) return t;
  if (t.startsWith("00")) return `+${t.slice(2)}`;
  return `+${dial} ${t.replace(/^0/, "")}`;
};

type Field = "name" | "tel" | "email" | "serviceOther" | "message";

type FormValues = {
  name: string;
  tel: string;
  email: string;
  service: string;
  serviceOther: string;
  message: string;
};

/** Règles de validation de chaque étape ; renvoie un message par champ fautif. */
function validateStep(step: number, f: FormValues) {
  const e: Partial<Record<Field, string>> = {};
  if (step === 0) {
    if (f.name.trim().length < 2) e.name = "Indiquez votre nom complet.";
    const digits = f.tel.replace(/\D/g, "");
    if (!f.tel.trim()) e.tel = "Indiquez votre numéro de téléphone.";
    else if (!/^[\d\s+().-]+$/.test(f.tel) || digits.length < 8 || digits.length > 15)
      e.tel = "Le numéro de téléphone semble invalide.";
    if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()))
      e.email = "L'adresse email semble invalide.";
  }
  if (step === 1 && f.service === "Autre" && !f.serviceOther.trim())
    e.serviceOther = "Précisez le service souhaité.";
  if (step === 2 && f.message.trim().length < 10)
    e.message = "Décrivez votre projet en quelques mots (10 caractères minimum).";
  return e;
}

/**
 * Formulaire de contact en 3 étapes, envoyé via WhatsApp (aucun backend).
 * Pour un envoi par email, remplacer `send` par un appel à une route API.
 */
/** Formulaire en 3 étapes : utilisé sur l'accueil et sur la page /contact. */
export function ContactForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    dial: "212",
    tel: "",
    email: "",
    service: "",
    serviceOther: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((er) => ({ ...er, [key]: undefined }));
    };

  /** Valide l'étape affichée ; en cas d'erreur, notifie et place le curseur sur le 1er champ fautif. */
  const validate = () => {
    const found = validateStep(step, form);
    setErrors(found);
    const fields = Object.keys(found) as Field[];
    if (fields.length === 0) return true;
    const messages = fields.map((f) => found[f]);
    toast.error(
      fields.length > 1 ? "Quelques champs sont à corriger" : "Un champ est à corriger",
      { id: "contact-form", description: messages.join(" ") },
    );
    formRef.current
      ?.querySelector<HTMLElement>(`[data-field="${fields[0]}"]`)
      ?.focus();
    return false;
  };

  const next = () => {
    if (validate()) setStep((s) => Math.min(s + 1, 2));
  };

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) return next();
    if (!validate()) return;
    const text = [
      "*Demande de devis — artgonmedia.online*",
      `Nom : ${form.name}`,
      `Téléphone : ${fullPhone(form.dial, form.tel)}`,
      form.email ? `Email : ${form.email}` : null,
      form.service
        ? `Service : ${form.service === "Autre" && form.serviceOther.trim() ? `Autre — ${form.serviceOther.trim()}` : form.service}`
        : null,
      "",
      form.message,
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(
      `https://wa.me/${company.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    toast.success("Votre demande est prête !", {
      id: "contact-form",
      description:
        "WhatsApp s'est ouvert avec votre message pré-rempli : il ne reste qu'à l'envoyer. Réponse moyenne sous 2h.",
    });
  };

  const base =
    "w-full rounded-lg border bg-white px-4 py-3.5 text-sm text-ink outline-none transition-all placeholder:text-mute/70 focus:ring-4";
  const ok = "border-line focus:border-violet-brand focus:ring-violet-brand/10";
  const bad = "border-[#e5484d] focus:border-[#e5484d] focus:ring-[#e5484d]/15";
  const field = (name: Field) => `${base} ${errors[name] ? bad : ok}`;

  return (
    <form
      ref={formRef}
      onSubmit={send}
      noValidate
      className="reveal rounded-3xl bg-white p-6 text-ink shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-10"
    >
      <h3 className="text-center font-display text-xl font-bold sm:text-2xl">
        Envoyez-nous votre projet
      </h3>
      <p className="mt-2 text-center text-sm text-mute">
        Les champs marqués d&apos;un * sont obligatoires.
      </p>

      {/* Étapes */}
      <ol className="relative mt-8 grid grid-cols-3">
        {/* Ligne de progression : du centre de la 1re pastille au centre de la dernière */}
        <span
          aria-hidden
          className="absolute top-[1.125rem] right-[16.667%] left-[16.667%] h-0.5 -translate-y-1/2 rounded bg-line"
        >
          <span
            className="block h-full rounded bg-teal-brand transition-[width] duration-500 ease-out"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          />
        </span>
        {steps.map((label, i) => (
          <li key={label} className="relative flex justify-center">
            <button
              type="button"
              onClick={() => i < step && setStep(i)}
              disabled={i > step}
              aria-current={i === step ? "step" : undefined}
              className="flex flex-col items-center gap-2 disabled:cursor-default"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ring-4 ring-white transition-colors duration-300 ${
                  i < step
                    ? "bg-teal-brand text-night"
                    : i === step
                      ? "bg-violet-brand text-white shadow-[0_6px_18px_rgba(102,85,160,0.4)]"
                      : "bg-cloud text-mute"
                }`}
              >
                {i < step ? <Icon name="check" className="h-4 w-4" strokeWidth={2.75} /> : i + 1}
              </span>
              <span
                className={`whitespace-nowrap text-center text-[0.68rem] font-semibold sm:text-xs ${i === step ? "text-violet-brand" : "text-mute"}`}
              >
                {label}
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div className="mt-8 min-h-[12.5rem]">
        {step === 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              data-field="name"
              aria-invalid={Boolean(errors.name)}
              autoComplete="name"
              aria-label="Nom complet"
              className={`${field("name")} sm:col-span-2`}
              placeholder="Nom complet *"
              value={form.name}
              onChange={set("name")}
            />
            <div
              className={`flex rounded-lg border transition-all focus-within:ring-4 sm:col-span-2 ${
                errors.tel
                  ? "border-[#e5484d] focus-within:ring-[#e5484d]/15"
                  : "border-line focus-within:border-violet-brand focus-within:ring-violet-brand/10"
              }`}
            >
              <DialSelect
                value={form.dial}
                onChange={(dial) => setForm((f) => ({ ...f, dial }))}
              />
              <input
                required
                data-field="tel"
                aria-invalid={Boolean(errors.tel)}
                type="tel"
                autoComplete="tel"
                aria-label="Téléphone"
                className="w-full rounded-r-lg bg-white px-4 py-3.5 text-sm outline-none placeholder:text-mute/70"
                placeholder="Téléphone *"
                value={form.tel}
                onChange={set("tel")}
              />
            </div>
            <input
              type="email"
              data-field="email"
              aria-invalid={Boolean(errors.email)}
              autoComplete="email"
              aria-label="Email"
              className={`${field("email")} sm:col-span-2`}
              placeholder="Email (facultatif)"
              value={form.email}
              onChange={set("email")}
            />
          </div>
        ) : null}

        {step === 1 ? (
          <fieldset>
            <legend className="mb-4 text-sm font-semibold text-ink-soft">
              Service souhaité
            </legend>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {serviceOptions.map((o) => {
                const on = form.service === o;
                return (
                  <label
                    key={o}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${
                      on
                        ? "border-violet-brand bg-violet-pale font-semibold text-violet-brand"
                        : "border-line text-ink-soft hover:border-violet-brand/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={o}
                      checked={on}
                      onChange={set("service")}
                      className="sr-only"
                    />
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${on ? "border-violet-brand" : "border-line"}`}
                    >
                      {on ? <span className="h-2 w-2 rounded-full bg-violet-brand" /> : null}
                    </span>
                    {o}
                  </label>
                );
              })}
              {/* Précision libre quand « Autre » est choisi */}
              {form.service === "Autre" ? (
                <input
                  required
                  autoFocus
                  data-field="serviceOther"
                  aria-invalid={Boolean(errors.serviceOther)}
                  aria-label="Précisez le service souhaité"
                  className={`${field("serviceOther")} sm:col-span-1`}
                  placeholder="Précisez le service *"
                  value={form.serviceOther}
                  onChange={set("serviceOther")}
                />
              ) : null}
            </div>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <textarea
            required
            data-field="message"
            aria-invalid={Boolean(errors.message)}
            rows={7}
            aria-label="Décrivez votre projet"
            className={`${field("message")} resize-y`}
            placeholder="Décrivez votre projet *"
            value={form.message}
            onChange={set("message")}
          />
        ) : null}
      </div>

      <div className="mt-6 flex gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="rounded-lg border border-line px-5 py-4 text-sm font-bold text-ink-soft transition-colors hover:border-violet-brand hover:text-violet-brand"
          >
            Précédent
          </button>
        ) : null}
        <button
          type="submit"
          className="flex-1 rounded-lg bg-violet-brand py-4 text-sm font-bold text-white shadow-[0_14px_34px_rgba(102,85,160,0.3)] transition-colors duration-300 hover:bg-violet-dark"
        >
          {step < 2 ? "Suivant" : "Envoyer via WhatsApp"}
        </button>
      </div>

      <ul className="mt-6 space-y-2.5 text-xs text-mute">
        <li className="flex items-start gap-2.5">
          <Icon name="shield" className="h-4 w-4 shrink-0 text-ink-soft" />
          Ce formulaire ouvre WhatsApp avec votre message pré-rempli : rien
          n&apos;est enregistré sur le site.
        </li>
        <li className="flex items-start gap-2.5">
          <Icon name="clock" className="h-4 w-4 shrink-0 text-ink-soft" />
          Temps de réponse moyen : 2h.
        </li>
      </ul>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-night-gradient slant-top relative scroll-mt-20 overflow-hidden pt-24 pb-16 sm:pt-36 sm:pb-24 text-white lg:pt-44 lg:pb-28"
    >
      <Particles />
      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Accroche */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-light">
            <span className="h-px w-6 bg-current" aria-hidden />
            Contact
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] tracking-tight">
            Parlons de votre <em className="accent text-teal-brand">projet</em>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
            Décrivez-nous votre projet et nous vous recontactons{" "}
            <strong className="font-semibold text-white">sous 2h</strong> pour un
            premier échange{" "}
            <strong className="font-semibold text-white">gratuit et sans engagement</strong>.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-teal-brand" strokeWidth={2.5} />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
            {infos.map((i) => (
              <div key={i.title} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-teal-light ring-1 ring-white/15">
                  <Icon name={i.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-white/50">{i.title}</p>
                  {i.href ? (
                    <a
                      href={i.href}
                      className="inline-flex min-h-11 items-center text-sm font-semibold text-white transition-colors hover:text-teal-light"
                    >
                      {i.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-white">{i.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire en 3 étapes */}
        <ContactForm />
      </div>
    </section>
  );
}
