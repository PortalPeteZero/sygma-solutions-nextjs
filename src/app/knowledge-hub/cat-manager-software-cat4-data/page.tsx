import type { Metadata } from "next";
import { VideoArticle, videoMetadata } from "@/components/VideoArticle";
import { videoLibrary } from "@/data/videoLibrary";

const entry = videoLibrary.find((v) => v.slug === "cat-manager-software-cat4-data")!;

export const metadata: Metadata = videoMetadata(entry);

export default function Page() {
  return (
    <VideoArticle entry={entry}>
      <h2 className="text-2xl font-black text-foreground mb-4">The Record Exists Whether You Read It or Not</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        A CAT4 records what it did. It holds the dates it was used, how long it ran, which modes it ran in, and whether it detected anything in each of them. Most organisations own that data and never look at it, which means they are relying on the assurance that a scan happened rather than on the evidence that it did. This session is in two halves: getting the data off, and then the more useful half, working out what it is telling you.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Getting the Data Off</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Plug the locator in and the software lists the dates it holds data for. Select the dates you want, open the data collector, and from there the information can be exported for a spreadsheet or mapping package, or read out as a PDF report. Not every model in the range records the same things, so part of the session is simply knowing what the kit in your stores is capable of before you build a process around it.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Serial Numbers, and Knowing Whose Data You Are Reading</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        One practical point that catches people out: a data set can contain several instruments at once. Without knowing the serial numbers you can be looking at three CATs' worth of records and drawing conclusions about a team when you are actually looking at three different teams. Tying serial numbers to people or to vehicles is unglamorous and it is what makes the rest of the analysis mean anything.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Time Switched On Is Not Time Surveying</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The headline figure most reports show is how long the instrument was on, and it is close to useless on its own. A twenty minute use might contain only a few minutes of actual surveying. The session works through reading the time genuinely spent locating rather than the time the unit was powered, which is a far more honest measure of whether a survey happened.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Telling a Real Scan From a Box Ticked</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        This is the supervisor's question, and the data answers it more honestly than a signature does. The example that lands hardest in the session is a single day's record: the receiver was in Genny mode for ten and a half minutes, and it detected a Genny signal for forty four seconds of that. You can construct an explanation, and the session acknowledges that, but the likelihood is that the transmitter was not actually connected and working for most of that period. That is the sort of thing the record shows and paperwork never will.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">What to Do With It</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        None of this is about catching people out. It is about knowing which crews need support, which sites are genuinely being surveyed, and being able to answer the question after an incident with evidence rather than assertion. Organisations often use a second opinion on the data at first, and get better at reading it themselves, which is the right direction of travel.
      </p>
    </VideoArticle>
  );
}
