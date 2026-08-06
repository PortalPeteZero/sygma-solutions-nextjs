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
        A CAT4 records what it did. It holds the dates it was used, how long it ran, and which modes it ran in. Most organisations own that data and never look at it, which means they are relying on the assurance that a scan happened rather than the evidence of it.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Getting the Data Off</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Plug the locator in and CAT Manager lists the dates it holds data for. From there the data is selected and exported, to a spreadsheet or to a mapping format, or read straight out as a PDF report. The session works through each route on screen, including which models in the range record what, because not all of them hold the same information.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Reading a Week of Real Work</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The interesting part is not the export, it is the interpretation. A team on a project for a week produces a pattern, and the pattern is readable: time in each mode, time with a signal detected, and the balance between them. A morning of genuine locating looks nothing like a morning where the tool was switched on and carried.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Telling a Real Scan From a Box Ticked</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        This is the supervisor's question, and the data answers it more honestly than a signature does. If the tool ran in Genny mode for ten minutes and detected a Genny signal for well under one, something in that survey did not happen the way the paperwork says. The session is direct about what good and bad look like in the record.
      </p>
    </VideoArticle>
  );
}
