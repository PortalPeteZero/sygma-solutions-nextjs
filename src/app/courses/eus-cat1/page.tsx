import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/eus-cat1';

export const metadata: Metadata = courseData.metadata;

export default function EusCat1Page() {
  return <CourseTemplate data={courseData}>
    <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">EUSR CAT1 Training: The EUSR-Registered Standard for Utility Avoidance</h2>
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">EUSR CAT1 training (also known as EUSR CAT1 or EUSR Category 1 training) is issued against EUSR-registered standards and is the utility sector\'s most widely recognised certificate of competence for operatives using Genny & CAT equipment. The qualification is required or preferred on the frameworks of many of the UK\'s largest utility contractors and network operators. All EUSR CAT1 courses from Sygma meet the requirements of HSG47, the Health and Safety Executive\'s guidance on avoiding danger from underground services.</p>
        <p className="text-muted-foreground leading-relaxed">Sygma\'s EUSR CAT1 course delivers the same depth of electromagnetic theory and Genny-First methodology that runs through every Sygma programme. The EUSR registration adds the sector recognition that many procurement and H&S frameworks require.</p>
        <p className="text-muted-foreground leading-relaxed">Not all EUSR CAT1 providers deliver the same standard of training. Sygma includes clamp, capacitance, and blind induction in assessed practicals even where EUSR does not require it. Sygma-trained operatives consistently show a 70-80% increase in Genny usage post-course, measured through locator data downloads.</p>
      </div>
      <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
        <p className="text-foreground font-semibold mb-2">Not sure whether you need EUSR CAT1 or the Sygma in-house certificate?</p>
        <p className="text-muted-foreground text-sm mb-3">Use the course finder on the Utility Avoidance Training hub page to identify the right route for your workforce.</p>
      </div>
    </section>

    <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
      <h2 className="text-2xl font-black mb-8 text-foreground">Course at a Glance</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {[
              ['Course Name', 'EUSR CAT1: Utility Avoidance Training'],
              ['Awarding Body', 'EUSR (Energy and Utility Skills Register)'],
              ['Duration', 'One day (typically 8:30am to 4:00pm)'],
              ['Format', 'Classroom theory (morning) followed by on-site practical assessment (afternoon)'],
              ['Assessment', 'Multiple choice written paper: 80% minimum pass mark. On-site practical assessment in all Genny & CAT modes.'],
              ['Certificate', 'EUSR CAT1 certificate (EUSR-registered). Issued on successful completion.'],
              ['Max Delegates', '8 per session'],
              ['Delivery', 'Wigan HQ | The Survey School, Worcester | On-site nationwide (travel included)'],
            ].map(([label, value]) => (
              <tr key={String(label)} className="border-b border-border">
                <td className="py-3 pr-6 font-semibold text-foreground w-40 align-top">{label}</td>
                <td className="py-3 text-muted-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
      <h2 className="text-2xl font-black mb-8 text-foreground">EUSR CAT1 Full Day Agenda</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left py-3 pr-6 font-black text-foreground w-56">Session</th>
              <th className="text-left py-3 font-black text-foreground">Content</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Why We Use Locators', 'HSG47 guidance and legal obligations. The financial and safety consequences of utility strikes.'],
              ['Buried Service Plans', 'Reading and interpreting STATS plans. Limitations of service plans.'],
              ['Electromagnetic Theory', 'How a locator detects signals. Theory and limitations of Power, Radio, Genny, and Avoidance modes.'],
              ['Equipment Controls and Operation', 'Locator controls and signal interpretation. Signal generator dual frequency, earthing, capacitance, blind induction, and nulling.'],
              ['Site Practical: Plan Reconciliation', 'Delegates use STATS plans to identify service routes. Equipment pre-use checks.'],
              ['Site Practical: Genny & CAT Survey', 'All modes assessed individually. Genny connected first. Individual assessment.'],
              ['Written Assessment', 'Multiple choice paper. 80% minimum pass mark.'],
              ['Certificate', 'EUSR CAT1 EUSR-registered certificate issued on successful completion.'],
            ].map(([session, content]) => (
              <tr key={String(session)} className="border-b border-border">
                <td className="py-3 pr-6 font-semibold text-foreground align-top">{session}</td>
                <td className="py-3 text-muted-foreground">{content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="bg-muted/20 py-14">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-2xl font-black mb-3 text-foreground">EUSR CAT1 vs ProQual CAT1: Which Does Your Operative Need?</h2>
        <p className="text-muted-foreground mb-8">EUSR CAT1 and ProQual CAT1 are not equivalent qualifications. ProQual CAT1 is significantly more thorough.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 pr-6 font-black text-foreground w-44"></th>
                <th className="text-left py-3 pr-6 font-black text-foreground">EUSR CAT1</th>
                <th className="text-left py-3 font-black text-foreground">ProQual CAT1</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Duration', '1 day', '2 days'],
                ['Theory assessment', 'Multiple choice paper (80% pass)', 'Written theory paper with extended responses'],
                ['Practical assessment', 'On-site practical in all modes', 'Individually assessed practical for each technique'],
                ['Clamp method', 'Covered in course', 'Assessed separately'],
                ['Capacitance', 'Covered in course', 'Assessed separately'],
                ['Blind induction', 'Covered in course', 'Assessed separately'],
                ['Certificate validity', '3 years', '3 years'],
                ['Awarding body', 'EUSR', 'ProQual Accreditations'],
              ].map(([label, eus, proq]) => (
                <tr key={String(label)} className="border-b border-border">
                  <td className="py-3 pr-6 font-semibold text-foreground align-top w-44">{label}</td>
                  <td className="py-3 pr-6 text-muted-foreground">{eus}</td>
                  <td className="py-3 text-muted-foreground">{proq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-6 md:px-8 py-14 max-w-4xl">
      <h2 className="text-2xl font-black mb-8 text-foreground">Upgrade Your Qualification</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-background border border-border rounded-lg p-6">
          <p className="eyebrow mb-2">Next Step</p>
          <h3 className="font-black text-foreground mb-2">ProQual CAT1 Plus</h3>
          <p className="text-muted-foreground text-sm mb-4">Upgrade your EUSR CAT1 to include additional locating techniques under ProQual accreditation.</p>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <p className="eyebrow mb-2">On-Site Competency</p>
          <h3 className="font-black text-foreground mb-2">OSCA Assessment</h3>
          <p className="text-muted-foreground text-sm mb-4">The OSCA on-site competency assessment verifies your operatives are competent in live conditions.</p>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <p className="eyebrow mb-2">Bespoke Programme</p>
          <h3 className="font-black text-foreground mb-2">Bespoke Training</h3>
          <p className="text-muted-foreground text-sm mb-4">If your organisation needs more than a standard EUSR course, we design the programme from the ground up.</p>
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <p className="eyebrow mb-2">Course Comparison</p>
          <h3 className="font-black text-foreground mb-2">Cable Avoidance Course Comparison</h3>
          <p className="text-muted-foreground text-sm mb-4">Compare all cable avoidance courses side by side.</p>
        </div>
      </div>
    </section>
  </CourseTemplate>;
}
