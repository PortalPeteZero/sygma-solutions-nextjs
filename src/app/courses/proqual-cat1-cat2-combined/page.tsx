import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import Link from 'next/link';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from 'next';
import Image from 'next/image';

const faqs = [
              {
                q: "Can we run CAT1 and CAT2 as separate courses instead?",
                a: "Yes. Sygma offers standalone ProQual CAT1 and ProQual CAT2 programmes for organisations that need to train different groups or stagger their training. The combined programme is designed for teams that need both qualifications at the same time.",
              },
              {
                q: "What happens if our site fails the minimum requirements on the day?",
                a: "The training will not proceed unless the minimum CAT2 site requirements are met. Sygma will assess site suitability before booking is confirmed. If your site is not suitable, we can advise on alternatives or arrange access to a different location.",
              },
              {
                q: "Do delegates need any prior experience?",
                a: "No. The combined programme is designed to take delegates from no prior training through to ProQual CAT1 and CAT2 qualification in two days. The classroom content on day one provides all the foundation knowledge required for the practical work on day two.",
              },
              {
                q: "Is this the same as EUSR CAT1 and CAT2?",
                a: "No. ProQual CAT1 and CAT2 are regulated qualifications through ProQual Accreditations. EUSR CAT1 and CAT2 are industry-recognised qualifications administered through EUSR. Both cover utility avoidance, but through different frameworks. Many organisations accept either; some require the RQF-regulated ProQual qualification specifically. Sygma can advise on which is appropriate for your team.",
              },
              {
                q: "What if some delegates use equipment other than a Radiodetection locator?",
                a: "Delegates should bring their own equipment if they use a different manufacturer's locator, at a minimum ratio of one locator per three delegates. Sygma cannot carry a full stock of every manufacturer's equipment. The training covers universal locating and signal generation principles. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX.",
              },
              {
                q: "Can we run this at your Wigan training centre?",
                a: "Yes. Sygma's dedicated training centre in Wigan includes live utility demonstration rigs and a safe dig area. It can be used at no additional venue cost for organisations that cannot host the training at their own site.",
              },
            ];

