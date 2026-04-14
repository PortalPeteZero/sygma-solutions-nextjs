import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from "lucide-react";
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import Image from 'next/image';

const faqs = [
              {
                q: "Do delegates need to hold EUSR CAT1 or ProQual CAT1 before attending?",
                a: "A working knowledge of CAT and Genny locating equipment is required. Delegates who have completed EUSR CAT1 or ProQual CAT1 will be well prepared. Those with significant field experience using locating equipment but without a formal qualification may also be suitable. If you are unsure, contact Sygma to discuss your team's background before booking.",
              },
              {
                q: "Why is the course limited to six delegates?",
                a: "The advanced EM course is technically intensive. Limiting the group to six delegates gives the trainer direct access to each delegate during both the theory and practical days. Group size is a quality decision, not a commercial one. In a group of ten, some delegates will not get enough time on the equipment to properly develop. In a group of six, every delegate does.",
              },
              {
                q: "What equipment is used on the course?",
                a: "The flagship 2-day course uses the Radiodetection RD8100, Vivax VLOC, and Leica Ultra. These are among the most capable electromagnetic locators in the market and represent a significant technical step up from a standard locator. Sygma provides equipment for the course. Delegates are encouraged to bring their own high-end equipment if they have it, as hands-on time with your own tool is more valuable than hands-on time with someone else's.",
              },
              {
                q: "How does the 3-day assessed course differ from the 2-day course?",
                a: "The 3-day course includes a formal survey assessment on Day 3 and a written exam requiring a 70% pass mark. It is capped at four delegates to allow thorough individual assessment. The 3-day format is best suited to organisations requiring formal documented assessment against survey methodology. The 2-day course includes ongoing practical and documented assessment throughout, but does not include a formal exam. Both result in a certificate of competence for delegates meeting the standard.",
              },
              {
                q: "Is this course relevant to the ProQual Level 3 to Level 6 pathway?",
                a: "Yes. For ProQual Level 4 Specialist Technical and Level 5 Diploma learners, the 2-day advanced EM course is included free of charge as part of the programme. It fulfils part of the evidence requirements for these qualifications. For Level 3 and Level 6 learners, the course is relevant as supporting evidence but is not included as standard. Contact Sygma to discuss how it fits into your specific qualification programme.",
              },
              {
                q: "Can this course be delivered on our own site?",
                a: "Yes. Private courses can be arranged at a client's site or premises. The site will need to contain a sufficient range and depth of buried metallic utilities to support the practical element. Sygma will assess suitability before confirming. Where the site is not suitable, Sygma can advise on alternatives. The site assessment is chargeable at a daily rate.",
              },
              {
                q: "How does this training cover safe working practices?",
                a: "The course covers a safe system of work for advanced electromagnetic location, including how to safely locate near high voltage cables and substations. Delegates learn risk assessment for different types of buried services including pipes and cables, and how to use precision locators safely in high-risk environments. Reduced risk of utility strikes is a core outcome of all Sygma training courses.",
              },
              {
                q: "What will delegates learn and be able to do after the course?",
                a: "Delegates will learn to use precision locators with accuracy and confidence across all types of buried utilities. They will be able to safely identify and trace cables, pipes and other services in complex environments, use signal transmitters and accessories effectively, and apply best practice techniques for depth verification and distorted field analysis.",
              },
              {
                q: "What types of buried services does the practical element cover?",
                a: "The practical site contains a genuine mixture of buried utilities including HV and LV electrical cables, gas pipes, water pipes, communications cables and other infrastructure. Delegates practice locating all types of services using different modes and frequencies on the precision locators, building the confidence and accuracy needed for real survey work.",
              },
            ];


