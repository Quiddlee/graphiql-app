import { describe, expect, it } from 'vitest';

import getTypeName from '@/components/DocsComp/lib/helpers/getTypeName';

const mockObjOne = {
	kind: 'NON_NULL',
	name: null,
	ofType: {
		kind: 'LIST',
		name: null,
		ofType: {
			kind: 'NON_NULL',
			name: null,
			ofType: {
				kind: 'SCALAR',
				name: 'ID',
				ofType: null,
			},
		},
	},
};

const mockObjTwo = {
	kind: 'INPUT_OBJECT',
	name: 'FilterCharacter',
	ofType: null,
};

const mockObjThree = {
	kind: 'NON_NULL',
	name: null,
	ofType: {
		kind: 'SCALAR',
		name: 'ID',
		ofType: null,
	},
};

describe('Testing the getTypeName helper function', () => {
	it('It should return proper string after recursively checking obj tree', () => {
		expect(getTypeName(mockObjOne)).toMatch('[ID!]!');
		expect(getTypeName(mockObjTwo)).toMatch('FilterCharacter');
		expect(getTypeName(mockObjThree)).toMatch('ID!');
	});
});
