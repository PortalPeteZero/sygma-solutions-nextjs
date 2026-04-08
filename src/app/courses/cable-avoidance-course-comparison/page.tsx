import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/cable-avoidance-course-comparison';

export const metadata: Metadata = courseData.metadata;

export default function CableAvoidanceCourseComparison() {
  return <CourseTemplate data={courseData} />;
}
