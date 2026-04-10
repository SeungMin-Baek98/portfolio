import { techStackGroups } from '@/data/site-content';

import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';

export function TechStackSection() {
	return (
		<section className="section-band">
			<div className="page-shell section-space">
				<div className="space-y-10">
					<SectionHeading
						eyebrow="Tech Stack"
						title={`현재 사용하고 있는 기술 스택을\n카테고리별로 정리했습니다`}
						description="기술 이름을 단순히 나열하지 않고, 어떤 영역에서 주로 사용하는지 한눈에 읽히도록 묶었습니다. 이후 실제 프로젝트 설명과 함께 연결하기 쉬운 구조입니다."
					/>

					<div className="grid gap-5 lg:grid-cols-2">
						{techStackGroups.map((group, index) => (
							<FadeIn
								key={group.category}
								className="h-full"
								delay={0.06 * index}>
								<article className="surface-panel h-full p-6 md:p-7">
									<div className="space-y-5">
										<div className="space-y-2">
											<p className="text-title text-text-main font-semibold">
												{group.category}
											</p>
											<p className="text-text-subtle text-sm">
												{group.description}
											</p>
										</div>

										<ul className="flex flex-wrap gap-2">
											{group.items.map(item => (
												<li key={item} className="chip">
													{item}
												</li>
											))}
										</ul>
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
