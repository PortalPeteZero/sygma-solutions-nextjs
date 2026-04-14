import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'EUSR CAT1 vs ProQual CAT1 | Comparison Guide | Sygma',
  description: 'EUSR CAT1 and ProQual CAT1 are not equivalent qualifications. This guide explains the key differences and helps you choose the right cable avoidance course.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/eus-cat1-vs-proqual-cat1' },
  openGraph: {
    title: 'EUSR CAT1 vs ProQual CAT1 | Comparison Guide | Sygma',
    description: 'EUSR CAT1 and ProQual CAT1 are not equivalent qualifications. This guide explains the key differences and helps you choose the right cable avoidance course.',
    url: 'https://sygma-solutions.com/knowledge-hub/eus-cat1-vs-proqual-cat1',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function EusCat1VsProQualCat1() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema({
        headline: "EUSR CAT1 vs ProQual CAT1: Which One Does Your Operative Need?",
        description: "EUSR CAT1 and ProQual CAT1 are not equivalent qualifications. This guide explains the key differences and helps you choose the right cable avoidance course.",
        url: "/knowledge-hub/eus-cat1-vs-proqual-cat1",
        datePublished: "2026-03-09",
        image: "cat-54",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "EUSR CAT1 vs ProQual CAT1" },
      ]) }} />
      <InnerPageHero
        image="cat-88"
        alt="Comparison of EUSR CAT1 and ProQual CAT1 cable avoidance qualifications"
        eyebrow="Knowledge Hub"
        headline="EUSR CAT1 vs ProQual CAT1: Which One Does Your Operative Need?"
        sub="These are not equivalent qualifications. This guide explains the key differences and helps you choose the right cable avoidance course for your team."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "EUSR CAT1 vs ProQual CAT1" },
        ]}
      />

      <div className="lg:hidden bg-background pt-6 pb-2">
        <div className="container mx-auto px-6 md:px-8">
          <Link href="/knowledge-hub?filter=articles" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors">
            ← Back to Articles
          </Link>
        </div>
      </div>

      <div className="bg-background py-16">
        <div className="container mx-auto px-6 md:px-8 flex gap-12 items-start">
          <aside className="hidden lg:block w-60 shrink-0 sticky top-24">
            <KnowledgeHubSidebar />
          </aside>
          <article className="min-w-0 flex-1 max-w-3xl">

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Both EUSR CAT1 and ProQual CAT1 are cable avoidance qualifications. Both cover the use of a CAT and Genny to locate buried services before excavation. Both are valid for three years. But beyond those similarities, they differ significantly in scope, assessment rigour, and what your operative actually learns. Understanding these differences matters because the course your team takes directly affects how well they survey before they dig.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">The Basics</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            EUSR CAT1, administered through Energy and Utility Skills (formerly EUSR), is the most widely held cable avoidance qualification in the UK. It has been the industry standard for over a decade and is recognised by the majority of utility companies and principal contractors. It covers the four locating modes (Power, Radio, Genny, and Avoidance), plans interpretation, and safe digging principles.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            ProQual CAT1, accredited by ProQual Awarding Body, is a newer qualification that was developed to address gaps in the existing provision. It covers the same core content as EUSR CAT1 but adds significantly more depth in several areas, particularly around Genny application methods and signal interpretation. ProQual CAT1 is externally verified, meaning the assessment criteria are set by the awarding body, not by the individual training provider.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Assessment Criteria: Where the Difference Is Clearest</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The EUSR CAT1 assessment uses a mix of multiple-choice questions and practical observation. The practical element requires the operative to demonstrate competence with the CAT and Genny across the four modes. The assessment is thorough but is delivered and marked by the training provider, which means standards can vary between providers.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The ProQual CAT1 assessment is structured differently. It includes 14 theory criteria and 8 practical criteria, all defined by ProQual. The theory assessment is not multiple-choice. Operatives must demonstrate understanding through written or verbal responses that show knowledge, not just recognition. The practical assessment requires competence across all four locating modes and all Genny signal application methods: Direct Connection, Clamp, Capacitance, Induction, and Nulling Out.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            This is a meaningful difference. An operative can pass EUSR CAT1 without demonstrating competence in every Genny application method. They cannot pass ProQual CAT1 without doing so.
          </p>

          <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-75" width={1200} height={900} alt="Operative using CAT4 during assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-04" width={1200} height={900} alt="Genny signal application practical exercise" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-72" width={1200} height={900} alt="Cable avoidance training practical demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Recognition and Acceptance</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            EUSR CAT1 is the more widely recognised of the two, particularly among utility companies who have used the EUSR system for years. If your operatives work primarily on utility company sites, EUSR CAT1 may be the requirement specified in the permit or contract.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            ProQual CAT1 is accepted by an increasing number of principal contractors and utility companies. It is recognised by CITB for Employer Network funding and is held on the ProQual register, which means employers and clients can verify an operative's qualification independently. However, it is still newer and not yet universally specified. If your client requires a specific qualification, check with them before booking.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Which One Should You Choose?</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            If your operatives need a qualification that will be accepted everywhere with no questions asked, EUSR CAT1 is the safer choice. It is the established standard and the one most clients will recognise immediately.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            If you want the most thorough training and assessment available, ProQual CAT1 is the stronger qualification. It assesses more criteria, requires competence across all Genny application methods, and is externally verified to a fixed standard. For organisations that are serious about reducing utility strikes and want their operatives trained to the highest level, ProQual CAT1 is the better option.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Sygma delivers both. The quality of the training is the same regardless of which qualification route you choose. Our courses run from 8:30am to 4:00pm with a maximum of 8 delegates, all using Radiodetection CAT4 and Genny4 equipment. The course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. The difference is in the assessment criteria and the awarding body, not in what your operatives learn on the day.
          </p>

          <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-86" width={1200} height={900} alt="Team training on CAT and Genny equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-73" width={1200} height={900} alt="Advanced electromagnetic location equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-74" width={1200} height={900} alt="Delegates completing cable avoidance qualification" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
            <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/knowledge-hub/eusr-card-renewal" className="text-primary hover:underline">How to Renew Your EUSR Card</Link></li>
              <li><Link href="/knowledge-hub/npors-vs-eusr" className="text-primary hover:underline">NPORS vs EUSR: Which Qualification Do You Need?</Link></li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
            <h3 className="font-bold text-foreground mb-2">Compare Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/eus-cat1" className="text-primary hover:underline">EUSR CAT1 Cable Avoidance Training</Link></li>
              <li><Link href="/courses/proqualcat1-training" className="text-primary hover:underline">ProQual CAT1 Training</Link></li>
              <li><Link href="/courses/cable-avoidance-course-comparison" className="text-primary hover:underline">Full Course Comparison Guide</Link></li>
              <li><Link href="/contact" className="text-primary hover:underline">Not sure? Talk to our team</Link></li>
            </ul>
          </div>

          </article>
        </div>
      </div>
    </>
  );
}
