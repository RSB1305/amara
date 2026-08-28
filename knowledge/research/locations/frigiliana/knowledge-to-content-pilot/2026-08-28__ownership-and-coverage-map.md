---
document_id: AMARA-KNOWLEDGE-FRIGILIANA-OWNERSHIP-001
title: Frigiliana Knowledge-to-Content Ownership and Coverage Map
status: ACTIVE WORKING MAP
created_at: 2026-08-28
updated_at: 2026-08-28
scope: Frigiliana public Location, Experience and bounded Casa AMARA projections
basis_commit: a2d1c39
---

# Frigiliana Knowledge-to-Content Ownership and Coverage Map

## 1. Purpose and boundary

This is the non-public working map for the Frigiliana pilot. It assigns page jobs, narrative owners, reusable knowledge clusters, bounded Casa AMARA projections and the next research questions before any public rewrite.

It does **not** approve new copy, routes, schemas, registries, components or links. It does not treat old archives as normative. Its authority is limited by the active Register decisions and by the actual repository state at the basis commit.

Binding model:

- Google Drive owns the immutable raw research runs.
- `knowledge/facts/` owns each evaluated fact once.
- `knowledge/pages/*/manifest.ts` authorizes page-level fact use by authoring area.
- `src/content/` is the curated public projection.
- Page families and components present the projection; they do not create evidence.
- One public page owns the complete narrative for one primary guest question. Other pages may use only the necessary fact excerpt and must add their own guest consequence.
- A connection is valid only when the source page creates a concrete next guest question and the target page actually answers it.

Relevant active decisions: `DR-EVIDENCE-001–003`, `DR-IA-001–005`, `DR-GUEST-001`, `TR-CONTENT-004–007`.

## 2. Current conclusion

Frigiliana already has a broad public page inventory and a substantial evaluated knowledge base. It is **not yet authoring-ready as one connected system**.

The reason is no longer a lack of pages. The remaining work is ownership and evidence alignment:

1. Geography is the strongest completed Location pilot: its page manifest is `ready` and most authoring areas are covered.
2. Climate, parking, winter stays, supermarkets, health and practical rules have manifests, but remain partial or contain explicit evidence gaps.
3. Beaches, hiking and restaurants now have normalized facts, open questions and page manifests. Their stable baselines are mapped; live conditions, first-party combinations and route/return evidence remain partial.
4. The public Daily Life page contains precise shop, route, opening and AMARA recommendation claims that are ahead of the normalized Frigiliana shopping evidence.
5. Old Town and Market now have page-coverage manifests. Festivals, Day Trips, Wellness, Weddings and Dos Tumbas still have no corresponding manifests in `knowledge/pages/`.
6. The current Experience Hub repeats selection through `editorial`, `moods`, `catalog` and story units, contains a Nerja-nightlife narrative without a Frigiliana knowledge owner, and carries a village-versus-coast stay decision that belongs to Location.
7. Casa AMARA has seven evaluated first-party facts. They support truthful, bounded projections about location, access and three private terraces. They do not yet support exact trailhead, parking-to-door, shopping-route, winter-sun or restaurant-combination stories.

Therefore the next implementation must start with manifests and evidence closure, not with a general link pass.

## 3. Page-job and narrative-ownership matrix

Readiness meanings:

- **Ready:** the page job and evaluated coverage are sufficiently clear for a later brief.
- **Partial:** the owner is clear, but evidence or manifest coverage is incomplete.
- **Unmapped:** a public page exists without a page-level knowledge authorization map.
- **Review:** current public scope or claims conflict with the intended owner boundary.

