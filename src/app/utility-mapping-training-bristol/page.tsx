import type { Metadata } from 'next';
import UtilityMappingBristolClient from './UtilityMappingBristolClient';

export const metadata: Metadata = {
  title: 'Utility Mapping Training Bristol | Sygma Solutions',
  description: 'Professional utility mapping and cable detection training courses in Bristol. GPR, CAT, and PAS128 compliant training.',
  alternates: { canonical: 'https://sygma-solutions.com/utility-mapping-training-bristol' },
  openGraph: {
    title: 'Utility Mapping Training Bristol | Sygma Solutions',
    description: 'Professional utility mapping and cable detection training courses in Bristol. GPR, CAT, and PAS128 compliant training.',
  },
};

export default function UtilityMappingBristolPage() {
  return <UtilityMappingBristolClient />;
}
