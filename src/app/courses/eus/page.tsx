import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Courses', href: '/courses' },
  { label: 'School of Engineering (EUS)', href: '/courses/eus' },
];

export const metadata: Metadata = {
  title: 'School of Engineering (EUS) | Sygma Solutions',
  description: 'Master engineering skills with Sygma Solutions\' School of Engineering. From essentials to advanced specialisations in structures, systems, and materials.',
};

export default function EUSPage() {
  const faqData = [
    {
      question: 'What is the structure of the EUS programmes?',
      answer: 'Our Engineering School uses a 3-category structure: Cat 1 (Essentials - foundation), Cat 2 (Advanced - specialised skills), and Cat 3 (Specialist tracks in structures, systems, and materials).',
    },
    {
      question: 'Do I need prior engineering experience?',
      answer: 'Cat 1 is designed for anyone interested in engineering. We start with fundamentals, so no prior experience is required. Cat 2 and Cat 3 build progressively, with prerequisites clearly stated.',
    },
    {
      question: 'Can I jump straight to Cat 2 or Cat 3?',
      answer: 'We recommend completing Cat 1 first to ensure you have the foundational knowledge. However, experienced engineers may request a skills assessment for exemption.',
    },
    {
      question: 'What is the time commitment?',
      answer: 'Each category is self-paced. Cat 1 typically takes 4-6 weeks (20-30 hours), Cat 2 takes 6-8 weeks (30-40 hours), and Cat 3 takes 8-10 weeks (40-50 hours).',
    },
  ];

  const programmes = [
    {
      title: 'Cat 1: Essentials',
      description: 'Build Your Engineering Foundation',
      duration: '4-6 weeks',
      effort: '20-30 hours',
      href: '/courses/eus-cat1',
    },
    {
      title: 'Cat 2: Advanced',
      description: 'Master Complex Systems and Techniques',
      duration: '6-8 weeks',
      effort: '30-40 hours',
      href: '/courses/eus-cat2',
    },
    {
      title: 'Cat 3: Structures',
      description: 'Master Structural Engineering',
      duration: '8-10 weeks',
      effort: '40-50 hours',
      href: '/courses/eus-cat3-structures',
    },
    {
      title: 'Cat 3: Systems',
      description: 'Master Systems Engineering',
      duration: '8-10 weeks',
      effort: '40-50 hours',
      href: '/courses/eus-cat3-systems',
    },
    {
      title: 'Cat 3: Materials',
      description: 'Master Materials Science and Engineering',
      duration: '8-10 weeks',
      effort: '40-50 hours',
      href: '/courses/eus-cat3-materials',
    },
  ];

  const jsonLD = {
    '@context': 'https://schema.org',
    '@graph': [
      courseSchema({
        name: 'School of Engineering',
        description: 'Master advanced engineering skills and specialisations',
        url: 'https://sygma.ai/courses/eus',
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
          imageSrc="/images/hero/eus-hero.jpg"
          imageAlt="School of Engineering"
          title="School of Engineering (EUS)"
          subtitle="Master Advanced Engineering Skills"
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              Engineering Education Structured for Success
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Our Engineering School offers a comprehensive pathway from foundational principles to advanced specialisations. Each category builds on the previous one, ensuring you have the knowledge and skills to excel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-600">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Cat 1: Essentials</h3>
                <p className="text-slate-600">Foundational knowledge for all engineers</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-600">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Cat 2: Advanced</h3>
                <p className="text-slate-600">Specialised skills and complex systems</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-600">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Cat 3: Specialist</h3>
                <p className="text-slate-600">Deep expertise in your chosen field</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-900">
              Our Programmes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmes.map((programme, index) => (
                <Link
                  key={index}
                  href={programme.href}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition border border-slate-200 hover:border-indigo-300"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {programme.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{programme.description}</p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>Duration: {programme.duration}</p>
                    <p>Effort: {programme.effort}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

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
              Start Your Engineering Journey
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Choose your starting point and begin transforming your engineering career today.
            </p>
            <Link
              href="/courses/eus-cat1"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded transition"
            >
              Explore Cat 1: Essentials
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}