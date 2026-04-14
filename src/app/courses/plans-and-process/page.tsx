import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import Link from 'next/link';
import { CheckCircle } from "lucide-react";
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from 'next';
import Image from 'next/image';

const faqs = [
            {
              q: "Does the course cover LSBUD and Digdat?",
              a: "Yes. The course covers how to use LSBUD (Line Search Before U Dig) to request statutory records from utility owners, and how to use Digdat as an additional source. Delegates will understand how to obtain the right plans for the job before any excavation takes place.",
            },
            {
              q: "Is this course just for operatives?",
              a: "No. While operatives benefit significantly, the course is equally relevant for supervisors, coordinators, and anyone who sources, reviews, or signs off utility plans as part of the excavation process. The Service Coordinator (USC) course also covers utility plans in more depth in the context of the USC appointment.",
            },
            {
              q: "What is the difference between the online and in-person format?",
              a: "The online format is a 90-minute live session via Teams covering the full classroom content. The in-person format includes the same classroom content plus a site practical element and a documented competence check. For teams where site competence needs to be recorded, the in-person format is recommended.",
            },
            {
              q: "Does this course lead to a qualification?",
              a: "No. Both formats issue a certificate of attendance. The in-person format includes a competence check. If you need a nationally recognised qualification, look at the RQF Level 2 Award or the EUSR CAT1 course, both of which include utility plans as part of a broader assessment.",
            },
            {
              q: "Can this course be delivered as part of a site induction?",
              a: "Yes. The online format is well suited to remote inductions and can be used as a standalone session for new starters before they arrive on site. Contact Sygma to discuss how it can be incorporated into your onboarding process.",
            },
            {
              q: "What plans experience do delegates need before attending?",
              a: "None. The course starts from first principles and is suitable for delegates at all levels. Experienced operatives will find it confirms and formalises existing knowledge; newer starters get the full framework from the ground up.",
            },
          ];

