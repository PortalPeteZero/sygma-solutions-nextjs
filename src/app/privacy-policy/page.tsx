import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sygma Solutions',
  description: 'Privacy policy for Sygma Solutions Ltd. How we collect, use, store, and protect your personal data when you use our website and training services.',
  alternates: { canonical: 'https://sygma-solutions.com/privacy-policy' },
  robots: {
    index: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl mb-8">This privacy policy explains how Sygma Solutions Ltd collects, uses, and protects personal data.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-sm text-gray-600 leading-relaxed space-y-8">

          <div>
            <h2 className="text-xl font-bold text-black mb-3">Who We Are</h2>
            <p>Sygma Solutions Ltd (Company No. 05365676, VAT No. 857896154) is a specialist training provider for underground utility location and avoidance. Our registered address is Hindley Business Centre, Platt Lane, Hindley, Wigan, WN2 3PA. Our Data Protection Officer is Michaela Ashcroft (michaela.ashcroft@sygma-solutions.com).</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">What Data We Collect</h2>
            <p>We collect personal data when you submit an enquiry, book training, request a proposal, attend a course, or contact us directly.</p>
            <p className="mt-3">The data we may collect includes: name, job title, organisation, email address, phone number, and details of training requirements or enquiries.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">How We Use Your Data</h2>
            <p>We use personal data to respond to your enquiry, deliver training courses, register delegates with awarding bodies, issue certificates, and maintain required records.</p>
            <p className="mt-3">We do not add you to marketing lists without your explicit permission. We do not sell or share your personal data with third parties for their own marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">Data Retention</h2>
            <p>We retain personal data for as long as necessary to fulfil the purpose for which it was collected, plus any period required by our accrediting bodies or applicable law. For course records, this is typically 3 years from the date of training. Enquiry data that does not result in a booking is retained for 12 months.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">Your Rights</h2>
            <p>Under UK data protection law, you have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion where we have no legal obligation to retain it, object to processing based on legitimate interests, and lodge a complaint with the Information Commissioner\'s Office (ICO).</p>
            <p className="mt-3">To exercise any of these rights, contact us at enquiries@sygma-solutions.com.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">Cookies and Tracking Technologies</h2>
            <p>This website uses cookies and similar tracking technologies. When you first visit, a consent banner allows you to accept or decline non-essential cookies.</p>
            <p className="mt-3">We use Google Analytics 4, Google Ads, Microsoft Clarity, CookieYes, and Tidio Live Chat. Your preferences are remembered and you can change them at any time via the cookie settings link in the footer.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-3">Contact</h2>
            <p>If you have any questions about this privacy policy or how we handle your data, contact us at enquiries@sygma-solutions.com or 0203 971 8252.</p>
          </div>

          <p className="text-xs text-gray-500">Last updated: March 2026. Sygma Solutions Ltd.</p>
        </div>
      </section>
    </div>
  );
}