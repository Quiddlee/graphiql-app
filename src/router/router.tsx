import { createHashRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import WelcomePage from '@/pages/WelcomePage';
import ROUTES from '@/shared/constants/routes';
import Settings from '@components/Settings/Settings';
import MainPage from '@pages/MainPage/MainPage';

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
        element: <Settings />,
      },
    ],
  },
];

const router = createHashRouter(routes);

export default router;
