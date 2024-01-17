import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { prepareAuthCookie } from '@/shared/helpers/cookieHandlers';
import renderWithRouter from '@/test/helpers/RenderWithRouter';
import ROUTES from '@shared/constants/routes';

describe('Testing the authorized login page route', () => {
  it('If user is authorized, and tries to react login route - he should be redirected to main page.', async () => {
    document.cookie = prepareAuthCookie('test@gmail.com');
    renderWithRouter(null, [`/${ROUTES.AUTH}/${ROUTES.LOGIN}`]);
    expect(screen.queryByPlaceholderText('Email')).toBeNull();
    expect(screen.queryByPlaceholderText('Password')).toBeNull();
    expect(screen.queryByText('to continue to GraphiQL 🚀')).toBeNull();
    expect(await screen.findAllByTestId('editor-field')).toHaveLength(3);
  });
});
