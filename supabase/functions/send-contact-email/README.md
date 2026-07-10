# send-contact-email (Supabase edge function)

Handles /contact form submissions: saves to `contact_submissions`, then emails a
notification via Resend. Recipient is routed by the "Training Interest" dropdown
value (`enquiry_type`) — see `recipientsFor()`. Mapping / GPR / ProQual-mapping
enquiries go to Neal + bookings@; all other courses go to enquiries@.

Supabase project: mwkpgzjcpltdcdgotryv. This directory is the source of truth —
it is NOT auto-deployed by Vercel (Vercel only builds the Next.js app).

## Deploy
Via Supabase Management API (multipart; file MUST be named index.ts; keep verify_jwt=false):

    curl -X POST -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
      "https://api.supabase.com/v1/projects/mwkpgzjcpltdcdgotryv/functions/deploy?slug=send-contact-email" \
      -F 'metadata={"entrypoint_path":"index.ts","name":"send-contact-email","verify_jwt":false};type=application/json' \
      -F "file=@index.ts;type=application/typescript"

Keep the mapping list in `recipientsFor()` in sync with the <option> text in
`src/app/contact/ContactClient.tsx`.
