import InnerPageHero from "@/components/InnerPageHero";
import type { Metadata } from 'next';
import Link from 'next/link';
import {  breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'EUSR CAT1 vs ProQual CAT1 vs CAT1 Plus | Cable Avoidance | Sygma',
  description: 'Compare EUSR CAT1, ProQual CAT1, and ProQual CAT1 Plus cable avoidance qualifications. Which course is right for your team?',
  alternates: { canonical: 'https://sygma-solutions.com/courses/cable-avoidance-course-comparison' },
  openGraph: {
    title: 'EUSR CAT1 vs ProQual CAT1 vs CAT1 Plus | Cable Avoidance | Sygma',
    description: 'Compare EUSR CAT1, ProQual CAT1, and ProQual CAT1 Plus cable avoidance qualifications. Which course is right for your team?',
    url: 'https://sygma-solutions.com/courses/cable-avoidance-course-comparison',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-01', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function CourseComparison() {
  const faqs = [
  {
    q: "Can my team hold both EUSR CAT1 and ProQual CAT1?",
    a: "Yes. They are separate qualifications issued by different bodies. An operative can hold both. In practice, most clients who move to ProQual CAT1 do so as a direct upgrade; their team completes ProQual CAT1 instead of renewing their EUSR CAT1. Both are valid for three years.",
  },
  {
    q: "Is ProQual CAT1 accepted by the same principal contractors as EUSR CAT1?",
    a: "This varies by contractor and procurement framework. EUSR CAT1 remains the more widely mandated qualification across the utility sector. ProQual CAT1 is accepted by a growing number of principal contractors and is often specified alongside or in place of EUSR CAT1 by organisations that require a higher assessment standard. If your contract specifies EUSR CAT1 by name, speak to your client before substituting. Sygma can advise based on your sector and client base.",
  },
  {
    q: "What does ProQual CAT1 Plus add that standard ProQual CAT1 does not?",
    a: "ProQual CAT1 Plus is a two-day qualification. The additional day covers: comprehensive signal clamp and capacitance technique in hands-on practical assessment (not theory only), the full Genny First survey methodology as a formally assessed criterion, expanded knowledge of PAS128, permit to dig, and multi-frequency transmitter operation, and optional elements covering Sonde location and GPR awareness. The CAT1 Plus is the most advanced cable avoidance qualification available in the UK.",
  },
  {
    q: "Is ProQual CAT1 an Ofqual-regulated qualification?",
    a: "No. ProQual CAT1, CAT1 Plus and CAT2 are issued by ProQual Accreditations, a dedicated accreditation arm of ProQual AB Limited. They are externally audited industry accreditations. They are not listed on the Ofqual national qualifications register. The EUSR CAT1 is also not an Ofqual-regulated qualification. Neither qualification is an RQF-listed award.",
  },
  {
    q: "How long are these qualifications valid?",
    a: "All three are valid for three years. Renewal requires re-assessment, not simply a refresher day.",
  },
  {
    q: "Can Sygma deliver the EUSR CAT1 and ProQual CAT1 on the same day or back-to-back?",
    a: "Yes. Sygma delivers all three qualifications (EUSR CAT1, ProQual CAT1 and ProQual CAT1 Plus) to your premises, UK-wide. For teams that want to upgrade from EUSR CAT1 to ProQual CAT1, both can be scheduled as part of a planned training programme. Contact us to discuss your requirements.",
  },
  {
    q: "What is the 'Genny First' methodology in ProQual CAT1 Plus?",
    a: "Genny First is the principle that operatives should apply the signal transmitter to every available utility connection point before switching to passive induction. It maximises the opportunity to apply a targeted, distinguishable signal to specific utilities, reducing the risk of ambiguous results from induction alone. ProQual CAT1 Plus assessment criterion PP3.3 requires candidates to 'conduct a survey using the transmitter first and exhaust all transmitter connection opportunities before moving to induction.' This is the only cable avoidance qualification in the UK with this principle formally embedded in its assessed criteria. Sygma helped write this standard.",
  },
];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'Cable Avoidance Course Comparison' }]) }} />

      <InnerPageHero
        eyebrow="Utility Avoidance"
        headline="EUSR CAT1 vs ProQual CAT1 vs ProQual CAT1 Plus: Which Cable Avoidance Course Is Right for Your Team?"
        sub="Three qualifications. One comparison. Sygma delivers all three. Use this page to understand the difference and choose what your team actually needs."
        image="cat-02"
        breadcrumbs={[
          { label: "Training", href: "/training/cable-location-avoidance" },
          { label: "Course Comparison" },
        ]}
      />


      {/* 3-photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <Image src="cat-03" width={1200} height={800} alt="Sygma course comparison - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-04" width={1200} height={800} alt="Sygma course comparison - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-05" width={1200} height={800} alt="Sygma course comparison - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
        </div>
      </section>


      {/* Full-width image */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <Image src="cat-06" width={1200} height={800} alt="Sygma course comparison - live training environment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top" />
      </div>

      {/* Who is this page for */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Who This Is For</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Who Is This Page For?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mb-8">
          <p>
            This page is for procurement managers, H&S leads, and site managers who need to decide which cable avoidance qualification to specify for their operatives.
          </p>
          <p>If you already know which qualification you want, go straight to the relevant course page:</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border max-w-3xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th className="text-left px-5 py-3 font-bold text-foreground">Qualification</th>
                <th className="text-left px-5 py-3 font-bold text-foreground">Go to</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  qual: "CAT and Genny Training (in-house certificate)",
                  to: "/courses/cable-avoidance-training",
                  label: "Cable Avoidance Training",
                },
                {
                  qual: "EUSR CAT1: EUSR Category 1",
                  to: "/courses/eus-cat1",
                  label: "EUSR CAT1 Accreditation",
                },
                {
                  qual: "ProQual CAT1 (externally audited)",
                  to: "/courses/proqualcat1-training",
                  label: "ProQual CAT1",
                },
                {
                  qual: "ProQual CAT1 Plus (most advanced available)",
                  to: "/courses/proqualcat1plus",
                  label: "ProQual CAT1 Plus",
                },
              ].map(({ qual, to, label }, i) => (
                <tr key={qual} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-5 py-3 text-foreground font-semibold">{qual}</td>
                  <td className="px-5 py-3">
                    <Link href={to} className="text-primary hover:underline font-semibold">
                      {label}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-07" width={1200} height={800} alt="Cable avoidance training course comparison" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-08" width={1200} height={800} alt="Utility locating qualification assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-09" width={1200} height={800} alt="Comparing CAT training qualifications" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* What this comparison covers */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Context</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">What This Comparison Covers</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mb-8">
            <p>
              The EUSR CAT1, ProQual CAT1 and ProQual CAT1 Plus are the three main cable avoidance qualifications you are likely to encounter when specifying training for operatives who locate and avoid buried services.
            </p>
            <p>
              All three relate to the use of a Cable Avoidance Tool (CAT) and Signal Generator (Genny) on site, but they are not equivalent qualifications. The ProQual qualifications are significantly more thorough. They cover more assessment areas, include topics that EUSR does not assess at all, and use written theory papers rather than multiple choice questions. The differences are substantial and worth understanding before you specify training for your team.
            </p>
            <p>
              The EUSR CAT1 is the most widely held qualification and is recognised across the utility sector. The ProQual qualifications are accredited to a higher standard and externally audited and are awarded by ProQual Accreditations, a dedicated accreditation arm of ProQual AB Limited.
            </p>
            <p>
              Important: this comparison is based on the published minimum specifications for each qualification. How well a provider delivers to those specifications varies. Sygma delivers above the minimum specification for every qualification it offers. The ProQual CAT1 is the only qualification where we do not need to add content, because we helped develop it to the standard the industry actually requires.
            </p>
          </div>

          {/* Disclaimer callout */}
          <div className="border-l-4 border-accent bg-muted/40 rounded-r-xl p-5 max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              EUSR CAT1 column reflects the published EUSR Category 1 minimum specification. The EUSR standard itself states: the specification does not preclude employers and providers from adding to the specification in their own training programmes. Sygma Solutions has always done so. ProQual columns reflect the published ProQual specification as delivered by Sygma Solutions Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* The Comparison: three tables */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-6xl">
        <p className="eyebrow mb-3">Side by Side</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">The Comparison</h2>

        {/* Basics */}
        <div className="overflow-x-auto rounded-xl border border-border mb-8">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 py-3 font-bold w-56"></th>
                <th className="text-left px-4 py-3 font-bold">EUSR CAT1 (min spec)</th>
                <th className="text-left px-4 py-3 font-bold">ProQual CAT1</th>
                <th className="text-left px-4 py-3 font-bold">ProQual CAT1 Plus</th>
              </tr>
            </thead>
            <tbody>
              {/* Section divider */}
              <tr className="bg-accent/10">
                <td colSpan={4} className="px-4 py-2 font-black text-xs uppercase tracking-widest text-accent">
                  Basics
                </td>
              </tr>
              {[
                {
                  label: "Duration",
                  eus: "1 day",
                  pq1: "1 day",
                  pq1p: "2 days",
                },
                {
                  label: "Awarded by",
                  eus: "EUSR (Energy & Utility Skills Register)",
                  pq1: "ProQual Accreditations",
                  pq1p: "ProQual Accreditations",
                },
                {
                  label: "Valid for",
                  eus: "3 years",
                  pq1: "3 years",
                  pq1p: "3 years",
                },
                {
                  label: "Ofqual-regulated?",
                  eus: "No",
                  pq1: "No (externally audited industry accreditation)",
                  pq1p: "No (externally audited industry accreditation)",
                },
                {
                  label: "External assessment by ProQual Accreditations",
                  eus: "No",
                  pq1: "Yes",
                  pq1p: "Yes",
                },
                {
                  label: "Individual criterion-mapped assessment record",
                  eus: "No (holistic assessment)",
                  pq1: "Yes (each criterion assessed and documented individually)",
                  pq1p: "Yes (each criterion assessed and documented individually)",
                },
                {
                  label: "External verifier audit of each delivery",
                  eus: "No",
                  pq1: "Yes",
                  pq1p: "Yes",
                },
                {
                  label: "Max group size",
                  eus: "12 (standard)",
                  pq1: "8 (awarding body regulation)",
                  pq1p: "8 (awarding body regulation)",
                },
                {
                  label: "Pricing",
                  eus: "Per course, not per person. Contact Sygma.",
                  pq1: "Per course, not per person. Contact Sygma.",
                  pq1p: "Per course, not per person. Contact Sygma.",
                },
              ].map(({ label, eus, pq1, pq1p }, i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3 font-semibold text-foreground align-top">{label}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{eus}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{pq1}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{pq1p}</td>
                </tr>
              ))}

              {/* Assessment Method divider */}
              <tr className="bg-accent/10">
                <td colSpan={4} className="px-4 py-2 font-black text-xs uppercase tracking-widest text-accent">
                  Assessment Method
                </td>
              </tr>
              {[
                {
                  label: "Written/knowledge assessment",
                  eus: "Multiple choice questions (MCQ)",
                  pq1: "Written theory paper (individually mapped criterion answers)",
                  pq1p: "Written theory paper (extended, individually mapped criterion answers)",
                },
                {
                  label: "Practical assessment standard",
                  eus: "Practical elements to EUSR minimum specification",
                  pq1: "Hands-on practical elements (individually assessed and signed off)",
                  pq1p: "Substantially extended hands-on practical (all elements individually assessed and signed off)",
                },
                {
                  label: "Genny First methodology (PP3.3)",
                  eus: "Not a named requirement in the EUSR spec",
                  pq1: "Not a separate named criterion",
                  pq1p: "Required and assessed; candidates must exhaust all transmitter connection opportunities before moving to induction",
                },
                {
                  label: "Signal clamp (practical)",
                  eus: "Knowledge only (MCQ, not assessed hands-on)",
                  pq1: "Theory only (not assessed hands-on)",
                  pq1p: "Hands-on practical assessment (PP1.11)",
                },
                {
                  label: "Capacitance technique (wrap-around, practical)",
                  eus: "Knowledge only (MCQ, not assessed hands-on)",
                  pq1: "Knowledge only (Theory, not assessed hands-on)",
                  pq1p: "Hands-on practical assessment (PP1.10)",
                },
                {
                  label: "Blind induction sweep",
                  eus: "Practical",
                  pq1: "Practical",
                  pq1p: "Comprehensive practical (PP1.15, PP3.3)",
                },
                {
                  label: "Sonde location",
                  eus: "Not assessed",
                  pq1: "Not assessed",
                  pq1p: "Optional practical element (PP2.11)",
                },
                {
                  label: "GPR awareness",
                  eus: "Knowledge only (MCQ)",
                  pq1: "Knowledge only (Theory)",
                  pq1p: "Optional practical element (PP2.12)",
                },
              ].map(({ label, eus, pq1, pq1p }, i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3 font-semibold text-foreground align-top">{label}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{eus}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{pq1}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{pq1p}</td>
                </tr>
              ))}

              {/* Knowledge Coverage divider */}
              <tr className="bg-accent/10">
                <td colSpan={4} className="px-4 py-2 font-black text-xs uppercase tracking-widest text-accent">
                  Knowledge Coverage
                </td>
              </tr>
              {[
                {
                  label: "CDM Regulations",
                  eus: "Not assessed",
                  pq1: "Theory",
                  pq1p: "Theory",
                },
                {
                  label: "Monitoring and recording changes to risk assessment",
                  eus: "Not assessed",
                  pq1: "Theory",
                  pq1p: "Theory",
                },
                {
                  label: "SSOW aligned with HSAWA, HSG47 and GS6",
                  eus: "Not assessed",
                  pq1: "Practical",
                  pq1p: "Practical",
                },
                {
                  label: "Permit to dig (knowledge)",
                  eus: "Practical check only",
                  pq1: "Theory + Practical",
                  pq1p: "Theory + Practical",
                },
                {
                  label: "PAS128 quality levels awareness",
                  eus: "MCQ",
                  pq1: "Theory",
                  pq1p: "Theory (expanded; TP1.1 covers difference between PAS128 surveys and Utility STATS plans)",
                },
                {
                  label: "HV cable limitations",
                  eus: "MCQ",
                  pq1: "Theory + Practical",
                  pq1p: "Theory + Practical",
                },
                {
                  label: "Consequences of utility damage",
                  eus: "MCQ",
                  pq1: "Theory",
                  pq1p: "Theory",
                },
                {
                  label: "Equipment pre-use checks and calibration",
                  eus: "Practical",
                  pq1: "Practical",
                  pq1p: "Practical (includes calibration date check; TP2.2)",
                },
                {
                  label: "Data-enabled locators and evidencing correct use",
                  eus: "MCQ",
                  pq1: "Theory + Practical",
                  pq1p: "Theory + Practical",
                },
              ].map(({ label, eus, pq1, pq1p }, i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3 font-semibold text-foreground align-top">{label}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{eus}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{pq1}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{pq1p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Which qualification is right for your team */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Decision Guide</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Which Qualification Is Right for Your Team?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Use this guide to match the qualification to your organisation's requirements.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/40">
                  <th className="text-left px-5 py-3 font-bold text-foreground">Your situation</th>
                  <th className="text-left px-5 py-3 font-bold text-foreground">Recommended</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    situation: "Your contract or procurement framework requires EUSR CAT1 accreditation specifically",
                    rec: "EUSR CAT1",
                    to: "/courses/eus-cat1",
                  },
                  {
                    situation: "Your client specifies EUSR card holders",
                    rec: "EUSR CAT1",
                    to: "/courses/eus-cat1",
                  },
                  {
                    situation: "You want operatives accredited to a higher, externally audited standard than the EUSR minimum specification",
                    rec: "ProQual CAT1",
                    to: "/courses/proqualcat1-training",
                  },
                  {
                    situation: "You need individual criterion-mapped assessment records for each operative (for audit, insurance or principal contractor requirements)",
                    rec: "ProQual CAT1 or ProQual CAT1 Plus",
                    to: "/courses/proqualcat1-training",
                  },
                  {
                    situation: "Your operatives work in complex, high-risk environments where thorough signal application technique is critical",
                    rec: "ProQual CAT1 Plus",
                    to: "/courses/proqualcat1plus",
                  },
                  {
                    situation: "You want to formalise the Genny First methodology in your team's assessed qualification record",
                    rec: "ProQual CAT1 Plus",
                    to: "/courses/proqualcat1plus",
                  },
                  {
                    situation: "Your team also needs safe excavation training to sit alongside location competency",
                    rec: "ProQual CAT1 or CAT1 Plus combined with ProQual CAT2",
                    to: "/courses/proqualcat2",
                  },
                  {
                    situation: "You want the most advanced cable avoidance qualification available in the UK",
                    rec: "ProQual CAT1 Plus",
                    to: "/courses/proqualcat1plus",
                  },
                ].map(({ situation, rec, to }, i) => (
                  <tr key={situation} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-5 py-3 text-muted-foreground align-top">{situation}</td>
                    <td className="px-5 py-3 font-semibold text-foreground align-top">
                      <Link href={to} className="text-primary hover:underline">
                        {rec}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why assessment method matters */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="eyebrow mb-3">Not All CAT1 Courses Are Created Equal</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Why ProQual CAT1 Is a Significantly Higher Standard</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            The difference between EUSR CAT1 and ProQual CAT1 is not just about how competency is assessed. It is about what is assessed. ProQual CAT1 covers assessment areas that EUSR does not include at all.
          </p>
          <p>
            <strong className="text-foreground">Topics EUSR does not cover:</strong> CDM Regulations, risk assessment monitoring and reporting, and Safe Systems of Work aligned with HASAWA, HSG47, and GS6. These are absent from the EUSR specification entirely.
          </p>
          <p>
            <strong className="text-foreground">Topics EUSR covers only by MCQ (insufficient):</strong> Legislation including HSAWA, NRSWA, HSG47, GS6, and PAS128. The features and need for a safe system of work. Risks of over-reliance on utility plans. Specific locator features including shallow cable alert, Avoidance mode, depth estimation, and calibration. Data-enabled locator use. A multiple choice question tests whether someone can pick the right answer from a list. It does not demonstrate that they understand the subject or can apply it on site. ProQual assesses all of these through written theory papers, and in many cases requires a practical demonstration as well.
          </p>
          <p>
            ProQual CAT1 is assessed to an individually mapped criterion standard. Each candidate is assessed against every criterion individually, and the assessor documents whether each one was met. That record is externally verified by a ProQual Accreditations auditor. If a candidate does not meet every criterion, they do not pass.
          </p>
          <p>
            ProQual CAT1 Plus goes further still. The two-day format allows comprehensive hands-on assessment of techniques that the standard CAT1 course covers in theory only, including capacitance, signal clamp, and the full Genny First survey methodology.
          </p>
          <p>
            In 21 years of delivering utility avoidance training, Sygma has had to add content to every qualification on the market to make it fit for the real demands of the industry. Every single one. The ProQual CAT1 is the first qualification we developed in partnership with an awarding body that covers everything needed from a course in this subject. It is the only qualification we do not have to supplement, because the syllabus was built to the standard the industry actually needs.
          </p>
          <p>
            If your procurement framework gives you a choice between EUSR CAT1 and ProQual CAT1, the ProQual qualification delivers a measurably higher standard of assessed competence. It covers more, it assesses deeper, and it documents everything to a standard that can be externally verified.
          </p>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-64" width={1200} height={800} alt="ProQual vs EUSR training comparison" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-65" width={1200} height={800} alt="Hands-on training qualification assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-77" width={1200} height={800} alt="Utility avoidance course practical training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* FAQs */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can my team hold both EUSR CAT1 and ProQual CAT1?",
                a: "Yes. They are separate qualifications issued by different bodies. An operative can hold both. In practice, most clients who move to ProQual CAT1 do so as a direct upgrade; their team completes ProQual CAT1 instead of renewing their EUSR CAT1. Both are valid for three years.",
              },
              {
                q: "Is ProQual CAT1 accepted by the same principal contractors as EUSR CAT1?",
                a: "This varies by contractor and procurement framework. EUSR CAT1 remains the more widely mandated qualification across the utility sector. ProQual CAT1 is accepted by a growing number of principal contractors and is often specified alongside or in place of EUSR CAT1 by organisations that require a higher assessment standard. If your contract specifies EUSR CAT1 by name, speak to your client before substituting. Sygma can advise based on your sector and client base.",
              },
              {
                q: "What does ProQual CAT1 Plus add that standard ProQual CAT1 does not?",
                a: "ProQual CAT1 Plus is a two-day qualification. The additional day covers: comprehensive signal clamp and capacitance technique in hands-on practical assessment (not theory only), the full Genny First survey methodology as a formally assessed criterion, expanded knowledge of PAS128, permit to dig, and multi-frequency transmitter operation, and optional elements covering Sonde location and GPR awareness. The CAT1 Plus is the most advanced cable avoidance qualification available in the UK.",
              },
              {
                q: "Is ProQual CAT1 an Ofqual-regulated qualification?",
                a: "No. ProQual CAT1, CAT1 Plus and CAT2 are issued by ProQual Accreditations, a dedicated accreditation arm of ProQual AB Limited. They are externally audited industry accreditations. They are not listed on the Ofqual national qualifications register. The EUSR CAT1 is also not an Ofqual-regulated qualification. Neither qualification is an RQF-listed award.",
              },
              {
                q: "How long are these qualifications valid?",
                a: "All three are valid for three years. Renewal requires re-assessment, not simply a refresher day.",
              },
              {
                q: "Can Sygma deliver the EUSR CAT1 and ProQual CAT1 on the same day or back-to-back?",
                a: "Yes. Sygma delivers all three qualifications (EUSR CAT1, ProQual CAT1 and ProQual CAT1 Plus) to your premises, UK-wide. For teams that want to upgrade from EUSR CAT1 to ProQual CAT1, both can be scheduled as part of a planned training programme. Contact us to discuss your requirements.",
              },
              {
                q: "What is the 'Genny First' methodology in ProQual CAT1 Plus?",
                a: "Genny First is the principle that operatives should apply the signal transmitter to every available utility connection point before switching to passive induction. It maximises the opportunity to apply a targeted, distinguishable signal to specific utilities, reducing the risk of ambiguous results from induction alone. ProQual CAT1 Plus assessment criterion PP3.3 requires candidates to 'conduct a survey using the transmitter first and exhaust all transmitter connection opportunities before moving to induction.' This is the only cable avoidance qualification in the UK with this principle formally embedded in its assessed criteria. Sygma helped write this standard.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-border rounded-lg p-6 bg-background">
                <h3 className="font-bold text-foreground mb-3">{q}</h3>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Not Sure Which Option Is Right for You?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Sygma delivers all three qualifications to your premises, UK-wide. If you are not sure which qualification to specify, call us or{" "}
            <Link href="/contact#enquiry-form" className="text-primary font-semibold hover:underline">
              send an enquiry
            </Link>{" "}
            and we will advise based on your client requirements, procurement framework and the work your team carries out.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Request a Quote
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
