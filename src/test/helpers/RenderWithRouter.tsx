import { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { routes as ROUTES } from '@/router/router';
import AuthProvider from '@shared/Context/AuthContext';
import LanguageProvider from '@shared/Context/LanguageContext';

function renderWithRouter(element?: ReactNode | null, initialEntries?: string[], initialIndex?: number) {
  const routes = element ? [{ path: '/', element }] : ROUTES;

  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });

  render(
    <AuthProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </AuthProvider>,
  );
}

export default renderWithRouter;
