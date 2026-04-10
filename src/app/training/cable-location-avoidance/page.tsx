import { TrainingHeroSection } from '@/components/sections/TrainingHeroSection';
import { TrainingIntroduction } from '@/components/sections/TrainingIntroduction';
import { TrainingContentSection } from '@/components/sections/TrainingContentSection';
import { TrainingEnrollmentSection } from '@/components/sections/TrainingEnrollmentSection';
import { SiteConfig } from '@/config/site';

const courseConfig = {
  courseId: 'cable-location-avoidance',
  title: 'Cable Location and Avoidance Training',
  description: 'Comprehensive training in cable detection and avoidance techniques',
  heroImage: '/images/training/cable-location-hero.jpg',
  introText: 'Master essential techniques for locating and avoiding underground cables and utilities.',
  sections: [
    {
      id: 'overview',
      title: 'Training Overview',
      content: 'Develop expertise in cable location technology and safety protocols.',
    },
    {
      id: 'techniques',
      title: 'Detection Techniques',
      content: 'Learn practical methods for identifying and mapping underground utilities.',
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

export default function CableLocationAvoidancePage() {
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
