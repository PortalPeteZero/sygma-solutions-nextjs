import type { Metadata } from 'next';
import Link from 'next/link';
import FallbackImage from '@/components/FallbackImage';
import PrintButton from '@/components/PrintButton';
import { courseSchema, breadcrumbSchema } from '@/lib/schema';
import { Eyebrow, PRINT_CSS } from '@/components/agendaShared';
import AccreditationStrip from '@/components/AccreditationStrip';

/* ProQual Level 2 Award in Utility Avoidance — self-contained two-day agenda.
   Merged from the Sygma QCF Level 2 (2-day) agenda variants into one complete document:
   full classroom (Day 1) + practical (Day 1 & 2) detail, requirements and timings.
   Single certification route — the regulated ProQual Level 2 Award (no EUSR option). */

const TITLE = 'ProQual Level 2 Award in Utility Avoidance — Course Agenda | Sygma';
const DESC = 'The full two-day agenda for Sygma\'s Advanced Utility Location training leading to the regulated ProQual (QCF) Level 2 Award in Utility Avoidance. Classroom theory, live practical, and knowledge + practical assessment.';
const URL = 'https://sygma-solutions.com/agendas/proqual-level-2-award';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  // Sendable agenda — deliberately kept out of search so it can't cannibalise the /courses pages that rank.
  robots: { index: false, follow: true },
  keywords: ['ProQual Level 2 Award', 'QCF Level 2 Utility Avoidance', 'utility location and avoidance qualification', 'regulated utility detection training', 'HSG47 ProQual'],
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-56', width: 1200, height: 630, alt: 'Sygma ProQual Level 2 Award in Utility Avoidance training' }],
    type: 'website',
  },
};

const spec = [
  { k: 'Duration', v: 'Two days', s: '09:00 – ~15:00, flexible' },
  { k: 'Group size', v: 'Max 8', s: 'Per trainer' },
  { k: 'Delivery', v: 'On-site UK-wide', s: 'or our Wigan centre' },
  { k: 'Qualification', v: 'ProQual L2', s: 'Regulated award' },
];

const objectives = [
  'Improve awareness of how to avoid damaging buried utilities, and operate cable locators to locate and subsequently avoid them',
  'Complete and pass the knowledge-based assessment for the QCF Level 2 Award in Utility Location and Avoidance',
  'Complete and pass the practical assessment for the QCF Level 2 Award in Utility Location and Avoidance',
];

type Row = { t: string; d: string };

/* ===== Day 1 — classroom (merged, fullest set) ===== */
const day1Classroom: Row[] = [
  { t: 'Why we locate — the risks & HSG47', d: 'The health, safety and financial implications of striking a buried service; how to comply with HSG47 (Avoiding Danger from Underground Services) and work to a safe system of work; other national legislation and company policy documentation; and the consequences of utility strikes.' },
  { t: 'Legislation & guidance', d: 'The legislation and guidance that applies, and the important differences between them.' },
  { t: 'Client & designer responsibilities', d: 'Client and designer responsibilities under HSG47.' },
  { t: 'Overview of utility networks', d: 'How electricity, gas, water and communications reach our homes and businesses, and the different cable and pipe types, materials and connectivity involved.' },
  { t: 'Buried Service Plans (STATS & PAS128)', d: 'Interpreting and understanding the different types of service plan, including their inaccuracies and limitations.' },
  { t: 'Calibration & equipment checks', d: 'Calibration requirements, correct storage, and functional checks.' },
  { t: 'Electromagnetic theory & myth-busting', d: 'How a pipe & cable locator works, the theory and its limitations, tips & tricks, and a session on what the equipment genuinely can and cannot locate.' },
  { t: 'Controls & operation', d: 'Correct use of the cable locator and signal transmitter in all modes, with strong emphasis on transmitter (Genny) use.' },
  { t: 'Signal interpretation', d: 'Interpreting the signal, and locating service joints and changes of direction and depth.' },
  { t: 'Signal distortion', d: 'Signal distortion and its effects on location accuracy.' },
  { t: 'Transmitter techniques', d: 'The benefits and applications of dual frequency; using the Genny to locate small or non-earthed cables using capacitance; effective earthing and earth positioning; blind induction search and effective nulling of services.' },
  { t: 'Data logging (optional)', d: 'Recording and reviewing locator data.' },
];

