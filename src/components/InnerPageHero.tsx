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
            className="mb-5 flex items-center gap-1 text-xs text-white/50"
          >
            {fullBreadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={12} />}
                {crumb.to || crumb.href ? (
                  <Link
                    href={crumb.to || crumb.href || '#'}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Eyebrow label */}
        {eyebrow && (
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}

        {/* Headline */}
        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white max-w-4xl">
          {headline}
        </h1>

        {/* Subtitle */}
        {sub && (
          <p className="text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
