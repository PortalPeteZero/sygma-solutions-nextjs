import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const faqs = [
  {
    q: "Do I need prior locating experience to attend?",
    a: "No prior formal training is required. The course starts from first principles on Day 1. That said, delegates who have some experience with electromagnetic locating will find the advanced content on Days 3 and 4 more immediately applicable.",
  },
  {
    q: "Can I use my own GPR or EM equipment?",
    a: "Yes. Radiodetection RD8000, RD8100 and RD8200, Vivax-Metrotech vLoc Pro 3, MALA EL CORE GPR, DS2000 GPR and Proceq GS8000 GPR are all available for use on site. If you prefer to train on your own or your company's equipment, please bring it from Day 3 onwards. Let the bookings team know in advance so arrangements can be made.",
  },
  {
    q: "What is the ProQual Level 3 add-on and do I need it?",
    a: "The ProQual Level 3 Certificate in Utility Mapping and Surveying is an optional nationally recognised qualification that can be completed alongside the 5 Day course. It enables the CSCS card for utility mapping roles. If you are pursuing the Level 4 or Level 5 qualifications, the Level 3 is part of the pathway.",
  },
  {
    q: "How does this course count towards Level 4 or Level 5?",
    a: "The 5 Day course generates assessed evidence that can be used within the ProQual Level 4 and Level 5 portfolios. Speak to the bookings team about how to plan your training pathway.",
  },
  {
    q: "Is there additional support available for new entrants to the industry?",
    a: "Yes. If you are new to the sector and do not have a workplace mentor, Sygma offers additional practical sessions throughout the year on demand. These are tailored to where individuals are in their development. Contact the bookings team for details.",
  },
  {
    q: "What certification do I receive?",
    a: "Successful delegates receive a certificate of course completion confirming that they have passed both the written exam and the practical assessment to PAS128 Level B standard. Delegates on the ProQual Level 3 add-on receive their ProQual certificate separately upon processing by ProQual.",
  },
];

