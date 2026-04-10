'use client';

import Link from 'next/link';
import { Metadata } from 'next';
import { breadcrumbSchema } from '@/lib/schema';
import InnerPageHero from '@/components/InnerPageHero';

export const metadata: Metadata = {
  title: 'Utility Mapping & Surveying Training | Specialist Courses',
  description: 'Professional utility mapping and surveying training courses for safe excavation and construction.',
  keywords: 'utility mapping, surveying, training, cable detection, underground utilities',
  openGraph: {
    title: 'Utility Mapping & Surveying Training',
    description: 'Specialist training for utility mapping and surveying professionals',
    type: 'website',
  },
};

export default function UtilityMappingHub() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Training', url: '/training' },
              { name: 'Utility Mapping & Surveying', url: '/training/utility-mapping-surveying' },
            ])
          ),
        }}
      />

      <InnerPageHero
        title="Utility Mapping & Surveying"
        subtitle="Professional training for identifying and mapping underground utilities"
        backgroundImage="/images/utility-mapping-hero.jpg"
      />

      <section className="overview-section">
        <h2>What is Utility Mapping?</h2>
        <p>
          Utility mapping is the process of identifying, locating, and documenting underground utilities such as cables, pipes, and conduits.
          Our specialist courses teach professionals how to safely and accurately map utilities for construction, excavation, and maintenance projects.
        </p>
      </section>

      <section className="courses-grid">
        <h2>Our Training Pathways</h2>
        
        <div className="course-card">
          <h3>Cable Avoidance Training</h3>
          <p>Learn to safely identify and avoid underground cables and utilities.</p>
          <Link href="/cable-avoidance-training-london">View Courses</Link>
        </div>

        <div className="course-card">
          <h3>Advanced Utility Detection</h3>
          <p>Master advanced techniques for complex utility environments.</p>
          <Link href="/courses/advanced-utility-detection">View Courses</Link>
        </div>

        <div className="course-card">
          <h3>CAT & Genny Operation</h3>
          <p>Specialist certification in cable avoidance tools and ground penetrating radar.</p>
          <Link href="/courses/cat-genny-operation">View Courses</Link>
        </div>

        <div className="course-card">
          <h3>Survey & Documentation</h3>
          <p>Professional report writing and utility mapping documentation standards.</p>
          <Link href="/courses/survey-documentation">View Courses</Link>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Choose Our Training?</h2>
        <ul>
          <li>Industry-recognised qualifications</li>
          <li>Experienced instructors with field expertise</li>
          <li>Hands-on practical training</li>
          <li>Small group sizes for personalised attention</li>
          <li>Flexible scheduling across multiple locations</li>
          <li>Comprehensive course materials provided</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Training?</h2>
        <p>Browse our course schedule and book your place today.</p>
        <Link href="/courses">View All Courses</Link>
      </section>
    </main>
  );
}