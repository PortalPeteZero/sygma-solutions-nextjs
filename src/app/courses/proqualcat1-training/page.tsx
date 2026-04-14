import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import Link from 'next/link';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from 'next';
import Image from 'next/image';

const faqs = [
  {
    q: "What is the difference between ProQual CAT1 and EUSR CAT1?",
    a: "They are not equivalent qualifications. ProQual CAT1 is significantly more thorough. It covers topics that EUSR does not assess at all, including CDM Regulations, risk assessment monitoring and reporting, and Safe Systems of Work aligned with HASAWA, HSG47, and GS6. Where EUSR relies on multiple choice questions, ProQual uses written theory papers that require candidates to demonstrate understanding in their own words. ProQual also requires both theory and practical assessment across most criteria, whereas EUSR covers many areas through MCQ alone with no practical demonstration. In 21 years, Sygma has had to add content to every qualification on the market to make it fit for industry. The ProQual CAT1 is the only one we do not have to add anything to, because it covers everything needed. If your procurement framework gives you a choice, ProQual CAT1 delivers a measurably higher standard.",
  },
  {
    q: "Why does the ProQual have no percentage pass mark?",
    a: "The ProQual framework uses a competency-based assessment model. Rather than scoring a percentage on a multiple-choice paper, the assessor observes the delegate and judges whether each individual criterion has been met. Every criterion must be met before a certificate is issued. This is considered a more robust demonstration of real-world competence.",
  },
  {
    q: "Do I need to bring my own CAT and Genny?",
    a: "For classroom-based sessions at Wigan or Worcester, Sygma provides all equipment (Radiodetection CAT4 and Genny4 as standard). This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. For on-site delivery, the client must supply a locator and signal generator for the practical assessment elements. The equipment must be calibrated and in working order.",
  },
  {
    q: "What happens if a delegate fails one of the practical criteria?",
    a: "If a delegate does not meet a criterion during the assessment, the trainer will note the gap and, where time allows, provide additional coaching before a reassessment. If competence cannot be demonstrated on the day, the delegate will not receive a certificate and will need to attend a further session.",
  },
  {
    q: "Is ProQual CAT1 training recognised on utility and construction sites?",
    a: "Yes. The ProQual CAT1 is widely accepted across utility, water, gas, electricity, and construction sectors. Some organisations specify ProQual; others specify EUSR. If you are unsure what your framework requires, contact us and we will check for you.",
  },
  {
    q: "What are the progression routes from ProQual CAT1?",
    a: "Delegates who hold the ProQual CAT1 can progress to the ProQual CAT1 Plus (additional theory and extended practical criteria), the ProQual CAT2 Safe Dig qualification, or the OSCA scheme. Sygma can advise on the right progression route for your team.",
  },
];

