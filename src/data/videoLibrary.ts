import type { VideoKeyMoment } from "@/lib/schema";

/**
 * Every video that has a page on this site — the ONE source of truth for the page, the
 * knowledge hub card, the sitemap and the video sitemap. They used to be written out
 * separately, which is how five video pages ended up with no video sitemap entries at all.
 *
 * `keyMoments` are real section boundaries taken from the Sygma transcript of each video
 * (Underground Intelligence Bureau, `resource_block.meta.start_seconds`), not arbitrary
 * slices. They matter most here because of the lengths involved: the longest video in this
 * set runs 3 h 45 m, and Google surfaces these as jump-to links under the result.
 *
 * `uploadDate` and `duration` are read from the YouTube Data API, never typed by hand.
 */
export interface VideoLibraryEntry {
  slug: string;
  youtubeId: string;
  /** <title> — must stay <= 60 characters INCLUDING " | Sygma". */
  title: string;
  /** The on-page H1. Longer than the title, and uses "Genny and CAT" (Genny first). */
  h1: string;
  /** Meta + OG description, and the VideoObject description. Distinct per page. */
  description: string;
  /** The InnerPageHero standfirst. */
  sub: string;
  category: string;
  /** Short label for the breadcrumb tail. */
  crumb: string;
  /** Card copy on /knowledge-hub. */
  cardDesc: string;
  uploadDate: string;
  duration: string;
  keyMoments: VideoKeyMoment[];
  /** The money page this links UP to, with the commercial anchor. */
  course: { href: string; label: string; cta: string };
  heroImage: string;
  heroAlt: string;
}

