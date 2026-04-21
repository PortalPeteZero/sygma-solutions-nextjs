import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import Image from 'next/image';

const faqs = [
  {
    q: "Is HSG47 training a legal requirement?",
    a: "HSG47 training is not a statutory requirement in the strict sense -- HSG47 is HSE guidance, not legislation. However, the Health and Safety at Work Act 1974 and the Management of Health and Safety at Work Regulations 1999 require employers to ensure workers are trained and competent for the work they carry out. Where HSG47 training is the recognised industry standard for working near underground services, not providing it creates a significant duty of care exposure. Most principal contractors, utility companies and highways authorities require evidence of HSG47 training before allowing operatives to dig.",
    thumb: "cat-06-hsg47-training",
    thumbAlt: "HSG47 training legal requirement -- operative locating underground services on site",
  },
  {
    q: "What is HSG47 training?",
    a: "HSG47 training is the collective term for the training required by the HSE guidance document 'HSG47: Avoiding Danger from Underground Services.' It covers locating and detecting underground services before excavation, using cable avoidance tools (CAT and Genny), and safe working procedures around buried utilities. In practice, HSG47 training refers to courses that fulfil the competence requirements set out in HSG47 -- typically EUSR CAT1, ProQual CAT1, or equivalent cable avoidance training from a CITB Approved Training Organisation.",
    thumb: "cat-08-hsg47-training",
    thumbAlt: "What is HSG47 training -- cable avoidance and underground service location",
  },
  {
    q: "How long does HSG47 training take?",
    a: "HSG47 training takes one or two days, depending on the course format and accreditation route. The one-day format covers CAT and Genny theory and a practical site assessment. Two-day formats add additional depth to the practical element or incorporate a second accreditation assessment. EUSR CAT1 and ProQual CAT1 both run as either one-day or two-day programmes. For complete beginners, the two-day format is recommended.",
    thumb: "cat-56-hsg47-training",
    thumbAlt: "How long does HSG47 training take -- on-site practical cable avoidance assessment",
  },
  {
    q: "What certificate do you get from HSG47 training?",
    a: "The certificate depends on the accreditation route chosen. The most widely recognised is the EUSR CAT1 card, issued by the Energy and Utility Skills Register and valid for three years. ProQual CAT1 is an alternative accredited route that also produces a certificate valid for three years. Sygma also issues its own in-house certificate of completion for companies that do not require an awarding body card. All certificates are backed by written and practical assessment records.",
    thumb: "cat-84-hsg47-training",
    thumbAlt: "HSG47 training certificate -- EUSR CAT1 card and ProQual CAT1 qualification",
  },
  {
    q: "How much does HSG47 training cost?",
    a: "HSG47 training is priced as an in-house day rate for up to 8 delegates at your site, or per person on open courses. Travel is included in the day rate with no hidden extras. The cost varies by format -- EUSR CAT1 and ProQual CAT1 carry additional awarding body fees. CITB levy-paying employers may be eligible for funding support through the CITB Employer Network. Contact Sygma for a tailored quote.",
    thumb: "cat-06-hsg47-training",
    thumbAlt: "HSG47 training cost -- in-house delivery for up to 8 delegates",
  },
  {
    q: "Does HSG47 training need to be renewed?",
    a: "Yes. EUSR CAT1 and ProQual CAT1 certificates are valid for three years and must be renewed before expiry. Most principal contractors and utility companies will not permit operatives on site once a certificate has lapsed. Sygma recommends booking renewal in the three months before your current certificate expires to avoid any gap in coverage.",
    thumb: "cat-08-hsg47-training",
    thumbAlt: "HSG47 training renewal -- EUSR CAT1 certificate three-year validity",
  },
  {
    q: "What is the difference between HSG47 training and EUSR CAT1?",
    a: "HSG47 training is the broad term for any training that meets the competence requirements in the HSG47 guidance document. EUSR CAT1 is a specific accredited qualification issued by the Energy and Utility Skills Register -- one of the most widely accepted routes to demonstrating HSG47 compliance. In practice, most employers who require 'HSG47 training' will accept EUSR CAT1, ProQual CAT1, or an equivalent assessed certificate from a CITB Approved Training Organisation.",
    thumb: "cat-56-hsg47-training",
    thumbAlt: "Difference between HSG47 training and EUSR CAT1 -- utility excavations qualification",
  },
  {
    q: "Can HSG47 training be done online?",
    a: "Awareness-level HSG47 training can be completed online -- Sygma offers an online CAT4 HSG47 awareness course for this purpose. However, the full competence qualification -- EUSR CAT1 or ProQual CAT1 -- requires a practical site assessment and cannot be completed entirely online. The practical element is what proves competence and is what most principal contractors, utility companies and duty holders require on site.",
    thumb: "cat-84-hsg47-training",
    thumbAlt: "Can HSG47 training be done online -- online awareness vs assessed qualification",
  },
  {
    q: "Who needs HSG47 training on site?",
    a: "Anyone who uses cable and pipe locating equipment before excavation, or who supervises or manages such work, should hold HSG47 training. This includes site operatives and groundworkers, civil engineers and site managers, utility workers and contractors, highways teams, and anyone with a duty to ensure safe digging near underground services. Duty holders -- including principal contractors and project managers -- are responsible for ensuring their teams are trained and competent.",
    thumb: "cat-06-hsg47-training",
    thumbAlt: "Who needs HSG47 training -- site operatives, contractors and duty holders",
  },
  {
    q: "Does HSG47 training cover both CAT and Genny and cable avoidance?",
    a: "Yes. HSG47 training typically covers both CAT and Genny equipment operation -- using a cable locator and signal generator to detect buried services -- and the broader cable avoidance procedure for safe working near underground services. Sygma offers dedicated courses for each: CAT and Genny Training for the equipment and detection methodology, and Cable Avoidance Training for the full safe digging procedure and site management approach.",
    thumb: "cat-08-hsg47-training",
    thumbAlt: "HSG47 training covering CAT and Genny and cable avoidance -- both course routes",
  },
];

