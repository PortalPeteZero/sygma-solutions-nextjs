'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import InnerPageHero from '@/components/InnerPageHero';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { trackFormSubmit, trackPhoneClick, trackEmailClick, trackEvent } from '@/lib/analytics';
import Image from 'next/image';

const quickLinks = [
  { label: 'Browse all Utility Avoidance courses', href: '/training/cable-location-avoidance' },
  { label: 'Browse all Utility Mapping courses', href: '/training/utility-mapping-surveying' },
  { label: 'OSCA on-site competency assessment', href: '/osca' },
  { label: 'Bespoke and corporate training programmes', href: '/bespoke-training' },
  { label: 'How our pricing works', href: '/pricing' },
  { label: 'Training locations and delivery options', href: '/locations' },
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      full_name: formData.get('full_name') as string,
      company_name: formData.get('company_name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      enquiry_type: formData.get('enquiry_type') as string,
      how_heard: (formData.get('how_heard') as string) || undefined,
      message: (formData.get('message') as string) || '',
    };

    try {
      // POST to our own API route (server-side proxy) to avoid
      // ad blockers blocking direct .supabase.co requests
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }

      setSubmitted(true);
      form.reset();

      // GTM conversion tracking -- fires client-side as before
      trackFormSubmit(payload.enquiry_type);
      trackEvent('thank_you');
      router.push('/thank-you');
    } catch (err) {
      console.error('Submit error:', err);
      setErrorMsg('Something went wrong. Please try again or call us on 0203 971 8252.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <InnerPageHero
        image="cat-79"
        alt="Contact Sygma Solutions for cable avoidance and utility mapping training enquiries"
        eyebrow="Contact Sygma Solutions"
        headline="Get in Touch"
        sub="Book a course, request a quote, ask about bespoke training, or enquire about CITB funding support. We respond to all enquiries within the hour on working days."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Contact Details</p>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:+442039718252" onClick={() => trackPhoneClick('02039718252')} className="flex items-start gap-3 group">
                      <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Phone</p>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">0203 971 8252</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:enquiries@sygma-solutions.com" onClick={() => trackEmailClick('enquiries@sygma-solutions.com')} className="flex items-start gap-3 group">
                      <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">enquiries@sygma-solutions.com</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Primary Training Centre</p>
                      <p className="font-semibold text-foreground">Hindley Business Centre</p>
                      <p className="text-sm text-muted-foreground">Platt Lane, Hindley, Wigan, WN2 3PA</p>
                      <p className="text-sm text-muted-foreground">UK-wide delivery included</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Response Time</p>
                      <p className="font-semibold text-foreground">Within the hour</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm font-bold text-foreground mb-3">Looking for Something Specific?</p>
                <p className="text-sm text-muted-foreground mb-4">Depending on what you need, one of these pages may get you there faster:</p>
                <ul className="space-y-2">
                  {quickLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-primary hover:underline">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="border border-primary/40 rounded-xl bg-primary/5 p-10 text-center">
                  <p className="text-2xl font-black text-foreground mb-3">Message Received</p>
                  <p className="text-muted-foreground leading-relaxed">Your message has been received. A member of the Sygma team will be in touch within one working day.</p>
                  <p className="text-sm text-muted-foreground mt-4">In the meantime, you can <Link href="/training/cable-location-avoidance" className="text-primary hover:underline">browse our courses</Link> or learn about our <Link href="/bespoke-training" className="text-primary hover:underline">bespoke training programmes</Link>.</p>
                </div>
              ) : (
                <form id="enquiry-form" method="POST" onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-black text-foreground mb-2">Send Us a Message</h2>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                    <Clock size={14} className="shrink-0" />
                    We aim to respond to every enquiry within the hour on working days.
                  </div>
                  {errorMsg && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{errorMsg}</p>
                  )}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="full_name" className="text-sm font-semibold text-foreground block mb-1.5">Full Name *</label>
                      <input id="full_name" type="text" name="full_name" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                    </div>
                    <div>
                      <label htmlFor="company_name" className="text-sm font-semibold text-foreground block mb-1.5">Company Name *</label>
                      <input id="company_name" type="text" name="company_name" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="enquiry_type" className="text-sm font-semibold text-foreground block mb-1.5">Training Interest *</label>
                    <input id="enquiry_type" type="text" name="enquiry_type" required placeholder="e.g. CAT and Genny training, cable avoidance, GPR, PAS 128..." className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="text-sm font-semibold text-foreground block mb-1.5">Email Address *</label>
                      <input id="email" type="email" name="email" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-semibold text-foreground block mb-1.5">Phone Number *</label>
                      <input id="phone" type="tel" name="phone" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-semibold text-foreground block mb-1.5">Message</label>
                    <textarea id="message" name="message" rows={5} className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" placeholder="Tell us your requirements, number of delegates, preferred dates, or anything else we should know." />
                  </div>
                  <div>
                    <label htmlFor="how_heard" className="text-sm font-semibold text-muted-foreground block mb-1.5">How did you hear about us?</label>
                    <select id="how_heard" name="how_heard" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40">
                      <option value="">Please select (optional)</option>
                      <option>Google search</option>
                      <option>LinkedIn</option>
                      <option>Word of mouth</option>
                      <option>Existing client</option>
                      <option>CITB / trade body</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <p className="text-xs text-muted-foreground">Your details are used only to respond to your enquiry. We do not share your information with third parties or add you to marketing lists without your permission. <Link href="/privacy-policy" className="text-primary hover:underline">Read our Privacy Policy.</Link></p>
                  <button type="submit" disabled={submitting} className="inline-flex items-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors disabled:opacity-50">
                    {submitting ? 'Sending\u2026' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full overflow-hidden aspect-[4/3] md:aspect-[16/9] bg-muted">
        <Image src="cat-80" width={1200} height={900} alt="Sygma Solutions on-site utility avoidance training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain" />
      </div>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-81" width={1200} height={900} alt="Sygma Solutions training facility" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-82" width={1200} height={900} alt="Contact Sygma for training enquiries" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted">
          <Image src="cat-83" width={1200} height={900} alt="Sygma Solutions nationwide training delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </>
  );
}