export const videoLibrary: VideoLibraryEntry[] = [
  {
    slug: "how-to-use-a-cat-and-genny",
    youtubeId: "ie96BCM8uug",
    title: "How to Use a CAT and Genny: Signal Application | Sygma",
    h1: "How to Use a Genny and CAT: Direct Connection, the Signal Clamp and Induction",
    description:
      "The full session on applying a signal: earthing the transmitter, direct connection, the signal clamp, induction and the null antenna, and why signal is lost on bare metal pipe.",
    sub: "Two hours on signal application from first principles: what an earth actually has to be, when to connect direct, when to clamp, when to induce, and how to tell which one the ground in front of you is asking for.",
    category: "CAT and Genny",
    crumb: "Signal Application",
    cardDesc:
      "Two hours on signal application: earthing the transmitter, direct connection, the signal clamp, induction and the null antenna, and where the signal goes once you have applied it.",
    uploadDate: "2026-08-05T15:51:47Z",
    duration: "PT2H9M54S",
    keyMoments: [
      { name: "Where to start with signal application", startOffset: 0 },
      { name: "What an earth has to be, and using a tree as one", startOffset: 1029 },
      { name: "How a null antenna works", startOffset: 2188 },
      { name: "Current direction on cables", startOffset: 3188 },
      { name: "Higher frequencies on modern receivers", startOffset: 4306 },
      { name: "Signal loss on a bare metal pipe", startOffset: 5367 },
      { name: "Electrical circuits, and why surveyors are taught them", startOffset: 6585 },
    ],
    course: {
      href: "/courses/cat-and-genny-training",
      label: "CAT and Genny training",
      cta: "View the CAT and Genny Training Course",
    },
    heroImage: "cat-82",
    heroAlt: "A Genny transmitter connected to a service with the earth lead run out",
  },
  {
    slug: "permit-to-dig-trial-holes-exclusion-zones",
    youtubeId: "PQwrOwLLLo0",
    title: "Permit to Dig, Trial Holes and Exclusion Zones | Sygma",
    h1: "Permit to Dig, Trial Holes and Exclusion Zones: An Excavation From Plan to Safe Dig",
    description:
      "The whole excavation sequence in seventeen minutes: pre-construction information, the appointed person and the permit to break ground, the detection survey, then exclusion zones and safe digging.",
    sub: "Seventeen minutes covering an excavation end to end: the pre-construction information, who is allowed to issue a permit to break ground, the detection survey that has to happen first, and the exclusion zones that govern the dig itself.",
    category: "Safe Digging",
    crumb: "Permit to Dig and Safe Digging",
    cardDesc:
      "The whole excavation sequence: pre-construction information, the appointed person and the permit to break ground, the survey, then exclusion zones, trial holes and safe digging.",
    uploadDate: "2026-08-06T06:12:44Z",
    duration: "PT17M10S",
    keyMoments: [
      { name: "The full life cycle of an excavation", startOffset: 0 },
      { name: "The appointed person and the permit to break ground", startOffset: 141 },
      { name: "Starting the survey with the Genny, and the volt stick check", startOffset: 310 },
      { name: "Scanning technique at a lighting column", startOffset: 448 },
      { name: "Locating the remaining utilities", startOffset: 546 },
      { name: "The induction method, once connection and clamping are exhausted", startOffset: 670 },
      { name: "Nulling out what you have already found", startOffset: 784 },
      { name: "Exclusion zones and breaking out", startOffset: 907 },
    ],
    course: {
      href: "/courses/eusr-cat2-safe-dig",
      label: "EUSR Category 2 safe digging training",
      cta: "View the EUSR Cat 2 Safe Digging Course",
    },
    heroImage: "cat-73",
    heroAlt: "An excavation with the ground marked up and the exclusion zone set out",
  },
  {
    slug: "radiodetection-rd8000-rd8100-explained",
    youtubeId: "3PuJolykyBs",
    title: "Radiodetection RD8000 and RD8100 Explained | Sygma",
    h1: "Radiodetection RD8000 and RD8100 Explained: Frequencies, Connections and Current Direction",
    description:
      "The full high-end locator session: frequency choice, getting an earth when the ground fights you, reading the magnetic field, working depth from field strength, and current direction.",
    sub: "The long-form session on precision locators. Frequency choice and what each one does, getting an earth when the ground is against you, what the magnetic field around a cable actually looks like, and how current direction resolves the cable you cannot otherwise separate.",
    category: "Advanced Locating",
    crumb: "RD8000 and RD8100",
    cardDesc:
      "Frequency choice, getting an earth when the ground fights you, reading the magnetic field around a cable, working depth from field strength, and using current direction.",
    uploadDate: "2026-08-05T15:48:11Z",
    duration: "PT3H44M53S",
    keyMoments: [
      { name: "Getting started", startOffset: 56 },
      { name: "When you are struggling to get an earth", startOffset: 1487 },
      { name: "The magnetic field around an undistorted cable", startOffset: 3010 },
      { name: "Working depth from field strength", startOffset: 3910 },
      { name: "Cable identification in the UK", startOffset: 4984 },
      { name: "What to do when it is not working out", startOffset: 7071 },
    ],
    course: {
      href: "/courses/advanced-em-locator",
      label: "advanced EM locator training",
      cta: "View the Advanced EM Locator Course",
    },
    heroImage: "cat-86",
    heroAlt: "A precision electromagnetic locator being used to trace a buried cable",
  },
  {
    slug: "cat-manager-software-cat4-data",
    youtubeId: "c2-6-VAWOeY",
    title: "CAT Manager Software: Getting the Data Off a CAT4 | Sygma",
    h1: "CAT Manager Software: Getting the Data Off a CAT4, and Telling a Real Scan From a Box Ticked",
    description:
      "Pulling usage data off a CAT4 with CAT Manager: which models hold data, exporting it, reading the PDF report, and what a week of real site work looks like in the record.",
    sub: "How to get the usage history off a CAT4 and what to do with it once you have. Which models in the range record what, how to export it, how the report reads, and how a supervisor tells a proper scan from a box being ticked.",
    category: "CAT and Genny",
    crumb: "CAT Manager and CAT4 Data",
    cardDesc:
      "Which models hold data, how to export it, how the report reads, and how a supervisor tells a proper scan from a box ticked.",
    uploadDate: "2026-08-05T16:08:11Z",
    duration: "PT1H20M51S",
    keyMoments: [
      { name: "What the data actually tells you", startOffset: 0 },
      { name: "Plugging a CAT in and reading the dates it holds", startOffset: 663 },
      { name: "Selecting and exporting the data", startOffset: 1362 },
      { name: "Reading the usage figures", startOffset: 1936 },
      { name: "A team on a project for a week, in the record", startOffset: 2976 },
      { name: "The PDF report", startOffset: 3573 },
      { name: "Working the export in a spreadsheet", startOffset: 4168 },
    ],
    course: {
      href: "/courses/cat-manager",
      label: "CAT Manager training",
      cta: "View the CAT Manager Course",
    },
    heroImage: "cat-04-knowledge-hub",
    heroAlt: "CAT Manager software showing the usage history downloaded from a CAT4",
  },
  {
    slug: "cat-power-and-radio-modes",
    youtubeId: "cpt_IvZQ-nY",
    title: "CAT Power and Radio Modes: What Passive Misses | Sygma",
    h1: "CAT Power and Radio Modes: What Passive Scanning Misses on Underground Cables",
    description:
      "Why the passive modes on a cable avoidance tool find less than people assume: how UK networks changed, why the same spot reads differently at different times of day, and what the Genny is for.",
    sub: "The passive modes are where most people start and where most people stop. This session is about what they do not find: how the networks changed, why the same piece of ground reads differently at eight in the morning and eleven, and why that makes the Genny the point rather than an accessory.",
    category: "CAT and Genny",
    crumb: "Power and Radio Modes",
    cardDesc:
      "What the passive modes on a locator miss: how UK networks changed, why the same ground reads differently at different times of day, and why that makes the Genny the point.",
    uploadDate: "2026-08-05T15:48:36Z",
    duration: "PT47M2S",
    keyMoments: [
      { name: "Introduction", startOffset: 0 },
      { name: "Where the name CAT came from", startOffset: 430 },
      { name: "How the UK networks changed, and what modern power cables do", startOffset: 790 },
      { name: "The same spot at eleven in the morning", startOffset: 1149 },
      { name: "Why the Genny matters, and why this is not a criticism of the CAT", startOffset: 1543 },
      { name: "The part most people do not realise", startOffset: 1912 },
      { name: "The relationship between the distances", startOffset: 2360 },
    ],
    course: {
      href: "/courses/cable-avoidance-training",
      label: "cable avoidance training",
      cta: "View the Cable Avoidance Training Course",
    },
    heroImage: "cat-72-knowledge-hub",
    heroAlt: "A cable avoidance tool being swept across a road in power mode",
  },
  {
    slug: "reading-utility-plans",
    youtubeId: "hjLTP1HEL3s",
    title: "Reading Utility Plans: Loop-In, Loop-Out, Tee'd Off | Sygma",
    h1: "Reading Utility Plans: Loop-In Loop-Out, Tee'd Off, and What the Drawings Do Not Tell You",
    description:
      "Working through real utility drawings: the two ways street lighting is wired, what a plan shows and what it leaves out, and where to hook up when passive modes only find one of two stacked cables.",
    sub: "Real drawings, worked through. The two ways street lighting is wired in this country and why it changes everything you do next, what a plan genuinely tells you before you lift a kerb, and what to do when there are two cables stacked and passive only finds one.",
    category: "Utility Plans",
    crumb: "Reading Utility Plans",
    cardDesc:
      "Real drawings worked through: the two ways street lighting is wired, what a plan does and does not tell you, and where to hook up when two cables are stacked.",
    uploadDate: "2026-08-05T15:48:42Z",
    duration: "PT27M8S",
    keyMoments: [
      { name: "Why the plans matter", startOffset: 3 },
      { name: "A Scottish Power plan, worked through", startOffset: 215 },
      { name: "Hooking up and tracing back to find the service", startOffset: 464 },
      { name: "What the plan tells you before you touch a kerb", startOffset: 700 },
      { name: "Assume nothing", startOffset: 937 },
      { name: "What passive modes do when cables are stacked", startOffset: 1109 },
      { name: "Where to hook up to trace the top one and the bottom one", startOffset: 1281 },
    ],
    course: {
      href: "/courses/cable-avoidance-training",
      label: "cable avoidance training",
      cta: "View the Cable Avoidance Training Course",
    },
    heroImage: "cat-75-knowledge-hub",
    heroAlt: "A utility drawing laid out on site alongside a locator",
  },
  {
    slug: "how-uk-underground-utility-networks-are-built",
    youtubeId: "wYtZXiXpDqM",
    title: "How UK Underground Utility Networks Are Built | Sygma",
    h1: "How UK Underground Utility Networks Are Built: Substations, Transformers and Reading the Records",
    description:
      "What is actually under a UK street and how it got there: 11 kV distribution, the colours HV cable really comes in, how LV feeds off the main, gas from the North Sea to the house, and sewers.",
    sub: "What is genuinely buried under an average UK street, and how it came to be arranged that way. The 11 kV distribution you walk over daily, the colours HV cable really comes in, how LV feeds off the main to a bus shelter or a house, and where gas and drainage fit.",
    category: "Utility Networks",
    crumb: "How the Networks Are Built",
    cardDesc:
      "What is actually under a UK street: 11 kV distribution, the colours HV cable really comes in, how LV feeds off the main, gas from the North Sea to the house, and sewers.",
    uploadDate: "2026-08-05T15:48:20Z",
    duration: "PT1H48M40S",
    keyMoments: [
      { name: "11 kV in the average street", startOffset: 886 },
      { name: "The colours HV cable really comes in", startOffset: 1960 },
      { name: "What the modern plans show, and what they leave out", startOffset: 2760 },
      { name: "Mains LV down the pavement, and what feeds off it", startOffset: 3714 },
      { name: "Gas from the North Sea to the house", startOffset: 4626 },
      { name: "Sewers, and what they are made of", startOffset: 5590 },
    ],
    course: {
      href: "/training/utility-mapping-surveying",
      label: "utility mapping and surveying training",
      cta: "View Utility Mapping and Surveying Training",
    },
    heroImage: "cat-88-knowledge-hub",
    heroAlt: "A street with the buried utility network set out beneath it",
  },
  {
    slug: "earthing-a-genny-signal-clamp-induction",
    youtubeId: "ckwHQg5nVjc",
    title: "Earthing a Genny, the Signal Clamp and Induction | Sygma",
    h1: "Earthing a Genny, Using a Signal Clamp, and the Limits of Induction",
    description:
      "The circuit a Genny actually makes, how far the signal really travels, why every branch takes signal off an LV main, why outside lights work so well, and where induction stops being useful.",
    sub: "The circuit the transmitter actually makes and what that means in the ground: how far a signal really travels, why every branch takes some of it off the LV main, why an outside light is one of the best connections on a street, and the point where induction stops earning its place.",
    category: "CAT and Genny",
    crumb: "Earthing, Clamping and Induction",
    cardDesc:
      "The circuit a Genny actually makes: how far the signal travels, why every branch takes some off the LV, why outside lights work so well, and where induction runs out.",
    uploadDate: "2026-08-05T15:48:23Z",
    duration: "PT1H26M47S",
    keyMoments: [
      { name: "The signal goes out and comes back to earth: the circuit", startOffset: 1132 },
      { name: "How far the signal actually goes", startOffset: 2044 },
      { name: "Why every branch takes signal off the LV", startOffset: 2660 },
      { name: "Outside lights, and why they work so well", startOffset: 3119 },
      { name: "What happens when you connect the Genny here", startOffset: 3755 },
      { name: "Why passive modes struggle with this", startOffset: 4450 },
    ],
    course: {
      href: "/courses/cat-and-genny-training",
      label: "CAT and Genny training",
      cta: "View the CAT and Genny Training Course",
    },
    heroImage: "cat-82",
    heroAlt: "An earth stake driven in beside a Genny transmitter on a footpath",
  },
];

