import { PropsWithChildren } from 'react';

import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { afterEach, expect, vi } from 'vitest';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

expect.extend(matchers);

afterEach(() => {
  cleanup();
  document.body.innerHTML = '';
});

window.ResizeObserver = vi.fn().mockReturnValue({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn(),
} as ResizeObserver);

window.getComputedStyle = vi.fn().mockReturnValue({
  height: '400px',
});

window.alert = vi.fn();

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => {
      return '';
    },
  }),
});

export default function userSetup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const internalsMock = () => ({
  setFormValue: vi.fn(),
  setValidity: vi.fn(),
});

Object.defineProperty(window.HTMLElement.prototype, 'attachInternals', { value: internalsMock });

vi.mock('@shared/ui/Tabs', () => ({
  default: (props: { active?: boolean }) => {
    return <div {...{ ...props, active: 'true', ref: null }} />;
  },
}));

vi.mock('@shared/ui/PrimaryTab', () => ({
  default: (props: { active?: boolean }) => {
    return <button {...{ ...props, active: 'true', ref: null }} type="button" />;
  },
}));

vi.mock('@components/loginReg/SubmitBtn', () => ({
  default: () => <button type="submit">Log in</button>,
}));

vi.mock('@components/loginReg/FormInput', () => ({
  default: (props: PropsWithChildren) => (
    <button type="button" {...props}>
      {props.children}
    </button>
  ),
}));

vi.mock('@components/loginReg/PassVisibilityIcon', () => ({
  default: () => <button type="button">click</button>,
}));

vi.mock('firebase/auth', () => ({
  getAuth: () => {},
  signInWithEmailAndPassword: () => ({ user: { email: 'test@gmail.com' } }),
}));
