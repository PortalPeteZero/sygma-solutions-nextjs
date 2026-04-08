import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/proqual-cat1-cat2-combined';

export const metadata: Metadata = courseData.metadata;

export default function ProqualCat1Cat2Combined() {
  return <CourseTemplate data={courseData} />;
}
