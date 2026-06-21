import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, X } from 'lucide-react';
import DeviceFrame from './DeviceFrame';
import GitHubMark from './GitHubMark';

// 카드 클릭 시 뜨는 상세 모달. media.shots 가 있으면 디바이스 프레임으로 실제 화면을 보여준다.
export default function ProjectModal({ project, onClose }) {
  const { media } = project;
  const shots = media?.shots || [];
  const [active, setActive] = useState(0);
  const { github, demo } = project.links || {};

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-ink/10 bg-paper p-6 shadow-soft dark:border-line-d dark:bg-paper-d sm:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-5 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-muted transition hover:text-ink dark:border-line-d dark:bg-paper-d/70 dark:text-muted-d dark:hover:text-paper"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-sm font-semibold text-accent">{project.category}</p>
        <h3 className="mt-1 pr-10 text-2xl font-black sm:text-3xl">{project.name}</h3>
        {(project.year || project.role) && (
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted dark:text-muted-d">
            {[project.year, project.role].filter(Boolean).join(' · ')}
          </p>
        )}

        {shots.length ? (
          <div className="mt-6">
            <DeviceFrame device={media.device} src={shots[active]} alt={`${project.name} 화면`} label={media.label} />
            {shots.length > 1 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {shots.map((s, i) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`스크린샷 ${i + 1}`}
                    className={`h-12 w-20 overflow-hidden rounded-lg border-2 transition ${
                      i === active ? 'border-accent' : 'border-ink/10 hover:border-ink/30 dark:border-line-d'
                    }`}
                  >
                    <img src={s} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        <p className="mt-6 break-keep leading-7 text-muted dark:text-muted-d">{project.description}</p>

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
            <span key={item} className="rounded-full bg-ink/5 px-3 py-1 text-xs text-muted dark:bg-white/10 dark:text-muted-d">
              {item}
            </span>
          ))}
        </div>

        {(github || demo) && (
          <div className="mt-6 flex flex-wrap gap-4 border-t border-ink/10 pt-5 dark:border-line-d">
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
        )}
      </div>
    </div>,
    document.body,
  );
}
