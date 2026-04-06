'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CAT and Genny Training Manchester | Sygma Solutions',
  description: 'Specialist CAT and Genny training in Manchester and the North West. On-site and classroom delivery from our Wigan training centre. Travel included.',
  alternates: { canonical: 'https://sygma-solutions.com/locations/manchester' },
  openGraph: {
    title: 'CAT and Genny Training Manchester | Sygma Solutions',
    description: 'Specialist CAT and Genny training in Manchester and the North West. Travel included.',
  },
};

export default function LocationManchester() {
  const coursesList = [
    'Cable Avoidance Training (CAT and Genny)',
    'EUS CAT1 and ProQual CAT1 Accreditation',
    'ProQual CAT1 Plus and CAT2',
    'Advanced EM Location',
    'RQF Level 2 Award',
    'ProQual Level 3 Certificate',
    'ProQual Level 4, 5, and 6 Diplomas',
    'CAT Manager Training',
    'Bespoke and Corporate Programmes',
  ];

  const regionalAreas = [
    { area: 'Greater Manchester', detail: 'Manchester, Salford, Stockport, Oldham, Rochdale, Bolton, Bury, Tameside, Trafford, Wigan' },
    { area: 'Merseyside and Lancashire', detail: 'Liverpool, Wirral, St Helens, Knowsley, Sefton, Preston, Blackburn, Burnley, Lancaster' },
    { area: 'Cheshire and Warrington', detail: 'Chester, Crewe, Warrington, Macclesfield, Northwich, Ellesmere Port' },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-blue-300 mb-2">Training Locations</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Underground Utility Training in Manchester and the North West
            </h1>
            <p className="text-lg text-slate-300">
              Sygma's Wigan training centre is in the heart of the North West, 20 minutes from Manchester city centre. We also deliver on-site training at client premises across the region. Travel is always included.
            </p>
          </div>
        </section>

        {/* Regional Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">North West Coverage</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Training in Manchester, Wigan, Liverpool, and Across the North West</h2>
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
              <p>Sygma Solutions is based in Wigan, making the North West our home region. Our primary training centre at Hindley Business Centre is equipped with live utility demonstration rigs, indoor classroom space, and outdoor practical assessment areas with real buried services.</p>
              <p>For clients who need training delivered on their own site, we travel across the North West regularly, covering Manchester, Liverpool, Preston, Bolton, Warrington, Chester, Lancaster, and everywhere in between. Travel is included in the course fee with no surcharges.</p>
              <p>We work with major contractors, utilities, and infrastructure companies across the region, including clients operating on motorway, rail, water, gas, and telecommunications networks throughout Greater Manchester, Merseyside, Lancashire, and Cheshire.</p>
            </div>
          </div>
        </section>

        {/* Image Strip */}
        <div className="grid grid-cols-3 gap-2 h-48 md:h-64 px-4">
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/CAT4-and-Genny-49.webp" alt="Cable avoidance training Wigan North West" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/Safe-Dig-11.webp" alt="Safe digging techniques training Manchester" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/CAT4-and-Genny-58.webp" alt="Utility detection practical exercise Greater Manchester" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Wigan HQ */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Sygma HQ</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Wigan Training Centre</h2>
            <div className="rounded-lg border border-slate-200 bg-white p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-2">Address</p>
                  <p className="text-slate-700 mb-6">Hindley Business Centre, Platt Lane, Hindley, Wigan, WN2 3PA</p>
                  <p className="text-sm font-bold text-slate-900 mb-2">Access</p>
                  <p className="text-slate-700 mb-6">Accessible from the M6, M58, and M61. Free parking on site. 20 minutes from Manchester city centre, 30 minutes from Liverpool.</p>
                  <p className="text-sm font-bold text-slate-900 mb-2">Facilities</p>
                  <p className="text-slate-700">Classroom space, live utility demonstration area, outdoor practical assessment site with real buried metallic services, welfare facilities, and free parking.</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-4">Courses Available at Wigan</p>
                  <ul className="space-y-2">
                    {coursesList.map((course) => (
                      <li key={course} className="flex gap-2 text-slate-700">
                        <span className="text-blue-600 font-bold shrink-0">›</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* On-Site Delivery */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">On-Site Delivery</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Training at Your North West Site</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">Most Sygma courses can be delivered at your premises anywhere in the North West. Your team learns on the ground they work on, using their own equipment and procedures. On-site delivery requires a suitable indoor space for theory sessions and access to an outdoor area with buried metallic utilities for practical assessment.</p>
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

        {/* Image Strip */}
        <div className="grid grid-cols-3 gap-2 h-48 md:h-64 px-4">
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/CAT4-and-Genny-43.webp" alt="On-site assessment North West cable avoidance" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/CAT4-and-Genny-69.webp" alt="Team at Wigan training centre completing course" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img loading="lazy" src="/images/courses/Safe-Dig-05.webp" alt="Excavation safety training North West premises" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* CTA */}
        <section className="bg-blue-50 border-y border-blue-200 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Book Training in the North West</h2>
            <p className="text-slate-700 mb-8 text-lg">At Sygma HQ in Wigan or at your site anywhere in the North West. Contact us to discuss dates, group size, and course requirements.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">
                Book a Course
              </Link>
              <Link href="/cable-avoidance-training-manchester" className="inline-flex items-center px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors">
                Courses in the North West
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