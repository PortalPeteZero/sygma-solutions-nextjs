import type { Metadata } from 'next';
import LocationTemplate from '@/components/LocationTemplate';
import { locationData } from '@/data/locations/birmingham';

export const metadata: Metadata = locationData.metadata;

export default function LocationBirmingham() {
  return <LocationTemplate data={locationData} />;
}
