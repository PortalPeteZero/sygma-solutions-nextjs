'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react'
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics'

/* ------------------------------------------------------------------ */
/*  Navigation data -- matches the live Lovable site exactly          */
/* ------------------------------------------------------------------ */

interface NavItem { label: string; to: string }
interface NavGroup { group: string; items: NavItem[] }
interface NavMenu { label: string; href: string; children?: NavGroup[] }

const mainNav: NavMenu[] = [
  {
    label: 'Utility Avoidance',
    href: '/training/cable-location-avoidance',
    children: [
      {
        group: 'Operator Courses',
        items: [
          { label: 'Cable Avoidance Training', to: '/courses/cable-avoidance-training' },
          { label: 'EUS CAT1', to: '/courses/eus-cat1' },
          { label: 'ProQual CAT1', to: '/courses/proqualcat1-training' },
          { label: 'ProQual CAT1 Plus', to: '/courses/proqualcat1plus' },
          { label: 'RQF Level 2 Award', to: '/courses/rqf-level-2-award' },
          { label: 'CAT & Genny Training', to: '/courses/genny-cat-training' },
          { label: 'vScan & Tx Training', to: '/courses/vscan-and-transmitter-training' },
        ],
      },
      {
        group: 'Safe Dig & Combined',
        items: [
          { label: 'EUS CAT2 Safe Dig', to: '/courses/eus-cat2-safe-dig' },
          { label: 'ProQual CAT2 Safe Dig', to: '/courses/proqualcat2' },
          { label: 'EUS CAT1 & CAT2 Combined', to: '/courses/eus-cat1-cat2-combined' },
          { label: 'ProQual CAT1 & CAT2 Combined', to: '/courses/proqual-cat1-cat2-combined' },
          { label: 'EUS CAT1, CAT2 & USC', to: '/courses/eus-cat1-cat2-usc-combined' },
        ],
      },
      {
        group: 'Supervisor Courses',
        items: [
          { label: 'CAT Manager', to: '/courses/cat-manager' },
          { label: 'EUS Superuser Locator', to: '/courses/eus-superuser' },
          { label: 'ZS Superuser Scottish Water', to: '/courses/zs-superuser-scottish-water' },
          { label: 'Service Coordinator USC', to: '/courses/service-coordinator-usc' },
        ],
      },
      {
        group: 'Specialist & Online',
        items: [
          { label: 'CAT4 HSG47 Awareness (Online)', to: '/courses/cat4-hsg47-awareness-online' },
          { label: 'GS6 Overhead Power Lines', to: '/courses/gs6-overhead-power-lines' },
          { label: 'Manufacturer-Specific Locator', to: '/courses/manufacturer-locator-training' },
          { label: 'Plans & Process Training', to: '/courses/plans-and-process' },
        ],
      },
    ],
  },
  {
    label: 'Utility Mapping',
    href: '/training/utility-mapping-surveying',
    children: [
      {
        group: 'Surveying Courses',
        items: [
          { label: '5-Day PAS128 Surveyor Course', to: '/courses/5-day-pas128-surveyor' },
          { label: 'GPR Training', to: '/courses/gpr-training' },
          { label: 'PAS128 Awareness', to: '/courses/pas128-awareness' },
          { label: 'TSA & ICES Utility Mapping', to: '/courses/tsa-ices-utility-mapping' },
          { label: 'Advanced EM Locator', to: '/courses/advanced-em-locator' },
        ],
      },
      {
        group: 'Qualifications',
        items: [
          { label: 'Level 3 Certificate', to: '/courses/level-3-certificate' },
          { label: 'Level 4 Diploma', to: '/courses/level-4-diploma' },
          { label: 'Level 5 Diploma', to: '/courses/level-5-diploma' },
          { label: 'Level 6 Diploma', to: '/courses/level-6-diploma' },
        ],
      },
      {
        group: 'Online',
        items: [
          { label: 'Online Level 3 Diploma', to: '/courses/online-level-3-diploma' },
          { label: 'Online Level 5 Diploma', to: '/courses/online-level-5-diploma' },
        ],
      },
    ],
  },
  {
    label: 'On Site Assessments',
    href: '/osca',
    children: [
      {
        group: 'OSCA',
        items: [
          { label: 'OSCA Overview', to: '/osca' },
        ],
      },
    ],
  },
]

