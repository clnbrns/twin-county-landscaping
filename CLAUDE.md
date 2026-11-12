# Twin County Outdoor Services — website

Astro static site for Twin County Outdoor Services (Aledo, TX landscaping/hardscaping). Owner-operator: Lucas Bartholomew. Colin (Burns Built) runs the website. Full SEO history, findings, and backlog: `docs/seo-playbook.md`.

## New machine / new Claude account setup
- Source of truth is GitHub: `github.com/clnbrns/twin-county-landscaping` (branch `main`; clone over HTTPS or SSH, whichever the new machine is set up for). Clone it to a normal local folder such as `~/Projects/tcos-website`, NOT inside iCloud Drive. iCloud is why builds and git are so slow here, and it syncs `node_modules` badly.
- The remote is SSH (`git@github.com:clnbrns/twin-county-landscaping.git`), so the new machine needs a GitHub SSH key, or switch the remote to HTTPS.
- Then `npm install`, `npm run build` (sanity check), and `npm run dev` or the `tcos-dev` preview. This machine used Node v26.3.1; any recent Node should work.
- **Not in git: `src/assets/` (full-size source photos, gitignored as too large), plus the generated `twin-county-*.pdf`/`site-pdf/` exports and any `.env`.** The processed WebPs the site actually serves are committed under `public/`, so the site builds and deploys fine without them. But if you want to process new photos, copy `src/assets/` over from the old machine (the iCloud copy of this folder has it). Back it up before you retire the old computer.
- Tracked config that comes along with the clone: `netlify.toml`, `.claude/launch.json`, `package-lock.json`.
- Claude accounts are not part of the repo. This file is loaded automatically in any account that opens the folder. Auto-memory does not travel between machines or accounts, so everything that matters is in this file and `docs/seo-playbook.md`.
- Logins that live outside Claude and must work on the new machine/account: GitHub (`clnbrns`, push to `main`), Netlify (deploys, Forms submissions, deploy history), Porkbun (DNS/domain), Google Search Console and GA4 (permissions follow the Google account, so make sure the personal Google account has access to the `twincountyoutdoorservices.com` GSC property and the "Twin County Outdoor Services" GA4 property under the "Bearcat Turf" account), and the Google Business Profile.
- Analytics baseline summaries (GSC daily chart by month, GA4 landing pages) are in `docs/data/`. The raw exports were not kept. When you pull new GSC Queries/Pages exports, save the CSVs into `docs/data/`.
- The re-measure export planned for about Nov 5, 2026 is due now: export GSC Queries + Pages (Web, last 28 days) and compare against `docs/seo-playbook.md` and `docs/data/`.

## Deploy
- Netlify auto-deploys on push to `main`. Colin expects commit + push straight to main (the remote prints a PR-rule warning but allows it). "Push to prod" means commit + push.
- After a push, wait until the new URL returns 200 (about 1 minute), then ping IndexNow. The postbuild hook skips it locally:
  `INDEXNOW_FORCE=1 node scripts/ping-indexnow.mjs`
- DNS is at Porkbun. If the site is down, run `dig twincountyoutdoorservices.com A` before suspecting code. Aug 25, 2026 outage was dangling Cloudflare nameservers; fix was Porkbun's own nameservers, `A` root -> `75.2.60.5`, `CNAME` www -> `twintcountyoutdoorservices.netlify.app`.
- `docs/leads.md` and `docs/seo-and-llms.md` mention Cloudflare Pages. That is outdated: the host is Netlify (forms are Netlify Forms).

## Working in this repo
- The project lives in iCloud Drive, so everything is slow. `npm run build` takes about 4-5 minutes; run it in the background. The dev server (`tcos-dev` in `.claude/launch.json`, port 4321) takes 1-4 minutes to start and sometimes never comes up. If it stalls, verify with a production build and inspect `dist/`.
- Do not run `astro check`: `@astrojs/check` is not installed and it blocks on an interactive install prompt.
- There are hidden Netlify stub forms in `src/layouts/Base.astro` named `quote` and `quick-quote`, the same names as the real forms. When testing or scripting, select the real one with `form[data-netlify]`.

## Geo pages (the main SEO lever)
- Standalone landing pages are `src/pages/<service>-<city>-tx.astro`. Every one must be added to `GEO_PAGES` in `src/data/geoPages.ts`, or it gets no internal links. The registry drives the area pages, the service hub "by city" cards, and the `GeoLinks` block at the bottom of each geo page.
- `GeoLinks` links to `/areas/<citySlug>`, so the `citySlug` must exist in `src/data/areas.ts`. Add the area entry first for any new city.
- Best template to copy: `landscape-design-*-tx.astro` (design), `hardscaping-*-tx.astro`, `french-drains-*-tx.astro`, `retaining-walls-*-tx.astro`. Use `provider: { '@id': 'https://twincountyoutdoorservices.com/#business' }` in schema, not a duplicated LocalBusiness block.
- Do not create two pages for the same city+service intent (cannibalization). Retitle the existing page instead. Example: `drainage-aledo-tx.astro` serves Aledo French drains and leads with "French Drains".
- `src/pages/services/[slug].astro` has `SEO_OVERRIDES` for hub-page titles. Only name cities there that do NOT have their own dedicated page for that service. The H1 on that template is hardcoded "in Aledo, TX" (known title/H1 mismatch, left alone on purpose).
- `src/pages/areas/[slug].astro` has a smaller `SEO_OVERRIDES` (only `ranger-tx`). Check GSC page-level data before adding more.
- `hardscaping-parker-county-tx.astro` is intentionally standalone (county, not city): no `GeoLinks`, not in the registry, manual links instead.

## Service-area rules (do not invent coverage)
- Core: Parker, Tarrant, Hood, Palo Pinto, Erath counties. Far cities (Arlington, Irving, Dallas, Frisco, McKinney) use "project-scope work that justifies the drive from Aledo" wording, never "regular route".
- Lucas, TX (Collin County, about 50 miles out) was deliberately NOT built: not confirmed as a service area. Ask Colin first.
- Do not fabricate review numbers. `SITE.reviewCount` / `SITE.ratingValue` in `src/data/site.ts` are `null`; the `aggregateRating` schema in `Base.astro` only renders once both are set. Fill them from the real Google Business Profile count (Colin said it is growing).

## Analytics / conversion tracking (added Oct 2026)
- GA4 measurement ID is in `src/data/site.ts` (`gaMeasurementId`); the GA4 property is "Twin County Outdoor Services" under the "Bearcat Turf" account.
- `Base.astro` intercepts `form[data-netlify]` submits: POSTs to `/` via fetch, fires `generate_lead` (`form_name`, `lead_source`), then redirects to `/thank-you/` (noindex, excluded from sitemap). If the fetch fails it falls back to a native submit, and the thank-you page fires the event instead. `sessionStorage.lead_tracked` prevents double counting.
- `tel:` and `sms:` link clicks fire `phone_click` / `sms_click`.
- Manual GA4 step still needed (Admin -> Events): mark `generate_lead` and `phone_click` as key events. Submit one real test lead on the live site to confirm Netlify + GA4 both receive it.

## Memory note for Claude
Auto-memory is machine-local. This file and `docs/seo-playbook.md` are the portable copy of that knowledge. Keep them updated instead of relying on memory.
