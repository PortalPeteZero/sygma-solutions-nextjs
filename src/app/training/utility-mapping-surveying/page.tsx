import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import { breadcrumbSchema } from '@/lib/schema';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Utility Mapping & Survey Courses | PAS128 | Sygma',
  description: "Complete utility mapping and surveying training pathway. From PAS128 awareness to ProQual Level 6 Diploma, delivered by the UK's leading specialist provider.",
  alternates: { canonical: 'https://sygma-solutions.com/training/utility-mapping-surveying' },
  openGraph: {
    title: 'Utility Mapping & Survey Courses | PAS128 | Sygma',
    description: "Complete utility mapping and surveying training pathway. From PAS128 awareness to ProQual Level 6 Diploma, delivered by the UK's leading specialist provider.",
    url: 'https://sygma-solutions.com/training/utility-mapping-surveying',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function UtilityMappingHub() {
  const faqs = [
    { q: 'What is the difference between the ProQual Level 3 and Level 4 qualifications?', a: 'The Level 3 Diploma in Utility Mapping covers the foundation of utility mapping and surveying practice: equipment operation, utility detection on a survey site, data recording, and safety. The Level 4 Certificate in Utility Mapping is a higher-level qualification that covers more advanced technical elements, data management, and survey quality. Many utility surveyors hold both Level 3 and Level 4 before progressing to Level 5. Your Sygma adviser will help you determine the right entry point based on your experience and existing knowledge.' },
    { q: 'Do I need PAS128 training to do the ProQual qualifications?', a: 'Not necessarily. PAS128 training and ProQual qualifications are separate routes, though they complement each other. The ProQual pathway covers utility mapping competency broadly. Our GPR and PAS128 specialist training focuses specifically on PAS128 survey methodology, quality levels, and GPR equipment. Many of our clients complete both. We can help you plan the best combination for your role.' },
    { q: 'How long do ProQual qualifications take to complete?', a: 'Levels 2, 3, and 4 are portfolio-based and self-paced. Most candidates complete within 8 to 12 weeks depending on how quickly they can gather evidence and attend professional discussion sessions with their assessor. Level 5 includes a 5-day fast-track intensive delivery at our Wigan or Worcester centres. Level 6 is a management diploma completed through distance learning with tutor support.' },
    { q: 'Can I do the ProQual qualifications entirely online?', a: 'The ProQual Level 3 and Level 5 are available via online delivery through MS Teams for professionals who cannot attend our classroom programmes. Both programmes follow the same assessment framework and award the same qualification. They require existing hands-on utility mapping experience to build your portfolio evidence. Contact us to discuss whether the online route is appropriate for your background.' },
    { q: 'What GPR equipment do you use in training?', a: 'Our GPR training courses are delivered using MALA GPR systems as the primary platform, alongside Leica DS2000 and DSX antenna systems. We also cover Mira Compact in our introductory sessions. Our advanced 2-day course is built around the equipment most widely used on PAS128 utility survey projects in the UK.' },
    { q: 'Is PAS128 training available for non-surveyors?', a: 'Yes. Our PAS128 Awareness programme is specifically designed for service coordinators, project managers, and contract managers who commission, specify, or accept utility surveys. It covers PAS128 quality levels, what compliant survey work looks like, your legal obligations, and how to verify that the surveys you receive meet the standard you have specified. It does not involve operating GPR or survey equipment.' },
    { q: 'Can CITB funding be used for utility mapping qualifications?', a: 'Sygma Solutions is a CITB Approved Training Organisation. Employers registered with CITB may be able to access Employer Network funding towards training costs. Speak to your CITB employer adviser directly to confirm eligibility for your specific courses and funding position. Sygma does not administer CITB grants; all enquiries go through your CITB adviser.' },
    { q: 'What does a PAS128 utility survey involve?', a: 'A PAS128 utility survey follows a structured process. It begins with a desktop utility records search using stats plans and existing utility records, followed by site reconnaissance and visual inspection. Field work involves utility detection using an EM locator in passive modes and active modes at different frequencies, plus ground penetrating radar for deeper buried services. Findings are recorded and processed to produce detailed drawings with positional accuracy appropriate to the survey level specified.' },
    { q: 'How are ProQual utility mapping qualifications assessed?', a: 'Assessment varies by level. Portfolio-based levels require candidates to compile evidence of competence including a practical operational test, graphical and written questions, and professional discussion with their assessor. Some levels include a written exam under formal exam conditions. Candidates must successfully complete all required units and demonstrate the methods learned through their evidence. Our assessors guide you through the process.' },
    { q: 'What detection methods are covered in utility mapping training courses?', a: 'Our training courses cover the full range of detection methods used to locate buried services and buried utilities. This includes EM locator works and principles, passive modes for detecting live cables, active detection at different frequencies using signal transmitters, and ground penetrating radar operation for identifying non-metallic services. Training covers how to survey a small site area through to large-scale utility surveys.' },
    { q: 'What is the difference between utility mapping and utility detection?', a: 'Utility detection refers to the process of locating buried services and underground utility infrastructure using electromagnetic and GPR equipment. Utility mapping is the broader discipline that includes detection alongside desktop utility records search, data recording, post processing of survey data, producing detailed drawings, and delivering reports that meet PAS128 survey level requirements. Our training pathway covers both.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "All Courses", to: "/courses" }, { label: "Utility Mapping & Surveying" }]) }} />

      <InnerPageHero
        eyebrow="Utility Mapping"
        headline="Utility Mapping and Surveying Training: The Complete Career Pathway"
        sub="The UK's most complete PAS128 utility mapping training pathway. From introductory training courses through to a ProQual Level 6 Management Diploma: everything a utility mapping professional needs to locate buried services safely and build a credible, certified career."
        image="em-03"
        breadcrumbs={[
          { label: 'Training', href: '/training' },
          { label: 'Utility Mapping & Surveying' },
        ]}
      />

      {/* Trust Badges */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-semibold text-foreground">
            <span>ProQual Accredited</span>
            <span>ICES Aligned</span>
            <span>PAS128 Specialists</span>
            <span>Trusted by Major UK Infrastructure Contractors</span>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Who This Is For</p>
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Every Level of Utility Mapping Professional</h2>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-4xl">
          Utility mapping and surveying is a distinct profession. It demands specialist equipment skills, a solid understanding of PAS128 quality levels, knowledge of utility detection methods and data collection standards, and the professional qualifications that infrastructure clients and framework employers increasingly require. Whether you need to locate buried services across complex utility networks or interpret survey data from ground penetrating radar, this hub brings together every training course, qualification, and competency assessment Sygma Solutions offers for utility surveyors, underground utility professionals, and geospatial data collection teams working in the utilities sector.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-background rounded-xl border border-border p-6">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="em-05" width={600} height={400} alt="Surveyors and Technicians" sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-full object-contain rounded-lg mb-4" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Surveyors and Technicians</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">You need practical skills in utility detection and a recognised qualification. Start with our ProQual Level 3 Certificate in Utility Mapping or Level 4, build through to Level 5, and add PAS128 GPR training courses on top. These training courses cover how to locate buried services on a survey site, interpret stats plans, and use detection methods including EM locator and ground penetrating radar.</p>
          </div>
          <div className="bg-background rounded-xl border border-border p-6">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="gpr-02" width={600} height={400} alt="Senior Practitioners and Survey Managers" sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-full object-contain rounded-lg mb-4" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Senior Practitioners and Survey Managers</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Your team needs credibility on major frameworks. Our ProQual Level 5 and Level 6 professional qualifications (plus OSCA competency assessments) give clients and procurement teams the evidence they need to approve your people for PAS128 utility survey work, from site reconnaissance through to detailed drawings and quality assurance.</p>
          </div>
          <div className="bg-background rounded-xl border border-border p-6">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="em-03" width={600} height={400} alt="Project Managers and Service Coordinators" sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-full object-contain rounded-lg mb-4" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Project Managers and Service Coordinators</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">You commission utility surveys. You need to understand what PAS128 means, what survey quality levels require, how to verify positional accuracy, and what your legal duties are. Our PAS128 Awareness training courses give you the knowledge to specify compliant survey work and reduce the risk of utility strikes without needing to become a surveyor.</p>
          </div>
        </div>
      </section>

      {/* ProQual Career Pathway */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">ProQual Career Pathway</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">From Level 2 to Level 6</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
            The ProQual pathway is the most structured professional qualification route for utility mapping professionals in the UK. Each level builds on the last, so your certificate in utility mapping and surveying grows with your career. All levels are assessed by Sygma trainers through a combination of portfolio of evidence, professional discussion, and practical observation. Assessment is externally audited by the awarding body.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
            Unlike training-only courses, ProQual qualifications carry regulatory recognition, ICES alignment, and external audit. They are increasingly required on major infrastructure frameworks.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-5 py-3 font-bold">Level</th>
                  <th className="text-left px-5 py-3 font-bold">Title</th>
                  <th className="text-left px-5 py-3 font-bold hidden md:table-cell">Who It Is For</th>
                  <th className="text-left px-5 py-3 font-bold hidden md:table-cell">Duration</th>
                  <th className="text-left px-5 py-3 font-bold"></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: 'Level 3', title: 'ProQual Level 3 Diploma in Utility Mapping', who: 'Practising surveyors moving to formally qualified status', duration: 'Flexible (typically 8-12 weeks)', href: '/courses/level-3-certificate' },
                  { level: 'Level 4', title: 'ProQual Level 4 Certificate in Utility Mapping', who: 'Experienced surveyors adding advanced technical qualification', duration: 'Flexible (typically 8-12 weeks)', href: '/courses/level-4-diploma' },
                  { level: 'Level 5', title: 'ProQual Level 5 Diploma in Utility Mapping and Surveying', who: 'Senior surveyors, team leaders, lead operatives on major projects', duration: '5-day fast-track intensive at Wigan or Worcester', href: '/courses/level-5-diploma' },
                  { level: 'Level 6', title: 'ProQual Level 6 Diploma in Utility Mapping and Surveying Management', who: 'Survey managers, operations leads, technical directors', duration: 'Flexible (distance learning with tutor support)', href: '/courses/level-6-diploma' },
                ].map((row, i) => (
                  <tr key={row.level} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                    <td className="px-5 py-3 font-semibold text-foreground">{row.level}</td>
                    <td className="px-5 py-3 text-foreground">{row.title}</td>
                    <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{row.who}</td>
                    <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{row.duration}</td>
                    <td className="px-5 py-3"><Link href={row.href} className="text-primary font-semibold hover:underline text-sm">View Details</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            You do not have to start at Level 2. Sygma's team will review your existing experience and recommend the right entry point. Many experienced surveyors enter directly at Level 3 or Level 4 based on prior learning and site history.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Pricing for all ProQual qualifications is available on each course page. Level 5 includes a 5-day attended fast-track intensive. All other levels are portfolio-based with tutor support and can be completed remotely.
          </p>
          <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
            Speak to Us About Your Entry Point
          </Link>
        </div>
      </section>

      {/* Specialist GPR and PAS128 Training */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Specialist Training</p>
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">GPR and PAS128 Training</h2>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-4xl">
          Ground penetrating radar (GPR) operation is an essential capability for PAS128 Quality Level B and Quality Level A utility surveys. A full PAS128 utility survey follows a structured process: desktop utility records search, site reconnaissance and visual inspection, electromagnetic detection using an EM locator, and ground penetrating radar GPR data collection. Sygma Solutions offers specialist GPR training courses plus a dedicated PAS128 awareness programme for non-operators.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/courses/gpr-training" className="group bg-background rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="gpr-01" width={600} height={400} alt="GPR Training: MALA and Leica Systems" sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-full object-contain rounded-lg mb-4" />
            </div>
            <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">GPR Training: MALA and Leica Systems</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Practical training in ground penetrating radar operation, GPR data collection, and interpretation using MALA GPR, Leica DS2000, Leica DSX, and Mira Compact systems. Introductory and advanced sessions available.</p>
          </Link>
          <Link href="/courses/5-day-pas128-surveyor" className="group bg-background rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="em-06" width={600} height={400} alt="5-Day PAS128 Surveyor Course" sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-full object-contain rounded-lg mb-4" />
            </div>
            <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">5-Day PAS128 Surveyor Course</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">The complete PAS128 utility survey training programme for professional utility surveyors. Full PAS128 methodology: site reconnaissance, desktop survey, electromagnetic utility detection, and ground penetrating radar operation.</p>
          </Link>
          <Link href="/courses/pas128-awareness" className="group bg-background rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="gpr-04" width={600} height={400} alt="PAS128 Awareness: Service Coordinators" sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-full object-contain rounded-lg mb-4" />
            </div>
            <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">PAS128 Awareness: Service Coordinators</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">For project managers, contract managers, and service coordinators who commission, specify, or accept utility surveys. Covers PAS128 quality levels, legal obligations, and how to verify surveys. No equipment operated.</p>
          </Link>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mt-6 max-w-4xl">
          Our GPR training programmes are built around the equipment brands most commonly deployed on UK infrastructure projects. MALA GPR systems are central to our advanced course, alongside Leica DS2000 and DSX antenna systems and Mira Compact. Training courses focus on real survey conditions including quiet roads and live sites.
        </p>
      </section>

      {/* ZSI Super User Training */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Specialist Bespoke Training</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">ZSI Super User Training</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
            ZoneSafe Induction (ZSI) technology is widely deployed across major utility infrastructure programmes in the UK to help reduce the risk of utility strikes and protect buried services. Organisations including Scottish Water, Morrison Construction, and Wales and West Utilities operate ZSI systems across their site fleets.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
            Our ZSI Super User programme trains the internal champions who administer, configure, and support the ZSI system within their own organisation. This is bespoke and delivered on-site to your team, tailored to your specific ZSI configuration and site procedures.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border mb-6">
            <table className="w-full text-sm">
              <tbody>
                <tr className="bg-background border-b border-border">
                  <td className="px-5 py-3 font-semibold text-foreground w-1/3">Delivery Format</td>
                  <td className="px-5 py-3 text-muted-foreground">On-site bespoke (delivered at your premises or site)</td>
                </tr>
                <tr className="bg-muted/30 border-b border-border">
                  <td className="px-5 py-3 font-semibold text-foreground">Who It Is For</td>
                  <td className="px-5 py-3 text-muted-foreground">Internal champions who will administer and support ZSI across the organisation. Typically safety managers, plant managers, or operations leads responsible for the ZSI fleet.</td>
                </tr>
                <tr className="bg-background border-b border-border">
                  <td className="px-5 py-3 font-semibold text-foreground">What Is Covered</td>
                  <td className="px-5 py-3 text-muted-foreground">ZSI system administration and configuration, clampon golden rules for operatives, supervisor responsibilities, fault reporting and escalation, record keeping and system audits</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="px-5 py-3 font-semibold text-foreground">Programme Format</td>
                  <td className="px-5 py-3 text-muted-foreground">Tailored to your ZSI system version and your organisation's procedures</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link href="/courses/zs-superuser-scottish-water" className="text-primary font-semibold hover:underline text-sm">
            Enquire About ZSI Super User Training &rsaquo;
          </Link>
        </div>
      </section>

      {/* Online Delivery */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Online Delivery</p>
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Online Utility Mapping Qualifications via MS Teams</h2>
        <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
          Not every experienced utility mapping professional can take time away from site for a week. Our online ProQual training courses deliver the same externally audited professional qualifications via MS Teams, structured around your schedule and your evidence base. These utility surveys qualifications can be completed alongside your existing work commitments.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-4xl">
          Online delivery is available for the ProQual Level 3 and ProQual Level 5 Diplomas. Both programmes follow the same assessment framework as our classroom routes; they are not a shorter or easier version. They are designed for professionals who can demonstrate competency through existing site evidence and professional discussion.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-background rounded-xl border border-border p-6">
            <h3 className="font-bold text-foreground mb-3">Online ProQual Level 3: Utility Mapping</h3>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <p><span className="font-semibold text-foreground">Who it is for:</span> Practising surveyors with hands-on experience who cannot attend classroom delivery.</p>
              <p><span className="font-semibold text-foreground">Delivery:</span> MS Teams (structured modules with tutor-led professional discussion sessions)</p>
              <p><span className="font-semibold text-foreground">Duration:</span> Flexible (typically 8-12 weeks self-paced)</p>
            </div>
            <Link href="/courses/online-level-3-diploma" className="text-primary font-semibold hover:underline text-sm">View Full Details &rsaquo;</Link>
          </div>
          <div className="bg-background rounded-xl border border-border p-6">
            <h3 className="font-bold text-foreground mb-3">Online ProQual Level 5: Utility Mapping and Surveying</h3>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <p><span className="font-semibold text-foreground">Who it is for:</span> Senior practitioners, team leads, experienced surveyors. Must have sufficient site experience across ICES GEUS01-GEUS04 units.</p>
              <p><span className="font-semibold text-foreground">Delivery:</span> MS Teams (structured modules with tutor-led professional discussion sessions)</p>
              <p><span className="font-semibold text-foreground">Duration:</span> Flexible (self-paced with tutor support)</p>
            </div>
            <Link href="/courses/online-level-5-diploma" className="text-primary font-semibold hover:underline text-sm">View Full Details &rsaquo;</Link>
          </div>
        </div>
        <div className="bg-muted/30 rounded-xl border border-border p-6">
          <h4 className="font-bold text-foreground mb-2">Eligibility Note</h4>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">Online entry is not suitable for individuals with no existing utility mapping experience. Our team will review your background before confirming enrolment to make sure online delivery is the right route for you.</p>
          <Link href="/contact#enquiry-form" className="text-primary font-semibold hover:underline text-sm">Find Out If Online Delivery Is Right for You &rsaquo;</Link>
        </div>
      </section>

      {/* Why Sygma - Expanded */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">What Makes Sygma Different for Utility Mapping Professionals</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">There are other training providers in the utility sector. Here is what makes Sygma different.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "The UK's Only Complete Pathway from Level 2 to Level 6", body: "No other provider offers the full ProQual progression route (from entry-level through to management diploma) in utility mapping and surveying. Whether you need training courses in utility detection, courses to locate underground utility networks, or a management qualification, you do not need to go to multiple providers." },
              { title: 'External Audit You Can Trust', body: "Every ProQual qualification awarded through Sygma is assessed by Sygma trainers and externally audited by the awarding body. That oversight is what gives your certificate credibility with clients, frameworks, and procurement teams." },
              { title: 'Trainers Who Are Active Surveyors', body: 'Our trainers are not ex-industry. They are current industry professionals who locate buried services and conduct utility surveys on live PAS128 survey projects. They know what is actually happening on survey sites right now.' },
              { title: 'PAS128 Grounded Throughout', body: 'Every course in this hub is built around PAS128. Not as an afterthought or a reference standard, but as the framework that determines how every element of the training is structured.' },
              { title: 'Fixed-Fee Pricing with No Hidden Costs', body: 'Our qualification programmes are priced per course, not per person. Course fees include all learning materials, assessment support, and tutor time. ProQual registration fees are charged at cost with no markup.' },
              { title: 'Flexible Delivery', body: 'Open courses or in-house delivery nationwide UK. Online delivery via MS Teams for experienced professionals.' },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse All Courses */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Browse All Courses</p>
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">All Utility Mapping Courses and Qualifications</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">Browse every training programme and qualification within the Utility Mapping and Surveying hub.</p>

        <h3 className="text-lg font-black text-foreground mb-4">ProQual Qualifications</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: 'ProQual Level 3 Diploma in Utility Mapping', detail: 'Portfolio-based (distance learning with tutor support) | Flexible (typically 8-12 weeks)', href: '/courses/level-3-certificate' },
            { title: 'ProQual Level 4 Certificate in Utility Mapping', detail: 'Portfolio-based (distance learning with tutor support) | Flexible (typically 8-12 weeks)', href: '/courses/level-4-diploma' },
            { title: 'ProQual Level 5 Diploma in Utility Mapping and Surveying', detail: '5-day fast-track intensive at Wigan or Worcester | 5 days', href: '/courses/level-5-diploma' },
            { title: 'ProQual Level 6 Diploma in Utility Mapping and Surveying Management', detail: 'Portfolio-based management qualification (distance learning) | Flexible', href: '/courses/level-6-diploma' },
          ].map((c) => (
            <Link key={c.title} href={c.href} className="group bg-background rounded-xl border border-border p-5 hover:border-primary/40 hover:shadow-sm transition-all">
              <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{c.title}</h4>
              <p className="text-xs text-muted-foreground">{c.detail}</p>
            </Link>
          ))}
        </div>

        <h3 className="text-lg font-black text-foreground mb-4">GPR and PAS128 Specialist Training</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: 'GPR Training: MALA and Leica Systems', detail: 'Classroom + practical | 1-day introduction or 2-day advanced', href: '/courses/gpr-training' },
            { title: '5-Day PAS128 Surveyor Course', detail: 'Classroom + practical | 5 days', href: '/courses/5-day-pas128-surveyor' },
            { title: 'PAS128 Awareness: Service Coordinators', detail: 'Classroom | 1 day', href: '/courses/pas128-awareness' },
            { title: 'TSA and ICES Utility Mapping Training', detail: 'Classroom + practical | See course page', href: '/courses/tsa-ices-utility-mapping' },
          ].map((c) => (
            <Link key={c.title} href={c.href} className="group bg-background rounded-xl border border-border p-5 hover:border-primary/40 hover:shadow-sm transition-all">
              <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{c.title}</h4>
              <p className="text-xs text-muted-foreground">{c.detail}</p>
            </Link>
          ))}
        </div>

        <h3 className="text-lg font-black text-foreground mb-4">Online Qualifications and Specialist Programmes</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Online ProQual Level 3: Utility Mapping (MS Teams)', detail: 'Online (MS Teams structured delivery) | Flexible (typically 8-12 weeks)', href: '/courses/online-level-3-diploma' },
            { title: 'Online ProQual Level 5: Utility Mapping and Surveying (MS Teams)', detail: 'Online (MS Teams structured delivery) | Flexible (self-paced)', href: '/courses/online-level-5-diploma' },
            { title: 'ZSI Super User Training', detail: 'On-site bespoke | Half day to 1 day (tailored)', href: '/courses/zs-superuser-scottish-water' },
          ].map((c) => (
            <Link key={c.title} href={c.href} className="group bg-background rounded-xl border border-border p-5 hover:border-primary/40 hover:shadow-sm transition-all">
              <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{c.title}</h4>
              <p className="text-xs text-muted-foreground">{c.detail}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* OSCA */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Competency Assessment</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Add OSCA to Your Qualification Programme</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
            A qualification tells you what someone has been trained to do. OSCA tells you what they can actually do right now, in the field, on your site. OSCA (Sygma's On-Site Competency Assessment) assesses utility mapping and avoidance operatives against ten structured criteria, on a live survey site, using GPS-stamped, photo-verified evidence. Many of our utility mapping qualification clients pair their ProQual programme with an OSCA assessment to provide dual evidence of both formal training and live operational competency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {[
              'Ten structured assessment criteria',
              'GPS-stamped, photo-verified evidence',
              'Digital report delivered same day',
              'Conducted on a live site',
              'Pairs with ProQual qualifications for framework submissions',
              'Accepted by major UK infrastructure clients and procurement teams',
            ].map((item) => (
              <div key={item} className="bg-background rounded-lg border border-border p-4 text-sm text-muted-foreground">{item}</div>
            ))}
          </div>
          <Link href="/osca" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
            Find Out More About OSCA
          </Link>
        </div>
      </section>

      {/* Accreditation */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Accreditation</p>
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Professional Recognition</h2>
        <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
          Sygma Solutions is a ProQual Accredited Centre for utility mapping and surveying qualifications. All ProQual training courses and professional qualifications are aligned to ICES GEUS competency frameworks and are recognised by major UK infrastructure clients and framework contractors.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
          Our GPR and PAS128 training programmes are designed in line with PAS128:2022 requirements and are delivered by practitioners with active experience of PAS128 survey delivery.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
          Sygma is a CITB Approved Training Organisation. Employers may be able to access CITB Employer Network funding towards training costs. Contact your CITB adviser for details on funding eligibility.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          {['ProQual Accredited Centre', 'ICES GEUS Aligned', 'PAS128:2022', 'CITB Approved Training Organisation'].map((badge) => (
            <span key={badge} className="bg-primary/10 text-primary font-semibold text-xs px-4 py-2 rounded-full">{badge}</span>
          ))}
        </div>
        <Link href="/accreditations" className="text-primary font-semibold hover:underline text-sm">View Our Accreditations &rsaquo;</Link>
      </section>

      {/* FAQs */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-border rounded-lg p-6 bg-background">
                <h3 className="font-bold text-foreground mb-3">{q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Consider */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <h3 className="text-lg font-black text-foreground mb-6">Also Consider</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/contact" className="group bg-background rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all">
            <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Bespoke Training</h4>
            <p className="text-sm text-muted-foreground">Design a tailored programme around your site risks, equipment, and team size.</p>
          </Link>
          <Link href="/training/cable-location-avoidance" className="group bg-background rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all">
            <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Utility Avoidance Training</h4>
            <p className="text-sm text-muted-foreground">CAT and Genny training courses, EUSR accreditation, and cable avoidance qualifications to help locate buried services safely.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Not Sure Where to Start?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Talk to Sygma about PAS128 utility mapping training courses. We will identify the right qualification pathway for your role, experience, and career goals. No obligation; just a clear conversation about what makes sense for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Talk to Us
            </Link>
            <Link
              href="/courses/level-5-diploma"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors"
            >
              View the ProQual Pathway
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
