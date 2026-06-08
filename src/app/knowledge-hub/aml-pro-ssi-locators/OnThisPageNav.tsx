'use client';

import { useEffect, useState } from 'react';

type TocItem = { id: string; label: string };

/* Sticky "On this page" TOC with active-section highlight (IntersectionObserver). */
export default function OnThisPageNav({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { rootMargin: '-15% 0px -75% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  return (
    <>
      <div className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">On this page</div>
      <nav className="border-l border-border">
        {items.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={`block py-1 pl-3 -ml-px border-l text-sm transition-colors ${
              active === t.id
                ? 'border-accent text-accent font-semibold'
                : 'border-transparent text-muted-foreground hover:text-primary hover:border-primary'
            }`}
          >
            {t.label}
          </a>
        ))}
      </nav>
    </>
  );
}
