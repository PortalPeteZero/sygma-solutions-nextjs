import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EUSR CAT 1 Training | Cat and Genny Course | Sygma',
  description: 'EUSR CAT 1 cable avoidance training course from Sygma. Hands-on training for safe detection of underground services using CAT and Genny equipment.',
  canonical: '/courses/eus-cat1',
  openGraph: {
    title: 'EUSR CAT 1 Training | Cat and Genny Course | Sygma',
    description: 'EUSR CAT 1 cable avoidance training course from Sygma. Hands-on training for safe detection of underground services using CAT and Genny equipment.',
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
    question: 'What is EUSR CAT 1 training?',
    answer: 'EUSR CAT 1 training teaches cable avoidance techniques using Cable Avoidance Tools and generator equipment to safely detect underground utilities.',
  },
  {
    question: 'Who should take this course?',
    answer: 'Anyone involved in excavation, construction, or utility location work should take CAT 1 training to ensure safe underground service detection.',
  },
  {
    question: 'How long is the course?',
    answer: 'The EUSR CAT 1 course typically runs for one day, combining theoretical knowledge with practical hands-on training.',
  },
  {
    question: 'Is the qualification recognised?',
    answer: 'Yes, EUSR qualifications are recognised across the UK and Europe as the standard for cable and pipe avoidance training.',
  },
  {
    question: 'What equipment will I use?',
    answer: 'You will use CAT equipment and generator sets to locate cables, pipes, and other underground utilities safely.',
  },
  {
    question: 'Can I book a refresher course?',
    answer: 'Yes, we offer refresher courses for those who wish to update their knowledge or maintain their certification.',
  },
  {
    question: 'What is the pass rate?',
    answer: 'Most candidates pass the assessment. We provide comprehensive training to ensure you are fully prepared.',
  },
  {
    question: 'Do you offer onsite training?',
    answer: 'Yes, we can arrange bespoke onsite training for organisations with larger groups or specific requirements.',
  },
  {
    question: 'What if I fail the assessment?',
    answer: 'We offer resit opportunities with additional support to help you achieve the qualification.',
  },
  {
    question: 'How often should I renew my certification?',
    answer: 'EUSR CAT qualifications are typically valid for 3 years, after which refresher or renewal training is recommended.',
  },
];

export default function EusCat1Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({
              name: 'EUSR CAT 1 Training',
              description: 'EUSR CAT 1 cable avoidance training course',
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
              '/courses/eus-cat1',
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-4">EUSR CAT 1 Training</h2>
          <p className="text-lg text-gray-600 mb-8">
            Hands-on training for safe detection of underground services using CAT and Genny equipment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Practical Training</h3>
              </div>
              <p>Hands-on practice with CAT and generator equipment in real-world scenarios.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">EUSR Certified</h3>
              </div>
              <p>Recognised EUSR qualification upon successful completion of assessment.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Expert Trainers</h3>
              </div>
              <p>Learn from experienced professionals with years of industry expertise.</p>
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
            <h3 className="text-2xl font-semibold mb-4">Ready to Book?</h3>
            <p className="text-gray-700 mb-6">
              Start your EUSR CAT 1 training journey today.
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