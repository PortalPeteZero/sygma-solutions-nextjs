import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import Link from 'next/link';
import { CheckCircle } from "lucide-react";
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from 'next';
import Image from 'next/image';

const faqs = [
            {
              q: "Is the USC a qualification?",
              a: "No. The Underground Service Coordinator is an appointment made by the employer. It is not a qualification that delegates earn through an awarding body. The course trains the person being appointed to understand and fulfil the role correctly. The USC appointment itself is the employer's responsibility.",
            },
            {
              q: "Do delegates need to have done the EUSR CAT1 course first?",
              a: "For the 1-day standalone format, yes. Delegates must have completed the EUSR CAT1 course within the last 12 months. If they have not, the USC course should be delivered over 2 days to incorporate the CAT1 content. For the 3-day format with Level 3 Certificate, no prior qualification is required.",
            },
            {
              q: "What is the difference between this course and the EUSR CAT1 and CAT2 Combined with USC course?",
              a: "The EUSR CAT1 and CAT2 Combined with USC course includes the EUSR CAT1 and CAT2 qualifications alongside the USC content (it is a qualification route through EUSR). The standalone USC course is for delegates who already hold CAT1 and need USC-specific training, or for teams who want to pair the USC content with the Level 3 Certificate rather than the EUSR qualification.",
            },
            {
              q: "What is the Level 3 Certificate in Utility Mapping and Surveying?",
              a: "The Level 3 Certificate is a qualification covering site reconnaissance, desktop survey, and utility survey processes mapped to PAS128. The 3-day USC format includes this qualification alongside the USC training content. The qualification is issued on completion of the three days.",
            },
            {
              q: "What site or venue is required?",
              a: "Both formats require a meeting room with welfare facilities. The 1-day standalone format includes a site practical element, so a suitable outdoor area with buried utilities near the training room is also required. For the 3-day format, an outdoor practical area is required for Day 3.",
            },
            {
              q: "Does this course cover GPR?",
              a: "The USC course includes GPR awareness (an overview of what GPR does and when it should be specified). It does not include GPR operation training. For GPR operation training, see the GPR Training course in the Utility Mapping section.",
            },
          ];

