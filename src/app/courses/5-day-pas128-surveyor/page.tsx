import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';
import { FAQ } from '@/components/FAQ';

const metadata: Metadata = {
  title: '5-Day PAS 128 Surveyor Course | Sygma Solutions',
  description: 'Comprehensive 5-day PAS 128 surveyor training course in cable avoidance and utility detection.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="5-Day PAS 128 Surveyor Course"
        description="Become a certified PAS 128 surveyor in cable avoidance and utility detection"
        backgroundImage="/images/pas128-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-lg text-gray-600 mb-6">
            This intensive 5-day course provides comprehensive training in PAS 128 surveyor qualifications, covering advanced cable avoidance techniques and utility detection methodology.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Hands-On Training"
        images={[
          { src: '/images/pas128-training-1.jpg', alt: 'PAS 128 training equipment', width: 600, height: 400 },
          { src: '/images/pas128-training-2.jpg', alt: 'Practical training session', width: 600, height: 400 },
          { src: '/images/pas128-training-3.jpg', alt: 'Classroom instruction', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">What's Included</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Advanced Cable Avoidance Training</h3>
              <p className="text-gray-600">In-depth instruction in safe identification and avoidance of underground cables</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Practical Hands-On Experience</h3>
              <p className="text-gray-600">Extensive practical training with industry-standard CAT locating equipment</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Utility Detection Methodology</h3>
              <p className="text-gray-600">Comprehensive coverage of surveying techniques and best practices</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">PAS 128 Certification</h3>
              <p className="text-gray-600">Examination and certification upon successful completion</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Schedule</h2>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">Day 1: Foundations</h3>
              <p className="text-gray-600 text-sm">Introduction to PAS 128, health & safety, utility identification basics</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">Day 2: Equipment & Techniques</h3>
              <p className="text-gray-600 text-sm">CAT equipment operation, cable locating techniques, practical exercises</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">Day 3: Advanced Methods</h3>
              <p className="text-gray-600 text-sm">Advanced locating methods, signal interpretation, complex scenarios</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">Day 4: Real-World Scenarios</h3>
              <p className="text-gray-600 text-sm">Site surveys, report writing, risk assessment, practical assessments</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">Day 5: Assessment & Certification</h3>
              <p className="text-gray-600 text-sm">Final examination, practical test, certification upon successful completion</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Details</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Duration</h3>
              <p className="text-gray-600">5 days</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Certification</h3>
              <p className="text-gray-600">PAS 128 Surveyor</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Group Size</h3>
              <p className="text-gray-600">Small groups (max 12)</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Prerequisites</h3>
              <p className="text-gray-600">CAT awareness training</p>
            </div>
          </div>
          <Link href="/contact">
            <Button>Book Your Course</Button>
          </Link>
        </div>
      </Section>

      <FAQ items={[
        {
          question: 'What are the prerequisites for this course?',
          answer: 'Participants should have basic cable avoidance awareness. Our CAT awareness course is a good preparation if you need it.'
        },
        {
          question: 'What is the pass rate for the final assessment?',
          answer: 'Our courses have a high pass rate of around 95%. We provide thorough preparation and support throughout the course.'
        },
        {
          question: 'Is accommodation provided?',
          answer: 'We can recommend accommodation options near our training centres. Contact us for details about your specific location.'
        },
        {
          question: 'How long is the certification valid?',
          answer: 'PAS 128 certification is valid for 3 years, after which refresher training and renewal assessment are recommended.'
        },
      ]} />
    </>
  );
}