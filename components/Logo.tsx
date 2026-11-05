import Image from "next/image";
import logo from "@/public/logo-artgon.png";
import logoLight from "@/public/logo-artgon-light.png";

/**
 * Logo officiel Artgon MEDIA (PNG à fond transparent, 1024×554).
 * - `variant="bare"`  : posé directement sur fond clair (navigation).
 * - `variant="plate"` : posé sur une plaque blanche.
 * - `variant="light"` : version claire (violet → blanc, turquoise conservé) pour
 *   les fonds sombres (navigation sur le hero, pied de page).
 */
export default function Logo({
  variant = "bare",
  className = "h-11 w-auto",
  priority = false,
}: {
  variant?: "bare" | "plate" | "light";
  className?: string;
  priority?: boolean;
}) {
  const image = (
    <Image
      src={variant === "light" ? logoLight : logo}
      alt="Artgon MEDIA — agence digitale et web à Nador"
      className={className}
      priority={priority}
      sizes="(max-width: 768px) 160px, 240px"
    />
  );

  if (variant === "plate") {
    return (
      <span className="inline-flex rounded-xl bg-white px-3.5 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
        {image}
      </span>
    );
  }

  return image;
}
