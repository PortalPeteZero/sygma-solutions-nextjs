import { KnowledgeHubHeroSection } from '@/components/sections/KnowledgeHubHeroSection';
import { KnowledgeHubGridSection } from '@/components/sections/KnowledgeHubGridSection';
import { SiteConfig } from '@/config/site';

export const metadata = {
  title: `Knowledge Hub | ${SiteConfig.siteName}`,
  description: 'Comprehensive guides and resources on utility strike avoidance, cable safety, and related topics.',
  openGraph: {
    title: 'Knowledge Hub',
    description: 'Comprehensive guides and resources on utility strike avoidance.',
  },
};

export default function KnowledgeHub() {
  return (
    <main className="min-h-screen">
      <KnowledgeHubHeroSection />
      <KnowledgeHubGridSection />
    </main>
  );
}
