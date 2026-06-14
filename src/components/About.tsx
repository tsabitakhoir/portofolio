export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-3xl mx-auto">
        <SectionHeading>About Me</SectionHeading>
        <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          <p>
            Hi! I&apos;m <strong className="text-gray-900 dark:text-white">Your Name</strong>, a passionate full-stack developer based in Indonesia. I love turning ideas into real products — from crafting clean user interfaces to architecting reliable back-end systems.
          </p>
          <p>
            I have experience working with modern web technologies like <strong className="text-gray-900 dark:text-white">Next.js</strong>, <strong className="text-gray-900 dark:text-white">TypeScript</strong>, and <strong className="text-gray-900 dark:text-white">Node.js</strong>. I care deeply about code quality, developer experience, and building things that are fast and accessible by default.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new tech, contributing to open-source, or enjoying a good cup of coffee while reading engineering blogs.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
        {children}
      </h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-indigo-500" />
    </div>
  );
}
