import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/level-5-diploma';

export const metadata: Metadata = courseData.metadata;

export default function Level5Diploma() {
  return <CourseTemplate data={courseData} />;
}
