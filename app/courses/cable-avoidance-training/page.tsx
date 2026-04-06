import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cable Avoidance Training | Safety Courses | Sygma',
  description: 'General cable avoidance training with bespoke content and flexible format options from Sygma Solutions.',
  canonical: '/courses/cable-avoidance-training',
  openGraph: {
    title: 'Cable Avoidance Training | Safety Courses | Sygma',
    description: 'Flexible cable avoidance training with bespoke content options.',
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
    question: 'What cable avoidance training do you offer?',
    answer: 'We offer flexible cable avoidance training ranging from brief awareness sessions to comprehensive multi-day programmes, tailored to your needs.',
  },
  {
    question: 'Can you customise training content?',
    answer: 'Yes, we specialise in bespoke training. We can tailor content to your industry, specific risks, and organisational requirements.',
  },
  {
    question: 'What formats are available?',
    answer: 'We offer classroom-based training, onsite training, online modules, and blended learning approaches to suit your preferences.',
  },
  {
    question: 'Who should attend?',
    answer: 'Anyone involved in ground works, construction, utilities, or excavation should receive cable avoidance awareness training.',
  },
  {
    question: 'How long are the courses?',
    answer: 'Training can range from short 2-hour awareness sessions to comprehensive 3-5 day programmes, depending on your requirements.',
  },
  {
    question: 'Is certification provided?',
    answer: 'Yes, all participants receive certifications. EUSR qualifications are available for formal cable detection training.',
  },
];

export default function CableAvoidanceTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            courseSchema({
              name: 'Cable Avoidance Training',
              description: 'Flexible cable avoidance training with customisable content',
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
              '/courses/cable-avoidance-training',
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-4">Cable Avoidance Training</h2>
          <p className="text-lg text-gray-600 mb-8">
            Flexible training programmes tailored to your organisation with bespoke content and multiple delivery options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Customisable</h3>
              </div>
              <p>Bespoke content tailored to your industry and specific cable avoidance risks.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Flexible Format</h3>
              </div>
              <p>Choose classroom, onsite, online, or blended learning approaches.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-600 mr-2" />
                <h3 className="text-xl font-semibold">Certified</h3>
              </div>
              <p>Participants receive recognised certifications upon successful completion.</p>
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
            <h3 className="text-2xl font-semibold mb-4">Get Your Customised Training</h3>
            <p className="text-gray-700 mb-6">
              Contact us to discuss your organisation's cable avoidance training needs.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}