import type { Metadata } from "next";
import { VideoArticle, videoMetadata } from "@/components/VideoArticle";
import { videoLibrary } from "@/data/videoLibrary";

const entry = videoLibrary.find((v) => v.slug === "earthing-a-genny-signal-clamp-induction")!;

export const metadata: Metadata = videoMetadata(entry);

export default function Page() {
  return (
    <VideoArticle entry={entry}>
      <h2 className="text-2xl font-black text-foreground mb-4">The Transmitter Makes a Circuit</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The single idea this session is built on is that a Genny does not simply put signal onto a cable. It creates a circuit. Signal travels out along the service and returns through the ground to the earth stake, and everything that follows, including how far the trace goes and where it fades, is a consequence of that loop.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">How Far the Signal Actually Goes</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Signal does not travel indefinitely and it does not stop abruptly. It attenuates, and the rate depends on the service, the ground and the frequency. The session works through what to expect and, more usefully, how to recognise that you are following the tail of a signal rather than a strong one.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Every Branch Takes a Share</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        On an LV main, each branch feeding a property or a piece of street furniture draws some of the signal off. That is why a trace that starts strong at the connection point can be weak fifty metres later, on a cable that is perfectly healthy. It is not the machine and it is not the operator, it is the network.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Outside Lights, and the Value of a Good Connection</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Some connections are far better than others, and the session is specific about which. An outside light on a property gives a genuinely good connection to the LV service, and clipping onto the metal work is often the most productive thing available on a residential street.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Where Induction Runs Out</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Induction is convenient and it is the method that most flatters a survey, because it will almost always produce a response. The session covers the limits honestly: signal coupled onto everything in the vicinity, no certainty about which line you are following, and an airborne component that will read as a buried service if you let it.
      </p>
    </VideoArticle>
  );
}
