# SEO + LLM Discoverability Setup

## /llms.txt and /llms-full.txt

Two markdown files at the site root, following the [llmstxt.org](https://llmstxt.org/) spec. They give LLM crawlers (and ChatGPT, Claude, Perplexity, etc. when they fetch a site mid-conversation) a fast, JS-free way to ingest what Twin County does, where it works, and how to contact Lucas.

- `public/llms.txt` — short index, hand-curated.
- `src/pages/llms-full.txt.ts` — Astro endpoint that emits the full concatenated content of every service / area / project page from the data files. Updates automatically when `services.ts`, `areas.ts`, or `projects.ts` change.

Both will be served from the site root after build (`/llms.txt`, `/llms-full.txt`).

## robots.txt

`public/robots.txt` defaults to allow-all and then explicitly whitelists the major AI / search-LLM bots:

- GPTBot, OAI-SearchBot, ChatGPT-User (OpenAI)
- ClaudeBot, anthropic-ai, Claude-Web (Anthropic)
- PerplexityBot, Perplexity-User (Perplexity)
- Google-Extended (Bard / Gemini training), Googlebot (search)
- Bingbot
- CCBot (Common Crawl — feeds many models)
- cohere-ai, Applebot-Extended, Meta-ExternalAgent

Allow-all alone is enough on most hosts, but some Cloudflare presets default-deny AI bots. Explicit allows are defensive.

## Bing Webmaster Tools

ChatGPT Search is powered by Bing's index — get on it.

1. Go to https://www.bing.com/webmasters and sign in with the same account that owns Google Search Console (or any Microsoft account).
2. Add property: `https://twincountyoutdoorservices.com`.
3. Verify ownership via one of:
   - **Easiest:** Import from Google Search Console once GSC is set up.
   - DNS TXT record at the domain registrar.
   - Drop an XML file in `public/` (Bing will give you the file).
4. Submit the sitemap: `https://twincountyoutdoorservices.com/sitemap-index.xml`.

## IndexNow

Lets us push instant URL updates to Bing (and other participating engines: Yandex, Seznam, Naver) without waiting for the next crawl. Same idea as pinging Google, but works.

**Key file:** `public/f1b1e4a216a1a2a146a444a55775d57b.txt` is already in place. Bing will fetch it to verify we own the key.

**To ping a single URL** (after publishing a new project page, for example):

```bash
curl "https://api.indexnow.org/indexnow?url=https://twincountyoutdoorservices.com/projects/some-new-project&key=f1b1e4a216a1a2a146a444a55775d57b"
```

**To ping multiple URLs at once:**

```bash
curl -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "host": "twincountyoutdoorservices.com",
    "key": "f1b1e4a216a1a2a146a444a55775d57b",
    "keyLocation": "https://twincountyoutdoorservices.com/f1b1e4a216a1a2a146a444a55775d57b.txt",
    "urlList": [
      "https://twincountyoutdoorservices.com/projects/new-project-1",
      "https://twincountyoutdoorservices.com/services/new-service"
    ]
  }'
```

A 200 or 202 response means accepted.

## IndexNow auto-ping on Cloudflare Pages deploy

Already wired. `scripts/ping-indexnow.mjs` runs as a `postbuild` step (see `package.json`). On every successful production deploy it:

1. Reads the generated `dist/sitemap-*.xml`.
2. Extracts every URL.
3. POSTs the whole list to `https://api.indexnow.org/indexnow` with our key.

**Cloudflare Pages setup:**

- Build command: `npm run build` (default — postbuild runs automatically)
- Build output directory: `dist`
- No env vars needed; the script auto-detects `CF_PAGES=1` and only fires for the `main` branch (preview deploys are skipped to avoid polluting Bing's index).

**Local override:** `INDEXNOW_FORCE=1 npm run build` will ping from any environment — useful for a one-time manual ping after the initial production deploy.

**Failure mode:** if IndexNow is down or returns non-2xx, the script logs a warning but does NOT fail the build. We never want a third-party API outage to block a deploy.
