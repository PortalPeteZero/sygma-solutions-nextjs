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
      h1={<>2 Day Super User <span className="text-accent">Coach</span></>}
      strapline={<>Advanced locator competency <span className="text-accent">·</span> coaching &amp; assessing others</>}
      schemaName="2 Day Super User Coach — Utility Location & Avoidance"
      schemaUrl="/agendas/super-user-coach"
      breadcrumbLabel="Course Agenda — 2 Day Super User Coach"
    />
  );
}
