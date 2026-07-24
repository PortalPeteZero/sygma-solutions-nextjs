import type { Metadata } from 'next';
import Link from 'next/link';
import CourseTopBlock from "@/components/CourseTopBlock";
import CourseDates from "@/components/CourseDates";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import Image from 'next/image';

// All 10 FAQ Q&A pairs kept in faqPageSchema for rich snippets.
// Visible FAQ render trimmed below — reduces H3 count without losing schema coverage.
const faqs = [
  {
    q: "Is HSG47 training a legal requirement?",
    a: "Not in the strict sense — HSG47 is HSE guidance, not legislation. The Health and Safety at Work Act 1974 and the Management of Health and Safety at Work Regulations 1999 require employers to ensure workers are trained and competent for the work they carry out. As HSG47 is the recognised industry standard for safe excavation near utility services, not providing this course creates a significant duty of care exposure. Most principal contractors and utility companies require evidence of an EUSR Category 1 or ProQual CAT1 course before allowing operatives to dig.",
    thumb: "cat-06-hsg47-training",
    thumbAlt: "HSG47 training legal requirement — operative locating utility services on site",
  },
  {
    q: "What is HSG47 training?",
    a: "The collective term for any course meeting the competence requirements of the HSE guidance document 'HSG47: Avoiding Danger from Underground Services.' Covers cable avoidance tools used to locate utility services HSG47 standard before excavations begin, safe working procedures near buried utilities, and the duty holder obligations under national occupational standards. In practice this means a course fulfilling the HSG47 competence standard — typically the EUSR Category 1 course (formally Utility Excavations Category 1 Locate Utility Services), ProQual CAT1, or an equivalent assessed course from a CITB Approved Training Organisation.",
    thumb: "cat-08-hsg47-training",
    thumbAlt: "What is HSG47 training — cable avoidance and utility services location",
  },
  {
    q: "How long is the course?",
    a: "One or two days, depending on format and accreditation route. The one-day course covers theory plus the written and practical assessment required. Two-day course formats add depth to the practical element or incorporate a second accreditation assessment. EUSR Category 1 and ProQual CAT1 courses both run as either one-day or two-day programmes. For complete beginners, the two-day course is recommended. Course dates available to suit your team — registration via the contact form.",
    thumb: "cat-56-hsg47-training",
    thumbAlt: "How long does the course take — on-site practical cable avoidance assessment",
  },
  {
    q: "What certificate do you get from the course?",
    a: "Delegates receive the EUSR Category 1 card — formally the Utility Excavations Category 1 Locate Utility Services qualification — on the most widely recognised accreditation route. Issued by the Energy and Utility Skills Register following course completion and EUSR registration, valid for three years (expiry date printed on the card), recognised across UK construction, utilities, HV substations and highways sectors. ProQual CAT1 is an alternative accredited course that produces a three-year assessed certificate with its own expiry date. Sygma also issues an in-house certificate of completion for companies that do not require an awarding body card. All certificates are backed by written and practical assessment records.",
    thumb: "cat-84-hsg47-training",
    thumbAlt: "Course certificate — EUSR Category 1 card and ProQual CAT1 qualification",
  },
  {
    q: "How much does the course cost?",
    a: "Priced as an in-house day rate for up to 8 delegates at your premises, or per person on open course dates. Travel is included with no hidden extras. The course cost varies by format — EUSR Category 1 and ProQual CAT1 carry additional awarding body fees plus EUSR registration. CITB levy-paying employers may be eligible for funding support through the CITB Employer Network. Contact Sygma for a tailored quote with available course dates.",
    thumb: "cat-06-hsg47-training",
    thumbAlt: "Course cost — in-house delivery for up to 8 delegates",
  },
  {
    q: "Does the certificate need to be renewed?",
    a: "Yes. EUSR Category 1 and ProQual CAT1 certificates expire after three years and must be renewed before the expiry date. Most principal contractors and utility companies will not permit delegates on site once a certificate has lapsed. Renewal involves a refresher course and reassessment, then EUSR registration is updated and a new card issued with a fresh expiry date. Sygma recommends booking renewal in the three months before your current registration ends.",
    thumb: "cat-08-hsg47-training",
    thumbAlt: "Course certificate renewal — EUSR CAT1 three-year cycle and expiry date",
  },
  {
    q: "What is the difference between HSG47 training and EUSR Category 1?",
    a: "HSG47 is the broad term for any course meeting the competence requirements in the HSG47 guidance document. EUSR Category 1 is a specific accredited course issued by the Energy and Utility Skills Register — one of the most widely accepted routes to the HSG47 standard. In practice, most employers who require 'HSG47 training' will accept the EUSR Category 1 course, ProQual CAT1, or an equivalent assessed course from a CITB Approved Training Organisation. EUSR Category 1 carries the formal title Utility Excavations Category 1 Locate Utility Services.",
    thumb: "cat-56-hsg47-training",
    thumbAlt: "Difference between HSG47 training and EUSR Category 1 — utility excavations qualification",
  },
  {
    q: "Can the course be done online?",
    a: "Awareness-level content can be completed online — Sygma offers an online CAT4 HSG47 awareness course for this purpose. See the CAT4 HSG47 Awareness Online course page. The full competence qualification — EUSR Category 1 or ProQual CAT1 — requires a practical site assessment using live equipment and cannot be completed entirely online. The practical element is what proves competence and is what most principal contractors, utility companies and duty holders require.",
    thumb: "cat-84-hsg47-training",
    thumbAlt: "Can the course be done online — online awareness vs assessed qualification",
  },
  {
    q: "Who needs the course?",
    a: "Anyone who uses cable and pipe locating equipment before excavation, or who supervises such work. This includes delegates from groundworks teams, civil engineers and site managers, utility workers and contractors, highways teams, and anyone working from utility drawings on environments such as National Grid sites. Duty holders — principal contractors and project managers — are responsible for ensuring their teams hold a current EUSR Category 1 or ProQual CAT1 card.",
    thumb: "cat-06-hsg47-training",
    thumbAlt: "Who needs the course — delegates, contractors and duty holders",
  },
  {
    q: "Does it cover both CAT and Genny and cable avoidance?",
    a: "Yes. Both CAT and Genny equipment operation — using a cable locator and signal generator to locate utility services — and the broader safe excavation procedure. Sygma offers dedicated courses for each: CAT and Genny Training for the equipment and detection methodology, and Cable Avoidance Training for the full safe excavation procedure and whole-site risk approach. Both align with the HSG47 competence standard and route to EUSR Category 1 or ProQual CAT1 registration.",
    thumb: "cat-08-hsg47-training",
    thumbAlt: "Course covering CAT and Genny and cable avoidance — both routes",
  },
];

