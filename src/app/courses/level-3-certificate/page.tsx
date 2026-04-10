import Link from 'next/link';
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import InnerPageHero from "@/components/InnerPageHero";
import { CheckCircle } from "lucide-react";
import type { Metadata } from 'next';
import Image from 'next/image';

const faqs = [
            {
              q: "Is the Level 3 Certificate mandatory before I can do Level 4 or Level 5?",
              a: "Yes. The ProQual Level 3 Certificate in Utility Mapping and Surveying is a mandatory prerequisite for entry into the Level 4 or Level 5 Diploma. You cannot enrol on the higher levels without first holding the Level 3.",
            },
            {
              q: "Can I use evidence from my current job rather than attending a training course?",
              a: "Yes. The Level 3 Certificate is assessed through work-based evidence, so if you are already working in utility surveying, much of the evidence you need can come from your current role. Our assessors will help you identify what evidence to collect and how to present it. A 2-day structured training session is also available for candidates who want a classroom-based route to the evidence they need.",
            },
            {
              q: "How long does it take to complete the Level 3 Certificate?",
              a: "The timescale varies depending on how much workplace evidence you already have available. Some candidates who are already working in utility surveying can complete within a few weeks of induction. Others take a few months to build up the required evidence portfolio. Your tailored assessment plan will give you a realistic timeline based on your individual situation.",
            },
            {
              q: "What does the assessment fee include?",
              a: "The fixed fee covers your full assessment support including induction, tailored assessment plan, e-portfolio access, workbooks, assessor support, mentoring, and open day attendance. It does not include the ProQual registration fee, which is a separate charge paid directly to ProQual. There are no additional fees for extra assessments or re-submissions. Contact us for a quote.",
            },
            {
              q: "Can my employer put multiple staff through the Level 3 together?",
              a: "Yes. We offer fast-track and private assessment sessions for organisations who want to put groups through together. This can be delivered at your premises or at our Wigan centre. Contact us for group pricing.",
            },
            {
              q: "Does completing the Level 3 Certificate mean I can carry out PAS128 surveys?",
              a: "The Level 3 Certificate demonstrates assessed competence in carrying out PAS128 Quality Level D desktop surveys and Quality Level C site reconnaissance. Whether a certificate-holder can carry out surveys independently is a matter for their employer and the relevant survey specification. The qualification is the recognised professional standard for these survey types.",
            },
          ];

export const metadata: Metadata = {
  title: 'ProQual Level 3 Utility Mapping Course | Sygma Solutions',
  description: 'ProQual Level 3 Certificate in Utility Mapping and Surveying. Ofqual-regulated qualification to locate underground utilities and buried services.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/level-3-certificate' },
  openGraph: {
    title: 'ProQual Level 3 Utility Mapping Course | Sygma Solutions',
    description: 'ProQual Level 3 Certificate in Utility Mapping and Surveying. Ofqual-regulated qualification to locate underground utilities and buried services.',
    url: 'https://sygma-solutions.com/courses/level-3-certificate',
    siteName: 'Sygma Solutions',
    type: 'website',
  },
};

