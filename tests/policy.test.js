import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 54,
    "capacity": 71,
    "latency": 20,
    "risk": 21,
    "weight": 8,
    "score": 30,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 99,
    "capacity": 86,
    "latency": 26,
    "risk": 19,
    "weight": 11,
    "score": 133,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 67,
    "capacity": 98,
    "latency": 27,
    "risk": 13,
    "weight": 8,
    "score": 102,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
