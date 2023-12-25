/* eslint-disable no-continue */
const isLetter = (char: string) => {
	return /^[a-zA-Z]$/.test(char);
};

function formatGraphQLQuery(query: string) {
	const lines = query.split('\n');
	const trimmedLines = lines.map((line: string) => line.trim());
	const nonEmptyLines = trimmedLines.filter((line: string) => line !== '');
	const formattedQuery = nonEmptyLines.join('\n');
	return formattedQuery;
}

function removeTrailingSpaces(str: string) {
	return str.replace(/\s+$/, '');
}

const formatRequest = (input: string) => {
	const text = removeTrailingSpaces(input.replace(/\s+/g, ' '));
	let outputText = '';
	let indentationLevel = 0;
	let insideBrackets = false;
	const indentationSpaces = 2;

	for (let i = 0; i < text.length; i += 1) {
		const char = text[i];

		if (char === '{') {
			insideBrackets = true;
			outputText += `${char}${' '.repeat((indentationLevel + 1) * indentationSpaces)}`;
			indentationLevel += 1;
		} else if (char === '}') {
			insideBrackets = false;
			indentationLevel -= 1;
			outputText += `\n${' '.repeat(indentationLevel * indentationSpaces)}${char}`;
		} else if (isLetter(char) && insideBrackets && (text[i - 1] === ' ' || text[i - 1] === '{')) {
			outputText += `\n${' '.repeat(indentationLevel * indentationSpaces)}${char}`;
		} else {
			outputText += char;
		}
	}

	return outputText;
};

export default formatRequest;