export default function Level3Certificate() {
  return (
    <>
          
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "ProQual Level 3 Certificate in Utility Mapping and Surveying", description: "The nationally recognised, Ofqual-regulated entry qualification for utility surveyors. Full assessor support throughout. Contact us to discuss enrolment and pricing.", url: "/courses/level-3-certificate", credential: "Level 3 Certificate in Utility Mapping", duration: "Part-time", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/utility-mapping-surveying" }, { label: "Level 3 Certificate" }]) }} />
<InnerPageHero
        eyebrow="Qualifications"
        headline="ProQual Level 3 Certificate in Utility Mapping and Surveying"
        sub="The nationally recognised, Ofqual-regulated entry qualification for utility surveyors. Full assessor support throughout. Contact us to discuss enrolment and pricing."
        images={[
          "MALA-GPR-11",
          "MALA-GPR-22",
          "Advanced-EM-04",
        ]}
        alts={["Advanced electromagnetic locating techniques during ProQual Level 3 training", "MALA ground penetrating radar unit used in Level 3 utility mapping coursework", "Advanced electromagnetic locating techniques during ProQual Level 3 training"]}
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "Level 3 Certificate" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Qualification Type", "ProQual Certificate"],
            ["Level", "Level 3 (Ofqual-regulated)"],
            ["Duration", "2 days training + assessment"],
            ["Pricing", "Contact us for pricing"],
            ["Delivery", "Wigan centre, online and in-house"],
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
          <Image src="MALA-GPR-11" width={1200} height={800} alt="Level 3 Certificate utility mapping - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
          <Image src="MALA-GPR-11" width={1200} height={800} alt="Level 3 Certificate utility mapping - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
          <Image src="Advanced-EM-05" width={1200} height={800} alt="Level 3 Certificate utility mapping - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
        </div>
      </section>
      {/* What is it */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">The Qualification</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">What Is the ProQual Level 3 Certificate?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The ProQual Level 3 Certificate in Utility Mapping and Surveying is an Ofqual-regulated qualification awarded by ProQual Awarding Body. It is the mandatory entry-level qualification on the ProQual utility mapping pathway and must be completed before progressing to the Level 4 or Level 5 Diploma.
              </p>
              <p>
                The qualification is built around two mandatory units covering the core skills of utility surveying at PAS128 Quality Levels D (desktop survey) and C (site reconnaissance):
              </p>
              <div className="space-y-3">
                <div className="bg-muted/30 rounded-lg border border-border p-4">
                  <p className="text-sm font-bold text-foreground mb-1">Unit Y/507/1367: Utility Identification and Site Reconnaissance</p>
                  <p className="text-sm text-muted-foreground">Colour coding of buried utilities, regulations for locating services, reading maps and drawings, identifying detection methods, and producing marked-up drawings.</p>
                </div>
                <div className="bg-muted/30 rounded-lg border border-border p-4">
                  <p className="text-sm font-bold text-foreground mb-1">Unit H/507/1369: Carry Out Desktop Surveys and Communicate Findings</p>
                  <p className="text-sm text-muted-foreground">Establishing survey purpose, identifying data sources, compiling desktop survey data, preparing drawings using appropriate software, and applying quality assurance procedures.</p>
                </div>
              </div>
              <p>
                Sygma Solutions is the UK's leading training and assessment provider for this qualification. We offer fixed and transparent pricing with no additional or hidden fees for extra assessments. The ProQual Level 3 Certificate in Utility Mapping and Surveying validates practical skills and core knowledge in how to locate underground utilities, identify buried services, and interpret utility survey information. It enhances employment opportunities in utility companies and civil engineering firms for engineers, surveyors, and operatives working across the UK including Northern Ireland.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Qualification at a Glance</p>
            {[
              ["Awarding Body", "ProQual Awarding Body"],
              ["Regulation", "Ofqual-regulated (RQF)"],
              ["Level", "Level 3"],
              ["Units", "2 mandatory units"],
              ["Assessment", "Work-based evidence + knowledge questions book"],
              ["Pricing", "Contact us to discuss enrolment and pricing"],
              ["Delivery", "Wigan centre, online or in-house at your premises"],
              ["Equipment", "MALA GPR (HDR/HDR Pro), Leica DSX, Radiodetection RD8200 series, and CAT4+ available at Sygma's training centres"],
              ["Prerequisite for", "ProQual Level 4 and Level 5 Diploma"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="eyebrow text-muted-foreground w-32 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <Image src="MALA-GPR-19" width={1200} height={800} alt="Level 3 Certificate utility mapping - electromagnetic locator training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-center" />
      </div>

      {/* Who it's for */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Who Is This Qualification For?</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Trainee Utility Surveyors",
                body: "Individuals starting their career in underground utility location and mapping who need a nationally recognised entry qualification.",
              },
              {
                title: "Site Operatives and Supervisors",
                body: "Experienced operatives, supervisors and engineers who regularly work with utility information and survey drawings and want formal accreditation.",
              },
              {
                title: "Utility Locators Cross-Training",
                body: "Existing utility locators looking to cross-train into the utility mapping and surveying discipline.",
              },
              {
                title: "Apprentices and New Starters",
                body: "Those on a ProQual qualification pathway working towards Level 4 or Level 5 who need to complete the mandatory Level 3 first.",
              },
              {
                title: "Survey and Project Professionals",
                body: "Any individual whose role involves requesting, interpreting or managing PAS128 surveys at Quality Levels D and C.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
            There are no formal entry requirements for the Level 3 Certificate, though candidates should have some familiarity with utility surveying work or be enrolled on a structured training programme.
          </p>
        </div>
      </section>

      {/* Assessment process */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Assessment</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Assessment Process: No Exams, No Surprises</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The Level 3 Certificate is assessed through work-based evidence and a structured knowledge questions book. There is no formal written exam. The assessment process is designed to be achievable alongside normal working activity.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {[
            {
              step: "1",
              title: "Questions Book",
              body: "Each candidate completes a knowledge questions book covering the assessment criteria for both units. This is populated through classroom training, group discussion, and self-study.",
            },
            {
              step: "2",
              title: "Desktop Survey Submission",
              body: "A desktop survey submission demonstrating the ability to compile utility records, contact network operators, and produce a survey drawing that meets PAS128 Quality Level D requirements.",
            },
            {
              step: "3",
              title: "Site Reconnaissance Submission",
              body: "A site reconnaissance submission demonstrating the ability to visit a site, identify visible utility indicators, produce marked-up drawings, and report on observations to PAS128 Quality Level C.",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="bg-background rounded-xl border border-border p-6">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-black text-sm flex items-center justify-center mb-4">{step}</div>
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-muted/30 p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Where submitted workplace evidence does not cover the full range of assessment criteria, additional knowledge evidence can be provided to cover any gaps. Sygma's assessors will work with each candidate to identify the most efficient route through.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "ProQual Level 3 Certificate in Locating Underground Utilities",
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
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <Image src="Advanced-EM-04" width={1200} height={800} alt="Level 3 Certificate practical training assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-28" width={1200} height={800} alt="Utility survey equipment training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="Utility-Mapping-01" width={1200} height={800} alt="Level 3 qualification hands-on demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Pricing */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">What Is Included</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Full Assessment Support, No Hidden Fees</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Sygma charges a fixed assessment fee per candidate (plus ProQual registration fees). This is an all-in fee with no additional charges for extra assessments, re-submissions, or extended support. Contact us for a quote.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              "Online induction to the qualification and the assessment process",
              "A tailored assessment plan built around your individual needs, experience, and working schedule",
              "Full access to the online e-portfolio system and digital workbooks (hard-copy workbooks also available)",
              "Full assessor support and mentoring throughout the workbook process, from initial submission to certification",
              "Free access to Sygma's open assessment days at the Utility Mapping Training and Assessment Centre in Wigan",
              "Online support sessions available for candidates who cannot attend in person",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <span className="text-accent font-black text-lg shrink-0">&#10003;</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-amber-50 dark:bg-amber-950/20 p-5">
            <p className="text-sm font-bold text-foreground mb-1">ProQual registration fees</p>
            <p className="text-sm text-muted-foreground">
              ProQual registration fees are a separate charge paid directly to ProQual. These are fixed and transparent and will be confirmed at the time of booking. Fast-track and private assessment sessions at a customer's premises are also available for groups. Contact us for pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Qualification pathway */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Qualification Pathway</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">The Level 3 Is Just the Start</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The ProQual Level 3 Certificate in Utility Mapping and Surveying is the mandatory entry point to the full ProQual utility mapping qualification pathway. There is no Level 3 Diploma at this stage. The Level 3 Certificate is the required qualification before progressing to the Level 4 Diploma and Level 5 Diploma. Sygma provides a structured training programme and assessment support at every level, helping engineers and surveyors locate underground utilities and build their utility surveying careers.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-5 py-3 font-bold">Level</th>
                <th className="text-left px-5 py-3 font-bold">Qualification</th>
                <th className="text-left px-5 py-3 font-bold">Focus</th>
                <th className="text-left px-5 py-3 font-bold">Price</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  level: "Level 3",
                  qual: "Certificate in Utility Mapping and Surveying",
                  to: null,
                  focus: "PAS128 Quality Levels D and C",
                  price: "Contact us",
                  highlight: true,
                },
                {
                  level: "Level 4",
                  qual: "Diploma in Utility Mapping and Surveying",
                  to: "/courses/level-4-diploma",
                  focus: "Advanced EM location and GPR specialist",
                  price: "Contact us",
                  highlight: false,
                },
                {
                  level: "Level 5",
                  qual: "Diploma in Utility Mapping and Surveying",
                  to: "/courses/level-5-diploma",
                  focus: "Full utility surveying competency",
                  price: "Contact us",
                  highlight: false,
                },
                {
                  level: "Level 6",
                  qual: "Diploma in Utility Mapping and Surveying Management",
                  to: "/courses/level-6-diploma",
                  focus: "Management and leadership",
                  price: "POA",
                  highlight: false,
                },
              ].map(({ level, qual, to, focus, price, highlight }, i) => (
                <tr key={i} className={highlight ? "bg-accent/10 border-l-4 border-l-accent" : i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-5 py-3 font-bold text-foreground">{level}</td>
                  <td className="px-5 py-3 text-foreground">
                    {to ? (
                      <Link href={to} className="text-primary underline underline-offset-2">{qual}</Link>
                    ) : (
                      <span className="font-semibold">{qual} <span className="text-accent text-xs font-bold uppercase ml-1">You are here</span></span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{focus}</td>
                  <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">
          The Level 3 Certificate is a mandatory prerequisite for entry into the Level 4 or Level 5 Diploma. Candidates cannot skip this level.
        </p>
      </section>

      {/* Accreditation */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Accreditation</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">ProQual Awarding Body and Ofqual Regulation</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The ProQual Level 3 Certificate in Utility Mapping and Surveying is awarded by ProQual Awarding Body. The qualification is regulated by Ofqual, meaning it is recognised on the national Regulated Qualifications Framework (RQF) and carries genuine professional weight across the utilities, construction, and civil engineering sectors.
              </p>
              <p>
                Sygma Solutions is an approved ProQual assessment centre for the ProQual Level 3 Certificate in Utility Mapping and Surveying and all higher level qualifications. We have delivered ProQual utility mapping and surveying training and assessment since the qualification was introduced and have more assessed candidates on the Level 3 Certificate, Level 4 Diploma and Level 5 Diploma pathways than any other provider in the UK.
              </p>
              <p>
                Employers across the industry recognise the ProQual qualification pathway as the leading professional credential for utility surveyors.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Wigan Training and Assessment Centre</p>
              <h3 className="text-xl font-black mb-4 text-foreground">The UK's Only Dedicated Utility Mapping Assessment Centre</h3>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <p>
                  All Level 3 Certificate assessment support, open days, and mentoring sessions are delivered from Sygma's Utility Mapping Training and Assessment Centre in Wigan. This is the only facility in the UK dedicated exclusively to utility mapping and surveying training and assessment.
                </p>
                <p>
                  Open assessment days are available at the Wigan centre throughout the year. Delegates can attend for face-to-face assessments, one-to-one mentoring, workbook support sessions, and top-up training in specific technical areas such as EM detection and GPR where needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training links */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Training and Assessment</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Need Training Before Assessment?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The ProQual Level 3 Certificate in Utility Mapping and Surveying can be achieved through the assessment-only route using workplace evidence, or combined with structured training courses for the fastest route to certification. Both routes cover how to locate underground utilities and buried services in construction and utility surveying environments.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-background rounded-xl border border-border p-6">
            <h3 className="font-bold text-foreground mb-3">
              <Link href="/courses/5-day-pas128-surveyor" className="text-primary underline underline-offset-2">5 Day PAS128 Surveyor Course</Link>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Includes an optional ProQual Level 3 Certificate add-on. Delegates who complete the 5-day course can sit the Level 3 assessment as part of the same booking. The course provides the classroom training and practical evidence needed to complete the workbook and submit the required evidence.
            </p>
          </div>
          <div className="bg-background rounded-xl border border-border p-6">
            <h3 className="font-bold text-foreground mb-3">
              <Link href="/courses/tsa-ices-utility-mapping" className="text-primary underline underline-offset-2">TSA and ICES Utility Mapping Programme</Link>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Module 1 (Desktop Survey and Site Reconnaissance, ICES GEUS01 A-D) provides evidence that directly maps to the Level 3 Certificate criteria. For those building towards the full ICES pathway, this is the natural route.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Comparison</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Level 3 Certificate vs Other Entry Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-5 py-3 font-bold">Feature</th>
                  <th className="text-center px-4 py-3 font-bold">ProQual Level 3</th>
                  <th className="text-center px-4 py-3 font-bold">PAS128 Awareness</th>
                  <th className="text-center px-4 py-3 font-bold">5 Day Course Only</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ofqual-regulated qualification", "Yes", "No", "No"],
                  ["ProQual qualification certificate", "Yes", "No", "No"],
                  ["Gateway to Level 4 and Level 5", "Yes (mandatory prerequisite)", "No", "No"],
                  ["Covers PAS128 Quality Levels D and C", "Yes", "Awareness only", "Yes, plus B and GPR"],
                  ["Fixed-price assessment", "Yes", "N/A", "N/A"],
                ].map(([feature, l3, awareness, fiveDay], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-5 py-3 text-foreground font-medium">{feature}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{l3}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{awareness}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{fiveDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <Image src="Advanced-EM-04" width={1200} height={800} alt="Level 3 Certificate training with equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-28" width={1200} height={800} alt="Utility detection practical assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="Utility-Mapping-01" width={1200} height={800} alt="On-site Level 3 qualification training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
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
      </section>

      {/* Why Sygma */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Why Sygma</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Complete Your Level 3 With Sygma</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "ProQual Approved Centre",
              body: "Sygma is an approved ProQual centre with a dedicated IQA team overseeing every assessment.",
            },
            {
              title: "Flexible Study",
              body: "Complete your Level 3 through a combination of workplace evidence and guided assessment. No fixed classroom timetable.",
            },
            {
              title: "Specialist Assessors",
              body: "All assessors directly employed by Sygma. Ex-utility surveyors who understand the practical realities of underground mapping.",
            },
            {
              title: "Full Portfolio Support",
              body: "From registration to certificate, our IQA team guides you through every unit.",
            },
            {
              title: "Independent",
              body: "No surveys to sell, no equipment to push. Training and assessment without commercial bias.",
            },
            {
              title: "Evidence From Real Work",
              body: "Your existing survey work generates much of the evidence needed. We help you structure it.",
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
        <p className="eyebrow mb-3">Related Courses</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Advance Your Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/courses/level-4-diploma" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">Level 4 Diploma</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Advanced EM detection and GPR specialist qualification. The next step in the ProQual pathway.</p>
          </Link>
          <Link href="/courses/5-day-pas128-surveyor" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">5-Day PAS128 Surveyor</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Intensive training covering detection, surveying instruments and quality level A verification surveys.</p>
          </Link>
          <Link href="/courses/tsa-ices-utility-mapping" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">TSA and ICES Utility Mapping</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Module 1 covers desktop survey and site reconnaissance, aligning directly with Level 3 evidence.</p>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About the ProQual Level 3 Certificate in Utility Mapping and Surveying</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Full assessor support, no hidden fees. The ProQual Level 3 Certificate is your entry to the utility mapping and surveying qualification pathway. Contact us to discuss your training programme, assessment route and pricing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About Level 3
            </Link>
            <Link
              href="/courses/level-4-diploma"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View Level 4 Diploma
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

