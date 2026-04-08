import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/manufacturer-locator-training';

export const metadata: Metadata = courseData.metadata;

export default function ManufacturerLocatorTrainingPage() {
  return <CourseTemplate data={courseData} />;
}
