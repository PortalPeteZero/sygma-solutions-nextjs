import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';
import { FAQ } from '@/components/FAQ';

const metadata: Metadata = {
  title: 'CAT4 HSG47 Awareness Online Course | Sygma Solutions',
  description: 'Online CAT4 and HSG47 awareness training for cable avoidance and utility detection.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="CAT4 HSG47 Awareness - Online"
        description="Flexible online training in cable avoidance and utility detection"
        backgroundImage="/images/online-training-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our online CAT4 and HSG47 Awareness course provides flexible training in cable avoidance and utility detection. Study at your own pace from any location with online video instruction and interactive modules.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Online Learning"
        images={[
          { src: '/images/online-course-1.jpg', alt: 'Online platform', width: 600, height: 400 },
          { src: '/images/online-course-2.jpg', alt: 'Learning modules', width: 600, height: 400 },
          { src: '/images/online-course-3.jpg', alt: 'Assessment', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Course Features</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Self-Paced Learning</h3>
              <p className="text-gray-600">Study the content at your own pace with full access to video lessons and materials</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Interactive Modules</h3>
              <p className="text-gray-600">Engaging interactive learning modules covering all essential cable avoidance topics</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Online Assessment</h3>
              <p className="text-gray-600">Complete your final assessment online and receive immediate results</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Digital Certificate</h3>
              <p className="text-gray-600">Receive a digital certificate upon successful completion</p>
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
              <p className="text-gray-600">Self-paced (typically 4-6 hours)</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Format</h3>
              <p className="text-gray-600">100% Online</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Certification</h3>
              <p className="text-gray-600">CAT4 HSG47 Awareness</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Access</h3>
              <p className="text-gray-600">Lifetime access to materials</p>
            </div>
          </div>
          <Link href="/contact">
            <Button>Enrol Today</Button>
          </Link>
        </div>
      </Section>

      <FAQ items={[
        {
          question: 'Do I need any special equipment or software?',
          answer: 'No, you only need a web browser and internet connection. The course is accessible on desktop, tablet, and mobile devices.'
        },
        {
          question: 'How long do I have access to the course?',
          answer: 'You have lifetime access to all course materials and can review them at any time.'
        },
        {
          question: 'Is the online assessment recognised?',
          answer: 'Yes, our online CAT4 HSG47 Awareness certification is fully recognised and equivalent to in-person training.'
        },
        {
          question: 'What if I need practical training?',
          answer: 'This online course covers theoretical knowledge. We also offer hands-on practical courses if you require equipment operation training.'
        },
      ]} />
    </>
  );
}