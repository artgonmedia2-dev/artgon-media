# Artgon MEDIA — refonte Next.js + Tailwind

Refonte du site `artgonmedia.online` en **Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript**,
intégrant l'intégralité de la grille tarifaire **2026** (Rapport global des tarifs).

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # serveur de production
```

## Structure

| Chemin | Rôle |
| --- | --- |
| `app/page.tsx` | Accueil : hero, services, pourquoi nous, réalisations, aperçu tarifs, contact |
| `app/tarifs/page.tsx` | Grille tarifaire 2026 complète (sections 1 → 9 + CGV) |
| `lib/pricing.ts` | **Source unique de vérité des tarifs** — toutes les données du PDF |
| `lib/seo.ts` | Géolocalisation, zones desservies, FAQ et données structurées schema.org |
| `components/icons.tsx` | Jeu d'icônes SVG maison (aucune dépendance) |
| `components/` | Composants d'interface |
| `app/globals.css` | Thème Tailwind v4 (`@theme`), couleurs de marque, animations |
| `app/sitemap.ts` · `app/robots.ts` | Sitemap et robots.txt générés |
| `app/llms.txt/route.ts` | Fiche texte pour les IA génératives, générée depuis `pricing.ts` |

## Modifier un tarif

Tout se trouve dans [`lib/pricing.ts`](lib/pricing.ts) :

- `categories` — sections 1 à 7 (sites web, apps, CM, SEO, Ads, IA, maintenance)
- `packs` + `packsNote` — section 8, forfaits clé en main
- `options` — section 9, options & suppléments
- `cgv` — conditions générales de vente
- `company` — coordonnées, RC, ICE

Un changement dans ce fichier se répercute automatiquement sur la page d'accueil,
la page tarifs **et** le menu déroulant « prestation souhaitée » du formulaire de contact.

Mettre `featured: true` sur une ligne l'affiche avec le badge « ★ Le plus demandé ».

## Charte

| Token | Valeur | Usage |
| --- | --- | --- |
| `violet-brand` | `#6655A0` | Couleur principale, CTA |
| `teal-brand` | `#45C4BB` | Accent, validations |
| `ink` | `#14142B` | Texte et blocs sombres |
| `font-display` | Orbitron | Titres, chiffres |
| `font-sans` | Syne | Corps de texte |

## Logo

Le logo officiel `public/logo-artgon.png` (1024×554, **fond transparent**) est la seule
source de marque du site. Il est affiché via [`components/Logo.tsx`](components/Logo.tsx) :

```tsx
<Logo className="h-11 w-auto" priority />   // navigation, fond clair
<Logo variant="plate" className="h-12" />   // pied de page : plaque blanche obligatoire
```

Le fond du logo étant transparent et son violet trop sombre pour l'encre du pied de page,
la variante `plate` le pose sur une plaque blanche arrondie. Ne l'affichez jamais
directement sur un fond foncé.

Déclinaisons générées automatiquement au build :

| Fichier | Résultat |
| --- | --- |
| `app/icon.svg` | Favicon — monogramme « a » redessiné (lisible à 16px, là où le logo complet devient illisible) |
| `app/apple-icon.tsx` | Icône iOS 180×180 — logo sur fond blanc |
| `app/opengraph-image.tsx` | Image de partage 1200×630 — logo + accroche + tarif d'appel |
| `app/twitter-image.tsx` | Reprend l'image Open Graph |

Le logo alimente aussi le champ `logo` de la fiche établissement schema.org.

> Note : `public/project-showcase.png` est en réalité un fichier **JPEG** portant une
> extension `.png`. Il n'est plus utilisé par le site Next (l'image de partage est générée
> depuis le logo), mais pensez à le renommer si vous le réutilisez ailleurs.

## Icônes

Toutes les icônes sont des SVG inlinés définis dans [`components/icons.tsx`](components/icons.tsx)
(grille 24px, trait 1.75, `currentColor`). Aucun emoji, aucune police d'icônes, aucune requête réseau.

```tsx
<Icon name="globe" className="h-6 w-6 text-violet-brand" />
```

Pour ajouter une icône : compléter le type `IconName` et l'objet `paths`.
Les icônes des catégories tarifaires se choisissent dans `lib/pricing.ts` (champ `icon`, typé).

## SEO & GEO

**Référencement local (Nador / Oriental)**

- `ProfessionalService` schema.org avec `geo` (coordonnées GPS), `areaServed`, `serviceArea`
  (rayon 250 km), RC et ICE en `identifier` — [`lib/seo.ts`](lib/seo.ts).
- Balises `geo.region` (MA-02), `geo.placename`, `geo.position`, `ICBM`.
- Section « Zones desservies » visible sur l'accueil : province de Nador, Oriental,
  reste du Maroc et diaspora — du contenu géolocalisé réel, pas seulement du balisage.
- `lang="fr-MA"`, `locale: fr_MA`, canonicals, Open Graph et Twitter Card.

**Moteurs de réponse / IA génératives**

- `/llms.txt` : toute la grille tarifaire, les CGV, les zones et la FAQ en texte brut,
  **générés depuis `lib/pricing.ts`** — impossible de désynchroniser prix affichés et prix cités.
- FAQ visible sur `/tarifs` + balisage `FAQPage` (12 questions réelles, réponses chiffrées).
- `ItemList` de `Service`/`Offer` couvrant chaque formule avec son prix en MAD.
- `OfferCatalog` complet rattaché à la fiche établissement.
- `robots.txt` ouvert aux robots d'IA, `max-snippet: -1`, `max-image-preview: large`.

**À compléter par vos soins**

- Ajouter les URL de vos réseaux sociaux dans un champ `sameAs` de `localBusinessLd`.
- Renseigner `openingHours` si vous souhaitez les afficher sur Google.
- Vérifier les coordonnées GPS exactes de l'agence (constante `geo` dans `lib/seo.ts`,
  actuellement le centre-ville de Nador).
- Revendiquer la fiche Google Business Profile avec la même adresse, au caractère près.

## Formulaire de contact

Le formulaire ouvre WhatsApp avec le message pré-rempli (aucun backend requis).
Pour passer à un envoi e-mail, créer `app/api/contact/route.ts` et remplacer la
fonction `send()` dans [`components/Contact.tsx`](components/Contact.tsx) par un `fetch` vers cette route.

## Déploiement

- **Vercel** : import du dossier, aucune configuration nécessaire.
- **Hébergement mutualisé (Hostinger…)** : ajouter `output: "export"` dans `next.config.ts`,
  puis `npm run build` génère un dossier `out/` à téléverser dans `public_html`.
  Note : l'export statique reste compatible ici, aucune route serveur n'est utilisée.

## Reste de l'ancien site

Les pages historiques (`index.html`, `creation-site-web-nador.html`, `belgique/`,
`suisse/`, `pays-bas/`, `process-masterclass.php`) sont intactes dans le dossier parent.
Elles pourront être migrées progressivement en routes Next.js.
