import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/advanced-em-locator';

export const metadata: Metadata = courseData.metadata;

export default function AdvancedEmLocator() {
  return <CourseTemplate data={courseData} />;
}
