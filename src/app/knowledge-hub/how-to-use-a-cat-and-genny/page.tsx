import type { Metadata } from "next";
import { VideoArticle, videoMetadata } from "@/components/VideoArticle";
import { videoLibrary } from "@/data/videoLibrary";

const entry = videoLibrary.find((v) => v.slug === "how-to-use-a-cat-and-genny")!;

export const metadata: Metadata = videoMetadata(entry);

export default function Page() {
  return (
    <VideoArticle entry={entry}>
      <h2 className="text-2xl font-black text-foreground mb-4">Why Signal Application Is the Whole Job</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        A locator on passive modes is listening for whatever happens to be there. Signal application is the opposite: you decide what goes on the line, so you already know the frequency you are looking for and roughly where it should be going. Everything else in this session follows from that one change of stance. It runs to just over two hours because signal application is not a single technique, it is a set of them, and the skill is in choosing between them rather than in operating any one.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Frequency Behaves Like Sound</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The clearest way to think about frequency is the one used in the session itself. Stand a mile from a festival and you can hear the music, but the only thing that reaches you is the bass. Low frequencies travel; high frequencies do not get that far but couple far more readily onto whatever is nearby. That is the whole trade-off in one image. A low frequency stays on the line you put it on and gives you distance. A high frequency will jump onto everything in the vicinity, which is occasionally what you want and usually what ruins the trace.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Earth Is Not an Afterthought</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The transmitter needs a circuit. Signal leaves the Genny, travels along the service and has to return, and the way back is through the ground to the earth stake. That is why moving the stake changes the result so much, and why a poor return path feels exactly like a faulty machine. The session covers what genuinely makes an acceptable earth, what to do on ground that will not take a stake, and the fact that everything conductive in that mass of ground becomes part of your circuit whether you intended it or not.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Direct Connection, the Signal Clamp, and Induction</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        These are three tools for three situations, not three ways of doing one thing. Direct connection puts the most signal on the service and should be the first choice wherever there is something safe to connect to. The signal clamp is for when you can get around a cable but must not touch it, and it is the preferred method on communications cables. Induction is the last resort. The session is honest about what it costs you: signal coupled onto everything nearby, no certainty about which line you are following, and an airborne component that will read as a buried service if you let it.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Current Direction, and Telling One Cable From Another</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Where several services share a route, signal strength alone will not tell you which one you put the signal on, because all of them may be carrying some of it. Current direction and current measurement solve that. Instead of asking how strong the response is, you read the actual current on each line and compare: the one carrying your applied current is your cable, and the neighbours carrying a fraction of it are not. One practical note from the session: current direction can only be applied through direct connection leads or a clamp, and the different manufacturers do not all handle it the same way.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Where the Signal Goes, and Where It Leaks</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Signal does not stay where you put it. On a bare metal pipe there is loss immediately, with current returning through the ground rather than staying on the line. On a network with branches, every branch takes a share. Over a long run the current falls away and then, usefully, begins to rise again as you approach the next connection point, which is a pattern worth recognising because it tells you something about the network rather than about your equipment. Knowing all of this is what separates a trace you can defend from a line painted on the road that happens to be near the truth.
      </p>
    </VideoArticle>
  );
}
