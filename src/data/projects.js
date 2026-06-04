// 프로젝트 목록. group 으로 3단 섹션 분류:
//   'featured'   — 메인 추천
//   'opensource' — 오픈소스/협업
//   'automation' — 자동화 실험
// links: { github, demo } — 없으면 internal/private 표기.
// private 한 레포는 caseStudy:true 로 두고 링크 대신 "Case study" 표기.
export const projects = [
  // ───────── Featured ─────────
  {
    name: 'Hedge Decision Engine',
    category: 'AI · Finance',
    status: '진행중',
    group: 'featured',
    year: '2024 –',
    role: 'ML Engineer',
    description: 'USD/KRW 환율 방향을 예측하고 환헤지 의사결정을 돕는 금융 AI 엔진입니다.',
    highlights: [
      '10년 환율 데이터 + 매크로·크로스레이트 피처 엔지니어링',
      'TFT·N-BEATS·CRNN 앙상블로 방향성 예측',
      '환헤지 의사결정 시그널 산출',
    ],
    stack: ['Python', 'TFT', 'N-BEATS', 'CRNN'],
    links: {},
    caseStudy: true,
  },
  {
    name: 'FinOrbit',
    category: 'Multi-Agent · Finance',
    status: '진행중',
    group: 'featured',
    year: '2024 –',
    role: 'AI Engineer',
    description: 'Planner·Trader·Risk Manager 에이전트가 협업하는 금융 멀티 에이전트 트레이딩 시스템입니다.',
    highlights: [
      'LangGraph 기반 Planner / Trader / Risk Manager 구조',
      'FastAPI 백엔드로 에이전트 오케스트레이션',
      '리스크 통제와 의사결정 흐름 분리',
    ],
    stack: ['FastAPI', 'LangGraph', 'Python'],
    links: {},
    caseStudy: true,
  },
  {
    name: 'Builder',
    category: 'Multi-Agent System',
    status: '심사중',
    group: 'featured',
    year: '2024',
    role: 'Creator',
    description:
      '아이디어 → 기획 → 디자인 → 개발 → 배포까지 이어지는 멀티 에이전트 제품 개발 파이프라인입니다.',
    highlights: [
      '기획·설계·구현 에이전트 파이프라인',
      'Google ADK + LiteLLM 멀티 LLM 오케스트레이션',
      'Human-in-the-loop 검수 단계',
    ],
    stack: ['FastAPI', 'Next.js', 'Google ADK', 'LiteLLM'],
    links: { github: 'https://github.com/PlutoJoshua/Builder' },
  },
  {
    name: 'amuguna',
    category: 'Voice · Multimodal',
    status: '완료',
    group: 'featured',
    year: '2024',
    role: 'Developer · Kakao AI Ambassador',
    description:
      '음성 톤에서 숨은 선호를 읽어 "아무거나"라는 말 뒤의 진짜 의도를 찾아주는 멀티모달 의사결정 도우미입니다.',
    highlights: [
      'Kanana-o 1.5 멀티모달 모델로 감정·의도 분석',
      '대화 기반(Mode A) + 메뉴 사진 분석(Mode B)',
      'Flutter 크로스플랫폼 (iOS · Android · macOS)',
    ],
    stack: ['Flutter', 'Dart', 'Kanana-o API', 'Riverpod'],
    links: { github: 'https://github.com/PlutoJoshua/amuguna' },
  },

  // ───────── Open Source / Collaboration ─────────
  {
    name: 'FinAgent Investment Agent',
    category: 'Multi-Agent · Finance',
    status: '협업',
    group: 'opensource',
    year: '2024',
    role: 'Contributor',
    description: 'LangGraph 기반 개인화 투자 자문 멀티 에이전트. Bull/Bear/Balanced 토론과 KYC, RAG로 리포트를 생성합니다.',
    highlights: [
      'Bull·Bear·Balanced 토론 + Judge 종합',
      'KYC 인터뷰 · SQL/RAG/API 리트리버',
      'Markdown 투자 리포트 자동 생성',
    ],
    stack: ['LangGraph', 'FastAPI', 'Supabase', 'BGE-M3'],
    links: { github: 'https://github.com/FinAgent-Lab/FinAgent_Investment_Agent' },
    org: 'FinAgent-Lab',
  },
  {
    name: 'Market Analysis Agent',
    category: 'Multi-Agent · Finance',
    status: '협업',
    group: 'opensource',
    year: '2024',
    role: 'Contributor',
    description: 'Supervisor가 뉴스 검색·리포트 에이전트를 조율하는 금융 시장 분석 멀티 에이전트 시스템입니다.',
    highlights: [
      'Supervisor 노드 기반 멀티 에이전트 조율',
      'Naver News Searcher + Report Assistant',
      'Docker · OpenWebUI 파이프라인 지원',
    ],
    stack: ['LangGraph', 'FastAPI', 'LangChain', 'Docker'],
    links: { github: 'https://github.com/FinAgent-Lab/market-analysis-team' },
    org: 'FinAgent-Lab',
    stars: 15,
  },
  {
    name: 'GenieNavi',
    category: 'RAG · QA Bot',
    status: '완료',
    group: 'opensource',
    year: '2023',
    role: 'Developer',
    description: 'OpenSearch와 LLM을 활용해 교육 운영 문의에 답하는 RAG 기반 QA 챗봇입니다. (초기 RAG 프로젝트)',
    highlights: [
      'OpenSearch 기반 문서 검색 + RAG',
      'FastAPI · AWS 배포',
      '프롬프트 엔지니어링으로 답변 품질 개선',
    ],
    stack: ['Python', 'OpenSearch', 'FastAPI', 'AWS', 'LLM'],
    links: { github: 'https://github.com/bgmbgm94/Big_07_Doc_Project' },
    org: 'team project',
  },

  // ───────── Automation Experiments ─────────
  {
    name: 'NewsScrap',
    category: 'Automation Pipeline',
    status: '완료',
    group: 'automation',
    year: '2024',
    role: 'Creator',
    description: '뉴스 수집 → AI 요약 → TTS → 자막 → 영상 합성 → 유튜브 업로드까지 자동화하는 숏츠 생성 파이프라인입니다.',
    highlights: [
      'RSS 수집 + AI 요약 + TTS + 영상 합성',
      'Gemma 3 / OpenAI / Claude 교체 가능',
      'YouTube Data API 자동 업로드',
    ],
    stack: ['Python', 'moviepy', 'edge-tts', 'YouTube API'],
    links: { github: 'https://github.com/PlutoJoshua/NewsScrap' },
  },
  {
    name: '사내 AI 챗봇',
    category: 'AI · FinTech',
    status: '진행중',
    group: 'automation',
    year: '2024 –',
    role: 'AI Engineer',
    description: 'MCP와 LangGraph로 외환 서비스의 조회·분석·안내 흐름을 자동화하는 사내 AI 어시스턴트입니다.',
    highlights: ['외환 조회·분석·안내 흐름 자동화', 'LangGraph 상태 기반 멀티스텝 대화'],
    stack: ['MCP', 'LangGraph', 'Python', 'FX Data'],
    links: {},
  },
  {
    name: 'instatoon Pipeline',
    category: 'Generative · Content',
    status: '진행중',
    group: 'automation',
    year: '2025',
    role: 'Creator',
    description:
      '캐릭터 웹툰 컷을 자동 생성하는 인스타그램 콘텐츠 파이프라인. 이미지는 그림만, 텍스트는 전부 분리해 Canva에서 합성합니다.',
    highlights: [
      '이미지/텍스트 완전 분리 — 대사 수정 시 이미지 재생성 불필요',
      '3중 텍스트 누수 방어 (프롬프트·Pydantic·OCR 가드)',
      'SDXL + IP-Adapter / LoRA 캐릭터 일관성',
      'LLM 스토리보드 → 이미지 → Canva Bulk Create XLSX',
    ],
    stack: ['Python', 'SDXL', 'diffusers', 'Ollama', 'EasyOCR'],
    links: {},
    caseStudy: true,
  },
  {
    name: 'project-velocity',
    category: 'Automation · Content',
    status: '운영중',
    group: 'automation',
    year: '2024 –',
    role: 'Creator',
    description:
      'Markdown 글 하나를 명령어 한 줄로 WordPress 초안까지 발행하는 콘텐츠 파이프라인입니다. (from0lab.com 운영, 16+ 글)',
    highlights: [
      'sha256 멱등 이미지 업로드 — 같은 이미지는 재업로드 안 함',
      'term_exists 경쟁 조건 복구 · 지수 백오프 재시도',
      'draft-first 발행으로 오발행 차단',
      'frontmatter 파싱 + Markdown→HTML 변환',
    ],
    stack: ['Python', 'WordPress REST API', 'requests', 'pydantic-settings'],
    links: { demo: 'https://from0lab.com' },
  },
];

// 섹션 메타. Projects 페이지에서 group 별로 묶어 렌더.
export const projectGroups = [
  {
    key: 'featured',
    label: 'Featured Projects',
    title: 'AI가 실제로 일하게 만드는 프로젝트들.',
    description: '금융 AI 에이전트, 제품 개발 에이전트, 멀티모달 소비자 앱까지. 데모를 넘어 동작하는 시스템을 만듭니다.',
  },
  {
    key: 'opensource',
    label: 'Open Source · Collaboration',
    title: '함께 만든 오픈소스 에이전트들.',
    description: '팀·오픈소스로 진행한 금융 멀티 에이전트와 RAG 프로젝트입니다.',
  },
  {
    key: 'automation',
    label: 'Automation Experiments',
    title: '반복을 자동화하는 실험들.',
    description: '콘텐츠 파이프라인과 사내 워크플로 자동화 실험입니다.',
  },
];
