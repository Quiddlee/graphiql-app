import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Nav from '@components/Nav/Nav';
import Controls from '@components/RequestEditor/ui/Controls';

const MainLayout = () => {
  return (
    <main
      data-testid="main-layout"
      className="relative grid h-screen grid-rows-[64px_auto_80px] text-sm sm:grid-cols-[80px_1fr] sm:grid-rows-[80px_1fr] sm:pb-3 sm:pr-3 sm:text-base lg:min-h-[initial] lg:grid-cols-[384px_1fr_0fr] lg:gap-4 lg:px-4 lg:pb-4 lg:pr-0"
    >
      <Header />
      <div className="row-start-3 row-end-4 sm:col-start-1 sm:row-start-auto sm:row-end-auto">
        <Nav />
      </div>
      <Outlet />
      <ToastContainer
        closeOnClick={false}
        closeButton={false}
        autoClose={2000}
        hideProgressBar
        pauseOnHover={false}
        position="bottom-center"
      />
      <div className="col-start-1 hidden lg:block">
        <Footer />
      </div>
      <Controls className="absolute bottom-36 right-6 z-10 sm:hidden" />
    </main>
  );
};

export default MainLayout;
