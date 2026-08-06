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
        Power mode listens for the field around a loaded cable. Radio mode listens for long wave radio re-radiating off long buried conductors. Neither puts anything onto the line, which means both depend entirely on conditions you do not control, and both go quiet when those conditions change. That is not a defect. It is what passive means, and the whole session is about the consequences of forgetting it.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">What the Instrument Is Actually Detecting</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Alternating current changes direction fifty times a second, and that alternation generates a magnetic field around the conductor. The receiver has aerials, usually a top and a bottom one, reading that field and comparing what each of them sees. The detail worth holding on to is that magnetic fields are not exclusive to buried cables. They come off buildings, substations and all manner of things around you, which is part of why a passive response is not the same as a located service.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Networks Changed, and the Assumption Did Not</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Modern power cable does not behave the way the training folklore assumes. Balanced loads and modern construction reduce the external field that power mode depends on, so a live cable can be genuinely present and genuinely quiet. High voltage is the sharpest example: people expect high voltage to mean a big signal, and the balancing effect on HV often means very nearly the opposite.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Same Ground, Two Hours Apart</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        One of the clearest demonstrations in the session is the same piece of ground scanned at different times of day. Early, with load on the network, power mode responds. Later, with the load gone, the same cable in the same position gives far less. Nothing underground changed between the two scans. Only the electricity did. Any survey resting on passive modes is therefore resting on the time of day it happened to be carried out.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Which Is Why the Genny Is the Point</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        None of this is a criticism of the receiver, and the session says so directly. It is an argument about sequence. If the passive modes are the survey, the survey is at the mercy of load, weather and timing. If the Genny is the survey and the passive modes are the sweep that supports it, you are working with a signal you put there deliberately, at a frequency you chose, on a service you identified. That is a different job, done with the same equipment.
      </p>
    </VideoArticle>
  );
}
