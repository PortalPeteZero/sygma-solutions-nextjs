import { useState } from "react";
import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import { knowledgeHubItems } from "@/data/knowledgeHubItems";
import type { Metadata } from 'next';

type FilterType = "all" | "article" | "video";

export const metadata: Metadata = {
  title: 'Utility Training Guides & Articles | Sygma Solutions',
  description: 'Technical resources and guides on underground utility location, avoidance, and mapping. Written by specialist trainers for utility professionals.',
  alternates: {
    canonical: 'https://sygma-solutions.com/knowledge-hub',
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Utility Training Guides & Articles | Sygma Solutions',
    description: 'Technical resources and guides on underground utility location, avoidance, and mapping. Written by specialist trainers for utility professionals.',
    url: 'https://sygma-solutions.com/knowledge-hub',
    siteName: 'Sygma Solutions',
    type: 'website',
  },
};

export default function KnowledgeHub() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredItems =
    activeFilter === "all"
      ? knowledgeHubItems
      : knowledgeHubItems.filter((item) => item.type === activeFilter);

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Articles", value: "article" },
    { label: "Videos", value: "video" },
  ];

  const handleFilter = (value: FilterType) => {
    setActiveFilter(value);
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Knowledge Hub",
        "description": "Technical resources and guides on underground utility location, avoidance, and mapping. Written by specialist trainers for utility professionals.",
        "url": "https://sygma-solutions.com/knowledge-hub",
        "publisher": {
          "@type": "Organization",
          "@id": "https://sygma-solutions.com/#organization",
          "name": "Sygma Solutions"
        }
      }) }} />
      <InnerPageHero
        image="/images/courses/CAT4-and-Genny-61.webp"
        alt="Sygma Solutions knowledge hub covering cable avoidance and utility mapping guidance"
        eyebrow="Knowledge Hub"
        headline="Practical Knowledge for Underground Utility Professionals"
        sub="Guides, explainers, and technical resources on utility location, avoidance, and mapping. Written by Sygma's specialist trainers."
        breadcrumbs={[{ label: "Knowledge Hub" }]}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-center gap-2 mb-8">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => handleFilter(btn.value)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  activeFilter === btn.value
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.title}
                className="border border-border rounded-xl bg-card flex flex-col overflow-hidden"
              >
                {item.type === "article" && item.image && (
                  <Link href={item.href} className="block">
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-video object-cover"
                    />
                  </Link>
                )}
                {item.type === "video" && item.youtubeId && (
                  <Link href={item.href} className="relative block">
                    <img
                      loading="lazy"
                      src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play
                          size={24}
                          className="text-primary-foreground ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </Link>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                    {item.category}
                  </div>
                  <h3 className="font-black text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    {item.type === "video" ? "Watch video" : "Read more"}{" "}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-4">
            <img
              loading="lazy"
              src="/images/about/CAT4-and-Genny-46.webp"
              alt="Underground utility training knowledge resources"
              className="rounded-lg object-cover aspect-[4/3] w-full"
            />
            <img
              loading="lazy"
              src="/images/about/Safe-Dig-01.webp"
              alt="Safe digging practices training materials"
              className="rounded-lg object-cover aspect-[4/3] w-full"
            />
            <img
              loading="lazy"
              src="/images/about/MALA-GPR-05.webp"
              alt="Utility location knowledge and technical expertise"
              className="rounded-lg object-cover aspect-[4/3] w-full"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <img
            loading="lazy"
            src="/images/courses/CAT4-and-Genny-10.webp"
            alt="Cable avoidance training knowledge resources"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            loading="lazy"
            src="/images/courses/MALA-GPR-11.webp"
            alt="Utility mapping and GPR survey expertise"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            loading="lazy"
            src="/images/courses/Safe-Dig-10.webp"
            alt="Safe excavation practice and guidance"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <section className="py-14 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-6 md:px-8 text-center max-w-xl">
          <h2 className="text-2xl font-black mb-4 text-foreground">
            Have a Technical Question?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our trainers are available to answer questions from customers,
            clients, and industry contacts. Call us or get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
