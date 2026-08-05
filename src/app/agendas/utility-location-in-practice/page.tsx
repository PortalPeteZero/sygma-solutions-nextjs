import type { Metadata } from 'next';
import ULPAgendaBody from '@/components/ULPAgendaBody';

const TITLE = 'Utility Location in Practice (ULP) — Course Agenda | Sygma';
const DESC = 'The full agenda for Sygma\'s one-day Utility Location in Practice course — the practical-intensive second-stage day that follows the one-day Genny and CAT course. Two practicals on two different types of street, visual surveys throughout, and an individual assessment for every delegate.';
const URL = 'https://sygma-solutions.com/agendas/utility-location-in-practice';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  // Sendable agenda — deliberately kept out of search so it can't cannibalise the /courses pages that rank.
  robots: { index: false, follow: true },
  keywords: ['Utility Location in Practice', 'ULP course', 'Genny and CAT practical training', 'utility survey training', 'visual survey training', 'CAT and Genny second stage course'],
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-06-hsg47-training', width: 1200, height: 630, alt: 'Sygma Utility Location in Practice training on a live street' }],
    type: 'website',
  },
};

export default function Page() {
  return <ULPAgendaBody />;
}
