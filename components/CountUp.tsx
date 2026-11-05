"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Compteur animé : « 3 500 », « 98% », « 7j/7 »…
 * Seul le premier nombre de la chaîne défile ; le reste est conservé tel quel.
 * Part de 0 et ne démarre qu'une fois le chiffre bien visible à l'écran.
 * La valeur finale reste lisible par les moteurs et lecteurs d'écran (sr-only).
 */
export default function CountUp({
  value,
  duration = 1800,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const match = value.match(/^(\D*)(\d{1,3}(?:[\s ]\d{3})+|\d+)(.*)$/);
  const target = match ? Number(match[2].replace(/\D/g, "")) : 0;
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.round(eased * target));
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 1, rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  if (!match) return <span className={className}>{value}</span>;

  const formatted = n.toLocaleString("fr-FR").replace(/[  ]/g, " ");
  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      <span className="sr-only">{value}</span>
      <span aria-hidden>
        {match[1]}
        {formatted}
        {match[3]}
      </span>
    </span>
  );
}
