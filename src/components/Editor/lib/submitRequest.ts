/* eslint-disable no-console */
import isValidJson from '@/shared/lib/helpers/isJsonValid';

async function sumbitRequest(currEndpoint: string, query: string, variables: string, headers: string) {
	const DEFAULT_HEADERS = '{"Content-Type": "application/json"}';
	const isHeadersEmpty = typeof headers !== 'string' || headers.trim().length === 0;
	const headersToParse = isHeadersEmpty ? DEFAULT_HEADERS : headers;

	if (!isHeadersEmpty && isValidJson(headersToParse)) {
		const msg = 'Invalid headers';
		return msg; // TODO maybe show toaster instead
	}

	try {
		const response = await fetch(currEndpoint, {
			method: 'POST',
			headers: JSON.parse(headersToParse),
			body: JSON.stringify({
				query,
				variables,
			}),
		});

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}

export default sumbitRequest;
