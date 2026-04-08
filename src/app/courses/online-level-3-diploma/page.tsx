import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/online-level-3-diploma';

export const metadata: Metadata = courseData.metadata;

export default function OnlineLevel3Diploma() {
  return <CourseTemplate data={courseData} />;
}
