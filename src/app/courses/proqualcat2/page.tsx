import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/proqualcat2';

export const metadata: Metadata = courseData.metadata;

export default function ProQualCat2Page() {
  return <CourseTemplate data={courseData}>
    <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
      <h2 className="text-2xl font-bold mb-4 text-foreground">About ProQual CAT2</h2>
      <p className="text-muted-foreground mb-6">ProQual CAT2 is one of the UK\'s most comprehensive safe excavation qualifications. It goes deeper than the entry-level CAT1, covering advanced hazard identification, safe dig planning, and utility company liaison. Every criterion is assessed independently - there is no aggregate pass mark that allows weaker areas to be masked by strong performance elsewhere.</p>

      <h3 className="text-xl font-semibold mb-4 text-foreground">Course Highlights</h3>
      <ul className="space-y-2 text-muted-foreground mb-8">
        {[
          '24 individual theory criteria assessed (T1-T24)',
          '15 individual practical criteria across four assessment stages',
          'On-site practical assessment included',
          'Independent certification to BS 8475:2015',
          'Recognised by utility companies and regulators',
          'Two-day delivery (16 hours)',
          'Covers safe dig planning and supervision',
        ].map((highlight, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-accent font-bold mt-1">✓</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-lg font-semibold mb-4">Course Details</h3>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-semibold">Duration</dt>
              <dd className="text-muted-foreground">2 days (16 hours)</dd>
            </div>
            <div>
              <dt className="font-semibold">Level</dt>
              <dd className="text-muted-foreground">Advanced</dd>
            </div>
            <div>
              <dt className="font-semibold">Standard</dt>
              <dd className="text-muted-foreground">BS 8475:2015</dd>
            </div>
            <div>
              <dt className="font-semibold">Pricing</dt>
              <dd className="text-muted-foreground">Contact us for a tailored quote</dd>
            </div>
          </dl>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Why ProQual CAT2?</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>Independent Certification:</strong> Recognised certification body, not tied to any single utility company
            </li>
            <li>
              <strong>Comprehensive Assessment:</strong> 39 individual criteria ensure genuine competence across all areas
            </li>
            <li>
              <strong>On-Site Practical:</strong> Real-world assessment in a controlled field setting
            </li>
            <li>
              <strong>Career Advancement:</strong> Highly valued across regulated sectors
            </li>
          </ul>
        </div>
      </div>
    </section>
  </CourseTemplate>;
}
