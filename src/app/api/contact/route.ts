import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Fire server-side GA4 conversion events via Measurement Protocol.
// Runs after every successful form submission regardless of browser consent state.
// Non-blocking -- a GA4 failure never stops the form from completing.
//
// Two new pieces of context (added 2026-05-07) that make paid-click attribution
// actually work:
//   - clientId: the user's real GA4 client_id read from their _ga cookie when
//     consent allows. If supplied, server-side events stitch into the same user
//     session that started with the ad click. If absent (no consent), we fall
//     back to a stable server identifier -- conversion still counts but
//     session stitching is lost.
//   - gclid: read from the page URL or the _gcl_aw cookie (written by GTM's
//     Conversion Linker). Sent in event params so GA4 attributes the
//     conversion to the originating Google Ads click even without session
//     stitching. This is the bit that fixes "form_submit shows (not set)
//     instead of google / cpc" for no-consent users.
async function fireGA4Conversion(opts: {
  enquiry_type: string;
  clientId?: string;
  gclid?: string;
}): Promise<void> {
  const { enquiry_type, clientId, gclid } = opts;
  const mpSecret = process.env.GA4_MP_API_SECRET;
  if (!mpSecret) return;

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=G-QVFF0DPG6X&api_secret=${mpSecret}`;

  // Use the user's real GA4 client_id when supplied (full session stitch).
  // Fallback to a stable server identifier when consent is not given so the
  // event still counts even though session attribution can't be reconstructed.
  const effectiveClientId = clientId || 'server.sygma-solutions.com';

  // Common params for both events. Including gclid lets GA4 attribute the
  // conversion to the originating paid click independently of session.
  const baseParams: Record<string, string> = {
    enquiry_type,
    source: 'server',
  };
  if (gclid) {
    baseParams.gclid = gclid;
  }

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: effectiveClientId,
      events: [
        {
          // GA4 recommended event for lead/enquiry conversions.
          // This is the ONLY conversion the server-side MP path fires.
          //
          // We deliberately do NOT fire form_submit here:
          //   - Client-side already fires form_submit via dataLayer (analytics.ts)
          //     with proper page context (page=/contact).
          //   - MP events arrive without a page_location, so any server-side
          //     form_submit showed up in GA4 with page=(not set) and inflated
          //     the form_submit conversion count by ~50% (8 of 24 events in
          //     a sample week were the (not set) MP duplicates).
          //   - generate_lead is sufficient to track no-consent users for
          //     attribution / bidding -- it doesn't need form_submit as a
          //     parallel signal.
          name: 'generate_lead',
          params: { ...baseParams, form_name: 'contact' },
        },
      ],
    }),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const required = ['full_name', 'company_name', 'email', 'phone', 'enquiry_type'];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase env vars not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase.functions.invoke('send-contact-email', {
      body: {
        full_name: body.full_name,
        company_name: body.company_name,
        email: body.email,
        phone: body.phone,
        enquiry_type: body.enquiry_type,
        how_heard: body.how_heard || undefined,
        message: body.message || '',
      },
    });

    if (error) {
      console.error('Supabase function error:', error);
      return NextResponse.json(
        { error: 'Failed to send enquiry' },
        { status: 502 }
      );
    }

    // Fire GA4 server-side events -- non-blocking, never fails the form.
    // Forward gclid + ga_client_id from the browser so paid attribution
    // actually credits the originating ad click instead of landing as
    // (not set) for no-consent users.
    fireGA4Conversion({
      enquiry_type: body.enquiry_type,
      clientId: typeof body.ga_client_id === 'string' ? body.ga_client_id : undefined,
      gclid: typeof body.gclid === 'string' ? body.gclid : undefined,
    }).catch((err) =>
      console.error('GA4 MP error (non-blocking):', err),
    );

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
