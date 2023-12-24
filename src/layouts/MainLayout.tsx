import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Nav from '@components/Nav/Nav';

const MainLayout = () => {
  return (
    <main
      data-testid="main-layout"
      className="grid h-screen grid-cols-[80px_1fr] grid-rows-[80px_1fr] pb-3 pr-3 lg:min-h-[initial] lg:grid-cols-[384px_1fr_0fr] lg:gap-4 lg:px-4 lg:pb-4 lg:pr-0"
    >
      <Header />
      <Nav />
      <Outlet />
      <div className="col-start-1 hidden lg:block">
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
