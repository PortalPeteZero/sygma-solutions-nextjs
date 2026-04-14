import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { articleSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

const faqs = [
  {
    q: "Can I renew my EUSR card online?",
    a: "No. EUSR CAT1 includes a mandatory practical assessment that must be completed in person. There is no online-only renewal option.",
  },
  {
    q: "Is the renewal course shorter than the original?",
    a: "No. The renewal is a full one-day course. EUSR does not offer a shortened refresher. This is because the scheme requires demonstration of current competency, not just attendance.",
  },
  {
    q: "What if I hold both EUSR and ProQual accreditations?",
    a: "They are separate qualifications with separate renewal cycles. Renewing one does not renew the other. However, completing ProQual CAT1 may satisfy the requirements of employers who accept either qualification.",
  },
  {
    q: "My employer says I need an EUSR card but I have never had one. Is that the same as a renewal?",
    a: "No. If you have never held an EUSR accreditation, you are a new candidate rather than a renewal. The course is the same, but you will not have an existing record on the EUSR register.",
  },
];

export const metadata: Metadata = {
  title: 'EUSR Card Renewal Guide | How to Renew | Sygma',
  description: 'Your EUSR card has expired or is about to expire. This guide explains the renewal process, what happens if your card lapses, and how to rebook.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/eusr-card-renewal' },
  openGraph: {
    title: 'EUSR Card Renewal Guide | How to Renew | Sygma',
    description: 'Your EUSR card has expired or is about to expire. This guide explains the renewal process, what happens if your card lapses, and how to rebook.',
    url: 'https://sygma-solutions.com/knowledge-hub/eusr-card-renewal',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function EusrCardRenewal() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema({
        headline: "How to Renew Your EUSR Card: A Complete Guide to EUSR Card Renewal",
        description: "Your EUSR card has expired or is about to expire. This guide explains the EUSR card renewal process, what happens if your card lapses, and how to rebook your training.",
        url: "/knowledge-hub/eusr-card-renewal",
        datePublished: "2026-03-10",
        image: "cat-19",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "EUSR Card Renewal" },
      ]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <InnerPageHero
        image="cat-33"
        eyebrow="Knowledge Hub"
        headline="How to Renew Your EUSR Card"
        sub="Your EUSR card is expiring or has already lapsed. Here is what you need to do, what the process involves, and how long it takes."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "EUSR Card Renewal" },
        ]}
      />

      <div className="lg:hidden bg-background pt-6 pb-2">
        <div className="container mx-auto px-6 md:px-8">
          <Link href="/knowledge-hub?filter=articles" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors">
            ← Back to Articles
          </Link>
        </div>
      </div>

      <div className="bg-background py-16">
        <div className="container mx-auto px-6 md:px-8 flex gap-12 items-start">
          <aside className="hidden lg:block w-60 shrink-0 sticky top-24">
            <KnowledgeHubSidebar />
          </aside>
          <article className="min-w-0 flex-1 max-w-3xl">

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            If you hold an EUSR (Energy and Utility Skills) accreditation for utility avoidance, your EUSR card will have an expiry date printed on it. When it expires, you need to retrain and reassess to keep your accreditation current. This guide covers the full EUSR card renewal process, explains what happens if your card lapses, and sets out your options for getting renewed quickly.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">How Long Does an EUSR Card Last?</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            EUSR CAT1 accreditation is valid for three years from the date of issue. This applies to all EUSR-registered qualifications in the utility avoidance category. The expiry date is printed on your EUSR card and is also recorded on the EUSR register, which employers and clients can check online.
          </p>

          <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-38" width={1200} height={900} alt="EUSR training and practical assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-59" width={1200} height={900} alt="Cable locating equipment training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-61" width={1200} height={900} alt="Safe digging practices during renewal training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What Happens When Your EUSR Card Expires?</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Once your EUSR card passes its expiry date, you are no longer listed as holding a current accreditation on the EUSR register. This means your employer cannot demonstrate that you hold the required competency for utility avoidance work under frameworks that require EUSR registration. In practice, most utility sector contracts require operatives to hold a current (in-date) EUSR card. If yours has lapsed, you will not be able to work on those contracts until you renew.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            There is no penalty for letting your card expire, and there is no additional cost or surcharge for renewing after the expiry date. The renewal process is the same whether you renew the day before expiry or six months after.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">The EUSR Card Renewal Process</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Renewing your EUSR card means completing the EUSR CAT1 course again. There is no separate "renewal" or "refresher" course. The renewal is a full one-day training and assessment session, identical to the original course. This is because EUSR requires every operative to demonstrate current competency, not just attend a top-up session.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The course covers the same content as the original: electromagnetic theory, correct use of the locator in all four modes (Power, Radio, Genny, Avoidance), service plan reading, and a practical on-site assessment. On successful completion, you receive a new EUSR card valid for another three years and your record on the EUSR register is updated.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">How to Book Your EUSR Renewal</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Contact a registered EUSR training provider and book onto an EUSR CAT1 course. You do not need to tell them it is a renewal; the course is the same for new candidates and renewals. Most providers, including Sygma, run open courses regularly throughout the year. You can also arrange an on-site delivery if you have a group of operatives who all need to renew.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Sygma recommends booking your renewal at least four to six weeks before your card expires. This gives you a buffer in case of scheduling issues and avoids any gap in your accreditation. If your employer manages bookings centrally, flag the expiry date with them early.
          </p>

          <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-62" width={1200} height={900} alt="Practical hands-on renewal training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-63" width={1200} height={900} alt="EUSR card renewal assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-01" width={1200} height={900} alt="Delegates during final renewal assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Can I Upgrade Instead of Just Renewing?</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Yes. Many operatives use their renewal as an opportunity to progress. Instead of simply rebooking EUSR CAT1, you could consider completing <Link href="/courses/proqualcat1-training" className="text-primary hover:underline">ProQual CAT1</Link>, which is an externally verified, ProQual-accredited qualification that also satisfies most client requirements. Alternatively, you could book <Link href="/courses/eus-cat2-safe-dig" className="text-primary hover:underline">EUSR CAT2 Safe Dig</Link> to add excavation competency to your profile, or speak to your employer about <Link href="/osca" className="text-primary hover:underline">OSCA (On-Site Competency Assessment)</Link> to demonstrate your skills in a real working environment.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Frequently Asked Questions</h2>

          <div className="space-y-6 mt-6 mb-10">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-bold text-foreground mb-2">{q}</h3>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
            <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/knowledge-hub/npors-vs-eusr" className="text-primary hover:underline">NPORS vs EUSR: Which Qualification Do You Need?</Link></li>
              <li><Link href="/knowledge-hub/eus-cat1-vs-proqual-cat1" className="text-primary hover:underline">EUSR CAT1 vs ProQual CAT1: Which One Does Your Operative Need?</Link></li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
            <h3 className="font-black text-foreground mb-3">Ready to Renew?</h3>
            <p className="text-muted-foreground mb-4">
              Sygma runs EUSR CAT1 courses regularly at Wigan and The Survey School in Worcester, and delivers on-site at client premises across the UK. Contact us to check availability and book your renewal.
            </p>
            <Link href="/courses/eus-cat1" className="text-primary font-semibold hover:underline">View EUSR CAT1 Course Details &rsaquo;</Link>
          </div>

          </article>
        </div>
      </div>
    </>
  );
}
