import Link from 'next/link';
import FallbackImage from '@/components/FallbackImage';
import PrintButton from '@/components/PrintButton';
import { courseSchema, breadcrumbSchema } from '@/lib/schema';
import { Eyebrow, PRINT_CSS } from '@/components/agendaShared';
import AccreditationStrip from '@/components/AccreditationStrip';

/* Shared body for Sygma course-agenda pages. The two routes (HSG47-led and
   EUS Cat 1-led) render this with a different hero headline/strapline only —
   all the agenda content below is identical, so it lives in one place. */

const covers = ['Genny and CAT', 'Cable Avoidance', 'HSG47', 'EUS Cat 1', 'Advanced CAT1'];

const spec = [
  { k: 'Duration', v: 'One day', s: '08:00 – ~15:00' },
  { k: 'Group size', v: 'Max 8', s: 'Per trainer, per day' },
  { k: 'Delivery', v: 'On-site UK-wide', s: 'or our Wigan centre' },
  { k: 'Assessment', v: '80% pass', s: 'Written + practical' },
];

const cert = [
  { name: 'Sygma In-House', body: 'Sygma certificate', cost: 'Included', unit: 'no certificate fee', note: 'Our own certificate of competence, issued on the day.' },
  { name: 'EUSR Cat 1', body: 'EUSR registration', cost: '+£34', unit: 'per person', note: 'Nationally recognised EUSR registration card.' },
  { name: 'ProQual Level 2', body: 'Regulated award', cost: '+£35', unit: 'per person', note: 'ProQual Level 2 Award — a regulated qualification.' },
];

type ThItem = { t: string; d: string };
const theoryGroups: { theme: string; items: ThItem[] }[] = [
  {
    theme: 'Legislation, safety & responsibility',
    items: [
      { t: 'Why we locate before we dig', d: 'The reasons for using buried pipe & cable locators, and the health, safety and financial consequences when it goes wrong — with real "getting it wrong" examples demonstrated and discussed.' },
      { t: 'HSG47, legislation & company policy', d: 'How to comply with HSG47 (Avoiding Danger from Underground Services), the other national legislation that applies, and the company policy documentation that sits around it.' },
      { t: 'Understanding a permit to dig', d: 'What a permit to dig is for, what it does and does not authorise, and where it sits within a safe system of work.' },
    ],
  },
  {
    theme: 'Plans & drawings',
    items: [
      { t: 'Reading Buried Service Plans (STATS)', d: 'Interpreting the different types of utility service plan, including their keys and symbols — and what they do, and don\'t, tell you about the ground beneath your feet.' },
      { t: 'PAS128 drawings & surveys', d: 'How to read PAS128 drawings, and the important difference between a PAS128 survey and a Utility STATS plan.' },
    ],
  },
  {
    theme: 'The science of detection',
    items: [
      { t: 'Electromagnetic theory', d: 'How pipe & cable locators actually work — the underlying theory, the real-world limitations, and the practical tips and tricks that only come with experience.' },
      { t: 'Myth busting', d: 'A dedicated session on what the equipment genuinely can and cannot locate, so delegates leave with realistic expectations of the kit rather than false confidence.' },
    ],
  },
  {
    theme: 'Recorded data (optional)',
    items: [
      { t: 'Data logging & C.A.T. Manager', d: 'Using C.A.T. Manager software to download and analyse recorded locator data, so usage can be reviewed and evidenced — C.A.T.4 specific.' },
    ],
  },
];

