import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import renderWithRouter from '@/test/helpers/RenderWithRouter';
import ROUTES from '@shared/constants/routes';

vi.mock('@components/loginReg/SubmitBtn', () => ({
  default: () => <button type="submit">LoginBtn</button>,
}));

describe('Testing the unauthorized login page route', () => {
  it('If user is unauthorized, he should be able to visit login page.', async () => {
    renderWithRouter(null, [`/${ROUTES.AUTH}/${ROUTES.LOGIN}`]);
    expect(await screen.findByPlaceholderText('Email')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('Password')).toBeInTheDocument();
    expect(await screen.findByText('to continue to GraphiQL 🚀')).toBeInTheDocument();
  });
});
