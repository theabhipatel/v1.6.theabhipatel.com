/**
 * Centralized theme configuration
 * All theme values (colors, fonts, spacing) should be defined here
 * and referenced by components rather than hardcoded
 */

export const themeConfig = {
  colors: {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    card: "hsl(var(--card))",
    cardForeground: "hsl(var(--card-foreground))",
    popover: "hsl(var(--popover))",
    popoverForeground: "hsl(var(--popover-foreground))",
    primary: "hsl(var(--primary))",
    primaryForeground: "hsl(var(--primary-foreground))",
    secondary: "hsl(var(--secondary))",
    secondaryForeground: "hsl(var(--secondary-foreground))",
    muted: "hsl(var(--muted))",
    mutedForeground: "hsl(var(--muted-foreground))",
    accent: "hsl(var(--accent))",
    accentForeground: "hsl(var(--accent-foreground))",
    destructive: "hsl(var(--destructive))",
    destructiveForeground: "hsl(var(--destructive-foreground))",
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    brandBlue: {
      50: "hsl(var(--brand-blue-50))",
      100: "hsl(var(--brand-blue-100))",
      200: "hsl(var(--brand-blue-200))",
      300: "hsl(var(--brand-blue-300))",
      400: "hsl(var(--brand-blue-400))",
      500: "hsl(var(--brand-blue-500))",
      600: "hsl(var(--brand-blue-600))",
      700: "hsl(var(--brand-blue-700))",
      800: "hsl(var(--brand-blue-800))",
      900: "hsl(var(--brand-blue-900))",
    },
    brandIndigo: {
      50: "hsl(var(--brand-indigo-50))",
      100: "hsl(var(--brand-indigo-100))",
      200: "hsl(var(--brand-indigo-200))",
      300: "hsl(var(--brand-indigo-300))",
      400: "hsl(var(--brand-indigo-400))",
      500: "hsl(var(--brand-indigo-500))",
      600: "hsl(var(--brand-indigo-600))",
      700: "hsl(var(--brand-indigo-700))",
      800: "hsl(var(--brand-indigo-800))",
      900: "hsl(var(--brand-indigo-900))",
    },
  },
  fonts: {
    sans: "var(--font-sans)",
    mono: "var(--font-mono)",
    display: "var(--font-display)",
  },
  spacing: {
    radius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
  gradients: {
    brand:
      "linear-gradient(135deg, hsl(var(--brand-blue-500)), hsl(var(--brand-indigo-500)))",
    brandHover:
      "linear-gradient(135deg, hsl(var(--brand-blue-600)), hsl(var(--brand-indigo-600)))",
  },
} as const;

/**
 * Get a theme value by path
 * @param path - Dot-separated path to the theme value (e.g., "colors.primary")
 * @returns The theme value or undefined if not found
 */
export function getThemeValue(path: string): string | undefined {
  const parts = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = themeConfig;

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }

  return typeof current === "string" ? current : undefined;
}

/**
 * Check if a value is a valid theme reference (uses CSS variables)
 * @param value - The value to check
 * @returns True if the value references a CSS variable
 */
export function isThemeReference(value: string): boolean {
  return value.includes("var(--") || value.includes("hsl(var(--");
}

/**
 * Get all theme color keys
 */
export function getAllThemeColorKeys(): string[] {
  const keys: string[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function traverse(obj: any, prefix: string = "") {
    for (const key in obj) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === "string") {
        keys.push(fullKey);
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        traverse(obj[key], fullKey);
      }
    }
  }

  traverse(themeConfig.colors, "colors");
  return keys;
}
