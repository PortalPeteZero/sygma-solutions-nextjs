import type { Metadata } from 'next';
import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { knowledgeHubItems } from "@/data/knowledgeHubItems";
import KnowledgeHubClient from './KnowledgeHubClient';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Utility Training Guides & Articles | Sygma Solutions',
  description: 'Technical resources and guides on underground utility location, avoidance, and mapping. Written by specialist trainers for utility professionals.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub' },
  openGraph: {
    title: 'Utility Training Guides & Articles | Sygma Solutions',
    description: 'Technical resources and guides on underground utility location, avoidance, and mapping. Written by specialist trainers for utility professionals.',
    url: 'https://sygma-solutions.com/knowledge-hub',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
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
        image="cat-86"
        alt="Sygma Solutions knowledge hub covering cable avoidance and utility mapping guidance"
        eyebrow="Knowledge Hub"
        headline="Practical Knowledge for Underground Utility Professionals"
        sub="Guides, explainers, and technical resources on utility location, avoidance, and mapping. Written by Sygma's specialist trainers."
        breadcrumbs={[{ label: "Knowledge Hub" }]}
      />

      <section className="py-10 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sygma publishes technical guides, industry explainers, case studies, and training insights for teams working around buried utilities. Every article is written or reviewed by our specialist trainers and draws on two decades of field delivery across the UK.
          </p>
        </div>
      </section>

      <KnowledgeHubClient items={knowledgeHubItems} />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="cat-87" width={1200} height={900} alt="Underground utility training knowledge resources" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="dig-19" width={1200} height={900} alt="Safe digging practices training materials" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="gpr-09" width={1200} height={900} alt="Utility location knowledge and technical expertise" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-88" width={1200} height={900} alt="Cable avoidance training knowledge resources" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-10" width={1200} height={900} alt="Utility mapping and GPR survey expertise" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="dig-11" width={1200} height={900} alt="Safe excavation practice and guidance" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
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
