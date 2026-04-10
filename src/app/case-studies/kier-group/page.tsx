import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ImageStrip } from '@/components/ImageStrip';

const metadata: Metadata = {
  title: 'Kier Group Case Study | Sygma Solutions',
  description: 'See how Kier Group improved safety and compliance with Sygma Solutions cable avoidance training.',
};

export { metadata };

export default function Page() {
  return (
    <>
      <InnerPageHero
        title="Kier Group Case Study"
        description="How we helped Kier Group achieve safety excellence"
        backgroundImage="/images/kier-hero.jpg"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
          <p className="text-lg text-gray-600 mb-6">
            Kier Group, a leading construction company, needed to ensure all their teams had certified training in cable avoidance and utility detection across multiple sites.
          </p>
        </div>
      </Section>

      <ImageStrip
        title="Training Delivery"
        images={[
          { src: '/images/kier-case-1.jpg', alt: 'Kier training', width: 600, height: 400 },
          { src: '/images/kier-case-2.jpg', alt: 'Kier equipment', width: 600, height: 400 },
          { src: '/images/kier-case-3.jpg', alt: 'Kier team', width: 600, height: 400 },
        ]}
        objectPosition="object-top"
        containerHeight="h-96"
      />

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <p className="text-lg text-gray-600 mb-6">
            We delivered a comprehensive training programme tailored to Kier Group's specific requirements, including on-site training and certification for over 100 personnel.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Customised Training Programme</h3>
              <p className="text-gray-600">Designed specifically for Kier Group's operational needs and compliance requirements</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">On-Site Delivery</h3>
              <p className="text-gray-600">Training delivered at multiple locations to minimise disruption to operations</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold mb-2">Certification & Compliance</h3>
              <p className="text-gray-600">All participants received industry-recognised certification</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-blue-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">The Results</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">Personnel Trained</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Pass Rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Compliant</p>
            </div>
          </div>
          <p className="text-lg text-gray-600">
            Kier Group achieved full compliance across all sites and reported significant improvements in safety culture and risk management.
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