export const metadata: Metadata = {
  title: 'Plans and Process Training Course | Sygma Solutions',
  description: 'Learn to read utility plans properly and survey more safely. Covers plan interpretation, HSG47 requirements and practical application for site teams.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/plans-and-process' },
  openGraph: {
    title: 'Plans and Process Training Course | Sygma Solutions',
    description: 'Learn to read utility plans properly and survey more safely. Covers plan interpretation, HSG47 requirements and practical application for site teams.',
    url: 'https://sygma-solutions.com/courses/plans-and-process',
    siteName: 'Sygma Solutions',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PlansAndProcess() {
  return (
    <>
          
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "Plans and Process Training", description: "Learn to read utility plans properly and survey more safely. Covers plan interpretation, HSG47 requirements and practical application for site teams.", url: "/courses/plans-and-process", credential: "Plans and Process Certificate", duration: "1 day", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/cable-location-avoidance" }, { label: "Plans and Process Training" }]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="Plans and Process Training: Read Utility Plans Properly and Survey More Safely"
        sub="Most operatives can get hold of a utility plan. Far fewer can read one properly. From STATS and LSBUD to keys, scales, and regional network differences, delegates leave able to extract the right information from any plan and use it correctly on site."
        image="cat-45"
        alt="Plans and process training covering utility survey planning and documentation"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "Plans and Process Training" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Online Format", "Live Teams, approx 90 mins"],
            ["In-Person Format", "Classroom and site practical"],
            ["Assessment", "Practical competence check (in-person)"],
            ["Certificate", "Certificate of attendance"],
            ["Delivery", "Online or in-house, nationwide UK"],
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
          <Image src="cat-09" width={1200} height={800} alt="Plans and process training - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-10" width={1200} height={800} alt="Plans and process training - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-64" width={1200} height={800} alt="Plans and process training with practical site element" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
        </div>
      </section>
      {/* About */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">The Problem With Plans</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Having the Plan Is Not the Same as Understanding It</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                HSG47 is clear: you must obtain utility records before you excavate. But having the plan is only the first step. Understanding what it tells you, what it does not tell you, and how to use it alongside your locator is a different skill entirely.
              </p>
              <p>
                Misreading a plan, using the wrong scale, not spotting a network operator boundary, or failing to check the date can all lead to a locate that looks complete but leaves services undetected. This course closes that gap.
              </p>
              <p>
                The course is built for operatives, supervisors, and coordinators who use utility plans as part of their work. It covers the legal framework, the sourcing process, how to interpret different plan types, and how plans integrate with the locating survey from start to finish.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Course at a Glance</p>
            {[
              ["Online Format", "Live session via Microsoft Teams, approximately 90 minutes. Webcam and microphone required."],
              ["In-Person Format", "Classroom session plus practical site competence check"],
              ["Assessment", "Online: no formal assessment. In-person: optional short practical competence check"],
              ["Certificate", "Certificate of attendance"],
              ["Max Delegates", "By arrangement (contact Sygma for group size guidance)"],
              ["Delivery", "Online (Teams) or in-house at your site, nationwide UK"],
              ["Pricing", "By quotation (contact Sygma for a tailored quote)"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="eyebrow text-muted-foreground w-32 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Course Content</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">What the Course Covers</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The course covers utility plan reading from first principles through to practical site application. The same content applies to both formats.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Legal and Responsibility Framework</h3>
              <div className="space-y-2 mb-6">
                {[
                  "HSG47 responsibilities for obtaining and using utility plans before any excavation",
                  "CDM obligations (client, designer, and contractor responsibilities)",
                  "When and why you need to source utility plans before breaking ground",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Network Areas and Regional Differences</h3>
              <div className="space-y-2 mb-6">
                {[
                  "Different network operators and the areas they cover across the UK",
                  "Regional differences in plan formats, keys, and notation by area",
                  "Understanding which operator owns which asset in a given location",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Sourcing Utility Plans</h3>
              <div className="space-y-2">
                {[
                  "How to use LSBUD (Line Search Before U Dig) to request statutory utility records",
                  "How to use Digdat and other plan sources for a complete picture",
                  "Understanding the difference between a statutory response and a survey-grade drawing",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Reading and Interpreting Plans</h3>
              <div className="space-y-2 mb-6">
                {[
                  "Keys and legends: material types, pipe sizes, cable types, and what they mean",
                  "Scale: confirming you have the correct area and scale for the job in hand",
                  "Dates: checking plan currency and understanding the limitations of older records",
                  "Cross-sections and supplementary information contained in the plan",
                  "Voltage and pressure notation: does it change the locate technique?",
                  "Colour coding conventions and what they indicate for different services",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Using Plans With a Locator Survey</h3>
              <div className="space-y-2">
                {[
                  "How to use plans to select the correct utility detection technique for the job",
                  "The process from reading plans to conducting the survey, step by step",
                  "Accuracy and limitations: what the plan will not show you",
                  "Using your eyes: visual survey as a complement to the utility plan",
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
      </section>

      {/* Practical element - in-person */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">In-Person Format</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Practical Element and Competence Check</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          When delivered in person, the course adds a practical element where delegates apply what they have learned in a real or representative site environment. This includes working with real plans, identifying utility routes, checking scales, and then using a locator in conjunction with the plan.
        </p>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          A short competence check is completed to document understanding and practical ability. This does not qualify as an EUSR assessment, but it gives a documented record of delegate competence that your company can retain.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black">Online (Teams)</p>
              <p className="text-white/70 text-sm">Live session, approx 90 minutes</p>
            </div>
            <div className="p-6 space-y-2">
              {[
                "Full classroom content as above, delivered interactively via Teams",
                "Delegates encouraged to ask questions and work through real plan examples",
                "Webcam and microphone required for all delegates",
                "No formal assessment. Certificate of attendance issued.",
                "Ideal for remote teams, new starters, or refresher training",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold shrink-0">&#8250;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black">In-House Classroom with Practical</p>
              <p className="text-white/70 text-sm">Full session including site competence check</p>
            </div>
            <div className="p-6 space-y-2">
              {[
                "Full classroom content as above, delivered on site at your premises",
                "Site practical element applying plan reading to real utilities in the field",
                "Short competence check to document practical ability",
                "Practical area near training room required (site with buried utilities)",
                "Certificate of attendance and competence check record issued",
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

      {/* What You Get */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Certificate of Attendance",
              "HSG47 and PAS128 Reference Pack",
              "Plan Interpretation Guidance Notes",
              "CPD Record for Your Portfolio",
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
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-65" width={1200} height={800} alt="Plans and process training practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-66" width={1200} height={800} alt="Utility plans interpretation training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-67" width={1200} height={800} alt="Understanding utility drawings and records" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <Image src="cat-68" width={1200} height={800} alt="Plans and process training - live training environment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top" />
      </div>

      {/* Who should attend */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Who Should Attend</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Operatives and Supervisors",
                body: "Anyone who uses utility plans as part of a survey or excavation process and wants to read them more accurately. This course is often taken alongside the EUSR CAT1 or RQF Level 2 Award to complete the end-to-end skills picture.",
              },
              {
                title: "Service Coordinators and USC Appointees",
                body: "Coordinators responsible for sourcing, reviewing, and signing off utility plans as part of the permit and excavation process. Covers PAS128 survey types and plan interpretation in the context of the USC role.",
              },
              {
                title: "New Starters and Inductions",
                body: "The online format is well suited to remote inductions. The 90-minute session covers everything a new starter needs to know about utility plans before picking up a locator for the first time.",
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
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-69" width={1200} height={800} alt="Plans and process qualification assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-70" width={1200} height={800} alt="Utility mapping and plans training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-71" width={1200} height={800} alt="On-site plans and process practical" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose Sygma for Plans and Process Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Plan reading is not obvious. It requires structured training and hands-on practice with real plans.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Records and Planning</p>
              <h3 className="text-base font-bold text-foreground mb-2">Understanding utility records is the first step before any equipment reaches the ground.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Proper plan reading prevents incomplete surveys and dangerous misinterpretations.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Specialist Trainers</p>
              <h3 className="text-base font-bold text-foreground mb-2">Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Trainers who have worked with utility plans in the field every day.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Real Practical Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Structured on-site practical in real conditions.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">In-person format includes site practical with real utility plans and buried services.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Independent</p>
              <h3 className="text-base font-bold text-foreground mb-2">No surveys, no equipment, no manufacturer relationships.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Training focused entirely on plan reading skills, not commercial interests.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">We Come to You</p>
              <h3 className="text-base font-bold text-foreground mb-2">Delivered at your site, travel included.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">In-house training at your location for online and in-person formats.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Two Formats</p>
              <h3 className="text-base font-bold text-foreground mb-2">Online Teams session or full in-person with site practical element.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Choose the delivery method that suits your team's needs.</p>
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
            <p className="text-sm text-muted-foreground leading-relaxed">CITB-registered employers may be able to access Employer Network funding towards training costs. Plans and process training is recognised as essential foundation knowledge for utility avoidance work.</p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Next Steps</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Training Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Combine plans and process training with locating and safe dig qualifications.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/courses/eus-cat1" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The foundation qualification for utility location. Plans and locating work together from start to finish.</p>
            </Link>
            <Link href="/courses/eus-cat2-safe-dig" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT2 Safe Dig</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Safe excavation and permit requirements. Essential for teams executing digs after planning.</p>
            </Link>
            <Link href="/courses/service-coordinator-usc" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">Service Coordinator (USC)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">For those responsible for sourcing and reviewing utility plans as part of the USC role.</p>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About Plans and Process Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Online via Teams or in-house at your site. Contact us to discuss the format that works best for your team and receive a tailored quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/training/cable-location-avoidance"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View All Utility Avoidance Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

