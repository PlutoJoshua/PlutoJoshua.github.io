import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const statuses = useMemo(() => ['전체', ...new Set(projects.map((p) => p.status))], []);
  const [filter, setFilter] = useState('전체');

  const visible = filter === '전체' ? projects : projects.filter((p) => p.status === filter);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <PageHeader
        label="Projects"
        title="AI가 실제로 일하게 만드는 프로젝트들."
        subtitle="데모를 넘어 사용자의 요청·데이터·의사결정·실행까지 이어지는 AI 시스템을 만듭니다."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {statuses.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              filter === s
                ? 'bg-ink text-white dark:bg-paper dark:text-ink'
                : 'border border-ink/10 text-muted hover:text-ink dark:border-line-d dark:text-muted-d dark:hover:text-paper'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
