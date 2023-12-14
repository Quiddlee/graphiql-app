import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Nav from '@components/Nav/Nav';

const MainLayout = () => {
  return (
    <main className="grid h-screen grid-cols-[384px_1fr_1fr] grid-rows-[80px_1fr]">
      <Header />
      <Nav />
      <section className="col-start-2">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;