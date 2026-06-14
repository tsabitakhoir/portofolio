export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL", "C"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Express", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Supabase", "Postman"],
  },
  {
    category: "IoT & Hardware",
    items: ["ESP32", "Arduino", "ThingsBoard", "WebSocket"],
  },
];
