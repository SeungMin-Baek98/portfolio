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
						&copy; {new Date().getFullYear()} 백승민 All rights reserved.
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
