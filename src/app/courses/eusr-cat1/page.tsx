import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const faqs = [
  {
    q: "What is EUSR CAT1 training?",
    a: "EUSR CAT1 is a one-day utility avoidance training course that leads to an EUSR-registered Category 1 qualification. It covers electromagnetic theory, correct use of Genny & CAT equipment in all four modes, utility service plan reading, and a practical on-site assessment. It is one of the most widely recognised utility avoidance qualifications in the UK utility sector.",
  },
  {
    q: "Is EUSR CAT1 the same as EUS CAT1?",
    a: "They are the same qualification. EUS and EUSR both refer to the Energy and Utility Skills Register. The qualification is sometimes written as EUS CAT1 and sometimes as EUSR CAT1 or EUSR Category 1. All Sygma EUSR CAT1 certificates are issued against EUSR-registered standards.",
  },
  {
    q: "What pass mark is required for EUSR CAT1?",
    a: "The written multiple choice assessment requires a minimum pass mark of 80%. An oral assessment is available for delegates with dyslexia or reading difficulties. The practical on-site assessment is conducted on the day and assessed individually by the Sygma trainer.",
  },
  {
    q: "Is EUSR CAT1 the same as ProQual CAT1?",
    a: "No. Both cover similar core skills but they are issued by different bodies against different criteria. EUSR CAT1 is EUSR-registered. ProQual CAT1 is issued by ProQual Accreditations and includes additional individually assessed criteria, including clamp, capacitance, and blind induction assessed separately. See the comparison table on this page or the full ProQual CAT1 course page for details.",
  },
  {
    q: "Can Sygma deliver EUSR CAT1 on our site?",
    a: "Yes. Sygma delivers EUSR CAT1 at client sites across the UK. Travel is included in the day rate. Sygma provides Radiodetection CAT4 and CAT4+ as standard, but the course works with any manufacturer's locator and signal generator. For alternative equipment, a minimum ratio of one locator per three delegates applies. Maximum 8 delegates per session.",
  },
  {
    q: "How long is an EUSR card valid for?",
    a: "An EUSR CAT1 card is valid for 3 years from the date of issue. The expiry date is printed on the card. Most utility frameworks and principal contractors require a valid, in-date card as a condition of site access. Sygma recommends booking renewal training in the 3 months before expiry to avoid any lapse in certification.",
  },
  {
    q: "How do I renew my EUSR card?",
    a: "To renew your EUSR CAT1 card you need to retake the full EUSR CAT1 course and pass both the written and practical assessments. There is no shortened renewal route. The complete one-day EUSR Category 1 training programme must be completed again, including the multiple choice paper and the on-site practical. A new 3-year card is issued on successful completion.",
  },
  {
    q: "What happens if my EUSR CAT1 card has expired?",
    a: "If your EUSR CAT1 card has expired you cannot use it to demonstrate current competency and most utility operators will not allow you to locate on site. There is no grace period under EUSR rules. You will need to complete the full EUSR CAT1 course again. If your card has recently lapsed, contact Sygma and we can usually get you onto the next available date.",
  },
  {
    q: "Is EUSR CAT1 training a legal requirement under HSG47?",
    a: "HSG47, the Health and Safety Executive's guidance on avoiding danger from underground services, requires operatives who use cable locating equipment to be trained and competent. EUSR CAT1 is one of the most widely accepted ways of demonstrating that competency. While HSG47 does not mandate a specific qualification by name, holding an EUSR-registered qualification such as EUSR CAT1 is the utility industry's standard way of meeting that legal duty.",
  },
  {
    q: "Can we do EUSR CAT1 and CAT2 training on the same day?",
    a: "Yes, in most cases. Sygma regularly delivers combined EUSR CAT1 and CAT2 days for clients who want to complete both levels in a single site visit. The combined day runs longer, typically from 8:00am to 5:30pm. The maximum of 8 delegates applies to the combined format as well. Both certificates are issued on the day. Contact Sygma to confirm availability for your team size and location.",
  },
];

