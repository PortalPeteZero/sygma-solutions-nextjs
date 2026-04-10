import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Courses', href: '/courses' },
  { label: 'School of Engineering (EUS)', href: '/courses/eus' },
  { label: 'Cat 3: Materials', href: '/courses/eus-cat3-materials' },
];

export const metadata: Metadata = {
  title: 'Cat 3: Materials - EUS | Sygma Solutions',
  description: 'Master materials science and engineering with our Cat 3: Materials course. Learn selection, behaviour, and application of advanced materials.',
};

export default function EUSCat3MaterialsPage() {
  const faqData = [
    {
      question: 'What materials will we study?',
      answer: 'This course covers metals, ceramics, polymers, composites, and advanced materials including their structure, properties, and engineering applications.',
    },
    {
      question: 'Is this only for materials engineers?',
      answer: 'No, this specialisation is valuable for any engineer who needs to select and specify materials. It\'s fundamental across all disciplines.',
    },
    {
      question: 'Will we learn about testing and characterisation?',
      answer: 'Yes, we cover both theoretical and practical aspects including material testing, failure analysis, and quality control methods.',
    },
    {
      question: 'What career paths does this enable?',
      answer: 'Graduates pursue roles in materials engineering, quality assurance, R&D, product development, and manufacturing across all industries.',
    },
  ];

  const jsonLD = {
    '@context': 'https://schema.org',
    '@graph': [
      courseSchema({
        name: 'Cat 3: Materials',
        description: 'Master materials science and engineering principles',
        url: 'https://sygma.ai/courses/eus-cat3-materials',
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
          imageSrc="/images/hero/eus-cat3-materials-hero.jpg"
          imageAlt="Materials specialisation course"
          title="Cat 3: Materials"
          subtitle="Master Materials Science and Engineering"
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  Specialisation Overview
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Cat 3: Materials focuses on understanding material behaviour, selection criteria, and advanced applications. Master the science behind engineering materials and make informed decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  What You'll Master
                </h2>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Materials structure and atomic behaviour</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Property-behaviour relationships and testing methods</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Selection criteria for specific applications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Advanced materials and emerging technologies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Failure analysis and material sustainability</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  Course Structure
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 1: Materials Fundamentals</h3>
                    <p className="text-slate-600">Atomic structure and properties of different material classes</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 2: Testing & Characterisation</h3>
                    <p className="text-slate-600">Methods for evaluating material properties and behaviour</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 3: Selection & Applications</h3>
                    <p className="text-slate-600">Real-world material selection and failure prevention</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 4: Advanced Topics</h3>
                    <p className="text-slate-600">Emerging materials and sustainability considerations</p>
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
                    <p className="font-semibold text-slate-900">8-10 weeks</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Effort Required</p>
                    <p className="font-semibold text-slate-900">40-50 hours</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Prerequisite</p>
                    <p className="font-semibold text-slate-900">Cat 2: Advanced</p>
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
              Start Your Specialisation
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Become a materials expert capable of solving real-world engineering challenges through intelligent material selection.
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