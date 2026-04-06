'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CAT and Genny Training London | Sygma Solutions',
  description: 'CAT and Genny training in London and the South East. On-site delivery across the region. Independent specialist provider. Travel included.',
  alternates: { canonical: 'https://sygma-solutions.com/locations/london' },
  openGraph: {
    title: 'CAT and Genny Training London | Sygma Solutions',
    description: 'CAT and Genny training in London and the South East. On-site delivery. Travel included.',
  },
};

export default function LocationLondon() {
  const regionalAreas = [
    { area: 'Central and Greater London', detail: 'All London boroughs, Canary Wharf, City of London, Westminster, and the wider Greater London area' },
    { area: 'Home Counties', detail: 'Surrey, Kent, Essex, Hertfordshire, Buckinghamshire, Berkshire, Hampshire, Sussex' },
    { area: 'Thames Valley and M25 Corridor', detail: 'Reading, Slough, Watford, Dartford, Croydon, Bromley, and the M25 corridor' },
  ];

  const courses = [
    { course: 'Cable Avoidance Training (CAT and Genny)', desc: 'One-day HSG47-compliant course. Classroom theory and practical site assessment. Sygma in-house certificate issued same day.' },
    { course: 'EUS CAT1 Accreditation', desc: 'EUSR-registered company scheme accreditation. One-day delivery with practical and written assessment.' },
    { course: 'ProQual CAT1 and CAT1 Plus', desc: 'ProQual-accredited qualification with individual assessment in all four EML modes.' },
    { course: 'RQF Level 2 Award', desc: 'Nationally recognised formal qualification for operatives locating and avoiding buried services.' },
    { course: 'OSCA On-Site Competency Assessment', desc: 'GPS-stamped, photo-verified competency assessment on your live site. Not a training course.' },
    { course: 'Bespoke Corporate Programmes', desc: 'Multi-day programmes designed around your specific site risks, equipment fleet, and workforce.' },
  ];

  const sectors = [
    { sector: 'Major Infrastructure Projects', desc: 'Operatives and supervisors on Crossrail, Thames Tideway, HS2, and major London development schemes.' },
    { sector: 'Utilities and Network Operators', desc: 'Thames Water, UKPN, SGN, Cadent, Openreach, and their supply chain contractors managing buried assets across the capital.' },
    { sector: 'Construction and Development', desc: 'Groundworkers, piling contractors, and site teams on commercial and residential development projects.' },
    { sector: 'Highways and TfL', desc: 'Contractors working on TfL roads, borough highways, and the strategic road network across London and the South East.' },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-blue-300 mb-2">Training Locations</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Underground Utility Training in London and the South East
            </h1>
            <p className="text-lg text-slate-300">
              Sygma delivers cable avoidance, utility mapping, and bespoke training on client sites across London and the South East. Travel is always included in the course fee. No surcharges.
            </p>
          </div>
        </section>

        {/* Regional Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">South East Coverage</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Training in London, the Home Counties, and Across the South East</h2>
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
              <p>London and the South East is the most concentrated region for utility infrastructure work in the UK. Crossrail, Thames Tideway, HS2, fibre rollout, and constant development activity mean operatives are working near buried services every day, often in congested urban environments where service density is at its highest.</p>
              <p>Sygma delivers training on client sites across London and the South East. Our trainers travel to you. Training is delivered using your operatives' own equipment, on your own site, in the conditions they actually work in. There are no travel surcharges for delivery anywhere on the UK mainland.</p>
              <p>For London-based teams, on-site delivery eliminates the need for operatives to travel to a training centre. Your team trains at the depot, the yard, or the project site, and is back on the tools the next day with no lost travel time.</p>
            </div>
          </div>
        </section>

        {/* Image Strip */}
        <div className="grid grid-cols-3 gap-2 h-48 md:h-64 px-4">
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/CAT4-and-Genny-08.webp" alt="Cable avoidance training on London construction site" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/CAT4-and-Genny-53.webp" alt="Utility detection equipment in use South East" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/Safe-Dig-07.webp" alt="Safe excavation near buried services London" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* On-Site Delivery */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">On-Site Delivery</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Training at Your London or South East Site</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">Most Sygma courses can be delivered at your premises, depot, or project compound anywhere in London and the South East. On-site delivery requires a suitable indoor space for classroom theory and access to an outdoor area with buried metallic utilities for practical assessment.</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {regionalAreas.map((card) => (
                <div key={card.area} className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="mb-2 text-sm font-bold text-slate-900">{card.area}</p>
                  <p className="text-sm text-slate-700">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Available */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Courses Available On-Site</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">What We Deliver in London and the South East</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {courses.map((card) => (
                <Link key={card.course} href="/courses" className="block rounded-lg border border-slate-200 bg-white p-5 hover:border-blue-600 transition-colors">
                  <p className="mb-2 text-sm font-bold text-slate-900">{card.course}</p>
                  <p className="text-sm text-slate-700">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Image Strip */}
        <div className="grid grid-cols-3 gap-2 h-48 md:h-64 px-4">
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/CAT4-and-Genny-40.webp" alt="On-site utility avoidance assessment London" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/CAT4-and-Genny-05.webp" alt="Advanced electromagnetic location training practical" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/CAT4-and-Genny-50.webp" alt="Team completing cable detection certification" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Sectors */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">London and South East Sectors</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Who We Train in London</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {sectors.map((card) => (
                <div key={card.sector} className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="mb-2 text-sm font-bold text-slate-900">{card.sector}</p>
                  <p className="text-sm text-slate-700">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 border-y border-blue-200 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Book Training in London and the South East</h2>
            <p className="text-slate-700 mb-8 text-lg">On-site at your premises anywhere in London or the South East. Travel included. Contact us to discuss dates, group size, and course requirements.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">
                Book a Course
              </Link>
              <Link href="/cable-avoidance-training-london" className="inline-flex items-center px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors">
                Courses in London
              </Link>
              <a href="tel:+442039718252" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors">
                <Phone size={16} /> 0203 971 8252
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}