// GA4 / dataLayer event helpers
// gtag is loaded via Script tag in layout.tsx

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

export function trackFormSubmit(enquiryType: string) {
  trackEvent('form_submit', { form_name: 'contact', enquiry_type: enquiryType });
}

export function trackPhoneClick(phoneNumber: string) {
  trackEvent('phone_click', { phone_number: phoneNumber });
}

export function trackEmailClick(emailAddress: string) {
  trackEvent('email_click', { email_address: emailAddress });
}
