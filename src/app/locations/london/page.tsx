import LocationTemplate from '@/components/LocationTemplate';
import { locationData as londonData } from '@/data/locations/london';

export default function LondonLocation() {
  return <LocationTemplate data={londonData} />;
}