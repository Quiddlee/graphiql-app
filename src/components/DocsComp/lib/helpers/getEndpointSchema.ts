import { Dispatch, SetStateAction } from 'react';

import introspectionQuery from '@/shared/constants/introspectionQuery';
import { DocsSchemaType } from '@/shared/types';

export default async function getEndpointSchema(
	endpoint: string,
	schemaSetter: (value: SetStateAction<DocsSchemaType>) => void,
	loadingSetter: Dispatch<SetStateAction<boolean>>,
) {
	try {
		loadingSetter(true);
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(introspectionQuery),
		});
		if (response.ok && response.status === 200) {
			const res = await response.json();
			loadingSetter(false);
			return schemaSetter(res.data.__schema);
		}
		loadingSetter(false);
		return schemaSetter(null);
	} catch (e) {
		loadingSetter(false);
		return schemaSetter(null);
	}
}
