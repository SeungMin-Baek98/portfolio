'use client';

import { useState } from 'react';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { cn } from '@/lib/utils';
import type { DetailSection } from '@/types/portfolio';

type ProjectProcessSectionProps = {
	sections: DetailSection[];
};

export function ProjectProcessSection({
	sections
}: ProjectProcessSectionProps) {
	const totalSteps = Math.max(...sections.map(section => section.pages.length));
	const [currentIndex, setCurrentIndex] = useState(0);
	const shouldReduceMotion = useReducedMotion();
	const sectionToneClasses = [
		{
			wrapper:
				'border-l-[6px] border-l-stone-900 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,245,241,0.94))]',
			badge: 'bg-stone-900 text-text-inverse border-stone-900'
		},
		{
			wrapper:
				'border-l-[6px] border-l-stone-500 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,236,229,0.98))]',
			badge: 'bg-stone-200 text-text-main border-stone-300'
		},
		{
			wrapper:
				'border-l-[6px] border-l-stone-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(235,232,224,0.98))]',
			badge: 'bg-white text-text-main border-border-strong'
		}
	];

	return (
		<section className="surface-panel p-7 md:p-8">
			<div className="space-y-8">
				<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
					<div className="space-y-2">
						<p className="text-text-subtle text-sm font-semibold tracking-[0.18em] uppercase">
							Problem Solving Process
						</p>
						<p className="text-body text-text-subtle max-w-2xl">
							문제를 정의하고, 해결 방식을 설계한 뒤, 결과를 정리한 흐름을
							순서대로 볼 수 있도록 구성했습니다.
						</p>
					</div>

					<div className="flex items-center gap-3">
						{Array.from({ length: totalSteps }, (_, index) => {
							const isActive = index === currentIndex;

							return (
								<button
									key={`process-step-${index + 1}`}
									type="button"
									onClick={() => setCurrentIndex(index)}
									className={
										isActive
											? 'rounded-pill bg-primary text-text-inverse shadow-soft inline-flex min-w-10 items-center justify-center px-4 py-2 text-sm font-semibold'
											: 'rounded-pill border-border-strong text-text-subtle hover:bg-surface-solid hover:text-text-main inline-flex min-w-10 items-center justify-center border bg-white/90 px-4 py-2 text-sm font-medium transition-colors'
									}
									aria-pressed={isActive}
									aria-label={`${index + 1}단계`}>
									<motion.span layout>{index + 1}</motion.span>
								</button>
							);
						})}
					</div>
				</div>

				<article className="border-border-strong rounded-lg border bg-white/92 p-5 md:p-6">
					<div className="space-y-6">
						<div className="border-border/70 flex flex-col gap-4 border-b pb-5 lg:flex-row lg:items-end lg:justify-between">
							<div className="space-y-2">
								<span className="chip">
									Step {currentIndex + 1} / {totalSteps}
								</span>
								<p className="text-body text-text-subtle max-w-2xl">
									같은 단계 안에서 Problem, Solution, Result를 함께 비교하며
									읽을 수 있도록 구성했습니다.
								</p>
							</div>

							<div className="flex items-center gap-2">
								<button
									type="button"
									onClick={() =>
										setCurrentIndex(
											(currentIndex - 1 + totalSteps) % totalSteps
										)
									}
									className="rounded-pill border-border-strong text-text-subtle hover:bg-surface-solid hover:text-text-main inline-flex border bg-white/90 px-4 py-2 text-sm font-medium transition-colors">
									이전
								</button>
								<button
									type="button"
									onClick={() =>
										setCurrentIndex((currentIndex + 1) % totalSteps)
									}
									className="rounded-pill border-border-strong text-text-subtle hover:bg-surface-solid hover:text-text-main inline-flex border bg-white/90 px-4 py-2 text-sm font-medium transition-colors">
									다음
								</button>
							</div>
						</div>

						<AnimatePresence mode="wait" initial={false}>
							<motion.div
								key={`process-step-panel-${currentIndex}`}
								className="space-y-5"
								initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
								transition={{
									duration: 0.28,
									ease: [0.22, 1, 0.36, 1]
								}}>
								{sections.map((section, sectionIndex) => {
									const page = section.pages[currentIndex];

									if (!page) {
										return null;
									}

									return (
										<motion.article
											key={`${section.title}-${page.label}`}
											className={cn(
												'border-border-strong rounded-xl border px-5 py-5 md:px-6 md:py-6',
												sectionToneClasses[sectionIndex]?.wrapper
											)}
											initial={
												shouldReduceMotion ? false : { opacity: 0, y: 12 }
											}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.24,
												delay: shouldReduceMotion ? 0 : sectionIndex * 0.05,
												ease: [0.22, 1, 0.36, 1]
											}}>
											<div className="grid gap-5 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-6">
												<div className="space-y-3">
													<span
														className={cn(
															'rounded-pill inline-flex border px-3 py-2 text-sm font-semibold',
															sectionToneClasses[sectionIndex]?.badge
														)}>
														{section.title}
													</span>
													<p className="text-text-subtle text-sm">
														{page.label}
													</p>
													<p className="text-text-subtle text-sm">
														{page.context}
													</p>
												</div>

												<div className="space-y-4">
													<div className="space-y-2">
														<h3 className="text-title text-text-main font-semibold">
															{page.headline}
														</h3>
														<p className="text-text-subtle text-sm">
															{page.description}
														</p>
													</div>

													<ul className="space-y-3">
														{page.bullets.map(bullet => (
															<li
																key={bullet}
																className="border-border/70 text-text-main rounded-md border bg-white/92 px-4 py-3 text-sm">
																{bullet}
															</li>
														))}
													</ul>
												</div>
											</div>
										</motion.article>
									);
								})}
							</motion.div>
						</AnimatePresence>
					</div>
				</article>
			</div>
		</section>
	);
}
