import Link from 'next/link';
import { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';

const faqs = [{q: "What is the difference between the in-person fast-track route and the online route?",a: "Both routes lead to the same ProQual Level 5 Diploma. The in-person fast-track is intensive classroom training over 5 days with written exam and practical assessments. The online route is self-paced portfolio building with MS Teams assessor support throughout. Choose based on your learning preference and schedule."},{q: "How long does the in-person route take?",a: "The fast-track intensive programme is 5 consecutive days of classroom-based training, followed by assessment. Most candidates complete the full programme (training, exam, assessments) within one calendar month."},{q: "What prior qualifications do I need?",a: "For the in-person route: preferably Level 3 or Level 4 as a foundation, though not mandatory. For the online route: Level 4 Diploma or equivalent experience in utility mapping at a senior level. Contact Sygma to discuss your background if you're unsure."}];

export const metadata: Metadata = {
  title: 'ProQual Level 5 Diploma in Utility Mapping | Sygma Solutions',
  description: 'ProQual RQF Level 5 Diploma in Utility Mapping and Surveying. Senior-level professional qualification. In-person or online delivery available.',
  alternates: { canonical: 'https://sygma-solutions.vercel.app/courses/level-5-diploma' },
  openGraph: {
    title: 'ProQual Level 5 Diploma in Utility Mapping | Sygma Solutions',
    description: 'ProQual RQF Level 5 Diploma in Utility Mapping and Surveying. Senior-level qualification.',
    url: 'https://sygma-solutions.vercel.app/courses/level-5-diploma',
    type: 'website'
  }
};

export default function Level5Diploma() {
  return (
    <>
      <InnerPageHero
        eyebrow="Qualifications"
        headline="ProQual RQF Level 5 Diploma in Utility Mapping and Surveying"
        sub="Formal recognition of senior-level competency in utility mapping and surveying. Two routes available: an intensive 5-day in-person fast-track programme with written exam and practical assessments, or a flexible online route with full assessor support via MS Teams. No hidden fees. Contact us to discuss which route suits you best."
        images={[
          "/images/courses/MALA-GPR-06.webp",
          "/images/courses/MALA-GPR-11.webp",
          "/images/courses/Advanced-EM-04.webp",
        ]}
        alts={[
          "Advanced utility mapping training for Level 5 qualification",
          "Professional GPR survey techniques covered in the Level 5 course",
          "Advanced EM locating methods taught in the Level 5 diploma programme",
        ]}
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "Level 5 Diploma" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: courseSchema({
            name: "ProQual Level 5 Diploma in Utility Mapping and Surveying",
            description: "Ofqual-regulated Level 5 Diploma in Utility Mapping and Surveying. Senior-level professional qualification.",
            url: "/courses/level-5-diploma",
            credential: "Level 5 Diploma in Utility Surveying",
            duration: "5 days",
            mode: ["onsite"]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: faqPageSchema(faqs)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbSchema([
            { label: "Training", to: "/training/utility-mapping-surveying" },
            { label: "Level 5 Diploma" }
          ])
        }}
      />

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Senior-Level Qualification</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">ProQual Level 5 Diploma in Utility Mapping and Surveying</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">The Level 5 Diploma recognises senior-level competency in utility mapping and surveying. Two delivery routes: fast-track in-person (5 days) or flexible online with assessor support.</p>
      </section>
    </>
  );
}