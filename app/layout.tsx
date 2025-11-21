import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TheAbhiPatel - Full Stack Developer",
    template: "%s | TheAbhiPatel",
  },
  description:
    "Portfolio of TheAbhiPatel - Full Stack / MERN / DevOps Engineer specializing in React, Node.js, TypeScript, and cloud technologies",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "DevOps Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Express",
    "Next.js",
    "Tailwind CSS",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
  authors: [{ name: "TheAbhiPatel" }],
  creator: "TheAbhiPatel",
  metadataBase: new URL("https://theabhipatel.com"),
  openGraph: {
    title: "TheAbhiPatel - Full Stack Developer",
    description:
      "Portfolio of TheAbhiPatel - Full Stack / MERN / DevOps Engineer specializing in React, Node.js, TypeScript, and cloud technologies",
    type: "website",
    locale: "en_US",
    siteName: "TheAbhiPatel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheAbhiPatel - Full Stack Developer",
    description:
      "Portfolio of TheAbhiPatel - Full Stack / MERN / DevOps Engineer",
    creator: "@theabhipatel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
  ],
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
