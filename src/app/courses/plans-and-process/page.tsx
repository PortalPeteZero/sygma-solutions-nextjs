import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/plans-and-process';

export const metadata: Metadata = courseData.metadata;

export default function PlansAndProcessPage() {
  return <CourseTemplate data={courseData} />;
}
