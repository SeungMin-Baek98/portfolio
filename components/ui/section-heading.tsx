import { FadeIn } from '@/components/ui/fade-in';

type SectionHeadingProps = {
	eyebrow: string;
	title: string;
	description: string;
};

export function SectionHeading({
	eyebrow,
	title,
	description
}: SectionHeadingProps) {
	return (
		<FadeIn className="max-w-2xl">
			<div className="space-y-4">
				<span className="eyebrow">{eyebrow}</span>
				<div className="space-y-3">
					<h2 className="text-heading text-text-main font-semibold">{title}</h2>
					<p className="text-body text-text-subtle">{description}</p>
				</div>
			</div>
		</FadeIn>
	);
}
