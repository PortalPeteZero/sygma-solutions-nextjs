import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const faqs = [
  {
    q: "Do I need prior GPR experience for Module 1?",
    a: "No. Module 1 starts from first principles and is suitable for surveyors who have never operated GPR before. The classroom session builds the theoretical foundation before any practical work.",
  },
  {
    q: "Can I attend Module 2 without doing Module 1?",
    a: "Yes, provided you have a good working knowledge of GPR functions and operation. Ideally you will have completed Module 1 or equivalent training. If you are unsure whether your existing knowledge is sufficient, contact the bookings team before enrolling.",
  },
  {
    q: "What GPR equipment is used on the course?",
    a: "The course uses MALA Easy Locator GPR equipment including the HDR and HDR Pro models as standard. For in-house delivery, the course can be adapted for Leica DS2000, Leica DSX, and other client-supplied GPR systems. MALA-specific variants of both modules are available for open courses. Delegates who wish to use alternative GPR equipment should discuss this with the bookings team in advance.",
  },
  {
    q: "What post processing software is covered in Module 2?",
    a: "Module 2 covers Object Mapper software, including importing, processing, filtering, hyperbola fitting and exporting to CAD. Google Maps and Google Earth integration is also covered.",
  },
  {
    q: "Is GPR training available in-house?",
    a: "Yes. Both modules are available as private in-house courses delivered at your premises or a site of your choice. Contact the bookings team to discuss dates and logistics.",
  },
  {
    q: "How does this training relate to PAS128?",
    a: "GPR is a specified detection method within PAS128 Level B. Completing both GPR training modules equips surveyors to conduct PAS128 Level B GPR surveys. For the full PAS128 training programme covering Levels D, C and B, see the 5 Day PAS128 Surveyor Course.",
  },
];

