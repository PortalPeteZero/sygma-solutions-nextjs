import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'EUSR CAT 1 Training | Cat and Genny Course | Sygma',
  description: 'EUSR CAT1 training producing EUSR-registered operatives. HSG47 built in. CAT and Genny practical assessment. UK-wide delivery.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat1' },
};

const faqs = [
  {
    q: 'What is EUSR CAT1 training?',
    a: 'EUSR CAT1 is a one-day utility avoidance training course that leads to an EUSR-registered Category 1 qualification. It covers electromagnetic theory, correct use of Genny & CAT equipment in all four modes, utility service plan reading, and a practical on-site assessment. It is one of the most widely recognised utility avoidance qualifications in the UK utility sector.',
  },
  {
    q: 'What is the difference between EUSR CAT1 and EUSR CAT1?',
    a: 'They are the same qualification. EUS and EUSR both refer to the Energy and Utility Skills Register. The qualification is sometimes written as EUSR CAT1 and sometimes as EUSR CAT1 or EUSR Category 1. All Sygma EUSR CAT1 certificates are issued against EUSR-registered standards.',
  },
  {
    q: 'What pass mark is required for EUSR CAT1?',
    a: 'The written multiple choice assessment requires a minimum pass mark of 80%. An oral assessment is available for delegates with dyslexia or reading difficulties. The practical on-site assessment is conducted on the day and assessed individually by the Sygma trainer.',
  },
  {
    q: 'Is EUSR CAT1 the same as ProQual CAT1?',
    a: 'No. Both cover similar core skills but they are issued by different bodies against different criteria. EUSR CAT1 is EUSR-registered. ProQual CAT1 is issued by ProQual Accreditations and includes additional individually assessed criteria, including clamp, capacitance, and blind induction assessed separately. See the comparison table on this page or the full ProQual CAT1 course page for details.',
  },
  {
    q: 'Can Sygma deliver EUSR CAT1 on our site?',
    a: 'Yes. Sygma delivers EUSR CAT1 at client sites across the UK. Travel is included in the day rate. Sygma provides Radiodetection CAT4 and CAT4+ as standard, but the course works with any manufacturer\u2019s locator and signal generator. For alternative equipment, a minimum ratio of one locator per three delegates applies. Maximum 8 delegates per session.',
  },
  {
    q: 'How long is an EUSR card valid for?',
    a: 'An EUSR CAT1 card is valid for 3 years from the date of issue. The expiry date is printed on the card. Most utility frameworks and principal contractors require a valid, in-date card as a condition of site access. Sygma recommends booking renewal training in the 3 months before expiry to avoid any lapse in certification.',
  },
  {
    q: 'How do I renew my EUSR card?',
    a: 'To renew your EUSR CAT1 card you need to retake the full EUSR CAT1 course and pass both the written and practical assessments. There is no shortened renewal route. The complete one-day EUSR Category 1 training programme must be completed again, including the multiple choice paper and the on-site practical. A new 3-year card is issued on successful completion.',
  },
  {
    q: 'What happens if my EUSR CAT1 card has expired?',
    a: 'If your EUSR CAT1 card has expired you cannot use it to demonstrate current competency and most utility operators will not allow you to locate on site. There is no grace period under EUSR rules. You will need to complete the full EUSR CAT1 course again. If your card has recently lapsed, contact Sygma and we can usually get you onto the next available date.',
  },
  {
    q: 'Is EUSR CAT1 training a legal requirement under HSG47?',
    a: 'HSG47, the Health and Safety Executive\u2019s guidance on avoiding danger from underground services, requires operatives who use cable locating equipment to be trained and competent. EUSR CAT1 is one of the most widely accepted ways of demonstrating that competency. While HSG47 does not mandate a specific qualification by name, holding an EUSR-registered qualification such as EUSR CAT1 is the utility industry\u2019s standard way of meeting that legal duty.',
  },
  {
    q: 'Can we do EUSR CAT1 and CAT2 training on the same day?',
    a: 'Yes, in most cases. Sygma regularly delivers combined EUSR CAT1 and CAT2 days for clients who want to complete both levels in a single site visit. The combined day runs longer, typically from 8:00am to 5:30pm. The maximum of 8 delegates applies to the combined format as well. Both certificates are issued on the day. Contact Sygma to confirm availability for your team size and location.',
  },
];

