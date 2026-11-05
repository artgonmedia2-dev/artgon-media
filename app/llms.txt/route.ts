import { company, forfaits, plans } from "@/lib/pricing";
import { solutions } from "@/lib/solutions";
import { caseStudies, services } from "@/lib/content";
import { SITE_URL, areasServed, faq, geo, pricingFaq } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * /llms.txt — résumé factuel du site en texte brut, destiné aux moteurs
 * de réponse et aux assistants IA (ChatGPT, Perplexity, Gemini, Claude…).
 * Généré depuis `lib/` : jamais désynchronisé des pages affichées.
 */
export function GET() {
  const lines: string[] = [];

  lines.push("# Artgon MEDIA — Agence web & digitale à Nador (Maroc)");
  lines.push("");
  lines.push(
    "> Artgon MEDIA est une agence web et digitale à Nador, Maroc, spécialisée en création de sites web, " +
      "applications mobiles Flutter, SEO, marketing digital et automatisation IA. Elle édite aussi InfinityHR " +
      "(paie et congés au Maroc) et un assistant WhatsApp de prise de rendez-vous pour cabinets médicaux. " +
      "Tous les prix sont en dirhams marocains (MAD), TVA incluse.",
  );
  lines.push("");

  lines.push("## Coordonnées");
  lines.push(`- Adresse : ${company.address}, Oriental, Maroc`);
  lines.push(`- Coordonnées GPS : ${geo.latitude}, ${geo.longitude}`);
  lines.push(`- Téléphone / WhatsApp : ${company.phone}`);
  lines.push(`- Email : ${company.email}`);
  lines.push(`- Site : ${SITE_URL}`);
  lines.push(`- RC : ${company.rc} — ICE : ${company.ice}`);
  lines.push("- Horaires : lundi–vendredi 9h–18h, samedi 9h–13h");
  lines.push(`- Zones desservies : Nador, Oriental, ${areasServed.join(", ")}`);
  lines.push("");

  lines.push("## Services");
  for (const s of services) {
    lines.push(`- ${s.title} — à partir de ${s.from} : ${s.desc}`);
  }
  lines.push("");

  lines.push("## Tarifs");
  lines.push(`Page complète : ${SITE_URL}/tarifs`);
  lines.push("");
  lines.push("### Sites web (prix unique)");
  for (const p of plans) {
    lines.push(`- ${p.name} — ${p.price} MAD : ${p.desc} Inclus : ${p.features.join(", ")}.`);
  }
  lines.push("");
  lines.push("### Tous les forfaits (prix de départ)");
  for (const f of forfaits) {
    lines.push(`- ${f.title} — à partir de ${f.from} (${f.delay}) : ${f.points.join(", ")}.`);
  }
  lines.push("");
  lines.push("### Logiciels (sur devis)");
  for (const s of solutions) {
    lines.push(`- ${s.name} — ${s.offer} : ${s.intro} Page : ${SITE_URL}/solutions/${s.slug}`);
  }
  lines.push("");

  lines.push("## Réalisations");
  lines.push(`Page complète : ${SITE_URL}/realisations`);
  for (const p of caseStudies) {
    lines.push(`- ${p.title} (${p.context}) : ${p.desc} Points clés : ${p.points.join(", ")}.`);
  }
  lines.push("");

  lines.push("## Questions fréquentes");
  for (const item of [...faq, ...pricingFaq]) {
    lines.push(`### ${item.q}`);
    lines.push(item.a);
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
