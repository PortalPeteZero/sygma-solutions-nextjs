import InnerPageHero from "@/components/InnerPageHero";
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { CheckCircle } from "lucide-react";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const faqs = [
              {
                q: "How is the online Level 3 delivered?",
                a: "Live sessions via Microsoft Teams with experienced assessors. Not pre-recorded.",
              },
              {
                q: "What equipment do I need?",
                a: "A computer (not a phone) and a stable internet connection. Screen size matters for the course material.",
              },
              {
                q: "How long does it take to complete?",
                a: "Timescales vary by candidate. Most complete within 6-12 months alongside normal work duties.",
              },
              {
                q: "Do I need any prior qualifications?",
                a: "No formal prerequisites, but you should have practical experience in utility surveying or location work.",
              },
              {
                q: "Is the qualification the same as the classroom version?",
                a: "Yes. Same ProQual Level 3 Certificate. Same units, same assessment criteria, same certificate.",
              },
              {
                q: "Can my employer claim CITB funding?",
                a: "Sygma is a CITB ATO. Speak to your CITB Employer Network adviser about available support.",
              },
              {
                q: "What practical skills will I develop during this training course?",
                a: "You will develop skills in locating buried services using active and passive modes on electromagnetic locators, interpreting stats plans and utility plans, surveying small site areas as part of a two man team, and producing utility mapping drawings that record the depth and position of underground utility networks.",
              },
              {
                q: "How is the Level 3 Certificate in Utility Mapping assessed?",
                a: "Assessment is through a combination of a written exam under exam conditions, observed practical assessment, and a portfolio of workplace evidence. Candidates must achieve the overall pass mark in each component and demonstrate their ability to undertake utility mapping and surveying tasks to the required standard.",
              },
              {
                q: "Do I need to undertake site visits during the online route?",
                a: "Yes. You will need to undertake practical site visits to gather workplace evidence. The online element covers theory, mentoring and portfolio support, but proof of competence must be demonstrated through real utility surveying work on site.",
              },
              {
                q: "What equipment and methods are covered in this training course?",
                a: "The training course covers electromagnetic locators including active, passive and genny modes, as well as a ground penetrating radar overview. You will learn methods for locating underground utilities in different situations across construction and infrastructure sites.",
              },
            ];

