import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from "@/components/PageHero";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
];

export const metadata: Metadata = {
  title: 'Courses | Sygma Solutions',
  description: 'Explore professional courses across Engineering, Business, and specialized programmes. Transform your career with industry-leading education.',
};

export default function CoursesPage() {
  const schools = [
    {
      name: 'School of Engineering (EUS)',
      description: 'Master advanced engineering skills and specialisations',
      programmes: [
        { name: 'Cat 1: Essentials', href: '/courses/eus-cat1' },
        { name: 'Cat 2: Advanced', href: '/courses/eus-cat2' },
        { name: 'Cat 3: Structures', href: '/courses/eus-cat3-structures' },
        { name: 'Cat 3: Systems', href: '/courses/eus-cat3-systems' },
        { name: 'Cat 3: Materials', href: '/courses/eus-cat3-materials' },
      ],
      href: '/courses/eus',
    },
    {
      name: 'School of Business (MBUS)',
      description: 'Develop business leadership and strategic skills',
      programmes: [
        { name: 'Introduction to Business', href: '/courses/mbus-intro' },
      ],
      href: '/courses/mbus',
    },
  ];

  const jsonLD = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema(breadcrumbs),
      organizationSchema({
        name: 'Sygma Solutions',
        url: 'https://sygma.ai',
      }),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
        <PageHero
          imageSrc="/images/hero/courses-hero.jpg"
          imageAlt="Sygma Solutions Courses"
          title="Professional Courses"
          subtitle="Transform your career with industry-leading education"
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-slate-900 mb-12">
              Our Schools
            </h2>
            <div className="space-y-8">
              {schools.map((school, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {school.name}
                    </h3>
                    <p className="text-slate-600 text-lg mb-6">
                      {school.description}
                    </p>
                    <div className="space-y-2">
                      {school.programmes.map((programme, progIndex) => (
                        <Link
                          key={progIndex}
                          href={programme.href}
                          className="block p-4 rounded-lg bg-slate-50 hover:bg-indigo-50 transition text-slate-900 hover:text-indigo-600 font-medium"
                        >
                          {programme.name}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={school.href}
                      className="inline-block mt-6 text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                      View all {school.name} courses →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-indigo-50 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Take our course finder quiz to discover the perfect programme for your career goals and skill level.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Start Course Finder
            </button>
          </section>
        </div>
      </div>
    </>
  );
}