export const metadata: Metadata = {
  title: '5-Day PAS 128 Surveyor Course | Sygma Solutions',
  description: 'Five-day PAS 128 utility mapping course covering survey levels D through B. Advanced EM, GPR, written exam, practical assessment. Wigan and Worcester dates.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/5-day-pas128-surveyor' },
  openGraph: {
    title: '5-Day PAS 128 Surveyor Course | Sygma Solutions',
    description: 'Five-day PAS 128 utility mapping course covering survey levels D through B. Advanced EM, GPR, written exam, practical assessment. Wigan and Worcester dates.',
    url: 'https://sygma-solutions.com/courses/5-day-pas128-surveyor',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/Utility-Mapping-04', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Pas128Surveyor() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "5-Day PAS 128 Surveyor Course", description: "Five-day PAS 128 utility mapping course covering survey levels D through B. Advanced EM, GPR, written exam, practical assessment. Wigan and Worcester dates.", url: "/courses/5-day-pas128-surveyor", credential: "5-Day PAS 128 Surveyor Course Certificate", duration: "Variable", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/utility-mapping-surveying" }, { label: "5-Day PAS 128 Surveyor Course" }]) }} />
<InnerPageHero
        eyebrow="Utility Mapping"
        headline="5 Day PAS128 Utility Mapping and Surveying Course: Advanced Training for Utility Surveyors"
        sub="Five intensive days. Every PAS128 survey level from D through to B. Advanced electromagnetic and GPR training delivered by the most experienced utility mapping trainers and assessors in the UK. With a written exam and full practical assessment, this is the course that turns competent locators into confident surveyors."
        image="Utility-Mapping-04"
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "5 Day PAS128 Surveyor" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["5 Days", "Intensive classroom and site training"],
            ["3 Venue Options", "Wigan, Worcester or your own site"],
            ["TSA, ICES & EUSR Approved", "Mapped to ICES competencies for Utility Mapping"],
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
          <Image src="CAT4-and-Genny-59" width={1200} height={800} alt="PAS128 surveyor course - electromagnetic locating practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover object-top aspect-[4/3] w-full" />
          <Image src="MALA-GPR-26" width={1200} height={800} alt="PAS128 surveyor course - GPR survey equipment in use" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover object-top aspect-[4/3] w-full" />
          <Image src="Advanced-EM-04" width={1200} height={800} alt="PAS128 surveyor course - advanced EM training on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover object-top aspect-[4/3] w-full" />
        </div>
      </section>
      {/* Course introduction */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What This Course Covers</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The Full PAS128 Surveyor Programme</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most underground utility location training focuses on a single piece of equipment or a single task. The 5 Day PAS128 Utility Mapping and Surveying Course does something different. Over five days, delegates work through every aspect of a compliant utility survey: from desktop research and site reconnaissance through to electromagnetic location and full ground penetrating radar operation, culminating in a two-man practical assessment on a real survey site.
              </p>
              <p>
                The course covers PAS128 Survey Levels D and C in Module 1, PAS128 Level B electromagnetic detection in Modules 2A and 2B, and PAS128 Level B GPR in Module 3. On Day 5, delegates complete both a full practical operational test and a formal written exam.
              </p>
              <p>
                It is the only course of this scope delivered by a provider with this depth of real-world utility mapping experience. Every Sygma trainer is a practising or former utility mapping professional, not a career trainer reading from a spec. The course content goes beyond the minimum requirements at every stage.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Course at a Glance</p>
            {[
              ["Duration", "5 days"],
              ["Formats", "Open course (Wigan or Worcester) or private at your site"],
              ["Assessment", "Written exam (70% pass mark) and practical operational test"],
              ["Accreditations", "TSA Approved, CICES Approved, EUSR Accredited, ProQual Centre"],
              ["Equipment", "RD8000, RD8100, RD8200, vLoc Pro 3, MALA EL CORE GPR, DS2000 GPR, Proceq GS8000 GPR"],
              ["ProQual Level 3", "Optional add-on (completed on Day 5)"],
              ["ICES Mapping", "GEUS01 A-D, E&G, F Part 1"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground w-36 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this course is for */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Designed For</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-bold text-foreground pb-3 pr-6 w-1/3">Who</th>
                  <th className="text-left font-bold text-foreground pb-3">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Utility surveyors entering the profession", "A thorough foundation in PAS128 processes from Day 1"],
                  ["Experienced locators moving into mapping and surveying", "Formalises and extends existing site skills to surveyor level"],
                  ["Self-employed contractors building their service offering", "Recognised accreditation supporting client confidence"],
                  ["Utility mapping company employees", "Structured training aligned to ICES competencies and ProQual pathways"],
                  ["Delegates pursuing ProQual Level 3, 4 or 5 qualifications", "This course fulfils evidence requirements for Level 4 and 5 and includes an optional Level 3 add-on"],
                ].map(([who, why]) => (
                  <tr key={who}>
                    <td className="py-3 pr-6 text-foreground font-semibold align-top">{who}</td>
                    <td className="py-3 text-muted-foreground align-top">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground bg-muted/40 border border-border rounded-lg p-4">
            If you are new to the industry and do not have a workplace mentor, additional practical sessions are available throughout the year on demand. Contact the bookings team for details.
          </p>
        </div>
      </section>

      {/* Day-by-day structure */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Course Structure</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Five Days of Structured, Progressive Training</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Each day builds on the last. By Day 5, delegates have the knowledge and practical experience to conduct a full PAS128-compliant utility survey using all detection methods.
        </p>

        <div className="space-y-6">
          {/* Day 1 */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black text-lg">Day 1</p>
              <p className="text-white/80 text-sm">Utility Networks, STATS Plans and Site Reconnaissance</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Overview of utility networks: electricity, gas, water, communications (how services are supplied and distributed)",
                  "Cable and pipe types, materials and connectivity",
                  "Surveying methodology and types: how to undertake a utility survey, where to start and why, incorporating the PAS128 process flowchart",
                  "STATS plans: conventions, variations, abbreviations and meanings (study of a wide variety of plans)",
                  "PAS128 Survey Type D introduced",
                  "Practical: delegates conduct a PAS128 Survey Type C site reconnaissance, draw the assumed route of buried services on a blank base plan, and compare their findings with STATS plans",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">Mix of classroom and site activity from Day 1. This is not a passive course.</p>
            </div>
          </div>

          {/* Day 2 */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black text-lg">Day 2</p>
              <p className="text-white/80 text-sm">Electrical Theory, EM Theory and Legislation</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Basic electrical theory: a back-to-basics practical approach using bulbs, wires, batteries and magnets",
                  "Electromagnetic theory: how an EM locator works, how and where to apply a signal, and the limitations of the technology",
                  "Legislation and health and safety: overview of HSG47 requirements and implications",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black text-lg">Day 3</p>
              <p className="text-white/80 text-sm">Advanced EM Locating with Radiodetection RD8000, RD8100, RD8200 and Vivax-Metrotech vLoc Pro 3</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Correct use and application of different frequencies",
                  "Distorted magnetic fields, depth measurement and current",
                  "Current Direction (CD) / Signal Direction (SD)",
                  "Deep sonde location technique",
                  "Passive signals and their limitations",
                  "PAS128 Detection Methods (Normative) M1 to M4 EM (classroom and site)",
                  "Practical: delegates use EM locators in active and passive modes on a real survey site, comparing results against 'locating without a locator' and STATS plans",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black text-lg">Day 4</p>
              <p className="text-white/80 text-sm">GPR Theory and Operation</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Ground Penetrating Radar theory: how GPR works, what the settings and controls do, and how different ground conditions affect results",
                  "Real-world GPR data examples",
                  "PAS128 Detection Methods M1 to M4 (non-post processing)",
                  "Practical: delegates use GPR on site to locate a variety of buried utilities in different situations",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary/80 px-6 py-4">
              <p className="text-white font-black text-lg">Day 5</p>
              <p className="text-white/80 text-sm">Assessment Day</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Practical operational test: two-man team surveys a small site area using STATS plans and all detection methods including site reconnaissance, EM locating with RD8000/RD8100/RD8200 or vLoc Pro 3, and GPR with MALA EL CORE, DS2000 or Proceq GS8000",
                  "Delegates provide a sketch plan of located services with depths, demonstrating PAS128 Level B quality levels B1 to B4 (non-post processing)",
                  "Equipment use and methodology is observed; proof of location must be demonstrated to the examiner",
                  "Any locatable buried utility not found results in a 2% reduction in overall exam score per occurrence",
                  "Written exam: combination of graphical and written questions under exam conditions",
                  "Pass mark: 70% overall",
                  "ProQual assessments completed in line with the nationally recognised qualification for delegates on the Level 3 add-on option",
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

      {/* Venue options */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Delivery</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Three Ways to Book</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                format: "Open Course",
                venue: "Sygma Solutions Utility Mapping Centre, Wigan",
                detail: "Fixed course dates, open to individuals and small groups. Contact the bookings team to check availability and reserve your place.",
              },
              {
                format: "Open Course",
                venue: "The Survey School, Worcester",
                detail: "Fixed course dates at The Survey School in Worcester, delivered in partnership with The Survey School. Ideal for delegates in the Midlands, South, and Wales. The Survey School is the UK's leading professional training provider for the land and mapping sector.",
              },
              {
                format: "Private Course",
                venue: "Your premises or a site of your choice",
                detail: "Arranged to suit your team's schedule and location requirements. Pricing is based on group size, location and any bespoke requirements.",
              },
            ].map(({ format, venue, detail }) => (
              <div key={venue} className="bg-background rounded-xl border border-border overflow-hidden">
                <div className="bg-primary/10 border-b border-border px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{format}</p>
                  <p className="font-bold text-foreground text-sm">{venue}</p>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            For individuals new to the sector without a workplace mentor, Sygma offers additional practical sessions throughout the year on demand. Speak to the bookings team for availability.
          </p>
        </div>
      </section>

      {/* Equipment */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Equipment</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Equipment Available on Site</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The following equipment is available for delegates to use during the course. Delegates who prefer to use their own equipment or other manufacturers' equipment are welcome to do so (please bring any such equipment from Day 3 onwards).
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Radiodetection RD8000",
                "Radiodetection RD8100",
                "Radiodetection RD8200",
                "Vivax-Metrotech vLoc Pro 3",
                "MALA EL CORE GPR",
                "DS2000 GPR",
                "Proceq GS8000 GPR",
              ].map((item) => (
                <div key={item} className="flex gap-2 items-center bg-muted/30 border border-border rounded-lg px-4 py-3">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span className="text-foreground text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">PPE Requirements</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Appropriate PPE for working in quiet roads and footpaths is required throughout the practical elements of the course. Delegates should check specific PPE requirements with the bookings team when confirming their place.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation and qualification pathways */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Accreditation</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Accreditations and Qualification Pathways</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-bold text-foreground pb-3 pr-6 w-1/3">Accreditation</th>
                  <th className="text-left font-bold text-foreground pb-3">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["TSA Approved", "Training courses approved by the Survey Association"],
                  ["CICES Approved", "Mapped to ICES competencies for Utility Mapping"],
                  ["EUSR Accredited", "Nationally recognised utility sector accreditation"],
                  ["ProQual Approved Centre", "Assessments conducted in line with nationally recognised ProQual standards"],
                ].map(([acc, detail]) => (
                  <tr key={acc}>
                    <td className="py-3 pr-6 text-foreground font-semibold align-top">{acc}</td>
                    <td className="py-3 text-muted-foreground align-top">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl border border-border p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">ProQual Level 3 (Optional Add-On)</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The{" "}
                <Link href="/courses/level-3-certificate" className="text-primary font-semibold underline underline-offset-2">
                  ProQual Level 3 Certificate in Utility Mapping and Surveying
                </Link>{" "}
                is an optional nationally recognised qualification that can be completed alongside the 5 Day course. It enables the CSCS card for utility mapping roles. ProQual assessments are completed on Day 5 alongside the standard course assessment.
              </p>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Evidence for Level 4 and Level 5</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Completion of this course fulfils a number of the evidence requirements for the{" "}
                <Link href="/courses/level-4-diploma" className="text-primary font-semibold underline underline-offset-2">
                  ProQual Level 4
                </Link>{" "}
                and{" "}
                <Link href="/courses/level-5-diploma" className="text-primary font-semibold underline underline-offset-2">
                  Level 5
                </Link>{" "}
                Utility Mapping Qualifications. Delegates pursuing those higher qualifications can use their assessed work from this course as portfolio evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Assessment</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">How You Will Be Assessed</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The course includes two formal assessments, both completed on Day 5.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black">Practical Operational Test</p>
            </div>
            <div className="p-6 space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                Delegates work in two-man teams to survey a small site area using all the detection methods covered during the week: site reconnaissance, EM locating with RD8000/RD8100/RD8200 or vLoc Pro 3, and GPR using MALA EL CORE, DS2000 or Proceq GS8000. A sketch plan of located services and depths must be produced.
              </p>
              <p>
                Equipment use and methodology is observed throughout, and proof of location must be demonstrated to the examiner. The practical test demonstrates compliance with PAS128 at quality levels B1 to B4 (non-post processing).
              </p>
              <p className="font-semibold text-foreground">
                Any locatable buried utility not found results in a 2% reduction per occurrence.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black">Written Exam</p>
            </div>
            <div className="p-6 space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                A written exam under exam conditions covering both graphical and written questions. An overall pass mark of 70% is required to successfully complete the course.
              </p>
              <p>
                Successful delegates receive a certificate of course completion confirming that they have passed both the written exam and the practical assessment to PAS128 Level B standard.
              </p>
              <p>
                Delegates on the ProQual Level 3 add-on receive their ProQual certificate separately upon processing by ProQual.
              </p>
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
              "PAS128 Surveyor Certificate (5-day programme)",
              "Written Assessment Records (per module)",
              "Practical Assessment Records (per module)",
              "Portfolio Guidance for Level 4/5 Diploma Progression",
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
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-22" width={1200} height={800} alt="PAS128 surveyor training with GPR equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-22" width={1200} height={800} alt="Utility survey practical assessment session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-19" width={1200} height={800} alt="PAS128 surveyor fieldwork demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Who delivers this course */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Delivery Team</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The Most Experienced Utility Mapping Trainers in the UK</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This course is delivered by Sygma's team of directly employed specialist trainers and assessors. They are not career trainers who have read the spec (they are industry practitioners who have applied these techniques on real sites across the UK). Every trainer has worked as a utility surveyor or for an equipment manufacturer before joining Sygma.
              </p>
              <p>
                Sygma is an independent training provider with no commercial interest in any particular survey company or equipment manufacturer. That independence matters when you are learning the real capabilities and limitations of EM and GPR technology. Delegates receive objective, evidence-based instruction with no commercial agenda.
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-4xl font-black text-primary mb-2">15+</p>
              <p className="font-bold text-foreground mb-3">Directly employed specialist trainers</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every trainer is a former utility surveyor or equipment manufacturer professional. Independent of any equipment manufacturer or survey company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ICES competency mapping */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">ICES Framework</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Mapped to ICES Competencies for Utility Mapping</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          This course is approved by TSA and CICES and mapped to the ICES competency framework for utility mapping.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/40 border border-border">
                <th className="text-left font-bold text-foreground p-4 pr-6">Module</th>
                <th className="text-left font-bold text-foreground p-4 pr-6">Content</th>
                <th className="text-left font-bold text-foreground p-4">ICES Competency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border border border-border border-t-0">
              {[
                ["Module 1", "Desktop Survey and Site Reconnaissance (PAS128 Level D & C)", "ICES GEUS01 A-D"],
                ["Module 2A", "EM Locators Basic Theory (PAS128 Level B (EM))", " - "],
                ["Module 2B", "Advanced EM Locating (PAS128 Level B (EM))", "ICES GEUS01 E&G"],
                ["Module 3", "GPR (PAS128 Level B (GPR))", "ICES GEUS01 F Part 1"],
              ].map(([module, content, ices]) => (
                <tr key={module} className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 pr-6 text-foreground font-semibold align-top">{module}</td>
                  <td className="p-4 pr-6 text-muted-foreground align-top">{content}</td>
                  <td className="p-4 text-muted-foreground align-top font-mono text-xs">{ices}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related courses */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Next Steps</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Build on This Course</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "GPR Training",
                desc: "Standalone or extended GPR training for existing surveyors.",
                to: "/courses/gpr-training",
              },
              {
                title: "TSA and ICES Utility Mapping Programme",
                desc: "Full 7-module programme for the complete ICES competency framework",
                to: "/courses/tsa-ices-utility-mapping",
              },
              {
                title: "ProQual Level 3 Certificate",
                desc: "Nationally recognised qualification (can be added to this course)",
                to: "/courses/level-3-certificate",
              },
              {
                title: "ProQual Level 4 Diploma",
                desc: "Next qualification step for working surveyors",
                to: "/courses/level-4-diploma",
              },
              {
                title: "PAS128 Awareness",
                desc: "Entry-level PAS128 course for those who procure or interpret surveys",
                to: "/courses/pas128-awareness",
              },
            ].map(({ title, desc, to }) => (
              <Link
                key={title}
                href={to}
                className="bg-background rounded-xl border border-border p-5 hover:border-primary/50 hover:shadow-sm transition-all group"
              >
                <p className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CITB Employer Network */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Funding Support</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">CITB Employer Network</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Sygma is a CITB Approved Training Organisation (ATO) and a member of the CITB Employer Network. Employers registered with CITB may be able to access Employer Network funding towards training costs. Contact your CITB adviser or Sygma for guidance on eligibility.
          </p>
        </div>
      </section>

      {/* Why Sygma */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Sygma</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Choose Sygma for the PAS128 Course?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Real Survey Experience",
              desc: "Every trainer is an active PAS128 surveyor, not a classroom instructor. They survey on live sites and understand what works in the field."
            },
            {
              title: "Specialist Trainers",
              desc: "Directly employed, TAQA qualified, with backgrounds in utility surveying or equipment manufacturing. Your trainers have done the job."
            },
            {
              title: "Five Full Days of Practical",
              desc: "This is the most comprehensive PAS128 course available. Every day includes site work. By Day 5, delegates are ready to survey independently."
            },
            {
              title: "Independent and Unbiased",
              desc: "We are not tied to any manufacturer and do not sell equipment. Training reflects what works in practice, not what a supplier wants to sell."
            },
            {
              title: "Small Class Sizes",
              desc: "Maximum 8 delegates ensures every delegate receives individual attention during practical assessments and hands-on training."
            },
            {
              title: "We Come to You",
              desc: "Private courses delivered at your site with all equipment provided. Travel is included in the course rate."
            },
          ].map((card) => (
            <div key={card.title} className="border border-border rounded-lg bg-card p-5">
              <p className="font-bold text-foreground mb-2">{card.title}</p>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-28" width={1200} height={800} alt="Ground penetrating radar survey training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="Utility-Mapping-01" width={1200} height={800} alt="Utility mapping survey practical" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-22" width={1200} height={800} alt="PAS128 surveyor GPR data interpretation" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About the 5 Day PAS128 Surveyor Course</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Open course dates available in Wigan and Worcester throughout the year. Private courses arranged to suit your team. Contact us to check availability, discuss the ProQual Level 3 add-on, or request a quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Check Availability and Enquire
            </Link>
            <Link href="/training/utility-mapping-surveying"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View All Utility Mapping Training
            </Link>
          </div>
        </div>
      </section>
    </>
);
}
