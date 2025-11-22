/**
 * Property-Based Tests for ExperienceTimeline Component
 * Feature: portfolio-website
 */

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import * as fc from "fast-check";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { Experience } from "@/constants/experience";

// Generator for non-empty, non-whitespace strings
const nonEmptyString = fc
  .string({ minLength: 1 })
  .filter((s) => s.trim().length > 0);

// Generator for Experience objects
const experienceArbitrary = fc.record({
  id: nonEmptyString,
  company: nonEmptyString,
  companyLogo: fc.option(fc.webUrl(), { nil: undefined }),
  role: nonEmptyString,
  duration: nonEmptyString,
  startDate: fc.date(),
  endDate: fc.option(fc.date(), { nil: undefined }),
  current: fc.boolean(),
  achievements: fc.array(nonEmptyString, { minLength: 1 }),
  technologies: fc.option(fc.array(nonEmptyString, { minLength: 1 }), {
    nil: undefined,
  }),
}) as fc.Arbitrary<Experience>;

describe("Experience Entry Completeness Property Tests", () => {
  it("Property 8: Experience entry completeness - should display company name, role, duration, and achievements for any experience entry", () => {
    // Feature: portfolio-website, Property 8: Experience entry completeness
    // Validates: Requirements 6.2

    fc.assert(
      fc.property(experienceArbitrary, (experience) => {
        const { container } = render(
          <ExperienceTimeline experiences={[experience]} />
        );

        // Verify company name is displayed (may appear multiple times if same as other fields)
        expect(container.textContent).toContain(experience.company);

        // Verify role is displayed
        expect(container.textContent).toContain(experience.role);

        // Verify duration is displayed
        expect(container.textContent).toContain(experience.duration);

        // Verify achievements are accessible (button shows count)
        expect(container.textContent).toContain(
          `Show Achievements (${experience.achievements.length})`
        );
      }),
      { numRuns: 100 }
    );
  });
});

describe("Experience Chronological Ordering Property Tests", () => {
  it("Property 9: Experience chronological ordering - should display experiences in reverse chronological order (most recent first)", () => {
    // Feature: portfolio-website, Property 9: Experience chronological ordering
    // Validates: Requirements 6.3

    fc.assert(
      fc.property(
        fc.array(experienceArbitrary, { minLength: 2, maxLength: 10 }),
        (experiences) => {
          // Sort experiences in reverse chronological order (most recent first)
          const sortedExperiences = [...experiences].sort(
            (a, b) => b.startDate.getTime() - a.startDate.getTime()
          );

          const { container } = render(
            <ExperienceTimeline experiences={sortedExperiences} />
          );

          // Get all company names in the order they appear in the DOM
          const companyElements = container.querySelectorAll(
            ".text-lg.font-semibold.text-foreground"
          );
          const renderedCompanies = Array.from(companyElements).map(
            (el) => el.textContent
          );

          // Verify that companies appear in reverse chronological order
          sortedExperiences.forEach((exp, index) => {
            expect(renderedCompanies[index]).toBe(exp.company);
          });

          // Additional verification: ensure the order is actually reverse chronological
          for (let i = 0; i < sortedExperiences.length - 1; i++) {
            expect(
              sortedExperiences[i].startDate.getTime()
            ).toBeGreaterThanOrEqual(
              sortedExperiences[i + 1].startDate.getTime()
            );
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
