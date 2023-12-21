async function sumbitRequest(query: string, variables: string) {
	try {
		const response = await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
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
