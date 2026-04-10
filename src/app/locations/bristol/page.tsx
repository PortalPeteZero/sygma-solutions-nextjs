import LocationTemplate from '@/components/LocationTemplate';
import { locationData as bristolData } from '@/data/locations/bristol';

export default function BristolLocation() {
  return <LocationTemplate data={bristolData} />;
}