import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/cable-avoidance-training';

export const metadata: Metadata = courseData.metadata;

export default function CableAvoidanceTraining() {
  return <CourseTemplate data={courseData} />;
}
