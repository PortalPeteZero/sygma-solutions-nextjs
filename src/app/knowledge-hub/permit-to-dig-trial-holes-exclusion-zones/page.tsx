import type { Metadata } from "next";
import { VideoArticle, videoMetadata } from "@/components/VideoArticle";
import { videoLibrary } from "@/data/videoLibrary";

const entry = videoLibrary.find((v) => v.slug === "permit-to-dig-trial-holes-exclusion-zones")!;

export const metadata: Metadata = videoMetadata(entry);

export default function Page() {
  return (
    <VideoArticle entry={entry}>
      <h2 className="text-2xl font-black text-foreground mb-4">An Excavation Is a Sequence, Not an Event</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        By the time a machine arrives on site, a long chain of decisions has already been made, and most strikes trace back to one of them rather than to the person holding the bucket. This video follows that chain end to end: pre-construction, the issue of permits to break ground, tracing techniques, and safe digging practice. It is filmed on a live project rather than staged, which is why the sequence is recognisable to anyone who has run one.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Pre-Construction Information and the Survey Level</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Pre-construction information is gathered from the asset owners, and designers visit the site with it, comparing what the desktop survey claimed against what can actually be seen. The level of survey required is then assessed against the risk profile of the work and the client's own requirements, so it is a judgement rather than a fixed rule. That judgement is where a job either gets the survey it needs or the survey somebody could be bothered with.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Who Is Allowed to Issue a Permit to Break Ground</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        A trained underground services appointed person reviews the information, satisfies themselves that the working team is competent and briefed, and only then issues, authorises and briefs the underground service avoidance permit. Every authorised permit goes into the permit register. The point worth taking from this section is that a permit is a statement that somebody qualified has looked and is accountable for having looked. It is not a form to be completed afterwards to show that a process existed.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Detection Survey Comes First</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The survey starts with the Genny, looking for the services that are already known about, with a volt stick check before any connection is made. At a lighting column the earth pin goes in very close to the column, at a shallow angle to minimise contact with anything buried, which keeps the transmitter and its leads tight to the column and lets the receiver work right up to it. The scan itself is a series of deliberate passes from about two metres out, with the receiver held still at the side of the body, not waved.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Depth Readings, and How to Get One Wrong</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Depth estimation is where confident surveys quietly go wrong. The reading a receiver gives you is a distance, not a depth, so if the instrument is off to one side of the cable rather than directly above it, the number will be larger than the true depth and will look perfectly plausible. The session is explicit about the conditions that invalidate a reading: do not take one near a bend, near a tee junction, or where other signals are present. A depth figure recorded under any of those conditions is worse than no figure, because it will be believed.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Nulling Out, So the Next One Is Findable</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Once services are located and marked, they can be nulled out, taking the signal off what you have already found so that the next line is not masked by it. It is easier with two people and possible alone with more time. This is the step most often skipped, and skipping it is how a survey concludes there is one cable in a footpath that actually holds four. Communications cables come next, with the signal clamp as the preferred method of getting a signal onto them.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Exclusion Zones, Trial Holes and Breaking Out</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Exclusion zones govern how close mechanical excavation may come to a marked service, and they apply from the moment the top layer of tarmac and wearing course is broken out. Trial holes prove by eye what the locator indicated. Neither becomes optional because the survey went smoothly, and the two together are what turns a marked road into a dig somebody can stand behind.
      </p>
    </VideoArticle>
  );
}
