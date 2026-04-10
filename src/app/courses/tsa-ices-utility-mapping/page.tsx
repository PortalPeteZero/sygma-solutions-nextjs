import { TrainingHeroSection } from '@/components/sections/TrainingHeroSection';
import { TrainingIntroduction } from '@/components/sections/TrainingIntroduction';
import { TrainingContentSection } from '@/components/sections/TrainingContentSection';
import { TrainingEnrollmentSection } from '@/components/sections/TrainingEnrollmentSection';
import { SiteConfig } from '@/config/site';

const courseConfig = {
  courseId: 'tsa-ices-utility-mapping',
  title: 'TSA ICES Utility Mapping Training',
  description: 'Expert training in utility mapping and location systems',
  heroImage: '/images/courses/tsa-ices-hero.jpg',
  introText: 'Master advanced utility mapping techniques using TSA ICES systems and methodologies.',
  sections: [
    {
      id: 'overview',
      title: 'System Overview',
      content: 'Understand TSA ICES utility mapping standards and best practices.',
    },
    {
      id: 'technical',
      title: 'Technical Skills',
      content: 'Develop practical skills in utility location and mapping technologies.',
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

export default function TSAICESPage() {
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
