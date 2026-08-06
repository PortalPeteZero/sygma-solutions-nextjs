import type { Metadata } from "next";
import { VideoArticle, videoMetadata } from "@/components/VideoArticle";
import { videoLibrary } from "@/data/videoLibrary";

const entry = videoLibrary.find((v) => v.slug === "how-uk-underground-utility-networks-are-built")!;

export const metadata: Metadata = videoMetadata(entry);

export default function Page() {
  return (
    <VideoArticle entry={entry}>
      <h2 className="text-2xl font-black text-foreground mb-4">Knowing What Should Be There</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Locating is easier when you know what a street is likely to contain before you switch anything on. This session is the background: how UK distribution is arranged, what is underfoot in an ordinary road, how telecoms and water and gas are laid out around it, and what the surface gives away if you read it.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Eleven Thousand Volts Under an Ordinary Street</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Walk down an average street and the distribution running under it is predominantly eleven kilovolt, feeding substations that step it down to the low voltage network people actually connect to. That is not exotic infrastructure in a special location. It is the normal arrangement in the normal road, under the footpath people park on.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Joint Bays, and Why an Earth Is Not Always an Earth</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        At joint bays the cables are connected together, with links between the joints, and that changes what happens when you apply a signal: it will travel further and into more services than the drawing suggests. There is a related trap on earthing. A cable can have an earth in the electrical sense and still not offer the return path a transmitter needs, which reads on site as equipment failure and is nothing of the sort.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">High Voltage in Close Company</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Where several high voltage cables run close together, tracing becomes genuinely difficult rather than merely awkward. Signal goes onto one and onto the next, the fields distort each other, and without access to the individual cables there is often no clean answer. The session is candid about it, which is more useful than a technique that only works in a diagram.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Telecoms Has Its Own Logic</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Telecoms is laid out to a pattern worth knowing. Connections to properties sit in the duct nearest the boundary line, and fibre tends to run nearest the road. A sweat tee is not a tee shape at all, it is closer to a Y, and it heads for the nearest cabinet. Knowing the pattern tells you where to look before the locator tells you anything.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Reading the Surface</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        A great deal is written on the street if you know the notation. Marker plates and posts carry letters indicating the feature, H for a hydrant, SV for a sluice valve, and so on, along with figures giving distances. Old plates still carry the names of organisations that no longer exist, which is a dating tool in itself. None of it is a substitute for a survey, and all of it tells you where to start.
      </p>
    </VideoArticle>
  );
}
