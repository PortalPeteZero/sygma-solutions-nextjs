import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

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

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
