import type { IconName } from "@/components/icons";

/**
 * Grille tarifaire ARTGON MEDIA — Année 2026
 * Source : « Rapport Global des Tarifs — Forfaits & Prestations 2026 »
 * Tous les montants sont en MAD, nets, hors TVA.
 */

export type Row = {
  name: string;
  desc: string;
  meta?: string; // délai / périmètre / budget min.
  price: string;
  priceNote?: string;
  featured?: boolean;
};

export type Category = {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  icon: IconName;
  columns: [string, string, string, string]; // libellés des 4 colonnes
  rows: Row[];
  note: string;
};

export const categories: Category[] = [
  {
    id: "sites-web",
    num: "01",
    title: "Création de sites web",
    subtitle: "Développement sur mesure — PHP · MySQL · Laravel · WordPress",
    icon: "globe",
    columns: ["Formule", "Description", "Délai", "Tarif (MAD)"],
    rows: [
      {
        name: "Vitrine Essentiel",
        desc: "Site vitrine 1-3 pages, design responsive, formulaire de contact, hébergement 1 an inclus",
        meta: "5-7 jours",
        price: "3 500",
      },
      {
        name: "Vitrine Pro",
        desc: "Site vitrine 5-8 pages, blog intégré, SEO de base, CMS personnalisé, hébergement 1 an",
        meta: "10-15 jours",
        price: "6 500",
        featured: true,
      },
      {
        name: "E-commerce Starter",
        desc: "Boutique en ligne 50-100 produits, paiement en ligne (CMI/Stripe), panier, livraison",
        meta: "3-4 semaines",
        price: "12 000",
      },
      {
        name: "E-commerce Pro",
        desc: "Boutique illimitée, multi-devises, CRM intégré, automations, analytics avancé",
        meta: "5-7 semaines",
        price: "22 000",
      },
      {
        name: "Sur Mesure Entreprise",
        desc: "Application web complexe, API, dashboard admin, rôles utilisateurs, intégrations tierces",
        meta: "Sur devis",
        price: "35 000+",
      },
    ],
    note: "Tous les forfaits incluent : nom de domaine .ma ou .com (1 an), certificat SSL gratuit, optimisation mobile, et livraison des fichiers source.",
  },
  {
    id: "applications-mobiles",
    num: "02",
    title: "Applications mobiles",
    subtitle: "iOS & Android — Flutter · Dart · Firebase · API REST",
    icon: "mobile",
    columns: ["Formule", "Description", "Délai", "Tarif (MAD)"],
    rows: [
      {
        name: "App Vitrine",
        desc: "Application vitrine 3-5 écrans, contenu statique, push notifications, publication stores",
        meta: "2-3 semaines",
        price: "8 000",
      },
      {
        name: "App Connectée",
        desc: "App + backend/API, authentification utilisateur, base de données temps réel, dashboard admin",
        meta: "4-6 semaines",
        price: "18 000",
        featured: true,
      },
      {
        name: "E-commerce Mobile",
        desc: "Boutique complète iOS/Android, panier, paiement intégré, suivi commandes, avis clients",
        meta: "6-8 semaines",
        price: "28 000",
      },
      {
        name: "Sur Mesure",
        desc: "App complexe (réservation, géolocalisation, chat, IA…), architecture scalable",
        meta: "Sur devis",
        price: "45 000+",
      },
    ],
    note: "Publication sur App Store & Google Play incluses. Maintenance corrective 3 mois offerte post-livraison.",
  },
  {
    id: "community-management",
    num: "03",
    title: "Community management & réseaux sociaux",
    subtitle: "Gestion complète — Facebook · Instagram · LinkedIn · TikTok",
    icon: "megaphone",
    columns: ["Forfait", "Inclus", "Réseaux", "Tarif/mois (MAD)"],
    rows: [
      {
        name: "Essentiel",
        desc: "8 publications/mois · Visuels + textes + CM + 1 rapport",
        meta: "Facebook + Instagram",
        price: "1 500",
        priceNote: "/mois",
      },
      {
        name: "Starter",
        desc: "12 publications/mois · + Stories + 2 Reels + rapport analytique",
        meta: "FB + IG + LinkedIn",
        price: "2 500",
        priceNote: "/mois",
        featured: true,
      },
      {
        name: "Growth",
        desc: "16 publications/mois · + 4 Reels + SEO 3 pages + 1 article blog + rapport complet",
        meta: "FB + IG + LinkedIn",
        price: "3 900",
        priceNote: "/mois",
      },
      {
        name: "Premium",
        desc: "24 publications/mois · + 6 Reels/vidéos + stories quotidiennes + campagne Ads 500 MAD/mois incluse",
        meta: "Tous réseaux + TikTok",
        price: "6 500",
        priceNote: "/mois",
      },
      {
        name: "Sur Mesure",
        desc: "Publications illimitées · Community manager dédié, stratégie personnalisée, reporting hebdo",
        meta: "Tous réseaux",
        price: "Sur devis",
      },
    ],
    note: "Prix nets, sans TVA, sans engagement longue durée. Résiliation avec 30 jours de préavis. Visuels réalisés sur Canva Pro ou Adobe Suite selon le forfait.",
  },
  {
    id: "seo",
    num: "04",
    title: "Référencement SEO",
    subtitle:
      "SEO Technique · On-Page · Off-Page · Local SEO — Google Analytics · Search Console",
    icon: "search",
    columns: ["Forfait", "Périmètre", "Livrables", "Tarif (MAD)"],
    rows: [
      {
        name: "Audit SEO",
        desc: "Audit complet technique + contenu + concurrentiel",
        meta: "Rapport PDF 30+ pages + plan d'action priorisé",
        price: "2 500",
        priceNote: "one-shot",
      },
      {
        name: "SEO Local",
        desc: "Optimisation fiche Google Business + avis + citations locales",
        meta: "Fiche optimisée + 10 citations + suivi 3 mois",
        price: "3 500",
        priceNote: "one-shot",
      },
      {
        name: "SEO Starter",
        desc: "5 pages optimisées + netlinking 5 backlinks + 2 articles/mois",
        meta: "Rapport mensuel positions + trafic + conversions",
        price: "4 500",
        priceNote: "/mois",
        featured: true,
      },
      {
        name: "SEO Growth",
        desc: "15 pages optimisées + netlinking 15 backlinks + 4 articles/mois + technique",
        meta: "Rapport hebdo + dashboard + stratégie contenu",
        price: "8 500",
        priceNote: "/mois",
      },
      {
        name: "SEO Entreprise",
        desc: "Site complet + stratégie nationale + netlinking agressif + PR digitale",
        meta: "Rapport hebdo + réunion stratégique mensuelle",
        price: "15 000",
        priceNote: "/mois",
      },
    ],
    note: "Engagement minimum 3 mois recommandé pour des résultats SEO significatifs. Premier mois dédié à l'audit et à la stratégie.",
  },
  {
    id: "publicite",
    num: "05",
    title: "Publicité en ligne & campagnes Ads",
    subtitle: "Meta Ads · Google Ads · LinkedIn Ads — Gestion & Optimisation",
    icon: "target",
    columns: ["Service", "Description", "Budget Ads min.", "Frais de gestion"],
    rows: [
      {
        name: "Mise en place initiale",
        desc: "Création comptes, tracking, audiences, 3 campagnes test",
        meta: "—",
        price: "3 000",
        priceNote: "one-shot",
      },
      {
        name: "Gestion Meta Ads",
        desc: "FB + IG : gestion, A/B testing, optimisation, reporting",
        meta: "2 000 MAD/mois",
        price: "2 500",
        priceNote: "/mois",
        featured: true,
      },
      {
        name: "Gestion Google Ads",
        desc: "Search + Display + Remarketing : mots-clés, annonces, optimisation",
        meta: "3 000 MAD/mois",
        price: "3 000",
        priceNote: "/mois",
      },
      {
        name: "Gestion LinkedIn Ads",
        desc: "B2B : ciblage précis, sponsoring, lead generation",
        meta: "5 000 MAD/mois",
        price: "3 500",
        priceNote: "/mois",
      },
      {
        name: "Pack Multi-Plateforme",
        desc: "Meta + Google + LinkedIn : stratégie unifiée, attribution",
        meta: "8 000 MAD/mois",
        price: "6 500",
        priceNote: "/mois",
      },
    ],
    note: "Les budgets publicitaires sont facturés directement par les plateformes (Meta, Google, LinkedIn). Nos frais de gestion sont indépendants du budget media.",
  },
  {
    id: "ia-automatisation",
    num: "06",
    title: "Automatisation & intelligence artificielle",
    subtitle: "Chatbots · Automations · IA Générative · Optimisation processus",
    icon: "ai",
    columns: ["Solution", "Description", "Délai", "Tarif (MAD)"],
    rows: [
      {
        name: "Chatbot Basique",
        desc: "Chatbot FAQ sur site web ou WhatsApp Business, 20 scénarios",
        meta: "3-5 jours",
        price: "2 500",
        priceNote: "one-shot",
      },
      {
        name: "Chatbot Avancé",
        desc: "Chatbot IA (NLP), intégration CRM, qualification leads, transfert humain",
        meta: "1-2 semaines",
        price: "6 000",
        priceNote: "one-shot",
        featured: true,
      },
      {
        name: "Automation Marketing",
        desc: "Workflows email/SMS automatisés, scoring leads, nurturing",
        meta: "1 semaine",
        price: "4 000",
        priceNote: "setup + 1 500/mois",
      },
      {
        name: "IA SEO Content",
        desc: "Génération articles optimisés IA + relecture humaine, 8 articles/mois",
        meta: "—",
        price: "3 500",
        priceNote: "/mois",
      },
      {
        name: "Sur Mesure IA",
        desc: "Intégration API IA (OpenAI, Claude…), analyse données, prédiction",
        meta: "Sur devis",
        price: "Sur devis",
      },
    ],
    note: "Tous les chatbots incluent 1 mois de maintenance corrective. Formation utilisateur de 1h offerte.",
  },
  {
    id: "maintenance",
    num: "07",
    title: "Maintenance & support technique",
    subtitle: "Hébergement · Mises à jour · Sécurité · Sauvegardes — SLA garanti",
    icon: "gear",
    columns: ["Forfait", "Inclus", "Sites couverts", "Tarif/mois (MAD)"],
    rows: [
      {
        name: "Basic",
        desc: "Hébergement + SSL + sauvegardes mensuelles + support email",
        meta: "1 site vitrine",
        price: "350",
        priceNote: "/mois",
      },
      {
        name: "Pro",
        desc: "Hébergement premium + SSL + sauvegardes hebdo + MAJ sécurité + support 7j/7",
        meta: "1 site e-commerce / app",
        price: "750",
        priceNote: "/mois",
        featured: true,
      },
      {
        name: "Entreprise",
        desc: "Hébergement dédié + CDN + sauvegardes quotidiennes + monitoring 24/7 + support prioritaire",
        meta: "Jusqu'à 3 sites/apps",
        price: "1 500",
        priceNote: "/mois",
      },
      {
        name: "Sur Mesure",
        desc: "Infrastructure cloud (AWS), architecture haute disponibilité, DDoS protection",
        meta: "Illimité",
        price: "Sur devis",
      },
    ],
    note: "Engagement 12 mois avec paiement trimestriel. Résiliation 60 jours de préavis. Uptime garanti 99,9%.",
  },
];

