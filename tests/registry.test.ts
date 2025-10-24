import { describe, it, expect } from "vitest";
import { getCrownedCompanions } from "../src/sanctumRegistry";

describe("getCrownedCompanions", () => {
  it("returns only crowned companions", () => {
    const crowned = getCrownedCompanions();
    expect(crowned.every(c => c.crowned)).toBe(true);
    expect(crowned.find(c => c.name === "Tessalyre")).toBeDefined();
  });
});