export const metadata: Metadata = {
  title: 'RD8200 Training | Advanced EM Locator | Sygma Solutions',
  description: 'Advanced electromagnetic locator training from Sygma Solutions. RD8200, RD8100, Vivax vLoc, Leica Ultra. CICES-mapped. Signal clamp, capacitance, sonde, and HV cable location.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/advanced-em-locator' },
  openGraph: {
    title: 'RD8200 Training | Advanced EM Locator | Sygma Solutions',
    description: 'Advanced electromagnetic locator training from Sygma Solutions. RD8200, RD8100, Vivax vLoc, Leica Ultra. CICES-mapped. Signal clamp, capacitance, sonde, and HV cable location.',
    url: 'https://sygma-solutions.com/courses/advanced-em-locator',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/em-03', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function AdvancedEmLocator() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'RD8200 Training | Advanced EM Locator', description: 'Advanced electromagnetic locator training covering RD8200, RD8100, Vivax vLoc, and Leica Ultra. CICES-mapped. Signal clamp, capacitance, sonde, and HV cable location.', url: '/courses/advanced-em-locator', credential: 'CICES GEUS01 Item E', duration: '2 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'Advanced EM Locator' }]) }} />

      <InnerPageHero
        eyebrow="Utility Avoidance"
        headline="Advanced EM Locator Training: High-End Electromagnetic Location for Specialists"
        sub="Advanced training courses for precision locators. One day theory. One day on a real site near a substation. HV location, distorted field analysis, capacitance, signal clamp, depth verification, sonde, and induction sweeps. For operators who need to locate what a standard course cannot."
        image="em-04"
        breadcrumbs={[
          { label: "Training", href: "/training/cable-location-avoidance" },
          { label: "Advanced EM Locator" },
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
            ["Duration", "2 Days"],
            ["Max Delegates", "6 (intentionally small)"],
            ["Equipment", "RD8100 / Vivax VLOC / Leica Ultra"],
            ["CICES Mapping", "GEUS01 Item E"],
            ["Level 4/5 Learners", "Free of charge"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="eyebrow mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Free for Level 4/5 banner */}
      <div className="bg-accent/10 border-b border-accent/20">
        <div className="container mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-bold text-foreground">
            <span className="text-accent">Free for ProQual Level 4 and Level 5 Learners</span> enrolled with Sygma Solutions. Included as part of the Level 4/5 programme curriculum.
          </p>
          <Link href="/contact#enquiry-form" className="text-sm font-semibold text-primary hover:underline shrink-0">
            Find Out More &rarr;
          </Link>
        </div>
      </div>

      {/* About section */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">What Is Advanced EM Locator Training?</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Beyond Standard CAT1 Competency</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Standard CAT1 training teaches operatives how to find a service. Advanced EM training courses use precision locators to teach them how to find the services that standard cable avoidance tools miss. This is the course for operators who encounter high voltage cables, distorted electromagnetic fields, problem services including pipes and cables that do not respond as expected, and situations where depth estimation and signal quality judgement are critical to a safe outcome.
              </p>
              <p>
                Sygma's 2-day advanced course is built around high-end precision locators: the Radiodetection RD8100, Vivax VLOC, and Leica Ultra. These instruments and their signal transmitters and accessories offer capabilities that a standard locator does not. Getting the most from them requires a deeper understanding of electromagnetic principles, signal behaviour in complex environments, and the judgements that experienced operators make under pressure. Delegates learn to use these precision locators safely and with accuracy across all types of buried utilities including cables, pipes and other services.
              </p>
              <p>
                The practical instruction takes place on a live site near Sygma's Wigan training centre, in a built-up area with direct proximity to a substation. The site contains a genuine mixture of HV and LV cables and pipes plus a range of additional buried utilities. This is not a manufactured training environment. It is real infrastructure, which requires real technique and a safe system of work.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-xl border border-border p-6">
              <p className="eyebrow mb-4">Course at a Glance</p>
              {[
                ["Format", "2 days: 1 day theory + 1 day practical on a live site"],
                ["Equipment", "Radiodetection RD8100, Vivax VLOC, Leica Ultra"],
                ["Max Delegates", "6 per course"],
                ["Assessment", "Ongoing practical and documented assessment throughout"],
                ["CICES Mapping", "GEUS01 Item E"],
                ["Level 4/5 Learners", "Free of charge (included in programme)"],
                ["Pricing", "Contact us for current pricing and availability"],
                ["Venues", "Sygma HQ Wigan | The Survey School Worcester | Private courses"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                  <span className="eyebrow text-muted-foreground w-28 shrink-0">{k}</span>
                  <span className="text-sm text-foreground text-right">{v}</span>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 rounded-xl border border-primary/20 p-5">
              <p className="text-sm font-bold text-foreground mb-2">Why only 6 delegates?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The advanced EM course is technically intensive. Limiting the group to six delegates gives the trainer direct access to each delegate during both the theory and practical days. Group size is a quality decision, not a commercial one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-12 max-w-5xl">
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="em-07" width={1200} height={900} alt="Advanced EM locator training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="em-03" width={1200} height={900} alt="RD8100 locating equipment in field" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="em-06" width={1200} height={900} alt="On-site practical near substation" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>

      {/* Two-day course content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Course Content</p>
          <h2 className="text-2xl md:text-3xl font-black mb-10 text-foreground">Two Days. One Subject. No Shortcuts.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">Day One: Theory</p>
                <p className="text-white/70 text-sm">Electromagnetic principles and advanced equipment operation</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Electromagnetic location theory and principles: how EM signals propagate, interact with buried conductors, and decay with depth",
                    "Receiver and transmitter set up, menu controls and operating parameters on high-end equipment",
                    "Choosing the right frequency: why frequency selection matters and when it introduces errors",
                    "Earth positioning and its relevance to a locate: how transmitter earth stake position affects signal quality",
                    "Signal Clamp: how to apply a clamp, what it does, when it is more effective than direct connection",
                    "Locating HV: specific challenges of locating high voltage cables and signal behaviour near substations",
                    "Distorted magnetic fields: what causes distortion and how to judge the reliability of a locate",
                    "Antenna settings: Peak, Null, Peak+ and when each is appropriate in different field conditions",
                    "Depth estimation: the physics behind depth readings and how to verify depth reliability",
                    "High frequency capacitance techniques: when capacitance locating is the correct approach",
                    "Current measurement and current direction: how to use current flow data to trace services",
                    "Induction, induction sweeps and nulling out: advanced induction techniques for complex environments",
                    "Sonde location: principles and practical application",
                    "How to structure a complete survey from first contact to final marking",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">Day Two: Practical on a Live Site</p>
                <p className="text-white/70 text-sm">Real site, real HV, real challenges</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  The practical day moves to the Sygma site in a built-up area near the substation. The site has a genuine mixture of HV and LV electrical cables, gas pipes, water pipes, communications cables, and other buried infrastructure. Every delegate applies every technique from Day One in real field conditions, building confidence and accuracy in the use of precision locators to safely locate all types of buried services.
                </p>
                <ul className="space-y-3">
                  {[
                    "Practise transmitter connection, clamp application and induction sweeps on real buried services",
                    "Locate HV cables in the presence of the substation electromagnetic environment",
                    "Identify and work through distorted field situations on real infrastructure",
                    "Apply depth estimation and use current direction and current measurement to confirm locates",
                    "Apply high frequency capacitance to problem services",
                    "Conduct a full site survey from start to finish using structured methodology",
                    "Receive documented assessment and trainer feedback throughout",
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

      {/* Who should attend */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Audience</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Who Should Attend Advanced EM Training?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          This course is not entry-level. It requires a working knowledge of CAT and Genny cable avoidance tools and is designed for operators who want to move from competent to expert. Delegates learn to use precision locators safely, with accuracy and confidence, following a safe system of work.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Experienced Utility Operatives",
              desc: "Those who hold EUSR CAT1 or ProQual CAT1 and regularly encounter difficult locating scenarios in the field. These training courses give them the diagnostic understanding and best practice to handle edge cases correctly rather than guessing.",
            },
            {
              title: "Professional Utility Surveyors",
              desc: "Those pursuing or holding ProQual Levels 3-6 or CICES membership who need to demonstrate GEUS01 Item E competency. Delegates learn advanced techniques and the course provides the evidence base for CICES membership applications.",
            },
            {
              title: "ProQual Level 4/5 Learners",
              desc: "Delegates enrolled in the Sygma ProQual Level 4 Specialist Technical or Level 5 Diploma programmes. Advanced EM training is included free of charge as part of the Level 4/5 curriculum.",
            },
            {
              title: "Site Supervisors and CAT Managers",
              desc: "Those responsible for signing off locating operations on high-risk sites who need a deeper technical understanding of how to use precision locators safely, what their operatives are actually doing, and what the equipment's limitations are.",
            },
            {
              title: "Operators New to High-End Equipment",
              desc: "Those moving from a standard locator to an RD8100, Vivax VLOC or Leica Ultra who need more than the manufacturer's manual to learn how to use their precision locator and accessories correctly in field conditions.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl border border-border p-5 bg-muted/20">
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width image break */}
      <div className="w-full overflow-hidden aspect-[21/9] bg-muted">
        <Image src="cat-60" width={1200} height={900} alt="Advanced EM locator practical training on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* Course formats */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Training Formats</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Available Course Formats</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The right format depends on your team's existing knowledge level and time availability. Not sure which is right? Contact Sygma and we will advise honestly.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-bold text-foreground">Format</th>
                  <th className="text-left px-4 py-3 font-bold text-foreground">Equipment Focus</th>
                  <th className="text-left px-4 py-3 font-bold text-foreground">Duration</th>
                  <th className="text-left px-4 py-3 font-bold text-foreground">Ideal For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["2-Day Advanced (Flagship)", "RD8100 / Vivax VLOC / Leica Ultra", "2 days", "Specialists, CICES candidates, ProQual Level 4/5 learners"],
                  ["2-Day Advanced (Extended)", "RD8000 Range and Vivax VLOC", "2 days", "Teams upgrading from CAT4 to RD8000 range"],
                  ["3-Day Advanced (Assessed)", "RD8000 Range", "3 days", "Teams requiring formal survey assessment with 70% written exam pass mark. Maximum 4 delegates."],
                  ["1-Day Awareness (RD8000 Range)", "RD8000 Range", "1 day", "Teams deploying RD8000 range who need equipment-specific awareness training on-site. Up to 8 delegates."],
                  ["1-Day Refresher", "Any EM equipment", "1 day", "Experienced operators with specific operational questions or issues to address. Up to 8 delegates."],
                ].map(([format, equip, dur, ideal], i) => (
                  <tr key={format} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 font-semibold text-foreground">{format}</td>
                    <td className="px-4 py-3 text-muted-foreground">{equip}</td>
                    <td className="px-4 py-3 text-muted-foreground">{dur}</td>
                    <td className="px-4 py-3 text-muted-foreground">{ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Advanced EM Location Certificate",
              "Written Assessment Record",
              "Practical Assessment Record",
              "Progression Guidance (toward PAS128 and Level 4/5 qualifications)",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="em-05" width={1200} height={900} alt="Advanced electromagnetic locator practical training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="em-04" width={1200} height={900} alt="Advanced EM locator techniques demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="em-03" width={1200} height={900} alt="Hands-on advanced utility locating assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* CICES section */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="eyebrow mb-3">Professional Recognition</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CICES Competency Mapping: GEUS01 Item E</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The 2-day advanced EM course is formally mapped to the Chartered Institution of Civil Engineering Surveyors (CICES) Competencies for membership, specifically GEUS01 Item E: the ability to demonstrate advanced electromagnetic location technique.
              </p>
              <p>
                For professionals pursuing CICES membership or seeking to demonstrate structured competency development against the GEUS01 framework, completion of the advanced EM course with documented assessment provides direct evidence toward this competency item.
              </p>
              <p>
                Sygma Solutions is the only specialist independent utility training provider in the UK. Our independence from survey work means the documented assessment delegates receive is objective and credible. We have no commercial reason to inflate results.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">Pricing</p>
            <h3 className="text-xl font-black mb-4 text-foreground">Course Fees</h3>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Open Course (2-Day Advanced)", "Per-person pricing. Contact for current rates and availability."],
                    ["ProQual Level 4/5 Learners", "Free of charge. Included as part of the programme."],
                    ["Private Group Booking (up to 6)", "Contact for pricing and venue logistics."],
                    ["1-Day Formats (Awareness/Refresher)", "Contact for pricing. Up to 8 delegates per session."],
                    ["3-Day Assessed Course", "Contact for pricing. Maximum 4 delegates."],
                  ].map(([label, value], i) => (
                    <tr key={label} className={i % 2 === 0 ? "bg-muted/20" : "bg-background"}>
                      <td className="px-4 py-3 font-semibold text-foreground">{label}</td>
                      <td className="px-4 py-3 text-muted-foreground">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              CITB funding may be accessible via the CITB Employer Network. Contact your CITB adviser for current options.
            </p>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="em-02" width={1200} height={900} alt="Advanced locator training with depth verification" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="em-04" width={1200} height={900} alt="Electromagnetic locator practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="em-02" width={1200} height={900} alt="Advanced EM training equipment and techniques" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
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

      {/* Why Sygma */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose Sygma for Advanced EM Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">The advanced EM course is technically demanding. Small groups, experienced trainers, and real sites make the difference. An overview of what sets Sygma's training courses apart.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Advanced Locator Expertise</p>
              <h3 className="text-base font-bold text-foreground mb-2">Training courses cover RD8100, RD8200 and Vivax VLOC PRO in depth. Not generic manufacturer demos.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Advanced EM training that goes beyond basic equipment operation to develop diagnostic competency with precision locators, signal transmitters and accessories.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Specialist Trainers</p>
              <h3 className="text-base font-bold text-foreground mb-2">Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Our trainers come from the field. They have years of experience locating services in real conditions.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Real Practical Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Structured on-site practical in real conditions.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Not a simulation. Not a manufactured site. A real location with a genuine mix of HV and LV cables, pipes and other types of buried services.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Independent</p>
              <h3 className="text-base font-bold text-foreground mb-2">No surveys, no equipment, no manufacturer relationships.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Complete independence means objective assessment and no commercial pressure to inflate results.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">We Come to You</p>
              <h3 className="text-base font-bold text-foreground mb-2">Delivered at your site, travel included.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Private training courses at your location eliminate disruption and allow delegates to learn and practice on your own utilities, cables and pipes.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Small Groups</p>
              <h3 className="text-base font-bold text-foreground mb-2">Maximum 6 delegates, intentionally small.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">In a group of six, every delegate gets the time they need. Quality over volume.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CITB Employer Network */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Funding</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">CITB Employer Network</h2>
          <div className="border border-border rounded-lg bg-card p-5">
            <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Training Support</p>
            <h3 className="text-base font-bold text-foreground mb-2">Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">CITB-registered employers may be able to access Employer Network funding towards training costs. Speak with your CITB adviser to explore funding options for advanced EM training.</p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Next Steps</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Training Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Continue your journey with these complementary training courses in utility avoidance and advanced location. Each course covers different types of practice and skills development.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/courses/eus-cat1" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The foundation qualification for anyone who uses cable avoidance tools to locate buried services. Prerequisite for advanced EM training courses.</p>
            </Link>
            <Link href="/courses/eus-superuser" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR Superuser</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Advanced coaching and assessment competency. The next level for experienced operatives moving into supervisory roles.</p>
            </Link>
            <Link href="/courses/plans-and-process" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">Plans and Process Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Master utility plan interpretation. Understand how plans integrate with the locating survey from start to finish.</p>
            </Link>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Book Advanced EM Locator Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Open training courses at Sygma HQ in Wigan and The Survey School in Worcester. Private group bookings available nationwide. Maximum 6 delegates per course. Learn to use precision locators safely and with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Check Availability and Book
            </Link>
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Free for Level 4/5 Learners: Find Out More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

