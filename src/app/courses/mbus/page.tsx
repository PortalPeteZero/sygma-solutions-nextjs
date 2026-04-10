import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Courses', href: '/courses' },
  { label: 'School of Business (MBUS)', href: '/courses/mbus' },
];

export const metadata: Metadata = {
  title: 'School of Business (MBUS) | Sygma Solutions',
  description: 'Master business skills and leadership with Sygma Solutions\' School of Business. Develop strategic thinking and business acumen.',
};

export default function MBUSPage() {
  const faqData = [
    {
      question: 'Who should take these business courses?',
      answer: 'These courses are for anyone wanting to develop business skills, whether you\'re seeking promotion, transitioning careers, or starting a business.',
    },
    {
      question: 'What makes business education relevant?',
      answer: 'Our curriculum is designed with input from industry leaders and covers current business challenges, strategies, and tools used in real organisations.',
    },
    {
      question: 'Can I take courses without previous business knowledge?',
      answer: 'Absolutely. Our Introduction to Business course is designed for complete beginners and provides the foundation for all other courses.',
    },
    {
      question: 'What career paths do these courses support?',
      answer: 'Business skills are valuable across all industries and functions. Our graduates pursue roles in management, strategy, entrepreneurship, and leadership.',
    },
  ];

  const programmes = [
    {
      title: 'Introduction to Business',
      description: 'Master Business Fundamentals',
      duration: '4-6 weeks',
      effort: '20-30 hours',
      href: '/courses/mbus-intro',
    },
  ];

  const jsonLD = {
    '@context': 'https://schema.org',
    '@graph': [
      courseSchema({
        name: 'School of Business',
        description: 'Master business skills and strategic thinking',
        url: 'https://sygma.ai/courses/mbus',
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
          imageSrc="/images/hero/mbus-hero.jpg"
          imageAlt="School of Business"
          title="School of Business (MBUS)"
          subtitle="Master Business Skills and Leadership"
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              Business Education for the Modern Professional
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Sygma Solutions\' School of Business equips professionals with the strategic thinking, analytical skills, and leadership capabilities needed to succeed in today\'s dynamic business environment. Our courses combine theory with practical application.
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-600">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Why Sygma Business Courses?</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Industry-expert instructors with real-world experience</li>
                <li>Practical case studies from leading organisations</li>
                <li>Self-paced learning suited to busy professionals</li>
                <li>Recognised certifications that advance your career</li>
              </ul>
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
              Ready to Advance Your Business Career?
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Start with our Introduction to Business course and build a strong foundation for professional success.
            </p>
            <Link
              href="/courses/mbus-intro"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded transition"
            >
              Explore Introduction to Business
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}