/* ===== Day 1 — practical ===== */
const day1Practical: string[] = [
  'Use service plans and existing site information to establish the indicated routes of buried mains & services, and learn the importance of site visual checks before any work begins (plans provided by the client)',
  'Correct use of the equipment in all modes, confirming and locating buried mains & services from the plans and previous visual inspection, testing and ensuring the equipment is in satisfactory operating condition',
  'Use the equipment correctly in all modes, and understand the benefits of always using the cable locator & signal transmitter combination, including dual frequency where applicable',
  'Apply capacitance techniques',
  'Effectively locate "problem" services such as street lighting and small service/comms cables',
  'Understand the effect of repositioning the Genny earth',
  'Conduct a utility survey starting with the Genny',
];

/* ===== Day 2 — theory & practical ===== */
const day2Theory: string[] = [
  'Review of the previous day',
  'Problems discussed and any additional training identified',
  'Knowledge-based assessment',
];
const day2Practical: string[] = [
  'An additional practical exercise — performing an electromagnetic utility survey of a different area, with additional training if needed',
  'Corrective action taken where needed',
  'Individual practical assessments completed in line with the QCF Level 2 requirements and Sygma\'s additional content',
];

const requirements = [
  'STATS plans (buried service drawings) appropriate to the site MUST be available for the practical work. If none exist, Sygma can supply them for an agreed cost before the course is booked.',
  'Each operative needs the cable location equipment they are being trained on. Sygma carry a stock of equipment but cannot guarantee it is the same model delegates use; Sygma can supply it for an agreed cost before booking.',
  'A meeting/conference room suitable for all delegates and the trainer (up to 8 delegates), with appropriate welfare facilities.',
  'Operatives MUST have appropriate PPE to comply with national and company health and safety requirements.',
  'A suitable site with buried metallic utilities near to the meeting/conference room.',
];

const accred = ['ProQual', 'QCF Level 2', 'HSG47', 'PAS128'];

/* ===== Official ProQual qualification specification (Ofqual 601/1855/6) ===== */
const qualFacts: [string, string][] = [
  ['Full qualification title', 'ProQual Level 2 Award in Utility Avoidance and the Location of Buried Services in Construction'],
  ['Ofqual qualification number', '601/1855/6'],
  ['Level', 'Level 2'],
  ['Mandatory unit', 'L/505/7112 — Utility Location and Avoidance in Construction'],
  ['Guided learning hours', '10'],
  ['Total qualification time', '20'],
  ['Assessment', 'Pass or fail. Internally assessed and verified by centre staff, with external quality assurance by ProQual verifiers.'],
  ['Framework', 'Regulated Qualifications Framework (RQF)'],
  ['Awarding body', 'ProQual Awarding Body, regulated by Ofqual'],
];

