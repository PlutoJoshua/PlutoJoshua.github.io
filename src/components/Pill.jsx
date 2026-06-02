export default function Pill({ children }) {
  return (
    <span className="rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-sm text-muted dark:border-line-d dark:bg-paper-d/60 dark:text-muted-d">
      {children}
    </span>
  );
}
