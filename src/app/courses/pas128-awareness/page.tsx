import { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import Link from 'next/link';
import Image from 'next/image';

const faqs = [
  {
    q: 'Is this course only for utility surveyors?',
    a: 'No. PAS128 Awareness is designed for anyone who needs to understand utility surveys: project managers, engineers, procurement teams, site supervisors and locating operatives. If you work with PAS128 survey drawings or commission utility surveys, this course is relevant.',
  },
  {
    q: 'What is the difference between this and the Plans and Process Training?',
    a: 'Plans and Process Training focuses on how to source, read and use utility plans (STATS, LSBUD, Digdat) before and during a survey. PAS128 Awareness focuses on the PAS128 standard itself: survey types, detection methods, deliverables and confidence levels. Both courses complement each other well.',
  },
  {
    q: 'Is the practical element included as standard?',
    a: 'No. The practical site session is optional. It is an addition to the classroom content. Let the bookings team know at the time of booking whether you want to include it, as this affects session duration and logistics.',
  },
  {
    q: 'What certification do delegates receive?',
    a: 'Delegates receive a certificate of attendance confirming they have completed the PAS128 Awareness course. Delegates who complete the optional practical element receive a documented record of their practical competence check.',
  },
  {
    q: 'Can this be delivered to a mixed group (some from site, some from the office)?',
    a: 'Yes. The course is suitable for mixed groups. The classroom content is relevant at all levels, and the discussion-based format allows both site operatives and office-based staff to engage with the content from their own perspective.',
  },
  {
    q: 'We need training for a large team. Can you deliver multiple sessions?',
    a: 'Yes. In-house delivery is the most practical option for large teams. Sygma can work with you to plan a delivery schedule that suits your workforce. Contact the bookings team to discuss.',
  },
];

export const metadata: Metadata = {
  title: 'PAS 128 Awareness Training Course | Sygma Solutions',
  description:
    'PAS 128 awareness training for teams who commission or manage utility surveys. Understand survey quality levels, drawings, and specifications.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/pas128-awareness' },
  openGraph: {
    title: 'PAS 128 Awareness Training Course | Sygma Solutions',
    description:
      'PAS 128 awareness training for teams who commission or manage utility surveys. Understand survey quality levels, drawings, and specifications.',
    url: 'https://sygma-solutions.com/courses/pas128-awareness',
    type: 'website',
  },
};

