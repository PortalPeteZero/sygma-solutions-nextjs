import type { Metadata } from 'next';
import { breadcrumbSchema, localBusinessSchema, organizationSchema } from '@/lib/schema';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Sygma Solutions | Book Your Training Course',
  description: 'Contact Sygma Solutions to book a course, request a quote, or enquire about bespoke training. We respond within one working day.',
  alternates: { canonical: 'https://sygma-solutions.com/contact' },
  openGraph: {
    title: 'Contact Sygma Solutions | Book Your Training Course',
    description: 'Contact Sygma Solutions to book a course, request a quote, or enquire about bespoke training. We respond within one working day.',
    url: 'https://sygma-solutions.com/contact',
    siteName: 'Sygma Solutions',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/sygma-solutions/branding/logo',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Contact', to: '/contact' }]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <ContactClient />
    </>
  );
}
