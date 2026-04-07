import type { Metadata } from "next";

import { contactContent } from "@/data/site-content";

import { ButtonLink } from "@/components/ui/button-link";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "이메일, GitHub, Notion 또는 Blog 링크와 간단한 연락 안내를 보여주는 연락 페이지입니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={contactContent.title}
        description={contactContent.description}
      />

      <section className="section-band-muted">
        <div className="page-shell section-space pt-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="grid gap-5">
              {contactContent.items.map((item) => (
                <article key={item.label} className="surface-panel p-6 md:p-7">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold tracking-[0.18em] text-text-subtle uppercase">
                        {item.label}
                      </p>
                      <p className="text-title font-semibold text-text-main">
                        {item.value}
                      </p>
                      <p className="text-sm text-text-subtle">{item.note}</p>
                    </div>

                    <ButtonLink href={item.href} external variant="secondary">
                      바로 이동
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>

            <aside className="surface-panel-muted p-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold tracking-[0.18em] text-text-subtle uppercase">
                  Contact Note
                </p>
                <p className="text-body text-text-subtle">
                  {contactContent.note}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
