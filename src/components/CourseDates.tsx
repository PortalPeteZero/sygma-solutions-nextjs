import React from 'react';
import Link from 'next/link';
import { Eyebrow } from '@/components/agendaShared';
import data from '@/data/course-dates.json';

/* Open-course dates + per-person price for the cable-avoidance family (24 Jul 2026, Pete's direction).
   The page previously had NO time dimension at all — no dates, no availability, no per-person price —
   while the page outranking it devotes a third of its length to exactly that.

   DATA: src/data/course-dates.json, generated from `public.ee_public_courses` in the Command Centre
   (the same table the Enquiry Engine quotes from, so the website and the EE can never disagree).
   The site's Supabase project is NOT the Command Centre's, so this is build-time data refreshed by a
   cron that rewrites the JSON and pushes — agreed with Pete, cron to be set up separately.

   ⚠ Rows with a null venue render WITHOUT a venue line. Do not substitute a default: an invented
   venue on a public booking block is a factual claim we cannot support. Same for places-left. */

const DAY_RATE = 965;          // on-site day rate, up to 8 delegates
const MAX_DELEGATES = 8;
const FROM_PER_PERSON = 121;   // Pete, 24 Jul 2026 — £965/8 = £120.63, rounded up to a whole pound

type Course = { date: string; family: string | null; title: string; venue: string | null; cap: number | null; placesLeft: number | null };

const fmt = (iso: string) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });

export default function CourseDates({
  heading = 'Next available course dates',
  intro = 'Open course places on our scheduled dates, or we deliver on your site on a date that suits you.',
  family,
}: { heading?: string; intro?: string; family?: string }) {
  const all = (data.courses as Course[]) || [];
  const courses = family ? all.filter((c) => c.family === family) : all;

  return (
    <section id="dates" className="bg-muted/30 border-y border-border py-12 md:py-14 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Dates &amp; availability</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-foreground">{heading}</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{intro}</p>
          </div>
          {/* Per-person price. The site does not carry a fixed course price; this is the on-site day
              rate expressed per delegate, which is how buyers ask for it. Certificate fees are extra
              and are set out in the certificate block above. */}
          <div className="shrink-0 rounded-2xl border border-accent/40 bg-accent/[0.06] px-6 py-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">On-site day rate, per person</p>
            <p className="mt-1 text-3xl font-black text-accent leading-none">
              From £{FROM_PER_PERSON}
              <span className="ml-1.5 text-sm font-bold text-muted-foreground">per delegate</span>
            </p>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Based on a £{DAY_RATE} day rate for up to {MAX_DELEGATES} delegates at your site, travel included.
              Certificate fees are charged separately.
            </p>
          </div>
        </div>

        {/* Two delivery routes, stated BEFORE the dates table. Without this the table reads as
            "these six dates are all you can have" — Pete, 24 Jul 2026. On-site is the main business;
            the open dates are the smaller of the two and must not be mistaken for the whole offer. */}
        <div className="mb-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-accent/40 bg-accent/[0.05] p-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-accent">Most popular</p>
            <h3 className="mt-2 text-xl font-black text-foreground">On-site, at your premises</h3>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
              We come to you, anywhere in the UK, on a date that suits you — using your own equipment, your
              plans and your site. Up to {MAX_DELEGATES} delegates on one day rate, travel included.
              <span className="font-semibold text-foreground"> You are not limited to the dates below.</span>
            </p>
            <Link href="/contact#enquiry-form" className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-accent/90">
              Tell us your dates →
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Open public courses</p>
            <h3 className="mt-2 text-xl font-black text-foreground">Book individual places</h3>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
              Scheduled open courses for one or two delegates, or when you do not have a suitable site of
              your own. Priced per person. The next available dates are listed below.
            </p>
            <a href="#dates-table" className="mt-4 inline-flex items-center justify-center rounded-md border border-border bg-muted/40 px-5 py-2.5 text-xs font-bold text-foreground transition-colors hover:bg-muted">
              See the dates ↓
            </a>
          </div>
        </div>

        {courses.length > 0 ? (
          <div id="dates-table" className="overflow-x-auto rounded-2xl border border-border bg-background scroll-mt-28">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-[11px] font-black uppercase tracking-widest text-muted-foreground">
                  <th className="px-5 py-3.5">Date</th>
                  <th className="px-5 py-3.5">Course</th>
                  <th className="px-5 py-3.5">Duration</th>
                  <th className="px-5 py-3.5">Availability</th>
                  <th className="px-5 py-3.5" />
                </tr>
              </thead>
              <tbody>
                {courses.map((c) => (
                  <tr key={c.date + c.title} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 font-bold text-foreground whitespace-nowrap">{fmt(c.date)}</td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {c.title}
                      {c.venue ? <span className="block text-xs text-muted-foreground/80">{c.venue}</span> : null}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">1 day</td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      {c.placesLeft == null ? (
                        <span className="text-muted-foreground">Places available</span>
                      ) : c.placesLeft <= 0 ? (
                        <span className="font-bold text-muted-foreground">Fully booked</span>
                      ) : c.placesLeft <= 2 ? (
                        <span className="font-black text-accent">{c.placesLeft} place{c.placesLeft === 1 ? '' : 's'} left</span>
                      ) : (
                        <span className="font-bold text-foreground">{c.placesLeft} places</span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <Link
                        href="/contact#enquiry-form"
                        className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-accent/90 whitespace-nowrap"
                      >
                        Book this date →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-background px-6 py-8 text-center">
            <p className="text-sm text-muted-foreground">
              No open dates listed at the moment — we schedule on demand and deliver on your site UK-wide.
            </p>
          </div>
        )}

        <p className="mt-4 text-xs text-muted-foreground">
          Need a date that is not listed, or the whole course on your own site? We deliver UK-wide, travel
          included — <Link href="/contact#enquiry-form" className="font-semibold text-primary hover:underline">tell us your dates</Link>.
        </p>
      </div>
    </section>
  );
}
