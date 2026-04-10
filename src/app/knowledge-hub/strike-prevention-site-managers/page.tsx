import { KnowledgeHeroSection } from '@/components/sections/KnowledgeHeroSection';
import { KnowledgeContentSection } from '@/components/sections/KnowledgeContentSection';
import { KnowledgeFooterSection } from '@/components/sections/KnowledgeFooterSection';
import { SiteConfig } from '@/config/site';

const articleConfig = {
  id: 'strike-prevention-site-managers',
  title: 'Strike Prevention Strategies for Site Managers',
  description: 'Practical strategies for managing utility strike risks on construction and maintenance sites',
  heroImage: '/images/knowledge-hub/site-manager-hero.jpg',
  content: [
    {
      heading: 'Introduction',
      text: 'Site managers play a critical role in implementing effective strike prevention protocols.',
    },
    {
      heading: 'Key Strategies',
      text: 'Discover proven strategies for minimising utility strike risks on your sites.',
    },
  ],
};

export const metadata = {
  title: `${articleConfig.title} | ${SiteConfig.siteName}`,
  description: articleConfig.description,
  openGraph: {
    title: articleConfig.title,
    description: articleConfig.description,
    images: [{ url: articleConfig.heroImage }],
  },
};

export default function StrikePreventionSiteManagers() {
  return (
    <main className="min-h-screen">
      <KnowledgeHeroSection
        title={articleConfig.title}
        description={articleConfig.description}
        imageSrc={articleConfig.heroImage}
        imageAlt={articleConfig.title}
      />
      <KnowledgeContentSection content={articleConfig.content} />
      <KnowledgeFooterSection />
    </main>
  );
}
