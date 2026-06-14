export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-3xl mx-auto">
        <SectionHeading>About Me</SectionHeading>
        <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          <p>
            Hi! I&apos;m <strong className="text-gray-900 dark:text-white">Tsabita Khoirunnisa</strong>, an Information System and Technology student who enjoys tinkering with technology — from web development to IoT. I get excited when I can turn an idea into something real that other people can actually use.
          </p>
          <p>
            My experience spans building web apps with <strong className="text-gray-900 dark:text-white">React</strong> and <strong className="text-gray-900 dark:text-white">TypeScript</strong>, wiring up backends with <strong className="text-gray-900 dark:text-white">Supabase</strong>, and building IoT systems on <strong className="text-gray-900 dark:text-white">ESP32</strong>. I believe good technology should be easy to use, not just technically impressive.
          </p>
          <p>
            Outside of coding, I enjoy exploring new tools, watching tech documentaries, and occasionally poking around hardware.
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
