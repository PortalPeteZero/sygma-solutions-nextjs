import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Genny CAT Training | Core Cable Avoidance Course | Sygma',
  description: 'Core CAT and Genny training course for safe detection of underground utilities from Sygma Solutions.',
  canonical: '/courses/genny-cat-training',
  openGraph: {
    title: 'Genny CAT Training | Core Cable Avoidance Course | Sygma',
    description: 'Comprehensive CAT and generator equipment training for utility detection professionals.',
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
    question: 'What is Genny equipment?',
    answer: 'Genny refers to generator sets used in conjunction with CAT equipment to create electromagnetic signals for detecting underground utilities.',
  },
  {
    question: 'Why is Genny training essential?',
    answer: 'Proper Genny operation is critical for effective cable detection. This course covers all aspects of safe and effective generator use.',
  },
  {
    question: 'What will I learn about CAT equipment?',
    answer: 'You will learn how to operate, maintain, and troubleshoot CAT receivers and transmitters for safe utility location.',
  },
  {
    question: 'Is hands-on practice included?',
    answer: 'Yes, the course is heavily practical with extensive hands-on training using real CAT and Genny equipment.',
  },
  {
    question: 'How long is the course?',
    answer: 'The comprehensive core training typically runs for one to two days depending on your experience level.',
  },
  {
    question: 'Will I be certified?',
    answer: 'Yes, successful completion results in industry-recognised CAT and Genny operation certification.',
  },
  {
    question: 'Is this the foundation course?',
    answer: 'Yes, this is essential foundational training. Advanced specialisations build upon these core skills.',
  },
  {
    question: 'What if I have no prior experience?',
    answer: 'No experience necessary. We start from fundamental principles and progress through to advanced techniques.',
  },
  {
    question: 'Can I arrange training for my team?',
    answer: 'Absolutely. We offer flexible group training for organisations with multiple participants.',
  },
];

export default function GennyCatTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({
              name: 'Genny CAT Core Training',
              description: 'Core cable avoidance training using CAT and generator equipment',
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
              '/courses/genny-cat-training',
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-4">Core CAT & Genny Training</h2>
          <p className="text-lg text-gray-600 mb-8">
            Comprehensive foundational training in cable avoidance technology and generator equipment operation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">CAT Equipment Mastery</h3>
              </div>
              <p>Learn to operate, maintain, and troubleshoot CAT receivers and transmitters effectively.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Genny Operation</h3>
              </div>
              <p>Master generator set operation, signal creation, and maintenance for reliable utility detection.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Practical Foundation</h3>
              </div>
              <p>Extensive hands-on practice with real equipment in realistic detection scenarios.</p>
            </div>
          </div>

          <div className="my-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Core Training Programme</h3>
            <p className="text-gray-700 mb-6">
              This foundational course is the essential starting point for all cable detection professionals.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>CAT equipment theory and operation</li>
              <li>Genny signal generation and safety</li>
              <li>Practical detection techniques</li>
              <li>Troubleshooting and maintenance</li>
              <li>Health and safety in utility detection</li>
              <li>Industry best practices</li>
            </ul>
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
            <h3 className="text-2xl font-semibold mb-4">Start Your Cable Detection Journey</h3>
            <p className="text-gray-700 mb-6">
              Gain the foundational skills needed for a successful career in utility detection.
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