export default function Pas128Awareness() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'PAS128 Awareness Training',
            description:
              'PAS128 awareness training for teams who commission or manage utility surveys. Understand survey quality levels, PAS128 drawings and the survey specification process.',
            url: 'https://sygma-solutions.com/courses/pas128-awareness',
            provider: {
              '@type': 'Organization',
              name: 'Sygma Solutions',
            },
            educationalCredentialAwarded: 'PAS128 Awareness Certificate',
            courseMode: 'onsite',
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
                name: 'PAS128 Awareness',
              },
            ],
          }),
        }}
      />

      <InnerPageHero
        eyebrow="Utility Mapping"
        headline="PAS128 Awareness Training: Understand Utility Survey Drawings and the Survey Process"
        sub="PAS128 is the British Standard for utility surveys and mapping. If your team works near buried services, manages utility survey contracts or needs to read and act on PAS128 survey drawings, this awareness course gives them the knowledge to do that confidently. Classroom delivery with an optional practical element."
        image="Utility-Mapping-02"
        breadcrumbs={[
          { label: 'Training', href: '/training/utility-mapping-surveying' },
          { label: 'PAS128 Awareness' },
        ]}
      />

      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ['Classroom-Based', 'Structured learning in a professional training environment'],
            ['Optional Practical Session', 'Mini survey using utility plans and CAT and Genny'],
            ['In-House Delivery Available', 'Delivered at your premises or Sygma\'s Wigan training centre'],
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
          <Image src="MALA-GPR-05" width={1200} height={800} alt="PAS128 awareness training - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
          <Image src="CAT4-and-Genny-03" width={1200} height={800} alt="PAS128 awareness training - electromagnetic locator practical" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
          <Image src="MALA-GPR-13" width={1200} height={800} alt="PAS128 awareness training - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
        </div>
      </section>
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">Why PAS128 Awareness Matters</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The Standard That Governs Utility Surveys</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                PAS128 specifies how utility surveys should be conducted, recorded and delivered. It sets out survey types, quality levels, detection methods and deliverable requirements. But many of the people who commission, receive or act on PAS128 surveys have never had formal training in what the standard actually means or what a PAS128 drawing is telling them.
              </p>
              <p>
                This awareness course closes that gap. It covers the four PAS128 survey types (D, C, B and A), the detection methods M1 to M4, how to use plans to support a survey, and what the finished PAS128 deliverables should show. It is delivered as a structured classroom session, with the option to add a practical site element where delegates conduct a mini survey using utility plans and CAT and Genny.
              </p>
              <p>
                The course is relevant to anyone who commissions utility surveys, interprets PAS128 drawings on site or needs to understand what level of confidence a given survey type actually provides.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">PAS128 Awareness vs Plans and Process Training</p>
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <p className="text-sm font-bold text-foreground mb-1">PAS128 Awareness</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focuses on the PAS128 standard itself: survey types D, C, B and A, detection methods M1-M4, deliverables and confidence levels. For anyone who commissions, receives or acts on PAS128 surveys.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground mb-1">
                  <Link href="/courses/plans-and-process" className="text-primary underline underline-offset-2">
                    Plans and Process Training
                  </Link>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focuses on how to source, read and use utility plans (STATS, LSBUD, Digdat) before and during a survey. Both courses complement each other well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Designed For</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-5 py-3 font-bold">Who</th>
                  <th className="text-left px-5 py-3 font-bold">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'Project managers and site supervisors',
                    'Need to understand what a PAS128 survey provides and its limitations',
                  ],
                  [
                    'Utility survey procurement teams',
                    'Need to specify the right survey type for a given project',
                  ],
                  [
                    'Locating operatives',
                    'Need to understand how PAS128 survey types relate to the work they do',
                  ],
                  [
                    'Designers and engineers',
                    'Need to understand the confidence levels attached to different PAS128 quality levels',
                  ],
                  [
                    'Contractors working to PAS128 survey drawings',
                    'Need to read and interpret deliverables on site',
                  ],
                ].map(([who, why], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="px-5 py-3 font-semibold text-foreground align-top">{who}</td>
                    <td className="px-5 py-3 text-muted-foreground">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Course Content</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">What the Session Covers</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          The classroom content is structured across four areas, taking delegates from legal context through to understanding what a completed PAS128 survey deliverable should contain.
        </p>
        <div className="space-y-8">
          {[
            {
              title: 'Plans, Legislation and Network Knowledge',
              items: [
                'Reasons for using utility plans: legal responsibilities under HSG47 and when plans must be obtained',
                'Network areas: different network operators, the areas they cover and regional differences',
              ],
            },
            {
              title: 'Introduction to PAS128',
              items: [
                'Overview of the PAS128 standard and what it sets out to achieve',
                'PAS128 survey types: D (desktop), C (site reconnaissance), B (detection survey) and A (verification)',
                'Detection methods M1 to M4 and how they differ in terms of technology and confidence level',
              ],
            },
            {
              title: 'Using Plans in the Survey Process',
              items: [
                'Visual survey (Type C): how to get the best out of a site reconnaissance using your eyes, environmental clues and STATS plans',
                'Using plans to assist a detection survey (Type B): understanding what plans tell you and what they do not',
                'Process of a survey in conjunction with plans: the routine from reading plans through to completing the detection survey (Types D and B)',
              ],
            },
            {
              title: 'PAS128 Drawings and Deliverables',
              items: [
                'Analysing PAS128 survey drawings: understanding what is shown, the quality levels and confidence ratings',
                'PAS128 deliverables: what a completed survey must include',
                'Verification survey (Type A): what it is, when it is used and what it confirms',
              ],
            },
          ].map(({ title, items }) => (
            <div key={title} className="rounded-xl border border-border overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black">{title}</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-3">
                  {items.map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                      <span className="text-accent font-bold shrink-0">&#8250;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Optional Practical Element</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Hands-On Learning in the Field</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The classroom session can be supplemented with an optional practical site element. Sygma will identify a suitable practical area close to the training venue.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              'Delegates conduct a mini survey using utility plans alongside CAT and Genny',
              'A practical competence assessment is completed during the site session',
              'The practical element reinforces the classroom learning and gives delegates direct experience of applying PAS128 Type C and B survey processes in a real environment',
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-xl border border-border p-5 flex gap-3 items-start">
                <span className="text-accent font-black text-lg shrink-0">&#8250;</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-amber-50 dark:bg-amber-950/20 p-5">
            <p className="text-sm font-bold text-foreground mb-1">Booking note</p>
            <p className="text-sm text-muted-foreground">
              The practical element is optional. Confirm with the bookings team at the time of booking whether the site option is required. This affects session duration and logistical requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">What You Get</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">At the End of This Course</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Certificate of Attendance',
                desc: 'Sygma certificate confirming PAS128 awareness training completion',
              },
              {
                title: 'Competence Check Record',
                desc: 'If optional practical session completed, documented competence check',
              },
              {
                title: 'Reference Materials',
                desc: 'Understanding of PAS128 survey types D, C, B and A',
              },
              {
                title: 'Progression Guidance',
                desc: 'Advice on next steps toward full PAS128 surveyor qualification',
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-07" width={1200} height={800} alt="PAS128 awareness training with GPR equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-15" width={1200} height={800} alt="Utility survey awareness classroom session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="Utility-Mapping-03" width={1200} height={800} alt="PAS128 utility mapping demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Delivery Format</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Classroom-Based with Optional Site</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The course is available as an in-house delivery at your premises or at Sygma's Wigan training centre. It can also be delivered as part of a wider training programme for teams who need broader utility survey awareness.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black">Classroom Only</p>
              <p className="text-white/70 text-sm">Certificate of attendance issued</p>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full classroom session covering all four PAS128 awareness content blocks. Delivered as an in-house session at your premises or at Sygma's Wigan training centre. Certificate of attendance issued on completion.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black">Classroom with Practical</p>
              <p className="text-white/70 text-sm">Certificate plus practical competence check record</p>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full classroom session plus a practical site assessment where delegates conduct a mini survey using plans alongside CAT and Genny. A documented competence check record is completed on site alongside the certificate of attendance.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-muted/30 p-5">
          <p className="text-sm font-bold text-foreground mb-1">No formal qualification</p>
          <p className="text-sm text-muted-foreground">
            No formal qualification is attached to this course. Delegates who attend receive a certificate of attendance. Delegates who complete the optional practical element receive a documented record of practical capability with PAS128-aligned tasks.
          </p>
        </div>
      </section>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Training Pathway</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Start Here or Build on It</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            PAS128 Awareness is designed as a standalone session, but it also sits at the entry point to the utility mapping training pathway. Delegates who want to develop beyond awareness into practical surveying skills have a clear route through the Sygma training programme.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-5 py-3 font-bold">Next Step</th>
                  <th className="text-left px-5 py-3 font-bold">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    course: 'Plans and Process Training',
                    href: '/courses/plans-and-process',
                    why: 'Practical skills for sourcing, reading and using STATS plans, LSBUD and Digdat before and during a survey',
                  },
                  {
                    course: '5 Day PAS128 Surveyor Course',
                    href: '/courses/5-day-pas128-surveyor',
                    why: 'Full surveyor training covering PAS128 D, C and B with EM locating and GPR',
                  },
                  {
                    course: 'GPR Training',
                    href: '/courses/gpr-training',
                    why: 'Standalone GPR module for surveyors developing PAS128 B detection competency',
                  },
                  {
                    course: 'Level 3 Certificate in Utility Mapping and Surveying',
                    href: '/courses/level-3-certificate',
                    why: 'Nationally recognised qualification for utility surveyors',
                  },
                ].map(({ course, href, why }, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="px-5 py-3 font-semibold align-top">
                      <Link href={href} className="text-primary underline underline-offset-2">
                        {course}
                      </Link>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Related Training</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Courses That Complement This One</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: 'Plans and Process Training',
              desc: 'Covers STATS, LSBUD and Digdat plans interpretation. Complements PAS128 Awareness by focusing on the plans side of the survey process.',
              href: '/courses/plans-and-process',
            },
            {
              title: '5 Day PAS128 Surveyor Course',
              desc: 'The full surveyor programme for those who want to go beyond awareness into practical EM locating and GPR survey skills.',
              href: '/courses/5-day-pas128-surveyor',
            },
            {
              title: 'GPR Training',
              desc: 'GPR theory and practical operation for PAS128 Level B surveys. Module 1 and Module 2 available individually or combined.',
              href: '/courses/gpr-training',
            },
            {
              title: 'TSA and ICES Utility Mapping Programme',
              desc: 'Full ICES competency programme for utility mapping professionals seeking TSA and ICES recognition.',
              href: '/courses/tsa-ices-utility-mapping',
            },
            {
              title: 'EUSR CAT and Genny Training',
              desc: 'For operatives who need locating skills before progressing to surveying. The foundation for PAS128 B survey work.',
              href: '/courses/eus-cat1',
            },
          ].map(({ title, desc, href }) => (
            <Link
              key={title}
              href={href}
              className="group bg-background rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Why Sygma</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Train With Sygma?</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              title: 'Real Survey Expertise',
              body: 'Led by trainers who actively survey to PAS128. Not theoretical delivery.',
            },
            {
              title: 'Independent',
              body: 'Sygma is independent and owns the training process from start to finish.',
            },
            {
              title: 'Specialist Trainers',
              body: 'Delivered by practitioners who understand real-world utility surveying challenges.',
            },
            {
              title: 'Practical Understanding',
              body: 'The classroom content is grounded in how surveys actually happen on the ground.',
            },
            {
              title: 'Flexible Delivery',
              body: 'In-house at your premises or at Sygma\'s Wigan training centre. Mix and match with practical sessions.',
            },
            {
              title: 'Foundation for Further Training',
              body: 'PAS128 Awareness sits at the entry point to the wider utility mapping training pathway.',
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
              Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding support. Availability varies by employer and is not guaranteed.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-22" width={1200} height={800} alt="Ground penetrating radar survey demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-28" width={1200} height={800} alt="PAS128 utility detection practical training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="Utility-Mapping-05" width={1200} height={800} alt="Utility mapping equipment training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">{q}</h3>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
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
            <Link href="/contact" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
              <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Training</p>
              <p className="text-xs text-muted-foreground">Design a tailored programme around your site risks, equipment, and team size.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About PAS128 Awareness Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Classroom-based with optional practical site session. Delivered in-house at your premises or at Sygma's Wigan training centre. Contact us to discuss your requirements and receive a tailored quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About This Course
            </Link>
            <Link
              href="/training/utility-mapping-surveying"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View All Utility Mapping Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