export const metadata: Metadata = {
  title: 'Service Coordinator USC Training | PAS128 | Sygma',
  description: 'Service Coordinator USC training covering utility service coordination roles and responsibilities. For teams managing works near buried services.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/service-coordinator-usc' },
  openGraph: {
    title: 'Service Coordinator USC Training | PAS128 | Sygma',
    description: 'Service Coordinator USC training covering utility service coordination roles and responsibilities. For teams managing works near buried services.',
    url: 'https://sygma-solutions.com/courses/service-coordinator-usc',
    siteName: 'Sygma Solutions',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ServiceCoordinatorUsc() {
  return (
    <>
          
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "Service Coordinator (USC) Training", description: "Service Coordinator USC training covering utility service coordination roles and responsibilities. For teams managing works near buried services.", url: "/courses/service-coordinator-usc", credential: "USC Appointment Training Certificate", duration: "1-3 days", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/cable-location-avoidance" }, { label: "Service Coordinator USC" }]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="Service Coordinator (USC) Training: Understanding the Role and Responsibilities"
        sub="The Underground Service Coordinator (USC) is an appointment made by the employer, not a qualification. This course prepares your appointed USC to source and review utility plans, interpret survey data, and complete the documentation the role demands."
        image="cat-51"
        alt="Utility service coordinator training covering safe excavation planning and supervision"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "Service Coordinator USC" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["Formats", "1-day standalone or 3-day with Level 3"],
            ["USC Status", "Appointment, not a qualification"],
            ["Prerequisite (1-day)", "EUSR CAT1 within 12 months"],
            ["Delivery", "In-house, nationwide UK"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="eyebrow mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3-photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-60" width={1200} height={900} alt="Service Coordinator USC training - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-90" width={1200} height={900} alt="Service Coordinator USC training - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-69" width={1200} height={900} alt="Service Coordinator USC training - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>
      {/* About USC role */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">What Is the USC Role?</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">An Appointment, Not a Qualification</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Underground Service Coordinator is an individual appointed by the employer to coordinate underground utility avoidance activities on a project. The appointment is a requirement under the Overhead and Underground Excavation Services Standards (it is not a qualification that a delegate earns, but a responsibility that a company assigns).
              </p>
              <p>
                The USC is responsible for ensuring the right utility plans are in place before excavation starts, that the locate has been conducted correctly, that permits are completed, and that the site team has the information they need to work safely. It is a coordination and oversight role, not an operational locating role.
              </p>
              <p>
                Because the USC role is an appointment rather than a qualification, companies often underestimate the knowledge it requires. This course makes sure the person you appoint actually understands what they are responsible for.
              </p>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-border p-6">
            <p className="eyebrow mb-3">Important</p>
            <p className="text-sm font-bold text-foreground mb-3">The USC is an appointment, not a qualification.</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Your company appoints the USC. Sygma trains them to carry out that role correctly. Completing the USC course does not register your delegate on the EUSR or any other qualification register (it trains the person your organisation has chosen to fill the role).
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If your team needs the EUSR CAT1, CAT2, and USC content together as part of a combined programme, see the <Link href="/courses/eus-cat1-cat2-usc-combined" className="text-primary font-semibold underline underline-offset-2">EUSR CAT1, CAT2 and USC Combined</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* Two formats */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Course Formats</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Two Ways to Deliver the USC Training</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">1-Day Standalone</p>
                <p className="text-white/70 text-sm">Prerequisite (EUSR CAT1 within 12 months)</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For delegates who have already completed the EUSR CAT1 course within the last 12 months. The CAT1 content is not repeated (the day focuses entirely on the USC-specific responsibilities, documentation, and coordination skills).
                </p>
                <div className="space-y-2">
                  {[
                    "1 day in duration",
                    "Delegates must hold EUSR CAT1 from within the last 12 months",
                    "USC course completion certificate issued",
                    "If CAT1 was not within 12 months, contact Sygma to discuss a 2-day option",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                      <span className="text-accent font-bold shrink-0">&#8250;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">3-Day with Level 3 Certificate</p>
                <p className="text-white/70 text-sm">No prior qualification required</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For teams who want the USC training alongside a Level 3 Certificate in Utility Mapping and Surveying in a single programme. No prior qualification is required (CAT1 content and the Level 3 units are all built into the three days).
                </p>
                <div className="space-y-2">
                  {[
                    "3 days in duration",
                    "No prior qualification required",
                    "Covers site reconnaissance, desktop survey, and PAS128 Level D and C",
                    "Level 3 Certificate in Utility Mapping and Surveying issued on completion",
                    "USC course completion record issued alongside the Level 3",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                      <span className="text-accent font-bold shrink-0">&#8250;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1-day content */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">1-Day Standalone Content</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">What the Standalone USC Day Covers</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The 1-day standalone course focuses on the USC-specific content. The EUSR CAT1 theory is not repeated. Both a classroom session and a short site practical are included.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Classroom</h3>
            <div className="space-y-2">
              {[
                "Understanding the Overhead and Underground Excavation Services Standards",
                "Overview of utility networks and asset types",
                "Utility plans in depth: reading and interpreting plans in the context of the USC role",
                "PAS128 survey levels: understanding different survey types and specifying the right survey for the job",
                "CAT Manager data download: how to collect and analyse CAT data as a coordinator",
                "Electromagnetic location theory: understanding how the locate works, its limitations, and what it cannot find",
                "GPR survey awareness: what GPR does and when it should be specified",
                "Safe digging techniques: vacuum excavation, air pick, and hydro excavation",
                "Site documentation: services location board, permit to break ground, and sign-off requirements",
                "Insulated tools and flame-retardant clothing requirements",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Site Practical</h3>
            <div className="space-y-2 mb-8">
              {[
                "Practical demonstration of passive and active locating of buried services",
                "Site surveying techniques and process: from plan to locate",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">3-Day Format: Day-by-Day Outline</h3>
            <div className="space-y-3">
              {[
                {
                  day: "Day 1",
                  items: "Legislation and guidance, PAS128 survey levels, Unit 1: Site Reconnaissance, site sketch with colour-coded annotation, introduction to Unit 2: Desktop Survey",
                },
                {
                  day: "Day 2",
                  items: "Unit 2: Desktop Survey workbooks, desktop survey compilation drawing, Level 3 Certificate sign-off, client and designer responsibilities, utility network overview, CAT Manager data download, EM theory and principles, receiver and transmitter setup",
                },
                {
                  day: "Day 3",
                  items: "Advanced EM utility location using RD8200 and Vivax Pro 3, frequency selection, HV cable location, signal distortion, depth estimation, peak and null antenna, current direction, induction sweeps, survey methodology and service marking",
                },
              ].map(({ day, items }) => (
                <div key={day} className="bg-muted/30 border border-border rounded-lg p-4">
                  <p className="text-sm font-bold text-foreground mb-1">{day}</p>
                  <p className="text-sm text-muted-foreground">{items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="w-full overflow-hidden aspect-[4/3] md:aspect-[16/9] bg-muted">
        <Image src="cat-66" width={1200} height={900} alt="Service Coordinator USC training - live training environment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* What You Get */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "USC Certificate of Competence",
              "Written Assessment Record",
              "Practical Assessment Record",
              "EUSR Registration Guidance",
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
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-43" width={1200} height={900} alt="Service coordinator utility awareness training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-64" width={1200} height={900} alt="USC qualification practical demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-39" width={1200} height={900} alt="Service coordination training assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Who should attend */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Who Should Attend</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "The Appointed or Designated USC",
                body: "The individual your company has appointed (or is planning to appoint) as Underground Service Coordinator. This course gives them the knowledge to fulfil the role correctly: sourcing plans, reviewing surveys, completing permits, and coordinating the excavation safely.",
              },
              {
                title: "Supervisors and Site Managers",
                body: "Supervisors and site managers responsible for utility avoidance oversight who want to formalise their understanding of the USC role and the documentation it requires.",
              },
              {
                title: "Companies Setting Up a USC Process",
                body: "Companies that need to appoint a USC but are unsure how the process should work in practice. This course gives your designated person the knowledge to set up and manage the process from day one.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-14" width={1200} height={900} alt="USC training with utility location equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-92" width={1200} height={900} alt="Service coordinator on-site assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-80" width={1200} height={900} alt="Utility service coordination practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

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

      {/* Why Sygma */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose Sygma for USC Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">The USC role demands knowledge across plans, location, safe dig, and coordination. Sygma trainers understand all of it.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Coordinating Safe Work</p>
              <h3 className="text-base font-bold text-foreground mb-2">For those managing teams who dig near services. Understanding of both location and excavation requirements.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">USC training that covers the full range of coordination responsibilities and documentation.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Specialist Trainers</p>
              <h3 className="text-base font-bold text-foreground mb-2">Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Trainers with real-world experience in coordination roles and site management.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Real Practical Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Structured on-site practical in real conditions.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">For the 1-day format, practical site element with real utilities and documentation.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Independent</p>
              <h3 className="text-base font-bold text-foreground mb-2">No surveys, no equipment, no manufacturer relationships.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Training focused on what the USC role actually demands, not commercial interests.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">We Come to You</p>
              <h3 className="text-base font-bold text-foreground mb-2">Delivered at your site, travel included.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">In-house training at your location, using your site and documentation.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Two Format Options</p>
              <h3 className="text-base font-bold text-foreground mb-2">1-day standalone or 3-day with Level 3 Certificate in Utility Mapping.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Choose the format that matches your team's qualification needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CITB Employer Network */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Funding</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">CITB Employer Network</h2>
          <div className="border border-border rounded-lg bg-card p-5">
            <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Training Support</p>
            <h3 className="text-base font-bold text-foreground mb-2">Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">CITB-registered employers may be able to access Employer Network funding towards training costs. USC training and the Level 3 Certificate are recognised as professional development supporting your management capability.</p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Next Steps</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Training Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Build your team's capability across utility avoidance and coordination roles.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/courses/eus-cat1" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The foundation. USCs need to understand locating as well as coordinate it.</p>
            </Link>
            <Link href="/courses/eus-cat2-safe-dig" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT2 Safe Dig</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Safe excavation and permit requirements. Essential knowledge for USCs managing dig teams.</p>
            </Link>
            <Link href="/courses/plans-and-process" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">Plans and Process Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Master utility plan interpretation. USCs source and review plans every day.</p>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About Service Coordinator (USC) Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            1-day standalone (EUSR CAT1 prerequisite) or 3-day with Level 3 Certificate. In-house at your site anywhere in the UK. Contact us to discuss the right format and receive a tailored quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/courses/eus-cat1-cat2-usc-combined"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View CAT1, CAT2 and USC Combined
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

