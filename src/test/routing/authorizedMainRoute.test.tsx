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

describe('Testing the authorized main page route', () => {
  it('If user is authorized, and tries to react main route - he should be able to do so.', async () => {
    document.cookie = prepareAuthCookie('test@gmail.com');
    const { user } = userSetup(<App />);
    const mainLink = await screen.findByText('main page');
    await act(async () => {
      user.click(mainLink);
    });
    expect(screen.queryByPlaceholderText('Email')).toBeNull();
    expect(screen.queryByPlaceholderText('Password')).toBeNull();
    expect(screen.queryByText('to continue to GraphiQL 🚀')).toBeNull();
    expect(await screen.findByText('Here is my fancy main page!')).toBeInTheDocument();
  });
});
