import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/5-day-pas128-surveyor';

export const metadata: Metadata = courseData.metadata;

export default function Pas128Surveyor() {
  return <CourseTemplate data={courseData}>
    <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="eyebrow mb-3">The Five-Day Programme</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Intensive Training From PAS128 Theory Through to Practical Surveying</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>The 5 Day PAS128 Surveyor Course is the comprehensive entry point to professional utility surveying. In five intensive days, delegates progress from PAS128 theory (types D, C and B, detection methods, and deliverables) through advanced EM locating techniques to GPR theory and practical operation, all completed with a written knowledge exam and individual practical assessments on real buried services.</p>
            <p>The course is structured to build knowledge day by day, with practical hands-on learning from day 2 onwards. Sygma\'s approach to delivery is based on what actually happens on the ground, not what exam papers say should happen. Every delegate who completes the course leaves with practical, tested competency in locating buried services using electromagnetic and GPR methods.</p>
            <p>The written exam and practical assessments are conducted under formal conditions, giving delegates a recognized record of achievement. Many delegates use the 5 Day course as a foundation before progressing into the wider TSA and ICES Utility Mapping Programme or towards ProQual Level 3, Level 4 or Level 5 qualifications.</p>
          </div>
        </div>
        <div className="bg-muted/30 rounded-xl border border-border p-6">
          <p className="eyebrow mb-4">What the Course Covers</p>
          {[
            ['Day 1', 'PAS128 standard and types D, C, B. Site reconnaissance (visual survey). Plans and preparation.'],
            ['Day 2', 'EM locating theory. Equipment operation. Introduction to practical site work.'],
            ['Day 3', 'Advanced EM techniques. Transmitter operation. Signal interpretation. Practical assessment preparation.'],
            ['Day 4', 'GPR theory. GPR equipment operation. GPR practical application on site.'],
            ['Day 5', 'Written exam (morning). Practical assessment (afternoon). Results and feedback.'],
          ].map(([day, content]) => (
            <div key={day} className="flex gap-3 py-3 border-b border-border last:border-0">
              <span className="font-bold text-accent shrink-0 w-16">{day}</span>
              <span className="text-sm text-muted-foreground">{content}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </CourseTemplate>;
}
