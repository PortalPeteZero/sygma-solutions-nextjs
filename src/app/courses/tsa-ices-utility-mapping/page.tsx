import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/tsa-ices-utility-mapping';

export const metadata: Metadata = courseData.metadata;

export default function TsaIcesUtilityMapping() {
  return <CourseTemplate data={courseData} />;
}
