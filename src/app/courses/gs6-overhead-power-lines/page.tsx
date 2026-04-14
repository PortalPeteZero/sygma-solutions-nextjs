import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import Link from 'next/link';
import { CheckCircle } from "lucide-react";
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from 'next';
import Image from 'next/image';

const faqs = [
              {
                q: "Which format is right for my team?",
                a: "The half-day awareness format is suitable for teams that need the theoretical knowledge: understanding the hazard, the legislation, the control measures, and what the standards require. The full-day format is appropriate where delegates will have a direct role in applying control measures on site, operating plant near overhead lines, or conducting risk assessments. If you are unsure, contact Sygma and we will advise based on your team's roles and responsibilities.",
              },
              {
                q: "What is the supa rule and why is it relevant?",
                a: "The supa rule is a telescopic measuring pole used to determine the height of overhead conductors at a safe distance from the line. It allows the measured clearance height to be compared against the known sag curve data for that type of line, which in turn determines the maximum safe height for plant and equipment working in the vicinity. The supa rule is used as part of the risk assessment process under GS6 and is covered in the practical element of the full-day format.",
              },
              {
                q: "What does ENATS 43-8 cover?",
                a: "ENATS 43-8 is the Energy Networks Association technical specification that sets out the minimum clearance distances for overhead line construction in the UK. It provides the technical basis for the approach distances used in GS6. Understanding ENATS 43-8 allows delegates to understand why specific clearance distances are set as they are, rather than simply memorising numbers.",
              },
              {
                q: "Does passing this course give EUSR recognition?",
                a: "No. The GS6 Overhead Power Lines course is an awareness and training programme delivered against the GS6 fourth edition. It does not form part of the EUSR (Energy & Utility Skills Register) qualification framework. Delegates who successfully complete the written assessment receive a certificate of attendance from Sygma.",
              },
              {
                q: "Can a verbal assessment be arranged?",
                a: "Yes. Sygma offers verbal assessment as an alternative to the written paper for delegates with dyslexia or other reading difficulties. This must be requested at the time of booking so that the trainer can prepare accordingly. The verbal assessment covers the same content and is conducted at the same pass mark threshold.",
              },
              {
                q: "Can you deliver this alongside other Sygma training on the same day?",
                a: "Yes, depending on the format. The half-day awareness programme can be combined with other half-day modules where your team has multiple training needs in the same visit. Contact Sygma to discuss combining GS6 awareness with other elements of your utility safety training programme.",
              },
            ];

