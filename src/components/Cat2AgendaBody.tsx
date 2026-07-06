import Link from 'next/link';
import FallbackImage from '@/components/FallbackImage';
import PrintButton from '@/components/PrintButton';
import { courseSchema, breadcrumbSchema } from '@/lib/schema';
import { Eyebrow, PRINT_CSS } from '@/components/agendaShared';

/* Shared body for the Sygma Cat 2 (safe dig) course-agenda pages. Two routes render this —
   the EUS Cat 2 variant and the ProQual Cat 2 variant. The course content is identical;
   ALL qualification-specific wording (names, cert body, fees, prerequisite qual) comes in
   via the variant props so no EUS wording can leak onto the ProQual page or vice versa.
   NOTE: ProQual Cat 2 is NOT the ProQual Level 2 Award — never reference the Level 2 Award here. */

export type Cat2Variant = {
  /* e.g. "EUS Category 2" / "ProQual Cat 2" */
  qualShort: string;
  /* scheme line under Accreditation, e.g. "EUS Category 2: Implement Safe (Digging) Excavating Practices" */
  schemeLong: string;
  /* e.g. "EUSR registration" / "ProQual registration" */
  certBody: string;
  /* e.g. "£34" / "£35" */
  certFee: string;
  /* e.g. "EUSR Cat 2 registration card" / "ProQual Cat 2 certificate" */
  certGets: string;
  /* prerequisite qualification name, e.g. "EUS Cat 1" / "ProQual Cat 1" */
  prereqQual: string;
  covers: string[];
  accred: string[];
  h1: React.ReactNode;
  strapline: React.ReactNode;
  schemaName: string;
  schemaUrl: string;
  breadcrumbLabel: string;
};

const spec = [
  { k: 'Duration', v: 'One day', s: 'Theory + live dig practical' },
  { k: 'Group size', v: 'Max 8', s: 'Per trainer, per day' },
  { k: 'Delivery', v: 'On-site UK-wide', s: 'or our Wigan centre' },
  { k: 'Assessment', v: 'Written + practical', s: 'Assessed live dig' },
];