/**
 * The five video pages that existed before this set. They are listed here ONLY so the video
 * sitemap can cover them — their pages carry their own hand-written copy and are not generated
 * from this file. Durations and upload dates read from the YouTube Data API.
 */
export const legacyVideoPages = [
  {
    slug: "genny-first-in-practice-video",
    youtubeId: "IgxGksU3WQ4",
    title: "CAT and Genny Training: The Genny First Approach Explained",
    description:
      "Why the standard Power, Radio, Genny sequence is the wrong way round, and what the manufacturer manuals have been saying all along.",
    uploadDate: "2026-03-22T16:01:01Z",
    duration: "PT16M7S",
  },
  {
    slug: "genny-cat-direct-connection",
    youtubeId: "TOssiNUyVKQ",
    title: "Genny and CAT Direct Connection: Street Lighting, LV and Telecoms",
    description:
      "Setting up and earthing the Genny, connecting at a lighting column, concrete columns, gas risers, and the approvals needed before a telecoms lid comes up.",
    uploadDate: "2026-08-04T07:29:44Z",
    duration: "PT6M6S",
  },
  {
    slug: "cat-and-genny-training-video",
    youtubeId: "tQTrObaCcLE",
    title: "CAT and Genny Training Video: The Full Method",
    description:
      "The whole method end to end: pre-use checks, applying a signal, locating, pinpointing, airborne signal checks and taking a depth reading.",
    uploadDate: "2026-03-22T16:15:13Z",
    duration: "PT9M40S",
  },
  {
    slug: "cat-genny-signal-application-webinar",
    youtubeId: "ghlb9u8YTIk",
    title: "CAT and Genny Training Webinar: Signal Application",
    description:
      "Signal application from first principles: why you start with street lighting, the two ways lighting is wired, dual frequency, earthing the transmitter, and where the signal goes.",
    uploadDate: "2026-04-26T14:28:46Z",
    duration: "PT1H12M19S",
  },
  {
    slug: "locating-hv-cables",
    youtubeId: "4NL6ioJtWLE",
    title: "How to Locate HV Cables with a CAT and Genny",
    description:
      "Locating high voltage cables: why they are the hardest to find, and what changes about your approach when you know one is there.",
    uploadDate: "2026-04-26T12:49:51Z",
    duration: "PT12M40S",
  },
];
