import { ButtonLink } from '@/components/ui/button-link';

export default function NotFound() {
	return (
		<section className="section-space page-shell">
			<div className="surface-panel mx-auto max-w-2xl p-8 text-center md:p-10">
				<div className="space-y-5">
					<span className="eyebrow">Not Found</span>
					<div className="space-y-3">
						<h1 className="text-heading text-text-main font-semibold">
							요청한 페이지를 찾을 수 없습니다
						</h1>
						<p className="text-body text-text-subtle">
							아직 연결되지 않은 mock 경로이거나 존재하지 않는 프로젝트 상세
							페이지입니다.
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-3">
						<ButtonLink href="/" variant="primary">
							홈으로 이동
						</ButtonLink>
						<ButtonLink href="/projects" variant="secondary">
							프로젝트 보기
						</ButtonLink>
					</div>
				</div>
			</div>
		</section>
	);
}