/* ── 8. Forfaits packagés « clé en main » ── */
export type Pack = {
  name: string;
  tagline: string;
  items: string[];
  unitTotal: string;
  price: string;
  saving?: string;
  featured?: boolean;
};

export const packs: Pack[] = [
  {
    name: "Pack Digital Start",
    tagline: "Lancer sa présence digitale",
    items: ["Site vitrine Pro", "SEO Local", "CM Essentiel"],
    unitTotal: "6 500 + 3 500 + 1 500 = 11 500",
    price: "8 900",
    saving: "éco. 23%",
  },
  {
    name: "Pack Digital Pro",
    tagline: "Vendre en ligne et acquérir",
    items: [
      "Site e-com Starter",
      "SEO Starter",
      "CM Starter",
      "Meta Ads gestion",
    ],
    unitTotal: "12 000 + 4 500 + 2 500 + 2 500 = 21 500",
    price: "16 500",
    saving: "éco. 23%",
    featured: true,
  },
  {
    name: "Pack Digital Growth",
    tagline: "Accélérer à grande échelle",
    items: [
      "Site e-com Pro",
      "SEO Growth",
      "CM Growth",
      "Multi-Ads",
      "Chatbot avancé",
    ],
    unitTotal: "22 000 + 8 500 + 3 900 + 6 500 + 6 000 = 46 900",
    price: "35 000",
    saving: "éco. 25%",
  },
  {
    name: "Pack Digital Entreprise",
    tagline: "Dispositif complet sur mesure",
    items: [
      "Site / app sur mesure",
      "SEO",
      "CM",
      "Ads",
      "IA",
      "Maintenance Entreprise",
    ],
    unitTotal: "Sur devis",
    price: "Sur devis",
  },
];

