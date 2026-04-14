import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import Image from 'next/image';

const faqs = [
            {
              q: "What is CAT and Genny training?",
              a: "CAT and Genny training teaches operatives how to use a cable locator (CAT) and signal generator (Genny) to detect buried utilities before excavation. It is the core cable avoidance training required to meet HSG47 obligations and ensure operatives are competent before breaking ground near underground services. The course covers electromagnetic theory, all four locating modes (Power, Radio, Genny and Avoidance), signal interpretation, depth estimation and practical on-site assessment. Sygma delivers CAT and Genny training with a Genny-First methodology, meaning operatives learn to connect the signal generator before relying on passive detection modes. Successful delegates can be assessed for an EUSR/EUSR CAT1 accredited card, a ProQual CAT1 certificate or a Sygma in-house certification depending on the route chosen.",
            },
            {
              q: "How much does a CAT and Genny course cost?",
              a: "CAT and Genny training is available as an in-house day rate for up to 8 delegates, delivered at your site. The exact cost depends on the format you choose (in-house certified, EUSR CAT1 accredited or ProQual CAT1 accredited) and whether you need a one-day or two-day programme. Travel is included in the day rate with no hidden extras. We also run regular open courses at venues across the UK, priced per person -- get in touch via our live chat to ask about upcoming dates. Employers who pay the CITB levy may be eligible for training funding support through the CITB Employer Network. Contact Sygma for a tailored quote.",
            },
            {
              q: "Do you need to be trained to use a CAT scanner?",
              a: "Yes. HSG47, the Health and Safety Executive's guidance on avoiding danger from underground services, requires that anyone using cable and pipe locating equipment must be trained and competent. Using a CAT locator without proper cable avoidance training increases the risk of striking buried services, which can result in cable strikes, gas leaks and serious injury. Most principal contractors and utility companies require operatives to hold a recognised qualification such as EUSR CAT1 or ProQual CAT1 before being allowed to use locating equipment on site.",
            },
            {
              q: "How long is CAT and Genny training valid for?",
              a: "It depends on the qualification route. The EUSR CAT1 card is valid for 3 years from the date of issue. ProQual CAT1 certificates are also valid for 3 years. The Sygma in-house certificate does not have a fixed expiry but most employers and frameworks require refresher training every 3 years to maintain competency. Sygma recommends booking renewal training in the 3 months before expiry to avoid any lapse in certification.",
            },
            {
              q: "Is EUSR CAT1 the same as EUS CAT1?",
              a: "They are the same qualification. EUSR stands for Energy and Utility Skills, the organisation that sets the standards for utility training including the CAT1 Locate Utility Services course -- commonly known as cat and genny training. EUSR stands for Energy and Utility Skills Register, the database where your qualification card is recorded and verified after completing the course. The industry used the name EUSR CAT1 for years, but the organisation now brands itself as EUSR. Both terms refer to the same one-day cable avoidance training course covering CAT and Genny operation, and the same EUSR-registered card. When searching for training you may see it listed as EUSR CAT1, EUSR CAT1, EUSR CAT1 Locate Utility Services, EUSR Category 1 or EUSR Category 1 -- all refer to the same accredited standard.",
            },
            {
              q: "What equipment do our operatives need to bring?",
              a: "Each operative should bring the locator and signal generator they use on site. Sygma provide Radiodetection CAT4 and Genny4 as backup equipment to run a standard course if delegates do not have their own. Any manufacturer's locator is suitable, including Vivax-Metrotech vLoc, Leica DSX, and Radiodetection RD8200/RD8100. If sharing equipment, a minimum ratio of one locator per three delegates is recommended.",
            },
            {
              q: "Can the course be tailored to our specific sites and risk profile?",
              a: "Yes. Bespoke elements can include your company's specific permit to dig, your strike history and lessons learned, your site-specific hazards and your documentation. The QTS surface laid cables programme is an example of how the course can be customised around a client's exact needs.",
            },
            {
              q: "What is the difference between CAT and Genny training and EUSR CAT1?",
              a: "The EUSR CAT1 is an EUSR-registered qualification with fixed assessment criteria. The Genny & CAT course is a bespoke in-house training programme with no fixed awarding body, giving Sygma greater flexibility to cover advanced topics and tailor content to your organisation. Many clients use the Genny & CAT course for bulk refresher training and the EUSR CAT1 for formal qualification.",
            },
            {
              q: "Is the course suitable for delegates with no previous locating experience?",
              a: "Yes. The course is designed to be accessible to delegates at any level. For delegates who are completely new to utility locating, the two-day format is recommended to allow sufficient time on the practical site.",
            },
            {
              q: "Can we combine this course with EUSR CAT1 or CAT2?",
              a: "Yes. Sygma offers combined course formats that incorporate EUSR CAT1, CAT2 Safe Dig and Genny & CAT training content in a single programme. Contact us to discuss combined booking options.",
            },
            {
              q: "What qualifications do the Sygma trainers hold?",
              a: "All Sygma trainers are specialist utility location professionals with real-world field experience. They are not generalist H&S trainers. Many hold CICES membership, PAS128 field experience and backgrounds in managing large-scale infrastructure projects. You are learning from people who have done the job.",
            },
          ];


