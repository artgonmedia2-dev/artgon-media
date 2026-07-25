import type { Metadata } from "next";
import { Orbitron, Syne } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { SITE_URL, geoMeta, localBusinessLd, websiteLd } from "@/lib/seo";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Agence Web & Digital à Nador — Création de site web, SEO & apps | Artgon MEDIA",
    template: "%s | Artgon MEDIA — Nador",
  },
  description:
    "Agence digitale à Nador (Oriental, Maroc) : création de site web dès 3 500 MAD, applications mobiles Flutter, community management dès 1 500 MAD/mois, SEO local, Google & Meta Ads. Grille tarifaire 2026 publique.",
  applicationName: "Artgon MEDIA",
  authors: [{ name: "Artgon MEDIA", url: SITE_URL }],
  creator: "Artgon MEDIA",
  publisher: "ARTGON MEDIA SARL",
  keywords: [
    "agence web Nador",
    "création site web Nador",
    "agence digitale Oriental",
    "référencement SEO Nador",
    "SEO local Maroc",
    "application mobile Flutter Maroc",
    "community management Nador",
    "Google Ads Maroc",
    "tarifs agence digitale Maroc",
    "création site e-commerce Maroc",
  ],
  category: "Agence de communication digitale",
  alternates: {
    canonical: "/",
    languages: { "fr-MA": "/" },
  },
  openGraph: {
    title:
      "Agence Web & Création de site web à Nador — Artgon MEDIA",
    description:
      "Sites web, applications mobiles, SEO local, publicité en ligne et IA à Nador et dans tout l'Oriental. Tarifs 2026 publics, prix nets en MAD.",
    url: SITE_URL,
    siteName: "Artgon MEDIA",
    locale: "fr_MA",
    type: "website",
    // L'image de partage est générée par app/opengraph-image.tsx à partir du logo.
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence Web & Digital à Nador — Artgon MEDIA",
    description:
      "Création de site web dès 3 500 MAD, apps mobiles, SEO local et Ads à Nador. Grille tarifaire 2026 publique.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
  // Icônes : conventions de fichiers (app/icon.svg + app/apple-icon.tsx).
  other: geoMeta,
};

export const viewport = {
  themeColor: "#6655A0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-MA" className={`${orbitron.variable} ${syne.variable}`}>
      <body className="overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessLd, websiteLd]),
          }}
        />
        <Reveal />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
