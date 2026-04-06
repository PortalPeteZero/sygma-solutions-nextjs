import Link from 'next/link';
import { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';

const faqs = [
  {
    q: "What is the difference between Module 1 and Module 2?",
    a: "Module 1: GPR theory and practical operation. One day. Delegates learn GPR principles, equipment setup, controls, and practical use on site. Suitable for PAS128 level B operatives or those developing initial GPR competency. Module 2: Advanced GPR data processing. Two days. Delegates learn advanced data collection methods, GPS integration, post processing software, and how to process raw GPR data into 3D utility maps. Requires Module 1 or equivalent prior knowledge.",
  },
  {
    q: "Can I take just Module 2 without Module 1?",
    a: "Module 2 assumes delegates already understand GPR fundamentals from Module 1 or equivalent training. We do not recommend taking Module 2 without prior GPR knowledge. If you have prior GPR experience and want to focus on post processing, contact Sygma to discuss your requirements.",
  },
  {
    q: "Is the GPR equipment supplied?",
    a: "Sygma carries a stock of GPR equipment available for the course. We recommend you bring your own equipment wherever possible, so you become fully confident with the system you use on site. Equipment hire rates are available on request.",
  },
  {
    q: "Can the course be delivered at our premises?",
    a: "Yes. GPR Module 1 and Module 2 are regularly delivered in-house at company premises nationwide. Module 1 requires a meeting space and outdoor practical area with buried services (or marked areas to simulate). Module 2 is primarily classroom-based with computer workstations. Contact Sygma to arrange.",
  },
  {
    q: "What software is used for GPR post processing?",
    a: "Sygma uses Object Mapper for data post processing. Object Mapper is industry-standard software widely used for processing GPR data from different equipment manufacturers. Training focuses on workflow, filters, hyperbola fitting, and export to CAD formats.",
  },
  {
    q: "Can I take both modules back-to-back?",
    a: "Yes. Module 1 and Module 2 are frequently taken as a consecutive three-day course (1 day + 2 days). This is ideal for delegates who want to progress from GPR operation through to advanced data processing in one intensive training block.",
  },
];

export const metadata: Metadata = {
  title: 'GPR Training for Utility Surveyors | Sygma Solutions',
  description: 'Ground penetrating radar training. Module 1: GPR theory and practical use. Module 2: advanced data processing and post processing. Available separately or combined.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/gpr-training' },
  openGraph: {
    title: 'GPR Training for Utility Surveyors | Sygma Solutions',
    description: 'Ground penetrating radar training. Module 1 and Module 2 available separately or combined.',
    url: 'https://sygma-solutions.com/courses/gpr-training',
    type: 'website',
  },
};

export default function GprTraining() {
  return (
    <>
      <InnerPageHero
        eyebrow="Utility Mapping"
        headline="GPR Training for Utility Surveyors: Two Modules, Delivered Separately or Combined"
        sub="Module 1: GPR theory and practical operation on site (1 day). Module 2: Advanced data processing and post processing for 3D utility mapping (2 days). Take either module standalone or combine them as a three-day intensive GPR course. Delivered by Sygma's team of experienced GPR practitioners."
        images={[
          "/images/courses/MALA-GPR-11.webp",
          "/images/courses/MALA-GPR-17.webp",
          "/images/courses/MALA-GPR-29.webp",
        ]}
        alts={[
          "GPR training practical session - ground penetrating radar equipment",
          "Utility survey training with GPR technology",
          "GPR practical demonstration in the training course",
        ]}
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "GPR Training" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: courseSchema({
            name: "GPR Training for Utility Surveyors",
            description: "Ground penetrating radar training. Module 1: GPR theory and practical use (1 day). Module 2: Advanced data processing and post processing (2 days).",
            url: "/courses/gpr-training",
            credential: "GPR Training Certificate",
            duration: "1-2 days",
            mode: ["onsite"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: faqPageSchema(faqs),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbSchema([
            { label: "Training", to: "/training/utility-mapping-surveying" },
            { label: "GPR Training" },
          ]),
        }}
      />

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">About This Course</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Ground Penetrating Radar Training in Two Modules</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">{"GPR (ground penetrating radar) is a powerful tool for detecting buried services and mapping subsurface utility networks. Sygma's GPR training is split into two modules: practical operation (Module 1) and advanced data processing (Module 2). Take either standalone or combine them."}</p>
      </section>
    </>
  );
}
