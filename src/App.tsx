import { createHashRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';
import WelcomePage from '@pages/WelcomePage';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <WelcomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'mainpage',
        element: <MainPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
