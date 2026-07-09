import type { Metadata } from 'next';
import Link from 'next/link';
import FallbackImage from '@/components/FallbackImage';
import PrintButton from '@/components/PrintButton';
import { courseSchema, breadcrumbSchema } from '@/lib/schema';
import { Eyebrow, PRINT_CSS } from '@/components/agendaShared';

/* EUS Cat 1 & 2 Combined agenda — a merge of the Cat 1 (locate) and Cat 2 (safe dig) agendas
   into one two-day outline. Day summaries here; the two standalone agendas carry full depth
   and are linked throughout. Cert model differs from the standalones: on the combined course
   EUSR registration for BOTH categories is included in the quote (per the live course page). */

const TITLE = 'EUS Cat 1 & 2 Combined — Course Agenda | Sygma';
const DESC = 'The full two-day agenda for Sygma\'s combined EUS Category 1 (Locate Utility Services) and Category 2 (Implement Safe Digging) course. Day one: locate. Day two: the assessed live dig.';
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

type Row = { t: string; d: string };
const day1Theory: Row[] = [
  { t: 'Legislation, safety & responsibility', d: 'Why we locate before we dig, HSG47 and the wider legislation, company policy, and understanding a permit to dig.' },
  { t: 'Plans & drawings', d: 'Reading buried service plans (STATS) with their keys and symbols, PAS128 drawings, and what plans do and don\'t tell you.' },
  { t: 'The science of detection', d: 'Electromagnetic theory — how locators actually work — plus a dedicated myth-busting session on what the kit genuinely can and cannot find.' },
  { t: 'Recorded data (optional)', d: 'Data logging and C.A.T. Manager — downloading and analysing recorded locator data (C.A.T.4 specific).' },
];
const day1Practical: Row[] = [
  { t: 'Pre-survey', d: 'Read the plans, complete the visual survey, check the equipment, plan the survey.' },
  { t: 'Transmitter (Genny) applications', d: 'Every way to apply a signal — direct connection, clamp, capacitance, induction — and how to confirm it has taken.' },
  { t: 'Locating — pinpointing & tracing', d: 'Turn a signal into a marked, traced, depth-checked line on the ground.' },
  { t: 'General technique & strategy', d: 'Work the whole site: transmitter-first discipline, dual frequencies, continuous scanning.' },
  { t: 'Passive (Power & Radio)', d: 'The final sweep — catching what an applied signal can\'t.' },
];
const day2Theory: Row[] = [
  { t: 'Legislation, safety & responsibility', d: 'HSG47 and GS6 for excavation work, risk assessments and permits to dig, occupational health risks, and excavation hazards.' },
  { t: 'Plans, checks & locating', d: 'Utility plan interpretation and limitations, visual checks, and detecting & marking services before ground is broken.' },
  { t: 'Safe excavation practice', d: 'Excavating around services with hand tools and handheld power tools, and the horizontal excavation technique.' },
  { t: 'Exposing & protecting services', d: 'Exposing services safely, trench support and excavation safety, and why services are never handholds.' },
];
const day2Practical: Row[] = [
  { t: 'Plan & prove', d: 'Risk assessment and permit, service plans, locating equipment to confirm and mark positions.' },
  { t: 'The safe dig', d: 'Surface off with services considered, excavate to 500mm, dig horizontally to expose the indicated service.' },
  { t: 'Expose, protect & reinstate', d: 'Support the exposed service, reinstate the ground — assessed through the entire process.' },
];

const contents = [
  { id: 'day1', label: 'Day one — Locate' },
  { id: 'day2', label: 'Day two — Safe dig' },
  { id: 'certificates', label: 'Qualifications' },
  { id: 'requirements', label: 'On the days' },
];

