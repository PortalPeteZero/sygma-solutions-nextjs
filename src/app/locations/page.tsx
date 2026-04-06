import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training Centres Across the UK | Sygma Solutions',
  description: 'Sygma training centres in Wigan and Worcester. On-site delivery across the UK mainland, or virtual delivery via MS Teams.',
  canonical: 'https://sygma-solutions.com/locations',
  openGraph: {
    title: 'Training Centres Across the UK | Sygma Solutions',
    description: 'Sygma training centres in Wigan and Worcester. On-site delivery across the UK mainland.',
    url: 'https://sygma-solutions.com/locations',
    type: 'website',
  },
};

export default function LocationsPage() {
  const locations = [
    {
      name: 'Wigan HQ (Primary Training Centre)',
      address: 'Hindley Business Centre, Platt Lane, Hindley, Wigan, WN2 3PA',
      desc: 'Our primary training facility at Hindley Business Centre in Wigan. Equipped with live utility demonstration rigs, indoor classroom space, and outdoor practical assessment areas.',
      courses: 'All Utility Avoidance courses (CAT1, CAT2, ProQual CAT1, CAT1 Plus, Advanced EML, and others). ProQual Level 3 Certificate, Level 4 Diploma, Level 6 Diploma.',
      notes: 'Accessible from the M6, M58, and M61. Free parking on site.',
    },
    {
      name: 'The Survey School, Worcester',
      address: 'The Survey School, Waterworks Road, Worcester, WR1 3EZ',
      desc: 'Sygma delivers GPR training, PAS128 surveyor courses, and advanced Level 4 and Level 5 mapping qualifications from The Survey School in Worcester.',
      courses: '5-Day PAS128 Surveyor Programme, GPR Training (Modules 1 and 2), ProQual Level 3 Certificate (fast-track option), Level 4 Diploma, Level 5 Diploma.',
      notes: 'Accessible from the M5. Location details confirmed on booking.',
    },
    {
      name: 'Your Site (UK Mainland)',
      address: 'Anywhere on the UK mainland',
      desc: 'Most Sygma courses can be delivered at your site, yard, or premises anywhere on the UK mainland. Travel is included in the course fee.',
      courses: 'All Utility Avoidance courses, OSCA on-site competency assessments, Bespoke and corporate programmes.',
      notes: 'Travel and expenses included in day rate. Site requirements confirmed at enquiry stage.',
    },
    {
      name: 'Virtual Delivery (MS Teams)',
      address: 'Remote (Microsoft Teams)',
      desc: 'Theory components for selected qualification courses are available via Microsoft Teams. Practical assessment elements must be completed on-site.',
      courses: 'ProQual Level 3 and Level 5 Diploma theory modules. PAS128 Service Coordinator (USC) Awareness course.',
      notes: 'Practical assessment and equipment sessions require on-site completion.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">We Come to You. Or You Come to Us.</h1>
          <p className="text-xl mb-8">Sygma delivers training from two fixed training centres, on client sites nationwide, and virtually via MS Teams. The standard of training is the same regardless of where it is delivered.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            {locations.map((loc) => (
              <div key={loc.name} className="border border-gray-300 rounded-lg bg-gray-50 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={20} className="text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xl font-bold">{loc.name}</h2>
                    <p className="text-sm text-gray-600 font-medium mt-0.5">{loc.address}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{loc.desc}</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-300">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Courses Available</p>
                    <p className="text-sm text-gray-600">{loc.courses}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Notes</p>
                    <p className="text-sm text-gray-600">{loc.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Which Location for Which Course?</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-300">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-5 py-3 font-bold">Course Type</th>
                  <th className="text-left px-5 py-3 font-bold">Wigan</th>
                  <th className="text-left px-5 py-3 font-bold">Worcester</th>
                  <th className="text-left px-5 py-3 font-bold">Your Site</th>
                  <th className="text-left px-5 py-3 font-bold">Online</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Cable Avoidance (EUS / ProQual)', wigan: 'Yes', worcester: 'No', site: 'Yes', online: 'No' },
                  { type: 'Advanced EM Location', wigan: 'Yes', worcester: 'No', site: 'Yes', online: 'No' },
                  { type: 'GPR Training', wigan: 'No', worcester: 'Yes', site: 'Limited', online: 'No' },
                  { type: 'PAS128 Awareness', wigan: 'Yes', worcester: 'Yes', site: 'Yes', online: 'No' },
                  { type: 'ProQual Level 3 / 5-Day Surveyor', wigan: 'Yes', worcester: 'Yes', site: 'No', online: 'Theory only' },
                  { type: 'Level 4 / Level 5 Diploma', wigan: 'Yes', worcester: 'Yes', site: 'No', online: 'Theory only' },
                  { type: 'Level 6 Diploma', wigan: 'Yes', worcester: 'No', site: 'No', online: 'No' },
                  { type: 'OSCA Assessment', wigan: 'No', worcester: 'No', site: 'Yes', online: 'No' },
                  { type: 'Bespoke Programmes', wigan: 'Yes', worcester: 'No', site: 'Yes', online: 'Partial' },
                ].map(({ type, wigan, worcester, site, online }, i) => (
                  <tr key={type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 font-semibold">{type}</td>
                    <td className="px-5 py-3 text-gray-600">{wigan}</td>
                    <td className="px-5 py-3 text-gray-600">{worcester}</td>
                    <td className="px-5 py-3 text-gray-600">{site}</td>
                    <td className="px-5 py-3 text-gray-600">{online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border-t border-b border-blue-200 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Book a Course at Your Preferred Location</h2>
              <p className="text-gray-600">Contact us to discuss dates, location, and group requirements.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700"
              >
                Get in Touch
              </Link>
              <a
                href="tel:+442039718252"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
              >
                <Phone size={16} /> 0203 971 8252
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}