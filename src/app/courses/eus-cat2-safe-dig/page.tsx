import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import Image from 'next/image';

const faqs = [
  {
    q: "Do delegates need to hold EUSR CAT1 before attending EUSR CAT2?",
    a: "It is strongly recommended. EUSR CAT2 assumes familiarity with CAT and Genny locating equipment, as the on-site practical element requires delegates to operate a locator before commencing the dig. Delegates who have not completed EUSR CAT1 or an equivalent utility locating course may struggle with the practical element.",
  },
  {
    q: "What happens if the site does not have a suitable live dig area?",
    a: "Sygma Solutions can advise on site suitability before your booking is confirmed. If your site is not suitable, we can often arrange access to an alternative site. Alternatively, courses can be delivered at Sygma's training centre in Wigan at no extra cost. Please contact us before booking if you are unsure.",
  },
  {
    q: "What is the pass mark for the written assessment?",
    a: "Sygma Solutions does not publish a fixed percentage pass mark for the EUSR CAT2 written assessment. Assessment is conducted by EUSR-registered criteria. Delegates who do not pass on the day will receive guidance on the areas that require improvement before a reassessment can be arranged.",
  },
  {
    q: "Can EUSR CAT1 and EUSR CAT2 be delivered on the same day?",
    a: "Yes. Sygma Solutions offers a combined EUSR CAT1 and CAT2 training day for teams who need both qualifications. Contact us for pricing and logistics for combined delivery.",
  },
  {
    q: "How does EUSR CAT2 relate to the ProQual CAT2 Safe Dig qualification?",
    a: "EUSR CAT2 and ProQual CAT2 cover the same operational area: safe excavation near buried services. ProQual CAT2 is assessed against a broader and more detailed criteria framework, whereas EUSR CAT2 follows the EUSR specification. Both are industry-recognised qualifications. The right choice depends on your organisation's competency framework requirements. Sygma offers both.",
  },
  {
    q: "What STATS plans are needed for the course?",
    a: "STATS plans are the utility drawings for the specific site where the practical excavation will take place. They should be sourced from the relevant utility owners and operators before the course date. If you are unable to obtain plans, Sygma Solutions can supply suitable plans for an additional cost agreed before booking. Please discuss this with us when making your enquiry.",
  },
];


