import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';

const metadata: Metadata = {
  title: 'Severn Trent Water Case Study | Sygma Solutions',
  description: 'See how Severn Trent Water improved safety and compliance with Sygma Solutions cable avoidance training.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="Severn Trent Water Case Study"
        description="How we helped Severn Trent Water achieve safety excellence"
        backgroundImage="/images/severn-trent-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
          <p className="text-lg text-gray-600 mb-6">
            Severn Trent Water, one of the UK's largest water companies, needed to ensure all their field teams had current certification in cable avoidance and utility detection across the Midlands and Wales.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Training Delivery"
        images={[
          { src: '/images/severn-trent-case-1.jpg', alt: 'Severn Trent training', width: 600, height: 400 },
          { src: '/images/severn-trent-case-2.jpg', alt: 'Severn Trent equipment', width: 600, height: 400 },
          { src: '/images/severn-trent-case-3.jpg', alt: 'Severn Trent team', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <p className="text-lg text-gray-600 mb-6">
            We delivered a large-scale training programme covering all Severn Trent Water's field teams across multiple regions, with flexible scheduling to minimise service disruption.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Large-Scale Delivery</h3>
              <p className="text-gray-600">Training for over 300 personnel across multiple locations</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Scheduling that allowed teams to continue vital water supply services</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Ongoing Compliance</h3>
              <p className="text-gray-600">Continuing support for refresher training and certification renewal</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-blue-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Results</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <p className="text-gray-600">Personnel Trained</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">96%</div>
              <p className="text-gray-600">Pass Rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Compliant</p>
            </div>
          </div>
          <p className="text-lg text-gray-600">
            Severn Trent Water now maintains full certification compliance across all regions and has reported improved safety records and reduced utility-related incidents.
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