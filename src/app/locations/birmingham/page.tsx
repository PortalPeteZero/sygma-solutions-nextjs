import LocationTemplate from '@/components/LocationTemplate';
import { locationData as birminghamData } from '@/data/locations/birmingham';

export default function BirminghamLocation() {
  return <LocationTemplate data={birminghamData} />;
}