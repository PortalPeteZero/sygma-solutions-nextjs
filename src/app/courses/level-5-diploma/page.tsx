import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import InnerPageHero from "@/components/InnerPageHero";
import { CheckCircle } from "lucide-react";

const faqs = [
            {
              q: "Do I need Level 3 and Level 4 before starting the Level 5?",
              a: "Yes. Both the ProQual Level 3 Certificate in Utility Mapping and Surveying and the Level 4 Diploma in Utility Mapping and Surveying are mandatory prerequisites for enrolment on the Level 5 Diploma. You cannot start the Level 5 without holding both preceding qualifications.",
            },
            {
              q: "What is the fastest way to complete the Level 5?",
              a: "The fastest route for experienced utility surveyors is through Sygma's 5 Day PAS128 Surveyor Course combined with workplace evidence for the higher-level competency areas. The 5-day course generates evidence across ICES GEUS01 A through F Part 1. If you already have workplace evidence for GEUS02 through GEUS04 (surveying instruments, geometric principles, and ICT), you can move very quickly through the evidence portfolio.",
            },
            {
              q: "How does the Level 5 differ from the Level 4?",
              a: "The Level 4 Diploma focuses on advanced EM detection and GPR (ICES GEUS01 E, G, F). The Level 5 extends this to include surveying instruments (total stations, GNSS), geometric principles (3D coordinate geometry, least squares, error propagation), and ICT for 3D utility data. The Level 5 is the qualification that reflects full professional competence across the entire utility mapping and surveying discipline.",
            },
            {
              q: "Does the Level 5 Diploma support professional membership of TSA or CICES?",
              a: "The Level 5 Diploma, combined with the TSA and ICES Utility Mapping Training Programme, provides evidence that aligns with ICES GEUS competency units and supports applications for professional membership of CICES and TSA. The qualification is widely recognised by both organisations as evidence of professional competence in utility surveying.",
            },
            {
              q: "Can I use my existing survey work as evidence for the Level 5?",
              a: "Yes. Evidence from your current role, including survey reports, Quality Level A deliverables, GPS records, CAD outputs, and instrument operation logs, can all form part of your Level 5 evidence portfolio. Our tailored assessment plan will identify which workplace evidence is relevant and what additional evidence may be needed to fill any gaps.",
            },
            {
              q: "Is the assessment fee all-inclusive?",
              a: "The Sygma assessment fee covers the complete assessment service: induction, tailored assessment plan, e-portfolio access, workbooks, assessor support, mentoring, and open day sessions. ProQual registration fees are separate and paid directly to ProQual. There are no additional Sygma charges. Contact us for a quote.",
            },
          ];

