import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { mainNav, NavGroup } from '@/data/navigation';
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'CAT and Genny Training Courses | Cable Avoidance | Sygma',
  description: 'CAT and Genny training courses from the UK\'s independent cable avoidance specialist. EUSR CAT1, ProQual, PAS 128, GPR. On-site, CITB approved.',
  alternates: { canonical: 'https://sygma-solutions.com/courses' },
  openGraph: {
    title: 'CAT and Genny Training Courses | Cable Avoidance | Sygma',
    description: 'CAT and Genny training courses from the UK\'s independent cable avoidance specialist. EUSR CAT1, ProQual, PAS 128, GPR.',
    url: 'https://sygma-solutions.com/courses',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-10', width: 1200, height: 630 }],
    type: 'website',
  },
};

/* ------------------------------------------------------------------ */
/*  Course card descriptions + meta (extends nav data)                 */
/* ------------------------------------------------------------------ */

interface CourseExtra { slug: string; desc: string; duration?: string; cert?: string }

const courseExtras: Record<string, CourseExtra> = {
  '/courses/cable-avoidance-training': { slug: 'cable-avoidance-training', desc: 'Our flagship CAT and Genny course. Full electromagnetic theory, all four locating modes, and practical assessment.', duration: '1 day', cert: 'Sygma Certificate' },
  '/courses/eus-cat1': { slug: 'eus-cat1', desc: 'Become EUSR-registered. Covers signal generators, CAT operating modes, and written assessment.', duration: '1 day', cert: 'EUSR Card' },
  '/courses/proqualcat1-training': { slug: 'proqualcat1-training', desc: 'ProQual-accredited CAT1 with externally verified individual assessment.', duration: '1 day', cert: 'ProQual Certificate' },
  '/courses/proqualcat1plus': { slug: 'proqualcat1plus', desc: 'ProQual CAT1 Plus with enhanced practical assessment. Recognised by major contractors.', duration: '1 day', cert: 'ProQual Certificate' },
  '/courses/rqf-level-2-award': { slug: 'rqf-level-2-award', desc: 'Ofqual-regulated Level 2 Award in locating underground services using electromagnetic devices.', duration: '2 days', cert: 'Ofqual Level 2' },
  '/courses/cat-and-genny-training': { slug: 'cat-and-genny-training', desc: 'Combined CAT and Genny training covering cable avoidance tool theory and practical competency.', duration: '1 day', cert: 'Sygma Certificate' },
  '/courses/vscan-and-transmitter-training': { slug: 'vscan-and-transmitter-training', desc: 'Manufacturer-specific vScan and transmitter training for Vivax-Metrotech equipment.', duration: '1 day', cert: 'Sygma Certificate' },
  '/courses/eus-cat2-safe-dig': { slug: 'eus-cat2-safe-dig', desc: 'Safe excavation near underground services. EUSR CAT2 registration on completion.', duration: '1 day', cert: 'EUSR Card' },
  '/courses/proqualcat2': { slug: 'proqualcat2', desc: 'ProQual-accredited safe dig assessment covering hand dig techniques and excavation risk management.', duration: '1 day', cert: 'ProQual Certificate' },
  '/courses/eus-cat1-cat2-combined': { slug: 'eus-cat1-cat2-combined', desc: 'Combined EUSR CAT1 and CAT2 in one package. Cable avoidance plus safe dig.', duration: '2 days', cert: 'EUSR Card (dual)' },
  '/courses/proqual-cat1-cat2-combined': { slug: 'proqual-cat1-cat2-combined', desc: 'ProQual-accredited combined CAT1 and CAT2 with externally verified assessment.', duration: '2 days', cert: 'ProQual Certificate' },
  '/courses/eus-cat1-cat2-usc-combined': { slug: 'eus-cat1-cat2-usc-combined', desc: 'Triple-accredited: EUSR CAT1, CAT2 Safe Dig, and Utility Strike Coordinator in one programme.', duration: '3 days', cert: 'EUSR Card (triple)' },
  '/courses/cat-manager': { slug: 'cat-manager', desc: 'Online CAT Manager course for supervisors overseeing cable avoidance operations.', duration: 'Online', cert: 'Certificate of Attendance' },
  '/courses/eus-superuser': { slug: 'eus-superuser', desc: 'EUSR Superuser Locator for supervisors who need to verify operative competency in the field.', duration: '1 day', cert: 'EUSR Card' },
  '/courses/zs-superuser-scottish-water': { slug: 'zs-superuser-scottish-water', desc: 'ZS Superuser certification for Scottish Water contractor supervisors.', duration: '1 day', cert: 'ZS Card' },
  '/courses/service-coordinator-usc': { slug: 'service-coordinator-usc', desc: 'Utility Strike Coordinator training for those managing excavation teams near underground services.', duration: '1 day', cert: 'EUSR Card' },
  '/courses/cat4-hsg47-awareness-online': { slug: 'cat4-hsg47-awareness-online', desc: 'Online HSG47 cable avoidance awareness for planners, managers, and non-operatives.', duration: 'Online', cert: 'Certificate of Attendance' },
  '/courses/gs6-overhead-power-lines': { slug: 'gs6-overhead-power-lines', desc: 'GS6 awareness training covering safe working near overhead power lines.', duration: 'Half day', cert: 'Certificate of Attendance' },
  '/courses/manufacturer-locator-training': { slug: 'manufacturer-locator-training', desc: 'Manufacturer-specific locator training tailored to your organisation\'s equipment fleet.', duration: 'Variable', cert: 'Certificate of Attendance' },
  '/courses/plans-and-process': { slug: 'plans-and-process', desc: 'Utility plans, safe systems of work, and the damage prevention process for supervisors and planners.', duration: '1 day', cert: 'Certificate of Attendance' },
  '/courses/cable-avoidance-course-comparison': { slug: 'cable-avoidance-course-comparison', desc: 'Compare EUSR CAT1, ProQual CAT1, and other cable avoidance courses side by side.', duration: 'Reference', cert: 'N/A' },
  '/courses/5-day-pas128-surveyor': { slug: '5-day-pas128-surveyor', desc: 'The only CICES-approved 5-day PAS 128 utility surveyor course in the UK. Classroom and field-based.', duration: '5 days', cert: 'CICES Approved' },
  '/courses/gpr-training': { slug: 'gpr-training', desc: 'Ground Penetrating Radar theory, practical survey, and post-processing in Object Mapper software.', duration: '2 modules', cert: 'Certificate of Competence' },
  '/courses/pas128-awareness': { slug: 'pas128-awareness', desc: 'PAS 128 awareness for project managers, clients, and specifiers commissioning utility surveys.', duration: '1 day', cert: 'Certificate of Attendance' },
  '/courses/tsa-ices-utility-mapping': { slug: 'tsa-ices-utility-mapping', desc: 'TSA and ICES modular utility mapping programme covering EM location, GPR, GNSS, and reporting.', duration: 'Modular', cert: 'TSA/ICES Recognition' },
  '/courses/advanced-em-locator': { slug: 'advanced-em-locator', desc: 'Advanced electromagnetic locator techniques for experienced surveyors. CICES-mapped content.', duration: '2 days', cert: 'Certificate of Competence' },
  '/courses/level-3-certificate': { slug: 'level-3-certificate', desc: 'Ofqual Level 3 Certificate in utility detection and mapping. Entry-level qualification for surveyors.', duration: '3-6 months', cert: 'Ofqual Level 3' },
  '/courses/level-4-diploma': { slug: 'level-4-diploma', desc: 'Ofqual Level 4 Diploma in utility mapping. Intermediate surveyor qualification with on-site assessment.', duration: '6-12 months', cert: 'Ofqual Level 4' },
  '/courses/level-5-diploma': { slug: 'level-5-diploma', desc: 'Ofqual Level 5 Diploma in utility mapping management. Senior surveyor and project lead qualification.', duration: '12-18 months', cert: 'Ofqual Level 5' },
  '/courses/level-6-diploma': { slug: 'level-6-diploma', desc: 'Ofqual Level 6 Diploma in utility mapping. The highest-level qualification for utility survey professionals.', duration: '18-24 months', cert: 'Ofqual Level 6' },
  '/courses/online-level-3-diploma': { slug: 'online-level-3-diploma', desc: 'Online-supported route to the Level 3 Certificate in utility detection and mapping.', duration: '3-6 months', cert: 'Ofqual Level 3' },
  '/courses/online-level-5-diploma': { slug: 'online-level-5-diploma', desc: 'Online-supported route to the Level 5 Diploma in utility mapping management.', duration: '12-18 months', cert: 'Ofqual Level 5' },
};

