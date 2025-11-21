"use client";

import { motion } from "framer-motion";
import { Skill } from "@/constants/skills";

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

export default function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const proficiencyColors = {
    beginner: "text-yellow-500",
    intermediate: "text-blue-500",
    advanced: "text-purple-500",
    expert: "text-green-500",
  };

  const proficiencyColor = skill.proficiency
    ? proficiencyColors[skill.proficiency]
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
      }}
      className="group relative flex flex-col items-center justify-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-5xl mb-3">{skill.icon}</span>
        <h3 className="text-lg font-semibold text-center mb-1">{skill.name}</h3>
        <p className="text-xs text-muted-foreground text-center mb-2">
          {skill.category.toUpperCase()}
        </p>

        {/* Proficiency indicator */}
        {skill.proficiency && (
          <div className="flex items-center gap-1 mt-2">
            <span className={`text-xs font-medium ${proficiencyColor}`}>
              {skill.proficiency.charAt(0).toUpperCase() +
                skill.proficiency.slice(1)}
            </span>
          </div>
        )}

        {/* Description on hover */}
        {skill.description && (
          <p className="text-xs text-muted-foreground text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {skill.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
