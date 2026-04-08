import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/cat4-hsg47-awareness-online';

export const metadata: Metadata = courseData.metadata;

export default function Cat4HsgAwarenessOnlinePage() {
  return <CourseTemplate data={courseData} />;
}
