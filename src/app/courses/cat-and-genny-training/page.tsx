import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema, videoObjectSchema } from "@/lib/schema";
import Image from 'next/image';

const faqs = [
  {
    q: "What is CAT and Genny training?",
    a: "The course teaches operatives to use a cable locator (CAT) and signal generator (Genny) to find underground services before excavation. Sygma teaches a Genny-First methodology and offers EUSR CAT1, ProQual CAT1, and in-house certification routes.",
    thumb: "cat-89",
    thumbAlt: "Sygma delegate operating a Radiodetection CAT4+ cable locator, the foundational CAT and Genny training equipment",
  },
  {
    q: "How long does a CAT and Genny course take?",
    a: "One or two days. One-day format covers theory plus assessment for delegates with some experience. Two-day formats split classroom and site work, or add the ProQual CAT1 Plus Genny-First assessment on day two.",
    thumb: "cat-04",
    thumbAlt: "CAT and Genny course duration, outdoor training session",
  },
  {
    q: "Can CAT and Genny training be done online?",
    a: "Classroom theory can be delivered online for awareness and refreshers, Sygma offers a CAT4 HSG47 awareness online course for that. The full assessed qualification (EUSR CAT1 or ProQual CAT1) requires a real site practical and cannot be completed entirely online.",
    thumb: "cat-89",
    thumbAlt: "Online vs on-site CAT and Genny training, practical CAT4 locator session",
  },
  {
    q: "How much does a CAT and Genny course cost?",
    a: "In-house day rate for up to 8 delegates at your site, or per person on open courses. Travel included, no hidden extras. CITB-levy employers may access funding via the CITB Employer Network. Contact us for a tailored quote.",
    thumb: "cat-66",
    thumbAlt: "Sygma CAT and Genny course delegates with CAT4+ locators on a UK training site",
  },
  {
    q: "Do you need to be trained to use a CAT scanner?",
    a: "Yes. HSG47 requires anyone using cable and pipe locating equipment to be trained and competent. Most principal contractors and utility companies require a recognised qualification before allowing operatives to use locating equipment on site.",
    thumb: "cat-14",
    thumbAlt: "CAT scanner training requirement, on-site CAT and Genny training assessment",
  },
  {
    q: "How long is the CAT and Genny qualification valid for?",
    a: "EUSR CAT1 and ProQual CAT1 certificates are valid for 3 years. Sygma in-house certificates have no fixed expiry, but most employers require refresher training every 3 years.",
    thumb: "cat-11",
    thumbAlt: "CAT and Genny qualification validity, training assessment locating buried services",
  },
  {
    q: "Is EUSR CAT1 the same as EUS CAT1, or the same as CAT and Genny training?",
    a: "EUSR CAT1 and EUS CAT1 are the same qualification. CAT and Genny training is the broader practical course; EUSR CAT1 is the specific accredited qualification many employers ask for. Sygma delivers both, plus ProQual CAT1 and ProQual CAT1 Plus.",
    thumb: "cat-70",
    thumbAlt: "EUSR CAT1 and CAT and Genny training, hands-on Genny signal application",
  },
  {
    q: "What equipment do delegates need to bring?",
    a: "Each operative should bring the locator and signal generator they use on site. Sygma provides Radiodetection CAT4 and Genny4 as backup. Any manufacturer (Vivax-Metrotech vLoc, Leica DSX, Radiodetection RD8200/RD8100) is suitable. Minimum 1 locator per 3 delegates if sharing.",
    thumb: "cat-74",
    thumbAlt: "CAT and Genny equipment for course, Genny4 signal generator demonstration",
  },
  {
    q: "Can the course be tailored to our sites and risk profile?",
    a: "Yes. Include your permit-to-dig procedures, strike history, site-specific hazards, and documentation. The QTS surface-laid cables programme is one example of how we customise the course.",
    thumb: "cat-66",
    thumbAlt: "Tailored CAT and Genny course, delegates practising utility location techniques",
  },
  {
    q: "Is the course suitable for delegates with no previous locating experience?",
    a: "Yes. Accessible to delegates at any level. Complete beginners should take the two-day format for sufficient practical time on site.",
    thumb: "cat-86",
    thumbAlt: "CAT and Genny course for beginners, practical utility location and excavation",
  },
  {
    q: "Can we combine this course with EUSR CAT2 Safe Dig?",
    a: "Yes. Sygma offers combined formats with EUSR CAT1, CAT2 Safe Dig, and CAT and Genny content in a single programme. Contact us for combined booking options.",
    thumb: "cat-70",
    thumbAlt: "EUSR CAT1 and CAT2 combined CAT and Genny training, two operatives using a CAT4 locator alongside Safe Dig assessment markers",
  },
  {
    q: "What qualifications do Sygma trainers hold?",
    a: "Sygma trainers are utility location professionals with real-world field experience, not generalist H&S trainers. They are TAQA-qualified and bring PAS128 field experience and backgrounds in large-scale infrastructure, so you learn from people who have done the job.",
    thumb: "cat-04",
    thumbAlt: "Sygma CAT and Genny trainers, delivering outdoor training",
  },
];


