'use client';

import { useState } from 'react';
import { projects, Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            Портфолио
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
            Избранные проекты
          </h2>
          <p className="mt-2 text-neutral-400 text-pretty">
            Кликните карточку для просмотра архитектуры и технических решений.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}