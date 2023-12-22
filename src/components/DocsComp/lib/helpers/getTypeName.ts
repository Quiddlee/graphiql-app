import { SchemaTypeFieldOfType } from '@/shared/types';

function getTypeName(type: SchemaTypeFieldOfType) {
	if (type?.name) return type?.name;

	const modifiers: string[] = [];

	if (type?.kind === 'NON_NULL') modifiers.push('!');
	if (type?.kind === 'LIST') modifiers.push('[]');

	function getOfTypeName(argOfType: SchemaTypeFieldOfType): number | string {
		if (argOfType?.name) {
			return modifiers.push(argOfType.name);
		}
		if (argOfType?.kind === 'NON_NULL') modifiers.push('!');
		if (argOfType?.kind === 'LIST') modifiers.push('[]');

		return getOfTypeName(argOfType?.ofType as SchemaTypeFieldOfType);
	}

	getOfTypeName(type?.ofType as SchemaTypeFieldOfType);

	const output = modifiers.reduceRight((acc, curr) => {
		if (curr === '!') return `${acc}!`;
		if (curr === '[]') return `[${acc}]`;
		return acc + curr;
	});

	return output;
}

export default getTypeName;
