import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'On-Site Competency Assessment | OSCA | Sygma Solutions',
  description: 'OSCA provides digital, GPS-stamped on-site competency assessments for utility location operatives. Real evidence of what your team can do in the field.',
  alternates: { canonical: 'https://sygma-solutions.com/osca' },
  openGraph: {
    title: 'On-Site Competency Assessment | OSCA | Sygma Solutions',
    description: 'OSCA provides digital, GPS-stamped on-site competency assessments for utility location operatives.',
    url: 'https://sygma-solutions.com/osca',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function OscaPage() {
  const assessmentElements = [
    'Pre-excavation survey planning and documentation check',
    'Correct selection of search frequencies for site conditions',
    'Passive scanning technique and coverage discipline',
    'Generator (Genny) application and signal tracing',
    'Depth estimation and signal interpretation',
    'Distortion recognition and re-surveying decision-making',
    'CAT avoidance zone marking and handover',
    'Safe digging compliance and spotter positioning',
    'On-site hazard communication and team briefing',
    'Equipment maintenance checks and fault recognition',
  ];

  const faqs = [
    { q: 'How long does an OSCA assessment take?', a: 'A full utility location OSCA typically takes 2 to 3 hours per operative. The safe digging add-on adds approximately 45 minutes.' },
    { q: 'Does OSCA replace formal training?', a: 'No. OSCA is a competency assessment tool, not a training intervention. It assesses what operatives can do in practice. It does not deliver instruction.' },
    { q: 'Is the OSCA certificate recognised by clients and principal contractors?', a: 'OSCA is a Sygma-developed product. It is not an awarding body qualification. However, it produces a detailed, GPS-stamped, criteria-mapped digital report that provides a higher standard of competency evidence than most other available tools.' },
    { q: 'Can OSCA be conducted on a live site?', a: 'Yes. OSCA is specifically designed to be conducted during normal site operations. Operatives are assessed while they work.' },
    { q: 'Does OSCA include safe digging assessment?', a: 'Yes. OSCA includes an optional safe digging add-on that assesses hand-digging technique, spotter positioning, and excavation risk management.' },
    { q: 'How much does OSCA cost?', a: 'OSCA is priced per site visit, not per operative. The cost depends on the number of operatives, the assessment format, and whether the safe digging add-on is included. Contact us for a quotation.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[480px] bg-foreground">
        <Image src="cat-07" fill className="absolute inset-0 h-full w-full object-cover" priority sizes="100vw" alt="OSCA hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative z-10 container mx-auto px-6 md:px-8 pt-10 pb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Assessment</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white max-w-4xl">OSCA</h1>
          <p className="text-white/75 max-w-xl">A 3-year training certificate tells you nothing about what your operative can do in month 18. OSCA does.</p>
        </div>
      </section>

      <section className="bg-foreground text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg border border-accent/30 p-5 text-center">
              <p className="text-3xl font-bold text-accent mb-1">21 Years</p>
              <p className="text-xs font-bold text-primary-foreground uppercase tracking-wider mb-1">One Specialism</p>
              <p className="text-xs text-primary-foreground/60">Underground utility location training is all we do.</p>
            </div>
            <div className="bg-white/10 rounded-lg border border-accent/30 p-5 text-center">
              <p className="text-3xl font-bold text-accent mb-1">70-80%</p>
              <p className="text-xs font-bold text-primary-foreground uppercase tracking-wider mb-1">Increase in Genny Usage</p>
              <p className="text-xs text-primary-foreground/60">Measured through locator data downloads after Sygma training.</p>
            </div>
            <div className="bg-white/10 rounded-lg border border-accent/30 p-5 text-center">
              <p className="text-3xl font-bold text-accent mb-1">Proven</p>
              <p className="text-xs font-bold text-primary-foreground uppercase tracking-wider mb-1">Strike Reduction Record</p>
              <p className="text-xs text-primary-foreground/60">Clients report measurable reductions in service strikes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">The Gap Your Certificate Cannot Fill</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>Most utility location operatives hold a 3-year EUSR card or ProQual certificate. It confirms they passed a course. It does not confirm they are operating correctly on site today.</p>
            <p>The gap between certification dates is where competency erodes. Equipment changes. Habits develop. Pressure builds. And nobody checks.</p>
            <p>OSCA closes that gap. It gives you verifiable, time-stamped, criteria-mapped evidence of what each operative can do on your site, in your environment, with your equipment.</p>
          </div>
        </div>
      </section>

      {/* What Is OSCA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">What It Is</p>
          <h2 className="text-3xl font-bold mb-4">What Is OSCA?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>OSCA is Sygma's digital on-site competency assessment tool for utility location and avoidance, and safe digging. It is conducted by Sygma's qualified assessors and industry experts at your workplace, during normal operations.</p>
            <p>Unlike classroom refreshers or end-of-course sign-offs, OSCA assesses what operatives actually do. On your site. On your equipment. In real conditions. Each assessment is conducted to a structured criteria set mapped to current industry standards, with the option to add client-specific or site-specific elements.</p>
            <p>The OSCA report is generated digitally during the assessment and delivered to you immediately. It includes photographic and video evidence, GPS location data, time and date stamps and a full criteria map showing what was assessed and the outcome.</p>
          </div>
        </div>
      </section>

      {/* What OSCA Assesses */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Assessment Scope</p>
          <h2 className="text-3xl font-bold mb-4">What OSCA Assesses</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">The OSCA covers ten structured assessment elements, all mapped to current industry standards for utility location and avoidance. Each element is assessed systematically.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {assessmentElements.map((el) => (
              <div key={el} className="flex items-start gap-3 border border-border rounded-lg bg-card p-4">
                <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{el}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Report */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Digital Report</p>
          <h2 className="text-3xl font-bold mb-4">The OSCA Digital Report</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">The OSCA does not end with a handwritten form or a tick-sheet. Our digital platform generates a full assessment report during the assessment and emails it to you the same day. The report gives you the evidence you need for compliance, procurement and internal records.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Full criteria map showing each assessed element and outcome',
              'Photographic and video evidence captured during the assessment',
              'GPS location data and time and date stamps for every assessment point',
              'Assessor commentary on each element',
              'Overall competency outcome: Competent, Development Required, or Not Yet Competent',
              'Coaching notes (coaching format only)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-border rounded-lg bg-card p-4">
                <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Format */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Assessment Format</p>
          <h2 className="text-3xl font-bold mb-4">Assessment Only or Assessment with Coaching</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">OSCA is available in two formats. You choose the approach that is right for your operatives and your programme.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg bg-card p-6">
              <h3 className="font-bold text-foreground mb-3">Assessment Only</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The assessor observes and records. Operatives are assessed against all criteria without intervention. The digital report is generated and emailed on the same day. This format is typically used for compliance verification and periodic competency checks.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-6">
              <h3 className="font-bold text-foreground mb-3">Assessment with Coaching</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The assessor observes, records, and intervenes where required. Each intervention is logged as a coaching record. This format is typically used where operatives are known to have specific development needs, or as part of a structured improvement programme following an incident.</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mt-4">Both formats use the same digital platform and produce the same structured report.</p>
        </div>
      </section>

      {/* How OSCA Works On the Day */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">On the Day</p>
          <h2 className="text-3xl font-bold mb-8">How OSCA Works On the Day</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Pre-Assessment Briefing', desc: 'The Sygma assessor arrives on site and briefs the operatives. The assessment scope, criteria, and format are explained. No surprises.' },
              { step: '2', title: 'Live Observation', desc: 'The assessor observes operatives during normal site operations. Equipment use, Genny deployment, signal interpretation, depth readings, and safe digging practice are all assessed against the structured criteria set.' },
              { step: '3', title: 'Real-Time Digital Capture', desc: 'Every assessment element is recorded digitally using the OSCA platform. Photographic and video evidence, GPS location data, and time stamps are captured as the assessment progresses.' },
              { step: '4', title: 'Coaching Interventions (if selected)', desc: 'In the coaching format, the assessor intervenes where required and logs each coaching record. This is used for operatives with known development needs or as part of a structured improvement programme.' },
              { step: '5', title: 'Same-Day Report Delivery', desc: 'The full OSCA digital report is generated during the assessment and emailed to you the same day. No waiting. No follow-up paperwork.' },
            ].map((item) => (
              <div key={item.step} className="border border-border rounded-lg bg-card p-5 flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-black text-sm">{item.step}</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Digging Add-On */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Safe Digging</p>
          <h2 className="text-3xl font-bold mb-4">OSCA Safe Digging Add-On</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">The OSCA safe digging module extends the assessment to cover hand excavation technique, spotter positioning, and excavation risk management. It takes approximately 45 minutes per operative and produces a separate section in the digital report.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">Hand-Digging Technique</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Assessment of correct hand-dig methods near buried services, tool selection, and approach angle.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">Spotter Positioning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Where the spotter stands, what they observe, and how they communicate with the operative during excavation.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">Excavation Risk Management</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Decision-making when a service is exposed. What to do when something unexpected appears in the trench.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why OSCA Is Different */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Why OSCA</p>
          <h2 className="text-3xl font-bold mb-8">Why OSCA Is Different</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'It happens on your site', body: 'Not in a classroom. Not on a training rig. OSCA assesses what your operatives actually do, in the conditions they actually work in.' },
              { title: 'It is criteria-mapped', body: 'Every element is assessed against a structured criteria set. The report shows exactly what was assessed and the outcome for each element.' },
              { title: 'It produces evidence, not opinion', body: 'GPS location, time stamps, photographic and video evidence. The OSCA report is an auditable record, not a subjective impression.' },
              { title: 'It fills the gap certificates cannot', body: 'A 3-year certificate tells you nothing about month 18. OSCA gives you verifiable evidence of current competency between training cycles.' },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is OSCA For */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Who Is It For</p>
          <h2 className="text-3xl font-bold mb-6">Who Is OSCA For?</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Tier 1 and Tier 2 contractors with large utility location workforces',
              'Utility network operators managing field team competency between training cycles',
              'Health and safety managers who need auditable evidence of operative competency',
              'Procurement leads who need to demonstrate competency assurance to clients',
              'Organisations that have experienced a utility strike or near-miss',
              'Any business that employs or contracts operatives who locate utilities as part of their work',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-border rounded-lg bg-card p-4">
                <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-border rounded-lg bg-muted/30 p-5">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Book a Free OSCA Demonstration</h2>
          <p className="text-primary-foreground/75 mb-6 leading-relaxed">We will walk you through the assessment process, show you a sample report, and discuss how OSCA fits into your competency management programme. No obligation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#enquiry-form"
              className="inline-block px-6 py-3 rounded-md bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90"
            >
              Book a Free Demonstration
            </Link>
            <a
              href="mailto:osca@sygma-solutions.com"
              className="inline-block px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10"
            >
              Email osca@sygma-solutions.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
