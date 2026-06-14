import { skills } from "@/data/skills";
import { SectionHeading } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Skills</SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-semibold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
