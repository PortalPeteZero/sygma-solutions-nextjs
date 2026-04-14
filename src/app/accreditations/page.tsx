import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';
import { organizationSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'CITB Approved, EUSR & ProQual Accredited | Sygma Solutions',
  description: 'Sygma is CITB approved, EUSR registered and ProQual accredited. Find out what each means for your qualification, funding eligibility, and training record.',
  alternates: { canonical: 'https://sygma-solutions.com/accreditations' },
  openGraph: {
    title: 'CITB Approved, EUSR & ProQual Accredited | Sygma Solutions',
    description: 'Sygma is CITB approved, EUSR registered and ProQual accredited.',
    url: 'https://sygma-solutions.com/accreditations',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function AccreditationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Accreditations' }]) }} />
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[480px] bg-foreground">
        <Image src="cat-34" fill className="absolute inset-0 h-full w-full object-cover" priority sizes="100vw" alt="Accreditations hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative z-10 container mx-auto px-6 md:px-8 pt-10 pb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Accreditations & Approvals</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white max-w-4xl">Accreditations, Approvals and Industry Affiliations</h1>
          <p className="text-white/75 max-w-xl">Sygma Solutions holds accreditations from CITB, EUSR, ProQual and the Survey Association, and maintains affiliations with ICES and CICES.</p>
        </div>
      </section>

      <section className="bg-muted/30 border-y border-border py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {[
              '21 Years in Business',
              '6 Active Accreditations',
              'CITB Approved Training Organisation',
            ].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm font-semibold">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">What Each Accreditation Covers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
            Each of the following is a distinct relationship with a different awarding body, assessor body or professional institution. They are not interchangeable and they cover different parts of what Sygma delivers.
          </p>

          <div className="space-y-6">
            {[
              {
                title: 'CITB Approved Training Organisation (ATO)',
                content: 'Sygma Solutions is a CITB Approved Training Organisation. This approval means our training meets CITB\'s quality standards and that CITB-registered employers may be able to access funding support towards eligible training costs through the CITB Employer Network model. Funding is accessed through the Employer Network, not directly from Sygma. If your business is CITB-registered, speak to your CITB Employer Network adviser to discuss which courses qualify and how to apply. Sygma can guide you through the process.',
              },
              {
                title: 'EUS / EUSR (Utility Skills Register)',
                content: 'Sygma is approved to deliver EUS Category 1 (CAT1) and Category 2 (CAT2) training. Operatives who complete these courses and pass assessment are registered on the Utility Skills Register (EUSR) and receive EUSR cards, which are the industry-standard proof of cable avoidance competency required by the majority of utility network operators and their supply chains. EUSR card registration carries an additional fee payable to EUS at the point of registration. This fee is set by EUS, not Sygma, and is not included in the training price. Your Sygma trainer will confirm the current registration fee at the time of booking.',
              },
              {
                title: 'ProQual Approved Centre',
                content: 'Sygma is a ProQual Approved Centre. This covers two distinct relationships with ProQual, which are not the same and should not be confused. ProQual Level 2 to Level 6 Qualifications: Sygma delivers ProQual\'s Ofqual-regulated qualifications in utility mapping and surveying. These qualifications sit on the Regulated Qualifications Framework (RQF) and are nationally recognised. ProQual Accreditations (CAT1, CAT1 Plus, CAT2): Separately, Sygma delivers ProQual-accredited cable avoidance courses. These are externally verified and accredited by ProQual Accreditations, but they are not Ofqual-regulated qualifications. They are industry accreditations that carry a higher standard of individual assessment than in-house or EUSR-route certificates.',
              },
              {
                title: 'TSA (The Survey Association)',
                content: 'Sygma\'s 5-Day PAS128 Surveyor Programme is recognised by The Survey Association (TSA). This approval relates specifically to that programme only and does not apply to Sygma\'s wider course portfolio. TSA is the professional body for survey companies and their approval of the 5-Day Programme confirms it meets the standards expected for surveyor development in the utilities and mapping sector.',
              },
              {
                title: 'ICES (Institution of Civil Engineering Surveyors)',
                content: 'The ProQual Level 3 Certificate and Level 4, 5 and 6 Diplomas in Utility Surveying and Mapping are mapped to ICES membership pathways. Learners who complete these qualifications may use them as part of their route to ICES membership at the relevant grade. This is a qualification mapping relationship, not a blanket organisational accreditation. Sygma is not accredited by ICES as an institution; specific qualifications we deliver are formally recognised within the ICES membership framework.',
              },
              {
                title: 'CICES (Chartered Institution of Civil Engineering Surveyors)',
                content: 'The Level 6 Diploma in Utility Surveying and Mapping is mapped to the CICES Incorporated Engineer pathway. As with the ICES relationship, this is a qualification-specific mapping, not a blanket organisational accreditation. Learners completing the Level 6 Diploma may use it as part of their route to CICES membership at the appropriate grade.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded-lg bg-card p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Trainer and Assessor Standards</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Accreditations describe the standards an organisation must meet. The following sets out how Sygma maintains those standards at trainer and assessor level.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-5 py-3 font-bold">Standard</th>
                  <th className="text-left px-5 py-3 font-bold">Detail</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    standard: 'Employment status',
                    detail: 'All Sygma trainers and assessors are direct employees of the company, not subcontractors or agency staff.',
                  },
                  {
                    standard: 'Teaching qualification',
                    detail: 'All trainers hold the Level 3 Award in Education and Training (AET) or an equivalent recognised teaching qualification.',
                  },
                  {
                    standard: 'Industry background',
                    detail: 'All trainers are former operatives or survey professionals with direct, on-site experience in the disciplines they teach.',
                  },
                  {
                    standard: 'Internal quality assurance',
                    detail: 'Sygma operates an internal IQA process for all assessed qualifications and accreditations. Assessments are reviewed, sampled and quality-assured before certificates are issued.',
                  },
                  {
                    standard: 'Maximum group size',
                    detail: 'Sygma operates a maximum of 8 delegates per trainer/assessor session for assessed courses. This is a deliberate limit, not a guideline.',
                  },
                ].map(({ standard, detail }, i) => (
                  <tr key={standard} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                    <td className="px-5 py-4 font-semibold align-top w-1/3">{standard}</td>
                    <td className="px-5 py-4 text-muted-foreground leading-relaxed">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Who We Work With</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Over 21 years, Sygma has delivered training for utility network operators, Tier 1 and Tier 2 contractors, specialist survey companies, local authorities and water industry supply chain businesses across the UK.
            </p>
            <p>
              Named client references and case studies are available on request for organisations at procurement or tender stage. <Link href="/knowledge-hub" className="text-primary font-semibold hover:underline">View our case studies</Link> to see how we have delivered training programmes for organisations in the sector.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Common Questions</p>
          <h2 className="text-3xl font-bold mb-8">Questions About Our Accreditations</h2>
          <div className="space-y-4">
            {[
              { q: 'Is Sygma a CITB Approved Training Organisation?', a: 'Yes. Sygma Solutions is a CITB Approved Training Organisation. CITB-registered businesses may be able to access funding support towards eligible training costs through the CITB Employer Network. Funding is not automatic and is not applied directly by Sygma. Contact your CITB Employer Network adviser to confirm which courses qualify and how to apply. We can assist you with the process.' },
              { q: 'Are your EUS CAT1 courses accredited and do delegates receive EUSR cards?', a: 'Yes. Sygma is approved to deliver EUS Category 1 and Category 2 courses. Operatives who pass assessment are registered on the Utility Skills Register and receive EUSR cards. The EUSR card is the industry-standard proof of cable avoidance competency required by the majority of utility network operators. Registration carries an additional fee paid directly to EUS, which will be confirmed at the time of booking.' },
              { q: 'Are ProQual CAT1 and CAT1 Plus nationally recognised qualifications?', a: 'ProQual CAT1 and CAT1 Plus are externally verified and accredited by ProQual Accreditations. They are not Ofqual-regulated qualifications and are not on the Regulated Qualifications Framework. They are industry accreditations that carry a high standard of individual assessment: each delegate is individually mapped to learning outcomes and the assessment is externally verified. This is a different and more rigorous standard than in-house or EUSR-route certificates, but they are not the same as Ofqual-regulated qualifications. For Ofqual-regulated qualifications, see our ProQual Level 2 to Level 6 utility mapping diploma range.' },
              { q: 'Can you provide accreditation documentation for tender or procurement purposes?', a: 'Yes. If you are completing a tender, pre-qualification questionnaire or supplier audit, Sygma can provide documentation covering our CITB ATO status, EUS/EUSR approval, ProQual centre approval and any other relevant accreditation. Contact us with your specific requirements and we will provide the appropriate documentation.' },
            ].map(({ q, a }) => (
              <div key={q} className="border border-border rounded-lg bg-card p-6">
                <h3 className="font-bold text-foreground mb-3">{q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Our Accreditations?</h2>
          <p className="text-primary-foreground/75 mb-8">
            If you need accreditation documentation for a tender, or want to discuss which qualifications and certificates are most relevant for your team, contact us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-block px-6 py-3 rounded-md bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90"
            >
              Contact Us
            </Link>
            <a
              href="tel:+442039718252"
              className="inline-block px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
