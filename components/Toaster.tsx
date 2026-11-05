"use client";

import { Toaster as Sonner } from "sonner";

/**
 * Notifications (Sonner, la librairie qu'utilise shadcn/ui) aux couleurs du site.
 * En haut au centre, sous la navigation : bien visible, et loin du bouton
 * WhatsApp flottant en bas à droite.
 */
export default function Toaster() {
  return (
    <Sonner
      position="top-center"
      offset={96}
      mobileOffset={{ top: 84, left: 16, right: 16 }}
      duration={1500}
      closeButton
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "group flex w-full items-start gap-3 rounded-2xl border border-line bg-white p-4 pr-10 font-sans text-ink shadow-[0_20px_50px_rgba(13,12,34,0.18)] sm:w-[380px]",
          title: "text-sm font-semibold",
          description: "mt-1 text-sm leading-relaxed text-mute",
          icon: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center",
          error: "[&_[data-icon]]:text-[#e5484d]",
          success: "[&_[data-icon]]:text-teal-dark",
          closeButton:
            "!absolute !top-3 !right-3 !left-auto flex h-6 w-6 !translate-x-0 !translate-y-0 items-center justify-center rounded-md !border-0 !bg-transparent text-mute transition-colors hover:!bg-cloud hover:text-ink",
        },
      }}
    />
  );
}
