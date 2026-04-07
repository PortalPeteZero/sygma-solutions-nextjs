import type { Metadata } from 'next';
import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { knowledgeHubItems } from "@/data/knowledgeHubItems";
import KnowledgeHubClient from './KnowledgeHubClient';

export const metadata: Metadata = {
  title: 'Utility Training Guides & Articles | Sygma Solutions',
  description: 'Technical resources and guides on underground utility location, avoidance, and mapping. Written by specialist trainers for utility professionals.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Utility Training Guides & Articles | Sygma Solutions',
    description: 'Technical resources and guides on underground utility location, avoidance, and mapping. Written by specialist trainers for utility professionals.',
    url: 'https://sygma-solutions.com/knowledge-hub',
    siteName: 'Sygma Solutions',
    type: 'website',
  },
};

export default function KnowledgeHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Knowledge Hub",
        "description": "Technical resources and guides on underground utility location, avoidance, and mapping. Written by specialist trainers for utility professionals.",
        "url": "https://sygma-solutions.com/knowledge-hub",
        "publisher": {
          "@type": "Organization",
          "@id": "https://sygma-solutions.com/#organization",
          "name": "Sygma Solutions"
        }
      }) }} />
      <InnerPageHero
        image="/images/courses/CAT4-and-Genny-61.webp"
        alt="Sygma Solutions knowledge hub covering cable avoidance and utility mapping guidance"
        eyebrow="Knowledge Hub"
        headline="Practical Knowledge for Underground Utility Professionals"
        sub="Guides, explainers, and technical resources on utility location, avoidance, and mapping. Written by Sygma's specialist trainers."
        breadcrumbs={[{ label: "Knowledge Hub" }]}
      />

      <KnowledgeHubClient items={knowledgeHubItems} />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-4">
            <img
              loading="lazy"
              src="/images/about/CAT4-and-Genny-46.webp"
              alt="Underground utility training knowledge resources"
              className="rounded-lg object-cover aspect-[4/3] w-full"
            />
            <img
              loading="lazy"
              src="/images/about/Safe-Dig-01.webp"
              alt="Safe digging practices training materials"
              className="rounded-lg object-cover aspect-[4/3] w-full"
            />
            <img
              loading="lazy"
              src="/images/about/MALA-GPR-05.webp"
              alt="Utility location knowledge and technical expertise"
              className="rounded-lg object-cover aspect-[4/3] w-full"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <img
            loading="lazy"
            src="/images/courses/CAT4-and-Genny-10.webp"
            alt="Cable avoidance training knowledge resources"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            loading="lazy"
            src="/images/courses/MALA-GPR-11.webp"
            alt="Utility mapping and GPR survey expertise"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            loading="lazy"
            src="/images/courses/Safe-Dig-10.webp"
            alt="Safe excavation practice and guidance"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <section className="py-14 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-6 md:px-8 text-center max-w-xl">
          <h2 className="text-2xl font-black mb-4 text-foreground">
            Have a Technical Question?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our trainers are available to answer questions from customers,
            clients, and industry contacts. Call us or get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
