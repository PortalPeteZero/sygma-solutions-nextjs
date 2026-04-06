import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CAT 4 HSG Awareness Online Course | Sygma',
  description: 'Online awareness training course for cable and pipe avoidance with HSG guidance compliance from Sygma Solutions.',
  canonical: '/courses/cat4-hsg-awareness-online',
  openGraph: {
    title: 'CAT 4 HSG Awareness Online Course | Sygma',
    description: 'Flexible online awareness training for cable and pipe avoidance.',
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
    question: 'What is CAT 4 HSG awareness?',
    answer: 'This online course provides awareness training on cable and pipe avoidance following Health and Safety Executive guidance.',
  },
  {
    question: 'Can I complete this entirely online?',
    answer: 'Yes, the course is fully online and can be completed at your own pace with flexible scheduling.',
  },
  {
    question: 'How long does the course take?',
    answer: 'Most participants complete the course in 2-3 hours, depending on their experience level and pace.',
  },
  {
    question: 'Is this a formal qualification?',
    answer: 'Yes, successful completion provides a recognised awareness certification in cable and pipe avoidance.',
  },
  {
    question: 'Who should take this course?',
    answer: 'Anyone involved in ground works, construction, or excavation activities who needs awareness-level training.',
  },
  {
    question: 'What will I learn?',
    answer: 'Key principles of cable avoidance, HSE guidance, identification of underground services, and safe working practices.',
  },
];

export default function Cat4HsgAwarenessOnlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({
              name: 'CAT 4 HSG Awareness Online',
              description: 'Online cable and pipe avoidance awareness training',
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
              '/courses/cat4-hsg-awareness-online',
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-4">CAT 4 HSG Awareness Online</h2>
          <p className="text-lg text-gray-600 mb-8">
            Self-paced online awareness training for cable and pipe avoidance compliance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Fully Online</h3>
              </div>
              <p>Complete the course entirely online at your own pace, from any location.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Quick Completion</h3>
              </div>
              <p>Most participants complete the course in 2-3 hours of self-paced learning.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Certification</h3>
              </div>
              <p>Receive recognised awareness certification upon successful completion.</p>
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
            <h3 className="text-2xl font-semibold mb-4">Start Your Online Training</h3>
            <p className="text-gray-700 mb-6">
              Complete your cable avoidance awareness training on your schedule.
            </p>
            <Link href="/enrol" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Enrol Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}