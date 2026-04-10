import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Courses', href: '/courses' },
  { label: 'School of Engineering (EUS)', href: '/courses/eus' },
  { label: 'Cat 3: Systems', href: '/courses/eus-cat3-systems' },
];

export const metadata: Metadata = {
  title: 'Cat 3: Systems - EUS | Sygma Solutions',
  description: 'Master systems engineering and integration with our Cat 3: Systems course. Learn to design and manage complex integrated systems.',
};

export default function EUSCat3SystemsPage() {
  const faqData = [
    {
      question: 'What is systems engineering?',
      answer: 'Systems engineering is the discipline of designing, integrating, and managing complex systems throughout their lifecycle. It bridges multiple engineering disciplines.',
    },
    {
      question: 'Who should take this specialisation?',
      answer: 'This course is ideal for engineers interested in large-scale projects, system architecture, stakeholder management, and cross-disciplinary integration.',
    },
    {
      question: 'What industries use systems engineering?',
      answer: 'Systems engineering is critical in aerospace, automotive, defence, telecommunications, energy, and any field involving complex integrated systems.',
    },
    {
      question: 'Will I learn project management?',
      answer: 'Yes, systems engineering inherently includes project planning, risk management, and stakeholder communication skills essential for technical leadership.',
    },
  ];

  const jsonLD = {
    '@context': 'https://schema.org',
    '@graph': [
      courseSchema({
        name: 'Cat 3: Systems',
        description: 'Master systems engineering and complex system integration',
        url: 'https://sygma.ai/courses/eus-cat3-systems',
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
          imageSrc="/images/hero/eus-cat3-systems-hero.jpg"
          imageAlt="Systems specialisation course"
          title="Cat 3: Systems"
          subtitle="Master Systems Engineering"
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  Specialisation Overview
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Cat 3: Systems prepares you to lead the design and integration of complex systems. Master system architecture, requirements management, and cross-disciplinary coordination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  What You'll Master
                </h2>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Systems thinking and holistic problem solving</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Requirements management and traceability</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>System architecture and design patterns</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Integration and verification strategies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Technical leadership and communication</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  Course Structure
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 1: Systems Principles</h3>
                    <p className="text-slate-600">Foundational concepts and systems thinking methodology</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 2: Requirements & Architecture</h3>
                    <p className="text-slate-600">Capturing, managing, and architecting system requirements</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 3: Integration & Verification</h3>
                    <p className="text-slate-600">Integrating subsystems and verifying performance</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 4: Capstone Project</h3>
                    <p className="text-slate-600">Lead design of a complex multi-disciplinary system</p>
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
              Become a systems engineering leader ready to manage complex, integrated projects across any industry.
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