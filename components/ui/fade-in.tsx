'use client';

import type { ReactNode } from 'react';

import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@/lib/utils';

type FadeInProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	duration?: number;
	distance?: number;
	once?: boolean;
	amount?: number;
};

export function FadeIn({
	children,
	className,
	delay = 0,
	duration = 0.55,
	distance = 18,
	once = true,
	amount = 0.2
}: FadeInProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={cn(className)}
			initial={{ opacity: 0, y: distance }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once, amount }}
			transition={{
				duration,
				delay,
				ease: [0.22, 1, 0.36, 1]
			}}>
			{children}
		</motion.div>
	);
}
