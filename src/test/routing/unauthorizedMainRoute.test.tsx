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

describe('Testing the unauthorized main page route', () => {
  it('If user is unauthorized, and tries to visit main page - he should be redirected to login page.', async () => {
    const { user } = userSetup(<App />);
    expect(screen.queryByPlaceholderText('Email')).toBeNull();
    expect(screen.queryByPlaceholderText('Password')).toBeNull();
    expect(screen.queryByText('to continue to GraphiQL 🚀')).toBeNull();
    const mainLink = await screen.findByText('main page');
    await act(async () => {
      user.click(mainLink);
    });
    expect(await screen.findByPlaceholderText('Email')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('Password')).toBeInTheDocument();
    expect(await screen.findByText('to continue to GraphiQL 🚀')).toBeInTheDocument();
  });
});
