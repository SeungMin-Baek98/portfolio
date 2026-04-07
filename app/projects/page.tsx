import type { Metadata } from "next";

import { ProjectCard } from "@/components/projects/project-card";
import { PageIntro } from "@/components/ui/page-intro";
import { getAllProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "프로젝트 경험, 역할, 사용 기술과 문제 해결 과정을 보여주는 프로젝트 목록 페이지입니다.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="프로젝트 경험을 문제, 해결 방식, 결과 중심으로 정리했습니다"
        description="목록 화면에서는 프로젝트별 맥락을 빠르게 훑을 수 있도록 요약 정보만 배치했습니다. 이후 실제 포트폴리오 내용으로 교체할 때도 mock 데이터만 수정하면 동일한 구조를 유지할 수 있습니다."
        aside={
          <div className="space-y-2">
            <p className="text-sm text-text-subtle">총 프로젝트 수</p>
            <p className="text-heading font-semibold text-text-main">
              {projects.length}
            </p>
            <p className="text-sm text-text-subtle">
              대표 프로젝트와 추가 사례를 함께 정리한 예시 구성
            </p>
          </div>
        }
      />

      <section className="section-band-muted">
        <div className="page-shell section-space pt-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
