import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Courses', href: '/courses' },
  { label: 'School of Business (MBUS)', href: '/courses/mbus' },
  { label: 'Introduction to Business', href: '/courses/mbus-intro' },
];

export const metadata: Metadata = {
  title: 'Introduction to Business - MBUS | Sygma Solutions',
  description: 'Learn business fundamentals with our comprehensive Introduction to Business course. Master strategy, operations, and finance essentials.',
};

export default function MBUSIntroPage() {
  const faqData = [
    {
      question: 'Do I need business experience to take this course?',
      answer: 'No, this course is designed for complete beginners. We start with fundamentals and build up, making it accessible to everyone.',
    },
    {
      question: 'Will this help with my career?',
      answer: 'Yes, whether you\'re seeking promotion, changing careers, or starting a business, understanding business fundamentals is invaluable.',
    },
    {
      question: 'What topics are covered?',
      answer: 'We cover strategy, operations, finance, marketing, human resources, and organisational management from foundational principles.',
    },
    {
      question: 'How long does it take to complete?',
      answer: 'The course is self-paced and typically takes 4-6 weeks to complete, requiring about 20-30 hours of study.',
    },
  ];

  const jsonLD = {
    '@context': 'https://schema.org',
    '@graph': [
      courseSchema({
        name: 'Introduction to Business',
        description: 'Master foundational business principles and strategy',
        url: 'https://sygma.ai/courses/mbus-intro',
      }),
      breadcrumbSchema(breadcrumbs),
      faqPageSchema(faqData),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
        <InnerPageHero
          imageSrc="/images/hero/mbus-intro-hero.jpg"
          imageAlt="Introduction to business course"
          title="Introduction to Business"
          subtitle="Master the Fundamentals of Business Strategy and Operations"
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  Course Overview
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Introduction to Business provides a comprehensive foundation in business principles. Learn how organisations create value, make strategic decisions, and achieve sustainable growth.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  What You'll Learn
                </h2>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Business strategy and competitive advantage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Operations and supply chain management</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Financial analysis and business metrics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Marketing and customer value creation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Organisational behaviour and leadership</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  Course Structure
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 1: Business Foundations</h3>
                    <p className="text-slate-600">Understanding organisations, markets, and value creation</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 2: Strategy & Operations</h3>
                    <p className="text-slate-600">Developing strategy and executing through operations</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 3: Finance & Metrics</h3>
                    <p className="text-slate-600">Understanding financial statements and key business metrics</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 4: Assessment & Certification</h3>
                    <p className="text-slate-600">Comprehensive evaluation and professional certification</p>
                  </div>
                </div>
              </section>
            </div>

            <aside className="md:col-span-1">
              <div className="bg-indigo-50 rounded-lg p-6 sticky top-4">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Info</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-slate-600">Duration</p>
                    <p className="font-semibold text-slate-900">4-6 weeks</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Effort Required</p>
                    <p className="font-semibold text-slate-900">20-30 hours</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Certification</p>
                    <p className="font-semibold text-slate-900">Yes</p>
                  </div>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition mt-4">
                    Enroll Now
                  </button>
                </div>
              </div>
            </aside>
          </div>

          <section className="bg-slate-100 rounded-lg p-8 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details key={index} className="bg-white rounded p-4 cursor-pointer">
                  <summary className="font-semibold text-slate-900 hover:text-indigo-600">
                    {faq.question}
                  </summary>
                  <p className="text-slate-600 mt-3 pt-3 border-t">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              Start Your Business Journey
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Gain the business literacy you need to succeed in any role, organisation, or industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded transition">
                Enroll Today
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded transition">
                Download Syllabus
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}