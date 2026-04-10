import { KnowledgeHeroSection } from '@/components/sections/KnowledgeHeroSection';
import { KnowledgeContentSection } from '@/components/sections/KnowledgeContentSection';
import { KnowledgeFooterSection } from '@/components/sections/KnowledgeFooterSection';
import { SiteConfig } from '@/config/site';

const articleConfig = {
  id: 'understanding-pas-128',
  title: 'Understanding PAS 128: Guide to Cable Avoidance',
  description: 'Comprehensive guide to PAS 128 standards and cable avoidance practices',
  heroImage: '/images/knowledge-hub/pas-128-hero.jpg',
  content: [
    {
      heading: 'Introduction',
      text: 'PAS 128 provides the British standard for cable avoidance and utility safety.',
    },
    {
      heading: 'Key Points',
      text: 'Learn the essential principles and practices outlined in PAS 128.',
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

export default function UnderstandingPAS128() {
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
