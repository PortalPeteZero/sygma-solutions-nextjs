import type { Metadata } from 'next';
import LocationTemplate from '@/components/LocationTemplate';
import { breadcrumbSchema, locationData } from '@/data/locations/bristol';

export const metadata: Metadata = locationData.metadata;

export default function LocationBristol() {
  return <LocationTemplate data={locationData} />;
}
