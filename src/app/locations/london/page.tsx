import type { Metadata } from 'next';
import LocationTemplate from '@/components/LocationTemplate';
import { breadcrumbSchema, locationData } from '@/data/locations/london';

export const metadata: Metadata = locationData.metadata;

export default function LocationLondon() {
  return <LocationTemplate data={locationData} />;
}
