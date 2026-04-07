import { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'CAT and Genny Training Birmingham | Sygma Solutions',
  description: 'CAT and Genny training in Birmingham and the West Midlands. On-site delivery across the region. Independent specialist provider. Travel included.',
  alternates: { canonical: 'https://sygma-solutions.com/locations/birmingham' },
  openGraph: {
    title: 'CAT and Genny Training Birmingham | Sygma Solutions',
    description: 'CAT and Genny training in Birmingham and the West Midlands. On-site delivery across the region. Travel included.',
  },
};

export default function LocationBirmingham() {
  const coursesList = [
    'GPR Training (Module 1 and Module 2)',
    '5-Day PAS128 Surveyor Programme',
    'ProQual Level 3 Certificate (fast-track option)',
    'ProQual Level 4 Diploma',
    'ProQual Level 5 Diploma',
    'PAS128 Service Coordinator Awareness',
  ];

  const regionalAreas = [
    { area: 'West Midlands', detail: 'Birmingham, Wolverhampton, Coventry, Dudley, Walsall, Solihull, Sandwell' },
    { area: 'East Midlands', detail: 'Nottingham, Leicester, Derby, Northampton, Lincoln, Loughborough' },
    { area: 'Surrounding Counties', detail: 'Worcestershire, Warwickshire, Staffordshire, Shropshire, Herefordshire, Gloucestershire' },
  ];

  const sectors = [
    { sector: 'HS2 and Rail Infrastructure', desc: 'Operatives and supervisors working on HS2, Network Rail, and light rail projects across the Midlands corridor.' },
    { sector: 'Water and Sewerage', desc: 'Severn Trent, Anglian Water, and their supply chain contractors operating across the Midlands water network.' },
    { sector: 'Highways and Streetworks', desc: 'Local authority and Highways England contractors working on the M6, M42, M1, and A-road networks.' },
    { sector: 'Energy and Telecommunications', desc: 'Gas, electricity, and fibre network contractors managing buried assets across the region.' },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-blue-300 mb-2">Training Locations</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Underground Utility Training in Birmingham and the Midlands
            </h1>
            <p className="text-lg text-slate-300">
              Sygma delivers cable avoidance, utility mapping, and bespoke training across the Midlands. On-site at your premises or at our Worcester partner facility. Travel is always included in the course fee.
            </p>
          </div>
        </section>

        {/* Regional Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Midlands Coverage</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Training in Birmingham, Worcester, Coventry, and Across the Midlands</h2>
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
              <p>Sygma works with contractors, utilities, and infrastructure companies across the West Midlands, East Midlands, and surrounding counties. We deliver on-site training at client premises throughout the region, with no travel surcharges.</p>
              <p>For courses that require specialist facilities, including GPR training, PAS128 surveyor programmes, and advanced utility mapping qualifications, Sygma delivers from The Survey School in Worcester. This purpose-built facility provides the equipment and controlled survey conditions that higher-level practical assessments demand.</p>
              <p>The Midlands is one of the busiest regions for utility infrastructure work in the UK. Major road, rail, HS2, water, and energy programmes across the region create a continuous demand for operatives who are trained to locate and avoid buried services to the highest standard.</p>
            </div>
          </div>
        </section>

        {/* Image Strip */}
        <div className="grid grid-cols-3 gap-2 h-48 md:h-64 px-4">
          <div className="overflow-hidden rounded-lg">
            <Image src="CAT4-and-Genny-45" alt="Cable avoidance training in the Midlands" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image src="MALA-GPR-10" alt="GPR survey training at Worcester facility" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image src="CAT4-and-Genny-63" alt="Utility detection practical exercise Birmingham" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          </div>
        </div>

        {/* Worcester Facility */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Midlands Training Facility</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">The Survey School, Worcester</h2>
            <div className="rounded-lg border border-slate-200 bg-white p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-2">Address</p>
                  <p className="text-slate-700 mb-6">The Survey School, Waterworks Road, Worcester, WR1 3EZ</p>
                  <p className="text-sm font-bold text-slate-900 mb-2">Access</p>
                  <p className="text-slate-700 mb-6">Accessible from the M5. Location details confirmed on booking. 40 minutes from Birmingham city centre.</p>
                  <p className="text-sm font-bold text-slate-900 mb-2">Facilities</p>
                  <p className="text-slate-700">Specialist survey training facility with GPR equipment, controlled survey sites, classroom space, and practical assessment areas.</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-4">Courses Available at Worcester</p>
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
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Training at Your Midlands Site</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">Most Sygma utility avoidance courses can be delivered at your premises anywhere in the Midlands. Your operatives train on the ground they work on, using their own equipment and site procedures. Travel is included in the course fee.</p>
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
            <Image src="Safe-Dig-15" alt="Safe excavation training West Midlands site" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image src="CAT4-and-Genny-49" alt="On-site cable avoidance assessment Midlands" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image src="CAT4-and-Genny-01" alt="Advanced electromagnetic location equipment training" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          </div>
        </div>

        {/* Sectors */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Midlands Sectors</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Who We Train in the Midlands</h2>
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
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Book Training in the Midlands</h2>
            <p className="text-slate-700 mb-8 text-lg">At The Survey School in Worcester, or at your site anywhere in the Midlands. Contact us to discuss dates, group size, and course requirements.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">
                Book a Course
              </Link>
              <Link href="/cable-avoidance-training-birmingham" className="inline-flex items-center px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors">
                Courses in the Midlands
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
