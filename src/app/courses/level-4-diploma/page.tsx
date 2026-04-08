import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/level-4-diploma';

export const metadata: Metadata = courseData.metadata;

export default function Level4Diploma() {
  return <CourseTemplate data={courseData} />;
}
