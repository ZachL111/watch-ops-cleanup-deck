# watch-ops-cleanup-deck

`watch-ops-cleanup-deck` is a JavaScript project in automation. Its focus is to develop a JavaScript command-oriented project for cleanup scenarios with node-edge fixtures, cycle and reachability reports, and local-only command execution.

## Project Rationale

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Watch Ops Cleanup Deck Review Notes

The first comparison I would make is `dry-run spread` against `dry-run spread` because it shows where the rule is most opinionated.

## Feature Set

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/watch-ops-cleanup-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `dry-run spread` and `dry-run spread`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The JavaScript addition stays small enough to inspect in one sitting.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Test Command

The verifier is intentionally local. It should fail if the fixture score math, lane assignment, or language-specific test drifts.

## Next Improvements

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