| Public owner | Branch / type | Primary guest question and intended decision | Complete narrative owned here | Bounded AMARA perspective | Explicitly belongs elsewhere | Readiness |
|---|---|---|---|---|---|---|
| `/frigiliana-location` | Location / A hub | What is it like to stay in Frigiliana for several nights, and is the village the right base for us? | Overnight consequence of village, coast, terrain, rhythm and nearby Nerja; route into the Location cluster | Casa AMARA as a truthful example of staying in the village, using only verified micro-location facts | Detailed climate, route profiles, parking rules, restaurant lists, beach choice and apartment inventory | **Partial/mapped:** hub manifest now authorizes the stable orientation, terrain, overnight-rhythm and bounded AMARA premises; exact transport, property routes and several current claims remain gaps |
| `/frigiliana-experience` | Experience / B hub | How can we shape our shared holiday days from Frigiliana? | A single curated “menu” of day forms and the choice logic between them | “Romantic Hideaways” as the return-to-private-time lens, not as an inventory pitch | Village-versus-Nerja stay choice, detailed logistics, full spoke narratives, unsupported nightlife | **Review/mapped:** hub manifest now maps the approved day forms, excludes `places` and nightlife, and records the consolidation required across the repeated selection surfaces |
| `/frigiliana-geography` | Location / A spoke | Where is Frigiliana, and how does its physical form affect orientation? | Mental map: Ingenio, Calle Real/Barribajo, Barribarto, southern ridge and Sierra context | Casa AMARA may be placed on the mental map only through verified location facts | Accommodation-area comparison, exact property route, parking, hiking route detail | **Ready:** manifest ready; lower landscape and park boundary remain partial |
| `/frigiliana-streets-stairs` | Location / A spoke | Which Frigiliana area fits our preferred daily walking and access pattern? | Comparison of village areas, terrain and stay trade-offs | Casa AMARA’s Calle Chorruelo/Calle Real position and bounded shared-door/access facts | Exact arrival procedure, parking availability, individual apartment access and inventory | **Ready/partial:** existing manifest is ready; exact street access and route measurements remain open |
| `/frigiliana-weather` | Location / A spoke | What is Frigiliana’s climate through the year and what does it change in our planning today? | Long-term climate boundary, seasons, local limitations and official current forecast | Only verified property comfort or terrace facts, clearly separated from climate evidence | Route safety, beach/sea-state selection, full winter-stay proposition | **Partial:** regional proxy is transparent; local monthly series and Frigiliana–Nerja distinction are unresolved |
| `/getting-to-frigiliana` | Location / A spoke | Which transport option gets us from Málaga Airport to Frigiliana, and what happens at village arrival? | Car, transfer and bus comparison to the village boundary | A bounded transition to the accommodation-specific final route | Parking legality, exact Casa AMARA drop-off/steps, live booked-guest instructions | **Unmapped:** no page manifest; current journey values need evidence mapping |
| `/frigiliana-parking` | Location / A spoke | How does parking in Frigiliana work for an overnight stay? | Village parking contexts, legal/availability limits and separation of parking from final walk | Explain that the exact route home depends on the booked accommodation | Guaranteed space, unverified drop-off, exact property route and live signage | **Partial:** manifest exists; current legal rules, live terms, accessibility and property arrival pack remain open |
| `/frigiliana-daily-life` | Location / A overview | Can we manage normal holiday essentials from Frigiliana, and when does Nerja add useful choice? | Bounded overview of shopping, health and practical essentials | The freedom to eat out or use the accommodation, without inventing shop routes or kitchen equivalence | Weekly-market outing, restaurant narrative, recipes, detailed kitchen inventory and acute guest instructions | **Review:** public claims are ahead of manifests; keep as overview until topic evidence is authorized |
| Future supermarket authoring area; currently inside `/frigiliana-daily-life` | Location / A topic | Where and how should we buy normal holiday groceries? | Curated everyday network, arrival/top-up scenarios, car/no-car trade-off | A verified Casa AMARA shopping route and property-specific self-catering boundary | Weekly market as outing, restaurant guide, recipe catalogue and appliance inventory | **Partial:** facts exist; car/no-car, hours, host route and current operation remain gaps; no standalone route is approved |
| `/frigiliana-winter-stays` | Location / A planning spoke with conversion boundary | Is Frigiliana a good fit for our winter rhythm and which AMARA stay supports it? | Winter stay decision across climate, terrain, village rhythm and indoor comfort | Property-specific winter features only; conversion follows after the decision | General climate detail, hiking route ownership and unsupported village-wide opening claims | **Partial:** manifest exists; climate bridge, property evidence pack, openings and first-party winter day remain open |
| `/frigiliana-faq` | Location / A retrieval surface | What are the short answers to common Frigiliana planning questions? | Concise answers and routing to canonical owners | Only the minimum verified AMARA consequence required by an answer | No independent long narrative and no new facts that lack a specialist owner | **Unmapped:** should project existing manifests, not become a parallel knowledge owner |
| `/frigiliana-old-town` | Experience / B spoke | What should we notice on an old-town walk, and what history explains it? | Walkable old-town narrative combining protected streetscape, history and visible objects | Casa AMARA may frame the starting/return context only when the route is first-party verified | General geography, area choice, invented Three Cultures coexistence and unverified panel claims | **Partial/mapped:** protected form and historical sequence are strong; panel provenance, Casa del Apero, Esparto, exact route timing and several living-heritage claims remain explicit gaps |
| `/frigiliana-hiking` | Experience / B spoke | Which of four routes fits our time, terrain tolerance and current conditions? | Comparable route profiles, navigation boundary, live-condition checks and return planning | Exact Casa AMARA start/return and recovery only after a dated host walk; terrace recovery may use verified amenities | Climate normals, restaurant catalogue and any claim that Casa AMARA is an official trailhead | **Partial/mapped:** the manifest covers the four route profiles, El Fuerte access and dated Chíllar status; AMARA route logs, live checks, route variants and return-food evidence remain open |
| `/frigiliana-beaches` | Experience / B spoke | Which coast day fits guests staying in Frigiliana, by access, setting and desired day rhythm? | Selection of Nerja/Maro/coast options from a Frigiliana-base decision | Return to Casa AMARA or alternative AMARA Playa only where a property fact changes the choice | Full Nerja location narrative, invented quietness, weather forecast and generic restaurant catalogue | **Partial/mapped:** five beach baselines and bounded access facts are mapped; Carabeillo, live sea state and property-return evidence remain gaps |
| `/frigiliana-restaurants` | Experience / B spoke | Which table fits our location, occasion and desired evening from Frigiliana? | Frigiliana-first choice plus bounded Nerja/special-occasion alternatives | Personally tested combinations only after an operator note; walkability only when route evidence exists | Beach guide, hiking guide, unsupported dish memories, current hours without same-day source | **Partial/mapped:** venue baselines and authoring areas are mapped; personal combinations, current operation and several situation-specific claims remain open |
| `/frigiliana-market` | Experience / B spoke | Is the weekly market worth making part of our Thursday morning, and how do we combine it with the village? | The market as an outing, including only verified current time/place/vendor logic | A first-party morning sequence only after a dated visit | Normal grocery planning, supermarket substitute claims and recipes | **Gap/mapped:** the manifest confirms that only Thursday is partially supported; hours, location, authority, cancellations, stall mix, provenance and the morning route remain blocked |
| `/frigiliana-festivals` | Experience / B spoke | Which event changes the village experience on our dates, and what must we plan? | Seasonal event choice plus date-specific crowd/access consequence | A verified stay consequence for Casa AMARA when an event affects its immediate context | General parking owner, unsupported “what streets feel like”, stale dates | **Partial/unmapped:** Three Cultures history exists; full calendar and 2026 operational facts need a volatile manifest |
| `/frigiliana-day-trips` | Experience / B spoke | Which single regional excursion is realistic from Frigiliana for the day we want? | Comparable destination-day trade-offs, travel/ticket boundary and return rhythm | Frigiliana as the place to return to; property detail only if relevant and verified | Generic Andalusia catalogue, invented drive times and individual destination encyclopedias | **Gap/unmapped:** no Frigiliana page manifest or evaluated day-trip fact set |
| `/frigiliana-wellness` | Experience / B spoke | Which verified rest/wellness option fits the day and where does it happen? | Comparison of currently operating providers and booking conditions | In-accommodation treatment only when provider and property permissions are verified | General AMARA amenity claims and unverified mobile-service availability | **Gap/unmapped:** no evaluated provider facts or page manifest |
| `/frigiliana-netflix-dos-tumbas` | Experience / B topical spoke | Which real Frigiliana filming locations can fans recognize and visit responsibly? | Verified production/location walk and its relation to the old town | Stay context only after the filming-location value is satisfied | General old-town history, invented production stories and generic accommodation promotion | **Gap/unmapped:** no evaluated Dos Tumbas fact set or page manifest |
| `/frigiliana-weddings` | Experience / specialist enquiry | Is Frigiliana suitable for our wedding or anniversary plan, and what can AMARA actually support? | Event-use suitability, constraints and enquiry boundary | Exact capacity/property/group facts from their owners | Generic romance, public-space permissions without evidence and ordinary stay discovery | **Gap/unmapped:** separate specialist scope; not part of the first Connection Map batch |
| `/romantic-hideaways` | Conversion / D collection | Which AMARA hideaway fits the shared time we want? | Cross-property selection and verified differences | Full brand promise translated into property choice | Destination authority and complete Experience narratives | **Owner stable:** consumes bounded destination context; does not own it |
| Casa AMARA property pages | Conversion / D | Which Casa AMARA accommodation fits us, and what exactly are we booking? | Complete property narrative, inventory, access, terrace and booking consequences per unit | Full property proof and conversion | Destination-wide climate, parking, routes, restaurants and beaches | **Owner stable/coverage partial:** current seven shared Casa AMARA facts do not replace per-unit evidence packs |

