import type { ReactNode } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

type ButtonLinkProps = {
	href: string;
	children: ReactNode;
	external?: boolean;
	variant?: 'primary' | 'secondary';
	className?: string;
};

export function ButtonLink({
	href,
	children,
	external = false,
	variant = 'primary',
	className
}: ButtonLinkProps) {
	const classes = cn(
		'button-base',
		variant === 'primary' ? 'button-primary' : 'button-secondary',
		className
	);

	if (external) {
		return (
			<a href={href} target="_blank" rel="noreferrer" className={classes}>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} className={classes}>
			{children}
		</Link>
	);
}
