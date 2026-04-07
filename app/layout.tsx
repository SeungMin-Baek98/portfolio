import type { Metadata } from 'next';
import { IBM_Plex_Mono, Noto_Sans_KR } from 'next/font/google';

import { SiteShell } from '@/components/layout/site-shell';

import './globals.css';

const notoSansKr = Noto_Sans_KR({
	variable: '--font-noto-sans-kr',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	display: 'swap'
});

const ibmPlexMono = IBM_Plex_Mono({
	variable: '--font-ibm-plex-mono',
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	display: 'swap'
});

export const metadata: Metadata = {
	title: {
		default: '백승민 | Frontend Portfolio',
		template: '%s | 백승민 포트폴리오'
	},
	description:
		'문제 해결 과정과 사용자 경험 개선 관점을 중심으로 구성한 프론트엔드 개발자 포트폴리오 예시 사이트입니다.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="ko"
			suppressHydrationWarning
			className={`${notoSansKr.variable} ${ibmPlexMono.variable} h-full antialiased`}>
			<body className="bg-background text-text-main min-h-full">
				<SiteShell>{children}</SiteShell>
			</body>
		</html>
	);
}
