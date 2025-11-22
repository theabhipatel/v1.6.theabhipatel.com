"use client";

import { Experience } from "@/constants/experience";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue-500 via-brand-indigo-500 to-brand-blue-500 opacity-30" />

      <div className="space-y-8">
        {experiences.map((experience, index) => {
          const isExpanded = expandedIds.has(experience.id);

          return (
            <div key={experience.id} className="relative pl-20 group">
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-brand-blue-500 to-brand-indigo-500 ring-4 ring-background shadow-lg shadow-brand-blue-500/20 group-hover:shadow-brand-blue-500/40 transition-shadow" />

              {/* Company logo placeholder */}
              {experience.companyLogo && (
                <div className="absolute left-2 top-2 w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-brand-blue-500/20">
                  {/* Placeholder for logo - in production would use Image component */}
                  <span className="text-xs font-bold text-muted-foreground">
                    {experience.company.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}

              {/* Experience card */}
              <div
                className={cn(
                  "bg-card border border-border rounded-lg p-6 transition-all duration-300",
                  "hover:border-brand-blue-500/50 hover:shadow-lg hover:shadow-brand-blue-500/10",
                  "group-hover:translate-x-1"
                )}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-brand-blue-400 to-brand-indigo-400 bg-clip-text text-transparent">
                      {experience.role}
                    </h3>
                    <p className="text-lg font-semibold text-foreground mt-1">
                      {experience.company}
                    </p>
                  </div>
                  {experience.current && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-blue-500/10 text-brand-blue-400 border border-brand-blue-500/20">
                      Current
                    </span>
                  )}
                </div>

                {/* Duration */}
                <p className="text-sm text-muted-foreground mb-4">
                  {experience.duration}
                </p>

                {/* Technologies */}
                {experience.technologies &&
                  experience.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                {/* Achievements toggle button */}
                <button
                  onClick={() => toggleExpanded(experience.id)}
                  className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors",
                    "text-brand-blue-400 hover:text-brand-blue-300"
                  )}
                  aria-expanded={isExpanded}
                  aria-controls={`achievements-${experience.id}`}
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Hide Achievements
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Show Achievements ({experience.achievements.length})
                    </>
                  )}
                </button>

                {/* Achievements list (expandable) */}
                {isExpanded && (
                  <div
                    id={`achievements-${experience.id}`}
                    className="mt-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300"
                  >
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue-500 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
