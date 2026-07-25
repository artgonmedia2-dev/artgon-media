import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Le projet vit dans un dossier contenant d'autres lockfiles : on fixe la racine.
  turbopack: { root: path.resolve(process.cwd()) },
};

export default nextConfig;
