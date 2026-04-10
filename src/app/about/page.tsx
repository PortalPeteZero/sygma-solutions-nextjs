import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { FAQ } from '@/components/FAQ';
import { Section } from '@/components/Section';
import { ImageStrip } from '@/components/ImageStrip';
import { Button } from '@/components/Button';

const metadata: Metadata = {
  title: 'About Sygma Solutions',
  description: 'Learn about Sygma Solutions - leading provider of Cable Avoidance Tools training and PAS 128 surveyor courses in the UK.',
};

export { metadata };

const aboutPageData = {
  title: 'About Sygma Solutions',
  description: 'We are committed to delivering expert training in Cable Avoidance Tools and other critical utility detection skills.',
};

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="About Sygma Solutions"
        description="We are committed to delivering expert training in Cable Avoidance Tools and other critical utility detection skills."
        backgroundImage="/images/about-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            At Sygma Solutions, we believe that proper training and certification in cable avoidance and utility detection is essential for creating safer work environments across the construction and utility industries.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our comprehensive courses equip professionals with the knowledge and practical skills needed to identify and avoid underground utilities, reducing the risk of accidents and ensuring compliance with industry standards.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Our Facilities"
        images={[
          { src: '/images/facility-1.jpg', alt: 'Training facility 1', width: 600, height: 400 },
          { src: '/images/facility-2.jpg', alt: 'Training facility 2', width: 600, height: 400 },
          { src: '/images/facility-3.jpg', alt: 'Training facility 3', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Industry-certified instructors with years of practical experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>State-of-the-art training facilities and equipment</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Flexible scheduling with courses across multiple UK locations</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>Comprehensive curriculum covering all major utility detection standards</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-3">✓</span>
              <span>High pass rates and excellent student satisfaction ratings</span>
            </li>
          </ul>
        </div>
      </Section>

      <ImageStrip
        title="Training in Action"
        images={[
          { src: '/images/training-1.jpg', alt: 'Training session 1', width: 600, height: 400 },
          { src: '/images/training-2.jpg', alt: 'Training session 2', width: 600, height: 400 },
          { src: '/images/training-3.jpg', alt: 'Training session 3', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
          <p className="text-lg text-gray-600 mb-6">
            Sygma Solutions is accredited to deliver training in PAS 128, CAT Manager courses, and other industry-standard utility detection qualifications.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-lg mb-2">PAS 128</h3>
              <p className="text-sm text-gray-600">Surveyor qualifications in cable avoidance</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-lg mb-2">CAT Manager</h3>
              <p className="text-sm text-gray-600">Equipment management and usage</p>
            </div>
          </div>
          <Link href="/courses">
            <Button>View All Courses</Button>
          </Link>
        </div>
      </Section>

      <FAQ items={[
        {
          question: 'What experience do your instructors have?',
          answer: 'Our instructors are certified professionals with extensive practical experience in cable avoidance and utility detection across multiple industries.'
        },
        {
          question: 'Can I book a private group training session?',
          answer: 'Yes, we offer customised training packages for organisations. Contact our team for more information about group bookings.'
        },
        {
          question: 'Are your courses recognised nationally?',
          answer: 'Yes, all our courses meet UK industry standards and are recognised by major construction and utility companies.'
        },
      ]} />
    </>
  );
}