import type { SVGProps } from "react";

/**
 * Jeu d'icônes maison — traits 1.75px, grille 24px, `currentColor`.
 * Aucune dépendance externe : les icônes sont inlinées dans le HTML,
 * donc rendues côté serveur (0 requête, 0 saut de mise en page).
 */

export type IconName =
  | "globe"
  | "mobile"
  | "megaphone"
  | "search"
  | "target"
  | "ai"
  | "gear"
  | "package"
  | "pin"
  | "phone"
  | "mail"
  | "document"
  | "check"
  | "dash"
  | "arrow"
  | "info"
  | "star"
  | "factory"
  | "building"
  | "sparkles"
  | "clock"
  | "shield";

const paths: Record<IconName, React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
    </>
  ),
  mobile: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
      <path d="M6 6.5h12" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 9.5h3l8-5v15l-8-5H4A1.5 1.5 0 0 1 2.5 13v-2A1.5 1.5 0 0 1 4 9.5Z" />
      <path d="M18.5 9a4 4 0 0 1 0 6" />
      <path d="M7 14.5V20" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.1" />
    </>
  ),
  ai: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <circle cx="12" cy="4" r="1.4" />
      <path d="M12 5.4V8" />
      <path d="M9.2 13.2h.01M14.8 13.2h.01" />
      <path d="M9.8 16.6h4.4" />
      <path d="M1.8 12.5v3M22.2 12.5v3" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.1 14.6a1.5 1.5 0 0 0 .3 1.66l.06.05a1.9 1.9 0 1 1-2.68 2.68l-.05-.06a1.5 1.5 0 0 0-1.66-.3 1.5 1.5 0 0 0-.9 1.37v.15a1.9 1.9 0 1 1-3.8 0V20a1.5 1.5 0 0 0-.98-1.37 1.5 1.5 0 0 0-1.66.3l-.05.06a1.9 1.9 0 1 1-2.68-2.68l.06-.05a1.5 1.5 0 0 0 .3-1.66 1.5 1.5 0 0 0-1.37-.9H4.2a1.9 1.9 0 1 1 0-3.8h.15a1.5 1.5 0 0 0 1.37-.98 1.5 1.5 0 0 0-.3-1.66l-.06-.05A1.9 1.9 0 1 1 8.04 4.5l.05.06a1.5 1.5 0 0 0 1.66.3H9.8a1.5 1.5 0 0 0 .9-1.37V3.3a1.9 1.9 0 1 1 3.8 0v.15a1.5 1.5 0 0 0 .9 1.37 1.5 1.5 0 0 0 1.66-.3l.05-.06a1.9 1.9 0 1 1 2.68 2.68l-.06.05a1.5 1.5 0 0 0-.3 1.66v.05a1.5 1.5 0 0 0 1.37.9h.15a1.9 1.9 0 1 1 0 3.8H20.4a1.5 1.5 0 0 0-1.37.9Z" />
    </>
  ),
  package: (
    <>
      <path d="m12 2.5 8.5 4.75v9.5L12 21.5 3.5 16.75v-9.5Z" />
      <path d="m3.5 7.25 8.5 4.75 8.5-4.75" />
      <path d="M12 12v9.5" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10.5c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10.5" r="2.8" />
    </>
  ),
  phone: (
    <path d="M6.4 3.5h3.1l1.5 3.9-2 1.5a12.2 12.2 0 0 0 6.1 6.1l1.5-2 3.9 1.5v3.1a1.9 1.9 0 0 1-2.1 1.9A16.6 16.6 0 0 1 4.5 5.6a1.9 1.9 0 0 1 1.9-2.1Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.6 7.2 8.4 5.8 8.4-5.8" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13.5h6M9 17h4" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  dash: <path d="M6 12h12" />,
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11.2v5" />
      <path d="M12 7.8h.01" />
    </>
  ),
  star: (
    <path d="m12 3.5 2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.9l6-.8Z" />
  ),
  factory: (
    <>
      <path d="M4 21V12l5 3.5V12l5 3.5V12l5 3.5V21Z" />
      <path d="M2.5 21h19" />
      <path d="M8 18h1.5M13 18h1.5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V21" />
      <path d="M14 10.5h4a2 2 0 0 1 2 2V21" />
      <path d="M2.5 21h19" />
      <path d="M7.5 8h3M7.5 12h3M7.5 16h3" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 3.5 12.9 9l5.6 2-5.6 2-1.9 5.5L9.1 13 3.5 11l5.6-2Z" />
      <path d="M18.5 3.5v3.4M16.8 5.2h3.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8l7.5 3v5.7c0 4.5-3.1 8.2-7.5 9.7-4.4-1.5-7.5-5.2-7.5-9.7V5.8Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.75,
  ...rest
}: { name: IconName; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
