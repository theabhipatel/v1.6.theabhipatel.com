"use client";

import { useState, useMemo } from "react";
import { projects } from "@/constants/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/shared";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";

export default function ProjectsPage() {
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "featured">(
    "newest"
  );
  const [filterTech, setFilterTech] = useState<string>("all");

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects];

    // Apply technology filter
    if (filterTech !== "all") {
      result = result.filter((project) =>
        project.technologies.includes(filterTech)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        break;
      case "oldest":
        result.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        break;
      case "featured":
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.createdAt.getTime() - a.createdAt.getTime();
        });
        break;
    }

    return result;
  }, [sortBy, filterTech]);

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Animated Background */}
      <AnimatedBackground variant="page" />

      {/* Projects Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="My Projects"
            subtitle="A collection of full-stack applications, MERN stack projects, and DevOps implementations"
            align="center"
          />

          {/* Filters and Sorting */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort"
                className="text-sm font-medium text-muted-foreground"
              >
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "newest" | "oldest" | "featured")
                }
                className="px-3 py-2 rounded-md bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="featured">Featured First</option>
              </select>
            </div>

            {/* Technology Filter */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="filter"
                className="text-sm font-medium text-muted-foreground"
              >
                Filter by:
              </label>
              <select
                id="filter"
                value={filterTech}
                onChange={(e) => setFilterTech(e.target.value)}
                className="px-3 py-2 rounded-md bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Technologies</option>
                {allTechnologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-sm text-muted-foreground">
            Showing {filteredAndSortedProjects.length} of {projects.length}{" "}
            projects
          </div>

          {/* Projects Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredAndSortedProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects match the selected filters.
              </p>
              <button
                onClick={() => {
                  setSortBy("newest");
                  setFilterTech("all");
                }}
                className="mt-4 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
