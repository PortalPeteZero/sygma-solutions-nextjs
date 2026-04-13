import type { Metadata } from 'next';
import UtilityMappingBristolClient from './UtilityMappingBristolClient';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';
import { localBusinessSchema, courseSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Utility Mapping Training Bristol | Sygma Solutions',
  description: 'Professional utility mapping and cable detection training courses in Bristol. GPR, CAT, and PAS128 compliant training.',
  alternates: { canonical: 'https://sygma-solutions.com/utility-mapping-training-bristol' },
  openGraph: {
    title: 'Utility Mapping Training Bristol | Sygma Solutions',
    description: 'Professional utility mapping and cable detection training courses in Bristol. GPR, CAT, and PAS128 compliant training.',
    url: 'https://sygma-solutions.com/utility-mapping-training-bristol',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function UtilityMappingBristolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({
        name: 'Utility Mapping Training Bristol',
        description: 'Professional utility mapping and cable detection training courses in Bristol. GPR, CAT, and PAS128 compliant training.',
        url: '/utility-mapping-training-bristol',
        mode: ['onsite'],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/utility-mapping-surveying' }, { label: 'Bristol' }]) }} />
      <UtilityMappingBristolClient />
    </>
  );
}
