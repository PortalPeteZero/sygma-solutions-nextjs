import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Cable Avoidance Training | CAT and Genny | Sygma Solutions',
  description: 'UK specialist in cable avoidance and CAT and Genny training. EUSR CAT1, ProQual, CITB ATO. On-site across the UK. Book your course today.',
  alternates: { canonical: 'https://sygma-solutions.com/' },
  openGraph: {
    title: 'Cable Avoidance Training | CAT and Genny | Sygma Solutions',
    description: 'UK specialist in cable avoidance and CAT and Genny training. EUSR CAT1, ProQual, CITB ATO. On-site across the UK.',
    url: 'https://sygma-solutions.com/',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

const whyPoints = [
  { title: '21 Years. One Specialism.', body: 'We have been delivering underground utility location training since 2004. It is the only thing we do. That focus produces a depth of expertise that generalist providers cannot replicate.' },
  { title: '100% Independent. Zero Manufacturer Ties.', body: 'We only teach one subject. We are not tied to any equipment manufacturer and we do not sell EM equipment. Because we are independent, our trainers can make recommendations based on what actually works, not on how a distributor makes a margin.' },
  { title: 'Genny First. Always.', body: 'Clients who implement our Genny-First methodology report a 70 to 80% measurable increase in genny adoption and genny detect accuracy among trained operatives on live sites. That is not a training statistic. That is a site that is measurably safer.' },
  { title: 'The Complete Career Pathway.', body: 'From a one-day Cable Avoidance course to a Level 6 Diploma in Utility Surveying, Sygma delivers the full qualification pathway for utility location professionals at every stage of their career.' },
  { title: 'OSCA: Competency Proven on Your Site.', body: 'Our On-Site Competency Assessment closes the gap between certification dates. GPS-stamped, photo-verified, delivered digitally the same day. Real evidence of what your operatives can do.' },
  { title: 'A Proven Record in Reducing Strikes.', body: 'Clients who adopt Sygma training report measurable reductions in cable strikes and service damage. Our methodology does not just teach people to pass an assessment. It changes how they behave on site, and the data proves it.' },
];

const pathways = [
  { title: 'Utility Avoidance and Site Safety', desc: 'From Cable Avoidance and CAT & Genny to EUSR accredited courses and specialist operator qualifications.', cta: 'View Courses', href: '/training/cable-location-avoidance', image: 'cat-86' },
  { title: 'Professional Utility Mapping', desc: 'PAS 128 Surveyor training, GPR, RQF and ProQual qualifications from Level 2 Award to Level 6 Diploma.', cta: 'View Courses', href: '/training/utility-mapping-surveying', image: 'em-03' },
  { title: 'OSCA: On-Site Competency Assessment', desc: 'Digital, GPS-stamped on-site assessment that fills the compliance gap between formal training cycles.', cta: 'Find Out More', href: '/osca', image: 'cat-82' },
  { title: 'Bespoke and Corporate Training', desc: 'Programmes designed around your site protocols, risk profile, and workforce. We come to you.', cta: 'Talk to Us', href: '/bespoke-training', image: 'cat-84' },
];

const faqs = [
  { q: 'What is underground utility location training?', a: 'Underground utility location training teaches operatives and supervisors the techniques needed to <strong>locate underground services and avoid danger from buried utilities</strong> before and during excavation. Course content covers electromagnetic signal principles, CAT and Genny operation, interpreting site plans, safe digging best practice, and the legal and procedural framework under HSG47.' },
  { q: 'What is a CAT and Genny?', a: 'A CAT (Cable Avoidance Tool) is a handheld device used to detect underground cables and services by picking up electromagnetic signals. A Genny (signal generator) is used alongside the CAT. The Genny clamps onto a target conductor and applies a known signal, which the CAT then detects and traces accurately. Together, a CAT and Genny are significantly more reliable than using the CAT on its own. The CAT\'s passive modes — Power and Radio — can miss services that are not energised or not producing a strong enough signal. The Genny removes much of that uncertainty. Every Sygma CAT and Genny training course covers how to use both pieces of cable avoidance equipment correctly, starting with the signal generator.' },
  { q: 'What accreditations does Sygma Solutions hold?', a: 'Sygma Solutions is a CITB Approved Training Organisation, an accredited ProQual centre, a registered EUSR/EUSR provider, a TSA Approved Training Provider, and a CICES recognised provider.' },
  { q: 'How much does cable avoidance training cost?', a: 'Sygma charges <strong>per course, not per person</strong>. Whether you send 4 delegates or 8, the course fee stays the same. Travel within the UK mainland is included. There are no hidden fees beyond the awarding body accreditation charge where applicable. Contact us for a quote.' },
  { q: 'Do you offer CITB-funded training?', a: 'Yes. Sygma is a CITB Approved Training Organisation. CITB-registered employers may be able to access funding through the CITB Employer Network scheme. Funding availability and amount varies. Contact your CITB Employer Network adviser directly to discuss your eligibility.' },
  { q: 'Can you deliver training on-site at our premises?', a: 'Yes. Most Sygma courses can be delivered at your site, yard, or offices anywhere on the UK mainland. Travel is included in the course fee. We require a suitable indoor space and outdoor practice area.' },
  { q: 'What is the difference between EUSR CAT1 and ProQual CAT1?', a: 'They are not equivalent. <strong>ProQual CAT1 is significantly more thorough</strong>. It covers topics EUSR does not assess at all, including CDM Regulations, risk assessment monitoring, and Safe Systems of Work aligned with HASAWA, HSG47, and GS6. Where EUSR relies on multiple choice questions, ProQual uses written theory papers and requires both theory and practical assessment across most criteria. In 21 years of delivering utility avoidance training, the ProQual CAT1 is the only qualification Sygma does not have to add content to, because we helped develop it to the standard the industry actually needs. EUSR CAT1 is required where your client mandates EUSR registration.' },
  { q: 'What equipment is used on Sygma cable avoidance training courses?', a: 'Sygma cable avoidance training covers a range of cable avoidance equipment including <strong>Radiodetection CAT4, CAT4+, RD8200, and RD8100</strong>, Vivax-Metrotech vLoc, and Leica DSX. We are fully independent and not tied to any single equipment manufacturer. Our trainers teach delegates to use CAT and Genny cable avoidance tools across all four locating modes: Power, Radio, Genny, and Avoidance. Practical sessions cover manufacturer specific techniques, signal generator operation, and general awareness of underground utility services so that skills apply on site regardless of which cable avoidance equipment your organisation uses.' },
  { q: 'Is cable avoidance training a legal requirement?', a: 'HSG47 and the CDM Regulations place a duty on employers to ensure that anyone involved in excavation work is competent in avoiding danger from underground services. Cable avoidance training is effectively a <strong>legal requirement</strong> for anyone who carries out street works or excavation near buried cables and utility services. While there is no single law that says you must hold a specific CAT and Genny certificate, the legal framework requires employers to demonstrate that their workforce has been properly trained. In practice, most principal contractors and utility companies require a recognised cable avoidance course qualification such as EUSR CAT1 or ProQual CAT1 before allowing operatives on site. Failure to provide adequate training can result in <strong>enforcement action, fines, and criminal prosecution</strong> if a cable strike leads to injury.' },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a }
          }))
        },
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Sygma Solutions',
          url: 'https://sygma-solutions.com',
          telephone: '02039718252',
          image: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto/cat-34',
          address: { '@type': 'PostalAddress', streetAddress: 'Platt Lane, Hindley', addressLocality: 'Wigan', postalCode: 'WN2 3PA', addressCountry: 'GB' }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Sygma Solutions',
          url: 'https://sygma-solutions.com',
          logo: { '@type': 'ImageObject', url: 'https://sygma-solutions.com/logo.webp', width: 200, height: 50 },
          sameAs: ['https://www.linkedin.com/company/sygma-solutions']
        }
      ]) }} />

      <h1 className="sr-only">Cable Avoidance Training and CAT & Genny Courses - UK Specialist Since 2004</h1>
      <HeroCarousel />

      {/* Key USP stats */}
      <section className="bg-foreground py-6">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">21 Years</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">One Specialism</p>
              <p className="text-xs text-white/60">Underground utility location training is all we do.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">70-80%</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Increase in Genny Usage</p>
              <p className="text-xs text-white/60">Measured through locator data downloads after Sygma training.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">Proven</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Strike Reduction Record</p>
              <p className="text-xs text-white/60">Clients report measurable reductions in service strikes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sygma Record Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Proven Record in Reducing Strikes and Raising Genny Detection Rates</p>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">21 Years. A Proven Record in Reducing Utility Strikes and Raising Competence on Site.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Since 2004, Sygma has delivered <strong>CAT and Genny training</strong> and <strong>cable avoidance courses</strong> to some of the UK's largest infrastructure and utilities contractors. Not as a module in a broader programme. Not with freelance trainers hired per course. As a <strong>dedicated cable avoidance specialist</strong> with directly employed staff, one subject, and results that clients can measure on site.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">Clients who implement our Genny-First methodology report a <strong>70 to 80% measurable increase in Genny usage</strong> among trained operatives. That is not a delegate satisfaction score. That is fewer strikes, every working day.</p>
              <Link href="/training/cable-location-avoidance" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
                See Our Courses <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { stat: '70-80%', desc: 'measurable increase in Genny usage on client sites' },
                { stat: '21 years', desc: 'dedicated to one subject since 2004' },
                { stat: 'Fewer strikes', desc: 'reported by clients across the UK after Sygma training' },
              ].map((item) => (
                <div key={item.stat} className="border border-border rounded-lg p-5 bg-card">
                  <p className="text-2xl font-black text-primary">{item.stat}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="container mx-auto px-6 md:px-8 max-w-4xl pb-8">
        <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg p-6">
          <p className="text-lg font-bold text-foreground mb-2">What to Expect on a Sygma CAT and Genny Training Course</p>
          <p className="text-muted-foreground leading-relaxed mb-3">Every Sygma CAT and Genny training course combines <strong>theoretical and practical sessions</strong> designed for operatives and supervisors who carry out <strong>excavation work near underground services</strong>. Delegates work through course content covering site plans, cable avoidance techniques, genny training fundamentals, <strong>signal generator operation</strong>, and the practical use of <strong>CAT and Genny cable avoidance tools</strong> across all four locating modes, including cat operating mode selection and cat display reading. Each session includes practical assessment elements where delegates carry out CAT and Genny work using real equipment on a live training rig.</p>
          <p className="text-muted-foreground leading-relaxed">Delegates must have a good understanding of the English language to follow all training materials and safety instructions. On successful completion, delegates receive a <strong>certificate and ID card</strong> as proof of competency. Our trainers provide support throughout the session and are available to answer questions after the course. Sygma does not run half day CAT and Genny courses. Our minimum is a full day, because competence in avoiding danger from underground services cannot be built in four hours.</p>
        </div>
      </section>

      {/* Why Cable Avoidance Training Matters */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">The Safety Case</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Why CAT and Genny Training Matters for Cable Avoidance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Thousands of <strong>underground utility strikes</strong> are reported across Great Britain every year. Some result in serious injury. Some are fatal. Accidental contact with <strong>high-voltage electricity cables</strong> can cause catastrophic explosions, severe burns, and electrocution. Hitting a gas main risks fire and blast injuries. Striking a utility service can also lead to massive repair costs, compensation claims, heavy fines, and project delays that affect entire construction programmes. These are not edge cases. They are the reason cable avoidance training exists. Health and safety legislation requires that anyone involved in excavation work understands how to locate underground cables and buried services before breaking ground.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">CAT and Genny training teaches operatives and supervisors to <strong>locate, identify, and avoid buried pipes, cables, and communication lines</strong> before any excavation begins. The CAT operates in passive modes — Power mode detects electromagnetic fields from cables carrying load at the time of the survey, and Radio mode detects re-radiated signals from metallic conductors — but neither passive mode guarantees detection of buried services. The Genny applies a known signal directly to a target conductor, allowing the CAT to locate it accurately. This is why Sygma's training starts with the Genny, not the CAT. Pre-use tests on the cable avoidance tool and genny tools should be completed before every use to confirm the equipment is functioning correctly. The result is faster, safer digging with fewer stoppages, fewer strikes, and fewer of the expensive repair costs and project delays that come with hitting a service.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Under <strong>HSG47 and the CDM Regulations</strong>, employers have a <strong>legal duty</strong> to ensure excavation workers are properly trained in CAT and Genny operation and cable avoidance. That includes obtaining utility plans before work starts, conducting site inspections for buried services, completing a health and safety risk assessment, and verifying the location and depth of services by digging trial holes by hand before using mechanical plant. Street works and civil engineering projects carry particular risk where multiple underground utilities converge. Failure to meet these responsibilities can result in prosecution, significant fines, and in the worst cases, criminal liability.</p>
          <p className="text-muted-foreground leading-relaxed">Every Sygma CAT and Genny training course covers these legal requirements alongside full practical training on CAT and Genny equipment. Delegates gain essential knowledge including emergency protocols including when to switch off power, how to evacuate safely, and whom to contact if a <strong>cable strike leads to injury</strong>. Course content covers how to prevent costly disruptions to underground services through proper genny detect techniques and systematic cable avoidance work. Our trainers are directly employed, TAQA qualified, and experienced in utility surveying and mapping. The techniques and knowledge your operatives gain support a safer working environment, help prevent fatal injuries, costly disruptions, and damage to buried services, and ensure safety compliance with the standards that apply to every excavation project in the UK.</p>
        </div>
      </section>

      {/* Accreditation Pathways for CAT and Genny Training */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Accreditation Routes</p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">CAT and Genny Training Qualifications and Accreditation Routes</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Not all CAT and Genny training courses lead to the same qualification, and the differences matter. There are several accreditation routes available in the UK, each with different assessment methods, certification periods, and industry recognition. Understanding which route is right for your workforce is one of the most important decisions you will make.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">The <strong>EUSR Energy and Utilities Skills (EUSR)</strong> route is the most common accreditation in the energy and utilities sector. <strong>EUSR CAT1</strong> is widely mandated by utility companies and their supply chains. It uses a multiple-choice assessment and practical test. Certification is registered on the EUSR database and the genny certificate is included as part of the one day course and is typically required for EUSR card renewal.</p>
          <p className="text-muted-foreground leading-relaxed mb-4"><strong>ProQual CAT1</strong> is a more comprehensive qualification. It covers <strong>CDM Regulations, risk assessment monitoring, and Safe Systems of Work</strong> aligned with HASAWA, HSG47, and GS6. Where EUSR uses multiple-choice questions, ProQual requires written theory papers and assesses both theory and practical skills across most criteria. Sygma helped develop the ProQual CAT1 standard because the industry needed a qualification that matched the depth of competence required on site.</p>
          <p className="text-muted-foreground leading-relaxed mb-4"><strong>NPORS</strong> is another recognised certification route. Most industry accredited CAT and Genny certifications are valid for three to five years before refresher training is required. Non-accredited cable avoidance courses also exist with certificates valid for three years, but Sygma does not support half day training formats because cable avoidance techniques, practical knowledge, and practical elements cannot be properly assessed in four hours.</p>
          <p className="text-muted-foreground leading-relaxed">Whichever accreditation route your organisation requires, Sygma delivers the full range of CAT and Genny training courses. As an independent provider with no manufacturer ties, we focus entirely on building competence rather than meeting a minimum standard.</p>
        </div>
      </section>

      {/* Why Independent */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">The Sygma Standard</h2>
             <p className="text-lg text-muted-foreground leading-relaxed">
               Other training companies deliver hundreds of different subjects. Sygma delivers one. <strong>CAT and Genny training</strong> and utility mapping is not part of what we do. It is all we do. From introductory cable avoidance courses to advanced utility surveying qualifications, every programme is delivered by <strong>experienced professionals</strong>. We are <strong>not tied to any manufacturer</strong> and we do not sell EM equipment. That is what makes our CAT and Genny training different.
             </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((pt) => (
              <div key={pt.title} className="border border-border rounded-lg p-6 bg-card hover:border-primary transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{pt.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/about" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
              About Sygma Solutions <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Training Pathways</p>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Choose Your Training Pathway</h2>
            <p className="text-lg text-muted-foreground">One specialism. Four ways to engage.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pathways.map((p) => (
              <div key={p.title} className="relative overflow-hidden rounded-xl border border-border bg-card group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.image} width={1200} height={750} alt={p.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <Link href={p.href} className="inline-flex items-center px-4 py-2 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors">
                    {p.cta} <ArrowRight size={14} className="ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genny principle */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">The Genny Principle</p>
              <h2 className="text-3xl font-black text-foreground mb-4">The Genny-First Approach to CAT and Genny Training</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The Genny is a <strong>signal generator</strong> that applies a specific signal to a target conductor. The CAT then detects that signal. Together, these cable avoidance tools are significantly more reliable than passive detection techniques alone. Proper genny training ensures operatives understand how to locate underground cables and avoid underground services using the correct genny tools and techniques. But most operatives on UK construction sites reach for the CAT and never connect the Genny.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Sygma's CAT and Genny training starts with the signal generator because that is where strike prevention actually begins. Clients who implement our <strong>Genny-First methodology</strong> report a 70 to 80% measurable increase in genny adoption. That is not a training statistic. That is a site where operatives carry out CAT and Genny work with the right techniques, every single day.</p>
              <Link href="/courses/cable-avoidance-training" className="inline-flex items-center px-5 py-2.5 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors">
                See Our Cable Avoidance Courses <ArrowRight size={14} className="ml-1.5" />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
              <Image src="cat-64" width={1200} height={900} alt="Genny & CAT training" sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-8">Trusted by UK Infrastructure</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Severn Trent Water', 'Kier Construction', 'Galliford Try', 'Wales and West Utilities', 'MGroup Services'].map((c) => (
                  <div key={c} className="px-5 py-2.5 border border-border rounded-lg bg-card text-sm font-semibold text-muted-foreground">{c}</div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {['CITB ATO', 'ProQual', 'EUSR/EUSR', 'TSA', 'CICES'].map((a) => (
                  <div key={a} className="px-4 py-2 bg-accent/10 rounded-full eyebrow">{a}</div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
              <Image src="cat-08" width={1200} height={900} alt="On-site utility training with Sygma Solutions" sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing approach */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Simple Pricing</p>
              <h2 className="text-3xl font-black text-foreground mb-4">One Course Fee. One Group. One Invoice.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Sygma charges per course, not per person. Whether you send 4 people or 8, the course fee stays the same. Travel within the UK mainland is included. There are no hidden fees beyond the awarding body accreditation charge where applicable.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">CITB-registered employers may be able to access funding through the CITB Employer Network scheme. We can help you check eligibility.</p>
              <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
                Book a Course <ArrowRight size={14} className="ml-1.5" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Pricing model', detail: 'Per course, not per person' },
                { label: 'Travel', detail: 'Included across UK mainland' },
                { label: 'Group size', detail: 'Up to 8 delegates per course' },
                { label: 'CITB funding', detail: 'Employer Network funding may apply' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center border border-border rounded-lg px-5 py-3 bg-card">
                  <span className="text-sm font-medium text-foreground">{row.label}</span>
                  <span className="text-sm font-bold text-foreground">{row.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* We Come to You */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">UK-Wide Delivery</p>
              <h2 className="text-3xl font-black text-foreground mb-4">We Come to You</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">Sygma delivers <strong>90% of CAT and Genny training at the client's site</strong>, using their own plant and procedures. Your team learns on the ground they work on. Whether your project involves civil engineering works, street works near buried services, or excavation on live utility networks, our trainers deliver on your site. <strong>Travel across the UK mainland is included</strong> in every course fee.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  { city: 'Manchester and the North West', link: '/locations/manchester' },
                  { city: 'Birmingham and the Midlands', link: '/locations/birmingham' },
                  { city: 'London and the South East', link: '/locations/london' },
                  { city: 'Bristol and the South West', link: '/locations/bristol' },
                ].map((loc) => (
                  <Link key={loc.city} href={loc.link} className="border border-border rounded-lg p-4 bg-card text-center hover:border-primary transition-colors">
                    <p className="text-sm font-semibold text-foreground">{loc.city}</p>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">Plus <Link href="/cable-avoidance-training-scotland" className="text-primary font-semibold hover:underline">Scotland</Link>, Wales, and everywhere in between. Sygma training centre is in Wigan for open courses. Some qualifications are also available <Link href="/courses/online-level-3-diploma" className="text-primary font-semibold hover:underline">fully online via MS Teams</Link>.</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
              <Image src="cat-80" width={1200} height={900} alt="On-site training delivery across the UK" sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-foreground py-16 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">On Site. In the Field. UK-Wide.</p>
          <p className="text-2xl md:text-3xl font-black">21 years. One subject. Delivered where it matters.</p>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Common Questions</p>
          <h2 className="text-3xl font-black text-foreground mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-border rounded-lg bg-card p-6">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-6 md:px-8 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground">Ready to Book or Have a Question?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">We respond to all enquiries within one working day. Whether you need a single course, a multi-day programme, or advice on the right qualification for your team, get in touch.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
              Get in Touch
            </Link>
            <a href="tel:+442039718252" className="inline-flex items-center px-8 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors">
              <Phone size={16} className="mr-2" /> 0203 971 8252
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