Excluded from this pilot map: `/frigiliana-hospitality-property-for-sale`. It is a separate commercial/specialist owner and does not participate in the guest Location–Experience network.

## 4. Knowledge-cluster ownership and permitted projection

| Knowledge cluster and canonical fact owner | Primary public narrative owner | Permitted contextual projections | Current coverage result |
|---|---|---|---|
| Geography and settlement form — `knowledge/facts/locations/frigiliana/geography.ts` | Geography | Location Hub, Streets & Stairs, Parking, Hiking, Arrival | Strongest cluster; projections must not turn morphology into exact property access |
| Stay areas and mobility — `knowledge/facts/locations/frigiliana/where-to-stay.ts` | Streets & Stairs | Location Hub, Parking, Geography, property pages | Covered at area level; current street rules and exact Casa AMARA routes remain open |
| Parking — `knowledge/facts/locations/frigiliana/parking.ts` | Parking | Arrival, Location Hub, Festivals, Market, property/private guest utility | Partial; live legality/terms and exact last mile stay with their specialist owners |
| Climate and seasons — `knowledge/facts/locations/frigiliana/climate-seasons.ts` | Weather | Hiking, Beaches, Winter Stays, Old Town, Location Hub | Partial regional proxy only; no current authority for identical Frigiliana/Nerja monthly values |
| Hiking — `knowledge/facts/locations/frigiliana/hiking.ts` plus Nerja closure fact | Hiking | Weather, Experience Hub, Winter Stays, Restaurants | Four route profiles exist; live status, start/return and meal connections remain open |
| Beaches — `knowledge/facts/locations/nerja/beaches.ts` | Frigiliana Beaches for the **Frigiliana-base selection job**; Nerja Beaches may separately own the **Nerja-base selection job** | Weather, Experience Hub, Restaurants, property pages | Facts are reusable, but each page must retain a different guest question; no duplicated full coast narrative |
| Restaurants — split fact owners in `frigiliana/restaurants.ts` and `nerja/restaurants.ts` | Frigiliana Restaurants for Frigiliana-base evening choice; Nerja Food for Nerja-base food choice | Beaches, Hiking, Experience Hub, Market, property pages | Venue facts exist; personal recommendations and route/day combinations do not |
| Everyday shopping — `frigiliana/supermarkets.ts` | Daily Life supermarket authoring area until a standalone-page gate is passed | Location Hub, Winter Stays, property pages | Partial; current public route, hours and host-preference claims exceed evaluated evidence |
| Agriculture and local food — `frigiliana/agriculture-food.ts` | No approved standalone public owner yet | Old Town, Market, Restaurants, future bounded recipe concept | Strong background evidence; retail availability, producer traceability and property kitchen fit are unresolved |
| History and culture — `frigiliana/history-culture.ts` | Old Town; Festivals owns only the current event experience | Location Hub, Market, Dos Tumbas | Good historical base; Three Cultures claim boundary and ceramic-panel provenance must be preserved |
| Heritage streetscape — `frigiliana/heritage-streetscape.ts` | Old Town | Geography, Location Hub, Dos Tumbas | Strong durable evidence; visible-route mapping still needed for experiential use |
| Lived atmosphere — `frigiliana/lived-atmosphere.ts` | Location Hub for overnight rhythm; Old Town for bounded walking context | Restaurants, Winter Stays, property pages | First-party but narrow; no village-wide or fixed-clock quiet promise |
| Casa AMARA property facts — `knowledge/facts/properties/casa-amara.ts` | Property pages and Romantic Hideaways | Location Hub, Streets & Stairs, Weather/Winter, Hiking/Beaches return context, Daily Life | Seven verified facts support bounded use; per-unit inventories and route measurements remain required |

