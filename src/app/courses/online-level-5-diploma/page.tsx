import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    q: 'How is the online Level 5 delivered?',
    a: 'Live sessions via Microsoft Teams. Portfolio-based assessment with ongoing tutor support.',
  },
  {
    q: 'What prior qualifications do I need?',
    a: 'Level 4 Diploma or equivalent experience in utility mapping at management level.',
  },
  {
    q: 'How long does it take to complete?',
    a: 'Most candidates complete within 12-18 months alongside normal duties.',
  },
  {
    q: 'Is this the same qualification as the in-person route?',
    a: 'Yes. Same ProQual Level 5 Diploma, same assessment criteria, same certificate.',
  },
  {
    q: 'What evidence do I need to provide?',
    a: 'Portfolio evidence from your real work. Your existing management responsibilities generate much of what is needed.',
  },
  {
    q: 'Can my employer claim CITB funding?',
    a: 'Sygma is a CITB ATO. Speak to your CITB Employer Network adviser about available support.',
  },
];

export const metadata: Metadata = {
  title: 'Online Level 5 Diploma in Utility Mapping | Sygma Solutions',
  description:
    'Ofqual-regulated Level 5 Diploma in Utility Mapping delivered online. Senior-level qualification with full assessor support and mentoring via MS Teams.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/online-level-5-diploma' },
  openGraph: {
    title: 'Online Level 5 Diploma in Utility Mapping | Sygma Solutions',
    description:
      'Ofqual-regulated Level 5 Diploma in Utility Mapping delivered online. Senior-level qualification with full assessor support and mentoring via MS Teams.',
    url: 'https://sygma-solutions.com/courses/online-level-5-diploma',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function OnlineLevel5Diploma() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'ProQual Level 5 Diploma in Utility Mapping and Surveying (Online)',
            description:
              'Ofqual-regulated Level 5 Diploma in Utility Mapping delivered online. Senior-level qualification with full assessor support and mentoring via MS Teams.',
            url: 'https://sygma-solutions.com/courses/online-level-5-diploma',
            provider: {
              '@type': 'Organization',
              name: 'Sygma Solutions',
            },
            educationalCredentialAwarded: 'Level 5 Diploma in Utility Surveying',
            courseMode: 'online',
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
                name: 'Online Level 5 Diploma',
              },
            ],
          }),
        }}
      />

      <InnerPageHero
        eyebrow="Qualifications"
        headline="ProQual RQF Level 5 Diploma in Utility Mapping and Surveying (Online)"
        sub="Formal recognition of senior-level competency in utility mapping and surveying. Work at your own pace with full assessor support and mentoring throughout, delivered via MS Teams. No hidden fees. No extra charges for additional assessments. Contact us to discuss enrolment and pricing."
        images={[
          'em-01',
          'gpr-07',
          'gpr-02',
        ]}
        alts={[
          'Advanced EM locating methods taught in the online Level 5 diploma programme',
          'Professional GPR survey techniques covered in the online Level 5 course',
          'Advanced EM locating methods taught in the online Level 5 diploma programme',
        ]}
        breadcrumbs={[
          { label: 'Training', href: '/training/utility-mapping-surveying' },
          { label: 'Online Level 5 Diploma' },
        ]}
      />

      <section className="bg-muted/40 border-b border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['Qualification', 'ProQual RQF Level 5'],
            ['Delivery', 'MS Teams (self-paced)'],
            ['Duration', 'Flexible (your schedule)'],
            ['Pricing', 'Fixed (contact us)'],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="eyebrow mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="gpr-05" width={1200} height={900} alt="Online Level 5 Diploma - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="em-05" width={1200} height={900} alt="Online Level 5 Diploma - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="gpr-01" width={1200} height={900} alt="Online Level 5 Diploma - electromagnetic survey practical" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {[
              'ProQual Approved Centre',
              'RQF Level 5',
              'Senior Practitioner Route',
              'Assessor-led Support Throughout',
              'Fixed Transparent Pricing',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">Who This Is For</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">This Course Is for You If...</h2>
            <div className="space-y-4">
              {[
                'You are an experienced utility mapping or surveying professional seeking formal RQF Level 5 qualification to reflect your level of competency and responsibility.',
                'You hold or are working towards Level 3 or Level 4 and are ready to progress to the next stage of the ProQual qualification pathway.',
                'Your employer, framework, or career progression requires evidence of senior-level competency in utility mapping and surveying as a formal, regulated qualification.',
                'You want to work through the qualification at your own pace, drawing on your existing professional experience as evidence, with a Sygma assessor supporting you throughout.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="text-accent font-bold shrink-0 mt-0.5">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Typical Candidates</p>
            <div className="space-y-2">
              {[
                'Experienced utility surveyors with several years of professional practice',
                'Lead surveyors moving into senior or management roles',
                'Professionals with Level 3 or Level 4 qualifications progressing through the pathway',
                'Senior practitioners in utility data management, corridor survey, or strategic mapping roles',
                'Individuals whose client or framework requirements specify Level 5 competency',
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Qualification Content</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">What the Level 5 Covers</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mb-8">
            <p>
              The ProQual RQF Level 5 Diploma in Utility Mapping and Surveying is the advanced practitioner-level qualification in the Sygma qualification pathway. It recognises a high level of competency in utility surveying, mapping methodology, PAS128 practice, and the professional responsibilities that come with senior roles in this field.
            </p>
            <p>
              The Level 5 goes beyond the technical foundations covered at Level 3 and the specialist technical depth of Level 4. At Level 5, the qualification recognises the ability to plan, manage, and take professional responsibility for utility mapping programmes at a senior level.
            </p>
            <p>
              Assessment is evidence-based. Candidates build a portfolio of workplace evidence demonstrating competency across the qualification units, supported by knowledge workbooks and assessor-led review sessions via MS Teams.
            </p>
          </div>

          <h3 className="text-xl font-black text-foreground mb-4">Qualification Units</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Candidates must complete all 6 mandatory units. Ofqual qualification number: 600/5171/1. Total qualification time: 450 hours (300 guided learning hours).
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-4 py-3 font-bold">Unit Ref</th>
                  <th className="text-left px-4 py-3 font-bold">Unit Title</th>
                  <th className="text-center px-4 py-3 font-bold">Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  [
                    'Y/507/1370',
                    'Agree project requirements and plan site surveying in geomatics and site surveying management',
                    '6',
                  ],
                  [
                    'D/507/1371',
                    'Plan methods, resources and systems to meet project requirements in geomatics and site surveying management',
                    '5',
                  ],
                  ['H/507/1372', 'Site surveying procedures for construction and the built environment', '4'],
                  [
                    'K/507/1373',
                    'Establish and maintain the dimensional control and setting out of construction projects in geomatics and site surveying',
                    '4',
                  ],
                  [
                    'M/507/1374',
                    'Establish and operate technical information systems in geomatics and site surveying management',
                    '5',
                  ],
                  [
                    'T/507/1375',
                    'Identify, assess and present spatial data in geomatics and site surveying management',
                    '6',
                  ],
                ].map(([ref, title, level], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                    <td className="px-4 py-3 font-mono text-xs whitespace-nowrap">{ref}</td>
                    <td className="px-4 py-3 text-muted-foreground">{title}</td>
                    <td className="px-4 py-3 text-center font-bold">{level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Online Delivery</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">How the Online Route Works</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          The online route allows you to work through the Level 5 Diploma at your own pace, using your existing professional experience as the foundation for your evidence portfolio. You are supported throughout by a Sygma assessor via MS Teams.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {[
            {
              step: '1',
              stage: 'Enrolment',
              detail: 'You enrol with Sygma. Sygma registers you with ProQual as a Level 5 candidate.',
            },
            {
              step: '2',
              stage: 'Materials Issued',
              detail:
                'You receive your e-portfolio framework and workbooks covering the Level 5 qualification units.',
            },
            {
              step: '3',
              stage: 'Evidence Gathering',
              detail:
                "You build your evidence portfolio from your existing professional practice. Sygma's assessor supports you throughout.",
            },
            {
              step: '4',
              stage: 'Assessor Support Sessions',
              detail:
                'Regular MS Teams sessions with your Sygma assessor to review progress, discuss evidence, and prepare for submission. Sessions are not recorded. A computer (not a phone) is required.',
            },
            {
              step: '5',
              stage: 'Knowledge Workbooks',
              detail: 'You complete knowledge workbooks to cover any areas not fully demonstrated by workplace evidence.',
            },
            {
              step: '6',
              stage: 'Assessment and Submission',
              detail:
                'Your completed evidence portfolio is assessed by Sygma and submitted to ProQual for external quality assurance.',
            },
            {
              step: '7',
              stage: 'Certification',
              detail: 'On successful completion, ProQual issues your RQF Level 5 Diploma certificate.',
            },
          ].map(({ step, stage, detail }) => (
            <div key={step} className="rounded-xl border border-border bg-background p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-black flex items-center justify-center shrink-0">
                  {step}
                </span>
                <p className="font-bold text-foreground text-sm">{stage}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <div className="bg-muted/30 rounded-xl border border-border p-6 max-w-3xl">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            At Level 5, candidates typically have substantial workplace experience to draw on. The timeline for completion reflects this: the focus is on structuring and evidencing existing competency, not building it from scratch. Your assessor will advise on realistic timescales at enrolment.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pricing is fixed and transparent. There are no hidden fees and no extra charges for additional assessments. Contact us to discuss your enrolment.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'ProQual Level 5 Diploma in Underground Utility Mapping',
              'Online Portfolio Submission Record',
              'External Assessment Report',
              'Qualification Registered on the RQF',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-03" width={1200} height={900} alt="Online Level 5 Diploma training support" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-06" width={1200} height={900} alt="Utility survey training for Level 5 qualification" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-12" width={1200} height={900} alt="Level 5 qualification practical demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Choosing Your Route</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Online Route or Fast-Track In-Person?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            The Level 5 Diploma is available via two routes. The online route is typically well-suited to experienced practitioners who can draw on substantial existing workplace evidence:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-5 py-3 font-bold w-32"></th>
                  <th className="text-left px-5 py-3 font-bold">Online route (this page)</th>
                  <th className="text-left px-5 py-3 font-bold">
                    <Link href="/courses/level-5-diploma" className="text-white hover:underline">
                      Fast-track in-person
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: 'Format',
                    online: 'Self-paced, evidence-based portfolio. Candidate draws on existing professional experience.',
                    inperson: 'Intensive in-person course, typically five days.',
                  },
                  {
                    label: 'Delivery',
                    online: 'MS Teams assessor support throughout. Work from any location.',
                    inperson: 'At a Sygma training venue or client site.',
                  },
                  {
                    label: 'Duration',
                    online: 'Flexible. Timescale depends on evidence availability and candidate schedule.',
                    inperson: 'Typically five days for the fast-track programme.',
                  },
                  {
                    label: 'Pricing',
                    online: 'Contact us to discuss enrolment and pricing.',
                    inperson: 'Contact us to discuss group and individual pricing.',
                  },
                ].map(({ label, online, inperson }, i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="px-5 py-3 font-bold text-foreground align-top w-32">{label}</td>
                    <td className="px-5 py-3 text-muted-foreground align-top">{online}</td>
                    <td className="px-5 py-3 text-muted-foreground align-top">{inperson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Our Approach</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Study With Sygma?</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/40">
                  <th className="text-left px-5 py-3 font-bold text-foreground">What Sygma offers</th>
                  <th className="text-left px-5 py-3 font-bold text-foreground">Why it matters at Level 5</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    what: 'ProQual Approved Centre status',
                    why: 'Your Level 5 Diploma is issued by a regulated awarding organisation and recognised across the industry.',
                  },
                  {
                    what: 'Fixed, transparent pricing',
                    why: 'No hidden fees. No extra charges for additional assessments. The price you agree at enrolment is the price you pay.',
                  },
                  {
                    what: 'Experienced assessors who work at senior level',
                    why: 'At Level 5, your evidence is assessed by practitioners who understand what senior-level competency looks like in practice, not just in a workbook.',
                  },
                  {
                    what: 'Full assessor support throughout',
                    why: 'You are supported from enrolment to certification. This is not a self-study package with occasional check-ins.',
                  },
                  {
                    what: 'The complete pathway in one place',
                    why: 'If you hold Level 3 or Level 4, Level 5 is the natural next step. Level 6 is available after that. You do not need to switch providers or re-register with a different organisation.',
                  },
                ].map(({ what, why }, i) => (
                  <tr key={what} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="px-5 py-3 font-semibold text-foreground align-top">{what}</td>
                    <td className="px-5 py-3 text-muted-foreground align-top">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Pathway</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Where Level 5 Sits in the Pathway</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            The Level 5 Diploma is the fourth level in the ProQual utility mapping and surveying qualification pathway. Sygma offers every level from Level 3 to Level 6 within the same pathway, with the same assessors and the same fixed pricing model.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-5 py-3 font-bold">Level</th>
                  <th className="text-left px-5 py-3 font-bold">Qualification</th>
                  <th className="text-left px-5 py-3 font-bold hidden md:table-cell">Career Stage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    level: 'Level 3',
                    qual: 'Diploma in Utility Mapping and Surveying',
                    career: 'Entry-level mapping professionals.',
                    href: '/courses/level-3-certificate',
                    current: false,
                  },
                  {
                    level: 'Level 4',
                    qual: 'Advanced EML and GPR Specialist',
                    career: 'Specialist technical practitioners.',
                    href: '/courses/level-4-diploma',
                    current: false,
                  },
                  {
                    level: 'Level 5',
                    qual: 'Diploma in Utility Mapping and Surveying',
                    career: 'Senior practitioners seeking formal recognition.',
                    href: null,
                    current: true,
                  },
                  {
                    level: 'Level 6',
                    qual: 'Diploma in Utility Mapping and Surveying Management',
                    career: 'Senior managers and programme leads.',
                    href: '/courses/level-6-diploma',
                    current: false,
                  },
                ].map(({ level, qual, career, href, current }, i) => (
                  <tr
                    key={level}
                    className={
                      current
                        ? 'bg-primary/10 border-l-4 border-primary'
                        : i % 2 === 0
                          ? 'bg-background'
                          : 'bg-muted/20'
                    }
                  >
                    <td className="px-5 py-3 font-bold text-foreground align-top">
                      {level}
                      {current && (
                        <span className="ml-2 inline-block text-xs bg-primary text-primary-foreground rounded px-2 py-0.5">
                          You Are Here
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground align-top">
                      {href ? (
                        <Link href={href} className="text-primary hover:underline font-semibold">
                          {qual}
                        </Link>
                      ) : (
                        <span className="font-semibold text-foreground">{qual}</span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground hidden md:table-cell align-top">{career}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="em-04" width={1200} height={900} alt="Level 5 Diploma training with equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="em-07" width={1200} height={900} alt="GPR survey training for online Level 5" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-04" width={1200} height={900} alt="Online Level 5 qualification assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Why Sygma</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Study With Sygma?</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              title: 'Flexible Online Format',
              body: 'Complete your Level 5 remotely with live tutor support and full portfolio guidance.',
            },
            {
              title: 'ProQual Approved Centre',
              body: 'Your qualification is issued by a regulated awarding organisation and recognised across the industry.',
            },
            {
              title: 'Specialist Assessors',
              body: 'At Level 5, your evidence is assessed by practitioners who understand what senior-level competency looks like in practice.',
            },
            {
              title: 'Full Portfolio Support',
              body: 'You are supported from enrolment to certification. This is not a self-study package with occasional check-ins.',
            },
            {
              title: 'Independent',
              body: 'Sygma is independent and owns the training process from start to finish.',
            },
            {
              title: 'Management Qualification Online',
              body: 'Same ProQual Level 5 Diploma, flexible online delivery that works around your senior role.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-muted/30 rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="bg-muted/30 rounded-xl border border-border p-8 max-w-2xl">
            <h3 className="text-lg font-bold text-foreground mb-3">CITB Employer Network Funding</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding support for your Level 5 enrolment. Availability varies by employer and is not guaranteed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="border border-border rounded-lg bg-card">
                <summary className="p-4 font-semibold cursor-pointer text-foreground">{q}</summary>
                <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Related Courses</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Other Qualifications in the Pathway</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: 'Online Level 3 Diploma',
              desc: 'Complete your Level 3 remotely with live tutor support if you haven\'t already qualified.',
              href: '/courses/online-level-3-diploma',
            },
            {
              title: 'Level 5 Diploma',
              desc: 'The fast-track in-person route to the same ProQual Level 5 Diploma if you prefer classroom-based learning.',
              href: '/courses/level-5-diploma',
            },
            {
              title: 'Level 6 Diploma',
              desc: 'Diploma in Utility Mapping and Surveying Management. The advanced route after Level 5.',
              href: '/courses/level-6-diploma',
            },
          ].map(({ title, desc, href }) => (
            <Link
              key={title}
              href={href}
              className="group bg-muted/20 rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Also Consider</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/osca" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
              <p className="mb-1 text-sm font-semibold text-foreground">OSCA Assessment</p>
              <p className="text-xs text-muted-foreground">GPS-stamped on-site competency assessment to verify real-world skills.</p>
            </Link>
            <Link href="/bespoke-training" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
              <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Training</p>
              <p className="text-xs text-muted-foreground">Design a tailored programme around your site risks, equipment, and team size.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Enrol or Enquire</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            To discuss enrolment at Level 5, your existing qualifications and experience, or to find out whether the online route is right for your situation,{' '}
            <Link href="/contact#enquiry-form" className="text-primary font-semibold hover:underline">
              get in touch
            </Link>{' '}
            with the Sygma team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About the Level 5
            </Link>
            <a
              href="tel:+442039718252"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
