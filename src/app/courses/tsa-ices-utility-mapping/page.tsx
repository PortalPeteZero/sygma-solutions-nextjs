import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const faqs = [
              {
                q: "Do I need to complete all seven modules?",
                a: "No. Individual modules can be taken as standalone courses. Many delegates focus on Modules 1 to 4 for PAS128 competency, or on Modules 3 and 4 together as a three-day GPR course. The full seven-module programme is the route to complete ICES competency coverage and to the ProQual Level 4 and Level 5 qualifications.",
              },
              {
                q: "What is the prerequisite for Module 4?",
                a: "Module 3 (or equivalent GPR knowledge) is a prerequisite for Module 4. Delegates attending Module 4 should already understand GPR fundamentals, either from Module 3 or from equivalent prior training. Modules 3 and 4 are frequently taken back to back as a three-day course.",
              },
              {
                q: "How does this programme relate to ProQual Level 4 and Level 5?",
                a: "The programme provides structured training evidence that forms the foundation of ProQual Level 4 and Level 5 submissions. The seven modules map directly to the ICES competency domains required for those qualifications. Speak to the bookings team about how to plan your training and qualification pathway together.",
              },
              {
                q: "Can modules be taken in any order?",
                a: "Generally yes, with the exception of Module 4 which requires Module 3 as a prerequisite. For delegates working towards ProQual Level 4 or Level 5, completing modules in order provides the most logical progression and makes portfolio building easier.",
              },
              {
                q: "Is this programme available in-house?",
                a: "Yes. All modules are available as private in-house courses. This is the preferred option for teams, as it allows scheduling to fit around operational demands. Contact the bookings team to plan a delivery schedule.",
              },
              {
                q: "How is this different from the 5 Day PAS128 Surveyor Course?",
                a: "The 5 Day PAS128 Surveyor Course covers the content of Modules 1 to 3 in an intensive week, with a written exam and practical assessment included. The TSA and ICES programme is broader and longer, adding advanced GPR post processing, surveying instruments, geometric principles and ICT (Modules 4 to 7). For those entering utility mapping, the 5 Day course is often the natural first step before progressing into the wider programme.",
              },
              {
                q: "What does the written exam cover?",
                a: "The written exam includes graphical and written questions covering basic electrical theory, electromagnetic theory, surveying methodology, stats plans interpretation, and knowledge of how an EM locator works including signal direction and current direction. Delegates must achieve the overall pass mark under formal exam conditions. The exam score and overall exam score contribute to your portfolio evidence alongside the practical operational test results.",
              },
              {
                q: "What safety training is included?",
                a: "Safety is woven throughout the utility surveyor training programme. Modules cover risk assessment procedures, use of appropriate PPE, working safely on live sites including power station compounds and quiet roads, understanding ground conditions that affect locating accuracy, and recognising distorted magnetic fields near electrical circuits. Delegates learn to locate buried services and buried utilities safely in different situations, reducing the risk of utility strikes on infrastructure projects.",
              },
              {
                q: "What practical field work is involved?",
                a: "The practical elements include a test where a two man team to survey a small site area must locate buried services on the same survey site using own equipment. Delegates practise locating without a locator using stats plans and visual clues, as well as with an EM locator in passive modes and at different frequencies. They record actual findings on a blank base plan, mark assumed routes, and provide a rough sketch of the utility survey. The practical approach covers a typical utility survey from start to finish across different situations and ground conditions.",
              },
            ];

