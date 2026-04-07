import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "mini-log",
    name: "Mini Log",
    tagline:
      "공개 탐색, 실시간 알림, AI 주간 회고까지 연결한 SNS형 라이프로그 서비스",
    summary:
      "짧은 기록과 상호작용을 가볍게 나눌 수 있는 SNS형 라이프로그 서비스입니다. 단순 피드 앱에 머무르지 않고, 프로필 아카이브와 실시간 알림, AI 주간 회고까지 하나의 흐름으로 연결하는 데 집중했습니다.",
    period: "2025.12 - 진행 중",
    role: "개인 프로젝트 / 프론트엔드 · 백엔드 · 데이터베이스 전반 구현",
    impact:
      "공개 진입 흐름과 인증 가드, 캐시 전략, 공통 UI 구조를 함께 설계하며 사용성과 유지보수성을 동시에 개선",
    technologies: [
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Supabase",
      "Tailwind CSS",
    ],
    featured: true,
    links: [
      {
        label: "배포 보기",
        href: "https://mini-log-v1.vercel.app/",
        external: true,
      },
      {
        label: "GitHub 보기",
        href: "https://github.com/SeungMin-Baek98/Mini-Log",
        external: true,
      },
      {
        label: "노션 기록",
        href: "https://www.notion.so/2d01f1669d10804d8901e2ad79f90fe0",
        external: true,
      },
    ],
    detail: {
      overview:
        "비로그인 사용자가 서비스를 탐색할 수 있도록 공개 라우트를 열어두면서도, 좋아요나 댓글 같은 보호된 기능은 일관되게 제어해야 했고, 상태가 섞이지 않도록 캐시 구조도 함께 다뤄야 했습니다.",
      problem: {
        title: "Problem",
        description:
          "로그인 여부에 따라 사용자 경험이 과도하게 단절되면 서비스 진입 장벽이 높아지고, 반대로 상태 처리를 단순화하면 비로그인/로그인 상태 전환 시 좋아요나 알림 같은 데이터가 섞이는 문제가 생겼습니다.",
        bullets: [
          "홈, 게시글 상세, 프로필을 모두 로그인 뒤에만 열어두면 초기 탐색 경험이 답답해졌습니다.",
          "조회 캐시가 사용자 기준으로 분리되지 않으면 좋아요 상태가 잘못 보일 수 있었습니다.",
          "반복되는 카드 스타일과 상태 UI가 흩어져 있어 프로젝트가 커질수록 수정 범위가 넓어졌습니다.",
        ],
      },
      solution: {
        title: "Solution",
        description:
          "공개 탐색과 인증 필요 액션을 분리하고, viewer-aware 캐시 전략과 공통 카드 래퍼를 도입해 사용성과 구조를 함께 정리했습니다.",
        bullets: [
          "홈, 게시글 상세, 프로필은 공개 라우트로 전환하고 인증이 필요한 액션만 토스트와 공통 가드 훅으로 안내했습니다.",
          "게시글 캐시를 viewer 기준으로 분리해 로그인 전환 이후에도 올바른 사용자 상태를 유지하도록 설계했습니다.",
          "실시간 알림, AI 주간 회고, 프로필 아카이브를 하나의 사용자 흐름으로 연결하고, `Surface` 계열 공통 카드 래퍼로 스타일과 구조를 정리했습니다.",
        ],
      },
      result: {
        title: "Result",
        description:
          "서비스 진입 경험을 더 열어두면서도 보호된 기능은 일관되게 제어할 수 있었고, 기능 추가가 이어지는 상황에서도 공통 구조를 바탕으로 유지보수가 쉬운 상태를 만들 수 있었습니다.",
        bullets: [
          "비로그인 사용자도 피드와 프로필을 먼저 경험할 수 있어 서비스 탐색 흐름이 자연스러워졌습니다.",
          "좋아요 상태와 같은 사용자 의존 데이터가 섞이지 않도록 캐시 일관성을 확보했습니다.",
          "카드형 UI와 상태 피드백 패턴을 정리해 이후 회고, 알림, 정책 페이지까지 공통 방식으로 확장할 수 있었습니다.",
        ],
      },
      techStack: [
        {
          name: "React 19",
          reason:
            "복잡한 상호작용을 작은 단위로 나누고 재사용 가능한 UI 구조를 유지하기 좋았습니다.",
        },
        {
          name: "TanStack Query",
          reason:
            "viewer-aware 캐시 전략과 optimistic update, 서버 상태 동기화를 구현하는 데 핵심 역할을 했습니다.",
        },
        {
          name: "Zustand",
          reason:
            "전역 UI 상태와 도메인 상태를 가볍게 분리해 관리하기 좋았습니다.",
        },
        {
          name: "Supabase",
          reason:
            "인증, 데이터베이스, 실시간 알림, Edge Function 기반 AI 회고까지 한 흐름 안에서 연결할 수 있었습니다.",
        },
      ],
    },
  },
  {
    slug: "gameow",
    name: "Gameow",
    tagline:
      "게이머 커뮤니티를 위한 모임 생성, 참가, 아이템 교환 기능을 담은 팀 프로젝트",
    summary:
      "게이머들이 크루를 생성하고 신청하며 관리할 수 있고, 사이트 내에서 아이템을 교환할 수 있는 커뮤니티 기반 웹 애플리케이션입니다. 저는 게시글 생성 퍼널, 게시글 조회 화면, 찜한 목록 페이지를 중심으로 구현했습니다.",
    period: "2025.09.22 - 2025.11.03",
    role: "프론트엔드 팀 프로젝트 / 모임 생성, 게시글 조회, 찜한 목록 페이지 담당",
    impact:
      "사용자 테스트에서 드러난 복잡한 입력 흐름과 반응형 이슈를 퍼널 구조로 재설계해 작성 경험을 개선",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
    ],
    featured: true,
    links: [
      {
        label: "배포 보기",
        href: "https://gameow.vercel.app/",
        external: true,
      },
      {
        label: "GitHub 보기",
        href: "https://github.com/FESI11-Team5/Gameow",
        external: true,
      },
      {
        label: "노션 기록",
        href: "https://www.notion.so/2aa1f1669d108039af9ccf08b6242b8e",
        external: true,
      },
    ],
    detail: {
      overview:
        "초기 기획안대로라면 게시글 생성 화면이 하나의 긴 입력 페이지였고, 실제 사용자 테스트에서 반응형 환경에서의 복잡도와 재작성 부담이 그대로 드러났습니다.",
      problem: {
        title: "Problem",
        description:
          "모든 입력 항목이 한 페이지에 노출되면서 작성 흐름이 복잡해 보였고, 일부 입력 폼은 반응형 환경에서 불안정하게 보였습니다.",
        bullets: [
          "입력 단계가 한 번에 보여 사용자 입장에서 진입 장벽이 높았습니다.",
          "실수했을 때 처음부터 다시 작성해야 한다는 피드백이 있었습니다.",
          "게시글 조회 화면에서도 작성자와 일반 사용자의 액션을 동일하게 다루기 어려웠습니다.",
        ],
      },
      solution: {
        title: "Solution",
        description:
          "사용자 테스트를 바탕으로 게시글 생성 흐름을 퍼널 형태로 재구성하고, 조회 화면에서는 역할별 액션을 명확히 분기했습니다.",
        bullets: [
          "React Hook Form과 Zod를 활용해 단계별 유효성 검증을 적용하고, 모든 검증을 통과했을 때만 다음 단계로 이동하도록 설계했습니다.",
          "게시글 조회 전용 푸터를 분리해 작성자와 일반 사용자에게 서로 다른 행동 버튼을 노출했습니다.",
          "찜한 목록 페이지는 로컬스토리지와 페이지네이션을 결합해 사용자 입장에서 관리하기 쉬운 구조로 만들었습니다.",
        ],
      },
      result: {
        title: "Result",
        description:
          "게시글 생성 경험이 더 명확해졌고, 반응형 환경에서의 입력 피로도와 화면 복잡도를 함께 줄일 수 있었습니다.",
        bullets: [
          "단일 입력 화면을 퍼널 구조로 전환해 작성 과정을 더 자연스럽게 만들었습니다.",
          "작성자/일반 사용자 분기로 조회 화면의 행동 맥락이 명확해졌습니다.",
          "찜한 목록과 상태 오버레이를 통해 저장한 게시글 관리 경험도 개선했습니다.",
        ],
      },
      techStack: [
        {
          name: "Next.js",
          reason:
            "페이지 단위 분기와 라우팅 구조를 안정적으로 관리하기 좋았습니다.",
        },
        {
          name: "TypeScript",
          reason:
            "복잡한 폼 입력 값과 역할별 액션 분기를 안전하게 다룰 수 있었습니다.",
        },
        {
          name: "React Hook Form + Zod",
          reason:
            "다단계 입력 검증을 구조적으로 관리하고 즉각적인 피드백을 주는 데 적합했습니다.",
        },
        {
          name: "TanStack Query",
          reason:
            "참가자 목록과 게시글 상태를 서버 데이터와 빠르게 동기화하는 데 활용했습니다.",
        },
      ],
    },
  },
  {
    slug: "demodev-portfolio-rebuild",
    name: "Demodev Portfolio Rebuild",
    tagline:
      "인턴 기간 동안 자사 홈페이지와 포트폴리오 페이지 구조를 개선한 실무 경험",
    summary:
      "대모산 개발단 프론트엔드 인턴으로 근무하며 자사 홈페이지 섹션 애니메이션, 전역 레이아웃 개선, 포트폴리오 프로젝트 데이터 스키마 재설계를 담당했습니다.",
    period: "2026.02.01 - 2026.02.28",
    role: "프론트엔드 인턴 / 홈페이지 인터랙션, 포트폴리오 데이터 구조 개선",
    impact:
      "디자인 변경과 디바이스별 레이아웃 이슈를 데이터 구조 개선으로 해결하고, 신규 콘텐츠 추가가 쉬운 포트폴리오 구조를 정리",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Jira",
    ],
    featured: true,
    links: [
      {
        label: "회사 사이트 보기",
        href: "https://www.demodev.io/",
        external: true,
      },
      {
        label: "노션 기록",
        href: "https://www.notion.so/3181f1669d1080739a0be558220c5299",
        external: true,
      },
    ],
    detail: {
      overview:
        "포트폴리오 페이지 디자인이 바뀌면서 기존 이미지 스키마만으로는 화면 크기별 배치 대응이 어려웠고, 외부 링크 프로젝트와 내부 상세 페이지 프로젝트를 같은 방식으로 처리하는 데 한계가 있었습니다.",
      problem: {
        title: "Problem",
        description:
          "단일 컴포넌트 구조와 기존 이미지 레이아웃 스키마로는 데스크톱, 태블릿, 모바일을 모두 안정적으로 대응하기 어려웠고, 프로젝트 유형에 따른 이동 로직도 확장성이 낮았습니다.",
        bullets: [
          "디자인 시스템 정보 위치 변경으로 기존 레이아웃이 화면 크기에 따라 쉽게 깨졌습니다.",
          "외부 링크 프로젝트와 내부 상세 페이지 프로젝트를 같은 방식으로 관리하기 어려웠습니다.",
          "콘텐츠가 추가될수록 예외 흐름과 데이터 수정 포인트가 늘어날 가능성이 있었습니다.",
        ],
      },
      solution: {
        title: "Solution",
        description:
          "이미지 렌더링과 이동 흐름을 데이터 스키마 기준으로 재설계하고, 내부 상세 페이지가 필요한 항목만 정적으로 생성하는 방식으로 구조를 정리했습니다.",
        bullets: [
          "기존 `grid-1-2`, `grid-1-2-1` 스키마를 제거하고 `coverImage` 스키마를 도입해 디바이스별 이미지 렌더링 기준을 통합했습니다.",
          "`externalUrl` 유무만으로 외부 이동과 내부 상세 진입을 분기하도록 설계해 신규 프로젝트 추가 시 데이터 수정만으로 확장 가능하게 만들었습니다.",
          "내부 상세 페이지가 필요한 항목만 `generateStaticParams`로 정적으로 생성하고, 존재하지 않는 id는 404로 처리해 예외 흐름을 일관되게 관리했습니다.",
        ],
      },
      result: {
        title: "Result",
        description:
          "디자인 변경에 흔들리지 않는 데이터 구조를 만들었고, 콘텐츠 추가와 유지보수가 쉬운 포트폴리오 구조를 마련할 수 있었습니다.",
        bullets: [
          "최대 너비 확장 대응과 디바이스별 레이아웃 보완으로 반응형 완성도를 개선했습니다.",
          "프로젝트 데이터 구조를 정리해 신규 콘텐츠 추가와 유지보수 효율을 높였습니다.",
          "외부 링크와 내부 상세 페이지 분기를 데이터 기준으로 통일해 예외 처리와 확장성을 함께 개선했습니다.",
        ],
      },
      techStack: [
        {
          name: "Next.js App Router",
          reason:
            "정적 상세 페이지 생성과 예외 흐름 처리, 라우팅 분기를 구조적으로 관리하기 좋았습니다.",
        },
        {
          name: "TypeScript",
          reason:
            "프로젝트 스키마와 분기 조건을 명확히 타입으로 관리해 데이터 기반 확장을 안정적으로 진행할 수 있었습니다.",
        },
        {
          name: "Tailwind CSS",
          reason:
            "반응형 레이아웃과 공통 스타일 수정 사항을 빠르게 반영하기 좋았습니다.",
        },
        {
          name: "Framer Motion",
          reason:
            "자사 홈페이지 섹션 진입 애니메이션으로 콘텐츠 흐름을 더 자연스럽게 전달하는 데 활용했습니다.",
        },
      ],
    },
  },
];
