import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import Link from 'next/link';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from 'next';
import Image from 'next/image';

const faqs = [
  {
    q: "What qualifications do delegates receive at the end of the 2-day course?",
    a: "Both. Delegates who complete the full 2-day programme receive ProQual CAT1 and ProQual CAT1 Plus as separate qualifications. The CAT1 criteria are assessed on the first day and the advanced Plus criteria on the second. Both certificates are issued through ProQual Accreditations.",
  },
  {
    q: "Can I attend the Plus day only if I already hold ProQual CAT1?",
    a: "Yes. If your team already holds current ProQual CAT1, you can book the 1-day Plus add-on instead of the full 2-day programme. The add-on covers the seven additional theory criteria and thirty-two additional practical criteria that the standard CAT1 does not include. Contact us and we will confirm whether your existing CAT1 is current and whether the 1-day option is suitable.",
  },
  {
    q: "What is the difference between ProQual CAT1 Plus and EUSR CAT1?",
    a: "They are fundamentally different qualifications. ProQual CAT1 Plus builds on an already more rigorous CAT1 base and adds seven theory criteria and over thirty practical criteria that EUSR does not cover at all. Topics like PAS128 vs Utility STATS plans, capacitance technique, signal clamp, depth quality verification, HV cable limitations, blind induction sweeps, and signal loss identification are all assessed in ProQual CAT1 Plus but absent from EUSR entirely. Where EUSR relies on multiple choice questions, ProQual uses written theory papers and individually assessed hands-on practical criteria. In 21 years, Sygma has had to add content to every qualification on the market to make it fit for industry. The ProQual CAT1 and CAT1 Plus are the only qualifications we do not have to add anything to, because they cover everything needed.",
  },
  {
    q: "How many individual practical criteria are assessed across the 2 days?",
    a: "The full 2-day programme assesses 8 practical criteria under the CAT1 standard and a further 34 individual practical criteria under the Plus standard, giving a total of 42 hands-on practical demonstrations. Each one is observed and assessed individually by a Sygma assessor. This is not a paper-based assessment.",
  },
  {
    q: "What is the difference between capacitance and induction?",
    a: "Both methods use the signal transmitter to apply a signal without direct connection to the service. Induction broadcasts a signal across a wide area and is non-selective. Capacitance uses a high-frequency signal applied directly above the service to specifically target it, making it more effective for non-earthed conductors. ProQual CAT1 Plus covers both and requires delegates to demonstrate when and why to use each.",
  },
  {
    q: "Do I need to bring my own CAT and Genny?",
    a: "No. Sygma provides Radiodetection CAT4 and Genny4 units as standard. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. If you want training delivered on your own equipment, we can accommodate that. We require a minimum of one locator per three delegates for client-supplied equipment.",
  },
  {
    q: "Is CITB funding available for this course?",
    a: "Sygma is a CITB Approved Training Organisation. Speak to your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical content, meeting CITB standards for hands-on training delivery.",
  },
];

