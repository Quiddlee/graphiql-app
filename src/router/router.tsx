import { createHashRouter } from 'react-router-dom';

import ErrorFallback from '@/components/ErrorFallback/ErrorFallback';
import MainLayout from '@/layouts/MainLayout';
import LoginPage from '@/pages/LoginPage';
import Page404 from '@/pages/Page404';
import SettignsPage from '@/pages/SettingsPage';
import SignUpPage from '@/pages/SignUpPage';
import WelcomePage from '@/pages/WelcomePage';
import ROUTES from '@/shared/constants/routes';
import MainPage from '@pages/MainPage/MainPage';

import UnauthAllowedOnly from './UnauthAllowedOnly';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: ROUTES.WELCOME_PAGE,
        element: <WelcomePage />,
      },
      {
        path: ROUTES.AUTH,
        children: [
          {
            path: ROUTES.LOGIN,
            element: (
              <UnauthAllowedOnly>
                <LoginPage />
              </UnauthAllowedOnly>
            ),
          },
          {
            path: ROUTES.SIGNUP,
            element: (
              <UnauthAllowedOnly>
                <SignUpPage />
              </UnauthAllowedOnly>
            ),
          },
          {
            index: true,
            element: (
              <UnauthAllowedOnly>
                <LoginPage />
              </UnauthAllowedOnly>
            ),
          },
        ],
      },
      {
        path: ROUTES.MAIN,
        element: (
          // <AuthAllowedOnly>
          <MainPage />
          // </AuthAllowedOnly>
        ),
      },
      {
        path: ROUTES.SETTINGS,
        element: (
          // <AuthAllowedOnly>
          <SettignsPage />
          // </AuthAllowedOnly>
        ),
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
];

const router = createHashRouter(routes);

export default router;
