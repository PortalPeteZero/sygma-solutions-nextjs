import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/proqualcat1plus';

export const metadata: Metadata = courseData.metadata;

export default function ProQualCat1Plus() {
  return <CourseTemplate data={courseData} />;
}
