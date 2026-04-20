import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from "lucide-react";
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import Image from 'next/image';

const faqs = [
            {
              q: "Is this a qualification?",
              a: "No. This is an awareness course. Delegates receive a certificate of attendance but no formal qualification or EUSR recognition. For EUSR-recognised qualifications, see the EUSR CAT1 and EUSR CAT2 programmes.",
            },
            {
              q: "Can this be run as a public scheduled session rather than a private team booking?",
              a: "Contact Sygma to discuss availability. Most online sessions are run as private bookings for individual organisations, but Sygma can advise on whether scheduled open sessions are available.",
            },
            {
              q: "We do not have CAT Manager installed. Can we still attend the data session?",
              a: "Yes. Delegates without CAT Manager can still observe the data download and analysis demonstration. However, to follow along hands-on during the session, delegates should have CAT Manager installed with downloaded data or a CAT4 available with the data cable.",
            },
            {
              q: "Can the content be tailored to our specific equipment?",
              a: "Yes. The session is flexible and Sygma can adjust the controls overview and data section to focus on the specific version of the CAT4 your team uses. Raise this at the time of booking.",
            },
            {
              q: "Is this suitable as a refresher for operatives with existing EUSR CAT1?",
              a: "Yes. This course works well as a standalone theory refresher for operatives who hold EUSR CAT1 but have not attended any training for some time. It covers the core theoretical content without requiring a full in-person programme.",
            },
            {
              q: "How is this different from the full CAT Manager Training course?",
              a: "The CAT Manager Training course is a dedicated half-day session focused entirely on the CAT Manager software, including installation, data download, CSV and KML export, charts, and the online portal. The HSG47 Awareness course covers CAT Manager as one optional element alongside HSG47, electromagnetic theory, and plan interpretation. If your primary need is the software, the CAT Manager Training course is the right choice.",
            },
          ];


