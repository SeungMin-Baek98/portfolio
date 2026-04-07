import type { ReactNode } from 'react';

import { FadeIn } from '@/components/ui/fade-in';

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
	aside
}: PageIntroProps) {
	return (
		<section className="section-band">
			<div className="page-shell section-space pb-10">
				<div className="section-box grid gap-8 p-7 md:p-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
					<FadeIn>
						<div className="space-y-5">
							<span className="eyebrow">{eyebrow}</span>
							<div className="space-y-4">
								<h1 className="text-display text-text-main max-w-4xl font-semibold tracking-[-0.04em]">
									{title}
								</h1>
								<p className="text-body text-text-subtle max-w-2xl">
									{description}
								</p>
							</div>
						</div>
					</FadeIn>

					{aside ? (
						<FadeIn delay={0.08}>
							<div className="surface-panel p-6">{aside}</div>
						</FadeIn>
					) : null}
				</div>
			</div>
		</section>
	);
}
