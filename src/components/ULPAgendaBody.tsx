import FallbackImage from '@/components/FallbackImage';

// Cloudinary crops these, not the browser. The site loader uses c_limit (no crop) and
// lets object-cover take the middle of the frame -- which on a photo of someone working
// at a lighting column takes the middle of the road. g_auto finds the subject and keeps
// it, so the agenda images show what they are captioned as showing.
const CLOUD = 'https://res.cloudinary.com/dqf1mp7en/image/upload';
function ShotImage({ id, alt, w = 760, h = 500 }: { id: string; alt: string; w?: number; h?: number }) {
  const url = (m: number) => `${CLOUD}/f_auto,q_auto,w_${w * m},h_${h * m},c_fill,g_auto/${id}`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url(1)}
      srcSet={`${url(1)} 1x, ${url(2)} 2x`}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
import PrintButton from '@/components/PrintButton';
import { courseSchema, breadcrumbSchema } from '@/lib/schema';
import { Eyebrow, PRINT_CSS } from '@/components/agendaShared';
import AccreditationStrip from '@/components/AccreditationStrip';

/* Utility Location in Practice (ULP) — the second-stage day that follows the one-day
   Genny and CAT course. Deliberately NOT called a refresher: it is a different course,
   with its own name, so a training system can never confuse the two.

   The weighting is the point. The one-day course spends its classroom time on why we
   locate, the law, and the consequences of getting it wrong. Delegates on ULP have had
   all that. So the classroom shrinks to what the practical needs, and the day is spent
   outside on TWO different streets — because the method has to transfer, not the site
   be learned. Every delegate is assessed individually at the end. */

/* Cloudinary public_id for the Severn Trent mark. Empty until Severn Trent supply it —
   we do not take a customer's logo from their website. */
const ST_LOGO = 'severn-trent-water-logo';

const spec = [
  { k: 'Duration', v: 'One day', s: '08:00 – ~15:00' },
  { k: 'Group size', v: 'Max 8', s: 'Per trainer, per day' },
  { k: 'Delivery', v: 'On-site UK-wide', s: 'or our Wigan centre' },
  { k: 'Assessment', v: 'Individual', s: 'Every delegate, on site' },
];

const cert = [
  {
    name: 'Sygma In-House', body: 'Sygma certificate', cost: 'Included', unit: 'no certificate fee',
    note: 'A Sygma certificate of competence in applied utility location, issued on completion. No awarding-body registration fee, because the qualification you already hold is not being re-issued.',
  },
];

const objectives = [
  'Work a street as a survey rather than scanning a hole',
  'Read the surface for what has to be underneath it, before touching the kit',
  'Ask where every visible asset gets its feed from, and prove the answer',
  'Apply a signal every way the job allows — direct connection, clamp, capacitance and induction',
  'Connect at a lighting column, at a property, and at an exposed service, and confirm the signal has taken',
  'Exhaust connection before induction, and active before passive',
  'Run a blind induction sweep, null out a service, and check for airborne signal',
  'Pinpoint, trace, mark, and check depth two ways',
  'Trace a service that turns out not to cross the dig, and treat that as a result',
  'Recognise when a suspected service has not been found, and stop',
  'Read your own recorded data and see what it says about how you worked',
  'Know honestly what the equipment will not find, and what to do then',
];

type Module = { no: string; title: string; tag: string; blurb: string; img: string; items: string[] };

const classroom: Module[] = [
  {
    no: '01', title: 'What the data says about us', tag: 'Opens the day', img: 'ulp-crew-round-plans',
    blurb: 'The day starts on real recorded data rather than theory, because it is what earns the rest of it.',
    items: [
      'What a CAT download actually records, beyond the coloured dashboard',
      'Mode order — what starting in power rather than Genny tells you',
      'Connection against induction, and the difference in the record',
      'What an idle trigger looks like, and why time on its own proves nothing',
      'Reading your own team\'s data rather than an example',
    ],
  },
  {
    no: '02', title: 'The survey, not the hole', tag: 'The core change', img: 'ulp-street-scene-survey',
    blurb: 'The single habit this course exists to change: thinking from the street inwards rather than from the excavation outwards.',
    items: [
      'Why a metre-by-metre scan of the dig answers the wrong question',
      'Planning the survey from the plans and the street before the kit comes out',
      'Proving a service does not cross the excavation, and why that is time well spent',
      'What to do when the plans and the ground disagree',
    ],
  },
  {
    no: '03', title: 'Visual surveys — thinking outside the box', tag: 'Practical-led', img: 'cat-06-hsg47-training',
    blurb: 'Every visible asset is fed by something. A lamp column, a bollard, a meter box, a house — each one is telling you a cable is there, and roughly where it has to run.',
    items: [
      'Where does that get its power from? Working backwards from what you can see',
      'Reading a street: columns, bollards, meter boxes, joint boxes, covers, reinstatement scars',
      'The outlier — an asset on the far side of the road, and what that means for the crossing',
      'Building the list of what should be there before deciding what has been found',
      'Worked street scenes, start to finish',
    ],
  },
  {
    no: '04', title: 'Your own documents', tag: 'Tailored', img: '',
    blurb: 'Generic paperwork replaced with yours, so the day matches the job the delegates go back to.',
    items: [
      'Your permit to dig, and where it sits in your safe system of work',
      'Your site-specific risk assessments',
      'Your own rule on how far may be excavated before re-scanning',
      'Your reporting and escalation route when something cannot be found',
    ],
  },
];

