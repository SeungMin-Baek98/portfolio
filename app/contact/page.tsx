import type { Metadata } from 'next';

import { contactContent } from '@/data/site-content';

import { ButtonLink } from '@/components/ui/button-link';
import { FadeIn } from '@/components/ui/fade-in';
import { PageIntro } from '@/components/ui/page-intro';

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'이메일, GitHub, Notion 또는 Blog 링크와 간단한 연락 안내를 보여주는 연락 페이지입니다.'
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
							{contactContent.items.map((item, index) => (
								<FadeIn key={item.label} delay={0.06 * index}>
									<article className="surface-panel p-6 md:p-7">
										<div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
											<div className="space-y-2">
												<p className="text-text-subtle text-sm font-semibold tracking-[0.18em] uppercase">
													{item.label}
												</p>
												<p className="text-title text-text-main font-semibold">
													{item.value}
												</p>
												<p className="text-text-subtle text-sm">{item.note}</p>
											</div>

											<ButtonLink href={item.href} external variant="secondary">
												바로 이동
											</ButtonLink>
										</div>
									</article>
								</FadeIn>
							))}
						</div>

						<FadeIn delay={0.12}>
							<aside className="surface-panel-muted p-6">
								<div className="space-y-4">
									<p className="text-text-subtle text-sm font-semibold tracking-[0.18em] uppercase">
										Contact Note
									</p>
									<p className="text-body text-text-subtle">
										{contactContent.note}
									</p>
								</div>
							</aside>
						</FadeIn>
					</div>
				</div>
			</section>
		</>
	);
}