type Module = { no: string; title: string; tag: string; blurb: string; img: string; items: string[] };
const modules: Module[] = [
  {
    no: '01', title: 'Pre-survey', tag: 'Plan before you scan', img: 'cat-15',
    blurb: 'Before a single sweep, delegates learn to read the ground from the plans and prove the kit is fit to use.',
    items: [
      'Read utility plans from all providers, including keys and symbols',
      'Complete a visual survey alongside the plans, spotting surface indications of services',
      'Pre-use equipment checks — function check and in-service date check',
      'Understand the limitations of electromagnetic locators',
      'Plan the survey using the Genny and CAT based on the site',
      'Understand a permit to dig',
    ],
  },
  {
    no: '02', title: 'Transmitter (Genny) applications', tag: 'Genny first', img: 'cat-09',
    blurb: 'The heart of the course. Every way to apply a signal — and how to confirm it has actually taken.',
    items: [
      'Direct connection to a known utility; correct earthing; confirm the connection and signal',
      'Signal to a street-light cable via direct connection, correct technique and distance',
      'Signal to a domestic LV service at a property or building',
      'High-frequency signal using a capacitance technique',
      'Signal applied using the signal clamp, correct technique and distance',
      'Induced signal to a known target, correct technique and distance',
      'Blind induction sweep in two directions across a site',
      'Null out a buried utility',
      'Check for airborne signal in all inductive applications',
    ],
  },
  {
    no: '03', title: 'Locating — pinpointing & tracing', tag: 'Find it, prove it', img: 'cat-50',
    blurb: 'Turning a signal into a marked, traced, depth-checked line on the ground.',
    items: [
      'Control sensitivity to locate then pinpoint the utility',
      'Determine direction, trace using the correct technique and mark its position',
      'Identify sudden signal loss and explain why it can occur',
      'Locate a joint — T-connection / bend',
      'Recognise being too close to the transmitter; correct erratic sensitivity',
      'Depth estimates at the correct distances; know when depth is unreliable; check it two ways',
    ],
  },
  {
    no: '04', title: 'General technique & strategy', tag: 'Work the whole site', img: 'cat-42',
    blurb: 'The judgement that separates a competent operative from a button-pusher.',
    items: [
      'Use the plans to apply the transmitter signal in the best place throughout the survey',
      'Limitations of locating HV cables, and inducing a signal to find them',
      'Transmitter first — exhaust all connection options before induction, all active before passive',
      'Dual-frequency transmitters — the benefits of both frequencies',
      'Limitations of induction (the signal is not "selective"); when to run a blind sweep',
      'Continuously scan as the excavation progresses, and why',
      'Strike Alert — uses and how to disable',
    ],
  },
  {
    no: '05', title: 'Passive (Power & Radio)', tag: 'The final sweep', img: 'cat-70',
    blurb: 'Catching what an applied signal can\'t — power and radio passive detection, done correctly.',
    items: [
      'Power survey using the sensitivity control appropriately and the correct search technique',
      'Radio survey using the sensitivity control appropriately and the correct search technique',
    ],
  },
];

const accred = ['EUSMUNC06', 'EUSEPUS044', 'HSG47', 'HSG150'];

const requirements = [
  'STATS plans (buried service drawings) for the practical site — Sygma can supply for an agreed cost',
  'Delegates ideally bring their own kit; Sygma bring enough Genny4 & C.A.T.4+ for a standard course (non-C.A.T.4+ kit: 1 locator per 3 people)',
  'On-site parking suitable for a transit-sized van',
  'A room that seats all delegates + trainer, with welfare facilities and a wall/screen for a projector',
  'Enough desk space per delegate (notes + written exam)',
  'Appropriate PPE per national, company and H&S requirements',
  'A practical area with numerous buried metallic utilities nearby (one cable to a cabin is not enough)',
  'Host risk assessment of the site and training room; brief the trainer on any risks',
  'Government photographic ID per delegate (driving licence, passport or residence permit)',
];

