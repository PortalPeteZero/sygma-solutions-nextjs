import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  SearchCheck,
  ClipboardCheck,
  PoundSterling,
  Users,
  ShoppingCart,
  GraduationCap,
  Eye,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Zap,
  AlertTriangle,
} from 'lucide-react';
import { SITE_NAME } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import heroImg from './voltstick-hero.jpg';
import productImg from './voltstick-product.jpg';
import ogImg from './voltstick-og.jpg';

export const metadata: Metadata = {
  title: 'Test Before Touch: Voltsticks for Street Furniture Safety | Sygma Solutions',
  description:
    'A simple pre-contact voltstick check can prevent a life-changing electrical incident on street furniture. Why every field team should adopt Test Before Touch, and how Sygma helps embed it.',
  alternates: { canonical: 'https://sygma-solutions.com/test-before-touch' },
  openGraph: {
    title: 'Test Before Touch: Voltsticks for Street Furniture Safety',
    description:
      'A simple pre-contact voltstick check can prevent a life-changing electrical incident on street furniture. Improving safety, reducing risk, protecting people.',
    url: 'https://sygma-solutions.com/test-before-touch',
    siteName: SITE_NAME,
    images: [
      {
        url: `https://sygma-solutions.com${ogImg.src}`,
        width: 1200,
        height: 630,
        alt: 'Test Before Touch: engineer testing a live street cabinet with a voltstick',
      },
    ],
    type: 'website',
  },
};

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Improved safety',
    points: [
      'Reduces the risk of electric shock, burns and serious injury.',
      'Protects your people, your contractors and the public.',
    ],
  },
  {
    icon: SearchCheck,
    title: 'Risk reduction',
    points: [
      'Identifies potentially live equipment before contact.',
      'Reduces exposure to hidden electrical faults.',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Legal and regulatory compliance',
    points: [
      'Supports your duties under the Health and Safety at Work Act 1974 and the Electricity at Work Regulations 1989.',
      'Demonstrates reasonably practicable steps to protect your workforce.',
    ],
  },
  {
    icon: PoundSterling,
    title: 'Financial benefits',
    points: [
      'A low-cost investment with high impact.',
      'Helps avoid the cost of accidents, claims, downtime, damage and reputational harm.',
    ],
  },
  {
    icon: Users,
    title: 'Culture and reputation',
    points: [
      'Reinforces a Test Before Touch culture.',
      'Shows a visible commitment to working safely and responsibly.',
    ],
  },
];

const steps = [
  { icon: ShoppingCart, title: 'Procure', desc: 'Provide approved voltsticks for all relevant team members.' },
  { icon: GraduationCap, title: 'Train', desc: 'Give practical training on correct use, limitations and daily function testing.' },
  { icon: ClipboardCheck, title: 'Implement', desc: 'Make the voltstick check a mandatory step before any physical contact with electrically connected street furniture.' },
  { icon: Eye, title: 'Monitor', desc: 'Supervisors check compliance through site inspections and safety audits.' },
  { icon: RefreshCw, title: 'Review', desc: 'Review process effectiveness and incident data regularly, and refine as needed.' },
];

