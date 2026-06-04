// 사이트 전반에서 쓰는 프로필/소개 데이터.
export const profile = {
  name: 'Kim Soyoung',
  handle: 'PlutoJoshua',
  role: 'AI Engineer · Product Builder',
  badge: 'AI Engineer · Product Builder · PlutoJoshua',
  headline: '외환, 금융, 매칭 문제를 AI 제품으로 풀어냅니다.',
  intro:
    '핀테크 스타트업에서 AI Engineer로 일하며 MCP, LangGraph, RAG, 금융 데이터를 연결해 실제 서비스 안에서 동작하는 AI 어시스턴트를 설계합니다. 반복 업무와 의사결정의 빈틈을 줄이는 제품을 만듭니다.',
  heroTags: ['LLM Agent', 'MCP', 'LangGraph', 'FinTech AI', 'Browser Automation', 'AI Matching'],
};

// 메인 hero 우측 "Currently" 카드.
export const currently = {
  label: 'Currently',
  title: '핀테크 스타트업 AI Engineer',
  description:
    '환율 예측 AI 시스템, MCP + LangGraph 기반 AI 에이전트, AI 연구과제 수행과 성과관리를 함께 다룹니다.',
};

export const metrics = [
  ['6+', 'AI / Data projects'],
  ['4y+', 'Operations & public-sector programs'],
  ['140+', 'Companies served in education ops'],
  ['150+', 'SME consulting projects supported'],
];

// About 페이지 본문.
export const about = {
  heading: '모르는 것을 빠르게 배우고, 동작하는 형태로 증명합니다.',
  paragraphs: [
    '데이터 분석과 LLM 개발 경험 위에 금융 도메인, 운영 경험, 제품 구현을 연결하고 있습니다.',
    '관심사는 단순한 데모가 아니라 사용자의 요청, 데이터, 의사결정, 실행까지 이어지는 AI 시스템입니다. 특히 외환/금융, 매칭 서비스, 브라우저 자동화, 워크플로 자동화 문제를 좋아합니다.',
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
