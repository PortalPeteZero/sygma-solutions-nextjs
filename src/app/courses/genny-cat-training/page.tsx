import type { Metadata } from 'next';
import CourseTemplate from '@/components/CourseTemplate';
import { courseData } from '@/data/courses/genny-cat-training';

export const metadata: Metadata = courseData.metadata;

export default function GennyCatTraining() {
  return (
    <CourseTemplate data={courseData}>
      {/* Genny & CAT Terminology Callout -- unique to this page */}
      <section className="bg-accent/5 border-y border-accent/20 py-10">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow mb-3">Why We Say It Differently</p>
          <h2 className="text-xl font-black mb-4 text-foreground">Genny &amp; CAT, Not CAT &amp; Genny</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">The industry calls it &quot;CAT and Genny training&quot;. We call it Genny &amp; CAT. The name reflects the methodology: start with the signal generator, apply a known signal, trace it, verify it. Only then move to passive modes. Every course Sygma delivers follows this order because 21 years of post-strike investigation data tells us the same thing: the majority of preventable utility strikes happen when operatives skip the Genny and rely on passive readings alone.</p>
          <p className="text-muted-foreground leading-relaxed">This is not a marketing exercise. The ProQual CAT1 Plus specification (PP3.3) now requires candidates to &quot;conduct a survey using the transmitter first and exhaust all transmitter connection opportunities before moving to induction.&quot; That is the Genny-First methodology formalised into externally audited qualification criteria. Sygma helped write that standard. No other training provider or awarding body has embedded this principle into their assessment criteria.</p>
        </div>
      </section>

      {/* Why Cable Avoidance Tool Training Matters -- unique SEO content */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow mb-3">The Safety Case</p>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Why Cable Avoidance Tool Training Is Not Optional</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every year across the UK construction industry, thousands of underground services are struck during excavation work. Cable strikes on buried electricity cables can cause fatal arc flash injuries, while hitting gas mains or high-pressure water pipes puts entire construction sites at risk. The Health and Safety Executive&apos;s guidance document HSG47 is clear: anyone who may be required to locate underground utilities before or during excavation work must be properly trained and assessed as competent. Cable avoidance tool training is not a nice to have. It is a legal and practical requirement for safe working on any construction site where underground services are present.
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
    </CourseTemplate>
  );
}
