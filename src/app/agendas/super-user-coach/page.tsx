import type { Metadata } from 'next';
import SuperUserAgendaBody from '@/components/SuperUserAgendaBody';

const TITLE = '2 Day Super User Coach — Course Agenda | Sygma';
const DESC = 'The full course agenda for Sygma\'s 2 Day Super User Coach — advanced utility location, CAT data analysis, and on-site coaching & competency assessment. Builds on EUS Cat 1.';
const URL = 'https://sygma-solutions.com/agendas/super-user-coach';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  keywords: ['Super User Coach', 'utility location super user', 'locator coach', 'CAT and Genny super user', 'advanced utility detection training'],
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-56', width: 1200, height: 630, alt: 'Sygma 2 Day Super User Coach training' }],
    type: 'website',
  },
};

export default function Page() {
  return (
    <SuperUserAgendaBody
      variant="coach"
      h1={<>2 Day Super User <span className="text-accent">Coach</span></>}
      strapline={<>Advanced locator competency <span className="text-accent">·</span> coaching &amp; assessing others</>}
      covers={['Super User Locator', '2 Day Super User Coach', 'Locator Coach', 'Advanced CAT & Genny']}
      lead="The full two-day Super User Locator (Coach) agenda in one document — advanced Genny and CAT theory, CAT data download and analysis, and the coaching and assessment skills to support and sign off site operatives. Every classroom and practical topic is set out below."
      objectiveHeadline="Locate in their own right, then coach, assess and investigate."
      schemaName="2 Day Super User Coach — Utility Location & Avoidance"
      schemaDescription="Two-day Super User Locator (Coach) course building on EUS Cat 1. Advanced location, CAT data download and analysis, on-site coaching and competency assessment of operatives, and utility-strike investigation. In-house or EUSR certificate."
      schemaUrl="/agendas/super-user-coach"
      breadcrumbLabel="2 Day Super User Coach"
    />
  );
}
