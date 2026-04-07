import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cable Avoidance Training Manchester | Sygma Solutions',
  description: 'Cable avoidance training in Manchester and the North West. EUSR, ProQual and CAT and Genny courses delivered at your site. Independent specialist.',
  alternates: { canonical: 'https://sygma-solutions.com/cable-avoidance-training-manchester' },
  openGraph: {
    title: 'Cable Avoidance Training Manchester | Sygma Solutions',
    description: 'Cable avoidance training in Manchester and the North West. EUSR, ProQual and CAT and Genny courses delivered at your site. Independent specialist.',
    url: 'https://sygma-solutions.com/cable-avoidance-training-manchester',
    siteName: 'Sygma Solutions',
    type: 'website',
  },
};

export default function CableAvoidanceManchester() {
  return (
    <>
      <div className="relative w-full h-96 overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
        <div className="flex flex-col justify-end p-8 md:p-12 h-full">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Utility Avoidance</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">Cable Avoidance Training Manchester | Nationwide Delivery, Local Experience</h1>
          <p className="text-lg text-gray-300 max-w-3xl">Sygma Solutions delivers cable avoidance and utility location training at your site in Manchester and across the North West. Based in Wigan, our specialist trainers have been delivering on sites across Greater Manchester for over 21 years. We travel to you. No travel costs for your team, no lost site time.</p>
          <nav className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/locations" className="text-gray-400 hover:text-white transition-colors">Locations</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Manchester</span>
          </nav>
        </div>
      </div>

      {/* Stats bar */}
      <section className="bg-gray-50 border-y border-gray-200 py-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {['21 Years in Business', '70,000 Utility Strikes Per Year in the UK', 'CITB Approved Training Organisation'].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                <span className="text-sm font-semibold text-gray-900">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses section */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">What We Deliver</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-gray-900">Courses We Deliver in Manchester</h2>
        <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">We deliver the following courses at your premises across Manchester, Salford, Stockport, Bury, Bolton and the wider Greater Manchester area. All courses are private, in-house sessions. You choose the date. We bring the equipment and assessors.</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="text-left px-5 py-3 font-bold">Course</th>
                <th className="text-left px-5 py-3 font-bold hidden md:table-cell">Duration</th>
                <th className="text-left px-5 py-3 font-bold">Most Suitable For</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: 'CAT and Genny Training (In-House Certificate)', href: '/courses/cable-avoidance-training', duration: '1 day', suitable: 'Operatives new to cable avoidance. Site-level competency with Sygma in-house certificate.' },
                { course: 'EUS CAT1 (EUSR Category 1)', href: '/courses/eus-cat1', duration: '1 day', suitable: 'Teams that need EUSR card accreditation. Industry-standard cable avoidance qualification.' },
                { course: 'ProQual CAT1 (Accredited by ProQual Accreditations)', href: '/courses/proqualcat1-training', duration: '1 day', suitable: 'Teams requiring a higher assessment standard. Individually mapped, externally verified by ProQual Accreditations.' },
                { course: 'ProQual CAT1 Plus (Most Advanced Available)', href: '/courses/proqualcat1plus', duration: '2 days', suitable: 'Operatives in complex, high-risk environments. The most advanced cable avoidance qualification in the UK.' },
                { course: 'ProQual CAT2 (Safe Digging Practices)', href: '/courses/proqualcat2', duration: '1 day', suitable: 'Teams that also excavate. ProQual CAT2 covers the safe excavation element alongside CAT1 or CAT1 Plus.' },
              ].map((row, i) => (
                <tr key={row.course} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-5 py-3 font-semibold text-gray-900"><Link href={row.href} className="text-blue-600 hover:underline">{row.course}</Link></td>
                  <td className="px-5 py-3 text-gray-600 hidden md:table-cell">{row.duration}</td>
                  <td className="px-5 py-3 text-gray-600">{row.suitable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/CAT4-and-Genny-41.webp" alt="Locator training practical exercise Manchester" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/Safe-Dig-10.webp" alt="Safe excavation techniques North West training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/CAT4-and-Genny-56.webp" alt="Signal identification during cable avoidance course" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
      </div>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><img loading="lazy" src="/images/courses/CAT4-and-Genny-09.webp" alt="CAT and Genny training in Manchester" className="w-full h-full object-cover object-center" /></div>

      {/* Why on-site */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">On-Site Delivery</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-gray-900">Why Manchester Teams Choose On-Site Training</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
            <p>Getting operatives off-site to a training venue is a cost and a logistical problem for most Manchester contractors. On-site training removes both.</p>
            <p>Your team trains on the ground they work on, using their own procedures and site environment. The training is immediately relevant. There is no 'transfer gap' between the classroom and the real job.</p>
            <p>Sygma brings all equipment, training materials and assessment paperwork. You provide the space, the team, and the date. We do the rest.</p>
            <p>For Manchester-based principal contractors and utility firms, Sygma's base in Wigan means a trainer on your site first thing in the morning without an early start surcharge.</p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><img loading="lazy" src="/images/courses/CAT4-and-Genny-10.webp" alt="Utility detection Manchester North West training" className="w-full h-full object-cover object-center" /></div>

      {/* CITB Funding */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Funding</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-gray-900">CITB Funding for Manchester Contractors</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
          <p>Sygma Solutions is a CITB Approved Training Organisation. If your business is registered with CITB, you may be able to access funding support towards eligible training costs through the CITB Employer Network model.</p>
          <p>Speak to your CITB Employer Network adviser about funding for this training, or contact Sygma and we can guide you through the process.</p>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/CAT4-and-Genny-68.webp" alt="Assessment exercise Manchester cable avoidance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/Safe-Dig-18.webp" alt="Digging safely near buried services practical" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/CAT4-and-Genny-52.webp" alt="North West team completing utility training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
      </div>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><img loading="lazy" src="/images/courses/CAT4-and-Genny-06.webp" alt="Manchester team cable avoidance practical assessment" className="w-full h-full object-cover object-center" /></div>

      {/* FAQs */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-gray-900">Questions About Training in Manchester</h2>
          <div className="space-y-4">
            {[
              { q: 'Do you deliver training in Manchester?', a: 'Yes. Sygma Solutions delivers cable avoidance and utility location training at client sites across Manchester and the wider North West. We are based in Wigan, approximately 17 miles from Manchester city centre, and have been delivering on Manchester sites for over 21 years.' },
              { q: 'What is the travel cost for training in Manchester?', a: "There is no travel surcharge for Manchester. Sygma's base in Wigan means we are within easy reach of Greater Manchester. Travel costs for Manchester deliveries are included in the course price. Contact us to confirm costs for your specific location." },
              { q: 'Can you deliver at our depot in Manchester?', a: 'Yes. Most Sygma training is delivered at the client\'s own premises (depots, sites, training rooms or open yard space). We bring all equipment and assessment materials. You need to provide a suitable area for the practical assessment element. Contact us to discuss your facilities.' },
              { q: 'Is CITB grant available for cable avoidance training in Manchester?', a: 'CITB-registered businesses may be able to access funding support through the CITB Employer Network model. Sygma is a CITB Approved Training Organisation. Speak to your CITB Employer Network adviser, or contact Sygma for guidance.' },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-lg p-6 bg-white">
                <h3 className="font-bold text-gray-900 mb-3">{q}</h3>
                <p className="text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training in Other Regions */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Other Regions</p>
        <h2 className="text-2xl font-black mb-6 text-gray-900">Cable Avoidance Training Across the UK</h2>
        <p className="text-gray-600 mb-6 max-w-3xl leading-relaxed">Sygma delivers on-site cable avoidance and CAT and Genny training UK-wide. See our regional training guides:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/cable-avoidance-training-london" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Cable Avoidance Training London</Link>
          <Link href="/cable-avoidance-training-birmingham" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Cable Avoidance Training Birmingham</Link>
          <Link href="/cable-avoidance-training-scotland" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Cable Avoidance Training Scotland</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 border-y border-gray-200 py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-gray-900">Get a Manchester Training Quote</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Tell us what your team needs and when. We will confirm availability and send a quote within one working day.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">Get a Manchester Training Quote</Link>
            <a href="tel:+442039718252" className="inline-flex items-center px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors">Call Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
