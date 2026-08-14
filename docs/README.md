# AMARA Documentation — Compatibility Candidate

This candidate proposes the repository documentation structure for AMARA. It is **not active until the read-only Compatibility Gate passes and a later implementation package is explicitly approved**.

## Proposed start path after activation

1. `AMARA_REGISTER.md`
2. relevant governing owner in `standards/`
3. relevant current interim owner in `interim/` where Package 2/3 replacement is still pending
4. current feature contract explicitly listed by the Register

`archive/` contains evidence/history and never outranks current owners.

## Proposed structure

- `standards/` — Constitution and governing contracts already migrated to Markdown.
- `interim/` — faithful Markdown snapshots of still-active V4/V2/V1.2 source documents pending normalization.
- `archive/` — evidence/history.
- `AMARA_REGISTER.md` — active-document register, decision register and Change Ledger.

## Important compatibility rule

An interim snapshot does not silently override an intentional supersession recorded by the Constitution or Decision Register. Conversely, a shorthand statement does not silently retire a still-active repository contract. Apparent conflicts trigger Reality Reconciliation.

## Revision model

Active documents use semantic versioning, ISO-8601 timestamps, document-level revision history and the central Change Ledger.
