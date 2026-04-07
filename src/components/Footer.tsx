'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Phone, Mail } from 'lucide-react'
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Utility Avoidance', href: '/services/utility-avoidance' },
      { label: 'Utility Mapping', href: '/services/utility-mapping' },
      { label: 'OSCA Training', href: '/services/osca' },
      { label: 'Borehole Surveys', href: '/services/utility-mapping/borehole-surveys' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Knowledge Hub', href: '/knowledge-hub' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Training', href: '/training' },
      { label: 'Certification', href: '/certification' },
      { label: 'Industry Standards', href: '/knowledge-hub/standards' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
]

export function Footer() {
  const handleCookieSettings = () => {
    if (typeof window !== 'undefined' && typeof (window as any).revisitCkyConsent === 'function') {
      (window as any).revisitCkyConsent()
    }
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white text-sm font-bold">
                SS
              </div>
              <span>Sygma</span>
            </Link>
            <p className="text-sm text-slate-400">
              The UK&apos;s only independent specialist in underground utility location and avoidance training. Accredited courses nationwide since 2004.
            </p>
            {/* Contact links with tracking */}
            <div className="space-y-2 pt-2">
              <a
                href="tel:02039718252"
                onClick={() => trackPhoneClick('02039718252')}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                020 3971 8252
              </a>
              <a
                href="mailto:enquiries@sygma-solutions.com"
                onClick={() => trackEmailClick('enquiries@sygma-solutions.com')}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                enquiries@sygma-solutions.com
              </a>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://facebook.com/sygmasolutions"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/sygma-solutions"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/sygmasolutions"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="font-semibold text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Sygma Solutions. All rights reserved.
          </p>
          <button
            onClick={handleCookieSettings}
            className="text-sm text-slate-400 hover:text-primary transition-colors"
          >
            Cookie Settings
          </button>
        </div>
      </div>
    </footer>
  )
}
