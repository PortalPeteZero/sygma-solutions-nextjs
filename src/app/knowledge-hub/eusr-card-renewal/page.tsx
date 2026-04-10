import { KnowledgeHeroSection } from '@/components/sections/KnowledgeHeroSection';
import { KnowledgeContentSection } from '@/components/sections/KnowledgeContentSection';
import { KnowledgeFooterSection } from '@/components/sections/KnowledgeFooterSection';
import { SiteConfig } from '@/config/site';

const articleConfig = {
  id: 'eusr-card-renewal',
  title: 'EUSR Card Renewal: Process and Requirements',
  description: 'Complete guide to renewing your EUSR utility strike avoidance card',
  heroImage: '/images/knowledge-hub/card-renewal-hero.jpg',
  content: [
    {
      heading: 'Overview',
      text: 'Understand the EUSR card renewal process and timelines to maintain your qualification.',
    },
    {
      heading: 'Requirements',
      text: 'Discover what you need to do to successfully renew your EUSR certification.',
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

export default function EUSRCardRenewal() {
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
