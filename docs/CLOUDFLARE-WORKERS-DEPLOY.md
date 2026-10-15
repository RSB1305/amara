# Cloudflare Workers — deploy, preview, cutover, rollback

The website moved from a Cloudflare Pages project to a Cloudflare Worker with static
assets on 2026-10-15. This page is the operating runbook: what runs where, the exact
commands, and the two cutovers (Pages → Worker for the Astro site; Lodgify → Worker for
the production domain, which is a separate decision).

## State before the move (inventory of 2026-10-15)

| Item | Finding |
| :--- | :--- |
| Pages project | `amara-staging`, git-connected, only domain `amara-staging.pages.dev` (noindex) |
| Build | `npm run build` (prebuild typecheck and policies, Astro static output, postbuild audits); build variable `PUBLIC_SITE_URL=https://amara-lodging.es` |
| Astro adapter | none; the site is fully static (`dist/`, `build.format: 'file'`, `trailingSlash: 'never'`) |
| Pages Functions | `functions/`: five booking routes, two guest-session routes, six weather routes (all thin shims around `booking-gateway/`, `weather-gateway/`, `guest-experience/`) and one `_middleware.js` per localized Guest Guide root |
| `public/_routes.json` | Functions ran only for `/api/booking/*`, `/api/weather/*`, `/api/guest/*` and the five Guest Guide roots; the five public access pages were excluded |
| Secrets | `LODGIFY_API_KEY`, `AEMET_API_KEY`, `AMARA_EXPERIENCE_SESSION_SECRET` (Pages Function secrets, set in the dashboard) |
| Bindings, KV, D1 | none |
| `public/_headers`, `public/_redirects` | security headers, immutable `/_astro/*` caching, noindex on the pages.dev hosts; 1,083 static 301 redirects |
| Production domain | **`amara-lodging.es` is still served by Lodgify** (DNS-only A records `162.159.128.68`, Cloudflare for SaaS). The Pages project never had a custom domain. The go-live of the Astro site on the apex is the separate cutover in the last section. |

## What runs where now

- `wrangler.jsonc` describes the Worker `amara-lodging`: `assets.directory` is `dist/`,
  `assets.binding` is `ASSETS`, `html_handling` mirrors the Pages behaviour
  (`/de` serves `de.html`, `/de/` redirects to `/de`), `not_found_handling` serves
  `404.html`.
- `assets.run_worker_first` replaces `public/_routes.json`: the Worker runs only for
  the three API families and the five Guest Guide roots, with the five access pages
  excepted (`!` rules). Every other request is answered from the assets without
  invoking the Worker, which keeps the request budget identical to Pages (static
  assets are free and unlimited; Worker invocations count against 100,000 per day on
  the free plan, exactly as Pages Functions did).
- `worker/index.mjs` is the dispatch that the `functions/` directory used to express
  through its file layout. The gateways and the guest-experience modules are unchanged
  and still receive the Pages Functions context (`request`, `env`, `waitUntil`,
  `next`); `next()` serves the static document through `env.ASSETS.fetch`.
- `public/_headers` and `public/_redirects` are supported natively by Workers static
  assets with the same syntax and limits (2,000 static plus 100 dynamic redirects, 100
  header rules). `_headers` gained one rule that keeps every workers.dev host
  (`<label>.<account>.workers.dev`, i.e. the Worker's own address, its version URLs and
  its previews) out of the index.
- Local development secrets live in `.dev.vars` (gitignored); wrangler's local state in
  `.wrangler/` (gitignored).

## Local check

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; $env:PUBLIC_SITE_URL='https://amara-lodging.es'; npm run build
npx wrangler dev
```

`wrangler dev` serves the built `dist/` plus the Worker on `http://localhost:8787`.
It needs a `.dev.vars` file next to `package.json` with the three secrets
(`AMARA_EXPERIENCE_SESSION_SECRET` at least 32 characters; a dummy value is enough to
test the gate, the Lodgify and AEMET keys are only needed for live data). For authoring
keep `npm run dev` on port 4321 as before; the API routes do not exist there, exactly as
with Pages.

Without an account:

```powershell
npx wrangler deploy --dry-run --outdir .wrangler/dry-run
```

validates the configuration and bundles the Worker.

## First deploy (staging on workers.dev)

Costs: none. The Worker runs on the free plan (static assets free and unlimited, Worker
invocations 100,000 per day, Workers Logs 200,000 events per day). No DNS record and no
domain changes. The Pages project keeps running untouched.

1. The machine is already logged in (`npx wrangler whoami` shows the account).
2. Build and deploy:

   ```powershell
   cd C:\Dev\amara
   $env:ASTRO_TELEMETRY_DISABLED='1'; $env:PUBLIC_SITE_URL='https://amara-lodging.es'; npm run build
   npx wrangler deploy
   ```

   The deploy prints the Worker's address, `https://amara-lodging.<account>.workers.dev`.
3. Set the three runtime secrets. Each command asks for the value on the terminal;
   nothing is written to the repository. They take effect at once, no second deploy.

   ```powershell
   npx wrangler secret put LODGIFY_API_KEY
   npx wrangler secret put AEMET_API_KEY
   npx wrangler secret put AMARA_EXPERIENCE_SESSION_SECRET
   ```

   The values are the ones the Pages project uses (Lodgify API key, AEMET OpenData key,
   the 32+ character session secret). Pages does not reveal stored secrets, so take
   them from where they were issued or generate a new session secret; a new session
   secret only logs every guest out once.
