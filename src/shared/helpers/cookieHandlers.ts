export function prepareCookie(_email: string) {
	return `userEmail=${_email}; max-age=3600`;
}

export function deleteCookie() {
	document.cookie = 'userEmail=""; max-age=-1';
}

export function getCookie() {
	const cookies = document.cookie.split(';');
	let userEmail = '';

	cookies.forEach((cookie) => {
		const [name, value] = cookie.trim().split('=');
		if (name === 'userEmail') {
			userEmail = value;
			return null;
		}
		return null;
	});

	return userEmail;
}
