import { TrainingHeroSection } from '@/components/sections/TrainingHeroSection';
import { TrainingIntroduction } from '@/components/sections/TrainingIntroduction';
import { TrainingContentSection } from '@/components/sections/TrainingContentSection';
import { TrainingEnrollmentSection } from '@/components/sections/TrainingEnrollmentSection';
import { SiteConfig } from '@/config/site';

const courseConfig = {
  courseId: 'service-coordinator-usc',
  title: 'Service Coordinator UTC Training',
  description: 'Specialized utility strike avoidance training for service coordinators',
  heroImage: '/images/courses/service-coordinator-hero.jpg',
  introText: 'Advanced training programme for utility service coordinators managing strike prevention protocols.',
  sections: [
    {
      id: 'overview',
      title: 'Programme Overview',
      content: 'Develop expertise in service coordination and utility safety management.',
    },
    {
      id: 'competencies',
      title: 'Key Competencies',
      content: 'Master the essential skills required for professional service coordination.',
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

export default function ServiceCoordinatorPage() {
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
