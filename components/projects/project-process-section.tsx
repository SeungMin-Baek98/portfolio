"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import type { DetailSection } from "@/types/portfolio";

type ProjectProcessSectionProps = {
  sections: DetailSection[];
};

export function ProjectProcessSection({
  sections,
}: ProjectProcessSectionProps) {
  const totalSteps = Math.max(
    ...sections.map((section) => section.pages.length),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionToneClasses = [
    {
      wrapper:
        "border-l-[6px] border-l-stone-900 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,245,241,0.94))]",
      badge: "bg-stone-900 text-text-inverse border-stone-900",
    },
    {
      wrapper:
        "border-l-[6px] border-l-stone-500 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,236,229,0.98))]",
      badge: "bg-stone-200 text-text-main border-stone-300",
    },
    {
      wrapper:
        "border-l-[6px] border-l-stone-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(235,232,224,0.98))]",
      badge: "bg-white text-text-main border-border-strong",
    },
  ];

  return (
    <section className="surface-panel p-7 md:p-8">
      <div className="space-y-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-[0.18em] text-text-subtle uppercase">
              Problem Solving Process
            </p>
            <p className="max-w-2xl text-body text-text-subtle">
              문제를 정의하고, 해결 방식을 설계한 뒤, 결과를 정리한 흐름을
              순서대로 볼 수 있도록 구성했습니다.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {Array.from({ length: totalSteps }, (_, index) => {
              const isActive = index === currentIndex;

              return (
                <button
                  key={`process-step-${index + 1}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={
                    isActive
                      ? "inline-flex min-w-10 items-center justify-center rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-text-inverse shadow-soft"
                      : "inline-flex min-w-10 items-center justify-center rounded-pill border border-border-strong bg-white/90 px-4 py-2 text-sm font-medium text-text-subtle transition-colors hover:bg-surface-solid hover:text-text-main"
                  }
                  aria-pressed={isActive}
                  aria-label={`${index + 1}단계`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        <article className="rounded-lg border border-border-strong bg-white/92 p-5 md:p-6">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 border-b border-border/70 pb-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-2">
                <span className="chip">
                  Step {currentIndex + 1} / {totalSteps}
                </span>
                <p className="max-w-2xl text-body text-text-subtle">
                  같은 단계 안에서 Problem, Solution, Result를 함께 비교하며
                  읽을 수 있도록 구성했습니다.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex(
                      (currentIndex - 1 + totalSteps) % totalSteps,
                    )
                  }
                  className="inline-flex rounded-pill border border-border-strong bg-white/90 px-4 py-2 text-sm font-medium text-text-subtle transition-colors hover:bg-surface-solid hover:text-text-main"
                >
                  이전
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((currentIndex + 1) % totalSteps)
                  }
                  className="inline-flex rounded-pill border border-border-strong bg-white/90 px-4 py-2 text-sm font-medium text-text-subtle transition-colors hover:bg-surface-solid hover:text-text-main"
                >
                  다음
                </button>
              </div>
            </div>

            <div className="space-y-5">
              {sections.map((section, sectionIndex) => {
                const page = section.pages[currentIndex];

                if (!page) {
                  return null;
                }

                return (
                  <article
                    key={`${section.title}-${page.label}`}
                    className={cn(
                      "rounded-xl border border-border-strong px-5 py-5 md:px-6 md:py-6",
                      sectionToneClasses[sectionIndex]?.wrapper,
                    )}
                  >
                    <div className="grid gap-5 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-6">
                      <div className="space-y-3">
                        <span
                          className={cn(
                            "inline-flex rounded-pill border px-3 py-2 text-sm font-semibold",
                            sectionToneClasses[sectionIndex]?.badge,
                          )}
                        >
                          {section.title}
                        </span>
                        <p className="text-sm text-text-subtle">{page.label}</p>
                        <p className="text-sm text-text-subtle">
                          {section.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-title font-semibold text-text-main">
                            {page.headline}
                          </h3>
                          <p className="text-sm text-text-subtle">
                            {page.description}
                          </p>
                        </div>

                        <ul className="space-y-3">
                          {page.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="rounded-md border border-border/70 bg-white/92 px-4 py-3 text-sm text-text-main"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
