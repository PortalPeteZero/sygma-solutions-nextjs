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
        Utility drawings tell you what somebody recorded at the time, in the position they believed it to be. They are the most useful thing you will be handed and the most confidently misread. This session works through real drawings and separates what they genuinely tell you from what people assume they do.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Two Ways Street Lighting Is Wired</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Street lighting in this country is arranged in one of two configurations, and which one you are standing on changes what happens when you apply a signal. On a tee'd off system the column is fed off the LV main by a branch, in the same way a house is fed, so a signal applied at the column can travel the main. On a loop-in loop-out system the lighting circuit runs column to column, and a signal stays on the lighting alone. Reading which one you have before you connect is the difference between locating a street and locating one cable.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Hooking Up and Tracing Back</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Where a plan shows a service reaching buildings but not how it gets there, the answer is often to connect and trace back rather than to scan and hope. The session shows this on the drawing and then on the ground, including what to do before lifting a kerb.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">When Two Cables Are Stacked</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The hardest case on a plan is two services occupying the same route at different depths. On passive modes a locator will typically find one of them and give no indication that the other exists. The session covers where to hook up to trace the top one, where to hook up for the lower one, and why assuming a single line here is how a dig goes wrong.
      </p>
    </VideoArticle>
  );
}
