import { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import KnowledgeHubSidebar from '@/components/KnowledgeHubSidebar';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Understanding PAS128 | Utility Survey Guide | Sygma',
  description: 'What PAS 128 covers, what the different survey types require, and why operatives working on PAS 128 projects need specific training.',
  alternates: { canonical: 'https://sygma-solutions.co.uk/knowledge-hub/understanding-pas-128' },
  openGraph: {
    title: 'Understanding PAS 128: A Guide for Contractors and Clients',
    description: 'What PAS 128 covers, what the different survey types require, and why operatives working on PAS 128 projects need specific training.',
    url: 'https://sygma-solutions.co.uk/knowledge-hub/understanding-pas-128',
    type: 'article',
    images: [
      {
        url: 'Utility-Mapping-03',
        width: 1200,
        height: 630,
        alt: 'Understanding PAS 128 utility survey',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UnderstandingPas128() {
  const breadcrumbs = [
    { label: 'Knowledge Hub', to: '/knowledge-hub' },
    { label: 'Understanding PAS 128' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchema({
            headline: 'Understanding PAS 128: A Guide for Contractors and Clients',
            description: 'What PAS 128 covers, what the different survey types require, and why operatives working on PAS 128 projects need specific training.',
            url: '/knowledge-hub/understanding-pas-128',
            datePublished: '2026-03-09',
            image: 'Utility-Mapping-03',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbSchema(breadcrumbs),
        }}
      />

      <InnerPageHero
        image="Utility-Mapping-03"
        alt="Understanding PAS 128 utility survey standard and detection methodology"
        eyebrow="Knowledge Hub"
        headline="Understanding PAS 128: A Guide for Contractors and Clients"
        sub="What PAS 128 covers, what the different survey types require, and why operatives working on PAS 128 projects need specific training."
        breadcrumbs={breadcrumbs}
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
              PAS 128 is the specification for underground utility detection, verification, and location. Published by the British Standards Institution (BSI), it provides a framework for how underground utility surveys should be planned, carried out, and reported. If you commission, deliver, or work on projects that involve underground utility surveys, PAS 128 is the standard your work should align with.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What PAS 128 Actually Is</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              PAS 128 is not a qualification and it is not a training course. It is a publicly available specification that defines four types of underground utility survey, each with a different scope, methodology, and level of confidence in the results. It was first published in 2014 and has been updated since to reflect changes in technology and practice. The specification is used across the UK by utility companies, local authorities, highway agencies, and principal contractors to define what standard of survey is required for a given project.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="MALA-GPR-06" alt="Ground penetrating radar survey equipment" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="Utility-Mapping-04" alt="Utility mapping and PAS128 survey demonstration" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="MALA-GPR-14" alt="GPR data collection for PAS128 survey" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">The Four Survey Types</h2>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-8">Type D: Desktop Utility Records Search</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Type D is a desk-based exercise. It involves gathering existing utility records from asset owners, local authorities, and other sources, then compiling them into a single composite plan. No site work is carried out. Type D is typically the starting point for any project and provides the baseline information that informs subsequent survey types. The limitation of Type D is that the records it relies on are only as accurate as the data held by the asset owners. Positional accuracy can be poor, and not all services may be recorded.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-8">Type C: Site Reconnaissance</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Type C adds a visual inspection of the site to the desktop records. The surveyor walks the area, identifies visible surface features such as manhole covers, valve boxes, meter cabinets, and overhead lines, and correlates them with the records gathered in Type D. This improves the accuracy of the composite plan by confirming which services are present and identifying any that were not shown on the records. No electronic detection equipment is used at this stage.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-8">Type B: Detection</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Type B is where electronic detection equipment is used to locate buried services. This includes electromagnetic locators (CAT and Genny), ground penetrating radar (GPR), and other geophysical techniques. The survey is non-intrusive, meaning no excavation is carried out. The results are plotted to provide positional information about the horizontal location of detected services. Depth estimates may be provided but are subject to limitations depending on the equipment and conditions. Type B surveys produce the most detailed non-intrusive picture of what is below the surface, but they cannot determine the exact nature, condition, or precise depth of every service detected.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-8">Type A: Verification</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Type A involves physical exposure of services through trial holes or vacuum excavation. This is the only way to confirm the exact position, depth, size, material, and condition of a buried service. Type A surveys are used at critical locations where absolute certainty is required, such as at the point of a proposed pile, borehole, or structural foundation. They are the most expensive and time-consuming survey type but provide the highest level of confidence.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Why This Matters for Training</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              If your operatives carry out Type B detection surveys, they need training that covers the full range of detection techniques specified in PAS 128. This goes beyond basic CAT and Genny operation. It includes an understanding of when to use GPR, how to interpret geophysical data, and how to report results to the standard required by the specification. A standard EUS CAT1 or ProQual CAT1 course covers cable avoidance, not utility mapping. Operatives working on PAS 128 projects need specialist training in addition to their base cable avoidance qualification.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              For those commissioning surveys, understanding the four types helps you specify the right level of survey for your project. Over-specifying is expensive. Under-specifying creates risk. A Type D desktop search might be sufficient for a simple footway excavation, while a highway improvement scheme might require Type B detection across the full site with Type A verification at critical points.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="MALA-GPR-01" alt="PAS128 survey practical assessment" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="Utility-Mapping-01" alt="Utility mapping team during field exercise" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="MALA-GPR-26" alt="GPR equipment used in PAS128 compliant survey" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">How Sygma Supports PAS 128 Practice</h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Sygma delivers training at every level of the PAS 128 framework. For operatives who need to understand what PAS 128 means for their daily work, our PAS 128 Awareness course covers the specification, survey types, and quality requirements. For surveyors who carry out Type B detection surveys, our 5-Day PAS 128 Surveyor course covers electromagnetic location, GPR operation, data processing, and reporting. For organisations that need fully qualified utility surveyors, our Level 3, 4, and 5 qualifications provide the formal educational pathway recognised by the industry.
            </p>

            <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/knowledge-hub/hsg47-explained" className="text-primary hover:underline">HSG47 Explained: What the Guidance Requires</Link></li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
              <h3 className="font-bold text-foreground mb-2">Related Courses</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses/pas128-awareness" className="text-primary hover:underline">PAS 128 Awareness</Link></li>
                <li><Link href="/courses/5-day-pas128-surveyor" className="text-primary hover:underline">5-Day PAS 128 Surveyor Course</Link></li>
                <li><Link href="/courses/gpr-training" className="text-primary hover:underline">GPR Training</Link></li>
                <li><Link href="/training/utility-mapping-surveying" className="text-primary hover:underline">Utility Mapping Course Hub</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
