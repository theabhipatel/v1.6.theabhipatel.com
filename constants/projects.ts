export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  features: string[];
  architecture?: string;
  technologies: string[];
  images: string[];
  thumbnailImage: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: Date;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "Full Stack E-Commerce Platform",
    shortDescription:
      "A modern e-commerce platform with real-time inventory management and payment integration",
    overview:
      "Built a comprehensive e-commerce solution using the MERN stack with features including user authentication, product catalog, shopping cart, order management, and payment processing. The platform handles thousands of products and supports multiple payment gateways.",
    features: [
      "User authentication with JWT and OAuth",
      "Real-time inventory tracking",
      "Shopping cart with persistent sessions",
      "Stripe and PayPal payment integration",
      "Admin dashboard for product and order management",
      "Email notifications for orders",
      "Product search and filtering",
      "Responsive design for mobile and desktop",
    ],
    architecture:
      "Microservices architecture with separate services for authentication, products, orders, and payments. Uses Redis for caching and session management. MongoDB for data persistence with proper indexing for performance.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Stripe API",
      "JWT",
      "Redis",
      "Docker",
    ],
    images: [
      "/projects/ecommerce-1.jpg",
      "/projects/ecommerce-2.jpg",
      "/projects/ecommerce-3.jpg",
    ],
    thumbnailImage: "/projects/ecommerce-thumb.jpg",
    githubUrl: "https://github.com/theabhipatel/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.theabhipatel.com",
    featured: true,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "realtime-chat-app",
    slug: "realtime-chat-app",
    title: "Real-Time Chat Application",
    shortDescription:
      "WebSocket-based chat application with rooms, direct messaging, and file sharing",
    overview:
      "Developed a real-time chat application using WebSockets for instant messaging. Features include public and private chat rooms, direct messaging, typing indicators, online status, and file sharing capabilities.",
    features: [
      "Real-time messaging with WebSockets",
      "Public and private chat rooms",
      "Direct messaging between users",
      "Typing indicators and read receipts",
      "Online/offline status tracking",
      "File and image sharing",
      "Message history and search",
      "User profiles and avatars",
    ],
    architecture:
      "Built with Socket.io for WebSocket connections. Uses MongoDB for message persistence and Redis for managing active connections and presence. Implements event-driven architecture for scalability.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Redis",
      "Express",
      "Zustand",
      "Tailwind CSS",
    ],
    images: ["/projects/chat-1.jpg", "/projects/chat-2.jpg"],
    thumbnailImage: "/projects/chat-thumb.jpg",
    githubUrl: "https://github.com/theabhipatel/realtime-chat",
    liveUrl: "https://chat.theabhipatel.com",
    featured: true,
    createdAt: new Date("2023-11-20"),
  },
  {
    id: "task-management-system",
    slug: "task-management-system",
    title: "Task Management System",
    shortDescription:
      "Collaborative task management tool with Kanban boards and team features",
    overview:
      "Created a comprehensive task management system similar to Trello/Jira with drag-and-drop Kanban boards, team collaboration features, and project tracking capabilities.",
    features: [
      "Drag-and-drop Kanban boards",
      "Task assignment and tracking",
      "Team collaboration and comments",
      "Project timelines and milestones",
      "File attachments",
      "Activity logs and notifications",
      "Custom labels and priorities",
      "Sprint planning and reporting",
    ],
    architecture:
      "RESTful API backend with role-based access control. Uses MongoDB with aggregation pipelines for complex queries. Frontend state management with Redux Toolkit.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
    ],
    images: [
      "/projects/task-1.jpg",
      "/projects/task-2.jpg",
      "/projects/task-3.jpg",
    ],
    thumbnailImage: "/projects/task-thumb.jpg",
    githubUrl: "https://github.com/theabhipatel/task-management",
    featured: true,
    createdAt: new Date("2024-03-10"),
  },
  {
    id: "blog-cms",
    slug: "blog-cms",
    title: "Headless CMS for Blogging",
    shortDescription:
      "Content management system with markdown support and API-first architecture",
    overview:
      "Built a headless CMS specifically designed for technical blogs with markdown support, syntax highlighting, and a clean admin interface.",
    features: [
      "Markdown editor with live preview",
      "Syntax highlighting for code blocks",
      "Tag and category management",
      "SEO optimization tools",
      "Image upload and optimization",
      "Draft and publish workflow",
      "RESTful API for content delivery",
      "Analytics integration",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "JWT"],
    images: ["/projects/cms-1.jpg"],
    thumbnailImage: "/projects/cms-thumb.jpg",
    githubUrl: "https://github.com/theabhipatel/blog-cms",
    featured: false,
    createdAt: new Date("2023-08-05"),
  },
  {
    id: "devops-dashboard",
    slug: "devops-dashboard",
    title: "DevOps Monitoring Dashboard",
    shortDescription:
      "Real-time monitoring dashboard for containerized applications",
    overview:
      "Developed a monitoring dashboard that aggregates metrics from Docker containers, Kubernetes clusters, and application logs to provide real-time insights into system health.",
    features: [
      "Real-time metrics visualization",
      "Container and pod monitoring",
      "Log aggregation and search",
      "Alert configuration and notifications",
      "Custom dashboards",
      "Historical data analysis",
      "Multi-cluster support",
    ],
    architecture:
      "Integrates with Prometheus for metrics collection and Grafana for visualization. Custom backend aggregates data from multiple sources and provides unified API.",
    technologies: [
      "React",
      "Node.js",
      "Prometheus",
      "Grafana",
      "Docker",
      "Kubernetes",
      "WebSockets",
    ],
    images: ["/projects/devops-1.jpg", "/projects/devops-2.jpg"],
    thumbnailImage: "/projects/devops-thumb.jpg",
    githubUrl: "https://github.com/theabhipatel/devops-dashboard",
    featured: false,
    createdAt: new Date("2024-02-28"),
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
