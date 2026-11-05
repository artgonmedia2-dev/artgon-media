import type { IconName } from "@/components/icons";
import { whatsappLink } from "./pricing";

/**
 * Pages des logiciels édités par Artgon MEDIA — contenu repris de
 * artgon-media.vercel.app/solutions/*.
 */

export type Solution = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  facts: { label: string; value: string }[];
  audience: string;
  features: { icon: IconName; title: string; desc: string }[];
  steps: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  cta: string;
  ctaHref: string;
  /** Offre affichée sur l'accueil et sur /tarifs. */
  offer: string;
  icon: IconName;
  preview: "hr" | "whatsapp";
  metaTitle: string;
  metaDescription: string;
  category: string;
};

export const solutions: Solution[] = [
  {
    slug: "infinityhr",
    name: "InfinityHR",
    tagline:
      "Le logiciel de paie et de gestion des congés pensé pour les entreprises marocaines.",
    intro:
      "InfinityHR est un logiciel de gestion des ressources humaines édité par Artgon MEDIA à Nador. Il calcule la paie selon la réglementation marocaine (CNSS, AMO, CIMR, impôt sur le revenu), produit les bulletins de paie en PDF et suit les congés de chaque salarié, avec des données chiffrées stockées dans l'entreprise.",
    facts: [
      { label: "Éditeur", value: "Artgon MEDIA, Nador" },
      { label: "Plateforme", value: "Windows (installation locale)" },
      { label: "Réglementation", value: "Maroc : CNSS, AMO, CIMR, IR" },
      { label: "Essai", value: "15 jours gratuits" },
    ],
    audience: "PME et TPE marocaines, cabinets comptables, services RH.",
    features: [
      {
        icon: "wallet",
        title: "Paie conforme au Maroc",
        desc: "Cotisations CNSS, AMO et CIMR, impôt sur le revenu selon le barème en vigueur, net à payer calculé automatiquement.",
      },
      {
        icon: "document",
        title: "Bulletins de paie en PDF",
        desc: "Un bulletin propre et lisible pour chaque salarié, prêt à imprimer ou à envoyer.",
      },
      {
        icon: "calendar",
        title: "Gestion des congés",
        desc: "Droits acquis, congés pris et solde de chaque salarié, mois par mois, avec historique.",
      },
      {
        icon: "table",
        title: "Import et export Excel",
        desc: "Reprenez vos fichiers existants et exportez vos états pour le comptable.",
      },
      {
        icon: "lock",
        title: "Données chiffrées et sauvegardées",
        desc: "La base est chiffrée sur votre poste et sauvegardée automatiquement : vos données RH ne quittent pas l’entreprise.",
      },
      {
        icon: "wifi-off",
        title: "Fonctionne hors ligne",
        desc: "Aucune connexion internet nécessaire au quotidien.",
      },
    ],
    steps: [
      {
        title: "Démonstration",
        desc: "Présentation du logiciel sur vos propres cas (15 minutes, gratuite).",
      },
      {
        title: "Essai 15 jours",
        desc: "Installation sur votre poste et essai complet pendant 15 jours.",
      },
      {
        title: "Reprise des données",
        desc: "Import de vos salariés et de vos soldes de congés depuis Excel.",
      },
      {
        title: "Formation et support",
        desc: "Prise en main avec votre équipe, puis support par WhatsApp.",
      },
    ],
    faq: [
      {
        q: "InfinityHR est-il adapté à la paie au Maroc ?",
        a: "Oui. InfinityHR a été conçu pour la réglementation marocaine : il calcule les cotisations CNSS, AMO et CIMR ainsi que l'impôt sur le revenu, puis produit les bulletins de paie en PDF.",
      },
      {
        q: "Mes données RH sont-elles envoyées sur internet ?",
        a: "Non. InfinityHR s'installe sur un poste Windows de l'entreprise. La base de données est chiffrée et sauvegardée automatiquement en local ; le logiciel fonctionne sans connexion internet.",
      },
      {
        q: "Peut-on essayer InfinityHR avant de l’acheter ?",
        a: "Oui, Artgon MEDIA propose une démonstration gratuite puis un essai de 15 jours. Demandez-le par WhatsApp au +212 681 169 346.",
      },
      {
        q: "Peut-on reprendre nos fichiers Excel existants ?",
        a: "Oui. Les salariés et les soldes de congés peuvent être importés depuis Excel, et les états peuvent être exportés vers Excel pour votre comptable.",
      },
    ],
    cta: "Demander une démo ou l’essai gratuit",
    ctaHref: whatsappLink(
      "Bonjour Artgon MEDIA, je souhaite une démonstration d’InfinityHR (paie et congés) et l’essai gratuit de 15 jours.",
    ),
    offer: "Démo gratuite et essai de 15 jours",
    icon: "building",
    preview: "hr",
    metaTitle: "InfinityHR : logiciel de paie et congés au Maroc",
    metaDescription:
      "Logiciel de paie et de congés pour entreprises marocaines : CNSS, AMO, CIMR, IR, bulletins PDF, données chiffrées en local. Essai gratuit 15 jours.",
    category: "BusinessApplication",
  },
  {
    slug: "assistant-whatsapp-cabinet-medical",
    name: "Assistant RDV WhatsApp",
    tagline:
      "Vos patients prennent rendez-vous seuls sur WhatsApp, 24 h/24. La secrétaire garde la main sur l’agenda.",
    intro:
      "L'assistant RDV WhatsApp d'Artgon MEDIA permet aux patients d'un cabinet médical de prendre, confirmer ou annuler un rendez-vous sur WhatsApp à toute heure. Il envoie des rappels la veille et 2 heures avant, propose automatiquement les créneaux libérés à la liste d'attente et alimente l'agenda du secrétariat.",
    facts: [
      { label: "Éditeur", value: "Artgon MEDIA, Nador" },
      { label: "Canal patient", value: "WhatsApp (API officielle)" },
      { label: "Rappels", value: "La veille et 2 h avant" },
      { label: "Démo", value: "15 minutes, gratuite" },
    ],
    audience: "Cabinets médicaux, dentaires et paramédicaux, cliniques.",
    features: [
      {
        icon: "clock",
        title: "Prise de rendez-vous 24 h/24",
        desc: "Le patient choisit le jour puis l’heure parmi les créneaux libres, directement dans WhatsApp, même le soir.",
      },
      {
        icon: "bell",
        title: "Rappels automatiques",
        desc: "Rappel la veille et 2 heures avant, avec les boutons « Je confirme » et « J’annule ».",
      },
      {
        icon: "users",
        title: "Liste d'attente",
        desc: "Un créneau annulé est proposé automatiquement au premier patient en attente, qui a 30 minutes pour le prendre.",
      },
      {
        icon: "calendar",
        title: "Agenda du secrétariat",
        desc: "Une page web simple : agenda du jour ou de la semaine, boutons « Patient venu », « Absent » et « Résultats prêts ».",
      },
      {
        icon: "shield",
        title: "Messages sans données médicales",
        desc: "« Vos résultats sont disponibles » : aucun détail médical ne transite par WhatsApp.",
      },
      {
        icon: "alert",
        title: "Urgences redirigées",
        desc: "En cas d’urgence, le patient est orienté vers le 141 (SAMU) : l’assistant ne traite pas les urgences.",
      },
    ],
    steps: [
      {
        title: "Démonstration",
        desc: "Démo gratuite de 15 minutes sur votre téléphone.",
      },
      {
        title: "Paramétrage",
        desc: "Horaires du cabinet, durée des consultations, jours de fermeture, messages.",
      },
      {
        title: "Mise en service",
        desc: "Connexion au numéro WhatsApp Business du cabinet et validation des modèles de messages par Meta.",
      },
      {
        title: "Formation du secrétariat",
        desc: "Prise en main de l’agenda web, puis support par WhatsApp.",
      },
    ],
    faq: [
      {
        q: "Le patient doit-il installer une application ?",
        a: "Non. Le patient écrit simplement au numéro WhatsApp du cabinet. L'assistant lui propose les jours et les heures libres avec des boutons, puis confirme le rendez-vous.",
      },
      {
        q: "La secrétaire garde-t-elle le contrôle de l’agenda ?",
        a: "Oui. Le secrétariat voit tous les rendez-vous (WhatsApp et téléphone) sur une page web, peut en ajouter, en annuler, fermer une journée et marquer un patient venu ou absent.",
      },
      {
        q: "Des informations médicales sont-elles envoyées sur WhatsApp ?",
        a: "Non. Les messages ne contiennent que des informations de rendez-vous. Pour les résultats, le patient reçoit seulement « vos résultats sont disponibles », sans aucun détail médical.",
      },
      {
        q: "Que se passe-t-il quand un patient annule ?",
        a: "Le créneau est libéré immédiatement et proposé au premier patient de la liste d'attente qui souhaite un rendez-vous plus tôt. Il a 30 minutes pour l'accepter, sinon le créneau passe au suivant.",
      },
    ],
    cta: "Réserver une démo gratuite (15 min)",
    ctaHref: whatsappLink(
      "Bonjour Artgon MEDIA, je souhaite une démonstration de l’assistant WhatsApp de prise de rendez-vous pour mon cabinet.",
    ),
    offer: "Démo gratuite de 15 minutes",
    icon: "phone",
    preview: "whatsapp",
    metaTitle: "Assistant RDV WhatsApp pour cabinets médicaux",
    metaDescription:
      "Prise de rendez-vous WhatsApp 24h/24 pour cabinets médicaux : rappels la veille et 2 h avant, liste d'attente, agenda du secrétariat. Démo gratuite.",
    category: "HealthApplication",
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
