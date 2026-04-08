import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/service-coordinator-usc';

export const metadata: Metadata = courseData.metadata;

export default function ServiceCoordinatorUSCPage() {
  return <CourseTemplate data={courseData} />;
}
