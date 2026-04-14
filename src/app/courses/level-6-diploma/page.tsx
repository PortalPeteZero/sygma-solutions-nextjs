import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ProQual Level 6 Utility Mapping Course | Sygma Solutions',
  description: 'The highest qualification in utility surveying. For experienced surveyors ready to lead teams, manage projects and drive operational excellence.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/level-6-diploma' },
  openGraph: {
    title: 'ProQual Level 6 Utility Mapping Course | Sygma Solutions',
    description: 'The highest qualification in utility surveying. For experienced surveyors ready to lead teams, manage projects and drive operational excellence.',
    url: 'https://sygma-solutions.com/courses/level-6-diploma',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/gpr-05', width: 1200, height: 630 }],
    type: 'website',
  },
};

const faqs = [
  {
    q: "Do I need to complete Level 5 before enrolling on the ProQual Level 6 Diploma?",
    a: "Yes. The ProQual Level 6 Diploma in utility mapping and surveying management requires the Level 5 Diploma as a prerequisite. To reach Level 5, you must also hold Level 3 and Level 4 in the utility mapping and surveying pathway. Sygma can assess your current qualifications and advise on the fastest route to Level 6 if you are at an intermediate stage of the geomatics and site surveying pathway.",
  },
  {
    q: "How long does the ProQual Level 6 Diploma take to complete?",
    a: "The time required varies depending on your current site surveying management role, the availability of evidence from your workplace and how quickly you work through the mandatory units and portfolio stages. Your Sygma assessor will agree a realistic timeline with you at the initial evidence planning session. Most qualification candidates complete the 6 Diploma in utility mapping over a period of several months of active evidence compilation from their site surveying operations.",
  },
  {
    q: "How much does the Level 6 Diploma cost?",
    a: "The Level 6 is priced on application. Contact Sygma directly for a fee proposal. The fee is fixed from the point of registration with no additional charges as you progress through the portfolio. ProQual registration fees are payable separately to ProQual Awarding Body.",
  },
  {
    q: "Is the ProQual Level 6 Diploma assessed by exam?",
    a: "No. The ProQual Level 6 Diploma in utility mapping and surveying management is assessed entirely through a portfolio of workplace evidence. There are no examinations, written tests or classroom assessments. Your site surveying evidence is reviewed by a Sygma assessor and then submitted to ProQual for external verification.",
  },
  {
    q: "Can I do the Level 6 alongside my normal job?",
    a: "Yes. The portfolio-based assessment model is specifically designed to fit around your working life. Your evidence comes from your actual management practice, so you are not required to attend extended training programmes. Assessor reviews can be conducted remotely, reducing time away from your role.",
  },
  {
    q: "Does the ProQual Level 6 Diploma help with ICES and CSTMB accreditation?",
    a: "The ProQual Level 6 Diploma demonstrates site surveying management competency at the highest level within utility mapping and surveying. While the diploma itself is a ProQual qualification, the evidence you compile may also support ICES or CSTMB membership applications at senior grades, enhancing your career prospects as an experienced professional. Speak to your Sygma assessor about how to structure your portfolio to maximise its value across multiple industry standards frameworks.",
  },
  {
    q: "What career progression does the Level 6 Diploma support?",
    a: "Career progression from the ProQual Level 6 Diploma can include roles such as Senior Utility Surveyor, Project Manager, Operations Director or Technical Director within the geomatics and site surveying sector. The diploma in utility mapping and surveying management emphasises both internal organisational processes and standard industry practices, making it recognised across civil engineering, infrastructure development and construction projects. Graduates can also apply for the Manager CSCS Card after passing the relevant CITB Health, Safety and Environment test.",
  },
  {
    q: "What are the mandatory units in the Level 6 Diploma?",
    a: "The ProQual Level 6 Diploma covers mandatory units across site surveying management including managing survey operations, project and programme management, health safety and legal compliance, quality management and assurance, team leadership and development, commercial and client management, technical oversight, and data reporting and ICT. Learning outcomes span the ability to plan site surveying processes, identify mapping and data requirements, present spatial data, produce mapping data, manage site surveying information and site surveying management identify and manage operational risks.",
  },
  {
    q: "What practical skills and advanced surveying techniques does the Level 6 cover?",
    a: "While the Level 6 is a management qualification, it requires you to demonstrate technical expertise and advanced knowledge of practical skills used in site surveying. This includes strategic oversight of ground penetrating radar, electromagnetic location and other advanced surveying techniques. You must show you can manage geospatial data collection, geospatial data analysis and the use of geographic information systems across different site surveying operations. The diploma also covers interpreting complex data from underground utility detection and ensuring accurate utility mapping through quality assurance frameworks to meet regulatory compliance requirements.",
  },
  {
    q: "How does the Level 6 Diploma relate to civil engineering and infrastructure projects?",
    a: "The ProQual Level 6 Diploma is directly relevant to project managers and operations managers working on civil engineering, construction projects and infrastructure development programmes. The site surveying management competencies cover asset management, utility infrastructure oversight, risk assessment, identifying hazards and implementing risk reduction methods to control risks across large-scale infrastructure management projects. Utility mapping and surveying plays a critical safety role in infrastructure projects, and the Level 6 qualification provides the advanced knowledge to manage these operations effectively while meeting project requirements.",
  },
];