export default function EusCat1Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'EUSR CAT1 Training', description: 'EUSR CAT1 utility avoidance training from Sygma Solutions. A one-day course producing EUSR-registered operatives. Covers electromagnetic theory, CAT and Genny operation in all four modes, utility plan reading, and practical on-site assessment.', url: '/courses/eus-cat1', credential: 'EUSR CAT1 / EUSR Category 1', duration: '1 day', mode: ['onsite', 'blended'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'Cable Avoidance Training', to: '/courses/cable-avoidance-training' }, { label: 'EUSR CAT1' }]) }} />

      <InnerPageHero
        eyebrow="Utility Avoidance"
        headline="EUSR CAT1: EUSR-Registered Utility Avoidance Training"
        sub="EUSR CAT1 and EUSR Category 1 training from the UK's only independent specialist. Full electromagnetic theory, practical Genny & CAT assessment, and written paper. HSG47 compliant. Recognised across the water, gas, electricity, and telecoms sectors."
        images={[
          'landscape-01',
          'landscape-02',
          'landscape-03',
          'landscape-04',
          'landscape-05',
          'landscape-06',
          'landscape-07',
          'landscape-08',
        ]}
        alts={['Trainee scanning for underground utilities with a CAT4 locator', 'Genny signal generator being connected to a utility service point', 'Practical cable avoidance exercise on a live training site', 'Instructor guiding a trainee through CAT4 signal interpretation', 'Close-up of CAT4 display showing utility signal detection', 'Overhead view of a marked utility survey area during training', 'Group of trainees practising cable avoidance techniques outdoors', 'CAT4 and Genny equipment used during EUSR CAT1 accredited training']}
        breadcrumbs={[
          { label: 'Training', href: '/training/cable-location-avoidance' },
          { label: 'Cable Avoidance Training', href: '/courses/cable-avoidance-training' },
          { label: 'EUSR CAT1' },
        ]}
      />

      <section className="bg-foreground py-6">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">21 Years</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">One Specialism</p>
              <p className="text-xs text-white/60">Underground utility location training is all we do.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">70-80%</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Increase in Genny Usage</p>
              <p className="text-xs text-white/60">Measured through locator data downloads after Sygma training.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">Proven</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Strike Reduction Record</p>
              <p className="text-xs text-white/60">Clients report measurable reductions in service strikes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Who Is This Course For</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Designed For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Site Operatives', desc: 'Anyone who breaks ground or works near underground services.' },
              { title: 'Groundworkers and Labourers', desc: 'Digging, excavating or working in the vicinity of buried utilities.' },
              { title: 'Supervisors and Managers', desc: 'Responsible for teams who carry out excavation or survey work.' },
              { title: 'New Entrants to Utilities', desc: 'Starting a career in utility avoidance, streetworks or civil engineering.' },
            ].map((p, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'Duration', value: '1 Day' },
            { label: 'Max Delegates', value: '8' },
            { label: 'Certificate', value: 'EUSR CAT1 (EUSR-Registered)' },
            { label: 'Pass Mark', value: '80%' },
            { label: 'Assessment', value: 'Practical + Written' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">EUSR CAT1 Training: The EUSR-Registered Standard for Utility Avoidance</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">EUSR CAT1 training (also known as EUSR CAT1 or EUSR Category 1 training) is issued against EUSR-registered standards and is the utility sector&rsquo;s most widely recognised certificate of competence for operatives using Genny &amp; CAT equipment. The qualification is required or preferred on the frameworks of many of the UK&rsquo;s largest utility contractors and network operators. All EUSR CAT1 courses from Sygma meet the requirements of HSG47, the Health and Safety Executive&rsquo;s guidance on avoiding danger from underground services.</p>
          <p className="text-muted-foreground leading-relaxed">Sygma&rsquo;s EUSR CAT1 course delivers the same depth of electromagnetic theory and Genny-First methodology that runs through every Sygma programme. The EUSR registration adds the sector recognition that many procurement and H&amp;S frameworks require.</p>
          <p className="text-muted-foreground leading-relaxed">Not all EUSR CAT1 providers deliver the same standard of training. Sygma includes clamp, capacitance, and blind induction in assessed practicals even where EUSR does not require it. Sygma-trained operatives consistently show a 70-80% increase in Genny usage post-course, measured through locator data downloads.</p>
        </div>
        <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
          <p className="text-foreground font-semibold mb-2">Not sure whether you need EUSR CAT1 or the Sygma in-house certificate?</p>
          <p className="text-muted-foreground text-sm mb-3">Use the course finder on the Utility Avoidance Training hub page to identify the right route for your workforce.</p>
          <Link href="/training/cable-location-avoidance#course-finder" className="text-primary font-semibold text-sm hover:underline">
            Compare all cable avoidance qualification routes &rsaquo;
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <Image src="on-site-training-03" width={1200} height={800} alt="EUSR CAT1 training delegates using Genny & CAT on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
          <Image src="on-site-training-05" width={1200} height={800} alt="EUSR CAT1 practical cable avoidance assessment in countryside setting" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
          <Image src="on-site-training-01" width={1200} height={800} alt="On-site practical cable avoidance training with signal generator" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
        </div>
      </section>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">Course at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['Course Name', 'EUSR CAT1: Utility Avoidance Training'],
                  ['Awarding Body', 'EUSR (Energy and Utility Skills Register)'],
                  ['Duration', 'One day (typically 8:30am to 4:00pm)'],
                  ['Format', 'Classroom theory (morning) followed by on-site practical assessment (afternoon)'],
                  ['Assessment', 'Multiple choice written paper: 80% minimum pass mark. On-site practical assessment in all Genny & CAT modes.'],
                  ['Certificate', 'EUSR CAT1 certificate (EUSR-registered). Issued on successful completion.'],
                  ['Max Delegates', '8 per session'],
                  ['Delivery', 'Wigan HQ | The Survey School, Worcester | On-site nationwide (travel included)'],
                ].map(([label, value]) => (
                  <tr key={String(label)} className="border-b border-border">
                    <td className="py-3 pr-6 font-semibold text-foreground w-40 align-top">{label}</td>
                    <td className="py-3 text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <h2 className="text-2xl font-black mb-8 text-foreground">EUSR CAT1 Full Day Agenda</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 pr-6 font-black text-foreground w-56">Session</th>
                <th className="text-left py-3 font-black text-foreground">Content</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Why We Use Locators', 'HSG47 guidance and legal obligations. The financial and safety consequences of utility strikes.'],
                ['Buried Service Plans', 'Reading and interpreting STATS plans. Limitations of service plans.'],
                ['Electromagnetic Theory', 'How a locator detects signals. Theory and limitations of Power, Radio, Genny, and Avoidance modes.'],
                ['Equipment Controls and Operation', 'Locator controls and signal interpretation. Signal generator dual frequency, earthing, capacitance, blind induction, and nulling.'],
                ['Site Practical: Plan Reconciliation', 'Delegates use STATS plans to identify service routes. Equipment pre-use checks.'],
                ['Site Practical: Genny & CAT Survey', 'All modes assessed individually. Genny connected first. Individual assessment.'],
                ['Written Assessment', 'Multiple choice paper. 80% minimum pass mark.'],
                ['Certificate', 'EUSR CAT1 EUSR-registered certificate issued on successful completion.'],
              ].map(([session, content]) => (
                <tr key={String(session)} className="border-b border-border">
                  <td className="py-3 pr-6 font-semibold text-foreground align-top">{session}</td>
                  <td className="py-3 text-muted-foreground">{content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <Image src="on-site-training-panoramic-02" width={1200} height={800} alt="EUSR CAT1 on-site training group, Sygma Solutions nationwide delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-center" />
      </div>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl font-black mb-3 text-foreground">EUSR CAT1 vs ProQual CAT1: Which Does Your Operative Need?</h2>
          <p className="text-muted-foreground mb-8">EUSR CAT1 and ProQual CAT1 are not equivalent qualifications. ProQual CAT1 is significantly more thorough.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 pr-6 font-black text-foreground w-44"></th>
                  <th className="text-left py-3 pr-6 font-black text-foreground">EUSR CAT1</th>
                  <th className="text-left py-3 font-black text-foreground">ProQual CAT1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Duration', '1 day', '2 days'],
                  ['Theory assessment', 'Multiple choice paper (80% pass)', 'Written theory paper with extended responses'],
                  ['Practical assessment', 'On-site practical in all modes', 'Individually assessed practical for each technique'],
                  ['Clamp method', 'Covered in course', 'Assessed separately'],
                  ['Capacitance', 'Covered in course', 'Assessed separately'],
                  ['Blind induction', 'Covered in course', 'Assessed separately'],
                  ['Certificate validity', '3 years', '3 years'],
                  ['Awarding body', 'EUSR', 'ProQual Accreditations'],
                ].map(([label, eus, proq]) => (
                  <tr key={String(label)} className="border-b border-border">
                    <td className="py-3 pr-6 font-semibold text-foreground align-top w-44">{label}</td>
                    <td className="py-3 pr-6 text-muted-foreground">{eus}</td>
                    <td className="py-3 text-muted-foreground">{proq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <Link href="/courses/proqualcat1-training" className="text-accent font-semibold hover:underline">
              Read the full ProQual CAT1 course page &rsaquo;
            </Link>
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">FAQs</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">EUSR CAT1 Training: Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">{q}</h3>
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl font-black mb-6 text-foreground">Upgrade Your Qualification</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Next Step</p>
              <h3 className="font-black text-foreground mb-2">ProQual CAT1 Plus</h3>
              <p className="text-muted-foreground text-sm mb-4">Upgrade your EUSR CAT1 to include additional locating techniques under ProQual accreditation.</p>
              <Link href="/courses/proqualcat1plus" className="text-primary font-semibold text-sm hover:underline">View ProQual CAT1 Plus &rsaquo;</Link>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">On-Site Competency</p>
              <h3 className="font-black text-foreground mb-2">OSCA Assessment</h3>
              <p className="text-muted-foreground text-sm mb-4">The OSCA on-site competency assessment verifies your operatives are competent in live conditions.</p>
              <Link href="/osca" className="text-primary font-semibold text-sm hover:underline">View OSCA Assessment &rsaquo;</Link>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Bespoke Programme</p>
              <h3 className="font-black text-foreground mb-2">Bespoke Training</h3>
              <p className="text-muted-foreground text-sm mb-4">If your organisation needs more than a standard EUSR course, we design the programme from the ground up.</p>
              <Link href="/bespoke-training" className="text-primary font-semibold text-sm hover:underline">View Bespoke Training &rsaquo;</Link>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Course Comparison</p>
              <h3 className="font-black text-foreground mb-2">Cable Avoidance Course Comparison</h3>
              <p className="text-muted-foreground text-sm mb-4">Compare all cable avoidance courses side by side.</p>
              <Link href="/courses/cable-avoidance-course-comparison" className="text-primary font-semibold text-sm hover:underline">View Comparison &rsaquo;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Book Your EUSR CAT1 Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Book at our Wigan HQ, The Survey School in Worcester, or on your site anywhere in the UK. Travel included. Maximum 8 delegates.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
              Book Now
            </Link>
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors">
              Request On-Site Delivery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