export const metadata: Metadata = {
  title: 'ProQual CAT1 and CAT2 Combined Course | Sygma Solutions',
  description: 'Two-day combined ProQual CAT1 and CAT2 course. Utility avoidance and safe excavation with ProQual-accredited assessment. UK-wide delivery.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/proqual-cat1-cat2-combined' },
  openGraph: {
    title: 'ProQual CAT1 and CAT2 Combined Course | Sygma Solutions',
    description: 'Two-day combined ProQual CAT1 and CAT2 course. Utility avoidance and safe excavation with ProQual-accredited assessment. UK-wide delivery.',
    url: 'https://sygma-solutions.com/courses/proqual-cat1-cat2-combined',
    siteName: 'Sygma Solutions',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ProqualCat1Cat2Combined() {
  return (
    <>
          
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "ProQual CAT1 and CAT2 Combined Course", description: "Two-day combined ProQual CAT1 and CAT2 course covering utility avoidance and safe excavation. ProQual-accredited outcomes with CAT and Genny practical assessment.", url: "/courses/proqual-cat1-cat2-combined", credential: "ProQual CAT1 and CAT2", duration: "2 days", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/cable-location-avoidance" }, { label: "ProQual CAT1 and CAT2 Combined" }]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="ProQual CAT1 and CAT2 Combined: Two-Day Utility Avoidance and Safe Dig Training"
        sub="One programme. Two ProQual-recognised qualifications. Both CAT1 and CAT2 completed in two days at your site, with full theory, Genny-First practical, and a live safe dig assessment."
        image="dig-11-proqual-cat1-cat2-combined"
        alt="Combined ProQual CAT1 and CAT2 cable avoidance and safe digging training"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "ProQual CAT1 and CAT2 Combined" },
        ]}
      />

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

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "2 days (classroom and site)"],
            ["Format", "In-house at your site or Sygma Wigan"],
            ["Max Delegates", "8 per course"],
            ["Qualifications", "ProQual CAT1 and ProQual CAT2"],
            ["Delivery", "Nationwide UK"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="eyebrow mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3-photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="dig-19-proqual-cat1-cat2-combined" width={1200} height={900} alt="ProQual CAT1 and CAT2 combined training - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-09-proqual-cat1-cat2-combined" width={1200} height={900} alt="ProQual CAT1 and CAT2 combined training - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-90-proqual-cat1-cat2-combined" width={1200} height={900} alt="ProQual CAT1 and CAT2 combined training - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
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
                desc: "The most efficient route to full ProQual CAT1 and CAT2 competency"
              },
              {
                title: "Organisations Wanting Comprehensive Training",
                desc: "Companies that want their workforce trained in both locating and safe digging in one visit"
              }
            ].map((p, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
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
            <p className="eyebrow mb-3">Why Combine CAT1 and CAT2?</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The Efficient Route to Full ProQual Recognition</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most organisations that send operatives for CAT1 training will eventually need CAT2 as well. CAT1 covers the detection side: electromagnetic theory, equipment operation, Genny application, and plan interpretation. CAT2 adds the excavation element: the safe dig, the permit to dig, the correct handling of exposed services, and the documented assessment that proves your operatives can work safely in proximity to live utilities.
              </p>
              <p>
                Running them separately means two days of mobilisation, two sets of site preparation, and two invoices. The combined programme delivers both ProQual-recognised qualifications in a single two-day block, reducing disruption to your operations and keeping your team off the road for the minimum time necessary.
              </p>
              <p>
                Sygma trainers are specialists in the science of electromagnetic location. Day one builds the understanding. Day two tests whether operatives can apply it under real site conditions. By the end of the programme, your team holds both qualifications and has experienced a full locate-to-safe-dig sequence.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Course at a Glance</p>
            {[
              ["Duration", "2 days (classroom and on-site)"],
              ["Format", "In-house at your site or Sygma's Wigan training centre"],
              ["Max Delegates", "8 per course"],
              ["Qualifications", "ProQual CAT1 and ProQual CAT2 (Safe Dig)"],
              ["Assessment", "Written theory papers + practical safe dig assessment"],
              ["Prerequisites", "None"],
              ["Equipment", "Sygma provides Radiodetection CAT4 and Genny4 as standard; delegates may bring their own locator and signal generator. This course can be delivered on any of the following: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX."],
              ["Delivery", "Nationwide UK"],
              ["Pricing", "Contact Sygma for a tailored quote"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="eyebrow text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day 1 content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Day One</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Theory Foundation: Legislation, Equipment Science, and Genny-First Practice</h2>
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
        <p className="eyebrow mb-3">Day Two</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Practical Application and Safe Dig Assessment</h2>
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
            "Written theory papers at the end of the programme",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start bg-muted/30 border border-border rounded-lg p-4">
              <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
              <span className="text-muted-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">What You Get</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What Delegates Receive</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "ProQual CAT1 Certificate", desc: "ProQual-accredited CAT1 qualification. Recorded on the ProQual register and verifiable by employers and clients." },
            { title: "ProQual CAT2 Certificate", desc: "ProQual-accredited CAT2 Safe Dig qualification. Confirms competency in safe excavation practices around buried services." },
            { title: "Written Assessment Record", desc: "Documented evidence of theory knowledge across both CAT1 and CAT2 criteria." },
            { title: "Practical Assessment Record", desc: "On-site assessment evidence covering cable and pipe location (CAT1) and safe excavation (CAT2)." },
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
          <Image src="cat-69-proqual-cat1-cat2-combined" width={1200} height={900} alt="ProQual CAT1 and CAT2 combined training practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-56-proqual-cat1-cat2-combined" width={1200} height={900} alt="Safe dig technique demonstration during CAT2 training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-55-proqual-cat1-cat2-combined" width={1200} height={900} alt="Cable avoidance and safe excavation combined assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Site requirements */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Site Requirements</p>
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
              <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">CAT1 Location Area</h3>
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
              <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">CAT2 Safe Dig Area (Minimum)</h3>
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
            <p className="text-sm text-muted-foreground">The training will not take place unless the minimum CAT2 site requirements are met. Each delegate must bring government-issued photographic ID. Sygma trainers typically arrive in a transit-van-sized vehicle (please advise at booking if there are height barriers or access restrictions).</p>
          </div>
        </div>
      </section>

      {/* CITB */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-3">CITB Funding</p>
            <h2 className="text-2xl font-black mb-4 text-foreground">Funding Support</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sygma Solutions is a CITB Approved Training Organisation. CITB-registered employers may be able to access training funding support through the CITB Employer Network. Contact your CITB adviser directly for current eligibility and funding options.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Equipment</p>
            <h2 className="text-2xl font-black mb-4 text-foreground">Equipment Provision</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sygma provides Radiodetection CAT4 and Genny4 as standard equipment. If delegates use a different manufacturer's locator or signal generator, they must bring their own equipment at a minimum ratio of one locator per three delegates. Each delegate bringing their own equipment is strongly encouraged as it allows the practical element to be conducted using the tools they will use on site. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <div className="w-full overflow-hidden aspect-[21/9] bg-muted">
        <Image src="cat-05" width={1200} height={900} alt="ProQual CAT1 and CAT2 on-site combined training, Sygma Solutions UK-wide delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* Why Sygma */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Not All CAT1 Courses Are Created Equal</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Our approach to utility avoidance training sets us apart from standard compliance courses. Here's what makes the difference.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Beyond Minimum Specification",
                desc: "Many CAT1 courses meet the minimum specification. Ours exceed it. We invest in the science and in your operatives' depth of understanding.",
              },
              {
                title: "Genny & CAT Methodology",
                desc: "Our integrated approach delivers 70-80% increase in operative confidence when working with difficult services and non-standard site conditions.",
              },
              {
                title: "Specialist Trainers",
                desc: "Directly employed by Sygma. Ex-surveyors with real-world field experience. All TAQA qualified and current with industry standards.",
              },
              {
                title: "Real Practical Assessment",
                desc: "On-site assessment under real conditions. Not artificial scenarios in a training centre. Your operatives are assessed where they will actually work.",
              },
              {
                title: "Independent",
                desc: "No survey partnerships, no equipment sales, no commercial influence. We train your team to work safely and competently.",
              },
              {
                title: "We Come to You",
                desc: "In-house delivery anywhere in the UK with travel fully included. Minimal disruption to your operations and your team stays home.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-background p-5">
                <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
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
          <p className="text-muted-foreground mb-8 max-w-2xl">HSG47 defines what competent utility avoidance looks like. This course covers all six essential elements.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Trained and Competent",
                desc: "Full theoretical foundation and practical assessment to confirmed ProQual CAT1 and CAT2 standards.",
              },
              {
                title: "Safe System of Work",
                desc: "Permits to dig, risk assessments, site inspection protocols, and documented procedures.",
              },
              {
                title: "Service Plan Checks",
                desc: "STATS plan interpretation, limitations, quality levels, visual verification, and drawing interrogation.",
              },
              {
                title: "Correct Use of Equipment",
                desc: "Locator and signal generator operation, signal interpretation, depth estimation, and troubleshooting.",
              },
              {
                title: "Safe Excavation",
                desc: "Practical safe dig assessment with exposure of live services, correct tool use, and reinstatement.",
              },
              {
                title: "Evidenced Records",
                desc: "Written assessment, practical observation, and CAT Manager data logging for your records.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-muted/40 p-5">
                <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
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
                title: "EUSR CAT1 and CAT2 Combined",
                desc: "The EUSR equivalent of this ProQual programme. Two-day combined EUSR CAT1 and CAT2 covering the same content through the EUSR framework.",
                link: "/courses/eus-cat1-cat2-combined",
              },
              {
                title: "ProQual CAT1",
                desc: "Standalone ProQual CAT1 qualification for operatives who need locating competency without the safe dig element.",
                link: "/courses/proqualcat1-training",
              },
              {
                title: "ProQual CAT2",
                desc: "Standalone ProQual CAT2 qualification for teams already holding CAT1 who need the safe excavation competency separately.",
                link: "/courses/proqualcat2",
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
          <Image src="cat-12-proqual-cat1-cat2-combined" width={1200} height={900} alt="Utility avoidance practical training on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-06-proqual-cat1-cat2-combined" width={1200} height={900} alt="Safe excavation assessment during ProQual CAT2" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-01-proqual-cat1-cat2-combined" width={1200} height={900} alt="Combined CAT1 and CAT2 certificate training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* FAQs */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">{q}</h3>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
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
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Get in Touch for Your Team
            </Link>
            <Link
              href="/courses/eus-cat1-cat2-combined"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View EUSR CAT1 and CAT2 Combined
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
