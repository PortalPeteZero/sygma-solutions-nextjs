'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

interface NavItem {
  title: string
  href: string
  description?: string
}

interface NavMenu {
  title: string
  items: NavItem[]
}

const mainNav: NavMenu[] = [
  {
    title: 'Utility Avoidance',
    items: [
      { title: 'Utility Avoidance Services', href: '/services/utility-avoidance', description: 'Cable and pipe location services' },
      { title: 'CAT Scanning', href: '/services/utility-avoidance/cat-scanning', description: 'Electromagnetic and inductance scanning' },
      { title: 'GPR (Ground Penetrating Radar)', href: '/services/utility-avoidance/gpr', description: 'Subsurface imaging and utility detection' },
      { title: 'Potholing', href: '/services/utility-avoidance/potholing', description: 'Precise utility exposure and verification' },
    ],
  },
  {
    title: 'Utility Mapping',
    items: [
      { title: 'Utility Mapping Services', href: '/services/utility-mapping', description: 'Comprehensive utility record mapping' },
      { title: 'MALA GPR Mapping', href: '/services/utility-mapping/mala-gpr', description: 'Advanced ground penetrating radar mapping' },
      { title: 'Record Searches', href: '/services/utility-mapping/record-searches', description: 'Utility authority records integration' },
      { title: 'Borehole Surveys', href: '/services/utility-mapping/borehole-surveys', description: 'Subsurface investigation services' },
    ],
  },
  {
    title: 'OSCA',
    items: [
      { title: 'OSCA Services', href: '/services/osca', description: 'One Stop Cable Avoidance' },
      { title: 'OSCA Training', href: '/services/osca/training', description: 'Professional OSCA operative training' },
      { title: 'OSCA Certification', href: '/services/osca/certification', description: 'Industry-recognised qualifications' },
    ],
  },
  {
    title: 'Knowledge Hub',
    items: [
      { title: 'All Articles', href: '/knowledge-hub', description: 'Browse our knowledge base' },
      { title: 'Cable Strikes', href: '/knowledge-hub/cable-strikes', description: 'Prevention and avoidance' },
      { title: 'Training & Certification', href: '/knowledge-hub/training', description: 'Professional development' },
      { title: 'Industry Standards', href: '/knowledge-hub/standards', description: 'HSG47, EUSR, and more' },
    ],
  },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white text-sm font-bold">
              SS
            </div>
            <span className="hidden sm:inline">Sygma Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                {mainNav.map((menu) => (
                  <NavigationMenuItem key={menu.title}>
                    <NavigationMenuTrigger className="flex items-center gap-1">
                      {menu.title}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-48 p-4">
                        {menu.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 px-2 rounded-md hover:bg-slate-100 transition-colors"
                          >
                            <div className="font-medium text-sm">{item.title}</div>
                            {item.description && (
                              <div className="text-xs text-slate-600">{item.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 space-y-4">
            {mainNav.map((menu) => (
              <div key={menu.title} className="space-y-2">
                <h3 className="font-semibold text-sm text-slate-900">{menu.title}</h3>
                <div className="space-y-1 pl-4">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-1 text-sm text-slate-600 hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-slate-200">
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
      </div>
    </nav>
  )
}
