import type { Metadata } from 'next';
import Link from 'next/link';
import FallbackImage from '@/components/FallbackImage';
import PrintButton from '@/components/PrintButton';
import { courseSchema, breadcrumbSchema } from '@/lib/schema';
import { Eyebrow, PRINT_CSS } from '@/components/agendaShared';
import AccreditationStrip from '@/components/AccreditationStrip';

/* EUS Cat 1 & 2 Combined agenda — the full two-day outline as ONE standalone document.
   This page is deliberately self-contained: Day 1 carries the ENTIRE Cat 1 (locate) agenda
   and Day 2 carries the ENTIRE Cat 2 (safe dig) agenda, every topic and competency inline —
   no links out to the standalone pages, so it prints as a complete agenda on its own.
   Content is kept verbatim in step with CourseAgendaBody (Cat 1) and Cat2AgendaBody (Cat 2),
   and the objectives + requirements match the official CAT 1&2 Combined Agenda PDF.
   Cert model differs from the standalones: on the combined course EUSR registration for BOTH
   categories is included in the quote (per the live course page). */

const TITLE = 'EUS Cat 1 & 2 Combined — Course Agenda | Sygma';
const DESC = 'The complete two-day agenda for Sygma\'s combined EUS Category 1 (Locate Utility Services) and Category 2 (Implement Safe Digging) course. Every topic and competency for both days, in full.';
const URL = 'https://sygma-solutions.com/agendas/eus-cat1-cat2-combined';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  // Sendable agenda — deliberately kept out of search so it can't cannibalise the /courses pages that rank.
  robots: { index: false, follow: true },
  keywords: ['EUS Cat 1 and 2 combined training', 'EUSR Cat 1 & 2', 'combined cable avoidance and safe dig course', 'HSG47 training agenda'],
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-56', width: 1200, height: 630, alt: 'Sygma combined EUS Cat 1 and Cat 2 training' }],
    type: 'website',
  },
};

const spec = [
  { k: 'Duration', v: 'Two days', s: 'Day 1 locate · Day 2 safe dig' },
  { k: 'Group size', v: 'Max 8', s: 'Per trainer' },
  { k: 'Delivery', v: 'On-site UK-wide', s: 'or our Wigan centre' },
  { k: 'Qualifications', v: 'Two', s: 'EUS Cat 1 + EUS Cat 2' },
];

/* ===== Course objectives — from the official CAT 1&2 Combined Agenda PDF ===== */
const objectives = [
  'Improve awareness of how to avoid damaging buried utilities, and operate in a safe, efficient and more cost-effective manner',
  'Understand current legislation and HSG47',
  'Understand roles and responsibilities',
  'Understand the process of excavating around services',
  'Be able to plan, identify and detect buried services',
  'Be able to refer to current guidance and legislation',
  'Be able to use appropriate excavation tools',
  'Be able to segregate and store material',
  'Be able to safely expose and support services',
];

type ThItem = { t: string; d: string };
type Group = { theme: string; items: ThItem[] };
type Practical = { no: string; title: string; tag: string; blurb: string; img: string; items: string[] };

/* ============================================================
   DAY ONE — EUS Cat 1: Locate Utility Services
   (verbatim from the standalone Cat 1 agenda)
   ============================================================ */
