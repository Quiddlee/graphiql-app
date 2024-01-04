import { createHashRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import LoginPage from '@/pages/LoginPage';
import SettignsPage from '@/pages/SettingsPage';
import SignUpPage from '@/pages/SignUpPage';
import ROUTES from '@/shared/constants/routes';
import MainPage from '@pages/MainPage/MainPage';
import WelcomePage from '@pages/WelcomePage/WelcomePage';

import UnauthAllowedOnly from './UnauthAllowedOnly';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
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
    ],
  },
];

const router = createHashRouter(routes);

export default router;
