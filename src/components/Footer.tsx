'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics'
import {
  footerUtilityAvoidanceLinks as utilityAvoidanceLinks,
  footerUtilityMappingLinks as utilityMappingLinks,
  footerCompanyLinks as companyLinks,
} from '@/data/navigation'

/* ------------------------------------------------------------------ */
/*  Footer component                                                  */
/* ------------------------------------------------------------------ */

export function Footer() {
  const handleCookieSettings = () => {
    if (typeof window !== 'undefined') {
      window.revisitCkyConsent?.();
    }
  }

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
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The UK&apos;s only independent specialist in underground utility location training. 21 years. One specialism. Zero conflicts.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:02039718252"
                  onClick={() => trackPhoneClick('02039718252')}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone size={13} className="text-accent shrink-0" />
                  0203 971 8252
                </a>
              </li>
              <li>
                <a
                  href="mailto:enquiries@sygma-solutions.com"
                  onClick={() => trackEmailClick('enquiries@sygma-solutions.com')}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail size={13} className="text-accent shrink-0" />
                  enquiries@sygma-solutions.com
                </a>
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
              <a href="https://twitter.com/sygmasolutions" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>

          {/* Utility Avoidance column */}
          <div>
            <Link href="/courses" className="inline-block mb-4 text-sm font-bold text-primary hover:underline">
              Browse All Training Courses &rarr;
            </Link>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">
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
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">
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
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">Company</p>
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
            <button type="button" onClick={handleCookieSettings} className="hover:text-primary transition-colors">Cookie Settings</button>
          </p>
        </div>
      </div>
    </footer>
  )
}
