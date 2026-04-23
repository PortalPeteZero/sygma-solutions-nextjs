// GA4 / dataLayer event helpers
// gtag is loaded via Script tag in layout.tsx
//
// Two-path conversion tracking:
//   1. Client-side: dataLayer.push() -> GTM -> GA4 (consent-respecting)
//   2. Server-side: fetch /api/track-click -> Measurement Protocol (consent-bypassing)
//
// We fire BOTH so consenting users get attribution-rich events AND non-consenting
// users still register as conversions. The server-side event has source: "server"
// so they can be deduped in GA4 if needed.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });
  }
}

// Server-side ping via sendBeacon -- survives page unload (e.g. tel: dialer takeover)
function fireServerClick(eventName: string, value: string): void {
  if (typeof navigator === 'undefined') return;

  const payload = JSON.stringify({ event: eventName, value });

  if (typeof navigator.sendBeacon === 'function') {
    navigator.sendBeacon(
      '/api/track-click',
      new Blob([payload], { type: 'application/json' }),
    );
    return;
  }

  // Fallback for very old browsers without sendBeacon
  fetch('/api/track-click', {
    method: 'POST',
    body: payload,
    headers: { 'Content-Type': 'application/json' },
    keepalive: true,
  }).catch(() => {});
}

export function trackFormSubmit(enquiryType: string) {
  trackEvent('form_submit', { form_name: 'contact', enquiry_type: enquiryType });
  // Server-side form_submit / generate_lead is fired from /api/contact route
  // (see src/app/api/contact/route.ts) so we don't double-fire here.
}

export function trackPhoneClick(phoneNumber: string) {
  trackEvent('phone_click', { phone_number: phoneNumber });
  fireServerClick('phone_click', phoneNumber);
}

export function trackEmailClick(emailAddress: string) {
  trackEvent('email_click', { email_address: emailAddress });
  fireServerClick('email_click', emailAddress);
}
