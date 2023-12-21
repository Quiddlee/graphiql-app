function sumbitRequest(query: string, variables: string) {
	fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

export default sumbitRequest;
