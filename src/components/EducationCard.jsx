import { ExternalLink, GraduationCap } from 'lucide-react';

export default function EducationCard({ item }) {
  const { school, degree, field, period, note, thesis } = item;
  return (
    <div className="rounded-[1.75rem] border border-ink/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-line-d dark:bg-paper-d/70">
      <div className="flex items-start gap-4">
        <span className="rounded-2xl bg-accent/10 p-3 text-accent">
          <GraduationCap className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-xl font-black">{school}</h3>
          <p className="mt-1 font-semibold text-accent">
            {[degree, field].filter(Boolean).join(' · ')}
          </p>
          <p className="mt-1 text-sm text-muted dark:text-muted-d">
            {period.start} – {period.end}
          </p>
          {note ? <p className="mt-3 text-sm leading-6 text-muted dark:text-muted-d">{note}</p> : null}
          {thesis ? (
            <a
              href={thesis.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block rounded-2xl border border-ink/10 bg-paper/70 p-4 text-sm transition hover:border-accent/40 dark:border-line-d dark:bg-ink-d/50"
            >
              <span className="flex items-center gap-2 font-semibold text-ink dark:text-paper">
                Thesis <ExternalLink className="h-3.5 w-3.5 text-accent" />
              </span>
              <span className="mt-2 block leading-6 text-muted dark:text-muted-d">{thesis.title}</span>
              <span className="mt-1 block leading-6 text-muted dark:text-muted-d">{thesis.subtitle}</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
