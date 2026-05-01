# Lead Notifications

Lucas's #1 problem: he's on a job site and doesn't see email leads fast enough. He explicitly asked for **text-message notifications** on every new lead.

## Forms on the site

- `quote` — full form on `/contact` and embedded on every service / area page
- `quick-quote` — 3-field micro-form under the homepage hero (name, phone, service)

Both use `data-netlify="true"` and will be picked up by Netlify Forms automatically when deployed there. If we deploy to **Cloudflare Pages** instead (which is the plan), swap to:

- Cloudflare Pages Functions handler at `/functions/quote.ts` posting to a webhook, OR
- Form action pointing at a Formspree / Web3Forms / Basin endpoint, OR
- A simple Worker that accepts the POST and fans out.

## SMS fan-out (the actual ask)

Whichever form backend we pick, route the submission to a webhook that:

1. **Texts Lucas** at `+1-817-818-9028` with a short summary:
   `New lead: <Name> · <Phone> · <Service> — call back. Reply to this text to message them.`
2. **Emails Lucas** the full payload as a backup.
3. (Optional) Logs to a Google Sheet so we have a paper trail for the monthly retainer report.

Recommended stack at launch (cheapest / fastest to ship):

- **Form backend:** Web3Forms (free tier, no auth) or Formspree
- **SMS:** Twilio Programmable Messaging — ~$0.008 per text, free trial credit
- **Glue:** Make.com or Zapier (free tier covers <100 leads/month easily) — webhook → Twilio + Gmail

Total expected cost at current volume: **~$0–$5/month**, well inside the $200 retainer.

## Future form fields (Phase 2)

Lucas mentioned wanting screening for budget and quality-vs-price once he can be selective. Stubbed as commented TODO in `src/components/QuoteForm.astro` — enable when he gives the word.
