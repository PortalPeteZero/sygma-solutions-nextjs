import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EUSR CAT 2 Safe Dig Training | Cable Avoidance | Sygma',
  description: 'Safe dig excavation training course focusing on cable avoidance and HSG47 compliance from Sygma Solutions.',
  canonical: '/courses/eus-cat2-safe-dig',
  openGraph: {
    title: 'EUSR CAT 2 Safe Dig Training | Cable Avoidance | Sygma',
    description: 'Safe dig excavation training course with HSG47 compliance focus.',
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
    question: 'What is HSG47?',
    answer: 'HSG47 is the Health and Safety Executive guidance on avoiding danger from underground services. Our course ensures full compliance with these regulations.',
  },
  {
    question: 'What is the Safe Dig technique?',
    answer: 'Safe Dig combines mechanical excavation with careful cable avoidance, using hand tools to safely uncover utilities without causing damage.',
  },
  {
    question: 'How does this differ from standard CAT 2?',
    answer: 'This course specifically emphasises safe excavation practices alongside CAT 2 detection techniques, with practical safe digging demonstrations.',
  },
  {
    question: 'Who needs this training?',
    answer: 'Excavation operators, site workers, and anyone involved in digging activities where underground utilities may be present.',
  },
  {
    question: 'Are there practical excavation drills?',
    answer: 'Yes, the course includes practical hands-on safe digging exercises in controlled training environments.',
  },
  {
    question: 'Is this relevant to my industry?',
    answer: 'This training is essential for construction, utilities, telecommunications, and any sector involving ground works.',
  },
];

export default function EusCat2SafeDigPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({
              name: 'EUSR CAT 2 Safe Dig Training',
              description: 'Safe dig excavation training with HSG47 compliance',
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
              '/courses/eus-cat2-safe-dig',
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-4">Safe Dig Excavation Training</h2>
          <p className="text-lg text-gray-600 mb-8">
            Master safe excavation techniques whilst avoiding underground utilities with HSG47 compliance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">HSG47 Compliant</h3>
              </div>
              <p>Full compliance with Health and Safety Executive guidance on underground services.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Practical Drills</h3>
              </div>
              <p>Hands-on training in safe excavation techniques and cable avoidance.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Risk Reduction</h3>
              </div>
              <p>Significantly reduce the risk of incidents and utility damage on site.</p>
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
            <h3 className="text-2xl font-semibold mb-4">Essential Training for Excavation</h3>
            <p className="text-gray-700 mb-6">
              Protect your team and infrastructure with proper safe dig training.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Enrol Today
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}