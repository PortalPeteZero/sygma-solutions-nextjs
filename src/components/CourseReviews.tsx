import React from 'react';
import { Eyebrow } from '@/components/agendaShared';

/* Delegate feedback for the course pages (25 Jul 2026, Pete's direction).
   The page had NO social proof; the page outranking it runs a Trustpilot widget + a quote.

   SOURCE + CONSENT: these are verbatim quotes from Sygma's own JotForm post-course evaluations
   (hub.training_evaluations, key monthly/* → praise[].text on the Cat & Genny course family).
   The evaluation form carries NO publication-consent field, so delegate NAMES and COMPANIES are
   deliberately NOT shown — Pete's instruction: "just use the quotes". A bare quote with no
   attribution identifies nobody, so there is no personal data on the page. Trainer first-names
   that appear inside a quote are Sygma's own staff and stay as the delegate wrote them.
   Do NOT add names, companies, or "a delegate from…" back without a consent field on the form.

   The RATING and COUNT are aggregates (avg_rating 4.88 across n=173 on course/cat-genny, 20 Jul
   2026 sync) — no personal data, and the strongest single claim on the page. Refresh from the
   summary block when the JotForm sync updates. */

const RATING = '4.88';
const COUNT = 173;

const QUOTES = [
  'From not previously having used a cat and genny, I learnt everything needed to use one on site safely and confidently. The trainer was friendly and informative',
  'Trainer was insightful and clearly had a knowledge far beyond just teaching the course. Learned something about the CAT and Genny 10 years after first use.',
  'Have attended numerous previous courses, this was the best in establishing good practice with clear reasoning.',
  'Really appreciated the combo of class and practical work. Andy was great',
  'Thank you, very good course and picked up some new tips that will help me and keep me safe in my job role',
  'Great course and Steve brings much needed humour and great knowledge of subject matter making course enjoyable',
];

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-accent" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z" /></svg>
      ))}
    </span>
  );
}

export default function CourseReviews() {
  return (
    <section className="bg-background py-14 md:py-16">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>What delegates say</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-foreground">Rated {RATING} out of 5 by delegates</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              From {COUNT} post-course evaluations completed by delegates on our CAT and Genny courses.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Stars />
            <span className="text-2xl font-black text-foreground">{RATING}<span className="text-sm font-bold text-muted-foreground"> / 5</span></span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((qt, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-muted/20 p-6 flex flex-col">
              <Stars />
              <blockquote className="mt-3 text-sm text-foreground leading-relaxed">“{qt}”</blockquote>
              <figcaption className="mt-4 text-[11px] font-black uppercase tracking-widest text-muted-foreground">Verified course evaluation</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
