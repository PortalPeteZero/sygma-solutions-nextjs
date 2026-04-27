import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const faqs = [
              {
                q: "Can we run CAT 1 and CAT 2 as separate courses instead?",
                a: "Yes. Sygma offers standalone EUSR CAT 1 and EUSR CAT 2 programmes for organisations that need to train different groups or stagger their training. The combined programme is designed for teams that need both qualifications at the same time.",
                thumb: "cat-65-eus-cat1-cat2-combined",
                thumbAlt: "EUSR CAT 1 and CAT 2 combined training delegates working through both qualifications in one block",
              },
              {
                q: "What happens if our site fails the minimum requirements on the day?",
                a: "The training will not proceed unless the minimum CAT 2 site requirements are met. Sygma will assess site suitability before booking is confirmed. If your site is not suitable, we can advise on alternatives or arrange access to a different location.",
                thumb: "cat-91-eus-cat1-cat2-combined",
                thumbAlt: "Minimum CAT 2 safe dig site requirements -- live dig area with buried utility services for EUSR Category 2 assessment",
              },
              {
                q: "Do delegates need any prior experience?",
                a: "No. The combined programme is designed to take delegates from no prior training through to EUSR CAT 1 and CAT 2 qualification in two days. The classroom content on day one provides all the foundation knowledge required for the practical work on day two.",
                thumb: "cat-50-eus-cat1-cat2-combined",
                thumbAlt: "EUSR CAT 1 and CAT 2 combined training -- delegates with no prior experience taken to qualification in two days",
              },
              {
                q: "Is this the same as ProQual Level 2 utility avoidance?",
                a: "No. EUSR CAT 1 and CAT 2 are industry-recognised qualifications administered through EUSR. ProQual Level 2 is a regulated qualification on the RQF. Both cover utility avoidance, but through different frameworks. Many organisations accept EUSR recognition; some require the RQF qualification. Sygma can advise on which is appropriate for your team.",
                thumb: "cat-16-eus-cat1-cat2-combined",
                thumbAlt: "EUSR Category 1 and Category 2 certification card -- EUSR-registered qualifications, distinct from ProQual Level 2",
              },
              {
                q: "What if some delegates use equipment other than a Radiodetection locator?",
                a: "Delegates should bring their own equipment if they use a different manufacturer's locator, at a minimum ratio of one locator per three delegates. Sygma cannot carry a full stock of every manufacturer's equipment. The training covers universal locating and signal generation principles. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX.",
                thumb: "cat-15-eus-cat1-cat2-combined",
                thumbAlt: "Delegates using their own locator equipment alongside Radiodetection CAT4 during EUSR Category 1 practical training",
              },
              {
                q: "Can we run this at your Wigan training centre?",
                a: "Yes. Sygma's dedicated training centre in Wigan includes live utility demonstration rigs and a safe dig area. It can be used at no additional venue cost for organisations that cannot host the training at their own site.",
                thumb: "cat-67-eus-cat1-cat2-combined",
                thumbAlt: "Sygma Wigan training centre -- live utility demonstration rigs and dedicated safe dig area for EUSR Category 1 and 2 combined courses",
              },
              {
                q: "What is the difference between EUSR Category 1 and EUSR Category 2?",
                a: "EUSR Category 1 -- formally titled Locate Utility Services -- covers the detection side: using a CAT and Genny to locate buried utility services, interpreting utility drawings and STATS plans, and applying the correct safe system of work. EUSR Category 2 -- formally Implement Safe (Digging) Excavating Practices -- covers the excavation side: permits to dig, hand tools, handheld power tools, exposing buried services safely, supporting exposed services, and reinstatement. The combined course delivers both qualifications in a single two-day block.",
                thumb: "cat-78-eus-cat1-cat2-combined",
                thumbAlt: "EUSR Category 1 (Locate Utility Services) and EUSR Category 2 (Implement Safe (Digging) Excavating Practices) -- the two qualifications side by side",
              },
              {
                q: "How many guided learning hours does the EUSR CAT 1 and 2 combined course include?",
                a: "Approximately 13-14 guided learning hours across the two-day programme: 6-7 hours of classroom theory on day one (legislation, electromagnetic theory, equipment science, utility drawings, excavation hazards) and 6-7 hours of on-site practical and assessment on day two (locate, expose, support, reinstate). Both EUSR-registered qualifications are issued on successful completion of the written and practical assessments.",
                thumb: "cat-03-eus-cat1-cat2-combined",
                thumbAlt: "13-14 guided learning hours across two days for EUSR Category 1 and Category 2 combined training -- classroom and on-site",
              },
              {
                q: "How much does the EUSR CAT 1 and 2 combined training cost?",
                a: "Sygma quotes all EUSR CAT 1 and 2 combined training delegate fees exclusive of VAT (UK standard rate). Final cost depends on delegate numbers, delivery format (open course at Sygma Wigan vs in-house at your site), and equipment requirements. In-house pricing is fully inclusive of trainer travel and overnight accommodation within mainland UK -- no add-ons later. Cost includes EUSR registration, assessment, certificate, and EUSR card for both Category 1 and Category 2. Contact Sygma for a bespoke quote, typically returned within one working day.",
                thumb: "cat-80-eus-cat1-cat2-combined",
                thumbAlt: "EUSR CAT 1 and 2 combined training delivered nationwide UK -- bespoke quote ex VAT, all-inclusive pricing for in-house delivery",
              },
              {
                q: "How long does the EUSR Category 1 and Category 2 card last?",
                a: "EUSR Category 1 and Category 2 cards are valid for 5 years from the date of registration on the EUSR database. After 5 years, delegates must complete an EUSR re-registration course (typically a half-day refresher) to maintain currency. The original assessment record is retained as evidence of training completion regardless of card expiry.",
                thumb: "cat-30",
                thumbAlt: "EUSR card -- 5-year validity from date of registration, applies to both EUSR Category 1 and Category 2 qualifications",
              },
              {
                q: "Can the EUSR CAT 1 and 2 training be delivered online?",
                a: "No. The combined programme requires hands-on practical assessment on a live dig area with buried utility services, which cannot be replicated online. The classroom theory element on day one could in principle be delivered remotely, but EUSR-registered Category 2 (Implement Safe (Digging) Excavating Practices) specifically requires on-site practical assessment using hand tools and handheld power tools to expose buried services. All Sygma EUSR CAT 1 and 2 combined courses are delivered face-to-face -- at your site, a regional venue, or Sygma's Wigan training centre.",
                thumb: "cat-92",
                thumbAlt: "EUSR CAT 1 and CAT 2 face-to-face delivery -- on-site practical safe dig assessment cannot be delivered online",
              },
              {
                q: "Does the combined course meet HSG47 requirements for utility avoidance training?",
                a: "Yes. The HSG47 guidance defines six competence requirements for working safely around buried services: trained and competent operatives, a safe system of work, service plan checks, correct use of equipment, safe excavation, and evidenced records. The combined EUSR CAT 1 and CAT 2 programme covers all six. Day one delivers the theory, equipment training, and drawing interpretation. Day two delivers the practical safe dig assessment with documented records. See the Sygma HSG47 explainer for a full breakdown of how each element is delivered.",
                thumb: "cat-58",
                thumbAlt: "HSG47 compliance -- EUSR CAT 1 and CAT 2 combined training covers all six HSG47 competence requirements for safe utility avoidance",
              },
            ];

