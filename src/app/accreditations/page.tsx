import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CITB Approved, EUSR & ProQual Accredited | Sygma Solutions',
  description: 'Sygma is CITB approved, EUSR registered and ProQual accredited. Find out what each means for your qualification, funding eligibility, and training record.',
  canonical: 'https://sygma-solutions.com/accreditations',
  openGraph: {
    title: 'CITB Approved, EUSR & ProQual Accredited | Sygma Solutions',
    description: 'Sygma is CITB approved, EUSR registered and ProQual accredited.',
    url: 'https://sygma-solutions.com/accreditations',
    type: 'website',
  },
};

export default function AccreditationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Accreditations, Approvals and Industry Affiliations</h1>
          <p className="text-xl mb-8">Sygma Solutions holds accreditations from CITB, EUSR, ProQual and the Survey Association, and maintains affiliations with ICES and CICES.</p>
        </div>
      </section>

      <section className="bg-gray-100 border-y border-gray-300 py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {[
              '21 Years in Business',
              '7 Active Accreditations',
              'CITB Approved Training Organisation',
            ].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                <span className="text-sm font-semibold">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">What Each Accreditation Covers</h2>
          <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Each of the following is a distinct relationship with a different awarding body, assessor body or professional institution. They are not interchangeable and they cover different parts of what Sygma delivers.
          </p>

          <div className="space-y-6">
            {[
              {
                title: 'CITB Approved Training Organisation (ATO)',
                content: 'Sygma Solutions is a CITB Approved Training Organisation. This approval means our training meets CITB\'s quality standards and that CITB-registered employers may be able to access funding support towards eligible training costs through the CITB Employer Network model.',
              },
              {
                title: 'EUS / EUSR (Utility Skills Register)',
                content: 'Sygma is approved to deliver EUS Category 1 (CAT1) and Category 2 (CAT2) training. Operatives who complete these courses and pass assessment are registered on the Utility Skills Register (EUSR) and receive EUSR cards, which are the industry-standard proof of cable avoidance competency required by the majority of utility network operators.',
              },
              {
                title: 'ProQual Approved Centre',
                content: 'Sygma is a ProQual Approved Centre. This covers two distinct relationships with ProQual: ProQual Level 2 to Level 6 Qualifications (Ofqual-regulated qualifications in utility mapping and surveying), and ProQual Accreditations (CAT1, CAT1 Plus, CAT2 - externally verified and accredited by ProQual Accreditations).',
              },
              {
                title: 'TSA (The Survey Association)',
                content: 'Sygma\'s 5-Day PAS128 Surveyor Programme is recognised by The Survey Association (TSA). This approval relates specifically to that programme only. TSA is the professional body for survey companies and their approval confirms it meets the standards expected for surveyor development.',
              },
              {
                title: 'ICES (Institution of Civil Engineering Surveyors)',
                content: 'The ProQual Level 3 Certificate and Level 4, 5 and 6 Diplomas in Utility Surveying and Mapping are mapped to ICES membership pathways. Learners who complete these qualifications may use them as part of their route to ICES membership.',
              },
              {
                title: 'CICES (Chartered Institution of Civil Engineering Surveyors)',
                content: 'The Level 6 Diploma in Utility Surveying and Mapping is mapped to the CICES Incorporated Engineer pathway. Learners completing the Level 6 Diploma may use it as part of their route to CICES membership.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-300 rounded-lg bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Trainer and Assessor Standards</h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Accreditations describe the standards an organisation must meet. The following sets out how Sygma maintains those standards at trainer and assessor level.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-300">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-5 py-3 font-bold">Standard</th>
                  <th className="text-left px-5 py-3 font-bold">Detail</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    standard: 'Employment status',
                    detail: 'All Sygma trainers and assessors are direct employees of the company, not subcontractors or agency staff.',
                  },
                  {
                    standard: 'Teaching qualification',
                    detail: 'All trainers hold the Level 3 Award in Education and Training (AET) or an equivalent recognised teaching qualification.',
                  },
                  {
                    standard: 'Industry background',
                    detail: 'All trainers are former operatives or survey professionals with direct, on-site experience in the disciplines they teach.',
                  },
                  {
                    standard: 'Internal quality assurance',
                    detail: 'Sygma operates an internal IQA process for all assessed qualifications and accreditations. Assessments are reviewed, sampled and quality-assured before certificates are issued.',
                  },
                  {
                    standard: 'Maximum group size',
                    detail: 'Sygma operates a maximum of 8 delegates per trainer/assessor session for assessed courses. This is a deliberate limit, not a guideline.',
                  },
                ].map(({ standard, detail }, i) => (
                  <tr key={standard} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 font-semibold align-top w-1/3">{standard}</td>
                    <td className="px-5 py-4 text-gray-600 leading-relaxed">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Who We Work With</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl">
            <p>
              Over 21 years, Sygma has delivered training for utility network operators, Tier 1 and Tier 2 contractors, specialist survey companies, local authorities and water industry supply chain businesses across the UK.
            </p>
            <p>
              Named client references and case studies are available on request for organisations at procurement or tender stage. <Link href="/case-studies" className="text-blue-600 font-semibold hover:underline">View our case studies</Link> to see how we have delivered training programmes for organisations in the sector.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border-t border-b border-blue-200 py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Our Accreditations?</h2>
          <p className="text-gray-600 mb-8">
            If you need accreditation documentation for a tender, or want to discuss which qualifications and certificates are most relevant for your team, contact us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700"
            >
              Contact Us
            </Link>
            <a
              href="tel:+442039718252"
              className="inline-block px-6 py-3 rounded-md border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}