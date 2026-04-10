import { KnowledgeHeroSection } from '@/components/sections/KnowledgeHeroSection';
import { KnowledgeContentSection } from '@/components/sections/KnowledgeContentSection';
import { KnowledgeFooterSection } from '@/components/sections/KnowledgeFooterSection';
import { SiteConfig } from '@/config/site';

const articleConfig = {
  id: 'hsg47-explained',
  title: 'HSG47 Explained: Essential Safety Guidelines',
  description: 'Complete guide to HSG47 electrical safety and avoidance procedures',
  heroImage: '/images/knowledge-hub/hsg47-hero.jpg',
  content: [
    {
      heading: 'What is HSG47',
      text: 'HSG47 provides essential guidance on working safely near buried cables and underground services.',
    },
    {
      heading: 'Key Requirements',
      text: 'Understand the core safety requirements outlined in the HSG47 guidelines.',
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

export default function HSG47Explained() {
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
