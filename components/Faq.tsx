"use client";

import { useState, type ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";
import type { Faq as FaqItems } from "@/lib/seo";

/**
 * FAQ en accordéon animé (hauteur + opacité). Les réponses restent dans le
 * DOM même fermées : lisibles par les moteurs, le balisage FAQPage étant
 * injecté par la page.
 */
export default function Faq({
  items,
  eyebrow,
  title,
  id = "faq",
  className = "",
}: {
  items: FaqItems;
  eyebrow: string;
  title: ReactNode;
  id?: string;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className={`scroll-mt-20 py-24 lg:py-28 ${className}`}>
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-line border-y border-line">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal py-2">
                <h3>
                  <button
                    type="button"
                    id={`${id}-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-4 text-left"
                  >
                    <span
                      className={`font-display text-base font-semibold transition-colors duration-300 sm:text-lg ${
                        isOpen ? "text-violet-brand" : "text-ink group-hover:text-violet-brand"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-500 ease-out ${
                        isOpen ? "rotate-90 bg-violet-brand text-white" : "bg-violet-pale text-violet-brand"
                      }`}
                    >
                      <Icon name="arrow" className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${id}-a-${i}`}
                  role="region"
                  aria-labelledby={`${id}-q-${i}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`pb-5 leading-relaxed text-mute transition-transform duration-500 ease-out ${
                        isOpen ? "translate-y-0" : "-translate-y-2"
                      }`}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
