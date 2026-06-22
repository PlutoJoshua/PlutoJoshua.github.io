// 프로젝트 목록. group 으로 3단 섹션 분류:
//   'featured'   - 메인 추천
//   'opensource' - 오픈소스/협업
//   'automation' - 자동화 실험
// links: { github, demo } - 없으면 internal/private 표기.
// private 한 레포는 caseStudy:true 로 두고 링크 대신 "Case study" 표기.
export const projects = [
  // ───────── Featured ─────────
  {
    name: 'Quantisight AI Finance Agent',
    category: 'Financial Analysis · AI Agent',
    status: '운영중',
    group: 'featured',
    year: '2026',
    role: 'Development Lead · Backend Architect',
    description:
      'Quantisight의 자연어 금융 분석 요청을 데이터 수집, 분석 코드 실행, 차트 생성, 결과 검증까지 연결하는 LangGraph 기반 멀티 에이전트 백엔드입니다.',
    highlights: [
      '개발 리더로 4-agent 금융 분석 워크플로우와 MessageBus 기반 LangGraph 아키텍처 설계·구현',
      '국내외 금융 데이터 도구 10종+ 연동으로 자연어 기반 주식·거시경제 분석 커버리지 확장',
      'E2B 샌드박스 + Redis/arq Worker Queue + API 폴백으로 안전한 코드 실행과 데이터 수집 안정성 확보',
    ],
    stack: ['LangGraph', 'FastAPI', 'Redis', 'E2B', 'Cloudflare'],
    links: {},
    caseStudy: true,
    org: 'Quantisight',
  },
  {
    name: 'Hedge Decision Engine',
    category: 'AI · Finance',
    status: '진행중',
    group: 'featured',
    year: '2026',
    role: 'ML Engineer',
    description:
      '하나은행 공식 고시 환율 10년치와 매크로·크로스레이트 데이터를 결합해 USD/KRW 방향 예측 및 환헤지 의사결정 시그널을 실험하는 금융 AI 엔진입니다.',
    highlights: [
      '하나은행 공식 고시 환율 10년치 수집: 2,810일 · 289K quotes · 123,949개 15분봉 OHLC',
      'FRED·BOK ECOS·Polygon 기반 매크로/크로스레이트 포함 147개 피처 구축',
      '7종 서브모델 앙상블 + LightGBM MetaLearner로 4h honest holdout accuracy 67.75%, F1 71.05% 달성',
    ],
    stack: ['Python', 'PyTorch', 'LightGBM', 'Vertex AI'],
    links: {},
    caseStudy: true,
    media: {
      device: 'browser',
      label: 'decision-engine',
      shots: ['/projects/hedge/backtest.png'],
    },
  },
  {
    name: 'FinOrbit',
    category: 'Multi-Agent · Finance',
    status: '진행중',
    group: 'featured',
    year: '2026',
    role: 'AI Engineer',
    description:
      'TradingView 신호를 LangGraph 멀티 에이전트가 해석하고, ML 최적화 파라미터를 Pine Script에 자동 전달하는 AI 트레이딩 파이프라인입니다.',
    highlights: [
      'Planner·Risk Gate·Trader 에이전트로 신호 분석, 리스크 검증, 주문 생성을 단계별 분리',
      'FINORBIT:SYMBOL_PARAMETER Virtual Ticker API로 TradingView request.security() 연동',
      'ML 기반 RSI·BB·진입 임계값 동적 최적화 + HMAC 웹훅 검증·이벤트 소싱 기록',
    ],
    stack: ['FastAPI', 'LangGraph', 'OpenAI GPT-4', 'Pine Script', 'Docker'],
    links: {},
    caseStudy: true,
  },
  {
    name: 'Builder',
    category: 'Multi-Agent System',
    status: '심사중',
    group: 'featured',
    year: '2026',
    role: 'Creator',
    description:
      '아이디어 입력만으로 AI 팀이 기획, 디자인, 개발, 배포 산출물과 실행 가능한 앱 코드를 생성하는 멀티 에이전트 제품 개발 파이프라인입니다.',
    highlights: [
      'Google ADK 기반 5단계 파이프라인 + 4-에이전트 코드 생성팀 설계',
      '각 단계 승인/거절/수정요청, 롤백, 산출물 버전 관리로 Human-in-the-loop 구현',
      'WebSocket 로그 스트리밍, 토큰 비용 대시보드, 생성 앱 실행·ZIP 다운로드 지원',
    ],
    stack: ['Google ADK', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis'],
    links: { github: 'https://github.com/PlutoJoshua/Builder' },
  },
  {
    name: 'amuguna',
    category: 'Voice · Multimodal',
    status: '완료',
    group: 'featured',
    year: '2026',
    role: 'Developer · Kakao AI Ambassador',
    description:
      'Kanana-o 멀티모달 AI로 음성 톤과 메뉴판 이미지를 함께 해석해 "아무거나" 뒤의 숨은 선호를 찾아주는 Flutter 의사결정 앱입니다.',
    highlights: [
      'Mode A 음성 대화 + Mode B 메뉴판 Vision 분석으로 음식 선택 흐름 구현',
      '멀티턴 대화, 거부 메뉴 회피, 결정 유형 카드 4종, confetti 연출까지 MVP 완성',
      'BYO-key 라우팅 가드, SSE 스트리밍 파서, 디버그 로그 화면으로 공개 실행 가능성 확보',
    ],
    stack: ['Flutter', 'Dart', 'Kanana-o API', 'Riverpod', 'SSE'],
    links: { github: 'https://github.com/PlutoJoshua/amuguna' },
    media: {
      device: 'phone',
      shots: [
        '/projects/amuguna/home-light.png',
        '/projects/amuguna/chat-voice-light.png',
        '/projects/amuguna/menu-result-light.png',
        '/projects/amuguna/decision-card-light.png',
      ],
    },
  },

  // ───────── Open Source / Collaboration ─────────
  {
    name: 'FinAgent Investment Agent',
    category: 'Multi-Agent · Finance',
    status: '협업',
    group: 'opensource',
    year: '2026',
    role: 'Contributor · User Chat',
    description:
      'LangGraph 기반 개인화 투자 자문 멀티 에이전트(팀 프로젝트)에서 사용자 온보딩을 담당한 User Chat 에이전트를 구현했습니다.',
    highlights: [
      '자연어 KYC 인터뷰로 누락된 투자자 프로필(리스크 성향·소득·목표)을 수집하는 User Chat 노드 구현',
      'Pydantic 프로필 모델과 risk_tolerance_level Enum 등 strict schema로 데이터 무결성 확보',
      '대화 중 추출한 정보를 Supabase에 load/upsert 동기화하고 MemorySaver로 대화 맥락 유지',
    ],
    stack: ['LangGraph', 'Supabase', 'Pydantic', 'Python'],
    links: { github: 'https://github.com/FinAgent-Lab/FinAgent_Investment_Agent' },
    org: 'FinAgent-Lab',
  },
  {
    name: 'CodeGenius',
    category: 'LLM · EduTech',
    status: '완료',
    group: 'opensource',
    year: '2024',
    role: 'Team Lead · LLM Engineer',
    description:
      '비전공자를 위한 파이썬 학습 코딩 챗봇입니다. 팀장으로 ko-GPT2 파인튜닝과 Gemini API 연동 등 LLM 전반을 담당했습니다.',
    highlights: [
      'KoGPT2(skt/kogpt2-base-v2) 파인튜닝 + Gemini API로 파이썬·통계·Numpy·Pandas 질의응답 챗봇 구현',
      '학습 행동 데이터 수집 → 추가 학습 파이프라인으로 모델 성능을 지속 개선, Airflow 대시보드로 학습 경향 관리',
      'History 기능으로 날짜별 질문 키워드·답변을 저장하고 주간 인기 키워드 제공',
    ],
    stack: ['Python', 'PyTorch', 'KoGPT2', 'Gemini API', 'Django', 'Airflow'],
    links: { github: 'https://github.com/PlutoJoshua/CodeGenius_Project' },
    org: 'team project',
    media: {
      device: 'browser',
      label: 'codegenius',
      shots: ['/projects/codegenius/manual2.png', '/projects/codegenius/manual3.png'],
    },
  },
  {
    name: 'GenieNavi',
    category: 'RAG · QA Bot',
    status: '완료',
    group: 'opensource',
    year: '2024',
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
    name: '사내 AI 뉴스 자동화',
    category: 'AI Automation · Finance',
    status: '운영중',
    group: 'automation',
    year: '2025 –',
    role: 'AI Engineer',
    description:
      '금융 뉴스 수집, LLM 요약, 이미지 검색/생성, 블로그 포스팅까지 자동화해 회사 앱에 노출되는 금융 콘텐츠 파이프라인입니다.',
    highlights: [
      '2025년 6월 23일부터 300+일 운영, 현재는 주말 제외 daily 금융 뉴스 콘텐츠로 앱 노출',
      '뉴스 크롤링 → LLM 요약 → 이미지 검색/생성 → 네이버 블로그 업로드 → Slack 알림까지 end-to-end 자동화',
      'LLM·이미지 API 실패 시 대체 모델과 스톡 이미지 폴백으로 중단 없는 운영 흐름 설계',
    ],
    stack: ['Python', 'LangChain', 'Docker', 'Selenium', 'FastAPI'],
    links: {},
  },
  {
    name: 'NewsScrap',
    category: 'Automation Pipeline',
    status: '완료',
    group: 'automation',
    year: '2026',
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
    name: '사내 AI 어시스턴트',
    category: 'AI · FinTech',
    status: '진행중',
    group: 'automation',
    year: '2026',
    role: 'AI Engineer',
    description:
      'LangGraph 기반 라우팅 에이전트가 고객 CS, 내부 DB 검색, 업무 함수 실행을 분기 처리하는 사내 AI 어시스턴트입니다.',
    highlights: [
      'FAQ/RAG 기반 고객 CS 자동 응답과 문의 분류로 CS 관리 업무 20% 감소',
      '자연어 질의를 Text-to-SQL로 변환해 AWS RDS MySQL 검색 후 결과를 요약',
      'FastAPI REST/WebSocket, WAS 연동, FAISS 벡터 검색, AWS Secrets Manager 기반 배포 구성',
    ],
    stack: ['Python', 'LangGraph', 'FastAPI', 'FAISS', 'AWS'],
    links: {},
  },
  {
    name: 'instatoon Pipeline',
    category: 'Generative · Content',
    status: '진행중',
    group: 'automation',
    year: '2026',
    role: 'Creator',
    description:
      '로컬 AI로 캐릭터 일관성 있는 인스타툰 컷을 만들고, 나레이션·대사를 Canva Bulk Create용 표로 분리해 대량 제작하는 콘텐츠 파이프라인입니다.',
    highlights: [
      '인스타툰 1편 제작 시간을 3~5시간에서 대량 생성 기준 약 1시간으로 단축',
      '이미지와 텍스트를 완전 분리해 대사 수정 시 이미지 재생성 없이 Canva에서 재합성',
      '프롬프트·Pydantic·negative prompt·OCR 가드로 이미지 내 텍스트 누수 방어',
      'LLM 스토리보드 → SDXL/IP-Adapter/LoRA 이미지 → Canva Bulk Create XLSX 자동 생성',
    ],
    stack: ['Python', 'SDXL', 'diffusers', 'Ollama', 'EasyOCR'],
    links: {},
    caseStudy: true,
  },
  {
    name: 'WordPress Publishing Automation',
    category: 'Blog Ops · Automation',
    status: '운영중',
    group: 'automation',
    year: '2026 –',
    role: 'Creator',
    description:
      '직접 운영하는 from0lab.com 블로그의 원고, 실험 코드, 운영 문서를 관리하고 Markdown 글을 WordPress 초안으로 자동 발행하는 블로그 운영 파이프라인입니다.',
    highlights: [
      '2026년부터 주 2회 발행 루틴 운영, 약 26개 글과 실험 코드·차트 함께 관리',
      'Markdown → WordPress 초안 발행 시간을 약 1시간에서 3분으로 단축',
      '이미지 중복 업로드 방지, 카테고리/태그 자동 해석, HTML 변환, draft-first 검수 흐름 구현',
    ],
    stack: ['Python', 'WordPress REST API', 'Markdown', 'pydantic-settings'],
    links: { demo: 'https://from0lab.com' },
  },
  {
    name: 'STT & Summarization Tool',
    category: 'Speech AI · Productivity',
    status: '완료',
    group: 'automation',
    year: '2025',
    role: 'AI Engineer',
    description:
      '음성 파일을 텍스트로 변환하고 회의록·액션 아이템 형태로 요약해 공유하는 STT 기반 회의 기록 자동화 도구입니다.',
    highlights: [
      '실제 사내 회의 요약 업무에 사용, 회의록 작성 시간 60분 → 10분으로 단축',
      '누적 100건+ 회의 음성 처리, 회의·강의·인터뷰 요약 템플릿과 Markdown 결과 다운로드 제공',
      'OpenAI Whisper API, 로컬 Whisper, pyannote 화자 분리, OpenAI·Gemini·Ollama 요약 모델 교체 지원',
    ],
    stack: ['Python', 'Flask', 'Whisper', 'Gemini', 'Ollama'],
    links: { github: 'https://github.com/PlutoJoshua/stt' },
  },
];

export const projectOrder = {
  featured: [
    'Hedge Decision Engine',
    'Quantisight AI Finance Agent',
    'Builder',
    'amuguna',
    'FinOrbit',
  ],
  automation: [
    '사내 AI 어시스턴트',
    '사내 AI 뉴스 자동화',
    'STT & Summarization Tool',
    'WordPress Publishing Automation',
    'instatoon Pipeline',
    'NewsScrap',
  ],
};

// 섹션 메타. Projects 페이지에서 group 별로 묶어 렌더.
export const projectGroups = [
  {
    key: 'featured',
    label: 'Featured Projects',
    title: 'AI가 실제로 일하게 만드는 프로젝트들.',
    description:
      '금융 분석 에이전트, 환율 예측 엔진, 제품 개발 에이전트, 멀티모달 소비자 앱까지. 데모를 넘어 동작하는 시스템을 만듭니다.',
  },
  {
    key: 'opensource',
    label: 'Open Source · Collaboration',
    title: '함께 만든 오픈소스 에이전트들.',
    description: '팀·오픈소스로 진행한 멀티 에이전트, LLM, RAG 프로젝트입니다.',
  },
  {
    key: 'automation',
    label: 'Automation Experiments',
    title: '반복을 자동화하는 실험들.',
    description: '콘텐츠 파이프라인과 사내 워크플로 자동화 실험입니다.',
  },
];
