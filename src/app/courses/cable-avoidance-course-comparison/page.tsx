import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';

const metadata: Metadata = {
  title: 'Cable Avoidance Training Comparison | Sygma Solutions',
  description: 'Compare our cable avoidance training courses to find the right option for your needs.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="Cable Avoidance Course Comparison"
        description="Find the right training course for your needs"
        backgroundImage="/images/comparison-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Our Training Courses</h2>
          <p className="text-lg text-gray-600 mb-6">
            We offer a range of cable avoidance training courses designed to meet different professional needs and experience levels.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Diverse Training Options"
        images={[
          { src: '/images/comparison-training-1.jpg', alt: 'Beginner training', width: 600, height: 400 },
          { src: '/images/comparison-training-2.jpg', alt: 'Intermediate training', width: 600, height: 400 },
          { src: '/images/comparison-training-3.jpg', alt: 'Advanced training', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Course Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Course</th>
                  <th className="border border-gray-300 p-3 text-left">Duration</th>
                  <th className="border border-gray-300 p-3 text-left">Level</th>
                  <th className="border border-gray-300 p-3 text-left">Certification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">
                    <Link href="/courses/cable-avoidance-training" className="text-blue-600 hover:underline">
                      Cable Avoidance Training
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-3">1-2 days</td>
                  <td className="border border-gray-300 p-3">Beginner</td>
                  <td className="border border-gray-300 p-3">CAT Awareness</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-bold">
                    <Link href="/courses/cat-manager" className="text-blue-600 hover:underline">
                      CAT Manager
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-3">2 days</td>
                  <td className="border border-gray-300 p-3">Intermediate</td>
                  <td className="border border-gray-300 p-3">CAT Manager</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">
                    <Link href="/courses/5-day-pas128-surveyor" className="text-blue-600 hover:underline">
                      PAS 128 Surveyor
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-3">5 days</td>
                  <td className="border border-gray-300 p-3">Advanced</td>
                  <td className="border border-gray-300 p-3">PAS 128 Surveyor</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-bold">
                    <Link href="/courses/advanced-em-locator" className="text-blue-600 hover:underline">
                      Advanced EM Locator
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-3">3 days</td>
                  <td className="border border-gray-300 p-3">Advanced</td>
                  <td className="border border-gray-300 p-3">EM Locator Specialist</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Which Course is Right for You?</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">New to Cable Avoidance?</h3>
              <p className="text-gray-600 mb-3">Start with our Cable Avoidance Training course to gain foundational knowledge in cable identification and avoidance techniques.</p>
              <Link href="/courses/cable-avoidance-training">
                <Button size="sm">Learn More</Button>
              </Link>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Team Managers?</h3>
              <p className="text-gray-600 mb-3">Our CAT Manager course is ideal for supervisors and managers overseeing cable avoidance operations.</p>
              <Link href="/courses/cat-manager">
                <Button size="sm">Learn More</Button>
              </Link>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Surveying Professionals?</h3>
              <p className="text-gray-600 mb-3">The PAS 128 Surveyor course provides comprehensive training for utility survey specialists.</p>
              <Link href="/courses/5-day-pas128-surveyor">
                <Button size="sm">Learn More</Button>
              </Link>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Locating Specialists?</h3>
              <p className="text-gray-600 mb-3">Deepen your expertise with our Advanced EM Locator course for experienced professionals.</p>
              <Link href="/courses/advanced-em-locator">
                <Button size="sm">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Still Not Sure?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Contact our team and we'll help you choose the perfect course for your specific needs and goals.
          </p>
          <Link href="/contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}