export const metadata: Metadata = {
  title: 'Online Level 3 Diploma in Utility Mapping | Sygma Solutions',
  description: 'Ofqual-regulated Level 3 Diploma in Utility Mapping delivered online. Work at your own pace with full assessor support and mentoring via MS Teams.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/online-level-3-diploma' },
  openGraph: {
    title: 'Online Level 3 Diploma in Utility Mapping | Sygma Solutions',
    description: 'Ofqual-regulated Level 3 Diploma in Utility Mapping delivered online. Work at your own pace with full assessor support and mentoring via MS Teams.',
    url: 'https://sygma-solutions.com/courses/online-level-3-diploma',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/gpr-03', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function OnlineLevel3Diploma() {
  return (
    <>
                {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "ProQual Level 3 Diploma in Utility Mapping and Surveying (Online)", description: "Ofqual-regulated Level 3 Diploma in Utility Mapping delivered online. Work at your own pace with full assessor support and mentoring via MS Teams.", url: "/courses/online-level-3-diploma", credential: "Level 3 Diploma in Utility Mapping", duration: "Part-time", mode: ["online"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/utility-mapping-surveying" }, { label: "Online Level 3 Diploma" }]) }} />

      <InnerPageHero
        eyebrow="Qualifications"
        headline="ProQual RQF Level 3 Diploma in Utility Mapping and Surveying (Online)"
        sub="Work towards your ProQual Level 3 Certificate in Utility Mapping at your own pace, from wherever you work. This training course provides full assessor support and mentoring via MS Teams throughout. No hidden fees. No extra charges for additional assessments. Contact us to discuss enrolment and pricing."
        images={[
          "gpr-01",
          "gpr-11",
          "em-04",
        ]}
        alts={["Electromagnetic utility detection techniques covered in the online Level 3 course", "GPR survey equipment featured in the online ProQual Level 3 diploma", "Electromagnetic utility detection techniques covered in the online Level 3 course"]}
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "Online Level 3 Diploma" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-b border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["Qualification", "ProQual RQF Level 3 Diploma"],
            ["Delivery", "Online via MS Teams"],
            ["Duration", "Self-paced (weeks to months)"],
            ["Pricing", "Fixed (contact us for details)"],
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
            <Image src="em-06" width={800} height={600} alt="Online Level 3 Diploma - practical session" sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="gpr-06" width={800} height={600} alt="Online Level 3 Diploma - hands-on assessment" sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="gpr-08" width={800} height={600} alt="Online Level 3 Diploma - electromagnetic survey practical" sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-muted/40 border-y border-border py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {["ProQual Approved Centre", "RQF Regulated Qualification", "Assessor-led Support Throughout", "Fixed Transparent Pricing"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* Is this course for you */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Is This Right for You?</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">This Course Is for You If...</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-3">
            {[
              "You are working in or moving into utility mapping, utility surveying or desktop survey work and need a formal RQF certificate in utility mapping to reflect your role.",
              "You are unable to attend a week-long in-person fast-track course and want to work through the qualification at your own pace while continuing in your current role.",
              "Your employer or client framework requires a ProQual Level 3 Certificate for engineers performing or aiming for utility mapping roles in construction.",
              "You want full assessor support and mentoring throughout, rather than a purely self-directed distance learning experience.",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold shrink-0 mt-0.5">&#8250;</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Typical Candidates</p>
            <div className="space-y-2">
              {[
                "Utility surveyors in their first few years of professional practice",
                "Desktop survey technicians building towards formal qualification status",
                "Operatives progressing beyond CAT operator level into surveying roles",
                "Site engineers and technicians whose role includes locating underground utilities, service location and utility mapping",
                "Candidates who have completed CAT1 or CAT1 Plus accreditation and are ready for the next level",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What the Level 3 covers */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Qualification Content</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">What the Level 3 Covers</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            The ProQual Level 3 Certificate in Utility Mapping and Surveying is the formal entry-level training course for engineers and professionals working in utility mapping, utility surveying and desktop survey roles. This certificate in utility mapping sits above the CAT operator level and below the specialist Level 4 and Level 5 qualifications. Candidates who undertake this qualification will develop the skills and ability to locate underground utilities across construction and infrastructure settings. The Level 3 covers two mandatory units.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                unit: "Unit 1",
                title: "Utility Identification and Site Reconnaissance",
                body: "This unit covers identifying underground utilities and utility networks, colour coding of buried services, regulations and guidelines relating to the location of buried utilities, reading maps and drawings, and site reconnaissance. Candidates learn to locate buried services across different situations, survey small site areas as part of a two man team, and record the depth of underground utility services. It meets the requirements for PAS128 Survey Quality Levels D and C.",
              },
              {
                unit: "Unit 2",
                title: "Carry Out Desktop Surveys and Communicate Findings",
                body: "This unit covers the compilation of desktop utility surveys, identifying what data is required from stats plans and other utility plans, survey methods, communicating information, and preparing survey drawings. Candidates undertake comparison of desktop findings against the same survey site data, produce an overview of utility networks present, and demonstrate their ability to compile plans for construction and engineering teams. It also meets the requirements for PAS128 Survey Quality Levels D and C.",
              },
            ].map(({ unit, title, body }) => (
              <div key={unit} className="rounded-xl border border-border overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest">{unit}</p>
                  <p className="text-white font-black">{title}</p>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 max-w-3xl leading-relaxed text-sm">
            Assessment for the ProQual Level 3 Certificate in Utility Mapping is through a combination of documentary evidence against each unit's criteria and a written exam completed under exam conditions. Candidates must achieve the overall pass mark and provide proof that they have demonstrated the methods learned throughout the training course. Where workplace evidence does not cover the full range, knowledge evidence must be provided. Observed assessment may also be used to verify that candidates can successfully complete practical tasks. A knowledge workbook completed by the candidate is used alongside workplace submissions.
          </p>
        </div>
      </section>

      {/* How the online route works */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Process</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">How the Online Route Works</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          The online route allows you to work through the qualification at your own pace, from your normal place of work. You are not left to work through materials alone. A Sygma assessor provides full support and mentoring throughout, available via MS Teams.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { step: "1", title: "Enrolment", body: "You enrol with Sygma. Sygma registers you with ProQual as a candidate." },
            { step: "2", title: "Materials Issued", body: "You receive your e-portfolio framework and workbooks. These are your evidence guides for each unit." },
            { step: "3", title: "Evidence Gathering", body: "You undertake workplace evidence gathering against the assessment criteria for each unit. Sygma's assessor supports you throughout this training course." },
            { step: "4", title: "Assessor Support Sessions", body: "Regular MS Teams sessions with your Sygma assessor. Sessions are not recorded. A computer (not a phone) is required due to screen size." },
            { step: "5", title: "Workbook Completion", body: "You complete knowledge workbooks to cover any areas not fully evidenced by workplace submissions." },
            { step: "6", title: "Assessment and Submission", body: "Your completed evidence portfolio is assessed by Sygma and submitted to ProQual for quality assurance." },
            { step: "7", title: "Certification", body: "On successful completion, ProQual issues your RQF Level 3 Certificate. This certificate in utility mapping is registered on the national qualifications framework." },
          ].map(({ step, title, body }) => (
            <div key={step} className="bg-muted/30 rounded-xl border border-border p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-black shrink-0">{step}</span>
                <h3 className="font-bold text-foreground text-sm">{title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          There is no fixed end date. Candidates typically complete the Level 3 over a period of weeks or months depending on their current workload and the volume of available workplace evidence. Your assessor will advise on a realistic timescale when you enrol. Pricing is fixed and transparent. There are no hidden fees and no extra charges for additional assessments. Contact us to discuss your enrolment.
        </p>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "ProQual Level 3 Certificate in Locating Underground Utilities",
              "Online Portfolio Submission Record",
              "External Assessment Report",
              "Qualification Registered on the RQF",
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
          <Image src="gpr-10" width={1200} height={900} alt="Online Level 3 Diploma training support" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-03" width={1200} height={900} alt="Utility avoidance qualification practical element" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-09" width={1200} height={900} alt="Level 3 qualification on-site assessment" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Online vs fast-track comparison */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Choosing Your Route</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Online Route or Fast-Track In-Person?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The Level 3 Diploma is available via two routes. The right choice depends on your circumstances.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-5 py-3 text-left font-bold w-28"></th>
                  <th className="px-5 py-3 text-left font-bold">Online Route (this page)</th>
                  <th className="px-5 py-3 text-left font-bold">5-Day Surveyor Programme (in-person)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Format", "Self-paced, online training course. Evidence gathered from your own workplace.", "Intensive in-person training course, typically one week."],
                  ["Delivery", "MS Teams assessor support throughout. Work from any location.", "At a Sygma training venue or client site."],
                  
                  ["Includes", "ProQual Level 3 assessment and certification.", "ProQual Level 3 Diploma embedded within the five-day programme."],
                  ["Duration", "Flexible. Weeks to months depending on candidate availability and evidence volume.", "Typically five days for the full programme."],
                  ["Pricing", "Contact us to discuss enrolment and pricing.", "Contact us to discuss group and individual pricing."],
                ].map(([label, online, inperson], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-5 py-3 font-bold text-foreground align-top">{label}</td>
                    <td className="px-5 py-3 text-muted-foreground align-top">{online}</td>
                    <td className="px-5 py-3 text-muted-foreground align-top">
                      {label === "Format" ? (
                        <Link href="/courses/5-day-pas128-surveyor" className="text-primary hover:underline font-semibold">5-Day Surveyor Programme</Link>
                      ) : null}
                      {label !== "Format" ? inperson : inperson.split(" - ").pop()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Qualification pathway */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Career Pathway</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">The Full Qualification Pathway</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            The ProQual Level 3 Certificate is the starting point of the utility mapping and surveying qualification pathway. Every level Sygma offers sits within the same pathway with no external qualification body switches.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-5 py-3 font-bold">Level</th>
                  <th className="text-left px-5 py-3 font-bold">Qualification</th>
                  <th className="text-left px-5 py-3 font-bold hidden md:table-cell">Suitable For</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    level: "Level 3",
                    title: "Diploma in Utility Mapping and Surveying",
                    audience: "Entry-level mapping professionals. CAT operators moving into surveying roles.",
                    to: "/courses/level-3-certificate",
                    highlight: true,
                  },
                  {
                    level: "Level 4",
                    title: "Advanced EML and GPR Specialist",
                    audience: "Practitioners specialising in electromagnetic location and ground penetrating radar.",
                    to: "/courses/level-4-diploma",
                    highlight: false,
                  },
                  {
                    level: "Level 5",
                    title: "Diploma in Utility Mapping and Surveying",
                    audience: "Experienced practitioners seeking senior-level formal recognition.",
                    to: "/courses/level-5-diploma",
                    highlight: false,
                  },
                  {
                    level: "Level 6",
                    title: "Diploma in Utility Mapping and Surveying Management",
                    audience: "Senior professionals and managers overseeing utility mapping programmes.",
                    to: "/courses/level-6-diploma",
                    highlight: false,
                  },
                ].map(({ level, title, audience, to, highlight }, i) => (
                  <tr key={level} className={highlight ? "bg-primary/10 border-l-4 border-l-primary" : i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-5 py-4 font-bold text-foreground whitespace-nowrap">
                      {level}
                      {highlight && <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded font-bold">YOU ARE HERE</span>}
                    </td>
                    <td className="px-5 py-4 text-foreground">{title}</td>
                    <td className="px-5 py-4 text-muted-foreground hidden md:table-cell">{audience}</td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <Link href={to} className="text-primary font-semibold text-xs hover:underline">
                        View Details &rsaquo;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-02" width={1200} height={900} alt="Level 3 Diploma training equipment" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-07" width={1200} height={900} alt="Online diploma practical training session" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-05" width={1200} height={900} alt="Utility avoidance qualification demonstration" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Why Sygma */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Sygma</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Study With Sygma?</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              title: "Flexible Online Format",
              body: "Complete your Level 3 Certificate in Utility Mapping remotely with live training and tutor support. Not pre-recorded content.",
            },
            {
              title: "ProQual Approved Centre",
              body: "Your qualification is assessed and certified by a recognised awarding organisation. No shortcuts.",
            },
            {
              title: "Specialist Assessors",
              body: "Sygma's assessors are experienced utility mapping engineers who work at the intersection of training and professional practice.",
            },
            {
              title: "Full Portfolio Support",
              body: "You are not alone. A Sygma assessor is available to support you throughout the qualification.",
            },
            {
              title: "Independent",
              body: "Sygma is independent and owns the training process from start to finish.",
            },
            {
              title: "Same Qualification, Flexible Delivery",
              body: "Same ProQual Level 3 Diploma, same assessment criteria, same certificate. Online just works better for you.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-muted/30 rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CITB Employer Network */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="bg-muted/30 rounded-xl border border-border p-8 max-w-2xl">
            <h3 className="text-lg font-bold text-foreground mb-3">CITB Employer Network Funding</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding support for your enrolment. Availability varies by employer and is not guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="border border-border rounded-lg bg-card">
                <summary className="p-4 font-semibold cursor-pointer text-foreground">{q}</summary>
                <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Related Courses</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Continue Your Journey</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Level 3 Certificate",
              desc: "The fast-track in-person route to the same ProQual Level 3 Diploma if you prefer classroom-based learning.",
              to: "/courses/level-3-certificate",
            },
            {
              title: "Level 4 Diploma",
              desc: "Advanced specialism in EML and GPR. The natural next step after completing Level 3.",
              to: "/courses/level-4-diploma",
            },
            {
              title: "PAS128 Awareness",
              desc: "Understand the PAS128 standard itself. Useful for anyone commissioning or receiving utility surveys.",
              to: "/courses/pas128-awareness",
            },
          ].map(({ title, desc, to }) => (
            <Link
              key={title}
              href={to}
              className="group bg-muted/20 rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </Link>
          ))}
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enrol or Enquire</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            To discuss enrolment on this utility mapping training course, pricing, or whether the online route is right for your circumstances, <Link href="/contact#enquiry-form" className="text-primary font-semibold hover:underline">get in touch</Link> with the Sygma team. No hidden fees, no extra charges for additional assessments.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About the Level 3
            </Link>
            <a
              href="tel:+442039718252"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

