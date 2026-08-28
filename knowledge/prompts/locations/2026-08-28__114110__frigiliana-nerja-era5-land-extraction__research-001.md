# AMARA Data Research — comparable Frigiliana and Nerja climate series

**Run ID:** `2026-08-28__114110__frigiliana-nerja-era5-land-extraction__research-001`
**Research date:** 2026-08-28

## Objective

Produce a reproducible, source-preserved climate-data extraction for Frigiliana and Nerja using one common method. This is a data and methodology task, not website authoring. Its purpose is to determine whether AMARA can replace the currently identical third-party monthly tables with separately derived, honestly bounded values.

## Fixed destination references

Use the AEMET municipal-capital reference points as the declared destination points:

- Frigiliana: `36.7929997200, -3.8987568700`, AEMET municipal reference altitude `315 m`.
- Nerja: `36.7448468400, -3.8766765500`, AEMET municipal reference altitude `20 m`.

These coordinates represent the municipal capitals used by AEMET. They are not Casa AMARA property coordinates and must never be described as property measurements.

Primary coordinate sources:

- https://www.aemet.es/es/eltiempo/prediccion/municipios/frigiliana-id29053
- https://www.aemet.es/es/eltiempo/prediccion/municipios/nerja-id29075

## Primary dataset and comparison period

- Primary same-method candidate: Copernicus ERA5-Land.
- Dataset documentation: https://cds.climate.copernicus.eu/datasets/reanalysis-era5-land-monthly-means
- Required climatological reference period: `1991-01-01` through `2020-12-31`, inclusive.
- Preserve the exact CDS dataset name, product type, request parameters, grid coordinates returned, file format, timestamps, units and all transformations.
- State that ERA5-Land is reanalysis. The CDS grid is 0.1° and the native resolution is about 9 km; it does not resolve a property, terrace, street, shaded lane or every terrain exposure.

## Required extraction logic

1. Determine and report the exact ERA5-Land grid point or extraction method used for each AEMET reference coordinate. Do not silently substitute a nearby coast, station or municipal centroid.
2. Prefer an authenticated Copernicus CDS extraction. Preserve the complete request or script and the untouched raw output.
3. For each destination, calculate the following 1991–2020 calendar-month climatologies only where the dataset and calculation are methodologically valid:
   - mean 2 m air temperature in °C;
   - mean daily maximum 2 m air temperature in °C;
   - mean daily minimum 2 m air temperature in °C;
   - mean monthly total precipitation in mm;
   - sunshine duration in hours per day only if a competent primary variable and documented conversion support it.
4. Average daily maxima and minima from hourly data; do not relabel a monthly mean or the maximum of a mean diurnal cycle as an average daily maximum.
5. Document UTC-to-local-day handling for `Europe/Madrid`, including daylight-saving changes, before calculating daily extrema.
6. Verify the ERA5-Land precipitation accumulation convention and unit conversion from official documentation. Do not guess whether a monthly product represents metres, metres per day or a monthly accumulation.
7. If sunshine duration is unavailable or not defensibly derivable, mark the public-table field as a gap. Do not turn radiation into sunshine hours through an undocumented formula.
8. Compare the derived Nerja series with AEMET station `6213X` only as a reasonableness check if adequate 1991–2020 normals or sufficiently complete observations are available. Keep station `6213X` at its documented location and altitude; it is not the Nerja municipal-capital point.
9. Compare the broad regional pattern with AEMET Málaga Airport station `6155A` normals only as a second reasonableness check. Do not adjust either ERA5-Land point by an assumed lapse rate.

## Required files and output

Return one complete Markdown methodology report and, when execution is possible, all of the following separate files:

- untouched Copernicus raw download (`.grib`, `.nc` or the supplied native format);
- exact CDS request or executable extraction script;
- machine-readable monthly result table (`.csv`);
- calculation/validation log;
- checksum list for every raw and derived file.

The Markdown report must include:

1. executive result and whether values are ready for canonical knowledge;
2. exact coordinate-to-grid mapping for both destinations;
3. dataset, product type, period, variables, units and transformations;
4. one 12-row result table per destination;
5. a Frigiliana-versus-Nerja difference table, without causal claims unsupported by the grid;
6. validation against suitable AEMET evidence;
7. missing variables and unusable calculations;
8. exact reproducibility instructions;
9. atomic candidate facts with status and claim boundaries;
10. a source register containing only opened sources with direct URLs and access dates.

## Stop conditions

- If authenticated CDS access or actual calculation is unavailable, do not invent results and do not copy values from Climate-Data.org or another weather portal.
- Instead, return the complete executable request/script, list the missing execution prerequisite, mark every numerical result `PENDING EXTRACTION`, and end with `DATA EXTRACTION REQUIRED`.
- Do not write public copy, SEO text, travel recommendations, new routes, schemas or page architecture.
- External sources and computations must never be presented as AMARA first-hand experience.

## Mandatory Google Drive storage

- Immutable run folder: https://drive.google.com/drive/folders/11hgGmamxmUtoegCQg4DglxYLJojSAAi8
- Save the complete unabridged GPT result in: https://drive.google.com/drive/folders/1KzGB_cDZbABBrV_NGw9zHT95wSlyud1Q
- Required GPT filename: `2026-08-28__114110__frigiliana-nerja-era5-land-extraction__research-001__gpt-deep-research.md`
- Save a Gemini result, if commissioned, in: https://drive.google.com/drive/folders/19oVrw0gpdpEcNE20IzTvF6M8GI-BzpJu
- Save untouched raw downloads, scripts, CSV files, logs and checksums in: https://drive.google.com/drive/folders/173wP_gc2eFqrd-sKXkgr8D7KuKlZ5uWc
- Save only genuine AMARA operator observations in: https://drive.google.com/drive/folders/18mEPdqlZt0BBswTXcVQ7vjKnLN1RMKCY
- Never overwrite an earlier artifact. Preserve all output in full.
- If the research environment cannot write to Google Drive, return every file or complete code block in full and end with `DRIVE UPLOAD REQUIRED`; never claim storage succeeded.
