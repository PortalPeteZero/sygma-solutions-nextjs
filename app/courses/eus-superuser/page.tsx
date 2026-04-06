import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EUSR Superuser Training | Advanced Cable Detection | Sygma',
  description: 'Advanced superuser training for supervisory and management roles in cable avoidance from Sygma Solutions.',
  canonical: '/courses/eus-superuser',
  openGraph: {
    title: 'EUSR Superuser Training | Advanced Cable Detection | Sygma',
    description: 'Advanced training for supervisors and managers in cable detection operations.',
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
    question: 'What makes this a superuser-level course?',
    answer: 'This course covers advanced supervisory and management responsibilities, including team oversight, quality control, and regulatory compliance.',
  },
  {
    question: 'Who should attend?',
    answer: 'Site supervisors, team leaders, project managers, and anyone responsible for overseeing cable detection activities.',
  },
  {
    question: 'What additional skills will I learn?',
    answer: 'You will learn advanced troubleshooting, equipment management, team supervision, and regulatory compliance in addition to technical skills.',
  },
  {
    question: 'Is this suitable if I\'ve only completed CAT 1?',
    answer: 'Yes, but completion of CAT 2 is recommended for best results. We can discuss your specific experience.',
  },
  {
    question: 'What is the focus on management?',
    answer: 'We cover quality assurance, team coordination, safety protocols, and ensuring compliance with HSE regulations on site.',
  },
  {
    question: 'Can we arrange training for our management team?',
    answer: 'Absolutely. We offer bespoke group training for organisations with multiple supervisors or managers.',
  },
  {
    question: 'How does this compare to external management courses?',
    answer: 'Our course combines cable avoidance expertise with practical management skills specific to utility detection operations.',
  },
  {
    question: 'What ongoing support is available?',
    answer: 'We provide ongoing mentoring, updates on regulatory changes, and refresher training as required.',
  },
  {
    question: 'Is formal qualification awarded?',
    answer: 'Yes, successful completion results in EUSR Superuser certification recognised across the industry.',
  },
  {
    question: 'Can this course improve team safety?',
    answer: 'Significantly. Proper supervision and management of cable detection directly improves safety outcomes for your entire team.',
  },
];

export default function EusSuperuserPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({
              name: 'EUSR Superuser Training',
              description: 'Advanced supervisory and management training for cable detection operations',
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
              '/courses/eus-superuser',
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-4">EUSR Superuser Training</h2>
          <p className="text-lg text-gray-600 mb-8">
            Advanced training for supervisors and managers overseeing cable detection operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Advanced Technical</h3>
              </div>
              <p>Deep-dive technical training for complex cable detection scenarios and troubleshooting.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Management Skills</h3>
              </div>
              <p>Team leadership, safety oversight, and regulatory compliance for detection operations.</p>
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
            <h3 className="text-2xl font-semibold mb-4">Leadership Development</h3>
            <p className="text-gray-700 mb-6">
              Develop advanced technical and management capabilities for your leadership team.
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