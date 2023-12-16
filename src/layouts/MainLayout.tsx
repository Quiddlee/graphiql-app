import { Outlet } from 'react-router-dom';

import EditorToolsProvider from '@components/EditorTools/context/EditorToolsProvider';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Nav from '@components/Nav/Nav';

const MainLayout = () => {
  return (
    <EditorToolsProvider>
      <main className="grid h-screen grid-cols-[384px_1fr_.5fr] grid-rows-[80px_1fr] px-4 pb-4">
        <Header />
        <Nav />
        <section className="col-start-2 row-start-2 row-end-4">
          <Outlet />
        </section>
        <Footer />
      </main>
    </EditorToolsProvider>
  );
};

export default MainLayout;
