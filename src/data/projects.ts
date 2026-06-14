export type Project = {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack online store with cart, checkout, and admin dashboard. Supports product filtering and real-time inventory updates.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "Kanban-style productivity app with drag-and-drop boards, labels, due dates, and team collaboration features.",
    techStack: ["React", "Zustand", "Tailwind CSS", "Supabase"],
    demoUrl: "https://tasks.example.com",
    repoUrl: "https://github.com/username/task-app",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard that shows forecasts, air quality index, and interactive maps for any city worldwide.",
    techStack: ["Next.js", "TypeScript", "OpenWeather API", "Recharts"],
    demoUrl: "https://weather.example.com",
    repoUrl: "https://github.com/username/weather-dash",
  },
  {
    title: "Dev Blog",
    description:
      "Markdown-powered personal blog with syntax highlighting, dark mode, and RSS feed. Statically generated for fast load times.",
    techStack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    repoUrl: "https://github.com/username/dev-blog",
  },
  {
    title: "REST API Boilerplate",
    description:
      "Production-ready Express + TypeScript API starter with JWT auth, rate limiting, request validation, and OpenAPI docs.",
    techStack: ["Node.js", "Express", "TypeScript", "Zod", "Swagger"],
    repoUrl: "https://github.com/username/api-boilerplate",
  },
  {
    title: "CLI Dev Toolkit",
    description:
      "Command-line utility that scaffolds projects, manages environment variables, and automates repetitive dev tasks.",
    techStack: ["Node.js", "TypeScript", "Commander.js", "Inquirer"],
    repoUrl: "https://github.com/username/cli-toolkit",
  },
];
