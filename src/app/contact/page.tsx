import type { Metadata } from 'next';
import { breadcrumbSchema, localBusinessSchema, organizationSchema } from '@/lib/schema';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Sygma Solutions | Book Your Training Course',
  description: 'Contact Sygma Solutions to book a course, request a quote, or enquire about bespoke training. We respond within one working day.',
  alternates: { canonical: 'https://sygma-solutions.com/contact' },
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
