import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import Image from 'next/image';

const faqs = [
              {
                q: "Is the USC a qualification?",
                a: "No. The Underground Service Coordinator role is an appointment made by the employer, not a qualification awarded on completion of the course. The course builds the knowledge base and contextualises it within your company systems. The appointment itself is the employer's decision, made when the delegate has the requisite experience and knowledge.",
              },
              {
                q: "Can we run the CAT1 and CAT2 elements without the USC content?",
                a: "Yes. The standalone EUSR CAT1 and CAT2 Combined programme covers the location and safe dig elements without the USC content. If your team needs the USC component as well, this combined programme is the most efficient option.",
              },
              {
                q: "We do not have all our USC documentation ready. Can we still book?",
                a: "You can provisionally book, but the USC element cannot be delivered without the required documentation. Please aim to have all documentation with Sygma at least one week before the course date to allow the trainer adequate preparation time.",
              },
              {
                q: "What if different delegates are attending for different reasons, some for CAT1 and CAT2, some for USC?",
                a: "The combined programme is designed for delegates who need all three elements. If only some delegates require the USC content, Sygma can discuss splitting the programme or running the USC session for a smaller group within the two days. Contact Sygma to discuss the best structure for your team.",
              },
              {
                q: "Does this course include PAS128 training?",
                a: "The USC element includes PAS128 awareness: an explanation of survey types, quality levels, and how to read a PAS128 drawing. This is designed to give USCs the ability to interpret and interrogate PAS128 outputs. It is not the same as the dedicated PAS128 Awareness course, which covers the standard in greater depth for surveyors and technical staff.",
              },
              {
                q: "Can this be run at your Wigan training centre?",
                a: "Yes. Sygma's dedicated training centre in Wigan includes live utility demonstration rigs and a safe dig area. USC content will still need to be tailored to your organisation's documentation regardless of venue.",
              },
            ];


