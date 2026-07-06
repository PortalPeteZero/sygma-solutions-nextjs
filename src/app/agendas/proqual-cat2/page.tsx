import type { Metadata } from 'next';
import Cat2AgendaBody from '@/components/Cat2AgendaBody';

/* ProQual Cat 2 — NOT the ProQual Level 2 Award (a different offering; never reference it here).
   Same course content as the EUS Cat 2 agenda; every qualification reference is ProQual. */

const TITLE = 'ProQual Cat 2: Safe Digging — Course Agenda | Sygma';
const DESC = 'The full course agenda for Sygma\'s one-day ProQual Cat 2 safe digging (safe dig) course. Classroom theory, an assessed live dig exposing a real buried service, and ProQual certification.';
const URL = 'https://sygma-solutions.com/agendas/proqual-cat2';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  // Sendable agenda — deliberately kept out of search so it can't cannibalise the /courses pages that rank.
  robots: { index: false, follow: true },
  keywords: ['ProQual Cat 2 training', 'ProQual safe dig', 'safe digging course agenda', 'safe digging training', 'HSG47 safe digging'],
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-08-eus-cat2-safe-dig', width: 1200, height: 630, alt: 'Sygma ProQual Cat 2 safe digging training' }],
    type: 'website',
  },
};

export default function Page() {
  return (
    <Cat2AgendaBody
      qualShort="ProQual Cat 2"
      schemeLong="ProQual Cat 2: Safe Digging Practices"
      certBody="ProQual registration"
      certFee="£35"
      certGets="ProQual Cat 2 certificate"
      prereqQual="ProQual Cat 1"
      covers={['Safe Dig', 'ProQual Cat 2', 'Safe Digging Practices', 'HSG47 Safe Digging']}
      accred={['HSG47', 'GS6', 'NRSWA', 'ProQual']}
      h1={<>ProQual Cat 2: <span className="text-accent">Safe Digging</span></>}
      strapline={<>Safe Dig <span className="text-accent">·</span> from locate to excavate</>}
      schemaName="ProQual Cat 2: Safe Digging Practices — Safe Dig training"
      schemaUrl="/agendas/proqual-cat2"
      breadcrumbLabel="ProQual Cat 2 Safe Digging"
    />
  );
}