const topBarLinks = [
  { label: 'All Courses', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Accreditations & Partners', href: '/accreditations' },
  { label: 'Locations', href: '/locations' },
  { label: 'Bespoke', href: '/bespoke-training' },
]

/* ------------------------------------------------------------------ */
/*  MegaMenu dropdown                                                 */
/* ------------------------------------------------------------------ */

function MegaMenuDropdown({
  menu,
  open,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  menu: NavMenu
  open: boolean
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  if (!open || !menu.children) return null
  const cols = menu.children.length

  return (
    <div
      className="absolute left-0 right-0 top-full z-50 border-b border-border bg-white shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className={`grid gap-8 ${cols === 1 ? 'grid-cols-1 max-w-xs' : cols === 2 ? 'grid-cols-2 max-w-lg' : cols === 3 ? 'grid-cols-3 max-w-3xl' : 'grid-cols-4'}`}>
          {menu.children.map((group) => (
            <div key={group.group}>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                {group.group}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      href={item.to}
                      className="block py-1.5 text-sm text-foreground hover:text-primary transition-colors"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <Link
            href={menu.href}
            className="text-sm font-semibold text-primary hover:underline"
            onClick={onClose}
          >
            View all {menu.label} &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Navbar component                                                  */
/* ------------------------------------------------------------------ */

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleMouseEnter(label: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenMenu(label)
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 150)
  }

  return (
    <header>
      {/* Top utility bar */}
      <div className="border-b border-border/50 bg-muted/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex h-9 items-center justify-between text-xs">
            <nav className="flex items-center gap-4">
              {topBarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="tel:+442039718252"
                onClick={() => trackPhoneClick('02039718252')}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={12} />
                <span className="font-medium">0203 971 8252</span>
              </a>
              <a
                href="mailto:enquiries@sygma-solutions.com"
                onClick={() => trackEmailClick('enquiries@sygma-solutions.com')}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={12} />
                <span>enquiries@sygma-solutions.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        ref={navRef}
        className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.webp"
                alt="Sygma Solutions Ltd"
                width={160}
                height={44}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNav.map((menu) => (
                <div
                  key={menu.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                      openMenu === menu.label ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                  >
                    {menu.label}
                    {menu.children && <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === menu.label ? 'rotate-180' : ''}`} />}
                  </button>
                </div>
              ))}

              {/* Knowledge Hub -- outlined button, no dropdown */}
              <Link
                href="/knowledge-hub"
                className="ml-2 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                Knowledge Hub
              </Link>
            </div>

            {/* CTA button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact#enquiry-form"
                className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega menu dropdowns (desktop) */}
        {mainNav.map((menu) => (
          <MegaMenuDropdown
            key={menu.label}
            menu={menu}
            open={openMenu === menu.label}
            onClose={() => setOpenMenu(null)}
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current)
            }}
            onMouseLeave={handleMouseLeave}
          />
        ))}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background py-4 px-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Top bar links on mobile */}
            <div className="flex flex-wrap gap-3 pb-3 border-b border-border">
              {topBarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Main nav sections */}
            {mainNav.map((menu) => (
              <div key={menu.label} className="space-y-2">
                <Link
                  href={menu.href}
                  className="font-semibold text-sm uppercase tracking-wide text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {menu.label}
                </Link>
                {menu.children && (
                  <div className="space-y-3 pl-3">
                    {menu.children.map((group) => (
                      <div key={group.group}>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{group.group}</p>
                        <div className="space-y-0.5">
                          {group.items.map((item) => (
                            <Link
                              key={item.to}
                              href={item.to}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Knowledge Hub */}
            <Link
              href="/knowledge-hub"
              className="block text-center px-4 py-2 border-2 border-primary text-primary font-semibold text-sm uppercase rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Knowledge Hub
            </Link>

            {/* Contact info + CTA */}
            <div className="pt-3 border-t border-border space-y-3">
              <a
                href="tel:+442039718252"
                onClick={() => trackPhoneClick('02039718252')}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone size={14} /> 0203 971 8252
              </a>
              <a
                href="mailto:enquiries@sygma-solutions.com"
                onClick={() => trackEmailClick('enquiries@sygma-solutions.com')}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Mail size={14} /> enquiries@sygma-solutions.com
              </a>
              <Link
                href="/contact"
                className="block text-center px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
