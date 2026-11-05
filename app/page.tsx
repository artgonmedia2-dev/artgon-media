import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Portfolio from "@/components/Portfolio";
import Solutions from "@/components/Solutions";
import PricingTeaser from "@/components/PricingTeaser";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { faq, faqLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(faq)) }}
      />
      <Hero />
      <Services />
      <Why />
      <Solutions />
      <Portfolio />
      <PricingTeaser />
      <Faq
        items={faq}
        eyebrow="FAQ"
        title={
          <>
            Questions fréquentes sur{" "}
            <em className="accent text-violet-brand">Artgon MEDIA</em>
          </>
        }
      />
      <Contact />
    </>
  );
}
