import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/vscan-and-transmitter-training';

export const metadata: Metadata = courseData.metadata;

export default function VscanTransmitterTraining() {
  return <CourseTemplate data={courseData} />;
}
