'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cable Avoidance Training Manchester | Utility Mapping',
  description: 'Professional cable avoidance training in Manchester. Learn to identify and avoid underground utilities safely.',
  keywords: 'cable avoidance, Manchester, utility training, underground cables, safe digging',
  openGraph: {
    title: 'Cable Avoidance Training Manchester',
    description: 'Professional cable avoidance training in Manchester',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is cable avoidance training?',
    answer: 'Cable avoidance training teaches you how to safely identify and avoid underground utilities when digging or excavating.'
  },
  {
    question: 'Is the training suitable for beginners?',
    answer: 'Yes, our courses are designed for all skill levels and cover essential safety practices.'
  },
  {
    question: 'How long does the training take?',
    answer: 'Most cable avoidance courses take 1-3 days depending on the qualification level.'
  },
  {
    question: 'Are there ongoing refresher courses?',
    answer: 'Yes, we offer refresher training to keep your knowledge current and meet regulatory requirements.'
  },
];

export default function CableAvoidanceTrainingManchester() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs, 'Cable Avoidance Training Manchester')),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Training', url: '/training' },
              { name: 'Cable Avoidance Training Manchester', url: '/cable-avoidance-training-manchester' },
            ])
          ),
        }}
      />
      
      <div className="hero-section">
        <h1>Cable Avoidance Training in Manchester</h1>
        <p>Professional training to safely identify and avoid underground utilities</p>
      </div>

      <section className="stats-bar">
        <div className="stat">
          <h3>500+</h3>
          <p>Professionals trained</p>
        </div>
        <div className="stat">
          <h3>98%</h3>
          <p>Pass rate</p>
        </div>
        <div className="stat">
          <h3>20+</h3>
          <p>Years experience</p>
        </div>
      </section>

      <section className="courses-section">
        <h2>Available Courses</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Duration</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EUSR CAT1</td>
              <td>1 day</td>
              <td>Manchester</td>
            </tr>
            <tr>
              <td>ProQual CAT1</td>
              <td>2 days</td>
              <td>Manchester</td>
            </tr>
            <tr>
              <td>ProQual CAT1 Plus</td>
              <td>3 days</td>
              <td>Manchester</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="image-strip">
        <Image
          src="/images/manchester-training-1.jpg"
          alt="Cable avoidance training in progress"
          width={400}
          height={300}
        />
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
        <h2>Ready to Book?</h2>
        <p>Contact us today to reserve your place on our next training course.</p>
        <Link href="/contact">Book Now</Link>
      </section>
    </main>
  );
}