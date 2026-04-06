import Link from 'next/link';
import { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';

const faqs = [{q: "How is the online Level 3 delivered?",a: "Live sessions via Microsoft Teams plus self-paced learning modules. You progress through the qualification content with structured assessor support throughout."},{q: "How long does it take?",a: "Most delegates complete within 6-12 months. Your progress depends on how quickly you can gather evidence from your work and complete assessor-led review sessions."},{q: "Can I take this if I am working full-time?",a: "Yes. The online Level 3 is designed for working professionals. You progress at your own pace with MS Teams sessions scheduled to fit around your work commitments."},{q: "What do I need to provide as evidence?",a: "Portfolio evidence from your professional practice in utility mapping or surveying roles. Your existing work and experience generate much of what is needed for the qualification."}];

export const metadata: Metadata = {
  title: 'Online Level 3 Diploma in Utility Mapping | Sygma Solutions',
  description: 'Online Level 3 Diploma in Utility Mapping and Surveying. Flexible online delivery with live tutor support via MS Teams. Entry-level qualification.',
  canonical: 'https://sygma-solutions.vercel.app/courses/online-level-3-diploma',
  openGraph: {
    title: 'Online Level 3 Diploma in Utility Mapping | Sygma Solutions',
    description: 'Online Level 3 Diploma in Utility Mapping and Surveying. Flexible online delivery.',
    url: 'https://sygma-solutions.vercel.app/courses/online-level-3-diploma',
    type: 'website'
  }
};

export default function OnlineLevel3Diploma() {
  return (
    <>
      <InnerPageHero
        eyebrow="Qualifications"
        headline="Online Level 3 Diploma in Utility Mapping and Surveying"
        sub="Entry-level RQF qualification delivered entirely online via Microsoft Teams. For operatives who want formal recognition of their utility mapping competency. Self-paced learning with live tutor support sessions throughout. No classroom attendance required."
        images={[
          "/images/courses/MALA-GPR-06.webp",
          "/images/courses/MALA-GPR-11.webp",
          "/images/courses/Advanced-EM-04.webp",
        ]}
        alts={[
          "Online Level 3 utility mapping training",
          "MS Teams-based online qualification",
          "Online learning support for Level 3 qualification",
        ]}
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "Online Level 3 Diploma" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: courseSchema({
            name: "Online Level 3 Diploma in Utility Mapping and Surveying",
            description: "Online Level 3 Diploma delivered via Microsoft Teams. Entry-level Ofqual-regulated qualification.",
            url: "/courses/online-level-3-diploma",
            credential: "Level 3 Diploma in Utility Surveying",
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
            { label: "Online Level 3 Diploma" }
          ])
        }}
      />

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Entry-Level Online Qualification</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Online Level 3 Diploma in Utility Mapping and Surveying</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">The Online Level 3 Diploma is entry-level RQF qualification delivered fully online. Perfect for operatives who prefer flexible, self-paced learning with live tutor support via Microsoft Teams.</p>
      </section>
    </>
  );
}