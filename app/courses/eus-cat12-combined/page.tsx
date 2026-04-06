import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EUSR CAT 1 & CAT 2 Combined Training | Sygma',
  description: 'Combined two-day EUSR CAT 1 and CAT 2 cable avoidance training course from Sygma. Complete training for underground utility detection.',
  canonical: '/courses/eus-cat12-combined',
  openGraph: {
    title: 'EUSR CAT 1 & CAT 2 Combined Training | Sygma',
    description: 'Combined two-day EUSR CAT 1 and CAT 2 cable avoidance training course from Sygma.',
  },
};

const courseSchema = (data: any) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: data.name,
  description: data.description,
  provider: {
    '@type': 'Organization',
    name: 'Sygma Solutions',
    url: 'https://sygma-solutions.co.uk',
  },
});

const faqPageSchema = (faqs: any[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

const breadcrumbSchema = (items: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item,
    item: `https://sygma-solutions.co.uk${item === 'Home' ? '' : item}`,
  })),
});

const faqs = [
  {
    question: 'What is the difference between CAT 1 and CAT 2?',
    answer: 'CAT 1 focuses on cable avoidance using passive detection, while CAT 2 covers active signal tracing and pipe detection techniques.',
  },
  {
    question: 'How long is the combined course?',
    answer: 'The combined CAT 1 and CAT 2 course runs over two days, providing comprehensive coverage of both skill sets.',
  },
  {
    question: 'Is prior experience required?',
    answer: 'No prior experience is necessary. The course covers fundamental principles through to advanced techniques.',
  },
  {
    question: 'What certifications will I receive?',
    answer: 'You will receive separate EUSR CAT 1 and CAT 2 certifications upon successful completion of both components.',
  },
  {
    question: 'Can I take just CAT 2 without CAT 1?',
    answer: 'We recommend completing CAT 1 first for a solid foundation, but we can discuss individual circumstances.',
  },
  {
    question: 'Are there ongoing support options?',
    answer: 'Yes, we offer refresher courses and continuing support for all graduates of our training programmes.',
  },
];

export default function EusCat12CombinedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({
              name: 'EUSR CAT 1 & CAT 2 Combined Training',
              description: 'Two-day combined cable avoidance training course',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              '/courses',
              '/courses/eus-cat12-combined',
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-4">EUSR CAT 1 & CAT 2 Combined Training</h2>
          <p className="text-lg text-gray-600 mb-8">
            Complete two-day training combining cable avoidance fundamentals with advanced detection techniques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Day 1: CAT 1 Fundamentals</h3>
              <p>Learn passive cable detection using CAT equipment and generator sets, with practical hands-on training.</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Day 2: CAT 2 Advanced</h3>
              <p>Progress to active signal tracing and pipe detection with advanced troubleshooting techniques.</p>
            </div>
          </div>

          <div className="my-12">
            <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="border rounded-lg p-4">
                  <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="my-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Comprehensive Training</h3>
            <p className="text-gray-700 mb-6">
              Master both CAT 1 and CAT 2 techniques in one intensive two-day course.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}