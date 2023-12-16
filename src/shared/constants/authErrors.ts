const AUTH_ERRORS = {
	INVALID_EMAIL: 'auth/invalid-email',
	INVALID_PASS: 'auth/invalid-credential',
	EMAIL_IN_USE: 'auth/email-already-in-use',
} as const;

export default AUTH_ERRORS;
