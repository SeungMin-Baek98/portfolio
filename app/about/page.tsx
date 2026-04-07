import type { Metadata } from "next";

import { aboutIntro, aboutSections } from "@/data/site-content";

import { FadeIn } from "@/components/ui/fade-in";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "About",
  description:
    "개발자로서 중요하게 생각하는 점, 강점, 협업 방식과 구조 설계 관점을 정리한 소개 페이지입니다.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="읽기 쉬운 구조와 협업 가능한 화면을 만드는 개발자를 지향합니다"
        description={aboutIntro}
      />

      <section className="section-band-muted">
        <div className="page-shell section-space pt-8">
          <div className="grid gap-5">
            {aboutSections.map((section, index) => (
              <FadeIn key={section.title} delay={0.06 * index}>
                <article className="surface-panel p-7 md:p-8">
                  <div className="grid gap-6 lg:grid-cols-[20rem_minmax(0,1fr)]">
                    <div className="space-y-3">
                      <p className="text-heading font-semibold text-text-main">
                        {section.title}
                      </p>
                      <p className="text-body text-text-subtle">
                        {section.description}
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {section.items.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-md border border-border-strong bg-white/90 p-5"
                        >
                          <div className="space-y-2">
                            <h2 className="text-title font-semibold text-text-main">
                              {item.title}
                            </h2>
                            <p className="text-sm text-text-subtle">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
