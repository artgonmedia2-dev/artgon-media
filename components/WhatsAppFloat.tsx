import WhatsAppIcon from "./WhatsAppIcon";
import { company } from "@/lib/pricing";

/** Bouton WhatsApp flottant, présent sur toutes les pages. */
export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${company.phoneRaw}`}
      target="_blank"
      rel="noopener"
      aria-label={`Écrire sur WhatsApp au ${company.phone}`}
      className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 sm:right-6 sm:bottom-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
