import Link from 'next/link';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import type { LocationPageData } from '@/data/locations/types';
import { breadcrumbSchema } from '@/lib/schema';

export default function LocationTemplate({ data }: { data: LocationPageData }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Locations", to: "/locations" }, { label: data.title }]) }} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-blue-300 mb-2">{data.hero.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.hero.headline}</h1>
            <p className="text-lg text-slate-300">{data.hero.subtitle}</p>
          </div>
        </section>

        {/* Regional Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              {data.overview.eyebrow}
            </p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">{data.overview.title}</h2>
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
              {data.overview.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* First Image Strip */}
        <div className="grid grid-cols-3 gap-2 h-48 md:h-64 px-4">
          {data.imageStrips[0].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg">
              <Image
                src={img.src}
                width={1200}
                height={800}
                alt={img.alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Facility Section (if present) */}
        {data.facility && (
          <section className="bg-slate-50 border-y border-slate-200 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
                {data.facility.eyebrow}
              </p>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">{data.facility.title}</h2>
              <div className="rounded-lg border border-slate-200 bg-white p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-2">Address</p>
                    <p className="text-slate-700 mb-6">{data.facility.address}</p>
                    {data.facility.distance && (
                      <>
                        <p className="text-sm font-bold text-slate-900 mb-2">Distance from Bristol</p>
                        <p className="text-slate-700 mb-6">{data.facility.distance}</p>
                      </>
                    )}
                    {!data.facility.distance && (
                      <>
                        <p className="text-sm font-bold text-slate-900 mb-2">Access</p>
                        <p className="text-slate-700 mb-6">{data.facility.access}</p>
                      </>
                    )}
                    <p className="text-sm font-bold text-slate-900 mb-2">Facilities</p>
                    <p className="text-slate-700">{data.facility.facilities}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-4">Courses Available at {data.facility.title.split(',')[0]}</p>
                    <ul className="space-y-2">
                      {data.facility.courses.map((course) => (
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
        )}

        {/* On-Site Delivery or Courses Section */}
        {data.courses ? (
          // London: Courses Available On-Site (not a full facility section)
          <section className="bg-slate-50 border-y border-slate-200 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
                {data.onSite.eyebrow}
              </p>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">{data.onSite.title}</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-8">{data.onSite.intro}</p>
              <div className="grid gap-4 sm:grid-cols-3 mb-8">
                {data.onSite.areas.map((card) => (
                  <div key={card.area} className="rounded-lg border border-slate-200 bg-white p-5">
                    <p className="mb-2 text-sm font-bold text-slate-900">{card.area}</p>
                    <p className="text-sm text-slate-700">{card.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          // Birmingham/Manchester/Bristol: On-Site Delivery
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
                {data.onSite.eyebrow}
              </p>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">{data.onSite.title}</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-8">{data.onSite.intro}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {data.onSite.areas.map((card) => (
                  <div key={card.area} className="rounded-lg border border-slate-200 bg-white p-5">
                    <p className="mb-2 text-sm font-bold text-slate-900">{card.area}</p>
                    <p className="text-sm text-slate-700">{card.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* London: Courses Available On-Site Section */}
        {data.courses && (
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
                Courses Available On-Site
              </p>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">
                What We Deliver {data.slug === 'london' ? 'in London and the South East' : 'in ' + data.slug}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {data.courses.map((card) => (
                  <Link
                    key={card.course}
                    href="/courses"
                    className="block rounded-lg border border-slate-200 bg-white p-5 hover:border-blue-600 transition-colors"
                  >
                    <p className="mb-2 text-sm font-bold text-slate-900">{card.course}</p>
                    <p className="text-sm text-slate-700">{card.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Second Image Strip */}
        <div className="grid grid-cols-3 gap-2 h-48 md:h-64 px-4">
          {data.imageStrips[1].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg">
              <Image
                src={img.src}
                width={1200}
                height={800}
                alt={img.alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Sectors */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
              {data.sectors.eyebrow}
            </p>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">{data.sectors.title}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.sectors.items.map((card) => (
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
            <h2 className="text-3xl font-bold mb-4 text-slate-900">{data.cta.title}</h2>
            <p className="text-slate-700 mb-8 text-lg">{data.cta.description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={data.cta.primaryHref}
                className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors"
              >
                {data.cta.primaryLabel}
              </Link>
              <Link
                href={data.cta.secondaryHref}
                className="inline-flex items-center px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                {data.cta.secondaryLabel}
              </Link>
              <a
                href={`tel:${data.cta.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
              >
                <Phone size={16} /> {data.cta.phone}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
