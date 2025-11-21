import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - TheAbhiPatel",
  description:
    "Explore my portfolio of full-stack web applications, MERN stack projects, and DevOps implementations. Each project showcases modern development practices and scalable architecture.",
  keywords: [
    "Projects",
    "Portfolio",
    "Full Stack Projects",
    "MERN Stack",
    "Web Applications",
    "DevOps Projects",
    "React Projects",
    "Node.js Projects",
  ],
  openGraph: {
    title: "Projects - TheAbhiPatel",
    description:
      "Explore my portfolio of full-stack web applications and DevOps implementations.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
