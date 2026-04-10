import Link from 'next/link';
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { CheckCircle } from "lucide-react";
import InnerPageHero from "@/components/InnerPageHero";
import type { Metadata } from 'next';
import Image from 'next/image';

const faqs = [
            {
              q: "How is this different from EUSR CAT1 training?",
              a: "The EUSR qualification is designed for any kind of locator but is not locator-specific. The certificate you receive does not qualify you on a specific model. This manufacturer-specific course is for organisations that want training built around the specific controls, modes, and signal generator of the equipment their team actually uses. The Genny-First methodology is the same across both. The difference is that this course is tailored to your kit.",
            },
            {
              q: "What certification options are available?",
              a: "You can choose from four certification routes: an in-house Sygma certificate, an EUSR certificate, a ProQual certificate, or a Level 2 qualification. The course content is the same regardless of which route you choose. The certification decision is yours and can be discussed at booking.",
            },
            {
              q: "Can the course cover multiple different makes of locator?",
              a: "It depends on the makes involved. Where delegates bring different models within the same product family, this is usually straightforward. Where delegates bring fundamentally different systems from different manufacturers, the trainer needs to know in advance so the session can be structured to cover both effectively. Contact Sygma at enquiry with the full list of equipment that will be in the room.",
            },
            {
              q: "What if we do not have a suitable site?",
              a: "The practical element requires buried metallic utilities near the training room. If your site does not have this, contact Sygma to discuss whether an alternative location can be used. Sygma's Wigan training centre has live utility demonstration rigs and may be suitable depending on your equipment and travel arrangements.",
            },
            {
              q: "Is a verbal assessment available?",
              a: "Yes. A verbal assessment alternative is available for delegates with dyslexia or other reading difficulties. This must be requested at the time of booking so that the trainer can prepare appropriately. The verbal assessment covers the same content at the same 70% pass mark threshold as the written paper.",
            },
            {
              q: "Can we combine this with other Sygma training on the same day?",
              a: "Not typically. The manufacturer-specific course runs a full day and uses the available time for both theory and practical work. If your team has additional training needs, Sygma can discuss scheduling a combined visit where different training elements are delivered across multiple days. Contact us to discuss your full training requirements.",
            },
          ];

export const metadata: Metadata = {
  title: 'Manufacturer Locator Training Course | Sygma Solutions',
  description: 'One day, up to eight delegates. Theory and practical training tailored to your pipe and cable locating equipment, using your own kit on a representative site.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/manufacturer-locator-training' },
  openGraph: {
    title: 'Manufacturer Locator Training Course | Sygma Solutions',
    description: 'One day, up to eight delegates. Theory and practical training tailored to your pipe and cable locating equipment, using your own kit on a representative site.',
    url: 'https://sygma-solutions.com/courses/manufacturer-locator-training',
    siteName: 'Sygma Solutions',
    type: 'website',
  },
};

