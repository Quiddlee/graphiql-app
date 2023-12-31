import { PropsWithChildren } from 'react';

import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import App from '@/app/App';

import userSetup from './setupTests';

vi.mock('@shared/ui/OutlinedTextField', () => ({
  default: (props: PropsWithChildren) => (
    <button type="button" {...{ ...props, ref: null }}>
      {props.children}
    </button>
  ),
}));

describe('Testing for sign up page', () => {
  it('Should render sign up page properly', async () => {
    const { user } = userSetup(<App />);
    const loginLink = await screen.findByText('login');
    await act(async () => {
      user.click(loginLink);
    });
    const singUpLink = await screen.findByText('Sign up');
    await act(async () => {
      user.click(singUpLink);
    });
    const emailInput = await screen.findByPlaceholderText('Email');
    const passInput = await screen.findByPlaceholderText('Password');
    const confPassInput = await screen.findByPlaceholderText('Confirm Password');
    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: 'asdrogachev@gmail.com' },
      });
      fireEvent.change(passInput, {
        target: { value: '698830Pa$$' },
      });
      fireEvent.change(confPassInput, {
        target: { value: '698830Pa$$' },
      });
    });
    const submit = await screen.findByRole('button', { name: 'Log in' });
    waitFor(async () => {
      await user.click(submit);
    });
    expect((emailInput as HTMLInputElement).value).toMatch('asdrogachev@gmail.com');
    expect((passInput as HTMLInputElement).value).toMatch('698830Pa$$');
    expect((confPassInput as HTMLInputElement).value).toMatch('698830Pa$$');
  });
});
