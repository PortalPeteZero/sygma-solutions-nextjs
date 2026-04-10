'use client'

import { Phone, Mail } from 'lucide-react'
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics'

/* ------------------------------------------------------------------ */
/*  Small client islands used inside the server-rendered Footer        */
/* ------------------------------------------------------------------ */

export function TrackedPhoneLink() {
  return (
    <a
      href="tel:+442039718252"
      onClick={() => trackPhoneClick('02039718252')}
      className="flex items-center gap-2 hover:text-primary transition-colors"
    >
      <Phone size={13} className="text-accent shrink-0" />
      0203 971 8252
    </a>
  )
}

export function TrackedEmailLink() {
  return (
    <a
      href="mailto:enquiries@sygma-solutions.com"
      onClick={() => trackEmailClick('enquiries@sygma-solutions.com')}
      className="flex items-center gap-2 hover:text-primary transition-colors"
    >
      <Mail size={13} className="text-accent shrink-0" />
      enquiries@sygma-solutions.com
    </a>
  )
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.revisitCkyConsent?.()
        }
      }}
      className="hover:text-primary transition-colors"
    >
      Cookie Settings
    </button>
  )
}
