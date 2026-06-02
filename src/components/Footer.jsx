import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 pb-10 pt-12 text-sm text-muted dark:text-muted-d lg:px-8">
      <div className="flex flex-col justify-between gap-3 border-t border-line pt-8 dark:border-line-d md:flex-row">
        <p>© 2026 {profile.name} · {profile.handle}</p>
        <p>Built with React, Vite, Tailwind CSS.</p>
      </div>
    </footer>
  );
}
