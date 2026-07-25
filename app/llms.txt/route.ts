import { categories, cgv, company, options, packs } from "@/lib/pricing";
import { SITE_URL, areasServed, faq, geo } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * /llms.txt — résumé factuel du site en texte brut, destiné aux moteurs
 * de réponse et aux assistants IA (ChatGPT, Perplexity, Gemini, Claude…).
 * Généré depuis `lib/pricing.ts` : jamais désynchronisé de la grille affichée.
 */
export function GET() {
  const lines: string[] = [];

  lines.push("# Artgon MEDIA — Agence digitale & web à Nador (Maroc)");
  lines.push("");
  lines.push(
    "> Agence de communication digitale basée à Nador, région de l'Oriental (Maroc). " +
      "Création de sites web et boutiques e-commerce, applications mobiles iOS/Android, " +
      "community management, référencement SEO, publicité en ligne (Meta, Google, LinkedIn), " +
      "automatisation et intelligence artificielle, maintenance technique. " +
      "Tous les tarifs ci-dessous sont publics, exprimés en dirhams marocains (MAD), nets, hors TVA — année 2026.",
  );
  lines.push("");

  lines.push("## Coordonnées");
  lines.push(`- Raison sociale : ${company.name}`);
  lines.push(`- Adresse : ${company.address}`);
  lines.push(
    `- Coordonnées GPS : ${geo.latitude}, ${geo.longitude} (Nador, Oriental, Maroc)`,
  );
  lines.push(`- Téléphone / WhatsApp : ${company.phone}`);
  lines.push(`- Email : ${company.email}`);
  lines.push(`- Site : ${SITE_URL}`);
  lines.push(`- RC : ${company.rc} — ICE : ${company.ice}`);
  lines.push(
    "- Langues : français, arabe, tamazight, espagnol, anglais",
  );
  lines.push("");

  lines.push("## Zones desservies");
  lines.push(`- Province de Nador : ${areasServed.province.join(", ")}`);
  lines.push(`- Région de l'Oriental : ${areasServed.oriental.join(", ")}`);
  lines.push(`- Reste du Maroc : ${areasServed.national.join(", ")} (à distance)`);
  lines.push(
    `- Diaspora marocaine : ${areasServed.diaspora.join(", ")} (à distance)`,
  );
  lines.push("");

  lines.push("## Tarifs 2026");
  lines.push(`Page complète : ${SITE_URL}/tarifs`);
  lines.push("");

  for (const cat of categories) {
    lines.push(`### ${cat.num}. ${cat.title}`);
    lines.push(`${cat.subtitle}`);
    for (const row of cat.rows) {
      const price =
        row.price === "Sur devis"
          ? "sur devis"
          : `${row.price} MAD${row.priceNote ? ` (${row.priceNote})` : ""}`;
      lines.push(
        `- ${row.name} — ${price}${row.meta && row.meta !== "—" ? ` — ${row.meta}` : ""} : ${row.desc}`,
      );
    }
    lines.push(`À noter : ${cat.note}`);
    lines.push("");
  }

  lines.push("### 08. Forfaits packagés « clé en main »");
  for (const pack of packs) {
    const price =
      pack.price === "Sur devis" ? "sur devis" : `${pack.price} MAD/mois`;
    lines.push(
      `- ${pack.name} — ${price}${pack.saving ? ` (${pack.saving})` : ""} : ${pack.items.join(" + ")}. Valeur unitaire : ${pack.unitTotal}.`,
    );
  }
  lines.push("");

  lines.push("### 09. Options & suppléments");
  for (const opt of options) {
    lines.push(`- ${opt.name} — ${opt.price} MAD : ${opt.desc}`);
  }
  lines.push("");

  lines.push("## Conditions générales de vente");
  for (const item of cgv) {
    lines.push(`- ${item.title} : ${item.text}`);
  }
  lines.push("");

  lines.push("## Questions fréquentes");
  for (const item of faq) {
    lines.push(`### ${item.q}`);
    lines.push(item.a);
    lines.push("");
  }

  lines.push("---");
  lines.push(
    `Dernière mise à jour de la grille : année 2026. Source de vérité : ${SITE_URL}/tarifs`,
  );

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
