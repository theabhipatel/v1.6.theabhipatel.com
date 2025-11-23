"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { DevOpsAnimatedBackground } from "@/components/shared/backgrounds/DevOpsAnimatedBackground";

interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
}

// Floating code snippets data
const codeSnippets = [
  { text: "const", x: "10%", y: "20%", delay: 0 },
  { text: "function", x: "85%", y: "15%", delay: 0.2 },
  { text: "=>", x: "15%", y: "70%", delay: 0.4 },
  { text: "async", x: "80%", y: "75%", delay: 0.6 },
  { text: "await", x: "5%", y: "45%", delay: 0.8 },
  { text: "{...}", x: "90%", y: "45%", delay: 1.0 },
];

export default function HeroSection({
  name,
  title,
  tagline,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for floating elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* DevOps Animated Background */}
      <DevOpsAnimatedBackground
        className="absolute inset-0 z-0"
        intensity="medium"
      />

      {/* Floating Code Elements */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={snippet.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{
            duration: 1,
            delay: snippet.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: snippet.x,
            top: snippet.y,
            y: index % 2 === 0 ? y1 : y2,
            color: `hsl(var(--brand-${index % 2 === 0 ? "blue" : "indigo"}-400))`,
            fontSize: "clamp(1.5rem, 3vw, 3rem)",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
          }}
          className="motion-reduce:opacity-0"
        >
          {snippet.text}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto py-8 sm:py-12"
        >
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-brand-blue-500/10 backdrop-blur-sm border border-brand-blue-500/20 text-brand-blue-400 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-500"></span>
              </span>
              Code to Cloud 🌩️
            </span>
          </motion.div>

          {/* Main Heading - Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 leading-[1.1] tracking-tight"
          >
            <span
              className="block relative bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-400 via-brand-indigo-500 to-brand-blue-600"
              style={{
                backgroundSize: "200% auto",
              }}
            >
              {/* Base gradient text */}
              {name}

              {/* Flowing flame gradient overlay */}
              <span
                className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-transparent via-brand-indigo-800/70 to-transparent animate-flame-flow"
                style={{
                  backgroundSize: "200% 100%",
                  mixBlendMode: "overlay",
                }}
                aria-hidden="true"
              >
                {name}
              </span>
            </span>
          </motion.h1>

          {/* Subtitle - Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            {/* Primary CTA - DevOps Pipeline Button */}
            <Link
              href={ctaLink}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto max-w-[280px] sm:max-w-none"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--brand-blue-600)), hsl(var(--brand-indigo-700)))",
              }}
            >
              {/* Animated glowing border runner */}
              <span className="absolute inset-0 rounded-lg overflow-hidden">
                <span className="absolute inset-[-2px] animate-border-run">
                  <span className="absolute w-[40%] h-[2px] top-0 left-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
                  <span className="absolute w-[2px] h-[40%] top-0 right-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></span>
                  <span className="absolute w-[40%] h-[2px] bottom-0 right-0 bg-gradient-to-l from-transparent via-cyan-400 to-transparent"></span>
                  <span className="absolute w-[2px] h-[40%] bottom-0 left-0 bg-gradient-to-t from-transparent via-cyan-400 to-transparent"></span>
                </span>
              </span>

              {/* Animated background on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-indigo-700 to-brand-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* DevOps Pipeline Icon */}
              <svg
                className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <span className="relative z-10">{ctaText}</span>

              {/* Arrow with pulse */}
              <svg
                className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            {/* Secondary CTA - Contact Button with Mesh Background */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-foreground rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto max-w-[280px] sm:max-w-none"
            >
              {/* Animated glowing border runner - different pattern */}
              <span className="absolute inset-0 rounded-lg">
                <span className="absolute inset-[-2px] animate-border-run-reverse">
                  <span className="absolute w-[50%] h-[2px] top-0 right-0 bg-gradient-to-l from-transparent via-brand-blue-500 to-transparent"></span>
                  <span className="absolute w-[2px] h-[50%] bottom-0 right-0 bg-gradient-to-t from-transparent via-brand-blue-500 to-transparent"></span>
                  <span className="absolute w-[50%] h-[2px] bottom-0 left-0 bg-gradient-to-r from-transparent via-brand-blue-500 to-transparent"></span>
                  <span className="absolute w-[2px] h-[50%] top-0 left-0 bg-gradient-to-b from-transparent via-brand-blue-500 to-transparent"></span>
                </span>
              </span>

              {/* Mesh gradient background */}
              <span className="absolute inset-0 bg-gradient-to-br from-brand-blue-500/10 via-brand-indigo-500/5 to-transparent backdrop-blur-sm border border-brand-blue-500/20 rounded-lg"></span>

              {/* Hover effect - animated mesh */}
              <span className="absolute inset-0 bg-gradient-to-tr from-brand-blue-500/20 via-brand-indigo-500/10 to-brand-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></span>

              {/* DevOps Cloud Icon */}
              <svg
                className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <span className="relative z-10">Get in Touch</span>

              {/* Sparkle effect */}
              <svg
                className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover:rotate-90 group-hover:scale-125"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
