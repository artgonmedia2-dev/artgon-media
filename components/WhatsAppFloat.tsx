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
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
