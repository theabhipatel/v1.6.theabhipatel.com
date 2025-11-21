/**
 * Feature: portfolio-website, Property 5: Project card completeness
 * Validates: Requirements 5.1, 5.2
 *
 * Property: For any project in the data store, the rendered Project Card should
 * display title, short description, technologies array, and links (GitHub and
 * live URLs when available)
 */

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { render } from "@testing-library/react";
import { Project } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

// Generator for valid Project objects
const projectArb: fc.Arbitrary<Project> = fc.record({
  id: fc.string({ minLength: 1, maxLength: 50 }),
  slug: fc.string({ minLength: 1, maxLength: 100 }),
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

describe("Project Card Completeness Property Tests", () => {
  it("should display title for any project", () => {
    fc.assert(
      fc.property(projectArb, (project) => {
        const { container } = render(<ProjectCard project={project} />);

        // Verify title is displayed
        expect(container.textContent).toContain(project.title);
      }),
      { numRuns: 100 }
    );
  });

  it("should display short description for any project", () => {
    fc.assert(
      fc.property(projectArb, (project) => {
        const { container } = render(<ProjectCard project={project} />);

        // Verify short description is displayed
        expect(container.textContent).toContain(project.shortDescription);
      }),
      { numRuns: 100 }
    );
  });

  it("should display technologies array for any project", () => {
    fc.assert(
      fc.property(projectArb, (project) => {
        const { container } = render(<ProjectCard project={project} />);

        // Verify at least some technologies are displayed
        // The component shows up to 5 technologies
        const displayCount = Math.min(5, project.technologies.length);
        const displayedTechs = project.technologies.slice(0, displayCount);

        displayedTechs.forEach((tech) => {
          expect(container.textContent).toContain(tech);
        });

        // If there are more than 5 technologies, verify the "+X more" indicator
        if (project.technologies.length > 5) {
          const remaining = project.technologies.length - 5;
          expect(container.textContent).toContain(`+${remaining} more`);
        }
      }),
      { numRuns: 100 }
    );
  });

  it("should display GitHub link when githubUrl is provided", () => {
    fc.assert(
      fc.property(
        projectArb.filter((p) => p.githubUrl !== undefined),
        (project) => {
          const { container } = render(<ProjectCard project={project} />);

          // Verify GitHub link text is present
          expect(container.textContent).toContain("Code");

          // Verify there's a link with the githubUrl (check for href attribute)
          const links = container.querySelectorAll("a");
          const hasGithubLink = Array.from(links).some(
            (link) => link.getAttribute("href") === project.githubUrl
          );

          expect(hasGithubLink).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should display live demo link when liveUrl is provided", () => {
    fc.assert(
      fc.property(
        projectArb.filter((p) => p.liveUrl !== undefined),
        (project) => {
          const { container } = render(<ProjectCard project={project} />);

          // Verify live demo link text is present
          expect(container.textContent).toContain("Live Demo");

          // Verify there's a link with the liveUrl (check for href attribute)
          const links = container.querySelectorAll("a");
          const hasLiveLink = Array.from(links).some(
            (link) => link.getAttribute("href") === project.liveUrl
          );

          expect(hasLiveLink).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should render without errors when optional links are missing", () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 1, maxLength: 50 }),
          slug: fc.string({ minLength: 1, maxLength: 100 }),
          title: fc.string({ minLength: 1, maxLength: 200 }),
          shortDescription: fc.string({ minLength: 10, maxLength: 500 }),
          overview: fc.string({ minLength: 10, maxLength: 1000 }),
          features: fc.array(fc.string({ minLength: 5, maxLength: 200 }), {
            minLength: 1,
            maxLength: 20,
          }),
          technologies: fc.array(fc.string({ minLength: 1, maxLength: 50 }), {
            minLength: 1,
            maxLength: 20,
          }),
          images: fc.array(fc.webUrl(), { minLength: 1, maxLength: 10 }),
          thumbnailImage: fc.webUrl(),
          featured: fc.boolean(),
          createdAt: fc.date(),
        }),
        (project) => {
          const { container } = render(<ProjectCard project={project} />);

          // Should still render successfully without optional fields
          expect(container).toBeTruthy();
          expect(container.textContent).toContain(project.title);
          expect(container.textContent).toContain(project.shortDescription);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should display all required fields for any valid project", () => {
    fc.assert(
      fc.property(projectArb, (project) => {
        const { container } = render(<ProjectCard project={project} />);

        // Verify all required fields are present
        expect(container).toBeTruthy();

        // Title
        expect(container.textContent).toContain(project.title);

        // Short description
        expect(container.textContent).toContain(project.shortDescription);

        // At least one technology
        expect(project.technologies.length).toBeGreaterThan(0);
        expect(container.textContent).toContain(project.technologies[0]);

        // Links section should exist (even if empty)
        const links = container.querySelectorAll("a");
        expect(links.length).toBeGreaterThanOrEqual(1); // At least the main card link
      }),
      { numRuns: 100 }
    );
  });
});