export const metadata: Metadata = {
  title: 'GS6 Overhead Power Lines Training | Sygma Solutions',
  description: 'GS6 overhead power lines awareness and safe working training. Covers approach distances, risk assessment and safe systems of work near overhead lines.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/gs6-overhead-power-lines' },
  openGraph: {
    title: 'GS6 Overhead Power Lines Training | Sygma Solutions',
    description: 'GS6 overhead power lines awareness and safe working training. Covers approach distances, risk assessment and safe systems of work near overhead lines.',
    url: 'https://sygma-solutions.com/courses/gs6-overhead-power-lines',
    siteName: 'Sygma Solutions',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Gs6OverheadPowerLines() {
  return (
    <>
          
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: "GS6 Overhead Power Lines Training", description: "GS6 overhead power lines awareness and safe working training. Covers approach distances, risk assessment and safe systems of work near overhead lines.", url: "/courses/gs6-overhead-power-lines", credential: "GS6 Overhead Power Lines Certificate", duration: "1 day", mode: ["onsite"] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Training", to: "/training/cable-location-avoidance" }, { label: "GS6 Overhead Power Lines" }]) }} />
<InnerPageHero
        eyebrow="Utility Avoidance"
        headline="GS6 Overhead Power Lines: Awareness and Safe Working Training"
        sub="Half-day classroom awareness or full-day with practical site element. Written assessment with 70% pass mark. GS6 fourth edition and ENATS 43-8. Delivered in-house at your site, nationwide UK."
        image="cat-52"
        alt="GS6 overhead power lines awareness training for safe working near electrical hazards"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "GS6 Overhead Power Lines" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Formats Available", "Half-day or Full-day"],
            ["Assessment", "Written, 70% pass mark"],
            ["Standards Covered", "GS6 4th Edition, ENATS 43-8"],
            ["Certificate", "Certificate of attendance"],
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
            <Image src="cat-53" width={1200} height={900} alt="GS6 overhead power lines training - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-54" width={1200} height={900} alt="GS6 overhead power lines training - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image src="cat-55" width={1200} height={900} alt="GS6 overhead power lines safety training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </section>
      {/* About */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">Overhead Line Hazard Training</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Understanding the Risk Above the Ground</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Overhead power lines kill and injure workers every year. Unlike buried services, overhead conductors are visible, but that visibility creates complacency. The consequences of contact are immediate and almost always fatal. GS6 exists to give workers and managers the knowledge to recognise the hazard, plan their work correctly, and apply the control measures that prevent contact from occurring.
              </p>
              <p>
                Sygma's GS6 Overhead Power Lines course is delivered against the GS6 fourth edition and ENATS 43-8. It is available in two formats: a half-day classroom and assessment session for teams that need the theoretical grounding, and a full-day programme that adds a practical site element covering the use of the supa rule and the application of control measures in a real working environment.
              </p>
              <p>
                Both formats include a written assessment with a 70% pass mark. A verbal assessment is available as an alternative for delegates with dyslexia or other reading difficulties (contact Sygma at the time of booking to arrange this).
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Course at a Glance</p>
            {[
              ["Formats", "Half-day (classroom + assessment) or Full-day (classroom + site practical + assessment)"],
              ["Standards", "GS6 fourth edition and ENATS 43-8"],
              ["Assessment", "Written assessment, 70% pass mark (verbal alternative available)"],
              ["Certificate", "Certificate of attendance on successful completion"],
              ["Format", "In-house at your site"],
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

      {/* Two formats comparison */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Course Formats</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Choose the Format That Fits Your Needs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">Half-Day Awareness</p>
                <p className="text-white/70 text-sm">Classroom and written assessment only</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The half-day format covers the full classroom programme: legislation, GS6 fourth edition, voltage classifications, conductor behaviour, safe approach distances, and control measures. Delegates complete a written assessment before the session ends.
                </p>
                <div className="space-y-2">
                  {[
                    "Complete classroom programme covering GS6 and ENATS 43-8",
                    "Written assessment at 70% pass mark",
                    "Certificate of attendance on successful completion",
                    "Suitable for teams needing theoretical grounding without site practical",
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
                <p className="text-white font-black text-lg">Full-Day with Practical</p>
                <p className="text-white/70 text-sm">Classroom, site practical, and written assessment</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The full-day format adds a practical site element to the classroom programme. Delegates use the supa rule to measure conductor heights in the field, identify tower and structure types, apply safe approach distances on site, and set up the control measures required before work can begin.
                </p>
                <div className="space-y-2">
                  {[
                    "Full classroom programme as above",
                    "Practical site element including supa rule conductor height measurement",
                    "Field identification of tower and structure types",
                    "Applying control measures on a representative site",
                    "Written assessment at 70% pass mark",
                    "Certificate of attendance on successful completion",
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

      {/* Classroom content */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Classroom Content</p>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">What the Classroom Element Covers</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          The classroom programme is common to both formats. It covers the legislative context, the technical content of GS6 and ENATS 43-8, and the practical control measures required before any work near overhead lines can take place.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Legislation and guidance: Health and Safety at Work Act, CDM, Electricity at Work Regulations, and the role of GS6",
            "Consequences of overhead line contact: live incidents, statistics, and what happens in a contact event",
            "GS6 fourth edition: requirements, application, and what it means for your work activities",
            "ENATS 43-8: network specifications and what they tell you about the lines on your site",
            "Tower and structure types: wood poles, lattice towers, H-frames, and how to identify them",
            "Voltage classifications: extra-high, high, and low voltage overhead systems and what they look like",
            "Conductor sag: why conductors droop, what affects sag, and why this matters for approach distances",
            "Safe approach distances and the exclusion zone: the three-zone model and how to calculate required clearances",
            "Risk assessments for work near overhead lines: what they must contain and who carries them out",
            "Control measures: goal posts, crossbars, suspended loads restrictions, spotter roles, and danger notices",
            "Emergency procedures: what to do in a contact or near-miss incident, who to call, and how to manage casualties safely",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start bg-muted/30 border border-border rounded-lg p-4">
              <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
              <span className="text-muted-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Practical site element */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Site Practical (Full-Day Format)</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">Applying the Theory on Site</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The full-day programme adds a practical element where delegates apply what they have learned in a real or representative outdoor environment. Sygma trainers use a flexible approach, adapting site activities to the location available.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Reading and interpreting overhead line route drawings and DNO records",
              "Identifying tower and structure types in the field",
              "Estimating voltage from visual inspection of infrastructure",
              "Using the supa rule to take conductor height measurements",
              "Applying the three-zone model to a specific site scenario",
              "Setting out goal posts and crossbars at the correct clearance heights",
              "Completing a risk assessment for a representative work activity near overhead lines",
              "Discussion of spotter responsibilities and communication requirements on site",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
            <p className="text-sm font-bold text-foreground mb-1">Note on site requirements for the full-day format</p>
            <p className="text-sm text-muted-foreground">
              The full-day practical requires an outdoor area with a representative overhead line infrastructure within a reasonable distance of the training location. Sygma will confirm site suitability with you at the time of booking. If your site does not have suitable overhead infrastructure nearby, Sygma can advise on alternative arrangements.
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
              "GS6 Awareness Certificate",
              "Written Assessment Record",
              "Overhead Power Lines Reference Card",
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
          <Image src="cat-56" width={1200} height={900} alt="GS6 overhead power lines awareness training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-57" width={1200} height={900} alt="Overhead power line safety practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-58" width={1200} height={900} alt="GS6 compliance training demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full overflow-hidden">
        <Image src="cat-59" width={1200} height={900} alt="GS6 overhead power lines training - live training environment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* Assessment */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-3">Assessment</p>
            <h2 className="text-2xl font-black mb-4 text-foreground">Written Assessment: 70% Pass Mark</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Both formats conclude with a written assessment. Delegates must achieve a minimum of 70% to receive the certificate of attendance. The assessment is completed at the end of the classroom programme, before the practical element on the full-day course.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A verbal assessment is available as an alternative for delegates with dyslexia or other reading difficulties. This must be requested at the time of booking so that Sygma can make appropriate arrangements in advance.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Who Should Attend</p>
            <h2 className="text-2xl font-black mb-4 text-foreground">Audience</h2>
            <div className="space-y-2">
              {[
                "Plant operators and machine operators whose equipment may work near overhead lines",
                "Site managers and supervisors responsible for planning work near overhead infrastructure",
                "Health and safety managers developing safe systems of work for overhead line hazards",
                "Groundworkers on civil engineering and construction sites near overhead lines",
                "Utility contractors working on or near the overhead distribution and transmission network",
                "Any operative required by their employer to hold a GS6 awareness certificate",
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

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-60" width={1200} height={900} alt="GS6 training with site safety equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-61" width={1200} height={900} alt="Overhead power lines safety assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-62" width={1200} height={900} alt="On-site GS6 compliance practical training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* FAQs */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
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
        </div>
      </section>

      {/* Why Sygma */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose Sygma for GS6 Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Overhead line hazards are unforgiving. Training must be thorough, practical, and delivered by people who understand the real risks.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">GS6 Compliance</p>
              <h3 className="text-base font-bold text-foreground mb-2">Meets HSE GS6 guidance requirements for working near overhead power lines.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Delivered against the GS6 fourth edition and ENATS 43-8. Your team leaves with documented competency.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Specialist Trainers</p>
              <h3 className="text-base font-bold text-foreground mb-2">Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Trainers who understand the hazard and how to communicate it effectively to site teams.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Real Practical Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Structured on-site practical in real conditions.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Full-day format includes practical measurement and control measure application on site.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Independent</p>
              <h3 className="text-base font-bold text-foreground mb-2">No surveys, no equipment, no manufacturer relationships.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Impartial delivery focused entirely on safety, not commercial interests.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">We Come to You</p>
              <h3 className="text-base font-bold text-foreground mb-2">Delivered at your site, travel included.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">In-house training at your location, with access to your local overhead infrastructure if available.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Two Formats</p>
              <h3 className="text-base font-bold text-foreground mb-2">Half-day awareness or full-day with practical site element.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Choose the format that matches your team's needs and responsibilities.</p>
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
            <p className="text-sm text-muted-foreground leading-relaxed">CITB-registered employers may be able to access Employer Network funding towards training costs. GS6 training is recognised as essential health and safety competency development.</p>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Next Steps</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Training Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Build a comprehensive safety programme across all utility avoidance hazards.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/courses/eus-cat1" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Underground services avoidance. The complement to overhead line safety in a complete hazard awareness programme.</p>
            </Link>
            <Link href="/courses/eus-cat2-safe-dig" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT2 Safe Dig</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Safe excavation techniques for buried services. Essential knowledge for teams working in multi-hazard environments.</p>
            </Link>
            <Link href="/courses/service-coordinator-usc" className="border border-border rounded-lg bg-card p-5 hover:shadow-md transition-shadow block">
              <h3 className="text-base font-bold text-foreground mb-2">Service Coordinator (USC)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Coordination and oversight of underground service avoidance. Essential for site supervisors and managers.</p>
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
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About GS6 Overhead Power Lines Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Half-day awareness or full-day with site practical. Delivered in-house at your site anywhere in the UK. Contact us to discuss your team's requirements and receive a tailored quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Enquire About This Course
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

