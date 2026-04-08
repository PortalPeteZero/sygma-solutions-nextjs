import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/pas128-awareness';

export const metadata: Metadata = courseData.metadata;

export default function Pas128Awareness() {
  return <CourseTemplate data={courseData} />;
}
