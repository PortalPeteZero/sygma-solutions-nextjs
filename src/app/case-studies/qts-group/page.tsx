import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'QTS Group | Utility Training Case Study | Sygma',
  description: 'How Sygma designed a rail-specific CAT4 training programme for QTS Group, incorporating surface laid cables and ZSI Super User Coach training.',
  alternates: { canonical: 'https://sygma-solutions.com/case-studies/qts-group' },
  openGraph: {
    title: 'QTS Group | Utility Training Case Study | Sygma',
    description: 'How Sygma designed a rail-specific CAT4 training programme for QTS Group, incorporating surface laid cables and ZSI Super User Coach training.',
    url: 'https://sygma-solutions.com/case-studies/qts-group',
    siteName: 'Sygma Solutions',
    type: 'website',
  },
};

const outcomes = [
  { outcome: "Operatives are specifically trained for surface laid cable risks", how: "The surface laid cables module is built around QTS's own toolbox talk (QTS/SS/2022), not a generic add-on." },
  { outcome: "Competency is assessed, not assumed", how: "Multiple choice assessment with 70% pass mark produces documented evidence of competency for each delegate." },
  { outcome: "Visual inspection becomes a habit, not an afterthought", how: "The visual inspection session is a discrete, structured component. Operatives learn what to look for before any equipment is deployed." },
  { outcome: "ZSI is maintained from the inside", how: "Super User Coaches can administer, support, and audit the ZSI system internally, reducing dependence on external support and improving system compliance." },
  { outcome: "QTS-specific documentation is embedded throughout", how: "QTS toolbox talk materials and procedures run through the programme. Operatives are not translating from a generic template into their actual working environment." },
];

const programme = [
  { module: "Buried Service Plans (STATS)", detail: "Operatives learn to interpret and understand different types of service plans, including the limitations of plans, what they show and what they do not show, and how to use plans correctly as the starting point of a pre-excavation check process." },
  { module: "QTS Toolbox Talk: Surface Laid Cables (QTS/SS/2022)", detail: "QTS's own toolbox talk reference material is integrated directly into the training. Operatives are walked through the QTS-specific guidance on surface laid cable identification, risk assessment, and safe approach. This is not a generic module. It is built around QTS's own documentation." },
  { module: "Visual Inspection of the Whole Work Area", detail: "A structured approach to visual inspection before any work is undertaken. Operatives learn what to look for (surface cables, troughing, marker systems, existing damage) and how to record and report what they find." },
  { module: "USAG Strike Report: Causes of Strikes", detail: "Review of the causes of utility strikes as captured in USAG data. Delegates are walked through the patterns of how and why strikes happen, including the specific risk factors relevant to surface laid cables." },
  { module: "Electromagnetic Theory and CAT4 Operation", detail: "How a pipe and cable locator works: theory, limitations, and correct operation in all modes. Strong emphasis on Genny4 use and verifying equipment is functioning correctly before deployment. Includes dual frequency operation, capacitance-based cable location, effective Genny earthing methods, blind induction search, and nulling." },
  { module: "CAT4 Signal Interpretation", detail: "How to interpret the signal to locate service joints, depth changes, and direction changes. Strike Alert function. The practical implications of signal interpretation in a rail environment where cable geometry may be unusual." },
  { module: "Causes of Surface Laid Cable Damage", detail: "A specific session on the mechanisms by which surface laid cables are damaged and the behaviours that cause those damage events. Operatives learn to identify the risk behaviours and understand why each one leads to damage." },
  { module: "Site Practical (Equipment Operation and Locating)", detail: "Operatives apply their classroom learning on a suitable site with buried metallic utilities. They locate services from plans and visual inspection, operate equipment in all modes, use the Genny correctly in rail-relevant configurations, and locate problem services including small communications cables." },
  { module: "Multiple Choice Assessment", detail: "All delegates sit a multiple choice question (MCQ) assessment. Minimum pass mark: 70 per cent. Operatives with dyslexia or reading difficulties are permitted to sit an aural assessment. Assessment results are documented and provided to QTS as training records." },
];

