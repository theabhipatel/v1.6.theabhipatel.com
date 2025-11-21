import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import SkillsPreview from "@/components/home/SkillsPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { allSkills } from "@/constants/skills";
import { featuredProjects } from "@/constants/projects";
import { getSortedExperiences } from "@/constants/experience";

export const metadata: Metadata = {
  title: "TheAbhiPatel - Full Stack / MERN / DevOps Engineer",
  description:
    "Portfolio of Abhi Patel, a passionate Full Stack Developer specializing in the MERN stack and DevOps practices. Building scalable web applications that solve real-world problems.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "DevOps",
    "React",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Web Development",
  ],
  openGraph: {
    title: "TheAbhiPatel - Full Stack / MERN / DevOps Engineer",
    description:
      "Portfolio of Abhi Patel, a passionate Full Stack Developer specializing in the MERN stack and DevOps practices.",
    type: "website",
  },
};

export default function Home() {
  const sortedExperiences = getSortedExperiences();

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Animated Background */}
      <AnimatedBackground variant="hero" />

      {/* Hero Section */}
      <HeroSection
        name="TheAbhiPatel"
        title="Full Stack / MERN / DevOps Engineer"
        tagline="Building scalable web applications that solve real-world problems and deliver exceptional user experiences"
        ctaText="View My Work"
        ctaLink="#projects"
      />

      {/* Skills Preview */}
      <SkillsPreview skills={allSkills} maxDisplay={12} />

      {/* Projects Preview */}
      <ProjectsPreview projects={featuredProjects} maxDisplay={3} />

      {/* Experience Preview */}
      <ExperiencePreview experiences={sortedExperiences} maxDisplay={3} />
    </main>
  );
}
