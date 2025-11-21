import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import * as fc from "fast-check";
import { Navbar } from "./Navbar";

// Feature: portfolio-website, Property 2: Navigation functionality
// Validates: Requirements 2.2
describe("Navbar - Property 2: Navigation functionality", () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  it("should render all navigation links with correct hrefs", () => {
    fc.assert(
      fc.property(fc.constantFrom(...navLinks), (selectedLink) => {
        const { unmount } = render(<Navbar />);

        // Find all link elements with the selected label (desktop + mobile)
        const linkElements = screen.getAllByText(selectedLink.label);

        // At least one link should exist
        expect(linkElements.length).toBeGreaterThan(0);

        // Check that at least one has the correct href
        const hasCorrectHref = linkElements.some(
          (el) => el.closest("a")?.getAttribute("href") === selectedLink.href
        );
        expect(hasCorrectHref).toBe(true);

        // Clean up after each property test run
        unmount();
        cleanup();
      }),
      { numRuns: 100 }
    );
  });

  it("should have all required navigation links present", () => {
    render(<Navbar />);

    // Verify all navigation links are present
    navLinks.forEach((link) => {
      const linkElements = screen.getAllByText(link.label);
      expect(linkElements.length).toBeGreaterThan(0);

      // Check that at least one has the correct href
      const hasCorrectHref = linkElements.some(
        (el) => el.closest("a")?.getAttribute("href") === link.href
      );
      expect(hasCorrectHref).toBe(true);
    });
  });
});
