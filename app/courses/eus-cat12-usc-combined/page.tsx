import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EUSR CAT 1, CAT 2 & USC Combined Training | Sygma',
  description: 'Combined EUSR CAT 1, CAT 2, and Underground Service Coordinator training course. Complete utility detection and coordination training.',
  canonical: '/courses/eus-cat12-usc-combined',
  openGraph: {
    title: 'EUSR CAT 1, CAT 2 & USC Combined Training | Sygma',
    description: 'Combined three-component training covering cable detection and underground service coordination.',
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
    question: 'What is the Underground Service Coordinator (USC) component?',
    answer: 'USC training teaches coordination and management of utility detection activities on site, including planning and supervising cable avoidance work.',
  },
  {
    question: 'How long is the full combined programme?',
    answer: 'The complete CAT 1, CAT 2, and USC programme typically runs for three to four days depending on group size and experience levels.',
  },
  {
    question: 'Who should take the USC component?',
    answer: 'Site managers, project coordinators, and supervisors who need to oversee and coordinate utility detection activities.',
  },
  {
    question: 'Can I take individual components separately?',
    answer: 'Yes, each component can be taken independently, though the combined programme offers better value and comprehensive coverage.',
  },
  {
    question: 'What qualifications will I have at the end?',
    answer: 'You will hold EUSR CAT 1, EUSR CAT 2, and EUSR USC certifications, making you fully qualified for advanced site coordination.',
  },
  {
    question: 'Is this course suitable for large teams?',
    answer: 'Absolutely. We can arrange bespoke group training with flexible scheduling for organisations with multiple participants.',
  },
];

export default function EusCat12UscCombinedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({
              name: 'EUSR CAT 1, CAT 2 & USC Combined Training',
              description: 'Complete three-component underground utility detection and coordination training',
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
              '/courses/eus-cat12-usc-combined',
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-4">Complete Utility Detection & Coordination Training</h2>
          <p className="text-lg text-gray-600 mb-8">
            Master cable detection, advanced techniques, and site coordination in one comprehensive programme.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">CAT 1 & CAT 2</h3>
              </div>
              <p>Complete cable detection training with both passive and active techniques.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">USC Coordination</h3>
              </div>
              <p>Learn to manage and coordinate utility detection activities on site.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Triple Certification</h3>
              </div>
              <p>Gain three EUSR qualifications in a single comprehensive programme.</p>
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
            <h3 className="text-2xl font-semibold mb-4">Professional Development</h3>
            <p className="text-gray-700 mb-6">
              Complete training for site managers and technical specialists.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get More Information
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}