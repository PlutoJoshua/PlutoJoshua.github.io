import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Orbit, X } from 'lucide-react';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';

const NAV = [
  { to: '/', label: 'About', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/career', label: 'Career' },
  { to: '/education', label: 'Education' },
];

function navClass({ isActive }) {
  return isActive
    ? 'text-ink dark:text-paper font-semibold'
    : 'text-muted hover:text-ink dark:text-muted-d dark:hover:text-paper';
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <NavLink
        to="/"
        aria-label={`${profile.name} home`}
        className="inline-flex items-center gap-1 text-ink transition hover:text-accent dark:text-paper"
        onClick={() => setOpen(false)}
      >
        <Orbit className="h-7 w-7" strokeWidth={1.75} />
        <span className="text-accent">.</span>
      </NavLink>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-6 text-sm md:flex">
        {NAV.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={navClass}>
            {item.label}
          </NavLink>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile controls */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="메뉴 열기"
          aria-expanded={open}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white/60 text-muted dark:border-line-d dark:bg-paper-d/60 dark:text-muted-d"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="absolute left-4 right-4 top-full z-30 flex flex-col gap-1 rounded-2xl border border-ink/10 bg-white/95 p-3 text-sm shadow-soft backdrop-blur dark:border-line-d dark:bg-paper-d/95 md:hidden">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2.5 ${
                  isActive
                    ? 'bg-ink/5 font-semibold text-ink dark:bg-white/10 dark:text-paper'
                    : 'text-muted dark:text-muted-d'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
