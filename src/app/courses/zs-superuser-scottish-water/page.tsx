import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/zs-superuser-scottish-water';

export const metadata: Metadata = courseData.metadata;

export default function ZsSuperuserScottishWater() {
  return <CourseTemplate data={courseData} />;
}