export const metadata: Metadata = {
  title: 'HSG47 Training | EUSR Compliant Courses | Sygma Solutions',
  description: "HSG47 training from the UK's only independent specialist. EUSR CAT1 and Cable Avoidance courses. CITB approved. On-site delivery, UK-wide.",
  alternates: { canonical: 'https://sygma-solutions.com/courses/hsg47-training' },
  openGraph: {
    title: 'HSG47 Training | EUSR Compliant Courses | Sygma Solutions',
    description: "HSG47 training from the UK's only independent specialist. EUSR CAT1 and Cable Avoidance courses. CITB approved. On-site delivery, UK-wide.",
    url: 'https://sygma-solutions.com/courses/hsg47-training',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-84-hsg47-training', width: 1200, height: 630, alt: 'HSG47 training courses from Sygma Solutions -- EUSR CAT1 and cable avoidance' }],
    type: 'website',
  },
};

export default function Hsg47Training() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'HSG47 Training', description: 'HSG47 training courses from Sygma Solutions. EUSR CAT1 and Cable Avoidance training delivered nationwide by specialist utility avoidance trainers. CITB approved.', url: '/courses/hsg47-training', duration: '1-2 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Courses', to: '/courses' }, { label: 'HSG47 Training' }]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />

      <InnerPageHero
        eyebrow="Underground Services"
        headline="HSG47 Training: EUSR Compliant Courses for Underground Services"
        sub="The training required by the HSE guidance that governs all safe digging near underground services. EUSR CAT1 and Cable Avoidance courses. CITB approved. UK-wide delivery."
        image="cat-06-hsg47-training"
        alt="HSG47 training -- operative using cable locator to detect underground services before excavation"
        breadcrumbs={[
          { label: "Courses", href: "/courses" },
          { label: "HSG47 Training" },
        ]}
      />

      {/* Opening definition -- AI Overview & PAA eligibility */}
      <section className="bg-background py-8">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">HSG47 training is the practical safety training required by the HSE guidance document &lsquo;Avoiding Danger from Underground Services.&rsquo;</strong> It covers the use of cable avoidance tools (CAT and Genny) to locate buried utilities before excavation, safe working procedures near underground services, and the competence requirements that duty holders must meet. HSG47 training is the recognised industry standard for anyone who works or manages work near buried cables, pipes, and underground services across the UK.
          </p>
        </div>
      </section>

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
              <p className="text-3xl font-black text-accent mb-1">EUSR + CITB</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Accredited Routes</p>
              <p className="text-xs text-white/60">EUSR CAT1, ProQual CAT1, CITB Approved Training Organisation.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">UK-Wide</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">On-Site Delivery</p>
              <p className="text-xs text-white/60">Travel included. Delivered at your site, nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who needs HSG47 training */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Who Needs It</p>
          <h2 className="text-2xl font-black mb-6 text-foreground">Who Needs HSG47 Training?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">HSG47 requires anyone using cable and pipe locating equipment to be trained and assessed as competent.</strong> This applies to the operatives using the equipment and to the duty holders responsible for the work. In practice, that includes:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Site Operatives and Groundworkers",
                desc: "Anyone who picks up a CAT or Genny to locate underground services before excavation. This is the core audience for HSG47 training.",
              },
              {
                title: "Civil Engineers and Site Supervisors",
                desc: "Those responsible for supervising excavation work and ensuring safe systems of work are followed near underground services.",
              },
              {
                title: "Utility Workers and Contractors",
                desc: "Operatives working on or near buried cables, pipes, and infrastructure for utility companies, highways authorities and network operators.",
              },
              {
                title: "Duty Holders and Principal Contractors",
                desc: "Project managers and principal contractors have a legal duty to ensure their teams are trained and competent. HSG47 training is the recognised standard.",
              },
            ].map((p, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Most principal contractors and utility company permit systems require operatives to hold a recognised HSG47 training certificate -- typically EUSR CAT1 or ProQual CAT1 -- before being permitted to use locating equipment on site.
          </p>
        </div>
      </section>

      {/* What HSG47 training covers */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Course Routes</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">What Does HSG47 Training Cover?</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            HSG47 training covers two complementary areas: using cable avoidance tools to locate buried services, and managing safe working procedures around underground services. Sygma offers dedicated courses for each, delivered at your site, UK-wide.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">CAT and Genny Training</p>
                <p className="text-white/70 text-sm">Equipment operation and detection methodology</p>
              </div>
              <div className="p-6 space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Covers the use of a cable locator (CAT) and signal generator (Genny) to detect underground services before excavation. Includes electromagnetic theory, all four detection modes, practical site assessment, and the <strong className="text-foreground">Genny-First methodology</strong> that measurably reduces service strikes.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Available as <strong className="text-foreground">EUSR CAT1</strong>, ProQual CAT1, or Sygma in-house certification. CITB Approved.
                </p>
                <Link
                  href="/courses/cat-and-genny-training"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-2"
                >
                  View CAT and Genny Training &rarr;
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">Cable Avoidance Training</p>
                <p className="text-white/70 text-sm">Safe digging procedures and site management</p>
              </div>
              <div className="p-6 space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Covers the full cable avoidance procedure: obtaining and interpreting buried service drawings, visual checks, permits to dig, safe excavation methods, and how to manage underground service risk across a site. Designed for operatives, supervisors, and those responsible for safe systems of work.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  CITB Approved. Delivered at your site with your plans and your risk profile.
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
              <strong className="text-foreground">Not sure which course?</strong> If your operatives need to use a CAT and Genny on site, they need <Link href="/courses/cat-and-genny-training" className="text-primary hover:text-primary/80 font-semibold">CAT and Genny Training</Link>. If your team needs to understand the full safe digging procedure and permit process, they need <Link href="/courses/cable-avoidance-training" className="text-primary hover:text-primary/80 font-semibold">Cable Avoidance Training</Link>. Many clients book both to fulfil the complete HSG47 training requirement for their workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="container mx-auto px-6 md:px-8 pb-12 max-w-5xl">
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="20260416_113521_x97mvi" width={1200} height={900} alt="HSG47 training in practice -- operative locating buried services before excavation" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-08-hsg47-training" width={1200} height={900} alt="CAT and Genny training session -- EUSR CAT1 accredited cable avoidance course" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-56-hsg47-training" width={1200} height={900} alt="HSG47 training practical assessment -- detecting underground services with cable locator" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Accreditation</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">HSG47 Training Accreditation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The <strong className="text-foreground">Energy and Utility Skills Register (EUSR) CAT1</strong> qualification is the most widely accepted route to demonstrating HSG47 training compliance. The EUSR card is valid for three years and is recognised across UK construction, utilities, and highways sectors. Sygma delivers EUSR CAT1 as a one-day or two-day in-house course.
              </p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">ProQual CAT1</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">ProQual CAT1</strong> is an externally accredited qualification that assesses all four EML detection modes in a formal practical assessment. The ProQual CAT1 Plus two-day route includes the Genny-First methodology in its assessment criteria -- a standard Sygma helped develop. Certificate valid for three years.
              </p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">CITB Approved</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sygma Solutions is a <strong className="text-foreground">CITB Approved Training Organisation</strong>. Every HSG47 training course is delivered to CITB ATO standards. Employers who pay the CITB levy may be eligible for training funding support through the CITB Employer Network. Sygma provides all documentation required to support funding applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image strip */}
      <div className="w-full overflow-hidden bg-muted" style={{ aspectRatio: "1585 / 341" }}>
        <Image src="cat-63-hsg47-training" width={1585} height={341} alt="HSG47 training delivered on-site across the UK by Sygma Solutions specialist trainers" sizes="100vw" className="w-full h-full object-cover" />
      </div>

      {/* Why Sygma */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Why Choose Sygma</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Why Sygma for HSG47 Training?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Specialism</p>
              <h3 className="text-base font-bold text-foreground mb-2">The UK&rsquo;s Only Independent Specialist</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">No surveys, no equipment sales, no manufacturer relationships. Underground utility location training is the only thing Sygma does. That means trainers with real field experience, unbiased methodology, and course content that genuinely reduces service strikes rather than just issuing certificates.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Methodology</p>
              <h3 className="text-base font-bold text-foreground mb-2">Genny-First -- Proven to Work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Sygma-trained operatives show a 70-80% increase in Genny usage, measured through locator data downloads. Clients report measurable reductions in service strikes. This is what good HSG47 training achieves -- changed behaviour on site, not just a card in a wallet.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Delivery</p>
              <h3 className="text-base font-bold text-foreground mb-2">Your Site, Nationwide, Travel Included</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">All HSG47 training courses are delivered at your site across the UK. Travel is included in the day rate with no hidden extras. Operatives learn on the same ground and the same buried services they encounter daily -- not on a generic training centre rig.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Trainers</p>
              <h3 className="text-base font-bold text-foreground mb-2">Specialist Trainers, Not Generalists</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">All Sygma trainers are directly employed ex-utility surveyors or ex-equipment manufacturer specialists. TAQA qualified. They have carried out the work they are teaching -- the credibility this brings to a practical site session is something no generalist health and safety training company can replicate.</p>
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
              <h2 className="text-2xl font-black mb-4 text-foreground">HSG47 Training Across the UK</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sygma delivers HSG47 training courses at client sites across the UK. Common delivery regions include:
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
                Travel is included in the day rate with no hidden extras. Sygma&rsquo;s training centre in Wigan is available as an alternative venue at no additional cost.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-background rounded-xl border border-border p-5">
                <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-3">HSG47 Training Near Me</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">We come to you.</strong> Sygma delivers HSG47 training at your site -- no travel for your delegates, training on real underground services you actually work near, and course content tailored to your company&rsquo;s permits and procedures.
                </p>
              </div>
              <div className="bg-background rounded-xl border border-border p-5">
                <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-3">CITB Funding</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Sygma Solutions is a <strong className="text-foreground">CITB Approved Training Organisation</strong>. Employers who pay the CITB levy may be eligible for training funding through the CITB Employer Network.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Contact your CITB adviser for current funding options. Sygma provides all documentation required to support applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-muted/20 border-y border-border py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-xl font-black mb-6 text-foreground">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge-hub/hsg47-explained" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">HSG47 Explained</h3>
              <p className="text-sm text-muted-foreground">The HSE guidance document in plain English -- what it requires, who it applies to, and why it exists.</p>
            </Link>
            <Link href="/knowledge-hub/genny-first-methodology" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">Genny-First Methodology</h3>
              <p className="text-sm text-muted-foreground">Why applying the signal generator first increases buried utility detection rates and reduces service strikes.</p>
            </Link>
            <Link href="/knowledge-hub/strike-prevention-site-managers" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">Strike Prevention for Site Managers</h3>
              <p className="text-sm text-muted-foreground">Practical guidance for those responsible for managing excavation risk near underground services.</p>
            </Link>
            <Link href="/knowledge-hub/eusr-card-renewal" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">EUSR Card Renewal</h3>
              <p className="text-sm text-muted-foreground">When and how to renew your EUSR CAT1 card before the three-year certificate expires.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="eyebrow mb-3">Common Questions</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Frequently Asked Questions About HSG47 Training</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a, thumb, thumbAlt }) => (
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
              <p className="text-xs text-muted-foreground">Online HSG47 awareness course for operatives who need a foundation before attending a full assessed course.</p>
            </Link>
            <Link href="/bespoke-training" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
              <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Training</p>
              <p className="text-xs text-muted-foreground">Design a tailored HSG47 training programme around your site risks, equipment, and team size.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Book HSG47 Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            EUSR CAT1 and Cable Avoidance courses delivered at your site, UK-wide. CITB approved. Travel included. Contact us to discuss requirements and get a tailored quote.
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
              Request On-Site Delivery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
