import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Courses', href: '/courses' },
  { label: 'School of Engineering (EUS)', href: '/courses/eus' },
  { label: 'Cat 2: Advanced', href: '/courses/eus-cat2' },
];

export const metadata: Metadata = {
  title: 'Cat 2: Advanced - EUS | Sygma Solutions',
  description: 'Take your engineering skills to the next level with Cat 2: Advanced. Master complex systems and advanced techniques.',
};

export default function EUSCat2Page() {
  const faqData = [
    {
      question: 'What are the prerequisites for Cat 2?',
      answer: 'Completion of Cat 1: Essentials is required. This ensures you have the foundational knowledge needed for advanced topics.',
    },
    {
      question: 'What advanced topics are covered?',
      answer: 'Cat 2 covers advanced systems design, optimization techniques, emerging technologies, and complex problem-solving scenarios.',
    },
    {
      question: 'Is there hands-on project work?',
      answer: 'Yes, this course includes several capstone projects where you\'ll apply advanced concepts to real-world engineering challenges.',
    },
    {
      question: 'How does this prepare me for specialization?',
      answer: 'Cat 2 provides the advanced foundation needed for specialized Cat 3 tracks. You\'ll be ready to pursue your specific engineering discipline.',
    },
  ];

  const jsonLD = {
    '@context': 'https://schema.org',
    '@graph': [
      courseSchema({
        name: 'Cat 2: Advanced',
        description: 'Master advanced engineering systems and techniques',
        url: 'https://sygma.ai/courses/eus-cat2',
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
          imageSrc="/images/hero/eus-cat2-hero.jpg"
          imageAlt="Advanced engineering course"
          title="Cat 2: Advanced"
          subtitle="Master Complex Systems and Techniques"
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  Course Overview
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Cat 2: Advanced builds on your Cat 1 foundation to explore complex engineering systems, advanced methodologies, and cutting-edge technologies. This course is designed for engineers ready to tackle sophisticated challenges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  What You'll Learn
                </h2>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Advanced system design and architecture</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Optimization and performance analysis</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Emerging technologies and innovation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Complex problem-solving frameworks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Leadership and project management</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  Course Structure
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 1: Advanced Systems</h3>
                    <p className="text-slate-600">Deep dive into complex systems design and integration</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 2: Optimization & Performance</h3>
                    <p className="text-slate-600">Techniques for maximizing efficiency and reliability</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 3: Emerging Technologies</h3>
                    <p className="text-slate-600">Latest innovations shaping the engineering field</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 4: Capstone Project</h3>
                    <p className="text-slate-600">Apply your learning to real-world engineering scenarios</p>
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
                    <p className="font-semibold text-slate-900">6-8 weeks</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Effort Required</p>
                    <p className="font-semibold text-slate-900">30-40 hours</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Prerequisite</p>
                    <p className="font-semibold text-slate-900">Cat 1: Essentials</p>
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
              Ready for the Challenge?
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Advance your career with specialized knowledge and practical experience in complex engineering systems.
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