import { NextResponse } from 'next/server';

const VALID_EVENTS = new Set(['phone_click', 'email_click', 'chat_started']);

async function fireGA4(eventName: string, value: string): Promise<void> {
  const mpSecret = process.env.GA4_MP_API_SECRET;
  if (!mpSecret) return;

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=G-QVFF0DPG6X&api_secret=${mpSecret}`;

  const params: Record<string, string> = { source: 'server' };
  if (eventName === 'phone_click') params.phone_number = value;
  if (eventName === 'email_click') params.email_address = value;
  if (eventName === 'chat_started') params.event_label = value || 'tidio_chat';

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: 'server.sygma-solutions.com',
      events: [{ name: eventName, params }],
    }),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event, value } = body || {};

    if (typeof event !== 'string' || !VALID_EVENTS.has(event)) {
      return NextResponse.json({ error: 'invalid event' }, { status: 400 });
    }

    await fireGA4(event, String(value || ''));
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error('track-click error (non-blocking):', err);
    return new NextResponse(null, { status: 204 });
  }
}
