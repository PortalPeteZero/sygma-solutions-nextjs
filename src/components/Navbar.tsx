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
  NavigationMenuViewport,
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
      { title: 'Cable Avoidance Training', href: '/training/cable-location-avoidance', description: 'CAT and Genny courses and qualifications' },
      { title: 'Cable Avoidance Course', href: '/courses/cable-avoidance-training', description: 'One-day CAT and Genny training' },
      { title: 'ProQual CAT1', href: '/courses/proqualcat1-training', description: 'The most rigorous utility locating qualification' },
      { title: 'EUS CAT1', href: '/courses/eus-cat1', description: 'EUSR-registered cable avoidance course' },
      { title: 'Course Comparison', href: '/courses/cable-avoidance-course-comparison', description: 'Compare all CAT and Genny qualifications' },
    ],
  },
  {
    title: 'Utility Mapping',
    items: [
      { title: 'Utility Mapping Training', href: '/training/utility-mapping-surveying', description: 'PAS 128, GPR, and surveyor qualifications' },
      { title: 'PAS 128 Surveyor Course', href: '/courses/5-day-pas128-surveyor', description: 'Five-day accredited surveyor training' },
      { title: 'GPR Training', href: '/courses/gpr-training', description: 'Ground penetrating radar operation' },
      { title: 'TSA/ICES Mapping', href: '/courses/tsa-ices-utility-mapping', description: 'TSA Approved utility mapping course' },
    ],
  },
  {
    title: 'OSCA',
    items: [
      { title: 'OSCA Overview', href: '/osca', description: 'On-Site Competency Assessment' },
      { title: 'Bespoke Training', href: '/bespoke-training', description: 'Tailored programmes for your team' },
      { title: 'All Courses', href: '/courses', description: 'View the full course catalogue' },
    ],
  },
  {
    title: 'Knowledge Hub',
    items: [
      { title: 'All Articles', href: '/knowledge-hub', description: 'Browse our knowledge base' },
      { title: 'HSG47 Explained', href: '/knowledge-hub/hsg47-explained', description: 'Safe digging guidance for excavation' },
      { title: 'EUS vs ProQual CAT1', href: '/knowledge-hub/eus-cat1-vs-proqual-cat1', description: 'Comparing the two main qualifications' },
      { title: 'Genny-First Methodology', href: '/knowledge-hub/genny-first-methodology', description: 'Why we always start with the Genny' },
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
              <NavigationMenuViewport />
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