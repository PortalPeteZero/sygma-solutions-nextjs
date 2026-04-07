import type { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Morgan Sindall PAS128 Training Case Study | Sygma Solutions',
  description: 'PAS128 utility survey training case study. How Sygma designed leadership briefings for Morgan Sindall on survey specification, quality levels, and compliance.',
  alternates: { canonical: 'https://sygma-solutions.com/case-studies/morgan-sindall' },
  openGraph: {
    title: 'Morgan Sindall PAS128 Training Case Study | Sygma Solutions',
    description: 'PAS128 utility survey training case study. How Sygma designed leadership briefings for Morgan Sindall on survey specification, quality levels, and compliance.',
    url: 'https://sygma-solutions.com/case-studies/morgan-sindall',
    siteName: 'Sygma Solutions',
    type: 'website',
  },
};

const outcomes = [
  { outcome: 'Project managers can specify PAS128 surveys correctly', how: 'The specification module gives practical, usable guidance, not theory. Managers leave with a framework they can apply immediately.' },
  { outcome: 'Legal exposure from poor survey specification is understood and reduced', how: 'The legal duty of care module names the responsibilities at each project role. No ambiguity about where liability sits.' },
  { outcome: 'PAS128 quality levels are no longer a mystery', how: 'The quality levels module translates PAS128 language into practical decision-making criteria that project managers can use.' },
  { outcome: 'Survey deliverables can be challenged effectively', how: 'Managers know what a compliant report should contain and can verify or challenge what they receive.' },
  { outcome: 'Framework and contract risk is better understood', how: 'The infrastructure frameworks module gives context for where utility survey risk sits in the procurement and delivery chain.' },
];

const briefings = [
  { module: 'What is PAS128 and Why Does It Exist?', detail: 'An accessible introduction to PAS128: what the standard is, why it was developed, who is required to use it, and what it actually requires at a document and process level. Project managers leave this module knowing precisely what PAS128 is and is not.' },
  { module: 'PAS128 Quality Levels: What They Mean', detail: 'A structured walkthrough of PAS128 Quality Levels D, C, B, and A. What does each level actually require in terms of technology, methodology, and deliverables? What risks does each level mitigate and what risks remain? Project managers learn to match the quality level to the project risk.' },
  { module: 'Legal Duty of Care and CDM Obligations', detail: 'The legal framework around underground utility survey and excavation under CDM regulations, HSG47, and PAS128. Who holds the legal responsibility at each stage of a project: the client, the principal designer, the principal contractor, the project manager? What does a utility strike cost legally, financially, and reputationally?' },
  { module: 'How to Specify a Compliant PAS128 Survey', detail: 'Practical guidance on what to include in a survey specification to ensure the survey delivered meets the quality level required. How to write the brief, what to specify about the deliverables, and what to ask for in the survey report to confirm compliance.' },
  { module: 'How to Verify What You Have Received', detail: 'How a project manager can check whether a survey report meets PAS128 requirements without being a surveyor. What should be in the report? What does a Quality Level B deliverable include that a Quality Level D does not? How to challenge a survey that does not appear to meet specification.' },
  { module: 'PAS128 in the Context of Major Infrastructure Frameworks', detail: 'How PAS128 requirements flow through frameworks and contracts. What clients typically specify, where contractors carry risk, and how to ensure that survey procurement decisions made early in a project do not create liability that only becomes visible when something goes wrong.' },
];

