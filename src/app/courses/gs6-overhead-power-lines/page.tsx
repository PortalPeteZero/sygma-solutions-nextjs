import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/gs6-overhead-power-lines';

export const metadata: Metadata = courseData.metadata;

export default function GS6OverheadPowerLinesPage() {
  return <CourseTemplate data={courseData} />;
}
