import type { Metadata } from "next";
import { VideoArticle, videoMetadata } from "@/components/VideoArticle";
import { videoLibrary } from "@/data/videoLibrary";

const entry = videoLibrary.find((v) => v.slug === "cat-power-and-radio-modes")!;

export const metadata: Metadata = videoMetadata(entry);

export default function Page() {
  return (
    <VideoArticle entry={entry}>
      <h2 className="text-2xl font-black text-foreground mb-4">Passive Modes Find What Happens to Be There</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Power mode listens for the field around a loaded cable. Radio mode listens for long wave radio re-radiating off long conductors. Neither is putting anything onto the line, which means both depend entirely on conditions you do not control, and both go quiet when those conditions change.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Networks Changed, and the Assumption Did Not</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Modern power cable does not behave the way the training folklore assumes. Balanced loads and modern construction reduce the field that power mode relies on, so a live cable can be genuinely there and genuinely quiet. This session goes through why, with the network history that explains it.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Same Ground, Two Hours Apart</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        One of the clearest demonstrations in the session is the same piece of ground scanned at different times of day. Early, with load on the network, power mode responds. Later, with the load gone, the same cable in the same place gives far less. Nothing under the road changed. Only the electricity did.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Which Is Why the Genny Is the Point</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        None of this is a criticism of the receiver. It is an argument about sequence. If the passive modes are the survey, the survey is at the mercy of load, weather and time of day. If the Genny is the survey and the passive modes are the sweep that follows it, you are working with something you put there on purpose.
      </p>
    </VideoArticle>
  );
}
