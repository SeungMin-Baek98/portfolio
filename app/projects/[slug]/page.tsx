import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProjectProcessSection } from '@/components/projects/project-process-section';
import { ButtonLink } from '@/components/ui/button-link';
import { FadeIn } from '@/components/ui/fade-in';
import { getProjectBySlug, getProjectParams } from '@/lib/portfolio';

type ProjectDetailPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export function generateStaticParams() {
	return getProjectParams();
}

export async function generateMetadata({
	params
}: ProjectDetailPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: 'Project not found'
		};
	}

	return {
		title: project.name,
		description: project.summary
	};
}

export default async function ProjectDetailPage({
	params
}: ProjectDetailPageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<section className="section-space page-shell">
			<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
				<div className="space-y-6">
					<FadeIn>
						<section className="surface-panel p-7 md:p-8">
							<div className="space-y-5">
								<div className="flex flex-wrap items-center gap-2">
									<span className="eyebrow">Overview</span>
									<span className="chip">{project.period}</span>
								</div>

								<div className="space-y-4">
									<h1 className="text-display text-text-main max-w-4xl font-semibold tracking-[-0.05em]">
										{project.name}
									</h1>
									<p className="text-text-subtle text-lg">{project.tagline}</p>
									<p className="text-body text-text-subtle">
										{project.detail.overview}
									</p>
								</div>

								<div className="border-border/70 grid gap-4 border-t pt-5 md:grid-cols-3">
									<div className="space-y-1">
										<p className="text-text-subtle text-sm">한 줄 요약</p>
										<p className="text-text-main text-sm font-medium">
											{project.summary}
										</p>
									</div>
									<div className="space-y-1">
										<p className="text-text-subtle text-sm">기간</p>
										<p className="text-text-main text-sm font-medium">
											{project.period}
										</p>
									</div>
									<div className="space-y-1">
										<p className="text-text-subtle text-sm">역할</p>
										<p className="text-text-main text-sm font-medium">
											{project.role}
										</p>
									</div>
								</div>
							</div>
						</section>
					</FadeIn>

					<FadeIn delay={0.06}>
						<section className="surface-panel p-7 md:p-8">
							<div className="space-y-5">
								<div className="space-y-2">
									<p className="text-text-subtle text-sm font-semibold tracking-[0.18em] uppercase">
										Tech Stack
									</p>
									<p className="text-body text-text-subtle">
										사용 기술을 나열하는 데서 끝나지 않고, 어떤 이유로
										선택했는지 함께 보여주도록 구성했습니다.
									</p>
								</div>

								<div className="grid gap-4">
									{project.detail.techStack.map((item, index) => (
										<FadeIn key={item.name} delay={0.04 * index}>
											<article className="border-border/70 rounded-md border bg-white/70 p-4">
												<div className="space-y-2">
													<h2 className="text-title text-text-main font-semibold">
														{item.name}
													</h2>
													<p className="text-text-subtle text-sm">
														{item.reason}
													</p>
												</div>
											</article>
										</FadeIn>
									))}
								</div>
							</div>
						</section>
					</FadeIn>

					<FadeIn delay={0.12}>
						<ProjectProcessSection
							sections={[
								project.detail.problem,
								project.detail.solution,
								project.detail.result
							]}
						/>
					</FadeIn>
				</div>

				<aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
					<FadeIn delay={0.08}>
						<section className="surface-panel-muted p-6">
							<div className="space-y-4">
								<div className="space-y-2">
									<p className="text-text-subtle text-sm font-semibold tracking-[0.18em] uppercase">
										Project Notes
									</p>
									<p className="text-body text-text-subtle">{project.impact}</p>
								</div>

								<ul className="flex flex-wrap gap-2">
									{project.technologies.map(technology => (
										<li key={technology} className="chip">
											{technology}
										</li>
									))}
								</ul>
							</div>
						</section>
					</FadeIn>

					<FadeIn delay={0.14}>
						<section className="surface-panel p-6">
							<div className="space-y-3">
								<p className="text-text-subtle text-sm font-semibold tracking-[0.18em] uppercase">
									Links
								</p>
								<div className="flex flex-col gap-3">
									{project.links.map((link, index) => (
										<ButtonLink
											key={link.label}
											href={link.href}
											external={link.external}
											variant={index === 0 ? 'secondary' : 'primary'}
											className="w-full">
											{link.label}
										</ButtonLink>
									))}
								</div>
							</div>
						</section>
					</FadeIn>
				</aside>
			</div>
		</section>
	);
}
