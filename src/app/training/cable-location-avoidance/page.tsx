import InnerPageHero from "@/components/InnerPageHero";
import Link from 'next/link';
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import type { Metadata } from 'next';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

const courseCards = [
  {
    to: "/courses/cable-avoidance-training",
    title: "Cable Avoidance Training",
    desc: "1-day HSG47-compliant course. CAT and Genny practical assessment. Sygma in-house certificate issued same day. Maximum 8 delegates.",
    duration: "1 Day",
    qualification: "Sygma Certificate",
    image: "cat-91-cable-location-avoidance",
  },
  {
    to: "/courses/vscan-and-transmitter-training",
    title: "vScan and Transmitter Training",
    desc: "1-day HSG47-compliant course for Vivax-Metrotech vScan and transmitter. Transmitter-First methodology, practical assessment. Sygma in-house certificate. Maximum 8 delegates.",
    duration: "1 Day",
    qualification: "Sygma Certificate",
    image: "cat-03",
  },
  {
    to: "/courses/eus-cat1",
    title: "EUSR CAT1: Utility Avoidance",
    desc: "EUSR-registered CAT1 qualification. Full electromagnetic theory, practical CAT and Genny assessment, and written paper. Recognised across the utility sector.",
    duration: "1-2 Days",
    qualification: "EUSR CAT1 Certificate",
    image: "cat-38",
  },
  {
    to: "/courses/proqualcat1-training",
    title: "ProQual CAT1: Utility Avoidance",
    desc: "ProQual Accreditations award. One of only a handful of accredited centres in the UK. Includes all four EML modes individually assessed.",
    duration: "1-2 Days",
    qualification: "ProQual CAT1 Award",
    image: "cat-15",
  },
  {
    to: "/courses/proqualcat1plus",
    title: "ProQual CAT1 Plus",
    desc: "Extended ProQual CAT1 award with additional competency units. Covers data download, advanced interpretation, and supervisor-level service plan skills.",
    duration: "2 Days",
    qualification: "ProQual CAT1 Plus Award",
    image: "cat-67",
  },
  {
    to: "/courses/eus-cat2-safe-dig",
    title: "Safe Dig: EUSR CAT2",
    desc: "For lead operatives and site supervisors. Covers multi-utility site management, advanced plan interpretation, and supervising avoidance strategy. EUSR CAT2 certificate.",
    duration: "1 Day",
    qualification: "EUSR CAT2 Certificate",
    image: "cat-16",
  },
  {
    to: "/courses/proqualcat2",
    title: "ProQual CAT2",
    desc: "ProQual-accredited Level 3 certificate for experienced supervisors and advanced operatives. Full practical assessment against ProQual CAT2 criteria.",
    duration: "2 Days",
    qualification: "ProQual CAT2 Certificate",
    image: "cat-83-cable-location-avoidance",
  },
  {
    to: "/courses/proqual-cat1-cat2-combined",
    title: "ProQual CAT1 and CAT2 Combined",
    desc: "Two-day combined ProQual CAT1 and CAT2 course. Utility avoidance and safe excavation in a single programme. ProQual-accredited outcomes. Maximum 8 delegates.",
    duration: "2 Days",
    qualification: "ProQual Certificates",
    image: "cat-64-cable-location-avoidance",
  },
  {
    to: "/courses/advanced-em-locator",
    title: "Advanced EM Training",
    desc: "For experienced locators working with Radiodetection RD8200, RD8000, or Vivax equipment. Covers advanced signal interpretation, frequency theory, and problem service strategies.",
    duration: "1-2 Days",
    qualification: "Sygma Advanced EM Certificate",
    image: "cat-81-cable-location-avoidance",
  },
  {
    to: "/courses/rqf-level-2-award",
    title: "RQF Level 2 Award in Utility Location and Avoidance",
    desc: "Nationally recognised qualification for operatives locating and avoiding buried services. Three delivery formats. Theory and practical assessment included.",
    duration: "1-2 Days",
    qualification: "RQF Level 2 Award",
    image: "cat-39-cable-location-avoidance",
  },
];