export const metadata: Metadata = {
  title: 'CAT and Genny Training Course | EUSR CAT1 & ProQual | On-Site UK',
  description: 'On-site CAT and Genny training across the UK. EUSR CAT1 and ProQual CAT1 accredited, half or full day. Travel included. Independent. Book today.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/cat-and-genny-training' },
  openGraph: {
    title: 'CAT and Genny Training Course | EUSR CAT1 & ProQual | On-Site UK',
    description: 'On-site CAT and Genny training across the UK. EUSR CAT1 and ProQual CAT1 accredited, half or full day. Travel included. Independent. Book today.',
    url: 'https://sygma-solutions.com/courses/cat-and-genny-training',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-11', width: 1200, height: 630, alt: 'CAT and Genny training assessment on site using CAT4 cable locator and Genny4 signal generator' }],
    type: 'website',
  },
};

export default function GennyCatTraining() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'CAT and Genny Training', description: 'CAT and Genny training from Sygma Solutions. EUSR and ProQual-accredited cable avoidance training delivered nationwide. Genny-First methodology, HSG47 compliant.', url: '/courses/cat-and-genny-training', duration: '1-2 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'CAT and Genny Training' }]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: videoObjectSchema({
        name: 'CAT and Genny Training: The Genny First Approach Explained',
        description: 'Sygma Solutions explains why the standard Power, Radio, Genny scanning sequence is the wrong way round. Demonstrates the Genny-First methodology that locates buried utilities reliably and prevents cable strikes on site.',
        url: 'https://sygma-solutions.com/courses/cat-and-genny-training',
        youtubeId: 'IgxGksU3WQ4',
        uploadDate: '2026-04-15T00:00:00+00:00',
        duration: 'PT4M30S',
        thumbnailUrl: 'https://i.ytimg.com/vi/IgxGksU3WQ4/maxresdefault.jpg',
      }) }} />

      <InnerPageHero
        eyebrow="Utility Avoidance"
        headline="CAT and Genny Training Course"
        sub="Not just Genny & CAT equipment operation. The scientific understanding and field-verified habits that eliminate service strikes."
        image="cat-11"
        alt="Sygma Solutions operative using a Radiodetection CAT4+ cable locator on site during a CAT and Genny training course"
        breadcrumbs={[
          { label: "Training", href: "/training/cable-location-avoidance" },
          { label: "CAT and Genny Training" },
        ]}
      />

      {/* Above-fold CTA + trust strip — SEO audit 2026-05-11 */}
      <section className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-semibold text-muted-foreground">
              <span className="inline-flex items-center"><span className="text-accent mr-1.5">●</span>EUSR-registered</span>
              <span className="inline-flex items-center"><span className="text-accent mr-1.5">●</span>ProQual-accredited</span>
              <span className="inline-flex items-center"><span className="text-accent mr-1.5">●</span>On-site UK-wide</span>
              <span className="inline-flex items-center"><span className="text-accent mr-1.5">●</span>Travel included</span>
            </div>
            <div className="flex flex-col md:items-end gap-1.5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">From £95 per person</p>
              <Link
                href="/contact#enquiry-form"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Book CAT and Genny Training →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Opening definition,AI Overview & PAA eligibility */}
      <section className="bg-background py-8">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">CAT and Genny training is a practical safety course that teaches operatives how to use a cable locator (CAT) and signal generator (Genny) to find buried cables and pipes before excavation.</strong> Sometimes called "cat scanner training", it covers electromagnetic theory, four detection modes, signal interpretation, and hands-on cable locating and service detection on a real site. The course teaches operatives how to <strong className="text-foreground">locate underground utilities safely</strong> using both active signals from the transmitter and passive signals from the ground itself.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            This course fulfils the <Link href="/courses/hsg47-training" className="text-primary font-semibold hover:underline">HSG47 training</Link> requirement for anyone using cable locating equipment near underground services. <strong className="text-foreground">Successful delegates can be assessed for an EUSR CAT1 card, ProQual CAT1 certificate, or Sygma in-house certification.</strong>
          </p>
        </div>
      </section>

      {/* Key USP stats */}
      <section className="bg-foreground py-6">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">21 Years</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">One Specialism</p>
              <p className="text-xs text-white/60">Underground utility location training is all we do.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">70-80%</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Increase in Genny Usage</p>
              <p className="text-xs text-white/60">Measured through locator data downloads after Sygma training.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">Proven</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Strike Reduction Record</p>
              <p className="text-xs text-white/60">Clients report measurable reductions in service strikes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Course Is For */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Who Is This Course For</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Designed For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Complete Beginners",
                desc: "No prior experience of Genny or CAT equipment. Zero to competent in 1-2 days.",
              },
              {
                title: "Site Operatives and Groundworkers",
                desc: "Anyone who locates buried services before excavation. Required if your team breaks ground near underground services.",
              },
              {
                title: "Civil Engineers and Supervisors",
                desc: "Understand the equipment your teams are using, supervise safely, and audit survey work on site.",
              },
              {
                title: "Organisations Introducing Genny-First",
                desc: "Companies transitioning to Genny-First as the workforce-wide method.",
              },
            ].map((p, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">Why This Course Exists</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The Problem with Standard Training</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most standard courses teach operatives to press the on button and walk. They know what the beep means, but not why the signal behaves differently in wet or disturbed ground, what happens to accuracy near a joint, or why a passive Power-mode reading misleads. The result is <strong className="text-foreground">certificates handed out without changing how operatives work on site</strong>.
              </p>
              <p>
                Sygma was built to fix that. We say "Genny & CAT" rather than the industry-standard "CAT and Genny" on purpose: the rest of the industry puts the locator first, but <strong className="text-foreground">we put the signal generator first, because that is the change that reduces service strikes</strong>. Start with the Genny, exhaust every connection, verify what is in the ground before relying on passive modes.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Course at a Glance</p>
            {[
              ["Format", "1-day or 2-day; in-house, EUSR CAT1, ProQual CAT1 or ProQual CAT1 Plus (see the formats table below)"],
              ["Location", "Delivered at your site nationwide | Wigan HQ available as alternative"],
              ["Max Delegates", "8 (all formats)"],
              ["Assessment", "Written MCQ (70% pass) + practical assessment on site"],
              ["Certificate", "Certificate of completion with written and practical results"],
              ["Equipment", "Each operative should use their own site equipment. Sygma provide Radiodetection CAT4 and Genny4 as backup. Any manufacturer's locator and signal generator is suitable."],
              ["CITB", "CITB Approved Training Organisation"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="eyebrow text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genny & CAT Terminology Callout */}
      <section className="bg-accent/5 border-y border-accent/20 py-10">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow mb-3">Why We Say It Differently</p>
          <h2 className="text-xl font-black mb-4 text-foreground">Genny & CAT, Not CAT & Genny</h2>
          <p className="text-muted-foreground leading-relaxed">The industry calls it CAT and Genny, or <Link href="/courses/cable-avoidance-training" className="text-primary font-semibold hover:underline">cable avoidance training</Link>. We say Genny & CAT because the order is the method: <strong className="text-foreground">apply a known signal from the Genny, trace it across the site, and verify it before trusting passive readings</strong>. Active signals are reliable; passive signals are easily misread. Twenty-one years of post-strike data shows the same thing: most preventable strikes happen when operatives skip the Genny.</p>
        </div>
      </section>

      {/* Online vs On-Site format question */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow mb-3">Format Question</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Online vs On-Site Training</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Searches for "<strong className="text-foreground">cat and genny training online</strong>" are common, but Sygma's full course is on-site by design. The reason is the practical assessment: a course without hands-on operation on a real site <strong className="text-foreground">cannot prove competence under HSG47</strong>, and cannot be assessed against the EUSR CAT1 or ProQual CAT1 practical criteria. Online theory alone will not give an operative the qualification.
            </p>
            <p>
              Where online does work is the awareness layer: refreshers and supervisors who need to understand the equipment without operating it. For that, Sygma offers a <Link href="/courses/cat4-hsg47-awareness-online" className="text-primary font-semibold hover:underline">CAT4 HSG47 Awareness Online</Link> course covering theory, data download and HSG47 compliance, designed to pair with on-site training rather than replace it.
            </p>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-12 max-w-5xl">
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-04" width={1200} height={900} alt="On-site CAT and Genny training delivered outdoors by Sygma Solutions" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-72" width={1200} height={900} alt="Delegates on a CAT and Genny course using cable and pipe locating equipment on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-86" width={1200} height={900} alt="Practical utility location and excavation element of the CAT and Genny training course" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>

      {/* Theory content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Course Content</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CAT and Genny Course Content: Cable Avoidance Training on Your Ground</h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            The classroom covers electromagnetic theory and the four detection modes. The practical session moves to site with the <strong className="text-foreground">Genny tools</strong> (signal generator, induction clamp, sonde, earthing accessories) to apply active signals and trace <strong className="text-foreground">underground utilities</strong> in real conditions. <strong className="text-foreground">Cable plans</strong> and service drawings are cross-checked against locator readings throughout.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Theory */}
            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">Classroom: Theory</p>
                <p className="text-white/70 text-sm">The full technical and regulatory context</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {[
                    "Legislation and HSE guidance: HSG47, client and designer responsibilities",
                    "Utility networks: cable and pipe types, materials, connectivity",
                    "Buried service plans (STATS): interpreting plans and their limitations",
                    "Electromagnetic theory: how a cable locator works, and its limitations",
                    "Operation in all four modes (Power, Radio, Genny, Avoidance)",
                    "Signal interpretation: joints, direction changes, depth, ambiguous readings",
                    "Transmitter applications: dual frequency, capacitance, earthing, blind induction, nulling out",
                    "Calibration, pre-use checks and data logging (CAT Manager)",
                    "Permits and paperwork: permits to dig, safe systems of work",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Practical */}
            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">Site-Based: Practical</p>
                <p className="text-white/70 text-sm">Every principle proved on real underground services</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  The practical session takes course attendees outside onto a real site to prove every safety procedure and practical skill taught in the classroom. Sygma uses your own site wherever possible, which means operatives are locating underground services on the same ground and the same utility types they will encounter daily.
                </p>
                <ul className="space-y-2">
                  {[
                    "Reading service plans to plan the survey",
                    "Site visual checks: above-ground indicators of buried services",
                    "Applying a signal via direct connection, capacitance, and induction",
                    "All four locating modes with Genny-First emphasis throughout",
                    "Locating problem services: street lighting, LV, small comms, joints and direction changes",
                    "Blind induction sweeps, earth positioning and nulling out nearby services",
                    "Individual practical assessment against a documented standard",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <div className="w-full overflow-hidden bg-muted" style={{ aspectRatio: "1391 / 426" }}>
        <Image src="cat-43" width={1391} height={426} alt="CAT and Genny training delivered on a live utility site" sizes="100vw" className="w-full h-full object-cover" />
      </div>

      {/* What You Get */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">What You Get</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">CAT and Genny Certificate and Qualification Routes</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Certification depends on the route chosen. The difference across our training courses is the awarding body and the type of ID card or certificate issued; the Sygma course content is the same across all formats.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "EUSR CAT1 Accredited",
                desc: <><strong className="text-foreground">The industry-standard EUSR CAT1 qualification.</strong> On successful completion, your cat and genny certificate is registered on the EUSR database and you receive an EUSR ID card <strong className="text-foreground">valid for 3 years</strong>. Widely recognised across UK construction sites and required by most principal contractors and utility companies.</>
              },
              {
                title: "ProQual CAT1 Accredited",
                desc: <>An <strong className="text-foreground">externally accredited</strong> cat and genny qualification through ProQual, with all four EML modes assessed in the practical element. You receive a ProQual CAT1 certificate valid for 3 years. <strong className="text-foreground">The ProQual CAT1 Plus two-day route includes the Genny-First methodology in its formal assessment criteria.</strong></>
              },
              {
                title: "CITB Approved Training",
                desc: "Sygma Solutions is a CITB Approved Training Organisation (ATO). Every course is delivered to CITB ATO standards for content, assessment and record-keeping. Employers who pay the CITB levy may be eligible for funding support through the CITB Employer Network, and Sygma provides the documentation required for funding applications."
              },
              {
                title: "Sygma In-House Certified",
                desc: "Sygma's own cat and genny certificate of completion, covering the same comprehensive content as accredited routes but without awarding body fees. Includes written and practical assessment results, a detailed skills record, and personalised pathway guidance on which qualification to progress to next."
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-74" width={1200} height={900} alt="Genny4 signal generator demonstration during a CAT and Genny training course" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-11" width={1200} height={900} alt="CAT and Genny training assessment locating buried services with CAT4 and Genny4" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-70" width={1200} height={900} alt="Hands-on Genny signal application during a CAT and Genny course" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Course formats */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Formats Available</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Course Formats</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="text-left px-4 py-3 font-bold text-foreground">Format</th>
                <th className="text-left px-4 py-3 font-bold text-foreground">Duration</th>
                <th className="text-left px-4 py-3 font-bold text-foreground">Max Delegates</th>
                <th className="text-left px-4 py-3 font-bold text-foreground">Assessment</th>
              </tr>
            </thead>
            <tbody>
              {[
                { format: "One-day in-house (certified)", dur: "1 day", max: "8", assess: "Written + practical" },
                { format: "One-day EUSR CAT1 (accredited)", dur: "1 day", max: "8", assess: "Written + practical" },
                { format: "One-day ProQual CAT1 (accredited)", dur: "1 day", max: "8", assess: "Written + practical" },
                { format: "Two-day in-house (certified)", dur: "2 days", max: "8", assess: "Written + practical" },
                { format: "Two-day ProQual CAT1 Plus (accredited)", dur: "2 days", max: "8", assess: "Written + practical", href: "/courses/proqualcat1plus" },
                { format: "Two-day split - 3 months apart (certified)", dur: "Day 1 + Day 2", max: "8", assess: "Day 1 training, Day 2 assessment" },
              ].map(({ format, dur, max, assess, href }, i) => (
                <tr key={format} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3 font-semibold text-foreground">{href ? <Link href={href} className="text-primary hover:underline">{format}</Link> : format}</td>
                  <td className="px-4 py-3 text-muted-foreground">{dur}</td>
                  <td className="px-4 py-3 text-muted-foreground">{max}</td>
                  <td className="px-4 py-3 text-muted-foreground">{assess}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          The two-day split format lets operatives apply classroom learning in real conditions before returning for their assessed practical day, with a ~3 month gap so behaviours bed in. All training courses delivered by a CITB Approved Training Organisation.
        </p>
      </section>

      {/* Site requirements */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="eyebrow mb-3">Site Requirements</p>
              <h2 className="text-xl font-black mb-6 text-foreground">What You Need to Provide</h2>
              <div className="space-y-3">
                {[
                  ["STATS Plans", "Buried service drawings appropriate to the practical site. If plans are not available, Sygma can supply plans at an additional cost agreed prior to booking."],
                  ["Equipment", "Each operative should use the equipment they work with on site. Sygma provide Radiodetection CAT4 and Genny4 as backup. Any manufacturer's equipment is suitable."],
                  ["Meeting Room", "Suitable for up to 8 people with projector or screen and sufficient space for written assessment."],
                  ["Practical Site", "A suitable site with buried metallic utilities close to the meeting room. A single power cable to a cabin is not sufficient."],
                  ["PPE", "Delegates must have appropriate PPE in compliance with national and company health and safety requirements."],
                  ["Parking", "Sygma trainers arrive in transit-sized vehicles. Advise of any height barriers or access restrictions in advance."],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3 items-start">
                    <span className="text-accent font-black shrink-0 mt-1">&#8250;</span>
                    <div>
                      <span className="font-semibold text-foreground text-sm">{k}: </span>
                      <span className="text-muted-foreground text-sm">{v}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Sygma's dedicated training centre at Wigan is available as an alternative venue at no extra cost, with full welfare and catering facilities.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">UK Delivery</p>
              <h3 className="text-xl font-black mb-4 text-foreground">Training Near You, Across the UK</h3>
              <div className="bg-background rounded-xl border border-border p-5 mb-4">
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Looking for <strong className="text-foreground">CAT and Genny training near me</strong>? Sygma delivers at client sites anywhere in the UK. Common delivery regions include <Link href="/locations/london" className="text-primary hover:underline">London and the South East</Link>, <Link href="/locations/manchester" className="text-primary hover:underline">Manchester and the North West</Link>, <Link href="/locations/birmingham" className="text-primary hover:underline">Birmingham and the Midlands</Link>, <Link href="/locations/bristol" className="text-primary hover:underline">Bristol and the South West</Link>, <Link href="/cable-avoidance-training-scotland" className="text-primary hover:underline">Scotland</Link>, and across Northern England. <strong className="text-foreground">Travel is included in the day rate with no hidden extras</strong>.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Dedicated city course pages: <Link href="/cat-and-genny-training-london" className="text-primary hover:underline">London</Link>, <Link href="/cat-and-genny-training-birmingham" className="text-primary hover:underline">Birmingham</Link>, <Link href="/cat-and-genny-training-manchester" className="text-primary hover:underline">Manchester</Link> and <Link href="/cat-and-genny-training-scotland" className="text-primary hover:underline">Scotland</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-89" width={1200} height={900} alt="Practical CAT4 locator session on a CAT and Genny course" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-66" width={1200} height={900} alt="Delegates practising utility location techniques with Radiodetection CAT4 and Genny4 equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-14" width={1200} height={900} alt="On-site CAT and Genny training assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Related Reading */}
      <section className="bg-muted/20 border-y border-border py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-xl font-black mb-6 text-foreground">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge-hub/genny-first-methodology" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">Genny-First Methodology</h3>
              <p className="text-sm text-muted-foreground">Why Sygma teaches Genny-first and how it increases buried utility detection rates.</p>
            </Link>
            <Link href="/knowledge-hub/hsg47-explained" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">HSG47 Explained</h3>
              <p className="text-sm text-muted-foreground">The HSE guidance that underpins all cable avoidance work. What it says and why it matters.</p>
            </Link>
            <Link href="/knowledge-hub/strike-prevention-site-managers" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">Strike Prevention for Site Managers</h3>
              <p className="text-sm text-muted-foreground">Practical guidance for site managers on reducing utility strike risk on construction projects.</p>
            </Link>
            <Link href="/knowledge-hub/eusr-card-renewal" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">EUSR Card Renewal</h3>
              <p className="text-sm text-muted-foreground">When and how to renew your EUSR CAT1 card before it expires.</p>
            </Link>
            <Link href="/knowledge-hub/detecting-plastic-gas-service-pipes" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block sm:col-span-2">
              <h3 className="font-bold text-foreground mb-2 text-sm">Detecting Plastic Gas Service Pipes: Methods and Their Limits</h3>
              <p className="text-sm text-muted-foreground">Where CAT and Genny stop working: plastic gas pipes are invisible to electromagnetic detection. Field note covering Gas Tracker II, sonde, GPR, and trial-hole methods. Prepared by Sygma for The Clancy Group.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="eyebrow mb-3">Common Questions</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a, thumb, thumbAlt }) => (
            <div key={q} className="border border-border rounded-lg p-6 flex gap-5 items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-lg bg-muted aspect-square self-center">
                <Image src={thumb} width={192} height={192} alt={thumbAlt} sizes="(max-width: 640px) 80px, 96px" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground mb-2">{q}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HSG47 Compliance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Regulation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">HSG47 Compliance</h2>
          <p className="text-muted-foreground mb-4 max-w-2xl">HSG47 is the Health and Safety Executive's guidance on <strong className="text-foreground">avoiding danger from underground services</strong>. It places a clear duty on employers and supervisors to identify hazards, plan work safely, and ensure operatives can <strong className="text-foreground">locate underground services before excavation</strong>. That means buried cables, gas mains, fibre and plastic pipes that passive detection alone often misses, where striking an electricity cable can cause fatal arc-flash injury and hitting a gas main risks the whole site.</p>
          <p className="text-muted-foreground mb-4 max-w-2xl">This course maps every element back to a specific HSG47 requirement, with practical skills assessed on real <strong className="text-foreground">buried gas, water, electricity, telecoms and district heating utilities</strong> during the site-based session. Operatives are formally assessed as competent in all four locating modes (Power, Radio, Genny and Avoidance), in reading and cross-checking buried service plans, and in a safe system of work before excavation.</p>
        </div>
      </section>

      {/* Why Sygma for Genny & CAT Training */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Choose Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Sygma for Genny & CAT Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">We go beyond qualification specifications. Our training courses are built on years of strike investigations, real-world field experience with civil engineers and utility contractors, and proven safety results for course attendees across UK infrastructure projects.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Methodology</p>
              <h3 className="text-base font-bold text-foreground mb-2">Genny-First Methodology</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">70-80% increase in Genny usage among Sygma-trained operatives. Measured through locator data downloads.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">People</p>
              <h3 className="text-base font-bold text-foreground mb-2">Specialist Trainers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Directly employed. Ex-utility surveyors or ex-equipment manufacturer specialists. TAQA qualified.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Delivery</p>
              <h3 className="text-base font-bold text-foreground mb-2">We Come to You</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Delivered at your site. Travel included. No hidden extras. Independent: no surveys, no equipment sales, no manufacturer relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Further Training</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Sygma offers a range of cable avoidance training courses and utility location training programmes to suit different needs and regulatory requirements, from one-day courses for site operatives to multi-day qualifications for civil engineers and supervisors.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Qualification</p>
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">EUSR-registered qualification for operatives who need a formal card.</p>
              <Link href="/courses/eusr-cat1" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                View Course &rarr;
              </Link>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">ProQual CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Accredited qualification with all four EML modes in the practical assessment.</p>
              <Link href="/courses/proqualcat1-training" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                View Course &rarr;
              </Link>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Vivax-Metrotech</p>
              <h3 className="text-base font-bold text-foreground mb-2">vScan & Tx Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">The Vivax-Metrotech vScan and transmitter equivalent of this course, using the same Sygma methodology.</p>
              <Link href="/courses/vscan-and-transmitter-training" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                View Course &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Also Consider */}
      <section className="border-t border-border py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Also Consider</h3>
          <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/osca" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">OSCA Assessment</p>
                <p className="text-xs text-muted-foreground">GPS-stamped on-site competency assessment to verify real-world skills.</p>
              </Link>
              <Link href="/bespoke-training" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Training</p>
                <p className="text-xs text-muted-foreground">Design a tailored programme around your site risks, equipment, and team size.</p>
              </Link>
          </div>
        </div>
      </section>

      {/* See It In Action */}
      <section className="bg-muted/20 border-y border-border py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow mb-3">See It In Action</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">The Genny First Approach on Site</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Watch Pete Ashcroft walk through the Genny First methodology in practice, why the signal generator goes on before passive modes, how to apply it in different site conditions, and what the data shows about miss rates when it is left until last. This is the approach at the core of every Sygma course.
          </p>
          <div className="rounded-xl overflow-hidden border border-border mb-6 aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/IgxGksU3WQ4"
              title="CAT and Genny Training: The Genny First Approach Explained"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <Link
            href="/knowledge-hub/genny-first-in-practice-video"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Read the full breakdown of the Genny First approach &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Book Your CAT and Genny Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Site-based training courses delivered nationwide, bespoke to your equipment, your plans and your risk profile. Practical skills built on real underground services. Contact us for a tailored quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Request Site-Based Delivery
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky mobile Book button — SEO audit 2026-05-11 */}
      <Link
        href="/contact#enquiry-form"
        className="fixed bottom-4 right-4 z-50 md:hidden inline-flex items-center px-4 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-lg hover:bg-primary/90 transition-colors"
      >
        Book this course →
      </Link>
    </>
  );
}
