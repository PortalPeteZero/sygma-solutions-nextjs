import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  SearchCheck,
  ScrollText,
  PoundSterling,
  Users,
  ShoppingCart,
  GraduationCap,
  ClipboardCheck,
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
import cabinetImg from './voltstick-cabinet.jpg';
import ogImg from './voltstick-og.jpg';

const NAVY = '#0B1F3A';
const GREEN = '#1E8A4C';
const YELLOW = '#FFD200';

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
  { icon: ShieldCheck, title: 'Improved safety', desc: 'Cuts the risk of shock, burns and serious injury to your people, contractors and the public.' },
  { icon: SearchCheck, title: 'Risk reduction', desc: 'Flags potentially live equipment before anyone makes physical contact with it.' },
  { icon: ScrollText, title: 'Compliance', desc: 'Supports your duties under HSWA 1974 and EAWR 1989, showing reasonably practicable care.' },
  { icon: PoundSterling, title: 'Low cost, high impact', desc: 'A few pounds per unit set against the cost of a single electrical incident.' },
  { icon: Users, title: 'Stronger culture', desc: 'Builds a visible Test Before Touch culture across every team, every site.' },
];

const steps = [
  { icon: ShoppingCart, title: 'Procure', desc: 'Provide approved voltsticks for all relevant team members.' },
  { icon: GraduationCap, title: 'Train', desc: 'Practical training on correct use, limitations and daily function testing.' },
  { icon: ClipboardCheck, title: 'Implement', desc: 'Make the check mandatory before any contact with electrically connected street furniture.' },
  { icon: Eye, title: 'Monitor', desc: 'Supervisors check compliance through site inspections and safety audits.' },
  { icon: RefreshCw, title: 'Review', desc: 'Review effectiveness and incident data regularly, and refine as needed.' },
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

      {/* ===== HERO (split: copy left, photo right) ===== */}
      <section className="relative" style={{ backgroundColor: NAVY }}>
        <div className="grid lg:grid-cols-2">
          {/* Photo */}
          <div className="relative order-1 lg:order-2 min-h-[280px] sm:min-h-[360px] lg:min-h-[600px]">
            <Image
              src={heroImg}
              alt="Engineer in hi-vis testing a live street cabinet with a voltstick"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* seam blend into the navy panel on desktop */}
            <div
              className="hidden lg:block absolute inset-y-0 left-0 w-40"
              style={{ background: `linear-gradient(to right, ${NAVY}, transparent)` }}
              aria-hidden="true"
            />
          </div>
          {/* Copy */}
          <div className="relative order-2 lg:order-1 flex items-center">
            <div className="w-full px-6 md:px-10 lg:px-14 py-12 lg:py-16">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: YELLOW }}>
                Safety Recommendation
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                Test Before
                <br />
                Touch
              </h1>
              <div className="mt-4 h-1.5 w-16 rounded-full" style={{ backgroundColor: YELLOW }} aria-hidden="true" />
              <p className="mt-5 text-lg md:text-xl text-white/75 max-w-lg leading-relaxed">
                One quick, low-cost check before you touch electrically connected street furniture. It is the difference
                between assuming it is dead and knowing it is safe.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact#enquiry-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md font-bold text-white transition-colors"
                  style={{ backgroundColor: GREEN }}
                >
                  Talk to Sygma <ArrowRight size={18} />
                </Link>
                <Link
                  href="#the-plan"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/25 text-white font-bold hover:bg-white/10 transition-colors"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HAZARD BANNER ===== */}
      <section>
        <div style={{ backgroundColor: YELLOW }}>
          <div className="container mx-auto px-6 py-4 flex items-center justify-center gap-3">
            <Zap size={26} className="text-black shrink-0" fill="currentColor" />
            <span className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">Test Before Touch</span>
            <Zap size={26} className="text-black shrink-0" fill="currentColor" />
          </div>
        </div>
        <div className="bg-black">
          <p className="container mx-auto px-6 py-2.5 text-center text-sm md:text-base font-bold uppercase tracking-wide text-white">
            A simple check today can prevent a <span style={{ color: YELLOW }}>life-changing incident</span> tomorrow.
          </p>
        </div>
      </section>

      {/* ===== RISK + SOLUTION (matched cards) ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-6">
          {/* RISK */}
          <article className="flex flex-col rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="flex items-center gap-3 px-6 py-4" style={{ backgroundColor: NAVY }}>
              <AlertTriangle size={22} style={{ color: YELLOW }} />
              <h2 className="text-xl font-bold text-white">The Risk</h2>
            </div>
            <div className="relative h-56">
              <Image src={cabinetImg} alt="Green street cabinet with a danger high-voltage warning sign" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-muted-foreground leading-relaxed">
                Lighting columns, traffic signals, feeder pillars, EV charging points and illuminated signs can all become
                live through faults, damaged cables, water ingress or bad installations.
              </p>
              <div className="mt-5 flex items-start gap-3 rounded-lg p-4" style={{ backgroundColor: '#0B1F3A0D' }}>
                <AlertTriangle size={20} className="shrink-0 mt-0.5" style={{ color: NAVY }} />
                <p className="font-semibold text-foreground">
                  Live electricity is not visible. You cannot see the danger, but contact can kill.
                </p>
              </div>
            </div>
          </article>

          {/* SOLUTION */}
          <article className="flex flex-col rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="flex items-center gap-3 px-6 py-4" style={{ backgroundColor: GREEN }}>
              <CheckCircle2 size={22} className="text-white" />
              <h2 className="text-xl font-bold text-white">The Solution</h2>
            </div>
            <div className="relative h-56 bg-white flex items-center justify-center px-8">
              <div className="relative w-full aspect-[1037/272]">
                <Image src={productImg} alt="A yellow and black voltstick non-contact voltage detector, tip glowing red" fill className="object-contain" sizes="(max-width: 768px) 90vw, 45vw" />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-muted-foreground leading-relaxed">
                A voltstick is a non-contact voltage detector. Held near the equipment, it signals the possible presence
                of voltage before anyone makes contact.
              </p>
              <p className="mt-5 flex items-start gap-3 font-semibold text-foreground">
                <CheckCircle2 size={20} className="shrink-0 mt-0.5" style={{ color: GREEN }} />
                Make it routine on every asset and &ldquo;we assumed&rdquo; becomes &ldquo;we checked&rdquo;.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ===== BENEFITS (5 matched cards) ===== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F4F6F9' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: GREEN }}>
            Why it pays off
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Five reasons to adopt it</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="flex flex-col h-full rounded-xl bg-white border border-border p-5 shadow-sm"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#1E8A4C1A' }}
                  >
                    <Icon size={24} style={{ color: GREEN }} />
                  </div>
                  <h3 className="font-bold mb-2 leading-snug">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== COST BAND ===== */}
      <section className="py-14" style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex items-center gap-5 shrink-0">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: YELLOW }}>
              <PoundSterling size={30} className="text-black" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Estimated investment</p>
              <p className="text-4xl md:text-5xl font-black text-white">
                £15&nbsp;&ndash;&nbsp;£20 <span className="text-lg font-semibold text-white/60">per unit</span>
              </p>
            </div>
          </div>
          <p className="text-white/75 leading-relaxed md:border-l md:border-white/15 md:pl-8">
            Voltsticks are one of the most cost-effective safety controls available. A few pounds per person, weighed
            against the cost of a single strike: injury, claims, downtime, damage and reputational harm.
          </p>
        </div>
      </section>

      {/* ===== IMPLEMENTATION STEPPER ===== */}
      <section id="the-plan" className="py-16 md:py-20 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2" style={{ color: GREEN }}>
            From intention to practice
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">A five-step rollout</h2>
          <div className="relative">
            {/* connector line (desktop) */}
            <div
              className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5"
              style={{ backgroundColor: '#1E8A4C33' }}
              aria-hidden="true"
            />
            <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.title} className="relative flex flex-col items-center text-center">
                    <div
                      className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg mb-4 ring-8 ring-white"
                      style={{ backgroundColor: GREEN }}
                    >
                      {i + 1}
                    </div>
                    <Icon size={22} style={{ color: NAVY }} className="mb-2" />
                    <h3 className="font-bold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== HOW SYGMA HELPS ===== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: GREEN }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70 mb-3">How Sygma helps</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            We turn Test Before Touch into everyday practice
          </h2>
          <p className="text-white/85 leading-relaxed max-w-2xl mx-auto">
            Sygma Solutions builds the voltstick check into your Safe Systems of Work, RAMS and training programmes, and
            delivers the practical training your teams need to use the equipment correctly and with confidence.
          </p>
          <Link
            href="/contact#enquiry-form"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-white font-bold transition-colors hover:bg-white/90"
            style={{ color: GREEN }}
          >
            Talk to Sygma <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ===== CLOSING BANNER ===== */}
      <section style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16 text-center">
          <Zap size={44} className="mx-auto mb-4" style={{ color: YELLOW }} fill="currentColor" />
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: YELLOW }}>
            Test Before Touch
          </h2>
          <p className="mt-3 text-lg md:text-2xl font-semibold text-white">
            A simple check today can prevent a life-changing incident tomorrow.
          </p>
          <p className="mt-6 text-xs md:text-sm uppercase tracking-[0.25em] text-white/50 font-bold">
            A proactive check today. A safe tomorrow. Protect people. Prevent harm.
          </p>
        </div>
      </section>
    </>
  );
}
