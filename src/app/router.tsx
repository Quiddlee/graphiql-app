import { createHashRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';
import WelcomePage from '@pages/WelcomePage';
import ROUTES from '@shared/constatns/routes';

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
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
    ],
  },
];

export const router = createHashRouter(routes);
