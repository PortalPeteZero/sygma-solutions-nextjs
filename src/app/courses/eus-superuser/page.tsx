import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import Image from 'next/image';

const faqs = [
              {
                q: "Who is the EUSR super user cat and genny training course designed for?",
                a: "The EUSR super user cat and genny training course is designed for experienced CAT1 and CAT2 operators who are moving into supervisory or lead operative roles, and who need to assess and coach other members of their team on locating utility services and underground utilities on site. It is also appropriate for managers responsible for monitoring cat and genny equipment usage, calibration compliance, and CAT Manager data to improve their team's practice in locating buried services safely.",
              },
              {
                q: "Is EUSR CAT2 mandatory as a prerequisite for this cat and genny training?",
                a: "Yes. Both the EUSR category EUSR CAT1 and EUSR Safe Dig CAT2 certification are required before attending the super user training course. The programme is built on the assumption that delegates can already use cable avoidance tools and signal generators to locate underground services competently in their own right. The super user course does not repeat entry-level cat and genny training.",
              },
              {
                q: "What is the difference between this cat and genny course and the EUSR CAT1 Plus?",
                a: "EUSR CAT1 Plus is an advanced single-day extension to the standard CAT1 training course, covering advanced genny application techniques and more complex location scenarios. The super user cat and genny training covers all of that technical content and adds the coaching and assessment element, calibration knowledge, utility strike investigation, and CAT Manager data analysis. The super user course is the complete upper level of the EUSR pathway for locating utility services.",
              },
              {
                q: "Does the coaching assessment replace a formal assessor qualification?",
                a: "No. The coaching and assessment element of this cat and genny training course prepares delegates to assess their own team members against the Sygma standard for utility location and safe excavation. It does not constitute a nationally recognised assessor qualification from an awarding body. If your organisation requires formally qualified assessors for a wider internal training system, Sygma can discuss appropriate options for developing competency in cat and genny assessment.",
              },
              {
                q: "Can we provide our own permit to break ground form for safe digging?",
                a: "Yes, and this is preferred for safe digging compliance. Using your company's specific permit means delegates are assessed on the exact documentation they will use on site after the cat and genny training course. If you do not have a permit form or have not previously supplied it to Sygma, the Sygma permit document will be used to support safe excavation practice.",
              },
              {
                q: "Is there a written assessment for the super user cat and genny course?",
                a: "There is a knowledge-based assessment element included in the classroom content covering cat and genny theory, calibration, and underground utility detection, as well as the three practical assessments. The super user training course does not conclude with a standalone written exam paper in the same format as CAT1, but delegates are assessed continuously on their skills and competency throughout both days.",
              },
              {
                q: "What cat and genny equipment is used on the EUSR super user training course?",
                a: "Sygma provides Radiodetection CAT4 and Genny4 as standard location equipment with calibration verified before each training course. The course can also be delivered on CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX cable avoidance tools and signal generators. Delegates learn correct use of cat and genny equipment across power mode, radio mode, and genny mode, and are trained to check calibration status and identify equipment requiring calibration before locating underground services on site.",
              },
              {
                q: "How does cat and genny calibration feature in the EUSR super user course?",
                a: "Calibration is a significant element of the EUSR super user cat and genny training. Delegates learn how to verify that cable avoidance tools and signal generators are within calibration, how to check calibration records and expiry dates through CAT Manager data, and how to identify location equipment that requires calibration before use on site. Understanding calibration requirements is essential for managers responsible for ensuring their team's cat and genny equipment detects signals accurately and supports safe excavation of underground utilities and buried cables.",
              },
              {
                q: "How does the EUSR super user training support safe excavation and avoiding danger?",
                a: "The super user cat and genny training course covers safe digging and safe excavation practice in detail, including guidance from HSG47 on avoiding danger from underground services. Delegates learn how to assess risk before excavation work begins, how to use utility drawings and STATS plans to identify buried services and underground cables, and how to coach their team on best practice for locating utility services. The course also covers service strikes and utility strike investigation to prevent missed services during construction and civil engineering excavation work.",
              },
              {
                q: "What EUSR category does the EUSR super user certification cover?",
                a: "Successful completion of the EUSR super user cat and genny training course leads to the EUSR category EUSR Superuser certification, registered through the awarding body. This qualification confirms competency to supervise, coach, and assess cat and genny operators who locate utility services and underground utilities. The EUSR category certification has an expiry date and requires periodic re-assessment to maintain the qualification. Contact Sygma for guidance on certification renewal and maintaining your cat and genny training accreditation.",
              },
            ];


