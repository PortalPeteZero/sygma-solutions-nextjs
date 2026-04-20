import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const faqs = [
            {
              q: "What is the difference between the ZS Superuser and the EUSR Superuser?",
              a: "The structure, duration, assessments, and standard of both cat and genny training courses are identical. The ZS Superuser is mapped specifically to the Scottish Water Zero Strike Initiative (ZSI) framework. It uses ZSI documentation, Scottish Water-specific examples and case studies, and the ZSI Operators' Guide. The EUSR Superuser is built around the EUSR (EUSR) framework and is relevant across all clients and sectors. If your team works in the Scottish Water supply chain, the ZS Superuser training course is the right course.",
            },
            {
              q: "Do delegates need to hold EUSR CAT1 and CAT2 before attending?",
              a: "Yes. Delegates must hold both EUSR category EUSR CAT1 and EUSR Safe Dig CAT2 certification before attending the ZS Superuser cat and genny training course. These are the minimum training requirements and prerequisite qualifications set by the Scottish Water Zero Strike Initiative for anyone working on a ZSI site.",
            },
            {
              q: "Does the course cover the ZSI Operators' Guide?",
              a: "Yes. The ZSI Operators' Guide is embedded into the delivery, covering planning, preparation, documentation, survey and marking, breaking ground, and reinstatement to the ZSI standard. Delegates leave understanding their responsibilities under the guide and how to apply them when coaching their teams.",
            },
            {
              q: "What is the advanced locator equipment standard?",
              a: "The advanced locator is the minimum cat and genny equipment standard required by Scottish Water's Zero Strike Initiative. It means all cable avoidance tools and signal generators used on ZSI sites must meet advanced locator specifications or higher. This requirement is covered in the training course and built into the practical training on locating underground services.",
            },
            {
              q: "How many delegates can attend?",
              a: "A maximum of 6 delegates per cat and genny training course. The small group size allows for individual practical assessments and meaningful coaching sessions where each delegate can develop practical skills and complete their assessments. Contact Sygma if you have a larger team. Additional course dates can be arranged.",
            },
            {
              q: "Can Sygma deliver this course at our premises?",
              a: "Yes. All ZS Superuser cat and genny training courses are delivered in-house at your premises. You need a room for up to 6 delegates and a suitable outdoor site area with buried services and underground utilities for the practical sessions. Sygma can advise on site suitability and equipment requirements.",
            },
            {
              q: "What cat and genny equipment do delegates need for the course?",
              a: "Delegates should bring their own cat and genny equipment that meets the advanced locator standard required by Scottish Water's Zero Strike Initiative. This means cable avoidance tools (CAT) and signal generators (genny) at advanced specification or higher. If your genny equipment does not meet the ZSI standard, contact Sygma before the training course to discuss options. The course covers how to operate cat and genny in all modes including passive modes, different frequencies, and genny-first methodology.",
            },
            {
              q: "How does the ZS Superuser support safe excavation and compliance?",
              a: "The ZS Superuser cat and genny training directly supports safe excavation by ensuring delegates can locate utility services and underground services before any excavation work begins. The course covers current legislation including HSG47 guidance for avoiding danger from underground services, risk assessment planning, and best practice for reducing utility strikes. Certification confirms the delegate is competent to locate buried services and coach others in safe excavation compliance within the Scottish Water supply chain.",
            },
            {
              q: "What is the EUSR category requirement for the ZS Superuser?",
              a: "The EUSR category prerequisite for the ZS Superuser is EUSR CAT1 (cable avoidance training) and EUSR CAT2 Safe Dig (safe excavation). These qualifications from the awarding body confirm the delegate has the foundation knowledge and skills to operate cat and genny equipment safely. The ZS Superuser builds on this with advanced genny training, utility strike investigation, coaching competency, and assessment skills specific to Scottish Water's Zero Strike Initiative.",
            },
            {
              q: "Does the certification have an expiry date?",
              a: "The ZS Superuser certification issued by Sygma is a recognised record of completing the training course and all associated assessments. While Sygma certification does not carry a fixed expiry date, best practice and Scottish Water's own requirements mean that refresher cat and genny training should be conducted regularly to maintain competency. EUSR category registrations carry their own expiry date and require re-assessment to maintain your qualification as a leading provider of safe utility location services.",
            },
          ];

