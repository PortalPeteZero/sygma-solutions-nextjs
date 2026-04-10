import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';

const metadata: Metadata = {
  title: 'QTS Group Case Study | Sygma Solutions',
  description: 'See how QTS Group improved safety and compliance with Sygma Solutions cable avoidance training.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="QTS Group Case Study"
        description="How we helped QTS Group achieve safety excellence"
        backgroundImage="/images/qts-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
          <p className="text-lg text-gray-600 mb-6">
            QTS Group, a leading data centre and technology infrastructure company, needed specialised training in utility detection for their technical teams working on infrastructure projects.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Training Delivery"
        images={[
          { src: '/images/qts-case-1.jpg', alt: 'QTS training', width: 600, height: 400 },
          { src: '/images/qts-case-2.jpg', alt: 'QTS equipment', width: 600, height: 400 },
          { src: '/images/qts-case-3.jpg', alt: 'QTS team', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <p className="text-lg text-gray-600 mb-6">
            We delivered specialised training focused on utility detection in complex data centre environments, including hands-on training with advanced CAT tools.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Specialised Content</h3>
              <p className="text-gray-600">Training tailored to data centre infrastructure and complex utility environments</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Advanced Equipment Training</h3>
              <p className="text-gray-600">Practical instruction on latest cable avoidance and locating equipment</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Certification</h3>
              <p className="text-gray-600">Industry-recognised certification for all participants</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-blue-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Results</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">75+</div>
              <p className="text-gray-600">Personnel Trained</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
              <p className="text-gray-600">Pass Rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Compliant</p>
            </div>
          </div>
          <p className="text-lg text-gray-600">
            QTS Group now maintains a fully certified workforce capable of safely managing utility detection on all their infrastructure projects.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Similar Success?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Let us help your organisation achieve the same level of training excellence and safety compliance.
          </p>
          <Link href="/contact">
            <Button>Contact Us Today</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}