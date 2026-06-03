import { ArrowUpRight, Star } from 'lucide-react';
import GitHubMark from './GitHubMark';

export default function ProjectCard({ project }) {
  const { github, demo } = project.links || {};
  const hasLink = github || demo;

  return (
    <article className="group flex flex-col rounded-[1.75rem] border border-ink/10 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:border-line-d dark:bg-paper-d/70">
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

      <p className="mt-4 leading-7 text-muted dark:text-muted-d">{project.description}</p>

      {project.highlights?.length ? (
        <ul className="mt-4 space-y-1.5 text-sm text-muted dark:text-muted-d">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-accent">›</span>
              <span>{h}</span>
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

      <div className="mt-auto pt-6">
        {hasLink ? (
          <div className="flex flex-wrap gap-4">
            {github ? (
              <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-accent dark:text-paper">
                <GitHubMark className="h-4 w-4" /> GitHub
              </a>
            ) : null}
            {demo ? (
              <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-accent dark:text-paper">
                Live <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        ) : (
          <p className="text-sm font-semibold text-muted dark:text-muted-d">
            {project.caseStudy ? 'Private · Case study on request' : 'Internal / private project'}
          </p>
        )}
      </div>
    </article>
  );
}
