import Link from 'next/link';
import { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';

const faqs = [
  {
    q: 'Do I need to complete all seven modules?',
    a: 'No. Individual modules can be taken as standalone courses. Many delegates focus on Modules 1 to 4 for PAS128 competency, or on Modules 3 and 4 together as a three-day GPR course. The full seven-module programme is the route to complete ICES competency coverage and to the ProQual Level 4 and Level 5 qualifications.',
  },
  {
    q: 'What is the prerequisite for Module 4?',
    a: 'Module 3 (or equivalent GPR knowledge) is a prerequisite for Module 4. Delegates attending Module 4 should already understand GPR fundamentals, either from Module 3 or from equivalent prior training. Modules 3 and 4 are frequently taken back to back as a three-day course.',
  },
  {
    q: 'How does this programme relate to ProQual Level 4 and Level 5?',
    a: 'The programme provides structured training evidence that forms the foundation of ProQual Level 4 and Level 5 submissions. The seven modules map directly to the ICES competency domains required for those qualifications. Speak to the bookings team about how to plan your training and qualification pathway together.',
  },
  {
    q: 'Can modules be taken in any order?',
    a: 'Generally yes, with the exception of Module 4 which requires Module 3 as a prerequisite. For delegates working towards ProQual Level 4 or Level 5, completing modules in order provides the most logical progression and makes portfolio building easier.',
  },
  {
    q: 'Is this programme available in-house?',
    a: 'Yes. All modules are available as private in-house courses. This is the preferred option for teams, as it allows scheduling to fit around operational demands. Contact the bookings team to plan a delivery schedule.',
  },
  {
    q: 'How is this different from the 5 Day PAS128 Surveyor Course?',
    a: 'The 5 Day PAS128 Surveyor Course covers the content of Modules 1 to 3 in an intensive week, with a written exam and practical assessment included. The TSA and ICES programme is broader and longer, adding advanced GPR post processing, surveying instruments, geometric principles and ICT (Modules 4 to 7). For those entering utility mapping, the 5 Day course is often the natural first step before progressing into the wider programme.',
  },
  {
    q: 'What does the written exam cover?',
    a: 'The written exam includes graphical and written questions covering basic electrical theory, electromagnetic theory, surveying methodology, stats plans interpretation, and knowledge of how an EM locator works including signal direction and current direction. Delegates must achieve the overall pass mark under formal exam conditions. The exam score and overall exam score contribute to your portfolio evidence alongside the practical operational test results.',
  },
  {
    q: 'What safety training is included?',
    a: 'Safety is woven throughout the utility surveyor training programme. Modules cover risk assessment procedures, use of appropriate PPE, working safely on live sites including power station compounds and quiet roads, understanding ground conditions that affect locating accuracy, and recognising distorted magnetic fields near electrical circuits. Delegates learn to locate buried services and buried utilities safely in different situations, reducing the risk of utility strikes on infrastructure projects.',
  },
  {
    q: 'What practical field work is involved?',
    a: 'The practical elements include a test where a two man team to survey a small site area must locate buried services on the same survey site using own equipment. Delegates practise locating without a locator using stats plans and visual clues, as well as with an EM locator in passive modes and at different frequencies. They record actual findings on a blank base plan, mark assumed routes, and provide a rough sketch of the utility survey. The practical approach covers a typical utility survey from start to finish across different situations and ground conditions.',
  },
];

export const metadata: Metadata = {
  title: 'TSA and ICES Utility Mapping Programme | Sygma Solutions',
  description: 'The most comprehensive utility mapping programme in the UK. Seven modules, 17 plus days, covering every ICES competency from PAS 128 to GPR and CAD.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/tsa-ices-utility-mapping' },
  openGraph: {
    title: 'TSA and ICES Utility Mapping Programme | Sygma Solutions',
    description: 'The most comprehensive utility mapping programme in the UK. Seven modules, 17 plus days, covering every ICES competency from PAS 128 to GPR and CAD.',
    url: 'https://sygma-solutions.com/courses/tsa-ices-utility-mapping',
    type: 'website',
  },
};

export default function TsaIcesUtilityMapping() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'TSA and ICES Utility Mapping Programme',
            description: 'The most comprehensive utility mapping training programme in the UK. Seven modules, 17 plus days, covering every ICES competency from PAS128 to advanced GPR and CAD.',
            url: 'https://sygma-solutions.com/courses/tsa-ices-utility-mapping',
            provider: {
              '@type': 'Organization',
              name: 'Sygma Solutions',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Training',
                item: 'https://sygma-solutions.com/training/utility-mapping-surveying',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'TSA and ICES Utility Mapping Programme',
              },
            ],
          }),
        }}
      />

      <InnerPageHero
        eyebrow="Utility Mapping"
        headline="TSA and ICES Utility Mapping Training Programme: Seven Modules to Full Professional Competency"
        sub="The UK's most comprehensive utility surveyor training programme. Seven modules. Seventeen-plus days. Every ICES competency from desktop survey and PAS128 reconnaissance through to advanced GPR post processing, total stations, GNSS, geometric principles and CAD. Approved by TSA and mapped to ICES competencies across GEUS01, GEUS02, GEUS03 and GEUS04. The pathway to ProQual Level 4 and Level 5 for professional utility surveyors."
        image="Utility-Mapping-01"
        alt="TSA ICES utility mapping training with professional survey equipment"
        breadcrumbs={[
          { label: 'Training', href: '/training/utility-mapping-surveying' },
          { label: 'TSA and ICES Utility Mapping Programme' },
        ]}
      />

      {/* Summary content with key sections */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ['7 Modules', '17+ training days across the full programme'],
            ['TSA Approved', 'Survey Association approved delivery'],
            ['ICES Mapped', 'Full ICES competency coverage for utility mapping'],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="eyebrow mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About the TSA and ICES Utility Mapping Programme</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Open course dates available for individual utility surveyor training modules throughout the year. Private in-house delivery of the full training course or selected modules can be arranged for teams. Contact Sygma Solutions to plan your training pathway.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About the Full Programme
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Book an Individual Module
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
