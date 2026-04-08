import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'CAT and Genny Training Courses | Cable Avoidance | Sygma',
  description: 'CAT and Genny training courses from the UK\'s independent cable avoidance specialist. EUS CAT1, ProQual, PAS 128, GPR. On-site delivery, CITB approved.',
  alternates: { canonical: 'https://sygma-solutions.com/courses' },
  openGraph: {
    title: 'CAT and Genny Training Courses | Cable Avoidance | Sygma',
    description: 'CAT and Genny training courses from the UK\'s independent cable avoidance specialist.',
    url: 'https://sygma-solutions.com/courses',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function CoursesPage() {
  const faqs = [
    { q: 'What CAT and Genny training courses does Sygma offer?', a: 'Sygma offers a full range of cable avoidance training including EUS CAT1, ProQual CAT1 and CAT1 Plus, EUS CAT2 Safe Dig, CAT Manager, and the RQF Level 2 Award. We also deliver specialist courses such as Advanced EM Locator, GPR training, and PAS128 awareness.' },
    { q: 'Are Sygma courses CITB approved?', a: 'Yes. Sygma is a CITB Approved Training Organisation. CITB-registered employers may be able to access funding support for eligible courses through the CITB Employer Network.' },
    { q: 'What is the difference between EUS CAT1 and ProQual CAT1?', a: 'EUS CAT1 leads to EUSR card registration, which is the industry-standard proof of cable avoidance competency. ProQual CAT1 is externally verified and accredited by ProQual Accreditations, offering a higher standard of individual assessment. Both cover cable avoidance but through different assessment routes.' },
    { q: 'Do you deliver training on-site at our premises?', a: 'Yes. Sygma delivers on-site training across the UK. On-site delivery is available for most courses and requires a minimum of 4 delegates. We bring all equipment and materials to your location.' },
    { q: 'What qualifications can I gain through Sygma?', a: 'Depending on the course, you can gain EUS/EUSR cards, ProQual accredited certificates, Ofqual-regulated ProQual Level 2 to Level 6 qualifications in utility mapping and surveying, and Sygma attendance certificates.' },
    { q: 'What is the maximum group size for assessed courses?', a: 'Sygma operates a strict maximum of 8 delegates per trainer/assessor session for all assessed courses. This is a deliberate limit maintained across all delivery to ensure proper individual assessment.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">CAT and Genny Training Courses</h1>
          <p className="text-xl mb-8">Cable avoidance training, utility mapping qualifications, and specialist locator courses. Delivered by the UK&apos;s only independent underground utility training provider.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">CITB Approved</h3>
              <p className="text-gray-600">All our courses are CITB-approved and recognised across the construction industry</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Expert Trainers</h3>
              <p className="text-gray-600">Learn from experienced construction professionals with decades of industry experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Flexible Learning</h3>
              <p className="text-gray-600">Choose from in-house, on-site, or blended learning options to suit your needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">{q}</h3>
                <p className="text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Develop Your Team?</h2>
          <p className="text-xl mb-8">Get in touch to discuss which course is right for your organisation</p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}