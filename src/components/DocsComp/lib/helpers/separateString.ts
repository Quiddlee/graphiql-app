function separateString(inputString: string) {
	const regex = /([^a-zA-Z]*)([a-zA-Z]+)([^a-zA-Z]*$)/;
	const matches = inputString.match(regex);

	if (matches) {
		const [, beforeLetters, letters, afterLetters] = matches;
		return [beforeLetters, letters, afterLetters];
	}
	return ['', inputString, ''];
}

export default separateString;
