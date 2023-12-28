import { describe, expect, it } from 'vitest';

import separateString from '@/components/DocsComp/lib/helpers/separateString';

describe('Testing the getTypeName helper function', () => {
	it('It should return proper string after recursively checking obj tree', () => {
		const outputOne = separateString('[ID!]!');
		expect(outputOne[0]).toMatch('[');
		expect(outputOne[1]).toMatch('ID');
		expect(outputOne[2]).toMatch('!]!');
		const outputTwo = separateString('ID');
		expect(outputTwo[0]).toMatch('');
		expect(outputTwo[1]).toMatch('ID');
		expect(outputTwo[2]).toMatch('');
		const outputThree = separateString('ID!');
		expect(outputThree[0]).toMatch('');
		expect(outputThree[1]).toMatch('ID');
		expect(outputThree[2]).toMatch('!');
	});
});
