# send-contact-email (Supabase edge function)

Handles /contact form submissions: saves to `contact_submissions`, then emails a
notification via Resend. Recipient is routed by the "Training Interest" dropdown
value (`enquiry_type`) — see `recipientsFor()`. Mapping / GPR / ProQual-mapping
enquiries go to Neal + bookings@; all other courses go to enquiries@.

Supabase project: mwkpgzjcpltdcdgotryv.

## Deploy — automatic (push = live)

Pushing a change to this directory on `main` triggers
`.github/workflows/deploy-contact-fn.yml`, which runs
`supabase functions deploy send-contact-email`. So **editing this file and pushing
updates the LIVE function** — no separate step. Vercel does not build or deploy
`supabase/` (it is excluded from `tsconfig.json`); this workflow owns the deploy.

You can also trigger the workflow manually (Actions → "Deploy send-contact-email"
→ Run workflow) or, if ever needed, deploy by hand:

    supabase functions deploy send-contact-email --project-ref mwkpgzjcpltdcdgotryv --no-verify-jwt
    # (env: SUPABASE_ACCESS_TOKEN)

Keep the mapping list in `recipientsFor()` in sync with the <option> text in
`src/app/contact/ContactClient.tsx`.
