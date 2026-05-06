'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

// Persist gclid to localStorage on landing so it survives in-site navigation.
// Without this, a user who lands on /courses/cat-and-genny-training?gclid=...
// and then clicks through to /contact loses the gclid in the URL, leaving
// the contact form's server-side Measurement Protocol call with nothing to
// attribute the conversion to.
//
// We only persist a non-PII click identifier the user already shared with us
// via the URL; no independent tracking happens here. Survives 90 days to
// mirror Google Ads' default click-to-conversion attribution window.
function persistAdClickIdentifiers(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    if (gclid) {
      localStorage.setItem('sygma_gclid', gclid);
      localStorage.setItem('sygma_gclid_ts', String(Date.now()));
    }
    const ts = Number(localStorage.getItem('sygma_gclid_ts') || 0);
    const ninetyDaysMs = 90 * 24 * 60 * 60 * 1000;
    if (ts && Date.now() - ts > ninetyDaysMs) {
      localStorage.removeItem('sygma_gclid');
      localStorage.removeItem('sygma_gclid_ts');
    }
  } catch {
    // localStorage may be disabled (private mode, storage quotas) -- silent
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    persistAdClickIdentifiers();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
