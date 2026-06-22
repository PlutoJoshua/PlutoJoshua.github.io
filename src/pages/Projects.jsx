import { RotateCw } from 'lucide-react';
import { projects, projectGroups, projectOrder } from '../data/projects';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import SectionLabel from '../components/SectionLabel';

export default function Projects() {
  function sortByDisplayOrder(items, groupKey) {
    const order = projectOrder[groupKey];
    if (!order) return items;
    return [...items].sort((a, b) => {
      const aIndex = order.indexOf(a.name);
      const bIndex = order.indexOf(b.name);
      const normalizedA = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
      const normalizedB = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;
      return normalizedA - normalizedB;
    });
  }

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <PageHeader
        label="Projects"
        title="AI Agent × Finance × Product."
        subtitle="금융 AI 에이전트부터 제품 개발 에이전트, 자동화 파이프라인까지 - 동작하는 시스템으로 증명합니다."
      />

      <div className="space-y-20">
        {projectGroups.map((group) => {
          const items = sortByDisplayOrder(
            projects.filter((p) => p.group === group.key),
            group.key,
          );
          if (!items.length) return null;
          return (
            <div key={group.key}>
              <div className="mb-8">
                <SectionLabel>{group.label}</SectionLabel>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{group.title}</h2>
                {group.description ? (
                  <p className="mt-4 break-keep leading-7 text-muted dark:text-muted-d">{group.description}</p>
                ) : null}
                {items.some((p) => p.media?.shots?.length) ? (
                  <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted/70 dark:text-muted-d/70">
                    <RotateCw className="h-3.5 w-3.5" /> 카드를 눌러 실제 화면을 확인해보세요
                  </p>
                ) : null}
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {items.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
