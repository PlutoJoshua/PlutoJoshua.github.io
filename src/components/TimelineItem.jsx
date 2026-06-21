function parseMonth(value) {
  if (!value || value === '현재') return null;
  const [year, month] = value.split('.').map(Number);
  if (!year || !month) return null;
  return { year, month };
}

function currentMonth() {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1 };
}

function formatDuration(startValue, endValue) {
  const start = parseMonth(startValue);
  const end = endValue === '현재' ? currentMonth() : parseMonth(endValue);
  if (!start || !end) return null;

  const startIndex = start.year * 12 + start.month;
  const endIndex = end.year * 12 + end.month;
  const totalMonths = Math.max(1, endIndex - startIndex + 1);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years && months) return `${years}y ${months}m`;
  if (years) return `${years}y`;
  return `${months}m`;
}

// Career 타임라인 한 항목. 왼쪽 세로선 + dot 구조.
export default function TimelineItem({ item }) {
  const { company, role, period, location, summary, highlights, stack, current } = item;
  const duration = formatDuration(period.start, period.end);
  return (
    <li className="relative pl-10">
      {/* 세로선 */}
      <span className="absolute left-[7px] top-2 h-full w-px bg-line dark:bg-line-d" aria-hidden="true" />
      {/* dot */}
      <span
        className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 ${
          current ? 'border-accent bg-accent' : 'border-line bg-paper dark:border-line-d dark:bg-paper-d'
        }`}
        aria-hidden="true"
      />
      <div className="pb-10">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-black">{role}</h3>
          {current ? (
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">현재</span>
          ) : null}
        </div>
        <p className="mt-1 font-semibold text-accent">{company}</p>
        <p className="mt-1 text-sm text-muted dark:text-muted-d">
          {period.start} – {period.end}
          {duration ? ` · ${duration}` : ''}
          {location ? ` · ${location}` : ''}
        </p>
        {summary ? <p className="mt-4 leading-7 text-muted dark:text-muted-d">{summary}</p> : null}
        {highlights?.length ? (
          <ul className="mt-3 space-y-1.5 text-sm text-muted dark:text-muted-d">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-accent">›</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {stack?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="rounded-full bg-ink/5 px-3 py-1 text-xs text-muted dark:bg-white/5 dark:text-muted-d">
                {s}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </li>
  );
}