export const metadata: Metadata = {
  title: 'ZS Superuser Cat and Genny | Scottish Water | Sygma',
  description: 'Super user cat and genny training for the Scottish Water supply chain. Advanced location, strike investigation and coaching assessment.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/zs-superuser-scottish-water' },
  openGraph: {
    title: 'ZS Superuser Cat and Genny | Scottish Water | Sygma',
    description: 'Super user cat and genny training for the Scottish Water supply chain. Advanced location, strike investigation and coaching assessment.',
    url: 'https://sygma-solutions.com/courses/zs-superuser-scottish-water',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-57-zs-superuser-scottish-water', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function ZsSuperuserScottishWater() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "ZS Superuser Cat and Genny", description: "Super user cat and genny training for the Scottish Water supply chain. Advanced location, strike investigation and coaching assessment.", url: "/courses/zs-superuser-scottish-water", credential: "ZS Superuser Cat and Genny Certificate", duration: "Variable", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/utility-mapping-surveying" }, { label: "ZS Superuser Cat and Genny" }]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="ZS Superuser: Advanced Location, Strike Investigation, and Coaching for Scottish Water Supply Chain"
        sub="Sygma's ZS Superuser course is the ZSI-specific super user cat and genny training programme, built for teams working within the Scottish Water supply chain. This advanced training course follows the same structure and standard as the EUSR Superuser, mapped to the Zero Strike Initiative framework for locating underground services and buried utilities."
        image="cat-07-zs-superuser-scottish-water"
        alt="Scottish Water ZS Superuser cable avoidance training course"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "ZS Superuser: Scottish Water" },
        ]}
      />

      {/* Key USP stats */}
      <section className="bg-foreground py-6">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">21 Years</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">One Specialism</p>
              <p className="text-xs text-white/60">Cat and genny training for underground utility location is all we do.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">70-80%</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Increase in Genny Usage</p>
              <p className="text-xs text-white/60">Measured through CAT Manager data downloads after Sygma genny training.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">Proven</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Strike Reduction Record</p>
              <p className="text-xs text-white/60">Clients report measurable reductions in utility strikes after completing cat and genny training courses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "2 days (flexible approach)"],
            ["Max Delegates", "6 per course"],
            ["Framework", "ZSI Zero Strike Initiative"],
            ["Assessments", "3 formal assessments"],
            ["Prerequisite", "EUSR CAT1 and EUSR CAT2"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3-photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-79-zs-superuser-scottish-water" width={1200} height={900} alt="ZS Superuser Scottish Water training - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-85-zs-superuser-scottish-water" width={1200} height={900} alt="ZS Superuser Scottish Water training - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-54-zs-superuser-scottish-water" width={1200} height={900} alt="Scottish Water utility avoidance site practical" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
        </div>
      </section>
      {/* About */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">ZSI-Specific Super User Cat and Genny Training</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The EUSR Superuser Standard, Built for the Scottish Water Supply Chain</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The ZS Superuser training course follows the same two-day structure and assessment framework as Sygma's EUSR Superuser course, with one important difference: the delivery is mapped to the Scottish Water Zero Strike Initiative (ZSI) framework. This cat and genny training teaches delegates how to locate utility services, operate cat and genny equipment to the required standard, and coach others in safe excavation practices.
              </p>
              <p>
                Scottish Water's Zero Strike Initiative sets specific standards for how utility location and avoidance work is planned, documented, and carried out across its supply chain. Delegates learn to use cable avoidance tools (CAT) and signal generators (genny) to locate buried services and underground utilities safely, avoiding danger from underground services during excavation work. The ZSI Operators' Guide, the minimum locator standard, and Scottish Water's company-specific policies are all embedded into the delivery.
              </p>
              <p>
                Delegates leave with the same advanced capabilities as EUSR Superuser completers (advanced location, utility strike investigation, coaching, and assessment competency) but with content, documentation, and case studies specific to Scottish Water operations. The course develops practical skills in operating cat and genny equipment across all modes, interpreting utility drawings, and conducting best practice surveys to locate utility services in complex underground utility networks.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Course at a Glance</p>
            {[
              ["Duration", "2 days (no fixed daily timings, flexible approach across both days)"],
              ["Max Delegates", "6 per course"],
              ["Prerequisite", "EUSR Category: EUSR CAT1 and EUSR Safe Dig CAT2 certification"],
              ["Equipment Standard", "Advanced cat and genny equipment minimum (Scottish Water ZSI requirement)"],
              ["Framework", "Scottish Water Zero Strike Initiative (ZSI)"],
              ["Assessments", "Three formal assessments: POW Risk Assessment, Practical Assessment 1, Practical Assessment 2 (coaching)"],
              ["Delivery", "In-house training course at your premises, nationwide UK"],
              ["Pricing", "By quotation. Contact Sygma"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZSI Framework */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">The ZSI Framework</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Scottish Water's Zero Strike Initiative</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Scottish Water's Zero Strike Initiative is the framework that governs utility location and avoidance across its supply chain, ensuring compliance with current legislation and guidance for avoiding danger from underground services. It sets minimum standards for cat and genny training, documentation, PPE, survey methodology, and permit management. The key ZSI elements embedded in this training course include:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "The ZSI Operators' Guide: planning, preparation, documentation, survey and marking, breaking ground, and reinstatement",
              "Advanced cat and genny equipment as the minimum location equipment standard required on all ZSI sites",
              "EUSR Category: CAT1 and EUSR CAT2 as minimum cat and genny training requirements for all operatives",
              "Genny-First survey methodology: starting with the signal generator (genny) before passive and inductive modes to locate buried services",
              "600mm minimum distance from marked underground services before any mechanical excavation (ZSI safe excavation standard)",
              "ARC-resistant clothing and appropriate PPE as required under ZSI for safe excavation work",
              "Company-specific policies, RAMS, and permit to break ground procedures in the Scottish Water context",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom content */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Classroom Content</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Knowledge Required to Operate as a ZSI Superuser</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The classroom session covers the theory and knowledge required to fulfil the ZS Superuser role: advanced cat and genny training covering location theory, utility strike investigation, CAT Manager data analysis, and the coaching skills and competency needed to assess other operatives against the ZSI standard.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Underground service strikes: the risks of hitting buried services, HSG47 guidance, and ZSI requirements for avoiding danger from underground utilities",
            "Permit to break ground: Scottish Water specific requirements, completion and sign-off",
            "Company-specific policies and ZSI safe dig procedures for safe excavation near underground services",
            "ZSI company-specific examples of utility strikes and lessons learned",
            "Buried service plans (STATS): interpretation, inaccuracies, and limitations when locating utility services in the Scottish Water context",
            "How to use utility drawings and plans to plan the correct utility detection technique",
            "Electromagnetic theory: how a cable avoidance tool (CAT) and signal generator (genny) works, limitations, tips and techniques",
            "Myth busting: understanding what cat and genny equipment can and cannot locate",
            "Genny-First methodology: promoting the genny training message and leading by example",
            "Cat and genny controls and operation: correct use of cable avoidance tools and signal generator in all modes to locate utility services",
            "Signal interpretation: locating service joints, changes of direction, and depth estimation",
            "Signal distortion and its effects on location accuracy when locating underground services",
            "Transmitter techniques: dual frequency, capacitance, earth positioning, induction, nulling out, and blind sweeps",
            "Depth estimation and practical instruction on interpreting readings",
            "Complex utility networks: how to plan and execute a complete utility survey to locate buried services",
            "Knowledge-based assessment of cat and genny training competency",
            "CAT Manager: downloading and exporting raw data (CSV and KML files) to identify usage patterns",
            "Importing data into CAT Manager Online and creating line search documents and reports",
            "Analysing raw data: spotting usage patterns and identifying good and poor practice across your team",
            "Utility strike investigation: completing the USAG utility strike form",
            "Coaching others: principles, structure, and ZSI coaching requirements for developing practical skills in cat and genny operation",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start bg-muted/30 border border-border rounded-lg p-4">
              <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
              <span className="text-muted-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Site practical */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Site Practical</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">ZSI Methodology Applied on a Live Utility Area</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The site practical training is flexible across both days and is conducted on a live utility area with real underground services. All practical work follows ZSI survey methodology (genny first, then passive and all other modes) to locate utility services in line with Scottish Water requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Utility drawings, plans and site information used to ascertain indicated underground utility routes before going onto site",
              "Importance of site visual checks including street furniture, HV assets, kiosks, and lamp posts",
              "Correct use of cable avoidance tools (CAT) and signal generator (genny) in all modes to locate buried services",
              "Genny-First methodology: understanding the ZSI requirement and applying cat and genny in the field",
              "Street lighting location using cat and genny equipment",
              "LV service and main tracing, including joint location of underground services",
              "HV cable detection and underground utility location",
              "Communications cable location",
              "Induction sweeps, blind sweeps, and nulling out",
              "Capacitance techniques and earth repositioning",
              "Individual practical assessment (Assessment 1: standard locate to assess competency in locating utility services)",
              "Coaching assessment: delegates coach and assess each other using the Assessment 1 document and the Sygma coaching sheet (Assessment 2)",
              "Coaching competency checks in accordance with ZSI coaching criteria",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessments */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Assessments</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Three Formal Assessments Over Two Days</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "POW Risk Assessment",
              body: "Each delegate completes their own Point of Work Risk Assessment before the practical cat and genny training begins, identifying risks on site and planning assessment of the work area.",
            },
            {
              title: "Practical Assessment 1: Standard Locate",
              body: "Sygma standard practical assessment that records and documents the delegate's skills and competency to operate cat and genny equipment and locate utility services independently in line with ZSI requirements.",
            },
            {
              title: "Practical Assessment 2: Coaching Assessment",
              body: "Delegates use the Assessment 1 document to coach and assess each other on cat and genny operation, supported by the Sygma coaching sheet. The coaching competency criteria include: communicating effectively with the team, considering learning needs, downloading and understanding CAT Manager data, and giving structured guidance and feedback.",
            },
            {
              title: "Permit to Break Ground",
              body: "Each delegate completes a permit to break ground, ideally using the Scottish Water or customer-specific permit form.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-muted/30 rounded-xl border border-border p-6">
              <p className="text-sm font-bold text-foreground mb-2">{title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What You Get</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What Delegates Receive</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "ZS Superuser Certification", desc: "Sygma-issued certification confirming completion of the ZSI-specific super user cat and genny training programme. Recognised as a qualification within the Scottish Water supply chain. EUSR category registration supports safe excavation compliance." },
            { title: "Written Assessment Record", desc: "Documented theory assessment covering ZSI requirements, HSG47 guidance, current legislation, utility strike investigation, and CAT Manager data analysis." },
            { title: "Practical Assessment Records", desc: "Two on-site practical assessment records: standard locate (Assessment 1) and coaching assessment (Assessment 2), both aligned to ZSI methodology for locating underground services with cat and genny equipment." },
            { title: "Coaching Competency Evidence", desc: "Documented evidence of coaching capability and competency, including communication, learning needs assessment, data interpretation, and structured guidance and feedback delivery. This certification supports your responsible role as a super user." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-muted/20 rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width image */}
      <div className="w-full overflow-hidden aspect-[21/9] bg-muted">
        <Image src="cat-46-zs-superuser-scottish-water" width={1200} height={900} alt="ZS Superuser Scottish Water training - live training environment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* Who should attend */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Who Should Attend</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Experienced Operatives in the Scottish Water Supply Chain",
                body: "Operatives who hold EUSR CAT1 and EUSR Safe Dig CAT2 certification and are ready to step up to a superuser role. This cat and genny training course is suitable for those who will be coaching, supporting, and assessing their teams on ZSI-compliant surveys to locate utility services and underground utilities.",
              },
              {
                title: "Supervisors and Team Leaders",
                body: "Supervisors and team leaders responsible for coaching their teams in ZSI methodology, conducting documented assessments, investigating utility strikes, and leading by example in the field. The ZS Superuser genny training gives them the advanced knowledge and assessed competency to operate cat and genny equipment and conduct safe excavation guidance effectively.",
              },
              {
                title: "Companies with Scottish Water Contracts",
                body: "Any company in the Scottish Water supply chain that needs to develop internal superuser capability in line with ZSI requirements. This cat and genny training course ensures your superusers are trained, assessed, and documented to the standard Scottish Water expects for locating buried services and underground utilities during construction and excavation work.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
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
      </section>

      {/* Why Sygma */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose Sygma for ZS Superuser Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Scottish Water's Zero Strike Initiative demands superusers who understand ZSI from first principle. Sygma is a leading provider of cat and genny training courses, and delivers exactly that.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Scottish Water Approved</p>
              <h3 className="text-base font-bold text-foreground mb-2">Meets Scottish Water ZS standard requirements for utility location competence.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Cat and genny training mapped specifically to the Zero Strike Initiative framework and ZSI Operators' Guide for locating utility services.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Specialist Trainers</p>
              <h3 className="text-base font-bold text-foreground mb-2">Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Trainers with practical skills and experience in Scottish Water supply chain operations, cat and genny equipment, and ZSI requirements.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Real Practical Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Structured on-site practical in real conditions.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Assessment follows ZSI methodology and requirements throughout both days, with delegates assessed on their ability to locate underground services using cat and genny.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Independent</p>
              <h3 className="text-base font-bold text-foreground mb-2">No surveys, no equipment, no manufacturer relationships.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Objective cat and genny training course focused on ZSI compliance and best practice, not commercial interests.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">We Come to You</p>
              <h3 className="text-base font-bold text-foreground mb-2">Delivered at your site, travel included.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">In-house cat and genny training at your location anywhere in the UK, using your site utilities and underground services.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Small Groups</p>
              <h3 className="text-base font-bold text-foreground mb-2">Maximum 6 delegates per course.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Small groups allow individual attention during coaching assessment, practical instruction, and genny training to develop practical skills.</p>
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
            <p className="text-sm text-muted-foreground leading-relaxed">CITB-registered employers may be able to access Employer Network funding towards cat and genny training course costs. ZS Superuser training is recognised as professional development supporting your Scottish Water supply chain capability in construction and utility location.</p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Next Steps</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Training Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Build your team's cat and genny training capability across the EUSR pathway and Scottish Water supply chain requirements.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/courses/eus-cat1" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The foundation cat and genny training course and EUSR category qualification. Superuser prerequisite required for all delegates.</p>
            </Link>
            <Link href="/courses/eus-cat2-safe-dig" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT2 Safe Dig</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Safe excavation training course and permit requirements for avoiding danger from underground services. Superuser prerequisite required for all delegates.</p>
            </Link>
            <Link href="/courses/eus-superuser" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR Superuser</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The standard super user cat and genny training course for non-Scottish Water teams. Same structure, EUSR framework.</p>
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
                <p className="text-xs text-muted-foreground">GPS-stamped on-site competency assessment to verify real-world cat and genny skills on locating utility services.</p>
              </Link>
              <Link href="/bespoke-training" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Training</p>
                <p className="text-xs text-muted-foreground">Design a tailored cat and genny training programme around your site risks, equipment, and team size.</p>
              </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About the ZS Superuser Cat and Genny Training Course</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            2 days, maximum 6 delegates. In-house cat and genny training at your site anywhere in the UK. Built specifically for Scottish Water supply chain teams operating under the Zero Strike Initiative to locate utility services and underground utilities safely.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link href="/courses/eus-superuser"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View EUSR Superuser (Non-Scottish Water)
            </Link>
          </div>
        </div>
      </section>
    </>
);
}

