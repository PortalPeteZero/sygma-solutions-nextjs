import { NextResponse } from 'next/server';

const VALID_EVENTS = new Set(['phone_click', 'email_click', 'chat_started']);

// The browser fires the SAME event name client-side via dataLayer -> GTM -> GA4.
// If the server copy also used that name, one tap produced two GA4 events under one
// name and anything importing it counted the tap twice. Measured 6 Aug 2026 over 60
// days: 73 `phone_click` events, 42 of them server copies with no page attached --
// and `phone_click` is a BIDDABLE Google Ads conversion, so the inflation reached
// bidding. The contact form already avoids this by using two different names
// (form_submit client-side, generate_lead server-side); this applies the same rule
// to the three click events. Suffixing keeps the consent-free signal without ever
// colliding with the consent-gated one.
const SERVER_SUFFIX = '_server';

async function fireGA4(
  eventName: string,
  value: string,
  clientId?: string,
  gclid?: string,
): Promise<void> {
  const mpSecret = process.env.GA4_MP_API_SECRET;
  if (!mpSecret) return;

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=G-QVFF0DPG6X&api_secret=${mpSecret}`;

  const params: Record<string, string> = { source: 'server' };
  if (eventName === 'phone_click') params.phone_number = value;
  if (eventName === 'email_click') params.email_address = value;
  if (eventName === 'chat_started') params.event_label = value || 'tidio_chat';
  // gclid lets GA4 credit the originating ad click even with no session stitch.
  if (gclid) params.gclid = gclid;

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // Real client_id when the browser could read it (full session stitch);
      // the stable server id only as a fallback for no-consent users.
      client_id: clientId || 'server.sygma-solutions.com',
      events: [{ name: `${eventName}${SERVER_SUFFIX}`, params }],
    }),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event, value, client_id: clientId, gclid } = body || {};

    if (typeof event !== 'string' || !VALID_EVENTS.has(event)) {
      return NextResponse.json({ error: 'invalid event' }, { status: 400 });
    }

    await fireGA4(
      event,
      String(value || ''),
      typeof clientId === 'string' ? clientId : undefined,
      typeof gclid === 'string' ? gclid : undefined,
    );
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error('track-click error (non-blocking):', err);
    return new NextResponse(null, { status: 204 });
  }
}
