import { TrainingHeroSection } from '@/components/sections/TrainingHeroSection';
import { TrainingIntroduction } from '@/components/sections/TrainingIntroduction';
import { TrainingContentSection } from '@/components/sections/TrainingContentSection';
import { TrainingEnrollmentSection } from '@/components/sections/TrainingEnrollmentSection';
import { SiteConfig } from '@/config/site';

const courseConfig = {
  courseId: 'vscan-and-transmitter-training',
  title: 'VScan and Transmitter Training',
  description: 'Specialized training in cable location equipment operation and safety',
  heroImage: '/images/courses/vscan-hero.jpg',
  introText: 'Professional training in the operation and maintenance of VScan equipment and transmitter systems.',
  sections: [
    {
      id: 'overview',
      title: 'Equipment Overview',
      content: 'Comprehensive introduction to VScan and transmitter technologies.',
    },
    {
      id: 'operation',
      title: 'Operation & Maintenance',
      content: 'Master safe and effective operation of cable location equipment.',
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

export default function VScanPage() {
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
