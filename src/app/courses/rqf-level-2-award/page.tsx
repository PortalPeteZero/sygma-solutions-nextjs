import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const faqs = [
              {
                q: "What is the difference between the RQF Level 2 and the QCF Level 2?",
                a: "The QCF (Qualifications and Credit Framework) Level 2 Award has been superseded by the RQF (Regulated Qualifications Framework) Level 2 Award. The qualification name (Level 2 Award in Utility Location and Avoidance) is the same, and the subject matter is equivalent. If your operatives hold an older QCF qualification, they will need to complete the RQF version to hold a current, recognised qualification.",
              },
              {
                q: "What is the difference between the RQF Level 2 and the EUS CAT1 qualification?",
                a: "These are two different qualification schemes. The RQF Level 2 Award in Utility Location and Avoidance is a nationally recognised qualification delivered through the RQF framework. EUS CAT1 is an EUSR-registered qualification. Both cover utility location and avoidance. The right qualification depends on your client or contract requirements (some specify EUS, others accept the Level 2). Contact Sygma if you are unsure which to choose.",
              },
              {
                q: "Which format is right for my team?",
                a: "If your team needs to be qualified quickly and your group is small (up to 6), the 1-day format is the most efficient. For groups up to 8, the 2-day consecutive format gives more practical time. The 2-day split format is ideal if you want delegates to apply their learning on site between sessions before returning for their assessment day (this can produce stronger results in the practical assessment).",
              },
              {
                q: "Do delegates need any prior training or experience before attending?",
                a: "No. The course is designed to be accessible to delegates with no prior formal training in utility avoidance. Sygma's delivery starts from first principles and includes advanced content that benefits experienced operatives as well as those new to the role.",
              },
              {
                q: "Does Sygma supply the locating equipment?",
                a: "Sygma carries a stock of equipment but cannot guarantee it will be the same model as your delegates use in their day-to-day role. We strongly recommend delegates bring their own locators where possible. Equipment can be supplied at additional cost (confirm requirements when booking).",
              },
              {
                q: "Is data logging covered?",
                a: "Data logging is included as an optional element in the classroom session. If your company uses locator data management systems or requires data download capability, Ask Sygma about the locator data management training for operatives who need full data competence.",
              },
            ];