const practicals = [
  {
    no: '01', title: 'Transmitter (Genny) applications', tag: 'Genny first', img: 'ulp-street-light-locate',
    blurb: 'Every way to apply a signal, and how to confirm it has actually taken. This is the heart of the day and the most time is spent here.',
    items: [
      'Direct connection to a known utility, correct earthing, confirming the connection and the signal',
      'Signal to a street-light cable by direct connection — correct technique and distance',
      'Signal to a domestic LV service at a property or building',
      'High-frequency signal using a capacitance technique',
      'Signal applied using the signal clamp — correct technique and distance',
      'Induced signal to a known target — correct technique and distance',
      'Blind induction sweep in two directions across a site',
      'Nulling out a buried utility',
      'Checking for airborne signal in every inductive application',
    ],
  },
  {
    no: '02', title: 'Locating — pinpointing, tracing, depth', tag: 'Find it, prove it', img: 'ulp-depth-reading',
    blurb: 'Turning a signal into a marked, traced, depth-checked line on the ground.',
    items: [
      'Controlling sensitivity to locate, then pinpoint',
      'Determining direction, tracing with the correct technique and marking the position',
      'Identifying sudden signal loss and explaining why it occurs',
      'Locating a joint — T-connection or bend',
      'Recognising being too close to the transmitter, and correcting erratic sensitivity',
      'Depth estimates at the correct distances, knowing when depth is unreliable, and checking it two ways',
    ],
  },
  {
    no: '03', title: 'Technique and strategy across the site', tag: 'Work the whole street', img: 'cat-15',
    blurb: 'The judgement that separates a competent operative from someone pressing buttons.',
    items: [
      'Using the plans to apply the transmitter signal in the best place throughout the survey',
      'Transmitter first — exhausting connection before induction, and active before passive',
      'The limitations of induction, why the signal is not selective, and when to run a blind sweep',
      'Dual-frequency transmitters and the benefits of each frequency',
      'The limitations of locating HV cables, and inducing a signal to find them',
      'Continuously scanning as the excavation progresses, and why',
      'Strike Alert — what it is for and how to disable it',
    ],
  },
  {
    no: '04', title: 'Passive — power and radio', tag: 'The final sweep', img: 'cat-50',
    blurb: 'Catching what an applied signal cannot. Last, never first.',
    items: [
      'Power survey using the sensitivity control appropriately and the correct search technique',
      'Radio survey using the sensitivity control appropriately and the correct search technique',
      'Why passive comes at the end of the survey and never at the start',
    ],
  },
  {
    no: '05', title: 'The two environments', tag: 'Where it is run', img: 'ulp-trial-hole-services',
    blurb: 'The practical is run across two contrasting types of street, so the method has to transfer rather than the site being learned.',
    items: [
      'An older network — shared ducts, lighting fed off the main, services that pre-date the drawings',
      'A newer network — PME systems where a signal at the main will not reach the property',
      'Connecting at the property: gas meter, boiler blow-off, outside light, without knocking on a door',
      'Small moulded services, and why they carry so little of the signal',
      'Plastic gas and pot ends — being honest about what will not be found',
      'Exact locations depend on the venue and are agreed with you before the day',
    ],
  },
];

const contents = [
  { id: 'objectives', label: 'Objectives' },
  { id: 'classroom', label: 'Classroom' },
  { id: 'practical', label: 'Practical' },
  { id: 'assessment', label: 'Assessment' },
];

