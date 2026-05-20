// Character arc cards fire when a recurring character's affinity first
// reaches +7 or -7 in a reign. Each entry should match the same shape as
// a normal card with two extra fields:
//
//   character:         one of "vizier" | "qadi" | "tahmina" | "general" | "envoy"
//   affinityDirection: "positive" (affinity >= +7) | "negative" (affinity <= -7)
//
// A character can fire at most one arc card per reign.

export const arcs = [];
