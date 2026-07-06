import Link from 'next/link';
import FallbackImage from '@/components/FallbackImage';
import PrintButton from '@/components/PrintButton';
import { courseSchema, breadcrumbSchema } from '@/lib/schema';
import { Eyebrow, PRINT_CSS } from '@/components/agendaShared';

/* Shared body for the 2-day Super User agenda pages (Coach + Damage
   Investigation). Same course, headlined differently — hero comes in as props. */

const covers = ['2 Day Super User Coach', 'Super User Damage Investigation', 'Super User Locator', 'Locator Coach'];

const spec = [
  { k: 'Duration', v: 'Two days', s: 'Classroom + practical' },
  { k: 'Group size', v: 'Max 8', s: 'Per trainer' },
  { k: 'Delivery', v: 'On-site UK-wide', s: 'or our Wigan centre' },
  { k: 'Prerequisite', v: 'EUS Cat 1', s: 'or equivalent (not Cat 2)' },
];

const cert = [
  { name: 'Sygma In-House', body: 'Sygma certificate', cost: 'Included', unit: 'no certificate fee', note: 'Our own Super User certificate of competence, issued on completion.' },
  { name: 'EUSR', body: 'EUSR registration', cost: '+£34', unit: 'per person', note: 'Nationally recognised EUSR registration card.' },
];

type ThItem = { t: string; d: string };
const theoryGroups: { theme: string; items: ThItem[] }[] = [
  {
    theme: 'Risk, legislation & safe digging',
    items: [
      { t: 'Underground service strikes — the risks & HSG47', d: 'The real risks of utility strikes and how the course content maps to HSG47, with company-specific examples of strikes and the lessons learned.' },
      { t: 'Permit to dig', d: 'How to complete and sign off a permit to dig, and where it sits in the company\'s safe system of work.' },
      { t: 'Company policy & safe-dig policy', d: 'How the techniques apply to the company\'s own policies and safe-dig procedures.' },
    ],
  },
  {
    theme: 'Plans & detection theory',
    items: [
      { t: 'Buried Service Plans (STATS)', d: 'Interpreting different plan types — including their inaccuracies and limitations — and using the plans to plan the correct detection technique.' },
      { t: 'Electromagnetic theory & myth-busting', d: 'How a pipe & cable locator works, the theory and limitations, tips & tricks, and an honest account of what the equipment can and cannot locate.' },
      { t: 'Controls & operation, Genny-first', d: 'Correct use of the locator and signal transmitter in all modes, with strong emphasis on transmitter (Genny) use — and how to promote the Genny-first message with site teams.' },
      { t: 'Signal interpretation & distortion', d: 'Interpreting the signal, locating joints and changes of direction/depth, and understanding signal distortion and its effect on location accuracy.' },
      { t: 'Transmitter techniques', d: 'Dual-frequency applications and capacitance for small/non-earthed cables; effective earthing and earth positioning; blind induction search and effective nulling; depth estimation.' },
      { t: 'Complex utility networks', d: 'Worked examples of complex networks and how to plan and perform the survey across them.' },
    ],
  },
  {
    theme: 'CAT data download & analysis',
    items: [
      { t: 'CAT Manager — getting the data', d: 'How to get the recorded data off the CAT and export it to CSV and KML files.' },
      { t: 'Analysis tools & reports', d: 'Importing data into the CAT Analysis tool and CAT Manager online, and creating reports from it.' },
      { t: 'Reading the data', d: 'Analysing raw data — usage patterns, and spotting good and bad practice in how the kit is being used on site.' },
    ],
  },
  {
    theme: 'Investigation & coaching',
    items: [
      { t: 'Utility strike investigation', d: 'How to conduct a utility-strike investigation and complete a USAG cable-strike form.' },
      { t: 'Coaching others', d: 'Coaching tips, assessment planning and structure — how to support and assess site operatives effectively.' },
    ],
  },
];

