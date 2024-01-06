import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/app/App';
import { prepareAuthCookie } from '@/shared/helpers/cookieHandlers';

describe('Testing the authorized login page route', () => {
  it('If user is authorized, and tries to react login route - he should be redirected to main page.', async () => {
    document.cookie = prepareAuthCookie('test@gmail.com');
    render(<App />);
    const loginLink = await screen.findByText('login');
    await act(async () => {
      fireEvent.click(loginLink);
    });
    expect(screen.queryByPlaceholderText('Email')).toBeNull();
    expect(screen.queryByPlaceholderText('Password')).toBeNull();
    expect(screen.queryByText('to continue to GraphiQL 🚀')).toBeNull();
    expect(await screen.findAllByTestId('editor-field')).toHaveLength(3);
  });
});
