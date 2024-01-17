import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { prepareAuthCookie } from '@/shared/helpers/cookieHandlers';
import renderWithRouter from '@/test/helpers/RenderWithRouter';
import ROUTES from '@shared/constants/routes';

describe('Testing the authorized main page route', () => {
  it('If user is authorized, and tries to react main route - he should be able to do so.', async () => {
    document.cookie = prepareAuthCookie('test@gmail.com');
    renderWithRouter(null, [`/${ROUTES.MAIN}`]);

    expect(screen.queryByText('Log in')).toBeNull();
    expect(screen.queryByText('Sign up')).toBeNull();

    expect(screen.queryByPlaceholderText('Email')).toBeNull();
    expect(screen.queryByPlaceholderText('Password')).toBeNull();
    expect(screen.queryByText('to continue to GraphiQL 🚀')).toBeNull();
    expect(await screen.findAllByTestId('editor-field')).toHaveLength(3);
  });
});
