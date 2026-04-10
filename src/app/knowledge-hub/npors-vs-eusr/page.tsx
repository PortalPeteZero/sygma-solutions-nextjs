import { KnowledgeHeroSection } from '@/components/sections/KnowledgeHeroSection';
import { KnowledgeContentSection } from '@/components/sections/KnowledgeContentSection';
import { KnowledgeFooterSection } from '@/components/sections/KnowledgeFooterSection';
import { SiteConfig } from '@/config/site';

const articleConfig = {
  id: 'npors-vs-eusr',
  title: 'NPORS vs EUSR: Choosing the Right Qualification',
  description: 'Comparison of NPORS and EUSR utility strike avoidance qualifications',
  heroImage: '/images/knowledge-hub/npors-eusr-hero.jpg',
  content: [
    {
      heading: 'Overview',
      text: 'Both NPORS and EUSR are respected qualifications in utility safety, each with distinct characteristics.',
    },
    {
      heading: 'Comparison',
      text: 'Explore the differences to determine which qualification best suits your needs.',
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

export default function NPORSvsEUSR() {
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
