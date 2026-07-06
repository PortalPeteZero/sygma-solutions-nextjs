import type { Metadata } from 'next';
import Link from 'next/link';
import FallbackImage from '@/components/FallbackImage';
import PrintButton from '@/components/PrintButton';
import { breadcrumbSchema } from '@/lib/schema';
import { Eyebrow, PRINT_CSS } from '@/components/agendaShared';

/* Cat 2 delivery options & site requirements — a CHOOSER page. Customers arrive not knowing
   options exist, so ALL the substance (where theory/practical happen, numbers, disruption,
   what-you-provide, pros, cons, choose-this-if) lives in the always-visible comparison —
   nothing behind a click. Per-option detail below only expands, never holds exclusive info.
   Day-first framing; delegate numbers only (never dig-team counts). No pricing. */

const TITLE = 'Cat 2 Safe Dig — Delivery Options & Site Requirements | Sygma';
const DESC = 'There\'s more than one way to run the Cat 2 safe dig course. Every delivery option side by side — at our Wigan centre, on your site, or on your live jobs — with exactly what each one needs.';
const URL = 'https://sygma-solutions.com/agendas/cat2-delivery-and-site-requirements';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  // Sendable guide — kept out of search like the agenda library it belongs to.
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-55-eus-cat2-safe-dig', width: 1200, height: 630, alt: 'Sygma Cat 2 safe dig training delivery options' }],
    type: 'website',
  },
};

type Option = {
  id: string;
  name: string;
  badge?: string;
  theory: string;
  practical: string;
  delegates: string;
  disruption: string;
  provide: string[];
  pros: string[];
  cons: string[];
  chooseIf: string;
  img?: string;
};

