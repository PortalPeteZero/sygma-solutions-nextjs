import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/eus-cat2-safe-dig';

export const metadata: Metadata = courseData.metadata;

export default function EusCat2SafeDig() {
  return <CourseTemplate data={courseData} />;
}
