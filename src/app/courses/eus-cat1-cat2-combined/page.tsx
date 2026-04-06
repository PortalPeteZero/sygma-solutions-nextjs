import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';

const faqs = [
  {
    q: "Can we run CAT1 and CAT2 as separate courses instead?",
    a: "Yes. Sygma offers standalone EUSR CAT1 and EUSR CAT2 programmes for organisations that need to train different groups or stagger their training. The combined programme is designed for teams that need both qualifications at the same time.",
  },
  {
    q: "What happens if our site fails the minimum requirements on the day?",
    a: "The training will not proceed unless the minimum CAT2 site requirements are met. Sygma will assess site suitability before booking is confirmed. If your site is not suitable, we can advise on alternatives or arrange access to a different location.",
  },
  {
    q: "Do delegates need any prior experience?",
    a: "No. The combined programme is designed to take delegates from no prior training through to EUSR CAT1 and CAT2 qualification in two days. The classroom content on day one provides all the foundation knowledge required for the practical work on day two.",
  },
  {
    q: "Is this the same as ProQual Level 2 utility avoidance?",
    a: "No. EUSR CAT1 and CAT2 are industry-recognised qualifications administered through EUSR. ProQual Level 2 is a regulated qualification on the RQF. Both cover utility avoidance, but through different frameworks. Many organisations accept EUSR recognition; some require the RQF qualification. Sygma can advise on which is appropriate for your team.",
  },
  {
    q: "What if some delegates use equipment other than a Radiodetection locator?",
    a: "Delegates should bring their own equipment if they use a different manufacturer's locator, at a minimum ratio of one locator per three delegates. Sygma cannot carry a full stock of every manufacturer's equipment. The training covers universal locating and signal generation principles, This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX.",
  },
  {
    q: "Can we run this at your Wigan training centre?",
    a: "Yes. Sygma's dedicated training centre in Wigan includes live utility demonstration rigs and a safe dig area. It can be used at no additional venue cost for organisations that cannot host the training at their own site.",
  },
];

export const metadata: Metadata = {
  title: 'EUSR CAT 1 and 2 Training | Combined Course | Sygma',
  description: 'Two-day combined EUSR CAT1 and CAT2 course covering utility avoidance and safe excavation. EUSR-registered outcomes with CAT and Genny practical assessment.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat1-cat2-combined' },
};

