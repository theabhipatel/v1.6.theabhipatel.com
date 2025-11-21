export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: "mern" | "fullstack" | "javascript" | "devops";
  subcategory?: string;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// MERN Stack Skills
const mernSkills: Skill[] = [
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "🍃",
    category: "mern",
    proficiency: "expert",
    description: "NoSQL database for scalable applications",
  },
  {
    id: "express",
    name: "Express.js",
    icon: "⚡",
    category: "mern",
    proficiency: "expert",
    description: "Fast, minimalist web framework for Node.js",
  },
  {
    id: "react",
    name: "React",
    icon: "⚛️",
    category: "mern",
    proficiency: "expert",
    description: "JavaScript library for building user interfaces",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "🟢",
    category: "mern",
    proficiency: "expert",
    description: "JavaScript runtime built on Chrome V8 engine",
  },
];

// Full Stack Skills
const fullstackSkills: Skill[] = [
  {
    id: "rest-api",
    name: "REST APIs",
    icon: "🔌",
    category: "fullstack",
    proficiency: "expert",
    description: "RESTful API design and implementation",
  },
  {
    id: "authentication",
    name: "Authentication",
    icon: "🔐",
    category: "fullstack",
    proficiency: "advanced",
    description: "OAuth, JWT, session management",
  },
  {
    id: "jwt",
    name: "JWT",
    icon: "🎫",
    category: "fullstack",
    proficiency: "advanced",
    description: "JSON Web Tokens for secure authentication",
  },
  {
    id: "websockets",
    name: "WebSockets",
    icon: "🔄",
    category: "fullstack",
    proficiency: "advanced",
    description: "Real-time bidirectional communication",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "📘",
    category: "fullstack",
    proficiency: "expert",
    description: "Typed superset of JavaScript",
  },
  {
    id: "redux",
    name: "Redux",
    icon: "🔮",
    category: "fullstack",
    proficiency: "advanced",
    description: "Predictable state container for JavaScript apps",
  },
  {
    id: "zustand",
    name: "Zustand",
    icon: "🐻",
    category: "fullstack",
    proficiency: "advanced",
    description: "Lightweight state management library",
  },
];

// JavaScript and Web Technologies
const javascriptSkills: Skill[] = [
  {
    id: "nextjs",
    name: "Next.js",
    icon: "▲",
    category: "javascript",
    proficiency: "expert",
    description: "React framework for production",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "🎨",
    category: "javascript",
    proficiency: "expert",
    description: "Utility-first CSS framework",
  },
  {
    id: "jest",
    name: "Jest",
    icon: "🃏",
    category: "javascript",
    proficiency: "advanced",
    description: "JavaScript testing framework",
  },
  {
    id: "vitest",
    name: "Vitest",
    icon: "⚡",
    category: "javascript",
    proficiency: "advanced",
    description: "Fast unit test framework powered by Vite",
  },
  {
    id: "git",
    name: "Git",
    icon: "📦",
    category: "javascript",
    proficiency: "expert",
    description: "Distributed version control system",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "🐙",
    category: "javascript",
    proficiency: "expert",
    description: "Code hosting and collaboration platform",
  },
];

// DevOps Skills
const devopsSkills: Skill[] = [
  {
    id: "docker",
    name: "Docker",
    icon: "🐳",
    category: "devops",
    proficiency: "advanced",
    description: "Containerization platform",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "☸️",
    category: "devops",
    proficiency: "intermediate",
    description: "Container orchestration platform",
  },
  {
    id: "cicd",
    name: "CI/CD",
    icon: "🔄",
    category: "devops",
    proficiency: "advanced",
    description: "Continuous Integration and Deployment",
  },
  {
    id: "linux",
    name: "Linux",
    icon: "🐧",
    category: "devops",
    proficiency: "advanced",
    description: "Unix-like operating system",
  },
  {
    id: "aws",
    name: "AWS",
    icon: "☁️",
    category: "devops",
    proficiency: "intermediate",
    description: "Amazon Web Services cloud platform",
  },
  {
    id: "nginx",
    name: "NGINX",
    icon: "🌐",
    category: "devops",
    proficiency: "advanced",
    description: "High-performance web server and reverse proxy",
  },
  {
    id: "prometheus",
    name: "Prometheus",
    icon: "📊",
    category: "devops",
    proficiency: "intermediate",
    description: "Monitoring and alerting toolkit",
  },
  {
    id: "grafana",
    name: "Grafana",
    icon: "📈",
    category: "devops",
    proficiency: "intermediate",
    description: "Analytics and monitoring platform",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "MERN Stack",
    skills: mernSkills,
  },
  {
    name: "Full Stack Technologies",
    skills: fullstackSkills,
  },
  {
    name: "JavaScript & Web",
    skills: javascriptSkills,
  },
  {
    name: "DevOps & Infrastructure",
    skills: devopsSkills,
  },
];

export const allSkills: Skill[] = [
  ...mernSkills,
  ...fullstackSkills,
  ...javascriptSkills,
  ...devopsSkills,
];