const finderRows = [
  ["Fast HSG47-compliant cert for groundworkers", "1 day", "In-house Sygma Certificate", "Cable Avoidance Training (In-House)", "/courses/cable-avoidance-training"],
  ["HSG47-compliant vScan and transmitter training", "1 day", "In-house Sygma Certificate", "vScan & Tx Training", "/courses/vscan-and-transmitter-training"],
  ["EUSR-registered CAT1 for utility sector work", "1-2 days", "EUSR CAT1 Certificate", "EUSR CAT1", "/courses/eus-cat1"],
  ["ProQual-accredited Level 2 qualification", "1-2 days", "ProQual CAT1 Award", "ProQual CAT1", "/courses/proqualcat1-training"],
  ["ProQual CAT1 with extended practical criteria", "2 days", "ProQual CAT1 Plus Award", "ProQual CAT1 Plus", "/courses/proqualcat1plus"],
  ["Safe Dig/EUSR CAT2 for supervisors", "1 day", "EUSR CAT2 Certificate", "Safe Dig (EUSR CAT2)", "/courses/eus-cat2-safe-dig"],
  ["ProQual CAT2 for advanced operatives", "2 days", "ProQual CAT2 Award", "ProQual CAT2", "/courses/proqualcat2"],
  ["ProQual-accredited CAT1 and CAT2 combined", "2 days", "ProQual Certificates", "ProQual CAT1 & CAT2 Combined", "/courses/proqual-cat1-cat2-combined"],
  ["Advanced EM for RD8200 and problem services", "1-2 days", "Sygma Advanced EM Certificate", "Advanced EM Training", "/courses/advanced-em-locator"],
  ["Nationally recognised RQF Level 2 qualification", "1-2 days", "RQF Level 2 Award", "RQF Level 2 Award", "/courses/rqf-level-2-award"],
];

const theoryModules = [
  "HSG47 compliance and legal obligations",
  "Electromagnetic theory and signal behaviour",
  "Why passive signals are incomplete",
  "Signal distortion, the halo effect, and depth errors",
  "Interpreting utility service plans (STATS)",
  "Confirmation bias and the rush to dig",
  "Locator data downloads and analysis (Plus variants)",
];

const practicalElements = [
  "Correct use of Genny in all modes",
  "CAT operation: Power, Radio, Genny, Avoidance modes individually assessed",
  "Depth estimation and accuracy testing",
  "Service plan reconciliation on site",
  "Locating problem services: LV, street lighting, comms cables",
  "Blind induction and nulling techniques",
  "Genny earthing methods and dual-frequency application",
];

