'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect, memo } from 'react'
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react'
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics'
import { mainNav, topBarLinks } from '@/data/navigation'
import type { NavMenu } from '@/data/navigation'

/* ------------------------------------------------------------------ */
/*  MegaMenu dropdown                                                 */
/* ------------------------------------------------------------------ */

const MegaMenuDropdown = memo(function MegaMenuDropdown({
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
      className="absolute left-0 right-0 top-full z-50 mt-2 rounded-lg border border-border bg-card shadow-xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`grid gap-6 p-6 ${cols >= 4 ? 'grid-cols-4' : cols === 3 ? 'grid-cols-3' : cols === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {menu.children.map((group) => (
            <div key={group.group}>
              <p className="mb-3 eyebrow">
                {group.group}
              </p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      href={item.to}
                      className="block text-sm text-muted-foreground transition-colors hover:text-primary"
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
      <div className="border-t border-border bg-muted/30 px-6 py-3">
        <Link
          href={menu.href}
          className="text-sm font-semibold text-primary hover:underline"
          onClick={onClose}
        >
          View all {menu.label} &rarr;
        </Link>
      </div>
    </div>
  )
})

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
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* Top utility bar */}
      <div className="border-b border-border/50 bg-muted/80 backdrop-blur-md">
        <div className="container mx-auto flex h-9 items-center justify-between px-4">
          <div className="hidden items-center gap-6 md:flex">
            {topBarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:+442039718252"
              onClick={() => trackPhoneClick('02039718252')}
              className="flex items-center gap-1.5 text-xs font-bold text-foreground transition-colors hover:text-primary"
            >
              <Phone size={11} />
              0203 971 8252
            </a>
            <a
              href="mailto:enquiries@sygma-solutions.com"
              onClick={() => trackEmailClick('enquiries@sygma-solutions.com')}
              className="hidden items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:flex"
            >
              <Mail size={11} />
              enquiries@sygma-solutions.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        ref={navRef}
        className="border-b border-border bg-background/95 backdrop-blur-md"
      >
        <div className="container relative mx-auto flex h-16 items-center justify-between px-4">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.webp"
                alt="Sygma Solutions Ltd"
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {mainNav.map((menu) => (
                <div
                  key={menu.label}
                  onMouseEnter={() => handleMouseEnter(menu.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                      openMenu === menu.label ? 'text-primary' : 'text-foreground'
                    }`}
                    onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                  >
                    {menu.label}
                    {menu.children && <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === menu.label ? 'rotate-180' : ''}`} />}
                  </button>

                  <MegaMenuDropdown
                    menu={menu}
                    open={openMenu === menu.label}
                    onClose={() => setOpenMenu(null)}
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current)
                    }}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              ))}

              {/* Knowledge Hub -- outlined button, no dropdown */}
              <Link
                href="/knowledge-hub"
                className="ml-2 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider border border-accent/50 text-accent rounded-full hover:border-accent hover:bg-accent/10 transition-colors"
              >
                Knowledge Hub
              </Link>
            </div>

            {/* CTA button */}
            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/contact#enquiry-form"
                className="inline-flex items-center px-5 py-2 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
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

        {/* Mega menu dropdowns now rendered inside each nav item's relative div above */}

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
                        <p className="mb-2 eyebrow">{group.group}</p>
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
              className="inline-flex mx-6 my-4 border border-accent/50 text-accent rounded-full px-3 py-1.5 text-sm font-semibold uppercase tracking-wider hover:border-accent hover:bg-accent/10 transition-colors"
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