export const metadata: Metadata = {
  title: 'ProQual CAT1 Training | Accredited Course | Sygma',
  description: 'ProQual-accredited CAT1 utility locating course with full theory and practical assessment. 14 theory, 8 practical criteria. UK-wide delivery.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/proqualcat1-training' },
  openGraph: {
    title: 'ProQual CAT1 Training | Accredited Course | Sygma',
    description: 'ProQual-accredited CAT1 utility locating course with full theory and practical assessment. 14 theory, 8 practical criteria. UK-wide delivery.',
    url: 'https://sygma-solutions.com/courses/proqualcat1-training',
    siteName: 'Sygma Solutions',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ProQualCat1() {
  return (
    <>
          
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "ProQual CAT1 Utility Locating Training", description: "ProQual-accredited 1-day utility locating course covering theory (T1-T14) and hands-on practical assessment (P1-P8). Covers all four locating modes including direct connection, induction, nulling, Power and Radio passive modes.", url: "/courses/proqualcat1-training", credential: "ProQual Level 2 Award in Utility Avoidance", duration: "1 day", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/cable-location-avoidance" }, { label: "ProQual CAT1" }]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="ProQual CAT1 Training: The Most Rigorous Utility Locating Qualification"
        sub="14 theory criteria. 8 practical criteria. Every one must be met. A full written theory assessment and a full hands-on practical assessment covering all four locating modes and every Genny signal application method, mapped to HSG47, GS6, and CDM Regulations. Accredited by ProQual Accreditations."
        image="cat-16"
        alt="ProQual CAT1 cable avoidance training with practical locator exercises"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "ProQual CAT1" },
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

      {/* Hero CTA Bar */}
      <section className="bg-primary/5 border-y border-primary/20 py-5">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
            Book This Course
          </Link>
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
                title: "Site Operatives",
                desc: "Anyone who breaks ground or works near underground services.",
              },
              {
                title: "Groundworkers and Labourers",
                desc: "Digging, excavating or working in the vicinity of buried utilities.",
              },
              {
                title: "Supervisors and Managers",
                desc: "Responsible for teams who carry out excavation or survey work.",
              },
              {
                title: "New Entrants to Utilities",
                desc: "Starting a career in utility avoidance, streetworks or civil engineering.",
              },
              {
                title: "Organisations Requiring ProQual Accreditation",
                desc: "Companies whose competency frameworks mandate ProQual-accredited qualifications rather than EUSR.",
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

      {/* Info Bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "1 Day"],
            ["Max Delegates", "8"],
            ["Qualification", "ProQual CAT1"],
            ["Pass Standard", "Criteria-based competency"],
            ["Assessment", "Theory paper + hands-on practical"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="eyebrow mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is ProQual CAT1 */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">About This Course</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">What Is the ProQual CAT1?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>The ProQual CAT1 is a ProQual-accredited cable avoidance qualification and the most rigorous one-day Genny & CAT course available in the UK. Delegates must demonstrate competence against 14 theory criteria and 8 practical criteria before a certificate is issued. It is accredited by ProQual Accreditations and externally audited to ensure assessment standards are maintained. It sits alongside the EUSR CAT1 as an alternative accreditation route for operatives working near buried services.</p>
          <p>Unlike pass-or-fail percentage tests, the ProQual CAT1 uses a criteria-based competency assessment. Every single criterion must be met. This makes it the preferred qualification for organisations with the most demanding procurement and H&S frameworks, including those governed by CDM Regulations.</p>
          <p>Sygma delivers this qualification at our Wigan HQ, at The Survey School in Worcester, or on-site anywhere in the UK. All four locating modes (Power, Radio, Genny, and Avoidance) are demonstrated and assessed hands-on, along with every Genny signal application method: direct connection, clamp, capacitance, induction, and nulling out.</p>
          <p>Clients who implement Sygma's ProQual CAT1 training as part of a wider competency programme report measurable reductions in cable strikes and service damage. Our Genny-First methodology, which is central to how we deliver this course, drives a 70 to 80% increase in Genny usage across trained teams. That is a behavioural change that shows up in locator data downloads, not just in assessment results.</p>
        </div>

        <div className="mt-8 bg-accent/5 border border-accent/20 rounded-lg p-6">
          <p className="font-bold text-foreground mb-2">The Only Qualification We Do Not Have to Add To</p>
          <p className="text-muted-foreground text-sm leading-relaxed">In 21 years of delivering utility avoidance training, Sygma has had to add content to every qualification on the market to make it fit for the real demands of the industry. Every single one. The ProQual CAT1 is the first qualification we have developed in partnership with an awarding body that covers everything needed from a course in this subject. It is the only qualification we deliver where we do not have to supplement the syllabus, because the syllabus was built to the standard the industry actually needs.</p>
        </div>
      </section>

      {/* CSTA & Sygma Partnership */}
      <section className="bg-primary py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3">Developed by the Industry's Leading Experts</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Built by Sygma Solutions and CSTA in Partnership with ProQual</h2>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
            <p className="text-white/90 leading-relaxed mb-4">
              Sygma Solutions, along with CSTA (both recognised as the leading experts in utility location in the UK), specifically developed this qualification in partnership with ProQual. It was not adapted from an existing framework or reverse-engineered from a spec sheet. It was built from the ground up by people who have spent decades locating, training, assessing and investigating service strikes.
            </p>
            <p className="text-white/90 leading-relaxed mb-4">
              That is why the ProQual CAT1 is the only qualification Sygma does not have to add content to. Every other qualification on the market requires additional material to bring it up to the standard the industry actually needs. The ProQual CAT1 was written to that standard from day one.
            </p>
            <p className="text-white/90 leading-relaxed">
              No other training provider can make this claim. No other qualification has this development pedigree. When you book a ProQual CAT1 with Sygma, you are getting the qualification delivered by the people who built it.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 text-center">
              <p className="text-3xl font-black text-white mb-1">Sygma</p>
              <p className="text-sm text-white/70">Co-developer of the ProQual CAT1 qualification</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 text-center">
              <p className="text-3xl font-black text-white mb-1">CSTA</p>
              <p className="text-sm text-white/70">Co-developer of the ProQual CAT1 qualification</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 text-center">
              <p className="text-3xl font-black text-white mb-1">ProQual</p>
              <p className="text-sm text-white/70">Independent awarding body and external verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principle */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Core Principle</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">Verification, Not Assumption</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>The ProQual CAT1 is built around a single principle: verify, do not assume. Every theory criterion and every practical criterion exists to test whether the delegate can prove what is in the ground before work begins, rather than relying on plans, habit, or guesswork.</p>
            <p>This is what separates ProQual from a pass/fail percentage test. A percentage-based assessment allows a delegate to get several answers wrong and still pass. The ProQual model does not. If a delegate cannot demonstrate a criterion, they do not receive a certificate for that criterion. There is no margin for error on the things that matter most.</p>
            <p>In practice, this means every delegate who holds a ProQual CAT1 has been individually verified against every area of the qualification. The assessor has observed their theory knowledge and their practical performance, criterion by criterion. That is a level of confidence that a percentage score cannot provide.</p>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="container mx-auto px-6 md:px-8 pb-10 max-w-5xl">
        <div className="grid grid-cols-3 gap-3">
          <Image src="cat-17" width={1200} height={800} alt="ProQual CAT1 training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-27" width={1200} height={800} alt="Hands-on practical assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-83" width={1200} height={800} alt="Practical site assessment during utility avoidance training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
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
                  ["Qualification", "ProQual CAT1 (ProQual-accredited cable avoidance qualification)"],
                  ["Awarding Body", "ProQual"],
                  ["Duration", "1 day (typically 8:30am to 4:00pm)"],
                  ["Location", "Wigan HQ / The Survey School, Worcester / on-site UK-wide"],
                  ["Max Delegates", "8 per session"],
                  ["Equipment", "Sygma provides Radiodetection CAT4 and Genny4 as standard for classroom sessions. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. On-site: client supplies their own locator and signal generator for practical elements"],
                  ["Pass Standard", "All 14 theory criteria and all 8 practical criteria must be met"],
                  ["Assessment Method", "Written theory paper (criteria-based) + hands-on practical assessment"],
                  ["All Four Modes Assessed", "Power, Radio, Genny, and Avoidance modes, plus all Genny signal application methods (direct connection, clamp, capacitance, induction, nulling out)"],
                  ["Regulation Coverage", "HSG47, GS6, CDM Regulations, BS EN 50110"],
                  ["Certificate Issued", "ProQual CAT1 certificate, valid 3 years"],
                  ["CITB Funding", "Via CITB Employer Network"],
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

      {/* Theory Criteria */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Assessment Framework</p>
        <h2 className="text-2xl font-black mb-4 text-foreground">Theory Criteria (T1-T14)</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">Every delegate must demonstrate knowledge of all 14 theory criteria. There is no percentage pass mark: each criterion must be met individually.</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-5 py-3 text-left font-bold text-foreground w-16">Ref</th>
                <th className="px-5 py-3 text-left font-bold text-foreground">Criterion</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["T1", "Your responsibilities regarding health, safety and the environment at work, while locating underground services (including HASAWA, Street Works Act, Permit to Works, contingency planning, CDM Regulations)"],
                ["T2", "The health and safety guidance governing location work including HSG47 and GS6"],
                ["T3", "The range and use of personal protective equipment for the work"],
                ["T4", "The requirements of a site-specific risk assessment and control measures in relation to utility locating activities (purpose, features, monitoring, recording and reporting)"],
                ["T5", "The requirement of a safe system of work in accordance with HSG47 (including identifying and managing dangers, planning, obtaining plans, detecting and marking services, PAS128 awareness, over-reliance on plans)"],
                ["T6", "How to interpret utility drawings to identify services and apparatus (colour coding, symbols, regional differences, PAS128 quality levels)"],
                ["T7", "Identification of the depths of apparatus and underground services (limitations of depth measurements, risks of depth uncertainty)"],
                ["T8", "Methods of marking out services and excavations (specific methods to suit site and weather conditions)"],
                ["T9", "The potential outcomes of incorrect marking out of services and excavations, including consequences for power cables, gas pipes, water, sewers, heated networks and telecommunications"],
                ["T10", "The roles and responsibilities of individuals within the site/highway operations team (including NRSWA requirements)"],
                ["T11", "Methods of visually locating and identifying overhead and underground services including markers, signs and features, and use of existing records"],
                ["T12", "The principles of operation and method of use of electronic locating equipment, including the Signal Generator in direct connection, clamp, capacitance, inducting and nulling out modes, Power and Radio modes, specific locator features (shallow alert, Avoidance, depth, calibration), data-enabled locators, and sources of interference"],
                ["T13", "The procedure for recording and communicating the position and types of services and sub-structures located"],
                ["T14", "The importance of reporting deviations in the position of equipment and identification of other structures (action needed if discrepancies found, future risks of inaccurate plans)"],
              ].map(([ref, criterion]) => (
                <tr key={ref} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 font-bold text-accent">{ref}</td>
                  <td className="px-5 py-3 text-muted-foreground">{criterion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Full-width image break */}
      <div className="w-full h-56 md:h-80 overflow-hidden">
        <Image src="cat-84" width={1200} height={800} alt="ProQual CAT1 hands-on training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top" />
      </div>

      {/* Practical Criteria */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Practical Assessment</p>
        <h2 className="text-2xl font-black mb-4 text-foreground">Practical Criteria (P1-P8)</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">The practical assessment is conducted on a live training rig. Delegates must demonstrate competent performance on all eight criteria. All four locating modes and every Genny signal application method are assessed hands-on.</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-5 py-3 text-left font-bold text-foreground w-16">Ref</th>
                <th className="px-5 py-3 text-left font-bold text-foreground">Criterion</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["P1", "Determine the work location using company documentation and work instructions (ensure site plans obtained, recognise plan references and symbols, state action required if plans unavailable)"],
                ["P2", "Plan to carry out work in line with health, safety and environmental legislation (Permit to Work process, general/point of work risk assessment, site guarding, Safe System of Work, contingency planning)"],
                ["P3", "Inspect and prepare locating equipment required to complete work activity (pre-use checks in accordance with manufacturer instructions)"],
                ["P4", "Wear required PPE to complete work activities in accordance with your Safe System of Work (minimum statutory requirements, damage checks, actions if PPE unavailable)"],
                ["P5", "Use utility plans to determine the extent of the work site area where services are to be located (initial survey, visual assessment of surface features, identify specific services on plans)"],
                ["P6", "Carry out a Point of Work Risk Assessment (POWRA), recording findings and adding control measures (Permit checks, Safe System of Work aligned with HASAWA/HSG47/GS6, report unexpected findings)"],
                ["P7", "Use utility plans in conjunction with the specific locating equipment to enable services to be located and marked, using direct connection, induction, nulling out, Power and Radio modes (apply signal, pinpoint, depth estimation, passive sweep, recognise limitations)"],
                ["P8", "Mark and record the position of services and sub-structures on the work site in accordance with company procedures (appropriate marking methods, report deviations from plans)"],
              ].map(([ref, criterion]) => (
                <tr key={ref} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 font-bold text-accent">{ref}</td>
                  <td className="px-5 py-3 text-muted-foreground">{criterion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">What You Get</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">At the End of This Course</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "ProQual CAT1 Certificate",
                desc: "Accredited by ProQual Accreditations, demonstrating competency across all four EML connection modes"
              },
              {
                title: "Personalised Training Record",
                desc: "Detailed breakdown of all theory and practical criteria assessed, including additional ProQual criteria"
              },
              {
                title: "Practical Assessment Evidence",
                desc: "Documented evidence of competency with Genny & CAT equipment"
              },
              {
                title: "Ongoing Support",
                desc: "Access to Sygma trainers for post-course questions and refresher guidance"
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
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-85" width={1200} height={800} alt="CAT4 locator practical assessment during ProQual training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-86" width={1200} height={800} alt="Delegates learning signal application techniques" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-87" width={1200} height={800} alt="Hands-on utility avoidance practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Who Accepts ProQual CAT1 */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Acceptance</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">Who Accepts ProQual CAT1?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">The ProQual CAT1 is widely accepted across the utility, construction, and infrastructure sectors. Some organisations mandate it specifically because it exceeds the minimum standard set by EUSR. Others accept it alongside EUSR as an equivalent or preferred route.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Tier 1 and Tier 2 Contractors",
                desc: "ProQual CAT1 is accepted by principal contractors operating under CDM duty-holder obligations. Multiple Tier 1 and Tier 2 contractors have adopted ProQual-accredited training as part of their competency frameworks."
              },
              {
                title: "Water, Gas and Electricity Utilities",
                desc: "Water companies, gas distribution networks, and electricity network operators accept ProQual CAT1 as evidence of competency for teams working near their buried infrastructure."
              },
              {
                title: "Multi-Utility and Infrastructure",
                desc: "Organisations managing multi-utility sites, highway works, and new-build infrastructure accept ProQual alongside or in place of EUSR for cable avoidance competence."
              },
              {
                title: "Organisations Requiring CDM Coverage",
                desc: "The ProQual CAT1 is the only cable avoidance qualification that includes CDM Regulations in its theory assessment. For organisations operating as principal designers or principal contractors, this is a significant compliance advantage."
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">Not sure whether your framework requires ProQual or EUSR? <Link href="/contact#enquiry-form" className="text-primary font-semibold hover:underline">Contact us</Link> and we will check for you.</p>
        </div>
      </section>

      {/* ProQual vs EUSR Comparison - What Is Delivered */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Criterion-by-Criterion Comparison</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">ProQual CAT1 vs EUSR CAT1: What Is Actually Delivered</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">This is not a comparison of what is assessed. It is a comparison of what is actually delivered as part of each qualification. The table below maps every ProQual theory and practical criterion against whether EUSR CAT1 delivers the same content. Where you see a cross, that topic is not part of the EUSR specification at all.</p>

          <p className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Theory Criteria (T1-T14)</p>
          <div className="overflow-x-auto rounded-xl border border-border mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-4 py-3 text-left font-bold text-foreground w-14">Ref</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">What Is Delivered</th>
                  <th className="px-4 py-3 text-center font-bold text-primary w-28">ProQual</th>
                  <th className="px-4 py-3 text-center font-bold text-muted-foreground w-28">EUSR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["T1", "H&S responsibilities including HASAWA, Street Works Act, Permit to Works, contingency planning, CDM Regulations", true, false],
                  ["T2", "HSG47 and GS6 guidance governing location work", true, true],
                  ["T3", "Range and use of PPE for utility locating work", true, true],
                  ["T4", "Site-specific risk assessment: purpose, features, monitoring, recording and reporting", true, false],
                  ["T5", "Safe system of work aligned with HSG47 (identifying dangers, planning, obtaining plans, detecting and marking, PAS128 awareness, over-reliance on plans)", true, true],
                  ["T6", "Interpreting utility drawings: colour coding, symbols, regional differences, PAS128 quality levels", true, true],
                  ["T7", "Depth of apparatus and underground services: limitations and risks of depth uncertainty", true, true],
                  ["T8", "Methods of marking out services and excavations for different site and weather conditions", true, true],
                  ["T9", "Consequences of incorrect marking: power cables, gas pipes, water, sewers, heated networks, telecoms", true, true],
                  ["T10", "Roles and responsibilities within site/highway operations team including NRSWA requirements", true, true],
                  ["T11", "Visually locating and identifying overhead and underground services: markers, signs, features, existing records", true, true],
                  ["T12", "Principles of electronic locating equipment: Signal Generator (direct connection, clamp, capacitance, induction, nulling out), Power and Radio modes, specific locator features (shallow alert, Avoidance, depth, calibration), data-enabled locators, sources of interference", true, true],
                  ["T13", "Recording and communicating the position and types of services located", true, true],
                  ["T14", "Reporting deviations in position of equipment and identifying other structures (action if discrepancies found, future risks of inaccurate plans)", true, true],
                ].map(([ref, desc, proqual, eus], i) => (
                  <tr key={ref as string} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white/30" : ""}`}>
                    <td className="px-4 py-3 font-bold text-accent">{ref as string}</td>
                    <td className="px-4 py-3 text-muted-foreground">{desc as string}</td>
                    <td className="px-4 py-3 text-center text-lg">{(proqual as boolean) ? <span className="text-primary font-black">&#10003;</span> : <span className="text-red-500 font-black">&#10007;</span>}</td>
                    <td className="px-4 py-3 text-center text-lg">{(eus as boolean) ? <span className="text-primary font-black">&#10003;</span> : <span className="text-red-500 font-black">&#10007;</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Practical Criteria (P1-P8)</p>
          <div className="overflow-x-auto rounded-xl border border-border mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-4 py-3 text-left font-bold text-foreground w-14">Ref</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">What Is Delivered</th>
                  <th className="px-4 py-3 text-center font-bold text-primary w-28">ProQual</th>
                  <th className="px-4 py-3 text-center font-bold text-muted-foreground w-28">EUSR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["P1", "Determine work location using company documentation and work instructions (site plans obtained, recognise plan references and symbols, action if plans unavailable)", true, true],
                  ["P2", "Plan work in line with H&S and environmental legislation (Permit to Work, general/point of work risk assessment, site guarding, Safe System of Work, contingency planning)", true, false],
                  ["P3", "Inspect and prepare locating equipment (pre-use checks per manufacturer instructions)", true, true],
                  ["P4", "Wear required PPE per Safe System of Work (minimum statutory requirements, damage checks, actions if PPE unavailable)", true, true],
                  ["P5", "Use utility plans to determine extent of work site (initial survey, visual assessment of surface features, identify specific services on plans)", true, true],
                  ["P6", "Carry out Point of Work Risk Assessment (POWRA), recording findings and adding control measures (Permit checks, SSOW aligned with HASAWA/HSG47/GS6, report unexpected findings)", true, false],
                  ["P7", "Use utility plans with locating equipment: direct connection, induction, nulling out, Power and Radio modes (apply signal, pinpoint, depth estimation, passive sweep, recognise limitations)", true, true],
                  ["P8", "Mark and record position of services on work site per company procedures (appropriate marking methods, report deviations from plans)", true, true],
                ].map(([ref, desc, proqual, eus], i) => (
                  <tr key={ref as string} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white/30" : ""}`}>
                    <td className="px-4 py-3 font-bold text-accent">{ref as string}</td>
                    <td className="px-4 py-3 text-muted-foreground">{desc as string}</td>
                    <td className="px-4 py-3 text-center text-lg">{(proqual as boolean) ? <span className="text-primary font-black">&#10003;</span> : <span className="text-red-500 font-black">&#10007;</span>}</td>
                    <td className="px-4 py-3 text-center text-lg">{(eus as boolean) ? <span className="text-primary font-black">&#10003;</span> : <span className="text-red-500 font-black">&#10007;</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
            <p className="font-bold text-foreground mb-2">Key Differences in Delivery Method</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                ["Knowledge assessment", "ProQual: Written theory papers in the delegate's own words", "EUSR: Multiple choice questions"],
                ["Pass standard", "ProQual: Every criterion must be met individually", "EUSR: 80% MCQ pass mark + practical sign-off"],
                ["External verification", "ProQual: ProQual Accreditations external auditor", "EUSR: EUSR internal verification"],
                ["EUSR registration", "ProQual: No", "EUSR: Yes"],
              ].map(([area, proqual, eus]) => (
                <div key={area} className="border border-border rounded-lg p-4 bg-background">
                  <p className="font-semibold text-foreground text-sm mb-2">{area}</p>
                  <p className="text-xs text-primary mb-1">{proqual}</p>
                  <p className="text-xs text-muted-foreground">{eus}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground">Not sure which qualification your organisation needs? <Link href="/contact#enquiry-form" className="text-primary font-semibold hover:underline">Contact us</Link> and we will check your procurement framework for you.</p>
          <p className="mt-4 text-xs text-muted-foreground/70 leading-relaxed italic">EUSR CAT1 column reflects the published EUSR Category 1 minimum specification. ProQual column reflects the published ProQual specification as delivered by Sygma Solutions Ltd.</p>
          <p className="mt-3 text-sm text-muted-foreground">For the full three-way comparison including ProQual CAT1 Plus, see our <Link href="/courses/cable-avoidance-course-comparison" className="text-primary font-semibold hover:underline">detailed comparison page</Link>.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Pricing</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground mb-6">Sygma charges per course, not per person. Whether you send 4 delegates or 8, the course fee stays the same. Travel within the UK mainland is included. ProQual registration fee is included in the course price. No hidden extras.</p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            ["Per course, not per person", "One fixed fee covers your whole group of up to 8 delegates."],
            ["Travel included", "At Sygma HQ (Wigan), The Survey School (Worcester), or on-site at your premises."],
            ["No hidden extras", "ProQual registration, assessment materials, and post-course feedback included."],
          ].map(([title, desc]) => (
            <div key={title} className="border border-border rounded-lg p-5 bg-card">
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
          Get in Touch
        </Link>
      </section>

      {/* CITB */}
      <section className="bg-muted/30 py-10">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">CITB Funding</p>
            <h2 className="text-xl font-black mb-3 text-foreground">Is CITB Funding Available?</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">CITB-registered employers can access funding through the CITB Employer Network. Contact your Employer Network lead to confirm availability before booking.</p>
          </div>
          <div className="md:w-64 bg-white rounded-xl border border-border p-5 text-center">
            <p className="eyebrow mb-2">Need Funding Advice?</p>
            <p className="text-sm text-muted-foreground mb-4">We help clients navigate CITB funding enquiries as part of every booking.</p>
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-5 py-2 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
              Ask About Funding
            </Link>
          </div>
        </div>
      </section>

      {/* CDM Note */}
      <section className="container mx-auto px-6 md:px-8 pb-0 pt-14 max-w-4xl">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <p className="font-bold text-foreground mb-2">CDM Regulations Coverage</p>
          <p className="text-muted-foreground text-sm leading-relaxed">The ProQual CAT1 includes coverage of CDM Regulations as part of its theory assessment. This is a key differentiator from the EUSR CAT1 and makes the ProQual the preferred route for principal designers, contractors, and organisations operating under CDM duty-holder obligations.</p>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-88" width={1200} height={800} alt="ProQual CAT1 practical assessment on training rig" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-89" width={1200} height={800} alt="Genny4 signal generator training demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-90" width={1200} height={800} alt="On-site utility location survey training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

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

      {/* HSG47 Compliance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Regulatory Alignment</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">HSG47 Compliance</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">ProQual CAT1 training directly addresses the requirements of HSG47, GS6, and CDM Regulations for safe work near buried services.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Legal Framework</p>
              <h3 className="text-base font-bold text-foreground mb-2">HSG47, GS6, CDM Regulations</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive coverage of legal and regulatory requirements governing work near buried services, including specific CDM duty-holder obligations.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Risk Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Identifying Buried Services Before Work Begins</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Systematic approach to service plan interpretation, visual inspection, and locating equipment use to identify all buried utilities before excavation.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Safe Practices</p>
              <h3 className="text-base font-bold text-foreground mb-2">Safe Digging Practices in Proximity Zones</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Hand digging techniques, appropriate tool selection, and procedures for working within proximity zones once services have been identified.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Systems of Work</p>
              <h3 className="text-base font-bold text-foreground mb-2">Permit to Dig Systems</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Integration of locating results into safe systems of work, permit to dig procedures, and coordination between survey teams and excavation teams.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Emergency Response</p>
              <h3 className="text-base font-bold text-foreground mb-2">Procedures for Utility Strikes</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Immediate response procedures in the event of inadvertent utility strike, including notification, isolation, and safety protocols.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Documentation</p>
              <h3 className="text-base font-bold text-foreground mb-2">Record Keeping and Audit Trail</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Maintaining comprehensive records of service locations, survey results, and locating activities for compliance documentation and future reference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Paths */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Next Steps</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Where to Go After ProQual CAT1</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ProQual CAT1 Plus",
                desc: "Extend your qualification with 7 additional theory criteria and 32+ practical criteria. Covers advanced locating scenarios including congested ground and service identification under uncertainty.",
                href: "/courses/proqualcat1plus",
              },
              {
                title: "OSCA",
                desc: "The On-Site Competency Assessment. A digital, GPS-stamped assessment proving your team can locate and avoid buried services in the field, not just in the classroom.",
                href: "/osca",
              },
              {
                title: "Bespoke Training",
                desc: "If your organisation has a specific incident history, permit system, or workforce that needs more than a standard course, we design the programme from the ground up. On-site, nationwide.",
                href: "/bespoke-training",
              },
            ].map(({ title, desc, href }) => (
              <div key={title} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                <Link href={href} className="text-primary font-semibold text-sm hover:underline">
                  Find out more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sygma for ProQual CAT1 */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Why Choose Sygma</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">Why Sygma for ProQual CAT1</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Not all CAT1 courses are created equal. ProQual CAT1 is accredited to a standard above the industry minimum, and Sygma delivers it the way the specification was designed to be taught.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Accredited to a Higher Standard",
                desc: "ProQual CAT1 is accredited by ProQual Accreditations and externally audited to exceed the EUSR minimum specification. A robust qualification for organisations that value rigorous competency standards.",
              },
              {
                title: "Every Mode Assessed",
                desc: "ProQual CAT1 practical assessment covers all four locating modes and every Genny signal application method using Genny & CAT equipment.",
              },
              {
                title: "Specialist Trainers",
                desc: "Every trainer is directly employed by Sygma. All are ex-utility surveyors or ex-equipment manufacturer specialists. All TAQA qualified.",
              },
              {
                title: "Genny-First Methodology",
                desc: "70-80% of Sygma-trained operatives default to Genny-First after training. Measured through locator data downloads.",
              },
              {
                title: "Independent Provider",
                desc: "No surveys to sell, no equipment to push. When we identify a gap in competence, that verdict is unbiased.",
              },
              {
                title: "We Come to You",
                desc: "Delivered at your site using your equipment and procedures. Travel included in course rate.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-border rounded-lg p-5 bg-card">
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-14 bg-muted/20">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Expand Your Skills</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Related Courses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/courses/proqualcat1plus" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">ProQual CAT1 Plus</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Two-day advanced qualification with expanded practical element using Genny & CAT equipment. Includes the Genny-First methodology formalised into assessment criteria.</p>
            </Link>
            <Link href="/courses/eus-cat1" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">EUSR-registered cable avoidance qualification. Required by many utility sector frameworks and network operators.</p>
            </Link>
            <Link href="/courses/proqualcat2" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">ProQual CAT2</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Safe excavation qualification. If your team locates and digs, they need both.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Book ProQual CAT1 Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Available at Wigan, Worcester, or on your site anywhere in the UK. Covers up to 8 delegates per session. ProQual registration included.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Book This Course
            </Link>
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

