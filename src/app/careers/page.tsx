import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from "@/components/PageHero";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Careers', href: '/careers' },
];

export const metadata: Metadata = {
  title: 'Careers at Sygma Solutions | Join Our Team',
  description: 'Build your career with Sygma Solutions. Explore open positions, learn about our culture, and join a team transforming professional education.',
};

export default function CareersPage() {
  const careerBenefits = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and comprehensive benefits packages',
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning opportunities and skill development programs',
    },
    {
      title: 'Flexible Working',
      description: 'Remote-first culture with flexible schedules that work for you',
    },
    {
      title: 'Innovation Focus',
      description: 'Work on cutting-edge projects in professional education',
    },
    {
      title: 'Inclusive Culture',
      description: 'Diverse, welcoming teams that value different perspectives',
    },
    {
      title: 'Impact Driven',
      description: 'Make a meaningful difference in thousands of careers',
    },
  ];

  const departments = [
    {
      name: 'Engineering',
      roles: ['Senior Engineer', 'Full Stack Developer', 'DevOps Engineer', 'QA Engineer'],
      description: 'Build scalable systems that power professional education',
    },
    {
      name: 'Product & Design',
      roles: ['Product Manager', 'UX Designer', 'Product Designer', 'Design Systems Lead'],
      description: 'Shape the future of learning with innovative products',
    },
    {
      name: 'Content & Curriculum',
      roles: ['Content Creator', 'Curriculum Designer', 'Subject Matter Expert', 'Editor'],
      description: 'Develop world-class educational content and experiences',
    },
    {
      name: 'Sales & Business Development',
      roles: ['Sales Manager', 'Account Executive', 'Business Development Manager', 'Sales Engineer'],
      description: 'Drive growth and build partnerships with leading organisations',
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
      <div className="min-h-screen flex flex-col bg-white">
        <PageHero
          imageSrc="/images/hero/careers-hero.jpg"
          imageAlt="Careers at Sygma Solutions"
          title="Build Your Career"
          subtitle="Join a team transforming professional education and development"
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-900">
              Why Join Sygma Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-slate-900">
              Open Positions
            </h2>
            <div className="space-y-8">
              {departments.map((department, index) => (
                <div
                  key={index}
                  className="border-l-4 border-indigo-600 pl-6 py-4"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {department.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{department.description}</p>
                  <div className="space-y-2">
                    {department.roles.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className="flex items-center justify-between bg-white p-4 rounded hover:bg-indigo-50 transition"
                      >
                        <span className="font-medium text-slate-900">{role}</span>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition text-sm">
                          Apply
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-indigo-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              We're always looking for talented individuals. Send us your CV and tell us how you can contribute to Sygma Solutions.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded text-lg transition">
              Send Your Application
            </button>
          </section>
        </div>
      </div>
    </>
  );
}