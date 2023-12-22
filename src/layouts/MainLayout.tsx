import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Nav from '@components/Nav/Nav';
import cn from '@shared/lib/helpers/cn';

const MainLayout = () => {
  return (
    <main
      data-testid="main-layout"
      className={cn(
        'grid h-screen origin-center transform-gpu grid-cols-[384px_1fr_0fr] grid-rows-[80px_1fr] gap-4 overflow-hidden px-4 pb-4',
      )}
    >
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
