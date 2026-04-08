import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/level-3-certificate';

export const metadata: Metadata = courseData.metadata;

export default function Level3Certificate() {
  return <CourseTemplate data={courseData} />;
}