4. Smoke test on the printed address (replace nothing else):
   - `/` and `/de` answer 200; `/de/` answers 301 to `/de` (`_redirects`).
   - `/amara-experience/access` answers 301 to `/guia-huesped/acceso` (`_redirects`).
   - `/_astro/` assets carry `cache-control: public, max-age=31536000, immutable`.
   - Every response carries `x-robots-tag: noindex` on the workers.dev host.
   - `/api/weather/frigiliana` answers 200 JSON (503 until the AEMET secret is set).
   - `/de/gaesteguide/zugang` answers 200; `/de/gaesteguide/zaid` without a session
     answers 302 to `/de/gaesteguide/zugang?reason=session`; after signing in with a
     first name and arrival date the hub answers 200 with `cache-control: no-store`.
   - `/nope` answers the 404 page.

## Git-integrated builds (Workers Builds) and previews

Replaces the Pages git integration. Costs: none on the free plan (3,000 build minutes
per month, one build at a time; a build of this site takes about five minutes).

Dashboard → Workers & Pages → `amara-lodging` → Settings → Build → Connect:

| Setting | Value |
| :--- | :--- |
| Repository | `RSB1305/amara` |
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Build variable | `PUBLIC_SITE_URL` = `https://amara-lodging.es` |
| Preview builds | enabled; preview command `npx wrangler preview` (the default) |

Build variables are build-time only; the three runtime secrets stay Worker secrets.
Previews do not use the production settings: configure the variables and secrets a
preview needs under the Worker's preview settings, or leave them empty so previews
show the static site with the gateways failing closed. Every non-production branch and
pull request then receives its own preview URL (shown in the dashboard and as a pull
request comment), which replaces the `<branch>.amara-staging.pages.dev` previews.

After the first successful Workers build, stop the Pages project from building the
same commits: Pages → `amara-staging` → Settings → Builds & deployments → disable
automatic deployments. Delete the project only after the Worker has been verified:

```powershell
npx wrangler pages project delete amara-staging
```

Then remove the two `amara-staging.pages.dev` rules from `public/_headers`.

The daily calendar healthcheck (`.github/workflows/calendar-healthcheck.yml`) probes
`https://amara-staging.pages.dev` by default; once the Worker is the staging site,
replace that default (it appears twice in the workflow) with the Worker's address.

`.github/workflows/check.yml` is unchanged and still runs the same gate on every pull
request and on `main`.

## Rollback of the Pages → Worker move

Nothing to undo: the Pages project and the Worker coexist, the Pages project stays
connected until it is disabled in the dashboard, and `_headers`, `_redirects` and the
build are the same for both. To go back, re-enable automatic deployments on
`amara-staging`; the Worker can be deleted with `npx wrangler delete` at any time.

## Production cutover: `amara-lodging.es` from Lodgify to the Worker

A separate decision with its own go. Today the apex and `www` point at Lodgify's
Cloudflare for SaaS origin. The steps below are the Worker version of the cutover plan in
`AMARA-BOOKING-ARCHITECTURE.md`; nothing in this repository performs them.

1. Preconditions: the Worker has served the staging address without findings, the three
   secrets are set, booking checkout is reachable on `amara.lodgify.com` (the booking
   paths in `_redirects` already point there).
2. Add the production domains to `wrangler.jsonc` and deploy; Cloudflare creates the DNS
   records and the certificate. The existing DNS-only A records for `@` and `www` must
   be removed first (Cloudflare DNS → zone `amara-lodging.es`), because a Custom Domain
   cannot be created on a hostname that already has a record. Note the four records
   from `AMARA-DNS-INVENTORY.md` (A `@`, A `www`, CNAME `_acme-challenge`, TXT
   `_cf-custom-hostname`) before deleting them; they are the rollback.

   ```jsonc
   "routes": [
     { "pattern": "amara-lodging.es", "custom_domain": true },
     { "pattern": "www.amara-lodging.es", "custom_domain": true }
   ]
   ```

   Alternative without editing the config: Worker → Settings → Domains & Routes →
   Add → Custom Domain, once per hostname.
3. `www` → apex: a Redirect Rule in the zone (Rules → Redirect Rules → template
   "Redirect from WWW to root"), free; `_redirects` cannot express hostname rules.
4. Verify: HTTPS certificate on both hostnames, `/` and the five locale roots, canonical
   and hreflang (they already carry `https://amara-lodging.es`), `/sitemap-index.xml`,
   `/robots.txt`, the Guest Guide sign-in, inbound and outbound mail (the MX, SPF, DKIM
   and DMARC records are untouched), Search Console still verified.
5. Only after a stable period: unlink the domain in Lodgify and delete the two
   validation records if Cloudflare did not already remove them.

Rollback: remove the two Custom Domains from the Worker (dashboard or delete the
`routes` block and deploy), re-create the four DNS-only records with the values from
`AMARA-DNS-INVENTORY.md`. The zone TTL is 1,800 seconds, so the switch back is complete
within 30 minutes; Lodgify keeps serving the domain as long as it has not been unlinked
there.
