import { SetStateAction } from 'react';

import introspectionQuery from '@/shared/constants/introspectionQuery';
import { DocsSchemaType } from '@/shared/types';

export default async function getEndpointSchema(
	endpoint: string,
	setter: (value: SetStateAction<DocsSchemaType>) => void,
) {
	const response = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(introspectionQuery),
	});
	if (response.ok && response.status === 200) {
		const res = await response.json();
		return setter(res.data.__schema);
	}
	return setter(null);
}
