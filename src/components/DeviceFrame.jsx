// 프로젝트 스크린샷을 실제 기기처럼 감싸는 프레임.
// device: 'browser'(데스크탑/웹) | 'phone'(모바일)
export default function DeviceFrame({ device = 'browser', src, alt, label }) {
  if (device === 'phone') {
    return (
      <div className="mx-auto w-full max-w-[280px]">
        <div className="relative rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-soft dark:border-black dark:bg-black">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink dark:bg-black" />
          <img src={src} alt={alt} className="block w-full rounded-[1.8rem] object-cover" loading="lazy" />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-soft dark:border-line-d dark:bg-paper-d">
      <div className="flex items-center gap-2 border-b border-ink/10 bg-paper/80 px-4 py-2.5 dark:border-line-d dark:bg-ink-d/60">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        {label ? (
          <span className="ml-3 truncate rounded-md bg-ink/5 px-3 py-1 text-xs text-muted dark:bg-white/10 dark:text-muted-d">
            {label}
          </span>
        ) : null}
      </div>
      <img src={src} alt={alt} className="block w-full object-cover" loading="lazy" />
    </div>
  );
}
