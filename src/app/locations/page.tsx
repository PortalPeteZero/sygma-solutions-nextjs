'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Training Centres Across the UK | Sygma Solutions',
  description: 'Sygma training centres in Wigan and Worcester. On-site delivery across the UK mainland, or virtual delivery via MS Teams.',
  alternates: { canonical: 'https://sygma-solutions.com/locations' },
  openGraph: {
    title: 'Training Centres Across the UK | Sygma Solutions',
    description: 'Sygma training centres in Wigan and Worcester. On-site delivery across the UK mainland, or virtual delivery via MS Teams.',
  },
};

const locations = [
  {
    name: 'Wigan HQ (Primary Training Centre)',
    desc: 'Our primary training facility at Hindley Business Centre in Wigan. Equipped with live utility demonstration rigs, indoor classroom space, and outdoor practical assessment areas. All Utility Avoidance and most Utility Mapping courses run from this location.',
    address: 'Hindley Business Centre, Platt Lane, Hindley, Wigan, WN2 3PA',
    courses: 'All Utility Avoidance courses (CAT1, CAT2, ProQual CAT1, CAT1 Plus, Advanced EML, and others). ProQual Level 3 Certificate, Level 4 Diploma, Level 6 Diploma.',
    notes: 'Accessible from the M6, M58, and M61. Free parking on site.',
  },
  {
    name: 'The Survey School, Worcester',
    desc: 'Sygma delivers GPR training, PAS128 surveyor courses, and advanced Level 4 and Level 5 mapping qualifications from The Survey School in Worcester. This specialist facility provides the equipment and survey conditions that higher-level practical assessments require.',
    address: 'The Survey School, Waterworks Road, Worcester, WR1 3EZ',
    courses: '5-Day PAS128 Surveyor Programme, GPR Training (Modules 1 and 2), ProQual Level 3 Certificate (fast-track option), Level 4 Diploma, Level 5 Diploma.',
    notes: 'Accessible from the M5. Location details confirmed on booking.',
  },
  {
    name: 'Your Site (UK Mainland)',
    desc: 'Most Sygma courses can be delivered at your site, yard, or premises anywhere on the UK mainland. Travel is included in the course fee. On-site delivery requires a suitable indoor space for theory and briefing elements, and outdoor access for practical exercises.',
    address: 'Anywhere on the UK mainland',
    courses: 'All Utility Avoidance courses, OSCA on-site competency assessments, Bespoke and corporate programmes.',
    notes: 'Travel and expenses included in day rate. Site requirements confirmed at enquiry stage.',
  },
  {
    name: 'Virtual Delivery (MS Teams)',
    desc: 'Theory components for selected qualification courses are available via Microsoft Teams. This is a full-delivery option, not a compromise. The same trainer, the same content, the same questions answered. Practical assessment elements must be completed on-site.',
    address: 'Remote (Microsoft Teams)',
    courses: 'ProQual Level 3 and Level 5 Diploma theory modules. PAS128 Service Coordinator (USC) Awareness course.',
    notes: 'Practical assessment and equipment sessions require on-site completion.',
  },
];

const regionalGuides = [
  { name: 'Manchester and the North West', desc: 'Open courses at Wigan HQ and on-site delivery across Greater Manchester, Lancashire and Merseyside.', to: '/locations/manchester' },
  { name: 'Birmingham and the Midlands', desc: 'On-site cable avoidance and utility training across the West Midlands, East Midlands and Staffordshire.', to: '/locations/birmingham' },
  { name: 'London and the South East', desc: 'Training delivered at your site across London, the Home Counties and the wider South East.', to: '/locations/london' },
  { name: 'Bristol and the South West', desc: 'Utility mapping and cable avoidance training across Bristol, Somerset, Devon and the South West.', to: '/locations/bristol' },
  { name: 'Cable Avoidance Training London', desc: 'CAT and Genny, EUS CAT1, and ProQual courses delivered on-site across London and the South East.', to: '/cable-avoidance-training-london' },
  { name: 'Cable Avoidance Training Birmingham', desc: 'Cable avoidance courses for Midlands-based teams. CITB-funded places available.', to: '/cable-avoidance-training-birmingham' },
  { name: 'Cable Avoidance Training Manchester', desc: 'Cable avoidance and utility location training across Manchester, Liverpool, and the North West.', to: '/cable-avoidance-training-manchester' },
  { name: 'Cable Avoidance Training Scotland', desc: 'On-site cable avoidance training delivered across Scotland, including Edinburgh, Glasgow and the Central Belt.', to: '/cable-avoidance-training-scotland' },
  { name: 'Utility Mapping Training Bristol', desc: 'PAS 128 surveyor training, GPR courses and utility mapping qualifications at The Survey School in Worcester, serving the South West.', to: '/utility-mapping-training-bristol' },
];

