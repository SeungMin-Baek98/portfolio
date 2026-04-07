import Link from "next/link";

import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-panel flex h-full flex-col justify-between p-6 md:p-7">
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-2 text-sm text-text-subtle">
          <span className="chip">{project.period}</span>
          <span className="chip">{project.role}</span>
        </div>

        <div className="space-y-3">
          <h3 className="text-title font-semibold text-text-main">
            {project.name}
          </h3>
          <p className="text-sm font-medium text-text-subtle">
            {project.tagline}
          </p>
          <p className="text-body text-text-subtle">{project.summary}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li key={technology} className="chip">
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-border/70 pt-5">
        <p className="max-w-md text-sm text-text-subtle">{project.impact}</p>
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-semibold text-text-main transition-opacity hover:opacity-70"
        >
          자세히 보기
        </Link>
      </div>
    </article>
  );
}
