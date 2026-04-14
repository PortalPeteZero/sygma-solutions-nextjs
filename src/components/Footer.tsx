import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, MapPin } from 'lucide-react'
import {
  footerUtilityAvoidanceLinks as utilityAvoidanceLinks,
  footerUtilityMappingLinks as utilityMappingLinks,
  footerCompanyLinks as companyLinks,
} from '@/data/navigation'
import { TrackedPhoneLink, TrackedEmailLink, CookieSettingsButton } from './FooterClientIslands'

/* ------------------------------------------------------------------ */
/*  Footer component (server component -- client islands for tracking) */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-14">
        {/* Main footer grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 block">
              <Image
                src="/logo.webp"
                alt="Sygma Solutions Ltd"
                width={145}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The UK&apos;s only independent specialist in underground utility location training. 21 years. One specialism. Zero conflicts.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <TrackedPhoneLink />
              </li>
              <li>
                <TrackedEmailLink />
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-accent shrink-0 mt-0.5" />
                <span>Hindley Business Centre<br />Platt Lane, Hindley, Wigan, WN2 3PA<br />UK-wide delivery included</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.facebook.com/SygmaSolutionsLtd" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://www.linkedin.com/company/21267092/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="https://x.com/sygmasolutions" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>

          {/* Utility Avoidance column */}
          <div>
            <Link href="/courses" className="inline-block mb-4 text-sm font-bold text-primary hover:underline">
              Browse All Training Courses &rarr;
            </Link>
            <p className="mb-4 eyebrow">
              Utility Avoidance
            </p>
            <ul className="space-y-2 text-sm">
              {utilityAvoidanceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/training/cable-location-avoidance" className="text-primary text-xs font-semibold hover:underline">
                  View all &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility Mapping column */}
          <div>
            <p className="mb-4 eyebrow">
              Utility Mapping
            </p>
            <ul className="space-y-2 text-sm">
              {utilityMappingLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/training/utility-mapping-surveying" className="text-primary text-xs font-semibold hover:underline">
                  View all &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <p className="mb-4 eyebrow">Company</p>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Accreditation bar */}
      <div className="border-t border-border bg-muted/30 px-4 py-5">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Accredited by{' '}
            <span className="font-semibold text-foreground">CITB ATO</span>{' '}
            &middot;{' '}
            <span className="font-semibold text-foreground">EUSR</span>{' '}
            &middot;{' '}
            <span className="font-semibold text-foreground">ProQual</span>{' '}
            &middot;{' '}
            <span className="font-semibold text-foreground">TSA</span>{' '}
            &middot;{' '}
            <span className="font-semibold text-foreground">CICES</span>
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Sygma Solutions Ltd. All rights reserved.
            {' '}&middot;{' '}Company No. 05365676{' '}&middot;{' '}VAT 857896154
            {' '}&middot;{' '}
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            {' '}&middot;{' '}
            <CookieSettingsButton />
          </p>
        </div>
      </div>
    </footer>
  )
}
