import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from "@/components/PageHero";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
];

export const metadata: Metadata = {
  title: 'Contact Sygma Solutions | Get in Touch',
  description: 'Reach out to Sygma Solutions. We\'d love to hear from you about partnerships, enquiries, or how we can help.',
};

export default function ContactPage() {
  const contactMethods = [
    {
      method: 'Email',
      value: 'hello@sygma.ai',
      icon: '✉️',
    },
    {
      method: 'Phone',
      value: '+1 (555) 123-4567',
      icon: '📱',
    },
    {
      method: 'Location',
      value: 'San Francisco, CA',
      icon: '📍',
    },
  ];

  const jsonLD = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema(breadcrumbs),
      organizationSchema({
        name: 'Sygma Solutions',
        url: 'https://sygma.ai',
      }),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <div className="min-h-screen flex flex-col bg-white">
        <PageHero
          imageSrc="/images/hero/contact-hero.jpg"
          imageAlt="Contact Sygma Solutions"
          title="Get in Touch"
          subtitle="We'd love to hear from you. Reach out with questions or partnership opportunities."
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactMethods.map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-3xl">{contact.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {contact.method}
                      </h3>
                      <p className="text-slate-600">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">
                  Response Time
                </h3>
                <p className="text-slate-600">
                  We typically respond to enquiries within 24 business hours. For urgent matters, please call us directly.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
                Send us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}