const faqs = [
  {
    q: "What is cable avoidance training?",
    a: "Cable avoidance training teaches operatives how to use a Cable Avoidance Tool (CAT) and Genny signal generator to locate buried utilities before excavation. Training covers electromagnetic theory, correct operation of all four EML modes, signal interpretation, and practical on-site assessment. All Sygma cable avoidance training courses comply with the requirements of HSG47, the Health and Safety Executive's guide to avoiding danger from underground services.",
  },
  {
    q: "What is the difference between EUSR CAT1 and ProQual CAT1?",
    a: "These are not equivalent qualifications. ProQual CAT1 is significantly more thorough. It covers topics that EUSR does not assess at all, including CDM Regulations, risk assessment monitoring and reporting, and Safe Systems of Work aligned with HASAWA, HSG47, and GS6. Where EUSR relies on multiple choice questions, ProQual uses written theory papers and requires both theory and practical assessment across most criteria. In 21 years of delivering utility avoidance training, the ProQual CAT1 is the only qualification Sygma does not have to add content to, because we helped develop it to the standard the industry actually needs. EUSR CAT1 is required where your client mandates EUSR registration. See individual course pages for a full criterion-by-criterion comparison.",
  },
  {
    q: "Can you deliver cable avoidance training at our site?",
    a: "Yes. Sygma delivers on-site training across the UK. Travel is included in our day rate. Maximum 8 delegates per session. Bespoke on-site delivery can be adapted to your specific equipment, site conditions, and workforce risk profile. Contact us to discuss your requirements.",
  },
  {
    q: "Do I need to provide equipment for the training?",
    a: "No. Sygma provides all calibrated training equipment for courses delivered at Wigan HQ and The Survey School, Worcester. For on-site delivery, we can either use our own equipment or train your operatives on your own fleet. We recommend training on your own equipment wherever possible to maximise transfer of skills from the training environment to the live site.",
  },
  {
    q: "Is CITB funding still available for cable avoidance training?",
    a: "CITB-registered employers may be able to access funding through the CITB Employer Network. Contact your CITB adviser for current eligibility and funding options. Sygma Solutions is a CITB Approved Training Organisation.",
  },
  {
    q: "How long does cable avoidance training take?",
    a: "Duration varies by course. The in-house Sygma certificate course is one day. EUSR CAT1 and ProQual CAT1 are one to two days depending on group size and whether data download modules are included. Advanced EM and CAT2 variants are one to two days. All courses are capped at 8 delegates to maintain practical assessment quality.",
  },
];

