import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/online-level-5-diploma';

export const metadata: Metadata = courseData.metadata;

export default function OnlineLevel5Diploma() {
  return <CourseTemplate data={courseData} />;
}