const day1Theory: Group[] = [
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

const day1Practical: Practical[] = [
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

/* ============================================================
   DAY TWO — EUS Cat 2: Implement Safe Digging
   (verbatim from the standalone Cat 2 agenda)
   ============================================================ */
const day2Theory: Group[] = [
  {
    theme: 'Legislation, safety & responsibility',
    items: [
      { t: 'Legislation & guidance for buried services', d: 'HSG47 (Avoiding Danger from Underground Services), GS6, and the wider legislation that governs excavation work — and what it demands of every operative who breaks ground.' },
      { t: 'Risk assessments, procedures & permits to dig', d: 'Site-specific risk assessments, company procedures and the permit to dig — what each one is for and how they fit together into a safe system of work.' },
      { t: 'Occupational health risks', d: 'The health hazards that come with excavation work — Leptospirosis, asbestos, silica dust, noise and vibration — and how to manage them.' },
      { t: 'Excavation hazards', d: 'Loose ground, made-up ground, groundwater and stored materials — recognising the ground conditions that make a dig dangerous before anyone is in it.' },
    ],
  },
  {
    theme: 'Plans, checks & locating',
    items: [
      { t: 'Utility plans — interpretation & limitations', d: 'Reading buried service plans, understanding their keys and symbols, and knowing exactly what they do and don\'t tell you about the ground.' },
      { t: 'Visual checks', d: 'Reading the site itself — the surface indications, markers, signs and features that reveal services the plans may not show.' },
      { t: 'Detecting & marking underground services', d: 'Using locating equipment to confirm and mark service positions before any ground is broken.' },
    ],
  },
  {
    theme: 'Safe excavation practice',
    items: [
      { t: 'Excavating around services', d: 'The safe digging practices that HSG47 requires when working near buried services, from the first cut onwards.' },
      { t: 'Using hand tools', d: 'The right hand tools for the job, used with the correct technique — and how to care for and maintain them.' },
      { t: 'Using handheld power tools', d: 'Where handheld power tools can and cannot be used near buried services, and the safe technique when they are.' },
      { t: 'Horizontal excavation', d: 'Digging horizontally beneath a remaining surface to approach a service safely — the technique at the heart of the safe dig.' },
    ],
  },
  {
    theme: 'Exposing & protecting services',
    items: [
      { t: 'Exposing services', d: 'Approaching, exposing and confirming a buried service without damaging it — including what to do when what you find doesn\'t match the plans.' },
      { t: 'Trench support & excavation safety', d: 'Maintaining the safety of the excavation itself — support, safe entry and exit, and keeping the dig safe as it progresses.' },
      { t: 'Dangers of using services as handholds', d: 'Why exposed services must never be used as handholds or footholds, and how to protect and support them while work continues.' },
    ],
  },
];

const day2Practical: Practical[] = [
  {
    no: '01', title: 'Plan & prove', tag: 'Before a tool touches the ground', img: 'cat-56-eus-cat2-safe-dig',
    blurb: 'The dig starts on paper. Every candidate plans their excavation and proves where the services are before breaking ground.',
    items: [
      'Complete the risk assessment and permit to dig',
      'Use service plans and existing site information to establish the indicated routes of buried services',
      'Confirm service locations with locating equipment',
      'Mark positions and confirm the position and size of the excavation against the work instruction',
    ],
  },
  {
    no: '02', title: 'The safe dig', tag: 'Hand tools & power tools', img: 'dig-11-eus-cat2-safe-dig',
    blurb: 'The core of the assessment — a real excavation in real ground, using safe digging practice throughout.',
    items: [
      'Commence the safe dig operation with services marked',
      'Remove the surface, taking the position of services into consideration',
      'Excavate to 500mm using the appropriate tools and safe digging practice',
      'Dig horizontally below the remaining surface to expose the indicated service',
    ],
  },
  {
    no: '03', title: 'Expose, protect & reinstate', tag: 'Finish the job properly', img: 'dig-19-eus-cat2-safe-dig',
    blurb: 'Finding the service is not the end of the job — protecting it and leaving the site right is part of the assessment.',
    items: [
      'Expose the service and support it where necessary',
      'Monitor and maintain the position and condition of services throughout',
      'Complete the reinstatement',
      'Candidates are assessed during the entire excavation process',
    ],
  },
];

/* ===== Requirements — from the official CAT 1&2 Combined Agenda PDF, in full ===== */
const generalRequirements = [
  'STATS plans (buried service drawings) appropriate to the site for the practical work. If none exist, Sygma can supply them for an agreed cost before booking. If different sites are used, further plans are required.',
  'Ideally each delegate brings their own location equipment. Sygma bring enough C.A.T.4 and Genny4 to run a standard course; for non-C.A.T.4 kit, delegates bring their own at a minimum ratio of 1 locator per 3 people.',
  'Suitable on-site parking. Trainers usually drive transit-sized vans (high vehicles); tell us in advance if there are barrier or height restrictions.',
  'A meeting/conference room that comfortably seats all delegates and the trainer, with welfare facilities and a wall or screen to project onto. Our Wigan training centre can be used instead at no extra cost.',
  'Enough desk space per delegate for notes and the written exam.',
  'Appropriate PPE to comply with national and company health and safety requirements.',
  'A practical area with numerous buried metallic utilities, near the meeting room (one power cable to a cabin is not enough). Sygma can advise on suitability or arrange specific sites.',
  'The host is responsible for the risk assessment of the site and training room, and for briefing the trainer on any risks.',
  'Government photographic ID per delegate.',
  'A live dig area to conduct the safe dig element on day two.',
];
const cat2MinRequirements = [
  'A dig site available near the meeting/conference room',
  'A detectable underground utility',
  'An open area, 10m squared',
  'Ground suitable for a hand dig',
  'Full buried services plans',
  'Delegates must have FR PPE and insulated digging tools',
];
const cat2PrefRequirements = [
  'Dig area on the same site as the training',
  'Multiple detectable underground utilities',
  'An open area, at least 15m squared',
  'Ground suitable for a hand dig',
  'Full buried services plans',
  'Delegates must have FR PPE and insulated digging tools',
  'A method statement specific to excavating trial holes for the site, on arrival',
  'A risk assessment in place for a trial hole, on arrival',
  'A permit to dig in place for the trial hole, on arrival',
];

const accred = ['EUSMUNC06', 'EUSEPUS044', 'HSG47', 'HSG150', 'GS6', 'NRSWA', 'EUSR'];

const contents = [
  { id: 'objectives', label: 'Objectives' },
  { id: 'day1', label: 'Day 1 — Locate' },
  { id: 'day2', label: 'Day 2 — Safe dig' },
  { id: 'certificates', label: 'Qualifications' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'assessment', label: 'Assessment' },
];

/* Agenda-style: full-width stacked rows, never side-by-side cards. print-cols-2 keeps the PDF compact. */
function TheoryGroups({ groups }: { groups: Group[] }) {
  return (
    <div className="space-y-10">
      {groups.map((g, gi) => (
        <div key={g.theme}>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-black text-accent tabular-nums">{String(gi + 1).padStart(2, '0')}</span>
            <h4 className="text-sm md:text-base font-black uppercase tracking-[0.18em] text-foreground whitespace-nowrap">{g.theme}</h4>
            <span className="flex-1 h-px bg-border" />
            <span className="text-xs font-bold text-muted-foreground">{g.items.length} {g.items.length === 1 ? 'topic' : 'topics'}</span>
          </div>
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
  );
}

function PracticalCards({ modules, twoColBullets, unit }: { modules: Practical[]; twoColBullets: boolean; unit: string }) {
  return (
    <div className="space-y-6">
      {modules.map((m, idx) => (
        <div key={m.no} className="mod-card grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
          <div className={`imgbox md:col-span-4 relative min-h-[220px] ${idx % 2 ? 'md:order-2' : ''}`}>
            <FallbackImage src={m.img} alt={`${m.title} — Sygma training`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent md:bg-gradient-to-r" />
            <div className="absolute top-5 left-5 flex items-baseline gap-2">
              <span className="text-5xl font-black text-white/90 leading-none">{m.no}</span>
            </div>
          </div>
          <div className="md:col-span-8 p-7 md:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/40 rounded-full px-3 py-1">{m.tag}</span>
              <span className="text-xs font-bold text-muted-foreground">{m.items.length} {unit}</span>
            </div>
            <h4 className="mt-3 text-2xl font-black text-foreground tracking-tight">{m.title}</h4>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed max-w-2xl">{m.blurb}</p>
            <ul className={`mt-5 grid gap-x-7 gap-y-2.5 ${twoColBullets ? 'sm:grid-cols-2 print-cols-2' : 'grid-cols-1'}`}>
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
  );
}

/* Big Day 1 / Day 2 divider — the clearly-marked split down the middle of the agenda. */
function DayBanner({ day, cat, title, blurb, img, alt }: { day: string; cat: string; title: string; blurb: string; img: string; alt: string }) {
  return (
    <div className="grid md:grid-cols-12 gap-10 items-center mb-12">
      <div className="md:col-span-7">
        <div className="inline-flex items-center gap-3 rounded-md border border-accent/50 bg-accent/10 px-4 py-2">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-accent">{day}</span>
          <span className="h-3.5 w-px bg-accent/40" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{cat}</span>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'EUS Cat 1 & 2 Combined — Locate Utility Services + Implement Safe Digging', description: 'Two-day combined course: day one covers locating buried services with the Genny and CAT (EUS Cat 1); day two covers safe excavation with an assessed live dig (EUS Cat 2).', url: '/agendas/eus-cat1-cat2-combined', credential: 'EUS Cat 1 + EUS Cat 2', duration: '2 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Course Agendas', to: '/agendas' }, { label: 'EUS Cat 1 & 2 Combined' }]) }} />

      {/* ============ HERO ============ */}
      <section className="relative bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 imgbox">
          <FallbackImage src="cat-56" alt="Sygma trainer and delegates on combined Cat 1 and Cat 2 training" fill priority sizes="100vw" className="object-cover opacity-[0.65]" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/25" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative container mx-auto px-6 md:px-8 max-w-6xl py-8 md:py-12 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8 print:hidden" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/agendas" className="hover:text-white">Course Agendas</Link><span>/</span>
            <span className="text-white/80">EUS Cat 1 &amp; 2 Combined</span>
          </nav>
          <div className="inline-flex items-center gap-3 rounded-md border border-accent/50 bg-accent/10 px-4 py-2">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-accent">Course Agenda</span>
            <span className="h-3.5 w-px bg-accent/40" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">Two-day course outline · in full</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-[1.0] tracking-tight max-w-4xl">EUS Cat 1 &amp; 2 <span className="text-accent">Combined</span></h1>
          <p className="hero-strapline mt-4 text-xl md:text-3xl font-bold text-white tracking-tight">Locate <span className="text-accent">·</span> then excavate — two qualifications in two days</p>
          <div className="mt-5">
            <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-2.5">This agenda covers</p>
            <div className="flex flex-wrap gap-2">
              {['Genny and CAT', 'Cable Avoidance', 'HSG47', 'EUS Cat 1', 'EUS Cat 2', 'Safe Dig'].map((c) => (
                <span key={c} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-bold text-white/85">{c}</span>
              ))}
            </div>
          </div>
          <p className="mt-5 text-base text-white/70 max-w-2xl leading-relaxed print:hidden">The complete two-day agenda in one document. Day one is the full locate course with the Genny and CAT; day two is the full safe dig, ending in an assessed live excavation. Every topic and competency for both days is set out below — nothing is left off the page.</p>
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

      {/* ============ COURSE OBJECTIVES ============ */}
      <section id="objectives" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-14 scroll-mt-24">
        <div className="max-w-3xl border-l-2 border-accent pl-6 md:pl-8">
          <Eyebrow>Course objectives</Eyebrow>
          <p className="mt-4 text-2xl md:text-3xl font-black text-foreground leading-snug tracking-tight">By the end of the two days, every delegate can locate, then safely excavate.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">The combined course takes an operative from the theory of avoiding buried services all the way to a safely exposed, protected service on a live dig. Its objectives are to:</p>
        </div>
        <ul className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-2 print-cols-2">
          {objectives.map((o, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed border-b border-border pb-2.5">
              <span className="shrink-0 mt-0.5 text-accent font-black">✓</span>
              <span className="text-[15px]">{o}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ DAY ONE ============ */}
      <section id="day1" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16 scroll-mt-24">
        <DayBanner
          day="Day one"
          cat="EUS Category 1 · Locate Utility Services"
          title="Locate"
          blurb="The full one-day locate course. Classroom theory on the law, the plans and the physics of detection, then more than half the day hands-on across five practical disciplines with a strong Genny-first emphasis — each assessed individually."
          img="cat-55-eus-cat2-safe-dig"
          alt="Delegates locating and marking buried services on day one"
        />

        <div className="mb-8">
          <Eyebrow>Day one · in the classroom</Eyebrow>
          <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-foreground">Theory</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">The why behind the kit — the law, the plans, the physics of detection, and an honest account of what the equipment can and can&apos;t do. The grounding every delegate needs before a single sweep.</p>
        </div>
        <TheoryGroups groups={day1Theory} />

        <div className="mt-14 mb-8 max-w-2xl">
          <Eyebrow>Day one · on the ground</Eyebrow>
          <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-foreground">Five disciplines, assessed individually</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">More than half the day is hands-on. Every delegate is trained and assessed on each of the following — strong emphasis throughout on Genny use and the Genny-and-CAT combination.</p>
        </div>
        <PracticalCards modules={day1Practical} twoColBullets unit="competencies" />
      </section>

      {/* ============ DAY TWO ============ */}
      <section id="day2" className="bg-muted/40 border-y border-border py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <DayBanner
            day="Day two"
            cat="EUS Category 2 · Implement Safe Digging"
            title="Safe dig"
            blurb="From the marked line to the exposed service. Safe digging theory in the classroom — legislation, health risks, hazards and technique — then the assessed live dig, where every candidate excavates to and exposes a real buried service."
            img="dig-19-eus-cat2-safe-dig"
            alt="A safely exposed buried service on the day-two live dig"
          />

          <div className="mb-8">
            <Eyebrow>Day two · in the classroom</Eyebrow>
            <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-foreground">Theory</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">The law, the plans, the ground and the tools — everything a delegate needs to understand before the dig, taught with real strike examples and an honest account of what goes wrong when it&apos;s done badly.</p>
          </div>
          <TheoryGroups groups={day2Theory} />

          <div className="mt-14 mb-8 max-w-2xl">
            <Eyebrow>Day two · on the ground</Eyebrow>
            <h3 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-foreground">The assessed live dig</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">Every candidate plans and carries out a real excavation, exposing a real buried service — assessed by the trainer through the entire process, from permit to reinstatement.</p>
          </div>
          <PracticalCards modules={day2Practical} twoColBullets={false} unit="steps" />
        </div>
      </section>

      {/* ============ QUALIFICATIONS ============ */}
      <section id="certificates" className="bg-foreground text-white py-12 md:py-14 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl grid md:grid-cols-2 gap-10 items-center print-cols-2">
          <div>
            <Eyebrow>What delegates leave with</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">Two EUSR-registered qualifications</h2>
            <p className="mt-4 text-white/70 leading-relaxed text-sm max-w-xl">Successful completion of both days&apos; written and practical assessments leads to EUS Category 1 (Locate Utility Services) and EUS Category 2 (Implement Safe Digging) — both recorded on the EUSR database.</p>
          </div>
          <div className="cert-card rounded-2xl border border-white/10 bg-white/[0.04] p-7 pb-keep">
            <p className="text-[10px] font-black uppercase tracking-widest text-accent">EUSR registration</p>
            <p className="mt-4 text-2xl font-black">Included for both categories</p>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">On the combined course, EUSR registration, assessment and the EUSR card for both Category 1 and Category 2 are included in the quoted cost. Card validity: 5 years.</p>
          </div>
        </div>
      </section>

      {/* ============ REQUIREMENTS ============ */}
      <section id="requirements" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-14 scroll-mt-24">
        <Eyebrow>On the days</Eyebrow>
        <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-foreground">What the two days need</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">Sygma bring the trainer, the locating equipment and the expertise. To run a full, properly-assessed two days, the host provides:</p>
        <ul className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-2 print-cols-2">
          {generalRequirements.map((r, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed border-b border-border pb-2.5">
              <span className="shrink-0 mt-0.5 text-accent font-black">✓</span>
              <span className="text-[15px]">{r}</span>
            </li>
          ))}
        </ul>

        {/* Cat 2 dig-area requirements — minimum vs preferable, from the PDF */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 print-cols-2">
          <div className="rounded-2xl border border-accent/40 bg-accent/[0.04] p-7 pb-keep">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/40 rounded-full px-3 py-1">Day two dig area · minimum</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">The safe dig element cannot run unless the dig area meets these:</p>
            <ul className="mt-5 space-y-2.5">
              {cat2MinRequirements.map((r, i) => (
                <li key={i} className="flex gap-2.5 text-[14px] text-foreground/80 leading-snug">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 pb-keep">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">Day two dig area · preferable</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Better again, and what we would ask for wherever possible:</p>
            <ul className="mt-5 space-y-2.5">
              {cat2PrefRequirements.map((r, i) => (
                <li key={i} className="flex gap-2.5 text-[14px] text-foreground/80 leading-snug">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/[0.06] px-5 py-4">
          <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-black">!</span>
          <p className="text-sm text-foreground/85 leading-relaxed"><span className="font-bold text-foreground">The training will not take place unless the minimum requirements are met.</span> If a suitable dig area isn&apos;t available on site, talk to us early — we can advise on suitability or arrange a site.</p>
        </div>
      </section>

      {/* ============ ASSESSMENT + ACCREDITATION ============ */}
      <section id="assessment" className="bg-foreground text-white py-12 md:py-14 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl grid md:grid-cols-2 gap-12 print-cols-2">
          <div>
            <Eyebrow>Assessment</Eyebrow>
            <div className="mt-4 flex items-end gap-4">
              <span className="text-7xl font-black text-accent leading-none">80%</span>
              <span className="text-sm text-white/70 pb-2 leading-snug">minimum pass mark on the written papers</span>
            </div>
            <p className="mt-6 text-white/70 leading-relaxed">Each day carries a multiple-choice written assessment plus a practical assessed individually by the Sygma trainer — the locate practical on day one, and the live dig on day two, where candidates are assessed through the entire excavation process. Delegates with dyslexia or reading difficulties may sit an oral assessment.</p>
          </div>
          <div>
            <Eyebrow>Accreditation &amp; standards</Eyebrow>
            <h2 className="mt-3 text-2xl font-black tracking-tight">EUS Category 1 &amp; Category 2</h2>
            <p className="mt-3 text-white/70 leading-relaxed text-sm">Locate Utility Services and Implement Safe (Digging) Excavating Practices — the industry-agreed standards for safely detecting and excavating around buried services. Derived from National Occupational Standards and HSE guidance:</p>
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
