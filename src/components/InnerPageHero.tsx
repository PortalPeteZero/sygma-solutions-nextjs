import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  to?: string;
  href?: string;
}

interface InnerPageHeroProps {
  headline: string;
  sub?: string;
  image?: string;
  images?: string[];
  alt?: string;
  alts?: string[];
  eyebrow?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function InnerPageHero({
  headline,
  sub,
  image,
  images,
  alt,
  alts,
  eyebrow,
  breadcrumbs = [],
}: InnerPageHeroProps) {
  const resolvedImage = image || (images && images[0]);
  const resolvedAlt = alt || (alts && alts[0]) || '';
  const hasImage = Boolean(resolvedImage);

  /* Always prepend "Home" breadcrumb if not already present */
  const fullBreadcrumbs =
    breadcrumbs.length > 0 && breadcrumbs[0].label !== 'Home'
      ? [{ label: 'Home', href: '/' }, ...breadcrumbs]
      : breadcrumbs;

  return (
    <section className="relative overflow-hidden min-h-[400px] md:min-h-[480px] lg:min-h-[520px] bg-foreground">
      {/* Background image */}
      {hasImage && (
        <Image
          src={resolvedImage!}
          alt={resolvedAlt}
          fill
          className="absolute inset-0 h-full w-full object-cover object-center"
          priority
          sizes="100vw"
        />
      )}

      {/* Gradient overlay -- left-to-right to match live site */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30"
        aria-hidden="true"
      />

      {/* Accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 pt-10 pb-12 md:pb-16">
        {/* Breadcrumbs */}
        {fullBreadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-slate-300"
          >
            {fullBreadcrumbs.map((crumb, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {crumb.to || crumb.href ? (
                  <Link
                    href={crumb.to || crumb.href || '#'}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-100 font-medium">{crumb.label}</span>
                )}
                {i < fullBreadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Eyebrow label */}
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
        )}

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
          {headline}
        </h1>

        {/* Subtitle */}
        {sub && (
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
