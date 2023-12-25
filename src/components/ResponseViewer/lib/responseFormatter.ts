const responseFormatter = (response: string) => {
	const formattedResponse = response.replace(/\\r\\n/g, ' ');
	const jsonResponse = JSON.parse(formattedResponse);
	const finalResponse = JSON.stringify(jsonResponse, null, 2);
	return finalResponse;
};

export default responseFormatter;
