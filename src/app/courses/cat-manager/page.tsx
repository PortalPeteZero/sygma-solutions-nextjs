import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';
import { FAQ } from '@/components/FAQ';

const metadata: Metadata = {
  title: 'CAT Manager Course | Sygma Solutions',
  description: 'CAT Manager training course for supervisors and managers overseeing cable avoidance operations.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="CAT Manager Course"
        description="Management training for cable avoidance tool operations"
        backgroundImage="/images/cat-manager-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-lg text-gray-600 mb-6">
            The CAT Manager course is designed for supervisors, project managers and team leaders who oversee cable avoidance operations. This course provides the knowledge needed to manage teams effectively and ensure compliance with safety standards.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Management Training"
        images={[
          { src: '/images/cat-manager-1.jpg', alt: 'Team management', width: 600, height: 400 },
          { src: '/images/cat-manager-2.jpg', alt: 'Training delivery', width: 600, height: 400 },
          { src: '/images/cat-manager-3.jpg', alt: 'Site management', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Cable Avoidance Management</h3>
              <p className="text-gray-600">Supervising teams in safe cable identification and avoidance procedures</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Safety Compliance</h3>
              <p className="text-gray-600">Ensuring adherence to regulations and industry best practices</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Risk Assessment</h3>
              <p className="text-gray-600">Identifying and managing potential hazards in cable avoidance operations</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Team Supervision</h3>
              <p className="text-gray-600">Effective management of trained operators and field teams</p>
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
              <p className="text-gray-600">2 days</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Certification</h3>
              <p className="text-gray-600">CAT Manager</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Level</h3>
              <p className="text-gray-600">Intermediate</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Prerequisites</h3>
              <p className="text-gray-600">CAT Awareness training</p>
            </div>
          </div>
          <Link href="/contact">
            <Button>Book Your Course</Button>
          </Link>
        </div>
      </Section>

      <FAQ items={[
        {
          question: 'Do I need to have attended CAT training first?',
          answer: 'Yes, we recommend that participants have completed basic CAT Awareness training before attending the CAT Manager course.'
        },
        {
          question: 'What practical experience do I need?',
          answer: 'Some practical experience with cable avoidance tools is beneficial but not essential. We cover management of operations as well as technical knowledge.'
        },
        {
          question: 'Is this course suitable for site managers?',
          answer: 'Yes, this course is ideal for site managers, project supervisors, and team leaders who oversee cable avoidance operations.'
        },
      ]} />
    </>
  );
}