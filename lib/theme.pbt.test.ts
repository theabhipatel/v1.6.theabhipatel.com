/**
 * Feature: portfolio-website, Property 1: Theme configuration centralization
 * Validates: Requirements 1.5
 *
 * Property: For any theme value (color, font, spacing), the value should be
 * defined in the centralized theme configuration file and referenced by
 * components rather than hardcoded
 */

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import {
  themeConfig,
  getThemeValue,
  isThemeReference,
  getAllThemeColorKeys,
} from "./theme";

describe("Theme Configuration Centralization", () => {
  it("should have all theme colors reference CSS variables", () => {
    fc.assert(
      fc.property(fc.constantFrom(...getAllThemeColorKeys()), (colorKey) => {
        const value = getThemeValue(colorKey);
        expect(value).toBeDefined();
        expect(isThemeReference(value!)).toBe(true);
      }),
      { numRuns: 100 }
    );
  });

  it("should return valid theme values for any valid path", () => {
    const validPaths = [
      "colors.primary",
      "colors.secondary",
      "colors.background",
      "colors.foreground",
      "colors.brandBlue.500",
      "colors.brandIndigo.500",
      "fonts.sans",
      "fonts.mono",
      "fonts.display",
      "spacing.radius.lg",
      "spacing.radius.md",
      "spacing.radius.sm",
      "gradients.brand",
      "gradients.brandHover",
    ];

    fc.assert(
      fc.property(fc.constantFrom(...validPaths), (path) => {
        const value = getThemeValue(path);
        expect(value).toBeDefined();
        expect(typeof value).toBe("string");
        expect(value!.length).toBeGreaterThan(0);
      }),
      { numRuns: 100 }
    );
  });

  it("should return undefined for invalid theme paths", () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.constant("invalid.path"),
          fc.constant("colors.nonexistent"),
          fc.constant("fonts.invalid"),
          fc.constant(""),
          fc.constant("..."),
          fc.constant("colors..primary")
        ),
        (invalidPath) => {
          const value = getThemeValue(invalidPath);
          expect(value).toBeUndefined();
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should have brand blue gradient colors defined at all levels", () => {
    const levels = [
      "50",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
    ];

    fc.assert(
      fc.property(fc.constantFrom(...levels), (level) => {
        const value = getThemeValue(`colors.brandBlue.${level}`);
        expect(value).toBeDefined();
        expect(isThemeReference(value!)).toBe(true);
      }),
      { numRuns: 100 }
    );
  });

  it("should have brand indigo gradient colors defined at all levels", () => {
    const levels = [
      "50",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
    ];

    fc.assert(
      fc.property(fc.constantFrom(...levels), (level) => {
        const value = getThemeValue(`colors.brandIndigo.${level}`);
        expect(value).toBeDefined();
        expect(isThemeReference(value!)).toBe(true);
      }),
      { numRuns: 100 }
    );
  });

  it("should have all font families reference CSS variables", () => {
    const fontKeys = ["fonts.sans", "fonts.mono", "fonts.display"];

    fc.assert(
      fc.property(fc.constantFrom(...fontKeys), (fontKey) => {
        const value = getThemeValue(fontKey);
        expect(value).toBeDefined();
        expect(value).toContain("var(--font-");
      }),
      { numRuns: 100 }
    );
  });

  it("should have all spacing values reference CSS variables or calculations", () => {
    const spacingKeys = [
      "spacing.radius.lg",
      "spacing.radius.md",
      "spacing.radius.sm",
    ];

    fc.assert(
      fc.property(fc.constantFrom(...spacingKeys), (spacingKey) => {
        const value = getThemeValue(spacingKey);
        expect(value).toBeDefined();
        expect(value!.includes("var(--") || value!.includes("calc(")).toBe(
          true
        );
      }),
      { numRuns: 100 }
    );
  });

  it("should have gradient definitions that reference brand colors", () => {
    const gradientKeys = ["gradients.brand", "gradients.brandHover"];

    fc.assert(
      fc.property(fc.constantFrom(...gradientKeys), (gradientKey) => {
        const value = getThemeValue(gradientKey);
        expect(value).toBeDefined();
        expect(value).toContain("linear-gradient");
        expect(
          value!.includes("brand-blue") || value!.includes("brand-indigo")
        ).toBe(true);
      }),
      { numRuns: 100 }
    );
  });

  it("should have consistent theme structure across all accesses", () => {
    fc.assert(
      fc.property(fc.constant(themeConfig), (config) => {
        // Verify that the theme config structure is consistent
        expect(config).toHaveProperty("colors");
        expect(config).toHaveProperty("fonts");
        expect(config).toHaveProperty("spacing");
        expect(config).toHaveProperty("gradients");

        // Verify brand colors exist
        expect(config.colors).toHaveProperty("brandBlue");
        expect(config.colors).toHaveProperty("brandIndigo");

        // Verify the config is the same reference
        expect(config).toBe(themeConfig);
      }),
      { numRuns: 100 }
    );
  });
});