export const metadata: Metadata = {
  title: 'EUSR CAT 2 Training | Safe Dig Course | Sygma',
  description: 'EUSR CAT2 safe excavation training covering HSG47 safe digging practice. EUSR-registered outcomes delivered by specialist utility avoidance trainers.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat2-safe-dig' },
  openGraph: {
    title: 'EUSR CAT 2 Training | Safe Dig Course | Sygma',
    description: 'EUSR CAT2 safe excavation training covering HSG47 safe digging practice. EUSR-registered outcomes delivered by specialist utility avoidance trainers.',
    url: 'https://sygma-solutions.com/courses/eus-cat2-safe-dig',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/dig-01', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function EusCat2SafeDig() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'EUSR CAT2 Safe Dig Training', description: 'EUSR CAT2 safe excavation training from Sygma Solutions. EUSR-registered qualification covering HSG47 safe digging practice, proximity working, and live dig practical assessment.', url: '/courses/eus-cat2-safe-dig', credential: 'EUSR CAT2', duration: '1 day', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'EUSR CAT2 Safe Dig' }]) }} />

      <InnerPageHero
        eyebrow="Safe Dig and Advanced"
        headline="EUSR CAT2 Safe Dig: EUSR-Registered Safe Excavation Training"
        sub="The complete safe digging course. Classroom theory, live site practical, and written assessment. Built for every operative who excavates near buried services."
        image="dig-19"
        alt="EUSR CAT2 safe digging training with vacuum excavation and hand-dig demonstration"
        breadcrumbs={[
          { label: "Training", href: "/training/cable-location-avoidance" },
          { label: "EUSR CAT2 Safe Dig" },
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

      {/* Info Bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "1 Day"],
            ["Max Delegates", "8"],
            ["Registration", "EUSR Registered"],
            ["Format", "Classroom + On-Site Practical"],
            ["Pre-Requisite", "EUSR CAT1 recommended"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="eyebrow mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
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
                title: "Site Operatives Responsible for Excavation",
                desc: "Anyone who physically excavates around buried services"
              },
              {
                title: "Supervisors Overseeing Dig Operations",
                desc: "Those accountable for safe digging practice on site"
              },
              {
                title: "Organisations Requiring Safe Dig Competency",
                desc: "Companies that need to evidence safe excavation training across their workforce"
              },
              {
                title: "Anyone Combining CAT1 and CAT2",
                desc: "Delegates who want complete utility avoidance competency covering both locating and safe excavation"
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

      {/* What is CAT2 */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">About This Course</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">What Is EUSR CAT2 Safe Dig?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>EUSR CAT2 Safe Dig is the EUSR-recognised qualification that takes delegates from locate to excavate. Whereas EUSR CAT1 training focuses on finding underground utilities with a CAT and Genny locator, CAT2 covers what happens next: how to safely dig through to a service, expose it correctly, protect it during work, and reinstate the ground safely afterwards.</p>
          <p>It is a hands-on course. Every delegate will plan a safe dig, carry out a written risk assessment and permit to dig, operate locating equipment on site, excavate to the 500mm level, and then dig horizontally to expose a live buried service under assessment conditions.</p>
          <p>The course is built to HSG47 and GS6 standards. It covers the full range of occupational hazards associated with excavation work, including silica dust, vibration, noise, asbestos, and Leptospirosis, as well as ground hazards such as made-up ground, groundwater, and loose ground.</p>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="container mx-auto px-6 md:px-8 pb-10 max-w-5xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="dig-11" width={1200} height={900} alt="Safe dig training in progress" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="dig-19" width={1200} height={900} alt="On-site practical dig" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="dig-11" width={1200} height={900} alt="Service exposure technique" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>

      {/* Course at a Glance */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Quick Reference</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Course at a Glance</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Qualification", "EUSR CAT2 Safe Dig (EUSR Registered)"],
                  ["Duration", "1 Day (Classroom and On-Site Practical)"],
                  ["Course Format", "Classroom theory + On-site practical dig + MCQ assessment"],
                  ["Assessment", "Multiple choice questions (MCQs) and practical on-site observation"],
                  ["Maximum Delegates", "8 per session"],
                  ["Pricing", "Per course, not per person. Contact Sygma for a quote."],
                  ["Delivery Options", "On-site at client premises (nationwide) or Sygma HQ, Wigan"],
                  ["Equipment", "Locator and signal generator equipment provided; delegates encouraged to bring own equipment. Sygma provides Radiodetection CAT4 and Genny4 as standard, This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX"],
                  ["Site Requirement", "Live dig area with buried metallic utilities and meeting or conference room"],
                  ["Pre-Requisite", "Delegates should hold EUSR CAT1 or equivalent; photographic ID required on the day"],
                  ["CITB Funding", "May be accessible via the CITB Employer Network; contact your CITB adviser for current options"],
                  ["Accreditation", "EUSR Registered | CITB Approved Training Organisation"],
                ].map(([key, value]) => (
                  <tr key={key} className="border-b border-border last:border-0">
                    <td className="px-5 py-3 font-semibold text-foreground bg-muted/40 w-1/3">{key}</td>
                    <td className="px-5 py-3 text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How the Day Is Structured */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Course Format</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">How the Day Is Structured</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              num: "1",
              title: "Classroom Theory",
              items: [
                "Current legislation, HSG47 and GS6 guidance, and what they require of excavating operatives",
                "Site-specific risk assessments, company procedures and permits to dig",
                "Occupational health hazards: Leptospirosis, asbestos, silica dust, noise and vibration",
                "Excavation hazards: loose ground, made-up ground, groundwater and stored materials",
                "Reading and interpreting utility plans, their limitations, and what to do when plans are unavailable",
                "Detecting and marking underground services with locating equipment",
                "Safe excavation practices: hand tools, handheld power tools, and horizontal excavation",
                "Trench support systems and service exposure, support and reinstatement",
              ],
            },
            {
              num: "2",
              title: "On-Site Practical",
              items: [
                "Complete a site-specific risk assessment and permit to dig",
                "Use service plans and site information to identify indicated utility routes",
                "Operate locating equipment to confirm service positions",
                "Begin the safe dig operation, removing surface material with services marked",
                "Excavate to 500mm depth using appropriate tools and safe digging practice",
                "Dig horizontally beneath the remaining surface to expose the indicated buried service",
                "Support the exposed service appropriately",
                "Complete site reinstatement",
              ],
            },
            {
              num: "3",
              title: "Written Assessment",
              items: [
                "Completed in the classroom on return from the practical",
                "Tests knowledge of the theory elements covered in the morning session",
                "Covers legislation, hazards, equipment and safe systems of work",
                "EUSR registration issued upon successful completion of both the practical and written elements",
              ],
            },
          ].map(({ num, title, items }) => (
            <div key={title} className="bg-white border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-black text-sm flex items-center justify-center">{num}</span>
                <h3 className="font-bold text-foreground">{title}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-accent font-bold mt-0.5">&#8250;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width image */}
      <div className="w-full overflow-hidden aspect-[4/3] md:aspect-[16/9] bg-muted">
        <Image src="dig-19" width={1200} height={900} alt="EUSR CAT2 Safe Dig live excavation" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* What You Get */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">What You Get</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">At the End of This Course</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "EUSR CAT2 Safe Dig Competency Card",
                desc: "Valid for 3 years, nationally recognised evidence of safe excavation competency"
              },
              {
                title: "Personalised Training Record",
                desc: "Detailed breakdown of all theory criteria T1 to T24 and practical criteria P1 to P4"
              },
              {
                title: "Practical Assessment Evidence",
                desc: "Documented evidence of hands-on safe digging competency"
              },
              {
                title: "Ongoing Support",
                desc: "Access to Sygma trainers for post-course questions"
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

      {/* Image strip after What You Get */}
      <div className="container mx-auto px-6 md:px-8 pb-10 max-w-5xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
            <Image src="dig-11" width={1200} height={900} alt="EUSR CAT2 safe dig practical training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
            <Image src="dig-19" width={1200} height={900} alt="Safe excavation technique demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
            <Image src="dig-11" width={1200} height={900} alt="Hand dig assessment near buried services" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Learning Outcomes</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">What Delegates Will Be Able to Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Knowledge Outcomes</h3>
            <ul className="space-y-3">
              {[
                "Explain health, safety and environmental responsibilities for excavation work, including HSG47, GS6, PPE, and occupational health hazards such as noise, vibration, silica, asbestos, and Leptospirosis",
                "Describe methods for locating, identifying and protecting underground services, including interpreting utility drawings and PAS128 standards",
                "Identify hazards and consequences associated with specific services: power cables, gas pipes, water and sewer pipes, and telecoms cables",
                "Explain excavation methods and equipment, including hand tools, handheld power tools, reduced-dig technology, and when each is appropriate",
                "Understand excavation hazards, environmental requirements and safe practices, including trench collapse, ground support, ventilation, lighting, and material segregation",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-accent font-bold mt-0.5">&#8250;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">Practical Outcomes</h3>
            <ul className="space-y-3">
              {[
                "Plan excavation work: obtain site plans, verify service marking, confirm permits to dig, and establish a safe system of work",
                "Prepare resources and establish safe working conditions: complete a site-specific risk assessment, implement control measures, confirm excavation position, and select appropriate tools",
                "Carry out safe excavation: demonstrate competent use of hand and power tools, sweep with locating equipment at each layer, and maintain the safe working zone",
                "Expose and support buried services: confirm the service position, protect exposed services from damage, and record and report any deviations from site plans",
                "Maintain safety and integrity throughout: conduct pre-entry checks, monitor exposed services, and confirm the completed excavation meets specifications",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-accent font-bold mt-0.5">&#8250;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Site Requirements */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">What You Need to Arrange</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Course Requirements for On-Site Delivery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Site Requirements",
                items: [
                  "A live dig area with buried metallic utilities. One power cable to a site cabin is not sufficient.",
                  "The site must have a realistic variety of underground services",
                  "The practical area should be close to the meeting room. If distances require driving, Sygma must be notified.",
                  "Sygma Solutions can advise on site suitability or arrange access to specific sites if required",
                ],
              },
              {
                title: "Meeting Room and Welfare",
                items: [
                  "A comfortable meeting or conference room with sufficient desk space for all delegates to write",
                  "Space for a projector and a clear projection wall or screen",
                  "Appropriate welfare facilities",
                  "Sygma's dedicated training centre in Wigan is available at no extra cost as an alternative",
                ],
              },
              {
                title: "Utility Plans",
                items: [
                  "STATS plans appropriate to the training site should be available for the practical",
                  "If no plans are available, Sygma Solutions can supply suitable plans at an additional cost agreed prior to booking",
                ],
              },
              {
                title: "Delegates",
                items: [
                  "All delegates must bring government-issued photographic ID (driving licence, passport, or residence permit)",
                  "All delegates must have appropriate PPE",
                  "Sygma recommends that delegates hold EUSR CAT1 or an equivalent utility locating qualification",
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="bg-white border border-border rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-3">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-accent font-bold mt-0.5">&#8250;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAT1 vs CAT2 Comparison */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Understanding the Qualifications</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">EUSR CAT1 vs EUSR CAT2: A Practical Comparison</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">CAT1 and CAT2 are complementary qualifications. Most sites require operatives to hold both.</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-5 py-3 text-left font-bold text-foreground w-1/4"></th>
                <th className="px-5 py-3 text-left font-bold text-foreground">EUSR CAT1</th>
                <th className="px-5 py-3 text-left font-bold text-foreground">EUSR CAT2 Safe Dig</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Focus", "Locating buried services with CAT and Genny", "Safe excavation and service exposure"],
                ["Practical Element", "On-site locate and survey", "Live dig: excavate to service and expose it"],
                ["Assessment", "MCQ paper (80% pass mark)", "MCQs and practical on-site observation"],
                ["Key Topics", "EML theory, signal modes, depth estimation", "HSG47, permits, safe dig, trench support"],
                ["HSG47 Coverage", "Covered in relation to locating", "Full coverage including excavation and ground support"],
                ["Occupational Hazards", "General site hazard awareness", "Full hazard suite: silica, vibration, asbestos, Leptospirosis"],
                ["Typical Delegate", "Groundworker, utility operative", "Groundworker, excavation operative, site supervisor"],
                ["Registration", "EUSR", "EUSR"],
              ].map(([feature, cat1, cat2]) => (
                <tr key={feature} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 font-semibold text-foreground bg-muted/20">{feature}</td>
                  <td className="px-5 py-3 text-muted-foreground">{cat1}</td>
                  <td className="px-5 py-3 text-muted-foreground">{cat2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">Sygma Solutions offers combined EUSR CAT1 and EUSR CAT2 training packages for teams who need both qualifications. <Link href="/contact#enquiry-form" className="text-primary font-semibold hover:underline">Contact us</Link> to discuss your requirements.</p>
      </section>

      {/* Pricing */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Pricing</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground mb-6">Sygma charges per course, not per person. Whether you send 4 delegates or 8, the course fee stays the same. Travel within the UK mainland is included.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              ["Per course, not per person", "One fixed fee covers your whole group of up to 8 delegates."],
              ["Travel included", "Delivery at your site or Sygma HQ in Wigan. No travel surcharge."],
              ["Combined packages available", "Need EUSR CAT1 and CAT2? We offer combined multi-day packages."],
            ].map(([title, desc]) => (
              <div key={title} className="border border-border rounded-lg p-5 bg-card">
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
              Get in Touch
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">CITB-registered employers may be able to access training funding support through the CITB Employer Network. Contact your CITB adviser for current eligibility and funding options. Sygma is a CITB Approved Training Organisation.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">FAQs</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">{q}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image strip before upgrade paths */}
      <div className="container mx-auto px-6 md:px-8 pb-10 max-w-5xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
            <Image src="dig-19" width={1200} height={900} alt="Service exposure during safe dig training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
            <Image src="dig-11" width={1200} height={900} alt="EUSR CAT2 on-site excavation assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
            <Image src="dig-19" width={1200} height={900} alt="Sygma safe dig training completion" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>

      {/* Upgrade Paths */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Where Next</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Upgrade Pathways After EUSR CAT2</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "ProQual CAT1 Plus", desc: "Advanced utility locating: capacitance, clamp application, dual frequency, blind induction, and advanced transmitter techniques. For delegates who want to go beyond standard CAT1 competency.", href: "/courses/proqualcat1plus" },
              { title: "ProQual CAT1", desc: "The ProQual-accredited route to utility avoidance. Theory paper (T1-T14) plus hands-on practical (P1-P8) assessed to ProQual Accreditations criteria. More rigorous than EUSR CAT1.", href: "/courses/proqualcat1-training" },
              { title: "ProQual CAT2 Safe Dig", desc: "The ProQual-accredited equivalent of EUSR CAT2. Theory criteria T1-T24 and practical criteria P1-P4. For organisations requiring ProQual Accreditations on their competency framework.", href: "/courses/proqualcat2" },
              { title: "OSCA", desc: "On-Site Competency Assessment: GPS and time-stamped independent assessment of each operative at their actual place of work. The audit-ready proof of competence between qualifications.", href: "/osca" },
            ].map(({ title, desc, href }) => (
              <div key={title} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                <Link href={href} className="text-primary font-semibold text-sm hover:underline">Find out more &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sygma for EUSR CAT2 */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Why Choose Sygma</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">Why Sygma for EUSR CAT2</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Beyond the Minimum Specification",
              desc: "Sygma content goes above and beyond the EUSR CAT2 minimum spec. Practical assessment in real site conditions.",
            },
            {
              title: "Pairs with CAT1",
              desc: "If your team locates and digs, they need both. EUSR CAT2 covers safe excavation hazards, protecting exposed services, and occupational health.",
            },
            {
              title: "Specialist Trainers",
              desc: "Directly employed. Ex-utility surveyors or ex-equipment manufacturer specialists. TAQA qualified.",
            },
            {
              title: "Real Practical Assessment",
              desc: "On-site practicals in real conditions. Competent operatives, not just certificates.",
            },
            {
              title: "Independent",
              desc: "No surveys, no equipment, no manufacturer relationships.",
            },
            {
              title: "We Come to You",
              desc: "At your site. Travel included. No hidden extras.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HSG47 Compliance */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Standards and Regulations</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">HSG47 Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Trained and Competent Operatives",
                desc: "Every delegate meets the HSG47 definition of competence through hands-on assessment in real site conditions.",
              },
              {
                title: "Safe System of Work",
                desc: "Permits to dig, risk assessments, site-specific procedures, and hazard communication form the foundation of the course.",
              },
              {
                title: "Safe Excavation Techniques",
                desc: "Hand tools, power tools, trench support, and protective systems taught and assessed in live digging conditions.",
              },
              {
                title: "Protecting Exposed Services",
                desc: "Service support, marking, and reinstatement techniques prevent damage and maintain safety during excavation.",
              },
              {
                title: "NRSWA Highway Operations",
                desc: "Traffic management, lane rental, highway access, and utility service protection covered where applicable.",
              },
              {
                title: "Evidenced Training Records",
                desc: "EUSR registration, certificates, and documented practical assessments provide audit-ready proof of competence.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Other Training Options</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">Related Courses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "EUSR CAT1",
              desc: "Cable location qualification. Pairs with CAT2 for complete locate-and-dig competence.",
              href: "/courses/eus-cat1",
            },
            {
              title: "ProQual CAT2",
              desc: "ProQual-accredited safe excavation qualification. Externally verified by ProQual Accreditations.",
              href: "/courses/proqualcat2",
            },
            {
              title: "EUSR CAT1 and CAT2 Combined",
              desc: "Two-day combined course covering both location and safe excavation.",
              href: "/courses/eus-cat1-cat2-combined",
            },
          ].map(({ title, desc, href }) => (
            <div key={title} className="bg-muted/20 border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
              <Link href={href} className="text-primary font-semibold text-sm hover:underline">
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>


      {/* Also Consider */}
      <section className="border-t border-border py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Also Consider</h3>
          <div className="grid gap-4 sm:grid-cols-2">
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Book EUSR CAT2 Safe Dig Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Available on-site at your premises nationwide or at Sygma HQ in Wigan. Up to 8 delegates per session. EUSR registration included on pass. Contact us for a quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
              Check Availability and Book
            </Link>
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
