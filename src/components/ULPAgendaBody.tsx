import FallbackImage from '@/components/FallbackImage';
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
const ST_LOGO = '';

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
  'Connect the Genny to the awkward things — columns, house services, street furniture',
  'Choose connection over induction, and know why the order changes the answer',
  'Trace a service that turns out not to cross the dig, and treat that as a result',
  'Recognise when a suspected service has not been found, and stop',
  'Read your own recorded data and see what it says about how you worked',
  'Know honestly what the equipment will not find, and what to do then',
];

type Module = { no: string; title: string; tag: string; blurb: string; img: string; items: string[] };

const classroom: Module[] = [
  {
    no: '01', title: 'What the data says about us', tag: 'Opens the day', img: 'cat-37',
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
    no: '02', title: 'The survey, not the hole', tag: 'The core change', img: 'cat-09',
    blurb: 'The single habit this course exists to change: thinking from the street inwards rather than from the excavation outwards.',
    items: [
      'Why a metre-by-metre scan of the dig answers the wrong question',
      'Planning the survey from the plans and the street before the kit comes out',
      'Proving a service does not cross the excavation, and why that is time well spent',
      'What to do when the plans and the ground disagree',
    ],
  },
  {
    no: '03', title: 'Visual surveys — thinking inside the box', tag: 'Practical-led', img: 'cat-16',
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
    no: '04', title: 'Your own documents', tag: 'Tailored', img: 'cat-50',
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
    no: '01', title: 'The older street', img: 'cat-09',
    blurb: 'Where the network has grown over decades — shared ducts, lighting fed off the main, services that pre-date the drawings.',
    items: [
      'Visual survey first, before any sweep',
      'Clipping the Genny directly to lighting columns and street furniture',
      'Following a service that leaves the footpath and crosses the road',
      'Signal strength, sensitivity control, and depth under real conditions',
      'What the drawings show, against what the ground actually holds',
    ],
  },
  {
    no: '02', title: 'The newer street', img: 'cat-16',
    blurb: 'Modern housing behaves differently. PME systems, individual moulded services, and cables the signal will not travel to unless you work from the property back.',
    items: [
      'Why a signal applied at the main will not reach the property on a PME system',
      'Connecting at the property — gas meter, boiler blow-off, outside light, without knocking on a door',
      'Small moulded services, and why they carry so little of the signal',
      'Plastic gas, pot ends, and being honest about what will not be found',
      'Deciding to stop: what a suspected service is, and what to do when it is missing',
    ],
  },
];

const contents = [
  { id: 'objectives', label: 'Objectives' },
  { id: 'certificates', label: 'Certificate' },
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
          <FallbackImage src="cat-06-hsg47-training" alt="Sygma delegates locating buried services with the Genny and CAT on a live street" fill priority sizes="100vw" className="object-cover object-[center_68%]" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative container mx-auto px-6 md:px-8 max-w-6xl pt-16 pb-0 md:pt-20">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-accent">Course Agenda</p>
          <p className="mt-2 text-sm text-white/60">One-day course outline · the day that follows day one</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.03]">
            Utility Location <span className="text-accent">in Practice</span>
          </h1>
          <p className="hero-strapline mt-4 text-lg md:text-xl text-white/80">
            ULP <span className="text-accent">·</span> Genny and CAT <span className="text-accent">·</span> two streets, one method
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

      {/* ============ CERTIFICATE ============ */}
      <section id="certificates" className="bg-foreground text-white py-12 md:py-14 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="mb-6">
            <Eyebrow>Certificate</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">Sygma certificate, no registration fee</h2>
            <p className="mt-3 text-white/70 max-w-2xl text-sm leading-relaxed">
              This course carries a Sygma certificate of competence. It does not re-issue the qualification the
              delegate already holds, so there is no awarding-body registration fee on top.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 print-cols-2">
            {cert.map((c) => (
              <div key={c.name} className="cert-card group relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:border-accent/50 transition-colors pb-keep">
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">{c.body}</p>
                <p className="mt-3 text-xl font-black">{c.name}</p>
                <p className="mt-5 text-[10px] font-black uppercase tracking-widest text-white/40">Certificate</p>
                <p className="mt-1 text-3xl font-black text-accent">{c.cost} <span className="text-sm font-bold text-white/50">{c.unit}</span></p>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
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
        <div className="mod-grid grid md:grid-cols-2 gap-6">
          {classroom.map((m) => (
            <div key={m.no} className="mod-card rounded-2xl border border-border bg-card overflow-hidden">
              <div className="imgbox relative h-40">
                <FallbackImage src={m.img} alt={`${m.title} — Utility Location in Practice`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6">
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
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight">Two streets, deliberately different</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The two practical sessions are run in two different environments, with a short break between them to go
              over what each pair found. The point is that the method has to transfer — an older network and a newer
              one behave differently, and a delegate who can only work one of them has not learned the method.
            </p>
          </div>
          <div className="mb-10 ml-6 md:ml-8 max-w-3xl">
            <p className="text-xs text-muted-foreground leading-relaxed">
              We choose the two locations to contrast as far as the venue allows. Exactly what is available varies by
              site, so the specific streets are agreed with you when the course is booked.
            </p>
          </div>
          <div className="mod-grid grid md:grid-cols-2 gap-6">
            {practicals.map((m) => (
              <div key={m.no} className="mod-card rounded-2xl border border-border bg-card overflow-hidden">
                <div className="imgbox relative h-48">
                  <FallbackImage src={m.img} alt={`${m.title} — practical session on Utility Location in Practice`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-6">
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
            <FallbackImage src="cat-50" alt="Individual practical assessment on a Sygma utility location course" fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
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
