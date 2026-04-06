import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';

export const metadata: Metadata = {
  title: 'EUS CAT1 vs ProQual CAT1 vs CAT1 Plus | Sygma Solutions',
  description: 'Compare EUS CAT1, ProQual CAT1 and ProQual CAT1 Plus cable avoidance courses. Find the right CAT and Genny qualification for your team.',
  alternates: {
    canonical: 'https://sygma-solutions.com/courses/cable-avoidance-course-comparison',
  },
};

export default function CourseComparisonPage() {
  return (
    <main>
      <InnerPageHero
        eyebrow="Utility Avoidance"
        headline="EUS CAT1 vs ProQual CAT1 vs ProQual CAT1 Plus: Which Cable Avoidance Course Is Right for Your Team?"
        sub="Three qualifications. One comparison. Sygma delivers all three. Use this page to understand the difference and choose what your team actually needs."
        image="/images/courses/CAT4-and-Genny-02.webp"
        breadcrumbs={[
          { label: "Training", to: "/training/cable-location-avoidance" },
          { label: "Course Comparison" },
        ]}
      />

      {/* 3-photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <img loading="lazy" src="/images/courses/CAT4-and-Genny-03.webp" alt="Sygma course comparison - practical session" className="rounded-lg object-cover aspect-[4/3] w-full" />
          <img loading="lazy" src="/images/courses/Safe-Dig-03.webp" alt="Sygma course comparison - hands-on assessment" className="rounded-lg object-cover aspect-[4/3] w-full" />
          <img loading="lazy" src="/images/courses/Utility-Mapping-02.webp" alt="Sygma course comparison - on-site delivery" className="rounded-lg object-cover aspect-[4/3] w-full" />
        </div>
      </section>

      {/* Full-width image */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <img loading="lazy" src="/images/courses/CAT4-and-Genny-45.webp" alt="Sygma course comparison - live training environment" className="w-full h-full object-cover object-center" />
      </div>

      {/* Who is this page for */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Who This Is For</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Who Is This Page For?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mb-8">
          <p>
            This page is for procurement managers, H&S leads, and site managers who need to decide which cable avoidance qualification to specify for their operatives.
          </p>
          <p>If you already know which qualification you want, go straight to the relevant course page:</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border max-w-3xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/40">
                <th className="text-left px-5 py-3 font-bold text-foreground">Qualification</th>
                <th className="text-left px-5 py-3 font-bold text-foreground">Go to</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  qual: "CAT and Genny Training (in-house certificate)",
                  to: "/courses/cable-avoidance-training",
                  label: "Cable Avoidance Training",
                },
                {
                  qual: "EUS CAT1: EUSR Category 1",
                  to: "/courses/eus-cat1",
                  label: "EUS CAT1 Accreditation",
                },
                {
                  qual: "ProQual CAT1 (externally audited)",
                  to: "/courses/proqualcat1-training",
                  label: "ProQual CAT1",
                },
                {
                  qual: "ProQual CAT1 Plus (most advanced available)",
                  to: "/courses/proqualcat1plus",
                  label: "ProQual CAT1 Plus",
                },
              ].map(({ qual, to, label }, i) => (
                <tr key={qual as string} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-5 py-3 text-foreground font-semibold">{qual}</td>
                  <td className="px-5 py-3">
                    <Link href={to} className="text-primary hover:underline font-semibold">
                      {label}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src="/images/courses/CAT4-and-Genny-10.webp" alt="Cable avoidance training course comparison" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src="/images/courses/CAT4-and-Genny-52.webp" alt="Utility locating qualification assessment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img loading="lazy" src="/images/courses/Safe-Dig-04.webp" alt="Comparing CAT training qualifications" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Not Sure Which Option Is Right for You?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Sygma delivers all three qualifications to your premises, UK-wide. If you are not sure which qualification to specify, call us or send an enquiry and we will advise based on your client requirements, procurement framework and the work your team carries out.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+442039718252"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
