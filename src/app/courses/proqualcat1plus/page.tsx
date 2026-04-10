import { TrainingHeroSection } from '@/components/sections/TrainingHeroSection';
import { TrainingIntroduction } from '@/components/sections/TrainingIntroduction';
import { TrainingContentSection } from '@/components/sections/TrainingContentSection';
import { TrainingEnrollmentSection } from '@/components/sections/TrainingEnrollmentSection';
import { SiteConfig } from '@/config/site';

const courseConfig = {
  courseId: 'proqualcat1plus',
  title: 'EUSR Card Cat1 Plus Training',
  description: 'Professional Cat1 Plus Utility Strike Avoidance Training with EUSR Card',
  heroImage: '/images/courses/proqualcat1-hero.jpg',
  introText: 'Comprehensive utility strike avoidance training specifically designed for professional safety engineers and managers.',
  sections: [
    {
      id: 'overview',
      title: 'Course Overview',
      content: 'Gain comprehensive knowledge of utility strike prevention and EUSR card Cat1 Plus standards.',
    },
    {
      id: 'content',
      title: 'What You Will Learn',
      content: 'Master cable avoidance, equipment location, and professional safety protocols.',
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

export default function ProQualCat1PlusPage() {
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
