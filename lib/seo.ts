import { categories, company, options, packs } from "./pricing";

export const SITE_URL = "https://artgonmedia.online";

/**
 * Coordonnées de Nador (centre-ville) — à affiner avec le point exact
 * de l'agence si vous voulez un ciblage carte au mètre près.
 */
export const geo = {
  latitude: 35.174,
  longitude: -2.9287,
  region: "MA-02", // ISO 3166-2 : Région de l'Oriental
  placename: "Nador",
  country: "Maroc",
};

/** Zones desservies — utilisé à la fois dans le JSON-LD et dans la page. */
export const areasServed = {
  province: [
    "Nador",
    "Selouane",
    "Beni Ansar",
    "Zeghanghane",
    "Arekmane",
    "Ras El Ma",
  ],
  oriental: [
    "Oujda",
    "Berkane",
    "Driouch",
    "Al Hoceïma",
    "Taourirt",
    "Guercif",
    "Saïdia",
    "Jerada",
  ],
  national: ["Casablanca", "Rabat", "Marrakech", "Tanger", "Fès", "Agadir"],
  diaspora: ["Belgique", "Pays-Bas", "Espagne", "Allemagne", "Suisse", "France"],
};

/** Questions fréquentes — réponses issues de la grille tarifaire et des CGV 2026. */
export const faq: { q: string; a: string }[] = [
  {
    q: "Combien coûte la création d'un site web à Nador ?",
    a: "Un site vitrine de 1 à 3 pages démarre à 3 500 MAD et est livré en 5 à 7 jours. Le forfait Vitrine Pro (5 à 8 pages, blog, SEO de base, CMS) est à 6 500 MAD. Une boutique e-commerce démarre à 12 000 MAD, et une application web sur mesure à partir de 35 000 MAD. Le nom de domaine (1 an), le certificat SSL et l'optimisation mobile sont inclus dans tous les forfaits.",
  },
  {
    q: "Quels sont les délais de réalisation ?",
    a: "5 à 7 jours pour un site vitrine essentiel, 10 à 15 jours pour un site vitrine Pro, 3 à 4 semaines pour une boutique e-commerce et 5 à 7 semaines pour un e-commerce Pro. Côté mobile : 2 à 3 semaines pour une app vitrine, 4 à 6 semaines pour une app connectée. Les délais démarrent à réception de l'acompte et de l'ensemble des éléments nécessaires (contenu, accès, validations).",
  },
  {
    q: "Combien coûte la gestion des réseaux sociaux au Maroc ?",
    a: "Nos forfaits community management vont de 1 500 MAD/mois (8 publications, Facebook + Instagram) à 6 500 MAD/mois (24 publications, tous réseaux + TikTok, 6 Reels et une campagne Ads de 500 MAD/mois incluse). Le forfait le plus choisi est Starter à 2 500 MAD/mois.",
  },
  {
    q: "Proposez-vous le référencement SEO local à Nador ?",
    a: "Oui. Le forfait SEO Local coûte 3 500 MAD en prestation unique : optimisation complète de la fiche Google Business Profile, gestion des avis, 10 citations locales et suivi pendant 3 mois. Un audit SEO complet (rapport de 30+ pages avec plan d'action priorisé) est proposé à 2 500 MAD, et les accompagnements mensuels démarrent à 4 500 MAD/mois.",
  },
  {
    q: "Combien coûte une application mobile iOS et Android ?",
    a: "Une application vitrine de 3 à 5 écrans coûte 8 000 MAD, une application connectée avec backend, authentification et dashboard admin 18 000 MAD, une application e-commerce complète 28 000 MAD, et une app sur mesure (réservation, géolocalisation, chat, IA) à partir de 45 000 MAD. La publication sur l'App Store et Google Play est incluse, avec 3 mois de maintenance corrective offerts.",
  },
  {
    q: "Comment se déroule le paiement ?",
    a: "Pour les projets ponctuels : un acompte de 50% à la commande et le solde à la livraison. Pour les forfaits mensuels : prélèvement en début de mois. Les packs peuvent être réglés mensuellement ou annuellement, avec 2 mois offerts en paiement annuel.",
  },
  {
    q: "Les tarifs affichés incluent-ils la TVA ?",
    a: "Non. Tous les tarifs sont exprimés en dirhams marocains (MAD) nets, hors TVA. La TVA s'applique ensuite selon la législation marocaine en vigueur.",
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    a: "Les forfaits mensuels (community management, SEO, Ads) sont sans engagement de longue durée, avec 30 jours de préavis pour résilier. Les contrats de maintenance sont conclus sur 12 mois avec paiement trimestriel et 60 jours de préavis. Pour le SEO, un engagement minimum de 3 mois est recommandé pour obtenir des résultats significatifs.",
  },
  {
    q: "Le code source du site est-il livré ?",
    a: "Les fichiers source sont livrés sur les forfaits de création de sites web. Les codes sources applicatifs complets sont livrés sur les forfaits « Sur Mesure » ou moyennant un supplément. Le transfert des droits d'usage intervient à la finalisation du paiement intégral.",
  },
  {
    q: "Existe-t-il une garantie après la livraison ?",
    a: "Oui, une garantie corrective de 3 mois couvre les bugs post-livraison sur les projets web et mobile (hors modifications fonctionnelles). Les chatbots incluent 1 mois de maintenance corrective et 1 heure de formation utilisateur offerte.",
  },
  {
    q: "Intervenez-vous en dehors de Nador ?",
    a: "Oui. Nous accompagnons les entreprises de toute la région de l'Oriental (Oujda, Berkane, Driouch, Al Hoceïma, Taourirt, Guercif), du reste du Maroc, ainsi que les entrepreneurs de la diaspora marocaine en Europe. Les projets sont pilotés à distance avec un interlocuteur dédié par email, WhatsApp et téléphone.",
  },
  {
    q: "Quel est le délai de réponse du support ?",
    a: "Le support est assuré par email, WhatsApp et téléphone. Les temps de réponse garantis sont de 24 heures ouvrées sur le forfait Basic, 4 heures sur le forfait Pro et 1 heure sur le forfait Entreprise, avec un uptime garanti de 99,9%.",
  },
];

