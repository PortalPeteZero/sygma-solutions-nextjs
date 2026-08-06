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
        A locator on passive modes is listening for what happens to be there. Signal application is the opposite: you decide what is on the cable, so you already know the frequency, and you already know roughly where the signal should be going. Everything in this session follows from that one change of stance. The session runs just over two hours because signal application is not a single technique, it is a set of them, and the skill is choosing.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Earth Is Not an Afterthought</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The transmitter needs a circuit. Signal leaves the Genny, travels the service, and has to get back, and the way back is the earth. That is why the earth stake position changes results so much, and why a poor earth feels like a faulty machine. The session covers what actually makes an acceptable return path, including the question of using a tree, and what to do on ground that will not take a stake.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Direct Connection, the Signal Clamp, and Induction</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        These are three different tools for three different situations, not three ways of doing the same thing. Direct connection puts the most signal on the service and should be the first choice whenever there is something to connect to. The signal clamp is for when you can get around a cable but must not touch it. Induction is the last resort, and the session is honest about what it costs you: signal on everything nearby, including things you did not intend.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Null Antenna, and Reading What Comes Back</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Once a signal is on a line, the receiver has to be read properly. The null antenna gives signal away from the cable and drops to nothing directly over it, which is the opposite of what most people expect on first use. The session works through why that happens and how to use it for pinpointing rather than fighting it.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Where the Signal Goes, and Where It Leaks</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Signal does not stay where you put it. On a bare metal pipe there is loss straight away, with current returning through the ground rather than staying on the line. On a network with branches, every branch takes a share. Knowing that is what separates a trace you can trust from a line on the road that happens to be somewhere near the truth.
      </p>
    </VideoArticle>
  );
}
