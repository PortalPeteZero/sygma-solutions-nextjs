import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Training Course Prices & Booking | Sygma Solutions',
  description: 'Sygma charges one course fee per group, not per person. Travel is included. Find out how our per-course pricing model works and get a quote.',
  canonical: 'https://sygma-solutions.com/pricing',
  openGraph: {
    title: 'Training Course Prices & Booking | Sygma Solutions',
    description: 'Sygma charges one course fee per group, not per person. Travel is included.',
    url: 'https://sygma-solutions.com/pricing',
    type: 'website',
  },
};

export default function PricingPage() {
  const benefits = [
    {
      title: 'Per course, not per person',
      desc: 'Sygma charges a single course fee for the whole group. Whether you send 4 people or 8, the fee is the same. There is no per-delegate pricing and no incentive for us to overstate group sizes.',
    },
    {
      title: 'Travel included',
      desc: 'All travel within the UK mainland is included. We come to your site, your yard, or your offices. No mileage charges, no accommodation surcharges.',
    },
    {
      title: 'No hidden extras',
      desc: 'The course fee covers delivery, trainer time, all assessment materials, and your group feedback report. The only additional cost is the awarding body registration fee where applicable, which is set by the awarding body and passed through at cost.',
    },
    {
      title: 'Multi-day packages available',
      desc: 'Courses can be combined into multi-day programmes. CAT1 + CAT2, or CAT1 Plus + CAT2 Safe Dig, delivered back to back at your site. One visit, multiple accreditations.',
    },
  ];

  const faqs = [
    {
      q: 'Why does Sygma charge per course and not per person?',
      a: 'Because the cost drivers in our business are trainer time and travel, not headcount. Charging per course means you pay a fair rate regardless of whether you have 4 people or 8. It also means there is no incentive for us to overstate group sizes.',
    },
    {
      q: 'What is the maximum group size?',
      a: 'The maximum group size for practical utility avoidance courses is 8 delegates. For theory-only or awareness modules, groups of up to 12 can be accommodated. If you have more than 8 people to train, we book additional sessions at the same day rate.',
    },
    {
      q: 'Is there a minimum group size?',
      a: 'There is no minimum. We have delivered courses to groups of 3 and groups of 8. The course fee is the same either way.',
    },
    {
      q: 'What is not included in the course fee?',
      a: 'The only cost not included is the awarding body registration fee where applicable. For EUS courses, there is an EUS registration fee per delegate, paid to Energy and Utility Skills. This is fixed by the awarding body and passed through at cost with no Sygma markup. Your trainer will confirm the current fee at booking.',
    },
    {
      q: 'Can CITB-registered employers access funding?',
      a: 'Sygma Solutions is a CITB Approved Training Organisation (ATO). CITB-registered employers may be able to access funding support towards eligible training costs through the CITB Employer Network. Contact your CITB Employer Network adviser to confirm which courses qualify and how to apply. We can assist you with the process.',
    },
    {
      q: 'Can I get a bespoke quote for a large training programme?',
      a: 'Yes. For programmes involving multiple sessions, multiple sites, or multi-day delivery, contact us to discuss a programme-level cost. We can usually provide a fixed programme fee for larger requirements.',
    },
    {
      q: 'How do I get a quote?',
      a: 'Contact us with the course you need, the number of delegates, and your preferred delivery location. We will confirm availability and provide a fixed quotation with no obligation.',
    },
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
          <h1 className="text-5xl font-bold mb-4">Per Course, Not Per Person. No Surprises.</h1>
          <p className="text-xl mb-8">Sygma charges one fixed course fee for your whole group. Travel is included. There are no hidden extras. Contact us for a quote tailored to your requirements.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((b) => (
              <div key={b.title} className="border border-gray-300 rounded-lg bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">CITB Employer Network</h2>
          <div className="space-y-4 max-w-3xl">
            <p>Sygma Solutions is a CITB Approved Training Organisation (ATO). This means that CITB-registered employers may be able to access support towards the cost of training through the CITB Employer Network.</p>
            <p>CITB-registered employers work with a CITB Employer Network adviser, who can access funding towards eligible training costs. This is not a direct grant claim. It is a managed funding process through an adviser.</p>
            <p>Funding is available on a finite annual budget and is not guaranteed. Contact your CITB Employer Network adviser directly. For more information, visit CITB.co.uk/levy-grants-and-funding.</p>
            <p className="font-semibold">We recommend booking training based on its operational need, not on the assumption that CITB funding will be available.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-300 rounded-lg bg-gray-50 p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border-t border-b border-blue-200 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get in Touch?</h2>
          <p className="text-gray-600 mb-6">Tell us the course you need, the number of delegates, and your preferred location. We will confirm availability and provide a fixed quotation with no obligation.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}