import Link from 'next/link';
import { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';

const faqs = [{q: "What does Level 6 cover that is different from Level 5?",a: "Level 6 is a management-level qualification. While Level 5 focuses on doing the work (senior practitioner), Level 6 focuses on planning and managing utility mapping programmes at a strategic level. The qualification covers project management, resource planning, risk management, team development, and professional responsibility in utility surveying operations."},{q: "Who should do Level 6?",a: "Level 6 is suitable for senior managers, programme leads, and those responsible for managing utility surveying contracts or teams at a strategic level. You need Level 5 or equivalent senior-level experience to enrol."}];

export const metadata: Metadata = {
  title: 'ProQual Level 6 Diploma in Utility Mapping Management | Sygma Solutions',
  description: 'ProQual RQF Level 6 Diploma in Utility Mapping and Surveying Management. Management-level qualification for senior leaders.',
  alternates: { canonical: 'https://sygma-solutions.vercel.app/courses/level-6-diploma' },
  openGraph: {
    title: 'ProQual Level 6 Diploma in Utility Mapping Management | Sygma Solutions',
    description: 'ProQual RQF Level 6 Diploma. Management-level utility mapping qualification.',
    url: 'https://sygma-solutions.vercel.app/courses/level-6-diploma',
    type: 'website'
  }
};

export default function Level6Diploma() {
  return (
    <>
      <InnerPageHero
        eyebrow="Qualifications"
        headline="ProQual RQF Level 6 Diploma in Utility Mapping and Surveying Management"
        sub="Formal recognition of management-level competency in utility mapping operations. For senior managers and programme leads responsible for planning, resourcing, and managing utility surveying at a strategic level. Portfolio-based assessment with full assessor support throughout."
        images={[
          "MALA-GPR-06",
          "MALA-GPR-11",
          "Advanced-EM-04",
        ]}
        alts={[
          "Management-level utility mapping training",
          "Professional survey team leadership training",
          "Strategic utility mapping operations management training",
        ]}
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "Level 6 Diploma" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: courseSchema({
            name: "ProQual Level 6 Diploma in Utility Mapping and Surveying Management",
            description: "Ofqual-regulated Level 6 Diploma for management-level competency in utility surveying operations.",
            url: "/courses/level-6-diploma",
            credential: "Level 6 Diploma in Utility Surveying Management",
            duration: "Part-time",
            mode: ["online"]
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
            { label: "Level 6 Diploma" }
          ])
        }}
      />

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Management-Level Qualification</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">ProQual Level 6 Diploma in Utility Mapping and Surveying Management</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">The Level 6 Diploma recognises management-level competency in utility surveying operations. Portfolio-based, with full assessor support throughout your journey to qualification.</p>
      </section>
    </>
  );
}