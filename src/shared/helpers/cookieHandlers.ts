export function prepareAuthCookie(_email: string) {
	return `userEmail=${_email}; max-age=3600`;
}

export function deleteAuthCookie() {
	document.cookie = 'userEmail=""; max-age=-1';
}

export function isAuthCookie() {
	const cookies = document.cookie.split(';');
	let userEmail = false;

	cookies.forEach((cookie) => {
		const [name] = cookie.trim().split('=');
		if (name === 'userEmail') {
			userEmail = true;
			return null;
		}
		return null;
	});

	return userEmail;
}
