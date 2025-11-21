/**
 * Feature: portfolio-website, Property 6: Project card navigation
 * Validates: Requirements 5.3
 *
 * Property: For any Project Card, clicking the card should navigate to the
 * detailed project page with the correct slug
 */

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { render, fireEvent } from "@testing-library/react";
import { Project } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

// Generator for valid URL slugs (alphanumeric with hyphens)
const slugArb = fc
  .stringMatching(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  .filter((s) => s.length >= 1 && s.length <= 100);

// Generator for valid Project objects
const projectArb: fc.Arbitrary<Project> = fc.record({
  id: fc.string({ minLength: 1, maxLength: 50 }),
  slug: slugArb,
  title: fc.string({ minLength: 1, maxLength: 200 }),
  shortDescription: fc.string({ minLength: 10, maxLength: 500 }),
  overview: fc.string({ minLength: 10, maxLength: 1000 }),
  features: fc.array(fc.string({ minLength: 5, maxLength: 200 }), {
    minLength: 1,
    maxLength: 20,
  }),
  architecture: fc.option(fc.string({ minLength: 10, maxLength: 1000 }), {
    nil: undefined,
  }),
  technologies: fc.array(fc.string({ minLength: 1, maxLength: 50 }), {
    minLength: 1,
    maxLength: 20,
  }),
  images: fc.array(fc.webUrl(), { minLength: 1, maxLength: 10 }),
  thumbnailImage: fc.webUrl(),
  githubUrl: fc.option(fc.webUrl(), { nil: undefined }),
  liveUrl: fc.option(fc.webUrl(), { nil: undefined }),
  featured: fc.boolean(),
  createdAt: fc.date(),
});

describe("Project Card Navigation Property Tests", () => {
  it("should have a link to the correct project detail page for any project", () => {
    fc.assert(
      fc.property(projectArb, (project) => {
        const { container } = render(<ProjectCard project={project} />);

        // Find the main card link (the Link component wrapping the card)
        const cardLink = container.querySelector(
          `a[href="/projects/${project.slug}"]`
        );

        // Verify the link exists and points to the correct slug
        expect(cardLink).toBeDefined();
        expect(cardLink?.getAttribute("href")).toBe(
          `/projects/${project.slug}`
        );
      }),
      { numRuns: 100 }
    );
  });

  it("should generate unique navigation paths for projects with different slugs", () => {
    fc.assert(
      fc.property(
        fc.array(projectArb, { minLength: 2, maxLength: 10 }),
        (projects) => {
          // Filter to ensure unique slugs
          const uniqueProjects = projects.filter(
            (project, index, self) =>
              self.findIndex((p) => p.slug === project.slug) === index
          );

          if (uniqueProjects.length < 2) {
            return true; // Skip if we don't have at least 2 unique slugs
          }

          // Render all project cards
          const renderedCards = uniqueProjects.map((project) =>
            render(<ProjectCard project={project} />)
          );

          // Extract all navigation hrefs
          const hrefs = renderedCards.map((card) => {
            const link = card.container.querySelector("a");
            return link?.getAttribute("href");
          });

          // Verify all hrefs are unique
          const uniqueHrefs = new Set(hrefs);
          expect(uniqueHrefs.size).toBe(uniqueProjects.length);

          // Verify each href matches the expected pattern
          uniqueProjects.forEach((project, index) => {
            expect(hrefs[index]).toBe(`/projects/${project.slug}`);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should maintain slug integrity in navigation path", () => {
    fc.assert(
      fc.property(projectArb, (project) => {
        const { container } = render(<ProjectCard project={project} />);

        // Get the navigation link
        const cardLink = container.querySelector("a");
        const href = cardLink?.getAttribute("href");

        // Verify the href contains the exact slug
        expect(href).toContain(project.slug);

        // Verify the href follows the expected pattern
        expect(href).toBe(`/projects/${project.slug}`);

        // Verify no slug transformation or encoding issues
        const extractedSlug = href?.split("/projects/")[1];
        expect(extractedSlug).toBe(project.slug);
      }),
      { numRuns: 100 }
    );
  });

  it("should render clickable card for any valid project", () => {
    fc.assert(
      fc.property(projectArb, (project) => {
        const { container } = render(<ProjectCard project={project} />);

        // Find the main card link
        const cardLink = container.querySelector("a");

        // Verify the card is clickable (has href attribute)
        expect(cardLink).toBeDefined();
        expect(cardLink?.hasAttribute("href")).toBe(true);

        // Verify it's a valid navigation link
        const href = cardLink?.getAttribute("href");
        expect(href).toBeTruthy();
        expect(href?.startsWith("/projects/")).toBe(true);
      }),
      { numRuns: 100 }
    );
  });
});
