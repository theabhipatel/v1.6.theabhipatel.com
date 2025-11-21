import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { cn } from "./utils";

describe("cn utility - property-based tests", () => {
  it("should always return a string", () => {
    fc.assert(
      fc.property(fc.array(fc.string()), (classes) => {
        const result = cn(...classes);
        expect(typeof result).toBe("string");
      }),
      { numRuns: 100 }
    );
  });

  it("should handle empty input", () => {
    const result = cn();
    expect(result).toBe("");
  });
});
