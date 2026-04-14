import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import Image from 'next/image';
import { organizationSchema } from "@/lib/schema";
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'About Sygma Solutions | UK Cable Avoidance Training Specialist',
  description: 'Sygma Solutions is the UK\'s only independent cable avoidance training specialist. 21 years. One subject. Expert trainers. Not tied to any manufacturer.',
  alternates: { canonical: 'https://sygma-solutions.com/about' },
  openGraph: {
    title: 'About Sygma Solutions | UK Cable Avoidance Training Specialist',
    description: 'Sygma Solutions is the UK\'s only independent cable avoidance training specialist. 21 years. One subject. Expert trainers. Not tied to any manufacturer.',
    url: 'https://sygma-solutions.com/about',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

const stats = [
  { number: '21', label: 'Years established' },
  { number: '15+', label: 'Directly employed specialist trainers' },
  { number: '1', label: 'Subject. Underground utility location.' },
  { number: '0', label: 'Manufacturer ties' },
];

const failurePatterns = [
  { title: 'Location, not just avoidance', body: 'Most cable avoidance training courses focus on the dig area and passive scanning. Our course content covers how to read service drawings, cross-reference site plans, identify what services should be running through the proposed excavation, and then actively locate underground cables and buried services using a Genny-First approach with the signal generator.' },
  { title: 'Overconfidence in cable avoidance equipment', body: 'CAT-only working. Frequency selection by habit, not by logic. Cable avoidance tools have limitations. They may not detect plastic pipes without tracer wires, or cables that are deeply buried or carry very low current. Our cable avoidance training covers these limitations and replaces guesswork with electromagnetic theory, explained in terms that make sense on a muddy construction site.' },
  { title: 'Confirmation bias', body: 'The tendency to find what you expect to find. We train operatives to actively look for evidence that disproves the utility plan, not blindly confirm it.' },
  { title: 'Genny avoidance', body: 'More operatives than most companies would admit rarely or never connect a Genny signal source. Clients who implement our Genny-First methodology report a 70 to 80% measurable increase in Genny usage. That is a site that is measurably safer.' },
];

const deliveryModes = [
  { title: 'At your site', desc: 'Most courses can be delivered at your yard, offices, or operational site anywhere on the UK mainland. Travel is included.' },
  { title: 'Wigan training centre', desc: 'Our primary training centre at Hindley Business Centre in Wigan. Hands-on practical facilities with outdoor practice areas.' },
  { title: 'Worcester (The Survey School)', desc: 'Utility mapping courses and advanced qualifications delivered from The Survey School, Waterworks Road, Worcester.' },
  { title: 'Virtual delivery', desc: 'Theory and awareness modules delivered via MS Teams. Practical assessment completed on-site.' },
];

const accreditations = [
  { name: 'CITB ATO', desc: 'CITB Approved Training Organisation. CITB-registered employers may access Employer Network funding.' },
  { name: 'ProQual', desc: 'Accredited ProQual Accreditations centre for CAT1, CAT2, and utility mapping qualifications.' },
  { name: 'EUSR/EUSR', desc: 'Registered Energy and Utility Skills provider. EUSR CAT1 and CAT2 courses produce EUSR-registered operatives.' },
  { name: 'TSA', desc: 'The Survey Association Approved Training Provider for PAS 128 and utility mapping courses.' },
  { name: 'CICES', desc: 'Chartered Institution of Civil Engineering Surveyors recognised provider.' },
];

const faqs = [
  { q: 'Is Sygma Solutions an accredited training provider?', a: 'Yes. Sygma Solutions is a CITB Approved Training Organisation (ATO), an accredited ProQual Accreditations centre, and a registered EUSR/EUSR provider. All certifications issued are against recognised industry standards and are subject to external quality assurance.' },
  { q: 'What makes Sygma different from other cable avoidance training providers?', a: 'We only teach one subject: cable avoidance and utility mapping training. Other training providers deliver hundreds of topics across different industries. Sygma teaches cable avoidance training exclusively. Every trainer is an experienced utility mapping professional, directly employed, and not tied to any cable avoidance equipment manufacturer. Our cable avoidance training courses cover all four locating modes, signal generator techniques, and the practical skills workers need to locate underground cables and pipes safely.' },
  { q: 'How long has Sygma Solutions been operating?', a: 'Sygma Solutions has been operating since 2004. We have 21 years of specialist experience in cable avoidance training and utility mapping, with over 15 directly employed specialist trainers. Over that time, we have delivered cable avoidance courses covering CAT and Genny equipment, signal generator operation, and practical cable location techniques to workers across every sector that carries out excavation near underground services.' },
  { q: 'Where is Sygma Solutions based?', a: 'Our primary training centre is at Hindley Business Centre in Wigan. We also deliver courses from The Survey School in Worcester, on client sites nationwide, and via MS Teams for virtual delivery.' },
  { q: 'Can Sygma design a bespoke training programme for our company?', a: 'Yes. We design bespoke cable avoidance training programmes for individual organisations, mapped to your site protocols, risk profile, and workforce requirements. Contact us to discuss your needs.' },
  { q: 'What assessments are included in a cable avoidance training course?', a: 'Every Sygma cable avoidance training course includes both a written assessment and a practical assessment. The written test covers course content including cable avoidance theory, health and safety guidance under HSG47, and the importance of following safe digging practices. The practical assessment requires delegates to demonstrate competence using CAT and Genny cable avoidance tools in realistic conditions. On successful completion, delegates receive a training certificate and photo ID card that is valid for three to five years depending on the qualification.' },
];

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <InnerPageHero
        eyebrow="About Sygma Solutions"
        headline="One Subject. Expert Specialists."
        sub="Sygma Solutions is the UK's only independent cable avoidance training specialist. We teach one subject: cable avoidance and utility mapping training, delivered by experienced professionals who are not tied to any equipment manufacturer."
        image="cat-69"
        alt="About Sygma Solutions, the UK's specialist underground utility training provider since 2004"
        breadcrumbs={[{ label: 'About Sygma' }]}
      />

      {/* Philosophy - 2-col layout with image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">The Founding Philosophy</p>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Why We Do One Thing and One Thing Only</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 leading-relaxed">
                <p>Other training companies deliver hundreds of different subjects. Sygma delivers one. Cable avoidance training is not part of what we do. It is all we do. From introductory CAT and Genny courses to advanced utility mapping qualifications, every cable avoidance course we deliver reflects 21 years of specialist focus on this single subject.</p>
                <p>Every Sygma trainer is an experienced utility mapping professional. Directly employed. Ex-manufacturer or ex-utility surveyors. TAQA qualified. Not freelancers. Not generalists. When a Sygma trainer tells you that the cable avoidance techniques being used on your construction site create risk, or that workers need to change how they carry out cable location work, they have the field experience to back it up.</p>
                <p>We are not tied to any cable avoidance equipment manufacturer. We do not sell EM equipment or cable avoidance tools. Because we are independent, we can teach the limitations of every tool on the market, cover the techniques that actually work on site, and make recommendations based on safety rather than sales targets.</p>
              </div>
              <blockquote className="mt-8 border-l-4 border-accent pl-6 py-2">
                <p className="text-lg font-semibold text-foreground italic">"We only teach one subject. Every one of our trainers is a specialist. That focus is what makes the difference."</p>
              </blockquote>
            </div>
            <div>
              <Image src="cat-70" width={1200} height={800} alt="Sygma Solutions specialist trainer demonstrating advanced EM equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.number}>
              <p className="text-4xl font-black">{s.number}</p>
              <p className="text-sm font-medium opacity-90 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Grid - Training in Action - 6 images */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Image src="cat-71" width={1200} height={800} alt="Specialist trainer demonstrating Genny & CAT equipment to operatives" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
            <Image src="cat-72" width={1200} height={800} alt="Genny & CAT specialist training session with field operatives" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
            <Image src="cat-73" width={1200} height={800} alt="Hands-on Genny & CAT practical training demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
            <Image src="cat-74" width={1200} height={800} alt="Operative using CAT locator during utility location training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
            <Image src="cat-75" width={1200} height={800} alt="Genny signal source being connected during underground utility training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
            <Image src="cat-76" width={1200} height={800} alt="Field training session for cable avoidance operatives" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Behavioural Change Framework */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Behavioural Change</p>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Most Strikes Happen Before the First Shovel Breaks Ground</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The data is consistent. The majority of cable strikes do not happen because workers lack cable avoidance equipment. They happen because of what operatives believe about the tools they have. Overconfidence. Confirmation bias. Pressure from supervisors to start excavating. The false certainty of a single locate. Proper cable avoidance training is essential to address these dangers and reduce the risk of accidents on construction sites.</p>
              <p className="text-muted-foreground leading-relaxed">Sygma's training methodology addresses all of these. We do not simply teach operatives how to turn on a locator. We teach them why the signal behaves the way it does, what to do when the environment distorts it, and how to recognise the moment when they need to stop and call for a re-survey.</p>
            </div>
            <div>
              <Image src="cat-77" width={1200} height={800} alt="Sygma trainer explaining electromagnetic signal behaviour to operatives" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
            </div>
          </div>
          <h3 className="text-lg font-black text-foreground mb-6">The Four Failure Patterns We Systematically Address</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {failurePatterns.map((fp, i) => (
              <div key={fp.title} className="border border-border rounded-lg bg-card p-5 flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-black text-sm">{i + 1}</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{fp.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{fp.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Importance of Cable Avoidance Training */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">The Importance of Cable Avoidance Training</p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Why Certified Cable Avoidance Training Matters</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 leading-relaxed">
            <p>Thousands of underground utility strikes are reported across Great Britain every year. Striking an electrical cable or gas main can lead to catastrophic injuries or death. Cable strikes also result in extensive damage to infrastructure, significant financial costs, compensation claims, and construction site shutdowns that cause project delays. These consequences affect the contractor's reputation and the safety of every worker on site.</p>
            <p>Certified cable avoidance training is essential to reduce the risk of these accidents. Proper training ensures that operatives and supervisors can locate underground cables and pipes safely and effectively before and during excavation. Course content covers emergency protocols, including when to switch off power, how to evacuate safely, and whom to contact if a cable strike occurs. The training also ensures compliance with health and safety guidance such as HSG47 and the CDM Regulations, which are applicable to every excavation project in the UK.</p>
            <p>On successful completion of a Sygma cable avoidance training course, delegates receive a training certificate and photo ID card to demonstrate competence. Most industry certifications are valid for three to five years before refresher training is required. Sygma does not run half day cable avoidance courses. Our minimum is a full day, because competence in avoiding danger from underground services cannot be built in four hours.</p>
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Our People</p>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Every Trainer Is a Specialist. That Is Not a Tagline.</h2>
              <p className="text-muted-foreground leading-relaxed">Every Sygma trainer is directly employed. No freelancers. No generalists. Every one of them has worked as a utility surveyor or for an equipment manufacturer before joining Sygma. They are TAQA qualified and they teach one subject. That is what makes the difference between a course that ticks a box and a course that changes behaviour on site.</p>
            </div>
            <div>
              <Image src="cat-78" width={1200} height={800} alt="Sygma directly employed specialist trainer conducting utility training" sizes="(max-width: 768px) 100vw, 50vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Ex-Utility Surveyors', body: 'Trainers who have spent years running electromagnetic and GPR surveys on live sites. They know where the equipment fails and why, because they have been there.' },
              { title: 'Ex-Equipment Manufacturer Specialists', body: 'Trainers who worked for the companies that design and build the locating equipment. They understand the engineering behind the signal, not just the buttons on the front panel.' },
              { title: 'TAQA Qualified Assessors', body: 'Every Sygma trainer holds a Training, Assessment and Quality Assurance qualification. They do not just know the subject. They know how to assess it properly.' },
              { title: 'Directly Employed', body: "No agency staff. No sub-contracted freelancers. Every trainer works for Sygma and is accountable to Sygma's standards. You get the same quality every time." },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Course Content</p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">What Our Cable Avoidance Training Courses Cover</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 leading-relaxed">
            <p>Every Sygma cable avoidance training course combines theoretical and practical sessions. The course content covers electromagnetic signal theory, the practical use of CAT and Genny cable avoidance tools across all four locating modes (Power, Radio, Genny, and Avoidance), signal generator operation, and how to read and cross-reference service drawings to locate underground services before breaking ground. Delegates also learn how to carry out cable avoidance work in realistic site conditions using real cable avoidance equipment.</p>
            <p>Practical elements include hands-on practice with CAT and Genny equipment, where delegates carry out cable location exercises on a live training rig. Each cable avoidance course includes a short written assessment and practical assessment to ensure competency. Course materials include a handout summarising the topics covered.</p>
            <p>Sygma cable avoidance training courses can be conducted on-site at the client's premises or at one of our dedicated training venues, providing flexibility for businesses. We commonly deliver in house cable avoidance training at client sites across the UK mainland, with travel included in every course fee.</p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Accreditations</p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Accredited. Specialist. Accountable.</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">Sygma Solutions holds the following accreditations and affiliations. Each one is earned through assessment, maintained through performance, and subject to external audit.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accreditations.map((a) => (
              <div key={a.name} className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-bold text-foreground mb-2">{a.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/accreditations" className="text-primary font-semibold hover:underline text-sm">View full accreditation details &rsaquo;</Link>
          </div>
        </div>
      </section>

      {/* How We Train */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">How We Train</p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Four Ways to Train with Sygma</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">We come to you, or you come to us. Either way, the standard is the same.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {deliveryModes.map((dm) => (
              <div key={dm.title} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{dm.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{dm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Train */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Who We Train</p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Sectors We Work With</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">Sygma trains operatives and surveyors across every sector that works with underground utilities. Our clients include Tier 1 contractors, utility network operators, rail infrastructure companies, and specialist survey firms.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Water and Wastewater', 'Gas Distribution', 'Electricity Networks', 'Telecommunications', 'Civil Engineering', 'Highways and Transport', 'Rail Infrastructure', 'Defence and MOD', 'Utility Survey Firms'].map((sector) => (
              <div key={sector} className="bg-card border border-border rounded-lg px-4 py-3 text-sm font-semibold text-foreground">{sector}</div>
            ))}
          </div>
        </div>
      </section>

      {/* We Measure Everything */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">We Measure Everything</p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Every Delegate. Every Course. Externally Verified Feedback.</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">Every delegate completes a QR-code feedback form at the end of every cable avoidance training course. Every response is captured, analysed, and reported back to the client. We do not guess how well the cable avoidance course went. We measure it. If there is a problem with how course content was delivered, or if workers need additional support with specific cable avoidance techniques, we know about it the same day.</p>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-black text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">of courses produce a delegate feedback report</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">Same Day</p>
              <p className="text-sm text-muted-foreground mt-1">feedback reports delivered to clients</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">QR Code</p>
              <p className="text-sm text-muted-foreground mt-1">digital feedback system on every course</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Reduce Cable Strikes on Your Sites?</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">Explore our cable avoidance training courses or speak with a specialist about a bespoke programme for your organisation.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-background text-primary font-bold text-sm hover:bg-background/90 transition-colors">
              See Our Courses
            </Link>
            <Link href="/contact#enquiry-form" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary-foreground text-primary font-bold text-sm hover:bg-primary-foreground/90 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Open Day CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">Free Monthly Open Day: Wigan HQ</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">Once a month, Sygma opens its Wigan training centre for a free face-to-face mentoring session. Bring your equipment. Bring your site data. Bring the questions your team cannot answer.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors">
              Book Your Open Day Place
            </Link>
            <Link href="/training/cable-location-avoidance" className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
              Browse All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}