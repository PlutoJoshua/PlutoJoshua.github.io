import { useState } from 'react';
import { ArrowUpRight, RotateCw, Star, Undo2 } from 'lucide-react';
import GitHubMark from './GitHubMark';
import DeviceFrame from './DeviceFrame';

export default function ProjectCard({ project }) {
  const { github, demo } = project.links || {};
  const hasLink = github || demo;
  const shots = project.media?.shots || [];
  const hasMedia = shots.length > 0;
  const [flipped, setFlipped] = useState(false);
  const [active, setActive] = useState(0);

  const toggle = () => hasMedia && setFlipped((f) => !f);

  return (
    <article className="group h-full [perspective:1400px]">
      <div
        className={`relative h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* ───── Front ───── */}
        <div
          onClick={hasMedia ? toggle : undefined}
          onKeyDown={
            hasMedia
              ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle();
                  }
                }
              : undefined
          }
          role={hasMedia ? 'button' : undefined}
          tabIndex={hasMedia ? 0 : undefined}
          aria-pressed={hasMedia ? flipped : undefined}
          className={`flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-white/70 p-6 shadow-sm backdrop-blur transition [backface-visibility:hidden] hover:-translate-y-1 hover:shadow-soft dark:border-line-d dark:bg-paper-d/70 ${
            hasMedia ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent' : ''
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-accent">{project.category}</p>
                {project.org ? (
                  <span className="rounded-full bg-ink/5 px-2 py-0.5 text-xs text-muted dark:bg-white/10 dark:text-muted-d">
                    {project.org}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-2 text-2xl font-black">{project.name}</h3>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1.5">
              <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-muted dark:bg-white/10 dark:text-muted-d">
                {project.status}
              </span>
              {project.stars ? (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-muted dark:text-muted-d">
                  <Star className="h-3.5 w-3.5 fill-current" /> {project.stars}
                </span>
              ) : null}
            </div>
          </div>

          {(project.year || project.role) && (
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted dark:text-muted-d">
              {[project.year, project.role].filter(Boolean).join(' · ')}
            </p>
          )}

          <p className="mt-4 break-keep leading-7 text-muted dark:text-muted-d">{project.description}</p>

          {project.highlights?.length ? (
            <ul className="mt-4 space-y-1.5 text-sm text-muted dark:text-muted-d">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-accent">›</span>
                  <span className="break-keep">{h}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full bg-paper px-3 py-1 text-xs text-muted dark:bg-white/5 dark:text-muted-d">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
            {hasLink ? (
              <div className="flex flex-wrap gap-4">
                {github ? (
                  <a href={github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-accent dark:text-paper">
                    <GitHubMark className="h-4 w-4" /> GitHub
                  </a>
                ) : null}
                {demo ? (
                  <a href={demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-accent dark:text-paper">
                    Live <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            ) : (
              <p className="text-sm font-semibold text-muted dark:text-muted-d">
                {project.caseStudy ? 'Private · Case study on request' : 'Internal / private project'}
              </p>
            )}
            {hasMedia ? (
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                <RotateCw className="h-4 w-4" /> 목업 보기
              </span>
            ) : null}
          </div>
        </div>

        {/* ───── Back (mockup only) ───── */}
        {hasMedia ? (
          <div
            onClick={toggle}
            className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-[1.75rem] border border-ink/10 bg-paper p-5 shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-line-d dark:bg-ink-d"
          >
            <DeviceFrame device={project.media.device} src={shots[active]} alt={`${project.name} 화면`} label={project.media.label} />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
              aria-label="앞면으로"
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-muted shadow-sm transition hover:text-ink dark:border-line-d dark:bg-paper-d/80 dark:text-muted-d dark:hover:text-paper"
            >
              <Undo2 className="h-4 w-4" />
            </button>

            {shots.length > 1 ? (
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1.5 shadow-sm backdrop-blur dark:bg-paper-d/70">
                {shots.map((s, i) => (
                  <button
                    key={s}
                    type="button"
                    aria-label={`스크린샷 ${i + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(i);
                    }}
                    className={`h-2 w-2 rounded-full transition ${i === active ? 'bg-accent' : 'bg-ink/20 hover:bg-ink/40 dark:bg-white/30'}`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
