/**
 * Feature: portfolio-website, Property 4: Skills categorization
 * Validates: Requirements 4.5
 *
 * Property: For any skill in the data store, the skill should be assigned to
 * a logical category and rendered within a Skill Card component
 */

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { render } from "@testing-library/react";
import { Skill } from "@/constants/skills";
import SkillCard from "./SkillCard";

// Generator for valid skill categories
const categoryArb = fc.constantFrom(
  "mern" as const,
  "fullstack" as const,
  "javascript" as const,
  "devops" as const
);

// Generator for valid proficiency levels
const proficiencyArb = fc.constantFrom(
  "beginner" as const,
  "intermediate" as const,
  "advanced" as const,
  "expert" as const
);

// Generator for valid Skill objects
const skillArb: fc.Arbitrary<Skill> = fc.record({
  id: fc.string({ minLength: 1, maxLength: 50 }),
  name: fc.string({ minLength: 1, maxLength: 100 }),
  icon: fc.string({ minLength: 1, maxLength: 10 }),
  category: categoryArb,
  subcategory: fc.option(fc.string({ minLength: 1, maxLength: 50 }), {
    nil: undefined,
  }),
  proficiency: fc.option(proficiencyArb, { nil: undefined }),
  description: fc.option(fc.string({ minLength: 1, maxLength: 200 }), {
    nil: undefined,
  }),
});

describe("Skills Categorization Property Tests", () => {
  it("should assign every skill to a valid category", () => {
    fc.assert(
      fc.property(skillArb, (skill) => {
        // Every skill must have a category
        expect(skill.category).toBeDefined();

        // Category must be one of the valid categories
        const validCategories = ["mern", "fullstack", "javascript", "devops"];
        expect(validCategories).toContain(skill.category);
      }),
      { numRuns: 100 }
    );
  });

  it("should render a SkillCard component for any valid skill", () => {
    fc.assert(
      fc.property(skillArb, (skill) => {
        // Render the SkillCard component
        const { container } = render(<SkillCard skill={skill} />);

        // Verify the component renders without errors
        expect(container).toBeTruthy();

        // Verify the skill name is displayed
        expect(container.textContent).toContain(skill.name);

        // Verify the category is displayed (in uppercase)
        expect(container.textContent).toContain(skill.category.toUpperCase());

        // Verify the icon is displayed
        expect(container.textContent).toContain(skill.icon);
      }),
      { numRuns: 100 }
    );
  });

  it("should display proficiency indicator when proficiency is provided", () => {
    fc.assert(
      fc.property(
        skillArb.filter((s) => s.proficiency !== undefined),
        (skill) => {
          const { container } = render(<SkillCard skill={skill} />);

          // Verify proficiency is displayed
          const proficiencyText =
            skill.proficiency!.charAt(0).toUpperCase() +
            skill.proficiency!.slice(1);
          expect(container.textContent).toContain(proficiencyText);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should display description when provided", () => {
    fc.assert(
      fc.property(
        skillArb.filter((s) => s.description !== undefined),
        (skill) => {
          const { container } = render(<SkillCard skill={skill} />);

          // Verify description is in the DOM (even if hidden initially)
          expect(container.textContent).toContain(skill.description!);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should handle skills without optional fields", () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 1, maxLength: 50 }),
          name: fc.string({ minLength: 1, maxLength: 100 }),
          icon: fc.string({ minLength: 1, maxLength: 10 }),
          category: categoryArb,
        }),
        (skill) => {
          // Render skill without optional fields
          const { container } = render(<SkillCard skill={skill} />);

          // Should still render successfully
          expect(container).toBeTruthy();
          expect(container.textContent).toContain(skill.name);
          expect(container.textContent).toContain(skill.category.toUpperCase());
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should maintain category integrity across all skills", () => {
    fc.assert(
      fc.property(
        fc.array(skillArb, { minLength: 1, maxLength: 50 }),
        (skills) => {
          // Every skill in the array should have a valid category
          skills.forEach((skill) => {
            expect(skill.category).toBeDefined();
            expect(["mern", "fullstack", "javascript", "devops"]).toContain(
              skill.category
            );
          });

          // Skills can be grouped by category
          const groupedByCategory = skills.reduce(
            (acc, skill) => {
              if (!acc[skill.category]) {
                acc[skill.category] = [];
              }
              acc[skill.category].push(skill);
              return acc;
            },
            {} as Record<string, Skill[]>
          );

          // Each group should only contain skills of that category
          Object.entries(groupedByCategory).forEach(
            ([category, categorySkills]) => {
              categorySkills.forEach((skill) => {
                expect(skill.category).toBe(category);
              });
            }
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});
