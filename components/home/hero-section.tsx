import { heroContent } from "@/data/site-content";

import { ButtonLink } from "@/components/ui/button-link";

export function HeroSection() {
  return (
    <section className="page-shell section-space pt-12">
      <div className="section-box grid gap-8 p-7 md:p-10 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-end lg:p-12">
        <div className="space-y-8">
          <div className="space-y-5">
            <span className="eyebrow">
              {heroContent.name} / {heroContent.role}
            </span>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-display font-semibold tracking-[-0.05em] text-text-main">
                {heroContent.headline}
              </h1>
              <p className="max-w-2xl text-lg text-text-subtle">
                {heroContent.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {heroContent.ctas.map((cta, index) => (
              <ButtonLink
                key={cta.label}
                href={cta.href}
                external={cta.external}
                variant={index === 0 ? "primary" : "secondary"}
              >
                {cta.label}
              </ButtonLink>
            ))}
          </div>
        </div>

        <aside className="surface-panel-muted border border-border-strong p-6 md:p-7">
          <div className="space-y-5">
            <p className="text-sm font-semibold tracking-[0.18em] text-text-subtle uppercase">
              Quick Snapshot
            </p>
            <ul className="space-y-4">
              {heroContent.highlights.map((item) => (
                <li key={item.label} className="space-y-1">
                  <p className="text-sm text-text-subtle">{item.label}</p>
                  <p className="text-title font-semibold text-text-main">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
