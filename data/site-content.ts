import type {
	AboutSection,
	ContactContent,
	HeroContent,
	NavigationItem,
	Strength,
	TechStackGroup
} from '@/types/portfolio';

export const navigationItems: NavigationItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'About', href: '/about' },
	{ label: 'Contact', href: '/contact' }
];

export const heroContent: HeroContent = {
	name: '백승민',
	role: 'Frontend Developer',
	headline:
		'사용자 입장에서 불편한 흐름을 발견하고, 더 자연스럽고 이해하기 쉬운 화면으로 개선하는 프론트엔드 개발자입니다',
	description:
		'전자공학 전공에서 출발했지만 국비교육, 개인 프로젝트, 팀 프로젝트, 그리고 프론트엔드 인턴 경험을 거치며 사용자 흐름과 가독성을 함께 고려하는 개발자로 성장해왔습니다. React, Next.js, TypeScript 기반으로 상태 관리, API 연동, 반응형 UI 구현을 경험했고, 구현 이후에도 구조와 유지보수성을 함께 개선하는 방식을 지향합니다.',
	ctas: [
		{ label: '프로젝트 보기', href: '/projects' },
		{
			label: 'GitHub 보기',
			href: 'https://github.com/SeungMin-Baek98',
			external: true
		}
	],
	highlights: [
		{ label: '최근 경험', value: '프론트엔드 인턴과 개인·팀 프로젝트 수행' },
		{ label: '강점', value: '사용자 흐름 개선과 구조 정리' },
		{ label: '기록 습관', value: '노션 아카이브로 학습과 트러블슈팅 정리' }
	]
};

export const keyStrengths: Strength[] = [
	{
		title: '사용자 경험 개선',
		summary: '불편한 흐름을 찾아 더 자연스럽게 바꾸는 일',
		detail:
			'사용자 테스트와 실제 사용 흐름을 바탕으로 입력 단계, 탐색 구조, 상태 피드백을 다듬는 작업에 강점이 있습니다.'
	},
	{
		title: '구조와 유지보수성',
		summary: '기능 구현에서 끝나지 않는 정리',
		detail:
			'상태 관리, 데이터 스키마, 공통 UI 구조를 함께 정리해 이후 기능 추가와 유지보수가 쉬운 방향을 선호합니다.'
	},
	{
		title: '기록과 협업',
		summary: '배운 것과 해결 과정을 남기는 개발',
		detail:
			'노션 아카이브, Jira 이슈, PR 리뷰 기반으로 작업 맥락을 남기며 혼자 하는 프로젝트와 팀 협업 모두에서 일관된 흐름을 만들고자 합니다.'
	}
];

export const techStackGroups: TechStackGroup[] = [
	{
		category: 'Front-End',
		description:
			'주로 화면 구조를 설계하고, 사용자 흐름이 자연스럽게 이어지도록 인터페이스를 구현할 때 사용하는 기술입니다.',
		items: ['React', 'Next.js', 'TypeScript', 'JavaScript']
	},
	{
		category: 'State & Data',
		description:
			'서버 상태와 클라이언트 상태를 분리해서 다루고, 데이터 흐름을 더 안정적으로 관리하기 위해 활용하고 있습니다.',
		items: ['TanStack Query', 'Zustand', 'Supabase']
	},
	{
		category: 'Styling & UI',
		description:
			'가독성 좋은 화면 구성과 재사용 가능한 UI 시스템, 그리고 필요한 만큼의 자연스러운 인터랙션을 만드는 데 사용합니다.',
		items: ['Tailwind CSS', 'Framer Motion', 'Storybook']
	},
	{
		category: 'Collaboration',
		description:
			'작업 맥락을 공유하고 이슈를 정리하며, 리뷰와 커뮤니케이션이 끊기지 않도록 협업 과정에서 주로 활용합니다.',
		items: ['GitHub', 'Notion', 'Jira', 'Discord']
	},
	{
		category: 'Tooling',
		description:
			'개발 속도를 높이고 반복 작업을 줄이면서, 구현과 기록을 더 효율적으로 이어가기 위해 사용하는 도구들입니다.',
		items: ['VSCode', 'Codex']
	}
];

