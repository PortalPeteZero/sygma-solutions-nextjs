import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';

const metadata: Metadata = {
  title: 'Morgan Sindall Case Study | Sygma Solutions',
  description: 'See how Morgan Sindall improved safety and compliance with Sygma Solutions cable avoidance training.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="Morgan Sindall Case Study"
        description="How we helped Morgan Sindall achieve safety excellence"
        backgroundImage="/images/morgan-sindall-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
          <p className="text-lg text-gray-600 mb-6">
            Morgan Sindall, a major construction and property development company, required certified training in cable avoidance for their diverse workforce across multiple projects.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Training Delivery"
        images={[
          { src: '/images/morgan-case-1.jpg', alt: 'Morgan Sindall training', width: 600, height: 400 },
          { src: '/images/morgan-case-2.jpg', alt: 'Morgan Sindall equipment', width: 600, height: 400 },
          { src: '/images/morgan-case-3.jpg', alt: 'Morgan Sindall team', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <p className="text-lg text-gray-600 mb-6">
            We implemented a flexible training programme that could be delivered across multiple sites and projects, ensuring all Morgan Sindall employees received consistent, high-quality instruction.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Training scheduled around project timelines and site requirements</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Multi-Site Delivery</h3>
              <p className="text-gray-600">Training delivered at multiple project locations across the UK</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continued support and refresher training for sustained compliance</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-blue-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Results</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-600">Personnel Trained</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">97%</div>
              <p className="text-gray-600">Pass Rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Compliant</p>
            </div>
          </div>
          <p className="text-lg text-gray-600">
            Morgan Sindall now maintains full certification compliance across all their operations and has reported improved safety records on all trained projects.
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