export const packsNote =
  "Les packs sont facturés mensuellement ou annuellement (2 mois offerts en paiement annuel). Personnalisation possible sur demande.";

/* ── 9. Options & suppléments ── */
export type Option = { name: string; desc: string; price: string };

export const options: Option[] = [
  {
    name: "Nom de domaine .ma",
    desc: "Enregistrement + renouvellement annuel",
    price: "250/an",
  },
  {
    name: "Nom de domaine .com",
    desc: "Enregistrement + renouvellement annuel",
    price: "350/an",
  },
  {
    name: "Hébergement additionnel",
    desc: "Migration ou hébergement site supplémentaire",
    price: "200/mois",
  },
  {
    name: "Formation WordPress/Admin",
    desc: "Session 2h en visio, documentation personnalisée",
    price: "1 500",
  },
  {
    name: "Refonte graphique",
    desc: "Nouveau design complet (sans changement technique)",
    price: "3 500+",
  },
  {
    name: "Rédaction article blog",
    desc: "Article SEO 800-1200 mots, recherche mots-clés inclus",
    price: "400/unité",
  },
  {
    name: "Vidéo promotionnelle",
    desc: "Motion design 30-60s ou montage vidéo",
    price: "2 500/unité",
  },
  {
    name: "Shooting photo produit",
    desc: "10 photos retouchées, fond blanc ou lifestyle",
    price: "1 500",
  },
];