/* ────────────────────────────────────────────────────────────
   Données structurées (schema.org)
   ──────────────────────────────────────────────────────────── */

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "580, Boulevard Al Massira, 2ème étage, App. n°3",
  addressLocality: "Nador",
  addressRegion: "Oriental",
  postalCode: "62000",
  addressCountry: "MA",
};

/** Fiche établissement : le socle du référencement local (GEO). */
export const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Artgon MEDIA",
  legalName: company.name,
  alternateName: "ARTGON MEDIA SARL",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-artgon.png`,
  image: `${SITE_URL}/logo-artgon.png`,
  telephone: `+${company.phoneRaw}`,
  email: company.email,
  priceRange: "3 500 – 45 000 MAD",
  currenciesAccepted: "MAD",
  paymentAccepted: "Virement bancaire, espèces, chèque",
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: geo.latitude,
    longitude: geo.longitude,
  },
  areaServed: [
    ...areasServed.province,
    ...areasServed.oriental,
    "Région de l'Oriental",
    "Maroc",
  ].map((name) => ({ "@type": "Place", name })),
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    geoRadius: "250000",
  },
  knowsLanguage: ["fr", "ar", "es", "en"],
  identifier: [
    { "@type": "PropertyValue", name: "RC", value: company.rc },
    { "@type": "PropertyValue", name: "ICE", value: company.ice },
  ],
  description:
    "Agence digitale et web à Nador (région de l'Oriental, Maroc) : création de sites web et e-commerce, applications mobiles Flutter, community management, référencement SEO, campagnes Meta et Google Ads, automatisation et intelligence artificielle. Grille tarifaire 2026 publique.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Grille tarifaire Artgon MEDIA 2026",
    itemListElement: categories.map((cat) => ({
      "@type": "OfferCatalog",
      name: cat.title,
      itemListElement: cat.rows.map((row) => ({
        "@type": "Offer",
        name: `${cat.title} — ${row.name}`,
        description: row.desc,
        priceCurrency: "MAD",
        ...(row.price === "Sur devis"
          ? {}
          : { price: row.price.replace(/[^\d]/g, "") }),
        availability: "https://schema.org/InStock",
        areaServed: "MA",
        seller: { "@id": `${SITE_URL}/#organization` },
      })),
    })),
  },
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Artgon MEDIA",
  inLanguage: "fr-MA",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** Liste de prix complète : lisible par les moteurs et les IA génératives. */
export const priceListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tarifs Artgon MEDIA 2026",
  description:
    "Grille tarifaire complète 2026 : sites web, applications mobiles, community management, SEO, publicité en ligne, IA, maintenance, packs et options. Prix nets en MAD, hors TVA.",
  numberOfItems:
    categories.reduce((n, c) => n + c.rows.length, 0) +
    packs.length +
    options.length,
  itemListElement: [
    ...categories.flatMap((cat) =>
      cat.rows.map((row) => ({
        "@type": "Service",
        name: `${row.name} — ${cat.title}`,
        serviceType: cat.title,
        description: row.desc,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Maroc" },
        offers: {
          "@type": "Offer",
          priceCurrency: "MAD",
          ...(row.price === "Sur devis"
            ? {}
            : { price: row.price.replace(/[^\d]/g, "") }),
          description: row.priceNote ?? "prix net, hors TVA",
        },
      })),
    ),
    ...packs.map((pack) => ({
      "@type": "Service",
      name: pack.name,
      serviceType: "Pack digital clé en main",
      description: `${pack.tagline} — ${pack.items.join(", ")}.`,
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        priceCurrency: "MAD",
        ...(pack.price === "Sur devis"
          ? {}
          : { price: pack.price.replace(/[^\d]/g, "") }),
        description: pack.saving ?? "prix net, hors TVA",
      },
    })),
  ].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item,
  })),
};

/** Balises `<meta>` de géolocalisation, injectées via `metadata.other`. */
export const geoMeta = {
  "geo.region": geo.region,
  "geo.placename": geo.placename,
  "geo.position": `${geo.latitude};${geo.longitude}`,
  ICBM: `${geo.latitude}, ${geo.longitude}`,
  "business:contact_data:locality": "Nador",
  "business:contact_data:region": "Oriental",
  "business:contact_data:country_name": "Maroc",
  "business:contact_data:phone_number": `+${company.phoneRaw}`,
};
