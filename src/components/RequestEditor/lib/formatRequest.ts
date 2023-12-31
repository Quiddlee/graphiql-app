/* eslint-disable class-methods-use-this */
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
