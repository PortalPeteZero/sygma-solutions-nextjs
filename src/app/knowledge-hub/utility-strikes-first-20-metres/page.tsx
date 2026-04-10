import { KnowledgeHeroSection } from '@/components/sections/KnowledgeHeroSection';
import { KnowledgeContentSection } from '@/components/sections/KnowledgeContentSection';
import { KnowledgeFooterSection } from '@/components/sections/KnowledgeFooterSection';
import { SiteConfig } from '@/config/site';

const articleConfig = {
  id: 'utility-strikes-first-20-metres',
  title: 'Utility Strikes in the First 20 Metres: Critical Safety Zone',
  description: 'Understanding high-risk utility zones and safety protocols',
  heroImage: '/images/knowledge-hub/20m-zone-hero.jpg',
  content: [
    {
      heading: 'The Critical Zone',
      text: 'The first 20 metres of excavation represents the highest risk zone for utility strikes.',
    },
    {
      heading: 'Safety Protocols',
      text: 'Implement strict safety procedures in high-risk utility zones.',
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

export default function UtilityStrikesFirst20Metres() {
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