function DayRows({ rows }: { rows: Row[] }) {
  return (
    // Agenda-style: full-width stacked rows, never side-by-side cards. print-cols-2 keeps the PDF compact.
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
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">Two-day course outline</span>
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
          <p className="mt-5 text-base text-white/70 max-w-2xl leading-relaxed print:hidden">Day one takes every delegate through locating buried services with the Genny and CAT. Day two takes them from the marked line to a safely exposed, protected service on an assessed live dig. This page is the two-day outline — each day&apos;s full agenda is one click deeper.</p>
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

      {/* ============ ACCREDITATIONS (test strip) ============ */}
      <section className="border-b border-border bg-muted/30 py-2.5 print:hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5 md:flex-nowrap md:justify-between md:gap-x-6">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-muted-foreground shrink-0 whitespace-nowrap">Accredited &amp; approved by</p>
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-1.5 md:gap-x-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/accreditations/eusr-approved-provider.webp" alt="EUSR Approved Provider" className="h-11 md:h-12 w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/accreditations/proqual.png" alt="ProQual accredited" className="h-12 md:h-14 w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/accreditations/citb-ato.jpg" alt="CITB Approved Training Organisation" className="h-10 md:h-11 w-auto" />
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

      {/* ============ DAY ONE ============ */}
      <section id="day1" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-10 items-center mb-10">
          <div className="md:col-span-7">
            <Eyebrow>Day one · EUS Cat 1</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">Locate</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">The full one-day locate course — classroom theory, then five practical disciplines on the ground with a strong Genny-first emphasis, each assessed individually.</p>
            <Link href="/agendas/eus-category-1-locate-utility-services" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-accent hover:underline print:hidden">See the full Day one agenda →</Link>
          </div>
          <div className="md:col-span-5 imgbox">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3] relative">
              <FallbackImage src="cat-55-eus-cat2-safe-dig" alt="Delegates locating and marking buried services on day one" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-black text-accent tabular-nums">01</span>
              <h3 className="text-sm md:text-base font-black uppercase tracking-[0.18em] text-foreground whitespace-nowrap">In the classroom</h3>
              <span className="flex-1 h-px bg-border" />
              <span className="text-xs font-bold text-muted-foreground">{day1Theory.length} topics</span>
            </div>
            <DayRows rows={day1Theory} />
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-black text-accent tabular-nums">02</span>
              <h3 className="text-sm md:text-base font-black uppercase tracking-[0.18em] text-foreground whitespace-nowrap">On the ground — five disciplines</h3>
              <span className="flex-1 h-px bg-border" />
              <span className="text-xs font-bold text-muted-foreground">{day1Practical.length} disciplines</span>
            </div>
            <DayRows rows={day1Practical} />
          </div>
        </div>
      </section>

      {/* ============ DAY TWO ============ */}
      <section id="day2" className="bg-muted/40 border-y border-border py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-10 items-center mb-10">
            <div className="md:col-span-7">
              <Eyebrow>Day two · EUS Cat 2</Eyebrow>
              <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">Safe dig</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">From the marked line to the exposed service — safe digging theory in the classroom, then the assessed live dig where every candidate excavates to and exposes a real buried service.</p>
              <Link href="/agendas/eus-category-2-safe-digging" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-accent hover:underline print:hidden">See the full Day two agenda →</Link>
            </div>
            <div className="md:col-span-5 imgbox">
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3] relative">
                <FallbackImage src="dig-19-eus-cat2-safe-dig" alt="A safely exposed buried service on the day-two live dig" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-black text-accent tabular-nums">01</span>
                <h3 className="text-sm md:text-base font-black uppercase tracking-[0.18em] text-foreground whitespace-nowrap">In the classroom</h3>
                <span className="flex-1 h-px bg-border" />
                <span className="text-xs font-bold text-muted-foreground">{day2Theory.length} topics</span>
              </div>
              <DayRows rows={day2Theory} />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-black text-accent tabular-nums">02</span>
                <h3 className="text-sm md:text-base font-black uppercase tracking-[0.18em] text-foreground whitespace-nowrap">The assessed live dig</h3>
                <span className="flex-1 h-px bg-border" />
                <span className="text-xs font-bold text-muted-foreground">{day2Practical.length} phases</span>
              </div>
              <DayRows rows={day2Practical} />
            </div>
          </div>
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
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">Sygma bring the trainer, the locating equipment and the expertise. The host site needs everything the one-day courses need — buried services to locate on day one, and a dig area (or live job) for day two.</p>
        <Link href="/agendas/cat2-delivery-and-site-requirements" className="mt-8 flex items-center justify-between gap-4 rounded-2xl border-l-4 border-l-accent border border-border bg-card px-6 py-5 hover:border-accent/60 hover:shadow-md transition-all print:hidden">
          <div>
            <p className="font-black text-foreground">Delivery options &amp; site requirements</p>
            <p className="text-sm text-muted-foreground mt-1">At our Wigan centre, on your site, or on your live jobs — every way to run the course, side by side, with exactly what each needs.</p>
          </div>
          <span className="text-accent font-black text-xl shrink-0">→</span>
        </Link>
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
