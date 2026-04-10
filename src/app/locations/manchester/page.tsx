import LocationTemplate from '@/components/LocationTemplate';
import { locationData as manchesterData } from '@/data/locations/manchester';

export default function ManchesterLocation() {
  return <LocationTemplate data={manchesterData} />;
}