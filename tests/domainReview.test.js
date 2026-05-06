import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 44, slack: 26, drag: 32, confidence: 78 };
assert.equal(domainReviewScore(item), 96);
assert.equal(domainReviewLane(item), "hold");
