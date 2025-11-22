import { getSortedExperiences } from "@/constants/experience";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | TheAbhiPatel",
  description:
    "Explore my professional journey as a Full Stack / MERN / DevOps Engineer. View my work history, achievements, and the technologies I've worked with.",
  openGraph: {
    title: "Experience | TheAbhiPatel",
    description:
      "Explore my professional journey as a Full Stack / MERN / DevOps Engineer. View my work history, achievements, and the technologies I've worked with.",
    type: "website",
  },
};

export default function ExperiencePage() {
  const experiences = getSortedExperiences();

  return (
    <main className="relative min-h-screen py-20">
      <AnimatedBackground variant="page" theme="gradient" />

      <div className="container mx-auto px-4">
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey as a Full Stack Developer"
          align="center"
        />

        <div className="mt-16">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </main>
  );
}