export const metadata: Metadata = {
  title: 'EUSR CAT1 / Category 1 Locate Utility Services Training | Cat & Genny',
  description: 'EUSR CAT1 Locate Utility Services training (EUSR Category 1). Cable avoidance and Cat and Genny training. HSG47 compliant, EUSR-registered, UK-wide.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/eusr-cat1' },
  openGraph: {
    title: 'EUSR CAT1 / Category 1 Locate Utility Services Training | Cat & Genny',
    description: 'EUSR CAT1 Locate Utility Services training (EUSR Category 1). Cable avoidance and Cat and Genny training. HSG47 compliant, EUSR-registered, UK-wide.',
    url: 'https://sygma-solutions.com/courses/eusr-cat1',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-75-eus-cat1', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function EusCat1() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "EUSR Category 1 Locate Utility Services Training", description: "EUSR CAT 1 Locate Utility Services training (EUSR Category 1). Cable avoidance and Cat and Genny training. HSG47 compliant, EUSR-registered, UK-wide.", url: "/courses/eusr-cat1", credential: "EUSR CAT 1 Training Certificate", duration: "1 day", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/cable-location-avoidance" }, { label: "EUSR CAT 1 Training" }]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="EUSR CAT1: EUSR-Registered Utility Avoidance Training"
        sub="EUSR CAT1 and EUSR Category 1 training from the UK's only independent specialist. Full electromagnetic theory, practical Genny & CAT assessment, and written paper. HSG47 compliant. Recognised across the water, gas, electricity, and telecoms sectors."
        image="cat-56"
        alts={["Trainee scanning for underground utilities with a CAT4 locator", "Genny signal generator being connected to a utility service point", "Practical cable avoidance exercise on a live training site", "Instructor guiding a trainee through CAT4 signal interpretation", "Close-up of CAT4 display showing utility signal detection", "Overhead view of a marked utility survey area during training", "Group of trainees practising cable avoidance techniques outdoors", "CAT4 and Genny equipment used during EUSR CAT1 accredited training"]}
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "Cable Avoidance Training", to: "/courses/cable-avoidance-training" },
          { label: "EUSR CAT1" },
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

      {/* Who This Course Is For */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Who Is This Course For</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Designed For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Site Operatives",
                desc: "Anyone who breaks ground or works near underground services.",
              },
              {
                title: "Groundworkers and Labourers",
                desc: "Digging, excavating or working in the vicinity of buried utilities.",
              },
              {
                title: "Supervisors and Managers",
                desc: "Responsible for teams who carry out excavation or survey work.",
              },
              {
                title: "New Entrants to Utilities",
                desc: "Starting a career in utility avoidance, streetworks or civil engineering.",
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

      {/* Course info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Duration</p>
            <p className="text-sm font-semibold text-foreground">1 Day</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Max Delegates</p>
            <p className="text-sm font-semibold text-foreground">8</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Certificate</p>
            <p className="text-sm font-semibold text-foreground">EUSR CAT1 (EUSR-Registered)</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Pass Mark</p>
            <p className="text-sm font-semibold text-foreground">80%</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Assessment</p>
            <p className="text-sm font-semibold text-foreground">Practical + Written</p>
          </div>
        </div>
      </section>

      {/* What is EUSR CAT1 */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">EUSR CAT1 Training: The EUSR-Registered Standard for Utility Avoidance</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">EUSR CAT1 training (also known as EUSR CAT1 or EUSR Category 1 training) is issued against EUSR-registered standards and is the utility sector's most widely recognised certificate of competence for operatives using Genny & CAT equipment. The qualification is required or preferred on the frameworks of many of the UK's largest utility contractors and network operators. All EUSR CAT1 courses from Sygma meet the requirements of HSG47, the Health and Safety Executive's guidance on avoiding danger from underground services.</p>
          <p className="text-muted-foreground leading-relaxed">Sygma's EUSR CAT1 course delivers the same depth of electromagnetic theory and Genny-First methodology that runs through every Sygma programme. The EUSR registration adds the sector recognition that many procurement and H&S frameworks require. The difference between this and the Sygma in-house certificate is not the training content. It is the awarding body.</p>
          <p className="text-muted-foreground leading-relaxed">Not all EUSR CAT1 providers deliver the same standard of training. The EUSR specification sets a minimum, and some providers deliver to that minimum. Sygma includes clamp, capacitance, and blind induction in assessed practicals even where EUSR does not require it. The result is an operative who can locate in real conditions, not just pass a multiple choice paper. Sygma-trained operatives consistently show a 70-80% increase in Genny usage post-course, measured through locator data downloads.</p>
        </div>
        <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
          <p className="text-foreground font-semibold mb-2">Not sure whether you need EUSR CAT1 or the Sygma in-house certificate?</p>
          <p className="text-muted-foreground text-sm mb-3">Use the course finder on the Utility Avoidance Training hub page to identify the right route for your workforce.</p>
          <Link href="/training/cable-location-avoidance#course-finder" className="text-primary font-semibold text-sm hover:underline">
            Compare all cable avoidance qualification routes &rsaquo;
          </Link>
        </div>
      </section>

      {/* 3-photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-55" width={1200} height={900} alt="EUSR CAT1 training delegates using Genny & CAT on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-08" width={1200} height={900} alt="EUSR CAT1 practical cable avoidance assessment in countryside setting" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-12" width={1200} height={900} alt="On-site practical cable avoidance training with signal generator" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Course at a glance */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">Course at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["Course Name", "EUSR CAT1: Utility Avoidance Training"],
                  ["Awarding Body", "EUSR (Energy and Utility Skills Register)"],
                  ["Also Known As", "EUSR CAT1, EUSR Category 1, EUSR Cat 1 utility training"],
                  ["Duration", "One day (typically 8:30am to 4:00pm)"],
                  ["Format", "Classroom theory (morning) followed by on-site practical assessment (afternoon)"],
                  ["Assessment", "Multiple choice written paper: 80% minimum pass mark. Oral assessment available for delegates with dyslexia or reading difficulties. On-site practical assessment in all Genny & CAT modes."],
                  ["Certificate", "EUSR CAT1 certificate (EUSR-registered). Issued on successful completion."],
                  ["Max Delegates", "8 per session"],
                  ["Suitable For", "Groundworkers, plant operators, and operatives in the utility sector requiring EUSR-registered certification"],
                  ["Equipment", "Sygma provides Radiodetection CAT4 and CAT4+ as standard. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. For on-site delivery, delegates should bring the equipment they use on site. Minimum ratio of one locator per 3 delegates."],
                  ["CITB", "CITB Approved Training Organisation. Employers may be eligible for CITB Employer Network funding support. Contact your CITB adviser."],
                  ["Delivery", "Wigan HQ | The Survey School, Worcester | On-site nationwide (travel included)"],
                  ["Pricing", "Contact us for a tailored quote. Site-based delivery available nationwide."],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-border">
                    <td className="py-3 pr-6 font-semibold text-foreground w-40 align-top">{label}</td>
                    <td className="py-3 text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                title: "EUSR CAT1 Competency Card",
                desc: "Valid for 3 years, nationally recognised by utility companies and principal contractors"
              },
              {
                title: "Personalised Training Record",
                desc: "Detailed breakdown of all theory and practical criteria assessed"
              },
              {
                title: "Practical Assessment Evidence",
                desc: "Documented evidence of hands-on competency with Genny & CAT equipment"
              },
              {
                title: "Ongoing Support",
                desc: "Access to Sygma trainers for post-course questions and refresher guidance"
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

      {/* Image strip after What You Get */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-06" width={1200} height={900} alt="EUSR CAT1 practical training with cable locator" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-01" width={1200} height={900} alt="Genny signal generator connection during EUSR CAT1 assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-65" width={1200} height={900} alt="On-site utility detection training for EUSR registration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Full day agenda */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <h2 className="text-2xl font-black mb-8 text-foreground">EUSR CAT1 Full Day Agenda</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 pr-6 font-black text-foreground w-56">Session</th>
                <th className="text-left py-3 font-black text-foreground">Content</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Why We Use Locators", "HSG47 guidance and legal obligations. National legislation and company policy. The financial and safety consequences of utility strikes. Real-world examples."],
                ["Buried Service Plans", "Reading and interpreting STATS plans. Reconciling plan information with site conditions. Limitations of service plans."],
                ["Electromagnetic Theory", "How a locator detects signals. Theory and limitations of Power, Radio, Genny, and Avoidance modes. Myth-busting: what the equipment cannot find. Signal distortion and depth accuracy."],
                ["Equipment Controls and Operation", "Locator controls and signal interpretation. Locating joints and changes of direction. Strike Alert. Signal generator dual frequency, earthing, capacitance, blind induction, and nulling. Depth estimation techniques."],
                ["Data Logging (Optional)", "Data logging software overview. Download and analysis of locator site data. Relevant for clients requiring an audit trail."],
                ["Site Practical: Plan Reconciliation", "Delegates use STATS plans to identify service routes. Site visual inspection. Equipment pre-use checks."],
                ["Site Practical: Genny & CAT Survey", "All modes assessed individually. Genny connected first. Depth readings taken and tested. Problem services located. Individual assessment."],
                ["Written Assessment", "Multiple choice paper. 80% minimum pass mark. Oral assessment available on request."],
                ["Certificate", "EUSR CAT1 EUSR-registered certificate issued on successful completion."],
              ].map(([session, content]) => (
                <tr key={session} className="border-b border-border">
                  <td className="py-3 pr-6 font-semibold text-foreground align-top">{session}</td>
                  <td className="py-3 text-muted-foreground">{content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Full-width image */}
      <div className="w-full overflow-hidden bg-muted" style={{ aspectRatio: "1585 / 341" }}>
        <Image src="cat-63" width={1585} height={341} alt="EUSR CAT1 on-site training group, Sygma Solutions nationwide delivery" sizes="100vw" className="w-full h-full object-cover" />
      </div>

      {/* Learning outcomes */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <h2 className="text-2xl font-black mb-8 text-foreground">What Delegates Will Be Able to Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-black text-foreground mb-4 text-lg border-b border-accent pb-2">Compliance and Understanding</h3>
            <ul className="space-y-3">
              {[
                "Explain HSG47 requirements and the legal basis for using buried service locators before excavation",
                "Read and interpret utility service plans (STATS) in relation to a live site",
                "Describe the financial and safety consequences of utility strikes",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground text-sm">
                  <span className="text-accent font-bold text-base shrink-0">&#8250;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-black text-foreground mb-4 text-lg border-b border-accent pb-2">Electromagnetic Theory</h3>
            <ul className="space-y-3">
              {[
                "Explain how a locator generates and detects signals in each of the four EML modes",
                "Identify conditions that cause signal distortion, depth errors, and missed services",
                "Explain why passive Power and Radio signals alone cannot provide a complete site picture",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground text-sm">
                  <span className="text-accent font-bold text-base shrink-0">&#8250;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-black text-foreground mb-4 text-lg border-b border-accent pb-2">Equipment Operation</h3>
            <ul className="space-y-3">
              {[
                "Correctly operate a cable locator in all four modes: Power, Radio, Genny, and Avoidance",
                "Connect and use a signal generator including earthing, dual frequency, and capacitance methods",
                "Perform blind induction sweeps and null services accurately",
                "Locate problem services including street lighting, LV services, and small communications cables",
                "Take and verify depth readings using the locator's depth estimation function",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground text-sm">
                  <span className="text-accent font-bold text-base shrink-0">&#8250;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-black text-foreground mb-4 text-lg border-b border-accent pb-2">On-Site Procedure</h3>
            <ul className="space-y-3">
              {[
                "Conduct a complete site visual inspection and service plan reconciliation before excavation",
                "Start every locate with Genny to establish a positive identification baseline",
                "Follow a methodical, repeatable locating procedure that reduces the risk of a missed service",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground text-sm">
                  <span className="text-accent font-bold text-base shrink-0">&#8250;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EUSR CAT1 vs ProQual CAT1 comparison */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl font-black mb-3 text-foreground">EUSR CAT1 vs ProQual CAT1: Which Does Your Operative Need?</h2>
          <p className="text-muted-foreground mb-8">EUSR CAT1 and ProQual CAT1 are not equivalent qualifications. ProQual CAT1 is significantly more thorough. It covers topics that EUSR does not assess at all, uses written theory papers rather than multiple choice questions, and requires both theory and practical assessment where EUSR relies on MCQ alone. Where EUSR covers a topic through MCQ only, that topic is not meaningfully assessed because a multiple choice question does not demonstrate that a candidate can apply the knowledge on site.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 pr-6 font-black text-foreground w-44"></th>
                  <th className="text-left py-3 pr-6 font-black text-foreground">EUSR CAT1</th>
                  <th className="text-left py-3 font-black text-foreground">ProQual CAT1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Duration", "1 day", "2 days"],
                  ["Theory assessment", "Multiple choice paper (80% pass)", "Written theory paper with extended responses"],
                  ["Practical assessment", "On-site practical in all modes", "Individually assessed practical for each technique"],
                  ["Clamp method", "Covered in course", "Assessed separately"],
                  ["Capacitance", "Covered in course", "Assessed separately"],
                  ["Blind induction", "Covered in course", "Assessed separately"],
                  ["Certificate validity", "3 years", "3 years"],
                  ["Awarding body", "EUSR", "ProQual Accreditations"],
                  ["CITB funding", "Eligible", "Eligible"],
                ].map(([label, eus, proq]) => (
                  <tr key={String(label)} className="border-b border-border">
                    <td className="py-3 pr-6 font-semibold text-foreground align-top w-44">{label}</td>
                    <td className="py-3 pr-6 text-muted-foreground">{eus}</td>
                    <td className="py-3 text-muted-foreground">{proq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <Link href="/courses/proqualcat1-training" className="text-accent font-semibold hover:underline">
              Read the full ProQual CAT1 course page &#8250;
            </Link>
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-muted/20 border-y border-border py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-xl font-black mb-6 text-foreground">Related Resources</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge-hub/eusr-cat1-vs-proqual-cat1" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">EUSR CAT1 vs ProQual CAT1</h3>
              <p className="text-sm text-muted-foreground">Not sure which route is right? Compare the two main cable avoidance qualification pathways.</p>
            </Link>
            <Link href="/knowledge-hub/eusr-card-renewal" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">EUSR Card Renewal</h3>
              <p className="text-sm text-muted-foreground">How to renew your EUSR card, when to start the process, and what documentation you need.</p>
            </Link>
            <Link href="/courses/gs6-overhead-power-lines" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">GS6 Overhead Power Lines</h3>
              <p className="text-sm text-muted-foreground">Half-day awareness course covering safe working near overhead power lines. Often booked alongside EUSR CAT1.</p>
            </Link>
            <Link href="/courses/manufacturer-locator-training" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">Manufacturer-Specific Locator Training</h3>
              <p className="text-sm text-muted-foreground">One-day training on your specific locating equipment. Covers vScan, CScope, and other pipe and cable locators.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">FAQs</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">EUSR CAT1 Training: Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">{q}</h3>
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image strip before upgrade paths */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-80" width={1200} height={900} alt="Cable avoidance practical assessment on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-78" width={1200} height={900} alt="EUSR CAT1 delegates using locator equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-91" width={1200} height={900} alt="Sygma EUSR CAT1 hands-on training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Upgrade paths */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl font-black mb-6 text-foreground">Upgrade Your Qualification</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Next Step</p>
              <h3 className="font-black text-foreground mb-2">ProQual CAT1 Plus</h3>
              <p className="text-muted-foreground text-sm mb-4">Upgrade your EUSR CAT1 to include additional locating techniques and extended practical assessment criteria under ProQual accreditation.</p>
              <Link href="/courses/proqualcat1plus" className="text-primary font-semibold text-sm hover:underline">View ProQual CAT1 Plus &rsaquo;</Link>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">On-Site Competency</p>
              <h3 className="font-black text-foreground mb-2">OSCA Assessment</h3>
              <p className="text-muted-foreground text-sm mb-4">The OSCA on-site competency assessment verifies your operatives are competent in live conditions on your own infrastructure.</p>
              <Link href="/osca" className="text-primary font-semibold text-sm hover:underline">View OSCA Assessment &rsaquo;</Link>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Bespoke Programme</p>
              <h3 className="font-black text-foreground mb-2">Bespoke Training</h3>
              <p className="text-muted-foreground text-sm mb-4">If your organisation has a specific incident history, permit system, or workforce that needs more than a standard EUSR course, we design the programme from the ground up. On-site, nationwide.</p>
              <Link href="/bespoke-training" className="text-primary font-semibold text-sm hover:underline">View Bespoke Training &rsaquo;</Link>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Course Comparison</p>
              <h3 className="font-black text-foreground mb-2">Cable Avoidance Course Comparison</h3>
              <p className="text-muted-foreground text-sm mb-4">Not sure whether EUSR CAT1, ProQual CAT1, or another route is right for your team? Compare all cable avoidance courses side by side.</p>
              <Link href="/courses/cable-avoidance-course-comparison" className="text-primary font-semibold text-sm hover:underline">View Comparison &rsaquo;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sygma for EUSR CAT1 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Sygma for EUSR CAT1</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Not all CAT1 courses are equal. Sygma goes beyond the minimum spec to deliver operatives who are competent in real conditions.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Minimum Spec Plus</p>
              <h3 className="text-base font-bold text-foreground mb-2">Not All CAT1 Courses Are Created Equal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">EUSR sets a minimum spec. Some providers deliver to minimum. Sygma includes clamp, capacitance and blind induction in assessed practicals even though EUSR does not require it.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Proven Methodology</p>
              <h3 className="text-base font-bold text-foreground mb-2">Genny-First Methodology</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Sygma-trained operatives show a 70-80% increase in Genny usage. This is not theory. It is measured through locator data downloads.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Expertise</p>
              <h3 className="text-base font-bold text-foreground mb-2">Specialist Trainers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Every trainer is directly employed by Sygma. All are ex-utility surveyors or ex-equipment manufacturer specialists. All TAQA qualified.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Real-World Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Real Practical Assessment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Structured on-site practical using real equipment in real conditions. Not a tick-box exercise. The goal is a competent operative, not just a certificate.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">No Bias</p>
              <h3 className="text-base font-bold text-foreground mb-2">Independent</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Sygma has no surveys to sell, no equipment to push, no commercial relationship with any manufacturer. When we tell you something is wrong, we have no financial reason to soften that verdict.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Convenience</p>
              <h3 className="text-base font-bold text-foreground mb-2">We Come to You</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Delivered at your site using your own plant, procedures and environment. Travel included in course rate. No hidden extras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HSG47 Compliance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Legal Requirement</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">HSG47 Compliance</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">EUSR CAT1 directly meets the training and competency requirements of <Link href="/courses/hsg47-training">HSG47 training</Link> on safe digging near buried services.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Trained Personnel</p>
              <h3 className="text-base font-bold text-foreground mb-2">Trained and Competent Operatives</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">HSG47 requires all personnel involved in excavation near underground services to be trained. EUSR CAT1 directly meets this requirement.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Safe System</p>
              <h3 className="text-base font-bold text-foreground mb-2">Safe System of Work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The course covers establishing and following safe digging procedures aligned with HSG47 guidance.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Planning</p>
              <h3 className="text-base font-bold text-foreground mb-2">Service Plan Checks</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Delegates learn to interpret utility records and service plans before breaking ground, as HSG47 requires.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Equipment Use</p>
              <h3 className="text-base font-bold text-foreground mb-2">Correct Use of Equipment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Full practical training on Genny & CAT equipment covering Power, Radio, Genny and all signal application modes.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Visual Detection</p>
              <h3 className="text-base font-bold text-foreground mb-2">Visual Inspection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Techniques for visual identification of surface markers, valve covers, and other indicators of buried services.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Documentation</p>
              <h3 className="text-base font-bold text-foreground mb-2">Evidenced Training Records</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">EUSR CAT1 certification provides auditable proof of competency for HSG47 compliance documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Book Your EUSR CAT1 Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Book at our Wigan HQ, The Survey School in Worcester, or on your site anywhere in the UK. Travel included. Maximum 8 delegates. Contact us for a tailored quote.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
              Book Now
            </Link>
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors">
              Request On-Site Delivery
            </Link>
          </div>
        </div>
      </section>
    </>
);
}
