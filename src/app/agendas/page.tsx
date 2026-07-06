import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/schema';
import { Eyebrow } from '@/components/agendaShared';

const TITLE = 'Course Agendas | Sygma Solutions';
const DESC = 'The full, detailed agendas for Sygma\'s utility detection and avoidance training courses — what each course covers, how delegates are assessed, and the certificate options.';
const URL = 'https://sygma-solutions.com/agendas';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  // Sendable agenda library — deliberately kept out of search so it can't cannibalise the /courses pages that rank.
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-56', width: 1200, height: 630, alt: 'Sygma utility detection and avoidance training' }],
    type: 'website',
  },
};

type AgendaCard = {
  href: string;
  eyebrow: string;
  title: React.ReactNode;
  strapline: string;
  chips: string[];
};

const standardCourse: AgendaCard[] = [
  {
    href: '/agendas/hsg47-utility-detection-and-avoidance',
    eyebrow: 'One day',
    title: <>HSG47 Utility Detection <span className="text-accent">&amp; Avoidance</span></>,
    strapline: 'Genny and CAT · incorporating EUS Cat 1',
    chips: ['Genny and CAT', 'Cable Avoidance', 'HSG47'],
  },
  {
    href: '/agendas/eus-category-1-locate-utility-services',
    eyebrow: 'One day',
    title: <>EUS Category 1: <span className="text-accent">Locate Utility Services</span></>,
    strapline: 'HSG47 · Genny and CAT · Cable Avoidance',
    chips: ['EUS Cat 1', 'EUSR registration', 'HSG47'],
  },
];

const superUser: AgendaCard[] = [
  {
    href: '/agendas/super-user-coach',
    eyebrow: 'Two days',
    title: <>2 Day Super User <span className="text-accent">Coach</span></>,
    strapline: 'Advanced locator competency · coaching & assessing others',
    chips: ['Advanced location', 'CAT data analysis', 'Coaching & assessment'],
  },
  {
    href: '/agendas/super-user-damage-investigation',
    eyebrow: 'Two days',
    title: <>2 Day Super User <span className="text-accent">Damage Investigations</span></>,
    strapline: 'Advanced locator competency · strike investigation & data analysis',
    chips: ['Advanced location', 'CAT data analysis', 'Strike investigation (USAG)'],
  },
];

function AgendaGrid({ cards }: { cards: AgendaCard[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {cards.map((c) => (
        <Link key={c.href} href={c.href} className="group relative rounded-2xl border border-border bg-card p-7 hover:border-accent/60 hover:shadow-lg transition-all">
          <p className="text-[10px] font-black uppercase tracking-widest text-accent">{c.eyebrow}</p>
          <p className="mt-3 text-2xl font-black text-foreground tracking-tight leading-snug">{c.title}</p>
          <p className="mt-2 text-sm font-bold text-muted-foreground">{c.strapline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {c.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">{chip}</span>
            ))}
          </div>
          <p className="mt-5 text-sm font-black text-accent">View the full agenda <span className="inline-block transition-transform group-hover:translate-x-1">→</span></p>
        </Link>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Course Agendas' }]) }} />

      {/* ============ HERO ============ */}
      <section className="relative bg-foreground text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative container mx-auto px-6 md:px-8 max-w-6xl py-10 md:py-14">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white/80">Course Agendas</span>
          </nav>
          <div className="inline-flex items-center gap-3 rounded-md border border-accent/50 bg-accent/10 px-4 py-2">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-accent">Agenda Library</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-[1.0] tracking-tight max-w-4xl">Course <span className="text-accent">Agendas</span></h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">The full, detailed agenda for each of our courses — exactly what we cover in the classroom and on the ground, how every delegate is assessed, and your certificate options. Every agenda has a Save-as-PDF button if you'd like a copy for your records.</p>
        </div>
      </section>

      {/* ============ STANDARD ONE-DAY ============ */}
      <section className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16">
        <div className="mb-7">
          <Eyebrow>The standard one-day course</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight">Utility detection &amp; avoidance</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl text-sm leading-relaxed">Our core one-day course goes by several names — Genny and CAT, Cable Avoidance, HSG47, EUS Cat 1. It's the same course and the same agenda; open whichever version matches the name you know it by.</p>
        </div>
        <AgendaGrid cards={standardCourse} />
      </section>

      {/* ============ SUPER USER ============ */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16">
          <div className="mb-7">
            <Eyebrow>Advanced — two days</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight">Super User</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl text-sm leading-relaxed">Our two-day advanced course for experienced locator operatives who already hold EUS Cat 1 (or equivalent). Two emphases of the same course — choose the agenda that matches your focus.</p>
          </div>
          <AgendaGrid cards={superUser} />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16">
        <div className="rounded-2xl bg-foreground text-white px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-2xl md:text-3xl font-black tracking-tight">Can't see the course you're after?</p>
            <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-xl">We also deliver ProQual qualifications, GS6 overhead power lines, GPR &amp; PAS128 survey training, manufacturer locator training and Level 3–6 utility mapping qualifications. Browse the full course list or ask us directly.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/courses" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-white/25 text-white font-bold text-sm hover:bg-white/10 transition-colors">All courses</Link>
            <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent text-white font-bold text-sm hover:bg-accent/90 transition-colors">Enquire →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
