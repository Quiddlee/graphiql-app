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

export default function userSetup(jsx: JSX.Element) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}
