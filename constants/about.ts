export interface AboutData {
  introduction: string;
  background: string[];
  interests: string[];
  profileImage?: string;
}

export const aboutData: AboutData = {
  introduction:
    "Hi, I'm Abhi Patel, a passionate Full Stack Developer specializing in the MERN stack and DevOps practices. I love building scalable web applications that solve real-world problems and deliver exceptional user experiences.",

  background: [
    "I started my journey in web development in 2019, driven by curiosity about how the internet works. What began as building simple websites quickly evolved into a deep passion for full-stack development.",

    "Over the years, I've worked with startups and established companies, contributing to projects ranging from e-commerce platforms to real-time communication systems. Each project has taught me valuable lessons about scalability, performance optimization, and user-centric design.",

    "My expertise spans the entire development lifecycle - from architecting backend systems with Node.js and MongoDB to crafting intuitive user interfaces with React and Next.js. I'm particularly passionate about DevOps practices and have experience with Docker, Kubernetes, and CI/CD pipelines.",

    "I believe in writing clean, maintainable code and following best practices. Testing, code reviews, and continuous learning are integral parts of my development process. I'm always exploring new technologies and methodologies to improve my craft.",

    "Beyond coding, I enjoy mentoring junior developers and contributing to open-source projects. I believe in giving back to the community that has helped me grow as a developer.",
  ],

  interests: [
    "Building scalable microservices architectures",
    "Real-time applications with WebSockets",
    "DevOps automation and containerization",
    "Performance optimization and caching strategies",
    "Open source contributions",
    "Technical writing and documentation",
    "Mentoring and knowledge sharing",
    "Exploring new JavaScript frameworks and tools",
    "Cloud infrastructure and serverless computing",
    "API design and GraphQL",
  ],

  profileImage: "/images/profile.jpg",
};
