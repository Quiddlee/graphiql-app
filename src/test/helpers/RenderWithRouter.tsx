import { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { routes as ROUTES } from '@/router/router';

function RenderWithRouter(element?: ReactNode | null, initialEntries?: string[], initialIndex?: number) {
  const routes = element ? [{ path: '/', element }] : ROUTES;

  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });
  render(<RouterProvider router={router} />);
}

export default RenderWithRouter;
