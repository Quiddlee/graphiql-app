import { EDITOR_DEFAULT_VALUE, EDITOR_TOOLS_DEFAULT_VALUE } from '@components/RequestEditor/lib/const/const';
import { View } from '@components/ViewList/context/types';

export const INITIAL_VIEWS: View[] = [
	{
		name: 'Welcome!',
		query: EDITOR_DEFAULT_VALUE,
		variables: EDITOR_TOOLS_DEFAULT_VALUE,
		headers: '',
	},
];

export const NEW_VIEW: View = {
	name: 'Empty view',
	query: '',
	variables: '',
	headers: '',
};
