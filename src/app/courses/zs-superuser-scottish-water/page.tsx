import { TrainingHeroSection } from '@/components/sections/TrainingHeroSection';
import { TrainingIntroduction } from '@/components/sections/TrainingIntroduction';
import { TrainingContentSection } from '@/components/sections/TrainingContentSection';
import { TrainingEnrollmentSection } from '@/components/sections/TrainingEnrollmentSection';
import { SiteConfig } from '@/config/site';

const courseConfig = {
  courseId: 'zs-superuser-scottish-water',
  title: 'Zonesite Superuser Training - Scottish Water',
  description: 'Advanced Zonesite system training for Scottish Water personnel',
  heroImage: '/images/courses/zonesite-superuser-hero.jpg',
  introText: 'Expert-level training in Zonesite system management and administration for Scottish Water teams.',
  sections: [
    {
      id: 'overview',
      title: 'System Overview',
      content: 'Master Zonesite platform administration and advanced features.',
    },
    {
      id: 'advanced',
      title: 'Advanced Administration',
      content: 'Develop superuser-level skills in system management and reporting.',
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

export default function ZonesiteSuperuserPage() {
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
