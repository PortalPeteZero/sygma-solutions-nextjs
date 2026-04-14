import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import InnerPageHero from "@/components/InnerPageHero";
import { CheckCircle } from "lucide-react";

const faqs = [
            {
              q: "Do I need the Level 3 Certificate before I can start the Level 4 Diploma?",
              a: "Yes. The ProQual Level 3 Certificate in Utility Mapping and Surveying is a mandatory prerequisite for enrolment on the Level 4 Diploma. If you do not yet hold the Level 3, we can support you through both qualifications on a structured timeline.",
            },
            {
              q: "I have already done the 5 Day PAS128 course. Can that count towards the Level 4?",
              a: "Yes. The 5 Day PAS128 Surveyor Course generates evidence that maps directly to the Level 4 assessment criteria. Your course completion certificate, practical assessment records, and any assessor notes can all be included in your Level 4 evidence portfolio. We will help you match your existing training records to the ProQual criteria.",
            },
            {
              q: "How long does the Level 4 Diploma take to complete?",
              a: "This depends on how much evidence you can draw from your current work. Candidates who are actively working in utility surveying and who have completed relevant Sygma training can often complete the Level 4 within two to four months of induction. Our tailored assessment plan will set a realistic timeline for your situation.",
            },
            {
              q: "What is the difference between the Level 4 and the Level 5?",
              a: "The Level 4 Diploma focuses on operational competence in advanced EM detection and GPR. The Level 5 Diploma is a broader and more advanced qualification covering the full range of utility surveying competencies including surveying instruments such as total stations and GNSS, geometric principles, and ICT for 3D utility data. The Level 5 requires both Level 3 and Level 4 as prerequisites.",
            },
            {
              q: "Can my company put a team through the Level 4 together?",
              a: "Yes. We offer fast-track and private assessment programmes for organisations who want to progress teams through the Level 4 together, either at your premises or at our Wigan centre. Contact us to discuss group pricing and scheduling.",
            },
            {
              q: "Is the assessment fee all-inclusive?",
              a: "The Sygma assessment fee covers the full assessment service including induction, tailored assessment plan, e-portfolio access, workbooks, assessor support, mentoring, and open day sessions. ProQual registration fees are separate and paid directly to the awarding body. There are no additional Sygma charges regardless of how many submissions or mentoring sessions you need. Contact us for a quote.",
            },
          ];

