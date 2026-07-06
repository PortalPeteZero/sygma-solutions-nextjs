import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  SearchCheck,
  ClipboardCheck,
  PoundSterling,
  ShoppingCart,
  GraduationCap,
  Eye,
  RefreshCw,
  Check,
  Zap,
  ChevronRight,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { SITE_NAME } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import heroImg from './voltstick-hero.jpg';
import productImg from './voltstick-product.jpg';
import cabinetImg from './voltstick-cabinet.jpg';
import costImg from './voltstick-cost.jpg';
import ogImg from './voltstick-og.jpg';

export const metadata: Metadata = {
  title: 'Test Before Touch: Voltsticks for Street Furniture Safety | Sygma Solutions',
  description:
    'A simple pre-contact voltstick check can prevent a life-changing electrical incident on street furniture. The full case for adopting Test Before Touch, and how Sygma helps embed it.',
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
  { icon: ShieldCheck, title: 'Improved Safety', points: ['Reduces the risk of electric shock, burns and serious injury.', 'Helps protect your people, contractors and the public.'] },
  { icon: SearchCheck, title: 'Risk Reduction', points: ['Identifies potentially live equipment before contact.', 'Reduces exposure to hidden electrical faults.'] },
  { icon: ClipboardCheck, title: 'Legal & Regulatory Compliance', points: ['Supports compliance with health & safety legislation (HSWA 1974, EAWR 1989).', 'Demonstrates reasonably practicable steps to protect your workforce.'] },
  { icon: PoundSterling, title: 'Financial Benefits', points: ['A low-cost investment with high impact.', 'Helps reduce the cost of accidents, claims, downtime, damage and reputational harm.'] },
  { icon: Users, title: 'Culture & Reputation', points: ['Reinforces a Test Before Touch culture.', 'Demonstrates a visible commitment to working safely and responsibly.'] },
];

const steps = [
  { icon: ShoppingCart, title: 'Procure', desc: 'Provide approved voltsticks for all relevant team members.' },
  { icon: GraduationCap, title: 'Train', desc: 'Provide practical training on correct use, limitations and daily function testing.' },
  { icon: ClipboardCheck, title: 'Implement', desc: 'Make the voltstick check mandatory before any physical contact.' },
  { icon: Eye, title: 'Monitor', desc: 'Supervisors monitor compliance through site inspections and safety audits.' },
  { icon: RefreshCw, title: 'Review', desc: 'Regularly review process effectiveness and incident data.' },
];

