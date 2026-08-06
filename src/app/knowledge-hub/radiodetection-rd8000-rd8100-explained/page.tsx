import type { Metadata } from "next";
import { VideoArticle, videoMetadata } from "@/components/VideoArticle";
import { videoLibrary } from "@/data/videoLibrary";

const entry = videoLibrary.find((v) => v.slug === "radiodetection-rd8000-rd8100-explained")!;

export const metadata: Metadata = videoMetadata(entry);

export default function Page() {
  return (
    <VideoArticle entry={entry}>
      <h2 className="text-2xl font-black text-foreground mb-4">What a Precision Locator Adds</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        A standard cable avoidance tool answers one question: is something there. A precision locator answers several more, and this session is about those. Frequency choice, depth, the shape of the field around the line, and which of two adjacent cables carries the signal you applied. The equipment covered is the Radiodetection RD8000 and RD8100 range alongside the vLoc, because in practice UK crews meet both.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Frequency Is a Decision, Not a Default</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Low frequencies stay on the line and travel further. High frequencies couple more easily but leak onto everything nearby. The session spends real time on this because frequency choice is the single lever that most changes what a survey finds, and it is the one most often left at whatever the last user selected.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Getting an Earth When the Ground Fights You</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        A lot of practical difficulty comes down to the return path. The session covers what to do when the stake will not go in, when it goes in and reads badly, and how to tell the difference between a poor earth and a genuine fault on the line.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Magnetic Field, and Working Depth From It</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Around an undistorted cable the magnetic field is a set of concentric rings, and field strength falls away with distance in a way that can be worked with. The session shows the undistorted case first, then what distortion looks like when another line is close, which is when a depth reading starts lying to you.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Current Direction, and Telling Two Cables Apart</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Where two cables run together, signal strength alone will not separate them, because both may carry your signal. Current direction shows which way the current is flowing, which is what resolves the pair. It is the feature most often owned and least often used.
      </p>
    </VideoArticle>
  );
}
