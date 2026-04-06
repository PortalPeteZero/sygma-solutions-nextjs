import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cable Avoidance Training London | CAT and Genny Courses',
  description: 'Cable avoidance training in London. CAT and Genny courses at your site. Half day and full day options. EUSR, ProQual accredited. CITB ATO.',
  alternates: {
    canonical: 'https://sygma-solutions.com/cable-avoidance-training-london',
  },
  openGraph: {
    title: 'Cable Avoidance Training London | CAT and Genny Courses',
    description: 'Cable avoidance training in London. CAT and Genny courses at your site. Half day and full day options. EUSR, ProQual accredited. CITB ATO.',
    url: 'https://sygma-solutions.com/cable-avoidance-training-london',
    siteName: 'Sygma Solutions',
    type: 'website',
  },
};

export default function CableAvoidanceLondon() {
  return (
    <>
      <div className="relative w-full h-96 overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
        <div className="flex flex-col justify-end p-8 md:p-12 h-full">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Utility Avoidance</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">Cable Avoidance Training London | Nationwide Delivery, London Experienced</h1>
          <p className="text-lg text-gray-300 max-w-3xl">Sygma Solutions delivers cable avoidance training and practical CAT and Genny equipment instruction at your site in London and across the South East. With 21 years delivering on capital projects, infrastructure sites and contractor premises nationwide, our specialist trainers come to you. Choose full day or half day training to suit your schedule. No travel costs for your team, no lost site time.</p>
          <nav className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/locations" className="text-gray-400 hover:text-white transition-colors">Locations</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">London</span>
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
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-gray-900">Courses We Deliver in London and the South East</h2>
        <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">We deliver the following genny training courses and cable avoidance instruction at your premises across London, the M25 corridor and the wider South East. All courses are private, in-house sessions delivered with hands-on practical training using genuine CAT and Genny equipment. You choose the date. We bring the cable avoidance tools, signal generators and assessors. Each course teaches your operatives to correctly operate underground service detection equipment in real site conditions.</p>
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
                { course: 'CAT and Genny Training (In-House Certificate)', href: '/courses/cable-avoidance-training', duration: '1 day', suitable: 'Operatives new to cable avoidance training. Practical CAT and Genny instruction with Sygma in-house certificate issued same day.' },
                { course: 'EUS CAT1 (EUSR Category 1)', href: '/courses/eus-cat1', duration: '1 day', suitable: 'Teams that need EUSR card certification. Industry-standard cable avoidance qualification covering CAT and Genny operation and safety guidance.' },
                { course: 'ProQual CAT1 (Accredited by ProQual Accreditations)', href: '/courses/proqualcat1-training', duration: '1 day', suitable: 'Teams requiring a higher assessment standard for cable avoidance. Individually mapped, externally verified by ProQual Accreditations. Theory and practical assessment.' },
                { course: 'ProQual CAT1 Plus (Most Advanced Available)', href: '/courses/proqualcat1plus', duration: '2 days', suitable: 'Operatives in complex, high-risk environments. The most advanced cable avoidance qualification in the UK.' },
                { course: 'Advanced Electromagnetic Location', href: '/courses/advanced-em-locator', duration: '1 day', suitable: 'Experienced operatives. Using the RD8200 and related locators to their full capability.' },
                { course: 'OSCA (On-Site Competency Assessment)', href: '/osca', duration: 'Half day or full day', suitable: 'Organisations that need to verify actual site competency between training cycles. Independent assessment of your team.' },
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
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/CAT4-and-Genny-46.webp" alt="Operative scanning with CAT4 on London site" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/CAT4-and-Genny-60.webp" alt="Genny signal application during cable avoidance training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><img loading="lazy" src="/images/courses/Safe-Dig-14.webp" alt="Safe digging practice near London underground services" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
      </div>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><img loading="lazy" src="/images/courses/CAT4-and-Genny-06.webp" alt="CAT and Genny training in London" className="w-full h-full object-cover object-center" /></div>

      {/* Why on-site */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">On-Site Delivery</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-gray-900">Why London Teams Choose On-Site Training</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
            <p>London has the most complex underground utility infrastructure in the UK. The sheer density of buried services beneath every street, combined with ongoing capital investment in construction projects across the city, means the consequences of a utility strike are severe and the demand for properly competent operatives and trained cable avoidance operators is constant. Locating underground services safely is non-negotiable on any London construction site.</p>
            <p>On-site CAT and Genny training in London means your operatives learn to correctly operate cable avoidance tools and signal generator equipment in the environment they actually work in. Not a training venue somewhere outside the M25. Your site, your procedures, your specific ground conditions, your cable routes and service layouts.</p>
            <p>Sygma delivers at client premises across all London boroughs, the M25 corridor and the wider South East. Available for full day or half day training sessions to fit your schedule.</p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><img loading="lazy" src="/images/courses/CAT4-and-Genny-07.webp" alt="London utility avoidance training site conditions" className="w-full h-full object-cover object-center" /></div>

      {/* CITB Funding */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Funding</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-gray-900">CITB Funding for Cable Avoidance Training in London</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
          <p>Sygma Solutions is a CITB Approved Training Organisation. If your construction business is registered with CITB, you may be able to access funding support towards eligible cable avoidance training and genny training course costs through the CITB Employer Network model.</p>
          <p>Speak to your CITB Employer Network adviser about funding for this training, or contact Sygma and we can guide you through the process.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-gray-900">Questions About CAT and Genny Training in London</h2>
          <div className="space-y-4">
            {[
              { q: 'What is CAT and Genny training?', a: 'CAT and Genny training teaches your operatives to safely operate cable avoidance tools and signal generators on site. The CAT4 is the industry-standard cable avoidance tool with four locating modes. The Genny is a signal generator used to apply a radio frequency to cables and pipes for precise location.' },
              { q: 'Can we do a half day cable avoidance training course in London?', a: 'Yes. We offer flexible half day training sessions for London teams with tight schedules. Half day cable avoidance courses cover core competency in CAT and Genny operation, practical instruction, and site-specific assessment.' },
              { q: 'Do you deliver cable avoidance training in London?', a: 'Yes. Sygma Solutions delivers cable avoidance and CAT and Genny training at client sites across London and the South East. We travel to your site and bring all CAT and Genny equipment, materials and assessment documentation.' },
              { q: 'What is the travel cost for training in London?', a: 'Travel costs for London deliveries are included in the course quote. Contact us with your site location and we will confirm the full cost. There are no hidden charges for cable avoidance training delivered anywhere in London or the South East.' },
              { q: 'Can you deliver at our depot or site in the South East?', a: 'Yes. Sygma delivers CAT and Genny training at client premises across London and the South East including depots, live construction sites, training rooms and open yard space. We bring all cable avoidance equipment, signal generators and assessment materials.' },
              { q: 'Is CITB funding available for cable avoidance training in London?', a: 'Sygma Solutions is a CITB Approved Training Organisation. CITB-registered businesses may be able to access funding for cable avoidance and genny training courses through the CITB Employer Network model.' },
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
          <Link href="/cable-avoidance-training-manchester" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Cable Avoidance Training Manchester</Link>
          <Link href="/cable-avoidance-training-birmingham" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Cable Avoidance Training Birmingham</Link>
          <Link href="/cable-avoidance-training-scotland" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Cable Avoidance Training Scotland</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 border-y border-gray-200 py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-gray-900">Get a Quote for CAT and Genny Training in London</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Tell us how many delegates need cable avoidance training, the course duration you need, and your preferred dates. We will confirm availability and send a quote within one working day.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">Get a London CAT and Genny Training Quote</Link>
            <a href="tel:+442039718252" className="inline-flex items-center px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors">Call Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
