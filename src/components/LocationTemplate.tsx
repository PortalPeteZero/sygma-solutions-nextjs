import Image from 'next/image';
import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/schema';

interface LocationPageData {
  slug: string;
  name: string;
  hero: {
    headline: string;
    subheadline: string;
    backgroundImage: string;
  };
  overview: string;
  facility: {
    description: string;
    amenities: string[];
  };
  courses: Array<{
    name: string;
    url: string;
  }>;
  sectors: string[];
}

interface LocationTemplateProps {
  data: LocationPageData;
}

export default function LocationTemplate({ data }: LocationTemplateProps) {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Locations', url: '/locations' },
              { name: data.slug, url: `/locations/${data.slug}` },
            ])
          ),
        }}
      />

      <div className="hero-section">
        <Image
          src={data.hero.backgroundImage}
          alt={data.hero.headline}
          width={1200}
          height={400}
          priority
        />
        <div className="hero-content">
          <h1>{data.hero.headline}</h1>
          <p>{data.hero.subheadline}</p>
        </div>
      </div>

      <section className="overview-section">
        <h2>About {data.name}</h2>
        <p>{data.overview}</p>
      </section>

      <section className="facility-section">
        <h2>Our Facilities</h2>
        <p>{data.facility.description}</p>
        <h3>Amenities</h3>
        <ul>
          {data.facility.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </section>

      <section className="courses-section">
        <h2>Courses Available in {data.name}</h2>
        <ul>
          {data.courses.map((course, index) => (
            <li key={index}>
              <Link href={course.url}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="sectors-section">
        <h2>Industries We Serve</h2>
        <ul>
          {data.sectors.map((sector, index) => (
            <li key={index}>{sector}</li>
          ))}
        </ul>
      </section>

      <section className="cta-section">
        <h2>Ready to Train?</h2>
        <p>Contact us to book a course at our {data.name} location.</p>
        <Link href="/contact">Get in Touch</Link>
      </section>
    </main>
  );
}