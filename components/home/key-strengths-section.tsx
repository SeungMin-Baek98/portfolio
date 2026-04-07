import { keyStrengths } from '@/data/site-content';

import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export function KeyStrengthsSection() {
	return (
		<section className="section-band">
			<div className="page-shell section-space">
				<div className="space-y-10">
					<SectionHeading
						eyebrow="Key Strengths"
						title="문제를 설명하는 방식에서도 개발자의 관점을 보여주고 싶습니다"
						description="포트폴리오의 첫 화면에서는 기술 키워드보다 어떤 방식으로 문제를 다루는지 먼저 드러나도록 구성했습니다."
					/>

					<div className="grid gap-5 md:grid-cols-3">
						{keyStrengths.map((strength, index) => (
							<FadeIn
								key={strength.title}
								className="h-full"
								delay={0.05 * index}>
								<article className="surface-panel h-full p-6 md:p-7">
									<div className="space-y-4">
										<div className="space-y-2">
											<p className="text-title text-text-main font-semibold">
												{strength.title}
											</p>
											<p className="text-text-subtle text-sm font-medium">
												{strength.summary}
											</p>
										</div>
										<p className="text-body text-text-subtle">
											{strength.detail}
										</p>
									</div>
								</article>
							</FadeIn>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
