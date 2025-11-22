import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found - TheAbhiPatel",
    };
  }

  return {
    title: `${project.title} - TheAbhiPatel`,
    description: project.overview,
    keywords: [
      project.title,
      ...project.technologies,
      "Project",
      "Portfolio",
      "Full Stack",
    ],
    openGraph: {
      title: `${project.title} - TheAbhiPatel`,
      description: project.overview,
      type: "website",
      images: project.thumbnailImage ? [project.thumbnailImage] : [],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Animated Background */}
      <AnimatedBackground variant="page" />

      {/* Project Detail Section */}
      <article className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          {/* Project Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.shortDescription}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </header>

          {/* Image Gallery */}
          {project.images.length > 0 && (
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden bg-muted border border-border"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Project Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Architecture */}
          {project.architecture && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Architecture & Technical Details
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.architecture}
              </p>
            </section>
          )}

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