export const metadata: Metadata = {
  title: 'CAT and Genny Training Course | EUSR | Sygma Solutions',
  description: 'Cat and genny training courses from Sygma Solutions. EUSR and ProQual-accredited cable avoidance training delivered nationwide. Specialist utility avoidance trainers.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/genny-cat-training' },
  openGraph: {
    title: 'CAT and Genny Training Course | EUSR | Sygma Solutions',
    description: 'Cat and genny training courses from Sygma Solutions. EUSR and ProQual-accredited cable avoidance training delivered nationwide. Specialist utility avoidance trainers.',
    url: 'https://sygma-solutions.com/courses/genny-cat-training',
    siteName: 'Sygma Solutions',
    images: [{ url: 'https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/cat-47', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function GennyCatTraining() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'CAT and Genny Training', description: 'Cat and genny training courses from Sygma Solutions. EUSR and ProQual-accredited cable avoidance training delivered nationwide by specialist utility avoidance trainers.', url: '/courses/genny-cat-training', duration: '1-2 days', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: 'Training', to: '/training/cable-location-avoidance' }, { label: 'CAT and Genny Training' }]) }} />

      <InnerPageHero
        eyebrow="Utility Avoidance"
        headline="CAT and Genny Training: The Course That Changes How Your Team Works on Site"
        sub="Not just Genny & CAT equipment operation. The scientific understanding and field-verified habits that eliminate service strikes."
        image="cat-47"
        alt="Genny and CAT training course showing hands-on cable detection practice"
        breadcrumbs={[
          { label: "Training", href: "/training/cable-location-avoidance" },
          { label: "CAT and Genny Training" },
        ]}
      />

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

      {/* Who This Course Is For */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">Who Is This Course For</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">Designed For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Complete Beginners",
                desc: "No prior experience with Genny or CAT equipment needed. This safety training is designed to take someone from zero to competent.",
              },
              {
                title: "Site Operatives and Groundworkers",
                desc: "Anyone who needs to locate underground services and underground utilities before excavation. If your team breaks ground near buried infrastructure, they need this safety training.",
              },
              {
                title: "Supervisors Wanting Awareness",
                desc: "Those who need to understand the equipment their teams are using.",
              },
              {
                title: "Organisations Introducing Genny-First",
                desc: "Companies across the construction industry transitioning to full CAT and Genny training use across their workforce, embedding the Genny-First approach.",
              },
            ].map((p, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Format", "Choice of in-house certified or accredited"],
            ["Duration", "1-day or 2-day options"],
            ["Max Delegates", "8"],
            ["Assessment", "Written 70% + practical"],
            ["Delivery", "At your site, nationwide"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="eyebrow mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">Why This Course Exists</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">The Problem with Standard CAT and Genny Training</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most standard CAT and Genny training courses teach operatives to press the on button and walk over the area. They know what the beep means. They do not know why the signal behaves the way it does in different soil conditions, what happens to accuracy near a joint, or why their passive Power mode reading is not telling them what they think it is.
              </p>
              <p>
                The Sygma CAT and Genny training course was built to fix that. You will notice that Sygma says "Genny & CAT" rather than the industry standard "CAT and Genny". That is deliberate. The rest of the industry puts the locator first. We put the signal generator first, because that is the methodology change that reduces service strikes. Start with the Genny, exhaust every connection opportunity, verify what is in the ground before you rely on passive modes. That single change in workflow order is the difference between an operative who finds what is there and one who only confirms what they expected.
              </p>
              <p>
                This course was designed after years of post-strike investigations, in which Sygma trainers repeatedly found the same pattern: operatives who were technically trained, certificated and equipped but who had never been taught to start a survey with the Genny, to null out nearby services, or to distrust a signal that seems clear. We address the confirmation biases and pressure shortcuts that cause strikes. We build a Genny-First mindset that becomes automatic. And we prove everything on site, in your operatives' own working environment.
              </p>
              <p>
                The result is a cable avoidance training course with a proven track record of reducing underground utility strikes for organisations across the UK construction, utilities and infrastructure sectors. When your operatives understand how to locate underground utilities and underground services properly, the safety improvements follow.
              </p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="eyebrow mb-4">Course at a Glance</p>
            {[
              ["Format", "Choice of: 1-day in-house certified, 1-day EUSR CAT1 accredited, 1-day ProQual CAT1 accredited, 2-day in-house certified, 2-day ProQual CAT1 Plus accredited, 2-day split certified (3 months apart)"],
              ["Location", "Delivered at your site nationwide | Wigan HQ available as alternative"],
              ["Max Delegates", "8 (all formats)"],
              ["Assessment", "Written MCQ (70% pass) + practical assessment on site"],
              ["Certificate", "Certificate of completion with written and practical results"],
              ["Equipment", "Each operative should use their own site equipment. Sygma provide Radiodetection CAT4 and Genny4 as backup. Any manufacturer's locator and signal generator is suitable."],
              ["CITB", "CITB Approved Training Organisation"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2 border-b border-border last:border-0">
                <span className="eyebrow text-muted-foreground w-28 shrink-0">{k}</span>
                <span className="text-sm text-foreground text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genny & CAT Terminology Callout */}
      <section className="bg-accent/5 border-y border-accent/20 py-10">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow mb-3">Why We Say It Differently</p>
          <h2 className="text-xl font-black mb-4 text-foreground">Genny & CAT, Not CAT & Genny</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">The industry calls it "CAT and Genny training". We call it Genny & CAT. The name reflects the methodology: start with the signal generator, apply a known signal, trace it, verify it. Only then move to passive modes. Every course Sygma delivers follows this order because 21 years of post-strike investigation data tells us the same thing: the majority of preventable utility strikes happen when operatives skip the Genny and rely on passive readings alone.</p>
          <p className="text-muted-foreground leading-relaxed">This is not a marketing exercise. The ProQual CAT1 Plus specification (PP3.3) now requires candidates to "conduct a survey using the transmitter first and exhaust all transmitter connection opportunities before moving to induction." That is the Genny-First methodology formalised into externally audited qualification criteria. Sygma helped write that standard. No other training provider or awarding body has embedded this principle into their assessment criteria.</p>
        </div>
      </section>

      {/* Why Cable Avoidance Tool Training Matters */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">The Safety Case</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Why Cable Avoidance Tool Training Is Not Optional</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every year across the UK construction industry, thousands of underground services are struck during excavation work. Cable strikes on buried electricity cables can cause fatal arc flash injuries, while hitting gas mains or high-pressure water pipes puts entire construction sites at risk. The Health and Safety Executive's guidance document HSG47 is clear: anyone who may be required to locate underground utilities before or during excavation work must be properly trained and assessed as competent. Cable avoidance tool training is not a nice to have. It is a legal and practical requirement for safe working on any construction site where underground services are present.
            </p>
            <p>
              The consequences of inadequate cat and genny training go beyond the immediate safety risk. HSE prosecutions for cable strikes and utility damage carry significant fines, and organisations have faced enforcement action where operatives were found to be untrained or using equipment without understanding its limitations. Costly disruptions to street works and excavation programmes follow every strike, and the reputational damage to contractors can affect future tender opportunities. Without proper safety training, operatives rely on passive detection modes alone, which miss the majority of buried cables, fibre optic lines, plastic gas pipes and any metallic underground service not carrying a detectable signal. The result is predictable: cable strikes, service damage and project delays that were entirely preventable with the right cat and genny training.
            </p>
            <p>
              Proper cat and genny training, whether delivered as an EUSR CAT1 accredited course or a certified in-house programme, teaches operatives to locate underground utilities systematically. That means starting with buried service plans, progressing through visual site checks, and using the cable avoidance tool in all four detection modes with the signal generator connected first. This is not just about knowing which button to press. It is about understanding why passive modes alone are not enough, why locating underground services requires a Genny-First approach, and why health and safety guidelines exist to protect everyone on site and the public beyond the hoarding. Construction sites that invest in proper cable avoidance training and safety training for their workforce see measurable reductions in underground utility strikes, fewer costly disruptions, and a team that understands the obligations that come with working around buried cables and underground utilities.
            </p>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-12 max-w-5xl">
        <div className="grid grid-cols-3 gap-4">
          <Image src="cat-43" width={1200} height={800} alt="Genny & CAT training outdoors with Sygma" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="cat-36" width={1200} height={800} alt="Delegates using locating equipment on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
          <Image src="dig-09" width={1200} height={800} alt="Practical utility location and excavation training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover object-top aspect-[4/3]" />
        </div>
      </section>

      {/* Theory content */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">Course Content</p>
          <h2 className="text-2xl md:text-3xl font-black mb-10 text-foreground">CAT and Genny Course Content: Cable Avoidance Training on Your Ground</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Theory */}
            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">Classroom: Theory</p>
                <p className="text-white/70 text-sm">The full technical and regulatory context</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {[
                    "Reasons for using Genny & CAT: HSG47 and the legal, financial and human consequences of service strikes",
                    "Legislation and guidance: HSG47, relevant national legislation, client and designer responsibilities",
                    "Overview of utility networks: cable and pipe types, materials and connectivity",
                    "Buried service plans (STATS): how to interpret plans including inaccuracies and limitations",
                    "Calibration requirements: correct storage, functional checks and pre-use inspection",
                    "Electromagnetic theory: how a cable locator works, limitations, and myth-busting",
                    "Controls and operation: correct use of locator and signal generator in all four modes (Power, Radio, Genny and Avoidance)",
                    "Signal interpretation: locating joints, changes of direction and depth",
                    "Signal distortion and its effects on location accuracy",
                    "Transmitter applications: dual frequency, capacitance technique, earth positioning, blind induction sweeps and nulling out",
                    "Depth estimation: when and how to take depth readings, testing the results",
                    "Data logging (optional): how to use CAT Manager software to collect and analyse data",
                    "PAS128 survey levels: understanding different survey types",
                    "Permits and paperwork: permits to dig, safe systems of work",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Practical */}
            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="bg-primary px-6 py-4">
                <p className="text-white font-black text-lg">Site-Based: Practical</p>
                <p className="text-white/70 text-sm">Every principle proved on real buried utilities</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  The practical session takes delegates outside onto a real site to prove every safety principle taught in the classroom. Sygma uses your own site wherever possible, which means operatives are locating underground utilities on the same ground and the same utility types they will encounter daily.
                </p>
                <ul className="space-y-2">
                  {[
                    "Reading and using service plans to plan the survey before any equipment is switched on",
                    "Site visual checks: identifying above-ground indicators of buried services",
                    "Using the Genny to apply a signal via direct connection, capacitance and induction",
                    "Training in all four modes with strong emphasis on leading with the Genny at every stage",
                    "Locating problem services: street lighting, LV services, small comms cables",
                    "Locating joints, T-connections and changes of direction",
                    "Effect of Genny earth positioning: operatives learn why moving the earth changes the locate",
                    "Blind induction sweeps and nulling out nearby services",
                    "Full utility survey methodology: starting from plans and working systematically across the site",
                    "Individual practical assessment: each operative assessed against a documented standard",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-accent font-black shrink-0 mt-0.5">&#8250;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <Image src="cat-51" width={1200} height={800} alt="Genny & CAT training on a live utility site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover" />
      </div>

      {/* What You Get */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">What You Get</p>
          <h2 className="text-2xl font-black mb-8 text-foreground">CAT and Genny Certificate and Qualification Routes</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            On successful completion of your cat and genny training, the certification you receive depends on the course format chosen. All routes include written and practical assessment, and all are delivered to the same Sygma standard. The difference is in the awarding body and the type of ID card or certificate issued.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "EUSR CAT1 Accredited",
                desc: "The industry-standard EUSR CAT1 qualification. On successful completion, your cat and genny certificate is registered on the EUSR database and you receive an EUSR ID card valid for 3 years. Widely recognised across UK construction sites and required by most principal contractors and utility companies."
              },
              {
                title: "ProQual CAT1 Accredited",
                desc: "An externally accredited cat and genny qualification through ProQual, with all four EML modes assessed in the practical element. You receive a ProQual CAT1 certificate valid for 3 years. The ProQual CAT1 Plus two-day route includes the Genny-First methodology in its formal assessment criteria."
              },
              {
                title: "NPORS CAT Assessment",
                desc: "For organisations that use the NPORS card scheme, Sygma can deliver cat and genny training assessed to NPORS CAT standards. The NPORS CAT card is accepted on many construction sites as an alternative to EUSR CAT1, particularly where NPORS CAT is the primary competence card scheme in use."
              },
              {
                title: "Sygma In-House Certified",
                desc: "Sygma's own cat and genny certificate of completion, covering the same comprehensive content as accredited routes but without awarding body fees. Includes written and practical assessment results, a detailed skills record, and personalised pathway guidance on which qualification to progress to next."
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg bg-card p-5">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-25" width={1200} height={800} alt="Genny4 signal generator practical training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-31" width={1200} height={800} alt="Genny & CAT training assessment on buried services" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-42" width={1200} height={800} alt="Hands-on Genny signal application demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Course formats */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow mb-3">Formats Available</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Course Formats</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="text-left px-4 py-3 font-bold text-foreground">Format</th>
                <th className="text-left px-4 py-3 font-bold text-foreground">Duration</th>
                <th className="text-left px-4 py-3 font-bold text-foreground">Max Delegates</th>
                <th className="text-left px-4 py-3 font-bold text-foreground">Assessment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["One-day in-house (certified)", "1 day", "8", "Written + practical"],
                ["One-day EUSR CAT1 (accredited)", "1 day", "8", "Written + practical"],
                ["One-day ProQual CAT1 (accredited)", "1 day", "8", "Written + practical"],
                ["Two-day in-house (certified)", "2 days", "8", "Written + practical"],
                ["Two-day ProQual CAT1 Plus (accredited)", "2 days", "8", "Written + practical"],
                ["Two-day split - 3 months apart (certified)", "Day 1 + Day 2", "8", "Day 1 training, Day 2 assessment"],
              ].map(([format, dur, max, assess], i) => (
                <tr key={format} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3 font-semibold text-foreground">{format}</td>
                  <td className="px-4 py-3 text-muted-foreground">{dur}</td>
                  <td className="px-4 py-3 text-muted-foreground">{max}</td>
                  <td className="px-4 py-3 text-muted-foreground">{assess}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          The two-day split format is particularly valuable where operatives benefit from applying classroom learning in real working conditions before returning for their assessed practical day. The gap of approximately three months allows behaviours to bed in and any gaps to be identified and corrected.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          All courses delivered by a CITB Approved Training Organisation.
        </p>
      </section>

      {/* Site requirements */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="eyebrow mb-3">Site Requirements</p>
              <h2 className="text-xl font-black mb-6 text-foreground">What You Need to Provide</h2>
              <div className="space-y-3">
                {[
                  ["STATS Plans", "Buried service drawings appropriate to the practical site. If plans are not available, Sygma can supply plans at an additional cost agreed prior to booking."],
                  ["Equipment", "Each operative should use the equipment they work with on site. Sygma provide Radiodetection CAT4 and Genny4 as backup. Any manufacturer's equipment is suitable."],
                  ["Meeting Room", "Suitable for up to 8 people with projector or screen and sufficient space for written assessment."],
                  ["Practical Site", "A suitable site with buried metallic utilities close to the meeting room. A single power cable to a cabin is not sufficient."],
                  ["PPE", "Delegates must have appropriate PPE in compliance with national and company health and safety requirements."],
                  ["Parking", "Sygma trainers arrive in transit-sized vehicles. Advise of any height barriers or access restrictions in advance."],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3 items-start">
                    <span className="text-accent font-black shrink-0 mt-1">&#8250;</span>
                    <div>
                      <span className="font-semibold text-foreground text-sm">{k}: </span>
                      <span className="text-muted-foreground text-sm">{v}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Sygma's dedicated training centre at Wigan is available as an alternative venue at no extra cost, with full welfare and catering facilities.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">CITB Funding</p>
              <h3 className="text-xl font-black mb-4 text-foreground">CITB Approved Training Organisation</h3>
              <div className="bg-background rounded-xl border border-border p-5">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Sygma Solutions is a CITB Approved Training Organisation. Employers who pay the CITB levy may still be able to access training funding support through the CITB Employer Network.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Contact your CITB adviser for current eligibility and funding options. Sygma is a CITB Approved Training Organisation and provides all required documentation to support funding applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-34" width={1200} height={800} alt="CAT4 locator training practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-32" width={1200} height={800} alt="Delegates practising utility location techniques" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="cat-37" width={1200} height={800} alt="On-site Genny & CAT training assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Related Reading */}
      <section className="bg-muted/20 border-y border-border py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h2 className="text-xl font-black mb-6 text-foreground">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge-hub/genny-first-methodology" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">Genny-First Methodology</h3>
              <p className="text-sm text-muted-foreground">Why Sygma teaches Genny-first and how it increases buried utility detection rates.</p>
            </Link>
            <Link href="/knowledge-hub/hsg47-explained" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">HSG47 Explained</h3>
              <p className="text-sm text-muted-foreground">The HSE guidance that underpins all cable avoidance work. What it says and why it matters.</p>
            </Link>
            <Link href="/knowledge-hub/strike-prevention-site-managers" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">Strike Prevention for Site Managers</h3>
              <p className="text-sm text-muted-foreground">Practical guidance for site managers on reducing utility strike risk on construction projects.</p>
            </Link>
            <Link href="/knowledge-hub/npors-vs-eusr" className="rounded-lg border border-border bg-background p-5 hover:shadow-md transition-shadow block">
              <h3 className="font-bold text-foreground mb-2 text-sm">NPORS vs EUSR Qualification Routes</h3>
              <p className="text-sm text-muted-foreground">How the two main accreditation schemes compare for cable avoidance training.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
        <p className="eyebrow mb-3">Common Questions</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Frequently Asked Questions About CAT and Genny Training</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">{q}</h3>
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HSG47 Compliance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Regulation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">HSG47 Compliance</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">The course addresses all key elements of HSG47 health and safety guidance on preventing strikes on underground services. Every element of this safety training maps back to a specific HSG47 requirement.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Competence</p>
              <h3 className="text-base font-bold text-foreground mb-2">Trained and Competent Operatives</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Formal safety assessment ensures operatives meet competence standards for cable avoidance work.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Process</p>
              <h3 className="text-base font-bold text-foreground mb-2">Safe System of Work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Classroom and practical safety training covers systematic approach to underground service location.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Planning</p>
              <h3 className="text-base font-bold text-foreground mb-2">Service Plan Checks</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Reading, interpreting and cross-checking buried service drawings before work begins.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Equipment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Correct Use of Equipment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Training in all four locating modes (Power, Radio, Genny and Avoidance) with emphasis on correct operation and limitations.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Verification</p>
              <h3 className="text-base font-bold text-foreground mb-2">Visual Inspection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Site visual checks for above-ground indicators of buried services before and during work.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Records</p>
              <h3 className="text-base font-bold text-foreground mb-2">Evidenced Training Records</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Written and practical assessment results provided for compliance documentation and audit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sygma for Genny & CAT Training */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Why Choose Sygma</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Sygma for Genny & CAT Training</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">We go beyond qualification specifications. Our safety methodology is built on years of strike investigations, real-world field experience and proven safety results.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Content</p>
              <h3 className="text-base font-bold text-foreground mb-2">Content That Exceeds Industry Standards</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Whether you choose in-house, EUSR or ProQual, Sygma content goes above and beyond qualification specifications. This comprehensive approach is something you will only find in a Sygma course.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Methodology</p>
              <h3 className="text-base font-bold text-foreground mb-2">Genny-First Methodology</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">70-80% increase in Genny usage among Sygma-trained operatives. Measured through locator data downloads.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">People</p>
              <h3 className="text-base font-bold text-foreground mb-2">Specialist Trainers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Directly employed. Ex-utility surveyors or ex-equipment manufacturer specialists. TAQA qualified.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">Real Practical Assessment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Structured on-site practical in real conditions. The goal is competent operatives, not just certificates.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Approach</p>
              <h3 className="text-base font-bold text-foreground mb-2">Independent</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">No surveys, no equipment, no manufacturer relationships. Unbiased training.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Delivery</p>
              <h3 className="text-base font-bold text-foreground mb-2">We Come to You</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Delivered at your site. Travel included. No hidden extras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Further Training</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Related Courses</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Sygma offers a range of utility avoidance and cable location training programmes to suit different needs and regulatory requirements.</p>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Qualification</p>
              <h3 className="text-base font-bold text-foreground mb-2">EUSR CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">EUSR-registered qualification for operatives who need a formal card.</p>
              <Link href="/courses/eus-cat1" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                View Course &rarr;
              </Link>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Assessment</p>
              <h3 className="text-base font-bold text-foreground mb-2">ProQual CAT1</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Accredited qualification with all four EML modes in the practical assessment.</p>
              <Link href="/courses/proqualcat1-training" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                View Course &rarr;
              </Link>
            </div>
            <div className="border border-border rounded-lg bg-card p-5">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase mb-2">Vivax-Metrotech</p>
              <h3 className="text-base font-bold text-foreground mb-2">vScan & Tx Training</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">The Vivax-Metrotech vScan and transmitter equivalent of this course, using the same Sygma methodology.</p>
              <Link href="/courses/vscan-and-transmitter-training" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                View Course &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Also Consider */}
      <section className="border-t border-border py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">Also Consider</h3>
          <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/osca" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">OSCA Assessment</p>
                <p className="text-xs text-muted-foreground">GPS-stamped on-site competency assessment to verify real-world skills.</p>
              </Link>
              <Link href="/bespoke-training" className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">Bespoke Training</p>
                <p className="text-xs text-muted-foreground">Design a tailored programme around your site risks, equipment, and team size.</p>
              </Link>
          </div>
        </div>
      </section>

      {/* See It In Action */}
      <section className="bg-muted/20 border-y border-border py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow mb-3">See It In Action</p>
          <h2 className="text-2xl font-black mb-4 text-foreground">The Genny First Approach on Site</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Watch Pete Ashcroft walk through the Genny First methodology in practice, why the signal generator goes on before passive modes, how to apply it in different site conditions, and what the data shows about miss rates when it is left until last. This is the approach at the core of every Sygma CAT and Genny training course.
          </p>
          <div className="rounded-xl overflow-hidden border border-border mb-6 aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/IgxGksU3WQ4"
              title="CAT and Genny Training: The Genny First Approach Explained"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <Link
            href="/knowledge-hub/genny-first-in-practice-video"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Read the full breakdown of the Genny First approach &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Book Your CAT and Genny Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Site-based delivery available nationwide, bespoke to your equipment, your plans and your risk profile. Contact us for a tailored quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Request Site-Based Delivery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
