import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/gpr-training';

export const metadata: Metadata = courseData.metadata;

export default function GprTraining() {
  return <CourseTemplate data={courseData}>
    <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
      <p className="eyebrow mb-3">About This Course</p>
      <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Ground Penetrating Radar Training in Two Modules</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">GPR (ground penetrating radar) is a powerful tool for detecting buried services and mapping subsurface utility networks. Sygma's GPR training is split into two modules: practical operation (Module 1) and advanced data processing (Module 2). Take either standalone or combine them.</p>
    </section>
  </CourseTemplate>;
}
