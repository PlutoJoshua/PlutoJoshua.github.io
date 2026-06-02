import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="relative mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center lg:px-8">
      <p className="text-7xl font-black text-accent">404</p>
      <h1 className="mt-4 text-3xl font-black tracking-tight">페이지를 찾을 수 없습니다.</h1>
      <p className="mt-4 text-muted dark:text-muted-d">주소가 잘못되었거나 페이지가 이동했을 수 있어요.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-accent dark:bg-paper dark:text-ink dark:hover:bg-accent dark:hover:text-white"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
}
