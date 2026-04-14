'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function UtilityMappingBristolClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: 'Do you deliver utility mapping training near Bristol?',
      answer: 'Yes. Sygma Solutions serves Bristol and the South West from our partner training venue at The Survey School in Worcester, which is approximately 60 miles from Bristol city centre. For awareness and in-house courses we can also deliver at your Bristol premises. We offer flexible deployment to suit your project requirements.',
    },
    {
      question: 'What is the difference between GPR Module 1 and the PAS128 Awareness course?',
      answer: 'GPR Module 1 is for utility surveyors and field operatives who will be using ground penetrating radar to detect underground utilities in the field. PAS128 Awareness is for people who commission utility surveys (site managers, project managers and procurement teams who need to understand the PAS128 standard and how to specify surveys correctly). They serve different roles and can be delivered independently or as part of a combined programme.',
    },
    {
      question: 'Can the ProQual Level 3 Diploma be delivered at our Bristol site?',
      answer: 'The ProQual Level 3 Diploma and the 5-Day Surveyor Programme require specialist equipment and a controlled assessment environment. These courses are delivered at our partner venue at The Survey School in Worcester, or our Wigan HQ, not on-site. For South West clients, Worcester is the closer option. Contact us to discuss logistics and accommodation.',
    },
    {
      question: 'Is CITB funding available for GPR or utility mapping courses?',
      answer: 'CITB-registered businesses may be able to access funding through the CITB Employer Network model for eligible courses. Sygma is a CITB Approved Training Organisation. This can provide cost savings on training investment. Speak to your CITB Employer Network adviser, or contact Sygma for guidance on which courses qualify.',
    },
    {
      question: 'What underground utilities can GPR surveys detect?',
      answer: 'GPR surveys can detect a wide range of underground utilities and underground features including water pipes, gas lines, electric cables, drainage systems, telecommunication infrastructure and underground storage tanks. GPR is particularly useful for detecting non-metallic buried services such as plastic pipes and concrete structures that electromagnetic locating alone cannot find.',
    },
    {
      question: 'What is the difference between GPR and electromagnetic locating?',
      answer: 'Ground penetrating radar (GPR) emits radio waves into the ground and analyses the reflected signals to map underground utilities including non-metallic services. Electromagnetic locating uses passive detection and active signal tracing to identify conductive utilities such as metal pipes and electric cables. Combining both methods in a single utility survey gives utility surveyors maximum accuracy and the most reliable data. Our training covers both technologies.',
    },
    {
      question: 'What does a PAS128 compliant utility survey involve?',
      answer: 'A PAS128 compliant utility survey typically starts with a desktop study that compiles existing infrastructure records from utility providers. This is followed by a physical survey using ground penetrating radar and electromagnetic locating to map underground utilities on site. The survey process produces detailed mapping at the Quality Level specified in the project scope.',
    },
    {
      question: 'What are the risks of not surveying before excavation projects?',
      answer: 'Striking buried services during excavation projects can cause project delays, costly repairs, environmental impact and potential hazards to workers. A poor quality survey or no survey at all can lead to accidental damage to underground infrastructure including gas lines, electric cables and water pipes. Accurate utility mapping through a thorough utility survey provides the accurate information needed for safe and smooth project execution.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden bg-foreground">
        <Image
          src="Utility-Mapping-04"
          alt="Utility mapping training in Bristol"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute inset-0 border-l-4 border-accent" />
        <div className="relative flex flex-col justify-end p-8 md:p-12 h-full">
          <div className="eyebrow text-accent mb-2">Utility Mapping</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-primary-foreground mb-3">
            Utility Mapping Training Bristol
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">
            Sygma Solutions delivers GPR training, PAS128 awareness and utility mapping qualifications to teams in Bristol and across the South West. Our courses teach delegates how to accurately map underground utilities using ground penetrating radar and electromagnetic locating equipment. With a partner training venue at The Survey School in Worcester and 21 years delivering specialist utility courses nationwide, we serve the South West market with both venue-based and on-site delivery options.
          </p>
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

      {/* Courses Available */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">What We Deliver</p>
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Courses Available for Bristol and South West Teams</h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
          Sygma delivers the following utility mapping and GPR survey courses for teams in Bristol, Bath, Exeter, Plymouth, Swindon and across the South West. Each course covers the practical training and data collection techniques that utility surveyors need to accurately map underground utilities, buried services and underground infrastructure. Awareness and in-house courses can be delivered at your premises. Qualification-level courses are typically delivered at our partner venue at The Survey School in Worcester.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-5 py-3 font-bold">Course</th>
                <th className="text-left px-5 py-3 font-bold hidden md:table-cell">Duration</th>
                <th className="text-left px-5 py-3 font-bold">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: 'GPR Module 1 (Ground Penetrating Radar Introduction)', href: '/courses/gpr-training', duration: '1 day', delivery: 'At your premises or Worcester venue' },
                { course: 'GPR Module 2 (Post Processing and Data Interpretation)', href: '/courses/gpr-training', duration: '1 day', delivery: 'At your premises or Worcester venue' },
                { course: 'PAS128 Awareness (For Commissioners of Utility Surveys)', href: '/courses/pas128-awareness', duration: '1 day', delivery: 'At your premises or Worcester venue' },
                { course: 'ProQual Level 3 Diploma in Utility Mapping and Surveying', href: '/courses/level-3-certificate', duration: '2-day intensive or 5-day programme', delivery: 'Worcester venue or Wigan HQ (venue attendance required)' },
                { course: '5-Day Surveyor Programme (Level 3 Fast-Track)', href: '/courses/5-day-pas128-surveyor', duration: '5 days', delivery: 'Worcester venue or Wigan HQ' },
              ].map((row, i) => (
                <tr key={row.course} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                  <td className="px-5 py-3 font-semibold text-foreground"><Link href={row.href} className="text-primary hover:underline">{row.course}</Link></td>
                  <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{row.duration}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96 px-4">
        <div className="overflow-hidden rounded-lg"><Image src="MALA-GPR-19" width={1200} height={800} alt="Ground penetrating radar survey training Bristol" sizes="33vw" className="h-full w-full object-cover object-top" /></div>
        <div className="overflow-hidden rounded-lg"><Image src="Utility-Mapping-05" width={1200} height={800} alt="Utility mapping equipment demonstration South West" sizes="33vw" className="h-full w-full object-cover object-top" /></div>
        <div className="overflow-hidden rounded-lg"><Image src="MALA-GPR-22" width={1200} height={800} alt="GPR data collection practical exercise" sizes="33vw" className="h-full w-full object-cover object-top" /></div>
      </div>

      {/* Why It Matters */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Why It Matters</p>
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Why Utility Mapping Training Matters for Construction and Excavation Projects</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
          <p>There are over 70,000 utility strikes per year in the UK. Every one of those strikes represents a failure in the survey process, a gap in knowledge, or a team that did not have the practical training to detect and accurately map underground utilities before breaking ground. Accidental damage to buried services causes project delays, costly repairs, service disruptions and potential hazards to workers and the public.</p>
          <p>Accurate utility mapping is essential when planning construction, infrastructure maintenance or urban development activities. A thorough utility survey identifies the exact location and depth of underground features including water pipes, gas lines, electric cables, drainage systems and telecommunication infrastructure. Without reliable data from trained operators using the latest technology, excavation projects carry unacceptable levels of risk.</p>
          <p>Utility mapping training gives your team the skills to carry out GPR surveys, electromagnetic locating and desktop study analysis to the standard required by clients, local authorities and principal contractors. The risk assessment benefits alone make training one of the most cost effective investments a contractor or utility surveyor can make.</p>
        </div>
      </section>

      {/* Who Is This Training For */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow text-primary mb-3">Audience</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Who Is This Training For?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">Utility mapping and GPR training serves two distinct audiences in the South West. Whether your team needs to carry out utility surveys in the field or commission comprehensive utility survey programmes, Sygma delivers to both.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-3">Field Operatives and Surveyors</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Utility surveyors and field operatives who carry out GPR surveys, EML surveys or combined utility mapping programmes to detect underground utilities and buried utilities on site. The GPR Modules and Level 3 Diploma are for this group. The qualification pathway leads from GPR Module 1 through to Level 3 and beyond, building the accurate data collection and data processing skills that utility surveyors need.</p>
            </div>
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-3">Site Managers, Project Managers and Procurement Teams</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The PAS128 Awareness course is designed for people who commission utility surveys but do not carry them out. Understanding the PAS128 Quality Levels, what a comprehensive utility survey actually contains, and how to specify project requirements correctly is increasingly required at client and principal contractor level.</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mt-4">If your team includes both, Sygma can deliver a combined programme. <Link href="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> to discuss.</p>
        </div>
      </section>

      {/* How GPR and EML Work */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Technology</p>
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">How Ground Penetrating Radar and Electromagnetic Locating Work</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
          <p>Ground penetrating radar (GPR) is a non-destructive survey method that emits high-frequency radio waves into the ground and analyses the reflected signals to detect subsurface objects and anomalies. GPR surveys can detect both metallic and non-metallic underground services, including plastic water pipes, drainage systems, underground storage tanks and underground structures that electromagnetic locating alone cannot find. GPR provides high-resolution imaging of underground features, making it essential for detailed mapping and accurate information about what lies beneath a site.</p>
          <p>Electromagnetic locating (EML) uses passive detection and active signal tracing to identify conductive utilities such as metal pipes, electric cables and telecommunication infrastructure. Combining GPR and electromagnetic locating in a single survey programme gives utility surveyors maximum accuracy and the most reliable data across all ground conditions and site conditions.</p>
          <p>Our GPR training courses cover data collection techniques, post processing of survey data using Object Mapper software, and the interpretation of detection results. Delegates learn how to map underground utilities accurately across different soil types and environments, giving them the advanced technology skills that clients and local authorities expect from experienced professionals.</p>
        </div>
      </section>

      {/* Venue */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow text-primary mb-3">Venue</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Our Partner Training Venue in Worcester</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
            <p>Our partner training venue, The Survey School in Worcester, is approximately 60 miles from Bristol city centre, accessible via the M5. It provides the specialist equipment, advanced detection technologies and controlled assessment environment that qualification-level utility mapping courses require.</p>
            <p>For GPR Module 1 and PAS128 Awareness, we offer flexible deployment and can come to your Bristol or South West premises for on-site delivery. For ProQual Level 3 and the 5-Day Surveyor Programme, Worcester is the standard delivery venue for South West clients. Contact us to discuss logistics and accommodation options.</p>
          </div>
        </div>
      </section>

      {/* PAS128 Quality Levels */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Standards</p>
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Understanding PAS128 Quality Levels for Utility Surveys</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
          <p>The PAS128 standard categorises utility surveys into different Quality Levels that define the accuracy and detail of the survey data collected. From desktop study records at Quality Level D through to verified and precise positioning at Quality Level A, each level serves a different project scope and set of project requirements. Compliance with PAS128 is essential for ensuring safety and efficiency on construction, renovation and excavation projects.</p>
          <p>PAS128-compliant surveys require a combination of desktop utility record searches and physical surveys using ground penetrating radar (GPR) and electromagnetic locating. Our PAS128 Awareness course teaches site managers, project managers and procurement teams how to specify surveys correctly, interpret survey data and make knowledge-based decisions about what Quality Level their development activities require.</p>
        </div>
      </section>

      {/* CITB Funding */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow text-primary mb-3">Funding</p>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">CITB Funding for South West Contractors</h2>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Sygma Solutions is a CITB Approved Training Organisation. If your business is registered with CITB, you may be able to access funding support towards eligible training costs through the CITB Employer Network model. This can deliver significant cost savings for South West contractors investing in utility mapping training. Speak to your <Link href="/pricing" className="text-primary font-semibold hover:underline">CITB Employer Network adviser</Link> about funding for this training, or contact Sygma and we can guide you through the process.
          </p>
        </div>
      </section>

      {/* Qualification Pathway */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Progression</p>
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">The Qualification Pathway for Utility Surveyors</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
          <p>Sygma provides ProQual accredited courses that create a clear progression route for utility surveyors working in the South West. Delegates typically start with GPR Module 1 to build practical training in ground penetrating radar data collection, before progressing to GPR Module 2 for post processing and survey data interpretation. The ProQual Level 3 Diploma in Utility Mapping and Surveying validates competence across the full survey process.</p>
          <p>Our courses are aligned with industry recognised certifications including ProQual and EUSR. The training curriculum includes both theoretical knowledge and practical scanning techniques, covering advanced technology applications across different site conditions and ground types. For organisations that need trained operators quickly, the 5-Day Surveyor Programme provides a fast-track route to the same Level 3 qualification with consecutive-day delivery at our Worcester venue.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow text-primary mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Questions About Utility Mapping Training in Bristol</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 bg-background hover:bg-muted/30 transition-colors text-left font-semibold text-foreground flex items-center justify-between"
                >
                  <span>{faq.question}</span>
                  <span className="text-primary text-xl shrink-0">
                    {expandedFaq === index ? '\u2212' : '+'}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-muted/20 text-muted-foreground border-t border-border leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-primary-foreground">Book or Enquire About South West Delivery</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Tell us what your team needs and when. Whether you need a free, no-obligation initial consultation about utility mapping training or a firm quote for on-site delivery, we will confirm availability, venue options and respond within one working day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact#enquiry-form" className="inline-flex items-center px-6 py-3 rounded-md bg-primary-foreground text-primary font-bold text-sm hover:bg-primary-foreground/90 transition-colors">
              Enquire About South West Training
            </Link>
            <a href="tel:+442039718252" className="inline-flex items-center px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
