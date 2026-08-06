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
        The single idea this session is built on is that a Genny does not simply put signal onto a cable. It creates a circuit. Signal travels out along the service and returns through the ground to the earth stake, and everything that follows, including how far a trace goes and where it fades, is a consequence of that loop rather than a property of the equipment.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Avoidance, or Location</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        There is a point in this session where the language itself gets challenged, and it is worth repeating. The term cable avoidance conjures people walking around in zigzags on power and radio, hoping to be warned. The argument made here is that the job is location: finding out what is there, proving it, and marking it, so that avoidance becomes a consequence of knowledge rather than a substitute for it.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">How Far the Signal Actually Goes</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Signal does not travel indefinitely and it does not stop abruptly. It attenuates, at a rate that depends on the service, the ground and the frequency. What matters in practice is recognising when you are following the tail of a signal rather than a strong one, because a weak trace followed confidently is how a line ends up marked in the wrong place.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Every Branch Takes a Share</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        On a low voltage main, each branch feeding a property or a piece of street furniture draws some of the signal away. That is why a trace which starts strongly at the connection point can be weak fifty metres later on a perfectly healthy cable. It is not the operator and it is not the machine, it is the network doing what networks do.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Strongest Signal Is Not Always Your Cable</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        In theory, whatever you have connected to should carry a stronger signal than anything picking it up second hand. In practice that is not reliable. The worked example in this session has three services reading roughly fifty, forty and ten. The crew traced the forty, believing it to be the target, and the ten simply disappeared underneath it, too close and too weak to separate. A masked service is not a rare event and it does not announce itself.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Outside Lights, and the Value of a Good Connection</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Some connections are far better than others and the session is specific about which. An outside light on a property gives a genuinely good connection to the low voltage service, and clipping onto the metalwork is often the most productive thing available on a residential street. Knowing three or four reliable connection points of this kind is worth more than any amount of sweeping.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Where Induction Runs Out</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Induction is convenient and it flatters a survey, because it will nearly always produce some kind of response. The limits are the point: signal coupled onto everything in the vicinity, no certainty about which line you are actually following, and an airborne component that will read as a buried service unless you check for it deliberately.
      </p>
    </VideoArticle>
  );
}
