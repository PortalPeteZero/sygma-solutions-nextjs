import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | Sygma Solutions',
  description: 'Thank you for your enquiry. We aim to respond within the hour on working days.',
  robots: {
    index: false,
  },
};

export default function ThankYou() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8 text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Thank You for Your Enquiry</h1>
        <p className="text-lg text-muted-foreground mb-10">We aim to respond to every enquiry within the hour on working days. A member of the Sygma team will be in touch shortly.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/courses" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">Browse Our Courses</Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors">Back to Contact</Link>
        </div>
      </div>
    </section>
  );
}
