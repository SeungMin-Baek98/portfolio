import type { DetailSection as DetailSectionType } from "@/types/portfolio";

type ProjectDetailSectionProps = {
  section: DetailSectionType;
};

export function ProjectDetailSection({
  section,
}: ProjectDetailSectionProps) {
  return (
    <section className="surface-panel p-7 md:p-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-[0.18em] text-text-subtle uppercase">
            {section.title}
          </p>
          <p className="text-body text-text-subtle">{section.description}</p>
        </div>

        <ul className="space-y-3">
          {section.bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-md border border-border/70 bg-white/65 px-4 py-3 text-sm text-text-main"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
