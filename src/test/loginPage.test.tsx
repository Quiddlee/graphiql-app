import { PropsWithChildren } from 'react';

import { act, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import renderWithRouter from '@/test/helpers/RenderWithRouter';
import LoginPage from '@pages/LoginPage';

vi.mock('@shared/ui/OutlinedTextField', () => ({
  default: (props: PropsWithChildren) => (
    <button type="button" {...{ ...props, ref: null }}>
      {props.children}
    </button>
  ),
}));

describe('Testing for login page', () => {
  it('Should render login page properly', async () => {
    renderWithRouter(<LoginPage />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passInput = screen.getByPlaceholderText('Password');
    await act(async () => {
      fireEvent.change(emailInput, {
        target: { value: 'asdrogachev@gmail.com' },
      });
      fireEvent.change(passInput, {
        target: { value: '698830Pa$$' },
      });
    });
    const submit = await screen.findByRole('button', { name: 'Log in' });
    await userEvent.click(submit);
    expect((emailInput as HTMLInputElement).value).toMatch('asdrogachev@gmail.com');
    expect((passInput as HTMLInputElement).value).toMatch('698830Pa$$');
  });
});
