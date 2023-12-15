import { PropsWithChildren } from 'react';

import { act, cleanup, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import App from '@/App';

import userSetup from '../setupTests';

vi.mock('@components/loginReg/SubmitBtn', () => ({
  default: () => <button type="submit">Log in</button>,
}));

vi.mock('@components/loginReg/FormInput', () => ({
  default: (props: PropsWithChildren) => <input {...props} />,
}));

afterEach(() => {
  cleanup();
  document.body.innerHTML = '';
});

describe('Testing the unauthorized login page route', () => {
  it('If user is unauthorized, he should be able to visit login page.', async () => {
    const { user } = userSetup(<App />);
    expect(screen.queryByPlaceholderText('Email')).toBeNull();
    expect(screen.queryByPlaceholderText('Password')).toBeNull();
    expect(screen.queryByText('to continue to GraphiQL 🚀')).toBeNull();
    const loginLink = await screen.findByText('login');
    await act(async () => {
      user.click(loginLink);
    });
    expect(await screen.findByPlaceholderText('Email')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('Password')).toBeInTheDocument();
    expect(await screen.findByText('to continue to GraphiQL 🚀')).toBeInTheDocument();
  });
});