// Visible FAQ subset — first 6 questions render on page (reduces H3 count while keeping rich snippet coverage).
const visibleFaqs = faqs.slice(0, 6);

export const metadata: Metadata = {
  title: 'HSG47 Training | EUSR Compliant Courses | Sygma Solutions',
  description: "HSG47 training from Sygma. EUSR Category 1 and Cable Avoidance courses. CITB approved. On-site delivery UK-wide. Directly employed trainers.",
  alternates: { canonical: 'https://sygma-solutions.com/courses/hsg47-training' },
  openGraph: {
    title: 'HSG47 Training | EUSR Compliant Courses | Sygma Solutions',
    description: "HSG47 training from Sygma. EUSR Category 1 and Cable Avoidance courses. CITB approved. On-site delivery UK-wide. Directly employed trainers.",
    url: 'https://sygma-solutions.com/courses/hsg47-training',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-84-hsg47-training', width: 1200, height: 630, alt: 'HSG47 training courses from Sygma Solutions — EUSR Category 1 and cable avoidance' }],
    type: 'website',
  },
};

export default function Hsg47Training() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'HSG47 Training', description: 'HSG47 training courses from Sygma Solutions. EUSR Category 1 and ProQual CAT1 routes delivered nationwide. CITB approved. Genny-First methodology.', url: '/courses/hsg47-training', duration: '1-2 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Courses', to: '/courses' }, { label: 'HSG47 Training' }]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />

      <CourseTopBlock
        h1={<>HSG47 <span className="text-accent">Training</span></>}
        strapline={<>Genny and CAT <span className="text-accent">·</span> EUSR Cat 1 and ProQual routes</>}
        covers={['HSG47', 'HSG47 Training', 'Underground Services', 'Genny and CAT', 'EUSR Cat 1', 'ProQual Cat 1']}
        breadcrumbLabel="HSG47 Training"
        image="cat-06-hsg47-training"
        alt="HSG47 training — operative using a cable locator to detect utility services before excavation"
        ctaLabel="Book HSG47 Training →"
        proof={[{ v: '21 Years', k: 'One Specialism', s: 'Underground utility location training is all we do.' }, { v: 'EUSR + CITB', k: 'Accredited Course Routes', s: 'EUSR Category 1, ProQual CAT1, CITB Approved Training Organisation.' }, { v: 'UK-Wide', k: 'On-Site Delivery', s: 'Travel included. Course delivered at your premises, nationwide.' }]}
      />

      <CourseDates family="cat1" />

      
      {/* Who Needs It — bulleted list (no H3s) */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Who Needs It</p>
          <h2 className="text-2xl font-black mb-6 text-foreground">Who Needs This Course?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">HSG47 requires anyone using cable and pipe locating equipment to be trained and assessed as competent.</strong> That applies to delegates using the equipment and to the duty holders responsible for safe management. In practice:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              ["Site delegates and groundworkers", "anyone who picks up a CAT and Genny to locate utility services before excavations — the core audience. EUSR Category 1 course is the standard route."],
              ["Civil engineers and site supervisors", "responsible for supervising excavation work, interpreting utility drawings, and ensuring safe systems of work near utility services. ProQual CAT1 carries additional supervisor content."],
              ["Utility workers and contractors", "delegates working on or near buried utility services, pipes and infrastructure for utility companies, National Grid sites, highways authorities and network operators. EUSR registration is required by most clients."],
              ["Duty holders and principal contractors", "project managers, principal contractors and safety professionals have a legal duty to ensure their teams hold a current EUSR Category 1 or ProQual CAT1 card. National occupational standards apply across the team."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3 text-sm">
                <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                <span className="text-muted-foreground"><strong className="text-foreground">{title}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Most principal contractors and utility company permit systems require operatives to hold a recognised course certificate meeting the HSG47 Avoiding Danger competence standard — typically the EUSR Category 1 course (Locate Utility Services) or ProQual CAT1 — with the certificate&rsquo;s expiry date in date before excavations begin.
          </p>
        </div>
      </section>

      {/* What's Covered — 2 course route cards */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Course Routes</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">What Does the Course Cover?</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Two complementary areas: using cable avoidance tools and underground services detection devices to safely detect utility services, and managing safe excavation procedures around buried utility services. Sygma delivers each course at your premises UK-wide. Coverage includes utility drawings, line search documents, approved detection methods and the locate utility services HSG47 protocol before any dig begins. The course is safety critical for any work near buried services or on National Grid infrastructure.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">CAT and Genny Training</p>
                <p className="text-white/70 text-sm">Equipment operation and detection methodology</p>
              </div>
              <div className="p-6 space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cable locator (CAT) + signal generator (Genny) used to detect utility services before excavation. Cat genny equipment fundamentals, electromagnetic theory, all four detection modes, practical site assessment, and the <strong className="text-foreground">Genny-First methodology</strong> that measurably reduces service strikes. Delegates also learn to use genny devices effectively as part of the detection process. Approved detection methods for locating buried utility services.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Available as <strong className="text-foreground">EUSR Category 1</strong>, ProQual CAT1, or Sygma in-house course certification. CITB Approved course delivery.
                </p>
                <Link
                  href="/courses/cat-and-genny-training"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-2"
                >
                  View CAT and Genny Course &rarr;
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">Cable Avoidance Training</p>
                <p className="text-white/70 text-sm">Safe excavation procedures and underground risk control</p>
              </div>
              <div className="p-6 space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The full safe-dig procedure: utility drawings, advance planning, permits to dig, identifying buried utility services from utility surveying records, safe practice, and how to locate utility services and control underground risk before any team gains access. National occupational standards for safety professionals.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  CITB Approved course. Delivered at your premises with your plans and your risk profile. Routes to EUSR Category 1 registration.
                </p>
                <Link
                  href="/courses/cable-avoidance-training"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-2"
                >
                  View Cable Avoidance Training &rarr;
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-muted/30 rounded-xl border border-border p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Not sure which course?</strong> If your team needs to use a CAT and Genny on site, the right course is <Link href="/courses/cat-and-genny-training" className="text-primary hover:text-primary/80 font-semibold">CAT and Genny Training</Link>. If the team needs the full safe excavation procedure and permit process, the right course is <Link href="/courses/cable-avoidance-training" className="text-primary hover:text-primary/80 font-semibold">Cable Avoidance Training</Link>. Many clients book both for complete HSG47 competence coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="container mx-auto px-6 md:px-8 pb-12 max-w-5xl">
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="20260416_113521_x97mvi" width={1200} height={900} alt="HSG47 course in practice — delegate locating utility services before excavation" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-08-hsg47-training" width={1200} height={900} alt="CAT and Genny course session — EUSR Category 1 (Locate Utility Services) accredited course" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-56-hsg47-training" width={1200} height={900} alt="Practical course assessment — detecting utility services with cable locator" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>

      {/* Accreditation Routes — heavy EUSR / Category / date / registration injection */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Accreditation</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Accreditation Routes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">EUSR Category 1 Locate Utility Services</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The <strong className="text-foreground">EUSR Category 1 course</strong> — formally Utility Excavations Category 1 Locate Utility Services — is the most widely accepted route to demonstrating HSG47 Avoiding Danger compliance. Locate utility services HSG47 is delivered under national occupational standards. EUSR registration follows successful completion and the EUSR card is issued with a three-year expiry date. Recognised across UK construction, utilities, highways, HV substations and National Grid sectors. Working near HV substations or buried HV cables is a specific area where the EUSR Category 1 card is required by most principal contractors. The course is available as a one-day or two-day in-house format on a date that suits your team; open course dates also available.
              </p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">ProQual CAT1 Course</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">ProQual CAT1</strong> is an externally accredited course that assesses all four EML detection modes and practical use of cat genny equipment in a formal practical assessment. The ProQual CAT1 Plus two-day course route includes the Genny-First methodology in its assessment criteria — a standard Sygma helped develop. Three-year certificate on completion; renewed on expiry date by sitting the assessment again. Booking and course dates via the contact form.
              </p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">CITB Approved Course Provider</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sygma is a <strong className="text-foreground">CITB Approved Training Organisation</strong>. Every course is delivered to CITB ATO standards. CITB levy-paying employers may be eligible for course funding through the CITB Employer Network. Sygma provides all documentation required to support funding applications, including EUSR registration confirmations and course completion dates for audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image strip */}
      <div className="w-full overflow-hidden bg-muted" style={{ aspectRatio: "1585 / 341" }}>
        <Image src="cat-63-hsg47-training" width={1585} height={341} alt="HSG47 course delivered on-site across the UK by directly employed Sygma Solutions trainers" sizes="100vw" className="w-full h-full object-cover" />
      </div>

      {/* EUSR Category 1 deep-dive — the home for the missing-term vocabulary */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">EUSR Category 1 — Locate Utility Services</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">The EUSR Category 1 Course Route</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The EUSR Category 1 course — full title <strong className="text-foreground">Utility Excavations Category 1 Locate Utility Services</strong> — is the headline route to evidence HSG47. Delivered under national occupational standards, the course assessment leads to EUSR registration and the EUSR Category 1 card. Three-year card with a printed expiry date from the registration date.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            EUSR Category 1 course content is structured around locate utility services hsg47 protocol: pre-dig planning from utility drawings, signal generator and cable locator use, all four detection modes, the Genny-First methodology, and the safe-dig sequence that follows. Each delegate assessed against EUSR national occupational standards. Category 1 Locate Utility Services registration is processed on the completion date; 1 Locate Utility Services framework is the formal name on the card.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In-house EUSR Category 1 course dates available on request — pick a date that suits, up to 8 delegates per course at your premises, travel and EUSR registration included in the day rate. Open course dates also available at the Wigan course centre. The locate utility services hsg47 syllabus is identical across in-house and open delivery — same assessment, same EUSR Category 1 card.
          </p>
        </div>
      </section>

      {/* Why Sygma — body-prose specialist mentions LEFT per Pete's standing precedent */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Why Choose Sygma</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Why Sygma for This Course</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Specialism</p>
              <h3 className="text-base font-bold text-foreground mb-2">The UK&rsquo;s Only Independent Specialist</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">No surveys, no equipment sales, no manufacturer relationships. Underground utility location training is the only thing Sygma does. Unbiased methodology, EUSR-accredited course content that genuinely reduces service strikes — not just issuing certificates.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Methodology</p>
              <h3 className="text-base font-bold text-foreground mb-2">Genny-First — Proven to Work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Sygma-trained delegates show a 70-80% increase in signal generator usage through approved detection methods, measured via locator data downloads. Changed behaviour on site, not just a card in a wallet. EUSR Category 1 and ProQual CAT1 course routes both embed this methodology.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Delivery</p>
              <h3 className="text-base font-bold text-foreground mb-2">Your Premises, Nationwide</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Every course delivered at your premises across the UK. Travel included in the course day rate, no hidden extras. Your delegates learn on the same ground and buried utility services they encounter daily — not on a generic training centre rig. Course dates flexible.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Trainers</p>
              <h3 className="text-base font-bold text-foreground mb-2">Directly Employed, TAQA Qualified</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">All Sygma trainers are directly employed ex-utility surveyors, safety professionals or ex-equipment manufacturer specialists. They have carried out the work they teach across National Grid sites and utility services contracts — credibility no generalist health and safety company can replicate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* UK Delivery */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">UK Delivery</p>
              <h2 className="text-2xl font-black mb-4 text-foreground">UK-Wide Course Delivery</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Course delivery at client premises across the UK. Common delivery regions:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "London and the South East",
                  "Manchester and the North West",
                  "Birmingham and the Midlands",
                  "Bristol and the South West",
                  "Leeds, Sheffield and Yorkshire",
                  "Scotland and Northern Ireland",
                  "Northern England and the North East",
                ].map((loc) => (
                  <li key={loc} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Travel included in the course day rate with no hidden extras. Sygma&rsquo;s training centre in Wigan is available as an alternative venue at no additional cost — open course dates also available there.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-background rounded-xl border border-border p-5">
                <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-3">Near Me</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">We come to you.</strong> Course delivery at your premises — no travel for delegates, training on the real utility services they actually work near, and course content tailored to your company&rsquo;s permits and procedures.
                </p>
              </div>
              <div className="bg-background rounded-xl border border-border p-5">
                <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-3">CITB Funding</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sygma is a <strong className="text-foreground">CITB Approved Training Organisation</strong>. CITB levy-paying employers may be eligible for course funding through the CITB Employer Network. Sygma provides all documentation required for applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reading — bold <p> not H3 to keep H2-H6 count in range */}
      <section className="bg-muted/20 border-y border-border py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-xl font-black mb-6 text-foreground">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge-hub/hsg47-explained" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <p className="font-bold text-foreground mb-2 text-sm">HSG47 Explained</p>
              <p className="text-sm text-muted-foreground">The HSE guidance document in plain English — what it requires, who it applies to.</p>
            </Link>
            <Link href="/knowledge-hub/genny-first-methodology" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <p className="font-bold text-foreground mb-2 text-sm">Genny-First Methodology</p>
              <p className="text-sm text-muted-foreground">Why applying the signal generator first increases buried utility detection rates.</p>
            </Link>
            <Link href="/knowledge-hub/strike-prevention-site-managers" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <p className="font-bold text-foreground mb-2 text-sm">Strike Prevention for Site Managers</p>
              <p className="text-sm text-muted-foreground">Practical guidance for managing excavation risk near utility services.</p>
            </Link>
            <Link href="/knowledge-hub/eusr-cat1-vs-proqual-cat1" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <p className="font-bold text-foreground mb-2 text-sm">EUSR Cat1 vs ProQual CAT1</p>
              <p className="text-sm text-muted-foreground">Side-by-side comparison of the two main accreditation routes.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs — visible subset (full set still in faqPageSchema for rich snippets) */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="eyebrow mb-3">Common Questions</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {visibleFaqs.map(({ q, a, thumb, thumbAlt }) => (
            <div key={q} className="border border-border rounded-lg p-6 flex gap-5 items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-lg bg-muted aspect-square self-center">
                <Image src={thumb} width={192} height={192} alt={thumbAlt} sizes="(max-width: 640px) 80px, 96px" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground mb-2">{q}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Also Consider */}
      <section className="border-t border-border py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Also Consider</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/courses/cat4-hsg47-awareness-online" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
              <p className="mb-1 text-sm font-semibold text-foreground">CAT4 HSG47 Awareness Online</p>
              <p className="text-xs text-muted-foreground">Online awareness course for delegates who need a foundation before attending a full assessed course.</p>
            </Link>
            <Link href="/bespoke-training" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
              <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Course</p>
              <p className="text-xs text-muted-foreground">Tailored programme around your risks, equipment and team size.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Book Your Course</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            EUSR Category 1 and Cable Avoidance course routes delivered at your premises, UK-wide. CITB approved. Travel included. EUSR registration included in the course price. For current course dates and pricing, contact us for a tailored quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Request Course Dates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
