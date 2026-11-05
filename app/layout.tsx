import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Toaster from "@/components/Toaster";
import { SITE_URL, geoMeta, localBusinessLd, websiteLd } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
  variable: "--font-playfair",
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
    "Artgon MEDIA, agence web & digitale à Nador : création de sites web dès 1 500 MAD, applications mobiles Flutter, référencement SEO, marketing digital & Ads et automatisation IA, pour Nador, le Maroc et la diaspora en Europe.",
  applicationName: "Artgon MEDIA",
  authors: [{ name: "Artgon MEDIA", url: SITE_URL }],
  creator: "Artgon MEDIA",
  publisher: "Artgon MEDIA",
  keywords: [
    "agence web Nador",
    "création site web Nador",
    "agence digitale Oriental",
    "référencement SEO Nador",
    "SEO local Maroc",
    "application mobile Flutter Maroc",
    "agence web diaspora marocaine",
    "Google Ads Maroc",
    "automatisation IA Maroc",
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
      "Sites web, applications mobiles Flutter, SEO, marketing digital et automatisation IA à Nador, au Maroc et pour la diaspora en Europe.",
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
      "Création de site web dès 1 500 MAD, applications mobiles, SEO et marketing digital à Nador.",
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
  // Icônes : conventions de fichiers (app/icon.png + app/apple-icon.png), tirées du monogramme du logo.
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
    <html lang="fr-MA" className={`${poppins.variable} ${playfair.variable}`}>
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
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
