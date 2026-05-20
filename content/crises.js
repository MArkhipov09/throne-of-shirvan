// Crisis cards fire when a stat first crosses an extreme threshold
// (below 15 or above 85) in a reign. Each entry should match the same
// shape as a normal card with two extra fields:
//
//   triggerStat:      one of "treasury" | "people" | "military" | "faith" | "naphtha"
//   triggerDirection: "low" (stat < 15) | "high" (stat > 85)
//
// A stat can fire at most one crisis per reign.

export const crises = [];
