import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Le projet vit dans un dossier contenant d'autres lockfiles : on fixe la racine.
  turbopack: { root: path.resolve(process.cwd()) },
  // Anciennes URL (ancien site) encore indexées : redirections 301.
  async redirects() {
    const countries = "maroc|france|belgique|suisse|pays-bas";
    return [
      { source: "/services", destination: "/tarifs", permanent: true },
      { source: "/services/:slug*", destination: "/tarifs", permanent: true },
      { source: "/agence", destination: "/", permanent: true },
      { source: "/a-propos", destination: "/", permanent: true },
      { source: "/devis", destination: "/contact", permanent: true },
      { source: `/:country(${countries})`, destination: "/", permanent: true },
      { source: `/:country(${countries})/:city`, destination: "/", permanent: true },
      { source: "/realisations/:slug", destination: "/realisations", permanent: true },
      { source: "/og/:path*", destination: "/opengraph-image", permanent: true },
    ];
  },
};

export default nextConfig;