export const metadata: Metadata = {
  title: 'ProQual CAT1 Plus Training | Accredited | Sygma',
  description: 'ProQual CAT1 Plus: the most advanced utility avoidance qualification. 2-day course covering all CAT1 plus 7 advanced theory and 34 practical criteria.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/proqualcat1plus' },
  openGraph: {
    title: 'ProQual CAT1 Plus Training | Accredited | Sygma',
    description: 'ProQual CAT1 Plus: the most advanced utility avoidance qualification. 2-day course covering all CAT1 plus 7 advanced theory and 34 practical criteria.',
    url: 'https://sygma-solutions.com/courses/proqualcat1plus',
    siteName: 'Sygma Solutions',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ProQualCat1Plus() {
  return (
    <>
          
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({
            name: "ProQual CAT1 Plus Advanced Utility Locating Course",
            description: "2-day advanced utility avoidance qualification. Day 1 covers all ProQual CAT1 criteria. Day 2 adds 7 theory and 34 hands-on practical criteria covering capacitance, signal clamp, dual frequency, depth verification and advanced survey methodology.",
            url: "/courses/proqualcat1plus",
            credential: "ProQual CAT1 + ProQual CAT1 Plus",
            duration: "2 days",
            mode: ["onsite"],
          }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
            { label: "Training", to: "/training/cable-location-avoidance" },
            { label: "ProQual CAT1 Plus", to: "/courses/proqualcat1plus" },
          ]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="ProQual CAT1 Plus: The Most Advanced Utility Locating Qualification Available"
        sub="Two days. Forty-two individually assessed practical criteria. Seven advanced theory papers. Two qualifications. Built for operatives who need to locate in the conditions that basic training does not prepare them for."
        image="cat-01-proqualcat1plus"
        alt="ProQual CAT1 Plus advanced cable avoidance training course"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "ProQual CAT1 Plus" },
        ]}
      />

      {/* Key USP stats */}
      <section className="bg-foreground py-6">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">21 Years</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">One Specialism</p>
              <p className="text-xs text-white/60">Underground utility location training is all we do.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">70-80%</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Increase in Genny Usage</p>
              <p className="text-xs text-white/60">Measured through locator data downloads after Sygma training.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">Proven</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Strike Reduction Record</p>
              <p className="text-xs text-white/60">Clients report measurable reductions in service strikes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero CTA Bar */}
      <section className="bg-primary/5 border-y border-primary/20 py-5">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
            Book Now
          </Link>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "2 Days"],
            ["Qualifications", "CAT1 + CAT1 Plus"],
            ["Theory", "Written papers (not MCQ)"],
            ["Practical", "42 assessed criteria"],
            ["Assessment", "Every criterion individually assessed"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="eyebrow mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Course Is For */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Who Is This Course For</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Designed For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Operatives Locating on Live Sites",
                desc: "Anyone who uses a Genny & CAT to locate underground services before or during excavation. This course takes them from foundation to advanced in one programme.",
              },
              {
                title: "Lead Locators and Surveyors",
                desc: "Professionals who need to demonstrate mastery of capacitance, signal clamp, dual frequency and advanced transmitter techniques on congested or deep-service sites.",
              },
              {
                title: "Organisations Requiring ProQual Accreditation",
                desc: "Companies whose procurement framework or competency standards mandate ProQual-accredited qualifications for utility avoidance.",
              },
              {
                title: "Teams New to ProQual",
                desc: "The 2-day programme is the most efficient route. Delegates complete both ProQual CAT1 and ProQual CAT1 Plus in a single booking, leaving with two qualifications.",
              },
            ].map((p, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Course */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">About This Course</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Beyond the Basics</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Most cable avoidance courses teach operatives how to use a Genny & CAT in standard conditions. That is not enough. Signal loss. Problem cables. Street light services. Capacitance on non-earthed conductors. HV cable limitations. Depth readings that cannot be trusted. These are the situations that cause strikes, and they are the situations that standard training does not cover.</p>
          <p>ProQual CAT1 Plus is a 2-day programme that covers everything. The first day delivers the full ProQual CAT1 specification, including written theory papers and eight individually assessed practical criteria covering all four locating modes: Power, Radio, Genny and Avoidance. The second day adds seven advanced theory criteria and over thirty additional practical criteria that go far beyond what any other qualification on the market assesses.</p>
          <p>Delegates leave with two qualifications: ProQual CAT1 and ProQual CAT1 Plus. Both are assessed by Sygma trainers and certificated through ProQual Accreditations. Every criterion must be met individually. There is no percentage pass mark and no multiple choice questions.</p>
          <p>Sygma delivers this course with the methodology that defines all its training: Genny-First. Every practical session requires delegates to exhaust all transmitter connection opportunities before moving to induction, and to exhaust all active modes before passive. This is the correct approach for reducing strikes, and the Plus criteria (PP3.3) specifically test whether operatives have internalised it.</p>
        </div>
        <div className="mt-8 bg-accent/5 border border-accent/20 rounded-lg p-6">
          <p className="font-bold text-foreground mb-2">The Only Qualification We Do Not Have to Add To</p>
          <p className="text-muted-foreground text-sm leading-relaxed">In 21 years of delivering utility avoidance training, Sygma has had to add content to every qualification on the market to make it fit for the real demands of the industry. Every single one. The ProQual CAT1 and CAT1 Plus qualifications are the first we have developed in partnership with an awarding body that cover everything needed from a course in this subject. They are the only qualifications we deliver where we do not have to supplement the syllabus, because the syllabus was built to the standard the industry actually needs.</p>
        </div>
        <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-6">
          <p className="font-bold text-foreground mb-2">Already Hold ProQual CAT1?</p>
          <p className="text-muted-foreground text-sm leading-relaxed">If your team already holds a current ProQual CAT1, you can book the 1-day Plus add-on instead of the full 2-day programme. The add-on covers the seven additional theory criteria and thirty-two additional practical criteria. <Link href="/contact#enquiry-form" className="text-primary font-semibold hover:underline">Contact us</Link> and we will confirm whether the 1-day option is suitable.</p>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="container mx-auto px-6 md:px-8 pb-10 max-w-5xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-65-proqualcat1plus" width={1200} height={900} alt="ProQual CAT1 Plus advanced training practical" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-50-proqualcat1plus" width={1200} height={900} alt="Advanced electromagnetic locator techniques" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-80-proqualcat1plus" width={1200} height={900} alt="Hands-on practical assessment on training rig" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>

      {/* Course at a Glance */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Quick Reference</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Course at a Glance</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Qualifications Awarded", "ProQual CAT1 Locate Utility Services + ProQual CAT1 Plus (both certificated by ProQual Accreditations)"],
                  ["Duration", "2 days (full programme) or 1 day (Plus add-on for existing CAT1 holders)"],
                  ["Prerequisites", "None for the 2-day programme. The 1-day add-on requires current ProQual CAT1."],
                  ["Theory Assessment", "Written theory papers (CAT1: T1-T7) plus Theory Plus papers (TP1-TP7). Not multiple choice."],
                  ["Practical Assessment", "42 individually assessed hands-on criteria: 8 under CAT1, 34 under CAT1 Plus (PP1-PP4)"],
                  ["Advanced Techniques", "Capacitance (high-frequency signal), signal clamp, dual-frequency transmitter, blind induction sweep, nulling, airborne signal checks, depth quality verification using two independent methods"],
                  ["Delivery", "Sygma HQ (Wigan), The Survey School (Worcester), or on-site at your premises anywhere in the UK"],
                  ["Equipment", "Sygma provides Radiodetection CAT4 and Genny4 as standard. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. For client-supplied equipment: minimum one locator per three delegates."],
                  ["Upgrade Path", "ProQual Level 3 Certificate in Site Surveys, Advanced EM Locator (Level 4), or Level 5 Diploma in Utility Surveying"],
                  ["Pricing", "Contact us for a tailored quote. Site-based delivery available nationwide."],
                  ["CITB Funding", "Sygma is a CITB ATO. Speak to your Employer Network adviser about funding."],
                ].map(([key, value]) => (
                  <tr key={key} className="border-b border-border last:border-0">
                    <td className="px-5 py-3 font-semibold text-foreground bg-muted/40 w-1/3">{key}</td>
                    <td className="px-5 py-3 text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What the Course Covers - Theory */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Theory Assessment</p>
        <h2 className="text-2xl font-black mb-4 text-foreground">Knowledge Criteria</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">The written theory assessment covers fourteen criteria areas across two papers. The standard CAT1 paper (T1-T7) covers foundation knowledge. The Theory Plus paper (TP1-TP7) covers the advanced knowledge required for demanding site conditions. All theory is assessed in writing, not multiple choice.</p>
        <h3 className="text-lg font-bold mb-4 text-foreground">CAT1 Theory (T1-T7)</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">The foundation theory paper covers locator and signal generator operation, pre-use checks, the four locating modes (Power, Radio, Genny, Avoidance), service identification, safe systems of work, CDM Regulations, risk assessment, and HSG47/GS6 guidance. These criteria establish the knowledge base that the Plus criteria build on.</p>
        <h3 className="text-lg font-bold mb-4 text-foreground">Theory Plus (TP1-TP7)</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-5 py-3 text-left font-bold text-foreground w-16">Ref</th>
                <th className="px-5 py-3 text-left font-bold text-foreground">Criterion</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["TP1", "Pre-survey: understand the differences between PAS128 surveys and Utility STATS plans"],
                ["TP2", "Pre-use equipment checks: understand limitations of electromagnetic locators (what they can and cannot detect), plan the survey using signal generator and locator based on the site, function check, in-service date check (calibration), understand a permit to dig"],
                ["TP3", "Transmitter applications: use correct search technique at correct distance from induced signal, dual and multi-frequency transmitter operation and benefits, frequency options when using induction, limitations of induction as a non-selective method, exhausting all transmitter applications before passive modes"],
                ["TP4", "Locating, pinpointing and tracing: causes of sudden signal loss, obtain depth estimates at correct distances from transmitter in connection, clamp and induction, recognise when depth is unreliable, check depth reading quality by two methods"],
                ["TP5", "General: HV cable location limitations, dual and multi-frequency transmitter benefits, induction frequency options, induction limitations (non-selective), blind induction sweep, continuous scanning as excavation progresses, services that a locator with signal generator will not detect"],
                ["TP6", "Health, safety and environment: responsibilities under HASAWA, HSG47 and GS6 guidance, PPE requirements, site-specific risk assessments and control measures for utility locating activities"],
                ["TP7", "Locating and detecting services: interpreting utility drawings and line search documents, typical depths of underground services, marking methods, hazards associated with different services and damage response, roles and responsibilities, visual locating methods, principles of electronic locating equipment (direct connection, induction, nulling out, Power and Radio modes), signal generator attachments, interpreting results, external influences on readings, reporting deviations"],
              ].map(([ref, criterion]) => (
                <tr key={ref} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 font-bold text-accent">{ref}</td>
                  <td className="px-5 py-3 text-muted-foreground">{criterion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Full-width image */}
      <div className="w-full overflow-hidden aspect-[21/9] bg-muted">
        <Image src="cat-61" width={1200} height={900} alt="ProQual CAT1 Plus hands-on practical training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* Practical Outcomes */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Practical Assessment</p>
        <h2 className="text-2xl font-black mb-4 text-foreground">42 Hands-On Practical Criteria</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">The practical assessment is conducted on a live training rig with buried services. All criteria must be demonstrated to the assessor's satisfaction. The standard CAT1 practical (P1-P8) is assessed on the first day. The advanced Plus practical criteria (PP1-PP4, 34 individual items) are assessed on the second day.</p>
        <p className="text-muted-foreground mb-8 leading-relaxed text-sm">The CAT1 practical covers: visual survey, pre-use equipment checks, direct connection, locating in all four modes (Power, Radio, Genny, Avoidance), sensitivity control, depth estimation, marking position, and Genny-First methodology.</p>
        <h3 className="text-lg font-bold mb-4 text-foreground">Plus Practical Criteria (PP1-PP4)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              group: "PP1: Pre-Survey and Transmitter Applications (17 criteria)",
              items: [
                "Read utility plans from all providers including keys and symbols (PP1.1)",
                "Complete a visual survey in conjunction with plans, identifying visual indications of services (PP1.2)",
                "Pre-use equipment checks including function check and in-service date check/calibration (PP1.3)",
                "Direct connection to a known utility; earth transmitter in correct position; check signal applied (PP1.4-PP1.6)",
                "Apply signal to street light cable via direct connection (PP1.7)",
                "Use correct search technique at correct distance from direct connection point (PP1.8)",
                "Apply signal to domestic LV service at a property or building (PP1.9)",
                "Apply high-frequency signal using capacitance technique (PP1.10)",
                "Apply signal using signal clamp with correct search technique at correct distance (PP1.11-PP1.12)",
                "Apply induced signal to known target with correct search technique (PP1.13-PP1.14)",
                "Perform blind induction sweep in two directions across a site (PP1.15)",
                "Null out a buried utility (PP1.16)",
                "Check for airborne signal in all inductive applications (PP1.17)",
              ],
            },
            {
              group: "PP2: Locating, Pinpointing and Tracing (12 criteria)",
              items: [
                "Control sensitivity/gain to locate and pinpoint utility (PP2.1)",
                "Correctly determine direction of utility (PP2.2)",
                "Trace utility using correct technique and mark position (PP2.3)",
                "Identify sudden signal loss (PP2.4)",
                "Locate a joint, T-connection or bend (PP2.5)",
                "Know when locator is too close to transmitter (PP2.6)",
                "Understand issues with excessive signal and erratic sensitivity, and how to correct (PP2.7)",
                "Obtain depth estimates at correct distances from transmitter in connection, clamp and induction (PP2.8)",
                "Check depth reading quality by two methods (PP2.9)",
                "Peak and Null identification (PP2.10), Sonde location (PP2.11, optional), GPR awareness (PP2.12, optional)",
              ],
            },
            {
              group: "PP3: Strategic Survey Methodology (3 criteria)",
              items: [
                "Use utility plans to apply transmitter signal in most suitable place throughout survey (PP3.1)",
                "Use plans to correctly apply induced signal in best place to locate HV cables (PP3.2)",
                "Conduct survey using transmitter first, exhaust all transmitter connection opportunities before moving to induction (PP3.3)",
              ],
            },
            {
              group: "PP4: Passive Modes (2 criteria)",
              items: [
                "Perform Power survey using appropriate sensitivity control and correct search technique (PP4.1)",
                "Perform Radio survey using appropriate sensitivity control and correct search technique (PP4.2)",
              ],
            },
          ].map(({ group, items }) => (
            <div key={group} className="bg-white border border-border rounded-xl p-5">
              <h3 className="font-bold text-foreground text-sm mb-3 text-accent">{group}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-accent font-bold mt-0.5">&#8250;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
                title: "Two ProQual Qualifications",
                desc: "ProQual CAT1 Locate Utility Services and ProQual CAT1 Plus, both certificated through ProQual Accreditations",
              },
              {
                title: "Written Theory Evidence",
                desc: "Assessed theory papers covering 14 criteria areas, demonstrating knowledge in the candidate's own words rather than through multiple choice",
              },
              {
                title: "42 Practical Criteria Assessed",
                desc: "Documented evidence of competence across every individually assessed hands-on criterion, from direct connection through to advanced survey methodology",
              },
              {
                title: "Personalised Training Record",
                desc: "Detailed breakdown of all theory and practical criteria with assessor commentary and ongoing access to Sygma trainers for post-course questions",
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
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-91-proqualcat1plus" width={1200} height={900} alt="Advanced CAT4 locator techniques during ProQual Plus training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-03-proqualcat1plus" width={1200} height={900} alt="Advanced electromagnetic locator practical assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-38-proqualcat1plus" width={1200} height={900} alt="Delegates practising signal clamp and capacitance techniques" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* ProQual vs EUSR Comparison */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Not All CAT1 Courses Are Created Equal</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">ProQual CAT1 Plus vs EUSR CAT1: Why These Are Not Equivalent</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">The ProQual CAT1 Plus goes far beyond what the EUSR CAT1 assesses. Where EUSR covers a topic through multiple choice questions only, we have marked it as not covered, because an MCQ does not demonstrate that a candidate can apply that knowledge in practice.</p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-5 py-3 text-left font-bold text-foreground">Assessment Area</th>
                  <th className="px-5 py-3 text-left font-bold text-foreground">ProQual CAT1 Plus</th>
                  <th className="px-5 py-3 text-left font-bold text-foreground">EUSR CAT1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["CDM Regulations", "Theory assessment (CAT1 base)", "Not covered"],
                  ["Risk assessment monitoring and reporting", "Theory assessment (CAT1 base)", "Not covered"],
                  ["SSOW aligned with HASAWA, HSG47 and GS6", "Practical assessment (CAT1 base)", "Not covered"],
                  ["PAS128 vs Utility STATS plans", "Theory Plus assessment (TP1)", "Not covered"],
                  ["Electromagnetic locator limitations", "Theory Plus assessment (TP2)", "Not covered"],
                  ["Depth reading quality verification (two methods)", "Theory + practical (TP4, PP2.9)", "Not covered"],
                  ["HV cable location limitations", "Theory Plus assessment (TP5)", "Not covered"],
                  ["Blind induction sweep", "Theory + practical (TP5, PP1.15)", "Not covered"],
                  ["Continuous scanning during excavation", "Theory Plus assessment (TP5)", "Not covered"],
                  ["Capacitance technique (high-frequency signal)", "Practical assessment (PP1.10)", "Not covered"],
                  ["Signal clamp application", "Practical assessment (PP1.11-PP1.12)", "Not covered"],
                  ["Street light cable location via direct connection", "Practical assessment (PP1.7)", "Not covered"],
                  ["Domestic LV service location", "Practical assessment (PP1.9)", "Not covered"],
                  ["Signal loss identification", "Theory + practical (TP4, PP2.4)", "Not covered"],
                  ["Joint, T-connection and bend location", "Practical assessment (PP2.5)", "Not covered"],
                  ["HASAWA 1974 responsibilities", "Theory assessment (CAT1 + TP6)", "MCQ only (insufficient)"],
                  ["HSG47 and GS6 provisions", "Theory assessment (CAT1 + TP6)", "MCQ only (insufficient)"],
                  ["Specific locator features (shallow alert, Avoidance, depth, calibration)", "Theory + practical (CAT1 base)", "MCQ only (insufficient)"],
                  ["Data-enabled locators", "Theory + practical (CAT1 base)", "MCQ only (insufficient)"],
                  ["Pass standard", "Every criterion must be met individually", "80% MCQ + practical sign-off"],
                  ["Knowledge assessment method", "Written theory papers (CAT1 + Plus)", "Multiple choice questions"],
                  ["Total practical criteria assessed", "8 (CAT1) + 34 (Plus) = 42", "Practical sign-off only"],
                  ["External verification", "ProQual Accreditations auditor", "None"],
                  ["EUSR registration", "No", "Yes"],
                ].map(([area, proqual, eus], i) => (
                  <tr key={area} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-white/30" : ""}`}>
                    <td className="px-5 py-3 font-semibold text-foreground">{area}</td>
                    <td className="px-5 py-3 text-muted-foreground">{proqual}</td>
                    <td className={`px-5 py-3 ${eus === "Not covered" || eus.includes("insufficient") ? "text-red-600 font-semibold" : "text-muted-foreground"}`}>{eus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">Not sure which qualification your organisation needs? <Link href="/contact#enquiry-form" className="text-primary font-semibold hover:underline">Contact us</Link> and we will check your procurement framework for you.</p>
        </div>
      </section>

      {/* Why Sygma for ProQual CAT1 Plus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Sygma for ProQual CAT1 Plus</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Sygma helped write the ProQual CAT1 Plus specification. We do not just deliver this course. We helped define what it should be.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                eyebrow: "Specification-Aligned",
                title: "Genny-First in the Assessment Criteria",
                desc: "ProQual CAT1 Plus specification (PP3.3) requires candidates to conduct a survey using the transmitter first and exhaust all transmitter connection opportunities before moving to induction. This is the Genny-First methodology formalised into externally audited qualification criteria. No other awarding body has embedded this principle.",
              },
              {
                eyebrow: "Industry Leadership",
                title: "We Helped Write This Standard",
                desc: "Sygma was directly involved in developing the ProQual CAT1 and CAT1 Plus specifications. These are the only utility avoidance qualifications we do not have to supplement, because the syllabus was built to the standard the industry actually needs.",
              },
              {
                eyebrow: "Two Qualifications",
                title: "Complete Programme in 2 Days",
                desc: "Delegates leave with both ProQual CAT1 and ProQual CAT1 Plus. No need for separate bookings, separate travel, or separate assessment days. One programme, two qualifications, forty-two practical criteria assessed.",
              },
              {
                eyebrow: "Expert Delivery",
                title: "Specialist Trainers",
                desc: "Every trainer directly employed. All ex-utility surveyors or ex-equipment manufacturer specialists. All TAQA qualified. Nobody teaches this subject who has not done the job.",
              },
              {
                eyebrow: "Objectivity",
                title: "Fully Independent",
                desc: "No surveys, no equipment sales, no manufacturer relationships. We teach one subject and we teach it without bias. Every piece of advice is based on what works, not what we sell.",
              },
              {
                eyebrow: "Convenience",
                title: "We Come to You",
                desc: "Delivered at your site anywhere in the UK. All equipment, training rigs and materials included. No hidden extras.",
              },
              {
                eyebrow: "Proven Results",
                title: "70-80% Increase in Genny Usage",
                desc: "Clients who implement our Genny-First methodology report a 70 to 80% measurable increase in signal generator usage. Measured through locator data downloads, not surveys.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">{item.eyebrow}</p>
                <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSG47 and CITB */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Regulatory Framework</p>
              <h3 className="text-xl font-bold text-foreground mb-4">HSG47 Compliance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">HSG47 requires that anyone using a cable locator must be trained and competent. ProQual CAT1 Plus exceeds this requirement with the most comprehensive practical assessment available. The course covers safe systems of work, service plan interpretation, correct use of equipment in all modes, and continuous scanning during excavation.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">The ProQual certification provides auditable proof of competency that satisfies HSG47, GS6 and CDM requirements.</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Funding</p>
              <h3 className="text-xl font-bold text-foreground mb-4">CITB Employer Network</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">Sygma is a CITB Approved Training Organisation. All Sygma courses exceed 51% practical content, meeting CITB standards for hands-on training delivery.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">Speak to your CITB Employer Network adviser about funding for the ProQual CAT1 Plus programme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-15-proqualcat1plus" width={1200} height={900} alt="ProQual CAT1 Plus practical training assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-67-proqualcat1plus" width={1200} height={900} alt="Advanced locator training with depth verification" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-16-proqualcat1plus" width={1200} height={900} alt="Hands-on Genny & CAT training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">FAQs</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">{q}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Training Path</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Build your team's cable avoidance skills across our suite of ProQual-accredited qualifications.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/courses/proqualcat1-training" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">ProQual CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">One-day qualification for operatives who need accredited cable avoidance competence. The standard CAT1 is included in the 2-day Plus programme.</p>
            </Link>
            <Link href="/courses/proqualcat2" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">ProQual CAT2</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Safe excavation qualification. If your team locates and digs, they need both. Can be combined with CAT1 Plus for a comprehensive programme.</p>
            </Link>
            <Link href="/courses/level-3-certificate" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">Level 3 Certificate</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">ProQual Level 3 Certificate in Site Surveys. The next step for lead locators who want to progress beyond CAT1 Plus.</p>
            </Link>
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
              <p className="text-xs text-muted-foreground">GPS-stamped on-site competency assessment to verify real-world skills after training.</p>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Book ProQual CAT1 Plus Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Available at Wigan, Worcester, or on your site anywhere in the UK. Two days, two qualifications, forty-two practical criteria assessed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/courses/proqualcat1-training"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View ProQual CAT1 (Standard)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
