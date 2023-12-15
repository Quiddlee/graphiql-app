import { PropsWithChildren } from 'react';

import { act, cleanup, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import App from '@/App';
import { prepareAuthCookie } from '@/shared/helpers/cookieHandlers';

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

describe('Testing the authorized login page route', () => {
  it('If user is authorized, and tries to react login route - he should be redirected to main page.', async () => {
    document.cookie = prepareAuthCookie('test@gmail.com');
    const { user } = userSetup(<App />);
    const loginLink = await screen.findByText('login');
    await act(async () => {
      user.click(loginLink);
    });
    expect(screen.queryByPlaceholderText('Email')).toBeNull();
    expect(screen.queryByPlaceholderText('Password')).toBeNull();
    expect(screen.queryByText('to continue to GraphiQL 🚀')).toBeNull();
    expect(await screen.findByText('Here is my fancy main page!')).toBeInTheDocument();
  });
});
