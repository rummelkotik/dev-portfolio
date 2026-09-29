'use client';

import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React / Next.js",
      "Tailwind CSS",
      "HTML5 & CSS3 / SCSS",
      "Canvas API",
      "Figma (Pixel-perfect)"
    ]
  },
  {
    category: "Backend & API",
    skills: [
      "Node.js",
      "Express",
      "SQLite",
      "REST API",
      "LLM API Integrations",
      "Асинхронный JS / HTTP"
    ]
  },
  {
    category: "Инфраструктура и среда",
    skills: [
      "Linux / Bash",
      "Docker",
      "Git & GitHub",
      "Cloudflare Tunnels",
      "VS Code, модульность"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 border-t border-neutral-900 bg-neutral-950/30">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Стек технологий
        </h2>
        <p className="mt-2 text-neutral-400">
          Инструменты разработки, архитектурные решения, рабочий стек.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}