export const aboutIntro =
	'꾸준한 자기 계발을 통해 성장하는 프론트엔드 개발자를 목표로 하고 있습니다. 전자공학 전공에서 출발했지만, 멀티잇과 코드잇 과정을 거치며 프론트엔드 역량을 본격적으로 쌓았고, 개인 프로젝트와 팀 프로젝트, 대모산 개발단 인턴 경험을 통해 사용자 흐름 개선, 반응형 UI, 협업 프로세스를 실제로 다뤄왔습니다.';

export const aboutSections: AboutSection[] = [
	{
		title: '개발자로서 중요하게 생각하는 점',
		description:
			'기능이 동작하는 것만으로 충분하지 않다고 생각합니다. 사용자가 어디에서 머뭇거리는지, 어떤 정보가 이해를 방해하는지까지 함께 보는 편입니다.',
		items: [
			{
				title: '사용자 흐름과 가독성',
				description:
					'Gameow 게시글 생성 흐름을 퍼널 구조로 재구성했던 것처럼, 복잡한 입력이나 긴 화면도 더 명확한 순서로 다시 설계하는 작업을 좋아합니다.'
			},
			{
				title: '구조와 유지보수성',
				description:
					'Mini Log와 인턴 경험에서처럼 데이터 스키마와 공통 컴포넌트를 정리해 이후 기능 확장과 유지보수가 쉬운 구조를 만드는 데 관심이 많습니다.'
			}
		]
	},
	{
		title: '강점과 업무 방식',
		description:
			'React, Next.js, TypeScript 기반 프로젝트에서 상태 관리, API 연동, 반응형 UI를 중심으로 경험을 쌓아왔습니다.',
		items: [
			{
				title: '실제 기능과 사용자 피드백 연결',
				description:
					'단순 구현보다 사용자 테스트, 접근 흐름, 상태 피드백까지 연결해서 문제를 다시 정의하려고 합니다.'
			},
			{
				title: '학습 내용을 프로젝트에 반영',
				description:
					'개인 프로젝트에서는 TanStack Query, Zustand, Supabase 같은 도구를 직접 적용하며 새로운 구조를 실험하고 개선해왔습니다.'
			}
		]
	},
	{
		title: '협업, 문서화, 구조 설계',
		description:
			'작업 결과뿐 아니라 왜 그렇게 구현했는지를 남기는 습관이 중요하다고 생각합니다.',
		items: [
			{
				title: '협업 경험',
				description:
					'대모산 개발단 인턴과 팀 프로젝트에서 Jira 이슈 기반 브랜치 운영, PR 리뷰, 코드 컨벤션을 경험하며 협업 흐름을 익혔습니다.'
			},
			{
				title: '기록과 아카이브',
				description:
					'프로젝트 상세 구현, 트러블슈팅, 학습 노트를 노션에 정리하며 다음 작업이나 회고에 바로 활용할 수 있도록 관리하고 있습니다.'
			}
		]
	}
];

export const contactContent: ContactContent = {
	title: '프로젝트, 협업, 포지션 관련 이야기를 편하게 나눌 수 있습니다',
	description:
		'현재 포트폴리오와 GitHub, 노션 아카이브를 함께 운영하고 있습니다. 메일로 연락 주시면 가장 빠르게 확인할 수 있습니다.',
	items: [
		{
			label: 'Email',
			value: 'jah02190@naver.com',
			href: 'mailto:jah02190@naver.com',
			note: '포지션 제안, 협업 제안, 포트폴리오 관련 문의'
		},
		{
			label: 'GitHub',
			value: 'github.com/SeungMin-Baek98',
			href: 'https://github.com/SeungMin-Baek98',
			note: '개인 프로젝트와 코드 기록'
		},
		{
			label: 'Notion Portfolio',
			value: '프론트엔드 개발자 백승민입니다',
			href: 'https://www.notion.so/29f022996d6e4d0b9fd1e907c7ead974',
			note: '프로젝트 상세, 학습 노트, 트러블슈팅 아카이브'
		}
	],
	note: '빠른 회신이 필요한 경우 이메일로 연락 주시면 가장 먼저 확인하겠습니다.'
};