export const metadata: Metadata = {
  title: 'RQF Level 2 Utility Location Award | Sygma Solutions',
  description: 'RQF Level 2 Award in Utility Location and Avoidance. Nationally recognised, Ofqual-regulated qualification for formal recognition of competency.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/rqf-level-2-award' },
  openGraph: {
    title: 'RQF Level 2 Utility Location Award | Sygma Solutions',
    description: 'RQF Level 2 Award in Utility Location and Avoidance. Nationally recognised, Ofqual-regulated qualification for formal recognition of competency.',
    url: 'https://sygma-solutions.com/courses/rqf-level-2-award',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/sygma-solutions/branding/logo', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function RqfLevel2Award() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "RQF Level 2 Utility Location Award", description: "RQF Level 2 Award in Utility Location and Avoidance. Nationally recognised, Ofqual-regulated qualification for formal recognition of competency.", url: "/courses/rqf-level-2-award", credential: "RQF Level 2 Utility Location Award Certificate", duration: "Variable", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/utility-mapping-surveying" }, { label: "RQF Level 2 Utility Location Award" }]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="RQF Level 2 Award in Utility Location and Avoidance: A Nationally Recognised Qualification"
        sub="The RQF Level 2 Award in Utility Location and Avoidance is the nationally recognised qualification for operatives working near buried services. Three delivery formats. Advanced content that goes beyond the qualification requirements. Knowledge and practical assessment included."
        image="Advanced-EM-07"
        alt="RQF Level 2 utility location award training with electromagnetic detection equipment"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "RQF Level 2 Award" },
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

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["Qualification", "RQF Level 2 Award"],
            ["Formats Available", "1-day, 2-day, or 2-day split"],
            ["Assessment", "Knowledge and practical"],
            ["Delivery", "In-house, nationwide UK"],
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
          <img loading="lazy" src="CAT4-and-Genny-15" alt="RQF Level 2 Award training - practical session with CAT and Genny" className="rounded-lg object-cover aspect-[4/3] w-full" />
          <img loading="lazy" src="CAT4-and-Genny-35" alt="RQF Level 2 Award training - hands-on assessment on site" className="rounded-lg object-cover aspect-[4/3] w-full" />
          <img loading="lazy" src="CAT4-and-Genny-55" alt="RQF Level 2 Award - Genny signal application training" className="rounded-lg object-cover aspect-[4/3] w-full" />
        </div>
      </section>
      {/* About */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Nationally Recognised Qualification</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The RQF Level 2 Award in Utility Location and Avoidance</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The RQF Level 2 Award in Utility Location and Avoidance (also referred to as the ProQual Level 2 Award) is the nationally recognised qualification for operatives who work near buried utilities. It replaces the older QCF Level 2 qualification of the same name and is accepted by major contractors, utilities, and employers across the industry.
              </p>
              <p>
                Sygma's delivery goes beyond what the qualification requires. The course includes advanced content in both classroom theory and site practical that equips delegates to work with real confidence (not just to pass the paper). Every delegate who completes the Level 2 with Sygma has been through content that exceeds the qualification standard.
              </p>
              <p>
                Three formats are available to fit different team sizes, site rosters, and operational requirements. All formats include both a knowledge-based assessment and a practical assessment.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Qualification Details</p>
            {[
              ["Qualification", "RQF Level 2 Award in Utility Location and Avoidance"],
              ["Framework", "RQF (Regulated Qualifications Framework, replaces the QCF Level 2)"],
              ["Assessment", "Knowledge-based assessment paper and individual practical assessment"],
              ["Formats", "1-day (max 6), 2-day consecutive (max 8), 2-day split 3 months apart (max 6)"],
              ["Delivery", "In-house bespoke at your premises"],
              ["Pricing", "By quotation (contact Sygma with format and group size)"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three formats */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Course Formats</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Three Formats to Suit Your Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "1-Day Format",
                sub: "Max 6 delegates",
                items: [
                  "Duration: 1 day, 09:00 to approx 15:00",
                  "Classroom theory, site practical, and knowledge assessment all in one day",
                  "Best for small teams who need the qualification quickly",
                  "Maximum 6 delegates",
                ],
              },
              {
                title: "2-Day Format",
                sub: "Max 8 delegates",
                items: [
                  "Duration: 2 consecutive days, 09:00 to approx 15:00 each day",
                  "Day 1: full classroom theory and site practical",
                  "Day 2: knowledge assessment, further practical work, and individual assessments",
                  "Maximum 8 delegates (more time on practical elements)",
                ],
              },
              {
                title: "2-Day Split Format",
                sub: "Max 6 delegates, min 3 months between days",
                items: [
                  "Duration: 2 days with a minimum 3-month gap between Day 1 and Day 2",
                  "Day 1: classroom theory and site practical training",
                  "Day 2 (3+ months later): assessment day (knowledge paper and individual practical assessments)",
                  "Delegates apply their learning on site before returning for assessment",
                ],
              },
            ].map(({ title, sub, items }) => (
              <div key={title} className="rounded-xl border border-border overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <p className="text-white font-black">{title}</p>
                  <p className="text-white/70 text-sm">{sub}</p>
                </div>
                <div className="p-6 space-y-2">
                  {items.map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                      <span className="text-accent font-bold shrink-0">&#8250;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom content */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Classroom Content</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Theory That Exceeds the Qualification Standard</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The classroom session covers both the RQF Level 2 qualification requirements and Sygma's additional advanced content. All three formats deliver the same classroom programme.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Health, safety, and financial consequences of underground utility strikes",
            "HSG47 compliance: safe system of work and legal obligations for operatives and employers",
            "Legislation and guidance, including differences between legislative instruments",
            "Client and designer responsibilities under HSG47",
            "Overview of utility networks: electricity, gas, water, communications, and asset types",
            "Buried service plans (STATS and PAS128): interpretation, inaccuracies, and limitations",
            "Equipment calibration, storage, and functional checks before any survey begins",
            "Electromagnetic theory: how a pipe and cable locator works, its limitations, tips and techniques",
            "Myth busting: what the equipment can and cannot detect in the field",
            "Controls and operation: correct use of the signal generator and cable locator in Power, Radio, Genny, and Avoidance modes",
            "Interpretation of signal: locating service joints, changes of direction, and depth",
            "Signal distortion and its effects on location accuracy",
            "Signal transmitter techniques: dual frequency, capacitance, earth positioning, blind induction, nulling out",
            "Data logging: locator data download and data analysis (optional element)",
            "Knowledge-based assessment paper",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start bg-muted/30 border border-border rounded-lg p-4">
              <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
              <span className="text-muted-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Site practical */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Site Practical and Assessment</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Full Locate Process on a Real Utility Area</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The site practical takes delegates through the complete end-to-end locate process using their own equipment on a live utility area. Individual practical assessments are completed in line with the RQF Level 2 requirements and Sygma's additional criteria.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Reading service plans to identify indicated utility routes before going onto site",
              "Visual site checks before any work is undertaken",
              "Correct use of the signal generator and cable locator in Power, Radio, Genny, and Avoidance modes",
              "Benefits of always starting with the transmitter: the Genny-First methodology",
              "Capacitance techniques and earth repositioning in the field",
              "Locating problem services: street lighting, LV services, and communications cables",
              "Induction sweeps and nulling out on a live utility area",
              "Conducting a full electromagnetic utility survey from scratch",
              "Individual practical assessments to RQF Level 2 requirements and Sygma's additional criteria",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get at the End */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What You Get at the End</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Course Completion and Certification</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "RQF Level 2 Award Certificate",
              desc: "Ofqual-regulated formal qualification certificate. Nationally recognised and portable across employers and contracts."
            },
            {
              title: "Personalised Training Record",
              desc: "Detailed digital record of your training, assessment results, and progress. Documented evidence of competency."
            },
            {
              title: "Practical Assessment Evidence",
              desc: "Record of your practical assessment on site with real buried services, demonstrating competency in equipment operation and locate procedures."
            },
            {
              title: "Ongoing Support",
              desc: "Access to Sygma for post-course technical guidance and support as you apply your training in the workplace."
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
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src="CAT4-and-Genny-09" alt="RQF Level 2 Award practical training session" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src="CAT4-and-Genny-48" alt="Utility avoidance hands-on assessment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src="Safe-Dig-05" alt="Level 2 qualification practical demonstration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <img loading="lazy" src="Advanced-EM-08" alt="RQF Level 2 Award training - live training environment" className="w-full h-full object-cover object-center" />
      </div>

      {/* Requirements */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What Your Company Needs to Provide</p>
            <h2 className="text-2xl font-black mb-6 text-foreground">Site and Equipment Requirements</h2>
            <div className="rounded-xl border border-border p-6 space-y-3">
              {[
                "STATS plans (buried service drawings) appropriate to the practical site. Sygma can source at additional cost if unavailable.",
                "Each operative's own cable locating equipment. Sygma carries a stock but cannot guarantee an exact model match (equipment can be supplied at additional cost).",
                "Meeting or conference room for up to 8 delegates with welfare facilities.",
                "Suitable site with buried metallic utilities near the training room for the practical element.",
                "Appropriate PPE for all delegates in line with national and company requirements.",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Who Should Attend</p>
            <h2 className="text-2xl font-black mb-6 text-foreground">Audience</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Operatives Working Near Buried Services",
                  body: "Any operative required to locate or avoid buried utilities as part of their day-to-day work, particularly on contracts where a nationally recognised qualification is a site requirement.",
                },
                {
                  title: "Teams Upgrading from QCF Level 2",
                  body: "The QCF Level 2 Award has been superseded by the RQF Level 2. Teams holding the older qualification who need to renew, or whose client now specifies the RQF version, can complete this course to update their credentials.",
                },
                {
                  title: "Supervisors and Team Leaders",
                  body: "Supervisors who want to hold the qualification themselves or who need to understand the standard their team is trained to.",
                },
                {
                  title: "Contract Compliance",
                  body: "Organisations whose procurement frameworks, tier 1 clients, or health and safety policies specifically require an RQF Level 2 qualification rather than a company scheme accreditation.",
                },
                {
                  title: "Rail, Water, and Energy Sector Workers",
                  body: "Operatives in sectors where network owners require formal qualification evidence for anyone working near their infrastructure assets.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-muted/30 rounded-lg border border-border p-4">
                  <p className="font-bold text-foreground text-sm mb-1">{title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src="CAT4-and-Genny-62" alt="RQF Level 2 training with CAT and Genny" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src="CAT4-and-Genny-30" alt="Utility locating qualification assessment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src="CAT4-and-Genny-20" alt="On-site RQF Level 2 practical training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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

      {/* Why Sygma */}
      <section className="py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Why Take the RQF Level 2 With Sygma?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { point: "Content That Exceeds the Standard.", desc: "Sygma does not teach to the minimum. Every delegate receives advanced content covering electromagnetic theory, signal interpretation, and the Genny-First methodology that produces a 70 to 80% measurable increase in Genny usage." },
              { point: "Specialist Trainers Only.", desc: "Every Sygma trainer is a directly employed, TAQA-qualified utility mapping professional with surveying or equipment manufacturer experience. Your operatives are trained by people who have done the job, not generalists reading from a course pack." },
              { point: "Independent of All Manufacturers.", desc: "Sygma does not sell locating equipment. Training is delivered without commercial bias. Your operatives learn how to get the best out of the equipment they already use." },
              { point: "Real Practical Assessment.", desc: "Every delegate is assessed on a site with real buried services. This is not a classroom exercise. Operatives demonstrate competency under conditions that reflect their actual working environment." },
              { point: "Three Formats, Your Site.", desc: "Choose 1-day, 2-day, or 2-day split to fit your team's roster and operational requirements. All formats are delivered at your premises anywhere in the UK. Travel is included in the course rate." },
              { point: "Same-Day Feedback Reporting.", desc: "Every course produces a QR-code delegate feedback report delivered on the same day. You receive documented evidence of what was delivered, how it was received, and assessment outcomes for every delegate." },
            ].map((card) => (
              <div key={card.point} className="rounded-lg border border-border bg-card p-5">
                <p className="mb-2 text-sm font-bold text-foreground">{card.point}</p>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITB Employer Network */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">CITB Employer Network</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CITB ATO Status and Funding</h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground leading-relaxed">Sygma is a CITB Approved Training Organisation. Contact your adviser about funding. Courses exceed 51% practical.</p>
        </div>
      </section>

      {/* HSG47 Compliance */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">HSG47 Compliance</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Requirements You Must Meet</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Trained and Competent Operatives", desc: "Every operative must be trained in locator use and understand equipment limitations. The RQF Level 2 provides formal, documented evidence of competence." },
              { title: "Safe System of Work", desc: "HSG47 mandates a structured approach from plan reading through visual inspection to safe excavation. This course covers the complete system." },
              { title: "Service Plan Checks", desc: "Operatives must obtain and verify service plans before excavation. The course includes dedicated plan reading and reconciliation training." },
              { title: "Correct Use of Equipment", desc: "HSG47 requires proper operation of locating tools. All four modes, signal interpretation, and limitations are covered in depth." },
              { title: "Visual Inspection", desc: "A structured visual site inspection is a legal requirement before and during excavation. The course teaches the process systematically." },
              { title: "Evidenced Training Records", desc: "Training must be documented and verifiable. Delegates receive a certificate and QR-code feedback reports for your records." },
            ].map((card) => (
              <div key={card.title} className="rounded-lg border border-border bg-background p-5">
                <p className="mb-2 text-sm font-bold text-foreground">{card.title}</p>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Related Courses</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Other Qualifications You May Need</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "EUS CAT1",
              desc: "EUSR-registered qualification. Common requirement in utility sector frameworks.",
              href: "/courses/eus-cat1",
            },
            {
              title: "ProQual CAT1",
              desc: "Accredited qualification covering all four EML connection modes.",
              href: "/courses/proqualcat1-training",
            },
            {
              title: "Cable Avoidance Training",
              desc: "Foundation cable avoidance course for operatives who need core locate skills.",
              href: "/courses/cable-avoidance-training",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-lg border border-border bg-card p-5 hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <p className="mb-2 text-sm font-bold text-foreground">{card.title}</p>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </Link>
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
              <Link href="/contact" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Training</p>
                <p className="text-xs text-muted-foreground">Design a tailored programme around your site risks, equipment, and team size.</p>
              </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About the RQF Level 2 Award</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            In-house at your site. Three formats available: 1-day (max 6), 2-day (max 8), or 2-day split over 3 months (max 6). Contact us with your group size and preferred format for a tailored quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link href="/courses/eus-cat1"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Compare With EUS CAT1
            </Link>
          </div>
        </div>
      </section>
    </>
);
}

