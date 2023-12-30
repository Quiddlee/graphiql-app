/* eslint-disable class-methods-use-this */
// const isLetter = (char: string) => {
// 	return /^[a-zA-Z]$/.test(char);
// };

// const removeSpacesAroundSymbols = (str: string) => {
// 	const regex = /\s*([(:!$])\s*/g;
// 	const resultString = str.replace(regex, '$1');
// 	return resultString;
// };

// const removeConsecSpaces = (str: string) => {
// 	return str.replace(/\s+/g, ' ');
// };

// const removeTrailingSpaces = (str: string) => {
// 	return str.trim();
// };

// const preFormatString = (str: string) => {
// 	let result = str;
// 	result = removeSpacesAroundSymbols(result);
// 	result = removeConsecSpaces(result);
// 	result = removeTrailingSpaces(result);
// 	return result;
// };

// const formatRequest = (input: string) => {
// 	const text = preFormatString(input);
// 	let outputText = '';
// 	let indentationLevel = 0;
// 	let insideBrackets = false;
// 	const indentationSpaces = 2;

// 	for (let i = 0; i < text.length; i += 1) {
// 		const char = text[i];

// 		if (char === '{') {
// 			insideBrackets = true;
// 			outputText += `${char}${' '.repeat((indentationLevel + 1) * indentationSpaces)}`;
// 			indentationLevel += 1;
// 		} else if (char === '}') {
// 			insideBrackets = false;
// 			indentationLevel -= 1;
// 			outputText += `\n${' '.repeat(indentationLevel * indentationSpaces)}${char}`;
// 		} else if (char === ':' && text[i + 1] !== ' ') {
// 			outputText += `${char} `;
// 		} else if (isLetter(char) && insideBrackets && (text[i - 1] === ' ' || text[i - 1] === '{')) {
// 			outputText += `\n${' '.repeat(indentationLevel * indentationSpaces)}${char}`;
// 		} else {
// 			outputText += char;
// 		}
// 	}

// 	return outputText;
// };

// export default formatRequest;

class RequestFormatter {
	insideBrackets: boolean;

	outputText: string;

	indentationLevel: number;

	indentationSpaces: number;

	constructor(indentationSpaces = 2) {
		this.indentationSpaces = indentationSpaces;
		this.outputText = '';
		this.indentationLevel = 0;
		this.insideBrackets = false;
	}

	isLetter(char: string) {
		return /^[a-zA-Z]$/.test(char);
	}

	removeSpacesAroundSymbols(input: string) {
		const regex = /\s*([(:!$])\s*/g;
		return input.replace(regex, '$1');
	}

	removeConsecSpaces(input: string) {
		return input.replace(/\s+/g, ' ');
	}

	removeTrailingSpaces(input: string) {
		return input.trim();
	}

	preFormatString(input: string) {
		let result = input;
		result = this.removeSpacesAroundSymbols(result);
		result = this.removeConsecSpaces(result);
		result = this.removeTrailingSpaces(result);
		return result;
	}

	formatRequest(input: string) {
		const text = this.preFormatString(input);

		for (let i = 0; i < text.length; i += 1) {
			const char = text[i];

			if (char === '{') {
				this.insideBrackets = true;
				this.outputText += `${char}${' '.repeat((this.indentationLevel + 1) * this.indentationSpaces)}`;
				this.indentationLevel += 1;
			} else if (char === '}') {
				this.insideBrackets = false;
				this.indentationLevel -= 1;
				this.outputText += `\n${' '.repeat(this.indentationLevel * this.indentationSpaces)}${char}`;
			} else if (char === ':' && text[i + 1] !== ' ') {
				this.outputText += `${char} `;
			} else if (this.isLetter(char) && this.insideBrackets && (text[i - 1] === ' ' || text[i - 1] === '{')) {
				this.outputText += `\n${' '.repeat(this.indentationLevel * this.indentationSpaces)}${char}`;
			} else {
				this.outputText += char;
			}
		}

		return this.outputText;
	}
}

export default RequestFormatter;
