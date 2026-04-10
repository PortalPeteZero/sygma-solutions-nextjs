import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';

const metadata: Metadata = {
  title: 'Cable Avoidance Training London | Sygma Solutions',
  description: 'Professional Cable Avoidance Tools training courses in London. Industry-certified instruction in utility detection.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="Cable Avoidance Training - London"
        description="Learn from industry experts at our London training centre"
        backgroundImage="/images/london-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Training in London</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our London training centre offers comprehensive cable avoidance training courses delivered by certified professionals with years of experience.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Our London Centre"
        images={[
          { src: '/images/london-centre-1.jpg', alt: 'London training centre', width: 600, height: 400 },
          { src: '/images/london-centre-2.jpg', alt: 'Training equipment', width: 600, height: 400 },
          { src: '/images/london-centre-3.jpg', alt: 'Training in progress', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Available Courses</h2>
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-lg mb-2">Cable Avoidance Training</h3>
              <p className="text-gray-600 mb-3">Comprehensive training in cable avoidance using industry-standard CAT tools</p>
              <Link href="/courses/cable-avoidance-training">
                <Button size="sm">Learn More</Button>
              </Link>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-lg mb-2">PAS 128 Surveyor Course</h3>
              <p className="text-gray-600 mb-3">Advanced surveyor qualifications in cable avoidance</p>
              <Link href="/courses/5-day-pas128-surveyor">
                <Button size="sm">Learn More</Button>
              </Link>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-lg mb-2">CAT Manager Course</h3>
              <p className="text-gray-600 mb-3">Management training for cable avoidance tool users</p>
              <Link href="/courses/cat-manager">
                <Button size="sm">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Location & Access</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-lg text-gray-600 mb-4">
              Our London training centre is centrally located with excellent transport links and easy access from across the capital.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-gray-600">London Training Centre<br/>UK</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Contact</h3>
                <p className="text-gray-600">
                  <a href="tel:" className="text-blue-600 hover:underline">Call for details</a>
                </p>
              </div>
            </div>
            <Link href="/contact">
              <Button>Get in Touch</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}