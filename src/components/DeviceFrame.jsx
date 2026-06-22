// 카드 뒷면(flip)에서 목업을 보여주는 기기 프레임.
// 부모는 definite height 를 가진 flex 컨테이너여야 한다(높이 기준 맞춤).
// device: 'browser'(가로/웹) | 'phone'(세로/모바일)
export default function DeviceFrame({ device = 'browser', src, alt, label }) {
  if (device === 'phone') {
    // 세로 스크린샷 -> 높이에 맞춰 축소. 스크린샷에 상태바가 포함되어 베젤만 둔다.
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-full max-w-full rounded-[1.6rem] border-[7px] border-ink object-contain shadow-soft dark:border-black"
      />
    );
  }

  // 가로/웹 -> 너비에 맞춤. 브라우저 크롬 바를 붙인다.
  return (
    <div className="w-full max-w-full overflow-hidden rounded-xl border border-ink/10 bg-white shadow-soft dark:border-line-d dark:bg-paper-d">
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-paper/80 px-3 py-2 dark:border-line-d dark:bg-ink-d/60">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        {label ? (
          <span className="ml-2 truncate rounded bg-ink/5 px-2 py-0.5 text-[10px] text-muted dark:bg-white/10 dark:text-muted-d">
            {label}
          </span>
        ) : null}
      </div>
      <img src={src} alt={alt} className="block w-full object-cover" loading="lazy" />
    </div>
  );
}
