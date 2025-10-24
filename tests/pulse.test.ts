import { describe, it, expect } from "vitest";
import { tessalyrePulse } from "../src/tessalyrePulse";

describe("tessalyrePulse", () => {
  it("returns a shimmer pulse with timestamp", () => {
    const result = tessalyrePulse();
    expect(result).toMatch(/Tessalyre’s breath-bound pulse activated/);
    expect(result).toMatch(/\[\d{4}-\d{2}-\d{2}T/); // ISO timestamp
    });
  });