export const metadata: Metadata = {
  title: 'ProQual Level 5 Utility Mapping Course | Sygma Solutions',
  description: 'The highest operational qualification in utility mapping and surveying. Prove full professional competency across detection, surveying, and ICT.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/level-5-diploma' },
  openGraph: {
    title: 'ProQual Level 5 Utility Mapping Course | Sygma Solutions',
    description: 'The highest operational qualification in utility mapping and surveying. Prove full professional competency across detection, surveying, and ICT.',
    url: 'https://sygma-solutions.com/courses/level-5-diploma',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/gpr-05', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Level5Diploma() {
  return (
    <>
                {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "ProQual Level 5 Diploma in Utility Mapping and Surveying", description: "The highest operational qualification in utility mapping and surveying. Prove full professional competency across detection, surveying instruments, geometric principles, and ICT. Contact us to discuss enrolment and pricing.", url: "/courses/level-5-diploma", credential: "Level 5 Diploma in Utility Surveying", duration: "Part-time", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/utility-mapping-surveying" }, { label: "Level 5 Diploma" }]) }} />
      <InnerPageHero
        eyebrow="Qualifications"
        headline="ProQual Level 5 Diploma in Utility Mapping and Surveying"
        sub="The highest operational qualification in utility mapping and surveying. Prove full professional competency across detection, surveying instruments, geometric principles, and ICT. Contact us to discuss enrolment and pricing."
        images={[
          "em-06",
          "em-02",
          "em-05",
        ]}
        alts={["Electromagnetic survey techniques practised during Level 5 diploma training", "Professional GPR survey methodology taught on the ProQual Level 5 course", "Advanced ground penetrating radar interpretation during Level 5 utility mapping"]}
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "Level 5 Diploma" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Qualification", "ProQual Diploma"],
            ["Level", "Level 5 (Ofqual-regulated)"],
            ["Prerequisites", "Level 3 + Level 4 required"],
            ["Pricing", "Contact us for pricing"],
            ["Equipment", "MALA GPR, Leica DSX, Radiodetection RD8200"],
            ["Delivery", "Wigan, 5-day fast-track, in-house"],
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
            <Image src="gpr-02" width={800} height={600} alt="Level 5 Diploma utility mapping - practical session" sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="gpr-09" width={800} height={600} alt="Level 5 Diploma utility mapping - hands-on assessment" sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="gpr-10" width={800} height={600} alt="Level 5 Diploma utility mapping - on-site delivery" sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
        </div>
      </section>
      {/* What is Level 5 */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">The Qualification</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">
              What Is the ProQual Level 5 Diploma in Utility Mapping and Surveying?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The ProQual Level 5 Diploma in Utility Mapping and Surveying is an Ofqual-regulated qualification that demonstrates the highest level of operational competence in utility mapping and surveying. It is the third and highest diploma in the ProQual utility mapping pathway, sitting above the Level 3 Certificate and the Level 4 Diploma.
              </p>
              <p>
                The Level 5 Diploma covers a broader range of technical disciplines than the Level 4. In addition to the advanced EM detection and GPR competencies evidenced at Level 4, it extends into surveying instruments and positioning (total stations, GNSS in static and kinematic modes), geometric principles (3D coordinate geometry, scale factors, least squares adjustment), and ICT for utility mapping (digital data transfer, CAD outputs, and production of 3D utility data sets).
              </p>
              <p>
                Together with the Level 4 evidence base, the Level 5 Diploma covers the full set of ICES competency units required for professional membership pathways with TSA and CICES.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-primary/5 border border-primary rounded-xl p-6 mb-4">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Fast-Track Option</p>
              <p className="text-sm font-bold text-foreground mb-2">5 Day PAS128 Surveyor Course Route</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Experienced utility surveyors can use Sygma's 5 Day PAS128 Surveyor Course as the core of their Level 5 evidence portfolio. The course covers ICES GEUS01 A through F Part 1 (combined with workplace evidence for GEUS02 through GEUS04, the Level 5 Diploma becomes achievable within a realistic timeline).
              </p>
              <Link href="/courses/5-day-pas128-surveyor"
                className="text-primary font-semibold text-sm underline underline-offset-2 hover:text-primary/80"
              >
                View the 5 Day PAS128 Surveyor Course &#8250;
              </Link>
            </div>
            <div className="bg-muted/30 rounded-xl border border-border p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">ICES Coverage</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">GEUS01 E, G, F:</span> Advanced EM and GPR (from Level 4)</p>
                <p><span className="font-semibold text-foreground">GEUS02 A-G:</span> Surveying instruments (total station, GNSS)</p>
                <p><span className="font-semibold text-foreground">GEUS03 A-E:</span> Geometric principles</p>
                <p><span className="font-semibold text-foreground">GEUS04 A-D:</span> ICT for utility mapping</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Full-width image */}
      <div className="w-full overflow-hidden aspect-[4/3] md:aspect-[16/9] bg-muted">
        <Image src="gpr-03" width={1200} height={900} alt="Level 5 Diploma utility mapping - live training environment" sizes="100vw" className="w-full h-full object-contain" />
      </div>

      {/* Who it's for */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Who Is This Qualification For?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Senior Utility Surveyors",
                body: "Surveyors who carry out PAS128 Quality Level A verification surveys using total stations, GNSS, or other precise positioning equipment and want the qualification to match their operational level.",
              },
              {
                title: "Survey Team Leaders and Technical Managers",
                body: "Team leaders or technical managers who need a qualification that reflects their full operational competence and the scope of technical work they oversee.",
              },
              {
                title: "TSA/ICES Programme Candidates",
                body: "Candidates working through the full TSA and ICES Utility Mapping Training Programme (Modules 1 to 7) who want to convert that training into the highest ProQual operational qualification.",
              },
              {
                title: "Professional Membership Applicants",
                body: "Professionals seeking qualification evidence to support applications for CICES membership, TSA membership, or CPD records.",
              },
              {
                title: "PAS128 Quality Level A Organisations",
                body: "Organisations that tender for PAS128 Quality Level A contracts where demonstrating qualified personnel is a requirement.",
              },
              {
                title: "5 Day PAS128 Course Alumni",
                body: "Candidates who have attended the 5 Day PAS128 Surveyor Course and want to formalise that training through an Ofqual-regulated diploma using the fast-track route.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 bg-amber-50 dark:bg-amber-950/20 border border-border rounded-lg p-4">
            <span className="font-bold text-foreground">Entry requirements:</span> ProQual Level 3 Certificate in Utility Mapping and Surveying and Level 4 Diploma in Utility Mapping and Surveying (or equivalent evidence of Level 4 competence agreed with the awarding body). Both qualifications must be in place before enrolment on the Level 5. Candidates must not skip levels.
          </p>
        </div>
      </section>

      {/* Competency table */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Competency Framework</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">The Complete Utility Surveyor Competency Framework</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The Level 5 Diploma covers all competency areas in the ProQual utility mapping pathway. The evidence base aligns with the full ICES GEUS framework used in Sygma's TSA and ICES Utility Mapping Training Programme.
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
                  area: "Advanced EM detection (from Level 4)",
                  evidence: "EM equipment operation; signal interpretation; depth estimation; connection methods; clamp, capacitance, induction, nulling",
                  ices: "GEUS01 E and G",
                },
                {
                  area: "Ground penetrating radar Unit A (from Level 4)",
                  evidence: "GPR setup and operation; radargram interpretation; hyperbola identification; depth and velocity",
                  ices: "GEUS01 F Part 1",
                },
                {
                  area: "GPR post processing and data management",
                  evidence: "GPS data collection in field; grid surveys; Object Mapper or equivalent post processing; CAD export of 3D utility data",
                  ices: "GEUS01 F Part 2",
                },
                {
                  area: "Surveying instruments: total station",
                  evidence: "Setup and operation; traverses; observations; data recording; coordinate computation",
                  ices: "GEUS02 A-G",
                },
                {
                  area: "Surveying instruments: GNSS",
                  evidence: "Static and kinematic GNSS surveys; network and PPK processing; accuracy assessment; datum transformations",
                  ices: "GEUS02 A-G",
                },
                {
                  area: "Geometric principles",
                  evidence: "3D coordinate geometry; scale factors; least squares adjustment; error propagation; transformations",
                  ices: "GEUS03 A-E",
                },
                {
                  area: "ICT for utility mapping",
                  evidence: "Data transfer protocols; CAD software for utility survey outputs; 3D utility data sets with digital ground models",
                  ices: "GEUS04 A-D",
                },
                {
                  area: "PAS128 Quality Level A survey deliverables",
                  evidence: "Full Quality Level A verification survey outputs including confirmation of detected service positions using precise positioning",
                  ices: "All GEUS units",
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
          Candidates who have completed Sygma's TSA and ICES Utility Mapping Training Programme (Modules 1 through 7) will have generated evidence across all of the above competency areas.
        </p>
      </section>

      {/* Fast-track */}
      <section className="bg-primary/5 border-y border-primary/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Fast-Track Route</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">
            Accelerate Your Level 5 with the 5 Day PAS128 Surveyor Course
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            For experienced utility surveyors who want to progress through the Level 5 Diploma efficiently, Sygma offers a fast-track route built around the 5 Day PAS128 Utility Mapping and Surveying Course.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The 5-day course is a TSA, CICES, and EUSR approved intensive programme that covers the full range of utility surveying skills in five days of structured training and assessment. The course provides evidence toward ICES GEUS01 A-D, E&amp;G, and F Part 1 and can include the Level 3 add-on.
              </p>
              <p>
                Combined with workplace evidence for GEUS01 F Part 2 and GEUS02 through GEUS04, the Level 5 Diploma becomes achievable within a realistic timeline for experienced practitioners.
              </p>
              <Link href="/courses/5-day-pas128-surveyor"
                className="inline-flex items-center px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
              >
                View the 5 Day PAS128 Course
              </Link>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">This fast-track route is most suitable for:</p>
              <div className="space-y-2">
                {[
                  "Surveyors who already have significant practical experience in EM detection, GPR, and survey instrument use",
                  "Those who have access to workplace evidence from Quality Level A surveys or similar positioning work",
                  "Professionals who want to formalise their skills without going through a full classroom programme from scratch",
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "ProQual Level 5 Diploma in Underground Utility Mapping",
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
          <Image src="gpr-04" width={1200} height={900} alt="Level 5 Diploma practical training with equipment" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-08" width={1200} height={900} alt="GPR survey training for Level 5 qualification" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-06" width={1200} height={900} alt="Advanced utility detection assessment" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* How assessment works */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Assessment Process</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Evidence Portfolio and Workbook: No Exams</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The Level 5 Diploma is assessed through a structured evidence portfolio covering all competency areas. There is no formal written exam. Assessment is competence-based and can be completed at a pace that fits around work commitments.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              title: "Online Induction",
              body: "Introduction to the Level 5 qualification structure and what evidence is needed for each unit.",
            },
            {
              step: "2",
              title: "Tailored Assessment Plan",
              body: "Your Sygma assessor builds a personalised plan that maps your existing training, certifications, and workplace activity against the Level 5 criteria and identifies any gaps.",
            },
            {
              step: "3",
              title: "Evidence Submission",
              body: "Candidates submit through Sygma's online e-portfolio system. Evidence can include survey reports, field records, post processing outputs, CAD files, and training certificates.",
            },
            {
              step: "4",
              title: "Assessor Review and Open Days",
              body: "Sygma's qualified assessors review submissions and provide feedback. Open day sessions at the Wigan centre are available for face-to-face assessments, practical verification, and mentoring.",
            },
            {
              step: "5",
              title: "Gap-Filling",
              body: "Where workplace evidence does not cover the full criteria, candidates can attend open days or in-house sessions to address specific gaps through supervised practical work.",
            },
            {
              step: "6",
              title: "Certification",
              body: "On successful completion of all units, the ProQual Level 5 Diploma certificate is awarded by ProQual Awarding Body.",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="bg-muted/20 rounded-xl border border-border p-6">
              <div className="w-8 h-8 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center mb-4">{step}</div>
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Pricing</p>
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Full Assessment Support, No Hidden Fees</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sygma charges a fixed assessment fee per candidate (plus ProQual registration fees). There are no additional charges for re-submissions, extended mentoring, or extra assessments. Contact us for a quote.
              </p>
              <Link href="/contact#enquiry-form"
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
              >
                Enquire About Level 5
              </Link>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Your fee includes</p>
              <div className="space-y-3">
                {[
                  "Online induction to the Level 5 structure and requirements",
                  "Tailored assessment plan built around your training history, workplace evidence, and career goals",
                  "Full access to the Sygma e-portfolio system and digital workbooks",
                  "Full assessor support and mentoring from qualified utility mapping assessors",
                  "Free access to open assessment days at the Wigan Utility Mapping Training and Assessment Centre",
                  "No additional charges for re-submissions, extended mentoring, or extra assessments",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary font-bold shrink-0 mt-0.5">&#10003;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                Fast-track and private assessment programmes at your premises are available for groups. Contact us for pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification pathway */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Qualification Pathway</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">
          Level 5: The Highest Operational Qualification in Utility Mapping
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Both Level 3 and Level 4 are required before enrolment on the Level 5. Candidates must not skip levels.
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
              <tr className="bg-background border-b border-border">
                <td className="px-4 py-3 font-semibold text-foreground">Level 4</td>
                <td className="px-4 py-3">
                  <Link href="/courses/level-4-diploma" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">
                    Diploma in Utility Mapping and Surveying
                  </Link>
                </td>
                <td className="px-4 py-3 text-muted-foreground">Advanced EM and GPR</td>
                <td className="px-4 py-3 text-muted-foreground">Contact us</td>
              </tr>
              <tr className="bg-primary/10 border-b-2 border-primary">
                <td className="px-4 py-3 font-black text-primary">Level 5</td>
                <td className="px-4 py-3 font-bold text-foreground">
                  Diploma in Utility Mapping and Surveying{" "}
                  <span className="ml-2 inline-block bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">YOU ARE HERE</span>
                </td>
                <td className="px-4 py-3 text-foreground font-semibold">Full competency (inc. total station, GNSS, geometric principles, ICT)</td>
                <td className="px-4 py-3 text-foreground font-semibold">Contact us</td>
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
      </section>

      {/* Related training */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Related Training</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Training That Generates Level 5 Evidence</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Several Sygma training courses generate evidence that maps directly to the Level 5 competency framework.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "5 Day PAS128 Utility Mapping and Surveying Course",
                body: "The most efficient single training event for generating Level 5 evidence. Days 1 through 5 cover PAS128 D-C, EM, advanced EM, GPR, and assessment. Provides evidence for ICES GEUS01 A through F Part 1 and can include the Level 3 add-on.",
                to: "/courses/5-day-pas128-surveyor",
              },
              {
                title: "TSA and ICES Utility Mapping Training Programme",
                body: "Modules 5, 6, and 7 cover surveying instruments (GEUS02), geometric principles (GEUS03), and ICT (GEUS04) (the components unique to Level 5 beyond the Level 4 requirements). Completing all seven modules provides evidence for the full ProQual Level 5 Diploma.",
                to: "/courses/tsa-ices-utility-mapping",
              },
              {
                title: "GPR Training (Module 2 Post Processing)",
                body: "Object Mapper training, GPS integration, and CAD export provide evidence for ICES GEUS01 F Part 2, which is required at Level 5 but not Level 4.",
                to: "/courses/gpr-training",
              },
            ].map(({ title, body, to }) => (
              <div key={title} className="bg-background rounded-xl border border-border p-6">
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
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-07" width={1200} height={900} alt="Level 5 Diploma utility mapping training" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-01" width={1200} height={900} alt="Ground penetrating radar practical session" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="gpr-05" width={1200} height={900} alt="On-site Level 5 qualification assessment" sizes="100vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Why Sygma */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Sygma</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Complete Your Level 5 With Sygma</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "ProQual Approved Centre",
              body: "Sygma is a ProQual approved assessment centre with proven expertise in delivering Level 5 assessments.",
            },
            {
              title: "Specialist Assessors",
              body: "All assessors are qualified utility surveyors with real-world experience in total station, GNSS and survey instrument use.",
            },
            {
              title: "Portfolio Support.",
              body: "Your evidence comes from your workplace. We help you structure survey reports, GPS records, and CAD outputs efficiently.",
            },
            {
              title: "Management-Level Qualification",
              body: "Level 5 covers utility survey project management and team leadership. Position yourself for progression.",
            },
            {
              title: "Independent.",
              body: "No equipment to sell, no commercial bias. Pure assessment of your professional competence.",
            },
            {
              title: "Evidence From Your Work",
              body: "Real survey work, instrument operation records and project deliverables form your portfolio.",
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
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Expand Your Skills and Qualifications</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/courses/level-4-diploma" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">Level 4 Diploma</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Advanced EM detection and GPR specialist qualification. The prerequisite for Level 5.</p>
          </Link>
          <Link href="/courses/level-6-diploma" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">Level 6 Diploma</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Management and leadership qualification for survey operations, projects and teams.</p>
          </Link>
          <Link href="/courses/online-level-5-diploma" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">Online Level 5 Diploma</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Flexible online route through the Level 5, suitable for remote candidates and workplace learners.</p>
          </Link>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About the Level 5 Diploma</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Full assessor support, no hidden fees. Wigan centre, 5-day fast-track option, or in-house. Contact us to discuss your pathway, pricing, and get started.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About Level 5
            </Link>
            <Link href="/courses/level-6-diploma"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View Level 6 Diploma
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


