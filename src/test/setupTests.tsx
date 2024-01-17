import { forwardRef, PropsWithChildren } from 'react';

import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, expect, vi } from 'vitest';

import * as useEditor from '@components/Editor/lib/hooks/useEditor';
import * as useScreen from '@shared/lib/hooks/useScreen';

vi.spyOn(useScreen, 'default').mockReturnValue('desktop');

vi.spyOn(useEditor, 'default').mockReturnValue({
  query: [1, vi.fn()],
  variables: [2, vi.fn()],
  headers: [3, vi.fn()],
  invalidateKeys: vi.fn(),
});

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

window.IntersectionObserver = vi.fn().mockReturnValue({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn(),
} as unknown as IntersectionObserver);

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

vi.mock('@shared/ui/MenuItem', () => ({
  default: (props: { active?: boolean }) => {
    return <button {...{ ...props, active: 'true', ref: null }} type="button" />;
  },
}));

vi.mock('@components/loginReg/SubmitBtn', () => ({
  default: () => <button type="submit">Log in</button>,
}));

vi.mock('@shared/ui/FilledTonalButton', () => ({
  default: (props: { active?: boolean }) => {
    return <button {...{ ...props, active: 'true', ref: null }} type="button" />;
  },
}));

vi.mock('@components/loginReg/PassVisibilityIcon', () => ({
  default: () => <button type="button">click</button>,
}));

vi.mock('@components/Header/ui/ShowDocsBtn', () => ({
  default: (props: { onClick: () => void }) => (
    <button type="button" onClick={props.onClick}>
      show docs
    </button>
  ),
}));

vi.mock('@shared/ui/IconButton', () => ({
  default: (props: PropsWithChildren) => {
    return (
      <button type="button" {...props}>
        {props.children}
      </button>
    );
  },
}));

type OutlinedTextFieldPropsType = {
  placeholder: string;
  children: JSX.Element;
  name: string;
  'data-testid'?: string;
};

vi.mock('@/shared/ui/OutlinedTextField', () => ({
  default: forwardRef<HTMLInputElement, OutlinedTextFieldPropsType>(function TextFieldMock(props, _ref) {
    return (
      <label>
        <input placeholder={props.placeholder} name={props.name} ref={_ref} data-testid={props['data-testid']} />
        {props.children}
      </label>
    );
  }),
}));

vi.mock('firebase/auth', () => ({
  getAuth: () => {},
  signInWithEmailAndPassword: () => ({ user: { email: 'test@gmail.com' } }),
}));
