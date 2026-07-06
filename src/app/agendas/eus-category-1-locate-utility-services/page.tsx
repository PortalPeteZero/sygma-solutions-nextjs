import type { Metadata } from 'next';
import CourseAgendaBody from '@/components/CourseAgendaBody';

const TITLE = 'EUS Category 1: Locate Utility Services (HSG47) — Course Agenda | Sygma';
const DESC = 'The full course agenda for EUS Category 1: Locate Utility Services (HSG47) — Sygma\'s one-day Genny and CAT utility detection training. Theory, practical disciplines, assessment and certificate options.';
const URL = 'https://sygma-solutions.com/agendas/eus-category-1-locate-utility-services';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  // Sendable agenda — deliberately kept out of search so it can't cannibalise the /courses pages that rank.
  robots: { index: false, follow: true },
  keywords: ['EUS Category 1', 'EUSR Cat 1', 'Locate Utility Services', 'HSG47 training', 'CAT and Genny training', 'utility detection course agenda'],
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-56', width: 1200, height: 630, alt: 'Sygma EUS Category 1 Locate Utility Services training' }],
    type: 'website',
  },
};

export default function Page() {
  return (
    <CourseAgendaBody
      h1={<>EUS Category 1: <span className="text-accent">Locate Utility Services</span></>}
      strapline={<>HSG47 <span className="text-accent">·</span> Genny and CAT <span className="text-accent">·</span> Cable Avoidance</>}
      schemaName="EUS Category 1: Locate Utility Services (HSG47) — Genny and CAT training"
      schemaUrl="/agendas/eus-category-1-locate-utility-services"
      breadcrumbLabel="EUS Category 1 Locate Utility Services"
    />
  );
}
