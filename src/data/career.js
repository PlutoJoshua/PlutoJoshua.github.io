// 경력 타임라인. 최신순으로 정렬해 렌더. current:true 는 accent 강조.
// TODO: 실제 경력으로 교체 — 아래는 구조 확인용 플레이스홀더.
export const career = [
  {
    id: 'cuunit-ai-engineer',
    company: 'CuUnit',
    role: 'AI Engineer',
    period: { start: '2024.01', end: 'Present' },
    location: 'Seoul, KR',
    summary: 'MCP/LangGraph 기반 FX AI 어시스턴트와 환율 예측 시스템을 설계·구현합니다.',
    highlights: [
      'MCP + LangGraph 기반 AI 에이전트 설계',
      '환율 예측 AI 시스템 모델링',
      'AI 연구과제 수행 및 성과관리',
    ],
    stack: ['MCP', 'LangGraph', 'Python', 'FastAPI'],
    current: true,
  },
  {
    id: 'placeholder-prev-role',
    company: '이전 소속 (예시)',
    role: 'Data / Operations',
    period: { start: '2020.03', end: '2023.12' },
    location: 'Seoul, KR',
    summary: '교육·공공 프로그램 운영과 데이터 분석 업무를 담당했습니다. (플레이스홀더)',
    highlights: [
      '140+ 기업 대상 교육 운영',
      '150+ 중소기업 컨설팅 프로젝트 지원',
      '운영 데이터 분석 및 리포팅',
    ],
    stack: ['Python', 'Pandas', 'SQL'],
    current: false,
  },
];
