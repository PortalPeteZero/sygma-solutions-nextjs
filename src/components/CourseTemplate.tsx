import Link from 'next/link';
import Image from 'next/image';
import InnerPageHero from '@/components/InnerPageHero';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';
import type { CoursePageData, PhotoStripConfig } from '@/data/courses/types';

/* ------------------------------------------------------------------ */
/*  Reusable sub-sections                                              */
/* ------------------------------------------------------------------ */

function Schemas({ data }: { data: CoursePageData }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema(data.schemas.course) }} />
      {data.schemas.includeFaqSchema !== false && data.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(data.faqs) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema(data.schemas.breadcrumbs) }} />
    </>
  );
}

function StatsBar({ items }: { items: CoursePageData['stats'] }) {
  if (!items?.length) return null;
  return (
    <section className="bg-foreground py-6">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <div className={`grid grid-cols-1 md:grid-cols-${items.length} gap-4`}>
          {items.map((s) => (
            <div key={s.label} className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">{s.value}</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">{s.label}</p>
              {s.detail && <p className="text-xs text-white/60">{s.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoForSection({ config }: { config: NonNullable<CoursePageData['whoFor']> }) {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <p className="mb-3 eyebrow">{config.eyebrow ?? 'Who Is This Course For'}</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">{config.title ?? 'Designed For'}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {config.items.map((p) => (
            <div key={p.title} className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBar({ items }: { items: CoursePageData['infoBar'] }) {
  if (!items?.length) return null;
  return (
    <section className="bg-muted/40 border-y border-border py-5">
      <div className={`container mx-auto px-6 grid grid-cols-2 md:grid-cols-${items.length} gap-4`}>
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="eyebrow mb-1">{item.label}</p>
            <p className="text-sm font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection({ config }: { config: NonNullable<CoursePageData['about']> }) {
  return (
    <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="eyebrow mb-3">{config.eyebrow}</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">{config.title}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {config.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        {config.sidebar && (
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">{config.sidebar.eyebrow}</p>
            {config.sidebar.items.map((item) => (
              <div key={item.label} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="eyebrow text-muted-foreground w-28 shrink-0">{item.label}</span>
                <span className="text-sm text-foreground text-right">{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CourseContentSection({ config }: { config: NonNullable<CoursePageData['courseContent']> }) {
  return (
    <section className="bg-muted/20 py-14">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        {config.eyebrow && <p className="eyebrow mb-3">{config.eyebrow}</p>}
        {config.title && <h2 className="text-2xl md:text-3xl font-black mb-10 text-foreground">{config.title}</h2>}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Theory */}
          <div className="rounded-xl border border-border bg-background overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black text-lg">{config.theory.heading}</p>
              {config.theory.subheading && <p className="text-white/70 text-sm">{config.theory.subheading}</p>}
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                {config.theory.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Practical */}
          <div className="rounded-xl border border-border bg-background overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black text-lg">{config.practical.heading}</p>
              {config.practical.subheading && <p className="text-white/70 text-sm">{config.practical.subheading}</p>}
            </div>
            <div className="p-6">
              {config.practical.intro && (
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{config.practical.intro}</p>
              )}
              <ul className="space-y-2">
                {config.practical.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoStrip({ config }: { config: PhotoStripConfig }) {
  if (config.variant === 'full') {
    const img = config.images[0];
    return (
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <Image src={img.src} width={1200} height={800} alt={img.alt} sizes="100vw" className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
      {config.images.map((img) => (
        <div key={img.src} className="overflow-hidden rounded-lg">
          <Image src={img.src} width={1200} height={800} alt={img.alt} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      ))}
    </div>
  );
}

function FormatsTable({ config }: { config: NonNullable<CoursePageData['formats']> }) {
  return (
    <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
      {config.eyebrow && <p className="eyebrow mb-3">{config.eyebrow}</p>}
      <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">{config.title ?? 'Course Formats'}</h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left px-4 py-3 font-bold text-foreground">Format</th>
              <th className="text-left px-4 py-3 font-bold text-foreground">Duration</th>
              <th className="text-left px-4 py-3 font-bold text-foreground">Max Delegates</th>
              <th className="text-left px-4 py-3 font-bold text-foreground">Assessment</th>
            </tr>
          </thead>
          <tbody>
            {config.rows.map((row, i) => (
              <tr key={row.format} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                <td className="px-4 py-3 font-semibold text-foreground">{row.format}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.duration}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.maxDelegates}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.assessment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {config.notes?.map((note, i) => (
        <p key={i} className="text-sm text-muted-foreground mt-4">{note}</p>
      ))}
    </section>
  );
}

function CertRoutesSection({ config }: { config: NonNullable<CoursePageData['certRoutes']> }) {
  return (
    <section className="bg-background py-14">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <p className="mb-3 eyebrow">{config.eyebrow ?? 'What You Get'}</p>
        <h2 className="text-2xl font-black mb-8 text-foreground">{config.title ?? 'Qualification Routes'}</h2>
        {config.intro && <p className="text-muted-foreground mb-6 leading-relaxed">{config.intro}</p>}
        <div className="grid md:grid-cols-2 gap-6">
          {config.items.map((item) => (
            <div key={item.title} className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteRequirementsSection({ config, citb }: { config: NonNullable<CoursePageData['siteRequirements']>; citb?: CoursePageData['citbFunding'] }) {
  return (
    <section className="bg-muted/20 py-14">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow mb-3">Site Requirements</p>
            <h2 className="text-xl font-black mb-6 text-foreground">What You Need to Provide</h2>
            <div className="space-y-3">
              {config.items.map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <span className="text-accent font-black shrink-0 mt-1">&#8250;</span>
                  <div>
                    <span className="font-semibold text-foreground text-sm">{item.label}: </span>
                    <span className="text-muted-foreground text-sm">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
            {config.note && <p className="text-sm text-muted-foreground mt-4">{config.note}</p>}
          </div>
          {citb && (
            <div>
              <p className="eyebrow mb-3">CITB Funding</p>
              <h3 className="text-xl font-black mb-4 text-foreground">CITB Approved Training Organisation</h3>
              <div className="bg-background rounded-xl border border-border p-5">
                {citb.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed mb-4 last:mb-0">{p}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function HSG47Section({ items }: { items: NonNullable<CoursePageData['hsg47']>['items'] }) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="eyebrow mb-2">Regulation</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">HSG47 Compliance</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">The course addresses all key elements of HSG47 health and safety guidance on preventing strikes on underground services. Every element of this safety training maps back to a specific HSG47 requirement.</p>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div key={item.title} className="border border-border rounded-lg bg-card p-5">
              <p className="eyebrow mb-2">{item.eyebrow}</p>
              <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySygmaSection({ items }: { items: NonNullable<CoursePageData['whySygma']>['items'] }) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="eyebrow mb-2">Why Choose Sygma</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Sygma</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">We go beyond qualification specifications. Our safety methodology is built on years of strike investigations, real-world field experience and proven safety results.</p>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div key={item.title} className="border border-border rounded-lg bg-card p-5">
              <p className="eyebrow mb-2">{item.eyebrow}</p>
              <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection({ config }: { config: NonNullable<CoursePageData['video']> }) {
  return (
    <section className="bg-muted/20 border-y border-border py-14">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <p className="eyebrow mb-3">{config.eyebrow}</p>
        <h2 className="text-2xl font-black mb-4 text-foreground">{config.title}</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">{config.description}</p>
        <div className="rounded-xl overflow-hidden border border-border mb-6 aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${config.youtubeId}`}
            title={config.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        {config.linkText && config.linkHref && (
          <Link href={config.linkHref} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            {config.linkText} &rarr;
          </Link>
        )}
      </div>
    </section>
  );
}

function RelatedCoursesSection({ config }: { config: NonNullable<CoursePageData['relatedCourses']> }) {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="eyebrow mb-2">{config.eyebrow ?? 'Further Training'}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{config.title ?? 'Related Courses'}</h2>
        {config.intro && <p className="text-muted-foreground mb-8 max-w-2xl">{config.intro}</p>}
        <div className={`grid md:grid-cols-${Math.min(config.items.length, 3)} gap-5`}>
          {config.items.map((item) => (
            <div key={item.href} className="border border-border rounded-lg bg-card p-5">
              <p className="eyebrow mb-2">{item.eyebrow}</p>
              <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
              <Link href={item.href} className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                View Course &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedReadingSection({ items }: { items: NonNullable<CoursePageData['relatedReading']> }) {
  return (
    <section className="bg-muted/20 border-y border-border py-14">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-xl font-black mb-6 text-foreground">Related Reading</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlsoConsiderSection({ items }: { items: NonNullable<CoursePageData['alsoConsider']> }) {
  return (
    <section className="border-t border-border py-10">
      <div className="container mx-auto max-w-3xl px-4">
        <h3 className="mb-4 eyebrow">Also Consider</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
              <p className="mb-1 text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ faqs, eyebrow, title }: { faqs: CoursePageData['faqs']; eyebrow?: string; title?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
      <p className="eyebrow mb-3">{eyebrow ?? 'Common Questions'}</p>
      <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">{title ?? 'Frequently Asked Questions'}</h2>
      <div className="space-y-4">
        {faqs.map(({ q, a }) => (
          <div key={q} className="border border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-3">{q}</h3>
            <p className="text-muted-foreground leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection({ config }: { config: CoursePageData['cta'] }) {
  return (
    <section className="bg-primary/5 border-y border-border py-14">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-black mb-4 text-foreground">{config.title}</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{config.description}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={config.primaryHref ?? '/contact'}
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            {config.primaryLabel ?? 'Book Now'}
          </Link>
          {config.secondaryLabel && (
            <Link
              href={config.secondaryHref ?? '/contact'}
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              {config.secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main template                                                      */
/* ------------------------------------------------------------------ */

/**
 * CourseTemplate renders all standard course page sections from data.
 *
 * Pass `children` for any page-specific custom sections that appear
 * between the about/course-content block and the FAQ block.
 *
 * Section render order:
 *   Schemas → Hero → Stats → WhoFor → InfoBar → About → CourseContent
 *   → [photoStrips[0]] → {children} → [photoStrips[1]] → CertRoutes
 *   → Formats → SiteRequirements → [photoStrips[2+]] → RelatedReading
 *   → FAQs → HSG47 → WhySygma → RelatedCourses → AlsoConsider → Video → CTA
 */
export default function CourseTemplate({
  data,
  children,
}: {
  data: CoursePageData;
  children?: React.ReactNode;
}) {
  const strips = data.photoStrips ?? [];

  return (
    <>
      <Schemas data={data} />

      <InnerPageHero
        eyebrow={data.hero.eyebrow}
        headline={data.hero.headline}
        sub={data.hero.sub}
        image={data.hero.image}
        images={data.hero.images}
        alt={data.hero.alt}
        alts={data.hero.alts}
        breadcrumbs={data.hero.breadcrumbs}
      />

      {data.stats && <StatsBar items={data.stats} />}

      {data.whoFor && <WhoForSection config={data.whoFor} />}

      {data.infoBar && <InfoBar items={data.infoBar} />}

      {data.about && <AboutSection config={data.about} />}

      {data.courseContent && <CourseContentSection config={data.courseContent} />}

      {strips[0] && <PhotoStrip config={strips[0]} />}

      {children}

      {strips[1] && <PhotoStrip config={strips[1]} />}

      {data.certRoutes && <CertRoutesSection config={data.certRoutes} />}

      {strips[2] && <PhotoStrip config={strips[2]} />}

      {data.formats && <FormatsTable config={data.formats} />}

      {data.siteRequirements && <SiteRequirementsSection config={data.siteRequirements} citb={data.citbFunding} />}

      {strips[3] && <PhotoStrip config={strips[3]} />}

      {data.relatedReading && <RelatedReadingSection items={data.relatedReading} />}

      <FAQSection faqs={data.faqs} />

      {data.hsg47 && <HSG47Section items={data.hsg47.items} />}

      {data.whySygma && <WhySygmaSection items={data.whySygma.items} />}

      {data.relatedCourses && <RelatedCoursesSection config={data.relatedCourses} />}

      {data.alsoConsider && <AlsoConsiderSection items={data.alsoConsider} />}

      {data.video && <VideoSection config={data.video} />}

      <CTASection config={data.cta} />
    </>
  );
}
