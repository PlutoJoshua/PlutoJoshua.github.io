import { ArrowUpRight, Bot, BrainCircuit, Code2, Globe2, Layers3, LineChart, Mail, Rocket, Sparkles } from 'lucide-react';

function GitHubMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.03c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.11-.75.41-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.18 1.18A10.98 10.98 0 0 1 12 6.06c.98 0 1.95.13 2.87.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.28 5.71.42.36.79 1.07.79 2.16v3.04c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

const links = [
  { label: 'GitHub', href: 'https://github.com/PlutoJoshua', icon: GitHubMark },
  { label: 'Blog', href: 'https://from0lab.com', icon: Globe2 },
  { label: 'Contact', href: 'mailto:hello@example.com', icon: Mail, muted: true },
];

const projects = [
  {
    name: 'CuUnit AI 챗봇',
    category: 'AI · FinTech',
    status: '진행중',
    description: 'MCP와 LangGraph를 기반으로 외환 서비스의 조회, 분석, 안내 흐름을 자동화하는 AI 어시스턴트입니다.',
    stack: ['MCP', 'LangGraph', 'Python', 'FX Data'],
    href: null,
  },
  {
    name: 'Builder',
    category: 'Multi-Agent System',
    status: '심사중',
    description: '기획부터 구현까지 이어지는 AI 멀티에이전트 시스템. 비개발자의 아이디어를 동작하는 MVP로 바꾸는 실험입니다.',
    stack: ['FastAPI', 'Next.js', 'Google ADK', 'LiteLLM'],
    href: 'https://github.com/PlutoJoshua/Builder',
  },
  {
    name: 'hedge-decision-engine',
    category: 'Forecasting',
    status: '진행중',
    description: '환율 예측과 환헤지 의사결정을 돕는 금융 모델링 엔진입니다.',
    stack: ['Python', 'TFT', 'N-BEATS', 'CRNN'],
    href: 'https://github.com/PlutoJoshua/hedge-decision-engine',
  },
  {
    name: 'FinAgent',
    category: 'Financial Agent',
    status: '완료',
    description: '금융 데이터를 읽고 투자 판단 흐름을 보조하는 LangChain 기반 AI 에이전트입니다.',
    stack: ['Python', 'LangChain'],
    href: 'https://github.com/PlutoJoshua/fin-agent',
  },
  {
    name: '유람 U,ram',
    category: 'AI Matching',
    status: '진행중',
    description: '사주 기반 관계 데이터를 활용해 더 자연스러운 인연 탐색을 돕는 AI 데이팅 서비스입니다.',
    stack: ['Flutter', 'AI', 'Recommendation'],
    href: 'https://github.com/PlutoJoshua/persnal_project_dating_app',
  },
  {
    name: 'amuguna',
    category: 'Voice AI',
    status: '완료',
    description: '음성 신호와 감정 단서를 활용해 사용자의 의사결정을 돕는 AI 도우미입니다.',
    stack: ['Flutter', 'Dart', 'Kanana-o API'],
    href: 'https://github.com/PlutoJoshua/amuguna',
  },
];

const skills = [
  { title: 'LLM Agent', items: ['LangChain', 'LangGraph', 'MCP', 'RAG', 'Prompt Engineering'], icon: Bot },
  { title: 'ML / Data', items: ['Python', 'PyTorch', 'TensorFlow', 'Pandas', 'NLP'], icon: BrainCircuit },
  { title: 'Product Engineering', items: ['FastAPI', 'Next.js', 'Flutter', 'Docker', 'AWS'], icon: Code2 },
  { title: 'Automation', items: ['Browser Automation', 'Web Scraping', 'Workflow Design', 'Evaluation'], icon: Layers3 },
];

const metrics = [
  ['6+', 'AI / Data projects'],
  ['4y+', 'Operations & public-sector programs'],
  ['140+', 'Companies served in education ops'],
  ['150+', 'SME consulting projects supported'],
];

function Pill({ children }) {
  return <span className="rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-sm text-muted">{children}</span>;
}

