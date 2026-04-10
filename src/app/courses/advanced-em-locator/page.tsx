import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';
import { FAQ } from '@/components/FAQ';

const metadata: Metadata = {
  title: 'Advanced EM Locator Course | Sygma Solutions',
  description: 'Advanced electromagnetic locator training for utility detection professionals.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="Advanced EM Locator Course"
        description="Master advanced electromagnetic locating techniques"
        backgroundImage="/images/em-locator-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-lg text-gray-600 mb-6">
            This advanced course provides in-depth training in electromagnetic locating techniques, perfect for experienced utility detection professionals who want to master advanced EM equipment and methodologies.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Advanced Training"
        images={[
          { src: '/images/em-locator-1.jpg', alt: 'EM equipment training', width: 600, height: 400 },
          { src: '/images/em-locator-2.jpg', alt: 'Field training session', width: 600, height: 400 },
          { src: '/images/em-locator-3.jpg', alt: 'Advanced techniques', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Advanced EM Theory</h3>
              <p className="text-gray-600">Deep understanding of electromagnetic principles in utility locating</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Equipment Mastery</h3>
              <p className="text-gray-600">Advanced operation of latest EM locating equipment and analysers</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Complex Scenarios</h3>
              <p className="text-gray-600">Handling difficult locating situations and signal interpretation</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Troubleshooting</h3>
              <p className="text-gray-600">Diagnosing and solving locating challenges in real-world conditions</p>
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
              <p className="text-gray-600">3 days</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Level</h3>
              <p className="text-gray-600">Advanced</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Group Size</h3>
              <p className="text-gray-600">Small groups (max 10)</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Prerequisites</h3>
              <p className="text-gray-600">EM locating experience</p>
            </div>
          </div>
          <Link href="/contact">
            <Button>Book Your Course</Button>
          </Link>
        </div>
      </Section>

      <FAQ items={[
        {
          question: 'Do I need prior EM locating experience?',
          answer: 'Yes, this course is designed for experienced utility detection professionals. Basic EM locating knowledge is essential.'
        },
        {
          question: 'What equipment will we be using?',
          answer: 'We use the latest industry-standard EM locators and signal analysers. All equipment is provided for the course.'
        },
        {
          question: 'Is there hands-on practise?',
          answer: 'Yes, this course is heavily practical with extensive field work and equipment operation practise.'
        },
      ]} />
    </>
  );
}