export const metadata: Metadata = {
  title: 'CAT4 & HSG47 Awareness Online | Cable Avoidance Training | Sygma',
  description: 'Online CAT4 and HSG47 awareness training from Sygma Solutions. Foundation cable avoidance knowledge for operatives working near underground services.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/cat4-hsg47-awareness-online' },
  openGraph: {
    title: 'CAT4 & HSG47 Awareness Online | Cable Avoidance Training | Sygma',
    description: 'Online CAT4 and HSG47 awareness training from Sygma Solutions. Foundation cable avoidance knowledge for operatives working near underground services.',
    url: 'https://sygma-solutions.com/courses/cat4-hsg47-awareness-online',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-90-cat4-hsg47-awareness-online', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function Cat4HsgAwarenessOnline() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'CAT4 and HSG47 Awareness Online Training', description: 'Online CAT4 and HSG47 awareness training from Sygma Solutions. Foundation cable avoidance knowledge for operatives working near underground services.', url: '/courses/cat4-hsg47-awareness-online', duration: 'half day', mode: ['online'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'CAT4 and HSG47 Awareness Online' }]) }} />

      <InnerPageHero
        eyebrow="Utility Avoidance"
        headline="CAT4 HSG47 Awareness Online: Theory Refresher and Data Download Training"
        sub="Half a day via Microsoft Teams. Up to 12 delegates. Full HSG47 theory, electromagnetic science, PAS128 drawing interpretation, and optional CAT Manager data download, without your team leaving the site."
        image="cat-83-cat4-hsg47-awareness-online"
        alt="Online CAT4 and HSG47 awareness training course overview"
        breadcrumbs={[
          { label: "Training", href: "/training/cable-location-avoidance" },
          { label: "CAT4 HSG47 Awareness Online" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "Half day (approx 9:00am to 12:30pm)"],
            ["Format", "Online via Microsoft Teams"],
            ["Max Delegates", "12 per session"],
            ["Assessment", "No formal assessment"],
            ["Certificate", "Certificate of attendance"],
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
            <Image src="cat-64-cat4-hsg47-awareness-online" width={1200} height={900} alt="HSG47 awareness - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-81-cat4-hsg47-awareness-online" width={1200} height={900} alt="HSG47 awareness - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-39-cat4-hsg47-awareness-online" width={1200} height={900} alt="HSG47 awareness - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>
      {/* About section */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">HSG47 Theory Without Stopping Production</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Targeted Awareness Without a Full Day Off Site</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Not every training need requires a full two-day in-house programme. Some teams need a targeted awareness session to refresh the theory behind what the CAT and Genny actually do, to understand how to read the plans they receive before every excavation, and to get to grips with what the data sitting in their CAT4 can tell them about how their team is working.
              </p>
              <p>
                The CAT4 HSG47 Awareness Online course is a half-day programme delivered via Microsoft Teams. It is designed for organisations that want to improve the theoretical understanding of their existing CAT operators without taking them off site for a full day, and for teams preparing to attend a more advanced course who need a solid foundation first.
              </p>
              <p>
                The optional CAT Manager data download element makes this course particularly valuable for supervisors and managers who want to understand what is being recorded in the field, how to export it, and how to spot patterns in the data that indicate either good practice or areas of concern.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Course at a Glance</p>
            {[
              ["Duration", "Half a day (approximately 9:00am to 12:30pm)"],
              ["Format", "Online via Microsoft Teams"],
              ["Max Delegates", "12 per session"],
              ["Qualification", "Certificate of attendance"],
              ["Assessment", "No formal assessment"],
              ["Prerequisites", "None"],
              ["Equipment", "Microsoft Teams, webcam, microphone, speakers. Optional: CAT Manager installed with data, or a CAT4 with cable and batteries."],
              ["Pricing", "Contact Sygma for a quote based on delegate numbers"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="eyebrow text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Session Content</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">What the Course Covers</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Course content is fluid and can be shaped around the specific areas your team most needs to cover. Core topics include:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">HSG47 and the Legislative Framework</h3>
              <div className="space-y-2">
                {[
                  "Why buried service damage happens and what it costs: health, safety, and financial consequences",
                  "HSG47: what it requires operatives and organisations to do",
                  "National legislation and company policy relevant to working near buried utilities",
                  "Examples of what happens when the requirements are not followed",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Utility Plans and PAS128</h3>
              <div className="space-y-2">
                {[
                  "How to interpret STATS plans: what they show, what they do not show, and their limitations",
                  "PAS128 drawings: survey types, quality levels, and example drawings",
                  "The difference between estimated, measured, and surveyed service routes",
                  "Toolbox talk topics available on request: detectable warning tape, depth awareness, pot-ended cables",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">Electromagnetic Theory</h3>
              <div className="space-y-2">
                {[
                  "How a pipe and cable locator works: the principles of electromagnetic induction",
                  "Signal behaviour: distortion, spreading, skip, and the halo effect",
                  "Equipment limitations: what the CAT and Genny cannot detect and why",
                  "Myth-busting: common misunderstandings about what the equipment tells you",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">CAT Manager Data Download (Optional)</h3>
              <div className="space-y-2">
                {[
                  "How to use CAT Manager Software to access and review recorded data",
                  "How to export different file types (CSV, KML) and what each is used for",
                  "How to refine and filter data before exporting",
                  "How to analyse recorded data and identify patterns indicating correct and incorrect use",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
            <p className="text-sm font-bold text-foreground mb-1">Note on the CAT Manager element</p>
            <p className="text-sm text-muted-foreground">
              To make the most of the data download session, delegates should either have CAT Manager installed with existing downloaded data from a CAT4, or have a CAT4 available on the day with the correct data cable and charged batteries. The data element is optional if delegates do not have this available.
            </p>
          </div>
        </div>
      </section>

      {/* Who should attend */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Audience</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Who Benefits From This Course?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ["CAT Operators Wanting to Reinforce Theory", "Operatives who have received hands-on training but want to strengthen the underlying electromagnetic science and HSG47 knowledge."],
            ["Operatives Refreshing After a Gap", "Those who attended training some time ago and want to update their knowledge of HSG47 and electromagnetic principles."],
            ["Supervisors and Managers", "Those who want to understand what the CAT Manager data from their team is telling them, and how to act on it."],
            ["New Starters Awaiting In-Person Training", "Team members who need a theoretical foundation while waiting for a full in-house programme to be arranged."],
            ["Teams Needing Plan Awareness", "Any team where understanding of PAS128 and utility plan interpretation needs to be raised quickly and efficiently."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-border p-5 bg-background">
              <h3 className="font-bold text-foreground mb-2 text-sm">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical requirements */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="eyebrow mb-3">Technical Requirements</p>
              <h2 className="text-2xl font-black mb-4 text-foreground">What Each Delegate Needs</h2>
              <div className="space-y-3">
                {[
                  "A stable internet connection and a device capable of running Microsoft Teams",
                  "A working webcam and microphone",
                  "Speakers or headphones",
                  "Optional: CAT Manager installed on their device with data downloaded from a CAT4 unit",
                  "Optional alternative: a CAT4 with a data cable and charged batteries for live data download during the session",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow mb-3">What Comes Next</p>
              <h2 className="text-2xl font-black mb-4 text-foreground">From Awareness to Full Qualification</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This online awareness course provides the theoretical grounding that makes in-person training more effective. Delegates who complete this course and go on to attend a full EUSR CAT1 programme or CAT and Genny training will arrive with the electromagnetic theory already in place.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For teams that need formal qualification rather than awareness, Sygma's EUSR CAT1, EUSR CAT2, ProQual CAT1, and CAT and Genny programmes are the natural next step.
              </p>
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
              "HSG47 Reference Materials",
              "CAT Manager Walkthrough Notes (if data download session attended)",
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
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-82-cat4-hsg47-awareness-online" width={1200} height={900} alt="CAT4 HSG awareness training equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-02-cat4-hsg47-awareness-online" width={1200} height={900} alt="Online HSG47 awareness training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-10-cat4-hsg47-awareness-online" width={1200} height={900} alt="HSG awareness practical demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
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

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-71-cat4-hsg47-awareness-online" width={1200} height={900} alt="CAT4 and Genny training assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-84-cat4-hsg47-awareness-online" width={1200} height={900} alt="Utility avoidance awareness training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-13-cat4-hsg47-awareness-online" width={1200} height={900} alt="On-site CAT4 HSG awareness session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Why Sygma */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose Sygma for HSG47 Awareness Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Half-day online awareness that covers the theory your team needs, without pulling them off site for a full day.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Online With Expert Delivery</p>
              <h3 className="text-base font-bold text-foreground mb-2">Live sessions hosted by experienced trainers. Not pre-recorded content.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Real-time interaction, questions answered as they arise, tailored to your team's needs.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Specialist Trainers</p>
              <h3 className="text-base font-bold text-foreground mb-2">Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Our trainers come from the field. They have years of experience locating services in real conditions.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Real Practical Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Structured on-site practical in real conditions.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Theory grounded in what locators actually do on site, not classroom abstracts.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Independent</p>
              <h3 className="text-base font-bold text-foreground mb-2">No surveys, no equipment, no manufacturer relationships.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Complete independence means objective assessment and honest advice about equipment limitations.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">We Come to You</p>
              <h3 className="text-base font-bold text-foreground mb-2">Delivered at your site, travel included.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">For in-person formats, we deliver at your location. For online, your team stays on site.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Half-Day Format</p>
              <h3 className="text-base font-bold text-foreground mb-2">Theory refresher without requiring a full day off site.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Approximately 90 minutes online. Your team stays productive while their knowledge is updated.</p>
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
            <p className="text-sm text-muted-foreground leading-relaxed">CITB-registered employers may be able to access Employer Network funding towards training costs. For the online format, discuss with your adviser how this awareness session fits into your learning and development plan.</p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Next Steps</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Training Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Continue your journey with these complementary courses in utility avoidance training.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/courses/eus-cat1" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The foundation qualification for anyone who locates buried services. Two days of theory and practical assessment.</p>
            </Link>
            <Link href="/courses/eus-cat2-safe-dig" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT2 Safe Dig</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The second stage of EUSR. Safe excavation techniques, HSG47 in practice, and permit to dig requirements.</p>
            </Link>
            <Link href="/courses/cat-manager" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">CAT Manager Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Master the data recorded by your CAT4. Download, export, and analyse CAT Manager data to monitor team performance.</p>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Book for Your Team</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Online via Microsoft Teams. Up to 12 delegates per session. Contact us with delegate numbers and your preferred dates to receive a quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Book for Your Team
            </Link>
            <Link
              href="/courses/cat-manager"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View CAT Manager Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