export default function ULPAgendaBody() {
  return (
    <div className="agenda-doc">
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({
        name: 'Utility Location in Practice (ULP)',
        description: 'A practical-intensive one-day course that follows the Sygma one-day Genny and CAT course. Two practicals on two different types of street, visual surveys throughout, and an individual assessment for every delegate.',
        url: '/agendas/utility-location-in-practice',
        credential: 'Sygma In-House',
        duration: '1 day',
        mode: ['onsite'],
        coursePrerequisites: 'Sygma one-day Genny and CAT course',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Course Agendas', to: '/agendas' }, { label: 'Utility Location in Practice' }]) }} />

      {/* ============ HERO ============ */}
      <section className="relative">
        <div className="absolute inset-0">
          <FallbackImage src="cat-06-hsg47-training" alt="Sygma delegates locating buried services with the Genny and CAT on a live street" fill priority sizes="100vw" className="object-cover object-[center_60%]" />
          {/* House agenda gradient: solid behind the copy on the left, fading right so the
              photograph is actually visible rather than sitting under a flat grey sheet. */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/25" />
        </div>
        <div className="relative container mx-auto px-6 md:px-8 max-w-6xl pt-16 pb-0 md:pt-20">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-accent">Course Agenda</p>
          <p className="mt-2 text-sm text-white/60">One-day course outline · the day that follows day one</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.03]">
            Utility Location <span className="text-accent">in Practice</span>
          </h1>
          <p className="hero-strapline mt-4 text-lg md:text-xl text-white/80">
            ULP course <span className="text-accent">·</span> Genny and CAT
          </p>

          {/* Co-brand strip — this agenda is written for Severn Trent Water. The logo slot is
              deliberately empty until Severn Trent supply the asset; we do not lift a customer's
              mark off their own site. Drop the Cloudinary public_id into ST_LOGO to fill it. */}
          <div className="mt-6 inline-flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.06] px-5 py-3.5">
            {ST_LOGO ? (
              <span className="relative block h-9 w-28 shrink-0">
                <FallbackImage src={ST_LOGO} alt="Severn Trent Water" fill sizes="112px" className="object-contain" />
              </span>
            ) : null}
            <span className="text-sm text-white/85 leading-snug">
              <span className="block text-[10px] font-black uppercase tracking-widest text-accent">Written for</span>
              <span className="font-bold text-white">Severn Trent Water</span>
              <span className="text-white/60"> · tailored to your permits, risk assessments and re-scan rule</span>
            </span>
          </div>
          <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
            The second-stage day for people who already hold the one-day Genny and CAT course. Almost all of it is
            spent outside, on two deliberately different types of street, working each one as a survey from start to
            finish. Every delegate is assessed individually.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 print:hidden">
            <a href="/contact" className="rounded-full bg-accent px-6 py-3 text-sm font-black text-white hover:opacity-90 transition-opacity">Enquire about this course &rarr;</a>
            <PrintButton />
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-t border-white/10">
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

      {/* ============ PREREQUISITE ============ */}
      <section className="container mx-auto px-6 md:px-8 max-w-6xl pt-10">
        <div className="flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/[0.06] px-5 py-4">
          <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-black">!</span>
          <p className="text-sm text-foreground leading-relaxed">
            <span className="font-bold">Prerequisite:</span> each delegate must already hold the{' '}
            <span className="font-bold">Sygma one-day Genny and CAT course</span> — whichever certificate route they
            took, in-house or EUSR registered. This course builds directly on that day and assumes it.
          </p>
        </div>
      </section>

      {/* ============ WHY IT IS DIFFERENT ============ */}
      <section className="container mx-auto px-6 md:px-8 max-w-6xl pt-10 print:hidden">
        <Eyebrow>Why this is a different course, not a repeat</Eyebrow>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { t: 'The classroom shrinks', d: 'The consequences of a strike, the videos and the paperwork were covered on day one. They are not covered again. The classroom here exists only to set up the practical.' },
            { t: 'Two streets, not one', d: 'The two practicals are run in deliberately different environments — an older network and a newer one — so the method has to transfer rather than the site being learned.' },
            { t: 'Everyone is assessed', d: 'Individual assessment at the end of the day, on site, against what was taught. Not a group exercise and not a written paper alone.' },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-base font-black text-foreground tracking-tight">{x.t}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ OBJECTIVES ============ */}
      <section id="objectives" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-14 scroll-mt-24">
        <div className="max-w-3xl border-l-2 border-accent pl-6 md:pl-8">
          <Eyebrow>Course objectives</Eyebrow>
          <p className="mt-4 text-2xl md:text-3xl font-black text-foreground leading-snug tracking-tight">
            Stop scanning holes. Start surveying streets.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">By the end of the day, every delegate will be able to:</p>
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

      {/* ============ CERTIFICATE — one line, not a banner ============ */}
      <section id="certificates" className="container mx-auto px-6 md:px-8 max-w-6xl pb-4 scroll-mt-24">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-border bg-card px-5 py-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent">Certificate</span>
          <span className="text-sm text-foreground"><span className="font-bold">Sygma certificate of competence</span>, issued on completion.</span>
          <span className="text-sm text-muted-foreground">No awarding-body registration fee — the qualification the delegate already holds is not being re-issued.</span>
        </div>
      </section>

      {/* ============ CLASSROOM ============ */}
      <section id="classroom" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16 scroll-mt-24">
        <div className="max-w-3xl border-l-2 border-accent pl-6 md:pl-8 mb-10">
          <Eyebrow>In the classroom · the short half</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight">Only what the practical needs</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Roughly a third of the classroom time of the initial course. Everything here exists to make the two
            practicals land — nothing is repeated for the sake of covering it again.
          </p>
        </div>
        <div className="mod-grid space-y-5">
          {classroom.map((m) => (
            <div key={m.no} className="mod-card grid md:grid-cols-12 gap-0 rounded-2xl border border-border bg-card overflow-hidden">
              {m.img ? (
                <div className="imgbox relative md:col-span-5 h-56 md:h-auto md:min-h-[15rem]">
                  <ShotImage id={m.img} alt={`${m.title} — Utility Location in Practice`} />
                </div>
              ) : null}
              <div className={`p-6 md:p-7 ${m.img ? 'md:col-span-7' : 'md:col-span-12'}`}>
                <div className="flex items-baseline gap-3">
                  <span className="text-accent font-black text-sm">{m.no}</span>
                  <p className="text-lg font-black text-foreground tracking-tight">{m.title}</p>
                </div>
                <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-accent">{m.tag}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.blurb}</p>
                <ul className="mt-4 space-y-2">
                  {m.items.map((it, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-foreground/80 leading-relaxed">
                      <span className="shrink-0 mt-1.5 h-1 w-1 rounded-full bg-accent" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PRACTICAL ============ */}
      <section id="practical" className="bg-muted/30 py-12 md:py-16 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="max-w-3xl border-l-2 border-accent pl-6 md:pl-8 mb-4">
            <Eyebrow>On the ground · most of the day</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight">Most of the day is on the ground</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every Genny application, every tracing and depth technique, worked on real streets rather than
              demonstrated. Run across two contrasting environments with a break between them to go over what each
              pair found, so the method has to transfer rather than the site being learned.
            </p>
          </div>
          <div className="mb-10 ml-6 md:ml-8 max-w-3xl">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Exactly what is available varies by site, so the two locations are agreed with you when the course is
              booked.
            </p>
          </div>
          <div className="mod-grid space-y-5">
            {practicals.map((m) => (
              <div key={m.no} className="mod-card grid md:grid-cols-12 gap-0 rounded-2xl border border-border bg-card overflow-hidden">
                <div className="imgbox relative md:col-span-5 h-60 md:h-auto md:min-h-[17rem]">
                  <ShotImage id={m.img} alt={`${m.title} — practical session on Utility Location in Practice`} />
                </div>
                <div className="p-6 md:p-7 md:col-span-7">
                  <div className="flex items-baseline gap-3">
                    <span className="text-accent font-black text-sm">Practical {m.no}</span>
                    <p className="text-lg font-black text-foreground tracking-tight">{m.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.blurb}</p>
                  <ul className="mt-4 space-y-2">
                    {m.items.map((it, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-foreground/80 leading-relaxed">
                        <span className="shrink-0 mt-1.5 h-1 w-1 rounded-full bg-accent" />
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

      {/* ============ ASSESSMENT ============ */}
      <section id="assessment" className="container mx-auto px-6 md:px-8 max-w-6xl py-12 md:py-16 scroll-mt-24">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <Eyebrow>Assessment</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight">Every delegate, individually</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The day closes with an individual practical assessment. Each delegate works a short survey on their own,
              against what has been taught, and is assessed on the method rather than on whether they happen to find a
              particular cable.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                'Worked alone, on site, at the end of the day',
                'Assessed on the survey method — plan, look, connect, trace, prove',
                'Their own recorded data reviewed with them as part of it',
                'Clear pass or referral, with what to work on either way',
                'A referral means further support, not a failed ticket — the qualification already held is unaffected',
              ].map((x, i) => (
                <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed border-b border-border pb-2.5">
                  <span className="shrink-0 mt-0.5 text-accent font-black">✓</span>
                  <span className="text-[15px]">{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5 imgbox relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <ShotImage id="cat-16" alt="Individual practical assessment on a Sygma utility location course" w={720} h={520} />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-foreground text-white py-12 md:py-14 print:hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Talk to us about running ULP</h2>
          <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
            We tailor the classroom section to your own permits, risk assessments and re-scan rule, and agree the two
            practical locations with you before the day.
          </p>
          <a href="/contact" className="mt-7 inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-black text-white hover:opacity-90 transition-opacity">Get in touch &rarr;</a>
        </div>
      </section>
    </div>
  );
}