export const metadata: Metadata = {
  title: 'TSA and ICES Utility Mapping Programme | Sygma Solutions',
  description: 'The most comprehensive utility mapping programme in the UK. Seven modules, 17 plus days, covering every ICES competency from PAS 128 to GPR and CAD.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/tsa-ices-utility-mapping' },
  openGraph: {
    title: 'TSA and ICES Utility Mapping Programme | Sygma Solutions',
    description: 'The most comprehensive utility mapping programme in the UK. Seven modules, 17 plus days, covering every ICES competency from PAS 128 to GPR and CAD.',
    url: 'https://sygma-solutions.com/courses/tsa-ices-utility-mapping',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/em-04', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function TsaIcesUtilityMapping() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "TSA and ICES Utility Mapping Programme", description: "The most comprehensive utility mapping programme in the UK. Seven modules, 17 plus days, covering every ICES competency from PAS 128 to GPR and CAD.", url: "/courses/tsa-ices-utility-mapping", credential: "TSA and ICES Utility Mapping Programme Certificate", duration: "Variable", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/utility-mapping-surveying" }, { label: "TSA and ICES Utility Mapping Programme" }]) }} />
<InnerPageHero
        eyebrow="Utility Mapping"
        headline="TSA and ICES Utility Mapping Training Programme: Seven Modules to Full Professional Competency"
        sub="The UK's most comprehensive utility surveyor training programme. Seven modules. Seventeen-plus days. Every ICES competency from desktop survey and PAS128 reconnaissance through to advanced GPR post processing, total stations, GNSS, geometric principles and CAD. Approved by TSA and mapped to ICES competencies across GEUS01, GEUS02, GEUS03 and GEUS04. The pathway to ProQual Level 4 and Level 5 for professional utility surveyors."
        image="em-04"
        alt="TSA ICES utility mapping training with professional survey equipment"
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "TSA and ICES Utility Mapping Programme" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["7 Modules", "17+ training days across the full programme"],
            ["TSA Approved", "Survey Association approved delivery"],
            ["ICES Mapped", "Full ICES competency coverage for utility mapping"],
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
          <Image src="gpr-01" width={1200} height={800} alt="TSA and ICES utility mapping - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover object-top aspect-[4/3] w-full" />
          <Image src="cat-38" width={1200} height={800} alt="TSA and ICES utility mapping - EM locator training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover object-top aspect-[4/3] w-full" />
          <Image src="gpr-02" width={1200} height={800} alt="TSA and ICES utility mapping - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover object-top aspect-[4/3] w-full" />
        </div>
      </section>
      {/* Programme introduction */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What This Programme Is</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">A Structured Pathway to Full Professional Competency</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most utility surveyor training providers offer individual courses. Sygma Solutions' TSA and ICES Utility Mapping Programme is different. It is a structured, seven-module training course designed to develop the full range of competencies required for professional utility mapping across the utility sector, as defined by the Institution of Civil Engineers Surveyors (ICES) competency framework. This utility surveyor training programme covers the complete surveying methodology from desktop research through to geospatial data collection on infrastructure projects.
              </p>
              <p>
                The programme covers everything from PAS128 desktop surveys using stats plans and site reconnaissance in Module 1 through to the application of ICT in utility surveying in Module 7. In between, delegates progress through advanced electromagnetic locating using an EM locator in passive modes and at different frequencies, ground penetrating radar GPR theory and post processing, surveying instruments including total stations and GNSS, and the geometric principles that underpin high-accuracy subsurface mapping. Each utility survey module builds practical skills in locating buried services across utility networks and different situations.
              </p>
              <p>
                The full programme is 17 or more days of structured training spread across all seven modules. Individual modules can be completed as standalone courses or combined. Modules 3 and 4 (GPR theory and advanced post processing) are frequently taken together as a standalone three-day course.
              </p>
              <p>
                For those working towards <Link href="/courses/level-4-diploma" className="text-primary underline underline-offset-2">ProQual Level 4</Link> or <Link href="/courses/level-5-diploma" className="text-primary underline underline-offset-2">Level 5</Link> qualifications in Utility Mapping and Surveying, this programme provides the training evidence and competency foundation those qualifications require.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Programme at a Glance</p>
            {[
              ["Total Duration", "17+ days across all seven modules"],
              ["Module Format", "Each module available standalone or combined"],
              ["Approvals", "TSA approved, ICES competency mapped"],
              ["ICES Coverage", "GEUS01, GEUS02, GEUS03 and GEUS04"],
              ["Qualification Pathway", "ProQual Level 3, Level 4 and Level 5"],
              ["Delivery", "Open course or in-house, nationwide UK"],
              ["Pricing", "Contact Sygma for module or programme quotation"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground w-36 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Designed For</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-5 py-3 font-bold">Who</th>
                  <th className="text-left px-5 py-3 font-bold">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Utility surveyors developing towards ProQual Level 4 or Level 5", "The programme provides the structured training and competency evidence those qualifications require"],
                  ["Senior utility surveyors and mapping professionals", "Formalises advanced skills and maps them to ICES competency standards"],
                  ["Utility mapping companies developing their survey teams", "A defined, end-to-end training programme for career progression"],
                  ["Individuals seeking ICES corporate membership requirements", "Modules map directly to ICES GEUS01-GEUS04 competencies"],
                  ["Those who have completed the 5 Day PAS128 course and want to continue", "The programme extends and deepens the skills developed in the 5 Day course"],
                ].map(([who, why], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-5 py-3 font-semibold text-foreground align-top">{who}</td>
                    <td className="px-5 py-3 text-muted-foreground">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Seven modules overview */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Programme Structure</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">A Complete Professional Training Programme</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Seven modules covering every ICES competency required for professional utility mapping. The full programme runs to 17 or more days, with individual modules available standalone.
        </p>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-4 py-3 font-bold">Module</th>
                <th className="text-left px-4 py-3 font-bold">Duration</th>
                <th className="text-left px-4 py-3 font-bold">Title</th>
                <th className="text-left px-4 py-3 font-bold">ICES Competency</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Module 1", "1 day", "Desktop Survey and Site Reconnaissance: PAS128 Level D and C", "ICES GEUS01 A-D"],
                ["Module 2", "3 days", "Advanced EM Locators: PAS128 Level B (EM)", "ICES GEUS01 E and G"],
                ["Module 3", "1 day", "GPR: PAS128 Level B (GPR) Unit A", "ICES GEUS01 F Part 1"],
                ["Module 4", "2 days", "Advanced GPR Data Collection and Post Processing: Units B and C", "ICES GEUS01 F Part 2"],
                ["Module 5", "5 days", "Use and Understanding of Surveying Instruments", "ICES GEUS02 A-G"],
                ["Module 6", "4 days", "Application of Geometric Principles", "ICES GEUS03 A-E"],
                ["Module 7", "1 day", "Ability to Use ICT in Surveying", "ICES GEUS04 A-D"],
              ].map(([mod, dur, title, ices], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3 font-bold text-foreground">{mod}</td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{dur}</td>
                  <td className="px-4 py-3 text-foreground">{title}</td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{ices}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Module content in detail */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Module Content</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What Each Module Covers</h2>
          <div className="space-y-6">
            {[
              {
                mod: "Module 1",
                title: "Desktop Survey and Site Reconnaissance (1 Day): ICES GEUS01 A-D",
                items: [
                  "Understanding relevant specifications and standards: PAS128 and PAS256",
                  "Obtaining, interpreting and understanding limitations of stats plans, statutory undertakers' records, and different plans including service records and other available data",
                  "Assessment of formal and informal sources of information to build an overview of utility networks and buried services on the survey site",
                  "Site reconnaissance: methods of identifying buried utilities prior to geophysical detection, providing a rough sketch and marking assumed routes on a blank base plan",
                  "Applicable licensing requirements and legislation: CDM, HSG47, NRSWA, Management Act",
                ],
              },
              {
                mod: "Module 2",
                title: "Advanced EM Locators (3 Days): ICES GEUS01 E and G",
                items: [
                  "Effective use of electromagnetic methods for locating buried services: understanding how an EM locator works, signal direction, current direction, and specific electromagnetic principles",
                  "Direct connection, induction clamp, sonde, induction and passive modes at different frequencies",
                  "Basic electrical theory, electrical circuits, and distorted magnetic fields affecting locate accuracy",
                  "Locating without a locator using stats plans, visual clues, and ground conditions on quiet roads and live sites",
                  "Practical test: a two man team to survey a small site area, locating buried utilities in different situations using own equipment",
                  "Identifying where alternative detection methods are suitable or required",
                  "Geophysical methods overview: electromagnetic theory, electromagnetic conductivity, seismic, electrical resistivity, microgravity",
                  "Acoustic pipe detection methods and gyroscopic techniques",
                ],
              },
              {
                mod: "Module 3",
                title: "GPR Theory and Practical Use (1 Day): ICES GEUS01 F Part 1",
                items: [
                  "Licensing requirements for ground penetrating radar operation",
                  "Different GPR technologies and their applications across ground conditions",
                  "Methods of GPR survey on a typical utility survey site",
                  "GPR theory: signals, radargrams, hyperbola interpretation",
                  "Set up, controls, and practical approach to ground penetrating radar GPR equipment use",
                  "Practical use on site including grid surveys and recording actual findings",
                  "PAS128 Level B GPR detection methods for locating buried services",
                ],
                note: "Module 3 is a prerequisite for Module 4. Modules 3 and 4 can be taken together as a standalone three-day GPR course.",
              },
              {
                mod: "Module 4",
                title: "Advanced GPR Data Collection and Post Processing (2 Days): ICES GEUS01 F Part 2",
                items: [
                  "Data collection: GPS and TPS integration, grid projects, multi-array antenna use on the same survey site",
                  "Data interpretation in the field and non post processing techniques",
                  "Data processing: filters, hyperbola fitting, interpolation of 2D data into 3D cubes and time slices",
                  "Post processing software: Object Mapper (importing, markers, polylines, exporting to CAD for geospatial data collection)",
                ],
              },
              {
                mod: "Module 5",
                title: "Use and Understanding of Surveying Instruments (5 Days): ICES GEUS02 A-G",
                items: [
                  "Total stations: operation, checking and adjustment",
                  "GNSS: static and kinematic methods",
                  "Levels: optical, electronic and digital",
                  "Instrument checking and adjustment within equipment boundaries",
                  "Accessories: checking and adjustment",
                  "Other distance measurement methods: tape, Disto, measuring wheel",
                ],
              },
              {
                mod: "Module 6",
                title: "Application of Geometric Principles (4 Days): ICES GEUS03 A-E",
                items: [
                  "Calculating 3D coordinate geometry using manual and computerised methods",
                  "2D and 3D survey control: intersections, resections, free station, traverse, network and geometric configurations",
                  "Adjustment of survey measurements: redundant observations, principles of least squares, residuals, standard errors, error ellipses",
                  "Measurement of heights: height datum, datum transformations, geoid and spheroid separations",
                  "Error propagation",
                ],
              },
              {
                mod: "Module 7",
                title: "ICT in Surveying (1 Day): ICES GEUS04 A-D",
                items: [
                  "Transfer of utility survey and subsurface mapping data between instrument and computer",
                  "Electronic processing of utility survey data: geometric networks, GPR data, GNSS data",
                  "Use and manipulation of 3D utility data with digital ground models",
                  "CAD: general principles, structure, layering and UCS",
                ],
              },
            ].map(({ mod, title, items, note }) => (
              <div key={mod} className="rounded-xl border border-border overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-0.5">{mod}</p>
                  <p className="text-white font-black">{title}</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-2">
                    {items.map((item, i) => (
                      <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                        <span className="text-accent font-bold shrink-0">&#8250;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {note && (
                    <div className="mt-4 bg-amber-50 dark:bg-amber-950/20 border border-border rounded-lg px-4 py-3">
                      <p className="text-sm text-muted-foreground">{note}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
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
                title: "TSA Certificate in Utility Mapping",
                desc: "TSA and ICES recognised certificate in utility mapping on completion of all seven modules. Delegates who successfully complete the course receive full professional recognition as a utility surveyor.",
              },
              {
                title: "Portfolio Evidence",
                desc: "Documented portfolio evidence across all seven modules for professional records, including practical skills demonstrated to the examiner and methods learned throughout the programme.",
              },
              {
                title: "CICES Membership Pathway",
                desc: "Eligibility to apply for Chartered Institution of Civil Engineering Surveyors membership, supporting your career in the utility sector.",
              },
              {
                title: "Professional Recognition",
                desc: "Industry-recognised qualification for utility mapping and surveying career progression on infrastructure projects.",
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
          <Image src="gpr-02" width={1200} height={800} alt="TSA utility mapping training with GPR" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="gpr-01" width={1200} height={800} alt="ICES utility mapping practical assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="em-05" width={1200} height={800} alt="Utility mapping survey fieldwork training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Assessment and Safety */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Assessment and Safety</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">How Utility Surveyor Training Is Assessed</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Modules that include a practical operational test require delegates to demonstrate the methods learned under exam conditions. A written exam covers graphical and written questions on surveying methodology, basic electrical theory, and the knowledge required to successfully complete the course. Delegates must achieve the overall pass mark, and the exam score and overall exam score are recorded as part of your portfolio evidence.
              </p>
              <p>
                The practical test typically involves a two man team to survey a small site area on the same survey site, locating buried utilities in different situations using own equipment. Delegates must demonstrate competence in locating without a locator using stats plans and visual inspection, as well as with an EM locator at different frequencies. The practical approach is assessed against ICES competency criteria and demonstrated to the examiner in real survey conditions.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Safety is integrated throughout the utility surveyor training programme. Each module includes a risk assessment component, and delegates learn to work safely with appropriate PPE on live sites including power station compounds, quiet roads, and areas with buried services. Understanding ground conditions, distorted magnetic fields near electrical circuits, and signal direction when locating buried utilities are all essential practical skills covered in the programme.
              </p>
              <p>
                Sygma Solutions provides all assessment materials and support. Delegates are required to successfully complete each module's assessments before progressing. The test two man team format ensures every utility surveyor can demonstrate practical competence in a typical utility survey environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible booking options */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Flexible Module Booking</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">How to Take the Programme</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The programme is designed to be taken as a complete pathway but can also be accessed module by module. Individual modules are available as standalone courses for delegates with specific development needs.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-5 py-3 font-bold">Option</th>
                <th className="text-left px-5 py-3 font-bold">What It Covers</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Complete programme", "All seven modules (full ICES competency coverage and ProQual Level 4 or 5 pathway evidence)"],
                ["Modules 1-4 only", "Full PAS128 B competency: desktop, site recon, advanced EM, GPR theory, GPR post processing"],
                ["Modules 3 and 4 together", "Three-day standalone GPR course: theory, practical use and post processing"],
                ["Modules 5-7", "Surveying instruments, geometric principles and ICT (for those already competent in PAS128 detection methods)"],
                ["Individual modules", "Any module can be taken standalone based on specific development needs"],
              ].map(([option, what], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-5 py-3 font-semibold text-foreground align-top">{option}</td>
                  <td className="px-5 py-3 text-muted-foreground">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Qualification pathway */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Qualification Pathway</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">The Route to ProQual Level 4 and Level 5</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The TSA and ICES Utility Mapping Programme provides the structured training evidence that underpins the ProQual Level 4 Diploma and Level 5 Diploma in Utility Mapping and Surveying. Delegates completing the programme generate assessed portfolio evidence across all ICES competency domains. Sygma Solutions is the only provider offering the complete pathway from this utility surveyor training programme through to a certificate in utility mapping at every ProQual level.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-5 py-3 font-bold">Qualification</th>
                  <th className="text-left px-5 py-3 font-bold">ICES Competencies Required</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    qual: "ProQual Level 3 Certificate",
                    to: "/courses/level-3-certificate",
                    ices: "GEUS01 A-G, F Part 1",
                  },
                  {
                    qual: "ProQual Level 4 Diploma",
                    to: "/courses/level-4-diploma",
                    ices: "Full GEUS01, GEUS02 A-G",
                  },
                  {
                    qual: "ProQual Level 5 Diploma",
                    to: "/courses/level-5-diploma",
                    ices: "Full GEUS01-GEUS04",
                  },
                ].map(({ qual, to, ices }, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-5 py-3 font-semibold align-top">
                      <Link href={to} className="text-primary underline underline-offset-2">{qual}</Link>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{ices}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Sygma */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Sygma</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Train With Sygma?</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              title: "TSA Approved",
              body: "Sygma is an approved TSA training provider for utility mapping and surveying.",
            },
            {
              title: "Led by Working Utility Surveyors",
              body: "Trainers who actively work in utility surveying on infrastructure projects and bring real knowledge of surveying methodology and ground conditions to every module.",
            },
            {
              title: "Independent",
              body: "Sygma is independent and owns the training process from start to finish.",
            },
            {
              title: "Practical Assessment",
              body: "Every module includes a practical operational test and assessment, not just theory. Delegates locate buried services on a real survey site and demonstrate practical skills to the examiner.",
            },
            {
              title: "Flexible Delivery",
              body: "Open courses throughout the year or private in-house delivery for teams.",
            },
            {
              title: "Career Pathway",
              body: "The programme directly supports ProQual Level 4 and Level 5 qualifications.",
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
              Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding support for the TSA and ICES programme. Availability varies by employer and is not guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Related courses */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Related Training</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Related Courses and Qualifications</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "5 Day PAS128 Surveyor Course",
              desc: "Covers Modules 1 to 3 content in one intensive week, with written exam and practical assessment. A natural first step before the wider programme.",
              to: "/courses/5-day-pas128-surveyor",
            },
            {
              title: "GPR Training",
              desc: "Equivalent to Modules 3 and 4 as standalone GPR training. Module 1 (theory and practical use) and Module 2 (advanced post processing) available individually or combined.",
              to: "/courses/gpr-training",
            },
            {
              title: "PAS128 Awareness",
              desc: "Entry-level awareness of the PAS128 standard for those who commission, receive or act on utility surveys.",
              to: "/courses/pas128-awareness",
            },
            {
              title: "ProQual Level 3 Certificate",
              desc: "The first nationally recognised qualification on the utility mapping pathway. Evidence from Modules 1-3 supports this qualification.",
              to: "/courses/level-3-certificate",
            },
            {
              title: "ProQual Level 4 Diploma",
              desc: "Higher-level qualification requiring evidence from Modules 1-5. The programme provides the training foundation.",
              to: "/courses/level-4-diploma",
            },
            {
              title: "ProQual Level 5 Diploma",
              desc: "The full professional qualification requiring evidence from all seven modules across GEUS01-GEUS04.",
              to: "/courses/level-5-diploma",
            },
          ].map(({ title, desc, to }) => (
            <Link
              key={title}
              href={to}
              className="group bg-background rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="gpr-06" width={1200} height={800} alt="Ground penetrating radar training equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="gpr-05" width={1200} height={800} alt="TSA ICES utility survey practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="em-06" width={1200} height={800} alt="Utility mapping and detection training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* FAQs */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About the TSA and ICES Utility Mapping Programme</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Open course dates available for individual utility surveyor training modules throughout the year. Private in-house delivery of the full training course or selected modules can be arranged for teams. Contact Sygma Solutions to plan your training pathway.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About the Full Programme
            </Link>
            <Link href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Book an Individual Module
            </Link>
          </div>
        </div>
      </section>
    </>
);
}

