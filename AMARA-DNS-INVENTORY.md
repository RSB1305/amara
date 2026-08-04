# AMARA DNS Inventory — amara-lodging.es

Pre-migration snapshot of the authoritative DNS records, captured before moving nameservers
from IONOS to Cloudflare. Companion to [AMARA-BOOKING-ARCHITECTURE.md](AMARA-BOOKING-ARCHITECTURE.md).

- **Captured:** 2026-08-04, from the IONOS DNS panel and verified by live DNS query
- **Registrar:** IONOS (stays IONOS — nameservers move, the registration does not)
- **Record count:** 14
- **DNSSEC:** not active (no DS records at the `.es` registry) — nameserver change is safe

## Status: nameservers moved 2026-08-04

Authoritative nameservers are now `ollie.ns.cloudflare.com` and `achiel.ns.cloudflare.com`.
Propagation completed within minutes, not the 48h IONOS warns about.

Verified by live query after the switch:

- All 14 records resolve with the expected values, including the three DKIM CNAMEs that
  Cloudflare's automatic import had missed and that were added by hand
- Both MX records carry priority 10
- `amara-lodging.es`, `www`, and a rental page all return HTTP 200 over HTTPS with a valid
  certificate — the Cloudflare-in-front-of-Cloudflare concern did not materialise, because every
  record is DNS-only

Cloudflare's automatic import captured 11 of 14 records. The three missing ones were all DKIM
(`s1-ionos`, `s2-ionos`, `s42582890._domainkey`) and all six proxyable records defaulted to
Proxied. Assume the same on any future zone import: the scan is a starting point, not a copy.

Outstanding: inbound and outbound mail tests, and confirming Search Console still reports the
domain as verified.

## Rollback — current IONOS nameservers

If anything breaks after the switch, restore these at IONOS. Keep a copy somewhere reachable
without the domain working.

```
ns1038.ui-dns.org
ns1071.ui-dns.de
ns1113.ui-dns.biz
ns1099.ui-dns.com
```

---

## Records to replicate in Cloudflare

Every record below must exist in Cloudflare before the nameservers are switched. All A and
CNAME records must be **DNS only (grey cloud)** — see the SSL note below.

### Website and SSL — critical

| Type | Name | Value |
| :--- | :--- | :--- |
| A | `@` | `162.159.128.68` |
| A | `www` | `162.159.128.68` |
| CNAME | `_acme-challenge` | `amara-lodging.es.aee18eb3ee84a094.dcv.cloudflare.com` |
| TXT | `_cf-custom-hostname` | `"5d48897b-8022-4205-9209-dad8ecf877e8"` |

`162.159.128.68` is a Cloudflare address, not a Lodgify one: Lodgify serves customer sites
through Cloudflare for SaaS. The `_acme-challenge` and `_cf-custom-hostname` records are what
keep the SSL certificate for the apex renewable. Losing them fails silently — the site keeps
working until the certificate expires weeks later, then shows a security warning.

**Consequence for the migration:** the apex and `www` records must stay DNS-only. Proxying them
in our own Cloudflare account would route Cloudflare to Cloudflare and can trigger errors such
as 1014 (cross-user CNAME). This is the most likely failure point in Phase 1 — verify the site
loads immediately after the switch.

At cutover these four records are replaced by the Cloudflare Pages target, and the two
validation records should be removed once `amara-lodging.es` is unlinked from Lodgify.

### Mail — all IONOS, all required

| Type | Name | Value | Priority |
| :--- | :--- | :--- | :--- |
| MX | `@` | `mx00.ionos.es` | 10 |
| MX | `@` | `mx01.ionos.es` | 10 |
| TXT | `@` | `"v=spf1 include:_spf-eu.ionos.com ~all"` | |
| CNAME | `s1-ionos._domainkey` | `s1.dkim.ionos.com` | |
| CNAME | `s2-ionos._domainkey` | `s2.dkim.ionos.com` | |
| CNAME | `s42582890._domainkey` | `s42582890.dkim.ionos.com` | |
| CNAME | `_dmarc` | `dmarc.ionos.es` | |
| CNAME | `autodiscover` | `adsredir.ionos.info` | |

Both MX records carry priority **10** — equal weight, not 10/20. The IONOS list view hides the
priority column; the values above come from a live DNS query.

Mail is the silent failure mode of any nameserver change: the site stays up while inbound mail
disappears (missing MX) or outbound mail lands in spam (missing SPF/DKIM). Test both directions
after switching.

### SEO

| Type | Name | Value |
| :--- | :--- | :--- |
| TXT | `@` | `"google-site-verification=_7R67pPyfIjJyK-55virFYzGgjBv5SqkyJr59i6-ipk"` |

Holds Search Console verification for the domain. Losing it means losing ranking data at exactly
the moment the migration makes that data most valuable.

### Optional

| Type | Name | Value |
| :--- | :--- | :--- |
| CNAME | `_domainconnect` | `_domainconnect.ionos.com` |

An IONOS convenience feature, inert once nameservers move. Copy it anyway rather than reasoning
about it.

---

## Verification after the switch

1. `amara-lodging.es` loads over HTTPS with a valid certificate
2. Inbound: mail from an external address reaches the `@amara-lodging.es` mailbox
3. Outbound: a reply from `@amara-lodging.es` arrives in the inbox, not spam
4. Search Console still reports the domain as verified

Leave the IONOS records in place. They are inactive once nameservers move, and they are the
fallback if the switch has to be reverted.
