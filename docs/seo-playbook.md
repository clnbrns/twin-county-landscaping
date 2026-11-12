# SEO playbook and history (Sep-Oct 2026)

Last updated 2026-10-29. Companion to `CLAUDE.md` (rules and gotchas). This file is the findings, what was shipped, and what is next.

## 1. Baseline findings (GSC export, Jun 15 - Sep 14, 2026, Web)
- 114 clicks / 28,630 impressions / 0.40% CTR / avg position about 21. Mobile CTR 0.72%, desktop 0.26%.
- Trend before the audit: impressions and clicks rose June to August (geo-page rollout from Jul 5).
- **Headline problem was CTR, not ranking.** 145 queries ranked in the top 10 with zero clicks (3,348 impressions). They were hyper-local "[service] [small town] tx" queries: `french drains aledo tx` (pos 6, 203 impr), `french drains in saginaw tx` (pos 5), `landscaping ranger tx` (pos 4), `retaining wall construction weatherford tx` (pos 4.9), `hydroseeding near me` (pos 1.2, 67 impr, 0 clicks).
- Titles on the combo pages were already good, so the leading theory is the Google local map pack taking the click on local-intent queries. Unconfirmed; manual incognito SERP spot checks were never done. Mitigation is Google Business Profile strength (review count, categories, service areas, photos), and keeping UTM tags on the GBP website link so GA4 can separate GBP traffic.
- Homepage and /about get decent CTR (4.3% and 2.5%): brand-style queries convert fine.
- International impressions (India, Nigeria, Brazil, UK, etc.) are noise with 0 clicks. Ignore.
- Cannibalization: three page types competed for the same intent (`/areas/<city>/`, `/services/<slug>/` hubs naming cities in titles, and `<service>-<city>-tx` combo pages).

## 2. Longer trend (chart export Oct 21, 2025 - Oct 20, 2026)
- Impressions per day: about 30 (Oct-Nov 2025) -> 250 (Jan-Mar 2026) -> **collapse to about 2/day from Apr 4 to May 29, 2026** -> 235 (Jun) -> 347 (Jul peak) -> 308 (Aug) -> 185 (Sep) -> 182 (Oct 1-20).
- Clicks per day: 1.26 (Mar), 0.02 (collapse), 0.90 (Jun), 1.16 (Jul), 1.52 (Aug best), 1.20 (Sep), 0.70 (Oct 1-20, lowest since June).
- Average position improved even as impressions fell (23 in Aug -> about 20 in Oct), so the autumn decline is either seasonality or fewer queries surfaced. It cannot be separated without a Queries export.
- **The Apr-May collapse is probably the old TownSquare site -> new Astro build migration** (`public/_redirects` says its legacy redirects came from a GSC export on 2026-06-02 of "the old build"). Not confirmed: check Netlify deploy dates and what changed around Apr 4. Lesson: any future migration or URL change needs redirects in place before cutover.
- The Aug 25 DNS outage does not show up as a visible dent in the chart.

## 3. GA4 landing pages (Jul 24 - Oct 21, 2026)
- About 500 sessions total in 90 days; homepage 231. Key events were 0 on every page, including /contact (20 sessions), because nothing fired on form submit. Fixed Oct 22 (see CLAUDE.md).
- Blog posts engage well: `best-sod-for-texas-clay-soil` about 186 s avg engagement, `french-drain-vs-dry-creek-bed` about 74 s. Service pages bounce: `/services/rock-beds` about 1 s, `/services/landscape-design` about 8 s.
- None of the new geo pages had traffic yet at the time of that export (not deployed until Oct 22-23).

## 4. What was shipped (all on main)
- `9a0383a` (Oct 22): 12 new geo pages, SEO_OVERRIDES de-cannibalization, hydroseeding, Aledo drainage retitle.
  - Aledo tree services; landscape design for North Richland Hills, Colleyville, Stephenville, Granbury, Benbrook, Azle; hardscaping for Colleyville, Granbury, Arlington; Arlington retaining walls; French drains for Pelican Bay and Lakeside (new `areas.ts` entries; both were previously only Azle "neighborhoods"); standalone Parker County hardscaping page.
  - Hub titles in `services/[slug].astro` now name only cities without a dedicated page.
  - `drainage-aledo-tx` retitled "French Drains & Stormwater Drainage in Aledo" (French-drains phrasing had about 3-4x the query volume of "stormwater drainage").
  - Hydroseeding added to sod installation (intro, included list, `aka`, hub title/description). Site had no mention of it despite ranking about #1 for "hydroseeding near me".
- `c1e2ae0` (Oct 22): GA4 lead tracking + `/thank-you/`.
- `812c4f2` (Oct 23): Frisco and McKinney landscape design + hardscaping (4 pages, 2 area entries), framed as project-scope work. Built on Colin's say-so; there was no Twin County query data in hand, so the service mix is a guess.
- Each push was followed by an IndexNow ping.

## 5. Open items / next steps
1. **GA4 manual step:** mark `generate_lead` and `phone_click` key events; submit a real test lead; link Search Console to GA4 if not linked.
2. **Search Console:** resubmit `sitemap-index.xml`; request indexing for the highest-value new URLs (`/tree-services-aledo-tx/`, `/landscape-design-north-richland-hills-tx/`, Colleyville pages).
3. **Re-measure around Nov 5:** export GSC Queries + Pages (Web, last 28 days), compare with the Sep 17 baseline. Check: impressions and clicks for the new pages; the retitled hubs; `hydroseeding` queries; `french drains aledo tx` CTR; Frisco/McKinney queries (and decide whether to add French drains / retaining walls there). Success looks like impressions/day back above about 300, clicks/day above 1.5, and more top-10 queries with real clicks.
4. **Frisco/McKinney check:** Colin said these cities "came up a lot" in GSC. Confirm against the real Twin County Queries export. The only McKinney row found in other exports was a `sport court installation mckinney` query on the bearcatturf.com property (different site).
5. **Lucas, TX:** not built (see CLAUDE.md). Demand seen in Sep export: French drains about 216 impressions + sod about 128.
6. **Google Business Profile:** keep growing reviews, then fill `reviewCount` / `ratingValue` in `src/data/site.ts` to turn on `aggregateRating` schema. Still pending offline from Lucas: Houzz profile, BBB / licensed badge.
7. **Content:** more blog posts in the style of the two that hold attention, with links into the matching service and city pages; investigate why rock-beds and landscape-design hub pages lose visitors in seconds.
8. **Other demand seen but not built:** Granbury sprinkler repair (about 118 impressions; TCOS installs/extends irrigation but defers complex repairs to licensed irrigators, so a weak fit); Stephenville lawn care/mowing queries (about 150 impressions; TCOS does not offer recurring lawn care).

## 6. Method (to repeat the analysis)
- GSC export zip contains `Queries.csv`, `Pages.csv`, `Chart.csv`, `Devices.csv`, `Countries.csv`.
- Gap finder: match each query against (city token x service keyword cluster), then subtract the pairs already in `geoPages.ts`, and rank by impressions. Cities were matched from `areas.ts` plus extras seen in queries (Pelican Bay, Lakeside, Lucas, Parker County). Service clusters: french drain/drainage/stormwater; retaining wall; hardscap/patio/paver; sod; landscap/backyard; tree; mulch; irrigation/sprinkler; stone border/edging; rock bed; concrete; water feature/pond; leveling/grading; flower bed.
- Zero-click diagnostic: queries with 0 clicks and position <= 10 are a CTR/SERP-feature problem, not a ranking problem.
