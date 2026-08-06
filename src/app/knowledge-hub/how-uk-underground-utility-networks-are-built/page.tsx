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
        Locating is easier when you know what a street is likely to contain before you start. This session is the background: how UK distribution is arranged, what voltages are underfoot in an ordinary road, and how gas and drainage fit around them.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Eleven Thousand Volts Under an Ordinary Street</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Walk down an average street and the distribution running under it is predominantly 11 kV, feeding substations that step it down for the low voltage network people actually connect to. That is not exotic infrastructure in a special location. It is the normal arrangement, in the normal road, under the normal footpath.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">What Colour Is a High Voltage Cable</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The assumption that HV is one colour is wrong, and it is a dangerous kind of wrong. There is blue plastic covered HV cable in the ground in this country, and there is yellow, and there is black. Colour is an indication and never a determination, which is why the session keeps returning to what the locator and the plan say rather than what the sheath looks like.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">How LV Feeds Off the Main</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The typical arrangement is a mains LV cable running the pavement with feeds coming off it to whatever needs supply, a bus shelter, a lighting column, a property. Every one of those feeds is a branch, and every branch takes a share of any signal you apply, which is the practical reason a long trace on LV fades.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Gas, Water and Drainage</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The session also covers where gas comes from and how it reaches a property, and what drainage is likely to be made of, because both change what a locator can and cannot do. A plastic gas service returns nothing to an electromagnetic locator at all, which is a fact about the material and not a fault in the survey.
      </p>
    </VideoArticle>
  );
}
