import { faqPageSchema, breadcrumbSchema } from '@/lib/schema';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Cable Avoidance Training Birmingham | Sygma Solutions',
  description: 'Cable avoidance training in Birmingham and the West Midlands. EUSR, ProQual and CAT and Genny courses delivered at your site. Independent specialist.',
  alternates: { canonical: 'https://sygma-solutions.com/cable-avoidance-training-birmingham' },
  openGraph: {
    title: 'Cable Avoidance Training Birmingham | Sygma Solutions',
    description: 'Cable avoidance training in Birmingham and the West Midlands. EUSR, ProQual and CAT and Genny courses delivered at your site. Independent specialist.',
    url: 'https://sygma-solutions.com/cable-avoidance-training-birmingham',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function CableAvoidanceBirmingham() {
  return (
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "All Courses", to: "/courses" }, { label: "Cable Avoidance Training Birmingham" }]) }} />

      <>
      <div className="relative w-full h-96 overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
        <div className="flex flex-col justify-end p-8 md:p-12 h-full">
          <div className="eyebrow text-blue-400 mb-2">Utility Avoidance</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">Cable Avoidance Training Birmingham | Nationwide Delivery, West Midlands Experience</h1>
          <p className="text-lg text-gray-300 max-w-3xl">Sygma Solutions delivers cable avoidance and utility location training at your site in Birmingham and across the West Midlands. With a partner training venue at The Survey School in Worcester and 21 years delivering on sites nationwide, our specialist trainers come to you. No travel costs for your team, no lost site time.</p>
          <nav className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/locations" className="text-gray-400 hover:text-white transition-colors">Locations</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Birmingham</span>
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
        <p className="eyebrow text-blue-600 mb-3">What We Deliver</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-gray-900">Courses We Deliver in Birmingham and the West Midlands</h2>
        <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">We deliver the following courses at your premises across Birmingham, Coventry, Wolverhampton, Solihull, Walsall and the wider West Midlands area. All courses are private, in-house sessions. You choose the date. We bring the equipment and assessors.</p>
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
                { course: 'EUSR CAT1 (EUSR Category 1)', href: '/courses/eus-cat1', duration: '1 day', suitable: 'Teams that need EUSR card accreditation. Industry-standard cable avoidance qualification.' },
                { course: 'ProQual CAT1 (Accredited by ProQual Accreditations)', href: '/courses/proqualcat1-training', duration: '1 day', suitable: 'Teams requiring a higher assessment standard. Individually mapped, externally verified by ProQual Accreditations.' },
                { course: 'ProQual CAT1 Plus (Most Advanced Available)', href: '/courses/proqualcat1plus', duration: '2 days', suitable: 'Operatives in complex, high-risk environments. The most advanced cable avoidance qualification in the UK.' },
                { course: 'Advanced Electromagnetic Location', href: '/courses/advanced-em-locator', duration: '1 day', suitable: 'Experienced operatives. Using the RD8200 and related locators to their full capability.' },
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
        <div className="overflow-hidden rounded-lg"><Image src="CAT4-and-Genny-10" width={1200} height={800} alt="Operative using CAT4 locator during training in Birmingham" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><Image src="Safe-Dig-12" width={1200} height={800} alt="Safe excavation practice near buried utilities" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><Image src="CAT4-and-Genny-54" width={1200} height={800} alt="Signal tracing practical exercise West Midlands" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" /></div>
      </div>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><Image src="CAT4-and-Genny-03" width={1200} height={800} alt="CAT and Genny training in Birmingham" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-center" /></div>

      {/* Why on-site */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow text-blue-600 mb-3">On-Site Delivery</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-gray-900">Why Birmingham Teams Choose On-Site Training</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
            <p>Birmingham has some of the highest infrastructure investment and development activity in the UK. High volumes of utility work, HS2 enabling works and ongoing network upgrades mean the demand for competent, assessed utility location operatives is significant.</p>
            <p>On-site training in Birmingham means your operatives train in the environment they work in. Not a training centre 30 miles away. Your site, your procedures, your equipment environment.</p>
            <p>Our partner training venue at The Survey School in Worcester is available for small groups who prefer to come to us. But for most Birmingham businesses, we come to you.</p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><Image src="CAT4-and-Genny-43" width={1200} height={800} alt="Cable avoidance training Birmingham ground assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-center" /></div>

      {/* CITB Funding */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-blue-600 mb-3">Funding</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-gray-900">CITB Funding for West Midlands Contractors</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
          <p>Sygma Solutions is a CITB Approved Training Organisation. If your business is registered with CITB, you may be able to access funding support towards eligible training costs through the CITB Employer Network model.</p>
          <p>Speak to your CITB Employer Network adviser about funding for this training, or contact Sygma and we can guide you through the process.</p>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg"><Image src="CAT4-and-Genny-67" width={1200} height={800} alt="Cable avoidance assessment Birmingham training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><Image src="Safe-Dig-22" width={1200} height={800} alt="Excavation safety training with hand tools" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><Image src="CAT4-and-Genny-55" width={1200} height={800} alt="Team completing CAT and Genny certification" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" /></div>
      </div>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><Image src="CAT4-and-Genny-05" width={1200} height={800} alt="Utility location training equipment CAT and Genny" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-center" /></div>

      {/* FAQs */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow text-blue-600 mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-gray-900">Questions About Training in Birmingham</h2>
          <div className="space-y-4">
            {[
              { q: 'Do you deliver training in Birmingham?', a: "Yes. Sygma Solutions delivers cable avoidance and utility location training at client sites across Birmingham and the wider West Midlands. We also deliver at our partner training venue at The Survey School in Worcester, approximately 25 miles from Birmingham city centre, for groups who prefer to come to us." },
              { q: 'What is the travel cost for training in Birmingham?', a: 'Travel costs for Birmingham deliveries are included in the course quote. Contact us with your site location and we will confirm the full cost. There are no hidden charges.' },
              { q: 'Can you deliver at our depot or site in the West Midlands?', a: 'Yes. Sygma delivers at client premises across the West Midlands (depots, live sites, training rooms or open yard space). We bring all equipment, materials and assessment documentation. Contact us to discuss your facilities.' },
              { q: 'Is CITB grant available for cable avoidance training in Birmingham?', a: 'CITB-registered businesses may be able to access funding through the CITB Employer Network model. Sygma is a CITB Approved Training Organisation. Speak to your CITB Employer Network adviser, or contact Sygma for guidance.' },
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
        <p className="eyebrow text-blue-600 mb-3">Other Regions</p>
        <h2 className="text-2xl font-black mb-6 text-gray-900">Cable Avoidance Training Across the UK</h2>
        <p className="text-gray-600 mb-6 max-w-3xl leading-relaxed">Sygma delivers on-site cable avoidance and CAT and Genny training UK-wide. See our regional training guides:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/cable-avoidance-training-london" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Cable Avoidance Training London</Link>
          <Link href="/cable-avoidance-training-manchester" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Cable Avoidance Training Manchester</Link>
          <Link href="/cable-avoidance-training-scotland" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Cable Avoidance Training Scotland</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 border-y border-gray-200 py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-gray-900">Get a Birmingham Training Quote</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Tell us what your team needs and when. We will confirm availability and send a quote within one working day.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">Get a Birmingham Training Quote</Link>
            <a href="tel:+442039718252" className="inline-flex items-center px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors">Call Us</a>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{ __html: faqPageSchema(faqs) }}} />

    </>
  );
}
