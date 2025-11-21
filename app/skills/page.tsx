import { Metadata } from "next";
import { skillCategories } from "@/constants/skills";
import SkillCard from "@/components/skills/SkillCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";

export const metadata: Metadata = {
  title: "Skills | TheAbhiPatel",
  description:
    "Explore my technical expertise across MERN Stack, Full Stack Technologies, JavaScript & Web, and DevOps & Infrastructure. Comprehensive overview of technologies I work with.",
  keywords: [
    "MERN Stack",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "DevOps",
    "Docker",
    "Kubernetes",
    "AWS",
    "Next.js",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Skills | TheAbhiPatel",
    description:
      "Technical expertise across MERN Stack, Full Stack Technologies, JavaScript & Web, and DevOps & Infrastructure",
    type: "website",
  },
};

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground variant="page" />

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="A comprehensive overview of my technical expertise and the technologies I work with"
            align="center"
          />
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <section key={category.name} className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
                {category.name}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    index={categoryIndex * 10 + skillIndex}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
