import { createHashRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';
import WelcomePage from '@pages/WelcomePage';

import SignUpPage from './pages/SignUpPage';
import ROUTES from './shared/constants/routes';

const router = createHashRouter([
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
            element: <LoginPage />,
          },
          {
            path: ROUTES.SIGNUP,
            element: <SignUpPage />,
          },
          {
            index: true,
            element: <LoginPage />,
          },
        ],
      },
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
