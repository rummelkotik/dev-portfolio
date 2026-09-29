'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={() => onSelect(project)}
      className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-6 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/70 hover:shadow-xl hover:shadow-black/40"
    >
      {/* Декоративное фоновое свечение внутри карточки */}
      <div
        className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div>
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <span className="font-mono uppercase tracking-wider text-emerald-400/90">
            {project.category}
          </span>
          <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors">
            Подробнее ↗
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          {project.shortDesc}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/60">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-neutral-800 bg-neutral-950/60 px-2 py-0.5 text-[11px] text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}