const options: Option[] = [
  {
    id: 'wigan',
    name: 'Our Wigan training centre',
    theory: 'Our training room, Wigan',
    practical: 'Our own dig area, Wigan',
    delegates: 'Up to 8',
    disruption: 'A day away from site',
    provide: ['Nothing to arrange — just get your delegates to us', 'PPE and photo ID per delegate'],
    pros: ['Zero setup — room, dig area, plans and equipment all ready', 'Guaranteed suitable dig area', 'No site checks needed'],
    cons: ['Travel to Wigan', 'A full day away from your sites'],
    chooseIf: 'you want the simplest possible booking with nothing to arrange.',
    img: 'cat-06-eus-cat2-safe-dig',
  },
  {
    id: 'your-site',
    name: 'Your site — dedicated dig area',
    theory: 'Your meeting room',
    practical: 'A dig area on your site or yard',
    delegates: 'Up to 8',
    disruption: 'One day — delegates off the tools',
    provide: ['A dig area with a detectable buried utility and room for the group to work around it', 'Ground suitable for a hand dig', 'Meeting room + buried services plans', 'PPE per delegate'],
    pros: ['Full group of 8 done in one day at your place', 'No travel for your team', 'Simplest on-site option'],
    cons: ['Needs a suitable dig area with live services', 'A day\'s productivity lost', 'A yard dig can feel less like the day job'],
    chooseIf: 'you have a yard or site with buried services and want everyone done in one visit.',
    img: 'cat-55-eus-cat2-safe-dig',
  },
  {
    id: 'live-teams',
    name: 'Your live sites — we come to each team',
    theory: 'Short session at a chosen site, before the shift',
    practical: 'Each team assessed on its own live job',
    delegates: 'Up to 6',
    disruption: 'Teams keep working — may drop one job for the theory',
    provide: ['A room for the morning theory session', 'Live jobs running that day for the practical assessments'],
    pros: ['Assessed on real work — engagement is far better', 'Teams stay productive through the day', 'Still easy to organise'],
    cons: ['Fewer delegates per day', 'Depends on suitable jobs running that day'],
    chooseIf: 'keeping crews on the tools matters and you have jobs running locally.',
    img: 'cat-69-eus-cat2-safe-dig',
  },
  {
    id: 'live-group',
    name: 'One nearby live job — whole group together',
    theory: 'Morning session at a chosen venue',
    practical: 'Everyone travels to one live job',
    delegates: 'Up to 8 — if the job can host the group safely, or fewer to suit',
    disruption: 'One day — group off the tools',
    provide: ['A room for the morning theory', 'One live job nearby with safe space for the whole group'],
    pros: ['Real conditions, one location', 'Everyone through together', 'Simple logistics on the day'],
    cons: ['The job must safely accommodate the whole group — or numbers come down'],
    chooseIf: 'you have a suitable live job nearby and want the whole group done together.',
    img: 'cat-77-eus-cat2-safe-dig',
  },
  {
    id: 'pre-recorded',
    name: 'Pre-recorded theory + on-site practical',
    theory: 'Pre-recorded — watched in delegates\' own time',
    practical: 'We come to your live sites, purely for assessments',
    delegates: 'The most delegates per trainer day',
    disruption: 'The least of any option — no classroom time at all',
    provide: ['Confirmation each delegate has watched the theory', 'Live jobs for the practical assessments'],
    pros: ['No stand-down, no morning theory, no room needed', 'Teams only stop for their own assessment', 'Most delegates through in a day'],
    cons: ['Relies on delegates watching the theory first — we agree a quick completion check', 'Less interactive than a live session (the trainer covers questions on site)'],
    chooseIf: 'minimal downtime is the priority and your teams can watch a short video beforehand.',
    img: 'dig-11-eus-cat2-safe-dig',
  },
  {
    id: 'stand-down',
    name: 'Monday stand-down',
    badge: 'For larger groups',
    theory: 'One group session, Monday morning — toolbox-talk style',
    practical: 'On live sites across the rest of the week',
    delegates: 'A whole week\'s group',
    disruption: 'One morning off the tools for the whole group',
    provide: ['A room big enough for the full group on the Monday', 'Live jobs running through the week'],
    pros: ['All the theory done once', 'Minimal disruption to planned work', 'More delegates assessed across the week'],
    cons: ['Needs a room that holds the full group', 'Suits larger squads, not small teams'],
    chooseIf: 'you have a bigger crew to get through and want one theory session covering everyone.',
    img: 'cat-12-eus-cat2-safe-dig',
  },
];

const matrixRows: { label: string; get: (o: Option) => React.ReactNode }[] = [
  { label: 'Where\'s the theory?', get: (o) => o.theory },
  { label: 'Where\'s the practical?', get: (o) => o.practical },
  { label: 'How many delegates?', get: (o) => o.delegates },
  { label: 'Disruption to your work', get: (o) => o.disruption },
  {
    label: 'What you provide',
    get: (o) => (
      <ul className="space-y-1">{o.provide.map((p, i) => <li key={i} className="flex gap-1.5"><span className="text-accent shrink-0">•</span><span>{p}</span></li>)}</ul>
    ),
  },
  {
    label: 'Pros',
    get: (o) => (
      <ul className="space-y-1">{o.pros.map((p, i) => <li key={i} className="flex gap-1.5"><span className="text-green-600 font-bold shrink-0">✓</span><span>{p}</span></li>)}</ul>
    ),
  },
  {
    label: 'Cons',
    get: (o) => (
      <ul className="space-y-1">{o.cons.map((p, i) => <li key={i} className="flex gap-1.5"><span className="text-red-500 font-bold shrink-0">✗</span><span>{p}</span></li>)}</ul>
    ),
  },
  { label: 'Choose this if…', get: (o) => <span className="font-semibold text-foreground">…{o.chooseIf}</span> },
];