/* Shared card + coloured-header building blocks */
function CardHeader({ icon: Icon, title, tone }: { icon: LucideIcon; title: string; tone: 'navy' | 'blue' }) {
  return (
    <div className={`flex items-center gap-3 px-5 py-4 ${tone === 'navy' ? 'bg-foreground' : 'bg-primary'}`}>
      <Icon size={22} className="text-white shrink-0" />
      <h2 className="text-lg font-bold uppercase tracking-wide text-white">{title}</h2>
    </div>
  );
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Test Before Touch' }]) }} />

      {/* ===== HERO (light) ===== */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* copy */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">Safety Recommendation</p>
              <h1 className="text-4xl md:text-5xl font-black text-foreground leading-[1.05]">
                A Recommendation to Adopt <span className="text-primary">Voltsticks</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">Improving safety. Reducing risk. Protecting people.</p>

              {/* hazard banner */}
              <div className="mt-7 max-w-lg">
                <div className="bg-[#FFD200] px-5 py-3 rounded-t-md flex items-center gap-3">
                  <span className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">Test Before Touch</span>
                  <Zap size={26} className="text-black shrink-0" fill="currentColor" />
                </div>
                <p className="bg-black text-white text-xs md:text-sm font-bold uppercase tracking-wide px-5 py-2.5 rounded-b-md">
                  A simple check today can prevent a <span className="text-[#FFD200]">life-changing incident</span> tomorrow.
                </p>
              </div>

              <div className="mt-7">
                <Link href="/contact#enquiry-form" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
                  Talk to Sygma <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* photo */}
            <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden shadow-lg ring-1 ring-border">
              <Image src={heroImg} alt="Engineer in hi-vis testing a live street cabinet with a voltstick" fill className="object-cover object-center" priority sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BODY (light grey, colour-blocked cards) ===== */}
      <div className="bg-[#EEF1F5]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-6">

          {/* Row 1: Executive Summary / Risk / Solution */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Executive Summary */}
            <article className="flex flex-col h-full rounded-xl overflow-hidden bg-card border border-border shadow-sm">
              <CardHeader icon={Users} title="Executive Summary" tone="navy" />
              <div className="p-5 flex-1 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>Adopt the routine, mandatory use of voltsticks (non-contact voltage detectors) for all work on or around electrically connected street furniture.</p>
                <p>This small investment significantly improves workforce safety, reduces the risk of electric-shock incidents, supports legal compliance and strengthens a proactive safety culture.</p>
              </div>
            </article>

            {/* The Risk */}
            <article className="flex flex-col h-full rounded-xl overflow-hidden bg-card border border-border shadow-sm">
              <CardHeader icon={AlertTriangle} title="The Risk" tone="navy" />
              <div className="p-5 flex-1 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="relative w-24 shrink-0 rounded-lg overflow-hidden self-start">
                    <Image src={cabinetImg} alt="Green street cabinet with a danger high-voltage warning sign" className="w-full h-auto" sizes="120px" placeholder="blur" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lighting columns, traffic signals, feeder pillars, EV charging points and illuminated signs can become live through faults, damaged cables, water ingress or incorrect installations.
                  </p>
                </div>
                <p className="mt-auto text-sm font-bold text-foreground">Live electricity may not be visible, but it can cause serious injury or a fatality.</p>
              </div>
            </article>

            {/* The Solution */}
            <article className="flex flex-col h-full rounded-xl overflow-hidden bg-card border border-border shadow-sm">
              <CardHeader icon={CheckCircle2} title="The Solution" tone="blue" />
              <div className="p-5 flex-1 flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
                <p>Adopt the routine use of voltsticks as a standard pre-contact safety check on all electrically connected street furniture. A simple, quick and effective check that identifies the possible presence of voltage before anyone touches the equipment.</p>
                <div className="mt-auto relative w-full aspect-[1037/272]">
                  <Image src={productImg} alt="A yellow and black voltstick non-contact voltage detector, tip glowing red" fill className="object-contain object-center" sizes="(max-width: 768px) 90vw, 30vw" />
                </div>
              </div>
            </article>
          </div>

          {/* Row 2: Key Benefits */}
          <section className="rounded-xl overflow-hidden bg-card border border-border shadow-sm">
            <div className="bg-foreground px-5 py-4">
              <h2 className="text-lg font-bold uppercase tracking-wide text-white">Key Benefits</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="p-5 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-primary" />
                      </span>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-foreground leading-tight">{b.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {b.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <Check size={14} className="text-primary shrink-0 mt-1" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Row 3: Cost + Implementation */}
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {/* Cost */}
            <article className="flex flex-col h-full rounded-xl overflow-hidden bg-card border border-border shadow-sm">
              <CardHeader icon={PoundSterling} title="Cost Consideration" tone="navy" />
              <div className="p-5 flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <PoundSterling size={26} className="text-primary" />
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">Voltsticks are an affordable, low-cost piece of equipment.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Estimated investment</p>
                  <p className="text-3xl font-black text-primary">£15&nbsp;&ndash;&nbsp;£20 <span className="text-base font-semibold text-muted-foreground">per unit</span></p>
                  <p className="text-xs text-muted-foreground italic">depending on specification and supplier</p>
                </div>
                <div className="mt-auto relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src={costImg} alt="Gloved hand testing a metal street-furniture pole with a voltstick" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
              </div>
            </article>

            {/* Implementation */}
            <article className="flex flex-col h-full lg:col-span-2 rounded-xl overflow-hidden bg-card border border-border shadow-sm">
              <CardHeader icon={ClipboardCheck} title="Proposed Implementation Plan" tone="navy" />
              <div className="p-5 flex-1">
                <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2">
                  {steps.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.title} className="relative flex lg:flex-col items-start lg:items-center lg:text-center gap-3 lg:gap-2">
                        <div className="flex flex-col items-center shrink-0">
                          <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-black flex items-center justify-center">{i + 1}</span>
                        </div>
                        <div>
                          <div className="flex items-center lg:justify-center gap-2 mb-1">
                            <Icon size={18} className="text-foreground" />
                            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">{s.title}</h3>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                        </div>
                        {i < steps.length - 1 && (
                          <ChevronRight size={18} className="hidden lg:block absolute -right-1 top-3 text-primary/40" />
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </article>
          </div>

          {/* Row 4: Conclusion + Recommendation + Closing */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <article className="flex flex-col h-full rounded-xl overflow-hidden bg-card border border-border shadow-sm">
              <CardHeader icon={Check} title="Conclusion" tone="navy" />
              <div className="p-5 flex-1 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Adopting voltsticks is a simple, effective and cost-efficient measure that improves safety, reduces risk and supports legal obligations.</p>
                <p>It aligns with a commitment to safeguarding people and delivering operations to the highest safety standards.</p>
              </div>
            </article>

            <article className="flex flex-col h-full rounded-xl overflow-hidden bg-card border border-border shadow-sm">
              <CardHeader icon={Check} title="Recommendation" tone="blue" />
              <div className="p-5 flex-1 text-sm text-muted-foreground leading-relaxed">
                <p>Approve the mandatory use of voltsticks for all work on or around electrically connected street furniture, and incorporate this requirement into your Safe Systems of Work, RAMS and training programmes.</p>
              </div>
            </article>

            {/* Closing banner */}
            <div className="flex flex-col justify-center rounded-xl bg-foreground p-6 text-center">
              <Zap size={34} className="mx-auto mb-3 text-[#FFD200]" fill="currentColor" />
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#FFD200] leading-none">Test Before Touch</p>
              <p className="mt-3 text-sm font-bold uppercase text-white leading-snug">
                A simple check today can prevent a <span className="text-accent">life-changing</span> incident tomorrow.
              </p>
            </div>
          </div>

          {/* How Sygma helps */}
          <section className="rounded-xl bg-primary text-primary-foreground px-6 py-8 md:px-10 md:py-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70 mb-2">How Sygma helps</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">We turn Test Before Touch into everyday practice</h2>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
              Sygma Solutions builds the voltstick check into your Safe Systems of Work, RAMS and training programmes, and delivers the practical training your teams need to use the equipment correctly and with confidence.
            </p>
            <Link href="/contact#enquiry-form" className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-md bg-white text-primary font-bold hover:bg-white/90 transition-colors">
              Talk to Sygma <ArrowRight size={18} />
            </Link>
          </section>
        </div>

        {/* Footer strip */}
        <div className="bg-foreground">
          <p className="max-w-6xl mx-auto px-4 py-4 text-center text-xs md:text-sm font-bold uppercase tracking-wide text-white/80">
            A proactive check today. A safe tomorrow. <span className="text-[#FFD200]">Test Before Touch.</span> Protect people. Prevent harm.
          </p>
        </div>
      </div>
    </>
  );
}
