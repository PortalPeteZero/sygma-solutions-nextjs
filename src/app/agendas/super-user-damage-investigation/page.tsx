import type { Metadata } from 'next';
import SuperUserAgendaBody from '@/components/SuperUserAgendaBody';

const TITLE = '2 Day Super User Damage Investigations — Course Agenda | Sygma';
const DESC = 'The full course agenda for Sygma\'s 2 Day Super User Damage Investigations — advanced utility location, CAT data analysis, and utility-strike investigation (USAG). Builds on EUS Cat 1.';
const URL = 'https://sygma-solutions.com/agendas/super-user-damage-investigation';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
  keywords: ['Super User Damage Investigation', 'utility strike investigation', 'USAG', 'CAT data analysis', 'advanced utility detection training'],
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-56', width: 1200, height: 630, alt: 'Sygma 2 Day Super User Damage Investigations training' }],
    type: 'website',
  },
};

export default function Page() {
  return (
    <SuperUserAgendaBody
      variant="damage"
      h1={<>2 Day Super User <span className="text-accent">Damage Investigations</span></>}
      strapline={<>Advanced locator competency <span className="text-accent">·</span> strike investigation &amp; data analysis</>}
      covers={['Super User Locator', 'Damage Investigation', 'Utility Strike Investigation', 'CAT Data Analysis']}
      lead="The full two-day Super User Damage Investigations agenda in one document — advanced Genny and CAT theory, in-depth CAT data download and analysis, and conducting a utility strike investigation to a completed USAG form. Every classroom and practical topic is set out below."
      objectiveHeadline="Locate in their own right, then investigate strikes and analyse the data."
      schemaName="2 Day Super User Damage Investigations — Utility Location & Avoidance"
      schemaDescription="Two-day Super User Damage Investigations course building on EUS Cat 1. Advanced location, in-depth CAT data download and analysis, and utility-strike investigation with the USAG form. In-house or EUSR certificate."
      schemaUrl="/agendas/super-user-damage-investigation"
      breadcrumbLabel="2 Day Super User Damage Investigations"
    />
  );
}
