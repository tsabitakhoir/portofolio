export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS", "Prisma"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "Vercel", "PostgreSQL", "Supabase"],
  },
];
