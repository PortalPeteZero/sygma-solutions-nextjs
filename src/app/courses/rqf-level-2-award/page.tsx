import { TrainingHeroSection } from '@/components/sections/TrainingHeroSection';
import { TrainingIntroduction } from '@/components/sections/TrainingIntroduction';
import { TrainingContentSection } from '@/components/sections/TrainingContentSection';
import { TrainingEnrollmentSection } from '@/components/sections/TrainingEnrollmentSection';
import { SiteConfig } from '@/config/site';

const courseConfig = {
  courseId: 'rqf-level-2-award',
  title: 'RQF Level 2 Award in Utility Strike Avoidance',
  description: 'Nationally recognized qualification in cable and utility avoidance',
  heroImage: '/images/courses/rqf-level2-hero.jpg',
  introText: 'Gain a nationally recognized Level 2 qualification in utility strike avoidance and cable location awareness.',
  sections: [
    {
      id: 'overview',
      title: 'Qualification Overview',
      content: 'Achieve RQF Level 2 recognition in utility strike prevention.',
    },
    {
      id: 'requirements',
      title: 'Entry Requirements',
      content: 'Assess whether you meet the prerequisites for this level of qualification.',
    },
  ],
  enrollmentLink: '#enrollment',
};

export const metadata = {
  title: `${courseConfig.title} | ${SiteConfig.siteName}`,
  description: courseConfig.description,
  openGraph: {
    title: courseConfig.title,
    description: courseConfig.description,
    images: [{ url: courseConfig.heroImage }],
  },
};

export default function RQFLevel2Page() {
  return (
    <main className="min-h-screen">
      <TrainingHeroSection
        title={courseConfig.title}
        description={courseConfig.description}
        imageSrc={courseConfig.heroImage}
        imageAlt={courseConfig.title}
      />
      <TrainingIntroduction text={courseConfig.introText} />
      <TrainingContentSection sections={courseConfig.sections} />
      <TrainingEnrollmentSection courseId={courseConfig.courseId} />
    </main>
  );
}
