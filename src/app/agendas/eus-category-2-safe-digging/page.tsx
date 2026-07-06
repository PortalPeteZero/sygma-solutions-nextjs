import type { Metadata } from 'next';
import Cat2AgendaBody from '@/components/Cat2AgendaBody';

const TITLE = 'EUS Category 2: Implement Safe Digging — Course Agenda | Sygma';
const DESC = 'The full course agenda for Sygma\'s one-day EUS Category 2 safe digging (safe dig) course. Classroom theory, an assessed live dig exposing a real buried service, and EUSR registration.';
const URL = 'https://sygma-solutions.com/agendas/eus-category-2-safe-digging';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  // Sendable agenda — deliberately kept out of search so it can't cannibalise the /courses pages that rank.
  robots: { index: false, follow: true },
  keywords: ['EUS Cat 2 training', 'EUSR Cat 2', 'safe dig course agenda', 'safe digging training', 'utility excavations category 2', 'HSG47 safe digging'],
  openGraph: {
    title: TITLE, description: DESC, url: URL, siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-08-eus-cat2-safe-dig', width: 1200, height: 630, alt: 'Sygma EUS Category 2 safe digging training' }],
    type: 'website',
  },
};

export default function Page() {
  return (
    <Cat2AgendaBody
      qualShort="EUS Cat 2"
      schemeLong="EUS Category 2: Implement Safe (Digging) Excavating Practices"
      certBody="EUSR registration"
      certFee="£34"
      certGets="EUSR Cat 2 registration, recorded on the EUSR database"
      prereqQual="EUS Cat 1"
      covers={['Safe Dig', 'EUS Cat 2', 'Utility Excavations Category 2', 'HSG47 Safe Digging']}
      accred={['HSG47', 'GS6', 'NRSWA', 'EUSR']}
      h1={<>EUS Category 2: <span className="text-accent">Implement Safe Digging</span></>}
      strapline={<>Safe Dig <span className="text-accent">·</span> from locate to excavate</>}
      schemaName="EUS Category 2: Implement Safe (Digging) Excavating Practices — Safe Dig training"
      schemaUrl="/agendas/eus-category-2-safe-digging"
      breadcrumbLabel="EUS Category 2 Safe Digging"
    />
  );
}
