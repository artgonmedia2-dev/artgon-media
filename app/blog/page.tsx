import type { Metadata } from "next";
import Link from "next/link";
import Particles from "@/components/Particles";
import { Icon } from "@/components/icons";
import { articles } from "@/lib/blog";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — Conseils web, SEO et automatisation",
  description:
    "Guides pratiques d'Artgon MEDIA pour les entreprises de Nador et du Maroc : créer un site web, réussir son SEO local, automatiser WhatsApp.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog Artgon MEDIA", url: "/blog", type: "website" },
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Accueil", url: "/" },
              { name: "Blog", url: "/blog" },
            ]),
          ),
        }}
      />
      <section className="bg-night-gradient relative overflow-hidden pt-32 pb-16 text-white sm:pt-40 sm:pb-20">
        <Particles />
        <div className="container-x relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-light">
            <span className="h-px w-6 bg-current" aria-hidden />
            Blog
          </span>
          <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight">
            Conseils web, SEO et automatisation
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
            Des guides pratiques, sans jargon, pour les entreprises de Nador, du Maroc et de la diaspora.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.slug}
              className="flex flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(102,85,160,0.12)]"
            >
              <span className="self-start rounded-full bg-violet-pale px-3 py-1 text-xs font-semibold text-violet-brand">
                {a.category}
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
                <Link href={`/blog/${a.slug}`} className="hover:text-violet-brand">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{a.description}</p>
              <p className="mt-5 flex items-center gap-2 text-xs text-mute">
                <Icon name="clock" className="h-4 w-4 text-teal-dark" />
                {a.readTime} · mis à jour le {fmt(a.updated)}
              </p>
              <Link
                href={`/blog/${a.slug}`}
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-violet-brand hover:text-teal-dark"
              >
                Lire l&apos;article<span className="sr-only"> : {a.title}</span>
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