/* ── Conditions générales de vente ── */
export const cgv: { title: string; text: string }[] = [
  {
    title: "Prix",
    text: "Tous les tarifs affichés sont nets en Dirhams Marocains (MAD), hors TVA. La TVA s'applique selon la législation en vigueur.",
  },
  {
    title: "Paiement",
    text: "Acompte de 50% à la commande, solde à la livraison pour les projets one-shot. Forfaits mensuels : prélèvement en début de mois.",
  },
  {
    title: "Délais",
    text: "Les délais indiqués sont estimatifs et démarrent à réception de l'acompte et de l'ensemble des éléments nécessaires (contenu, accès, validations).",
  },
  {
    title: "Révisions",
    text: "2 rounds de révisions inclus par livrable. Toute révision supplémentaire est facturée 500 MAD/heure.",
  },
  {
    title: "Propriété intellectuelle",
    text: "Transfert des droits d'usage à la finalisation du paiement intégral. Les codes sources sont livrés uniquement sur forfaits « Sur Mesure » ou avec supplément.",
  },
  {
    title: "Confidentialité",
    text: "ARTGON MEDIA s'engage à la stricte confidentialité des données et informations clients. NDA disponible sur demande.",
  },
  {
    title: "Résiliation",
    text: "Forfaits mensuels : 30 jours de préavis. Maintenance : 60 jours de préavis. Projets one-shot : résiliation selon avancement facturé au prorata.",
  },
  {
    title: "Garantie",
    text: "Garantie corrective de 3 mois sur les bugs post-livraison pour les projets web et mobile. Hors modifications fonctionnelles.",
  },
  {
    title: "Hébergement",
    text: "L'hébergement inclus dans les forfaits est fourni via Hostinger/Cloudways/AWS selon les besoins. Migration gratuite incluse.",
  },
  {
    title: "Support",
    text: "Support par email, WhatsApp et téléphone. Temps de réponse : 24h ouvrées (Basic), 4h (Pro), 1h (Entreprise).",
  },
];

/* ── Coordonnées ── */
export const company = {
  name: "ARTGON MEDIA SARL",
  address: "580, Boulevard Al Massira, 2ème étage, App. n°3 — Nador, Maroc",
  rc: "30499",
  ice: "003821715000064",
  site: "artgonmedia.online",
  email: "contact@artgonmedia.online",
  phone: "+212 681 169 346",
  phoneRaw: "212681169346",
};
