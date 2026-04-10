/**
 * Single source of truth for all Knowledge Hub content.
 *
 * To add a new article or video:
 * 1. Add an entry to this array (articles appear on the index card grid;
 *    items with href starting /knowledge-hub/ also appear in the sidebar)
 * 2. Create the page file in src/pages/articles/
 * 3. Add the route in src/App.tsx
 *
 * Type "article" = text piece. Type "video" = YouTube embed page (add youtubeId).
 * Items linking outside /knowledge-hub/ (e.g. /osca, /contact) show on the index
 * but are excluded from the sidebar automatically.
 *
 * IMAGE RULES:
 * - Every article must use a UNIQUE Cloudinary image ID
 * - Only use landscape-oriented images (wider than tall) for card thumbnails
 * - Check existing entries before adding a new one to avoid duplicates
 */

export interface KnowledgeItem {
  category: string;
  title: string;
  desc: string;
  href: string;
  type: "article" | "video";
  youtubeId?: string;
  image?: string;
}

export const knowledgeHubItems: KnowledgeItem[] = [
  {
    category: "Utility Avoidance",
    title: "4 Behaviours That Can Cause Cable Strikes on Site",
    desc: "Most cable strikes trace back to the same four failure patterns in the pre-excavation survey. Understanding them is the first step to preventing them.",
    href: "/knowledge-hub/utility-strikes-first-20-metres",
    type: "article",
    image: "CAT4-and-Genny-03",
  },
  {
    category: "CAT and Genny",
    title: "Why You Should Always Connect the Genny First",
    desc: "Passive detection alone is not enough. Sygma's Genny-First methodology and why it produces measurable improvements in site safety.",
    href: "/knowledge-hub/genny-first-methodology",
    type: "article",
    image: "CAT4-and-Genny-02",
  },
  {
    category: "CAT and Genny",
    title: "CAT & Genny Training: The Genny First Approach Explained",
    desc: "Watch our training video on why the standard Power, Radio, Genny sequence is the wrong way round — and what the manufacturer manuals have been saying all along.",
    href: "/knowledge-hub/genny-first-in-practice-video",
    type: "video",
    youtubeId: "IgxGksU3WQ4",
  },
  {
    category: "Competency",
    title: "OSCA: The Case for On-Site Assessment",
    desc: "A three-year certificate confirms an operative passed a course. It does not confirm what they are doing on site today. How OSCA fills that gap.",
    href: "/osca",
    type: "article",
    image: "Safe-Dig-01",
  },
  {
    category: "Qualifications",
    title: "EUSR CAT1 vs ProQual CAT1: Which One Does Your Operative Need?",
    desc: "These are not equivalent qualifications. This guide explains why ProQual CAT1 is a significantly more thorough assessment and helps you choose the right one for your team.",
    href: "/knowledge-hub/eus-cat1-vs-proqual-cat1",
    type: "article",
    image: "CAT4-and-Genny-65",
  },
  {
    category: "CITB Funding",
    title: "CITB Funding for Utility Training: The 2026 Position",
    desc: "How the CITB Employer Network model works, what it means for your training budget, and how Sygma can help you access it.",
    href: "/knowledge-hub/citb-funding-utility-training",
    type: "article",
    image: "CAT4-and-Genny-64",
  },
  {
    category: "PAS 128",
    title: "Understanding PAS 128: A Guide for Contractors and Clients",
    desc: "What PAS 128 covers, what the different survey types require, and why operatives working on PAS 128 projects need specific training.",
    href: "/knowledge-hub/understanding-pas-128",
    type: "article",
    image: "Utility-Mapping-04",
  },
  {
    category: "HSG47",
    title: "HSG47 Explained: What It Requires and Who It Applies To",
    desc: "HSG47 is the principal guidance document for avoiding danger from underground services. This guide explains the key requirements and how Sygma's training maps to them.",
    href: "/knowledge-hub/hsg47-explained",
    type: "article",
    image: "Safe-Dig-10",
  },
  {
    category: "Bespoke Training",
    title: "When Does Your Organisation Need a Bespoke Training Programme?",
    desc: "Standard courses solve generic problems. Bespoke programmes solve specific ones. This piece explains how to tell the difference and when to invest in a bespoke approach.",
    href: "/bespoke-training",
    type: "article",
    image: "CAT4-and-Genny-60",
  },
  {
    category: "EUSR",
    title: "How to Renew Your EUSR Card",
    desc: "Your EUSR card has expired or is about to expire. This guide explains the EUSR card renewal process, what happens if your card lapses, and how to rebook your training.",
    href: "/knowledge-hub/eusr-card-renewal",
    type: "article",
    image: "CAT4-and-Genny-59",
  },
  {
    category: "Qualifications",
    title: "NPORS vs EUSR Cable Avoidance: Which Qualification Do You Need?",
    desc: "NPORS and EUSR both offer cable avoidance qualifications but they serve different purposes. This guide explains the differences, who accepts each one, and how to choose.",
    href: "/knowledge-hub/npors-vs-eusr",
    type: "article",
    image: "CAT4-and-Genny-01",
  },
  {
    category: "Site Safety",
    title: "Utility Strike Prevention: A Guide for Site Managers",
    desc: "Most utility strikes are preventable. Practical guidance on pre-dig procedures, training requirements, supervision, and building a culture that prioritises doing it right.",
    href: "/knowledge-hub/strike-prevention-site-managers",
    type: "article",
    image: "CAT4-and-Genny-05",
  },
];
