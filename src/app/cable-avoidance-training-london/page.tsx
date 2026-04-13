import { faqPageSchema, breadcrumbSchema } from '@/lib/schema';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Cable Avoidance Training London | CAT and Genny Courses',
  description: 'Cable avoidance training in London. CAT and Genny courses at your site. Half day and full day options. EUSR, ProQual accredited. CITB ATO.',
  alternates: { canonical: 'https://sygma-solutions.com/cable-avoidance-training-london' },
  openGraph: {
    title: 'Cable Avoidance Training London | CAT and Genny Courses',
    description: 'Cable avoidance training in London. CAT and Genny courses at your site. Half day and full day options. EUSR, ProQual accredited. CITB ATO.',
    url: 'https://sygma-solutions.com/cable-avoidance-training-london',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function CableAvoidanceLondon() {
  const faqs = [
  { q: 'What is CAT and Genny training?', a: 'CAT and Genny training teaches your operatives to safely operate cable avoidance tools and signal generators on site. The CAT4 is the industry-standard cable avoidance tool with four locating modes. The Genny is a signal generator used to apply a radio frequency to cables and pipes for precise location.' },
  { q: 'Can we do a half day cable avoidance training course in London?', a: 'Yes. We offer flexible half day training sessions for London teams with tight schedules. Half day cable avoidance courses cover core competency in CAT and Genny operation, practical instruction, and site-specific assessment.' },
  { q: 'Do you deliver cable avoidance training in London?', a: 'Yes. Sygma Solutions delivers cable avoidance and CAT and Genny training at client sites across London and the South East. We travel to your site and bring all CAT and Genny equipment, materials and assessment documentation.' },
  { q: 'What is the travel cost for training in London?', a: 'Travel costs for London deliveries are included in the course quote. Contact us with your site location and we will confirm the full cost. There are no hidden charges for cable avoidance training delivered anywhere in London or the South East.' },
  { q: 'Can you deliver at our depot or site in the South East?', a: 'Yes. Sygma delivers CAT and Genny training at client premises across London and the South East including depots, live construction sites, training rooms and open yard space. We bring all cable avoidance equipment, signal generators and assessment materials.' },
  { q: 'Is CITB funding available for cable avoidance training in London?', a: 'Sygma Solutions is a CITB Approved Training Organisation. CITB-registered businesses may be able to access funding for cable avoidance and genny training courses through the CITB Employer Network model.' },
];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "All Courses", to: "/courses" }, { label: "Cable Avoidance Training London" }]) }} />

      <div className="relative w-full h-96 overflow-hidden bg-foreground">
        <Image
          src="CAT4-and-Genny-62"
          alt="Cable avoidance training in London"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute inset-0 border-l-4 border-accent" />
        <div className="relative flex flex-col justify-end p-8 md:p-12 h-full">
          <div className="eyebrow text-accent mb-2">Utility Avoidance</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-primary-foreground mb-3">Cable Avoidance Training London | Nationwide Delivery, London Experienced</h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">Sygma Solutions delivers cable avoidance training and practical CAT and Genny equipment instruction at your site in London and across the South East. With 21 years delivering on capital projects, infrastructure sites and contractor premises nationwide, our specialist trainers come to you. Choose full day or half day training to suit your schedule. No travel costs for your team, no lost site time.</p>
          <nav className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/locations" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Locations</Link>
            <span className="text-primary-foreground/50">/</span>
            <span className="text-primary-foreground/80">London</span>
          </nav>
        </div>
      </div>

      {/* Stats bar */}
      <section className="bg-muted/30 border-y border-border py-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {['21 Years in Business', '70,000 Utility Strikes Per Year in the UK', 'CITB Approved Training Organisation'].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses section */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">What We Deliver</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Courses We Deliver in London and the South East</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">We deliver the following genny training courses and cable avoidance instruction at your premises across London, the M25 corridor and the wider South East. All courses are private, in-house sessions delivered with hands-on practical training using genuine CAT and Genny equipment. You choose the date. We bring the cable avoidance tools, signal generators and assessors. Each course teaches your operatives to correctly operate underground service detection equipment in real site conditions.</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-5 py-3 font-bold">Course</th>
                <th className="text-left px-5 py-3 font-bold hidden md:table-cell">Duration</th>
                <th className="text-left px-5 py-3 font-bold">Most Suitable For</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: 'CAT and Genny Training (In-House Certificate)', href: '/courses/cable-avoidance-training', duration: '1 day', suitable: 'Operatives new to cable avoidance training. Practical CAT and Genny instruction with Sygma in-house certificate issued same day.' },
                { course: 'EUSR CAT1 (EUSR Category 1)', href: '/courses/eus-cat1', duration: '1 day', suitable: 'Teams that need EUSR card certification. Industry-standard cable avoidance qualification covering CAT and Genny operation and safety guidance.' },
                { course: 'ProQual CAT1 (Accredited by ProQual Accreditations)', href: '/courses/proqualcat1-training', duration: '1 day', suitable: 'Teams requiring a higher assessment standard for cable avoidance. Individually mapped, externally verified by ProQual Accreditations. Theory and practical assessment.' },
                { course: 'ProQual CAT1 Plus (Most Advanced Available)', href: '/courses/proqualcat1plus', duration: '2 days', suitable: 'Operatives in complex, high-risk environments. The most advanced cable avoidance qualification in the UK.' },
                { course: 'Advanced Electromagnetic Location', href: '/courses/advanced-em-locator', duration: '1 day', suitable: 'Experienced operatives. Using the RD8200 and related locators to their full capability.' },
                { course: 'OSCA (On-Site Competency Assessment)', href: '/osca', duration: 'Half day or full day', suitable: 'Organisations that need to verify actual site competency between training cycles. Independent assessment of your team.' },
              ].map((row, i) => (
                <tr key={row.course} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                  <td className="px-5 py-3 font-semibold text-foreground"><Link href={row.href} className="text-primary hover:underline">{row.course}</Link></td>
                  <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{row.duration}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.suitable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg"><Image src="CAT4-and-Genny-46" width={1200} height={800} alt="Operative scanning with CAT4 on London site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><Image src="CAT4-and-Genny-60" width={1200} height={800} alt="Genny signal application during cable avoidance training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><Image src="Safe-Dig-14" width={1200} height={800} alt="Safe digging practice near London underground services" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" /></div>
      </div>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><Image src="CAT4-and-Genny-06" width={1200} height={800} alt="CAT and Genny training in London" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top" /></div>

      {/* Course Content */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Course Content</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">What Your Team Will Learn on a Cable Avoidance Training Course in London</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="font-bold text-foreground mb-3">Theory and Understanding</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">Every cable avoidance training course combines classroom theory sessions covering current legislation, HSG47 guidance on avoiding danger from underground services, safe digging practices and utility hazards. Your delegates will understand why cable avoidance matters, the real cost of utility strikes on construction sites, and how to avoid danger when excavating near buried services. We cover health and safety requirements, risk assessment basics and best practice procedures for locating underground services before breaking ground.</p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">Practical CAT and Genny Training</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">Practical instruction covers the CAT4 cable avoidance tool and Genny signal generator in detail. Trainees learn the four locating modes used by the CAT tool, how to correctly apply the Genny signal to cables and pipes, and how to interpret equipment signals in the field. Hands-on practical sessions take place on your actual London site, using real underground services and genuine site conditions. That is the difference between a classroom exercise and confident, competent operators.</p>
          </div>
        </div>
        <h3 className="font-bold text-foreground mb-4">Four CAT Locating Modes Covered in Every Genny Training Course</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { mode: '1. Power Mode', desc: 'Passive detection of electromagnetic fields from cables carrying load at the time of the survey. Cables not under load may produce little or no signal.' },
            { mode: '2. Genny Mode', desc: 'Locating underground services using an applied signal from the Genny signal generator. The most accurate method for identifying specific lines.' },
            { mode: '3. Radio Mode', desc: 'Passive detection of VLF radio signals re-radiated by metallic conductors. Signal strength varies with depth, soil conditions, and conductor length.' },
            { mode: '4. Avoidance Mode', desc: 'Combining all passive detection modes to sweep for buried services before excavation. The mode most commonly used as a safety check.' },
          ].map((item) => (
            <div key={item.mode} className="border border-border rounded-lg bg-card p-5">
              <h4 className="font-bold text-foreground mb-1 text-sm">{item.mode}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why on-site */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow text-primary mb-3">On-Site Delivery</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why London Teams Choose On-Site Training</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>London has the most complex underground utility infrastructure in the UK. The sheer density of buried services beneath every street, combined with ongoing capital investment in construction projects across the city, means the consequences of a utility strike are severe and the demand for properly competent operatives and trained cable avoidance operators is constant. Locating underground services safely is non-negotiable on any London construction site.</p>
            <p>On-site CAT and Genny training in London means your operatives learn to correctly operate cable avoidance tools and signal generator equipment in the environment they actually work in. Not a training venue somewhere outside the M25. Your site, your procedures, your specific ground conditions, your cable routes and service layouts.</p>
            <p>Sygma delivers at client premises across all London boroughs, the M25 corridor and the wider South East. Available for full day or half day training sessions to fit your schedule.</p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><Image src="CAT4-and-Genny-07" width={1200} height={800} alt="London utility avoidance training site conditions" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top" /></div>

      {/* CITB Funding */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Funding</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CITB Funding for Cable Avoidance Training in London</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          <p>Sygma Solutions is a CITB Approved Training Organisation. If your construction business is registered with CITB, you may be able to access funding support towards eligible cable avoidance training and genny training course costs through the CITB Employer Network model.</p>
          <p>Speak to your CITB Employer Network adviser about funding for this training, or contact Sygma and we can guide you through the process.</p>
        </div>
      </section>

      {/* Flexible Scheduling */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow text-primary mb-3">Flexible Scheduling</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Course Duration: Half Day and Full Day CAT and Genny Training Options</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-3">Half Day Training Sessions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Half day cable avoidance training is ideal for London teams with tight schedules. Our half day courses focus on core competency: understanding cable hazards, practical CAT and Genny equipment operation, and real-world site application. Perfect for refresher training, induction of new operatives, or certification top-ups. Half day sessions typically run 4 hours including practical instruction, assessment and certification. Maximum 8 delegates per session.</p>
              <p className="text-xs text-muted-foreground font-semibold">Suitable for: Operatives with prior cable avoidance experience, induction training, rapid team updates</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-3">Full Day Training Courses</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Full day cable avoidance courses offer comprehensive theory, practical training, and detailed instruction in CAT and Genny equipment operation. A full day allows deeper understanding of underground service detection, four locating modes, signal generator application, and extended practical sessions on your London site. Ideal for initial competency development or higher-level accreditation pathways like EUSR CAT1 or ProQual CAT1. Course duration is typically 7 hours including breaks.</p>
              <p className="text-xs text-muted-foreground font-semibold">Suitable for: New operatives, in-depth competency, ProQual and EUSR accreditation courses</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-4xl">On-site delivery means no travel time for your delegates, no lost productivity, and practical CAT and Genny training using your actual site conditions, cable layouts and real buried services. Whether you need a focused half day session or a comprehensive full day genny training course, we deliver at your London premises with no disruption to your schedule.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow text-primary mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Questions About CAT and Genny Training in London</h2>
          <div className="space-y-4">
            {[
              { q: 'What is CAT and Genny training?', a: 'CAT and Genny training teaches your operatives to safely operate cable avoidance tools and signal generators on site. The CAT4 is the industry-standard cable avoidance tool with four locating modes. The Genny is a signal generator used to apply a radio frequency to cables and pipes for precise location.' },
              { q: 'Can we do a half day cable avoidance training course in London?', a: 'Yes. We offer flexible half day training sessions for London teams with tight schedules. Half day cable avoidance courses cover core competency in CAT and Genny operation, practical instruction, and site-specific assessment. Half day sessions typically run 4 hours and are ideal for refresher training, induction, or team updates.' },
              { q: 'What does practical instruction include on a genny training course?', a: 'Practical sessions cover hands-on operation of the CAT4 cable avoidance tool, including all four locating modes: Power Mode, Genny Mode, Radio Mode, and Avoidance Mode. Trainees also learn to apply the Genny signal generator correctly, interpret equipment responses, and conduct safe digging checks. All practical training takes place on your actual London site using real underground services in your actual ground conditions.' },
              { q: 'How long is cable avoidance training?', a: 'Course duration depends on the qualification. Our in-house CAT and Genny training, EUSR CAT1 and ProQual CAT1 are 1 day courses (typically 7 hours). ProQual CAT1 Plus is 2 days for advanced competency. We also offer focused half day sessions for refresher training or induction. All genny training courses include theory, practical instruction, and assessment.' },
              { q: 'Do you deliver cable avoidance training in London?', a: 'Yes. Sygma Solutions delivers cable avoidance and CAT and Genny training at client sites across London and the South East. We travel to your site and bring all CAT and Genny equipment, materials and assessment documentation. On-site delivery means your operatives train on the ground they actually work on, using real underground services beneath your London site.' },
              { q: 'What is the travel cost for training in London?', a: 'Travel costs for London deliveries are included in the course quote. Contact us with your site location and we will confirm the full cost. There are no hidden charges for cable avoidance training delivered anywhere in London or the South East.' },
              { q: 'Can you deliver at our depot or site in the South East?', a: 'Yes. Sygma delivers CAT and Genny training at client premises across London and the South East including depots, live construction sites, training rooms and open yard space. We bring all cable avoidance equipment, signal generators and assessment materials.' },
              { q: 'Is CITB funding available for cable avoidance training in London?', a: 'Sygma Solutions is a CITB Approved Training Organisation. CITB-registered businesses may be able to access funding for cable avoidance and genny training courses through the CITB Employer Network model.' },
            ].map(({ q, a }) => (
              <div key={q} className="border border-border rounded-lg p-6 bg-background">
                <h3 className="font-bold text-foreground mb-3">{q}</h3>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training in Other Regions */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Other Regions</p>
        <h2 className="text-2xl font-black mb-6 text-foreground">Cable Avoidance Training Across the UK</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">Sygma delivers on-site cable avoidance and CAT and Genny training UK-wide. See our regional training guides:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/cable-avoidance-training-manchester" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">Cable Avoidance Training Manchester</Link>
          <Link href="/cable-avoidance-training-birmingham" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">Cable Avoidance Training Birmingham</Link>
          <Link href="/cable-avoidance-training-scotland" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">Cable Avoidance Training Scotland</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-primary-foreground">Get a Quote for CAT and Genny Training in London</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Tell us how many delegates need cable avoidance training, the course duration you need, and your preferred dates. We will confirm availability and send a quote within one working day.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-primary-foreground text-primary font-bold text-sm hover:bg-primary-foreground/90 transition-colors">Get a London CAT and Genny Training Quote</Link>
            <a href="tel:+442039718252" className="inline-flex items-center px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">Call Us</a>
          </div>
        </div>
      </section>

    </>
  );
}
