// 경력 타임라인. group 으로 Tech / Previous 분류, 각 그룹 내 최신순 렌더.
// current:true 는 accent 강조.
export const career = [
  // ───────── Tech ─────────
  {
    id: 'cuunit',
    group: 'tech',
    company: 'Currency United',
    role: 'AI Engineer',
    period: { start: '2025.02', end: '현재' },
    location: 'Seoul, KR',
    summary: '환율 예측 AI 시스템과 MCP·LangGraph 기반 AI 에이전트를 설계·개발합니다.',
    highlights: [
      '환율 예측 AI 시스템 개발',
      'MCP + LangGraph 기반 AI 에이전트 설계',
      'AI 연구과제 수행 및 성과관리 (IRIS, TIPS)',
    ],
    stack: ['MCP', 'LangGraph', 'Python'],
    current: true,
  },
  {
    id: 'chunjae',
    group: 'tech',
    company: '(주)천재교육',
    role: '데이터분석 · LLM',
    period: { start: '2024.09', end: '2024.12' },
    location: 'Seoul, KR',
    summary: '교육 데이터 분석과 LLM 기반 챗봇 개발, 의사결정 자료 제작을 담당했습니다.',
    highlights: [
      '감정 / 주제 / 장소 분석, 챗봇 개발',
      '교원 연수 의사결정 자료 제작',
    ],
    stack: ['Python', 'LLM', 'NLP'],
    current: false,
  },

  // ───────── Previous ─────────
  {
    id: 'fsi',
    group: 'previous',
    company: '금융보안원',
    role: '교육사업팀',
    period: { start: '2019.01', end: '2023.01' },
    location: 'Seoul, KR',
    summary: '온라인 교육과 LMS 운영, 대규모 과정 운영과 민원 응대를 담당했습니다.',
    highlights: [
      '온라인 교육 운영 · LMS 운영',
      '연 140개사 · 40개 과정 운영',
      '3,000건 민원 응대',
    ],
    stack: [],
    current: false,
  },
  {
    id: 'katech-foundation',
    group: 'previous',
    company: '자동차부품산업진흥재단',
    role: '기술지도실',
    period: { start: '2014.10', end: '2018.08' },
    location: 'Korea',
    summary: '정부사업 행정과 스마트공장사업을 운영하며 중소기업 설비·컨설팅을 지원했습니다.',
    highlights: [
      '정부사업 행정 · 스마트공장사업 운영',
      '연 150개 중소기업 설비 / 컨설팅 지원',
    ],
    stack: [],
    current: false,
  },
];

// 섹션 메타. Career 페이지에서 group 별로 묶어 렌더.
export const careerGroups = [
  { key: 'tech', label: '🚀 Tech' },
  { key: 'previous', label: '📋 Previous' },
];
