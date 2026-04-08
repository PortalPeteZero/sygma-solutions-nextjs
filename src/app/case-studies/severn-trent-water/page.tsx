import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Severn Trent | EUS Training Case Study | Sygma',
  description: 'How Sygma designed a 2-day bespoke manager training programme for Severn Trent Water built around their policies, procedures, and operational requirements.',
  alternates: { canonical: 'https://sygma-solutions.com/case-studies/severn-trent-water' },
  openGraph: {
    title: 'Severn Trent | EUS Training Case Study | Sygma',
    description: 'How Sygma designed a 2-day bespoke manager training programme for Severn Trent Water built around their policies, procedures, and operational requirements.',
    url: 'https://sygma-solutions.com/case-studies/severn-trent-water',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

const outcomes = [
  { outcome: "Managers understand their specific legal and operational duties under Severn Trent procedures", how: "Content is built around Severn Trent's own policies, not generic frameworks. Managers leave with clarity on where their responsibility sits within the Severn Trent management chain." },
  { outcome: "Competency is assessed, not assumed", how: "Structured assessment activities across both days produce documented evidence, not just a certificate of attendance." },
  { outcome: "Strike investigation capability is embedded at management level", how: "Managers practise the investigation process using realistic water sector scenarios. USAG form completion is assessed, not optional." },
  { outcome: "CAT Manager data becomes a management tool, not just a record", how: "Managers leave with the ability to interpret fleet data and act on it, raising the standard of their oversight role." },
  { outcome: "Group size enables real depth", how: "Six delegates maximum means every manager is assessed individually and professionally discussed. No one is lost in the group." },
  { outcome: "Honest feedback data reaches the right people", how: "QR-code feedback system ensures Severn Trent receives unfiltered delegate responses, not post-training recollections." },
];

const programme = [
  { module: "Severn Trent Policies and Procedures", detail: "Management-level content built around Severn Trent's own H&S policies, reporting chains, and site protocols. Managers work through the actual Severn Trent documentation rather than generic industry frameworks." },
  { module: "Utility Avoidance at Management Level", detail: "The specific responsibilities of a site manager or supervisor overseeing utility avoidance work. What managers are required to know, what they are required to check, and what they are required to do when procedures are not being followed correctly." },
  { module: "CAT Manager Data Analysis", detail: "How to interpret and act on CAT Manager fleet data from a management perspective. Managers learn to identify patterns in equipment usage, missed Genny deployment, and operative behaviour from the data rather than from observation alone." },
  { module: "Utility Strike Investigation", detail: "How a strike investigation should be conducted at management level. What the manager's responsibilities are when a strike occurs on their site, and how the Severn Trent internal reporting process should be managed." },
  { module: "USAG Form Completion", detail: "Structured assessment activity where delegates complete the USAG (Utility Strike Analysis Group) form using a realistic scenario drawn from the utility water sector. Completion is assessed: correct, complete, and timely form submission is the standard required." },
];

export default function CaseStudySevernTrent() {
  return (
    <>
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 flex flex-col justify-end p-8 md:p-12">
          <div className="eyebrow text-blue-400 mb-2">Case Study</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">Severn Trent Water: 2-Day Bespoke Manager Training</h1>
          <p className="text-lg text-gray-300 max-w-3xl">How Sygma designed and delivered a 2-day management training and assessment programme built around Severn Trent's own policies and procedures.</p>
          <nav className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/bespoke-training" className="text-gray-400 hover:text-white transition-colors">Bespoke Training</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Severn Trent Water</span>
          </nav>
        </div>
      </div>

      {/* Summary panel */}
      <section className="border-b border-gray-200 bg-gray-50 py-10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Client", value: "Severn Trent Water" },
              { label: "Programme", value: "2-Day Bespoke Manager Training and Assessment" },
              { label: "Audience", value: "Site managers and supervisors (max 6 delegates)" },
              { label: "Format", value: "Flexible classroom and practical split" },
              { label: "Key elements", value: "Severn Trent-specific policies, strike investigation, USAG form, CAT Manager data analysis" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="mb-1 eyebrow text-blue-600">{item.label}</p>
                <p className="text-sm font-medium text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden">
        <Image src="Safe-Dig-05" width={1200} height={800} alt="Severn Trent Water manager-level training on utility avoidance" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-center" />
      </div>

      {/* The Brief */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 eyebrow text-blue-600">The Brief</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-gray-900">The Brief from Severn Trent Water</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>Severn Trent Water is one of the UK's largest water and wastewater companies, responsible for a vast network of buried infrastructure across the Midlands and beyond. With contractors and internal teams regularly working in proximity to these assets, utility avoidance at the management level is not just a training requirement. It is a critical operational and legal responsibility.</p>
            <p>Severn Trent's requirement was distinct from an operative refresher course. Their site managers and supervisors needed a programme that addressed their specific role: overseeing utility avoidance on site, managing operatives using CAT and Genny equipment, responding correctly to utility strikes, and understanding Severn Trent's own policies and procedures in detail.</p>
            <p>The programme also needed to incorporate assessment. Severn Trent wanted evidence that managers had demonstrated competency, not just attended a course. And with experienced managers who have limited time, the group size needed to be kept small enough to allow meaningful assessment: a maximum of six delegates per cohort.</p>
          </div>
        </div>
      </section>

      {/* What Sygma Designed */}
      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 eyebrow text-blue-600">What Sygma Designed</p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-gray-900">What Sygma Designed</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">Sygma Solutions worked with Severn Trent's H&S and L&D teams to design a 2-day manager training and assessment programme. The programme uses a flexible classroom and practical split: the balance of time spent in each environment is adapted based on the delegate group and the site conditions available on the delivery dates.</p>
          <p className="mb-8 text-gray-600 leading-relaxed">Across the two days, managers progress through Severn Trent-specific content, practical review sessions, and structured assessment activities that produce documented competency evidence.</p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
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

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Group size:</span> This programme is designed for a maximum of 6 delegates. The small group size is deliberate. It enables meaningful practical assessment and professional discussion with each manager, rather than a delivery format that favours throughput over depth.
          </div>
        </div>
      </section>

      {/* Image Grid - Manager Training */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-4">
            <Image src="CAT4-and-Genny-06" width={1200} height={800} alt="Severn Trent Water managers during practical assessment session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
            <Image src="Safe-Dig-10" width={1200} height={800} alt="Severn Trent Water managers learning safe digging procedures" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
            <Image src="CAT4-and-Genny-07" width={1200} height={800} alt="Severn Trent Water group discussion in training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 eyebrow text-blue-600">How It Works</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-gray-900">How It Works in Practice</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>The flexible classroom and practical split means the programme adapts to what is available on the delivery dates. Where a suitable practical site or training yard is accessible, more time is allocated to practical assessment. Where classroom delivery is the only option, the balance shifts accordingly, without losing the assessment rigour.</p>
            <p>Delivery can take place at Severn Trent facilities, on a managed practical site, or at Sygma's Wigan Training Centre. All options are discussed and agreed at programme design stage.</p>
            <p>Every delegate completes Sygma's QR-code feedback form at the end of each day. Trainer scores remain private until the following working day. Severn Trent's L&D and H&S team receives a full group report. The programme produces documented assessment evidence for each delegate, available as a training record for Severn Trent's compliance systems.</p>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <Image src="Safe-Dig-14" width={1200} height={800} alt="Severn Trent Water utility avoidance site training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-56" width={1200} height={800} alt="Manager-level cable detection demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="Safe-Dig-02" width={1200} height={800} alt="Safe digging practices water network training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Outcomes */}
      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 eyebrow text-blue-600">Outcomes</p>
          <h2 className="mb-8 text-3xl font-black tracking-tight text-gray-900">Key Outcomes for Severn Trent Water</h2>
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
          <h2 className="mb-4 text-3xl font-black tracking-tight text-gray-900">Need Manager-Level Utility Training Built Around Your Organisation?</h2>
          <p className="mb-8 text-gray-600 leading-relaxed">The Severn Trent programme shows what is possible when training is built around management-level responsibilities, company-specific policies, and proper competency assessment. If your organisation operates in the water, utilities, or infrastructure sector and needs something beyond a standard refresher, we can design it.</p>
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
              { label: "Kier Group Case Study", desc: "1-day refresher with CAT Manager integration and peer coaching assessment.", href: "/case-studies/kier-group" },
              { label: "OSCA On-Site Competency Assessment", desc: "GPS-stamped, photo-verified competency assessment for water sector contractors.", href: "/osca" },
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