## 5. Priority natural-connection map

These are content dependencies, not instructions to add links now. Each row requires both the source statement and the target answer before a contextual link is useful.

The operational subset for the first pilot is maintained in [`2026-08-28__frigiliana-connection-map.md`](./2026-08-28__frigiliana-connection-map.md). It is the compact working map for authoring order; the broader table below preserves the ownership rationale.

| Source owner | Required source statement | Next guest question | Target owner and required target content | Concrete guest consequence | Reciprocal projection |
|---|---|---|---|---|---|
| Weather | Seasonal pattern changes which hours and activities are comfortable; today’s forecast remains separate | What does that mean for a specific walk? | Hiking: route exposure, duration, start-time logic and live-condition check | Choose a route and time instead of treating a season as a safety guarantee | Hiking returns to Weather for forecast/warnings, not climate duplication |
| Weather | Warm, dry periods can suit coast days, but air, sea state and access are different decisions | Which beach fits the actual day? | Beaches: setting/access plus current sea/weather check boundary | Choose the coast by conditions and desired rhythm | Beaches returns to Weather only for forecast context |
| Weather | Cooler, more variable months change both outdoor plans and the role of the home | Would a winter stay suit us? | Winter Stays: indoor comfort, flexible day rhythm and terrain fit | Decide on season and accommodation together | Winter Stays returns to Weather for climate detail/current forecast |
| Hiking | A route ends at a known time and place only after live status and return are checked | Where can we genuinely eat afterwards? | Restaurants: a directly verified venue whose location and operating time fit that route | Turn a generic food link into a usable route-and-meal choice | Restaurants may identify the route context, but does not own route safety |
| Hiking | The final return leads back to Casa AMARA | How do we recover privately after the walk? | Property owner: only verified unit terrace/shower/hammock facts and exact access | See a unique AMARA stay consequence without calling the house a trailhead | Property page may point to Hiking as a nearby activity, not restate routes |
| Beaches | The selected beach has a verified food offer at/near that exact location | Where should we eat without rebuilding the day? | Restaurants: beach-adjacent venue and daypart, currently supported only for specific cases such as Ayo/Burriana | Keep the beach day coherent | Restaurants may link back to the relevant beach choice |
| Beaches | After the beach, guests may want either a verified sundowner/evening or private return | What fits this beach and our desired evening? | Restaurants/evenings or property owner: exact place/route/terrace evidence | Choose social evening or private retreat | Only reciprocal where the target includes the same verified day context |
| Restaurants | A specific Frigiliana meal ends within a verified walking/return context | Where can we continue the evening or return calmly? | Future evening/sundowner owner or property page, after first-party combination evidence | Follow a personal recommendation rather than a generic nightlife list | Target may refer back to the meal only when the combination is genuinely tested |
| Daily Life / supermarkets | Eating out and cooking privately are two valid holiday choices | What can we cook with local ingredients in this specific stay? | Future recipe concept only after ingredient provenance and per-unit kitchen matrix exist | Use the kitchen as a real choice, not an inventory dump | Recipe content returns to shopping source and correct unit capability |
| Market | A verified market visit ends near a documented old-town route | What should we notice next? | Old Town: route and visible heritage points | Turn the outing into a coherent morning | Old Town may include market timing only as a bounded current condition |
| Geography | Map distance is not enough in a hillside village | Which area and daily route suit us? | Streets & Stairs: area comparison and mobility consequence | Choose a stay area on real daily effort | Streets & Stairs returns to Geography for the mental map |
| Streets & Stairs | Casa AMARA occupies a verified position on Calle Chorruelo/Calle Real | What advantage and limitation does that create for this accommodation? | Property page: shared entrance, internal-step boundary and unit-specific access | Make Casa AMARA part of the location equation truthfully | Property page returns to Location/area context without owning the village map |
| Arrival | The airport-to-village method is chosen, but the final section is property-specific | How do we reach our exact door with luggage? | Booked Guest Utility/property access owner | Separate public planning from live arrival instructions | Private guide may link back to general transport only if useful |
| Location Hub | The village is the overnight base; coast and experiences are selectable day forms | How do we want to shape our days? | Experience Hub: one curated menu with destination-specific spokes | Move naturally from “where we stay” to “what we choose” | Experience Hub returns to Location only when the base decision becomes relevant |
| Experience Hub | A day form ends in private shared time | Which AMARA hideaway supports that rhythm? | Romantic Hideaways/property pages: verified selection differences | Convert after useful inspiration, through a real product consequence | Conversion pages can project one bounded destination benefit |

