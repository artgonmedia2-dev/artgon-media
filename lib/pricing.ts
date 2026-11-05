import type { IconName } from "@/components/icons";

/**
 * Coordonnées et tarifs Artgon MEDIA — repris du site artgon-media.vercel.app.
 * Tous les montants sont en MAD, TVA incluse (TTC).
 */

export const company = {
  name: "Artgon MEDIA",
  legalName: "ARTGON MEDIA SARL",
  street: "580 Bd Al Massira, 2e étage, Appartement 3",
  city: "62000 Nador",
  address: "580 Bd Al Massira, 2e étage, Appartement 3, 62000 Nador",
  rc: "30499",
  ice: "003821715000064",
  site: "artgonmedia.online",
  email: "artgonmedia2@gmail.com",
  phone: "+212 681 169 346",
  phoneRaw: "212681169346",
  linkedin: "https://www.linkedin.com/company/artgonmedia",
  youtube: "https://www.youtube.com/@artgonmedia",
};

/** Lien WhatsApp avec un message pré-rempli. */
export const whatsappLink = (text?: string) =>
  `https://wa.me/${company.phoneRaw}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/* ── Plans « site web » (prix unique) ── */
export type Plan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "1 500",
    desc: "Site vitrine one-page idéal pour les indépendants et petites entreprises à Nador.",
    features: [
      "1 page responsive (sections multiples)",
      "Design personnalisé",
      "Formulaire de contact WhatsApp",
      "Optimisation SEO de base",
      "Hébergement 1 an offert",
      "Formation à la gestion",
    ],
    cta: "Démarrer avec Starter",
  },
  {
    name: "Pro",
    price: "4 500",
    desc: "Site multi-pages professionnel avec CMS pour PME et commerces de la région Orientale.",
    features: [
      "Jusqu'à 10 pages",
      "CMS intégré (gestion autonome)",
      "Blog et articles SEO",
      "Optimisation SEO avancée",
      "Google Analytics 4 + Search Console",
      "Hébergement 1 an offert",
      "3 mois de support inclus",
      "Formation complète",
    ],
    cta: "Choisir le plan Pro",
    featured: true,
  },
  {
    name: "E-commerce",
    price: "9 000",
    desc: "Boutique en ligne complète avec paiement, gestion des stocks et tableau de bord.",
    features: [
      "Catalogue produits illimité",
      "Paiement en ligne (CMI, PayPal)",
      "Gestion des stocks",
      "Espace client",
      "SEO e-commerce avancé",
      "Intégration réseaux sociaux",
      "6 mois de support inclus",
    ],
    cta: "Créer ma boutique",
  },
];

export const planWhatsapp = (p: Plan) =>
  whatsappLink(
    `Bonjour, je suis intéressé par le plan ${p.name} à ${p.price} MAD.`,
  );

export const customQuoteWhatsapp = whatsappLink(
  "Bonjour, j'ai un projet sur mesure. Pouvez-vous me faire un devis ?",
);

/* ── Tous les forfaits (prix de départ) ── */
export type Forfait = {
  id: string;
  icon: IconName;
  title: string;
  quoteName: string;
  from: string;
  delay: string;
  points: string[];
};

export const forfaits: Forfait[] = [
  {
    id: "creation-site-web",
    icon: "globe",
    title: "Création Site Web",
    quoteName: "Création Site Web",
    from: "1 500 MAD",
    delay: "2 à 4 semaines (vitrine), 4 à 8 semaines (e-commerce)",
    points: ["Sur mesure", "Performance", "Évolutif", "Sécurisé"],
  },
  {
    id: "application-mobile",
    icon: "mobile",
    title: "Application Mobile",
    quoteName: "Application Mobile",
    from: "5 000 MAD",
    delay: "6 à 12 semaines",
    points: [
      "iOS + Android",
      "Performance native",
      "Backend connecté",
      "Publication incluse",
    ],
  },
  {
    id: "referencement-seo",
    icon: "search",
    title: "Référencement SEO",
    quoteName: "Référencement SEO",
    from: "1 500 MAD/mois",
    delay: "Premiers résultats en 4 à 8 semaines",
    points: [
      "SEO local",
      "SEO technique",
      "Contenu stratégique",
      "Résultats mesurables",
    ],
  },
  {
    id: "marketing-ads",
    icon: "megaphone",
    title: "Réseaux sociaux, marketing & Ads",
    quoteName: "Marketing & Ads",
    from: "1 500 MAD/mois",
    delay: "Devis détaillé sous 24h",
    points: [
      "Réseaux sociaux gérés",
      "Campagnes Ads ciblées",
      "Création de contenu",
      "Reporting clair",
    ],
  },
  {
    id: "automatisation-ia",
    icon: "ai",
    title: "Automatisation IA",
    quoteName: "Automatisation IA",
    from: "3 000 MAD",
    delay: "Délai selon le workflow, devis sous 24h",
    points: ["Chatbots 24/7", "Workflows automatisés", "IA + SEO", "Sur mesure"],
  },
  {
    id: "maintenance-support",
    icon: "gear",
    title: "Maintenance & Support",
    quoteName: "Maintenance & Support",
    from: "500 MAD/mois",
    delay: "Sans engagement, réponse sous 4h en urgence",
    points: ["Sécurité", "Hébergement optimisé", "Sauvegardes", "Support 7j/7"],
  },
];

export const forfaitWhatsapp = (f: Forfait) =>
  whatsappLink(
    `Bonjour Artgon MEDIA, je souhaite un devis pour : ${f.quoteName}.`,
  );
