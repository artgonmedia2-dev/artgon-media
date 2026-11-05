import { company, forfaits, plans } from "./pricing";
import { solutions } from "./solutions";

export const SITE_URL = "https://www.artgonmedia.online";

/** Coordonnées de l'agence (580 Bd Al Massira, Nador). */
export const geo = {
  latitude: 35.1681,
  longitude: -2.9288,
  region: "MA-02", // ISO 3166-2 : Région de l'Oriental
  placename: "Nador",
  country: "Maroc",
};

/** Zones desservies — JSON-LD et pied de page. */
export const areasServed = [
  "Maroc",
  "Diaspora France",
  "Diaspora Belgique",
  "Diaspora Suisse",
  "Diaspora Pays-Bas",
];

export type Faq = { q: string; a: string }[];

/** Questions fréquentes de la page d'accueil. */
export const faq: Faq = [
  {
    q: "Artgon MEDIA est-elle une agence web basée à Nador ?",
    a: "Oui, Artgon MEDIA est une agence web et digitale basée à Nador, au 580 Bd Al Massira, 2e étage, Appartement 3, 62000 Nador. Nous intervenons à Nador, dans la région Orientale et pour des clients en Europe (Belgique, France, Pays-Bas, Suisse).",
  },
  {
    q: "Quels services propose Artgon MEDIA à Nador ?",
    a: "Artgon MEDIA propose la création de sites web (Next.js, PHP, Laravel), le développement d'applications mobiles Flutter (iOS & Android), le référencement SEO local à Nador, le marketing digital (Facebook Ads, Google Ads), l'automatisation IA (chatbots, workflows n8n) et la maintenance de sites web. L'agence édite aussi ses propres logiciels : InfinityHR (paie et congés au Maroc) et un assistant WhatsApp de prise de rendez-vous pour cabinets médicaux.",
  },
  {
    q: "Comment contacter Artgon MEDIA pour un devis ?",
    a: "Vous pouvez contacter Artgon MEDIA par WhatsApp au +212 681 169 346 (le moyen le plus rapide), par email à artgonmedia2@gmail.com ou en remplissant notre formulaire de contact sur cette page. Nous répondons sous 2h en heures ouvrables.",
  },
  {
    q: "Artgon MEDIA travaille-t-elle avec la diaspora marocaine en Europe ?",
    a: "Oui, nous avons une expertise spécifique pour la diaspora marocaine en Belgique, France, Pays-Bas et Suisse. Nous créons des sites et applications pour les projets immobiliers, e-commerce et de services destinés à la communauté marocaine d'Europe.",
  },
];

/** Questions sur les tarifs (page /tarifs). */
export const pricingFaq: Faq = [
  {
    q: "Les prix indiqués sont-ils TTC ?",
    a: "Oui, tous les prix affichés sont toutes taxes comprises (TTC) en dirhams marocains (MAD). Aucun frais caché ne s'applique, le devis signé est le prix définitif.",
  },
  {
    q: "Est-il possible de payer en plusieurs fois ?",
    a: "Oui, nous proposons un paiement en 2 ou 3 fois pour les projets supérieurs à 5 000 MAD. Les modalités sont : 40% à la signature, 40% à la livraison de la maquette et 20% à la mise en ligne.",
  },
  {
    q: "L'hébergement est-il inclus dans les tarifs ?",
    a: "Les forfaits Starter et Pro incluent 1 an d'hébergement offert sur notre infrastructure. À partir de la 2e année, l'hébergement est facturé 600 MAD/an (mutualisé) ou 1 200 MAD/an (VPS). Nous proposons aussi des déploiements Vercel ou sur votre propre hébergeur.",
  },
  {
    q: "Que se passe-t-il si je dépasse le scope défini dans le devis ?",
    a: "Toute modification hors scope est chiffrée et soumise à votre accord avant réalisation. Notre facturation est transparente : jamais de surprise.",
  },
];

/* ────────────────────────────────────────────────────────────
   Données structurées (schema.org)
   ──────────────────────────────────────────────────────────── */

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: company.street,
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
  name: company.name,
  legalName: company.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-artgon.png`,
  image: `${SITE_URL}/logo-artgon.png`,
  telephone: `+${company.phoneRaw}`,
  email: company.email,
  priceRange: "$$",
  currenciesAccepted: "MAD, EUR",
  paymentAccepted: "Virement bancaire, Espèces, PayPal",
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: geo.latitude,
    longitude: geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [company.linkedin, company.youtube],
  areaServed: [
    { "@type": "City", name: "Nador" },
    { "@type": "AdministrativeArea", name: "Oriental" },
    ...["Maroc", "France", "Belgique", "Suisse", "Pays-Bas"].map((name) => ({
      "@type": "Country",
      name,
    })),
  ],
  identifier: [
    { "@type": "PropertyValue", name: "RC", value: company.rc },
    { "@type": "PropertyValue", name: "ICE", value: company.ice },
  ],
  description:
    "Artgon MEDIA est une agence web et digitale à Nador, Maroc, spécialisée en création de sites web, applications mobiles Flutter, SEO, marketing digital et automatisation IA. Elle édite aussi InfinityHR (paie et congés au Maroc) et un assistant WhatsApp de prise de rendez-vous pour cabinets médicaux.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Artgon MEDIA",
    itemListElement: [
      ...forfaits.map((f) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: f.title },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "MAD",
          minPrice: f.from.replace(/[^\d]/g, ""),
        },
      })),
      ...solutions.map((sw) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: sw.name,
          url: `${SITE_URL}/solutions/${sw.slug}`,
          applicationCategory: sw.category,
        },
      })),
    ],
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

export function faqLd(items: Faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Liste de prix : lisible par les moteurs et les IA génératives. */
export const priceListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tarifs Artgon MEDIA",
  description:
    "Tarifs Artgon MEDIA à Nador : plans site web, forfaits par service et logiciels. Prix en MAD, TVA incluse.",
  itemListElement: [
    ...plans.map((p) => ({
      "@type": "Service",
      name: `Site web — ${p.name}`,
      description: p.desc,
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        priceCurrency: "MAD",
        price: p.price.replace(/[^\d]/g, ""),
        description: "Prix unique, TVA incluse",
      },
    })),
    ...forfaits.map((f) => ({
      "@type": "Service",
      name: f.title,
      description: f.points.join(", "),
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        priceCurrency: "MAD",
        price: f.from.replace(/[^\d]/g, ""),
        description: `À partir de ${f.from}, TVA incluse`,
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
