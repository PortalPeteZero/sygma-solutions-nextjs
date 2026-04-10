import { KnowledgeHeroSection } from '@/components/sections/KnowledgeHeroSection';
import { KnowledgeContentSection } from '@/components/sections/KnowledgeContentSection';
import { KnowledgeFooterSection } from '@/components/sections/KnowledgeFooterSection';
import { SiteConfig } from '@/config/site';

const articleConfig = {
  id: 'eus-cat1-vs-proqual-cat1',
  title: 'EUSR Cat1 vs ProQual Cat1: Understanding the Difference',
  description: 'Comprehensive comparison of EUSR and ProQual Cat1 certifications',
  heroImage: '/images/knowledge-hub/comparison-hero.jpg',
  content: [
    {
      heading: 'Introduction',
      text: 'Both EUSR and ProQual offer Cat1 qualifications in utility strike avoidance, but they differ in their approach and recognition.',
    },
    {
      heading: 'Key Differences',
      text: 'Learn the essential distinctions between these two respected qualification providers.',
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

export default function EUSRvsProqual() {
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
