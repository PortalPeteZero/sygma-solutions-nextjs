import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';
import { FAQ } from '@/components/FAQ';

const metadata: Metadata = {
  title: 'EUS CAT1 + CAT2 + USC Combined Course | Sygma Solutions',
  description: 'Combined EUS CAT1, CAT2, and USC utility detection training with comprehensive underground utility search certification.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="EUS CAT1 + CAT2 + USC Combined Course"
        description="Comprehensive utility detection training including underground utility search certification"
        backgroundImage="/images/eus-usc-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-lg text-gray-600 mb-6">
            This premium combined course provides the most comprehensive utility detection training, covering EUS CAT1 (desktop research), CAT2 (physical detection), and USC (underground searches). This is the ultimate qualification for utility survey professionals.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Premium Training Programme"
        images={[
          { src: '/images/eus-usc-1.jpg', alt: 'Comprehensive training', width: 600, height: 400 },
          { src: '/images/eus-usc-2.jpg', alt: 'Advanced methods', width: 600, height: 400 },
          { src: '/images/eus-usc-3.jpg', alt: 'Professional certification', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">What's Included</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">CAT1: Desktop Research</h3>
              <p className="text-gray-600">Comprehensive utility records research and desktop survey methods</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">CAT2: Physical Detection</h3>
              <p className="text-gray-600">Advanced field detection techniques and survey methodologies</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">USC: Underground Searches</h3>
              <p className="text-gray-600">Excavation management and underground utility searching techniques</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Professional Integration</h3>
              <p className="text-gray-600">Integrating all methods for comprehensive utility identification</p>
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
              <p className="text-gray-600">6 days</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Certification</h3>
              <p className="text-gray-600">EUS CAT1 + CAT2 + USC</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Level</h3>
              <p className="text-gray-600">Advanced Professional</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Group Size</h3>
              <p className="text-gray-600">Small groups (max 10)</p>
            </div>
          </div>
          <Link href="/contact">
            <Button>Book Your Course</Button>
          </Link>
        </div>
      </Section>

      <FAQ items={[
        {
          question: 'Who should take this comprehensive course?',
          answer: 'This course is ideal for senior utility surveyors, project managers and professionals needing the ultimate qualification in utility detection.'
        },
        {
          question: 'Is this the highest level of utility detection training?',
          answer: 'Yes, this combined certification covers the full spectrum of utility detection from desktop research through to underground searches.'
        },
        {
          question: 'What practical experience will I gain?',
          answer: 'The course includes extensive practical training with real-world scenarios and hands-on experience with all utility detection methods.'
        },
      ]} />
    </>
  );
}