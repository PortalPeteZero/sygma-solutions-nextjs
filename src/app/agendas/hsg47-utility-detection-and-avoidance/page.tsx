import type { Metadata } from 'next';
import CourseAgendaBody from '@/components/CourseAgendaBody';

const TITLE = 'HSG47 Utility Detection & Avoidance Training — Course Agenda | Sygma';
const DESC = 'The full course agenda for Sygma\'s one-day Genny and CAT utility detection and avoidance training (incorporating EUS Cat 1). Theory, practical disciplines, assessment and certificate options.';
const URL = 'https://sygma-solutions.com/agendas/hsg47-utility-detection-and-avoidance';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  // Sendable agenda — deliberately kept out of search so it can't cannibalise the /courses pages that rank.
  robots: { index: false, follow: true },
  keywords: ['Genny and CAT training', 'CAT and Genny training', 'HSG47 training', 'EUS Cat 1', 'cable avoidance course agenda', 'utility detection training'],
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-56', width: 1200, height: 630, alt: 'Sygma Genny and CAT utility detection and avoidance training' }],
    type: 'website',
  },
};

export default function Page() {
  return (
    <CourseAgendaBody
      h1={<>HSG47 Utility Detection <span className="text-accent">&amp; Avoidance</span> Training</>}
      strapline={<>Genny and CAT <span className="text-accent">·</span> incorporating EUS Cat 1</>}
      schemaName="HSG47 Utility Detection & Avoidance Training (Genny and CAT, incorporating EUS Cat 1)"
      schemaUrl="/agendas/hsg47-utility-detection-and-avoidance"
      breadcrumbLabel="Course Agenda — HSG47 Utility Detection & Avoidance"
    />
  );
}
