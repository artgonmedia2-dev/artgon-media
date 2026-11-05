import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import Particles from "@/components/Particles";
import Prose from "@/components/Prose";
import { articles, getArticle } from "@/lib/blog";
import { SITE_URL, breadcrumbLd, faqLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.description,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.description,
      url: `/blog/${a.slug}`,
      type: "article",
      publishedTime: a.published,
      modifiedTime: a.updated,
    },
  };
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const url = `${SITE_URL}/blog/${a.slug}`;
  const others = articles.filter((o) => o.slug !== a.slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: a.title,
    description: a.description,
    datePublished: a.published,
    dateModified: a.updated,
    inLanguage: "fr",
    mainEntityOfPage: url,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  const breadcrumb = breadcrumbLd([
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: a.title, url: `/blog/${a.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleLd, breadcrumb, faqLd(a.faq)]) }}
      />

      <section className="bg-night-gradient relative overflow-hidden pt-32 pb-14 text-white sm:pt-40 sm:pb-20">
        <Particles />
        <div className="container-x relative z-10 max-w-3xl">
          <nav aria-label="Fil d'Ariane" className="text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="-my-2 inline-block py-2 hover:text-teal-light">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog" className="-my-2 inline-block py-2 hover:text-teal-light">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>
          <span className="mt-6 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-teal-light">
            {a.category}
          </span>
          <h1 className="mt-4 font-display text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-[1.12] tracking-tight">
            {a.title}
          </h1>
          <p className="mt-5 text-sm text-white/70">
            Par Artgon MEDIA · publié le {fmt(a.published)} · mis à jour le {fmt(a.updated)} ·{" "}
            {a.readTime} de lecture
          </p>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="container-x max-w-3xl">
          <p className="rounded-2xl border-l-4 border-teal-brand bg-teal-pale p-5 text-base font-medium leading-relaxed text-ink sm:p-7 sm:text-lg">
            {a.answer}
          </p>
          <Prose source={a.body} />
        </div>
      </article>

      <Faq items={a.faq} eyebrow="Questions fréquentes" title="En bref" className="bg-cloud" />

      <section className="py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink">À lire aussi</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/blog/${o.slug}`}
                  className="block h-full rounded-2xl border border-line bg-white p-6 transition-colors hover:border-violet-brand/30 hover:bg-violet-pale/60"
                >
                  <span className="text-xs font-semibold text-violet-brand">{o.category}</span>
                  <span className="mt-2 block font-display text-lg font-semibold leading-snug text-ink">
                    {o.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