export default function ManufacturerLocatorTraining() {
  return (
    <>
          
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "Manufacturer-Specific Locator Training: vScan, CScope, and Other Pipe Locators", description: "One day. Up to eight delegates. Theory and practical training tailored to your specific pipe and cable locating equipment, using your own kit on a representative site. Multiple certification options available.", url: "/courses/manufacturer-locator-training", credential: "Manufacturer Locator Training Certificate", duration: "1 day", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/cable-location-avoidance" }, { label: "Manufacturer-Specific Locator Training" }]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="Manufacturer-Specific Locator Training: vScan, CScope, and Other Pipe Locators"
        sub="One day. Up to eight delegates. Theory and practical training tailored to your specific pipe and cable locating equipment, using your own kit on a representative site. Multiple certification options available."
        image="CAT4-and-Genny-50"
        alt="Manufacturer-specific cable locator training with CAT4 and Genny equipment"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "Manufacturer-Specific Locator Training" },
        ]}
      />

      {/* Who This Course Is For */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Who Is This Course For</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Designed For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Experienced Locator Operators",
                desc: "Those who already hold EUSR CAT1 or equivalent and want manufacturer-specific advanced training on their particular equipment model.",
              },
              {
                title: "Equipment Fleet Managers",
                desc: "Professionals responsible for specifying, maintaining and getting the most from their organisation's locator fleet.",
              },
              {
                title: "Organisations With Specialist Equipment",
                desc: "Companies that have invested in specific manufacturer equipment and want their teams trained on its full capability.",
              },
              {
                title: "Anyone Transitioning to New Equipment",
                desc: "Operators moving from one manufacturer's locator to another who need structured training on the new platform.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "1 day (09:00 to approx 15:30)"],
            ["Max Delegates", "8 per course"],
            ["Certificate", "In-house, EUSR, ProQual, or Level 2"],
            ["Assessment", "Written, 70% pass mark"],
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
          <Image src="CAT4-and-Genny-41" width={1200} height={800} alt="Manufacturer-specific locator training - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="CAT4-and-Genny-55" width={1200} height={800} alt="Manufacturer-specific locator training - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="CAT4-and-Genny-65" width={1200} height={800} alt="Manufacturer-specific locator training - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
        </div>
      </section>
      {/* About */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">Training for Your Specific Equipment</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">When Generic CAT Training Is Not Enough</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Not every organisation uses a Radiodetection CAT4 and Genny4. Teams working with vScan sonde locators, CScope systems, or other makes need training that is built around the specific equipment they actually use on site.
              </p>
              <p>
                This one-day course is bespoke by design. Sygma's trainers work from the electromagnetic principles upward, building a programme around your specific locator's controls, modes, signal generator, and data output. The Genny-First methodology that sits at the core of all Sygma training is adapted to your equipment. The theory session covers how your locator works and why it behaves the way it does in different conditions. The practical element puts delegates on site with their own kit, working through real location tasks and problem scenarios.
              </p>
              <p>
                Certification is flexible. You can choose from an in-house Sygma certificate, an EUSR certificate, a ProQual certificate, or a Level 2 qualification. The course content is the same regardless of the certification route. What differs is the certificate your delegates receive at the end.
              </p>
              <p>
                The course concludes with a written assessment at a 70% pass mark. A verbal assessment alternative is available for delegates with dyslexia or other reading difficulties. This must be requested at booking.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Course at a Glance</p>
            {[
              ["Duration", "1 day (09:00 to approximately 15:30, including breaks)"],
              ["Format", "In-house at your site"],
              ["Max Delegates", "8 per course"],
              ["Certificate", "In-house, EUSR, ProQual, or Level 2 (your choice)"],
              ["Assessment", "Written assessment, 70% pass mark (verbal alternative available)"],
              ["Equipment", "Delegates must bring their own locator; 1 signal generator with accessories provided per course"],
              ["Delivery", "Nationwide UK"],
              ["Pricing", "Contact Sygma for a tailored quotation"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="eyebrow text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theory content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Classroom Content</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Theory Built Around Your Equipment</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The classroom programme covers the electromagnetic theory that underpins how your locator works, the specific controls and modes on your make and model, and the practical knowledge delegates need to use it correctly in the field.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Legislation and guidance: HSG47, company-specific requirements, and the legal duty to locate before excavating",
              "Electromagnetic induction: the principles behind how your locator detects buried metallic utilities",
              "Signal types and frequencies used by your specific equipment and when to use each",
              "Equipment controls and operating modes: understanding what every control does and why",
              "Signal generator application: correct connection techniques, frequency selection, and ground coupling",
              "Signal distortion and interference: why signals behave unexpectedly and how to recognise and manage this",
              "Equipment limitations: what your locator cannot detect, and the situations where it will give misleading readings",
              "Depth estimation: how your equipment calculates depth and how to verify and test readings",
              "Common errors and bad habits: what incorrect technique looks like and why it creates risk",
              "Permit to dig and risk assessment: requirements before excavation, and what a compliant pre-dig check looks like",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical content */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Site Practical</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Hands-On With Your Own Equipment</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The practical element takes place at or near the training room on a representative site with buried metallic utilities present. Delegates work with their own locator throughout, building competence with the kit they will use on site after the course.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Equipment function checks before any location work begins",
            "Signal generator connection and setup: correct technique for your specific transmitter",
            "Locating in all available modes, confirming service routes and cross-checking results",
            "Depth estimation: taking readings, testing them, and understanding the margin for error",
            "Induction techniques: blind sweeps, effective nulling, and identifying signal quality",
            "Problem locates: working through challenging scenarios where signal quality is compromised",
            "Permit to dig completion before practical assessment commences",
            "Multiple choice questions (MCQs) at the end of the programme",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start bg-muted/30 border border-border rounded-lg p-4">
              <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
              <span className="text-muted-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment and site requirements */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Requirements</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">What You Need to Provide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Equipment</h3>
              <div className="space-y-2">
                {[
                  "Each delegate must bring their own pipe or cable locator (this is the equipment the course is built around)",
                  "Sygma provides one signal generator with a full set of connection accessories per course",
                  "Delegates should bring spare batteries for their locator and any associated transmitter where applicable",
                  "If delegates use multiple different makes or models, contact Sygma at booking to confirm this can be accommodated in a single session",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Site</h3>
              <div className="space-y-2">
                {[
                  "Meeting or conference room with seating, projector or screen, and welfare facilities",
                  "An area near the training room with at least two or three detectable buried metallic utilities",
                  "STATS plans or site utility records for the practical area, provided by the client in advance",
                  "Delegates must wear appropriate PPE throughout the site element",
                  "Live dig area or access to a representative working area for problem locate scenarios",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-accent font-bold shrink-0">&#8250;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-border bg-amber-50 dark:bg-amber-950/20 p-5">
            <p className="text-sm font-bold text-foreground mb-1">Important: Equipment at booking</p>
            <p className="text-sm text-muted-foreground">
              Because this course is built around your specific equipment, Sygma needs the make and model of every locator delegates will bring before the training date is confirmed. This allows the trainer to prepare the correct session content and confirm that the signal generator being provided is compatible. Please supply this information at the time of enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Manufacturer Training Certificate (specific to your equipment model)",
              "Written Assessment Record",
              "Practical Assessment Record",
              "Equipment-Specific Reference Guide",
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
          <Image src="CAT4-and-Genny-10" width={1200} height={800} alt="Manufacturer locator training practical demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-45" width={1200} height={800} alt="Locator equipment training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-60" width={1200} height={800} alt="Hands-on manufacturer locator assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
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
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-46" width={1200} height={800} alt="Utility locator training with electromagnetic equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-55" width={1200} height={800} alt="On-site locator training practical assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-61" width={1200} height={800} alt="Manufacturer-specific locator training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Why Sygma */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose Sygma for Manufacturer-Specific Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Not all locators are the same. Training should be built around your specific equipment, not generic content.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Equipment-Specific Expertise</p>
              <h3 className="text-base font-bold text-foreground mb-2">In-depth training on specific locator models your team uses.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Not generic CAT training. Built around your vScan, CScope, or other equipment's specific controls and modes.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Specialist Trainers</p>
              <h3 className="text-base font-bold text-foreground mb-2">Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Our trainers understand diverse equipment and can adapt training to your kit.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Real Practical Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Structured on-site practical in real conditions.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Delegates work with their own equipment on site, building confidence with the kit they use daily.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Independent</p>
              <h3 className="text-base font-bold text-foreground mb-2">No surveys, no equipment, no manufacturer relationships.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Objective assessment without pressure from equipment manufacturers.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">We Come to You</p>
              <h3 className="text-base font-bold text-foreground mb-2">Delivered at your site, travel included.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">In-house training using your own equipment and your own utilities for practical work.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Flexible Certification</p>
              <h3 className="text-base font-bold text-foreground mb-2">Choose in-house, EUSR, ProQual, or Level 2 certification.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Same high-quality training, your choice of certificate at the end.</p>
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
            <p className="text-sm text-muted-foreground leading-relaxed">CITB-registered employers may be able to access Employer Network funding towards training costs. Equipment-specific training is recognised as professional development supporting your team's competency.</p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Next Steps</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Training Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Build your team's capability across locating and safe excavation.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/courses/eus-cat1" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The foundation qualification for utility location. Complementary to manufacturer-specific training.</p>
            </Link>
            <Link href="/courses/eus-cat2-safe-dig" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT2 Safe Dig</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Safe excavation and permit requirements. Essential for teams using locators in the field.</p>
            </Link>
            <Link href="/courses/plans-and-process" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">Plans and Process Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Master utility plan interpretation. The first step before any locating work begins.</p>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About Manufacturer-Specific Locator Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            In-house at your site anywhere in the UK. Up to eight delegates. Tell us the make and model of your equipment and we will confirm compatibility and provide a tailored quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About This Course
            </Link>
            <Link
              href="/courses/eus-cat1"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View EUSR CAT1 Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

