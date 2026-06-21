// 사이트 전반에서 쓰는 프로필/소개 데이터.
export const profile = {
  name: 'Kim Soyoung',
  handle: 'PlutoJoshua',
  role: 'AI Engineer · Product Builder',
  badge: 'AI Engineer building agents and automation for finance operations',
  headline: '업무의 맥락과 데이터를 연결하여 AI가 실제로 일하는 제품을 설계하고 구현합니다.',
  intro:
    '핀테크 스타트업에서 LangGraph, RAG, Text-to-SQL, 자동화 파이프라인을 설계하고 실제 서비스에 연결합니다. CS 응대, 금융 뉴스 발행, 회의록 작성, 환율 예측처럼 반복되거나 판단이 필요한 업무를 줄이는 AI 시스템을 만듭니다.',
  heroTags: ['LLM Agent', 'LangGraph', 'RAG', 'Text-to-SQL', 'FinTech AI', 'Workflow Automation'],
};

// 메인 hero 우측 "Currently" 카드.
export const currently = {
  label: 'Currently',
  title: '핀테크 스타트업 AI Engineer',
  description:
    '금융 서비스 안에서 LangGraph 기반 AI 에이전트, RAG CS 자동화, 금융 뉴스 발행 파이프라인, STT 회의 요약, WordPress 자동 발행, 환율 예측 모델을 설계·개발합니다.',
};

export const metrics = [
  ['10+', 'AI / automation projects'],
  ['300+', 'AI news operation days'],
  ['20%', 'CS workload reduced'],
  ['100+', 'Meetings summarized'],
  ['3min', 'WordPress draft publish'],
  ['67.75%', 'FX 4h holdout accuracy'],
];

// About 페이지 본문.
export const about = {
  heading: 'AI를 탐구하고, 실제 업무에 붙여 동작하게 만듭니다.',
  paragraphs: [
    '저는 모델을 호출하는 데서 끝나는 기능보다, 사용자의 요청을 이해하고 내부 데이터와 도구를 연결해 실제 실행까지 이어지는 AI 시스템에 관심이 많습니다.',
    'LangGraph 에이전트, RAG, Text-to-SQL, STT, 브라우저 자동화처럼 업무 흐름 안에 들어가는 기술을 설계하고 구현합니다. 좋은 AI 제품은 멋진 응답보다 사람이 반복 업무에서 벗어나 더 중요한 판단을 하게 만드는 시스템이라고 생각합니다.',
  ],
};

// "What I'm Building Next" 블록.
export const buildingNext = {
  heading: 'AI로 사람과 전문가를 더 잘 연결하는 매칭 서비스를 구상하고 있습니다.',
  paragraphs: [
    '요청서 작성, 전문가 탐색, 견적 비교, 상담 요약, 후속 액션까지 AI가 도와주는 숨고형 서비스가 다음 관심사입니다.',
    '목표는 단순 추천이 아니라 사용자의 상황을 이해하고, 필요한 서비스를 구조화하고, 적합한 전문가와 연결하는 제품입니다.',
  ],
  cta: { label: 'Follow the build', href: 'https://github.com/PlutoJoshua' },
};

// About 맨 아래 "Let's talk" CTA 섹션.
export const contact = {
  label: "Let's talk",
  heading: '함께 만들 문제가 있다면 편하게 연락 주세요.',
  paragraphs: [
    '새로운 문제와 협업 기회에 열려 있습니다. AI 에이전트, 금융 데이터, 자동화에 관한 이야기라면 더 반갑습니다.',
    '커피챗도 언제든 환영합니다. LinkedIn이나 이메일로 편하게 연락 주세요.',
  ],
  actions: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/soyoung-kim-184960303', icon: 'Linkedin', primary: true },
    { label: 'Email', href: 'mailto:thdude37@gmail.com', icon: 'Mail' },
  ],
};

// 헤더/hero의 외부 링크. icon은 문자열 key (렌더 컴포넌트에서 매핑).
export const links = [
  { label: 'GitHub', href: 'https://github.com/PlutoJoshua', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/soyoung-kim-184960303', icon: 'Linkedin' },
  { label: 'Blog', href: 'https://from0lab.com', icon: 'Globe2' },
  { label: 'Contact', href: 'mailto:thdude37@gmail.com', icon: 'Mail', muted: true },
];
