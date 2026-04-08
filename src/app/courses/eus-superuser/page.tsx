import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/eus-superuser';

export const metadata: Metadata = courseData.metadata;

export default function EusSuperuser() {
  return <CourseTemplate data={courseData} />;
}
