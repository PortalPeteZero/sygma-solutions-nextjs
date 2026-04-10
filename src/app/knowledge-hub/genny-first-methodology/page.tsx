import { KnowledgeHeroSection } from '@/components/sections/KnowledgeHeroSection';
import { KnowledgeContentSection } from '@/components/sections/KnowledgeContentSection';
import { KnowledgeFooterSection } from '@/components/sections/KnowledgeFooterSection';
import { SiteConfig } from '@/config/site';

const articleConfig = {
  id: 'genny-first-methodology',
  title: 'The Genny First Methodology in Cable Avoidance',
  description: 'Understanding Genny-first approach to utility strike prevention',
  heroImage: '/images/knowledge-hub/genny-first-hero.jpg',
  content: [
    {
      heading: 'Introduction',
      text: 'The Genny-first methodology prioritises safe cable detection using portable generator systems.',
    },
    {
      heading: 'Best Practices',
      text: 'Learn how to implement Genny-first protocols in your site safety procedures.',
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

export default function GennyFirstMethodology() {
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