export const metadata: Metadata = {
  title: 'EUSR CAT 1 and 2 Combined Training -- Locate Utility Services (HSG47)',
  description: 'Two-day EUSR CAT 1 and CAT 2 combined training. Locate Utility Services and Implement Safe (Digging) Excavating Practices. HSG47-aligned, EUSR-registered, UK-wide.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/eusr-cat1-cat2-combined' },
  openGraph: {
    title: 'EUSR CAT 1 and 2 Combined Training -- Locate Utility Services (HSG47)',
    description: 'Two-day EUSR CAT 1 and CAT 2 combined training. Locate Utility Services and Implement Safe (Digging) Excavating Practices. HSG47-aligned, EUSR-registered, UK-wide.',
    url: 'https://sygma-solutions.com/courses/eusr-cat1-cat2-combined',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-60', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function EusCat12Combined() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "EUSR Category 1 and Category 2 Combined Training - Locate Utility Services and Implement Safe (Digging) Excavating Practices", description: "Two-day EUSR CAT 1 and CAT 2 combined training. Locate Utility Services (EUSR Category 1) and Implement Safe (Digging) Excavating Practices (EUSR Category 2). HSG47-aligned, EUSR-registered, UK-wide.", url: "/courses/eusr-cat1-cat2-combined", credential: "EUSR Category 1 and Category 2 Training Certificate", duration: "2 days", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/cable-location-avoidance" }, { label: "Cable Avoidance Training", to: "/courses/cable-avoidance-training" }, { label: "EUSR CAT 1 and CAT 2 Combined Training" }]) }} />
<InnerPageHero
        eyebrow="EUSR Category 1 & 2 Combined Training"
        headline="EUSR Category 1 & 2 Combined: Locate Utility Services & Implement Safe (Digging) Excavating Practices"
        sub="Two days. Two EUSR-registered qualifications -- EUSR Category 1 (Locate Utility Services) and EUSR Category 2 (Implement Safe (Digging) Excavating Practices). Full theory, Genny-First practical, live safe dig assessment, HSG47-aligned, delivered nationwide UK at your site or at Sygma's Wigan training centre."
        image="cat-01-eus-cat1-cat2-combined"
        alt="EUSR CAT 1 and CAT 2 Combined Training -- Locate Utility Services and Implement Safe (Digging) Excavating Practices (HSG47), Sygma Solutions"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "Cable Avoidance Training", to: "/courses/cable-avoidance-training" },
          { label: "EUSR CAT 1 and CAT 2 Combined Training" },
        ]}
      />

      {/* Key USP stats */}
      <section className="bg-foreground py-6">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1"><strong>21 Years</strong></p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1"><strong>One Specialism</strong></p>
              <p className="text-xs text-white/60">Underground utility location training is all we do.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1"><strong>70-80%</strong></p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1"><strong>Increase in Genny Usage</strong></p>
              <p className="text-xs text-white/60">Measured through <strong>locator data downloads</strong> after Sygma training.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1"><strong>Proven</strong></p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1"><strong>Strike Reduction Record</strong></p>
              <p className="text-xs text-white/60">Clients report measurable reductions in <strong>service strikes</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "2 days (classroom and site)"],
            ["Format", "In-house at your site or Sygma Wigan"],
            ["Max Delegates", "8 per course"],
            ["Qualifications", "EUSR CAT 1 and EUSR CAT 2"],
            ["Delivery", "Nationwide UK"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Definitional opening -- AI Overview optimised */}
      <section className="container mx-auto px-6 md:px-8 pt-10 pb-2 max-w-4xl">
        <p className="text-base text-foreground leading-relaxed">
          <strong>EUSR CAT 1 and CAT 2 Combined Training</strong> is a two-day course that delivers both EUSR-registered qualifications in a single block. <strong>EUSR Category 1 -- Locate Utility Services</strong> covers the use of a CAT and Genny to locate buried utility services. <strong>EUSR Category 2 -- Implement Safe (Digging) Excavating Practices</strong> covers the safe-dig process from permit to reinstatement. Together they meet the full <Link href="/knowledge-hub/hsg47-explained" className="underline text-primary">HSG47 competence requirement</Link> for any operative who locates and excavates around buried services in the UK utilities, construction, civils, and infrastructure sectors.
        </p>
        <p className="mt-4 text-base text-foreground leading-relaxed">
          Sygma delivers the combined programme nationwide UK at your site, at any of our regional venues, or at our dedicated training centre in Wigan. Day one builds the underpinning theory; day two moves delegates from knowledge into application on a live dig area. By the end of day two, delegates hold both <strong>EUSR-registered Category 1 and Category 2</strong> qualifications, recorded on the EUSR database within 5 working days, verifiable by employers and clients. Standalone variants are available -- see <Link href="/courses/eusr-cat1" className="underline text-primary">EUSR CAT 1 (Locate Utility Services only)</Link> and <Link href="/courses/eusr-cat2-safe-dig" className="underline text-primary">EUSR CAT 2 Safe Dig (Implement Safe (Digging) Excavating Practices only)</Link>.
        </p>
      </section>

      {/* 3-photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-65-eus-cat1-cat2-combined" width={1200} height={900} alt="EUSR CAT 1 and CAT 2 combined training - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-50-eus-cat1-cat2-combined" width={1200} height={900} alt="EUSR CAT 1 and CAT 2 combined training - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-80-eus-cat1-cat2-combined" width={1200} height={900} alt="EUSR CAT 1 and CAT 2 combined training - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg w-full h-full object-contain" />
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
                title: "Anyone Needing Complete Utility Avoidance Competency",
                desc: "Covers both locating with a CAT and Genny and safe excavation in a single course"
              },
              {
                title: "Site Operatives and Groundworkers",
                desc: "Those who both locate and excavate around buried services"
              },
              {
                title: "New Entrants to Utilities",
                desc: "The most efficient route to full EUSR CAT 1 and CAT 2 competency"
              },
              {
                title: "Organisations Wanting Comprehensive Training",
                desc: "Companies that want their workforce trained in both locating and safe digging in one visit"
              }
            ].map((p, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2"><strong>{p.title}</strong></h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why combine */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Combine CAT 1 and CAT 2?</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The Efficient Route to Full EUSR Recognition</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most organisations that send operatives for <strong>EUSR Category 1</strong> training eventually need <strong>EUSR Category 2</strong>. Running them separately means two mobilisations and two invoices; the combined programme delivers both <strong>EUSR-registered qualifications</strong> in a single two-day block, approximately <strong>13-14 guided learning hours</strong>, with full <Link href="/courses/cat-and-genny-training" className="underline text-primary">CAT and Genny</Link> theory on day one and a live safe-dig assessment on day two. By close of programme your team holds both qualifications and has experienced the full locate-to-safe-dig sequence on a real site, applying HSG47 guidance throughout.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Course at a Glance</p>
            {[
              ["Duration", "2 days (classroom day 1, on-site day 2)"],
              ["Guided Learning Hours", "Approximately 13-14 hours total across both days"],
              ["Format", "In-house at your site or Sygma's Wigan training centre"],
              ["Max Delegates", "8 per course (hard maximum)"],
              ["Qualifications", "EUSR Category 1 (Locate Utility Services) + EUSR Category 2 (Implement Safe (Digging) Excavating Practices)"],
              ["Card Validity", "5 years from registration date"],
              ["Assessment", "Multiple choice questions (MCQs) + practical safe dig assessment on live dig area"],
              ["Prerequisites", "None"],
              ["Equipment", "Sygma provides Radiodetection CAT4 and Genny4 as standard; delegates may bring their own locator and signal generator. This course can be delivered on any of the following: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX."],
              ["Delivery", "Nationwide UK -- in-house pricing inclusive of trainer travel and accommodation, ex VAT"],
              ["Pricing", "Bespoke quote ex VAT -- contact Sygma with delegate count, location, target dates"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day 1 content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Day One</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Day One: EUSR Category 1 (Locate Utility Services) Theory Foundation</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The classroom element covers the complete theoretical foundation required for both qualifications. Delegates work through the underpinning knowledge before the practical site element on day two.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Legislation and guidance relating to buried services, including HSG47 and company-specific policy",
              "Site-specific risk assessments, company procedures, and permits to dig",
              "Excavation hazards: Leptospirosis, asbestos, silica dust, noise, vibration, loose ground, groundwater",
              "Utility plan interpretation: STATS plans, limitations of drawings, visual survey process",
              "Electromagnetic theory: how a CAT and Genny work, signal distortion, equipment limitations",
              "Locator controls and operation: all four modes (Power, Radio, Genny, Avoidance), Strike Alert, signal interpretation",
              "Signal generator application: dual frequency, capacitance mode for non-earthed cables, earth positioning, blind induction search, effective nulling",
              "Depth estimation: how to take locator depth readings and how to test them",
              "CAT Manager data logging (optional): recording, exporting CSV and KML, analysing data patterns",
              "Excavation techniques: exposing services, hand tools, handheld power tools, horizontal excavation",
              "Trench support, maintaining excavation safety, and dangers of using services as a handhold",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day 2 content */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Day Two</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Day Two: EUSR Category 2 -- Implement Safe (Digging) Excavating Practices Practical Assessment</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The site element moves delegates from knowledge into application. All site work takes place at the client's premises or a pre-agreed location with suitable underground utilities.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Using STATS plans and existing site information to identify indicated utility routes before work begins",
            "Visual site inspection prior to any location activity",
            "Equipment function checks: confirming the locator and signal generator are in satisfactory operating condition",
            "Locating in all modes, confirming service routes, taking and testing depth readings",
            "Signal generator application for problem services including street lighting and small comms cables",
            "Completing a risk assessment and permit to dig before excavation commences",
            "Surface removal with correct positioning relative to identified services",
            "Horizontal excavation to expose the indicated service below the remaining surface",
            "Supporting exposed services where required",
            "Reinstatement completion",
            "Multiple choice questions (MCQs) at the end of the programme",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start bg-muted/30 border border-border rounded-lg p-4">
              <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
              <span className="text-muted-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Formal qualification breakdown -- EUSR Category 1 and Category 2 */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Official EUSR Qualification Names</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">EUSR Category 1 and Category 2 Curriculum</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          Both qualifications are administered through the <strong>Energy &amp; Utility Skills Register (EUSR)</strong> against published National Occupational Standards. The combined training delivers both in a single two-day programme: <strong>Category 1 (Locate Utility Services)</strong> on day one, <strong>Category 2 (Implement Safe (Digging) Excavating Practices)</strong> on day two. Delegates progress from theory to practical assessment without leaving the site, and finish the programme with both EUSR-registered qualifications recorded against their name.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <h3 className="text-xl font-black mb-3 text-foreground">EUSR Category 1: Locate Utility Services</h3>
            <p className="text-sm uppercase tracking-wider text-accent font-bold mb-3">Day 1 -- Detection &amp; Theory</p>
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
              Delegates learn how to <strong>locate utility services</strong> safely using a CAT and Genny, interpret utility drawings and STATS plans, and apply the <Link href="/knowledge-hub/hsg47-explained" className="underline text-primary">HSG47 guidance</Link> for working safely in proximity to buried utility services.
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2"><span className="text-accent font-bold shrink-0">&#8250;</span><span>Electromagnetic theory and locator operation in all four modes (Power, Radio, Genny, Avoidance)</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold shrink-0">&#8250;</span><span>Signal generator (Genny) application -- blind induction, capacitance mode, dual frequency for problem services</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold shrink-0">&#8250;</span><span>Utility drawings interpretation: STATS plans, quality levels, drawing limitations, visual survey process</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold shrink-0">&#8250;</span><span>Site-specific risk assessment, the safe system of work, and the locator's role in <Link href="/courses/cat-and-genny-training" className="underline text-primary">CAT and Genny training</Link> outcomes</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold shrink-0">&#8250;</span><span>Equivalent to the <Link href="/courses/eusr-cat1" className="underline text-primary">standalone EUSR CAT 1 course</Link> -- delivered as day one of the combined programme</span></li>
            </ul>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <h3 className="text-xl font-black mb-3 text-foreground">EUSR Category 2: Implement Safe (Digging) Excavating Practices</h3>
            <p className="text-sm uppercase tracking-wider text-accent font-bold mb-3">Day 2 -- Practical Safe Dig</p>
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
              Delegates demonstrate they can <strong>implement safe excavating practices</strong> on a live dig area: applying the permit to dig, exposing services with <strong>hand tools and handheld power tools</strong>, supporting exposed services, and reinstating the excavation safely.
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2"><span className="text-accent font-bold shrink-0">&#8250;</span><span>Permit to dig, risk assessment, and pre-excavation site inspection following HSG47 guidance</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold shrink-0">&#8250;</span><span>Surface removal and horizontal excavation to expose buried utility services</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold shrink-0">&#8250;</span><span>Hand tools and handheld power tools -- safe usage near live services, including handling of hazards (asbestos, silica dust, leptospirosis)</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold shrink-0">&#8250;</span><span>Exposed services support, reinstatement completion, documented assessment record</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold shrink-0">&#8250;</span><span>Equivalent to the <Link href="/courses/eusr-cat2-safe-dig" className="underline text-primary">standalone EUSR CAT 2 Safe Dig course</Link> -- delivered as day two of the combined programme</span></li>
            </ul>
          </div>
        </div>

        {/* Guided learning hours */}
        <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Guided Learning Hours</p>
          <h3 className="font-black text-foreground mb-3">Total Programme Hours and Assessment Standards</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The combined programme delivers <strong>approximately 13-14 guided learning hours</strong> across the two-day block: <strong>6-7 hours of classroom theory</strong> on day one (legislation, electromagnetic theory, equipment science, utility drawings, excavation hazards) and <strong>6-7 hours of on-site practical and assessment</strong> on day two (locate, expose, support, reinstate). All delegates complete a written multiple-choice assessment and a practical observation against EUSR-published National Occupational Standards. Both qualifications are recorded on the EUSR database within 5 working days of course completion, and EUSR cards are issued within 5-10 working days. Both Category 1 and Category 2 qualifications carry a 5-year validity before re-registration is required.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What You Get</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What Delegates Receive</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "EUSR CAT 1 Certificate", desc: "EUSR-registered CAT 1 accreditation. Recorded on the EUSR database and verifiable by employers and clients." },
            { title: "EUSR CAT 2 Certificate", desc: "EUSR-registered CAT 2 Safe Dig accreditation. Confirms competency in safe excavation practices around buried services." },
            { title: "Written Assessment Record", desc: "Documented evidence of theory knowledge across both CAT 1 and CAT 2 criteria." },
            { title: "Practical Assessment Record", desc: "On-site assessment evidence covering cable and pipe location (CAT 1) and safe excavation (CAT 2)." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-muted/20 rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image strip after What You Get */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-78-eus-cat1-cat2-combined" width={1200} height={900} alt="EUSR CAT 1 and CAT 2 combined training practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-91-eus-cat1-cat2-combined" width={1200} height={900} alt="Safe dig technique demonstration during CAT 2 training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-03-eus-cat1-cat2-combined" width={1200} height={900} alt="Cable avoidance and safe excavation combined assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Pricing & Booking -- compact summary */}
      <section className="bg-muted/30 py-10">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Pricing &amp; Booking</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">EUSR CAT 1 and 2 Combined Course Cost</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            All Sygma EUSR Category 1 and Category 2 combined training delegate fees are quoted <strong>exclusive of VAT</strong> (UK standard rate). Final cost depends on delegate numbers (max 8), delivery format (open course at Sygma Wigan or in-house at your site), site location, and equipment requirements. In-house pricing is <strong>fully inclusive of trainer travel and overnight accommodation</strong> within mainland UK, ex VAT, all-inclusive. Cost includes EUSR registration, written and practical assessment, certificate, and EUSR card for both Category 1 and Category 2 -- ex VAT. <strong>Card validity: 5 years.</strong> <strong>Lead time: typically 3-4 weeks</strong> from confirmed booking. <Link href="/contact#enquiry-form" className="underline text-primary">Contact Sygma</Link> with delegate count, location, and target dates for a bespoke quote, typically returned within one working day. CITB funding may be available for registered employers.
          </p>
        </div>
      </section>

      {/* Site requirements */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Site Requirements</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What Your Site Must Provide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border p-5 bg-background">
              <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Classroom</h3>
              <ul className="space-y-2">
                {[
                  "Meeting or conference room with seating for all delegates and the trainer",
                  "Space for a projector and a clear wall or projection screen",
                  "Welfare facilities and adequate desk space for written assessment",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border p-5 bg-background">
              <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">CAT 1 Location Area</h3>
              <ul className="space-y-2">
                {[
                  "Area with detectable underground utilities near the training room",
                  "Multiple utility types present (not just a single power cable)",
                  "STATS plans for the site provided by the client in advance",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border p-5 bg-background">
              <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">CAT 2 Safe Dig Area (Minimum)</h3>
              <ul className="space-y-2">
                {[
                  "A live dig area with buried metallic utilities. One power cable to a site cabin is not sufficient.",
                  "Open area of at least 10m squared, ground suitable for a hand dig",
                  "Full buried service plans available",
                  "Delegates must have FR PPE and insulated digging tools",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-border bg-amber-50 dark:bg-amber-950/20 p-5">
            <p className="text-sm font-bold text-foreground mb-1">Important</p>
            <p className="text-sm text-muted-foreground">The training will not take place unless the minimum CAT 2 site requirements are met. Each delegate must bring government-issued photographic ID. Sygma trainers typically arrive in a transit-van-sized vehicle (please advise at booking if there are height barriers or access restrictions).</p>
          </div>
        </div>
      </section>

      {/* CITB */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">CITB Funding</p>
            <h2 className="text-2xl font-black mb-4 text-foreground">Funding Support</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sygma Solutions is a CITB Approved Training Organisation. CITB-registered employers may be able to access training funding support through the CITB Employer Network. Contact your CITB adviser directly for current eligibility and funding options.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Equipment</p>
            <h2 className="text-2xl font-black mb-4 text-foreground">Equipment Provision</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sygma provides Radiodetection CAT4 and Genny4 as standard equipment. If delegates use a different manufacturer's locator or signal generator, they must bring their own equipment at a minimum ratio of one locator per three delegates. Each delegate bringing their own equipment is strongly encouraged as it allows the practical element to be conducted using the tools they will use on site. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <div className="w-full overflow-hidden aspect-[21/9] bg-muted">
        <Image src="cat-92" width={1200} height={900} alt="EUSR CAT 1 and CAT 2 on-site combined training, Sygma Solutions UK-wide delivery" sizes="100vw" className="w-full h-full object-contain" />
      </div>

      {/* Why Sygma */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Not All CAT 1 Courses Are Created Equal</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Our approach to utility avoidance training sets us apart from standard compliance courses. Here's what makes the difference.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Specialist Trainers",
                desc: <>Directly employed by Sygma. <strong>Ex-surveyors with real-world field experience</strong>. All TAQA qualified and current with industry standards.</>,
              },
              {
                title: "Real Practical Assessment",
                desc: <>On-site <strong>EUSR Category 2 practical safe dig assessment</strong> under real conditions. Not artificial scenarios in a training centre.</>,
              },
              {
                title: "Independent",
                desc: <>No survey partnerships, no equipment sales, no commercial influence. We train your team to <strong>locate utility services and implement safe excavating practices</strong> safely.</>,
              },
              {
                title: "We Come to You",
                desc: <>In-house delivery <strong>nationwide UK with travel fully included, ex VAT</strong>. Minimal disruption to your operations.</>,
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-background p-5">
                <h3 className="font-bold text-foreground mb-2 text-sm"><strong>{item.title}</strong></h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSG47 Compliance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">HSG47 Compliance</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Competence Requirements Your Course Delivers</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl"><Link href="/courses/hsg47-training">HSG47 training</Link> defines what competent utility avoidance looks like. This course covers all six essential elements.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Trained and Competent",
                desc: <><strong>Full theoretical foundation</strong> and practical assessment to confirmed <strong>EUSR Category 1 and Category 2 standards</strong>.</>,
              },
              {
                title: "Safe System of Work",
                desc: <>Permits to dig, risk assessments, <strong>site inspection protocols</strong>, and documented procedures.</>,
              },
              {
                title: "Correct Use of Equipment",
                desc: <>Locator and signal generator operation, <strong>STATS plan interpretation</strong>, depth estimation, and troubleshooting.</>,
              },
              {
                title: "Safe Excavation & Records",
                desc: <><strong>Practical safe dig assessment</strong> with exposure of live services, correct tool use, reinstatement, written assessment, and <strong>CAT Manager data logging</strong>.</>,
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-muted/40 p-5">
                <h3 className="font-bold text-foreground mb-2 text-sm"><strong>{item.title}</strong></h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Related Courses</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Expand Your Team's Utility Avoidance Capability</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Consider these additional programmes to build deeper expertise across your team.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "ProQual CAT 1 Plus",
                desc: "RQF-regulated alternative to EUSR CAT 1. Covers electromagnetic location with additional depth on geology and cable theory.",
                link: "/courses/proqualcat1plus",
              },
              {
                title: "EUSR CAT 1",
                desc: "Two-day location theory and practical. Detection only, without the safe dig element of this combined programme.",
                link: "/courses/eusr-cat1",
              },
              {
                title: "ProQual CAT 1 & CAT 2 Combined",
                desc: "The ProQual-accredited equivalent of this programme. Same content delivered through the ProQual framework.",
                link: "/courses/proqual-cat1-cat2-combined",
              },
            ].map((course, i) => (
              <Link
                key={i}
                href={course.link}
                className="rounded-lg border border-border bg-background p-5 hover:border-primary transition-colors block group"
              >
                <h3 className="font-bold text-foreground mb-2 text-sm group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-muted-foreground text-sm">{course.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip before FAQs */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-15-eus-cat1-cat2-combined" width={1200} height={900} alt="Utility avoidance practical training on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-67-eus-cat1-cat2-combined" width={1200} height={900} alt="Safe excavation assessment during EUSR CAT 2" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-16-eus-cat1-cat2-combined" width={1200} height={900} alt="Combined CAT 1 and CAT 2 certificate training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* FAQs */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a, thumb, thumbAlt }) => (
              <div key={q} className="border border-border rounded-lg p-6 flex gap-5 items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-lg bg-muted aspect-square self-center">
                  <Image src={thumb} width={192} height={192} alt={thumbAlt} sizes="(max-width: 640px) 80px, 96px" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground mb-3">{q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
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

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Get in Touch for Your Team</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            In-house at your site anywhere in the UK, or at Sygma's dedicated training centre in Wigan. Contact us with delegate numbers, your preferred location, and target dates.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Get in Touch for Your Team
            </Link>
            <Link href="/courses/eusr-cat1-cat2-usc-combined"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View CAT 1, CAT 2 and USC Combined
            </Link>
          </div>
        </div>
      </section>
    </>
);
}

