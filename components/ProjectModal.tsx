'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-neutral-800 bg-[#0f0f13] p-6 shadow-2xl sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white"
          >
            ✕
          </button>

          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            {project.category}
          </span>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
            {project.description}
          </p>

          <div className="mt-6 space-y-4 border-t border-neutral-800/80 pt-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Инженерный вызов
              </h4>
              <p className="mt-1 text-sm text-neutral-300">
                {project.challenge}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Реализованное решение
              </h4>
              <p className="mt-1 text-sm text-neutral-300">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Использованный стек
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3 border-t border-neutral-800/80 pt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-medium text-black hover:bg-neutral-200 transition-colors"
              >
                Исходный код на GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800 px-5 py-2.5 text-xs font-medium text-white hover:bg-neutral-700 transition-colors"
              >
                Открыть Live Демо ↗
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}