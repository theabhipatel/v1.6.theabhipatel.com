export interface Experience {
  id: string;
  company: string;
  companyLogo?: string;
  role: string;
  duration: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  achievements: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "senior-fullstack-dev",
    company: "TechCorp Solutions",
    companyLogo: "/logos/techcorp.png",
    role: "Senior Full Stack Developer",
    duration: "Jan 2023 - Present",
    startDate: new Date("2023-01-15"),
    current: true,
    achievements: [
      "Led development of microservices architecture serving 100K+ daily active users",
      "Reduced API response time by 40% through optimization and caching strategies",
      "Mentored team of 5 junior developers in MERN stack best practices",
      "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
      "Architected real-time notification system using WebSockets and Redis",
      "Improved test coverage from 45% to 85% across all services",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "AWS",
      "Redis",
      "TypeScript",
    ],
  },
  {
    id: "fullstack-developer",
    company: "StartupHub Inc",
    companyLogo: "/logos/startuphub.png",
    role: "Full Stack Developer",
    duration: "Jun 2021 - Dec 2022",
    startDate: new Date("2021-06-01"),
    endDate: new Date("2022-12-31"),
    current: false,
    achievements: [
      "Built e-commerce platform from scratch handling $2M+ in annual transactions",
      "Integrated multiple payment gateways including Stripe, PayPal, and Razorpay",
      "Developed admin dashboard with real-time analytics and reporting",
      "Implemented automated email marketing system increasing conversion by 25%",
      "Optimized database queries reducing load time by 60%",
      "Collaborated with design team to create responsive UI for mobile and desktop",
    ],
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "JWT",
      "Stripe API",
    ],
  },
  {
    id: "mern-developer",
    company: "Digital Innovations",
    companyLogo: "/logos/digital-innovations.png",
    role: "MERN Stack Developer",
    duration: "Mar 2020 - May 2021",
    startDate: new Date("2020-03-10"),
    endDate: new Date("2021-05-31"),
    current: false,
    achievements: [
      "Developed RESTful APIs for mobile and web applications",
      "Created reusable React components library used across 5+ projects",
      "Implemented authentication system with OAuth and JWT",
      "Built real-time chat feature using Socket.io",
      "Participated in code reviews and maintained coding standards",
      "Wrote comprehensive unit and integration tests using Jest",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Socket.io",
      "Jest",
      "Git",
    ],
  },
  {
    id: "junior-developer",
    company: "WebDev Agency",
    companyLogo: "/logos/webdev-agency.png",
    role: "Junior Web Developer",
    duration: "Aug 2019 - Feb 2020",
    startDate: new Date("2019-08-01"),
    endDate: new Date("2020-02-28"),
    current: false,
    achievements: [
      "Developed responsive websites for 10+ clients using React and Node.js",
      "Implemented form validation and data processing features",
      "Collaborated with senior developers on full-stack projects",
      "Fixed bugs and improved performance of existing applications",
      "Learned and applied best practices in web development",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
  },
];

// Helper function to get current experience
export const getCurrentExperience = () =>
  experiences.find((exp) => exp.current);

// Helper function to get experiences sorted by date (most recent first)
export const getSortedExperiences = () =>
  [...experiences].sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );
