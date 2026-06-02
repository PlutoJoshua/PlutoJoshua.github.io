// 화면 고정 그라데이션 blob 배경.
export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-70 dark:opacity-50">
      <div className="absolute left-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute right-[-8rem] top-1/4 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" />
    </div>
  );
}
