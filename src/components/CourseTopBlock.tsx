import React from 'react';
import Link from 'next/link';
import FallbackImage from '@/components/FallbackImage';
import AccreditationStrip from '@/components/AccreditationStrip';
import { Eyebrow } from '@/components/agendaShared';

/* Shared top-of-page block for the COURSE (sales) pages — hero, spec strip, accreditation
   strip and certificate options.

   Lifted from CourseAgendaBody at Pete's direction (23 Jul 2026): the agenda pages present the
   course far better than the sales pages do, and the public never sees them. Same structure, with
   every "agenda" reference reworded for a course page:
     breadcrumb  Course Agendas -> Courses
     badge       COURSE AGENDA / ONE-DAY COURSE OUTLINE -> TRAINING COURSE / ONE DAY · ON-SITE UK-WIDE
     chips       "This agenda covers" -> "This course covers"
     intro       drops "The full agenda for our standard one-day course"
   The closing sentence "Same course, whichever of the names above you know it by." is KEPT
   deliberately: it lets the H1 lead "Genny and CAT" (the Genny-First USP) while the chip row
   carries every name buyers actually search for. See [[seo-targeting-principles]].

   This block replaces the InnerPageHero + trust strip + the unauthorised "opening definition"
   block that commit 8415fb6 added on 16 May 2026 to chase a Surfer score. */

export type CertOption = { name: string; body: string; cost: string; unit: string; note: string };
export type SpecCell = { k: string; v: string; s: string };
export type ProofStat = { v: string; k: string; s: string };

/* The standard three certificate routes. Identical content and assessment on each — the choice is
   the badge. Fees are CERTIFICATE fees only; the course itself is always quoted (no price anchor
   on the site — standing decision, see the property README). */
export const STANDARD_CERT: CertOption[] = [
  { name: 'Sygma In-House', body: 'Sygma certificate', cost: 'Included', unit: 'no certificate fee', note: 'Our own certificate of competence, issued on the day.' },
  { name: 'EUSR Cat 1', body: 'EUSR registration', cost: '+£34', unit: 'per person', note: 'Nationally recognised EUSR registration card.' },
  { name: 'ProQual Level 2', body: 'Regulated award', cost: '+£35', unit: 'per person', note: 'ProQual Level 2 Award — a regulated qualification.' },
];

export const STANDARD_SPEC: SpecCell[] = [
  { k: 'Duration', v: 'One day', s: '08:00 – ~15:00' },
  { k: 'Group size', v: 'Max 8', s: 'Per trainer, per day' },
  { k: 'Delivery', v: 'On-site UK-wide', s: 'or our Wigan centre' },
  { k: 'Assessment', v: '80% pass', s: 'Written + practical' },
];

export type CourseTopBlockProps = {
  h1: React.ReactNode;        // ReactNode so the accent span works, exactly as the agenda pages do
  strapline: React.ReactNode;
  covers: string[];
  breadcrumbLabel: string;
  image: string;
  alt: string;
  ctaLabel: string;
  /* ⚠ NO agenda link, deliberately. Every /agendas/* page is `index: false` and the set is kept
     unlinked on purpose -- not in the nav, not in the sitemap, no inbound links from anywhere.
     A "View the full agenda" button was added here on 23 Jul and REMOVED on 24 Jul at Pete's
     challenge: it was never asked for, and it pointed indexed commercial pages at a deliberately
     de-indexed library. Do not reintroduce it without an explicit decision from Pete. */
  intro?: string;
  spec?: SpecCell[];
  cert?: CertOption[];
  /* The page's own proof stats (21 Years / 70-80% / Proven). Passed in rather than hard-coded
     because HSG47 carries a different trio. Rendered as a slim DIVIDED strip, deliberately not
     as cards: a second card grid directly under the certificate cards on the same dark ground
     read as one undifferentiated wall of six boxes with ~80px of dead space through the middle
     (Pete, 24 Jul 2026). The strip echoes the hero spec strip instead, so the section closes
     with the same visual language it opened with. */
  proof?: ProofStat[];
};

export default function CourseTopBlock({
  h1, strapline, covers, breadcrumbLabel, image, alt, ctaLabel,
  intro, spec = STANDARD_SPEC, cert = STANDARD_CERT, proof,
}: CourseTopBlockProps) {
  const introText = intro ??
    'What we cover in the classroom and on the ground, how every delegate is assessed, and your ' +
    'certificate options. Same course, whichever of the names above you know it by.';

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 imgbox">
          <FallbackImage src={image} alt={alt} fill priority sizes="100vw" className="object-cover object-[center_68%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/25" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative container mx-auto px-6 md:px-8 max-w-6xl py-8 md:py-12 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/courses" className="hover:text-white">Courses</Link><span>/</span>
            <span className="text-white/80">{breadcrumbLabel}</span>
          </nav>
          <div className="inline-flex items-center gap-3 rounded-md border border-accent/50 bg-accent/10 px-4 py-2">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-accent">Training course</span>
            <span className="h-3.5 w-px bg-accent/40" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/60">One day · On-site UK-wide</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-[1.0] tracking-tight max-w-4xl">{h1}</h1>
          <p className="hero-strapline mt-4 text-xl md:text-3xl font-bold text-white tracking-tight">{strapline}</p>
          <div className="mt-5">
            <p className="text-[11px] font-black uppercase tracking-widest text-white/40 mb-2.5">This course covers</p>
            <div className="flex flex-wrap gap-2">
              {covers.map((c) => (
                <span key={c} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-bold text-white/85">{c}</span>
              ))}
            </div>
          </div>
          <p className="mt-5 text-base text-white/70 max-w-2xl leading-relaxed">{introText}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent text-white font-bold text-sm hover:bg-accent/90 transition-colors">{ctaLabel}</Link>
          </div>
        </div>
        <div className="relative border-t border-white/10 bg-white/[0.03] backdrop-blur-sm">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
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

      {/* ============ CERTIFICATE OPTIONS ============ */}
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
          <div className="grid md:grid-cols-3 gap-4">
            {cert.map((c) => (
              <div key={c.name} className="cert-card flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-accent/50 transition-colors">
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">{c.body}</p>
                <p className="mt-2 text-xl font-black leading-tight">{c.name}</p>
                {/* Fee on one baseline across all three cards -- "Included" is a word and "+£34" a
                    number, so without the flex-baseline row they sat at visibly different heights. */}
                <p className="mt-4 flex flex-wrap items-baseline gap-x-2 text-3xl font-black text-accent">
                  {c.cost}<span className="text-sm font-bold text-white/50">{c.unit}</span>
                </p>
                {/* mt-auto pins every note to the card floor, so the three cards read as one row
                    rather than three ragged blocks. */}
                <p className="mt-auto pt-3 text-sm text-white/70 leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>

          {proof && proof.length > 0 && (
            <div className="mt-10 border-t border-white/10 pt-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-white/10">
                {proof.map((p) => (
                  <div key={p.k} className="px-0 sm:px-6 py-3 sm:py-0 first:sm:pl-0 last:sm:pr-0">
                    <p className="text-3xl font-black text-accent leading-none">{p.v}</p>
                    <p className="mt-1.5 text-[11px] font-black uppercase tracking-widest text-white">{p.k}</p>
                    <p className="mt-1 text-xs text-white/60 leading-relaxed">{p.s}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
