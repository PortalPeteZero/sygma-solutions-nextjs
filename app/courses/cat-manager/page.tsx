import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CAT Manager Online Training | Utility Detection | Sygma',
  description: 'CAT Manager online training course for utility detection management from Sygma Solutions.',
  canonical: '/courses/cat-manager',
  openGraph: {
    title: 'CAT Manager Online Training | Utility Detection | Sygma',
    description: 'Manager-level training for utility detection operations and team oversight.',
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
    question: 'What does a CAT Manager do?',
    answer: 'A CAT Manager oversees cable detection operations, ensuring quality, safety, and regulatory compliance whilst managing personnel and equipment.',
  },
  {
    question: 'Is this course online?',
    answer: 'Yes, the course is delivered entirely online, allowing flexible scheduling for busy managers.',
  },
  {
    question: 'What management skills are covered?',
    answer: 'We cover team supervision, quality assurance, health and safety compliance, regulatory requirements, and operational planning.',
  },
  {
    question: 'Do I need prior CAT experience?',
    answer: 'Some understanding of cable detection is helpful but not mandatory. We cover technical fundamentals for managers.',
  },
  {
    question: 'How long is the course?',
    answer: 'The course typically takes 3-4 weeks to complete with online modules, assessments, and practical elements.',
  },
  {
    question: 'What qualification do I receive?',
    answer: 'Successful completion results in a recognised CAT Manager certification valid across the utility detection industry.',
  },
  {
    question: 'Can I arrange group training?',
    answer: 'Yes, we can arrange cohort-based training for organisations with multiple managers requiring certification.',
  },
  {
    question: 'Is there ongoing support?',
    answer: 'Yes, we provide post-qualification mentoring and access to industry updates and continuing education resources.',
  },
  {
    question: 'Will this improve operational efficiency?',
    answer: 'Absolutely. Proper management training leads to better team performance, safer operations, and improved compliance.',
  },
];

export default function CatManagerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({
              name: 'CAT Manager Online Training',
              description: 'Manager-level training for cable detection operations',
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
              '/courses/cat-manager',
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-4">CAT Manager Training</h2>
          <p className="text-lg text-gray-600 mb-8">
            Manager-level online training for overseeing cable detection operations and teams.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Management Focus</h3>
              </div>
              <p>Learn to manage cable detection teams, ensure compliance, and drive operational excellence.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Flexible Online</h3>
              </div>
              <p>Complete the course online with flexible scheduling to fit your management responsibilities.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Industry Recognised</h3>
              </div>
              <p>Gain a recognised CAT Manager qualification respected across the utility detection sector.</p>
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
            <h3 className="text-2xl font-semibold mb-4">Develop Your Management Skills</h3>
            <p className="text-gray-700 mb-6">
              Become a certified CAT Manager and lead your cable detection operations to new levels of excellence.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}