import type { Metadata } from 'next';
import LocationTemplate from '@/components/LocationTemplate';
import { breadcrumbSchema, locationData } from '@/data/locations/manchester';

export const metadata: Metadata = locationData.metadata;

export default function LocationManchester() {
  return <LocationTemplate data={locationData} />;
}