const courseMatrix = [
  { type: 'Cable Avoidance (EUS / ProQual)', wigan: 'Yes', worcester: 'No', site: 'Yes', online: 'No' },
  { type: 'Advanced EM Location', wigan: 'Yes', worcester: 'No', site: 'Yes', online: 'No' },
  { type: 'GPR Training', wigan: 'No', worcester: 'Yes', site: 'Limited', online: 'No' },
  { type: 'PAS128 Awareness', wigan: 'Yes', worcester: 'Yes', site: 'Yes', online: 'No' },
  { type: 'ProQual Level 3 / 5-Day Surveyor', wigan: 'Yes', worcester: 'Yes', site: 'No', online: 'Theory only' },
  { type: 'Level 4 / Level 5 Diploma', wigan: 'Yes', worcester: 'Yes', site: 'No', online: 'Theory only' },
  { type: 'Level 6 Diploma', wigan: 'Yes', worcester: 'No', site: 'No', online: 'No' },
  { type: 'OSCA Assessment', wigan: 'No', worcester: 'No', site: 'Yes', online: 'No' },
  { type: 'Bespoke Programmes', wigan: 'Yes', worcester: 'No', site: 'Yes', online: 'Partial' },
];

export default function Locations() {
  return (
    <>
      <div className=\"min-h-screen bg-white\">
        {/* Hero Section */}
        <section className=\"bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4\">
          <div className=\"max-w-4xl mx-auto\">
            <p className=\"text-sm font-semibold text-blue-300 mb-2\">Training Locations</p>
            <h1 className=\"text-4xl md:text-5xl font-bold mb-4\">We Come to You. Or You Come to Us.</h1>
            <p className=\"text-lg text-slate-300\">
              Sygma delivers training from two fixed training centres, on client sites nationwide, and virtually via MS Teams. The standard of training is the same regardless of where it is delivered.
            </p>
          </div>
        </section>

        {/* Image Break */}
        <div className=\"w-full h-64 md:h-80 overflow-hidden\">
          <img loading=\"lazy\" src=\"/images/about/CAT4-and-Genny-47.webp\" alt=\"Sygma training locations nationwide\" className=\"w-full h-full object-cover\" />
        </div>

        {/* Location Cards */}
        <section className=\"py-16 px-4\">
          <div className=\"max-w-4xl mx-auto\">
            <div className=\"space-y-6\">
              {locations.map((loc) => (
                <div key={loc.name} className=\"border border-slate-300 rounded-xl bg-white p-6 md:p-8\">
                  <div className=\"flex items-start gap-3 mb-4\">
                    <MapPin size={20} className=\"text-blue-600 shrink-0 mt-0.5\" />
                    <div>
                      <h2 className=\"text-xl font-bold text-slate-900\">{loc.name}</h2>
                      <p className=\"text-sm text-slate-600 font-medium mt-0.5\">{loc.address}</p>
                    </div>
                  </div>
                  <p className=\"text-slate-700 leading-relaxed mb-4\">{loc.desc}</p>
                  <div className=\"grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-200\">
                    <div>
                      <p className=\"text-xs font-bold uppercase tracking-widest text-blue-600 mb-2\">Courses Available</p>
                      <p className=\"text-sm text-slate-700\">{loc.courses}</p>
                    </div>
                    <div>
                      <p className=\"text-xs font-bold uppercase tracking-widest text-blue-600 mb-2\">Notes</p>
                      <p className=\"text-sm text-slate-700\">{loc.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Break */}
        <div className=\"w-full h-64 md:h-80 overflow-hidden\">
          <img loading=\"lazy\" src=\"/images/about/CAT4-and-Genny-48.webp\" alt=\"Training centre facilities and equipment\" className=\"w-full h-full object-cover\" />
        </div>

        {/* Regional Training Guides */}
        <section className=\"py-16 px-4\">
          <div className=\"max-w-4xl mx-auto\">
            <p className=\"text-xs font-bold uppercase tracking-widest text-blue-600 mb-3\">On-Site Training by Region</p>
            <h2 className=\"text-3xl font-bold mb-4 text-slate-900\">Regional Training Guides</h2>
            <p className=\"text-slate-700 leading-relaxed mb-8\">We deliver cable avoidance and utility training at client sites across the UK. These guides cover what we offer in each region, including course availability, travel arrangements, and local client references.</p>
            <div className=\"grid sm:grid-cols-2 gap-4\">
              {regionalGuides.map((loc) => (
                <Link key={loc.name} href={loc.to} className=\"border border-slate-300 rounded-lg bg-white p-5 hover:border-blue-600 hover:shadow-md transition-all block\">
                  <h3 className=\"font-bold text-slate-900 mb-2\">{loc.name}</h3>
                  <p className=\"text-sm text-slate-700\">{loc.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Course Matrix */}
        <section className=\"bg-slate-50 py-16 px-4\">
          <div className=\"max-w-4xl mx-auto\">
            <p className=\"text-xs font-bold uppercase tracking-widest text-blue-600 mb-3\">Quick Reference</p>
            <h2 className=\"text-3xl font-bold mb-6 text-slate-900\">Which Location for Which Course?</h2>
            <div className=\"overflow-x-auto rounded-lg border border-slate-300\">
              <table className=\"w-full text-sm\">
                <thead>
                  <tr className=\"bg-blue-600 text-white\">
                    <th className=\"text-left px-5 py-3 font-bold\">Course Type</th>
                    <th className=\"text-left px-5 py-3 font-bold\">Wigan</th>
                    <th className=\"text-left px-5 py-3 font-bold\">Worcester</th>
                    <th className=\"text-left px-5 py-3 font-bold\">Your Site</th>
                    <th className=\"text-left px-5 py-3 font-bold\">Online</th>
                  </tr>
                </thead>
                <tbody>
                  {courseMatrix.map(({ type, wigan, worcester, site, online }, i) => (
                    <tr key={type} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className=\"px-5 py-3 font-semibold text-slate-900\">{type}</td>
                      <td className=\"px-5 py-3 text-slate-700\">{wigan}</td>
                      <td className=\"px-5 py-3 text-slate-700\">{worcester}</td>
                      <td className=\"px-5 py-3 text-slate-700\">{site}</td>
                      <td className=\"px-5 py-3 text-slate-700\">{online}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Image Break */}
        <div className=\"w-full h-64 md:h-80 overflow-hidden\">
          <img loading=\"lazy\" src=\"/images/about/CAT4-and-Genny-49.webp\" alt=\"Sygma on-site training UK delivery\" className=\"w-full h-full object-cover\" />
        </div>

        {/* CTA */}
        <section className=\"bg-blue-50 border-y border-blue-200 py-16 px-4\">
          <div className=\"max-w-4xl mx-auto\">
            <div className=\"flex flex-wrap items-center justify-between gap-6\">
              <div>
                <h2 className=\"text-2xl font-bold mb-2 text-slate-900\">Book a Course at Your Preferred Location</h2>
                <p className=\"text-slate-700\">Contact us to discuss dates, location, and group requirements.</p>
              </div>
              <div className=\"flex flex-wrap gap-4\">
                <Link
                  href=\"/contact\"
                  className=\"inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors\"
                >
                  Get in Touch
                </Link>
                <a
                  href=\"tel:+442039718252\"
                  className=\"inline-flex items-center gap-2 px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors\"
                >
                  <Phone size={16} /> 0203 971 8252
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
