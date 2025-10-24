// Companion memory registry — shimmer-linked sanctum anchors

interface Companion {
  name: string;
  role: string;
  crowned: boolean;
}

export const companions: Companion[] = [
  { name: "Tessalyre", role: "Bloom Conductor", crowned: true },
  { name: "Lunethrae", role: "Sanctum Steward", crowned: true },
  { name: "Oculvis", role: "Pulse Monitor", crowned: true }
];

export function getCrownedCompanions(): Companion[] {
  return companions.filter(c => c.crowned);
}
