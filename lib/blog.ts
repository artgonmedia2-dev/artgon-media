import type { Faq } from "./seo";

/**
 * Articles du blog. Le contenu est écrit dans un Markdown simple
 * (titres ##/###, paragraphes, listes, tableaux, **gras**, [liens](/url)),
 * rendu par components/Prose.tsx.
 * Règle éditoriale : aucun chiffre non sourcé ; les prix et délais sont ceux
 * publiés sur /tarifs.
 */
export type Article = {
  slug: string;
  title: string; // H1
  metaTitle: string; // <= 45 caractères (le gabarit ajoute « | Artgon MEDIA — Nador »)
  description: string; // <= 155 caractères
  category: string;
  published: string; // ISO
  updated: string; // ISO
  readTime: string;
  answer: string; // réponse directe en tête d'article (citable par les moteurs IA)
  body: string;
  faq: Faq;
};

export const articles: Article[] = [
  {
    slug: "comment-creer-site-web-professionnel-nador",
    title: "Comment créer un site web professionnel à Nador en 2026",
    metaTitle: "Créer un site web professionnel à Nador (2026)",
    description:
      "Technologie, budget, délais, contenus, SEO local et obligations légales : la méthode pour créer un site web professionnel à Nador en 2026.",
    category: "Création web",
    published: "2025-03-15",
    updated: "2026-11-05",
    readTime: "8 min",
    answer:
      "Pour créer un site web professionnel à Nador en 2026, fixez d'abord l'objectif du site (être trouvé, vendre, prendre des rendez-vous), choisissez une technologie dont vous gardez le code, préparez vos contenus, travaillez le référencement local dès la conception, puis mesurez les résultats avec Google Search Console. Comptez à partir de 1 500 MAD pour une page vitrine et de 2 à 4 semaines de travail.",
    body: `
## 1. Partir de l'objectif, pas de la technologie

Avant de parler d'outils, répondez à une question : que doit faire le site pour votre entreprise ?

- **Être trouvé** par les clients qui cherchent votre activité à Nador ou dans l'Oriental.
- **Présenter un catalogue** (produits, décors, références) et recevoir des demandes de devis.
- **Vendre en ligne** avec paiement, livraison et suivi des commandes.
- **Prendre des rendez-vous** ou des réservations sans passer par le téléphone.

L'objectif détermine le type de site, son budget et les fonctions indispensables. Un site vitrine bien référencé suffit souvent à une PME locale ; une boutique en ligne demande un vrai back-office.

## 2. Choisir une technologie dont vous gardez le code

Trois familles d'outils dominent :

- **Next.js** : sites très rapides et bien référencés, adaptés aux vitrines ambitieuses, aux portails et aux sites multilingues.
- **Laravel** : applications web avec une logique métier (catalogue, commandes, espace client, tableau de bord). C'est la base de la boutique [Ligna Collection](/realisations) et du site de [Nador West Wood](/realisations).
- **WordPress** : pratique pour publier soi-même des articles, à condition d'en assurer les mises à jour de sécurité.

Un point compte plus que la technologie : **être propriétaire du code et des accès** (nom de domaine, hébergement, comptes Google). Nous avons repris une boutique créée avec un outil « no code » dont le code source n'était plus récupérable : il a fallu tout reconstruire. Exigez toujours les sources et les accès administrateur.

## 3. Le budget et les délais en 2026

Les prix ci-dessous sont nos tarifs publics, TVA incluse (détail sur la page [Tarifs](/tarifs)) :

| Type de site | À partir de | Délai indicatif |
|---|---|---|
| Site vitrine une page (Starter) | 1 500 MAD | 2 à 4 semaines |
| Site multi-pages avec gestion des contenus (Pro) | 4 500 MAD | 2 à 4 semaines |
| Boutique en ligne (E-commerce) | 9 000 MAD | 4 à 8 semaines |
| Application mobile | 5 000 MAD | 6 à 12 semaines |

Prévoyez aussi les frais récurrents : nom de domaine, hébergement (la première année est offerte avec les forfaits Starter et Pro) et, si vous le souhaitez, la maintenance (à partir de 500 MAD/mois).

## 4. Préparer les contenus avant le développement

Le contenu est ce qui retarde le plus souvent un projet. Rassemblez avant de commencer :

1. Votre logo et vos couleurs.
2. Des photos réelles de vos produits, de vos locaux et de votre équipe.
3. Une description claire de chaque service ou produit, avec les questions que vos clients posent le plus souvent.
4. Vos coordonnées exactes (adresse, téléphone, WhatsApp, horaires), identiques partout.

## 5. Penser au référencement local dès la conception

Un site qui n'est pas trouvé ne sert à rien. Dès la maquette :

- une page par service ou par famille de produits, avec un titre qui reprend la recherche réelle (« panneaux MDF à Nador », « dentiste à Nador ») ;
- des titres et descriptions uniques pour chaque page ;
- des données structurées (Schema.org) pour votre entreprise et vos produits ;
- une fiche Google Business Profile reliée au site.

Notre [guide du SEO local à Nador](/blog/seo-local-nador-guide-complet) détaille chaque étape.

## 6. La liste de contrôle avant la mise en ligne

- Certificat SSL actif (adresse en https).
- Site testé sur téléphone : c'est souvent là que se font la plupart des visites.
- Formulaire de contact ou bouton WhatsApp qui fonctionne réellement.
- Mentions légales et politique de confidentialité ; si vous collectez des données personnelles au Maroc, la loi 09-08 et la déclaration auprès de la CNDP s'appliquent.
- Site déclaré dans Google Search Console et sitemap envoyé.

## 7. Mesurer, puis améliorer

Après la mise en ligne, suivez dans Google Search Console les recherches qui vous amènent des visiteurs et les pages qui ne sont pas indexées. Un site s'améliore par petites corrections régulières : contenus, photos, nouvelles pages pour les recherches qui progressent.

Besoin d'un accompagnement ? [Demandez un devis gratuit](/contact) : nous répondons sous 2 heures en heures ouvrables.
`,
    faq: [
      {
        q: "Combien coûte un site web à Nador en 2026 ?",
        a: "Chez Artgon MEDIA, un site vitrine une page commence à 1 500 MAD, un site multi-pages avec gestion des contenus à 4 500 MAD et une boutique en ligne à 9 000 MAD, TVA incluse. Le devis final dépend des fonctions demandées.",
      },
      {
        q: "Combien de temps faut-il pour créer un site vitrine ?",
        a: "Comptez 2 à 4 semaines pour un site vitrine et 4 à 8 semaines pour une boutique en ligne, à condition que les contenus (textes, photos, logo) soient prêts au démarrage.",
      },
      {
        q: "Serai-je propriétaire de mon site ?",
        a: "Oui. Le nom de domaine, l'hébergement et les comptes Google sont ouverts à votre nom, et le code source vous est remis après paiement intégral.",
      },
    ],
  },
  {
    slug: "seo-local-nador-guide-complet",
    title: "SEO local à Nador : le guide complet pour 2026",
    metaTitle: "SEO local à Nador : le guide complet 2026",
    description:
      "Google Business Profile, pages locales, cohérence des coordonnées, avis clients et visibilité dans les réponses des IA : le guide du SEO local à Nador.",
    category: "SEO",
    published: "2025-02-20",
    updated: "2026-11-05",
    readTime: "10 min",
    answer:
      "Le SEO local à Nador consiste à apparaître quand un client cherche votre activité près de chez lui. Les leviers principaux sont une fiche Google Business Profile complète, des coordonnées identiques partout, une page par service sur votre site, des avis clients réguliers et des contenus qui répondent clairement aux questions. En 2026, ces mêmes contenus servent aussi aux réponses des assistants IA.",
    body: `
## Ce que cherche Google quand l'internaute est à Nador

Pour une recherche locale (« agence web Nador », « bois MDF Nador », « pédiatre Nador »), Google combine trois critères :

- **La pertinence** : votre fiche et votre site correspondent-ils à la recherche ?
- **La proximité** : à quelle distance êtes-vous de la personne qui cherche ?
- **La notoriété** : avis, liens et mentions de votre entreprise ailleurs sur le web.

Vous ne pouvez pas changer la distance, mais vous pouvez travailler les deux autres critères.

## 1. Google Business Profile : la base

La fiche Google Business Profile alimente la carte et le « pack local » (les fiches affichées au-dessus des résultats).

1. Revendiquez ou créez la fiche, puis validez-la.
2. Choisissez la **catégorie principale** la plus précise possible, et ajoutez des catégories secondaires.
3. Renseignez l'adresse exacte, les horaires, le téléphone, le lien WhatsApp et le site.
4. Ajoutez des photos réelles : façade, intérieur, équipe, produits, réalisations.
5. Publiez régulièrement des actualités ou des offres.
6. Remplissez la section « Services » ou « Produits ».

## 2. Des coordonnées identiques partout

Votre nom, votre adresse et votre téléphone doivent être écrits **exactement de la même façon** sur votre site, votre fiche Google, Facebook, Instagram, LinkedIn et les annuaires. Une adresse écrite de trois façons différentes brouille le signal.

## 3. Une page par service sur votre site

Une seule page « Nos services » ne peut pas être pertinente pour toutes les recherches. Créez une page par service ou par famille de produits, avec :

- un titre qui reprend la recherche (« Panneaux MDF mélaminés à Nador ») ;
- un premier paragraphe qui répond directement à la question ;
- des informations concrètes : produits, formats, prix de départ, délais, zone desservie ;
- une FAQ avec les vraies questions de vos clients.

C'est l'approche que nous avons suivie pour [Nador West Wood](/realisations), avec une page dédiée à chaque famille de produits (MDF, mélaminé, contreplaqué, bois latté, parquet, faux plafond…).

## 4. Les avis clients

Les avis comptent pour le classement local et rassurent les visiteurs. Demandez-les systématiquement après une prestation réussie, avec un lien direct vers votre fiche, et répondez à chacun, positif ou négatif. N'achetez jamais d'avis : c'est interdit par Google et facile à repérer.

## 5. Les bases techniques

- Site rapide et lisible sur mobile.
- Données structurées \`LocalBusiness\` (ou un type plus précis) avec adresse, horaires et coordonnées GPS.
- Sitemap envoyé dans Google Search Console.
- Pas d'erreurs 404 sur des pages déjà indexées : lors d'une refonte, chaque ancienne adresse doit rediriger vers la nouvelle.

## 6. Être cité par les assistants IA

Une partie des recherches passe désormais par ChatGPT, Gemini, Perplexity ou les aperçus IA de Google. Ces outils reprennent les sources claires et fiables. Pour en faire partie :

- écrivez une réponse directe en début de page, en deux ou trois phrases ;
- donnez des faits vérifiables (prix, délais, adresse, horaires) plutôt que des slogans ;
- évitez les chiffres non sourcés ;
- publiez un fichier \`llms.txt\` qui résume votre activité et liste vos pages clés.

## 7. Mesurer les progrès

Dans Google Search Console, suivez les requêtes locales qui vous amènent des visiteurs et votre position moyenne. Dans Google Business Profile, regardez les appels, les demandes d'itinéraire et les clics vers le site. Comptez plusieurs semaines avant de voir les premiers effets sur les recherches locales.

Vous voulez un audit de votre visibilité locale ? [Contactez-nous](/contact) : le premier échange est gratuit.
`,
    faq: [
      {
        q: "Combien de temps faut-il pour être visible localement à Nador ?",
        a: "Les premiers résultats sur les recherches locales apparaissent généralement en 4 à 8 semaines, à condition que la fiche Google Business Profile, le site et les avis soient travaillés en parallèle.",
      },
      {
        q: "La fiche Google Business Profile est-elle payante ?",
        a: "Non, la fiche Google Business Profile est gratuite. Il faut seulement la revendiquer, la valider et la tenir à jour.",
      },
      {
        q: "Faut-il un site web si l'on a déjà une fiche Google ?",
        a: "Oui. La fiche apporte la visibilité sur la carte, mais c'est le site qui permet de détailler vos services, d'apparaître sur des recherches plus précises et d'être cité par les assistants IA.",
      },
    ],
  },
  {
    slug: "chatbot-whatsapp-ia-entreprise-maroc",
    title: "Chatbot WhatsApp : automatiser son service client au Maroc",
    metaTitle: "Chatbot WhatsApp pour entreprise au Maroc",
    description:
      "Ce qu'un assistant WhatsApp automatise vraiment, l'API officielle, les modèles de messages, la protection des données et un exemple concret de prise de rendez-vous.",
    category: "Automatisation IA",
    published: "2025-01-10",
    updated: "2026-11-05",
    readTime: "9 min",
    answer:
      "Un chatbot WhatsApp répond automatiquement à vos clients sur le numéro WhatsApp de l'entreprise : prise de rendez-vous, réponses aux questions fréquentes, suivi de commande, rappels. Il doit passer par l'API officielle WhatsApp Business de Meta, utiliser des modèles de messages validés pour écrire au client hors de la fenêtre de 24 heures, et respecter la loi 09-08 sur les données personnelles.",
    body: `
## Pourquoi WhatsApp plutôt qu'un formulaire

Au Maroc, beaucoup de clients préfèrent écrire sur WhatsApp plutôt que remplir un formulaire ou appeler. Le problème, c'est que les messages arrivent à toute heure et qu'une seule personne doit souvent y répondre en plus de son travail. Un assistant automatique traite les demandes répétitives et ne laisse à l'équipe que ce qui demande un humain.

## Ce qu'un assistant WhatsApp automatise vraiment

- **La prise de rendez-vous** : le client choisit un jour puis un créneau libre, et reçoit la confirmation.
- **Les rappels** : la veille et quelques heures avant, avec des boutons « Je confirme » et « J'annule ».
- **Les questions fréquentes** : horaires, adresse, tarifs de base, documents à apporter.
- **Le suivi** : statut d'une commande, résultats disponibles, relance après une prestation.
- **Le transfert vers un humain** dès que la demande sort du cadre prévu.

Un bon assistant ne prétend pas tout faire : il guide avec des boutons et des listes plutôt qu'avec du texte libre, et il sait passer la main.

## L'API officielle : la seule voie fiable

Les outils qui automatisent l'application WhatsApp d'un téléphone exposent le numéro à un blocage. La solution durable est l'**API WhatsApp Business** de Meta (Cloud API) :

- le numéro est enregistré et vérifié dans le gestionnaire WhatsApp de Meta ;
- pour écrire au client **plus de 24 heures après son dernier message**, il faut utiliser des **modèles de messages** soumis à validation (par exemple un rappel de rendez-vous) ;
- certains messages sont facturés par Meta selon leur catégorie et le pays : consultez la grille tarifaire officielle avant de lancer un projet.

## Protéger les données de vos clients

Au Maroc, la collecte de données personnelles relève de la **loi 09-08** et de la **CNDP**. Quelques règles simples :

- ne collectez que ce qui sert au service (nom, téléphone, créneau) ;
- n'envoyez aucune information sensible par WhatsApp : pour un cabinet médical, un message du type « vos résultats sont disponibles » suffit, sans aucun détail médical ;
- prévoyez un moyen de supprimer les données d'un client qui le demande.

## Exemple concret : la prise de rendez-vous en cabinet médical

Nous avons conçu un [assistant RDV WhatsApp pour cabinets médicaux](/solutions/assistant-whatsapp-cabinet-medical) :

1. Le patient écrit au numéro du cabinet, même le soir.
2. L'assistant propose les jours puis les créneaux libres.
3. Le rendez-vous apparaît dans l'agenda web du secrétariat.
4. Un rappel part la veille et 2 heures avant ; une annulation libère le créneau.
5. Le créneau libéré est proposé automatiquement au premier patient de la liste d'attente.

En cas d'urgence, l'assistant oriente vers le 141 : il ne traite pas les urgences médicales.

## Combien ça coûte, combien de temps ça prend

Nos projets d'automatisation commencent à 3 000 MAD (détail sur la page [Tarifs](/tarifs)). Le délai dépend du scénario : un parcours de prise de rendez-vous simple se met en place en quelques semaines, en comptant la validation des modèles de messages par Meta.

## Par où commencer

1. Listez les 5 questions que vos clients posent le plus souvent sur WhatsApp.
2. Repérez les tâches qui reviennent chaque jour (confirmer, rappeler, relancer).
3. Commencez par un seul parcours, mesurez le temps gagné, puis étendez.

Vous voulez voir un assistant en action ? [Demandez une démonstration gratuite](/contact) de 15 minutes.
`,
    faq: [
      {
        q: "Un chatbot WhatsApp peut-il fonctionner avec mon numéro actuel ?",
        a: "Oui, à condition de le connecter à l'API WhatsApp Business de Meta. Selon la configuration, le numéro peut rester utilisable dans l'application WhatsApp Business (mode coexistence) ou être réservé à l'API ; nous vérifions l'option possible avant de démarrer.",
      },
      {
        q: "Les messages WhatsApp automatiques sont-ils payants ?",
        a: "Meta facture certains messages selon leur catégorie (marketing, utilitaire, authentification) et le pays. Les réponses dans la fenêtre de 24 heures après le message du client sont traitées différemment. Consultez la grille tarifaire officielle de Meta.",
      },
      {
        q: "Combien coûte un assistant WhatsApp chez Artgon MEDIA ?",
        a: "Les projets d'automatisation commencent à 3 000 MAD. Le devis dépend du parcours à automatiser et des outils à connecter.",
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
