import type { Metadata } from "next";
import { VideoArticle, videoMetadata } from "@/components/VideoArticle";
import { videoLibrary } from "@/data/videoLibrary";

const entry = videoLibrary.find((v) => v.slug === "reading-utility-plans")!;

export const metadata: Metadata = videoMetadata(entry);

export default function Page() {
  return (
    <VideoArticle entry={entry}>
      <h2 className="text-2xl font-black text-foreground mb-4">A Plan Is Evidence, Not an Answer</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Utility drawings tell you what somebody recorded at the time, in the position they believed it to be, using conventions that vary between asset owners. They are the most useful thing you will be handed and the most confidently misread. This session works through real drawings and separates what they genuinely tell you from what people assume they do.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Two Ways Street Lighting Is Wired</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Street lighting in this country is arranged in one of two configurations, and which one you are standing on changes everything you do next. On a tee'd off system the column is fed off the low voltage main by a branch, in the same way a house is, so a signal applied at the column can travel the main and light up far more than the lighting circuit. On a loop-in loop-out system the circuit runs column to column and a signal stays on the lighting alone. Working out which one you have before you connect is the difference between locating a street and locating one cable.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Straight Lines Are a Giveaway</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        One of the most useful things in the session is learning to spot where a drawing is recording and where it is assuming. Some plans show a service into every property because somebody reasoned that every house must have one, and drew it, which is why those lines are suspiciously straight and evenly spaced. It is a complete guess presented in the same ink as a survey. Once you can see it, you stop treating a drawn line as a measured one.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Reading the Detail That Is There</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Plans carry more than routes. Core counts are annotated, so a five core notation tells you something about what the cable is doing. Colours mean different things to different asset owners, so a Scottish Power drawing showing low voltage in brown and high voltage in red is not a universal key. And a column standing on the far side of a footpath has to be fed from somewhere, which usually means a road crossing that the plan may not draw at all.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">When Two Cables Are Stacked</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The hardest case on a drawing is two services on the same route at different depths. The plan shows two low voltage cables; a locator on passive modes typically returns one signal and presents it as though there is a single cable there. The session covers where to hook up to trace the upper one, where to get at the lower one, and why accepting the single response is how a dig goes wrong on a street where the paperwork was actually correct.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Why High Voltage Is the Hardest</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        High voltage surprises people. The expectation is that more voltage means a stronger response, and in passive modes the opposite is often true, because the balancing effects on high voltage circuits largely cancel the magnetic field the instrument is looking for. A quiet response on a street that a plan says carries high voltage is not evidence that the plan is wrong.
      </p>
    </VideoArticle>
  );
}
