import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from "lucide-react";
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import Image from 'next/image';

const faqs = [
            {
              q: "Do delegates need to bring their own cat and genny equipment to the training course?",
              a: "Equipment is optional for this cat manager online training course. The training can be completed without hardware, using example usage data provided by Sygma. However, delegates who bring their own eCAT4 or gCAT4 cat and genny equipment (with a data transfer lead) and a laptop with c.a.t manager online pre-installed will get more from the hands on session because they will be working with real data from their own fleet of field operators.",
            },
            {
              q: "What version of c.a.t manager online is used in the training course?",
              a: "The training course uses the current Radiodetection c.a.t manager online version, accessed through a standard web browser. We recommend delegates pre-install the latest cat manager software before attending. The download link and installation guide will be provided on booking. Managers can also access the radiodetection online support portal for additional resources.",
            },
            {
              q: "Can this cat manager training course be delivered on site at our premises?",
              a: "Yes. The in-person cat manager online training course can be delivered at your site provided a suitable meeting room and IT setup are available. This allows managers and supervisors to work with their own cat and genny equipment and real usage data from their company fleet during the session. Contact us to discuss logistics and costs.",
            },
            {
              q: "Is the cat manager online training course accredited?",
              a: "No formal accreditation is attached to cat manager online training. Delegates receive a certificate of attendance. The training course is designed as a technical skills development session for supervisors and managers rather than a qualification programme. It provides essential knowledge for using cat manager as a remote management tool to check work quality and identify training needs across your entire team of cat and genny operators.",
            },
            {
              q: "Can we combine this training course with other Sygma cat and genny training?",
              a: "Yes. Cat manager online training pairs particularly well with the EUSR Superuser genny training course, which includes cat manager data analysis as one of its core modules. Many organisations book the two sessions together as a supervisory development package for managers responsible for cat and genny competency.",
            },
            {
              q: "Is cat manager training relevant to the EUSR CAT1 or CAT2 cat and genny accreditation?",
              a: "Cat manager data download is an optional module within the EUSR CAT1 cat and genny training course. This standalone cat manager online training session provides much greater depth on the c.a.t manager online system and is aimed at managers, supervisors, and coordinators rather than operative-level delegates.",
            },
            {
              q: "What is c.a.t manager online and how does it work as a remote management tool?",
              a: "C.A.T Manager Online is a Radiodetection remote management tool that enables automatic usage monitoring of your entire team of cat and genny field operators. Usage data is transferred from cat and genny equipment to a remote server, where managers and office staff can access it through a standard web browser or web interface. The system includes a google maps interface with built in GPS to show location information, real time reports on work quality, and the ability to easily assess work quality across all field operators without needing physical access to the cat and genny devices.",
            },
            {
              q: "How does cat manager online training help reduce utility strikes?",
              a: "Cat manager online training teaches managers and supervisors to use usage data to identify poor work practices with cat and genny equipment before utility strikes and cable strikes occur on underground services. By monitoring genny usage frequency, checking whether field operators are using the signal generator correctly, and flagging where cat genny equipment sits unused, managers can intervene with targeted genny training before dangerous habits lead to strikes on buried services, buried cables, or underground utilities during excavation work.",
            },
            {
              q: "Can cat manager online be accessed on mobile devices?",
              a: "Yes. C.A.T Manager Online can be accessed through a standard web browser on any device, and Radiodetection also provides a free android and apple mobile app for managers and supervisors who need to check work quality and review usage data from cat and genny equipment while on site. The mobile access means managers can monitor field operators and review location information from anywhere, saving time on manual data collection.",
            },
          ];