const contents = [
  { id: 'certificates', label: 'Certificates' },
  { id: 'theory', label: 'Theory' },
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

export default function CourseAgendaBody({ h1, strapline, schemaName, schemaUrl, breadcrumbLabel }: CourseAgendaHero) {
  return (
    <div className="agenda-doc">
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: schemaName, description: 'One-day utility location and avoidance training to HSG47, using the Genny and CAT. Theory, five practical disciplines and assessment, with in-house, EUSR Cat 1 or ProQual Level 2 certificate options.', url: schemaUrl, credential: 'EUS Cat 1 / Sygma / ProQual Level 2', duration: '1 day', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Course Agendas', to: '/agendas' }, { label: breadcrumbLabel }]) }} />

      {/* ============ HERO ============ */}
      <section className="relative bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 imgbox">
          <FallbackImage src="cat-06-hsg47-training" alt="Sygma delegates locating buried services with the Genny and CAT on a training day" fill priority sizes="100vw" className="object-cover object-[center_68%]" />
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
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">One-day course outline</span>
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
          <p className="mt-5 text-base text-white/70 max-w-2xl leading-relaxed print:hidden">The full agenda for our standard one-day course — what we cover in the classroom and on the ground, how every delegate is assessed, and your certificate options. Same course, whichever of the names above you know it by.</p>
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

      {/* ============ CERTIFICATES ============ */}
      <section id="certificates" className="bg-foreground text-white py-12 md:py-14 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="mb-6">
            <Eyebrow>Certificate options</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">One course, your choice of badge</h2>
            <p className="mt-3 text-white/70 max-w-2xl text-sm leading-relaxed">The content and assessment are identical whichever route you choose. Pick the certificate your scheme or client requires.</p>
          </div>
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/[0.08] px-5 py-4">
            <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-black">!</span>
            <p className="text-sm text-white/85 leading-relaxed"><span className="font-bold text-white">These are certificate fees, not the course price.</span> They are charged per person, <span className="font-bold text-white">on top of the course fee</span>. The course itself is quoted separately, based on your numbers and whether we deliver on-site or you take open-course seats.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 print-cols-3">
            {cert.map((c) => (
              <div key={c.name} className="cert-card group relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:border-accent/50 transition-colors pb-keep">
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">{c.body}</p>
                <p className="mt-3 text-xl font-black">{c.name}</p>
                <p className="mt-5 text-[10px] font-black uppercase tracking-widest text-white/40">Certificate fee</p>
                <p className="mt-1 text-3xl font-black text-accent">{c.cost} <span className="text-sm font-bold text-white/50">{c.unit}</span></p>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ USP — above the minimum standard ============ */}
      <section className="container mx-auto px-6 md:px-8 max-w-6xl pt-14 md:pt-16">
        <div className="max-w-3xl border-l-2 border-accent pl-6 md:pl-8">
          <Eyebrow>Above the minimum standard</Eyebrow>
          <p className="mt-4 text-2xl md:text-3xl font-black text-foreground leading-snug tracking-tight">EUS Cat 1 sets a minimum specification. Sygma deliver well above it.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">This is a practical-intensive course — over half the day is hands-on — assessed against a fuller set of competencies than the minimum standard requires, with a strong Genny-first emphasis throughout. The detail of how each session covers the standard is set out below.</p>
        </div>
      </section>

      {/* ============ THEORY ============ */}
      <section id="theory" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-10 items-center mb-10">
          <div className="md:col-span-7">
            <Eyebrow>In the classroom</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">Theory</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">The why behind the kit — the law, the plans, the physics of detection, and an honest account of what the equipment can and can&apos;t do. It is the grounding every delegate needs before a single sweep on the practical.</p>
          </div>
          <div className="md:col-span-5 imgbox">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3] relative">
              <FallbackImage src="cat-37" alt="Classroom theory session on Sygma EUS Cat 1 utility detection training" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
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
                <span className="text-xs font-bold text-muted-foreground">{g.items.length} {g.items.length === 1 ? 'topic' : 'topics'}</span>
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
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">Five disciplines, assessed individually</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">More than half the day is hands-on. Every delegate is trained and assessed on each of the following — strong emphasis throughout on Genny use and the Genny-and-CAT combination.</p>
          </div>
          <div className="space-y-6">
            {modules.map((m, idx) => (
              <div key={m.no} className="mod-card grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
                <div className={`imgbox md:col-span-4 relative min-h-[220px] ${idx % 2 ? 'md:order-2' : ''}`}>
                  <FallbackImage src={m.img} alt={`${m.title} — practical Genny and CAT training`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent md:bg-gradient-to-r" />
                  <div className="absolute top-5 left-5 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white/90 leading-none">{m.no}</span>
                  </div>
                </div>
                <div className="md:col-span-8 p-7 md:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/40 rounded-full px-3 py-1">{m.tag}</span>
                    <span className="text-xs font-bold text-muted-foreground">{m.items.length} competencies</span>
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
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">Sygma bring the equipment, the trainer and the expertise. To run a full, properly-assessed day, the site needs:</p>
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
            <div className="mt-4 flex items-end gap-4">
              <span className="text-7xl font-black text-accent leading-none">80%</span>
              <span className="text-sm text-white/70 pb-2 leading-snug">minimum pass mark on the written paper</span>
            </div>
            <p className="mt-6 text-white/70 leading-relaxed">A multiple-choice written assessment, plus a practical assessed individually by the Sygma trainer on the day. Delegates with dyslexia or reading difficulties may sit an oral assessment.</p>
          </div>
          <div>
            <Eyebrow>Accreditation &amp; standards</Eyebrow>
            <h2 className="mt-3 text-2xl font-black tracking-tight">EUS Category 1: Locate Utility Services (HSG47)</h2>
            <p className="mt-3 text-white/70 leading-relaxed text-sm">The industry-agreed standard for safely detecting utility services using recognised, approved methods. Derived from National Occupational Standards and HSE guidance:</p>
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
            <p className="mt-2 text-white/70 max-w-xl text-sm leading-relaxed">On-site UK-wide or open courses at our Wigan centre. Send us your numbers and location and we&apos;ll come back with dates and a price.</p>
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
