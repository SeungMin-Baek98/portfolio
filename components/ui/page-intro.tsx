import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  aside,
}: PageIntroProps) {
  return (
    <section className="section-band">
      <div className="page-shell section-space pb-10">
        <div className="section-box grid gap-8 p-7 md:p-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="space-y-5">
            <span className="eyebrow">{eyebrow}</span>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-display font-semibold tracking-[-0.04em] text-text-main">
                {title}
              </h1>
              <p className="max-w-2xl text-body text-text-subtle">{description}</p>
            </div>
          </div>

          {aside ? <div className="surface-panel p-6">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
