import isValidJson from '@/shared/lib/helpers/isJsonValid';

async function sumbitRequest(query: string, variables: string, headers: string) {
	const DEFAULT_HEADERS = '{"Content-Type": "application/json"}';
	const isHeadersEmpty = typeof headers !== 'string' || headers.trim().length === 0;
	const headersToParse = isHeadersEmpty ? DEFAULT_HEADERS : headers;

	if (!isHeadersEmpty && isValidJson(headersToParse)) {
		console.log('invalid headers'); // TODO Show toaster invalid headers
	}

	try {
		const response = await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
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
