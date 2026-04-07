'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react'
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics'

/* ------------------------------------------------------------------ */
/*  Footer data -- matches the live Lovable site exactly              */
/* ------------------------------------------------------------------ */

interface FooterLink {
  label: string
  href: string
}

const utilityAvoidanceLinks: FooterLink[] = [
  { label: 'Cable Avoidance Training', href: '/courses/cable-avoidance-training' },
  { label: 'EUS CAT1', href: '/courses/eus-cat1' },
  { label: 'EUS CAT2 Safe Dig', href: '/courses/eus-cat2-safe-dig' },
  { label: 'EUS CAT1 & CAT2 Combined', href: '/courses/eus-cat1-cat2-combined' },
  { label: 'ProQual CAT1 & CAT2 Combined', href: '/courses/proqual-cat1-cat2-combined' },
  { label: 'CAT & Genny Training', href: '/courses/genny-cat-training' },
  { label: 'vScan & Tx Training', href: '/courses/vscan-and-transmitter-training' },
  { label: 'Advanced EM Locator', href: '/courses/advanced-em-locator' },
  { label: 'CAT Manager', href: '/courses/cat-manager' },
]

const utilityMappingLinks: FooterLink[] = [
  { label: '5-Day PAS128 Surveyor', href: '/courses/5-day-pas128-surveyor' },
  { label: 'GPR Training', href: '/courses/gpr-training' },
  { label: 'RQF Level 2 Award', href: '/courses/rqf-level-2-award' },
  { label: 'Level 3 Certificate', href: '/courses/level-3-certificate' },
  { label: 'Level 4 Diploma', href: '/courses/level-4-diploma' },
  { label: 'Level 6 Diploma', href: '/courses/level-6-diploma' },
]

const companyLinks: FooterLink[] = [
  { label: 'About Sygma', href: '/about' },
  { label: 'OSCA', href: '/osca' },
  { label: 'Bespoke Training', href: '/bespoke-training' },
  { label: 'Accreditations & Partners', href: '/accreditations' },
  { label: 'Knowledge Hub', href: '/knowledge-hub' },
  { label: 'Locations', href: '/locations' },
  { label: 'Pricing & Availability', href: '/pricing' },
  { label: 'Contact Us', href: '/contact' },
]

/* ------------------------------------------------------------------ */
/*  Footer component                                                  */
/* ------------------------------------------------------------------ */

export function Footer() {
  const handleCookieSettings = () => {
    if (typeof window !== 'undefined' && typeof (window as any).revisitCkyConsent === 'function') {
      (window as any).revisitCkyConsent()
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="space-y-5">
            <Link href="/" aria-label="Sygma Solutions home">
              <Image
                src="/logo.webp"
                alt="Sygma Solutions Ltd"
                width={145}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              The UK&apos;s only independent specialist in underground utility location training. 21 years. One specialism. Zero conflicts.
            </p>

            {/* Contact details */}
            <div className="space-y-2">
              <a
                href="tel:02039718252"
                onClick={() => trackPhoneClick('02039718252')}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                0203 971 8252
              </a>
              <a
                href="mailto:enquiries@sygma-solutions.com"
                onClick={() => trackEmailClick('enquiries@sygma-solutions.com')}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                enquiries@sygma-solutions.com
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p>Hindley Business Centre</p>
                <p>Platt Lane, Hindley, Wigan, WN2 3PA</p>
                <p className="mt-1 text-slate-500">UK-wide delivery included</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/SygmaSolutionsLtd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/21267092/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/sygmasolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Browse all courses CTA */}
            <Link
              href="/courses"
              className="inline-block text-sm font-semibold text-white hover:text-orange-400 transition-colors pt-2"
            >
              Browse All Training Courses &rarr;
            </Link>
          </div>

          {/* Utility Avoidance column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Utility Avoidance
            </h3>
            <ul className="space-y-2">
              {utilityAvoidanceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/training/cable-location-avoidance"
              className="inline-block text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          {/* Utility Mapping column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Utility Mapping
            </h3>
            <ul className="space-y-2">
              {utilityMappingLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/training/utility-mapping-surveying"
              className="inline-block text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          {/* Company column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accreditation badges */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center tracking-wide">
            Accredited by{' '}
            <span className="font-semibold text-slate-400">CITB ATO</span> &middot;{' '}
            <span className="font-semibold text-slate-400">EUSR</span> &middot;{' '}
            <span className="font-semibold text-slate-400">ProQual</span> &middot;{' '}
            <span className="font-semibold text-slate-400">TSA</span> &middot;{' '}
            <span className="font-semibold text-slate-400">CICES</span>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Sygma Solutions Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <button
              onClick={handleCookieSettings}
              className="text-xs text-slate-500 hover:text-white transition-colors"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
