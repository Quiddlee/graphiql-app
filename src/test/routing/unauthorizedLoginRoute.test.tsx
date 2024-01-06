import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import App from '@/app/App';

vi.mock('@components/loginReg/SubmitBtn', () => ({
  default: () => <button type="submit">LoginBtn</button>,
}));

describe('Testing the unauthorized login page route', () => {
  it('If user is unauthorized, he should be able to visit login page.', async () => {
    render(<App />);
    expect(screen.queryByPlaceholderText('Email')).toBeNull();
    expect(screen.queryByPlaceholderText('Password')).toBeNull();
    expect(screen.queryByText('to continue to GraphiQL 🚀')).toBeNull();
    const loginLink = await screen.findByText('login');
    await act(async () => {
      fireEvent.click(loginLink);
    });
    expect(await screen.findByPlaceholderText('Email')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('Password')).toBeInTheDocument();
    expect(await screen.findByText('to continue to GraphiQL 🚀')).toBeInTheDocument();
  });
});
