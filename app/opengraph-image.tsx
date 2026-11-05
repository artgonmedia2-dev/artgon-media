import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Artgon MEDIA — agence digitale et web à Nador, région de l'Oriental";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Image de partage générée au build à partir du logo officiel.
 * Le logo ayant un fond transparent, il est posé sur un fond clair :
 * sans cela, WhatsApp et Facebook l'afficheraient sur du noir.
 */
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-artgon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFFFFF 0%, #F0EEFF 100%)",
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={560} height={303} alt="" />

        <div
          style={{
            marginTop: 34,
            fontSize: 38,
            fontWeight: 700,
            color: "#14142B",
            textAlign: "center",
          }}
        >
          Agence web &amp; digitale — Nador, Oriental, Maroc
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 27,
            color: "#6B6B8A",
            textAlign: "center",
          }}
        >
          Sites web · Applications mobiles · SEO · Ads · IA
        </div>

        <div
          style={{
            marginTop: 34,
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: "#6655A0",
            color: "#FFFFFF",
            fontSize: 24,
            fontWeight: 700,
            padding: "14px 34px",
            borderRadius: 999,
          }}
        >
          Sites web dès 1 500 MAD · Nador, Maroc & Europe
        </div>
      </div>
    ),
    size,
  );
}