export const metadata: Metadata = {
  title: 'Cable Location and Avoidance Courses | EUSR | Sygma',
  description: 'HSG47 compliant cable avoidance training from an independent specialist. EUSR CAT1, ProQual CAT1, CAT and Genny courses. Delivered UK-wide.',
  alternates: { canonical: 'https://sygma-solutions.com/training/cable-location-avoidance' },
  openGraph: {
    title: 'Cable Location and Avoidance Courses | EUSR | Sygma',
    description: 'HSG47 compliant cable avoidance training from an independent specialist. EUSR CAT1, ProQual CAT1, CAT and Genny courses. Delivered UK-wide.',
    url: 'https://sygma-solutions.com/training/cable-location-avoidance',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function UtilityAvoidanceHub() {
  return (
    <>
          
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Cable Avoidance Training" }]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="Cable Avoidance Training That Changes How Your Operatives Work"
        sub="EUSR CAT1, ProQual, and in-house certificate courses. All underpinned by electromagnetic theory, Genny-First methodology, and 21 years of specialist field experience."
        image="cat-82-cable-location-avoidance"
        alt="Cable location and avoidance training courses overview showing CAT and Genny equipment"
        breadcrumbs={[{ label: "Cable Avoidance Training" }]}
      />

      {/* Key USP stats boxes */}
      <section className="bg-foreground py-8">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white/5 rounded-xl border border-accent/30 p-6 text-center">
              <p className="text-4xl font-black text-accent mb-2">21 Years</p>
              <p className="text-sm font-bold text-white uppercase tracking-wider mb-2">One Specialism</p>
              <p className="text-sm text-white/60 leading-relaxed">Underground utility location training is all we do. Every course, every trainer, every day. No other provider in the UK can say that.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-6 text-center">
              <p className="text-4xl font-black text-accent mb-2">70-80%</p>
              <p className="text-sm font-bold text-white uppercase tracking-wider mb-2">Increase in Genny Usage</p>
              <p className="text-sm text-white/60 leading-relaxed">Measured through locator data downloads. Sygma-trained operatives consistently increase their Genny usage by 70 to 80 percentage points.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-6 text-center">
              <p className="text-4xl font-black text-accent mb-2">Proven</p>
              <p className="text-sm font-bold text-white uppercase tracking-wider mb-2">Record in Strike Reduction</p>
              <p className="text-sm text-white/60 leading-relaxed">Clients who implement our Genny-First methodology report measurable reductions in underground service strikes within months of training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-02-cable-location-avoidance" width={1200} height={900} alt="Utility avoidance training group session on site - Sygma Solutions" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-10-cable-location-avoidance" width={1200} height={900} alt="Utility avoidance training delegates walking site with locator" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-71" width={1200} height={900} alt="Utility avoidance training practical on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>

      {/* Supporting line + CTAs */}
      <section className="bg-muted/40 border-y border-border py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground max-w-2xl">
            HSG47 compliant. CITB recognised. Delivered from Wigan HQ, The Survey School Worcester, and on your site nationwide.
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href="#course-cards" className="inline-flex items-center px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
              View All Courses
            </a>
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-5 py-2.5 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors">
              Enquire About On-Site Delivery
            </Link>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-3">Why This Matters</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">
              Most Cable Avoidance Training Teaches Operatives to Turn the Kit On. We Teach Them Why It Works.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Utility strike prevention depends on how operatives use their equipment, not just whether they own it. CAT-only working. Incorrect frequency selection. Genny connected once a fortnight, if at all. Confirmation of what is expected rather than investigation of what is actually there. This is the pattern behind the majority of buried service strikes, and it is not fixed by buying better kit.
              </p>
              <p>
                Sygma's cable avoidance and underground service detection training programmes address the root cause. We cover electromagnetic theory in plain language, explain signal distortion, depth estimation errors, and the conditions under which a CAT signal is unreliable, and then prove it on site with real equipment. All courses meet the requirements of HSG47, the Health and Safety Executive's guidance on avoiding danger from underground services.
              </p>
              <p>
                Clients who implement our Genny-First methodology consistently report Genny usage increases of more than 50 percentage points. That is a direct, measurable reduction in site risk.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] bg-muted">
            <Image src="cat-84-cable-location-avoidance" width={1200} height={900} alt="CAT and Genny training practical on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Course finder table */}
      <section id="course-finder" className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Course Finder</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">A Course for Every Role and Qualification Pathway</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The right course depends on the role your operative needs to fill, the qualification body they need to satisfy, and whether you need a short-duration certificate or a nationally recognised qualification.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 pr-4 font-black text-foreground">If you need...</th>
                  <th className="text-left py-3 pr-4 font-black text-foreground">Duration</th>
                  <th className="text-left py-3 pr-4 font-black text-foreground">Qualification</th>
                  <th className="text-left py-3 font-black text-foreground">Course</th>
                </tr>
              </thead>
              <tbody>
                {finderRows.map(([need, duration, qualification, course, href]) => (
                  <tr key={course} className="border-b border-border">
                    <td className="py-3 pr-4 text-muted-foreground">{need}</td>
                    <td className="py-3 pr-4 text-foreground font-semibold whitespace-nowrap">{duration}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{qualification}</td>
                    <td className="py-3">
                      <Link href={href} className="text-primary font-semibold hover:underline underline-offset-2">
                        {course}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section id="course-cards" className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">All Courses</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Our Cable Avoidance Training Courses</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Each course below has its own dedicated page with full learning outcomes, assessment criteria, agenda, and booking information. All are available as EUSR, ProQual, or in-house certificate routes for buried services training and cable detection training needs.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {courseCards.map((card) => (
            <div key={card.to} className="rounded-xl border border-border overflow-hidden flex flex-col group">
              <div className="relative h-44 overflow-hidden">
                <Image src={card.image} width={1200} height={900} alt={card.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-white">
                      {card.duration}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-xs font-bold text-white">
                      {card.qualification}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1">
                <h3 className="font-black text-foreground text-lg mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{card.desc}</p>
              </div>
              <div className="px-6 pb-6">
                <Link
                  href={card.to}
                  className="inline-flex items-center px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

            {/* On-site delivery */}
      <section className="bg-primary/5 border-y border-border py-12">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="eyebrow mb-3">On-Site Delivery</p>
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">
                We Train at Your Site, Anywhere in the UK
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Every cable avoidance and buried services training course Sygma delivers can be run at your premises, anywhere on the UK mainland. Travel is included in the course rate. No surcharges, no minimums, no restrictions on region.</p>
                <p>On-site cable detection training means your operatives train on the ground they work on, with your own equipment and site conditions. The learning outcomes are identical. The context is yours.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center mt-5 px-5 py-2.5 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
              >
                Enquire About On-Site Delivery
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "UK-wide", label: "On-site delivery" },
                { stat: "Max 8", label: "Delegates per session" },
                { stat: "Included", label: "UK mainland travel" },
                { stat: "Any", label: "Manufacturer's equipment" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-background rounded-xl border border-border p-4 text-center">
                  <p className="text-2xl font-black text-primary mb-1">{stat}</p>
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <div className="w-full overflow-hidden aspect-[21/9] bg-muted">
        <Image src="cat-46" width={1200} height={900} alt="Utility avoidance training group on site, Sygma Solutions UK-wide delivery" sizes="100vw" className="w-full h-full object-contain" />
      </div>

      {/* Genny-First methodology */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Genny-First Methodology</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">
            Why We Start Every Course with the Genny, Not the CAT
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The construction industry has a Genny problem. On most sites, most of the time, the signal generator is left in the van. Operatives default to CAT-only working because it is faster, because it is what they have always done, and because no one has ever explained to them what they are missing.
              </p>
              <p>
                The Genny eliminates the single largest source of false confidence in utility locating: the assumption that a passive signal is a complete picture. When an operative connects a Genny signal to a known service, calibrates their search, and works through all four EML modes in sequence, they are not just looking for utilities. They are actively verifying the environment. That is a fundamentally different behaviour.
              </p>
              <p>
                Clients who run Sygma Genny-First programmes report Genny usage increases of over 50 percentage points within three to six months of training. The numbers do not move that much unless the training has changed how operatives think, not just what they know.
              </p>
            </div>
            <blockquote className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
              <p className="text-lg font-semibold text-foreground leading-relaxed italic">
                "We do not just teach operatives how to operate the kit. We give them the skills and confidence to apply it to a real site and conduct a proper utility location survey."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Core curriculum */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Core Curriculum</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">
          The Core Curriculum Across All Utility Avoidance Courses
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The following topics form the core curriculum delivered across all Sygma utility avoidance training courses. Individual course pages provide the specific learning outcomes and assessment criteria for each qualification.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Theory Modules</h3>
            <div className="space-y-2">
              {theoryModules.map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Practical Assessment Elements</h3>
            <div className="space-y-2">
              {practicalElements.map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image strip before Why Sygma */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-76-cable-location-avoidance" width={1200} height={900} alt="CAT and Genny training practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-68-cable-location-avoidance" width={1200} height={900} alt="Utility avoidance training on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-87" width={1200} height={900} alt="Underground service detection training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Why Sygma */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Why Sygma</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Train With Sygma</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Independent Provider",
              body: "Sygma is the UK's only independent specialist in underground utility location training. No ties to any equipment manufacturer or survey company. Training is based on what works, not what someone is selling.",
            },
            {
              title: "Specialist Trainers",
              body: "Directly employed, ex-utility surveyors and ex-manufacturer specialists. All TAQA qualified. Every trainer has real-world detection experience.",
            },
            {
              title: "Genny-First Methodology",
              body: "Sygma teaches operatives to start every survey with the signal generator connected, not just the locator in power mode. Measured results show 70 to 80% increase in Genny usage among Sygma-trained operatives.",
            },
            {
              title: "Max 8 Delegates",
              body: "Small groups mean more time on the equipment and more individual feedback. This is an awarding body regulation that Sygma enforces on every course.",
            },
            {
              title: "Travel Included",
              body: "Sygma charges per course, not per person. Travel within the UK mainland is included in the course rate. No hidden extras.",
            },
            {
              title: "Full Pathway Coverage",
              body: "From half-day awareness sessions to Level 6 management qualifications. EUSR, ProQual, and ICES routes all delivered by a single provider.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="bg-muted/20 rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CITB Funding */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">CITB Funding</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CITB Funding: What Changed in January 2026</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sygma Solutions is a CITB Approved Training Organisation. CITB-registered employers may be able to access training funding through the CITB Employer Network model.
              </p>
              <p>
                Under the Employer Network, eligible CITB-registered employers may be able to access funding support for training, including utility avoidance courses. The amount and eligibility criteria vary. Sygma Solutions remains a CITB Approved Training Organisation (ATO), and all our utility avoidance courses are eligible for consideration under the Employer Network.
              </p>
              <p>
                To find out what your business may be eligible for, contact your CITB adviser directly or call the CITB helpline. We can provide all necessary course documentation to support your funding application.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
                >
                  Contact Us for CITB Documentation
                </Link>
              </div>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <p className="eyebrow mb-4">CITB at a Glance</p>
              {[
                ["ATO Status", "Sygma Solutions is a CITB Approved Training Organisation"],
                ["CITB Employer Network", "Contact your CITB adviser for eligibility"],
                ["Current Funding Route", "CITB Employer Network"],
                ["Who Qualifies", "CITB-registered employers (contact your CITB adviser)"],
                ["Documentation", "Sygma can provide all course docs to support your application"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4 py-2 border-b border-border last:border-0">
                  <span className="eyebrow text-muted-foreground w-36 shrink-0">{k}</span>
                  <span className="text-sm text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="eyebrow mb-3">Common Questions</p>
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
              <Link href="/contact" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Training</p>
                <p className="text-xs text-muted-foreground">Design a tailored programme around your site risks, equipment, and team size.</p>
              </Link>
          </div>
        </div>
      </section>

      {/* Further Resources */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <h2 className="text-xl font-black mb-6 text-foreground">Further Resources</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { title: "EUSR CAT1 vs ProQual CAT1", desc: "Not sure which accreditation route is right? Compare the two main cable avoidance qualifications side by side.", to: "/knowledge-hub/eus-cat1-vs-proqual-cat1" },
            { title: "EUSR Card Renewal", desc: "How to renew your EUSR card, what the process involves, and when to start.", to: "/knowledge-hub/eusr-card-renewal" },
            { title: "Strike Prevention for Site Managers", desc: "A site manager's guide to preventing utility strikes on construction projects.", to: "/knowledge-hub/strike-prevention-site-managers" },
            { title: "Understanding PAS 128", desc: "PAS 128 utility survey standards explained. What the classifications mean and why they matter.", to: "/knowledge-hub/understanding-pas-128" },
          ].map((article) => (
            <Link key={article.title} href={article.to} className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">{article.title}</h3>
              <p className="text-sm text-muted-foreground">{article.desc}</p>
            </Link>
          ))}
        </div>
        <h3 className="text-lg font-bold text-foreground mb-4">Case Studies</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Kier Group", desc: "How Sygma supported Kier Group with a nationwide cable avoidance training programme across multiple regional sites.", to: "/knowledge-hub/kier-group-case-study" },
            { title: "QTS Group", desc: "Delivering specialist utility training for QTS Group rail and infrastructure teams.", to: "/knowledge-hub/qts-group-case-study" },
            { title: "Morgan Sindall", desc: "A long-term training partnership covering cable avoidance, utility mapping, and supervisor qualifications.", to: "/knowledge-hub/morgan-sindall-case-study" },
            { title: "Severn Trent Water", desc: "Training water network operatives in cable avoidance and safe excavation practices.", to: "/knowledge-hub/severn-trent-water-case-study" },
          ].map((cs) => (
            <Link key={cs.title} href={cs.to} className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">{cs.title}</h3>
              <p className="text-sm text-muted-foreground">{cs.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Not Sure Which Course Is Right for Your Team?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Talk to Sygma. We will identify the right qualification for your operatives, your sector, and your compliance requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Talk to Us
            </Link>
            <Link
              href="/courses/cable-avoidance-training"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View In-House Certificate Course
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
