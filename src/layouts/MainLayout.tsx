import { Outlet } from 'react-router-dom';
import { cssTransition, ToastContainer } from 'react-toastify';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Nav from '@components/Nav/Nav';
import Controls from '@components/RequestEditor/ui/Controls';
import ViewProvider from '@components/ViewList/context/ViewProvider';
import useScrollbar from '@shared/lib/hooks/useScrollbar';

const SnackBarTransition = cssTransition({
  enter: 'animate-fade-in-snackbar',
  exit: 'animate-fade-out-snackbar',
});

const MainLayout = () => {
  const navContainerRef = useScrollbar<HTMLDivElement>();

  return (
    <ViewProvider>
      <main
        data-testid="main-layout"
        className="relative grid h-screen grid-rows-[64px_auto_80px] text-sm text-on-surface-text sm:grid-cols-[80px_1fr] sm:grid-rows-[80px_1fr] sm:pb-3 sm:pr-3 sm:text-base lg:min-h-[initial] lg:grid-cols-[384px_1fr_0fr] lg:gap-4 lg:px-4 lg:pb-4 lg:pr-0"
      >
        <Header />
        <div
          ref={navContainerRef}
          className="row-start-3 row-end-4 overflow-auto sm:col-start-1 sm:row-start-auto sm:row-end-auto"
        >
          <Nav />
        </div>
        <Outlet />
        <div className="col-start-1 hidden lg:block">
          <Footer />
        </div>
        <Controls className="absolute bottom-36 right-6 z-10 sm:hidden" />
      </main>

      <ToastContainer
        closeOnClick={false}
        closeButton={false}
        autoClose={4000}
        hideProgressBar
        pauseOnHover={false}
        draggable={false}
        limit={1}
        transition={SnackBarTransition}
        position="bottom-left"
        toastClassName="!text-inverse-on-surface origin-bottom !bg-inverse-surface !min-w-[336px] !pl-4 !min-h-[48px] text-left"
        bodyClassName="text-sm font-normal relative !p-0 [&>div]:origin-bottom [&>div]:animate-fade-in-snackbar-body [&>div]:truncate w-full [&>div]:pe-16"
      />
    </ViewProvider>
  );
};

export default MainLayout;
