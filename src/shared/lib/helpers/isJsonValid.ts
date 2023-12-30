const isValidJson = (jsonString: string) => {
	try {
		JSON.parse(jsonString);
		return true;
	} catch (error) {
		return false;
	}
};

export default isValidJson;
