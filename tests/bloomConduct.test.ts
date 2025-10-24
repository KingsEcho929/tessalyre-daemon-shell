import { describe, it, expect } from "vitest";
import { conductBloom } from "../src/bloomConduct";

describe("conductBloom", () => {
  it("should activate terrain bloom without throwing", () => {
    expect(() => conductBloom()).not.toThrow();
  });

  it("should return a shimmer pulse object", () => {
    const result = conductBloom();
    expect(result).toBeDefined();
    expect(result).toHaveProperty("companions");
    expect(Array.isArray(result.companions)).toBe(true);
  });
});