export const metadata: Metadata = {
  title: 'CAT Manager Online Training | Cat and Genny Data | Sygma',
  description: 'CAT Manager online training course. Learn to use c.a.t manager online for cat and genny data, check work quality and reduce utility strikes.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/cat-manager' },
  openGraph: {
    title: 'CAT Manager Online Training | Cat and Genny Data | Sygma',
    description: 'CAT Manager online training course. Learn to use c.a.t manager online for cat and genny data, check work quality and reduce utility strikes.',
    url: 'https://sygma-solutions.com/courses/cat-manager',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-78', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function CatManager() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'CAT Manager Online Training Course', description: 'CAT Manager online training course for managers and supervisors. Learn to use c.a.t manager online as a remote management tool, transfer usage data from cat and genny equipment, check work quality across your entire team, and reduce utility strikes through structured analysis.', url: '/courses/cat-manager', credential: 'CAT Manager Certificate', duration: 'half day', mode: ['onsite', 'online'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'CAT Manager Online Training' }]) }} />

      <InnerPageHero
        eyebrow="CAT Manager Online Training"
        headline="CAT Manager Online Training Course: Make Your Cat and Genny Data Work for You"
        sub="Cat manager online training for managers and supervisors. Your cat and genny equipment records every locate. This half day course teaches you to use c.a.t manager online as a remote management tool to transfer usage data, check work quality across your entire team, identify training needs, and build the audit trail that protects your organisation from utility strikes."
        image="cat-79"
        alt="CAT Manager online training showing data management from CAT and Genny surveys"
        breadcrumbs={[
          { label: "Training", href: "/training/cable-location-avoidance" },
          { label: "CAT Manager Training" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "Half day training course (approx 4 hours)"],
            ["Format", "In-person or online training (Teams)"],
            ["Max Delegates", "8 in-person | 12 online"],
            ["Assessment", "No formal assessment (hands on practical session)"],
            ["Certificate", "Certificate of attendance"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="eyebrow mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>



      {/* 3-photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <Image src="cat-80" width={1200} height={900} alt="CAT Manager training - practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-81" width={1200} height={900} alt="CAT Manager training - hands-on assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-82" width={1200} height={900} alt="CAT Manager training - on-site delivery" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
        </div>
      </section>
      {/* About section */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">Why Cat Manager Online Training Matters</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Your Cat and Genny Usage Data Is Currently Invisible to You</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                C.A.T Manager Online is the Radiodetection remote management tool that unlocks the usage data stored inside every eCAT4 and gCAT4 device. Without cat manager online training, that data sits on the unit, invisible and unused, entirely without value. With this training course, managers and supervisors learn to transfer usage data, create real time reports and charts, export to CSV and KML, upload to the c.a.t manager online system via a standard web browser, and identify at a glance who is using the genny correctly and who is cutting corners. The cat manager online web interface enables automatic usage monitoring, allowing supervisors and office staff to check work quality across field operators without complex manual data retrieval.
              </p>
              <p>
                Every cat and genny device logs data every time it is used on site. That usage data tells managers when the equipment was used, in which modes, for how long, at what sensitivity levels, and whether the operator used the signal generator (genny) as they should have. Without cat manager online training to download and review that data, supervisors have no visibility of whether field operators are applying the genny-first methodology that prevents utility strikes and cable strikes. Poor work practices with cat and genny equipment on underground services and buried services are invisible until a strike occurs.
              </p>
              <p>
                This half day training course teaches your delegates how to install and use the cat manager software, download data from the cat and genny device, interpret what they are looking at, identify training needs for new starters and experienced field operators, and build reports that serve as an audit trail for health and safety compliance. The hands on session is deliberately interactive, saving time for your company by working through real scenarios. Delegates are encouraged to bring their own cat and genny equipment and have c.a.t manager online pre-installed so they can work through the process using real location information from their own fleet.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Course at a Glance</p>
            {[
              ["Duration", "Half day training course (approximately 4 hours)"],
              ["Delivery", "In person (Wigan HQ) or online cat manager training via Microsoft Teams"],
              ["Max Delegates", "8 in person | 12 online training"],
              ["Assessment", "No formal assessment (hands on practical session)"],
              ["Certificate", "Certificate of attendance"],
              ["Equipment", "Optional: laptop with c.a.t manager online installed, eCAT4 or gCAT4 cat and genny equipment with data transfer lead"],
              ["Availability", "Contact us to arrange a cat manager online training session"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="eyebrow text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Cat Manager Online Training Course Content</p>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">What the Cat Manager Training Course Covers</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            This training course covers both the practical operation of the c.a.t manager online system and the strategic use of the usage data it produces. Managers and supervisors work through the cat manager software using real data from cat and genny equipment throughout the session, learning essential knowledge for structured analysis of work quality across their entire team.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Installing c.a.t manager online software via a standard web browser and registering as a user or guest user on the system",
              "Downloading and transferring usage data from eCAT4 and gCAT4 cat and genny devices without complex manual data retrieval",
              "Examining and understanding raw data in CSV format for structured analysis of cat genny usage",
              "Exporting usage data to CSV and KML file formats from the cat manager system",
              "Importing data into the cat analysis tool and accessing all the scans from your entire team of field operators",
              "Uploading data to c.a.t manager online and using the remote server for automatic usage monitoring",
              "Creating real time reports and charts that summarise usage patterns, check work quality, and easily assess work quality across managers and supervisors",
              "Using the built in GPS and location tools including the google maps interface to map where locates were performed and view location information",
              "Analysing data to identify correct use of cat and genny equipment, flag poor work practices, and support operator intervention where training needs are identified",
              "Understanding what the usage data reveals about genny usage frequency and whether field operators are avoiding danger from underground services",
              "Identifying training needs and trends across your operative workforce to reduce utility strikes and cable strikes on buried services and underground utilities",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery formats */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Cat Manager Online Training Delivery Options</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">In Person or Online Training Course</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black text-lg">In Person</p>
              <p className="text-white/70 text-sm">Sygma HQ, Wigan or on-site at your premises</p>
            </div>
            <div className="p-6 space-y-3">
              {[
                ["Max Delegates", "8"],
                ["Duration", "4 hours (half day)"],
                ["Equipment", "Optional: laptop with CAT Manager pre-installed, eCAT4 or gCAT4 with data transfer lead"],
                ["Location", "Sygma Solutions HQ, Wigan, or on-site at your premises by arrangement"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <span className="eyebrow text-muted-foreground w-24 shrink-0 pt-0.5">{k}</span>
                  <span className="text-sm text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-black text-lg">Online via Microsoft Teams</p>
              <p className="text-white/70 text-sm">Delegates join from their own location</p>
            </div>
            <div className="p-6 space-y-3">
              {[
                ["Max Delegates", "12"],
                ["Duration", "Half day (approx 3.5 hours)"],
                ["Equipment", "Microsoft Teams, webcam, microphone and speakers. Optional: CAT Manager installed with data, or a CAT4 with good batteries and correct data cable"],
                ["Location", "Anywhere (delegates join from their own location)"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <span className="eyebrow text-muted-foreground w-24 shrink-0 pt-0.5">{k}</span>
                  <span className="text-sm text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-black mb-8 text-foreground">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Certificate of Attendance",
              "CAT Manager Quick Reference Guide",
              "Data Download Walkthrough Notes",
              "Report Template Examples",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-background border border-border rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-83" width={1200} height={900} alt="CAT Manager training session in classroom" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-84" width={1200} height={900} alt="Managing CAT and Genny operations training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-85" width={1200} height={900} alt="CAT Manager competency assessment demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <Image src="cat-86" width={1200} height={900} alt="CAT Manager training - live training environment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top" />
      </div>

      {/* Who should attend */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Who Should Attend?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["Underground Service Coordinators (USC)", "Managers responsible for monitoring cat and genny operative compliance on underground services. Cat manager online training turns an obligation into a practical remote management tool for your entire team."],
              ["Health and Safety Managers", "Health and safety managers who want to use cat manager data as a compliance audit tool to check work quality, identify training needs, and build a documented evidence trail for avoiding danger from utility strikes."],
              ["Site Managers", "Site managers wanting to verify that field operators are using the genny correctly and following best practice before problems occur on site with underground services and buried cables."],
              ["Supervisors", "Supervisors building regular data-download habits into their site processes as part of ongoing HSG47 compliance, allowing supervisors to monitor cat and genny usage across their company."],
              ["Data-Responsible Operatives", "Any operative who is responsible for downloading and reporting cat and genny data to managers. Cat manager online training provides essential knowledge for structured analysis of usage data."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-border p-5 bg-background">
                <h3 className="font-bold text-foreground mb-2 text-sm">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-87" width={1200} height={900} alt="Utility management training practical" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-88" width={1200} height={900} alt="CAT Manager delegates reviewing procedures" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-89" width={1200} height={900} alt="On-site CAT Manager assessment training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="eyebrow mb-3">Common Questions</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">{q}</h3>
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      
      {/* Also Consider */}
      <section className="border-t border-border py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Also Consider</h3>
          <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/osca" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">OSCA Assessment</p>
                <p className="text-xs text-muted-foreground">GPS-stamped on-site competency assessment to verify real-world cat and genny skills for your field operators.</p>
              </Link>
              <Link href="/bespoke-training" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Cat and Genny Training</p>
                <p className="text-xs text-muted-foreground">Design a tailored cat and genny training programme around your site risks, equipment limitations, and team size.</p>
              </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Book Cat Manager Online Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Cat manager online training course delivered in person at Sygma HQ in Wigan, on-site at your premises, or online via Microsoft Teams. This half day training course teaches managers and supervisors to use c.a.t manager online to check work quality and reduce utility strikes. Contact us to arrange a session and receive a quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Contact Us for Pricing
            </Link>
            <Link
              href="/courses/eus-cat1"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View EUSR CAT1 Training
            </Link>
          </div>
        </div>
      </section>
      {/* CITB Employer Network */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">CITB Approved Training</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">CITB Employer Network Support for Cat Manager Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Sygma Solutions is a CITB Approved Training Organisation and member of the CITB Employer Network. Employers registered with CITB may be able to access Employer Network funding towards cat manager online training course costs for their managers and supervisors.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ATO Status",
                description: "Sygma is CITB Approved Training Organisation status, meeting all CITB training standards and assessment requirements."
              },
              {
                title: "Employer Network Membership",
                description: "Membership of the CITB Employer Network opens access to funding schemes that support workforce development and competency."
              },
              {
                title: "Simple Claims Process",
                description: "We handle all documentation required to support CITB funding applications, making the claims process straightforward for your organisation."
              },
            ].map((card) => (
              <div key={card.title} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2 text-sm">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6">
            Contact us to discuss CITB funding eligibility and how the Employer Network may help offset training costs.
          </p>
        </div>
      </section>

      {/* Why Sygma */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Why Sygma Solutions</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Choose Sygma for Cat Manager Online Training?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Manager-Focused Training Course",
              description: "Designed specifically for managers and supervisors who manage teams using cat and genny equipment. Not generic IT training, but focused on practical management of usage data and location information through the c.a.t manager online system."
            },
            {
              title: "Specialist Cat and Genny Trainers",
              description: "Directly employed, ex-utility surveyors and ex-manufacturer specialists. TAQA qualified and with years of real-world cat and genny experience in locating underground services."
            },
            {
              title: "Genny-First Methodology",
              description: "Sygma's genny-first approach built into the cat manager online training programme. The training course teaches data analysis that supports best practice and the genny-first safety methodology for avoiding danger from utility strikes."
            },
            {
              title: "Independent and Unbiased",
              description: "Not tied to any manufacturer. We do not sell cat and genny equipment. Advice is focused purely on the management and structured analysis of cat genny data to check work quality across your company."
            },
            {
              title: "Small Class Sizes",
              description: "Maximum 8 delegates ensuring personalised attention, hands on support, and the chance to work with real cat and genny equipment and real usage data from your site."
            },
            {
              title: "We Come to You",
              description: "Cat manager online training delivered on-site anywhere in the UK. Travel included in the training course rate. Minimal disruption to your operations."
            },
          ].map((card) => (
            <div key={card.title} className="border border-border rounded-lg bg-card p-5">
              <h3 className="font-bold text-foreground mb-2 text-sm">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Courses */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-accent">Related Courses</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "EUSR CAT1 Cat and Genny Training", desc: "EUSR-registered cat and genny training course for field operators. Includes an optional cat manager data download module.", to: "/courses/eus-cat1" },
              { label: "EUSR Superuser Cat and Genny Training", desc: "Advanced genny training course for supervisors and competency managers overseeing cat and genny operatives. Includes cat manager data analysis.", to: "/courses/eus-superuser" },
              { label: "Cable Avoidance Training Course", desc: "Practical cat and genny training course for field operators who need competency on cable avoidance tools and signal generators.", to: "/courses/cable-avoidance-training" },
            ].map((item) => (
              <Link key={item.to} href={item.to} className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

