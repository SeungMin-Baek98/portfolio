import { getFeaturedProjects } from "@/lib/portfolio";

import { ProjectCard } from "@/components/projects/project-card";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedProjectsSection() {
  const projects = getFeaturedProjects();

  return (
    <section className="section-band-muted">
      <div className="page-shell section-space">
        <div className="space-y-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Featured Projects"
              title="문제와 해결 과정을 빠르게 파악할 수 있는 대표 프로젝트"
              description="카드에서는 핵심 요약만 보여주고, 상세 페이지에서는 문제 정의부터 해결 방식과 기대 효과까지 단계적으로 확인할 수 있도록 연결했습니다."
            />
            <ButtonLink href="/projects" variant="secondary">
              전체 프로젝트 보기
            </ButtonLink>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
