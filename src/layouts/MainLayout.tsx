import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Nav from '@components/Nav/Nav';

const MainLayout = () => {
  return (
    <main className="grid h-screen grid-cols-[384px_1fr_400px] grid-rows-[80px_1fr] gap-4 px-4 pb-4">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
