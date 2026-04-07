import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "checkout-flow-redesign",
    name: "Checkout Flow Redesign",
    tagline: "구매 전환을 높이기 위해 결제 흐름을 단순화한 프로젝트",
    summary:
      "복잡한 입력 단계와 불명확한 상태 피드백을 정리해, 사용자가 결제 완료까지 더 짧은 경로로 도달하도록 화면과 상태 관리를 재설계한 사례입니다.",
    period: "2025.01 - 2025.03",
    role: "프론트엔드 개발 / UX 개선 제안 / API 연동 구조 정리",
    impact: "입력 단계 축소와 오류 피드백 정리로 이탈 구간을 줄이는 것을 목표로 진행",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form"],
    featured: true,
    links: [
      { label: "목록으로 돌아가기", href: "/projects" },
      { label: "GitHub 예시", href: "https://github.com/", external: true },
    ],
    detail: {
      overview:
        "여러 입력 영역이 한 화면에 밀집되어 있고 오류 메시지가 늦게 노출되는 구조 때문에 사용자가 어디를 수정해야 하는지 즉시 이해하기 어려운 상태였습니다.",
      problem: {
        title: "Problem",
        description:
          "필수 입력과 선택 입력이 섞여 있었고, 서버 응답 이후에만 오류가 보여 사용자가 같은 시도를 반복하게 되는 문제가 있었습니다.",
        bullets: [
          "구매 단계별 현재 위치가 명확하지 않아 이탈 지점 파악이 어려웠습니다.",
          "폼 검증 로직이 화면 컴포넌트마다 분산되어 유지보수 비용이 높았습니다.",
          "모바일 환경에서 스크롤 거리가 길어 핵심 CTA 도달이 늦었습니다.",
        ],
      },
      solution: {
        title: "Solution",
        description:
          "입력 단계를 정보 구조 기준으로 다시 묶고, 즉시성 있는 유효성 검증과 요약 패널을 추가해 흐름을 단순화했습니다.",
        bullets: [
          "폼 상태를 공통 스키마 기반으로 정리해 검증 규칙을 한 곳에서 관리했습니다.",
          "모바일에서는 CTA와 주문 요약이 자연스럽게 이어지도록 섹션 순서를 조정했습니다.",
          "오류 메시지는 입력 필드와 상단 요약 영역에 함께 보여 사용자가 수정 위치를 빠르게 찾을 수 있게 했습니다.",
        ],
      },
      result: {
        title: "Result",
        description:
          "실측 수치 대신 예시 문구로 구성했지만, 포트폴리오에서는 개선 전후 흐름과 판단 근거를 보여주기 좋은 구조입니다.",
        bullets: [
          "사용자 테스트 기준으로 결제 완료까지 걸리는 단계 인지가 더 쉬워졌습니다.",
          "입력 오류 수정 동선이 짧아져 반복 제출이 줄어드는 방향을 확인했습니다.",
          "폼 구조가 일관돼 신규 옵션 추가 시 변경 범위가 줄었습니다.",
        ],
      },
      techStack: [
        {
          name: "Next.js App Router",
          reason: "정적 정보와 상호작용 영역을 분리해 구조적으로 관리하기 좋았습니다.",
        },
        {
          name: "TypeScript",
          reason: "입력 데이터와 응답 형태를 타입으로 고정해 UI 변경 시 안정성을 높였습니다.",
        },
        {
          name: "Tailwind CSS",
          reason: "디자인 토큰과 함께 사용해 반복되는 카드와 섹션 패턴을 빠르게 정리했습니다.",
        },
      ],
    },
  },
  {
    slug: "design-system-dashboard",
    name: "Design System Dashboard",
    tagline: "컴포넌트 사용 기준과 문서를 한곳에 모은 내부 운영 대시보드",
    summary:
      "컴포넌트 스펙과 사용 예시가 흩어져 있던 문제를 해결하기 위해, 디자인 토큰과 문서를 함께 다루는 내부 페이지를 구성한 프로젝트입니다.",
    period: "2024.10 - 2024.12",
    role: "프론트엔드 개발 / 문서 구조 설계 / 공통 컴포넌트 설계",
    impact: "운영 문서와 실제 UI 기준을 연결해 협업 비용을 줄이는 것을 목표로 진행",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
    featured: true,
    links: [
      { label: "목록으로 돌아가기", href: "/projects" },
      { label: "문서 예시", href: "https://www.notion.so/", external: true },
    ],
    detail: {
      overview:
        "디자인 변경사항이 문서에는 반영되지만 코드에는 늦게 적용되거나, 반대로 코드 기준이 문서에 남지 않는 상황이 반복되고 있었습니다.",
      problem: {
        title: "Problem",
        description:
          "팀 공통 언어가 부족해 컴포넌트 명칭과 상태 표현이 매번 달라지고, 새로운 화면을 만들 때도 기존 패턴을 찾기 어려웠습니다.",
        bullets: [
          "색상과 여백이 화면마다 미세하게 달라 일관성이 흔들렸습니다.",
          "디자인 리뷰 시 기준 화면과 실제 구현 화면을 번갈아 확인해야 했습니다.",
          "신규 입사자가 구조를 익히는 데 시간이 오래 걸렸습니다.",
        ],
      },
      solution: {
        title: "Solution",
        description:
          "토큰, 컴포넌트 예시, 사용 가이드를 하나의 페이지 흐름에서 보도록 설계해 검색 비용을 줄였습니다.",
        bullets: [
          "색상, 타이포, 여백, 반경, 그림자를 토큰 단위로 분리해 재사용 구조를 만들었습니다.",
          "카드, 버튼, 리스트 패턴을 공통 컴포넌트로 정리해 문서와 실제 구현을 연결했습니다.",
          "화면별로 어떤 조합을 사용해야 하는지 예시 섹션을 추가했습니다.",
        ],
      },
      result: {
        title: "Result",
        description:
          "구현 결과 자체보다도 팀이 같은 기준으로 빠르게 합의할 수 있는 환경을 만드는 데 초점을 맞춘 사례입니다.",
        bullets: [
          "컴포넌트 선택 기준이 명확해져 중복 구현이 줄어드는 효과를 기대할 수 있었습니다.",
          "디자인 QA 과정에서 확인 포인트가 정리되어 커뮤니케이션이 간결해졌습니다.",
          "토큰 변경만으로 전체 분위기를 조정할 수 있는 기반이 생겼습니다.",
        ],
      },
      techStack: [
        {
          name: "Next.js",
          reason: "문서형 콘텐츠와 인터랙티브 데모를 한 프로젝트에서 관리하기 편리했습니다.",
        },
        {
          name: "TypeScript",
          reason: "컴포넌트 속성과 문서 데이터 구조를 맞춰 관리하기 좋았습니다.",
        },
        {
          name: "Storybook",
          reason: "대시보드에서 설명한 UI 상태를 별도 환경에서도 검증할 수 있게 했습니다.",
        },
      ],
    },
  },
  {
    slug: "support-center-ia-refresh",
    name: "Support Center IA Refresh",
    tagline: "고객센터 정보 구조를 재정리해 탐색 시간을 줄인 프로젝트",
    summary:
      "FAQ와 문의 흐름이 중복되던 문제를 해결하기 위해 정보 구조를 정리하고, 검색 중심 화면에서 카테고리 중심 흐름으로 일부 전환한 작업입니다.",
    period: "2024.06 - 2024.08",
    role: "프론트엔드 개발 / 정보 구조 정리 / 반응형 UI 구현",
    impact: "사용자가 스스로 답을 찾는 시간을 줄이고 문의 전환을 돕는 흐름을 설계",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    links: [{ label: "목록으로 돌아가기", href: "/projects" }],
    detail: {
      overview:
        "검색 결과 품질이 일정하지 않아 사용자가 관련 없는 문서를 여러 번 확인해야 했고, 결국 문의하기 버튼만 찾는 흐름이 반복되었습니다.",
      problem: {
        title: "Problem",
        description:
          "질문 의도가 비슷한 문서가 여러 카테고리에 중복 배치되면서 탐색 흐름이 복잡해진 상태였습니다.",
        bullets: [
          "모바일에서 카테고리 진입 경로가 깊어 원하는 항목까지 도달하기 어려웠습니다.",
          "검색 실패 이후 대체 행동이 명확히 안내되지 않았습니다.",
          "문서 구조가 분산되어 운영자가 콘텐츠를 정리하기도 불편했습니다.",
        ],
      },
      solution: {
        title: "Solution",
        description:
          "대표 시나리오별 진입점을 먼저 보여주고, 문서 탐색과 문의 행동을 같은 흐름 안에서 배치했습니다.",
        bullets: [
          "상위 카테고리를 사용자 과업 기준으로 재정의했습니다.",
          "검색 결과가 비어 있거나 모호할 때 바로 이어질 추천 섹션을 추가했습니다.",
          "반응형 레이아웃에서 카드 간 우선순위가 유지되도록 배치 구조를 조정했습니다.",
        ],
      },
      result: {
        title: "Result",
        description:
          "포트폴리오 관점에서는 정보 구조를 어떻게 나누고, 탐색 실패 상황을 어떻게 보완했는지 설명하기 좋은 프로젝트입니다.",
        bullets: [
          "검색 중심에서 과업 중심 탐색으로 이동하는 흐름을 제안할 수 있었습니다.",
          "사용자가 다음 행동을 찾지 못해 머무는 시간을 줄이는 방향으로 개선했습니다.",
          "문서 관리 기준이 정리되어 운영 효율 향상을 기대할 수 있었습니다.",
        ],
      },
      techStack: [
        {
          name: "Next.js",
          reason: "라우트 단위로 정보 구조를 명확히 나누고 페이지별 메타 정보 관리가 쉬웠습니다.",
        },
        {
          name: "Tailwind CSS",
          reason: "카드와 리스트 패턴을 빠르게 실험하며 가독성을 조정하기 좋았습니다.",
        },
      ],
    },
  },
  {
    slug: "analytics-admin-performance",
    name: "Analytics Admin Performance",
    tagline: "운영 대시보드의 렌더링 부담을 줄여 체감 성능을 개선한 프로젝트",
    summary:
      "데이터 카드와 필터 UI가 한 번에 갱신되며 발생하던 지연을 줄이기 위해 렌더링 구조와 사용자 피드백 방식을 정리한 사례입니다.",
    period: "2024.02 - 2024.04",
    role: "프론트엔드 개발 / 성능 개선 / 상태 분리",
    impact: "체감 지연을 줄이고, 필터 조작에 대한 피드백을 더 명확하게 제공",
    technologies: ["Next.js", "TypeScript", "React", "Chart Library"],
    featured: false,
    links: [{ label: "목록으로 돌아가기", href: "/projects" }],
    detail: {
      overview:
        "필터를 변경할 때 차트와 표, 요약 카드가 동시에 재렌더링되면서 대기 시간이 길게 느껴지는 상황이 있었습니다.",
      problem: {
        title: "Problem",
        description:
          "사용자는 데이터가 실제로 로딩 중인지, 클릭이 반영되지 않은 것인지 판단하기 어려웠고 반복 조작이 발생했습니다.",
        bullets: [
          "무거운 시각화 컴포넌트가 필터 상태 변화에 과도하게 반응했습니다.",
          "로딩 상태가 화면 전체에만 표현돼 현재 바뀌는 영역을 알기 어려웠습니다.",
          "필터 상태와 조회 조건 상태가 분리되지 않아 의도치 않은 재호출이 있었습니다.",
        ],
      },
      solution: {
        title: "Solution",
        description:
          "상태를 조회 조건과 입력 중 상태로 분리하고, 카드 영역마다 필요한 피드백을 다르게 제공하도록 바꿨습니다.",
        bullets: [
          "요약 카드와 차트 영역을 분리해 변경 범위를 좁혔습니다.",
          "데이터가 바뀌는 영역에만 스켈레톤과 상태 문구를 보여주도록 조정했습니다.",
          "필터 조작 직후에는 즉시 반응을 주고 실제 조회는 명시적 액션 이후 실행되도록 구조를 정리했습니다.",
        ],
      },
      result: {
        title: "Result",
        description:
          "성능 최적화 자체보다, 체감 지연을 줄이는 UI 피드백 설계를 함께 보여줄 수 있는 예시 프로젝트입니다.",
        bullets: [
          "반복 클릭을 줄이고 현재 상태를 이해하기 쉬운 화면으로 정리했습니다.",
          "무거운 영역의 갱신 범위를 줄여 유지보수 관점에서도 구조가 단순해졌습니다.",
        ],
      },
      techStack: [
        {
          name: "TypeScript",
          reason: "복잡한 필터와 조회 조건을 명확히 구분하기 위한 타입 모델링에 유용했습니다.",
        },
        {
          name: "React",
          reason: "입력 중 상태와 조회 상태를 분리해 화면 반응성을 높이기 좋았습니다.",
        },
      ],
    },
  },
];
