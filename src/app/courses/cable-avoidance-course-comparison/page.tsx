'use client';

import Link from 'next/link';
import { Metadata } from 'next';
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cable Avoidance Course Comparison | EUSR vs ProQual',
  description: 'Compare cable avoidance training courses: EUSR CAT1, ProQual CAT1, and ProQual CAT1 Plus',
  keywords: 'cable avoidance, course comparison, EUSR, ProQual, training levels',
  openGraph: {
    title: 'Cable Avoidance Course Comparison',
    description: 'Compare different cable avoidance training qualifications',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the difference between EUSR CAT1 and ProQual CAT1?',
    answer: 'EUSR CAT1 is a 1-day foundation course, while ProQual CAT1 is a comprehensive 2-day qualification covering more advanced techniques and theory.'
  },
  {
    question: 'Is ProQual CAT1 Plus worth the extra time?',
    answer: 'Yes, the Plus level adds advanced skills in different soil types and complex utility environments, making it ideal for supervisory or specialist roles.'
  },
  {
    question: 'Which qualification should I choose?',
    answer: 'Choose based on your role requirements and employer needs. Most entry-level positions accept EUSR CAT1, while specialist roles prefer CAT1 Plus.'
  },
  {
    question: 'Can I progress from EUSR to ProQual?',
    answer: 'Yes, many candidates start with EUSR CAT1 and progress to ProQual qualifications as their experience grows.'
  },
];

export default function CourseComparison() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs, 'Cable Avoidance Course Comparison')),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Courses', url: '/courses' },
              { name: 'Course Comparison', url: '/courses/cable-avoidance-course-comparison' },
            ])
          ),
        }}
      />

      <div className="hero-section">
        <h1>Cable Avoidance Training Course Comparison</h1>
        <p>Find the right qualification level for your role</p>
      </div>

      <section className="comparison-section">
        <h2>Course Overview</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Criteria</th>
              <th>EUSR CAT1</th>
              <th>ProQual CAT1</th>
              <th>ProQual CAT1 Plus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Duration</td>
              <td>1 day</td>
              <td>2 days</td>
              <td>3 days</td>
            </tr>
            <tr>
              <td>Cost</td>
              <td>From 150</td>
              <td>From 300</td>
              <td>From 450</td>
            </tr>
            <tr>
              <td>Assessment</td>
              <td>Theory test</td>
              <td>Theory and practical</td>
              <td>Theory, practical, and advanced scenarios</td>
            </tr>
            <tr>
              <td>Level</td>
              <td>Foundation</td>
              <td>Intermediate</td>
              <td>Advanced</td>
            </tr>
            <tr>
              <td>Industry Recognition</td>
              <td>Widely accepted</td>
              <td>Highly valued</td>
              <td>Specialist preference</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="detailed-comparison">
        <h2>Detailed Comparison</h2>
        
        <div className="course-detail">
          <h3>EUSR CAT1</h3>
          <p>Entry-level foundation course covering basic cable avoidance techniques and safety principles.</p>
          <ul>
            <li>Introduction to utility mapping</li>
            <li>Basic cable identification</li>
            <li>Safety protocols</li>
            <li>Documentation requirements</li>
          </ul>
          <Link href="/enrol/eusr-cat1">Enrol Now</Link>
        </div>

        <div className="course-detail">
          <h3>ProQual CAT1</h3>
          <p>Comprehensive qualification covering advanced techniques and extensive theory.</p>
          <ul>
            <li>Advanced utility identification</li>
            <li>Different soil types and conditions</li>
            <li>Complex site scenarios</li>
            <li>Equipment operation and maintenance</li>
            <li>Professional report writing</li>
          </ul>
          <Link href="/enrol/proqual-cat1">Enrol Now</Link>
        </div>

        <div className="course-detail">
          <h3>ProQual CAT1 Plus</h3>
          <p>Advanced specialist qualification for supervisory and expert-level practitioners.</p>
          <ul>
            <li>All CAT1 content plus:</li>
            <li>Advanced problem-solving</li>
            <li>High-risk environment assessment</li>
            <li>Team supervision and training</li>
            <li>Specialist case studies</li>
            <li>Quality assurance procedures</li>
          </ul>
          <Link href="/enrol/proqual-cat1-plus">Enrol Now</Link>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>

      <section className="cta-section">
        <h2>Still Not Sure?</h2>
        <p>Contact us for personalised recommendations based on your role and experience level.</p>
        <Link href="/contact">Get Advice</Link>
      </section>
    </main>
  );
}