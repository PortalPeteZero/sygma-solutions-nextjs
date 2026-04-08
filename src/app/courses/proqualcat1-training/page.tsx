import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/proqualcat1-training';

export const metadata: Metadata = courseData.metadata;

export default function ProqualCat1Training() {
  return <CourseTemplate data={courseData} />;
}