/* ------------------------------------------------------------------ */
/*  Stats data                                                         */
/* ------------------------------------------------------------------ */

const stats = [
  { number: '21 Years', label: 'Specialist Experience' },
  { number: '70-80%', label: 'Genny Usage Uplift' },
  { number: 'Proven', label: 'Strike Reduction' },
  { number: 'Max 8', label: 'Delegates per Session' },
];

/* ------------------------------------------------------------------ */
/*  FAQ data                                                           */
/* ------------------------------------------------------------------ */

const faqs = [
  { q: 'What CAT and Genny training courses does Sygma offer?', a: 'Sygma offers a full range of cable avoidance training including EUSR CAT1, ProQual CAT1 and CAT1 Plus, EUSR CAT2 Safe Dig, CAT Manager, and the RQF Level 2 Award. We also deliver specialist courses such as Advanced EM Locator, GPR training, and PAS 128 awareness for utility surveyors.' },
  { q: 'Are Sygma courses eligible for CITB funding?', a: 'Sygma is a CITB Approved Training Organisation. CITB-registered employers may be able to access funding support for eligible courses through the CITB Employer Network.' },
  { q: 'What is the difference between EUSR CAT1 and ProQual CAT1?', a: 'EUSR CAT1 leads to EUSR card registration, the industry-standard proof of cable avoidance competency. ProQual CAT1 is externally verified and accredited by ProQual Accreditations, offering a higher standard of individual assessment. Both cover cable avoidance but through different assessment routes.' },
  { q: 'Do you deliver training on-site at our premises?', a: 'Yes. Sygma delivers on-site training across the UK mainland. On-site delivery is available for most courses and requires a minimum of 4 delegates. We bring all equipment and materials to your location. Travel is included in the price.' },
  { q: 'What qualifications can I gain through Sygma?', a: 'Depending on the course, you can gain EUSR cards, ProQual-accredited certificates, Ofqual-regulated qualifications from Level 2 through Level 6 in utility mapping and surveying, and Sygma certificates of attendance or competence.' },
  { q: 'What is the maximum group size for assessed courses?', a: 'Sygma operates a strict maximum of 8 delegates per trainer and assessor session for all assessed courses. This limit is maintained across all delivery to ensure proper individual assessment and practical equipment time.' },
];

