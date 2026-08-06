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
        A standard cable avoidance tool answers one question: is something there. A precision locator answers several more, and this session is about those. Frequency choice, depth, the shape of the field around a line, and which of two adjacent cables is carrying the signal you applied. The equipment covered is the Radiodetection RD8000 and RD8100 range alongside the vLoc, because those are what UK crews actually meet, and the theory transfers to whatever is in your van.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Frequency Is a Decision, Not a Default</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Low frequencies stay on the line and travel further. High frequencies couple more easily onto anything nearby and fall away sooner. There is no formal definition of low, medium and high, but in practice the eight to ten kilohertz region behaves as a low to medium choice and gives good distance on a well connected line. Frequency choice is the single lever that most changes what a survey finds, and it is the one most often left wherever the last user happened to leave it.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Getting an Earth When the Ground Fights You</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        A great deal of practical difficulty comes down to the return path rather than the equipment. The session covers what to do when the stake will not go in, when it goes in and still reads badly, and how to tell a poor earth from a genuine fault on the line. It also makes a point that is easy to forget: the mass of ground completing your circuit contains everything else buried in it. Old tramlines, railway lines, fences and even a large vehicle parked alongside you will carry some of that signal and become part of the circuit you are working with.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Magnetic Field, and Working Depth From It</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Around an undistorted cable the magnetic field forms concentric rings, and the angle at which those rings pass through the receiver aerial is what the instrument is actually reading. The session shows the undistorted case first, then what happens when another line is close enough to distort the field, which is the point at which a depth reading starts to lie to you while still displaying a number to one decimal place.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">The Seventy Per Cent Habit</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        One technique from the older training is worth keeping. Operators were taught to set the instrument to around seventy per cent and then watch it: any change in signal as you went back over the same ground indicated that something had happened to your current. It is a simple discipline that turns the receiver into a comparison tool rather than a number generator, and it still catches problems that a modern automatic display hides.
      </p>
      <h2 className="text-2xl font-black text-foreground mb-4">Current Direction, and Telling Two Cables Apart</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Where two cables run together, signal strength will not separate them, because both may carry your signal. Current direction shows which way current is flowing, which resolves the pair. It is the feature most often owned and least often used, and the session spends real time on it because it is the difference between marking two lines correctly and marking one line twice.
      </p>
    </VideoArticle>
  );
}
