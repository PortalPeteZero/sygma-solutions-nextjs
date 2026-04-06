import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advanced EM Locator Training | Cable Detection | Sygma',
  description: 'Advanced electromagnetic locator training with CICES competency mapping from Sygma Solutions.',
  canonical: '/courses/advanced-em-locator',
  openGraph: {
    title: 'Advanced EM Locator Training | Cable Detection | Sygma',
    description: 'Advanced EM locator training covering complex detection scenarios and competency mapping.',
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
    question: 'What is advanced EM locator training?',
    answer: 'This course covers advanced electromagnetic locator techniques for complex cable detection scenarios and professional competency development.',
  },
  {
    question: 'What is CICES competency mapping?',
    answer: 'CICES (Competency Information for Cable Excavation Safety) mapping ensures training meets specific competency standards for cable detection professionals.',
  },
  {
    question: 'Who should take this course?',
    answer: 'Experienced cable detection operators seeking to advance their skills and develop professional competency certifications.',
  },
  {
    question: 'What equipment will I use?',
    answer: 'You will use advanced EM locators, signal generators, and sophisticated detection equipment in complex field scenarios.',
  },
  {
    question: 'Is this suitable if I\'ve only done basic training?',
    answer: 'Yes, but completion of CAT 1 and CAT 2 training is recommended before advancing to EM locator specialisation.',
  },
  {
    question: 'How is this different from standard CAT training?',
    answer: 'This course focuses specifically on electromagnetic locator mastery and professional competency requirements for advanced detection work.',
  },
  {
    question: 'Will I gain additional qualifications?',
    answer: 'Yes, upon successful completion you will gain Advanced EM Locator and CICES competency certifications.',
  },
  {
    question: 'How long is the course?',
    answer: 'The advanced course typically runs for 3-4 days with intensive practical and theoretical components.',
  },
  {
    question: 'Can this enhance my career?',
    answer: 'Absolutely. Advanced EM locator certification significantly increases your professional opportunities and market value.',
  },
];

export default function AdvancedEmLocatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({
              name: 'Advanced EM Locator Training',
              description: 'Advanced electromagnetic locator training with CICES competency mapping',
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
              '/courses/advanced-em-locator',
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-4">Advanced EM Locator Training</h2>
          <p className="text-lg text-gray-600 mb-8">
            Specialised advanced training for electromagnetic locator mastery and CICES competency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Specialised Training</h3>
              </div>
              <p>Deep expertise in advanced EM locator techniques and complex detection scenarios.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">CICES Mapping</h3>
              </div>
              <p>Training mapped to CICES competency standards for professional recognition.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Career Advancement</h3>
              </div>
              <p>Gain professional certifications that enhance career prospects significantly.</p>
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
            <h3 className="text-2xl font-semibold mb-4">Advance Your Expertise</h3>
            <p className="text-gray-700 mb-6">
              Master advanced EM locator techniques and gain professional CICES competency certification.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}