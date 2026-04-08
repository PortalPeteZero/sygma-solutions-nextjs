import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/eus-cat1-cat2-combined';

export const metadata: Metadata = courseData.metadata;

export default function EusCat12CombinedPage() {
  return <CourseTemplate data={courseData} />;
}
