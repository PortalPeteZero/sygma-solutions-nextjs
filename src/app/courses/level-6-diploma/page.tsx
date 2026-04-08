import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/level-6-diploma';

export const metadata: Metadata = courseData.metadata;

export default function Level6Diploma() {
  return <CourseTemplate data={courseData} />;
}