/* ------------------------------------------------------------------ */
/*  Course card component                                              */
/* ------------------------------------------------------------------ */

function CourseCard({ label, to }: { label: string; to: string }) {
  const extra = courseExtras[to];
  return (
    <Link href={to} className="group block rounded-lg border border-border bg-background p-5 hover:border-primary hover:shadow-md transition-all">
      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2">{label}</h3>
      {extra && <p className="text-sm text-muted-foreground leading-relaxed mb-3">{extra.desc}</p>}
      {extra && (
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          {extra.duration && <span className="inline-flex items-center gap-1 rounded bg-muted/50 px-2 py-0.5">{extra.duration}</span>}
          {extra.cert && <span className="inline-flex items-center gap-1 rounded bg-accent/10 text-accent px-2 py-0.5 font-medium">{extra.cert}</span>}
        </div>
      )}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export default function CoursesPage() {
  /* Build course groups from navigation data */
  const avoidanceNav = mainNav.find(m => m.label === 'Utility Avoidance');
  const mappingNav = mainNav.find(m => m.label === 'Utility Mapping');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'All Courses' }]) }} />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[480px] bg-foreground">
        <Image
          src="cat-82"
          alt="CAT and Genny training in progress"
          fill
          className="absolute inset-0 w-full h-full object-contain"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-6 md:px-8 pt-10 pb-12 md:pb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Training Courses</p>
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white max-w-4xl">
            CAT and Genny Training Courses
          </h1>
          <p className="text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
            Cable avoidance training, utility mapping qualifications, and specialist locator courses. Delivered by the UK&apos;s only independent underground utility training provider.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-black">{s.number}</p>
              <p className="text-sm font-medium opacity-90 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Is CAT and Genny Training? */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What Is CAT and Genny Training?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">CAT and Genny training teaches operatives and supervisors how to use <strong>Cable Avoidance Tools (CAT)</strong> and <strong>Signal Generators (Genny)</strong> to detect and avoid underground utilities before excavation. A CAT scans for electromagnetic signals emitted by buried cables and pipes, while a Genny applies a known signal to a specific service so it can be traced individually. Together, they form the primary defence against utility strikes during any excavation, demolition, or ground investigation work.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Every Sygma CAT and Genny course covers the four locating modes (Power, Radio, Genny, and Special Avoidance), practical signal generator operation, site plan interpretation, and hands-on assessment using real equipment on a live training rig. Delegates learn to read the CAT display, select the correct operating mode, and apply the techniques described in <strong>HSG47</strong> (the Health and Safety Executive guidance on avoiding danger from underground services).</p>
          <p className="text-muted-foreground leading-relaxed">Sygma operates a strict <strong>maximum of 8 delegates per session</strong> to ensure every individual receives proper practical equipment time and individual assessment. This is not a compliance tick-box exercise -- it is genuine competency development.</p>
        </div>
      </section>

      {/* Utility Avoidance Courses */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Utility Avoidance Courses</h2>
            <p className="text-muted-foreground">Cable location, safe dig, supervisor, and specialist courses. <Link href="/training/cable-location-avoidance" className="text-primary font-semibold hover:underline">View the Utility Avoidance hub</Link></p>
          </div>
          {avoidanceNav?.children?.map((group: NavGroup) => (
            <div key={group.group} className="mb-8">
              <h3 className="text-lg font-bold text-foreground mb-3 border-l-4 border-accent pl-3">{group.group}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <CourseCard key={item.to} label={item.label} to={item.to} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Cable Avoidance Training Matters */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Cable Avoidance Training Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Utility strikes remain one of the most common causes of serious injury and disruption on UK construction sites. According to the HSE, hundreds of cable and pipe strikes are reported every year, causing electric shock, gas explosions, flooding, supply interruptions, and project delays. The majority of these incidents are preventable with proper training and competent use of detection equipment.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Effective cable avoidance is not just about holding a CAT -- it requires understanding of electromagnetic principles, signal generation techniques, and the practical limitations of detection equipment in different ground conditions. Operatives need to know <strong>when the CAT will reliably detect</strong> a service and, critically, <strong>when it will not</strong>.</p>
          <p className="text-muted-foreground leading-relaxed">Sygma has delivered cable avoidance training for 21 years. Our data shows that delegates who complete our courses achieve a <strong>70-80% increase in Genny usage</strong> compared to pre-training baselines, directly reducing the number of undetected services in excavation zones. Every course is designed to produce operatives who can locate services competently, not just carry a card.</p>
        </div>
      </section>

      {/* Utility Mapping Courses */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Utility Mapping &amp; Surveying Courses</h2>
            <p className="text-muted-foreground">GPR training, PAS 128, and Ofqual-regulated qualifications from Level 3 to Level 6. <Link href="/training/utility-mapping-surveying" className="text-primary font-semibold hover:underline">View the Utility Mapping hub</Link></p>
          </div>
          {mappingNav?.children?.map((group: NavGroup) => (
            <div key={group.group} className="mb-8">
              <h3 className="text-lg font-bold text-foreground mb-3 border-l-4 border-accent pl-3">{group.group}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <CourseCard key={item.to} label={item.label} to={item.to} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Needs CAT and Genny Training? */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Who Needs CAT and Genny Training?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Anyone who excavates near underground services, supervises excavation work, or manages cable avoidance operations should hold a current cable avoidance training certificate. This includes groundworkers, plant operatives, site supervisors, project managers, utility surveyors, and health and safety professionals.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Major utility companies (water, gas, electricity, telecoms) require contractors to hold EUSR or equivalent registration before working on their networks. Many principal contractors now specify ProQual-accredited training for their supply chain because it offers externally verified, individually assessed competency.</p>
          <p className="text-muted-foreground leading-relaxed">For utility surveyors, Sygma provides the only CICES-approved PAS 128 surveyor course in the UK, along with Ofqual-regulated qualifications from Level 3 through Level 6 that demonstrate professional competency in utility detection and mapping.</p>
        </div>
      </section>

      {/* Additional courses */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Additional Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/courses/cable-avoidance-course-comparison" className="group block rounded-lg border border-border bg-background p-5 hover:border-primary hover:shadow-md transition-all">
              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2">Course Comparison Guide</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Compare EUSR CAT1, ProQual CAT1, and other cable avoidance courses side by side to find the right fit.</p>
            </Link>
            <Link href="/osca" className="group block rounded-lg border border-border bg-background p-5 hover:border-primary hover:shadow-md transition-all">
              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2">On-Site Competency Assessment (OSCA)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Independent on-site assessments to verify operative cable avoidance competency in real working conditions.</p>
            </Link>
            <Link href="/bespoke-training" className="group block rounded-lg border border-border bg-background p-5 hover:border-primary hover:shadow-md transition-all">
              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2">Bespoke Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Tailored cable avoidance and utility mapping programmes designed around your organisation&apos;s equipment, processes, and risk profile.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Effective CAT and Genny Training? */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What Makes Effective CAT and Genny Training?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Not all cable avoidance training is equal. The difference between a good course and a poor one is measurable in Genny usage rates, strike incident frequency, and operative confidence when facing complex ground conditions. Effective training requires adequate time (not half-day sessions), practical equipment access (not just videos), and individual assessment (not group observation).</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Sygma&apos;s approach is built on three principles: small groups (maximum 8 delegates), practical rigs that simulate real site conditions, and directly employed specialist trainers with genuine field experience. Every delegate uses the equipment individually, not just watches a demonstration.</p>
          <p className="text-muted-foreground leading-relaxed">We do not run half-day CAT and Genny courses. Competence in avoiding danger from underground services cannot be built in four hours. Our minimum is a full day, covering electromagnetic theory, all four locating modes, signal generator operation, practical assessment, and written assessment where applicable.</p>
        </div>
      </section>

      {/* Image gallery */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="cat-02" width={600} height={800} alt="Delegate using CAT equipment during practical assessment" className="w-full h-full object-contain rounded-lg aspect-[3/4]" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="cat-10" width={600} height={800} alt="Trainer demonstrating signal generator techniques" className="w-full h-full object-contain rounded-lg aspect-[3/4]" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="cat-71" width={600} height={800} alt="Utility mapping survey equipment in use on site" className="w-full h-full object-contain rounded-lg aspect-[3/4]" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-border pb-5">
                <h3 className="text-base font-bold text-foreground mb-2">{q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto px-6 md:px-8 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Develop Your Team?</h2>
          <p className="text-lg opacity-90 mb-6">Get in touch to discuss which course is right for your organisation, request a tailored quote, or book a course date.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-background text-foreground font-bold text-sm hover:bg-background/90 transition-colors">
              Enquire Now
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-primary-foreground/30 text-primary-foreground font-bold text-sm hover:bg-primary-foreground/10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
