import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/rqf-level-2-award';

export const metadata: Metadata = courseData.metadata;

export default function RqfLevel2Award() {
  return <CourseTemplate data={courseData}>
    <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
      <p className="eyebrow mb-3">Nationally Recognised Qualification</p>
      <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The RQF Level 2 Award in Utility Location and Avoidance</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>The RQF Level 2 Award in Utility Location and Avoidance (also referred to as the ProQual Level 2 Award) is the nationally recognised qualification for operatives who work near buried utilities. It replaces the older QCF Level 2 qualification of the same name and is accepted by major contractors, utilities, and employers across the industry.</p>
        <p>Sygma\'s delivery goes beyond what the qualification requires. The course includes advanced content in both classroom theory and site practical that equips delegates to work with real confidence (not just to pass the paper). Every delegate who completes the Level 2 with Sygma has been through content that exceeds the qualification standard.</p>
        <p>Three formats are available to fit different team sizes, site rosters, and operational requirements. All formats include both a knowledge-based assessment and a practical assessment.</p>
      </div>
    </section>
  </CourseTemplate>;
}
