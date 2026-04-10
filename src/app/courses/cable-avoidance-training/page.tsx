import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';
import { FAQ } from '@/components/FAQ';

const metadata: Metadata = {
  title: 'Cable Avoidance Training | Sygma Solutions',
  description: 'Professional cable avoidance training courses with industry-certified instruction. Learn cable identification and avoidance techniques.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="Cable Avoidance Training"
        description="Learn essential cable identification and avoidance techniques from industry experts"
        backgroundImage="/images/cat-training-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our Cable Avoidance Training courses provide comprehensive instruction in identifying and safely avoiding underground cables and utilities. Delivered by certified professionals, these courses are essential for anyone working in construction, utilities, or related fields.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Real-World Training"
        images={[
          { src: '/images/training-equipment.jpg', alt: 'Training equipment', width: 600, height: 400 },
          { src: '/images/field-training.jpg', alt: 'Field training session', width: 600, height: 400 },
          { src: '/images/classroom-training.jpg', alt: 'Classroom instruction', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Cable Identification</h3>
              <p className="text-gray-600">Learn to identify different types of underground cables and utilities</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Safe Avoidance Techniques</h3>
              <p className="text-gray-600">Master proven techniques for safely locating and avoiding cables</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Equipment Operation</h3>
              <p className="text-gray-600">Practical training with industry-standard cable avoidance tools</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Safety Standards & Compliance</h3>
              <p className="text-gray-600">Comprehensive coverage of relevant regulations and best practices</p>
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
              <p className="text-gray-600">1-2 days (flexible)</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Certification</h3>
              <p className="text-gray-600">CAT Awareness Certificate</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Group Size</h3>
              <p className="text-gray-600">Small groups (max 15)</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Locations</h3>
              <p className="text-gray-600">Multiple UK centres</p>
            </div>
          </div>
          <Link href="/contact">
            <Button>Book Your Course</Button>
          </Link>
        </div>
      </Section>

      <FAQ items={[
        {
          question: 'Is previous experience required?',
          answer: 'No, our Cable Avoidance Training is suitable for beginners. We provide comprehensive instruction from the ground up.'
        },
        {
          question: 'What is included in the course fees?',
          answer: 'Course fees include all instruction, training materials, certification, and practical equipment use.'
        },
        {
          question: 'Can we arrange on-site group training?',
          answer: 'Yes, we offer customised on-site training packages for teams. Contact us for more information.'
        },
        {
          question: 'How long is the certification valid?',
          answer: 'CAT Awareness certification is valid for 3 years, after which refresher training is recommended.'
        },
      ]} />
    </>
  );
}