type LO = { lo: string; ac: [string, string][] };
const learningOutcomes: LO[] = [
  {
    lo: 'Understand published guidance covering utility avoidance in the location of buried services in construction',
    ac: [
      ['1.1', 'Explain what is meant by a Safe System of Work'],
      ['1.2', 'Describe the difference between legislation and guidance'],
      ['1.3', 'Explain the reasons why excavations take place'],
      ['1.4', 'Describe the consequences of an underground service strike'],
    ],
  },
  {
    lo: 'Understand the importance of regulations related to the location of buried services in construction',
    ac: [
      ['2.1', 'Describe client responsibility in terms of buried services'],
      ['2.2', 'Describe the responsibility of construction designers in terms of buried services'],
      ['2.3', 'Describe how to identify when it is necessary to make alterations to a project due to the presence of buried services'],
    ],
  },
  {
    lo: 'Understand the advantages of obtaining accurate information related to the positioning of underground services',
    ac: [
      ['3.1', 'Identify different types of drawings used in services location'],
      ['3.2', 'Describe types of inaccuracies that may be found in drawings'],
      ['3.3', 'Explain how the data and detail on drawings may have limitations'],
      ['3.4', 'Describe how regional differences may exist on drawings'],
    ],
  },
  {
    lo: 'Understand the requirements for the maintenance of underground service location equipment',
    ac: [
      ['4.1', 'Describe the calibration requirements of the equipment'],
      ['4.2', 'Describe the reasons for the correct storage and carriage of equipment including ancillaries'],
      ['4.3', 'Demonstrate equipment functionality including ancillaries'],
      ['4.4', 'Demonstrate the use of control measures for faulty equipment including ancillaries'],
    ],
  },
  {
    lo: 'Be able to recognise electro-magnetic fields and their relationship to underground service location',
    ac: [
      ['5.1', 'Demonstrate how to apply active signals to services'],
      ['5.2', 'Describe the use of passive signals in service location'],
      ['5.3', 'Describe how service depth is obtained when using electro-magnetic location methods'],
      ['5.4', 'Demonstrate how to accurately position services when using service location equipment'],
      ['5.5', 'Describe the limitations of electro-magnetic location in areas of heavy service congestion'],
      ['5.6', 'Describe the effects of metallic structures on electro-magnetic service location'],
      ['5.7', 'Describe the types of services, including construction materials, that can be located using electro-magnetic location'],
    ],
  },
  {
    lo: 'Be able to close out a site',
    ac: [
      ['6.1', 'Demonstrate final site sweeping procedures'],
      ['6.2', 'Describe site surface marking standards'],
      ['6.3', 'Explain site handover requirements'],
    ],
  },
];

const contents = [
  { id: 'overview', label: 'Overview' },
  { id: 'day1', label: 'Day 1' },
  { id: 'day2', label: 'Day 2' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'assessment', label: 'Assessment' },
  { id: 'qualification', label: 'The qualification' },
];