export default function EusCat12CombinedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'EUSR CAT1 and CAT2 Combined Course', description: 'Two-day combined EUSR CAT1 and CAT2 course covering utility avoidance and safe excavation. EUSR-registered outcomes with CAT and Genny practical assessment.', url: '/courses/eus-cat1-cat2-combined', credential: 'EUSR CAT1 and CAT2', duration: '2 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'EUSR CAT1 and CAT2 Combined' }]) }} />

      <InnerPageHero
        eyebrow="Utility Avoidance"
        headline="EUSR CAT1 and CAT2 Combined: Two-Day Utility Avoidance and Safe Dig Training"
        sub="One programme. Two EUSR-recognised qualifications. Both CAT1 and CAT2 completed in two days at your site, with full theory, Genny-First practical, and a live safe dig assessment."
        image="/images/courses/CAT4-and-Genny-64.webp"
        alt="Combined EUSR CAT1 and CAT2 cable avoidance training with practical field exercises"
        breadcrumbs={[
          { label: 'Training', href: '/training/cable-location-avoidance' },
          { label: 'EUSR CAT1 and CAT2 Combined' },
        ]}
      />

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

      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "2 days (classroom and site)"],
            ["Format", "In-house at your site or Sygma Wigan"],
            ["Max Delegates", "8 per course"],
            ["Qualifications", "EUSR CAT1 and EUSR CAT2"],
            ["Delivery", "Nationwide UK"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <img loading="lazy" src="/images/courses/CAT4-and-Genny-09.webp" alt="EUSR CAT1 and CAT2 combined training - practical session" className="rounded-lg object-cover aspect-[4/3] w-full" />
          <img loading="lazy" src="/images/courses/CAT4-and-Genny-51.webp" alt="EUSR CAT1 and CAT2 combined training - hands-on assessment" className="rounded-lg object-cover aspect-[4/3] w-full" />
          <img loading="lazy" src="/images/courses/Safe-Dig-05.webp" alt="EUSR CAT1 and CAT2 combined training - on-site delivery" className="rounded-lg object-cover aspect-[4/3] w-full" />
        </div>
      </section>

      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Who Is This Course For</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Designed For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Anyone Needing Complete Utility Avoidance Competency", desc: "Covers both locating with a CAT and Genny and safe excavation in a single course" },
              { title: "Site Operatives and Groundworkers", desc: "Those who both locate and excavate around buried services" },
              { title: "New Entrants to Utilities", desc: "The most efficient route to full EUSR CAT1 and CAT2 competency" },
              { title: "Organisations Wanting Comprehensive Training", desc: "Companies that want their workforce trained in both locating and safe digging in one visit" },
            ].map((p, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Combine CAT1 and CAT2?</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The Efficient Route to Full EUS Recognition</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Most organisations that send operatives for CAT1 training will eventually need CAT2 as well. CAT1 covers the detection side: electromagnetic theory, equipment operation, Genny application, and plan interpretation. CAT2 adds the excavation element: the safe dig, the permit to dig, the correct handling of exposed services, and the documented assessment that proves your operatives can work safely in proximity to live utilities.</p>
              <p>Running them separately means two days of mobilisation, two sets of site preparation, and two invoices. The combined programme delivers both EUSR-recognised qualifications in a single two-day block, reducing disruption to your operations and keeping your team off the road for the minimum time necessary.</p>
              <p>Sygma trainers are specialists in the science of electromagnetic location. Day one builds the understanding. Day two tests whether operatives can apply it under real site conditions. By the end of the programme, your team holds both qualifications and has experienced a full locate-to-safe-dig sequence.</p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Course at a Glance</p>
            {[
              ["Duration", "2 days (classroom and on-site)"],
              ["Format", "In-house at your site or Sygma's Wigan training centre"],
              ["Max Delegates", "8 per course"],
              ["Qualifications", "EUSR CAT1 and EUSR CAT2 (Safe Dig)"],
              ["Assessment", "Multiple choice questions (MCQs) + practical safe dig assessment"],
              ["Prerequisites", "None"],
              ["Equipment", "Sygma provides Radiodetection CAT4 and Genny4 as standard; this course can be delivered on Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX."],
              ["Delivery", "Nationwide UK"],
              ["Pricing", "Contact Sygma for a tailored quote"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Day One</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Theory Foundation: Legislation, Equipment Science, and Genny-First Practice</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">The classroom element covers the complete theoretical foundation required for both qualifications.</p>
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

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Day Two</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Practical Application and Safe Dig Assessment</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">The site element moves delegates from knowledge into application. All site work takes place at the client's premises or a pre-agreed location with suitable underground utilities.</p>
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

      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What You Get</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What Delegates Receive</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "EUSR CAT1 Certificate", desc: "EUSR-registered CAT1 accreditation. Recorded on the EUSR database and verifiable by employers and clients." },
            { title: "EUSR CAT2 Certificate", desc: "EUSR-registered CAT2 Safe Dig accreditation. Confirms competency in safe excavation practices around buried services." },
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

      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/CAT4-and-Genny-10.webp" alt="EUSR CAT1 and CAT2 combined training practical session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/Safe-Dig-08.webp" alt="Safe dig technique demonstration during CAT2 training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/CAT4-and-Genny-54.webp" alt="Cable avoidance and safe excavation combined assessment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
      </div>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Site Requirements</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What Your Site Must Provide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border p-5 bg-background">
              <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Classroom</h3>
              <ul className="space-y-2">
                {["Meeting or conference room with seating for all delegates and the trainer","Space for a projector and a clear wall or projection screen","Welfare facilities and adequate desk space for written assessment"].map((item, i) => (<li key={i} className="flex gap-2 text-muted-foreground text-sm"><span className="text-accent font-bold shrink-0">&#8250;</span><span>{item}</span></li>))}
              </ul>
            </div>
            <div className="rounded-xl border border-border p-5 bg-background">
              <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">CAT1 Location Area</h3>
              <ul className="space-y-2">
                {["Area with detectable underground utilities near the training room","Multiple utility types present (not just a single power cable)","STATS plans for the site provided by the client in advance"].map((item, i) => (<li key={i} className="flex gap-2 text-muted-foreground text-sm"><span className="text-accent font-bold shrink-0">&#8250;</span><span>{item}</span></li>))}
              </ul>
            </div>
            <div className="rounded-xl border border-border p-5 bg-background">
              <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">CAT2 Safe Dig Area (Minimum)</h3>
              <ul className="space-y-2">
                {["A live dig area with buried metallic utilities. One power cable to a site cabin is not sufficient.","Open area of at least 10m squared, ground suitable for a hand dig","Full buried service plans available","Delegates must have FR PPE and insulated digging tools"].map((item, i) => (<li key={i} className="flex gap-2 text-muted-foreground text-sm"><span className="text-accent font-bold shrink-0">&#8250;</span><span>{item}</span></li>))}
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-border bg-amber-50 dark:bg-amber-950/20 p-5">
            <p className="text-sm font-bold text-foreground mb-1">Important</p>
            <p className="text-sm text-muted-foreground">The training will not take place unless the minimum CAT2 site requirements are met. Each delegate must bring government-issued photographic ID.</p>
          </div>
        </div>
      </section>

      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <img loading="lazy" src="/images/courses/Safe-Dig-15.webp" alt="EUSR CAT1 and CAT2 on-site combined training" className="w-full h-full object-cover object-center" />
      </div>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Not All CAT1 Courses Are Created Equal</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Exceeds Minimum Specification", desc: "Many CAT1 courses meet the minimum specification. Ours exceed it. We invest in the science and in your operatives' depth of understanding." },
              { title: "Genny & CAT Methodology", desc: "Our integrated approach delivers 70-80% increase in operative confidence when working with difficult services and non-standard site conditions." },
              { title: "Specialist Trainers", desc: "Directly employed by Sygma. Ex-surveyors with real-world field experience. All TAQA qualified and current with industry standards." },
              { title: "Real Practical Assessment", desc: "On-site assessment under real conditions. Not artificial scenarios in a training centre. Your operatives are assessed where they will actually work." },
              { title: "Independent", desc: "No survey partnerships, no equipment sales, no commercial influence. We train your team to work safely and competently." },
              { title: "We Come to You", desc: "In-house delivery anywhere in the UK with travel fully included. Minimal disruption to your operations and your team stays home." },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-background p-5">
                <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Related Courses</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Expand Your Team's Utility Avoidance Capability</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "ProQual CAT1 Plus", desc: "RQF-regulated alternative to EUSR CAT1. Covers electromagnetic location with additional depth on geology and cable theory.", link: "/courses/proqualcat1plus" },
              { title: "EUSR CAT1", desc: "Two-day location theory and practical. Detection only, without the safe dig element of this combined programme.", link: "/courses/eus-cat1" },
              { title: "ProQual CAT1 & CAT2 Combined", desc: "The ProQual-accredited equivalent of this programme. Same content delivered through the ProQual framework.", link: "/courses/proqual-cat1-cat2-combined" },
            ].map((course, i) => (
              <Link key={i} href={course.link} className="rounded-lg border border-border bg-background p-5 hover:border-primary transition-colors block group">
                <h3 className="font-bold text-foreground mb-2 text-sm group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-muted-foreground text-sm">{course.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Common Questions</p>
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

      <section className="border-t border-border py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Also Consider</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/osca" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
              <p className="mb-1 text-sm font-semibold text-foreground">OSCA Assessment</p>
              <p className="text-xs text-muted-foreground">GPS-stamped on-site competency assessment to verify real-world skills.</p>
            </Link>
            <Link href="/contact" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
              <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Training</p>
              <p className="text-xs text-muted-foreground">Design a tailored programme around your site risks, equipment, and team size.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Get in Touch for Your Team</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">In-house at your site anywhere in the UK, or at Sygma's dedicated training centre in Wigan. Contact us with delegate numbers, your preferred location, and target dates.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">Get in Touch for Your Team</Link>
            <Link href="/courses/eus-cat1-cat2-usc-combined" className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors">View CAT1, CAT2 and USC Combined</Link>
          </div>
        </div>
      </section>
    </>
  );
}
