'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/* Reading-progress bar (top) + back-to-top button — mirrors the standalone microsite. */
export default function ReadingProgress() {
  const [pct, setPct] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
      setShow(h.scrollTop > 800);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-accent z-[1001]"
        style={{ width: `${pct}%` }}
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed right-4 bottom-4 z-[998] flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-opacity ${
          show ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