export default function TestBeforeTouchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Test Before Touch: Voltstick Safety',
            serviceType: 'Workplace electrical safety training and implementation',
            description:
              'Adopting the routine use of voltsticks as a pre-contact safety check on electrically connected street furniture, embedded into Safe Systems of Work, RAMS and training.',
            provider: { '@type': 'Organization', name: 'Sygma Solutions', url: 'https://sygma-solutions.com' },
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
            url: 'https://sygma-solutions.com/test-before-touch',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Test Before Touch' }]) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[440px] md:min-h-[520px] bg-foreground">
        <Image
          src={heroImg}
          alt="Engineer in hi-vis testing a live street cabinet with a voltstick"
          fill
          className="absolute inset-0 h-full w-full object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/30" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-6 md:px-8 pt-12 pb-14 md:pt-16 md:pb-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Safety Recommendation</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-3xl leading-[1.05]">
            Test Before Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl">
            A simple pre-contact check that can prevent a life-changing electrical incident. Improving safety, reducing
            risk, protecting people.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-colors"
            >
              Talk to Sygma <ArrowRight size={18} />
            </Link>
            <Link
              href="#the-plan"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
            >
              See the plan
            </Link>
          </div>
        </div>
      </section>

      {/* HAZARD STRIP */}
      <section className="bg-[#FFD200]">
        <div className="container mx-auto px-6 md:px-8 py-4 flex items-center justify-center gap-3 text-center">
          <span className="text-2xl md:text-3xl font-black tracking-tight text-black uppercase">Test Before Touch</span>
          <Zap size={28} className="text-black shrink-0" fill="currentColor" />
        </div>
        <div className="bg-black">
          <p className="container mx-auto px-6 md:px-8 py-2.5 text-center text-sm md:text-base font-bold uppercase tracking-wide text-white">
            A simple check today can prevent a <span className="text-[#FFD200]">life-changing incident</span> tomorrow.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <p className="eyebrow mb-2">The Risk</p>
          <h2 className="text-3xl font-bold mb-6">Live Electricity You Cannot See</h2>
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Street furniture such as lighting columns, traffic signals, feeder pillars, EV charging points and
                illuminated signs can become live. Faults, damaged cables, water ingress or incorrect installations can
                all put voltage where nobody expects it.
              </p>
              <p>
                Live electricity is not visible. A worker cannot see the danger, but contact can cause serious injury or
                a fatality. The only way to know whether equipment is safe to touch is to test it first.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-lg border border-accent/30 bg-accent/5 p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={22} className="text-accent shrink-0 mt-0.5" />
                  <p className="font-semibold text-foreground">
                    Live electricity may not be visible, but it can cause serious injury or a fatality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="eyebrow mb-2">The Solution</p>
              <h2 className="text-3xl font-bold">A Quick, Low-Cost Pre-Contact Check</h2>
              <p className="text-muted-foreground leading-relaxed">
                A voltstick is a non-contact voltage detector. Held near the equipment, it identifies the possible
                presence of voltage before anyone makes physical contact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Adopted as a routine step on every electrically connected asset, it turns &ldquo;we assumed it was
                dead&rdquo; into &ldquo;we checked&rdquo;. That single habit is the heart of a Test Before Touch culture.
              </p>
            </div>
            <div className="rounded-lg bg-card border border-border p-6 md:p-8 shadow-sm">
              <div className="relative w-full aspect-[1021/266]">
                <Image
                  src={productImg}
                  alt="A yellow and black voltstick non-contact voltage detector with its tip glowing red"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                A non-contact voltage detector signals the possible presence of voltage before contact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <p className="eyebrow mb-2">Why It Pays Off</p>
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="border border-border rounded-lg bg-card p-6 flex flex-col">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-3">{b.title}</h3>
                  <ul className="space-y-2">
                    {b.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 size={15} className="text-primary shrink-0 mt-1" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-xl border border-border bg-card p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex items-center gap-5 shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <PoundSterling size={30} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Estimated investment</p>
                <p className="text-4xl md:text-5xl font-black text-foreground">
                  £15&nbsp;&ndash;&nbsp;£20 <span className="text-lg font-semibold text-muted-foreground">per unit</span>
                </p>
              </div>
            </div>
            <div className="text-muted-foreground leading-relaxed">
              <p>
                Voltsticks are an affordable, low-cost piece of equipment, typically £15 to £20 per unit depending on
                specification and supplier. Set against the cost of a single electrical incident, it is one of the most
                cost-effective safety controls available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PLAN */}
      <section id="the-plan" className="py-16 bg-background scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="eyebrow mb-2">From Intention to Practice</p>
          <h2 className="text-3xl font-bold mb-10">A Five-Step Implementation Plan</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="relative border border-border rounded-lg bg-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW SYGMA HELPS */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70 mb-3">How Sygma Helps</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">We Turn Test Before Touch Into Everyday Practice</h2>
          <p className="text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto">
            Sygma Solutions helps organisations build the voltstick check into their Safe Systems of Work, RAMS and
            training programmes, and delivers the practical training teams need to use the equipment correctly and
            confidently.
          </p>
          <Link
            href="/contact#enquiry-form"
            className="mt-7 inline-flex items-center gap-2 px-7 py-3 rounded-md bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-colors"
          >
            Talk to Sygma <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="bg-foreground">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-14 text-center">
          <Zap size={40} className="mx-auto mb-4 text-[#FFD200]" fill="currentColor" />
          <h2 className="text-3xl md:text-4xl font-black text-[#FFD200] uppercase tracking-tight">Test Before Touch</h2>
          <p className="mt-3 text-lg md:text-xl font-semibold text-white">
            A simple check today can prevent a <span className="text-accent">life-changing</span> incident tomorrow.
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-white/60 font-bold">
            A proactive check today. A safe tomorrow. Protect people. Prevent harm.
          </p>
        </div>
      </section>
    </>
  );
}
