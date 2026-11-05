import type { IconName } from "@/components/icons";

/**
 * Contenus éditoriaux de la page d'accueil — repris du site artgon-media.vercel.app.
 */

export type Service = {
  icon: IconName;
  title: string;
  short: string; // libellé court (pied de page)
  desc: string;
  tags: string[];
  from: string;
  href: string;
};

export const services: Service[] = [
  {
    icon: "globe",
    title: "Création de Site Web à Nador",
    short: "Création Site Web",
    desc: "La création de site web à Nador par Artgon MEDIA couvre la conception de sites vitrines et e-commerce sur mesure, développés en PHP, Laravel et Next.js. Chaque site est rapide, sécurisé, optimisé pour le référencement local et adapté aux entreprises de Nador, Oujda et de toute la région de l'Oriental.",
    tags: ["PHP", "Laravel", "Next.js", "MySQL"],
    from: "1 500 MAD",
    href: "/tarifs#creation-site-web",
  },
  {
    icon: "mobile",
    title: "Application Mobile Flutter",
    short: "Application Mobile",
    desc: "Artgon MEDIA développe des applications mobiles iOS et Android avec Flutter, Dart et Firebase. Une seule base de code génère deux applications natives performantes, ce qui réduit les coûts et le délai de mise sur le marché pour les entreprises du Maroc et de l'Oriental.",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    from: "5 000 MAD",
    href: "/tarifs#application-mobile",
  },
  {
    icon: "search",
    title: "Référencement SEO à Nador",
    short: "Référencement SEO",
    desc: "Le référencement SEO à Nador par Artgon MEDIA combine SEO technique, SEO local et stratégie de contenu pour positionner votre entreprise en tête des résultats Google dans l'Oriental. L'objectif : capter un trafic qualifié et générer des contacts depuis Nador, Oujda et tout le Maroc.",
    tags: ["Google Search Console", "GA4", "Schema.org", "Ahrefs / Semrush"],
    from: "1 500 MAD/mois",
    href: "/tarifs#referencement-seo",
  },
  {
    icon: "megaphone",
    title: "Marketing Digital & Ads à Nador",
    short: "Marketing & Ads",
    desc: "Le marketing digital d'Artgon MEDIA réunit la gestion des réseaux sociaux et les campagnes publicitaires Meta et Google Ads pour les entreprises de Nador et de l'Oriental. La démarche couvre la stratégie, la création de contenu et l'acquisition de leads qualifiés, avec un reporting mensuel transparent.",
    tags: ["Meta Business", "Google Ads", "Meta Ads", "Canva / Suite créative"],
    from: "1 500 MAD/mois",
    href: "/tarifs#marketing-ads",
  },
  {
    icon: "ai",
    title: "Automatisation par Intelligence Artificielle",
    short: "Automatisation IA",
    desc: "Artgon MEDIA intègre l'intelligence artificielle pour automatiser les processus métier des entreprises : chatbots intelligents, qualification de leads, réponses clients 24/7 et workflows automatisés. L'objectif est de gagner du temps, réduire les coûts et améliorer la réactivité, du Maroc à l'international.",
    tags: ["Claude", "n8n", "API IA", "WhatsApp Business API"],
    from: "3 000 MAD",
    href: "/tarifs#automatisation-ia",
  },
  {
    icon: "gear",
    title: "Maintenance & Support Web",
    short: "Maintenance & Support",
    desc: "Le service de maintenance et support d'Artgon MEDIA assure le bon fonctionnement de votre site web : mises à jour de sécurité, hébergement optimisé, sauvegardes régulières et assistance 7j/7. Vous gardez un site rapide, sécurisé et à jour, avec un interlocuteur dédié.",
    tags: ["SLA", "Hébergement", "SSL", "Sauvegardes"],
    from: "500 MAD/mois",
    href: "/tarifs#maintenance-support",
  },
];

export const reasons: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "pin",
    title: "Basés à Nador",
    desc: "Nous connaissons le marché local de Nador et de la région Orientale. Des rendez-vous en personne sont possibles.",
  },
  {
    icon: "clock",
    title: "Livraison rapide",
    desc: "Nos process agiles garantissent des délais courts : site vitrine en 2 à 4 semaines, application mobile en 6 à 12 semaines.",
  },
  {
    icon: "target",
    title: "Résultats mesurables",
    desc: "Chaque projet est suivi par des KPIs clairs : trafic, leads, classement Google et ROI des campagnes publicitaires.",
  },
  {
    icon: "shield",
    title: "Sécurité garantie",
    desc: "SSL, HTTPS, headers sécurisés, sauvegardes quotidiennes et audit de sécurité inclus sur chaque projet.",
  },
  {
    icon: "globe",
    title: "Expertise diaspora",
    desc: "Nous ciblons la diaspora marocaine en Europe (Belgique, France, Pays-Bas, Suisse) pour vos projets immobiliers et e-commerce.",
  },
  {
    icon: "phone",
    title: "Support WhatsApp",
    desc: "Contactez-nous directement sur WhatsApp pour un suivi réactif. Temps de réponse moyen : moins de 2h en heures ouvrables.",
  },
];

