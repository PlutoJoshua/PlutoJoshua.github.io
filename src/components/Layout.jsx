import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BackgroundBlobs from './BackgroundBlobs';
import Header from './Header';
import Footer from './Footer';

// 라우트 전환 시 스크롤 최상단으로.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink dark:bg-ink-d dark:text-paper">
      <ScrollToTop />
      <BackgroundBlobs />
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
