import Link from 'next/link';

export function SiteFooter() {
	return (
		<footer className="border-border/80 border-t">
			<div className="page-shell flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
				<div className="space-y-2">
					<p className="text-text-subtle text-sm font-semibold tracking-[0.18em] uppercase">
						Frontend Portfolio
					</p>
					<p className="text-text-subtle max-w-2xl text-sm">
						문제를 정의하고 해결 과정을 보여주는 포트폴리오를 목표로 구성한 mock
						기반 예시 사이트입니다.
					</p>
				</div>

				<div className="text-text-subtle flex flex-wrap items-center gap-4 text-sm">
					<Link
						href="/projects"
						className="hover:text-text-main transition-colors">
						Projects
					</Link>
					<Link
						href="/about"
						className="hover:text-text-main transition-colors">
						About
					</Link>
					<Link
						href="/contact"
						className="hover:text-text-main transition-colors">
						Contact
					</Link>
				</div>
			</div>
		</footer>
	);
}
