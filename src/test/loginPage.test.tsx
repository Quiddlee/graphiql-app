import { PropsWithChildren } from 'react';

import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import App from '@/App';

import userSetup from './setupTests';

vi.mock('@components/loginReg/SubmitBtn', () => ({
  default: () => <button type="submit">Log in</button>,
}));

vi.mock('@components/loginReg/FormInput', () => ({
  default: (props: PropsWithChildren) => <input {...props} />,
}));

vi.mock('firebase/auth', () => ({
  getAuth: () => {},
  signInWithEmailAndPassword: () => ({ user: { email: 'test@gmail.com' } }),
}));

describe('Testing for login page', () => {
  it('Should render login page properly', async () => {
    const { user } = userSetup(<App />);
    const loginLink = await screen.findByText('login');
    await act(async () => {
      user.click(loginLink);
    });
    const emailInput = await screen.findByPlaceholderText('Email');
    const passInput = await screen.findByPlaceholderText('Password');
    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: 'asdrogachev@gmail.com' },
      });
      fireEvent.change(passInput, {
        target: { value: '698830Pa$$' },
      });
    });
    const submit = await screen.findByRole('button', { name: 'Log in' });
    waitFor(async () => {
      await user.click(submit);
    });
    expect((emailInput as HTMLInputElement).value).toMatch('asdrogachev@gmail.com');
    expect((passInput as HTMLInputElement).value).toMatch('698830Pa$$');
  });
});
