import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as fc from "fast-check";
import { Footer } from "./Footer";

// Feature: portfolio-website, Property 3: Footer brand consistency
// Validates: Requirements 2.4
describe("Footer - Property 3: Footer brand consistency", () => {
  const brandName = "TheAbhiPatel";

  it("should always display the brand name TheAbhiPatel", () => {
    fc.assert(
      fc.property(fc.integer({ min: 1, max: 100 }), () => {
        const { unmount } = render(<Footer />);

        // Find all elements containing the brand name
        const brandElements = screen.getAllByText(brandName);

        // At least one element should contain the brand name
        expect(brandElements.length).toBeGreaterThan(0);

        // Clean up
        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it("should display brand name in footer", () => {
    render(<Footer />);

    // Verify brand name is present
    const brandElements = screen.getAllByText(brandName);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  it("should display copyright information", () => {
    render(<Footer />);

    // Verify copyright text is present
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      new RegExp(`© ${currentYear} TheAbhiPatel`)
    );
    expect(copyrightText).toBeTruthy();
  });
});
