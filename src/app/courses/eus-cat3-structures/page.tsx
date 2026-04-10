import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Courses', href: '/courses' },
  { label: 'School of Engineering (EUS)', href: '/courses/eus' },
  { label: 'Cat 3: Structures', href: '/courses/eus-cat3-structures' },
];

export const metadata: Metadata = {
  title: 'Cat 3: Structures - EUS | Sygma Solutions',
  description: 'Specialise in structural engineering with our comprehensive Cat 3: Structures course. Master analysis, design, and real-world applications.',
};

export default function EUSCat3StructuresPage() {
  const faqData = [
    {
      question: 'What makes this specialisation unique?',
      answer: 'This course focuses specifically on structural analysis, design principles, and real-world applications in building and infrastructure engineering.',
    },
    {
      question: 'What software tools are covered?',
      answer: 'You\'ll learn industry-standard tools including FEA software, design programs, and analysis tools used by professional structural engineers.',
    },
    {
      question: 'Are there internship opportunities?',
      answer: 'Yes, successful completion may lead to internship opportunities with our partner firms in structural engineering.',
    },
    {
      question: 'Can I specialise further after Cat 3?',
      answer: 'Absolutely. Cat 3 opens doors to advanced specialisations and professional certifications in your chosen discipline.',
    },
  ];

  const jsonLD = {
    '@context': 'https://schema.org',
    '@graph': [
      courseSchema({
        name: 'Cat 3: Structures',
        description: 'Master structural engineering analysis and design',
        url: 'https://sygma.ai/courses/eus-cat3-structures',
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
          imageSrc="/images/hero/eus-cat3-structures-hero.jpg"
          imageAlt="Structures specialisation course"
          title="Cat 3: Structures"
          subtitle="Master Structural Engineering"
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                  Specialisation Overview
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Cat 3: Structures is an advanced specialisation for engineers passionate about structural design and analysis. Learn to design safe, efficient structures and manage complex projects.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  What You'll Master
                </h2>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Structural analysis and finite element analysis (FEA)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Design of buildings, bridges, and infrastructure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Material selection and specifications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Professional structural design standards</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span>Project management and stakeholder communication</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
                  Course Structure
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 1: Structural Theory</h3>
                    <p className="text-slate-600">Foundations of mechanics and structural behaviour</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 2: Analysis Methods</h3>
                    <p className="text-slate-600">Classical and computational analysis techniques</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 3: Design Applications</h3>
                    <p className="text-slate-600">Real-world design projects across multiple sectors</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Module 4: Professional Practice</h3>
                    <p className="text-slate-600">Standards, regulations, and professional responsibilities</p>
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
              Become a sought-after structural engineering specialist with hands-on expertise and industry credentials.
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