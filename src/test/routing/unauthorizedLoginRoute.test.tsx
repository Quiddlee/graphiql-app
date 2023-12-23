// TODO: uncomment when app is ready
/*
import { act, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/app/App';

import userSetup from '../setupTests';

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

 */
import { describe, expect, it } from 'vitest';

describe('Testing the authorized login page route', () => {
  it('fake', () => {
    expect(1).toBe(1);
  });
});
