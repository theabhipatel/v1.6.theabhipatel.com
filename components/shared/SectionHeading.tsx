import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  gradient?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  gradient = false,
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const titleClasses = cn(
    "text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron tracking-tight",
    gradient &&
      "bg-gradient-to-r from-brand-blue-500 to-brand-indigo-500 bg-clip-text text-transparent",
    !gradient && "text-foreground"
  );

  return (
    <div className={cn("space-y-2", alignmentClasses[align], className)}>
      <h2 className={titleClasses}>{title}</h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
