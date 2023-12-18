import { useRef } from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Nav from '@components/Nav/Nav';
import urlParams from '@shared/constants/urlParams';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';

const MainLayout = () => {
  const { readUrl } = useUrl();
  const mainLayoutRef = useRef(null);

  const isResponseOpen = readUrl(urlParams.RESPONSE_OPEN) === 'true';

  return (
    <main
      ref={mainLayoutRef}
      className={cn(
        'grid h-screen origin-center transform-gpu grid-cols-[384px_1fr_0fr] grid-rows-[80px_1fr] gap-4 overflow-hidden px-4 pb-4 transition-all duration-200 ease-emphasized-accelerate',
        {
          'grid-cols-[384px_1fr_.6fr] duration-500 ease-emphasized-decelerate': isResponseOpen,
        },
      )}
    >
      <Header />
      <Nav />
      <Outlet context={mainLayoutRef} />
      <Footer />
    </main>
  );
};

export default MainLayout;