type Module = { no: string; title: string; tag: string; blurb: string; img: string; items: string[] };
const modules: Module[] = [
  {
    no: '01', title: 'Survey & location, all modes', tag: 'Genny first', img: 'cat-09',
    blurb: 'Advanced, confident use of the kit across a full utility survey — led with the Genny.',
    items: [
      'Use service plans + visual checks to establish routes before any work',
      'Correct use of the locator & transmitter in all modes; benefits of the combination & dual frequency',
      'Conduct a utility survey starting with the Genny',
      'Street-light locating; LV service & main tracing, including joints',
      'HV detection; communication cable location',
      'Induction — blind sweeps and nulling out',
      'Capacitance techniques; the effect of repositioning the Genny earth',
    ],
  },
  {
    no: '02', title: 'Assessment & coaching', tag: 'Coach & assess', img: 'cat-16',
    blurb: 'The Super User difference — proving you can locate in your own right, then coach and assess others.',
    items: [
      'Complete your own POW risk assessment before the practical',
      'Sygma Standard practical assessment — locating services in your own right',
      'Coach and assess each other, with Sygma supporting individually (ideally on working teams nearby)',
      'Problem scenarios found on site and resolved',
      'Coaching competency checks — practical',
      'Coaching tips, assessment planning and structure',
    ],
  },
];

const accred = ['HSG47', 'EUS Cat 1', 'USAG'];

const requirements = [
  'Each delegate must already hold EUS Cat 1 (or equivalent) — Cat 2 is not required',
  'STATS plans (buried service drawings) for the practical site — Sygma can supply for an agreed cost',
  'Ideally, access to working teams / live sites nearby for the coaching & assessment element',
  'Delegates ideally bring their own kit; Sygma bring enough Genny4 & C.A.T.4+ for a standard course (non-C.A.T.4+ kit: 1 locator per 3 people)',
  'On-site parking suitable for a transit-sized van',
  'A room that seats all delegates + trainer, with welfare facilities and a wall/screen for a projector (or our Wigan centre)',
  'Appropriate PPE per national, company and H&S requirements',
  'A practical area with numerous buried metallic utilities nearby',
  'Host risk assessment of the site and training room; brief the trainer on any risks',
  'Government photographic ID per delegate (driving licence, passport or residence permit)',
];

const contents = [
  { id: 'certificates', label: 'Certificates' },
  { id: 'classroom', label: 'Classroom' },
  { id: 'practical', label: 'Practical' },
  { id: 'requirements', label: 'On the day' },
  { id: 'assessment', label: 'Assessment' },
];

export type CourseAgendaHero = {
  h1: React.ReactNode;
  strapline: React.ReactNode;
  schemaName: string;
  schemaUrl: string;
  breadcrumbLabel: string;
};

