import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import renderWithRouter from '@/test/helpers/RenderWithRouter';
import ROUTES from '@shared/constants/routes';

describe('Testing the unauthorized main page route', () => {
  it('If user is unauthorized, and tries to visit main page - he should be redirected to login page.', async () => {
    renderWithRouter(null, [`/${ROUTES.MAIN}`]);

    expect(await screen.findByPlaceholderText('Email')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('Password')).toBeInTheDocument();
    expect(await screen.findByText('to continue to GraphiQL 🚀')).toBeInTheDocument();
  });
});
