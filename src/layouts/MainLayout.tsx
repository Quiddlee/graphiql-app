import { Outlet, useLocation } from 'react-router-dom';
import { cssTransition, ToastContainer } from 'react-toastify';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Nav from '@components/Nav/Nav';
import Controls from '@components/RequestEditor/ui/Controls';
import ViewProvider from '@components/ViewList/context/ViewProvider';
import { SNACKBAR_AUTO_HIDE_DURATION } from '@shared/constants/const';
import ROUTES from '@shared/constants/routes';
import AuthProvider from '@shared/Context/AuthContext';
import cn from '@shared/lib/helpers/cn';
import useScreen from '@shared/lib/hooks/useScreen';
import useScrollbar from '@shared/lib/hooks/useScrollbar';

const SnackBarTransition = cssTransition({
  enter: 'animate-fade-in-snackbar',
  exit: 'animate-fade-out-snackbar',
});

const MainLayout = () => {
  const screenType = useScreen();
  const navContainerRef = useScrollbar<HTMLDivElement>(screenType === 'desktop');
  const { pathname } = useLocation();
  const isApp = pathname.slice(1) === ROUTES.MAIN || pathname.slice(1) === ROUTES.SETTINGS;

  return (
    <AuthProvider>
      <ViewProvider>
        <main
          data-testid="main-layout"
          className={cn('h-screen', {
            'relative grid grid-rows-[64px_auto_80px] text-sm text-on-surface-text sm:grid-cols-[80px_1fr] sm:grid-rows-[80px_1fr] sm:pb-3 sm:pr-3 sm:text-base lg:min-h-[initial] lg:grid-cols-[384px_1fr_0fr] lg:gap-4 lg:px-4 lg:pb-4 lg:pr-0':
              isApp,
          })}
        >
          {isApp && <Header />}
          {isApp && (
            <div
              ref={navContainerRef}
              className="row-start-3 row-end-4 sm:col-start-1 sm:row-start-auto sm:row-end-auto lg:overflow-auto"
            >
              <Nav />
            </div>
          )}
          <Outlet />
          {isApp && (
            <div className="col-start-1 hidden lg:block">
              <Footer />
            </div>
          )}
          <Controls className="absolute bottom-36 right-6 z-10 sm:hidden" />
        </main>

        <ToastContainer
          closeOnClick={false}
          closeButton={false}
          autoClose={SNACKBAR_AUTO_HIDE_DURATION}
          hideProgressBar
          pauseOnHover={false}
          draggable={false}
          limit={1}
          transition={SnackBarTransition}
          position="bottom-center"
          toastClassName="!text-inverse-on-surface origin-bottom !bg-inverse-surface max-w-[337px] !pl-4 !min-h-[48px] text-left"
          bodyClassName="text-sm font-normal relative !p-0 [&>div]:origin-bottom [&>div]:animate-fade-in-snackbar-body [&>div]:truncate w-full [&>div]:pe-16"
        />
      </ViewProvider>
    </AuthProvider>
  );
};

export default MainLayout;
