import { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Utility Training Bristol & South West | Sygma Solutions',
  description: 'Utility mapping and PAS 128 training in Bristol and the South West. On-site delivery across the region. Independent specialist. Travel included.',
  alternates: { canonical: 'https://sygma-solutions.com/locations/bristol' },
  openGraph: {
    title: 'Utility Training Bristol & South West | Sygma Solutions',
    description: 'Utility mapping and PAS 128 training in Bristol and the South West. Travel included.',
  },
};

export default function LocationBristol() {
  const coursesList = [
    'GPR Training (Module 1 and Module 2)',
    '5-Day PAS128 Surveyor Programme',
    'ProQual Level 3 Certificate (fast-track option)',
    'ProQual Level 4 Diploma',
    'ProQual Level 5 Diploma',
    'PAS128 Service Coordinator Awareness',
  ];

  const regionalAreas = [
    { area: 'Bristol and Bath', detail: 'Bristol, Bath, South Gloucestershire, North Somerset, and the wider Bristol city region' },
    { area: 'Devon, Cornwall, and Somerset', detail: 'Exeter, Plymouth, Taunton, Truro, Torbay, Barnstaple, and surrounding areas' },
    { area: 'Dorset and Wiltshire', detail: 'Bournemouth, Poole, Salisbury, Swindon, Chippenham, and surrounding areas' },
  ];

  const sectors = [
    { sector: 'Water and Sewerage', desc: "Wessex Water, South West Water, Bristol Water, and their supply chain contractors operating across the region's water and sewerage networks." },
    { sector: 'Energy Distribution', desc: 'Western Power Distribution, Wales and West Utilities, and contractors managing gas and electricity assets across the South West.' },
    { sector: 'Highways and Infrastructure', desc: 'Highways England, local authority, and PFI contractors working on the M4, M5, M32, and A-road networks.' },
    { sector: 'Construction and Development', desc: 'Groundworkers, piling contractors, and site teams on commercial, residential, and mixed-use development projects across the region.' },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-blue-300 mb-2">Training Locations</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Underground Utility Training in Bristol and the South West
            </h1>
            <p className="text-lg text-slate-300">
              Sygma delivers cable avoidance, utility mapping, and bespoke training on client sites across the South West. Travel is always included in the course fee. Worcester-based courses also serve the region.
            </p>
          </div>
        </section>

        {/* Regional Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">South West Coverage</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Training in Bristol, Bath, Exeter, and Across the South West</h2>
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
              <p>Sygma delivers training across the South West, from Bristol and Bath through Somerset, Devon, Cornwall, Dorset, and Wiltshire. Our trainers travel to your site with all equipment and assessment materials. Travel is included in the course fee with no additional charges.</p>
              <p>For courses that require specialist facilities, including GPR training, PAS128 surveyor programmes, and advanced utility mapping qualifications, The Survey School in Worcester is the nearest Sygma training facility, approximately 90 minutes from Bristol via the M5.</p>
              <p>The South West has significant water, energy, and highway infrastructure programmes. Wessex Water, South West Water, Western Power Distribution, Wales and West Utilities, and Highways England all operate major networks across the region, creating demand for operatives trained to the highest standard in buried service detection.</p>
            </div>
          </div>
        </section>

        {/* Image Strip */}
        <div className="grid grid-cols-3 gap-2 h-48 md:h-64 px-4">
          <div className="overflow-hidden rounded-lg">
            <Image src="MALA-GPR-12" width={1200} height={800} alt="GPR utility survey training South West" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image src="Utility-Mapping-02" width={1200} height={800} alt="Utility mapping field work Bristol region" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image src="MALA-GPR-25" width={1200} height={800} alt="Ground penetrating radar practical exercise" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Worcester Facility */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">Nearest Training Facility</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">The Survey School, Worcester</h2>
            <div className="rounded-lg border border-slate-200 bg-white p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-2">Address</p>
                  <p className="text-slate-700 mb-6">The Survey School, Waterworks Road, Worcester, WR1 3EZ</p>
                  <p className="text-sm font-bold text-slate-900 mb-2">Distance from Bristol</p>
                  <p className="text-slate-700 mb-6">Approximately 90 minutes via the M5. Accessible from all major South West routes.</p>
                  <p className="text-sm font-bold text-slate-900 mb-2">Facilities</p>
                  <p className="text-slate-700">Specialist survey equipment for GPR and electromagnetic training, controlled outdoor survey area, classroom space, and welfare facilities. Used primarily for PAS128 surveyor programmes, GPR training, and advanced mapping qualifications.</p>
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
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Training at Your South West Site</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">Most Sygma utility avoidance courses can be delivered at your premises anywhere in the South West. Your operatives train on the ground they work on, using their own equipment and site procedures. On-site delivery requires a suitable indoor space for theory sessions and access to an outdoor area with buried metallic utilities for practical assessment.</p>
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
            <Image src="CAT4-and-Genny-50" width={1200} height={800} alt="Cable avoidance training on South West site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image src="MALA-GPR-19" width={1200} height={800} alt="PAS128 survey assessment South West" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image src="Safe-Dig-02" width={1200} height={800} alt="Safe excavation practices training Bristol" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Sectors */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">South West Sectors</p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Who We Train in the South West</h2>
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
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Book Training in the South West</h2>
            <p className="text-slate-700 mb-8 text-lg">On-site at your premises anywhere in the South West, or at The Survey School in Worcester. Contact us to discuss dates, group size, and course requirements.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">
                Book a Course
              </Link>
              <Link href="/utility-mapping-training-bristol" className="inline-flex items-center px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors">
                Courses in the South West
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
