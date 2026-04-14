import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Bespoke Utility Training Programmes | Sygma Solutions',
  description: 'Bespoke utility avoidance training delivered on-site at your premises, UK-wide. Priced per programme, not per head. Built around your sites and procedures.',
  alternates: { canonical: 'https://sygma-solutions.com/bespoke-training' },
  openGraph: {
    title: 'Bespoke Utility Training Programmes | Sygma Solutions',
    description: 'Bespoke utility avoidance training delivered on-site at your premises, UK-wide.',
    url: 'https://sygma-solutions.com/bespoke-training',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function BespokeTrainingPage() {
  const whatWeDesign = [
    { title: 'Incident investigation and root cause training', desc: 'For organisations following a utility strike or near-miss. We review the incident, identify the knowledge and process gaps, and design a programme to address them.' },
    { title: 'Permit to Dig and Authorisation procedures', desc: 'Training aligned to your specific permit system. Operatives and supervisors learn your procedures, not a generic version of them.' },
    { title: 'Supervisor and manager utility awareness', desc: 'For non-operative personnel who authorise excavation work. Covers the decision-making framework, legal exposure, and what to look for when supervising operatives.' },
    { title: 'Multi-tier workforce programmes', desc: 'For organisations that need to train across operative, supervisor, and management levels simultaneously, with a consistent framework and shared understanding of risk.' },
    { title: 'Equipment-specific training', desc: 'For organisations that have invested in specific locating equipment and want their teams trained to use it correctly, not just how to switch it on.' },
    { title: 'Refresher and top-up programmes', desc: 'For teams who hold qualifications but need to address specific gaps identified through OSCA assessment, incident investigation, or observed practice.' },
  ];

  const process = [
    { step: '1', title: 'Initial consultation', desc: 'We discuss your workforce, your risk profile, your operational context, and what the programme needs to achieve.' },
    { step: '2', title: 'Programme design', desc: 'We write the programme structure, session plan, and learning outcomes. Where possible, we incorporate your site documentation, permit system, and equipment.' },
    { step: '3', title: 'Pilot delivery', desc: 'For large programmes, we typically recommend a pilot session with a small group. This allows us to refine content based on real delegate response.' },
    { step: '4', title: 'Full delivery', desc: 'We deliver across as many sessions and locations as your programme requires. We schedule around your operational constraints, not the other way round.' },
    { step: '5', title: 'Post-delivery review', desc: 'We provide a group feedback report after each session and a programme-level summary at completion. For ongoing programmes, we provide monthly reporting.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Bespoke Utility Training Programmes',
        description: 'Bespoke utility avoidance training delivered on-site at your premises, UK-wide. Priced per programme, not per head. Built around your sites and procedures.',
        provider: { '@type': 'Organization', name: 'Sygma Solutions', url: 'https://sygma-solutions.com' },
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        url: 'https://sygma-solutions.com/bespoke-training',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Bespoke Training' }]) }} />
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[480px] bg-foreground">
        <Image src="cat-40" fill className="absolute inset-0 h-full w-full object-cover" priority sizes="100vw" alt="Bespoke training hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="relative z-10 container mx-auto px-6 md:px-8 pt-10 pb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Bespoke Training</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white max-w-4xl">Programmes Built Around Your Sites, Your Risks, and Your People.</h1>
          <p className="text-white/75 max-w-xl">Off-the-shelf training solves generic problems. Bespoke training solves yours. If you have a specific incident history, a specific permit system, or a workforce that needs more than a standard course can give them, we design the programme from the ground up.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">When Standard Training Is Not Enough</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>Every standard Sygma course is grounded in industry good practice. But good practice is a floor, not a ceiling. If your organisation has a specific incident history, a bespoke permit system, particular equipment, or a workforce whose risk profile is not fully addressed by standard course content, you need something designed for your context.</p>
            <p>Organisations that have implemented Sygma bespoke programmes report measurable reductions in utility strikes and a 70 to 80% increase in Genny usage across trained teams.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">What We Design</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {whatWeDesign.map((w) => (
              <div key={w.title} className="border border-border rounded-lg bg-card p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">{w.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">On-Site, Nationwide. No Travel Surcharge.</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Bespoke programmes are delivered at your site. Your team trains in the environment they actually work in, using the equipment they use on the job, against the site risks they face every day.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: 'Your site, your ground conditions', desc: 'Training on the actual terrain and cable layout your operatives work near.' },
              { title: 'Your documentation', desc: 'We incorporate your Permit to Dig, your service plan formats, and your incident history.' },
              { title: 'Your equipment', desc: 'We train on the locating equipment your team owns.' },
              { title: 'Your schedule', desc: 'We fit around your operational calendar.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-muted/30 p-5">
                <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">The Bespoke Programme Process</h2>
          <div className="space-y-4">
            {process.map((p) => (
              <div key={p.step} className="flex gap-4 border border-border rounded-lg bg-card p-5">
                <div className="shrink-0 w-9 h-9 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">{p.step}</div>
                <div>
                  <h3 className="font-bold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Per Programme, Not Per Person.</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">Bespoke programmes are priced per programme, not per delegate. There is no per-head charge that increases as your group grows. Travel within the UK mainland is included.</p>
          <Link
            href="/contact#enquiry-form"
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90"
          >
            Get a Programme Quote
          </Link>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Organisations We Have Built Programmes For</h2>
          <div className="space-y-4">
            {[
              { name: 'Severn Trent Water', detail: 'Multi-site utility avoidance programme for operational field teams. Aligned to Severn Trent permit and authorisation procedures.' },
              { name: 'Kier Group', detail: 'Strike investigation and Permit to Dig programme designed around Kier site protocols and subcontractor management requirements.' },
              { name: 'Galliford Try', detail: 'Utility avoidance training aligned to project-specific site risk profiles across multiple infrastructure projects.' },
              { name: 'Wales and West Utilities', detail: 'Ongoing gas network avoidance training programme across field teams operating in the Wales and West Utilities network area.' },
              { name: 'MGroup Services', detail: 'Multi-contractor utility safety programme, bespoke to MGroup frameworks, delivered across multiple operating companies.' },
            ].map((c) => (
              <div key={c.name} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold mb-1">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/75 mb-6 leading-relaxed">Tell us about your workforce, your requirements, and what you need to achieve. We will come back to you with an outline proposal and a cost.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#enquiry-form"
              className="inline-block px-8 py-3 rounded-md bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