export const metadata: Metadata = {
  title: 'ProQual Level 4 Utility Mapping Course | Sygma Solutions',
  description: 'The advanced specialist qualification for utility surveyors: demonstrating competency in EM location and GPR. Contact us for enrolment and pricing.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/level-4-diploma' },
  openGraph: {
    title: 'ProQual Level 4 Utility Mapping Course | Sygma Solutions',
    description: 'The advanced specialist qualification for utility surveyors: demonstrating competency in EM location and GPR. Contact us for enrolment and pricing.',
    url: 'https://sygma-solutions.com/courses/level-4-diploma',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/gpr-12', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Level4Diploma() {
  return (
    <>
                {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "ProQual Level 4 Diploma in Utility Mapping and Surveying", description: "The advanced specialist qualification for utility surveyors: demonstrating competency in electromagnetic location and ground penetrating radar. Contact us to discuss enrolment and pricing.", url: "/courses/level-4-diploma", credential: "Level 4 Diploma in Utility Surveying", duration: "Part-time", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/utility-mapping-surveying" }, { label: "Level 4 Diploma" }]) }} />
      <InnerPageHero
        eyebrow="Qualifications"
        headline="ProQual Level 4 Diploma in Utility Mapping and Surveying"
        sub="The advanced specialist qualification for utility surveyors: demonstrating competency in electromagnetic location and ground penetrating radar. Contact us to discuss enrolment and pricing."
        images={[
          "gpr-08",
          "gpr-10",
          "gpr-11",
        ]}
        alts={["Advanced EM locating equipment demonstration during Level 4 diploma training", "MALA GPR survey being conducted as part of ProQual Level 4 utility mapping", "Ground penetrating radar data collection during Level 4 diploma practical assessment"]}
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "Level 4 Diploma" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Qualification", "ProQual Diploma"],
            ["Level", "Level 4 (Ofqual-regulated)"],
            ["Prerequisite", "Level 3 Certificate required"],
            ["Pricing", "Contact us for pricing"],
            ["Equipment", "MALA GPR, Leica DSX, Radiodetection RD8200"],
            ["Delivery", "Wigan centre, online & in-house"],
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
            <Image src="gpr-09" width={800} height={600} alt="Level 4 Diploma utility mapping - practical session" sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="em-02" width={800} height={600} alt="Level 4 Diploma utility mapping - hands-on assessment" sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="em-03" width={800} height={600} alt="Level 4 Diploma utility mapping - on-site delivery" sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
        </div>
      </section>
      {/* What is Level 4 */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">The Qualification</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">
              What Is the ProQual Level 4 Diploma in Utility Mapping and Surveying?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The ProQual Level 4 Diploma in Utility Mapping and Surveying is an Ofqual-regulated qualification that develops and assesses advanced competency in electromagnetic (EM) detection methods and ground penetrating radar (GPR) for underground utility location. It is the second level in the ProQual utility mapping pathway and must be completed before progressing to the Level 5 Diploma.
              </p>
              <p>
                Where the Level 3 Certificate focused on desktop surveys and site reconnaissance (PAS128 Quality Levels D and C), the Level 4 Diploma progresses into the practical detection phase of utility surveying. This is the qualification that demonstrates a candidate can carry out a PAS128 Quality Level B detection survey using the correct equipment, methods, and survey protocols.
              </p>
              <p>
                Assessment is through a structured evidence portfolio and workbook, completed against the ProQual assessment criteria. Sygma's assessors guide each candidate through the process and help identify the most efficient route through the evidence requirements.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-xl border border-border p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">EM Detection Evidence</p>
              <p className="text-sm font-bold text-foreground mb-2">ICES GEUS01 E and G</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Advanced electromagnetic detection: use of EM equipment in active, passive, and induction modes; signal interpretation; depth estimation and verification; frequency selection; avoidance of signal interference.
              </p>
            </div>
            <div className="bg-muted/30 rounded-xl border border-border p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">GPR Evidence</p>
              <p className="text-sm font-bold text-foreground mb-2">ICES GEUS01 F (Part 1)</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ground penetrating radar: GPR operating principles; radargram interpretation; hyperbola identification; depth and velocity calibration; field data collection including GPS integration.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Full-width image */}
      <div className="w-full overflow-hidden aspect-[4/3] md:aspect-[16/9] bg-muted">
        <Image src="gpr-03" width={1200} height={900} alt="Level 4 Diploma utility mapping - live training environment" sizes="100vw" className="w-full h-full object-contain" />
      </div>

      {/* Who it's for */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Who Is This Qualification For?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Practising Utility Surveyors",
                body: "Surveyors who carry out PAS128 Quality Level B detection surveys and want a nationally recognised qualification to evidence their skills.",
              },
              {
                title: "Candidates Who Have Completed Sygma Training",
                body: "Those who have attended the 5 Day PAS128 Surveyor Course or the Advanced EM Locator Training and want to formalise that training through a qualification.",
              },
              {
                title: "Survey Company Owners and Managers",
                body: "Owners or managers who want to demonstrate team capability to clients and tendering bodies through recognised, Ofqual-regulated qualifications.",
              },
              {
                title: "TSA/ICES Programme Candidates",
                body: "Candidates working through the TSA and ICES Utility Mapping Training Programme who have completed Modules 2 and 3 (GEUS01 E&G and F Part 1) and want to convert that training evidence into a formal qualification.",
              },
              {
                title: "Career Progression and CPD",
                body: "Individuals building a qualification portfolio to support career progression, CPD requirements, or professional membership of TSA, CICES, or similar bodies.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 bg-amber-50 dark:bg-amber-950/20 border border-border rounded-lg p-4">
            <span className="font-bold text-foreground">Entry requirement:</span> ProQual Level 3 Certificate in Utility Mapping and Surveying (or equivalent evidence of Level 3 competence agreed with the awarding body). Candidates must hold the Level 3 before they can enrol on the Level 4.
          </p>
        </div>
      </section>

      {/* Competency areas table */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Evidence Areas</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">What Does the Level 4 Diploma Assess?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The Level 4 Diploma is assessed through a structured evidence portfolio demonstrating operational competence across the following areas. These align with the ICES GEUS01 competency framework used in the TSA and ICES Utility Mapping Training Programme.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 py-3 font-bold">Competency Area</th>
                <th className="text-left px-4 py-3 font-bold">Key Evidence Required</th>
                <th className="text-left px-4 py-3 font-bold whitespace-nowrap">ICES Mapping</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  area: "Advanced electromagnetic location (passive and active modes)",
                  evidence: "Evidence of operating EM equipment in passive, active, induction, and clamp modes; frequency selection; signal identification; depth reading and estimation",
                  ices: "GEUS01 E and G",
                },
                {
                  area: "EM signal interpretation and interference management",
                  evidence: "Evidence of understanding signal characteristics; avoidance of interference; use of current clamp and inductive methods",
                  ices: "GEUS01 E and G",
                },
                {
                  area: "Transmitter connection and coupling methods",
                  evidence: "Evidence of safe and effective connection; clamp/capacitance/induction/nulling techniques on live and de-energised services",
                  ices: "GEUS01 E and G",
                },
                {
                  area: "Depth estimation and verification checks",
                  evidence: "Evidence of using depth estimation mode; understanding of error factors; physical verification methods",
                  ices: "GEUS01 E and G",
                },
                {
                  area: "GPR: equipment setup and operation",
                  evidence: "Evidence of GPR equipment setup; antenna selection; operating parameters; baseline scans and survey line configuration",
                  ices: "GEUS01 F Part 1",
                },
                {
                  area: "Radargram interpretation and hyperbola identification",
                  evidence: "Evidence of identifying hyperbolic reflections; understanding of velocity and depth calculations; distinguishing utility signals from noise",
                  ices: "GEUS01 F Part 1",
                },
                {
                  area: "PAS128 Quality Level B survey deliverables",
                  evidence: "Evidence of producing survey outputs that meet PAS128 Quality Level B requirements including plan accuracy and reporting",
                  ices: "GEUS01 E, F, G",
                },
              ].map(({ area, evidence, ices }, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3 font-semibold text-foreground align-top">{area}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{evidence}</td>
                  <td className="px-4 py-3 text-accent font-bold whitespace-nowrap align-top">{ices}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Candidates who have attended Sygma's Advanced EM Locator Training, 5 Day PAS128 Surveyor Course, or the TSA and ICES Programme (Modules 2 and 3) will have generated significant classroom and practical evidence that can be used directly toward the Level 4 portfolio.
        </p>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "ProQual Level 4 Diploma in Underground Utility Mapping",
              "Portfolio of Evidence Record",
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
          <Image src="gpr-05" width={1200} height={900} alt="Level 4 Diploma practical training session" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="em-07" width={1200} height={900} alt="Utility survey assessment for Level 4" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-01" width={1200} height={900} alt="Advanced electromagnetic locator training" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* How assessment works */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Assessment Process</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Evidence Portfolio and Workbook: No Exams</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The Level 4 Diploma is assessed through a combination of workplace evidence and a structured knowledge workbook. There is no formal written exam. Assessment is competence-based and designed to reflect real working activity.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                step: "1",
                title: "Online Induction",
                body: "Candidates are inducted into the qualification requirements and the evidence types needed for each competency area.",
              },
              {
                step: "2",
                title: "Tailored Assessment Plan",
                body: "Your Sygma assessor builds an assessment plan based on your current role, the training you have completed, and the evidence you already have available.",
              },
              {
                step: "3",
                title: "Evidence Collection",
                body: "Candidates gather workplace evidence and submit it through Sygma's online e-portfolio system. Hard-copy workbooks are available for those who prefer them.",
              },
              {
                step: "4",
                title: "Assessor Review and Mentoring",
                body: "Your Sygma assessor reviews your evidence submissions and provides feedback and guidance. Open day sessions at the Wigan centre can be used for face-to-face assessments.",
              },
              {
                step: "5",
                title: "Gap-Filling and Top-Up",
                body: "Where workplace evidence does not cover the full range of criteria, candidates can attend open days or in-house sessions to address specific gaps through supervised practical work.",
              },
              {
                step: "6",
                title: "Certification",
                body: "On successful completion of all units, the ProQual Level 4 Diploma certificate is awarded.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-background rounded-xl border border-border p-6">
                <div className="w-8 h-8 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center mb-4">{step}</div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Pricing</p>
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Full Assessment Support, No Hidden Fees</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sygma charges a fixed assessment fee per candidate (plus ProQual registration fees paid directly to ProQual). This covers the full assessment support package with no additional charges for re-submissions, extra sessions, or extended mentoring. Contact us for a quote.
            </p>
            <Link href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About Level 4
            </Link>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Your fee includes</p>
            <div className="space-y-3">
              {[
                "Online induction to the qualification structure and assessment process",
                "Tailored assessment plan developed around your current role and training history",
                "Full access to Sygma's online e-portfolio system and digital workbooks",
                "Full assessor support and mentoring throughout the workbook and evidence submission process",
                "Free access to Sygma's open assessment days at the Utility Mapping Training and Assessment Centre in Wigan",
                "Hard-copy workbooks available on request",
                "No additional charges for re-submissions, extra sessions, or extended mentoring",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary font-bold shrink-0 mt-0.5">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
              Fast-track and private assessment sessions at your premises are available for organisations wanting to progress groups of candidates together. Contact us for pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Qualification pathway */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Qualification Pathway</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">
            Level 4 Is the Bridge Between Foundation and Advanced Practice
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The Level 4 Diploma sits at the centre of the ProQual qualification pathway. Completing the Level 4 opens the door to the Level 5 Diploma, which is the highest operational qualification in the pathway.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-4 py-3 font-bold text-foreground">Level</th>
                  <th className="text-left px-4 py-3 font-bold text-foreground">Qualification</th>
                  <th className="text-left px-4 py-3 font-bold text-foreground">Focus</th>
                  <th className="text-left px-4 py-3 font-bold text-foreground">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-background border-b border-border">
                  <td className="px-4 py-3 font-semibold text-foreground">Level 3</td>
                  <td className="px-4 py-3">
                    <Link href="/courses/level-3-certificate" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">
                      Certificate in Utility Mapping and Surveying
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">PAS128 Quality Levels D &amp; C</td>
                  <td className="px-4 py-3 text-muted-foreground">Contact us</td>
                </tr>
                <tr className="bg-primary/10 border-b-2 border-primary">
                  <td className="px-4 py-3 font-black text-primary">Level 4</td>
                  <td className="px-4 py-3 font-bold text-foreground">
                    Diploma in Utility Mapping and Surveying{" "}
                    <span className="ml-2 inline-block bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">YOU ARE HERE</span>
                  </td>
                  <td className="px-4 py-3 text-foreground font-semibold">Advanced EM and GPR</td>
                  <td className="px-4 py-3 text-foreground font-semibold">Contact us</td>
                </tr>
                <tr className="bg-background border-b border-border">
                  <td className="px-4 py-3 font-semibold text-foreground">Level 5</td>
                  <td className="px-4 py-3">
                    <Link href="/courses/level-5-diploma" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">
                      Diploma in Utility Mapping and Surveying
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">Full utility surveying competency</td>
                  <td className="px-4 py-3 text-muted-foreground">Contact us</td>
                </tr>
                <tr className="bg-background">
                  <td className="px-4 py-3 font-semibold text-foreground">Level 6</td>
                  <td className="px-4 py-3">
                    <Link href="/courses/level-6-diploma" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">
                      Diploma in Utility Mapping and Surveying Management
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">Management and leadership</td>
                  <td className="px-4 py-3 text-muted-foreground">POA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            The Level 3 Certificate is a mandatory prerequisite for the Level 4. You cannot enrol on the Level 4 without first holding the Level 3.
          </p>
        </div>
      </section>

      {/* Related training */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Related Training</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Training That Generates Level 4 Evidence</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The Level 4 Diploma can be achieved through the assessment-only route using workplace evidence, but several Sygma training courses generate evidence that maps directly to the Level 4 assessment criteria.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "5 Day PAS128 Utility Mapping and Surveying Course",
              body: "Days 2, 3, and 4 cover advanced EM detection and GPR in depth. The course generates evidence for the ICES GEUS01 E, G, and F Part 1 competencies that underpin the Level 4 Diploma.",
              to: "/courses/5-day-pas128-surveyor",
            },
            {
              title: "Advanced EM Locator Training",
              body: "Covers RD8000 and Vivax vLoc Pro technology, signal theory, depth estimation, and advanced connection methods. Completion provides strong evidence toward the EM components of the Level 4.",
              to: "/courses/advanced-em-locator",
            },
            {
              title: "GPR Training",
              body: "Module 1 (GPR theory and practical) and Module 2 (GPS data collection and post processing in Object Mapper) together cover the GPR component of the Level 4: ICES GEUS01 F Part 1 and F Part 2.",
              to: "/courses/gpr-training",
            },
            {
              title: "TSA and ICES Utility Mapping Training Programme",
              body: "Modules 2 and 3 of this programme (ICES GEUS01 E&G and GEUS01 F Part 1) generate the classroom and practical evidence that maps directly to the Level 4 criteria.",
              to: "/courses/tsa-ices-utility-mapping",
            },
          ].map(({ title, body, to }) => (
            <div key={title} className="bg-muted/20 rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{body}</p>
              <Link
                href={to}
                className="text-primary font-semibold text-sm underline underline-offset-2 hover:text-primary/80"
              >
                View course details &#8250;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditation */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Accreditation</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Ofqual-Regulated, Nationally Recognised</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The ProQual Level 4 Diploma in Utility Mapping and Surveying is awarded by ProQual Awarding Body and regulated by Ofqual. It is listed on the Regulated Qualifications Framework (RQF) and is widely recognised by employers, principal contractors, and client organisations in the utilities, construction, and civil engineering sectors.
              </p>
              <p>
                Sygma Solutions is an approved ProQual assessment centre and the UK's leading provider of ProQual utility mapping qualification assessment, with more candidates working through the Level 4 pathway than any other centre in the country.
              </p>
            </div>
            <div className="bg-background rounded-xl border border-border p-6 space-y-3">
              {[
                "ProQual Awarding Body approved assessment centre",
                "Ofqual regulated qualification on the RQF",
                "Assessment centre based in Wigan",
                "Online and in-house assessment options available",
                "Fixed-price assessment with no hidden fees",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary font-bold shrink-0">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="em-05" width={1200} height={900} alt="Level 4 Diploma utility location training" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-04" width={1200} height={900} alt="GPR survey practical for Level 4 qualification" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-07" width={1200} height={900} alt="On-site Level 4 Diploma assessment" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

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
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Sygma</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Complete Your Level 4 With Sygma</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "ProQual Approved Centre",
              body: "Sygma is a ProQual approved assessment centre delivering more Level 4 assessments than any other provider in the UK.",
            },
            {
              title: "Specialist Assessors",
              body: "All assessors are qualified utility surveyors. They understand EM detection, GPR and what specialist practice looks like.",
            },
            {
              title: "Portfolio Support",
              body: "Your evidence comes from real work. We help you identify, structure and submit it efficiently.",
            },
            {
              title: "Evidence From Your Work",
              body: "Training from the 5 Day PAS128 course or Advanced EM training maps directly to Level 4 criteria.",
            },
            {
              title: "Independent",
              body: "No equipment to sell, no commercial bias. Assessment of your competence, nothing more.",
            },
            {
              title: "Career Progression",
              body: "Level 4 sits between operative and management qualification. The natural step after Level 3.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-muted/30 rounded-lg border border-border p-5">
              <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CITB Employer Network */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="border border-border rounded-lg bg-card p-8">
            <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Funding Support</p>
            <h2 className="text-2xl font-bold text-foreground mb-4">CITB Employer Network</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Sygma is a CITB Approved Training Organisation. If your business is registered with CITB, speak to your CITB Employer Network adviser about funding support for this qualification. Funding is not guaranteed and varies by employer, but we can help you navigate the process.</p>
            <p className="text-muted-foreground leading-relaxed">Contact us for guidance on how to access available support.</p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Related Courses</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Expand Your Qualifications</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/courses/level-3-certificate" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">Level 3 Certificate</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">The mandatory foundation qualification covering desktop surveys and site reconnaissance.</p>
          </Link>
          <Link href="/courses/level-5-diploma" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">Level 5 Diploma</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">The highest operational qualification, covering total stations, GNSS, geometric principles and ICT.</p>
          </Link>
          <Link href="/courses/gpr-training" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">GPR Training</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Specialist ground penetrating radar training with Object Mapper data processing and post-processing.</p>
          </Link>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About the Level 4 Diploma</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Full assessor support, no hidden fees. Wigan centre, online, or in-house. Contact us to discuss your current qualifications, pricing, and get started.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About Level 4
            </Link>
            <Link href="/courses/level-5-diploma"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View Level 5 Diploma
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

