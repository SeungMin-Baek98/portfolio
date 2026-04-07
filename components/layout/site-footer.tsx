import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="page-shell flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-[0.18em] text-text-subtle uppercase">
            Frontend Portfolio
          </p>
          <p className="max-w-2xl text-sm text-text-subtle">
            문제를 정의하고 해결 과정을 보여주는 포트폴리오를 목표로 구성한 mock
            기반 예시 사이트입니다.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-text-subtle">
          <Link
            href="/projects"
            className="transition-colors hover:text-text-main"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-text-main"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-text-main"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