export default function CaseStudyMorganSindall() {
  return (
    <>
      <InnerPageHero
        eyebrow="Case Study"
        image="Safe-Dig-07"
        alt="Morgan Sindall safe digging and cable avoidance training case study"
        headline="Morgan Sindall: PAS128 Leadership Briefings for Project Managers"
        sub="How Sygma designed PAS128 utility survey training at the leadership level, giving Morgan Sindall's project management teams the knowledge to specify, commission, and verify PAS128-compliant utility surveys on major construction and infrastructure projects."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Bespoke Training', href: '/bespoke-training' },
          { label: 'Morgan Sindall', href: '/case-studies/morgan-sindall' },
        ]}
      />

      {/* Summary panel */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: 'Client', value: 'Morgan Sindall' },
              { label: 'Programme', value: 'PAS128 Leadership Briefings for Project Managers' },
              { label: 'Audience', value: 'Senior project managers and site leadership on major infrastructure projects' },
              { label: 'Format', value: 'Briefing sessions (structured, non-hands-on, 6 to 10 delegates)' },
              { label: 'Key elements', value: 'PAS128 quality levels, legal duty of care, survey specification, how to verify compliant survey work' },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-background p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <Image src="CAT4-and-Genny-03" alt="Morgan Sindall CAT and Genny training for project managers" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-center" />
      </div>

      {/* The Brief */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">The Brief</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-foreground">The Brief from Morgan Sindall</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Morgan Sindall is one of the UK's leading construction and infrastructure companies, delivering major projects across sectors including utilities, highways, rail, and public infrastructure. On large infrastructure projects, PAS128-compliant utility surveys are increasingly specified by clients and required by CDM regulations and framework conditions.</p>
            <p>The challenge Morgan Sindall identified was not at the operative level. Their project managers, the people responsible for commissioning utility surveys, accepting survey deliverables, and managing the risk of utility strikes on major projects, did not have sufficient grounding in what PAS128 actually requires. They understood that PAS128 surveys were required. They did not always understand what a compliant survey should look like, what the different PAS128 quality levels mean in practice, or what their own legal obligations were when a survey deliverable was handed to them.</p>
            <p>The risk was straightforward: if a project manager does not know what a compliant PAS128 Quality Level B survey looks like, they cannot effectively verify that the survey they have received meets the standard they have specified. That is a legal and commercial exposure.</p>
            <p>Morgan Sindall wanted leadership-level briefings, not a hands-on course, but structured sessions that gave their project management teams the knowledge to make better decisions about utility surveys, specify them correctly, challenge surveyors where needed, and understand their duty of care.</p>
          </div>
        </div>
      </section>

      {/* Understanding PAS128 */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Context</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-foreground">What is PAS128 and Why Does It Matter?</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>PAS128 is the UK standard for underground utility detection, verification, and location. Published by the British Standards Institution, PAS128 defines the methodology and quality levels that govern how buried utilities and buried services are located, mapped, and recorded on construction and infrastructure projects. It exists because inaccurate or incomplete utility mapping is one of the most common causes of project delays, cost overruns, and safety incidents on UK construction sites.</p>
            <p>The standard defines four survey types, each corresponding to a quality level. Type D is a desktop search of existing utility records and stats plans. Type C is a site reconnaissance involving visual inspection of surface features to corroborate desktop records. Type B is utility detection using electromagnetic locating equipment such as CAT and Genny devices and ground penetrating radar to detect and map buried services beneath the surface. Type A is verification by excavation, where trial holes confirm the exact location, depth, and condition of underground utilities.</p>
            <p>Each survey type produces data at a corresponding quality level, from QL-D through to QL-A. The quality level assigned to the data indicates the confidence that can be placed in the accuracy of the utility location information. A project manager who commissions a PAS128 survey needs to understand what quality level is appropriate for the project risk, what detection methods will be used, what the survey deliverables should contain, and how to verify that the survey report meets the specification.</p>
            <p>PAS128 utility survey training exists at multiple levels. At the operative level, training courses teach surveyors and locating operatives how to use electromagnetic locators, signal generators, and ground penetrating radar equipment to detect and map buried utilities in the field. At the management level, training focuses on understanding PAS128 requirements, specifying compliant surveys, and verifying deliverables. The Morgan Sindall programme sits firmly at the management level.</p>
          </div>
        </div>
      </section>

      {/* What Sygma Designed */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">What Sygma Designed</p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground">What Sygma Designed</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">Sygma Solutions designed a series of PAS128 leadership briefings for Morgan Sindall's project management teams. These are not operative-level CAT and Genny training courses. There is no locating equipment in the room, no practical fieldwork session, no site assessment. The briefings are designed for people who commission and manage utility surveys on major construction and infrastructure projects, not people who conduct them.</p>
          <p className="mb-8 text-muted-foreground leading-relaxed">The programme covers the core elements of PAS128 that project managers need to understand: how PAS128 survey types and quality levels work, what detection methods are used at each level, how to write a survey specification that ensures compliance, what a compliant survey report should contain, and where legal liability sits when utility mapping data is incomplete or inaccurate. Each briefing module is designed to give Morgan Sindall's project leadership teams practical, usable knowledge they can apply immediately on site.</p>

          <div className="overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-3 text-left font-bold text-foreground w-1/3">Briefing Module</th>
                  <th className="px-5 py-3 text-left font-bold text-foreground">What It Covers</th>
                </tr>
              </thead>
              <tbody>
                {briefings.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 font-semibold text-foreground align-top">{row.module}</td>
                    <td className="px-5 py-4 text-muted-foreground align-top">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Image Grid - PAS128 Training Sessions */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-4">
            <Image src="CAT4-and-Genny-04" alt="Morgan Sindall project managers in PAS128 briefing classroom" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover aspect-[4/3]" />
            <Image src="CAT4-and-Genny-05" alt="Morgan Sindall delegates discussing PAS128 requirements" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover aspect-[4/3]" />
            <Image src="CAT4-and-Genny-06" alt="Morgan Sindall leadership team in training session" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* PAS128 Quality Levels in Practice */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">PAS128 Framework</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-foreground">PAS128 Survey Types and Quality Levels</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>A significant part of the Morgan Sindall briefing programme focuses on PAS128 survey types and the quality levels they produce. Understanding these levels is essential for any project manager who commissions utility surveys or accepts survey deliverables on construction projects.</p>
            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Type D: Desktop Search</h3>
            <p>A Type D survey is a desktop search of existing utility records. This involves requesting stats plans from utility companies and reviewing existing mapping data held by asset owners. The data produced is Quality Level D. It shows approximate locations of buried services based on records that may be decades old and may not reflect the current position or condition of underground utilities. Type D data is a starting point, not a definitive record.</p>
            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Type C: Site Reconnaissance</h3>
            <p>A Type C survey adds a site reconnaissance to the desktop data. A surveyor visits the site to carry out a visual inspection, identifying surface features such as manholes, valve covers, marker posts, and other evidence of buried services. The surveyor corroborates the desktop records against what is visible on the ground. The data produced is Quality Level C. It is more reliable than QL-D because it has been verified against physical evidence, but it does not involve any below-ground detection.</p>
            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Type B: Utility Detection</h3>
            <p>A Type B survey uses detection equipment to locate buried utilities beneath the surface. This is where electromagnetic locating devices such as CAT and Genny equipment and ground penetrating radar are deployed on the survey site. Trained utility surveyors use these detection methods to identify the position and, where possible, the depth of underground services. The data produced is Quality Level B. It represents the most comprehensive non-invasive utility mapping available under PAS128 and is the level most commonly specified on major infrastructure and construction projects.</p>
            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Type A: Verification by Excavation</h3>
            <p>A Type A survey involves physical excavation to verify the exact location, depth, size, and condition of a buried utility. This produces Quality Level A data, the highest confidence level in PAS128. It is typically used at critical points on a project where absolute certainty about utility location is required before construction proceeds.</p>
            <p>For Morgan Sindall's project managers, the critical knowledge is not how to operate detection equipment. It is how to determine which quality level a project requires, how to specify that level in the survey brief, and how to verify that the deliverable meets the specification. That is what these briefings deliver.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">How It Works</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-foreground">How It Works in Practice</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>The briefing sessions are designed to fit into a project manager's working schedule. They are not full-day courses. Each module can be delivered as a standalone briefing or as part of a structured half-day or full-day programme depending on Morgan Sindall's scheduling requirements and the depth of knowledge the team needs.</p>
            <p>Delivery is classroom-based, at Morgan Sindall facilities or at a Sygma training venue. The sessions work best with small groups of 6 to 10 project managers who can engage in discussion. The briefing format includes structured Q&A throughout, not a lecture.</p>
            <p>All delegates complete Sygma's QR-code feedback form. Trainer scores remain private until the following working day. Morgan Sindall's L&D or H&S team receives a full group report.</p>
            <h3 className="text-xl font-bold text-foreground mt-8 mb-3">What This Training Is Not</h3>
            <p>These briefings are not PAS128 utility survey training at the operative level. Morgan Sindall's project managers are not learning to use CAT and Genny locating equipment, ground penetrating radar, or any other detection devices. They are not being trained to conduct utility surveys themselves. Sygma delivers separate training courses for operatives who carry out utility detection and utility mapping work on site, including CAT and Genny training, PAS128 awareness courses, and utility mapping training programmes. The Morgan Sindall programme is specifically for the people who commission, specify, and verify that survey work.</p>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-45" alt="Morgan Sindall project team in utility training" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="MALA-GPR-09" alt="Utility survey equipment demonstration" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-64" alt="PAS128 awareness training practical" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Outcomes */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Outcomes</p>
          <h2 className="mb-8 text-3xl font-black tracking-tight text-foreground">Key Outcomes for Morgan Sindall</h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-3 text-left font-bold text-foreground w-2/5">Outcome</th>
                  <th className="px-5 py-3 text-left font-bold text-foreground">How the Programme Delivers It</th>
                </tr>
              </thead>
              <tbody>
                {outcomes.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 font-semibold text-foreground align-top">{row.outcome}</td>
                    <td className="px-5 py-4 text-muted-foreground align-top">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How PAS128 Briefings Connect to Utility Survey Training */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">The Bigger Picture</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-foreground">How PAS128 Leadership Briefings Connect to Utility Survey Training</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>PAS128 utility survey training operates at multiple levels within an organisation. At the operative level, locating operatives and utility surveyors attend training courses that teach them to use electromagnetic locating equipment, signal generators, and ground penetrating radar to detect, locate, and map buried utilities and buried services on construction sites. These training courses cover detection methods, surveying methodology, data collection, and the practical skills needed to produce reliable survey data that meets PAS128 requirements.</p>
            <p>At the management level, the training need is different. Project managers, contract managers, and site leadership teams need to understand PAS128 well enough to make informed decisions about utility mapping on their projects. They need to know what survey types exist, what quality levels mean, how to specify a compliant survey, how to read and challenge survey deliverables, and where their legal duty of care sits under CDM regulations and HSG47 guidance.</p>
            <p>The Morgan Sindall programme bridges a gap that exists in many construction and infrastructure organisations. Operative-level CAT and Genny training and utility mapping training ensure that the people conducting utility surveys are competent. But if the people commissioning those surveys do not understand what they are asking for, the risk of specifying the wrong survey level, accepting non-compliant deliverables, or failing to act on survey data remains. PAS128 leadership briefings close that gap.</p>
            <p>Sygma delivers both levels of PAS128 utility survey training. For operatives, Sygma offers CAT and Genny training courses, advanced locating training, PAS128 awareness courses, and utility mapping training programmes delivered nationwide. For managers and project leaders, Sygma designs bespoke briefing programmes like the one delivered to Morgan Sindall, tailored to the organisation's projects, frameworks, and risk profile.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground">Need PAS128 Leadership Briefings for Your Project Management Team?</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">Senior project managers and site leaders who commission utility surveys without understanding PAS128 are carrying legal and commercial risk they may not be aware of. If your team needs the knowledge to specify, commission, and verify PAS128-compliant utility surveys effectively, Sygma can deliver leadership briefings built around your projects, your frameworks, and your risk profile.</p>
          <p className="mb-8 text-muted-foreground leading-relaxed">Whether you need management-level PAS128 briefings like the Morgan Sindall programme, or operative-level CAT and Genny training and utility mapping training courses for your locating teams, Sygma Solutions delivers PAS128 utility survey training at every level. All training is delivered by directly employed trainers with real-world utility survey and construction experience.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact#enquiry-form" className="rounded-lg bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow hover:opacity-90 transition-opacity">
              Get in Touch
            </Link>
            <Link href="/courses/pas128-awareness" className="rounded-lg border border-border px-7 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors">
              View PAS128 Awareness Course
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-accent">Also See</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Cable Avoidance Training', desc: 'Sygma\'s homepage covering all CAT and Genny training courses, cable avoidance qualifications, and the Genny-First approach.', href: '/' },
              { label: 'CAT and Genny Training', desc: 'Sygma\'s core CAT and Genny training courses for operatives who locate buried utilities on site.', href: '/courses/genny-cat-training' },
              { label: 'PAS128 Awareness', desc: 'PAS128 awareness training for service coordinators and contract managers on construction projects.', href: '/courses/pas128-awareness' },
              { label: 'Utility Mapping Training', desc: 'Training courses for utility surveyors covering electromagnetic location and ground penetrating radar.', href: '/utility-mapping-training-bristol' },
              { label: 'Bespoke Training', desc: 'Sygma designs bespoke training programmes for organisations with specific utility survey training needs.', href: '/bespoke-training' },
              { label: 'Severn Trent Water Case Study', desc: 'How Sygma delivered a 2-day manager training programme for a major utility client.', href: '/case-studies/severn-trent-water' },
              { label: 'OSCA On-Site Competency Assessment', desc: 'On-site evidence of operative competency alongside survey verification.', href: '/osca' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
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