type ThItem = { t: string; d: string };
const theoryGroups: { theme: string; items: ThItem[] }[] = [
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

type DigPhase = { no: string; title: string; tag: string; blurb: string; img: string; items: string[] };
const digPhases: DigPhase[] = [
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

const requirements = (prereqQual: string) => [
  'A dig area with a detectable buried utility — see the delivery options page for what each delivery route needs',
  'A meeting/conference room with desk space for every delegate, a projector wall or screen, and welfare facilities',
  'On-site parking suitable for a transit-sized van',
  'STATS plans (buried service drawings) for the practical area — Sygma can supply plans for an agreed cost if none exist',
  'Appropriate PPE per national, company and H&S requirements',
  'Government photographic ID per delegate (driving licence, passport or residence permit)',
  `Delegates should ideally hold ${prereqQual} (or an equivalent locating qualification)`,
];

const contents = [
  { id: 'certificate', label: 'Certificate' },
  { id: 'theory', label: 'Theory' },
  { id: 'practical', label: 'The live dig' },
  { id: 'requirements', label: 'On the day' },
  { id: 'assessment', label: 'Assessment' },
];

export default function Cat2AgendaBody(v: Cat2Variant) {
  return (
    <div className="agenda-doc">
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: v.schemaName, description: `One-day safe digging (safe dig) training to HSG47. Classroom theory, an assessed live dig excavation exposing a real buried service, and a written paper — leading to ${v.qualShort}.`, url: v.schemaUrl, credential: v.qualShort, duration: '1 day', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Course Agendas', to: '/agendas' }, { label: v.breadcrumbLabel }]) }} />

      {/* ============ HERO ============ */}
      <section className="relative bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 imgbox">
          <FallbackImage src="cat-08-eus-cat2-safe-dig" alt="Sygma trainer and dig team on a live safe dig training site" fill priority sizes="100vw" className="object-cover opacity-[0.65]" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/25" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative container mx-auto px-6 md:px-8 max-w-6xl py-8 md:py-12 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8 print:hidden" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/agendas" className="hover:text-white">Course Agendas</Link><span>/</span>
            <span className="text-white/80">{v.breadcrumbLabel}</span>
          </nav>
          <div className="inline-flex items-center gap-3 rounded-md border border-accent/50 bg-accent/10 px-4 py-2">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-accent">Course Agenda</span>
            <span className="h-3.5 w-px bg-accent/40" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">One-day course outline</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-[1.0] tracking-tight max-w-4xl">{v.h1}</h1>
          <p className="hero-strapline mt-4 text-xl md:text-3xl font-bold text-white tracking-tight">{v.strapline}</p>
          <div className="mt-5">
            <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-2.5">This agenda covers</p>
            <div className="flex flex-wrap gap-2">
              {v.covers.map((c) => (
                <span key={c} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-bold text-white/85">{c}</span>
              ))}
            </div>
          </div>
          <p className="mt-5 text-base text-white/70 max-w-2xl leading-relaxed print:hidden">The full agenda for our one-day safe digging course — the classroom theory, the assessed live dig where every candidate exposes a real buried service, and the certificate it leads to.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
            <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent text-white font-bold text-sm hover:bg-accent/90 transition-colors">Enquire about this course →</Link>
            <Link href="/agendas/cat2-delivery-and-site-requirements" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-colors">Delivery options &amp; site requirements</Link>
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

      {/* ============ CERTIFICATE (single route — no options table) ============ */}
      <section id="certificate" className="bg-foreground text-white py-12 md:py-14 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl grid md:grid-cols-2 gap-10 items-center print-cols-2">
          <div>
            <Eyebrow>The certificate</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">{v.qualShort}</h2>
            <p className="mt-4 text-white/70 leading-relaxed text-sm max-w-xl">Successful completion of both the written paper and the assessed live dig leads to your {v.certGets}.</p>
          </div>
          <div className="cert-card rounded-2xl border border-white/10 bg-white/[0.04] p-7 pb-keep">
            <p className="text-[10px] font-black uppercase tracking-widest text-accent">{v.certBody}</p>
            <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-white/40">Certificate fee</p>
            <p className="mt-1 text-3xl font-black text-accent">{v.certFee} <span className="text-sm font-bold text-white/50">per person</span></p>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">Charged on top of the course fee. The course itself is quoted separately, based on your numbers and how it&apos;s delivered.</p>
          </div>
        </div>
      </section>

      {/* ============ FROM LOCATE TO EXCAVATE ============ */}
      <section className="container mx-auto px-6 md:px-8 max-w-6xl pt-14 md:pt-16">
        <div className="max-w-3xl border-l-2 border-accent pl-6 md:pl-8">
          <Eyebrow>From locate to excavate</Eyebrow>
          <p className="mt-4 text-2xl md:text-3xl font-black text-foreground leading-snug tracking-tight">Cat 1 finds the service. Cat 2 is what happens next.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">This course takes delegates from a marked line on the ground to a safely exposed, protected service — planning the dig, breaking ground with the right tools, digging to the service and supporting it, all assessed on a real excavation. Delegates should ideally already hold {v.prereqQual} (or equivalent).</p>
        </div>
      </section>

      {/* ============ THEORY ============ */}
      <section id="theory" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-10 items-center mb-10">
          <div className="md:col-span-7">
            <Eyebrow>In the classroom</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">Theory</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">The law, the plans, the ground and the tools — everything a delegate needs to understand before the dig, taught with real strike examples and an honest account of what goes wrong when it&apos;s done badly.</p>
          </div>
          <div className="md:col-span-5 imgbox">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3] relative">
              <FallbackImage src="cat-12-eus-cat2-safe-dig" alt="Sygma safe dig training group session" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
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

      {/* ============ THE LIVE DIG ============ */}
      <section id="practical" className="bg-muted/40 border-y border-border py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="max-w-2xl mb-10">
            <Eyebrow>On the ground · the practical</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">The assessed live dig</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Every candidate plans and carries out a real excavation, exposing a real buried service — assessed by the trainer through the entire process, from permit to reinstatement.</p>
          </div>
          <div className="space-y-6">
            {digPhases.map((m, idx) => (
              <div key={m.no} className="mod-card grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
                <div className={`imgbox md:col-span-4 relative min-h-[220px] ${idx % 2 ? 'md:order-2' : ''}`}>
                  <FallbackImage src={m.img} alt={`${m.title} — Sygma safe dig training`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent md:bg-gradient-to-r" />
                  <div className="absolute top-5 left-5 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white/90 leading-none">{m.no}</span>
                  </div>
                </div>
                <div className="md:col-span-8 p-7 md:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/40 rounded-full px-3 py-1">{m.tag}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-black text-foreground tracking-tight">{m.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed max-w-2xl">{m.blurb}</p>
                  <ul className="mt-5 grid grid-cols-1 gap-y-2.5">
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
        <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-foreground">What the day needs</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">Sygma bring the trainer, the locating equipment and the expertise. What the host provides depends on how the course is delivered — the essentials are:</p>
        <ul className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-2 print-cols-2">
          {requirements(v.prereqQual).map((r, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed border-b border-border pb-2.5">
              <span className="shrink-0 mt-0.5 text-accent font-black">✓</span>
              <span className="text-[15px]">{r}</span>
            </li>
          ))}
        </ul>
        <Link href="/agendas/cat2-delivery-and-site-requirements" className="mt-8 flex items-center justify-between gap-4 rounded-2xl border-l-4 border-l-accent border border-border bg-card px-6 py-5 hover:border-accent/60 hover:shadow-md transition-all print:hidden">
          <div>
            <p className="font-black text-foreground">Delivery options &amp; site requirements</p>
            <p className="text-sm text-muted-foreground mt-1">There&apos;s more than one way to run this course — at our centre, on your site, or on your live jobs. See every option side by side, with exactly what each one needs.</p>
          </div>
          <span className="text-accent font-black text-xl shrink-0">→</span>
        </Link>
      </section>

      {/* ============ ASSESSMENT + ACCREDITATION ============ */}
      <section id="assessment" className="bg-foreground text-white py-12 md:py-14 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl grid md:grid-cols-2 gap-12 print-cols-2">
          <div>
            <Eyebrow>Assessment</Eyebrow>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Assessed on the dig, then on paper</h2>
            <p className="mt-4 text-white/70 leading-relaxed">Candidates are assessed by the Sygma trainer throughout the live dig — planning, tool selection, digging practice, exposing and protecting the service. Back in the classroom, delegates sit a written assessment paper covering the theory session.</p>
          </div>
          <div>
            <Eyebrow>Accreditation &amp; standards</Eyebrow>
            <h2 className="mt-3 text-2xl font-black tracking-tight">{v.schemeLong}</h2>
            <p className="mt-3 text-white/70 leading-relaxed text-sm">Safe digging competency built on HSE guidance and national standards:</p>
            <div className="chip-group mt-5 flex flex-wrap gap-2.5">
              {v.accred.map((a) => (
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
            <p className="mt-2 text-white/70 max-w-xl text-sm leading-relaxed">On-site UK-wide, on your live jobs, or at our Wigan centre. Send us your numbers and location and we&apos;ll come back with dates and a price.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent text-white font-bold hover:bg-accent/90 transition-colors">Enquire &rarr;</Link>
            <Link href="/agendas/cat2-delivery-and-site-requirements" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-white/25 text-white font-bold hover:bg-white/10 transition-colors">Delivery options</Link>
            <PrintButton label="Save as PDF" />
          </div>
        </div>
      </section>
    </div>
  );
}
