import Link from 'next/link';

import type { Project } from '@/types/portfolio';

type ProjectCardProps = {
	project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<article className="surface-panel flex h-full flex-col justify-between p-6 md:p-7">
			<div className="space-y-5">
				<div className="text-text-subtle flex flex-wrap items-center gap-2 text-sm">
					<span className="chip">{project.period}</span>
					<span className="chip">{project.role}</span>
				</div>

				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<h3 className="text-title text-text-main font-semibold">
							{project.name}
						</h3>
						<Link
							href={`/projects/${project.slug}`}
							className="text-text-main text-sm font-semibold transition-opacity hover:underline hover:opacity-70">
							자세히 보기
						</Link>
					</div>
					<p className="text-text-subtle text-sm font-medium">
						{project.tagline}
					</p>
					<p className="text-body text-text-subtle">{project.summary}</p>
				</div>

				<ul className="flex flex-wrap gap-2">
					{project.technologies.map(technology => (
						<li key={technology} className="chip">
							{technology}
						</li>
					))}
				</ul>
			</div>

			<div className="border-border/70 mt-8 flex items-center justify-between gap-4 border-t pt-5">
				<p className="text-text-subtle max-w-md text-sm">{project.impact}</p>
			</div>
		</article>
	);
}