export default function Level6Diploma() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "ProQual Level 6 Diploma in Utility Mapping and Surveying Management", description: "The highest qualification in the utility surveying pathway. Designed for experienced surveyors ready to lead teams, manage projects and drive operational excellence.", url: "/courses/level-6-diploma", credential: "Level 6 Diploma in Utility Surveying", duration: "Part-time", mode: ["blended"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/utility-mapping-surveying" }, { label: "Level 6 Diploma" }]) }} />

      <InnerPageHero
        eyebrow="Qualifications"
        headline="ProQual Level 6 Diploma in Utility Mapping and Surveying Management"
        sub="The ProQual Level 6 utility mapping qualification is the highest in the utility surveying pathway. Designed for experienced professionals in geomatics and site surveying who are ready to lead teams, manage projects and drive operational excellence across infrastructure development and civil engineering programmes."
        images={[
          "gpr-12",
          "gpr-03",
          "gpr-08",
        ]}
        alts={["Advanced electromagnetic locating for ProQual Level 6 utility mapping diploma", "Professional MALA GPR survey techniques at Level 6 diploma standard", "Complex ground penetrating radar data analysis during Level 6 training"]}
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "Level 6 Diploma" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["Level", "Level 6 (QCF/RQF)"],
            ["Awarding Body", "ProQual Awarding Body"],
            ["Pricing", "Price on application"],
            ["Equipment", "MALA GPR, Leica DSX, Radiodetection RD8200"],
            ["Prerequisites", "Level 3 + Level 4 + Level 5 required"],
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
          <Image src="gpr-10" alt="Level 6 Diploma utility mapping - practical session" width={800} height={600} className="rounded-lg w-full" sizes="(max-width: 768px) 100vw, 33vw" />
          <Image src="gpr-11" alt="Level 6 Diploma utility mapping - hands-on assessment" width={800} height={600} className="rounded-lg w-full" sizes="(max-width: 768px) 100vw, 33vw" />
          <Image src="gpr-01" alt="Level 6 Diploma utility mapping - on-site delivery" width={800} height={600} className="rounded-lg w-full" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
      </section>

      {/* What is Level 6 */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">The Qualification</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">
              What Is the ProQual Level 6 Diploma in Utility Mapping and Surveying Management?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The ProQual Level 6 Diploma in Utility Mapping and Surveying Management is the highest qualification available in the ProQual utility surveying pathway. It is designed for experienced professionals who are ready to step into a site surveying management, supervisory or technical leadership role within utility mapping and surveying operations. The diploma covers the management of site surveying across civil engineering, infrastructure development and construction projects, including the oversight of spatial data, mapping data and underground utility asset management.
              </p>
              <p>
                Where Level 3 builds the foundation, Level 4 advances technical EM and GPR skills, and Level 5 demonstrates full PAS128 surveying competency, Level 6 is about managing the people, processes and performance that make site surveying operations work. Qualification candidates learn to plan site surveying processes, identify mapping and data requirements, present spatial data to project stakeholders and produce mapping data that meets industry standards for geomatics and site surveying.
              </p>
              <p>
                The qualification is delivered on a portfolio basis covering mandatory units aligned to the learning outcomes for site surveying management. There are no exams. Candidates compile evidence of competency from their own workplace practice, supported by their Sygma assessor throughout the process. Portfolio evidence is drawn from real site surveying operations and demonstrates your ability to manage utility mapping projects, control risks and identify hazards in a working environment.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">This qualification is for you if...</p>
            <div className="space-y-3">
              {[
                "You lead or manage a utility survey team or site surveying operation",
                "You are responsible for PAS128 quality management, regulatory compliance and deliverable sign-off",
                "You manage client relationships and site surveying project delivery end-to-end across infrastructure projects",
                "You already hold Level 5 and are ready to formalise your management expertise in geomatics and site surveying",
                "You work on major civil engineering or construction projects where a management-level qualification is expected",
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

      {/* Full-width image */}
      <div className="w-full overflow-hidden">
        <Image src="gpr-06" alt="Level 6 Diploma utility mapping - advanced electromagnetic survey training" width={1200} height={900} className="w-full h-auto" sizes="100vw" />
      </div>

      {/* Who it's for */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Who Is This Qualification For?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Survey Team Leaders",
                body: "Experienced professionals now responsible for managing a team of utility mapping operatives on site surveying projects or across multiple contracts. The diploma validates your ability to plan site surveying and manage site surveying operations.",
              },
              {
                title: "Project Managers",
                body: "Project managers overseeing utility mapping or PAS128 survey projects end-to-end, including client relationships, project requirements, mapping data deliverables and programme management across civil engineering and infrastructure projects.",
              },
              {
                title: "Operations Managers",
                body: "Overseeing utility mapping business operations, including quality assurance, regulatory compliance, asset management, resource planning and site surveying service delivery. Operations manage the full cycle from underground utility detection through to presenting spatial data to clients.",
              },
              {
                title: "Senior Surveyors Moving Into Management",
                body: "Level 5 qualified utility surveyors ready to formalise their site surveying management expertise, develop advanced knowledge of geomatics and site surveying, and move into a recognised senior or leadership grade.",
              },
              {
                title: "Training and Assessment Roles",
                body: "Practitioners moving into internal training, mentoring or workplace assessment functions within a utility mapping operation, including those responsible for identifying hazards, implementing risk reduction methods and managing health and safety aspects of site surveying.",
              },
              {
                title: "Contractors and Framework Operators",
                body: "Contractors on major infrastructure development frameworks and construction projects where a Level 6 management qualification in geomatics and site surveying supports contract compliance and quality audit requirements.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 bg-amber-50 dark:bg-amber-950/20 border border-border rounded-lg p-4">
            <span className="font-bold text-foreground">Entry requirements:</span> ProQual Level 3 Certificate, Level 4 Diploma, and Level 5 Diploma in Utility Mapping and Surveying. All three preceding qualifications must be in place before enrolment on the Level 6.
          </p>
        </div>
      </section>

      {/* What the Level 6 covers */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Competency Areas</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">What the Level 6 Diploma Covers</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The ProQual Level 6 Diploma is built on portfolio-based evidence drawn from your own workplace. The content detailed curriculum structure covers mandatory units mapped to the management of site surveying operations at a senior level, with learning outcomes spanning geomatics and site surveying management.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-white">
                <th className="text-left px-4 py-3 font-bold">Management Area</th>
                <th className="text-left px-4 py-3 font-bold">What It Demonstrates</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  area: "Managing Survey Operations",
                  detail: "Planning and overseeing utility mapping programmes, allocating resources for site surveying, monitoring progress and ensuring PAS128 deliverable quality across all Quality Levels (A through D). Demonstrates the ability to plan site surveying processes and manage site surveying operations understand project requirements.",
                },
                {
                  area: "Project and Programme Management",
                  detail: "Managing utility mapping projects from inception to closeout across civil engineering and construction projects, including programme planning, stakeholder liaison, risk management, project requirements and handover of survey reports, mapping data and spatial data.",
                },
                {
                  area: "Health, Safety and Legal Compliance",
                  detail: "Ensuring site surveying operations comply with current legislation, CDM 2015, PAS128, HSG47 and applicable network operator requirements. Managing health and safety aspects including the ability to identify hazards, control risks and implement risk reduction methods within a site surveying context. Covers risk assessment and regulatory compliance for underground utility detection operations.",
                },
                {
                  area: "Quality Management and Assurance",
                  detail: "Establishing and maintaining quality assurance processes for geospatial data collection, accurate utility mapping, report production and deliverable accuracy. Managing quality audit findings and implementing corrective actions. Produce mapping data to industry standards and present mapping data understand project requirements.",
                },
                {
                  area: "Team Leadership and Development",
                  detail: "Leading, supervising and developing a team of utility surveyors. Managing performance, supporting CPD, conducting reviews and developing training plans within a site surveying operation. Communicate effectively with team members and stakeholders to ensure site surveying information flows across the operation.",
                },
                {
                  area: "Commercial and Client Management",
                  detail: "Managing client relationships, contracts and commercial performance within utility mapping operations. Producing and reviewing tender submissions, scope documents and variation management.",
                },
                {
                  area: "Technical Oversight",
                  detail: "Maintaining strategic technical oversight of electromagnetic location (EM), ground penetrating radar (GPR) and other advanced surveying techniques in use across the operation. Utilize advanced tools for underground utility detection and demonstrate technical expertise in site surveying management.",
                },
                {
                  area: "Data, Reporting and ICT",
                  detail: "Overseeing the management of utility survey data, including geographic information systems, geospatial data analysis, complex data sets, spatial data outputs, CAD deliverables and e-portfolio or digital records management. Produce mapping data and detailed reports for asset management and infrastructure management purposes.",
                },
              ].map(({ area, detail }, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3 font-semibold text-foreground align-top w-64">{area}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "ProQual Level 6 Diploma in Utility Mapping and Surveying Management registered on the RQF",
              "Portfolio of Evidence Record covering all mandatory units and learning outcomes",
              "External Assessment Report with detailed reports on each competency area",
              "Career prospects enhanced through formal recognition in geomatics and site surveying management",
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
        <div className="overflow-hidden rounded-lg">
          <Image src="gpr-07" alt="Level 6 Diploma advanced training session" width={800} height={600} className="w-full h-auto hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="gpr-09" alt="Advanced utility survey training for Level 6" width={800} height={600} className="w-full h-auto hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="em-01" alt="Advanced electromagnetic detection training" width={800} height={600} className="w-full h-auto hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
      </div>

      {/* How assessment works */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Assessment Process</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Portfolio-Based Assessment: No Exams</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The ProQual Level 6 Diploma is assessed entirely through a portfolio of workplace evidence. There are no examinations or classroom-based assessments. Qualification candidates compile evidence from their day-to-day site surveying management practice and submit it through an e-portfolio system. The assessment covers all mandatory units within the diploma in utility mapping and surveying management.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                step: "1",
                title: "Registration",
                body: "You register with Sygma as your approved centre. Sygma registers you with ProQual and provides access to the e-portfolio platform and your dedicated assessor.",
              },
              {
                step: "2",
                title: "Assessor Briefing",
                body: "Your Sygma assessor reviews the diploma criteria with you and agrees a personal evidence plan aligned to your current role and day-to-day responsibilities.",
              },
              {
                step: "3",
                title: "Evidence Collection",
                body: "You build your portfolio over time, drawing on workplace evidence such as project records, quality audits, H&S documentation demonstrating how you identify hazards and control risks, training plans, client correspondence and technical reports from site surveying projects.",
              },
              {
                step: "4",
                title: "Assessor Reviews",
                body: "Your assessor reviews your evidence at agreed intervals, providing professional discussion and feedback. Reviews can be conducted as workplace visits or remotely.",
              },
              {
                step: "5",
                title: "Internal Verification",
                body: "Sygma's internal verifier conducts a quality check on your completed portfolio to ensure it meets ProQual standards before external verification.",
              },
              {
                step: "6",
                title: "ProQual Certification",
                body: "ProQual's external verifier reviews the portfolio. On successful verification, your Level 6 Diploma certificate is issued by ProQual Awarding Body.",
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

      {/* What is included */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What Is Included</p>
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Full Support from Registration to Certificate</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your ProQual Level 6 Diploma registration with Sygma includes everything you need to progress through the portfolio. The qualification fee for the diploma in utility mapping and surveying management is fixed from the point of registration with no hidden charges. ProQual registration fees are charged separately.
            </p>
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About Level 6
            </Link>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Included in your registration</p>
            <div className="space-y-3">
              {[
                "Full access to Sygma's e-portfolio platform for evidence upload, assessor communication and progress tracking",
                "A named Sygma assessor from registration to certification, including feedback and professional discussion sessions",
                "Initial evidence planning session to map the diploma in utility mapping criteria to your current site surveying management role",
                "ProQual registration handled by Sygma on your behalf",
                "Internal verification by Sygma's quality team before submission to ProQual",
                "ProQual Level 6 Diploma certificate issued in your name on successful completion",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary font-bold shrink-0 mt-0.5">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualification pathway */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Qualification Pathway</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">
            The Full ProQual Utility Mapping Pathway
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The ProQual utility mapping and surveying pathway is the only end-to-end qualification route in the UK that takes a utility surveyor from practical skills at Level 3 through to site surveying management accreditation at Level 6 Diploma in utility mapping. Every level is delivered by Sygma, providing career pathway continuity in geomatics and site surveying.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-4 py-3 font-bold text-foreground">Level</th>
                  <th className="text-left px-4 py-3 font-bold text-foreground">Qualification</th>
                  <th className="text-left px-4 py-3 font-bold text-foreground">Focus</th>
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
                  <td className="px-4 py-3 text-muted-foreground">PAS128 Quality Levels D and C. The mandatory entry point.</td>
                </tr>
                <tr className="bg-background border-b border-border">
                  <td className="px-4 py-3 font-semibold text-foreground">Level 4</td>
                  <td className="px-4 py-3">
                    <Link href="/courses/level-4-diploma" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">
                      Diploma in Utility Mapping and Surveying
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">Advanced EML and GPR Specialist. PAS128 Quality Level B.</td>
                </tr>
                <tr className="bg-background border-b border-border">
                  <td className="px-4 py-3 font-semibold text-foreground">Level 5</td>
                  <td className="px-4 py-3">
                    <Link href="/courses/level-5-diploma" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">
                      Diploma in Utility Mapping and Surveying
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">Full PAS128 surveyor. ICES GEUS01-GEUS04. 5-day fast-track available.</td>
                </tr>
                <tr className="bg-primary/10 border-b-2 border-primary">
                  <td className="px-4 py-3 font-black text-primary">Level 6</td>
                  <td className="px-4 py-3 font-bold text-foreground">
                    Diploma in Utility Mapping and Surveying Management{" "}
                    <span className="ml-2 inline-block bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">YOU ARE HERE</span>
                  </td>
                  <td className="px-4 py-3 text-foreground font-semibold">Management of utility surveying operations, teams and projects. The pinnacle of the pathway.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg">
          <Image src="em-02" alt="Level 6 Diploma utility management training" width={800} height={600} className="w-full h-auto hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="em-03" alt="GPR data interpretation for Level 6" width={800} height={600} className="w-full h-auto hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="em-04" alt="Advanced qualification practical assessment" width={800} height={600} className="w-full h-auto hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
      </div>

      {/* Why Sygma */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Sygma</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Complete Your Level 6 With Sygma</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "One Provider, Every Level",
              body: "Sygma delivers every level of the ProQual utility mapping and surveying pathway from Level 3 through to the 6 Diploma in utility mapping management. There is no switching between providers, no duplication of evidence and no inconsistency in how your site surveying portfolio is assessed.",
            },
            {
              title: "Assessors Who Know the Industry",
              body: "Your assessor is a qualified utility surveying professional with technical expertise in site surveying management. They understand PAS128, ICES competency standards, industry standards and what a real management role looks like in practice across civil engineering and infrastructure development.",
            },
            {
              title: "Workplace-Based Assessment",
              body: "The ProQual Level 6 Diploma is built around what you already do in site surveying management. You do not need to attend a block of classroom training. Your portfolio evidence comes from your actual job managing site surveying operations.",
            },
            {
              title: "Independent and Objective",
              body: "Sygma is an independent training and assessment provider with no ties to any equipment manufacturer or survey company. Your site surveying portfolio is assessed on what works in practice for accurate utility mapping, not on any commercial interest.",
            },
            {
              title: "Accredited Assessment Centre",
              body: "Sygma is a ProQual Approved Assessment Centre. All portfolios are internally verified and submitted to ProQual through the official approval process.",
            },
            {
              title: "Career Pathway Continuity",
              body: "If you completed your Level 3, 4 or 5 with Sygma, your assessor already knows your background. The Level 6 Diploma in utility mapping portfolio builds on a coherent body of evidence from your full career in site surveying to date, supporting your career prospects in utility management.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-muted/20 rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
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
            <p className="text-muted-foreground leading-relaxed mb-4">Sygma is a CITB Approved Training Organisation. If your business is registered with CITB, speak to your CITB Employer Network adviser about funding support for this qualification. Graduates of the ProQual Level 6 Diploma can apply for the Manager CSCS Card after passing the relevant CITB Health, Safety and Environment test, providing formal career recognition within the construction projects and civil engineering sector.</p>
            <p className="text-muted-foreground leading-relaxed">Contact us for guidance on how to access available support. Funding is not guaranteed and varies by employer.</p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Related Courses</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Expand Your Expertise</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/courses/level-5-diploma" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">Level 5 Diploma</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">The highest operational qualification covering full PAS128 site surveying competency and practical skills in underground utility detection.</p>
          </Link>
          <Link href="/courses/5-day-pas128-surveyor" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">5-Day PAS128 Surveyor</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Intensive training for the technical refresh of operational site surveying skills using advanced tools and utility mapping techniques.</p>
          </Link>
          <Link href="/courses/tsa-ices-utility-mapping" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
            <h3 className="text-base font-bold text-foreground mb-2">TSA and ICES Utility Mapping</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Full TSA and ICES training programme with ICES GEUS competency coverage.</p>
          </Link>
        </div>
      </section>

      {/* Related training */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Related Training</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Training and Development That Complements the Level 6</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            While the ProQual Level 6 Diploma is assessed through portfolio evidence, several Sygma training options may provide useful evidence sources for site surveying management or help complete the prerequisite pathway.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "TSA and ICES Utility Mapping Training Programme",
                body: "Module completions can contribute evidence towards GEUS01-GEUS04 technical oversight units within the Level 6 portfolio.",
                href: "/courses/tsa-ices-utility-mapping",
              },
              {
                title: "PAS128 Awareness",
                body: "Management-level understanding of PAS128 risk, legal liability, safety aspects and quality system requirements. A useful evidence source for quality assurance, regulatory compliance and managing health and safety units within the site surveying management portfolio.",
                href: "/courses/pas128-awareness",
              },
              {
                title: "5 Day PAS128 Surveyor Course",
                body: "For Level 6 candidates who have not yet completed Level 5 formally, this intensive course fulfils the Level 5 prerequisite efficiently.",
                href: "/courses/5-day-pas128-surveyor",
              },
              {
                title: "Bespoke and Corporate Training",
                body: "Sygma designs bespoke management and technical briefing programmes for organisations seeking to develop multiple team members simultaneously, covering utility mapping techniques, asset management and infrastructure management.",
                href: "/bespoke-training",
              },
            ].map(({ title, body, href }) => (
              <div key={title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{body}</p>
                <Link
                  href={href}
                  className="text-primary font-semibold text-sm underline underline-offset-2 hover:text-primary/80"
                >
                  Find out more &#8250;
                </Link>
              </div>
            ))}
          </div>
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
              <p className="text-xs text-muted-foreground">GPS-stamped on-site competency assessment to verify real-world site surveying skills and practical skills in utility mapping.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About the ProQual Level 6 Utility Mapping Diploma</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Price on application. Portfolio-based site surveying management assessment with dedicated assessor support from registration to certificate. Contact us to discuss your current qualifications and get a fee proposal for the ProQual Level 6 Diploma in utility mapping and surveying management.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About Level 6
            </Link>
            <Link
              href="/courses/level-5-diploma"
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
