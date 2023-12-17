import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { UrlParams } from '@shared/lib/types/types';

type MultipleQueries = Partial<Record<UrlParams, string | number>>;

type SetValue = number | string | boolean;

type SetUrl = {
	(query: UrlParams, value: SetValue): void;
	(multipleQueriesAndValues: MultipleQueries): void; // used for multiple queries at once (to avoid multiple renders and to update history only once for proper history navigation)
};

type ReadUrl = (query: UrlParams) => string;

/**
 * Returns an object with two methods, `readUrl` and `setUrl`, that can be used to read and set URL parameters.
 *
 * @return obj
 * @return {ReadUrl} obj.readUrl - A function that takes a query parameter and returns its value from the URL.
 * @return {SetUrl} obj.setUrl - A function that takes a query parameter and its value and sets it in the URL.
 */
function useUrl() {
	const [searchParams, setSearchParams] = useSearchParams();

	const readUrl: ReadUrl = useCallback((query: UrlParams) => searchParams.get(query) as string, [searchParams]);

	const setUrl: SetUrl = useCallback(
		(query: UrlParams | MultipleQueries, value?: SetValue) => {
			if (typeof query === 'object') {
				Object.entries(query).forEach(([queryKey, queryValue]) => searchParams.set(queryKey, String(queryValue)));
			}

			if (typeof query !== 'object' && value !== undefined) {
				searchParams.set(query, String(value));
			}

			setSearchParams(searchParams);
		},
		[searchParams, setSearchParams],
	);

	return { readUrl, setUrl };
}

export default useUrl;
