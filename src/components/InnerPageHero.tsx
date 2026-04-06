'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb {
  label: string
  href?: string
}

interface InnerPageHeroProps {
  title: string
  description?: string
  breadcrumbs?: Breadcrumb[]
  backgroundImage?: string
}

export function InnerPageHero({
  title,
  description,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  backgroundImage,
}: InnerPageHeroProps) {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.div
            className="mb-8 flex items-center gap-2 text-sm text-slate-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={index} className="flex items-center gap-2">
                {breadcrumb.href ? (
                  <Link
                    href={breadcrumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-100 font-medium">{breadcrumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
        </motion.div>

        {/* Description */}
        {description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
