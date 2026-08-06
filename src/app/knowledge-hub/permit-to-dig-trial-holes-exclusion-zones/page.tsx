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
        By the time a machine is on site, a long chain of decisions has already been made, and most strikes are traceable to one of them rather than to the person holding the bucket. This video follows that chain end to end in seventeen minutes: what information has to be gathered, who is allowed to authorise the dig, what has to be found before anyone breaks ground, and how the excavation itself is controlled.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Pre-Construction Information and the Permit to Break Ground</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Pre-construction information is collected from the asset owners, and designers visit the site with it, comparing what the desktop survey said against what is visible. Before excavation starts, a trained underground services appointed person reviews all of it, satisfies themselves that the team is competent, and only then issues the permit. A permit is a statement that somebody qualified has looked. It is not a form to be completed afterwards.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Detection Survey Comes Before the Dig</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The survey starts with the Genny, looking for the services that are known about, with a volt stick check before any connection is made. The scan is worked out from the lighting column, with the receiver held still at the side of the body and swept in a series of passes rather than waved. Once the lighting is found and marked, the remaining services are located, using connection and clamping first and induction only once those are exhausted.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Nulling Out, So You Find the Next One</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Once services are marked, they can be nulled out, which takes the signal off what you have already found so the next one is not masked by it. This is the step most often skipped, and it is the reason a survey can finish with the confident impression that there is only one cable in a footpath that holds four.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Exclusion Zones, Trial Holes and Breaking Out</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Exclusion zones govern how close mechanical excavation may come to a marked service, and they apply from the moment the top layer of tarmac and wearing course is broken out. Trial holes prove by eye what the locator indicated. The two together are what turns a marked road into a safe dig, and neither is optional because the survey went well.
      </p>
    </VideoArticle>
  );
}