### First connection batch: current authorization state

This smaller batch is the first practical Connection Map. “Partial” means the source premise exists, but public authoring must wait for the named target evidence. It is not permission to add a bare link.

| Connection | Existing shared premise | Missing target-side proof | Current state |
|---|---|---|---|
| Weather ↔ Hiking | `frigiliana.climate.regional-proxy.seasonal-contrast`; the four canonical route profiles | Route-specific live-status method and exact start-time/condition decision wording | **Partial — structurally ready, live layer missing** |
| Weather ↔ Beaches | `frigiliana.climate.regional-proxy.seasonal-contrast`; bounded Burriana, Playazo, Maro, Calahonda and Cantarriján profiles | Current sea-state method and beach-specific exposure/condition translation | **Partial — structurally ready, live layer missing** |
| Weather ↔ Winter Stays | Regional seasonal contrast plus the existing winter-stay owner | Per-unit heating, indoor comfort, winter sun/shade and a dated first-party winter day | **Blocked by first-party property evidence** |
| Hiking ↔ Restaurants | Canonical route profiles plus normalized venue identities | One tested route-finish/venue pairing with date, realistic timing and current operation | **Blocked by operator combination note** |
| Hiking ↔ Casa AMARA | Official route starts plus `casa-amara.location.calle-chorruelo-calle-real` and verified terrace amenities | Door-to-start/return GPX walk and unit-specific recovery sequence | **Blocked by operator route log** |
| Beaches ↔ Restaurants | Burriana’s official service profile plus `nerja.restaurants.ayo.burriana-daytime-service-2026` | Additional named beach/daypart pairings and current operation | **One bounded pairing ready; broader connection remains partial** |
| Beaches ↔ Casa AMARA / AMARA Playa | Stable beach/access profiles | Dated property-to-beach journey, mode, terrain, parking and return evidence | **Blocked by operator route log** |
| Restaurants ↔ Evening/Sundowner | Normalized venue identities | Personally tested continuation, timing, route/parking and an identified target owner | **Blocked by operator combination note** |
| Supermarkets ↔ Cooking at AMARA | Verified shop baselines and local-food background | First-arrival shopping route, per-unit kitchen matrix and provenance-qualified recipe ingredients | **Blocked by operator shopping and property evidence** |
| Location Hub ↔ Experience Hub | Stable page jobs and broad destination knowledge | Final hub manifests and removal/transfer decisions for repeated Experience sections | **Ready for hub coverage work, not public authoring** |

