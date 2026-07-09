import React from 'react';

/* Accreditation strip — EUSR Approved Provider · ProQual · CITB Approved Training Organisation.
   Sits directly under the hero on every course agenda. Slim band: label on the left, the three
   logos on the right, tight vertical padding. Hidden in the print/PDF export. */

export default function AccreditationStrip() {
  return (
    <section className="border-b border-border bg-muted/30 py-2.5 print:hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5 md:flex-nowrap md:justify-between md:gap-x-6">
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-muted-foreground shrink-0 whitespace-nowrap">Accredited &amp; approved by</p>
        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-1.5 md:gap-x-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/accreditations/eusr-approved-provider.webp" alt="EUSR Approved Provider" className="h-11 md:h-12 w-auto" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/accreditations/proqual.png" alt="ProQual accredited centre" className="h-12 md:h-14 w-auto" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/accreditations/citb-ato.jpg" alt="CITB Approved Training Organisation" className="h-10 md:h-11 w-auto" />
        </div>
      </div>
    </section>
  );
}
