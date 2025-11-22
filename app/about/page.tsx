import { aboutData } from "@/constants/about";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | TheAbhiPatel",
  description:
    "Learn about Abhi Patel's journey as a Full Stack Developer. Discover my background, interests, and passion for building scalable web applications.",
  openGraph: {
    title: "About | TheAbhiPatel",
    description:
      "Learn about Abhi Patel's journey as a Full Stack Developer. Discover my background, interests, and passion for building scalable web applications.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen py-20">
      <AnimatedBackground variant="page" theme="gradient" />

      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading
          title="About Me"
          subtitle="My journey and passion for development"
          align="center"
          gradient
        />

        <div className="mt-16 space-y-16">
          {/* Introduction Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center">
            {aboutData.profileImage && (
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-500 to-brand-indigo-500 rounded-2xl blur-xl opacity-30" />
                <Image
                  src={aboutData.profileImage}
                  alt="Abhi Patel Profile"
                  width={256}
                  height={256}
                  className="relative rounded-2xl object-cover w-full h-full border-2 border-brand-blue-500/20"
                  priority
                />
              </div>
            )}

            <div className="flex-1">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {aboutData.introduction}
              </p>
            </div>
          </section>

          {/* Background Section */}
          <section className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron bg-gradient-to-r from-brand-blue-500 to-brand-indigo-500 bg-clip-text text-transparent">
              Background
            </h3>
            <div className="space-y-4">
              {aboutData.background.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Interests Section */}
          <section className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron bg-gradient-to-r from-brand-blue-500 to-brand-indigo-500 bg-clip-text text-transparent">
              Interests & Passions
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutData.interests.map((interest, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base md:text-lg text-muted-foreground"
                >
                  <span className="text-brand-blue-500 mt-1 flex-shrink-0">
                    ▹
                  </span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