export type Project = {
  title: string;
  cat: string;
  context: string;
  desc: string;
  tags: string[];
  image: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Nador West Wood",
    cat: "Industrie du bois · site, app, SEO",
    context: "Fabricant de panneaux MDF, Selouane (Nador) · 2026",
    desc: "Fabricant de panneaux MDF à Selouane : site catalogue Laravel avec demande de devis, application mobile, référencement, Google Ads, réseaux sociaux et magazines.",
    tags: ["Laravel", "Flutter", "SEO"],
    image: "/realisations/nador-west-wood.webp",
    url: "https://nadorwestwood.com",
  },
  {
    title: "Ligna Collection",
    cat: "E-commerce artisanal",
    context: "Marque de vases et bougies faits main, Maroc · 2026",
    desc: "Boutique en ligne d'une marque marocaine de vases et bougies sculptés à la main, reconstruite en Laravel avec un back-office complet, après l'abandon d'un site généré sans code source.",
    tags: ["Laravel 12", "Filament", "MySQL"],
    image: "/realisations/ligna.webp",
    url: "https://ligna-collection.com",
  },
  {
    title: "Fit Journey",
    cat: "Application mobile",
    context: "Plateforme de coaching sportif, Maroc · Démo en ligne · 2026",
    desc: "Application de coaching sportif au Maroc : trouver un coach vérifié, réserver une séance à domicile ou en salle, payer et suivre ses progrès. Applications iOS, Android et web.",
    tags: ["React Native (Expo)", "TypeScript", "FastAPI"],
    image: "/realisations/fit-journey.webp",
  },
  {
    title: "RITT",
    cat: "Site vitrine logistique",
    context: "Transitaire international, Maroc et Afrique · 2026",
    desc: "Site vitrine multilingue d'un transitaire marocain (transport maritime, aérien, routier, dédouanement) : pages services, carte du réseau, demande de devis en 4 étapes et blog.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/realisations/ritt.webp",
  },
];

/** Fiche complète d'une réalisation (page /realisations). */
export type CaseStudy = {
  title: string;
  cat: string;
  context: string;
  desc: string;
  points: string[];
  tags: string[];
  image?: string;
  url?: string;
  status?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Nador West Wood",
    cat: "Industrie du bois",
    context: "Fabricant de panneaux MDF, Selouane (Nador) · 2026",
    desc: "Accompagnement digital complet d’un fabricant et distributeur de panneaux MDF mélaminés : site catalogue avec demande de devis, application mobile, référencement, Google Ads, réseaux sociaux et supports imprimés.",
    points: [
      "Site catalogue Laravel trilingue (FR, EN, ES)",
      "Application mobile Flutter",
      "Pages SEO par famille de produits",
      "Réseaux sociaux, vidéos et magazines",
    ],
    tags: ["Laravel", "MySQL", "Flutter", "Google Ads"],
    image: "/realisations/nador-west-wood.webp",
    url: "https://nadorwestwood.com",
  },
  {
    title: "Ligna Collection",
    cat: "E-commerce artisanal",
    context: "Marque de vases et bougies faits main, Maroc · 2026",
    desc: "Boutique en ligne d'une marque marocaine de vases et bougies sculptés à la main, reconstruite en Laravel avec un back-office complet, après l'abandon d'un site généré sans code source.",
    points: [
      "Boutique Laravel bilingue (FR, EN)",
      "Back-office avec rôles",
      "Parfums, zones de livraison, revendeurs",
      "En ligne sur ligna-collection.com",
    ],
    tags: ["Laravel 12", "Filament", "MySQL", "Tailwind CSS", "Alpine.js"],
    image: "/realisations/ligna.webp",
    url: "https://ligna-collection.com",
  },
  {
    title: "Fit Journey",
    cat: "Application mobile",
    context: "Plateforme de coaching sportif, Maroc · Démo en ligne · 2026",
    desc: "Application de coaching sportif au Maroc : trouver un coach vérifié, réserver une séance à domicile ou en salle, payer et suivre ses progrès. Applications iOS, Android et web.",
    points: [
      "iOS, Android et web (une seule base de code)",
      "Réservations, paiements, messagerie",
      "Tableau de bord administrateur",
      "Audit qualité et sécurité corrigé",
    ],
    tags: ["React Native (Expo)", "TypeScript", "FastAPI", "MongoDB"],
    image: "/realisations/fit-journey.webp",
  },
  {
    title: "Diaspora Immobilier Conseil",
    cat: "Plateforme immobilière",
    context: "Madar Invest Algérie, Boumerdès · 2026",
    desc: "Plateforme d'annonces immobilières en Algérie, pensée aussi pour la diaspora : recherche par ville et type de bien, agences, promoteurs, estimation gratuite et publication d'annonces.",
    points: [
      "Plateforme d’annonces multi-acteurs",
      "Recherche par ville et type de bien",
      "Agences, promoteurs, estimation",
      "En ligne sur diasporaimmobilierconseil.com",
    ],
    tags: ["Laravel", "PHP 8.3", "MySQL", "Vite"],
    image: "/realisations/diaspora-immobilier-conseil.webp",
    url: "https://diasporaimmobilierconseil.com",
  },
  {
    title: "RITT",
    cat: "Site vitrine logistique",
    context: "Transitaire international, Maroc et Afrique · 2026",
    desc: "Site vitrine multilingue d'un transitaire marocain (transport maritime, aérien, routier, dédouanement) : pages services, carte du réseau, demande de devis en 4 étapes et blog.",
    points: [
      "Français, anglais, arabe",
      "Devis guidé en 4 étapes",
      "Carte interactive du réseau",
      "Blog et SEO",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
    image: "/realisations/ritt.webp",
  },
  {
    title: "Maison Indigo",
    cat: "E-commerce mode",
    context: "Marque de jeans premium, Maroc · Projet en cours · 2026",
    desc: "Boutique en ligne d'une marque marocaine de jeans premium : catalogue par coupe et lavage, tailles, guide des tailles, livraison par zones et back-office complet.",
    points: [
      "Variantes coupe, lavage et taille",
      "Livraison par zones",
      "Back-office complet",
      "Projet en cours",
    ],
    tags: ["Laravel 12", "Vue.js", "Inertia", "Filament"],
    status: "Projet en cours",
  },
];
