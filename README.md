# watch-ops-cleanup-deck

`watch-ops-cleanup-deck` packages a practical automation exercise in JavaScript. The emphasis is on deterministic behavior, a small public API, and examples that explain the tradeoffs.

## How I Read Watch Ops Cleanup Deck

The useful thing to inspect here is how the same score rule is represented in code, metadata, and examples. If those three pieces disagree, the audit script should make the drift visible.

## Problem Shape

This is not a wrapper around a service. It is a self-contained project that shows how the model behaves when demand, capacity, latency, risk, and weight move in different directions.

## Scenario Walkthrough

The extended cases are not random smoke tests. `degraded` keeps pressure on the review path, while `recovery` shows the model when capacity and weight are strong enough to clear the threshold.

## Internal Model

The core is a scoring model over demand, capacity, latency, risk, and weight. That keeps dry-run output, file plans, and safety rails in one explicit decision path. The threshold is 180, with risk penalty 5, latency penalty 3, and weight bonus 2. The JavaScript version uses native modules and a small Node test path.

## Main Behaviors

- Models dry-run output with deterministic scoring and explicit review decisions.
- Uses fixture data to keep file plans changes visible in code review.
- Includes extended examples for safety rails, including `recovery` and `degraded`.
- Documents idempotent checks tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.

## How To Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Validation

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Repository Map

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Follow-Up Work

- Add a comparison mode that shows how decisions change when one signal is adjusted.
- Add a loader for `examples/extended_cases.csv` and promote selected cases into the language test suite.
- Add a short report command that prints the score breakdown for a single scenario.
- Add one more automation fixture that focuses on a malformed or borderline input.

## Known Edges

The fixture set is deliberately small. That keeps the review surface clear, but it also means the model should not be treated as a complete domain simulator.

## Run It Locally

Use a normal shell with JavaScript available on `PATH`. The verifier is written as a PowerShell script because the portfolio was assembled on Windows.
