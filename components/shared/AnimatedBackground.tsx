"use client";

import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "page";
  theme?: "blue" | "indigo" | "gradient";
  className?: string;
}

export function AnimatedBackground({
  variant = "page",
  theme = "gradient",
  className,
}: AnimatedBackgroundProps) {
  // Determine opacity and scale based on variant
  const variantStyles = {
    hero: "opacity-30 scale-110",
    section: "opacity-20 scale-100",
    page: "opacity-15 scale-100",
  };

  // Determine color scheme based on theme
  const themeColors = {
    blue: {
      primary: "hsl(var(--brand-blue-500))",
      secondary: "hsl(var(--brand-blue-300))",
      accent: "hsl(var(--brand-blue-700))",
    },
    indigo: {
      primary: "hsl(var(--brand-indigo-500))",
      secondary: "hsl(var(--brand-indigo-300))",
      accent: "hsl(var(--brand-indigo-700))",
    },
    gradient: {
      primary: "hsl(var(--brand-blue-500))",
      secondary: "hsl(var(--brand-indigo-500))",
      accent: "hsl(var(--brand-blue-300))",
    },
  };

  const colors = themeColors[theme];

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden pointer-events-none",
        className
      )}
      aria-hidden="true"
    >
      <svg
        className={cn("absolute inset-0 h-full w-full", variantStyles[variant])}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient
            id="grid-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.2" />
            <stop offset="50%" stopColor={colors.secondary} stopOpacity="0.1" />
            <stop offset="100%" stopColor={colors.accent} stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="glow-gradient">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.3" />
            <stop offset="100%" stopColor={colors.secondary} stopOpacity="0" />
          </radialGradient>

          {/* Filter for blur effect */}
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>

        {/* Animated grid pattern */}
        <g className="animate-pulse" style={{ animationDuration: "4s" }}>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="url(#grid-gradient)"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </g>

        {/* Floating circles with subtle animation */}
        <g className="animate-float-slow">
          <circle
            cx="20%"
            cy="30%"
            r="120"
            fill="url(#glow-gradient)"
            filter="url(#blur)"
          />
        </g>

        <g
          className="animate-float-slow"
          style={{ animationDelay: "1s", animationDuration: "8s" }}
        >
          <circle
            cx="80%"
            cy="60%"
            r="150"
            fill="url(#glow-gradient)"
            filter="url(#blur)"
          />
        </g>

        <g
          className="animate-float-slow"
          style={{ animationDelay: "2s", animationDuration: "10s" }}
        >
          <circle
            cx="50%"
            cy="80%"
            r="100"
            fill="url(#glow-gradient)"
            filter="url(#blur)"
          />
        </g>

        {/* Tech-themed geometric shapes */}
        <g className="animate-spin-slow" style={{ transformOrigin: "15% 20%" }}>
          <polygon
            points="15,10 25,20 15,30 5,20"
            fill="none"
            stroke={colors.primary}
            strokeWidth="0.5"
            opacity="0.3"
            transform="translate(50, 100)"
          />
        </g>

        <g
          className="animate-spin-slow"
          style={{
            transformOrigin: "85% 70%",
            animationDirection: "reverse",
            animationDuration: "20s",
          }}
        >
          <rect
            x="80%"
            y="65%"
            width="30"
            height="30"
            fill="none"
            stroke={colors.secondary}
            strokeWidth="0.5"
            opacity="0.3"
            transform="rotate(45)"
          />
        </g>
      </svg>

      {/* CSS animations defined inline for performance */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }

        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow,
          .animate-spin-slow,
          .animate-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