export default function CaseStudyQts() {
  return (
    <>
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 flex flex-col justify-end p-8 md:p-12">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Case Study</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">QTS Group: CAT4, Surface Laid Cables and ZSI Super User Training</h1>
          <p className="text-lg text-gray-300 max-w-3xl">How Sygma designed a rail-specific CAT4 programme incorporating QTS's own toolbox talk materials, a specialist surface laid cables module, and ZSI Super User Coach delivery.</p>
          <nav className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/bespoke-training" className="text-gray-400 hover:text-white transition-colors">Bespoke Training</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">QTS Group</span>
          </nav>
        </div>
      </div>

      {/* Summary panel */}
      <section className="border-b border-gray-200 bg-gray-50 py-10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Client", value: "QTS Group" },
              { label: "Programme", value: "CAT4 and Genny4: Surface Laid Cables Specialist Module + ZSI Super User Coach delivery" },
              { label: "Audience", value: "Operatives and Super User Coaches (rail environments, up to 8 delegates)" },
              { label: "Format", value: "Classroom and site practical: 1 day" },
              { label: "Key elements", value: "Surface laid cable risks, QTS toolbox talk integration, ZSI procedures, MCQ assessment with 70% pass mark" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">{item.label}</p>
                <p className="text-sm font-medium text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden">
        <Image src="CAT4-and-Genny-07" width={1200} height={800} alt="QTS Group surface laid cables training in rail environment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-center" />
      </div>

      {/* The Brief */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">The Brief</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-gray-900">The Brief from QTS Group</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>QTS Group is a major rail infrastructure contractor operating across the UK. Like all rail contractors working on or near live infrastructure, QTS operatives work in an environment where buried utilities and surface laid cables are a constant presence, often in conditions that are very different from standard civil engineering or construction sites.</p>
            <p>The specific challenge for QTS was the surface laid cable risk. Rail environments frequently involve cables that are not buried. They run along the surface of the track bed, through troughing, or across work areas in configurations that standard buried utility training does not adequately address. Operatives trained only in how to locate buried services can miss surface laid cables because they are not looking in the right places or applying the right visual inspection process.</p>
            <p>QTS required a programme that went beyond standard CAT4 and Genny4 training to incorporate a specialist surface laid cables module built specifically around QTS's own toolbox talk reference materials and operating environment. The programme also needed to incorporate ZSI (ZoneSafe Induction) procedures and Super User Coach delivery for the internal champions responsible for administering and supporting the ZSI system across the QTS fleet.</p>
          </div>
        </div>
      </section>

      {/* What Sygma Designed */}
      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">What Sygma Designed</p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-gray-900">What Sygma Designed</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">Sygma Solutions designed a 1-day bespoke programme for QTS combining the full CAT4 and Genny4 operational training with a specialist surface laid cables module. The programme runs across classroom and site practical sessions and includes a written assessment with a minimum pass mark of 70 per cent.</p>
          <p className="mb-8 text-gray-600 leading-relaxed">Separately, Sygma delivered ZSI Super User Coach training for QTS's internal ZSI champions, ensuring QTS has the capability to administer, configure, and support the ZSI system internally, and to coach operatives in correct ZSI procedures.</p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-5 py-3 text-left font-bold text-gray-900 w-1/3">Module</th>
                  <th className="px-5 py-3 text-left font-bold text-gray-900">Detail</th>
                </tr>
              </thead>
              <tbody>
                {programme.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 last:border-0">
                    <td className="px-5 py-4 font-semibold text-gray-900 align-top">{row.module}</td>
                    <td className="px-5 py-4 text-gray-600 align-top">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">ZSI Super User Coach Delivery</p>
            <p className="text-sm text-gray-700 leading-relaxed">Sygma also delivered ZSI Super User Coach training for QTS's internal champions. This component covered ZSI system administration and configuration, ZoneSafe clampon golden rules for operatives, the Super User Coach role in supporting operatives and reporting faults, record keeping and fleet audit requirements, and how to brief and re-brief operatives on ZSI procedures.</p>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">Super User Coaches are the internal backbone of a ZSI deployment. Without trained coaches who understand the system deeply enough to support, troubleshoot, and audit it, ZSI systems underperform and the safety benefits are not fully realised.</p>
          </div>
        </div>
      </section>

      {/* Image Grid - QTS Training in Action */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-4">
            <Image src="CAT4-and-Genny-08" width={1200} height={800} alt="QTS Group operatives practising CAT and Genny in rail environment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
            <Image src="CAT4-and-Genny-09" width={1200} height={800} alt="QTS Group rail infrastructure utility avoidance training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
            <Image src="CAT4-and-Genny-10" width={1200} height={800} alt="QTS Group delegates in written assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">How It Works</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-gray-900">How It Works in Practice</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>The surface laid cables course is delivered across one day, typically starting at 9:00 am and finishing at approximately 3:30 pm. Course timings remain fluid based on delegate group needs and site access conditions.</p>
            <p>Up to 8 delegates can be accommodated per cohort. The course requires a suitable practical site with buried metallic utilities accessible near the classroom location. Where QTS cannot provide a suitable site, Sygma can arrange an appropriate site at a cost agreed in advance. Equipment requirements: each operative requires their own CAT4, plus one Genny4 per course.</p>
            <p>Delivery can take place at QTS facilities, on a managed practical site near the training venue, or at Sygma's Wigan Training Centre. All delegates complete Sygma's QR-code feedback form at the end of the day. QTS receives a full group report. Assessment results form part of each delegate's documented training record.</p>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-48" width={1200} height={800} alt="Rail environment utility avoidance training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-62" width={1200} height={800} alt="Cable detection equipment used in rail infrastructure" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="Safe-Dig-16" width={1200} height={800} alt="Safe excavation training for rail contractors" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Outcomes */}
      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">Outcomes</p>
          <h2 className="mb-8 text-3xl font-black tracking-tight text-gray-900">Key Outcomes for QTS Group</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-5 py-3 text-left font-bold text-gray-900 w-2/5">Outcome</th>
                  <th className="px-5 py-3 text-left font-bold text-gray-900">How the Programme Delivers It</th>
                </tr>
              </thead>
              <tbody>
                {outcomes.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 last:border-0">
                    <td className="px-5 py-4 font-semibold text-gray-900 align-top">{row.outcome}</td>
                    <td className="px-5 py-4 text-gray-600 align-top">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 py-20">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-gray-900">Need Training Built for Your Sector-Specific Risks?</h2>
          <p className="mb-8 text-gray-600 leading-relaxed">The QTS programme demonstrates how bespoke training can address risks that generic courses cannot. If your operatives work in a rail environment, a utility network, or any other sector with specific utility risk factors that standard training misses, we can build a programme around your exact requirements.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact#enquiry-form" className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow hover:bg-blue-700 transition-colors">
              Get in Touch
            </Link>
            <Link href="/bespoke-training" className="rounded-lg border border-gray-200 px-7 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-blue-600">Also See</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Kier Group Case Study", desc: "1-day refresher with company-specific policies and CAT Manager integration.", href: "/case-studies/kier-group" },
              { label: "OSCA On-Site Competency Assessment", desc: "On-site competency assessment for operatives working in rail and infrastructure environments.", href: "/osca" },
              { label: "Bespoke Training", desc: "How Sygma designs custom training programmes for organisations.", href: "/bespoke-training" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-600 transition-colors">
                <p className="mb-1 text-sm font-semibold text-gray-900">{item.label}</p>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
