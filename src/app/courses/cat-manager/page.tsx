import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/cat-manager';

export const metadata: Metadata = courseData.metadata;

export default function CatManagerPage() {
  return <CourseTemplate data={courseData} />;
}
