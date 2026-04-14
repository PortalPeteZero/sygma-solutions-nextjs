import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Training Centres Across the UK | Sygma Solutions',
  description: 'Sygma training centres in Wigan and Worcester. On-site delivery across the UK mainland, or virtual delivery via MS Teams.',
  alternates: { canonical: 'https://sygma-solutions.com/locations' },
  openGraph: {
    title: 'Training Centres Across the UK | Sygma Solutions',
    description: 'Sygma training centres in Wigan and Worcester. On-site delivery across the UK mainland, or virtual delivery via MS Teams.',
    url: 'https://sygma-solutions.com/locations',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
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
  { name: 'Cable Avoidance Training London', desc: 'CAT and Genny, EUSR CAT1, and ProQual courses delivered on-site across London and the South East.', to: '/cable-avoidance-training-london' },
  { name: 'Cable Avoidance Training Birmingham', desc: 'Cable avoidance courses for Midlands-based teams. CITB-funded places available.', to: '/cable-avoidance-training-birmingham' },
  { name: 'Cable Avoidance Training Manchester', desc: 'Cable avoidance and utility location training across Manchester, Liverpool, and the North West.', to: '/cable-avoidance-training-manchester' },
  { name: 'Cable Avoidance Training Scotland', desc: 'On-site cable avoidance training delivered across Scotland, including Edinburgh, Glasgow and the Central Belt.', to: '/cable-avoidance-training-scotland' },
  { name: 'Utility Mapping Training Bristol', desc: 'PAS 128 surveyor training, GPR courses and utility mapping qualifications at The Survey School in Worcester, serving the South West.', to: '/utility-mapping-training-bristol' },
];

const courseMatrix = [
  { type: 'Cable Avoidance (EUSR / ProQual)', wigan: 'Yes', worcester: 'No', site: 'Yes', online: 'No' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Locations" }]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-foreground">
        <Image
          src="cat-53"
          alt="Sygma training locations nationwide"
          fill
          className="absolute inset-0 object-contain"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute inset-0 border-l-4 border-accent" />
        <div className="relative flex flex-col justify-end p-8 md:p-12 h-full">
          <p className="text-sm font-semibold text-accent mb-2">Training Locations</p>
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">We Come to You. Or You Come to Us.</h1>
          <p className="text-lg text-primary-foreground/80">
            Sygma delivers training from its Wigan training centre and The Survey School in Worcester, on client sites nationwide, and virtually via MS Teams. The standard of training is the same regardless of where it is delivered.
          </p>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full overflow-hidden">
        <Image src="cat-54" width={1200} height={900} alt="Sygma training locations nationwide" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* Location Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <div className="space-y-6">
            {locations.map((loc) => (
              <div key={loc.name} className="border border-border rounded-xl bg-card p-6 md:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{loc.name}</h2>
                    <p className="text-sm text-muted-foreground font-medium mt-0.5">{loc.address}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{loc.desc}</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
                  <div>
                    <p className="eyebrow text-primary mb-2">Courses Available</p>
                    <p className="text-sm text-muted-foreground">{loc.courses}</p>
                  </div>
                  <div>
                    <p className="eyebrow text-primary mb-2">Notes</p>
                    <p className="text-sm text-muted-foreground">{loc.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full overflow-hidden">
        <Image src="cat-55" width={1200} height={900} alt="Training centre facilities and equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* Regional Training Guides */}
      <section className="py-16 px-4">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow text-primary mb-3">On-Site Training by Region</p>
          <h2 className="text-3xl font-bold mb-4 text-foreground">Regional Training Guides</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">We deliver cable avoidance and utility training at client sites across the UK. These guides cover what we offer in each region, including course availability, travel arrangements, and local client references.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {regionalGuides.map((loc) => (
              <Link key={loc.name} href={loc.to} className="border border-border rounded-lg bg-card p-5 hover:border-primary hover:shadow-md transition-all block">
                <h3 className="font-bold text-foreground mb-2">{loc.name}</h3>
                <p className="text-sm text-muted-foreground">{loc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Course Matrix */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow text-primary mb-3">Quick Reference</p>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Which Location for Which Course?</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-5 py-3 font-bold">Course Type</th>
                  <th className="text-left px-5 py-3 font-bold">Wigan</th>
                  <th className="text-left px-5 py-3 font-bold">Worcester</th>
                  <th className="text-left px-5 py-3 font-bold">Your Site</th>
                  <th className="text-left px-5 py-3 font-bold">Online</th>
                </tr>
              </thead>
              <tbody>
                {courseMatrix.map(({ type, wigan, worcester, site, online }, i) => (
                  <tr key={type} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                    <td className="px-5 py-3 font-semibold text-foreground">{type}</td>
                    <td className="px-5 py-3 text-muted-foreground">{wigan}</td>
                    <td className="px-5 py-3 text-muted-foreground">{worcester}</td>
                    <td className="px-5 py-3 text-muted-foreground">{site}</td>
                    <td className="px-5 py-3 text-muted-foreground">{online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full overflow-hidden">
        <Image src="cat-56" width={1200} height={900} alt="Sygma on-site training UK delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* CTA */}
      <section className="bg-primary border-y border-border py-16 px-4">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-primary-foreground">Book a Course at Your Preferred Location</h2>
              <p className="text-primary-foreground/80">Contact us to discuss dates, location, and group requirements.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary-foreground text-primary font-bold text-sm hover:bg-primary-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href="tel:+442039718252"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone size={16} /> 0203 971 8252
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
