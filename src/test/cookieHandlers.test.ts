import { describe, expect, it } from 'vitest';

import { deleteAuthCookie, isAuthCookie, prepareAuthCookie } from '@/shared/helpers/cookieHandlers';

describe('Testing of cookie handlers functions', () => {
	it('It should write a cookie to document cookies', () => {
		expect(document.cookie).toMatch('');
		document.cookie = prepareAuthCookie('test@gmail.com');
		expect(document.cookie).toMatch('userEmail=test@gmail.com');
	});
	it('It shoult delete a cookie after calling a function to do so', () => {
		document.cookie = prepareAuthCookie('test@gmail.com');
		expect(document.cookie).toMatch('userEmail=test@gmail.com');
		deleteAuthCookie();
		expect(document.cookie).toMatch('');
	});
	it('Function should retrieve auth cookie value from cookies', () => {
		expect(isAuthCookie()).toBe(false);
		document.cookie = prepareAuthCookie('test@gmail.com');
		expect(isAuthCookie()).toBe(true);
	});
});
