import Link from 'next/link';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import FallbackImage from '@/components/FallbackImage';
import type { LocationPageData } from '@/data/locations/types';
import { breadcrumbSchema } from '@/lib/schema';

export default function LocationTemplate({ data }: { data: LocationPageData }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "Locations", to: "/locations" }, { label: data.slug.charAt(0).toUpperCase() + data.slug.slice(1) }]) }} />
      
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden bg-foreground">
        <FallbackImage
          src="cat-65"
          alt={data.hero.headline}
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute inset-0 border-l-4 border-accent" />
        <div className="relative flex flex-col justify-end p-8 md:p-12 h-full">
          <p className="text-sm font-semibold text-accent mb-2">{data.hero.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">{data.hero.headline}</h1>
          <p className="text-lg text-primary-foreground/80">{data.hero.subtitle}</p>
        </div>
      </div>

      {/* Regional Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            {data.overview.eyebrow}
          </p>
          <h2 className="text-3xl font-bold mb-8 text-foreground">{data.overview.title}</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
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
        <section className="bg-muted/30 border-y border-border py-16 px-4">
          <div className="container mx-auto px-6 md:px-8 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              {data.facility.eyebrow}
            </p>
            <h2 className="text-3xl font-bold mb-8 text-foreground">{data.facility.title}</h2>
            <div className="rounded-lg border border-border bg-background p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-bold text-foreground mb-2">Address</p>
                  <p className="text-muted-foreground mb-6">{data.facility.address}</p>
                  {data.facility.distance && (
                    <>
                      <p className="text-sm font-bold text-foreground mb-2">Distance from Bristol</p>
                      <p className="text-muted-foreground mb-6">{data.facility.distance}</p>
                    </>
                  )}
                  {!data.facility.distance && (
                    <>
                      <p className="text-sm font-bold text-foreground mb-2">Access</p>
                      <p className="text-muted-foreground mb-6">{data.facility.access}</p>
                    </>
                  )}
                  <p className="text-sm font-bold text-foreground mb-2">Facilities</p>
                  <p className="text-muted-foreground">{data.facility.facilities}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground mb-4">Courses Available at {data.facility.title.split(',')[0]}</p>
                  <ul className="space-y-2">
                    {data.facility.courses.map((course) => (
                      <li key={course} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary font-bold shrink-0">›</span>
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
        <section className="bg-muted/30 border-y border-border py-16 px-4">
          <div className="container mx-auto px-6 md:px-8 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              {data.onSite.eyebrow}
            </p>
            <h2 className="text-3xl font-bold mb-8 text-foreground">{data.onSite.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{data.onSite.intro}</p>
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              {data.onSite.areas.map((card) => (
                <div key={card.area} className="rounded-lg border border-border bg-background p-5">
                  <p className="mb-2 text-sm font-bold text-foreground">{card.area}</p>
                  <p className="text-sm text-muted-foreground">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 px-4">
          <div className="container mx-auto px-6 md:px-8 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              {data.onSite.eyebrow}
            </p>
            <h2 className="text-3xl font-bold mb-8 text-foreground">{data.onSite.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{data.onSite.intro}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.onSite.areas.map((card) => (
                <div key={card.area} className="rounded-lg border border-border bg-background p-5">
                  <p className="mb-2 text-sm font-bold text-foreground">{card.area}</p>
                  <p className="text-sm text-muted-foreground">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* London: Courses Available On-Site Section */}
      {data.courses && (
        <section className="py-16 px-4">
          <div className="container mx-auto px-6 md:px-8 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Courses Available On-Site
            </p>
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              What We Deliver {data.slug === 'london' ? 'in London and the South East' : 'in ' + data.slug}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.courses.map((card) => (
                <Link
                  key={card.course}
                  href="/courses"
                  className="block rounded-lg border border-border bg-background p-5 hover:border-primary transition-colors"
                >
                  <p className="mb-2 text-sm font-bold text-foreground">{card.course}</p>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
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
      <section className="bg-muted/30 border-y border-border py-16 px-4">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            {data.sectors.eyebrow}
          </p>
          <h2 className="text-3xl font-bold mb-8 text-foreground">{data.sectors.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.sectors.items.map((card) => (
              <div key={card.sector} className="rounded-lg border border-border bg-background p-5">
                <p className="mb-2 text-sm font-bold text-foreground">{card.sector}</p>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary border-y border-border py-16 px-4">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">{data.cta.title}</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">{data.cta.description}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={data.cta.primaryHref}
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary-foreground text-primary font-bold text-sm hover:bg-primary-foreground/90 transition-colors"
            >
              {data.cta.primaryLabel}
            </Link>
            <Link
              href={data.cta.secondaryHref}
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              {data.cta.secondaryLabel}
            </Link>
            <a
              href={`tel:${data.cta.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone size={16} /> {data.cta.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
