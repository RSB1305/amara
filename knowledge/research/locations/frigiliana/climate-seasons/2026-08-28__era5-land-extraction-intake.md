---
subject: frigiliana-nerja
topic: climate-seasons
research_run_id: 2026-08-28__114110__frigiliana-nerja-era5-land-extraction__research-001
record_type: research-intake
status: raw-received
created: 2026-08-28T12:11:31+02:00
public: false
---

# Frigiliana and Nerja ERA5-Land extraction — intake

## Preserved raw artifact

- Drive file: [GPT Deep Research report](https://drive.google.com/file/d/1qfKHvJcEKR6cAnxDIO-YSV6__EBdQuQc/view?usp=drivesdk)
- Stored name: `2026-08-28__114110__frigiliana-nerja-era5-land-extraction__research-001__gpt-deep-research.md`
- Original upload name: `deep-research-report (18).md`
- MIME type: `text/markdown`
- Size: 79,021 bytes
- Preservation: original upload; report text was not rewritten

## Intake decision

The report is a method and execution package, not a completed data extraction. It provides dataset selection, destination reference coordinates, expected nearest-grid mapping, unit and time-handling requirements, a proposed CDS request and a calculation script.

The research environment did not authenticate against the Copernicus Climate Data Store, download ERA5-Land raw data, execute the script or produce CSV results. Every monthly Frigiliana value, Nerja value and destination difference is explicitly marked `PENDING EXTRACTION`. Sunshine duration remains `NOT DERIVED`.

No numerical climate fact is adopted from this run. The existing public Frigiliana and Nerja monthly tables remain unauthorized as local values.

## Method accepted for execution review

- Use the AEMET municipal-capital reference points, not property coordinates.
- Use the same 1991–2020 ERA5-Land method for both destinations.
- Calculate mean daily maxima and minima from hourly 2 m temperature rather than relabelling monthly means.
- Handle calendar days in `Europe/Madrid` and document daylight-saving transitions.
- Verify precipitation accumulation semantics and conversions from primary documentation.
- Preserve the actual returned grid coordinates, raw data, requests, script, logs, CSV results and checksums.
- Do not derive sunshine hours from radiation without a separately validated method.

The report's expected nearest grid points—approximately `(36.8, -3.9)` for Frigiliana and `(36.7, -3.9)` for Nerja—remain derived expectations until an actual CDS response confirms the coordinates.

## Execution blocker

At intake time, the local environment had no `.cdsapirc` credentials file. A bundled Python runtime is available, but it does not currently include `cdsapi`, `xarray`, `cfgrib` or `netCDF4`; `pandas` and `numpy` are present. Therefore the extraction cannot be represented as executed or complete.

The next valid state transition requires an authenticated CDS download and a reproducible local calculation. Only after raw files and results are stored in the run's `04_SOURCE_MATERIAL` folder may the monthly series be reviewed for canonical facts and page coverage.