export const metadata: Metadata = {
  title: 'GPR Training for Utility Surveyors | Sygma Solutions',
  description: 'Ground penetrating radar training covering GPR technology, practical use and post-processing. Delivered by GPR experts with equipment selection guidance.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/gpr-training' },
  openGraph: {
    title: 'GPR Training for Utility Surveyors | Sygma Solutions',
    description: 'Ground penetrating radar training covering GPR technology, practical use and post-processing. Delivered by GPR experts with equipment selection guidance.',
    url: 'https://sygma-solutions.com/courses/gpr-training',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/Utility-Mapping-01', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function GprTraining() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "GPR Training for Utility Surveyors", description: "Ground penetrating radar training covering GPR technology, practical use and post-processing. Delivered by GPR experts with equipment selection guidance.", url: "/courses/gpr-training", credential: "GPR Training for Utility Surveyors Certificate", duration: "Variable", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/utility-mapping-surveying" }, { label: "GPR Training for Utility Surveyors" }]) }} />
<InnerPageHero
        eyebrow="Utility Mapping"
        headline="GPR Training: Theory, Practical Use and Post Processing for Utility Surveyors"
        sub="Ground Penetrating Radar is the detection method that reveals what an electromagnetic locator cannot. This two-module GPR training programme covers GPR technology from the science behind a radargram to GPS-integrated data collection and full post processing in Object Mapper software. Elevate your surveying skills with expert-led ground penetrating radar training. Book individually or take both modules together."
        image="Utility-Mapping-01"
        alt="Ground penetrating radar training using professional GPR survey equipment"
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "GPR Training" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["2 Modules", "Take together or separately"],
            ["CITB Approved", "CITB-approved training"],
            ["TSA Approved", "Survey Association approved"],
            ["EUSR Accredited", "ProQual Approved Centre"],
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
          <Image src="Utility-Mapping-01" width={1200} height={800} alt="GPR training - practical session with survey equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover object-top aspect-[4/3] w-full" />
          <Image src="Utility-Mapping-02" width={1200} height={800} alt="GPR training - hands-on field assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover object-top aspect-[4/3] w-full" />
          <Image src="MALA-GPR-25" width={1200} height={800} alt="GPR training - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover object-top aspect-[4/3] w-full" />
        </div>
      </section>
      {/* Course introduction */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What This Course Covers</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The Complete GPR Training Programme</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Electromagnetic locating is the foundation of most utility surveys, but it cannot detect all services. Non-conductive pipes, poorly connected systems, congested utility corridors and services with no viable connection point all present challenges that ground penetrating radar is uniquely placed to address. But GPR technology is only useful when the operative knows how to set it up correctly, read the data in the field, and extract meaningful GPR insights from the results. Equipment selection, correct configuration, and accurate post processing all determine whether a ground penetrating radar survey adds genuine value or generates misleading data.
              </p>
              <p>
                Sygma's GPR training programme is structured in two modules that work together as a complete system. Module 1 builds the theoretical knowledge and practical skills needed to operate GPR equipment on a live survey site. Module 2 takes that capability further, covering GPS-integrated data collection, grid surveys, multi-array antennas and the full post processing workflow in Object Mapper software.
              </p>
              <p>
                The two modules are run as a two-day course or can be taken individually depending on existing knowledge and training needs. Module 2 requires either completion of Module 1 or a solid working knowledge of GPR operation.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Module 1</p>
              <p className="font-bold text-foreground mb-2">GPR Theory and Practical Use</p>
              <p className="text-sm text-muted-foreground">1 day. No prior GPR experience required. Theory, radargram reading, and practical site survey.</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Module 2</p>
              <p className="font-bold text-foreground mb-2">Data Collection and Post Processing</p>
              <p className="text-sm text-muted-foreground">1 day. Prerequisite: Module 1 or solid working knowledge. GPS data collection, Object Mapper software, CAD export.</p>
            </div>
            <div className="bg-muted/30 border border-border rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Both Modules</p>
              <p className="font-bold text-foreground mb-2">Two-Day Combined Course</p>
              <p className="text-sm text-muted-foreground">Complete GPR training in two consecutive days. Recommended for new entrants and full refreshers.</p>
            </div>
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
                  <th className="text-left font-bold text-foreground pb-3 pr-6 w-1/2">Who</th>
                  <th className="text-left font-bold text-foreground pb-3">Which Module</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Utility surveyors new to GPR", "Module 1 (start here)"],
                  ["Surveyors who can operate GPR on site but want to extend to post processing", "Module 2 (if you already understand GPR fundamentals)"],
                  ["Surveyors who need both (complete beginners or those refreshing both skills)", "Both modules as a two-day course"],
                  ["Delegates on the 5 Day PAS128 Surveyor Course who want standalone GPR training", "Both modules complement the 5 Day course content"],
                  ["TSA and ICES programme delegates covering ICES GEUS01 F", "Module 1 covers Part 1; Module 2 covers Parts 2 and beyond"],
                ].map(([who, which]) => (
                  <tr key={who}>
                    <td className="py-3 pr-6 text-foreground font-semibold align-top">{who}</td>
                    <td className="py-3 text-muted-foreground align-top">{which}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Module 1 content */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Module 1</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">GPR Theory and Practical Use</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Duration: 1 day (approximately 08:30 to 15:00). No prior GPR experience required. Equipment used: MALA Easy Locator GPR (HDR and HDR Pro) as standard; Leica DS2000 and Leica DSX available for in-house delivery.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Classroom Content</h3>
            <div className="space-y-2">
              {[
                "Introduction to GPR and its role in utility surveying",
                "Theory of GPR: what a GPR signal is and how it travels through the ground",
                "What is a radargram: how to read and interpret the display",
                "Hyperbola and layer reflectors: identifying utilities in GPR data",
                "GPR frequency and its effect on depth penetration and resolution",
                "Signal velocity: how soil conditions affect GPR performance",
                "HDR (High Dynamic Range) technology on compatible equipment",
                "Depth measurement and how to improve accuracy",
                "GPR limitations: what the technology cannot reliably detect and why",
                "Radar data examples: real-world GPR outputs discussed and analysed",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Practical Content</h3>
            <div className="space-y-2">
              {[
                "How to conduct a GPR survey as part of a full utility survey",
                "Setting up the equipment: controls, features and wheel calibration",
                "Setting up a grid and establishing a baseline",
                "GPS integration: linking GPR data to a georeferenced grid",
                "Practical survey session on site",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 dark:bg-amber-950/20 border border-border rounded-lg p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">PPE</p>
              <p className="text-sm text-muted-foreground">Appropriate PPE to comply with national and company health and safety requirements throughout practical elements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 2 content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Module 2</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Data Collection and Post Processing</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Duration: 1 day (approximately 08:30 to 15:00). Prerequisite: Module 1 attendance or good working knowledge of GPR operation.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Morning: Data Collection on Site</h3>
              <div className="space-y-2">
                {[
                  "Setting up a baseline",
                  "Setting up the GPR with GPS for georeferenced collection",
                  "Establishing and running a grid system",
                  "Planning the data collection approach",
                  "Data collection using a baseline",
                  "Data collection using GPS",
                  "Use of GPS and TPS for accurate positioning",
                  "Carrying out a Grid Project",
                  "Data collection using a multi-array antenna",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Afternoon: Post Processing</h3>
              <div className="space-y-2">
                {[
                  "Data management: transferring data from the GPR",
                  "Introduction to Object Mapper software",
                  "Importing the data into the software",
                  "Processing the data: what processing does and why it matters",
                  "Using filters: when and why to apply each filter type",
                  "Hyperbola fitting: identifying and confirming utility positions in processed data",
                  "Setting markers and polylines on interpreted features",
                  "Interpolation of 2D data into 3D cubes and time-slice data",
                  "Google Maps and Google Earth integration",
                  "Exporting interpretation to CAD",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-muted/40 border border-border rounded-lg p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Software</p>
                <p className="text-sm text-muted-foreground">Module 2 requires access to Object Mapper software. Sygma provides all required equipment. Delegates wishing to use alternative post processing software should discuss this with the bookings team in advance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking options */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Booking Options</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Individual Modules or Full Two-Day Course</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/40 border border-border">
                <th className="text-left font-bold text-foreground p-4 pr-6">Option</th>
                <th className="text-left font-bold text-foreground p-4 pr-6">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border border border-border border-t-0">
              {[
                ["Module 1 only", "1 day"],
                ["Module 2 only", "1 day"],
                ["Module 1 + Module 2 (two-day course)", "2 days"],
              ].map(([option, duration]) => (
                <tr key={option} className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 pr-6 text-foreground font-semibold align-top">{option}</td>
                  <td className="p-4 pr-6 text-muted-foreground align-top">{duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground bg-muted/30 border border-border rounded-lg p-4">
          Both modules are available as in-house private courses delivered at your premises or as open courses at Sygma's Wigan training centre. MALA Easy Locator specific training variants are available. The Module 1 and Module 2 agendas follow the same structure with additional MALA Easy Locator HDR and HDR Pro content. Speak to the bookings team about suitable dates.
        </p>
      </section>

      {/* Accreditations */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Accreditation</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Approved by the Bodies That Matter in Utility Surveying</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["CITB Approved", "CITB-approved training for the construction sector"],
              ["TSA Approved", "Approved by the Survey Association"],
              ["EUSR Accredited", "Nationally recognised utility sector accreditation"],
              ["ProQual Approved Centre", "Sygma is a ProQual approved centre for utility mapping qualifications"],
            ].map(([acc, detail]) => (
              <div key={acc} className="bg-background rounded-xl border border-border p-5">
                <p className="font-bold text-foreground mb-1">{acc}</p>
                <p className="text-sm text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get at the End */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What You Get at the End</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What You Receive at the End of the Course</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Certificate of Attendance",
                desc: "Completion certificate issued by Sygma confirming successful completion of Module 1 and or Module 2."
              },
              {
                title: "Practical Assessment Record",
                desc: "Detailed record of practical assessments completed on site, documenting competency demonstrated during the course."
              },
              {
                title: "Equipment Confidence",
                desc: "Hands-on experience with MALA Easy Locator GPR equipment. Delegates leave able to operate the equipment independently in the field."
              },
              {
                title: "Ongoing Support",
                desc: "Post-course access to Sygma for technical questions and guidance on GPR application in your specific working environment."
              },
            ].map((card) => (
              <div key={card.title} className="border border-border rounded-lg bg-card p-5">
                <p className="font-bold text-foreground mb-2">{card.title}</p>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-26" width={1200} height={800} alt="Ground penetrating radar practical training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-25" width={1200} height={800} alt="GPR data collection on training site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-11" width={1200} height={800} alt="Delegates learning GPR survey techniques" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* CITB Employer Network */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Funding Support</p>
        <h2 className="text-2xl font-black mb-4 text-foreground">CITB Employer Network</h2>
        <p className="text-muted-foreground leading-relaxed">
          Sygma is a CITB Approved Training Organisation (ATO) and a member of the CITB Employer Network. Employers registered with CITB may be able to access Employer Network funding towards training costs. Contact your CITB adviser or Sygma for guidance on eligibility.
        </p>
      </section>

      {/* Training pathway */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Training Pathway</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Where Ground Penetrating Radar Training Sits in the Utility Surveying Career Path</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            GPR is one of the four detection methods specified in PAS128 Level B. This standalone GPR training programme is the recommended route for surveyors who need to develop or extend their GPR competency outside of the{" "}
            <Link href="/courses/5-day-pas128-surveyor" className="text-primary font-semibold underline underline-offset-2">
              5 Day PAS128 Surveyor Course
            </Link>.
          </p>
          <p>
            For those working towards{" "}
            <Link href="/courses/level-4-diploma" className="text-primary font-semibold underline underline-offset-2">
              ProQual Level 4
            </Link>{" "}
            or Level 5, GPR competency forms a key component of the ICES GEUS01 F evidence requirement. Module 1 covers ICES GEUS01 F Part 1; Module 2 takes the evidence further into post processing.
          </p>
          <p>
            For delegates working through the full ICES competency framework, both GPR modules form part of the{" "}
            <Link href="/courses/tsa-ices-utility-mapping" className="text-primary font-semibold underline underline-offset-2">
              TSA and ICES Utility Mapping Programme
            </Link>.
          </p>
        </div>
        </div>
      </section>

      {/* Related courses */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Related Training</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Related Courses and Next Steps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "5 Day PAS128 Surveyor Course",
                desc: "Includes GPR training within the full surveyor programme",
                to: "/courses/5-day-pas128-surveyor",
              },
              {
                title: "TSA and ICES Utility Mapping Programme",
                desc: "Full ICES competency programme including GPR modules",
                to: "/courses/tsa-ices-utility-mapping",
              },
              {
                title: "PAS128 Awareness",
                desc: "Entry-level PAS128 understanding for those who procure or interpret surveys",
                to: "/courses/pas128-awareness",
              },
              {
                title: "ProQual Level 3 Certificate",
                desc: "Nationally recognised qualification for utility surveyors",
                to: "/courses/level-3-certificate",
              },
              {
                title: "All Utility Mapping Training",
                desc: "Overview of all utility mapping training and qualification options",
                to: "/training/utility-mapping-surveying",
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

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-25" width={1200} height={800} alt="GPR training equipment demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-19" width={1200} height={800} alt="Ground penetrating radar survey practical" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-28" width={1200} height={800} alt="On-site GPR training with Mala equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
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
      <section className="py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Why Train With Sygma for GPR?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { point: "Hands-On Practical From Day One", desc: "All GPR training includes hands-on practical assessment in real site conditions. Delegates operate GPR equipment on real ground with real targets, not classroom simulations." },
              { point: "GPR Experts Who Survey Professionally", desc: "Sygma's ground penetrating radar trainers are experienced utility surveying experts who use GPR technology operationally. They teach from direct field experience, delivering real GPR insights rather than reading from a script." },
              { point: "Independent of All Manufacturers", desc: "Sygma does not sell ground penetrating radar equipment. Training is delivered without bias toward any specific manufacturer, so delegates learn equipment selection principles and how to get the best out of whatever GPR technology they use. This independence means you receive unbiased GPR insights that elevate your surveying capability." },
              { point: "PAS128 Aligned", desc: "GPR Module 1 and Module 2 together provide the GPR component of PAS128 Level B survey competency. For surveyors working toward PAS128, this is the practical GPR foundation." },
              { point: "Flexible Delivery", desc: "Available as open courses at Sygma's Wigan centre or as private in-house courses at your premises. Modules can be taken individually or together depending on your team's needs." },
              { point: "Post Processing Included", desc: "Module 2 covers post processing with Object Mapper software, including CAD export and Google Maps integration. Delegates leave able to process and interpret their own survey data." },
            ].map((card) => (
              <div key={card.point} className="rounded-lg border border-border bg-card p-5">
                <p className="mb-2 text-sm font-bold text-foreground">{card.point}</p>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About Ground Penetrating Radar Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Open course dates available at Sygma's Wigan training centre. Private in-house bookings arranged to suit your team and location. Our GPR experts will help you choose the right module or combination to elevate your ground penetrating radar surveying skills.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About GPR Training
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
