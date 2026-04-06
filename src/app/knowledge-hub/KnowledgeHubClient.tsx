'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

type FilterType = "all" | "article" | "video";

interface KnowledgeHubItem {
  title: string;
  type: "article" | "video";
  category: string;
  desc: string;
  href: string;
  image?: string;
  youtubeId?: string;
}

export default function KnowledgeHubClient({ items }: { items: KnowledgeHubItem[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.type === activeFilter);

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Articles", value: "article" },
    { label: "Videos", value: "video" },
  ];

  const handleFilter = (value: FilterType) => {
    setActiveFilter(value);
  };

  return (
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
  );
}