## 6. Blocking coverage gaps before connected authoring

### A. Required page manifests

Hiking, Beaches, Restaurants, Location, Experience, Old Town and Market now have page-level manifests. The first-pilot owner set is mapped; remaining blockers are evidence gaps rather than missing coverage structure.

The FAQ should receive a projection-only manifest after these owners are stable. Day Trips, Wellness, Festivals, Dos Tumbas and Weddings remain separate later research/coverage packages.

### B. High-priority first-party evidence

1. Casa AMARA route pack: exact door-to-street/parking/official-start paths, steps, gradient, surface and luggage consequence.
2. Hiking start/return logs for the four routes, including live-check method and GR 249 return transport.
3. Restaurant combination notes: date, occasion, dish if genuinely remembered, parking/walk, onward evening and uncertainty boundary.
4. Shopping route with and without a car, plus first-arrival scenario.
5. Per-unit kitchen matrix before any recipe claim.
6. Per-unit winter comfort and winter sun/shade evidence.
7. Repeated, dated atmosphere observations before quiet-evening or property-noise claims are generalized.

### C. High-priority external verification

1. Live route/closure authority for all four hikes.
2. Current sea-state/wind authority for beach-day decisions.
3. Current market location, hours, cancellation logic and vendor mix.
4. Current restaurant operation and reservation constraints.
5. Current parking rules, garage terms and accessible route.
6. Current shop operation, opening logic and larger-arrival-shopping set.

