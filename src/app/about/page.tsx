import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from "@/components/PageHero";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

export const metadata: Metadata = {
  title: 'About Sygma Solutions | Our Mission & Values',
  description: 'Learn about Sygma Solutions\' mission to transform professional education. Discover our story, values, and commitment to excellence.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'Leading the vision to democratise professional education',
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Product Officer',
      bio: 'Driving innovation in learning experience design',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Building scalable platforms for global education',
    },
    {
      name: 'Emily Watson',
      role: 'Head of Curriculum',
      bio: 'Crafting world-class educational content',
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we create',
    },
    {
      title: 'Impact',
      description: 'We measure success by the careers we help transform',
    },
    {
      title: 'Innovation',
      description: 'We embrace new ideas and continuous improvement',
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty',
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
          imageSrc="/images/hero/about-hero.jpg"
          imageAlt="About Sygma Solutions"
          title="About Sygma Solutions"
          subtitle="Transforming professional education and career development"
        />

        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto w-full">
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              At Sygma Solutions, we believe that professional education should be accessible, engaging, and directly applicable to real-world challenges. Our mission is to provide world-class training programmes that empower individuals and organisations to achieve their full potential. Through innovative learning experiences and expert instruction, we're transforming how professionals develop their careers.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Sygma Solutions was founded with a simple observation: traditional professional education wasn't keeping pace with industry change. Professionals needed faster, more relevant, and more practical learning experiences.
              </p>
              <p>
                From our early days, we've focused on one thing: creating exceptional learning experiences that translate directly into career growth. We've partnered with industry experts, invested in cutting-edge technology, and built a culture of innovation and excellence.
              </p>
              <p>
                Today, thousands of professionals and organisations trust Sygma Solutions to develop their teams and transform their careers. We're just getting started.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-lg p-6 text-center hover:shadow-lg transition"
                >
                  <div className="w-24 h-24 bg-indigo-300 rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}