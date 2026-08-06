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

// Paid-attribution signals for the server-side copy. Same three-source gclid
// lookup the contact form uses (URL -> _gcl_aw cookie -> localStorage), plus the
// GA4 client_id from the _ga cookie. Without these every server event lands under
// one pseudo-user with no ad click attached, which makes the stream unusable for
// bidding -- the exact reason the phone signal could never be bid on.
export function gaContext(): { client_id?: string; gclid?: string } {
  if (typeof window === 'undefined') return {};

  const urlGclid = new URLSearchParams(window.location.search).get('gclid') || '';
  const gclAwMatch = document.cookie.match(/_gcl_aw=GCL\.[^.]+\.([^;]+)/);
  const cookieGclid = gclAwMatch ? gclAwMatch[1] : '';
  let storedGclid = '';
  try {
    storedGclid = localStorage.getItem('sygma_gclid') || '';
  } catch {
    // localStorage unavailable (private mode quirks) -- fall through
  }

  const gaCookieMatch = document.cookie.match(/_ga=GA1\.[^.]+\.([^.]+\.[^;]+)/);

  return {
    client_id: gaCookieMatch ? gaCookieMatch[1] : undefined,
    gclid: urlGclid || cookieGclid || storedGclid || undefined,
  };
}

// Server-side ping via sendBeacon -- survives page unload (e.g. tel: dialer takeover).
// The route emits the event under a "_server" suffix so it can never collide with the
// client-side dataLayer event of the same name -- see /api/track-click.
function fireServerClick(eventName: string, value: string): void {
  if (typeof navigator === 'undefined') return;

  const payload = JSON.stringify({ event: eventName, value, ...gaContext() });

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