export const metadata: Metadata = {
  title: 'EUSR CAT1 CAT & Genny Training with CAT2 and USC | Sygma',
  description: 'EUSR CAT1 CAT and Genny training combined with CAT2 safe dig and USC content. Two-day classroom and on-site course delivered nationwide by Sygma Solutions.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat1-cat2-usc-combined' },
  openGraph: {
    title: 'EUSR CAT1 CAT & Genny Training with CAT2 and USC | Sygma',
    description: 'EUSR CAT1 CAT and Genny training combined with CAT2 safe dig and USC content. Two-day classroom and on-site course delivered nationwide by Sygma Solutions.',
    url: 'https://sygma-solutions.com/courses/eus-cat1-cat2-usc-combined',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-09', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function EusCat12UscCombined() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'EUSR CAT1 CAT & Genny Training with CAT2 and USC', description: 'EUSR CAT1 CAT and Genny training combined with CAT2 safe dig and USC content. Two-day classroom and on-site course delivered nationwide by Sygma Solutions.', url: '/courses/eus-cat1-cat2-usc-combined', credential: 'EUSR CAT1, EUSR CAT2, and USC', duration: '3 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'EUSR CAT1, CAT2 and USC Combined' }]) }} />

      <InnerPageHero
        eyebrow="Utility Avoidance"
        headline="EUSR CAT1 CAT and Genny Training with CAT2 Safe Dig and USC Combined"
        sub="Three qualifications and responsibilities in a single two-day CAT and Genny training programme. EUSR CAT1 location training, EUSR CAT2 Safe Dig assessment, and Underground Service Coordinator content delivered in-house by Sygma Solutions, tailored to your organisation's permit systems and documentation."
        image="cat-10"
        alt="Combined EUSR CAT1, CAT2 and USC utility service coordinator training session"
        breadcrumbs={[
          { label: "Training", href: "/training/cable-location-avoidance" },
          { label: "EUSR CAT1, CAT2 and USC Combined" },
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
            ["Qualifications", "EUSR CAT1, EUSR CAT2, USC content"],
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
            <Image src="cat-64" width={1200} height={900} alt="EUSR CAT1 CAT2 and USC combined training - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-65" width={1200} height={900} alt="EUSR CAT1 CAT2 and USC combined training - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-67" width={1200} height={900} alt="EUSR CAT1 CAT2 and USC combined training - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>
      {/* Who This Course Is For */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Who Is This Course For</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Who Should Attend This CAT and Genny Training Course</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Service Coordinators and Planners",
                desc: "Those responsible for planning work around underground services and managing permits to dig. This training gives you the knowledge base and practical skills to understand utility drawings, identify cable locations, and manage excavation permits on your sites. You will receive comprehensive training in service coordinator responsibilities and PAS128 interpretation."
              },
              {
                title: "Site Operatives Requiring Full Competency",
                desc: "Anyone who locates, excavates and coordinates utility avoidance on site. This CAT and Genny training course equips you with practical skills in cable avoidance, hands-on experience with locator and signal generator equipment, and competency in safe excavation around live underground services. You will receive EUSR CAT1 and CAT2 accreditation."
              },
              {
                title: "Organisations Seeking Maximum Competency",
                desc: "Companies wanting CAT1, CAT2 and USC service coordinator competency from a single classroom-based and practical training event. This combined course delivers comprehensive training in cable avoidance, safe dig, and service coordination in one unified two-day programme. Ideal for teams needing multi-level utility detection and safety skills."
              },
              {
                title: "Supervisors and Managers",
                desc: "Those overseeing teams who need to understand the full utility avoidance process and safe excavation procedures. This training gives you the knowledge to manage on-site permits, understand cable location methods, supervise safe dig activities, and ensure your team follows underground service detection best practices."
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

      {/* Intro */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">The Most Complete Single Programme</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CAT and Genny Training Course: CAT1, CAT2 and Service Coordination in One Programme</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most utility strikes are not caused by individual operative failure. They happen when the systems around the operative also fail: when plans are not interrogated properly, when permits to dig are treated as paperwork formalities, when no one in the team actually understands what a PAS128 drawing is telling them, and when the underground service coordinator role is occupied by someone who was appointed without any structured genny training, cable avoidance training, or preparation for the role. Proper cat and genny training and genny training courses exist to prevent these failures by teaching operatives how to locate utility services before excavation work begins.
              </p>
              <p>
                This combined CAT and Genny training course addresses all three layers. Day one covers the complete theoretical foundation for EUSR CAT1: electromagnetic location science, Genny-First methodology, plan interpretation, and the legislative framework including HSG47. The site training element of day two delivers EUSR CAT2 through a live safe dig assessment with a permit to dig. Incorporated throughout the course is the USC element, which is tailored specifically to your organisation's documentation, permit systems, and service coordinator responsibilities.
              </p>
              <p>
                The USC is not a qualification. It is an appointment made by the organisation when a delegate has the experience and knowledge to take on the role. This genny training course builds the knowledge base and contextualises it within your specific company systems, so that when the appointment is made, it is meaningful. Every delegate leaves this training course with EUSR CAT1 and CAT2 accreditation in the appropriate EUSR category, registered on the EUSR database. On successful completion of both the cable avoidance and safe dig elements, delegates can locate utility services with confidence and competence.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Course at a Glance</p>
            {[
              ["Duration", "2 days (classroom and on-site)"],
              ["Format", "In-house at your site or Sygma's Wigan training centre"],
              ["Max Delegates", "8 per course"],
              ["Qualifications", "EUSR CAT1, EUSR CAT2 (Safe Dig), USC content (appointment by employer)"],
              ["Assessment", "Multiple choice questions (MCQs) + practical safe dig assessment"],
              ["Prerequisites", "None for operatives. Company must provide USC documentation in advance."],
              ["Equipment", "Sygma provides Radiodetection CAT4 and Genny4 as standard; this course can be delivered on any of the following: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. Delegates may bring their own equipment."],
              ["Delivery", "Nationwide UK"],
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

      {/* How We Deliver This Training */}
      <section className="bg-muted/20 border-y border-border py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">How We Deliver</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">How Sygma Delivers This CAT and Genny Training Course</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              This cat and genny training course is delivered in-house at your site anywhere in the UK, or at Sygma's dedicated training centre in Wigan. Every genny training course is led by a directly employed Sygma trainer who is TAQA qualified and has real survey field experience in cable avoidance and locating utility services. We do not use subcontracted trainers.
            </p>
            <p>
              Day one covers CAT and Genny classroom training: electromagnetic theory, Genny-First methodology, plan interpretation, and the full EUSR CAT1 curriculum. Day two moves to the site for practical CAT and Genny training, CAT2 safe dig assessment, and the integrated USC content built around your company documentation.
            </p>
            <p>
              All cat genny equipment is provided by Sygma as standard for every genny training course. The training course can be delivered on Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. Delegates may also bring their own cable avoidance equipment for training on their day-to-day kit. Maximum 8 delegates per course.
            </p>
          </div>
        </div>
      </section>

      {/* CAT1 and CAT2 content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">EUSR CAT1 and CAT2 Elements</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">CAT and Genny Training Content: Full EUSR CAT1 and CAT2 Course Programme</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The classroom and site elements of this CAT and Genny training course deliver the complete EUSR CAT1 and CAT2 content. Both days of training include USC content integrated alongside the core cable avoidance and safe dig curriculum. All locator and signal generator training follows Sygma's Genny-First methodology.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">CAT and Genny Classroom Training (EUSR CAT1 and CAT2 Theory)</h3>
              <div className="space-y-3">
                {[
                  "Legislation and guidance including HSG47 and company-specific policy",
                  "Site-specific risk assessments, company procedures, and permits to dig",
                  "Excavation hazards: Leptospirosis, asbestos, silica dust, noise, vibration, groundwater",
                  "Utility plan interpretation: STATS plans, limitations, visual checks",
                  "Electromagnetic theory: how a CAT and Genny work, signal behaviour, limitations",
                  "Locator operation: Power, Radio, Genny, and Avoidance modes, Strike Alert, signal interpretation, depth estimation",
                  "Signal generator application: dual frequency, capacitance mode, earth positioning, blind induction, nulling services",
                  "CAT Manager data logging: recording, exporting CSV and KML files, data pattern analysis",
                  "Excavation techniques: exposing services, hand tools, power tools, horizontal excavation, trench support",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">CAT and Genny On-Site Training (Practical Application and CAT2 Assessment)</h3>
              <div className="space-y-3">
                {[
                  "Using STATS plans and existing site information to identify indicated utility routes",
                  "Visual site inspection and equipment function checks before any location work begins",
                  "Locating in all modes, confirming service routes, taking and testing depth readings",
                  "Signal generator application for problem services: street lighting, small comms cables",
                  "Completing a risk assessment and permit to dig before excavation commences",
                  "Surface removal, horizontal excavation to expose the indicated service, supporting services, reinstatement",
                  "Candidate assessment throughout the excavation process",
                  "Multiple choice questions (MCQs) at the end of the programme",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USC content */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Underground Service Coordinator Element</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Underground Service Coordinator Training: Roles, Responsibilities and PAS128 Drawings</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The Underground Service Coordinator element is integrated throughout the programme and tailored specifically to your organisation's documentation, utilities, and permit systems. The training is built around your specific permits to dig, utility drawings, PAS128 survey formats, and health and safety requirements, which Sygma requires in advance of the course so that the practical training is directly relevant to your team's day-to-day site responsibilities.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Roles and responsibilities of the USC within your specific organisation",
            "Client and designer responsibilities under HSG47",
            "PAS128 survey types: Quality Levels, the EM matrix, B surveys (1 to 4), and M Grids",
            "PAS128 drawing review: line colours, types, abbreviations, and what a competent USC should be checking",
            "The USC role and the distinction between an appointment and a qualification",
            "Your company's permit system: ensuring the permit is used correctly on site",
            "Health and safety requirements specific to the USC role in your organisation",
            "Company-specific duties, such as periodic CAT Manager data download and review",
            "Practical guidance on locating and identifying all indicated services using cable avoidance tools before permits are signed off"
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start bg-muted/30 border border-border rounded-lg p-4">
              <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
              <span className="text-muted-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-amber-50 dark:bg-amber-950/20 p-5">
          <p className="text-sm font-bold text-foreground mb-1">Important: USC Documentation Required in Advance</p>
          <p className="text-sm text-muted-foreground">
            The USC component is company-specific. Sygma cannot deliver the USC content effectively without your organisation's documentation. This includes permit to dig forms, USC appointment letters, role descriptions, and any specific health and safety requirements. Please allow sufficient time before the course date for Sygma to review your documentation.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">What You Get</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What Delegates Receive from This CAT and Genny Training Course</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "EUSR CAT1 Certificate", desc: "EUSR-registered CAT1 accreditation for cable and underground service location competency. Covers electromagnetic detection, Genny-First methodology, and practical cable avoidance skills." },
            { title: "EUSR CAT2 Certificate", desc: "EUSR-registered CAT2 Safe Dig accreditation for safe excavation competency around live utilities. Covers safe dig assessment, practical skills, and underground service exposure techniques." },
            { title: "USC Certificate", desc: "Service Coordinator accreditation registered on the EUSR database. Confirms your appointment and recognition as competent in permit systems, utility drawings, and service detection responsibilities." },
            { title: "Written and Practical Assessment Records", desc: "Full documentation of theory assessments, practical observations, cable avoidance demonstrations, safe dig assessment records, and CAT Manager data analysis across all three disciplines." },
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
          <Image src="cat-68" width={1200} height={900} alt="Combined EUSR CAT1, CAT2 and USC training practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-69" width={1200} height={900} alt="Safe excavation demonstration during combined utility training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-70" width={1200} height={900} alt="On-site utility avoidance and safe dig combined assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Documentation requirements */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="eyebrow mb-3">Documentation</p>
              <h2 className="text-2xl font-black mb-4 text-foreground">What Your Organisation Must Provide Before CAT and Genny Training</h2>
              <div className="space-y-3">
                {[
                  "All USC-related documentation specific to the role within your organisation (permit forms, appointment letters, role descriptions)",
                  "An up-to-date permit to dig form used by your organisation",
                  "Any specific health and safety requirements for your site or organisation that the trainer needs to be aware of prior to arrival",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                If Sygma Solutions already holds a copy of your documentation from a previous programme, you can confirm this at booking.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Site Requirements</p>
              <h2 className="text-2xl font-black mb-4 text-foreground">CAT2 Safe Dig Area</h2>
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-foreground">Minimum requirements:</p>
                {[
                  "A live dig area with buried metallic utilities. One power cable to a site cabin is not sufficient.",
                  "Open area of at least 10m squared, ground suitable for a hand dig",
                  "Full buried service plans available",
                  "Delegates must have FR PPE and insulated digging tools",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Preferred requirements:</p>
                {[
                  "Multiple detectable underground utilities, open area of at least 15m squared",
                  "Method statement, risk assessment, and permit to dig for trial hole excavation in place on arrival",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3 font-medium">Each delegate must bring government-issued photographic ID.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CITB */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">CITB Funding</p>
        <h2 className="text-2xl font-black mb-4 text-foreground">CITB Funding for CAT and Genny Training Courses</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Sygma Solutions is a CITB Approved Training Instructor. CITB-registered employers may be able to access training funding support for this CAT and Genny training course through the CITB Employer Network. This applies to all Sygma courses including EUSR CAT1, CAT2, and the combined programme with USC content. Contact your CITB adviser directly for current eligibility and funding options.
        </p>
      </section>

      {/* Full-width image break */}
      <div className="w-full overflow-hidden">
        <Image src="cat-71" width={1200} height={900} alt="Combined EUSR CAT1, CAT2 and USC on-site training delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* Why Sygma */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose Sygma for Your CAT and Genny Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Our approach to utility avoidance training sets us apart from standard compliance courses. Here's what makes the difference.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "More Than a Standard CAT and Genny Course",
                desc: "Many CAT1 courses meet the minimum specification. Ours exceed it. We invest in the science and in your operatives' depth of understanding.",
              },
              {
                title: "Genny & CAT Methodology",
                desc: "Our Genny-First CAT and Genny training methodology delivers a measured 70-80% increase in signal generator usage. When your operatives use the Genny properly on every locate, they find more underground services before excavation begins.",
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
                desc: "In-house CAT and Genny training delivery anywhere in the UK with travel fully included. Minimal disruption to your operations and your team trains on their own site with their own underground services.",
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

      {/* Why This CAT and Genny Training Matters */}
      <section className="py-14 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Why It Matters</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Why This CAT and Genny Training Course Matters</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Underground utility strikes remain one of the most common causes of serious injury on UK construction sites. Most strikes are preventable. They happen when operatives have not received proper genny training or cable avoidance training, when signal generator usage is low, when plans are not checked before excavation starts, and when nobody on site has been prepared for the service coordinator role. This genny training course teaches operatives to locate utility services correctly using cat genny equipment before any excavation work begins.
            </p>
            <p>
              This training course addresses all of those gaps in a single programme. The CAT and Genny training element builds genuine understanding of how electromagnetic locators work, not just which buttons to press. Sygma's Genny-First methodology consistently delivers a 70-80% increase in signal generator usage after training, measured through CAT Manager data downloads. When your operatives use the Genny properly, they find more services before they start digging.
            </p>
            <p>
              The safe dig training element ensures operatives know how to excavate safely around live utility services. The USC training element means someone in your team genuinely understands the permit system, can interrogate utility plans, and can interpret PAS128 survey drawings. Together, these three elements give your organisation a complete cable avoidance and genny training solution. On successful completion, delegates hold the appropriate EUSR category accreditation to locate utility services on any UK construction site.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of CAT and Genny Training */}
      <section className="py-14 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Key Benefits</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Benefits of CAT and Genny Training for Your Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <div>
              <h3 className="font-bold text-foreground mb-4">For Your Operatives</h3>
              <div className="space-y-3">
                {[
                  "Practical skills in using CAT and Genny equipment on every locate",
                  "Confidence in cable avoidance and underground services detection",
                  "Knowledge of pre-use checks and equipment maintenance",
                  "Safe excavation techniques around live utilities",
                  "EUSR CAT1 and CAT2 certification registered on the EUSR database",
                  "Understanding of HSG47 guidance and legal responsibilities",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">For Your Organisation</h3>
              <div className="space-y-3">
                {[
                  "Documented reduction in utility strikes and cable strikes",
                  "Compliance with HSG47 guidance on competent utility avoidance",
                  "Single unified CAT and Genny training programme covering three elements",
                  "Reduced project delays caused by cable damage or utility strikes",
                  "Service coordinator equipped to manage permits to dig and site documentation",
                  "Lower insurance claims and improved health and safety record",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">HSG47 Compliance</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">HSG47 Competence Requirements This CAT and Genny Training Course Delivers</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">HSG47 defines what competent utility avoidance looks like. This course covers all six essential elements.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Trained and Competent",
                desc: "Full theoretical foundation in cable avoidance, locator operation, and signal generator use. Practical CAT and Genny assessment to confirmed EUSR CAT1 and CAT2 standards. Competency registered on the EUSR database.",
              },
              {
                title: "Safe System of Work",
                desc: "Permits to dig, risk assessments, site inspection protocols, documented procedures, and management oversight. Training covers HSG47 guidance on safe dig procedures and utility detection responsibilities.",
              },
              {
                title: "Service Plan Checks",
                desc: "STATS plan interpretation, limitations, quality levels, visual verification, PAS128 drawing interrogation, and cable location techniques before excavation starts. Training in reading utility drawings and identifying all indicated services.",
              },
              {
                title: "Correct Use of Equipment",
                desc: "Locator and signal generator operation, signal interpretation, cable detection depth estimation, and troubleshooting. Training in all four modes: Power, Radio, Genny, and Avoidance. Data logging via CAT Manager.",
              },
              {
                title: "Safe Excavation",
                desc: "Practical safe dig assessment with exposure of live buried utilities, correct hand tool and power tool use, support of services, and reinstatement. Real-world CAT2 training under site conditions.",
              },
              {
                title: "Evidenced Records",
                desc: "Written assessment, practical observation records, cable avoidance demonstration records, CAT Manager data logging, and safe dig assessment documentation for compliance and future reference.",
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related CAT and Genny Training Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Consider these additional CAT and Genny training programmes to build deeper expertise across your team in cable avoidance, signal generator use, and utility detection.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "EUSR CAT1",
                desc: "Two-day location theory and practical. Detection only, without the safe dig element of this combined programme.",
                link: "/courses/eus-cat1",
              },
              {
                title: "ProQual CAT1 Plus",
                desc: "RQF-regulated alternative to EUSR CAT1. Covers electromagnetic location with additional depth on geology and cable theory.",
                link: "/courses/proqualcat1plus",
              },
              {
                title: "Service Coordinator",
                desc: "Dedicated USC role preparation for experienced operatives. Comprehensive PAS128 awareness and company documentation tailoring.",
                link: "/courses/service-coordinator-usc",
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
          <Image src="cat-72" width={1200} height={900} alt="Utility location practical training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-73" width={1200} height={900} alt="Safe dig practical assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-74" width={1200} height={900} alt="Combined utility avoidance course completion" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Book This CAT and Genny Training Course</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book this cat and genny training course at your site anywhere in the UK, or at Sygma's dedicated training centre in Wigan. Contact us with your delegate numbers, preferred location (classroom-based at Wigan or on-site delivery across the UK), any cat genny equipment preferences, and your Underground Service Coordinator documentation. We will prepare a tailored quotation for your genny training programme. This training course covers cable avoidance, safe dig, and service coordination to help your team locate utility services safely and competently.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About This Course
            </Link>
            <Link
              href="/courses/eus-cat1-cat2-combined"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View CAT1 and CAT2 Combined (Without USC)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