const universal = [
  'Sygma bring the trainer, the locating equipment (CAT4 and Genny4) and all course materials',
  'Delegates ideally bring their own locating equipment — non-CAT4 kit at a minimum of 1 locator per 3 people',
  'On-site parking suitable for a transit-sized van wherever we come to you',
  'STATS plans (buried service drawings) for wherever the practical happens — Sygma can supply plans for an agreed cost if none exist',
  'Wherever theory runs on your premises: desk space for every delegate, a projector wall or screen, and welfare facilities',
  'Appropriate PPE per national, company and H&S requirements',
  'Government photographic ID per delegate (driving licence, passport or residence permit)',
  'The host is responsible for the risk assessment of the site and training room — brief the trainer on any risks',
];

export default function Page() {
  return (
    <div className="agenda-doc">
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Course Agendas', to: '/agendas' }, { label: 'Cat 2 — Delivery Options & Site Requirements' }]) }} />

      {/* ============ HERO ============ */}
      <section className="relative bg-foreground text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative container mx-auto px-6 md:px-8 max-w-6xl py-10 md:py-14">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8 print:hidden" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/agendas" className="hover:text-white">Course Agendas</Link><span>/</span>
            <span className="text-white/80">Cat 2 Delivery &amp; Site Requirements</span>
          </nav>
          <div className="inline-flex items-center gap-3 rounded-md border border-accent/50 bg-accent/10 px-4 py-2">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-accent">Cat 2 Safe Dig</span>
            <span className="h-3.5 w-px bg-accent/40" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">Delivery options &amp; site requirements</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-[1.02] tracking-tight max-w-4xl">There&apos;s more than one way <span className="text-accent">to run this course</span></h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">The Cat 2 safe dig course always ends the same way — every delegate assessed on a real excavation. But where the theory happens and where they dig is up to you. Compare every option below and pick the one that fits how your teams work. Most run in a single day with up to 8 delegates.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
            <Link href="/agendas/eus-category-2-safe-digging" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-colors">EUS Cat 2 agenda</Link>
            <Link href="/agendas/proqual-cat2" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-colors">ProQual Cat 2 agenda</Link>
            <PrintButton label="Save as PDF" />
          </div>
        </div>
      </section>

      {/* ============ THE COMPARISON (the page's heart — everything visible) ============ */}
      <section className="container mx-auto px-6 md:px-8 max-w-[1400px] py-12 md:py-16">
        <div className="mb-8 max-w-6xl mx-auto">
          <Eyebrow>Every option, side by side</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-foreground">Compare and choose</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl text-sm leading-relaxed">Everything you need to decide is in this table — scroll sideways on a phone. The photos and fuller notes below expand on each option.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-[13px] leading-snug" style={{ minWidth: '1180px' }}>
            <thead>
              <tr className="bg-foreground text-white">
                <th className="text-left px-4 py-4 w-40 align-bottom sticky left-0 bg-foreground z-10"><span className="text-[10px] font-black uppercase tracking-widest text-white/50">Option</span></th>
                {options.map((o) => (
                  <th key={o.id} className="text-left px-4 py-4 align-bottom" style={{ minWidth: '170px' }}>
                    {o.badge && <span className="inline-block text-[9px] font-black uppercase tracking-widest bg-accent text-white rounded-full px-2 py-0.5 mb-1.5">{o.badge}</span>}
                    <p className="font-black text-sm leading-tight">{o.name}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((r, ri) => (
                <tr key={r.label} className={ri % 2 ? 'bg-muted/40' : 'bg-card'}>
                  <td className={`px-4 py-4 align-top font-black text-foreground text-xs uppercase tracking-wide sticky left-0 z-10 ${ri % 2 ? 'bg-muted' : 'bg-card'} border-r border-border`}>{r.label}</td>
                  {options.map((o) => (
                    <td key={o.id} className="px-4 py-4 align-top text-muted-foreground">{r.get(o)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground md:hidden">Swipe the table sideways to see every option.</p>
      </section>

      {/* ============ THE DIG AREA, DESCRIBED (option 2's what-it-looks-like) ============ */}
      <section className="bg-muted/40 border-y border-border py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <Eyebrow>Hosting the dig on your site?</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-foreground">What a suitable dig area looks like</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">It&apos;s simpler than most people expect. For the dedicated dig-area option you need:</p>
            <ul className="mt-5 space-y-2.5">
              {[
                'A dig area of roughly 1m x 1m over a detectable buried utility — with enough clear space around it for the whole group and the trainer to work',
                'Ground suitable for a hand dig (no solid concrete or rebar)',
                'A detectable buried service to locate and expose — the more services nearby, the better the training',
                'Buried services plans for the area',
                'FR PPE and insulated digging tools for the delegates',
                'Ideally on the same site as the training room',
              ].map((r, i) => (
                <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                  <span className="shrink-0 mt-0.5 text-accent font-black">✓</span>
                  <span className="text-[15px]">{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/[0.06] px-5 py-4">
              <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-black">?</span>
              <p className="text-sm text-foreground/80 leading-relaxed"><span className="font-bold text-foreground">Not sure if your site is suitable?</span> Send us a couple of photos and we&apos;ll tell you — or we can visit, advise, and even arrange access to a suitable site if you don&apos;t have one.</p>
            </div>
          </div>
          <div className="md:col-span-5 imgbox">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3] relative">
              <FallbackImage src="dig-19-eus-cat2-safe-dig" alt="A safely exposed buried service in a Sygma Cat 2 training excavation" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">A training excavation with the buried service exposed, protected and supported — what every candidate produces on the day.</p>
          </div>
        </div>
      </section>

      {/* ============ OPTIONS IN PICTURES (expands the matrix — no exclusive info) ============ */}
      <section className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16">
        <div className="mb-8">
          <Eyebrow>The options in pictures</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-foreground">What each one looks like on the day</h2>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {options.map((o) => (
            <div key={o.id} className="rounded-xl border border-border bg-card overflow-hidden grid md:grid-cols-12">
              {o.img && (
                <div className="imgbox relative min-h-[150px] md:col-span-3">
                  <FallbackImage src={o.img} alt={`${o.name} — Sygma Cat 2 safe dig training`} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" />
                </div>
              )}
              <div className={`px-6 py-4 ${o.img ? 'md:col-span-9' : 'md:col-span-12'}`}>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-black text-foreground">{o.name}</p>
                  {o.badge && <span className="text-[9px] font-black uppercase tracking-widest bg-accent text-white rounded-full px-2 py-0.5">{o.badge}</span>}
                </div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">Theory: {o.theory}. Practical: {o.practical}. {o.delegates} delegates.</p>
                <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed"><span className="font-bold text-accent">Choose this if</span> {o.chooseIf}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHATEVER YOU CHOOSE ============ */}
      <section className="bg-muted/40 border-y border-border py-12 md:py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <Eyebrow>Whichever option you choose</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-foreground">The basics that apply to every route</h2>
          <ul className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-2 print-cols-2">
            {universal.map((r, i) => (
              <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed border-b border-border pb-2.5">
                <span className="shrink-0 mt-0.5 text-accent font-black">✓</span>
                <span className="text-[15px]">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ NEXT STEP ============ */}
      <section className="bg-foreground text-white py-12 md:py-14 print:hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Eyebrow>Next step</Eyebrow>
            <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">Picked one? Or want a steer?</h2>
            <p className="mt-2 text-white/70 max-w-xl text-sm leading-relaxed">Tell us roughly how many operatives, where, and which option appeals — we&apos;ll come back with dates and a price. Not sure? Send the details and we&apos;ll recommend the best fit.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent text-white font-bold hover:bg-accent/90 transition-colors">Enquire &rarr;</Link>
            <Link href="/agendas/eus-category-2-safe-digging" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-white/25 text-white font-bold hover:bg-white/10 transition-colors">Course agenda</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