export const metadata: Metadata = {
  title: 'EUSR Super User Cat and Genny | EUSR Accredited | Sygma',
  description: 'EUSR super user cat and genny training. Advanced cable avoidance, strike investigation, calibration and on-site coaching. EUSR certified.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/eus-superuser' },
  openGraph: {
    title: 'EUSR Super User Cat and Genny | EUSR Accredited | Sygma',
    description: 'EUSR super user cat and genny training. Advanced cable avoidance, strike investigation, calibration and on-site coaching. EUSR certified.',
    url: 'https://sygma-solutions.com/courses/eus-superuser',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-11', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function EusSuperuser() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'EUSR Super User Cat and Genny Training', description: 'EUSR super user cat and genny training course covering advanced cable avoidance tools, signal generator operation, calibration, strike investigation, and on-site coaching assessment.', url: '/courses/eus-superuser', credential: 'EUSR Superuser Certificate', duration: '2 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'EUSR Super User Cat and Genny' }]) }} />

      <InnerPageHero
        eyebrow="EUSR Super User Cat and Genny Training"
        headline="EUSR Superuser: Advanced Location, Calibration, Strike Investigation, and Coaching Assessment"
        sub="The highest level of EUSR super user cat and genny training. Two days covering advanced cable avoidance tools and signal generator techniques, calibration, CAT Manager data analysis, USAG strike investigation, and the skills to assess and coach your team on locating underground services safely on site. Prerequisite: EUSR CAT1 and Safe Dig CAT2."
        image="cat-14"
        alt="EUSR Superuser advanced cable avoidance training for experienced locator operators"
        breadcrumbs={[
          { label: "Training", href: "/training/cable-location-avoidance" },
          { label: "EUSR Superuser" },
        ]}
      />

      {/* Key USP stats */}
      <section className="bg-foreground py-6">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">21 Years</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Cat and Genny Training</p>
              <p className="text-xs text-white/60">Cable avoidance tools and signal generator training is all we do.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">70-80%</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Increase in Genny Usage</p>
              <p className="text-xs text-white/60">CAT Manager data downloads show genny usage increase after Sygma cat and genny training courses.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">Proven</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Utility Strike Reduction</p>
              <p className="text-xs text-white/60">Clients report measurable reductions in utility strikes after completing cat and genny training.</p>
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
                title: "Competency Managers and Supervisors",
                desc: "Managers responsible for overseeing cat and genny operations, managing cable avoidance competency across their team, and monitoring equipment calibration and fleet data for locating utility services.",
              },
              {
                title: "Safety Managers",
                desc: "Professionals tasked with reducing utility strikes and service strikes, auditing cat and genny field practices, and driving safe digging compliance across multiple sites.",
              },
              {
                title: "Senior Operatives Moving Into Supervisory Roles",
                desc: "Experienced cat and genny operators who are taking on responsibility for training coordination, competency assessment, and team oversight in locating underground services and buried utilities.",
              },
              {
                title: "Organisations Using CAT Manager Systems",
                desc: "Companies in construction and civil engineering using fleet management software who need qualified personnel to interpret cat and genny data, verify calibration records, and act on the equipment usage information it generates.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "2 days cat and genny training (classroom and site)"],
            ["Max Delegates", "6 per training course"],
            ["EUSR Category", "EUSR Superuser certification"],
            ["Assessments", "3 formal cat and genny assessments"],
            ["Prerequisite", "EUSR category EUSR CAT1 and EUSR CAT2"],
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
          <Image src="cat-86" width={1200} height={900} alt="EUSR super user cat and genny training - practical session locating underground services" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-87" width={1200} height={900} alt="Cat and genny training course - hands-on assessment with cable avoidance tools" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-88" width={1200} height={900} alt="Signal generator (genny) application technique - direct connection for locating buried utilities" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
        </div>
      </section>
      {/* About */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">EUSR Super User Cat and Genny Training Course</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Teaching Others to Locate Underground Services Safely</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This cat and genny training course is the next stage in the EUSR pathway. EUSR CAT1 and CAT2 train operatives to use cable avoidance tools and signal generators to locate buried services and perform safe excavations. The super user course asks a fundamentally different question: not whether you can do the job, but whether you can teach someone else to operate cat and genny equipment safely, locate underground utilities correctly, and assess whether they have reached the required standard of competency.
              </p>
              <p>
                The training course builds on the full CAT1 and CAT2 theoretical foundation with advanced cat and genny techniques including calibration, equipment operation across power mode, radio mode, and genny mode, and detailed analysis of the data being generated by your team's cat units. Delegates develop the practical coaching and assessment skills needed to formally check their team's competence in locating utility services on site. The course also covers utility strike investigation: how to complete a USAG cable strike form, how to analyse what went wrong with service strikes, and how to use that information to support safe excavation and prevent missed services happening again.
              </p>
              <p>
                With a maximum of six delegates per cohort and no fixed daily schedule, Sygma's trainers use a flexible approach across the two days of cat and genny training, moving between classroom and site to find the right balance of theory, knowledge, and hands-on equipment work for the group. Calibration of location equipment is covered before any site assessment begins, and every delegate is assessed three times before the training course ends.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Course at a Glance</p>
            {[
              ["Duration", "2 days (classroom and site, flexible approach)"],
              ["Format", "In-house cat and genny training at your site or Sygma's Wigan training centre"],
              ["Max Delegates", "6 per training course"],
              ["EUSR Category", "EUSR Superuser certification"],
              ["Assessments", "3: POW Risk Assessment, Practical Assessment 1, Practical Assessment 2 (coaching and assessment competency)"],
              ["Prerequisite", "EUSR category: EUSR CAT1 and EUSR Safe Dig CAT2"],
              ["Equipment", "Cat and genny equipment provided including cable avoidance tools and signal generators. Sygma provides Radiodetection CAT4 and Genny4 as standard with calibration verified. This training course can be delivered on Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX"],
              ["Delivery", "Nationwide UK training course delivery"],
              ["Pricing", "Contact Sygma for a tailored quotation"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="eyebrow text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessments table */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Assessment</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Three Formal Assessments for Cat and Genny Competency</h2>
          <div className="space-y-4">
            {[
              {
                title: "POW Risk Assessment",
                desc: "Completed by each delegate independently before the practical cat and genny training begins. Demonstrates the ability to assess hazards, conduct a proper Place of Work risk assessment, and identify underground services and buried utilities before any location activity starts on site.",
              },
              {
                title: "Practical Assessment 1",
                desc: "The Sygma Standard practical assessment for cat and genny competency. Records and validates each delegate's ability to locate utility services independently using correct use of cable avoidance tools and signal generators, equipment calibration checks, and survey methodology across all detection modes.",
              },
              {
                title: "Practical Assessment 2 (Coaching and Assessment Competency)",
                desc: "Delegates use the Assessment 1 document and the Sygma coaching sheet to coach and formally assess another delegate on cat and genny operation. Assessment criteria cover communication, feedback quality, cat data download, calibration verification, data understanding, and the ability to use data to guide coaching on locating underground services safely.",
              },
              {
                title: "Permit to Break Ground",
                desc: "Each delegate completes a permit to break ground for safe digging and safe excavation. Where possible this will be your company's specific permit form; otherwise the Sygma permit document is used. Ensures correct use of utility drawings and guidance before excavation work begins.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-border p-6 bg-background">
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom content */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Classroom Content</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Advanced Cat and Genny Theory, Calibration, and Strike Investigation</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The classroom element of this cat and genny training course revisits the theoretical foundations from CAT1 and CAT2 at an advanced level, with additional content around equipment calibration, data analysis, utility strike investigation, and the principles of coaching for safe digging practice.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Underground service strikes and cable strikes: risks, hazards, and requirements of HSG47 guidance for avoiding danger from underground cables and buried services",
            "STATS plans and utility drawings: interpretation, inaccuracies, and limitations at advanced level for locating underground utilities",
            "Advanced electromagnetic theory: full understanding of cat and genny operation, signal distortion, false readings, and myth-busting",
            "Signal generator (genny) operation: dual frequency, capacitance mode, earth positioning, blind induction, and depth estimation techniques",
            "Cat and genny calibration: how to verify equipment calibration, check calibration status, and understand calibration requirements before locating utility services on site",
            "How to promote and embed the genny-first approach with site teams to locate buried services safely",
            "Permit to break ground: how to complete and sign off correctly for safe digging and safe excavation compliance",
            "Cat Manager data analysis: downloading from the cat unit, exporting CSV and KML, importing into the analysis tool and online portal",
            "Analysing raw data: identifying usage patterns, spotting good and poor practice with cat and genny equipment across power mode, radio mode, and genny mode",
            "Utility strike investigation: how to conduct an investigation, assess service strikes, and complete a USAG cable strike form",
            "Coaching principles: effective on-site coaching, knowledge-based assessment, and building competency in cat and genny operation",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start bg-muted/30 border border-border rounded-lg p-4">
              <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
              <span className="text-muted-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Site content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Site Work</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Advanced Cat and Genny Location Practice and Coaching Assessment</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The site element of this training course covers advanced cat and genny location practice, calibration checks, and the coaching assessment. Delegates use cable avoidance tools and signal generators to locate underground services and buried utilities in real conditions. Sygma's trainers use a flexible approach across the two days, spending more time outdoors when site conditions are good.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Advanced Cat and Genny Location Practice</h3>
              <div className="space-y-2">
                {[
                  "Using STATS plans, utility drawings, and existing site information to plan the survey before any cat and genny location work begins",
                  "Conducting a full utility survey starting with the genny to locate underground services and buried utilities",
                  "Street light locating, LV service and main tracing including locating joints using cable avoidance tools",
                  "HV detection and underground cable location using the right mode on cat and genny equipment",
                  "Induction techniques: blind sweeps, effective nulling, and locating multiple utilities",
                  "Capacitance techniques: locating non-earthed underground cables and metallic pipes",
                  "Repositioning the genny earth: understanding the effect on signal quality and calibration",
                  "Problem scenarios: identifying false readings, missed services, and working through solutions on site",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Cat and Genny Coaching and Assessment Element</h3>
              <div className="space-y-2">
                {[
                  "Delegates coach and assess each other on cat and genny operation using the Assessment 1 document and the Sygma coaching sheet",
                  "Coaching tips, assessment planning, and session structure for cat and genny training delivery",
                  "Coaching competency checks: communication, feedback, cat data download, calibration review, and using data to guide coaching on locating utility services",
                  "Where possible, delegates coach working teams from the site on safe use of cable avoidance tools and signal generators",
                  "Individual support, skills development, and additional hands-on cat and genny equipment time throughout",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">What You Get</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What Delegates Receive</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "EUSR Super User Certification", desc: "EUSR category certification for super user cat and genny training. Confirms competency to supervise, coach, and quality-check cat and genny operations for locating utility services and underground utilities safely." },
            { title: "Written Assessment Record", desc: "Documented theory assessment covering supervisory responsibilities, HSG47 compliance, calibration knowledge, and permit-to-dig processes for safe excavation." },
            { title: "Practical Assessment Record", desc: "On-site assessment evidence demonstrating competency in supervising cat and genny operations, correct use of cable avoidance tools and signal generators, and locating underground services." },
            { title: "Progression Guidance", desc: "Clear next steps for further development of cat and genny skills, including CAT Manager training and management qualifications from the awarding body." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-muted/20 rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image strip after What You Get */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-89" width={1200} height={900} alt="EUSR Superuser advanced cable avoidance training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-90" width={1200} height={900} alt="Advanced electromagnetic locator operation" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-91" width={1200} height={900} alt="Superuser practical assessment on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Site requirements + CITB */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-3">Site Requirements</p>
            <h2 className="text-2xl font-black mb-4 text-foreground">What Your Site Must Provide</h2>
            <div className="space-y-2">
              {[
                "Meeting or conference room with projector or screen and welfare facilities",
                "Site with multiple detectable underground utilities including at least one LV service and one street light circuit where possible",
                "STATS plans for the site, provided by the client before the course",
                "A live dig area or permit to access a representative site area for practical work",
                "Delegates should wear appropriate PPE throughout the site element",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Sygma's dedicated training centre in Wigan is available at no extra venue cost and includes live utility demonstration rigs suitable for all elements of the Superuser programme.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">CITB Funding</p>
            <h2 className="text-2xl font-black mb-4 text-foreground">Funding Support</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sygma Solutions is a CITB Approved Training Organisation. CITB-registered employers in construction and civil engineering may be able to access training funding support for cat and genny training course costs through the CITB Employer Network. Contact your CITB adviser directly for current eligibility and funding options.
            </p>
          </div>
        </div>
      </section>

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

      {/* Full-width image break */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <Image src="cat-92" width={1200} height={900} alt="EUSR Superuser advanced training delivery on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top" />
      </div>

      {/* Why Sygma */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose Sygma for Super User Cat and Genny Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">As a leading provider of cat and genny training courses, Sygma delivers the highest standard of super user training. Small groups, experienced trainers, and real-world coaching scenarios for locating utility services.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Super User Cat and Genny Programme</p>
              <h3 className="text-base font-bold text-foreground mb-2">Builds internal competency champions for cat and genny operations within your organisation.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Not just advanced operators, but people who can assess and coach others on cable avoidance tools and signal generators to the same standard for locating utility services.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Specialist Cat and Genny Trainers</p>
              <h3 className="text-base font-bold text-foreground mb-2">Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Our trainers come from the field. They have years of experience locating underground services with cat and genny equipment and coaching teams on best practice.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Real Practical Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Structured on-site practical using cat and genny in real conditions.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Assessment happens on real underground utilities and buried services in real field conditions, not simulations. Calibration of location equipment is verified before every assessment.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Independent Training</p>
              <h3 className="text-base font-bold text-foreground mb-2">No surveys, no equipment sales, no manufacturer relationships.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Complete independence means objective assessment of cat and genny skills and no pressure to inflate results.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">We Come to You</p>
              <h3 className="text-base font-bold text-foreground mb-2">Cat and genny training delivered at your site, travel included.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">In-house training course delivery at your premises eliminates disruption and uses your own underground utilities for practical instruction.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Small Groups</p>
              <h3 className="text-base font-bold text-foreground mb-2">Maximum 6 delegates per cat and genny training course.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Small groups mean individual attention for the coaching assessment and real cat and genny coaching practice on locating underground services.</p>
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
            <h3 className="text-base font-bold text-foreground mb-2">Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding for cat and genny training courses. All Sygma courses exceed 51% practical.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">CITB-registered employers in construction may be able to access Employer Network funding towards cat and genny training course costs. Super user training is recognised as professional development for utility location and may be supported through your Employer Network.</p>
          </div>
        </div>
      </section>

      {/* Image strip before related courses */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-93" width={1200} height={900} alt="Cable avoidance superuser training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-94" width={1200} height={900} alt="Advanced locator techniques training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-95" width={1200} height={900} alt="EUSR Superuser practical skills assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Next Steps</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Training Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Build your team's cat and genny training capability across the full EUSR pathway and beyond.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/courses/eus-cat1" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1 Cat and Genny Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The foundation cat and genny training course and EUSR category qualification. Essential prerequisite knowledge for cable avoidance tools and signal generators before moving toward a super user role.</p>
            </Link>
            <Link href="/courses/eus-cat2-safe-dig" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT2 Safe Dig</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Safe excavation training course and permit to dig for avoiding danger from underground services. Super user prerequisite required for all delegates.</p>
            </Link>
            <Link href="/courses/plans-and-process" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">Plans and Process Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Master utility drawings and plan interpretation. Essential for coordinators and team leaders managing surveys and locating utility services.</p>
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
                <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Cat and Genny Training</p>
                <p className="text-xs text-muted-foreground">Design a tailored cat and genny training programme around your site risks, equipment calibration needs, and team size.</p>
              </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About EUSR Super User Cat and Genny Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Cat and genny training course delivered in-house at your site anywhere in the UK, or at Sygma's dedicated training centre in Wigan. Maximum 6 delegates per cohort. Contact us to discuss your team's needs for locating utility services and underground utilities safely and receive a tailored quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About Super User Cat and Genny Training
            </Link>
            <Link
              href="/courses/eus-cat2-safe-dig"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View EUSR CAT2 Safe Dig (Prerequisite)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

