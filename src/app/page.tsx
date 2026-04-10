import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { CoursesOverviewSection } from '@/components/sections/CoursesOverviewSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { SiteConfig } from '@/config/site';

export const metadata = {
  title: SiteConfig.siteName,
  description: SiteConfig.siteDescription,
  openGraph: {
    title: SiteConfig.siteName,
    description: SiteConfig.siteDescription,
    images: [{ url: '/images/og-image.jpg' }],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CoursesOverviewSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
