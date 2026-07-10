// send-contact-email — Supabase edge function (project mwkpgzjcpltdcdgotryv).
// AUTO-DEPLOYED: pushing a change to this file on main triggers
// .github/workflows/deploy-contact-fn.yml, which deploys it live. Push = live.
// (Vercel does NOT deploy this — supabase/ is excluded from the Next build.)
// To change enquiry routing, edit recipientsFor() below and push.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactPayload {
  full_name: string;
  company_name?: string;
  email: string;
  phone?: string;
  enquiry_type: string;
  how_heard?: string;
  message: string;
}

// Route mapping / surveying enquiries to the mapping team; everything else
// stays on enquiries@ (Pete). The values below MUST match the <option> text in
// the contact-form dropdown (src/app/contact/ContactClient.tsx). Matched
// case-insensitively on the trimmed value.
const MAPPING_ENQUIRY_TYPES = [
  "Utility Mapping Training",
  "GPR Training",
  "ProQual Level 3-6 Utility Mapping Qualification",
];
const MAPPING_RECIPIENTS = [
  "neal.sadd@sygma-solutions.com",
  "bookings@sygma-solutions.com",
];
const DEFAULT_RECIPIENTS = ["enquiries@sygma-solutions.com"];

function recipientsFor(enquiryType: string): string[] {
  const t = (enquiryType || "").trim().toLowerCase();
  const isMapping = MAPPING_ENQUIRY_TYPES.some((v) => v.toLowerCase() === t);
  return isMapping ? MAPPING_RECIPIENTS : DEFAULT_RECIPIENTS;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: ContactPayload = await req.json();

    // Save to Supabase
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const dbRes = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (!dbRes.ok) {
      const err = await dbRes.text();
      console.error("DB insert failed:", err);
      return new Response(JSON.stringify({ error: "Failed to save submission" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send notification email via Resend
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      const recipients = recipientsFor(payload.enquiry_type);
      console.log(`Enquiry "${payload.enquiry_type}" routed to: ${recipients.join(", ")}`);
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Sygma Website <info@sygma-solutions.com>",
          to: recipients,
          subject: `New Enquiry: ${payload.enquiry_type} — ${payload.full_name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${payload.full_name}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${payload.company_name || "—"}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${payload.phone || "—"}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Enquiry Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${payload.enquiry_type}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">How They Heard</td><td style="padding:8px;border-bottom:1px solid #eee;">${payload.how_heard || "—"}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${payload.message}</td></tr>
            </table>
          `,
        }),
      });

      if (!emailRes.ok) {
        const emailErr = await emailRes.text();
        console.error("Resend failed:", emailErr);
        // Don't fail the whole request — submission is saved
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
