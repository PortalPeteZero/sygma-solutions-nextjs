import Link from 'next/link';
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
  eyebrow,
  breadcrumbs = [],
}: InnerPageHeroProps) {
  const resolvedImage = image || (images && images[0]);
  const hasImage = Boolean(resolvedImage);

  return (
    <section
      className="relative bg-slate-900 py-20 md:py-28 overflow-hidden"
      style={
        hasImage
          ? {
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.88)), url(${resolvedImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Subtle gradient overlay for non-image variant */}
      {!hasImage && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-slate-300"
          >
            {breadcrumbs.map((crumb, i) => (
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
                {i < breadcrumbs.length - 1 && (
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
