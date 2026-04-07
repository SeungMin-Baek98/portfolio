import type {
  AboutSection,
  ContactContent,
  HeroContent,
  NavigationItem,
  Strength,
  TechStackGroup,
} from "@/types/portfolio";

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroContent: HeroContent = {
  name: "백승민",
  role: "Frontend Developer",
  headline: "문제를 구조화하고, 사용자 경험으로 연결하는 프론트엔드 포트폴리오",
  description:
    "기능 구현 자체보다 왜 이 화면이 필요한지, 어떤 불편을 줄이는지, 팀이 이후에도 유지보수할 수 있는 구조인지까지 함께 고민하는 개발자를 목표로 합니다. 현재 텍스트는 예시 문구이며, 추후 실제 경험으로 자연스럽게 교체할 수 있도록 분리된 mock 데이터로 구성했습니다.",
  ctas: [
    { label: "프로젝트 보기", href: "/projects" },
    { label: "GitHub 보기", href: "https://github.com/", external: true },
  ],
  highlights: [
    { label: "중점", value: "문제 정의부터 결과 정리까지" },
    { label: "작업 방식", value: "읽기 쉬운 구조와 재사용 가능한 UI" },
    { label: "관심사", value: "성능, 문서화, 사용자 흐름 개선" },
  ],
};

export const keyStrengths: Strength[] = [
  {
    title: "문제 해결",
    summary: "증상보다 원인을 먼저 찾는 방식",
    detail:
      "이슈를 바로 수정하기보다 사용자 흐름과 데이터 흐름을 함께 보며 재발 가능성을 줄이는 접근을 선호합니다.",
  },
  {
    title: "사용자 경험",
    summary: "가독성과 흐름을 우선하는 UI 설계",
    detail:
      "화려한 연출보다 필요한 정보가 자연스럽게 읽히고 행동으로 이어지는 인터랙션을 중요하게 생각합니다.",
  },
  {
    title: "협업",
    summary: "문서화와 공통 언어를 만드는 개발",
    detail:
      "구현 의도와 기술 선택 이유를 남겨서 다음 작업자도 빠르게 이어갈 수 있는 구조를 만드는 편입니다.",
  },
];

export const techStackGroups: TechStackGroup[] = [
  {
    category: "Front-End",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "State & Data",
    items: ["TanStack Query", "Zustand", "Supabase"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Framer Motion", "Storybook"],
  },
  {
    category: "Collaboration",
    items: ["GitHub", "Notion", "Jira", "Discord"],
  },
  {
    category: "Tooling",
    items: ["VSCode", "Codex"],
  },
];

export const aboutIntro =
  "프론트엔드 개발은 화면을 만드는 일에서 끝나지 않고, 사용자와 팀이 더 적은 마찰로 목표에 도달하도록 돕는 일이라고 생각합니다. 이 페이지의 내용은 모두 예시 데이터로 작성되어 있으며, 실제 포트폴리오 문장으로 교체하기 쉬운 구조를 유지했습니다.";

export const aboutSections: AboutSection[] = [
  {
    title: "개발자로서 중요하게 생각하는 점",
    description:
      "실제 프로젝트를 설명할 때도 구현 결과만 나열하기보다, 어떤 맥락에서 무엇을 판단했는지 보여줄 수 있도록 섹션을 나눴습니다.",
    items: [
      {
        title: "의도를 먼저 설명하는 코드",
        description:
          "컴포넌트 구조와 데이터 흐름이 자연스럽게 읽히도록 만들고, 반복되는 패턴은 공통 레이어로 분리합니다.",
      },
      {
        title: "사용자 기준의 우선순위",
        description:
          "기능 추가보다 먼저 사용자가 지금 무엇을 이해하기 어려워하는지, 어디에서 이탈하는지 살피는 편입니다.",
      },
    ],
  },
  {
    title: "강점과 업무 방식",
    description:
      "지속적으로 다루게 될 화면일수록 즉흥적인 해결보다 구조적인 정리가 중요하다고 생각합니다.",
    items: [
      {
        title: "작은 단위로 나누는 설계",
        description:
          "페이지는 섹션 단위, 섹션은 카드와 정보 블록 단위로 나눠 이후 수정 범위를 줄입니다.",
      },
      {
        title: "타입과 mock 데이터 분리",
        description:
          "디자인과 데이터가 결합되지 않도록 분리해두면 실제 콘텐츠를 반영할 때 UI를 거의 건드리지 않아도 됩니다.",
      },
    ],
  },
  {
    title: "협업, 문서화, 구조 설계",
    description:
      "팀으로 일할 때는 코드 결과물뿐 아니라 전달 방식도 중요하다고 생각합니다.",
    items: [
      {
        title: "문제와 해결 과정을 기록",
        description:
          "왜 이 선택을 했는지 남겨두면 회고나 후속 작업에서 같은 논의를 반복하지 않아도 됩니다.",
      },
      {
        title: "디자인 토큰 중심의 스타일 시스템",
        description:
          "색상, 타이포, 여백, 반경, 그림자를 토큰으로 묶어두면 전체 분위기를 바꿀 때도 수정 포인트가 명확합니다.",
      },
    ],
  },
];

export const contactContent: ContactContent = {
  title: "함께 이야기하고 싶은 주제가 있다면 편하게 연락 주세요",
  description:
    "아래 정보 역시 예시 값입니다. 실제 계정과 링크로 교체하면 동일한 UI 구조를 그대로 사용할 수 있습니다.",
  items: [
    {
      label: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
      note: "프로젝트 문의, 협업 제안, 포지션 관련 연락",
    },
    {
      label: "GitHub",
      value: "github.com/example",
      href: "https://github.com/",
      note: "코드와 사이드 프로젝트, 실험 기록",
    },
    {
      label: "Notion / Blog",
      value: "notion.so/example",
      href: "https://www.notion.so/",
      note: "문제 해결 기록과 문서화 예시",
    },
  ],
  note: "빠른 답변이 필요한 경우 이메일로 연락 주시면 가장 먼저 확인합니다.",
};
