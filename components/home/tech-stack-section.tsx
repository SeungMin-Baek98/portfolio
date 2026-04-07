import { techStackGroups } from "@/data/site-content";

import { SectionHeading } from "@/components/ui/section-heading";

export function TechStackSection() {
  return (
    <section className="section-band">
      <div className="page-shell section-space">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Tech Stack"
            title="현재 사용하고 있는 기술 스택을 카테고리별로 정리했습니다"
            description="기술 이름을 단순히 나열하지 않고, 어떤 영역에서 주로 사용하는지 한눈에 읽히도록 묶었습니다. 이후 실제 프로젝트 설명과 함께 연결하기 쉬운 구조입니다."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {techStackGroups.map((group) => (
              <article
                key={group.category}
                className="surface-panel p-6 md:p-7"
              >
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-title font-semibold text-text-main">
                      {group.category}
                    </p>
                    <p className="text-sm text-text-subtle">
                      주로 이 영역에서 사용하고 있는 도구들
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
