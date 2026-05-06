# Watch Ops Cleanup Deck Walkthrough

I use this file as a small checklist before changing the JavaScript implementation.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 96 | hold |
| stress | rename risk | 177 | ship |
| edge | operator cost | 174 | ship |
| recovery | idempotence | 186 | ship |
| stale | dry-run spread | 243 | ship |

Start with `stale` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

If `baseline` becomes less cautious without a clear reason, I would inspect the drag input first.
