import { heroContent } from '@/data/site-content';

import { ButtonLink } from '@/components/ui/button-link';
import { FadeIn } from '@/components/ui/fade-in';

export function HeroSection() {
	return (
		<section className="page-shell section-space pt-12">
			<div className="section-box grid gap-8 p-7 md:p-10 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-end lg:p-12">
				<FadeIn>
					<div className="space-y-8">
						<div className="space-y-5">
							<span className="eyebrow">
								{heroContent.name} / {heroContent.role}
							</span>

							<div className="space-y-4">
								<h1 className="text-display text-text-main max-w-4xl font-semibold tracking-[-0.05em]">
									{heroContent.headline}
								</h1>
								<p className="text-text-subtle max-w-2xl text-lg">
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
									variant={index === 0 ? 'primary' : 'secondary'}>
									{cta.label}
								</ButtonLink>
							))}
						</div>
					</div>
				</FadeIn>

				<FadeIn delay={0.1}>
					<aside className="surface-panel-muted border-border-strong border p-6 md:p-7">
						<div className="space-y-5">
							<p className="text-text-subtle text-sm font-semibold tracking-[0.18em] uppercase">
								Quick Snapshot
							</p>
							<ul className="space-y-4">
								{heroContent.highlights.map(item => (
									<li key={item.label} className="space-y-1">
										<p className="text-text-subtle text-sm">{item.label}</p>
										<p className="text-title text-text-main font-semibold">
											{item.value}
										</p>
									</li>
								))}
							</ul>
						</div>
					</aside>
				</FadeIn>
			</div>
		</section>
	);
}
