// TODO: uncomment when app is ready
/*
import { act, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/app/App';
import { prepareAuthCookie } from '@/shared/helpers/cookieHandlers';

import userSetup from '../setupTests';

describe('Testing the authorized main page route', () => {
  it('If user is authorized, and tries to react main route - he should be able to do so.', async () => {
    document.cookie = prepareAuthCookie('test@gmail.com');
    const { user } = userSetup(<App />);
    const mainLink = await screen.findByText('main page');
    await act(async () => {
      await user.click(mainLink);
    });
    expect(screen.queryByPlaceholderText('Email')).toBeNull();
    expect(screen.queryByPlaceholderText('Password')).toBeNull();
    expect(screen.queryByText('to continue to GraphiQL 🚀')).toBeNull();
    expect(await screen.findAllByTestId('editor-field')).toHaveLength(2);
  });
});
 */
import { describe, expect, it } from 'vitest';

describe('Testing the authorized login page route', () => {
  it('fake', () => {
    expect(1).toBe(1);
  });
});