function SectionLabel({ children }) {
  return <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">{children}</p>;
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute left-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-1/4 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" />
      </div>

      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#top" className="font-semibold tracking-tight">Kim Soyoung<span className="text-accent">.</span></a>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          <a href="#projects" className="hover:text-ink">Projects</a>
          <a href="#skills" className="hover:text-ink">Skills</a>
          <a href="#next" className="hover:text-ink">Next</a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-24">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm text-muted shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-accent" />
            AI Engineer · Product Builder · PlutoJoshua
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            외환, 금융, 매칭 문제를 AI 제품으로 풀어냅니다.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            CuUnit에서 AI Engineer로 일하며 MCP, LangGraph, RAG, 금융 데이터를 연결해 실제 서비스 안에서 동작하는 AI 어시스턴트를 설계합니다. 반복 업무와 의사결정의 빈틈을 줄이는 제품을 만듭니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['LLM Agent', 'MCP', 'LangGraph', 'FinTech AI', 'Browser Automation', 'AI Matching'].map((item) => <Pill key={item}>{item}</Pill>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map(({ label, href, icon: Icon, muted }) => (
              <a
                key={label}
                href={href}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${muted ? 'border border-ink/10 text-muted hover:text-ink' : 'bg-ink text-white hover:-translate-y-0.5 hover:bg-accent'}`}
              >
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] border border-ink/10 bg-white/70 p-6 shadow-soft backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted">Currently</p>
          <h2 className="mt-4 text-3xl font-black">CuUnit AI Engineer</h2>
          <p className="mt-4 leading-7 text-muted">
            환율 예측 AI 시스템, MCP + LangGraph 기반 AI 에이전트, AI 연구과제 수행과 성과관리를 함께 다룹니다.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-line bg-paper/70 p-5">
                <div className="text-3xl font-black text-accent">{value}</div>
                <div className="mt-2 text-sm leading-5 text-muted">{label}</div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionLabel>About</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">모르는 것을 빠르게 배우고, 동작하는 형태로 증명합니다.</h2>
          <div className="space-y-5 text-lg leading-8 text-muted">
            <p>데이터 분석과 LLM 개발 경험 위에 금융 도메인, 운영 경험, 제품 구현을 연결하고 있습니다.</p>
            <p>관심사는 단순한 데모가 아니라 사용자의 요청, 데이터, 의사결정, 실행까지 이어지는 AI 시스템입니다. 특히 외환/금융, 매칭 서비스, 브라우저 자동화, 워크플로 자동화 문제를 좋아합니다.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Featured Projects</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">AI가 실제로 일하게 만드는 프로젝트들.</h2>
          </div>
          <LineChart className="hidden h-12 w-12 text-accent md:block" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="group rounded-[1.75rem] border border-ink/10 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-accent">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-black">{project.name}</h3>
                </div>
                <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-muted">{project.status}</span>
              </div>
              <p className="mt-5 min-h-28 leading-7 text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => <span key={item} className="rounded-full bg-paper px-3 py-1 text-xs text-muted">{item}</span>)}
              </div>
              {project.href ? (
                <a href={project.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-accent">
                  View project <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <p className="mt-6 text-sm font-semibold text-muted">Internal / private project</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionLabel>Skills</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, items, icon: Icon }) => (
            <div key={title} className="rounded-[1.75rem] border border-ink/10 bg-ink p-6 text-white shadow-soft">
              <Icon className="h-7 w-7 text-cyan" />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {items.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="next" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-ink/10 bg-white/80 p-8 shadow-soft backdrop-blur lg:p-12">
          <SectionLabel>What I’m Building Next</SectionLabel>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">AI로 사람과 전문가를 더 잘 연결하는 매칭 서비스를 구상하고 있습니다.</h2>
            <div className="space-y-5 text-lg leading-8 text-muted">
              <p>요청서 작성, 전문가 탐색, 견적 비교, 상담 요약, 후속 액션까지 AI가 도와주는 숨고형 서비스가 다음 관심사입니다.</p>
              <p>목표는 단순 추천이 아니라 사용자의 상황을 이해하고, 필요한 서비스를 구조화하고, 적합한 전문가와 연결하는 제품입니다.</p>
              <a href="https://github.com/PlutoJoshua" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white hover:bg-ink">
                Follow the build <Rocket className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto max-w-7xl px-6 pb-10 pt-12 text-sm text-muted lg:px-8">
        <div className="flex flex-col justify-between gap-3 border-t border-line pt-8 md:flex-row">
          <p>© 2026 Kim Soyoung · PlutoJoshua</p>
          <p>Built with React, Vite, Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