export default function SuperUserAgendaBody({ h1, strapline, schemaName, schemaUrl, breadcrumbLabel }: CourseAgendaHero) {
  return (
    <div className="agenda-doc">
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: schemaName, description: 'Two-day Super User utility location & avoidance training, building on EUS Cat 1. Advanced location, CAT data analysis, on-site coaching and competency assessment, and utility-strike investigation. In-house or EUSR certificate.', url: schemaUrl, credential: 'Sygma Super User / EUSR', duration: '2 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Course Agendas', to: '/agendas' }, { label: breadcrumbLabel }]) }} />

      {/* ============ HERO ============ */}
      <section className="relative bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 imgbox">
          <FallbackImage src="cat-56" alt="Sygma Super User utility location training on a live site" fill priority sizes="100vw" className="object-cover opacity-[0.65]" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/25" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative container mx-auto px-6 md:px-8 max-w-6xl py-8 md:py-12 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8 print:hidden" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/agendas" className="hover:text-white">Course Agendas</Link><span>/</span>
            <span className="text-white/80">{breadcrumbLabel}</span>
          </nav>
          <div className="inline-flex items-center gap-3 rounded-md border border-accent/50 bg-accent/10 px-4 py-2">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-accent">Course Agenda</span>
            <span className="h-3.5 w-px bg-accent/40" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">Two-day course outline</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-[1.0] tracking-tight max-w-4xl">{h1}</h1>
          <p className="hero-strapline mt-4 text-xl md:text-3xl font-bold text-white tracking-tight">{strapline}</p>
          <div className="mt-5">
            <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-2.5">This agenda covers</p>
            <div className="flex flex-wrap gap-2">
              {covers.map((c) => (
                <span key={c} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-bold text-white/85">{c}</span>
              ))}
            </div>
          </div>
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

      {/* ============ STICKY CONTENTS ============ */}
      <nav className="sticky top-[88px] md:top-[100px] z-30 bg-background/90 backdrop-blur border-b border-border print:hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl flex gap-6 overflow-x-auto text-sm font-bold text-muted-foreground">
          {contents.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="py-3.5 whitespace-nowrap border-b-2 border-transparent hover:text-foreground hover:border-accent transition-colors">{c.label}</a>
          ))}
        </div>
      </nav>

      {/* ============ PREREQUISITE ============ */}
      <section className="container mx-auto px-6 md:px-8 max-w-6xl pt-10">
        <div className="flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/[0.06] px-5 py-4">
          <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-black">!</span>
          <p className="text-sm text-foreground leading-relaxed"><span className="font-bold">Prerequisite:</span> delegates must already hold <span className="font-bold">EUS Cat 1 (or equivalent)</span>. This is an advanced course that builds on Cat 1 — <span className="font-bold">Cat 2 is not required</span>.</p>
        </div>
      </section>

      {/* ============ CERTIFICATES ============ */}
      <section id="certificates" className="bg-foreground text-white py-12 md:py-14 scroll-mt-24 mt-10">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="mb-6">
            <Eyebrow>Certificate options</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">Your choice of certificate</h2>
            <p className="mt-3 text-white/70 max-w-2xl text-sm leading-relaxed">The course is identical whichever certificate you choose. Pick the one your scheme or client requires.</p>
          </div>
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/[0.08] px-5 py-4">
            <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-black">!</span>
            <p className="text-sm text-white/85 leading-relaxed"><span className="font-bold text-white">Certificate fees are separate from the course price.</span> The EUSR registration fee is charged per person, on top of the course fee. The course itself is quoted separately, based on your numbers and delivery.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 print-cols-2">
            {cert.map((c) => (
              <div key={c.name} className="cert-card group relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:border-accent/50 transition-colors pb-keep">
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">{c.body}</p>
                <p className="mt-3 text-xl font-black">{c.name}</p>
                <p className="mt-5 text-[10px] font-black uppercase tracking-widest text-white/40">Certificate</p>
                <p className="mt-1 text-3xl font-black text-accent">{c.cost} <span className="text-sm font-bold text-white/50">{c.unit}</span></p>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OBJECTIVE ============ */}
      <section className="container mx-auto px-6 md:px-8 max-w-6xl pt-14 md:pt-16">
        <div className="max-w-3xl border-l-2 border-accent pl-6 md:pl-8">
          <Eyebrow>What delegates leave able to do</Eyebrow>
          <p className="mt-4 text-2xl md:text-3xl font-black text-foreground leading-snug tracking-tight">Locate in their own right — then coach, assess and investigate.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">Over two flexible days of classroom and practical, delegates gain advanced Genny and CAT theory, become practically competent across all modes, learn to download and analyse CAT data, and develop the skills to support, coach and assess site operatives — and to investigate a utility strike and complete a USAG form.</p>
        </div>
      </section>

      {/* ============ CLASSROOM ============ */}
      <section id="classroom" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-10 items-center mb-10">
          <div className="md:col-span-7">
            <Eyebrow>In the classroom</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">Classroom</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">Advanced theory across the kit, the data and the legislation — plus the investigation and coaching knowledge that defines a Super User.</p>
          </div>
          <div className="md:col-span-5 imgbox">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3] relative">
              <FallbackImage src="cat-37" alt="Classroom session on Sygma Super User utility location training" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="space-y-10">
          {theoryGroups.map((g, gi) => (
            <div key={g.theme}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-black text-accent tabular-nums">{String(gi + 1).padStart(2, '0')}</span>
                <h3 className="text-sm md:text-base font-black uppercase tracking-[0.18em] text-foreground whitespace-nowrap">{g.theme}</h3>
                <span className="flex-1 h-px bg-border" />
                <span className="text-xs font-bold text-muted-foreground">{g.items.length} topics</span>
              </div>
              {/* Agenda-style: full-width stacked rows, never side-by-side cards. print-cols-2 keeps the PDF compact. */}
              <div className="grid grid-cols-1 gap-3 print-cols-2">
                {g.items.map((it) => (
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
            </div>
          ))}
        </div>
      </section>

      {/* ============ PRACTICAL ============ */}
      <section id="practical" className="bg-muted/40 border-y border-border py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="max-w-2xl mb-10">
            <Eyebrow>On the ground · the practical</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">Practical & coaching</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">A flexible mix of inside and outside time over the two days. Strong emphasis on the Genny throughout — and on proving competence both as an operator and as a coach.</p>
          </div>
          <div className="space-y-6">
            {modules.map((m, idx) => (
              <div key={m.no} className="mod-card grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
                <div className={`imgbox md:col-span-4 relative min-h-[220px] ${idx % 2 ? 'md:order-2' : ''}`}>
                  <FallbackImage src={m.img} alt={`${m.title} — Super User practical training`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent md:bg-gradient-to-r" />
                  <div className="absolute top-5 left-5 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white/90 leading-none">{m.no}</span>
                  </div>
                </div>
                <div className="md:col-span-8 p-7 md:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/40 rounded-full px-3 py-1">{m.tag}</span>
                    <span className="text-xs font-bold text-muted-foreground">{m.items.length} elements</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-black text-foreground tracking-tight">{m.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed max-w-2xl">{m.blurb}</p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-x-7 gap-y-2.5 print-cols-2">
                    {m.items.map((it, i) => (
                      <li key={i} className="flex gap-2.5 text-[13.5px] text-foreground/75 leading-snug">
                        <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REQUIREMENTS ============ */}
      <section id="requirements" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-14 scroll-mt-24">
        <Eyebrow>On the day</Eyebrow>
        <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-foreground">What we need from the host site</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">Sygma bring the equipment, the trainer and the expertise. To run a full two-day Super User course, the site needs:</p>
        <ul className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-2 print-cols-2">
          {requirements.map((r, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed border-b border-border pb-2.5">
              <span className="shrink-0 mt-0.5 text-accent font-black">✓</span>
              <span className="text-[15px]">{r}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ ASSESSMENT + ACCREDITATION ============ */}
      <section id="assessment" className="bg-foreground text-white py-12 md:py-14 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl grid md:grid-cols-2 gap-12 print-cols-2">
          <div>
            <Eyebrow>Assessment</Eyebrow>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Assessed continuously across the two days</h2>
            <p className="mt-3 text-white/70 leading-relaxed text-sm">Delegates complete several assessments: a knowledge-based paper; their own POW risk assessment before the practical; the Sygma Standard practical (locating services in their own right); a coaching-and-assessing-others assessment using the Sygma coaching sheet; and a permit to break ground (customer-specific where possible, otherwise the Sygma permit).</p>
          </div>
          <div>
            <Eyebrow>Accreditation &amp; standards</Eyebrow>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Sygma Super User, or EUSR-registered</h2>
            <p className="mt-3 text-white/70 leading-relaxed text-sm">Builds on EUS Cat 1, to HSG47 — covering advanced location, CAT data analysis, on-site coaching and competency assessment, and utility-strike investigation:</p>
            <div className="chip-group mt-5 flex flex-wrap gap-2.5">
              {accred.map((a) => (
                <span key={a} className="font-mono text-xs font-bold text-white/90 bg-white/[0.06] border border-white/15 rounded px-3 py-1.5">{a}</span>
              ))}
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
