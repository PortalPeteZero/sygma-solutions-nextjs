import React from 'react';

/* Shared bits for the Sygma course-agenda pages — the eyebrow label and the
   print/Save-as-PDF stylesheet, so PDF fixes apply across every agenda. */

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-black uppercase tracking-[0.25em] text-accent">{children}</p>
);

export const PRINT_CSS = `
@media print {
  @page { size: A4; margin: 11mm; }
  header, footer, .cky-consent-container, .cky-overlay, [class*="cky-"] { display: none !important; }
  main { padding-top: 0 !important; min-height: 0 !important; }
  body { background: #fff !important; }
  .agenda-doc *, .agenda-doc *::before, .agenda-doc *::after {
    background-image: none !important; background-color: transparent !important;
    color: #1c1c1c !important; box-shadow: none !important; border-color: #e3e3e3 !important;
    text-shadow: none !important; opacity: 1 !important;
  }
  .agenda-doc .text-accent { color: #c2410c !important; }
  .agenda-doc .bg-accent { background-color: #c2410c !important; color: #fff !important; }
  .agenda-doc img, .agenda-doc .imgbox { display: none !important; }
  .agenda-doc .print-cols-2 { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 7px 22px !important; }
  .agenda-doc .print-cols-3 { display: grid !important; grid-template-columns: 1fr 1fr 1fr !important; gap: 10px !important; }
  .agenda-doc .print-cols-4 { display: grid !important; grid-template-columns: repeat(4, 1fr) !important; gap: 6px !important; }
  .agenda-doc .mod-grid { display: block !important; }
  .agenda-doc .mod-card { border: none !important; border-top: 1px solid #e6e6e6 !important; border-radius: 0 !important; box-shadow: none !important; margin-top: 12px !important; break-inside: auto; }
  .agenda-doc .mod-card > div { padding: 8px 0 0 0 !important; }
  .agenda-doc section { padding: 7px 0 !important; border: none !important; }
  .agenda-doc .pb-keep, .agenda-doc .chip-group { break-inside: avoid; }
  .agenda-doc h1 { font-size: 18pt !important; line-height: 1.06 !important; margin-top: 8pt !important; }
  .agenda-doc h2 { font-size: 13.5pt !important; margin-top: 5pt !important; }
  .agenda-doc h3 { font-size: 11pt !important; }
  .agenda-doc .hero-strapline { font-size: 12.5pt !important; }
  .agenda-doc .spec-val { font-size: 12pt !important; }
  .agenda-doc .spec-cell { padding: 4px 8px 4px 0 !important; }
  .agenda-doc .cert-card { padding: 12px 14px !important; }
  .agenda-doc .cert-card .text-3xl { font-size: 15pt !important; }
  .agenda-doc a { text-decoration: none !important; }
  .agenda-doc { font-size: 9.5pt !important; }
}
`;