/* Agenda-style stacked topic rows (title + description). */
function TopicRows({ rows }: { rows: Row[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 print-cols-2">
      {rows.map((it) => (
        <div key={it.t} className="rounded-xl border border-border bg-card px-6 py-4 hover:border-accent/40 hover:shadow-sm transition-all pb-keep">
          <div className="flex items-start gap-3">
            <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-accent" />
            <div>
              <p className="font-bold text-foreground leading-snug">{it.t}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Plain activity list (practical steps). */
function ActivityRows({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-2.5 print-cols-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 rounded-xl border border-border bg-card px-6 py-3.5 text-foreground/80 leading-relaxed pb-keep">
          <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[15px]">{it}</span>
        </li>
      ))}
    </ul>
  );
}

function DayBanner({ day, title, blurb, img, alt }: { day: string; title: string; blurb: string; img: string; alt: string }) {
  return (
    <div className="grid md:grid-cols-12 gap-10 items-center mb-12">
      <div className="md:col-span-7">
        <div className="inline-flex items-center gap-3 rounded-md border border-accent/50 bg-accent/10 px-4 py-2">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-accent">{day}</span>
          <span className="h-3.5 w-px bg-accent/40" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">ProQual Level 2 Award</span>
        </div>
        <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.0]">{title}</h2>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">{blurb}</p>
      </div>
      <div className="md:col-span-5 imgbox">
        <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3] relative">
          <FallbackImage src={img} alt={alt} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="agenda-doc">
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'ProQual Level 2 Award in Utility Avoidance — Advanced Utility Location Training', description: 'Two-day advanced utility location and avoidance training leading to the regulated ProQual (QCF) Level 2 Award in Utility Avoidance. Classroom theory, a live locating practical, and knowledge plus practical assessment.', url: '/agendas/proqual-level-2-award', credential: 'ProQual Level 2 Award in Utility Avoidance', duration: '2 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Course Agendas', to: '/agendas' }, { label: 'ProQual Level 2 Award' }]) }} />

      {/* ============ HERO ============ */}
      <section className="relative bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 imgbox">
          <FallbackImage src="cat-56" alt="Sygma trainer and delegates on ProQual Level 2 utility location training" fill priority sizes="100vw" className="object-cover opacity-[0.65]" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/25" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative container mx-auto px-6 md:px-8 max-w-6xl py-8 md:py-12 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8 print:hidden" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/agendas" className="hover:text-white">Course Agendas</Link><span>/</span>
            <span className="text-white/80">ProQual Level 2 Award</span>
          </nav>
          <div className="inline-flex items-center gap-3 rounded-md border border-accent/50 bg-accent/10 px-4 py-2">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-accent">Course Agenda</span>
            <span className="h-3.5 w-px bg-accent/40" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">Two-day course outline · in full</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-[1.0] tracking-tight max-w-4xl">ProQual Level 2 Award <span className="text-accent">in Utility Avoidance</span></h1>
          <p className="hero-strapline mt-4 text-xl md:text-3xl font-bold text-white tracking-tight">Advanced utility location <span className="text-accent">·</span> a nationally recognised qualification</p>
          <div className="mt-5">
            <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-2.5">This agenda covers</p>
            <div className="flex flex-wrap gap-2">
              {['ProQual Level 2', 'QCF Level 2', 'Utility Avoidance', 'Genny and CAT', 'HSG47', 'PAS128'].map((c) => (
                <span key={c} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-bold text-white/85">{c}</span>
              ))}
            </div>
          </div>
          <p className="mt-5 text-base text-white/70 max-w-2xl leading-relaxed print:hidden">Advanced utility location training leading to the nationally recognised, regulated ProQual (QCF) Level 2 Award in Utility Avoidance. Sygma include additional advanced content in both the theory and the practical that meets and exceeds the requirements of the qualification. The complete two-day agenda is set out below.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
            <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent text-white font-bold text-sm hover:bg-accent/90 transition-colors">Enquire about this course →</Link>
            <PrintButton label="Save as PDF" />
          </div>
        </div>
        <div className="relative border-t border-white/10 bg-white/[0.03] backdrop-blur-sm">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 print-cols-4">
            {spec.map((s) => (
              <div key={s.k} className="spec-cell py-5 md:py-6 px-4 first:pl-0">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{s.k}</p>
                <p className="spec-val text-xl md:text-2xl font-black text-white mt-1">{s.v}</p>
                <p className="text-xs text-accent mt-0.5">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccreditationStrip />

      {/* ============ STICKY CONTENTS ============ */}
      <nav className="sticky top-[88px] md:top-[100px] z-30 bg-background/90 backdrop-blur border-b border-border print:hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl flex gap-6 overflow-x-auto text-sm font-bold text-muted-foreground">
          {contents.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="py-3.5 whitespace-nowrap border-b-2 border-transparent hover:text-foreground hover:border-accent transition-colors">{c.label}</a>
          ))}
        </div>
      </nav>

      {/* ============ OVERVIEW BANNER: qualification + objectives + certification ============ */}
      <section id="overview" className="container mx-auto px-6 md:px-8 max-w-6xl py-9 md:py-11 scroll-mt-24">
        <div className="rounded-2xl border border-border bg-card overflow-hidden pb-keep">
          <div className="grid md:grid-cols-12">
            {/* left: qualification + objectives */}
            <div className="md:col-span-8 p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
              <Eyebrow>The qualification</Eyebrow>
              <h2 className="mt-2 text-xl md:text-2xl font-black tracking-tight text-foreground leading-snug">ProQual Level 2 Award in Utility Avoidance</h2>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">A nationally recognised, regulated QCF Level 2 qualification. Sygma include additional advanced content in both the theory and the practical that meets and exceeds the requirements of the award.</p>
              <p className="mt-5 text-[11px] font-black uppercase tracking-widest text-muted-foreground">Course objectives</p>
              <ul className="mt-3 grid sm:grid-cols-2 gap-x-8 gap-y-2 print-cols-2">
                {objectives.map((o, i) => (
                  <li key={i} className="flex gap-2.5 text-foreground/80 leading-snug">
                    <span className="shrink-0 mt-0.5 text-accent font-black">✓</span>
                    <span className="text-[13.5px]">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* right: certification */}
            <div className="md:col-span-4 p-6 md:p-8 bg-muted/40">
              <div className="flex items-center gap-3.5">
                <div className="rounded-lg bg-white p-2.5 shrink-0 border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/accreditations/proqual.png" alt="ProQual accredited centre" className="h-12 w-auto" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent">Certification</p>
                  <p className="text-sm font-black text-foreground leading-tight mt-0.5">Single regulated route</p>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-black text-accent">£35</span>
                <span className="text-xs font-bold text-muted-foreground">per person</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">The ProQual registration and certification fee, per person. Separate from and on top of the course fee, which is quoted on your numbers and delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DAY ONE ============ */}
      <section id="day1" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16 scroll-mt-24">
        <DayBanner
          day="Day one"
          title="Classroom & practical"
          blurb="A full classroom grounding in the law, the networks, the plans and the theory of detection, then out on the ground for a full locating practical with a strong Genny-first emphasis."
          img="cat-37"
          alt="Classroom session on Sygma ProQual Level 2 utility location training"
        />

        <div className="mb-8">
          <Eyebrow>Day one · in the classroom</Eyebrow>
          <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-foreground">Classroom</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">The why behind the kit — the legislation and responsibilities, how utility networks are built, reading the plans, and the physics of detection.</p>
        </div>
        <TopicRows rows={day1Classroom} />

        <div className="mt-14 mb-8 max-w-2xl">
          <Eyebrow>Day one · on the ground</Eyebrow>
          <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-foreground">Practical</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">Everything from the classroom, put to work on a real survey — leading with the Genny and proving the kit across all its modes.</p>
        </div>
        <ActivityRows items={day1Practical} />
      </section>

      {/* ============ DAY TWO ============ */}
      <section id="day2" className="bg-muted/40 border-y border-border py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <DayBanner
            day="Day two"
            title="Survey & assessment"
            blurb="A review of day one, a further electromagnetic survey on different ground, and the individual knowledge-based and practical assessments that lead to the qualification."
            img="cat-50"
            alt="Delegate carrying out an assessed utility survey on day two"
          />

          <div className="mb-8">
            <Eyebrow>Day two · classroom</Eyebrow>
            <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-foreground">Review & knowledge assessment</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">Consolidate day one, resolve any problems, then sit the knowledge-based assessment.</p>
          </div>
          <ActivityRows items={day2Theory} />

          <div className="mt-14 mb-8 max-w-2xl">
            <Eyebrow>Day two · practical</Eyebrow>
            <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-foreground">Further survey & practical assessment</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">A fresh survey on different ground, with any final training, then the individual practical assessment.</p>
          </div>
          <ActivityRows items={day2Practical} />
        </div>
      </section>

      {/* ============ REQUIREMENTS ============ */}
      <section id="requirements" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-14 scroll-mt-24">
        <Eyebrow>On the days</Eyebrow>
        <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-foreground">What the two days need</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">Sygma bring the trainer and the expertise. To run a full, properly-assessed two days, the host provides:</p>
        <ul className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-2 print-cols-2">
          {requirements.map((r, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed border-b border-border pb-2.5">
              <span className="shrink-0 mt-0.5 text-accent font-black">✓</span>
              <span className="text-[15px]">{r}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4">
          <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-black">i</span>
          <p className="text-sm text-foreground/85 leading-relaxed"><span className="font-bold text-foreground">Course timings.</span> Timings remain fluid, but the course runs over two days with a suggested start of 09:00 and finish around 15:00, with appropriate breaks.</p>
        </div>
      </section>

      {/* ============ ASSESSMENT + ACCREDITATION ============ */}
      <section id="assessment" className="bg-foreground text-white py-12 md:py-14 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl grid md:grid-cols-2 gap-12 print-cols-2">
          <div>
            <Eyebrow>Assessment</Eyebrow>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Knowledge, then practical</h2>
            <p className="mt-4 text-white/70 leading-relaxed">Delegates sit a knowledge-based (written) assessment in the classroom and an individual practical assessment on the ground, both completed in line with the QCF Level 2 requirements and Sygma&apos;s additional content. Passing both leads to the ProQual Level 2 Award. Delegates with dyslexia or reading difficulties can be supported through the assessment.</p>
          </div>
          <div>
            <Eyebrow>Accreditation &amp; standards</Eyebrow>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Regulated ProQual (QCF) Level 2</h2>
            <p className="mt-3 text-white/70 leading-relaxed text-sm">A regulated qualification in utility location and avoidance, built on HSG47 and PAS128, delivered with additional advanced content that exceeds the standard:</p>
            <div className="chip-group mt-5 flex flex-wrap gap-2.5">
              {accred.map((a) => (
                <span key={a} className="font-mono text-xs font-bold text-white/90 bg-white/[0.06] border border-white/15 rounded px-3 py-1.5">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ OFFICIAL QUALIFICATION SPECIFICATION ============ */}
      <section id="qualification" className="bg-muted/40 border-y border-border py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="max-w-2xl mb-10">
            <Eyebrow>The regulated qualification, in full</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">Official qualification specification</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">The formal ProQual specification behind the award — the qualification profile, who it is for, and the exact learning outcomes and assessment criteria every candidate is assessed against.</p>
          </div>

          {/* Qualification profile */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden mb-6 pb-keep">
            <dl className="divide-y divide-border">
              {qualFacts.map(([k, v]) => (
                <div key={k} className="grid md:grid-cols-3 gap-1 md:gap-6 px-6 py-3.5">
                  <dt className="text-[11px] font-black uppercase tracking-widest text-muted-foreground md:pt-0.5">{k}</dt>
                  <dd className="md:col-span-2 text-[15px] text-foreground/85 leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Who it's for + entry requirements */}
          <div className="grid md:grid-cols-2 gap-5 mb-12 print-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 pb-keep">
              <p className="text-[10px] font-black uppercase tracking-widest text-accent">Who it is for</p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">Aimed at site managers, supervisors and excavation operatives, to give them an understanding of how to avoid danger from underground services. It is also appropriate for site operatives responsible for clearing an area prior to and during an excavation.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 pb-keep">
              <p className="text-[10px] font-black uppercase tracking-widest text-accent">Entry requirements</p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">There are no formal entry requirements. Centres carry out an initial assessment of each candidate&apos;s skills and knowledge to identify any gaps and help plan the assessment.</p>
            </div>
          </div>

          {/* Learning outcomes & assessment criteria */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">Learning outcomes &amp; assessment criteria</h3>
            <p className="mt-2 text-sm font-bold text-muted-foreground">Unit L/505/7112 — Utility Location and Avoidance in Construction</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-3xl">Candidates must produce valid, authentic and sufficient evidence against every criterion below. One piece of evidence may satisfy more than one learning outcome or criterion.</p>
          </div>
          <div className="space-y-4">
            {learningOutcomes.map((lo, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 md:p-7 pb-keep">
                <div className="flex items-start gap-4 md:gap-5">
                  <span className="text-xl md:text-2xl font-black text-accent tabular-nums shrink-0 leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Learning outcome {i + 1} — the learner will</p>
                    <p className="mt-1 font-black text-foreground leading-snug">{lo.lo}</p>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2.5 print-cols-2">
                      {lo.ac.map(([code, text]) => (
                        <li key={code} className="flex gap-2.5 text-[13.5px] text-foreground/75 leading-snug">
                          <span className="font-mono text-xs font-black text-accent shrink-0 tabular-nums">{code}</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Evidence + certification */}
          <div className="grid md:grid-cols-2 gap-5 mt-8 print-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 pb-keep">
              <p className="text-[10px] font-black uppercase tracking-widest text-accent">Evidence &amp; assessment</p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">Candidates produce evidence demonstrating all the learning outcomes and assessment criteria. Evidence can include assignments, projects and reports; worksheets; a portfolio of evidence; records of oral and/or written questioning; and candidate test papers.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 pb-keep">
              <p className="text-[10px] font-black uppercase tracking-widest text-accent">Certification</p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">On success, candidates receive a certificate listing the unit achieved, and a certificate giving the full qualification title: ProQual Level 2 Award in Utility Avoidance and the Location of Buried Services in Construction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NEXT STEP ============ */}
      <section className="bg-foreground text-white py-12 md:py-14 print:hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Eyebrow>Next step</Eyebrow>
            <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Arrange this course or check dates</h2>
            <p className="mt-2 text-white/70 max-w-xl text-sm leading-relaxed">On-site UK-wide or at our Wigan centre. Send us your numbers and location and we&apos;ll come back with dates and a price.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent text-white font-bold hover:bg-accent/90 transition-colors">Enquire &rarr;</Link>
            <PrintButton label="Save as PDF" />
          </div>
        </div>
      </section>
    </div>
  );
}
