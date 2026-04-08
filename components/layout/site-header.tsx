'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AnimatePresence, motion } from 'motion/react';

import { navigationItems } from '@/data/site-content';
import { cn } from '@/lib/utils';

function isActivePath(pathname: string, href: string) {
	if (href === '/') {
		return pathname === '/';
	}

	return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (!isMenuOpen) {
			return;
		}

		const previousOverflow = document.body.style.overflow;
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsMenuOpen(false);
			}
		};

		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isMenuOpen]);

	return (
		<>
			<header className="border-border/70 bg-background/85 sticky top-0 z-40 border-b backdrop-blur-xl">
				<div className="page-shell flex items-center justify-between gap-6 py-5">
					<Link href="/" className="min-w-fit">
						<span className="text-text-subtle block text-sm font-semibold tracking-[0.2em] uppercase">
							Baek Seung Min
						</span>
					</Link>

					<button
						type="button"
						onClick={() => setIsMenuOpen(true)}
						className="border-border-strong bg-surface-solid text-text-main hover:bg-surface rounded-pill inline-flex size-11 items-center justify-center border transition-colors md:hidden"
						aria-expanded={isMenuOpen}
						aria-controls="mobile-navigation"
						aria-label="모바일 메뉴 열기">
						<span className="sr-only">메뉴 열기</span>
						<span className="flex flex-col gap-1.5">
							<span className="bg-text-main block h-px w-5" />
							<span className="bg-text-main block h-px w-5" />
							<span className="bg-text-main block h-px w-5" />
						</span>
					</button>

					<nav aria-label="Primary" className="hidden overflow-x-auto md:block">
						<ul className="flex min-w-fit items-center gap-2">
							{navigationItems.map(item => {
								const isActive = isActivePath(pathname, item.href);

								return (
									<li key={item.href}>
										<Link
											href={item.href}
											className={cn(
												'rounded-pill inline-flex px-4 py-2 text-sm font-medium transition-colors',
												isActive
													? 'bg-primary text-text-inverse shadow-soft'
													: 'text-text-subtle hover:bg-surface hover:text-text-main'
											)}>
											{item.label}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</header>

			<AnimatePresence>
				{isMenuOpen ? (
					<motion.div
						className="fixed inset-0 z-50 flex justify-end md:hidden"
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 1 }}>
						<motion.button
							type="button"
							className="bg-foreground/30 absolute inset-0"
							aria-label="모바일 메뉴 닫기"
							onClick={() => setIsMenuOpen(false)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
						/>

						<motion.aside
							id="mobile-navigation"
							className="border-border-strong bg-background relative flex h-full w-[88vw] max-w-sm flex-col overflow-y-auto border-l px-5 py-6 shadow-[0_28px_80px_-36px_rgba(20,18,16,0.5)]"
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
							<div className="flex items-start justify-between gap-4">
								<div className="space-y-2">
									<p className="text-text-subtle text-xs font-semibold tracking-[0.22em] uppercase">
										Navigation
									</p>
									<p className="text-title text-text-main font-semibold">
										페이지 이동
									</p>
									<p className="text-text-subtle text-sm">
										프로젝트와 소개, 연락 페이지를 빠르게 이동할 수 있습니다.
									</p>
								</div>

								<button
									type="button"
									onClick={() => setIsMenuOpen(false)}
									className="border-border-strong bg-surface-solid text-text-main hover:bg-surface rounded-pill inline-flex size-10 shrink-0 items-center justify-center border transition-colors"
									aria-label="모바일 메뉴 닫기">
									<span className="text-lg leading-none">×</span>
								</button>
							</div>

							<nav aria-label="Mobile Primary" className="mt-8">
								<ul className="space-y-3">
									{navigationItems.map(item => {
										const isActive = isActivePath(pathname, item.href);

										return (
											<li key={item.href}>
												<Link
													href={item.href}
													onClick={() => setIsMenuOpen(false)}
													className={cn(
														'flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-base font-medium transition-colors',
														isActive
															? 'border-primary bg-primary text-text-inverse shadow-soft'
															: 'border-border-strong bg-surface-solid text-text-main hover:bg-surface'
													)}>
													<span>{item.label}</span>
												</Link>
											</li>
										);
									})}
								</ul>
							</nav>

							<div className="border-border/70 mt-8 border-t pt-6">
								<p className="text-text-subtle text-sm">
									문제 해결 과정과 사용자 경험 개선 관점을 중심으로 정리한
									프론트엔드 포트폴리오입니다.
								</p>
							</div>
						</motion.aside>
					</motion.div>
				) : null}
			</AnimatePresence>
		</>
	);
}
