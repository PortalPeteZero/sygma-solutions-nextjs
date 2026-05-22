import { faqPageSchema, breadcrumbSchema } from '@/lib/schema';
import { Metadata } from 'next';
import Link from 'next/link';
import PhoneLink from '@/components/PhoneLink';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'CAT and Genny Training London | EUSR CAT 1 Course',
  description: 'CAT and Genny training in London. On-site CAT4 and Genny equipment courses across the capital. EUSR CAT 1 and ProQual accredited. CITB ATO. Half or full day.',
  alternates: { canonical: 'https://sygma-solutions.com/cat-and-genny-training-london' },
  openGraph: {
    title: 'CAT and Genny Training London | EUSR CAT 1 Course',
    description: 'CAT and Genny training in London. On-site CAT4 and Genny equipment courses across the capital. EUSR CAT 1 and ProQual accredited. CITB ATO. Half or full day.',
    url: 'https://sygma-solutions.com/cat-and-genny-training-london',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function CatAndGennyTrainingLondon() {
  const faqs = [
    { q: 'What does a CAT and Genny training course in London cover?', a: 'A CAT and Genny course teaches your operatives to operate the CAT4 cable avoidance tool and the Genny signal generator competently and safely. Delegates learn the four CAT locating modes, how to apply a Genny signal to a target line, depth and signal interpretation, and the EUSR Category 1 standard for locating underground utility services. Theory is paired with hands-on practical instruction on your own London site.' },
    { q: 'Where in London do you deliver CAT and Genny training?', a: 'Sygma delivers CAT and Genny training on site across all London boroughs, the M25 corridor and the wider South East. Your operatives train at your depot, yard or project site using the buried services already in the ground there, rather than travelling to a centre outside the capital.' },
    { q: 'Do you provide the CAT4 and Genny equipment for the course?', a: 'Yes. Our trainers bring the CAT4 cable avoidance tools, Genny signal generators, accessories and all assessment materials to your London site. Your team can also train on their own equipment so they finish confident with the exact kit they use day to day.' },
    { q: 'What qualification do operatives get after CAT and Genny training?', a: 'We deliver several routes from one CAT and Genny programme: a Sygma in-house certificate issued the same day, the <a href=/courses/eusr-cat1>EUSR Category 1</a> card, and the externally verified <a href=/courses/proqualcat1-training>ProQual CAT1</a> qualification. We help London teams pick the route that matches their clients and frameworks.' },
    { q: 'Can we do a half day CAT and Genny course in London?', a: 'Yes. Half day CAT and Genny sessions suit London teams with tight schedules, refresher training, or inducting new starters. A half day covers core CAT4 and Genny competency with practical assessment. Full days are used for first-time certification and the EUSR or ProQual routes.' },
    { q: 'Is CITB funding available for CAT and Genny training in London?', a: 'Sygma Solutions is a CITB Approved Training Organisation. CITB-registered London businesses may be able to access funding towards CAT and Genny course costs through the CITB Employer Network model.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "All Courses", to: "/courses" }, { label: "CAT and Genny Training London" }]) }} />

      {/* Hero */}
      <div className="relative w-full overflow-hidden bg-foreground">
        <Image src="cat-14" alt="CAT and Genny training in London" fill className="absolute inset-0 object-contain" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute inset-0 border-l-4 border-accent" />
        <div className="relative flex flex-col justify-end p-8 md:p-12 h-full">
          <div className="eyebrow text-accent mb-2">CAT &amp; Genny Equipment Training</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-primary-foreground mb-3">CAT and Genny Training London | Equipment Specialists, On-Site Delivery</h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">Sygma Solutions delivers CAT and Genny training in London and across the South East, on your site, using the CAT4 cable avoidance tool and Genny signal generator your operatives use every day. Twenty-one years specialising in underground utility location, EUSR and ProQual accredited, a CITB Approved Training Organisation. We come to you. No travel cost, no lost site time.</p>
          <nav className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/locations" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Locations</Link>
            <span className="text-primary-foreground/50">/</span>
            <span className="text-primary-foreground/80">London</span>
          </nav>
        </div>
      </div>

      {/* Stats bar */}
      <section className="bg-muted/30 border-y border-border py-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {['21 Years in Business', '70,000 Utility Strikes Per Year in the UK', 'CITB Approved Training Organisation'].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses table */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">What We Deliver</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CAT and Genny Courses We Deliver in London</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">Every course below is delivered as a private, in-house session at your London premises, with hands-on practical training on genuine CAT4 and Genny equipment. You pick the date; we bring the tools, signal generators and assessors. Each route certifies your operatives to locate buried utility services correctly before any excavation starts.</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-5 py-3 font-bold">Course</th>
                <th className="text-left px-5 py-3 font-bold hidden md:table-cell">Duration</th>
                <th className="text-left px-5 py-3 font-bold">Most Suitable For</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: 'CAT and Genny Training (In-House Certificate)', href: '/courses/cat-and-genny-training', duration: '1 day', suitable: 'Operatives new to CAT and Genny equipment. Practical CAT4 and Genny instruction with a Sygma in-house certificate issued the same day.' },
                { course: 'EUSR CAT1 (EUSR Category 1)', href: '/courses/eusr-cat1', duration: '1 day', suitable: 'Teams that need the EUSR card. The industry-standard CAT and Genny qualification covering equipment operation and safe location of utility services.' },
                { course: 'EUSR CAT 1 & 2 Combined', href: '/courses/eusr-cat1-cat2-combined', duration: '2 days', suitable: 'Teams that need both locating and safe-digging competence in one programme.' },
                { course: 'ProQual CAT1 (Accredited by ProQual)', href: '/courses/proqualcat1-training', duration: '1 day', suitable: 'Teams requiring an externally verified, individually assessed CAT and Genny qualification. Theory and practical assessment.' },
                { course: 'ProQual CAT1 Plus (Most Advanced)', href: '/courses/proqualcat1plus', duration: '2 days', suitable: 'Operatives in complex, high-risk London environments. The most advanced CAT and Genny qualification available in the UK.' },
                { course: 'OSCA (On-Site Competency Assessment)', href: '/osca', duration: 'Half or full day', suitable: 'Verifying real site competency between training cycles. Independent assessment of your team on your own ground.' },
              ].map((row, i) => (
                <tr key={row.course} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                  <td className="px-5 py-3 font-semibold text-foreground"><Link href={row.href} className="text-primary hover:underline">{row.course}</Link></td>
                  <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{row.duration}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.suitable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted"><Image src="cat-09" width={1200} height={900} alt="Operative using a CAT4 cable avoidance tool on a London site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted"><Image src="cat-56" width={1200} height={900} alt="Applying a Genny signal generator during CAT and Genny training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted"><Image src="cat-69" width={1200} height={900} alt="Practical CAT and Genny equipment training in London" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" /></div>
      </div>

      {/* Image break */}
      <div className="w-full overflow-hidden bg-muted" style={{ aspectRatio: "1600 / 733" }}>
        <Image src="cat-77" width={1600} height={733} alt="CAT and Genny equipment training in London" sizes="100vw" className="w-full h-full object-cover" />
      </div>

      {/* What you'll learn — equipment angle */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Equipment Skills</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">What Your Team Will Learn: CAT4 and Genny Operation</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="font-bold text-foreground mb-3">The CAT4 Cable Avoidance Tool</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">The CAT4 is the industry-standard locator and the heart of every CAT and Genny course. Your operatives learn how the device detects buried services, how to sweep an area methodically, how to read signal strength and depth, and where the tool&apos;s limits lie. We cover correct gain settings, how shallow and deep services behave differently, and the everyday mistakes — sweeping too fast, ignoring orientation — that cause missed lines and strikes.</p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">The Genny Signal Generator</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">The Genny is what turns a guess into a located service. Trainees learn direct connection and induction, how to apply a clean signal to a target cable or pipe, and how to trace it accurately along its route. Our Genny-first methodology — leading with the Genny rather than relying on passive modes — is the single biggest difference between an operator who is competent and one who is confident.</p>
          </div>
        </div>
        <h3 className="font-bold text-foreground mb-4">The Four CAT Locating Modes Every Operator Must Master</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { mode: '1. Power Mode', desc: 'Passive detection of the electromagnetic field from loaded power cables. Cables not carrying load at the time of the survey may give little or no signal.' },
            { mode: '2. Genny (Signal) Mode', desc: 'Active location using a signal applied by the Genny. The most accurate way to identify and trace a specific line.' },
            { mode: '3. Radio Mode', desc: 'Passive detection of VLF radio signals re-radiated by metallic services. Signal varies with depth, soil and conductor length.' },
            { mode: '4. Avoidance Mode', desc: 'All passive modes combined into a single sweep to check for buried services before excavation — the standard pre-dig safety check.' },
          ].map((item) => (
            <div key={item.mode} className="border border-border rounded-lg bg-card p-5">
              <h4 className="font-bold text-foreground mb-1 text-sm">{item.mode}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why on-site London */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow text-primary mb-3">On-Site Delivery</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why London Teams Choose On-Site CAT and Genny Training</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>Nowhere in the UK packs more buried services under the ground than London. Power, gas, water, telecoms, fibre and district heating run in dense, layered and often poorly recorded networks beneath every street — and Crossrail, Thames Tideway, HS2 and constant development keep operatives digging near them daily. Competent CAT4 and Genny operation is not a box-tick here; it is what stands between a crew and a serious strike.</p>
            <p>Training on your own London site means your operatives learn the equipment against the services they actually work around — the real congestion, the real signal interference from adjacent lines, the real ground. That transfers far better than a clean demo field outside the M25.</p>
            <p>We deliver across every London borough, the M25 corridor and the wider South East, half day or full day, with travel included in the quote.</p>
          </div>
        </div>
      </section>

      {/* Image break */}
      <div className="w-full overflow-hidden bg-muted" style={{ aspectRatio: "1400 / 410" }}>
        <Image src="cat-90" width={1400} height={410} alt="On-site CAT and Genny training conditions in London" sizes="100vw" className="w-full h-full object-cover" />
      </div>

      {/* CITB */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Funding</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CITB Funding for CAT and Genny Training in London</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          <p>Sygma Solutions is a CITB Approved Training Organisation. London construction businesses registered with CITB may be able to access funding support towards eligible CAT and Genny course costs through the CITB Employer Network model.</p>
          <p>Ask your CITB Employer Network adviser about funding for this training, or contact Sygma and we will help you through the process.</p>
        </div>
      </section>

      {/* Half / full day */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow text-primary mb-3">Flexible Scheduling</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Half Day and Full Day CAT and Genny Training in London</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-3">Half Day Sessions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">A focused half day covers core CAT4 and Genny competency: equipment operation, the four locating modes and a practical site check. Ideal for refresher training, inducting new starters, or topping up certification for experienced London crews. Typically four hours including practical assessment, up to eight delegates.</p>
              <p className="text-xs text-muted-foreground font-semibold">Suitable for: experienced operatives, inductions, rapid team updates</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-3">Full Day Courses</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">A full day allows deeper instruction on CAT4 and Genny operation, depth and signal interpretation, and extended practical time on your London site — and is the route for first-time certification and the EUSR CAT1 or ProQual CAT1 qualifications. Typically seven hours including breaks.</p>
              <p className="text-xs text-muted-foreground font-semibold">Suitable for: new operatives, full competency, EUSR and ProQual routes</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-4xl">On-site delivery means no travel time for your delegates and practical CAT and Genny training using your real site conditions, cable routes and buried services. Whether you need a half day refresher or a full certification day, we deliver at your London premises around your schedule.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow text-primary mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Questions About CAT and Genny Training in London</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-border rounded-lg p-6 bg-background">
                <h3 className="font-bold text-foreground mb-3">{q}</h3>
                <p className="text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:font-semibold [&_a:hover]:underline" dangerouslySetInnerHTML={{ __html: a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other regions + sibling differentiation */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Other Regions</p>
        <h2 className="text-2xl font-black mb-6 text-foreground">CAT and Genny Training Across the UK</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">Sygma delivers on-site CAT and Genny training UK-wide. See our regional course guides:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/cat-and-genny-training-birmingham" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">CAT and Genny Training Birmingham</Link>
          <Link href="/cat-and-genny-training-manchester" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">CAT and Genny Training Manchester</Link>
          <Link href="/cat-and-genny-training-scotland" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">CAT and Genny Training Scotland</Link>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed border-l-2 border-border pl-4">Looking at the wider cable-avoidance and utility-avoidance picture rather than the CAT and Genny equipment specifically? See <Link href="/cable-avoidance-training-london" className="text-primary font-semibold hover:underline">Cable Avoidance Training London</Link>.</p>
      </section>

      {/* CTA */}
      <section className="bg-primary border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-primary-foreground">Get a Quote for CAT and Genny Training in London</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Tell us how many delegates need CAT and Genny training, the route you need — in-house, EUSR or ProQual — and your preferred dates. We will confirm availability and send a quote within one working day.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-primary-foreground text-primary font-bold text-sm hover:bg-primary-foreground/90 transition-colors">Get a London CAT and Genny Quote</Link>
            <PhoneLink className="inline-flex items-center px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">Call Us</PhoneLink>
          </div>
        </div>
      </section>
    </>
  );
}
