import type { Metadata } from 'next';
import SuperUserAgendaBody from '@/components/SuperUserAgendaBody';

const TITLE = '2 Day Super User Coach & Damage Investigations — Course Agenda | Sygma';
const DESC = 'The full course agenda for Sygma\'s 2 Day Super User Coach & Damage Investigations — advanced utility location, CAT data analysis, utility-strike investigation (USAG), and on-site coaching & competency assessment in one course. Builds on EUS Cat 1.';
const URL = 'https://sygma-solutions.com/agendas/super-user-coach-and-investigations';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  keywords: ['Super User Coach and Investigations', 'utility strike investigation', 'locator coach', 'USAG', 'CAT data analysis', 'advanced utility detection training'],
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-56', width: 1200, height: 630, alt: 'Sygma 2 Day Super User Coach & Damage Investigations training' }],
    type: 'website',
  },
};

export default function Page() {
  return (
    <SuperUserAgendaBody
      variant="both"
      h1={<>2 Day Super User <span className="text-accent">Coach &amp; Damage Investigations</span></>}
      strapline={<>Advanced locator competency <span className="text-accent">·</span> strike investigation, data analysis &amp; coaching</>}
      covers={['Super User Locator', 'Damage Investigation', 'Utility Strike Investigation', 'CAT Data Analysis', 'Locator Coach', 'Coaching & Assessment']}
      lead="The full two-day Super User Coach & Damage Investigations agenda in one document — advanced Genny and CAT theory, in-depth CAT data download and analysis, conducting a utility strike investigation to a completed USAG form, and the coaching and assessment skills to support and sign off site operatives. Every classroom and practical topic is set out below."
      objectiveHeadline="Locate in their own right, then investigate strikes, analyse the data, and coach and assess others."
      schemaName="2 Day Super User Coach & Damage Investigations — Utility Location & Avoidance"
      schemaDescription="Two-day combined Super User course building on EUS Cat 1. Advanced location, in-depth CAT data download and analysis, utility-strike investigation with the USAG form, and on-site coaching and competency assessment of operatives. In-house or EUSR certificate."
      schemaUrl="/agendas/super-user-coach-and-investigations"
      breadcrumbLabel="2 Day Super User Coach & Damage Investigations"
    />
  );
}
