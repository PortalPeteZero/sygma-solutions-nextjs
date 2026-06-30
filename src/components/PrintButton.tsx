'use client';

/* Print / save-as-PDF for agenda pages. The browser's print dialog has a
   "Save as PDF" option, so this gives the downloadable agenda without a
   separate PDF pipeline. */
export default function PrintButton({ label = 'Print / Save as PDF' }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center justify-center px-5 py-3 rounded-md border border-primary/30 bg-white text-primary font-bold text-sm hover:bg-primary/5 transition-colors whitespace-nowrap"
    >
      {label}
    </button>
  );
}