A genuinely local monthly climate series is no longer a first-pilot blocker. The evaluated regional seasonal pattern can support bounded planning guidance, while current decisions remain with the official forecast and the relevant activity owner. ERA5 extraction and property-level microclimate precision are out of scope unless a later approved page claim specifically requires them.

## 7. Repository consistency after the first coverage repair

These are existing-state observations, not architecture proposals:

- The three stale public-content paths for Frigiliana Climate, Supermarkets and Practical Local Rules were corrected in commit `ca1ed8c`; no public output changed.
- Hiking, Beaches and Restaurants received page manifests in the same coverage commit.
- Location and Experience now have hub-level coverage manifests; they preserve the existing page jobs and add no public route or authoring architecture.
- Old Town and Market now have spoke manifests. Old Town separates strong durable heritage evidence from unresolved visible-route and living-heritage claims; Market records that Thursday alone is not enough for public operational authoring.
- Existing Experience page families reside under `location-authority/`; this folder name does not change their registered Type B page job and is not, by itself, authority to invent a second family.
- The current authored link tokens already connect Weather, Hiking, Beaches and Restaurants. Those links do not count as completed connections until the source statement, target answer and shared Fact-ID coverage are mapped.

## 8. Operator decisions still required

Only three material decisions remain before the first authoring package:

1. **Experience Hub shape:** confirm the recommended single curated selection surface, removal of unsupported nightlife, and transfer of the village-versus-coast stay decision to Location.
2. **Beach owner boundary:** confirm that `/frigiliana-beaches` owns coast selection from a Frigiliana base while `/nerja-beaches` owns beach selection from a Nerja base. This permits shared beach facts without two identical full narratives.
3. **Daily Life publication form:** keep supermarkets as an authoring area inside `/frigiliana-daily-life` for the pilot, or later approve a standalone route only after the DR-IA-003 durable-job/evidence test. No standalone page is assumed by this map.

## 9. Recommended execution order after review

1. Collect the small operator evidence packs that unblock the first high-value connections: AMARA route logs, restaurant/evening combinations, shopping route and per-unit kitchen/winter facts.
2. Run only targeted external checks for live route and sea conditions, market operation and volatile venue/shop facts. Do not reopen broad local-climate extraction without a specific approved claim that needs it.
3. Produce one German authoring brief per approved page owner, with exact fact IDs, claim boundaries, required transitions and prohibited duplication.
4. Revise public content owner by owner; implement contextual links only inside the same approved authoring package.
5. Validate five-language semantic parity, rendered page structure and local preview before integration.

This order closes Frigiliana as the Knowledge-to-Content pilot. Nerja and Tarifa can then reuse the method and shared design family, but must receive their own destination-specific page jobs, evidence and narrative choices.
