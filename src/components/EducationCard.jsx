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
            <p className="mt-3 text-sm leading-6 text-muted dark:text-muted-d">
              Thesis:{' '}
              <a
                href={thesis.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-ink hover:text-accent dark:text-paper"
              >
                {thesis.title}
                <ExternalLink className="h-3.5 w-3.5 text-accent" />
              </a>
              <span className="block text-muted dark:text-muted-d">{thesis.subtitle}</span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
