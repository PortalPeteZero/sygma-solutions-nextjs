import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';
import { FAQ } from '@/components/FAQ';

const metadata: Metadata = {
  title: 'EUS CAT1 + CAT2 Combined Course | Sygma Solutions',
  description: 'Combined EUS CAT1 and CAT2 cable avoidance training course for comprehensive utility detection skills.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="EUS CAT1 + CAT2 Combined Course"
        description="Comprehensive training in EUS CAT1 and CAT2 utility detection standards"
        backgroundImage="/images/eus-combined-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-lg text-gray-600 mb-6">
            This combined course provides comprehensive training in both EUS CAT1 and CAT2 standards, covering desktop research and physical utility detection methods. Perfect for professionals seeking comprehensive utility identification skills.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Comprehensive Training"
        images={[
          { src: '/images/eus-combined-1.jpg', alt: 'Desktop research training', width: 600, height: 400 },
          { src: '/images/eus-combined-2.jpg', alt: 'Field detection training', width: 600, height: 400 },
          { src: '/images/eus-combined-3.jpg', alt: 'Advanced techniques', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">EUS CAT1 Desktop Research</h3>
              <p className="text-gray-600">Desktop utility identification and records research methods</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">EUS CAT2 Physical Detection</h3>
              <p className="text-gray-600">Hands-on detection methods and field survey techniques</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Integrated Approach</h3>
              <p className="text-gray-600">Combining desktop and physical methods for comprehensive results</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Report Writing</h3>
              <p className="text-gray-600">Professional documentation and survey reporting</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Details</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Duration</h3>
              <p className="text-gray-600">4 days</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Certification</h3>
              <p className="text-gray-600">EUS CAT1 + CAT2</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Level</h3>
              <p className="text-gray-600">Intermediate to Advanced</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Group Size</h3>
              <p className="text-gray-600">Small groups (max 12)</p>
            </div>
          </div>
          <Link href="/contact">
            <Button>Book Your Course</Button>
          </Link>
        </div>
      </Section>

      <FAQ items={[
        {
          question: 'Can I take just CAT1 or just CAT2?',
          answer: 'Yes, we offer separate CAT1 and CAT2 courses if you prefer. Contact us for scheduling options.'
        },
        {
          question: 'What prior experience is needed?',
          answer: 'Basic cable avoidance awareness is helpful. We'll cover both theoretical and practical aspects from the ground up.'
        },
        {
          question: 'Is this suitable for surveying professionals?',
          answer: 'Yes, this course is excellent for utility surveyors and professionals involved in pre-site surveys.'
        },
      ]} />
    </>
  );
}